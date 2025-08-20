import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CybercrimePage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Report Cybercrime</h1>
        <p className="text-muted-foreground">
          Report online fraud, hacking, identity theft, and other cybercrimes through our dedicated portal.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Types of Cybercrime
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="font-medium">Online Fraud</p>
              <p className="text-muted-foreground mb-2">Financial scams, fake shopping websites, investment fraud</p>

              <p className="font-medium">Identity Theft</p>
              <p className="text-muted-foreground mb-2">Unauthorized use of personal information</p>

              <p className="font-medium">Hacking</p>
              <p className="text-muted-foreground mb-2">Unauthorized access to accounts or devices</p>

              <p className="font-medium">Online Harassment</p>
              <p className="text-muted-foreground mb-2">Cyberbullying, stalking, threats</p>

              <p className="font-medium">Data Breach</p>
              <p className="text-muted-foreground">Unauthorized access to sensitive information</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
              <p>
                For immediate assistance with cybercrime, call the National Cybercrime Helpline at{" "}
                <span className="font-medium">1930</span>.
              </p>
              <p>
                You can also report directly to the National Cyber Crime Reporting Portal at{" "}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  className="text-primary hover:underline"
                  rel="noreferrer"
                >
                  cybercrime.gov.in
                </a>
              </p>
              <p>
                Keep all evidence related to the cybercrime, including screenshots, emails, messages, and transaction
                details.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Cybercrime Report Form</CardTitle>
              <CardDescription>
                Please provide details about the cybercrime incident you experienced or witnessed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="crime-type">Type of Cybercrime</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of cybercrime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fraud">Online Fraud</SelectItem>
                    <SelectItem value="identity-theft">Identity Theft</SelectItem>
                    <SelectItem value="hacking">Hacking</SelectItem>
                    <SelectItem value="harassment">Online Harassment</SelectItem>
                    <SelectItem value="data-breach">Data Breach</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="platform">Platform/Website/App Where Incident Occurred</Label>
                <Input id="platform" placeholder="e.g., Facebook, Amazon, Gmail" />
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
                <Label htmlFor="financial-loss">Financial Loss (if any)</Label>
                <Input id="financial-loss" placeholder="Amount in INR (if applicable)" />
              </div>

              <div className="space-y-2">
                <Label>Evidence (Optional)</Label>
                <Button variant="outline" className="w-full h-24 flex flex-col items-center justify-center gap-1">
                  <FileText className="h-6 w-6" />
                  <span>Upload Screenshots/Documents</span>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Upload screenshots of messages, emails, transaction details, or any other evidence related to the
                  cybercrime.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="consent" className="rounded border-gray-300" />
                <Label htmlFor="consent" className="text-sm font-normal">
                  I consent to the sharing of this information with relevant law enforcement agencies.
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
      </div>
    </div>
  )
}

