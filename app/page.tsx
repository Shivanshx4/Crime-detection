import Link from "next/link"
import { MapPin, Phone, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import CrimeMap from "@/components/crime-map"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">SafetyWatch Delhi</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/report" className="text-sm font-medium">
              Report Crime
            </Link>
            <Link href="/cybercrime" className="text-sm font-medium">
              Cybercrime
            </Link>
            <Link href="/safety" className="text-sm font-medium">
              Safety Tips
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            Emergency: 112
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Phone className="h-4 w-4" />
            <span className="sr-only">Emergency</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Predict. Prevent. Protect.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Using advanced machine learning to predict crime hotzones and keep Delhi safe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/report">
                    <Button className="w-full min-[400px]:w-auto">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Report a Crime
                    </Button>
                  </Link>
                  <Link href="/safety">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      <Shield className="mr-2 h-4 w-4" />
                      Safety Guidelines
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
                  <div className="relative h-full w-full">
                    <CrimeMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines advanced technology with community engagement to create a safer Delhi.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Crime Hotzone Prediction</h3>
                  <p className="text-muted-foreground">
                    Our ML models analyze historical data to predict areas with high probability of criminal activity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Crime Reporting</h3>
                  <p className="text-muted-foreground">
                    Report incidents near your location, including cybercrimes, with detailed information and evidence.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Safety Guidelines</h3>
                  <p className="text-muted-foreground">
                    Learn how to protect yourself during various types of criminal activities with our expert safety
                    tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Emergency Helpline
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Immediate Assistance Available 24/7
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  In case of emergency, call our helpline number for immediate assistance. Our trained professionals are
                  available round the clock.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 112
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Cybercrime</div>
                <h3 className="text-2xl font-bold">Report Online Crimes</h3>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Cybercrime is on the rise. Report online fraud, hacking, identity theft, and other cybercrimes through
                  our dedicated portal.
                </p>
                <Link href="/cybercrime">
                  <Button variant="outline" size="lg">
                    Report Cybercrime
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">SafetyWatch Delhi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Working together for a safer Delhi. Our platform uses machine learning to predict and prevent crime.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="text-muted-foreground hover:text-foreground">
                    Report Crime
                  </Link>
                </li>
                <li>
                  <Link href="/cybercrime" className="text-muted-foreground hover:text-foreground">
                    Cybercrime
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/safety" className="text-muted-foreground hover:text-foreground">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} SafetyWatch Delhi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

