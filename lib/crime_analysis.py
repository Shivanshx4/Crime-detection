import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report
from sklearn.preprocessing import LabelEncoder
import folium
import datetime as dt
import os

def load_and_preprocess_data(file_path='dataset/crime_dataset.csv'):
    # Load dataset
    df = pd.read_csv(file_path)
    
    # Handle missing values
    df['Investigation Status'] = df['Investigation Status'].fillna('Unknown')
    df['Case Number'] = df['Case Number'].fillna('Unknown')
    df['Comments'] = df['Comments'].fillna('Missing information')
    
    # Convert timestamps to datetime components
    df['Time'] = pd.to_datetime(df['Time'], format='%H:%M').dt.strftime('%H:%M')
    df['Hour'] = pd.to_datetime(df['Time'], format='%H:%M').dt.hour
    df['TimeOfDay'] = pd.cut(df['Hour'],
                            bins=[-1, 6, 12, 18, 24],
                            labels=['Night', 'Morning', 'Afternoon', 'Evening'])
    
    # Convert dates to day of week
    df['Date'] = pd.to_datetime(df['Date'])
    df['DayOfWeek'] = df['Date'].dt.day_name()
    df['Month'] = df['Date'].dt.month_name()
    df['Year'] = df['Date'].dt.year
    
    # Create location density scores
    location_counts = df['Location'].value_counts()
    df['LocationDensity'] = df['Location'].map(location_counts)
    
    # Crime severity mapping
    crime_severity = {
        'theft': 2,
        'robbery': 3,
        'sexual harassement': 4,
        'assualt murders': 5,
        'rape': 4,
        'gangrape': 5,
        'murder': 5
    }
    
    # Create target variable
    df['SeverityScore'] = df['Crime Type'].map(crime_severity).fillna(3)
    
    # Base risk score calculation
    df['BaseRiskScore'] = df['SeverityScore'] * (1 + np.log1p(df['LocationDensity']))
    
    # Create normalized risk levels
    risk_bins = pd.qcut(df['BaseRiskScore'], q=4, duplicates='drop')
    df['RiskLevel'] = risk_bins.cat.codes + 1  # Convert to 1-based indexing
    
    # Create feature set
    X = df[['Hour', 'DayOfWeek', 'Month', 'SeverityScore', 'LocationDensity']]
    
    # Encode categorical variables
    label_encoders = {}
    for column in X.select_dtypes(include='object').columns:
        le = LabelEncoder()
        X[column] = le.fit_transform(X[column].astype(str))
        label_encoders[column] = le
    
    # Target variable
    y = df['RiskLevel']
    
    return X, y, df, label_encoders

def train_model():
    X, y, df, label_encoders = load_and_preprocess_data()
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Train model
    model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=3)
    model.fit(X_train, y_train)
    
    # Evaluate model
    y_pred = model.predict(X_test)
    metrics = classification_report(y_test, y_pred, output_dict=True)
    
    # Save model artifacts
    os.makedirs('models', exist_ok=True)
    np.save('models/feature_names.npy', X.columns)
    np.save('models/label_encoders.npy', label_encoders)
    
    return model, X, y, df, metrics

def create_hotzone_map(df):
    # Sample location coordinates (would need real geolocation data)
    location_coords = {
        'DELHI CANTT': [28.6353, 77.2221],
        'GANDHI NAGAR': [28.6815, 77.2411],
        'KALYANPURI': [28.6618, 77.3258],
        'MAYURVIHAR': [28.5815, 77.3142],
        'NAJAFGARH': [28.5467, 77.0930],
        'PASCHIM VIHAR': [28.6410, 77.1018],
        'SARITA VIHAR': [28.5245, 77.3145]
    }
    
    # Calculate risk scores per location
    location_risk = df.groupby('Location')['BaseRiskScore'].mean().reset_index()
    
    # Create base map
    m = folium.Map(location=[28.6448, 77.2167], zoom_start=11)
    
    # Add risk zones
    for _, row in location_risk.iterrows():
        loc = row['Location']
        risk_score = row['BaseRiskScore']
        
        if loc in location_coords:
            color = 'green'
            if risk_score > 4:
                color = 'red'
            elif risk_score > 3:
                color = 'orange'
            elif risk_score > 2:
                color = 'yellow'
                
            folium.CircleMarker(
                location=location_coords[loc],
                radius=10,
                popup=f"{loc}: {risk_score:.2f}",
                color=color,
                fill=True,
                fill_color=color
            ).add_to(m)
    
    # Save map
    os.makedirs('public/maps', exist_ok=True)
    m.save('public/maps/hotzone_map.html')
    return 'public/maps/hotzone_map.html'

# Example usage if running standalone
if __name__ == "__main__":
    model, X, y, df, metrics = train_model()
    map_path = create_hotzone_map(df)
    print(f"Model trained. Metrics: {metrics}")
    print(f"Hotzone map saved to {map_path}")
