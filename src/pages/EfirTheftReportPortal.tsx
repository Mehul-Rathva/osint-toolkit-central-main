
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const efirPortals = [
  { name: "Vehicle Theft eFIR", description: "Electronic FIR for vehicle theft cases", url: "https://gujhome.gujarat.gov.in/" },
  { name: "Mobile Theft eFIR", description: "Electronic FIR for mobile phone theft", url: "https://gujhome.gujarat.gov.in/" }
];

const EfirTheftReportPortal = () => {
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
            <span className="font-bold text-foreground">eFIR (Theft Report Portal)</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              eFIR (Theft Report Portal)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              File electronic FIR for theft cases online through official police portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {efirPortals.map((portal, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                <CardHeader>
                  <CardTitle className="text-lg">{portal.name}</CardTitle>
                  <CardDescription>{portal.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                    asChild
                  >
                    <a href={portal.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span>File eFIR</span>
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

export default EfirTheftReportPortal;
