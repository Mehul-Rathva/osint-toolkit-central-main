
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ipTools = [
  { name: "Domain and IP Bulk Lookup Tool", description: "Bulk lookup tool for domains and IP addresses", url: "https://www.infobyip.com/ipbulklookup.php" },
  { name: "ipinfo", description: "Comprehensive IP address information lookup", url: "https://ipinfo.io/" },
  { name: "ipqualityscore", description: "IP quality and reputation scoring", url: "https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test" },
  { name: "vpnapi.io", description: "VPN and proxy detection API", url: "https://vpnapi.io/" },
  { name: "Dan.me.uk", description: "Network tools and IP utilities", url: "https://www.dan.me.uk/ipinfo" },
  { name: "TOR Node List", description: "Current list of TOR exit nodes", url: "https://www.dan.me.uk/ipinfo" },
  { name: "iplocation", description: "IP geolocation and tracking service", url: "https://www.iplocation.net/" },
  { name: "ip-tracker", description: "Advanced IP address tracking tool", url: "https://www.iplocation.net/" }
];

const IpAddressRelatedTools = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-4 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Tools</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-[#00c2a8]" />
            <span className="font-bold text-foreground">IP Address Related Tools</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              IP Address Related Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Domain and IP analysis utilities for comprehensive network investigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipTools.map((tool, index) => (
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

export default IpAddressRelatedTools;
