import Link from "next/link"
import { ArrowLeft, Camera, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportCrimePage() {
  return (
    <div className="container max-w-4xl py-10">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Report a Crime</h1>
        <p className="text-muted-foreground">
          Fill out the form below to report a crime incident. All reports are confidential and will be reviewed by our
          team.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Crime Report Form</CardTitle>
          <CardDescription>
            Please provide as much detail as possible to help us investigate the incident.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name (Optional)</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number (Optional)</Label>
                <Input id="contact" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address (Optional)</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
              <p className="text-xs text-muted-foreground">
                We'll only use this to follow up on your report if necessary.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Type of Crime</Label>
            <RadioGroup defaultValue="theft">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="theft" id="theft" />
                  <Label htmlFor="theft">Theft</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="assault" id="assault" />
                  <Label htmlFor="assault">Assault</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vandalism" id="vandalism" />
                  <Label htmlFor="vandalism">Vandalism</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fraud" id="fraud" />
                  <Label htmlFor="fraud">Fraud</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="harassment" id="harassment" />
                  <Label htmlFor="harassment">Harassment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>When did it happen?</Label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time (Approximate)</Label>
                <Input id="time" type="time" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="flex space-x-2">
              <Input id="location" placeholder="Enter the location of the incident" />
              <Button variant="outline" size="icon" className="shrink-0">
                <MapPin className="h-4 w-4" />
                <span className="sr-only">Use current location</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Enter an address or click the pin icon to use your current location.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description of the Incident</Label>
            <Textarea
              id="description"
              placeholder="Please provide a detailed description of what happened..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Evidence (Optional)</Label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-1">
                  <Camera className="h-6 w-6" />
                  <span>Upload Photos</span>
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-1">
                  <FileText className="h-6 w-6" />
                  <span>Upload Documents</span>
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              You can upload photos, videos, or documents related to the incident.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - For information only</SelectItem>
                <SelectItem value="medium">Medium - Requires attention</SelectItem>
                <SelectItem value="high">High - Urgent response needed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="anonymous" className="rounded border-gray-300" />
            <Label htmlFor="anonymous" className="text-sm font-normal">
              Submit this report anonymously
            </Label>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end w-full">
            <Button variant="outline" className="sm:w-auto">
              Cancel
            </Button>
            <Button className="sm:w-auto">Submit Report</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

