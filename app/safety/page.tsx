import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, Lock, Phone, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SafetyTipsPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Safety Guidelines</h1>
        <p className="text-muted-foreground">Learn how to protect yourself and stay safe in various situations.</p>
      </div>

      <Tabs defaultValue="personal">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Safety</TabsTrigger>
          <TabsTrigger value="home">Home Safety</TabsTrigger>
          <TabsTrigger value="cyber">Cyber Safety</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>General Personal Safety Tips</CardTitle>
                </div>
                <CardDescription>Essential guidelines to keep yourself safe in public places</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Be Aware of Your Surroundings</h3>
                  <p className="text-sm text-muted-foreground">
                    Always stay alert and aware of your surroundings, especially in unfamiliar areas. Avoid using your
                    phone while walking in public places as it can distract you from potential dangers.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Travel in Groups When Possible</h3>
                  <p className="text-sm text-muted-foreground">
                    There's safety in numbers. Whenever possible, travel with friends or family, especially at night or
                    in less populated areas.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Share Your Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Let someone know where you're going and when you expect to return. Use location-sharing apps with
                    trusted friends or family members.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Trust Your Instincts</h3>
                  <p className="text-sm text-muted-foreground">
                    If a situation or person makes you uncomfortable, trust your gut feeling and remove yourself from
                    the situation. Your intuition is a powerful tool for personal safety.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Keep Emergency Contacts Handy</h3>
                  <p className="text-sm text-muted-foreground">
                    Save emergency contact numbers on speed dial. The Delhi Police emergency number is 112. You can also
                    contact Women Helpline at 1091.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <CardTitle>What to Do During an Emergency</CardTitle>
                </div>
                <CardDescription>Steps to take if you find yourself in a dangerous situation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Stay Calm and Assess the Situation</h3>
                  <p className="text-sm text-muted-foreground">
                    Try to remain calm and quickly assess your surroundings. Look for exits, safe spaces, or potential
                    help.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Call for Help</h3>
                  <p className="text-sm text-muted-foreground">
                    Dial 112 immediately for police assistance. If possible, provide your exact location and a brief
                    description of the situation.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Make Noise</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're being attacked, make as much noise as possible to attract attention. Shout "Fire!" instead
                    of "Help!" as people are more likely to respond.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Find a Safe Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Move to a public place with other people. Enter a store, restaurant, or approach a police booth if
                    nearby.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Use Self-Defense if Necessary</h3>
                  <p className="text-sm text-muted-foreground">
                    If you cannot escape and are physically threatened, use basic self-defense techniques to protect
                    yourself and create an opportunity to escape.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="home" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle>Securing Your Home</CardTitle>
                </div>
                <CardDescription>Essential measures to protect your home from break-ins and theft</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Strengthen Entry Points</h3>
                  <p className="text-sm text-muted-foreground">
                    Install sturdy doors with deadbolt locks. Reinforce windows with security film or bars. Consider
                    installing a peephole or video doorbell to see who's at your door.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Install a Security System</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider installing a home security system with alarms, motion sensors, and cameras. Even visible
                    security cameras can deter potential intruders.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Proper Lighting</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep the exterior of your home well-lit. Install motion-sensor lights around entry points and dark
                    corners of your property.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Be Careful with Keys</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't hide spare keys outside your home. Instead, leave a spare with a trusted neighbor or family
                    member. Change locks if keys are lost or stolen.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Know Your Neighbors</h3>
                  <p className="text-sm text-muted-foreground">
                    Build relationships with neighbors who can keep an eye on your property when you're away and report
                    suspicious activity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle>Emergency Preparedness</CardTitle>
                </div>
                <CardDescription>How to prepare for and respond to emergencies at home</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Create an Emergency Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop and practice an emergency evacuation plan with all household members. Designate meeting
                    points both near and away from your home.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Emergency Contacts</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep a list of emergency contacts including police (112), fire (101), ambulance (102), and trusted
                    neighbors or family members.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Emergency Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Prepare an emergency kit with essential supplies including first aid items, flashlights, batteries,
                    water, non-perishable food, and necessary medications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cyber" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <CardTitle>Online Privacy Protection</CardTitle>
                </div>
                <CardDescription>Tips to protect your personal information online</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Use Strong, Unique Passwords</h3>
                  <p className="text-sm text-muted-foreground">
                    Create complex passwords with a mix of letters, numbers, and symbols. Use different passwords for
                    different accounts and consider using a password manager.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Enable Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your accounts by enabling two-factor authentication whenever
                    possible.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Be Careful What You Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Limit the personal information you share on social media. Avoid posting about your current location,
                    travel plans, or expensive purchases.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Secure Your Devices</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your devices' operating systems and applications updated. Use reputable antivirus software and
                    enable firewalls.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Recognizing Online Scams</CardTitle>
                </div>
                <CardDescription>How to identify and avoid common cyber scams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Phishing Attempts</h3>
                  <p className="text-sm text-muted-foreground">
                    Be wary of emails or messages asking for personal information or directing you to suspicious
                    websites. Check email addresses carefully and don't click on unknown links.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Too-Good-To-Be-True Offers</h3>
                  <p className="text-sm text-muted-foreground">
                    Be skeptical of offers that seem too good to be true, such as free prizes, unrealistic discounts, or
                    unexpected winnings.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Urgent Requests</h3>
                  <p className="text-sm text-muted-foreground">
                    Be cautious of messages creating a sense of urgency, such as threats to close your account or claims
                    of suspicious activity that require immediate action.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Reporting Cybercrime</h3>
                  <p className="text-sm text-muted-foreground">
                    If you encounter cybercrime, report it to the National Cyber Crime Reporting Portal at
                    cybercrime.gov.in or call the Cybercrime Helpline at 1930.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-10 flex justify-center">
        <Button asChild size="lg">
          <Link href="/report">Report a Safety Concern</Link>
        </Button>
      </div>
    </div>
  )
}

