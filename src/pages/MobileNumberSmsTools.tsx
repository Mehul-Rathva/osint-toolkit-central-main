
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const mobileTools = [
  { name: "SMS Decode", description: "Decode and analyze SMS message content and structure", url: "https://www.rapidtables.com/convert/number/hex-to-ascii.html" },
  { name: "SMS Header Search", description: "Search and analyze SMS header information", url: "https://smsheader.trai.gov.in/loginpage" },
  { name: "TRAI SMS Header Search", description: "TRAI compliant SMS header search and verification", url: "https://smsheader.trai.gov.in/loginpage" },
  { name: "Spam Call Analysis", description: "Analyze and identify spam calls and patterns", url: "https://ieeexplore.ieee.org/abstract/document/10150631" },
  { name: "Reverse Phone Lookup", description: "Look up phone number details and ownership information", url: "https://scout.tel/phone-number-lookup/" },
  { name: "ICCID/SIM Card Analysis", description: "Analyze SIM card ICCID numbers and related data", url: "https://www.numberingplans.com/?page=analysis&sub=simnr" },
  { name: "Mobile Number Carrier Lookup", description: "Identify mobile number carrier and network provider", url: "https://freecarrierlookup.com/" },
  { name: "Analysis of IMSI Numbers", description: "Analyze International Mobile Subscriber Identity numbers", url: "https://www.numberingplans.com/?page=analysis&sub=imsinr" },
  { name: "Location Routing Number Search", description: "Search for location routing numbers and geographic data", url: "https://www.scribd.com/doc/46581731/LRN-Allotment-List-revised" },
  { name: "Location Routing Number Bulk Search", description: "Bulk search functionality for location routing numbers", url: "https://www.ipqualityscore.com/free-carrier-lookup?__cf_chl_tk=krwK5b9XQosdiyQujEONkz8H4UxcG6YqgwbKPb_VXJo-1750065147-1.0.1.1-ghKKXJhpYQlXjcgMrLNW8bPVLNexeDEvPJVGLR_kC40" },
  { name: "ISD Calling Codes Search", description: "Search international subscriber dialing codes", url: "https://countrycode.org/" },
  { name: "India MCC-MNC Codes Search", description: "Search Mobile Country and Network Codes for India", url: "https://mcc-mnc.com/" },
  { name: "All World MCC-MNC Codes Search", description: "Comprehensive global MCC-MNC codes database search", url: "https://mcc-mnc.net/" },
  { name: "Mobile No Service Provider Search (pink icon)", description: "Identify mobile number service provider with pink interface", url: "https://www.ding.com/" },
  { name: "Mobile Number Portability (MNP) Bulk Lookup Tool", description: "Bulk lookup tool for mobile number portability information", url: "https://www.hlr-lookups.com/en/number-portability-lookups" },
  { name: "Analysis of Telephone Numbers", description: "Comprehensive telephone number analysis and verification", url: "https://numberingplans.com/?page=analysis&sub=phonenr" },
  { name: "Mobile No Service Provider Search (purple icon)", description: "Identify mobile number service provider with purple interface", url: "https://www.mobikwik.com/" }
];

const MobileNumberSmsTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-4 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Tools</span>
          </Link>
          <div className="flex items-center space-x-2">
            <img src="/header.png" alt="CyberForensics Tools Hub Logo" className="h-6 w-auto" />
            <span className="font-bold text-foreground">Mobile Number / SMS Tools</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile Number / SMS Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify mobile numbers, identify callers, and analyze SMS communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                <CardHeader>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                    asChild
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span>Access Tool</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileNumberSmsTools;
