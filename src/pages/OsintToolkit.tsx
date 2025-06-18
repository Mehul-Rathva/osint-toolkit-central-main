import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const osintTools = [
  { name: "All India Voter No & Name Search", description: "Search voter information across all Indian states", url: "https://electoralsearch.eci.gov.in/" },
  { name: "Voter ID PDF Deep Search (All INDIA)", description: "Deep search voter ID documents across India", url: "https://old.eci.gov.in/electoral-roll/link-to-pdf-e-roll/" },
  { name: "Ration Card Deep Search All States", description: "Search ration card information across all states", url: "https://nfsa.gov.in/portal/ration_card_state_portals_aa" },
  { name: "All India Company/LLP Master Data", description: "Access comprehensive company and LLP database", url: "https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do" },
  { name: "GST Number Search", description: "Search and verify GST registration numbers", url: "https://services.gst.gov.in/services/searchtp" },
  { name: "Verify Aadhaar Number", description: "Verify Aadhaar number authenticity", url: "https://myaadhaar.uidai.gov.in/verifyAadhaar" },
  { name: "City Wise All Bank IFSC Code Search", description: "Find bank IFSC codes by city and location", url: "https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx" },
  { name: "Find Train Schedule & Trains Between Stations", description: "Search train schedules and routes", url: "https://www.irctc.co.in/nget/train-search" },
  { name: "PM Kisan Samman Nidhi Beneficiary List All India", description: "Search PM Kisan beneficiary database", url: "https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx" }
];

const OsintToolkit = () => {
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
            <span className="font-bold text-foreground">Government OSINT Toolkit</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Government OSINT Toolkit
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open source intelligence tools for comprehensive digital investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {osintTools.map((tool, index) => (
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

export default OsintToolkit;
