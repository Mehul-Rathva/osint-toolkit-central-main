
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const bankTools = [
  { name: "RBI IFSC Lookup", description: "Official RBI IFSC code finder", url: "https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx" },
  { name: "Bank Code Search", description: "Search for bank codes and MICR numbers", url: "https://www.bankbazaar.com/ifsc-code.html" }
];

const IfscMicrFinder = () => {
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
            <span className="font-bold text-foreground">IFSC / MICR Finder</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              IFSC / MICR Finder
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find bank IFSC and MICR codes for financial investigations and verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bankTools.map((tool, index) => (
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

export default IfscMicrFinder;
