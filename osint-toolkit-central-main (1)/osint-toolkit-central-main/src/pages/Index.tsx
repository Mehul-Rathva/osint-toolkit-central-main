
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Shield, Search, Database, Phone, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Tool categories for organization and future filtering
const categories = {
  "Law Enforcement": "bg-blue-100 text-blue-800",
  "Device Analysis": "bg-green-100 text-green-800", 
  "Network & IP": "bg-purple-100 text-purple-800",
  "Financial": "bg-orange-100 text-orange-800",
  "Social Media": "bg-pink-100 text-pink-800",
  "Location Services": "bg-cyan-100 text-cyan-800",
  "General Tools": "bg-gray-100 text-gray-800"
};

const tools = [
  { title: "All State FIR Download", description: "Access FIR records from all states", icon: Shield, category: "Law Enforcement", url: "/state-fir-portals", isInternal: true },
  { title: "IMEI Check Tools", description: "Verify mobile device IMEI numbers", icon: Phone, category: "Device Analysis", url: "/imei-check-tools", isInternal: true },
  { title: "Law Enforcement Request Portals", description: "Official portals for law enforcement requests", icon: Shield, category: "Law Enforcement", url: "/law-enforcement-portals", isInternal: true },
  { title: "IP Address Finder Tools", description: "Locate and analyze IP addresses", icon: Search, category: "Network & IP", url: "/ip-address-tools", isInternal: true },
  { title: "Nodal Officer Directory", description: "Contact information for nodal officers", icon: Database, category: "Law Enforcement", url: "/nodal-officer-directory", isInternal: true },
  { title: "Government OSINT Toolkit", description: "Open source intelligence tools", icon: Search, category: "General Tools", url: "/osint-toolkit", isInternal: true },
  { title: "Crypto Investigation Tools", description: "Cryptocurrency investigation utilities", icon: Database, category: "Financial", url: "/cryptocurrency-analysis-tools", isInternal: true },
  { title: "Image/Video Analysis Toolkit", description: "Analyze multimedia content", icon: Search, category: "Device Analysis", url: "/image-video-analysis-toolkit", isInternal: true },
  { title: "Mobile Number / SMS Tools", description: "Mobile number verification and SMS tools", icon: Phone, category: "Device Analysis", url: "/mobile-number-sms-tools", isInternal: true },
  { title: "Online Cyber Crime Complaint Portal", description: "Report cyber crimes online", icon: Shield, category: "Law Enforcement", url: "/online-cyber-crime-complaint-portal", isInternal: true },
  { title: "Social Media Monitoring", description: "Monitor social media platforms", icon: Search, category: "Social Media", url: "/social-media-monitoring", isInternal: true },
  { title: "Blackbird OSINT Dashboard", description: "Comprehensive OSINT investigation", icon: Database, category: "General Tools", url: "/blackbird-osint-dashboard", isInternal: true },
  { title: "Image/Video Metadata Analyzer", description: "Extract metadata from media files", icon: Search, category: "Device Analysis", url: "/image-video-metadata-analyzer", isInternal: true },
  { title: "AePS Transaction Complaint Portal", description: "Report AePS transaction issues", icon: Shield, category: "Financial", url: "/aeps-transaction-complaint-portal", isInternal: true },
  { title: "Malware Analysis Portal", description: "Analyze suspicious files and malware", icon: Shield, category: "Device Analysis", url: "/malware-analysis-portal", isInternal: true },
  { title: "Internet Archive Tools", description: "Access archived web content", icon: Database, category: "General Tools", url: "/internet-archive-tools", isInternal: true },
  { title: "Nationwide ATM Locator", description: "Find ATMs across the country", icon: Search, category: "Location Services", url: "/nationwide-atm-locator", isInternal: true },
  { title: "Manytools OSINT Utility Kit", description: "Collection of OSINT utilities", icon: Database, category: "General Tools", url: "/manytools-osint-utility-kit", isInternal: true },
  { title: "De🔸Digger OSINT Tool", description: "Advanced OSINT investigation tool", icon: Search, category: "General Tools", url: "/de-digger-osint-tool", isInternal: true },
  { title: "IFSC / MICR Finder", description: "Find bank IFSC and MICR codes", icon: Database, category: "Financial", url: "/ifsc-micr-finder", isInternal: true },
  { title: "Email Header Analyzer", description: "Analyze email headers for investigation", icon: Search, category: "Network & IP", url: "/email-header-analyzer", isInternal: true },
  { title: "Grabify IP Logger Interface", description: "IP logging and tracking interface", icon: Search, category: "Network & IP", url: "/grabify-ip-logger-interface", isInternal: true },
  { title: "IP Logger Utility", description: "Log and track IP addresses", icon: Database, category: "Network & IP", url: "/ip-logger-utility", isInternal: true },
  { title: "Cyber Police Portal", description: "Official cyber police services", icon: Shield, category: "Law Enforcement", url: "/cyber-police-portal", isInternal: true },
  { title: "Carrot Search Engine Tool", description: "Specialized search engine tool", icon: Search, category: "General Tools", url: "/carrot-search-engine-tool", isInternal: true },
  { title: "eFIR (Theft Report Portal)", description: "Electronic FIR for theft cases", icon: Shield, category: "Law Enforcement", url: "/efir-theft-report-portal", isInternal: true },
  { title: "Phishing Site Lookup", description: "Check for phishing websites", icon: Shield, category: "Network & IP", url: "/phishing-site-lookup", isInternal: true },
  { title: "GPS Visualizer Map", description: "Visualize GPS coordinates on maps", icon: Search, category: "Location Services", url: "/gps-visualizer-map", isInternal: true },
  { title: "Shopify Law Enforcement Portal", description: "Shopify's law enforcement interface", icon: Shield, category: "Law Enforcement", url: "/shopify-law-enforcement-portal", isInternal: true },
  { title: "APK Analyzer", description: "Analyze Android application packages", icon: Phone, category: "Device Analysis", url: "/apk-analyzer", isInternal: true },
  { title: "Car Model Recognizer", description: "Identify vehicle models from images", icon: Search, category: "General Tools", url: "/car-model-recognizer", isInternal: true },
  { title: "Live Flight Schedules Viewer", description: "Real-time flight schedule information", icon: Search, category: "Location Services", url: "/live-flight-schedules-viewer", isInternal: true },
  { title: "Real-Time Flight Tracker", description: "Track flights in real-time", icon: Search, category: "Location Services", url: "/real-time-flight-tracker", isInternal: true },
  { title: "Live Ship Tracker (MarineTraffic)", description: "Track ships and marine vessels", icon: Search, category: "Location Services", url: "/live-ship-tracker", isInternal: true },
  { title: "Indian Rail Live Status Tracker", description: "Track Indian railway train status", icon: Search, category: "Location Services", url: "/indian-rail-live-status-tracker", isInternal: true },
  { title: "Barcode Decoder Tool", description: "Decode various types of barcodes", icon: QrCode, category: "General Tools", url: "/barcode-decoder-tool", isInternal: true }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Shield className="h-6 w-6 text-[#00c2a8]" />
              <span className="font-bold text-foreground">CyberToolkit</span>
            </a>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#home">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-[#00c2a8] bg-clip-text text-transparent">
            Your One-Stop Cybersecurity Toolkit
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access 36 powerful cyber investigation, intelligence, and public service tools. 
            Designed for students, professionals, law enforcement, and the general public.
          </p>
          <Button size="lg" className="bg-[#00c2a8] hover:bg-[#00a693] text-white" asChild>
            <a href="#services">Explore All Tools</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive suite of cybersecurity and investigation tools for all your needs
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-[#00c2a8] group-hover:scale-110 transition-transform" />
                      <Badge variant="outline" className={cn("text-xs", categories[tool.category as keyof typeof categories])}>
                        {tool.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 text-sm">
                      {tool.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                      asChild
                    >
                      {tool.isInternal ? (
                        <Link to={tool.url}>
                          Access Tool
                        </Link>
                      ) : (
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          Access Tool
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Contact & Support</h2>
          <p className="text-muted-foreground mb-8">
            Need help with any tools? Have suggestions for new features? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Documentation
            </Button>
            <Button size="lg" className="bg-[#00c2a8] hover:bg-[#00a693] text-white">
              Get Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 CyberToolkit. All rights reserved. Open access for cybersecurity professionals.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
