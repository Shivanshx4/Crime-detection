"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample data for crime hotspots in Delhi
const HOTSPOTS = [
  { id: 1, lat: 28.7041, lng: 77.1025, risk: "high", name: "Area A" },
  { id: 2, lat: 28.6139, lng: 77.209, risk: "medium", name: "Area B" },
  { id: 3, lat: 28.5355, lng: 77.391, risk: "high", name: "Area C" },
  { id: 4, lat: 28.6304, lng: 77.2177, risk: "low", name: "Area D" },
  { id: 5, lat: 28.6129, lng: 77.2295, risk: "medium", name: "Area E" },
]

export default function CrimeMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedHotspot, setSelectedHotspot] = useState<(typeof HOTSPOTS)[0] | null>(null)

  // This would be replaced with actual map implementation using Leaflet or Google Maps
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleHotspotClick = (hotspot: (typeof HOTSPOTS)[0]) => {
    setSelectedHotspot(hotspot)
  }

  return (
    <div className="relative h-full w-full bg-gray-100 rounded-xl overflow-hidden">
      <div ref={mapRef} className="h-full w-full">
        {!mapLoaded ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            {/* Map placeholder - would be replaced with actual map */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-cover bg-center opacity-50"></div>

            {/* Crime hotspots */}
            {HOTSPOTS.map((hotspot) => (
              <button
                key={hotspot.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                style={{
                  left: `${((hotspot.lng - 77.1025) / (77.391 - 77.1025)) * 100}%`,
                  top: `${((hotspot.lat - 28.5355) / (28.7041 - 28.5355)) * 100}%`,
                }}
                onClick={() => handleHotspotClick(hotspot)}
              >
                <div
                  className={`flex items-center justify-center h-6 w-6 rounded-full 
                  ${
                    hotspot.risk === "high"
                      ? "bg-red-500"
                      : hotspot.risk === "medium"
                        ? "bg-orange-400"
                        : "bg-yellow-300"
                  } 
                  text-white animate-pulse`}
                >
                  <MapPin className="h-4 w-4" />
                </div>
              </button>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-md shadow-md">
              <div className="text-xs font-medium mb-1">Risk Level</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="text-xs">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <span className="text-xs">Low</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hotspot details card */}
      {selectedHotspot && (
        <Card className="absolute bottom-4 right-4 w-64 shadow-lg">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{selectedHotspot.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Risk Level:{" "}
                  <span
                    className={`font-medium 
                    ${
                      selectedHotspot.risk === "high"
                        ? "text-red-500"
                        : selectedHotspot.risk === "medium"
                          ? "text-orange-400"
                          : "text-yellow-500"
                    }`}
                  >
                    {selectedHotspot.risk.charAt(0).toUpperCase() + selectedHotspot.risk.slice(1)}
                  </span>
                </p>
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setSelectedHotspot(null)}>
                ×
              </Button>
            </div>
            <div className="mt-2 text-xs">
              <p>Recent incidents: 12</p>
              <p>Patrol frequency: High</p>
              <Button size="sm" className="mt-2 w-full text-xs">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

