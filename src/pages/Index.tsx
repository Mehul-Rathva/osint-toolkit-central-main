import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, Filter, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [
  { 
    title: "All State FIR Download", 
    description: "Access official citizen and FIR-related portals for all Indian states", 
    link: "/state-fir-portals", 
    isInternal: true 
  },
  { title: "IMEI Online Tools", description: "Comprehensive IMEI checking and verification tools", link: "/imei-online-tools", isInternal: true },
  { title: "Law Enforcement Request Portals", description: "Submit official requests to tech companies", link: "/law-enforcement-request-portals", isInternal: true },
  { title: "IP Address Related Tools", description: "Additional IP analysis and investigation utilities", link: "/ip-address-related-tools", isInternal: true },
  { title: "Nodal Officer Contact Information", description: "Detailed contact information for law enforcement nodal officers", link: "/nodal-officer-contact-information", isInternal: true },
  { title: "OSINT Toolkit", description: "Open Source Intelligence gathering tools and resources", link: "/osint-toolkit", isInternal: true },
  { title: "Cryptocurrency Analysis Tools", description: "Analyze and track cryptocurrency transactions", link: "/cryptocurrency-analysis-tools", isInternal: true },
  { title: "Image/Video Analysis Toolkit", description: "Forensic analysis tools for multimedia content", link: "/image-video-analysis-toolkit", isInternal: true },
  { title: "Mobile Number SMS Tools", description: "SMS and mobile number analysis utilities", link: "/mobile-number-sms-tools", isInternal: true },
  { title: "Online Cyber Crime Complaint Portal", description: "Report cyber crimes through official channels", link: "/online-cyber-crime-complaint-portal", isInternal: true },
  { title: "Social Media Monitoring", description: "Monitor and analyze social media platforms", link: "/social-media-monitoring", isInternal: true },
  { title: "Blackbird OSINT Dashboard", description: "Comprehensive OSINT investigation dashboard", link: "/blackbird-osint-dashboard", isInternal: true },
  { title: "Image/Video Metadata Analyzer", description: "Extract and analyze metadata from multimedia files", link: "/image-video-metadata-analyzer", isInternal: true },
  { title: "AEPS Transaction Complaint Portal", description: "Report issues with AEPS transactions", link: "/aeps-transaction-complaint-portal", isInternal: true },
  { title: "Malware Analysis Portal", description: "Analyze suspicious files and malware", link: "/malware-analysis-portal", isInternal: true },
  { title: "Internet Archive Tools", description: "Access archived web content and historical data", link: "/internet-archive-tools", isInternal: true },
  { title: "Nationwide ATM Locator", description: "Find ATM locations across the country", link: "/nationwide-atm-locator", isInternal: true },
  { title: "Manytools OSINT Utility Kit", description: "Collection of OSINT investigation utilities", link: "/manytools-osint-utility-kit", isInternal: true },
  { title: "DeDigger OSINT Tool", description: "Advanced OSINT investigation and analysis tool", link: "/de-digger-osint-tool", isInternal: true },
  { title: "IFSC/MICR Finder", description: "Find bank IFSC and MICR codes", link: "/ifsc-micr-finder", isInternal: true },
  { title: "Email Header Analyzer", description: "Analyze email headers for investigation", link: "/email-header-analyzer", isInternal: true },
  { title: "Grabify IP Logger Interface", description: "IP logging and tracking interface", link: "/grabify-ip-logger-interface", isInternal: true },
  { title: "IP Logger Utility", description: "Log and track IP addresses for investigations", link: "/ip-logger-utility", isInternal: true },
  { title: "Cyber Police Portal", description: "Access cyber police services and resources", link: "/cyber-police-portal", isInternal: true },
  { title: "Carrot Search Engine Tool", description: "Advanced search engine for investigations", link: "/carrot-search-engine-tool", isInternal: true },
  { title: "eFIR Theft Report Portal", description: "File electronic FIR for theft cases", link: "/efir-theft-report-portal", isInternal: true },
  { title: "Phishing Site Lookup", description: "Check and verify suspicious websites", link: "/phishing-site-lookup", isInternal: true },
  { title: "GPS Visualizer Map", description: "Visualize GPS coordinates and location data", link: "/gps-visualizer-map", isInternal: true },
  { title: "Shopify Law Enforcement Portal", description: "Shopify's official law enforcement request portal", link: "/shopify-law-enforcement-portal", isInternal: true },
  { title: "APK Analyzer", description: "Analyze Android application packages", link: "/apk-analyzer", isInternal: true },
  { title: "Car Model Recognizer", description: "Identify vehicle models from images", link: "/car-model-recognizer", isInternal: true },
  { title: "Live Flight Schedules Viewer", description: "View real-time flight information", link: "/live-flight-schedules-viewer", isInternal: true },
  { title: "Real-time Flight Tracker", description: "Track flights in real-time", link: "/real-time-flight-tracker", isInternal: true },
  { title: "Live Ship Tracker (MarineTraffic)", description: "Track ships and marine vessels", link: "/live-ship-tracker", isInternal: true },
  { title: "Indian Rail Live Status Tracker", description: "Track Indian railway schedules", link: "/indian-rail-live-status-tracker", isInternal: true },
  { title: "Barcode Decoder Tool", description: "Decode various types of barcodes", link: "/barcode-decoder-tool", isInternal: true }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <img src="/header.png" alt="CyberForensics Tools Hub Logo" className="h-8 w-auto" />
            <span className="font-bold text-foreground">CyberForensics Tools Hub</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00c2a8]/5 via-transparent to-[#00c2a8]/5 pointer-events-none" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            CyberForensics Tools Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive digital investigation and law enforcement tools in one centralized platform
          </p>
          
          {/* Search and Filter Section */}
          <div className="max-w-md mx-auto mb-8 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search tools and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#00c2a8] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredServices.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-border/50 hover:border-[#00c2a8]/40 bg-card/90 backdrop-blur-sm">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c2a8]/0 via-transparent to-[#00c2a8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardHeader className="pb-3 relative z-10">
                  <CardTitle className="text-lg leading-tight group-hover:text-[#00c2a8] transition-colors duration-300 font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="mb-4 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                    asChild
                  >
                    {service.isInternal ? (
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        <span>Access Tool</span>
                        <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>Access Tool</span>
                        <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No tools found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#00c2a8] text-white p-3 rounded-full shadow-lg hover:bg-[#00a691] transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-muted/30 backdrop-blur border-t mt-16">
        <div className="container mx-auto py-8 px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 CyberForensics Tools Hub. All tools are provided for legitimate law enforcement and investigation purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
