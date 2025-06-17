
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const analysisTools = [
  { name: "InVID-WeVerify", description: "Video verification and reverse video search tool", url: "https://www.invid-project.eu/tools-and-services/invid-verification-plugin/" },
  { name: "Google Lens / Desktop", description: "Visual search using Google's AI technology", url: "https://www.google.com/?olud" },
  { name: "Duplichecker Reverse Image Search", description: "Find duplicate and similar images online", url: "https://www.duplichecker.com/reverse-image-search.php" },
  { name: "Face Search Engine Reverse Image Search", description: "Search for faces across the internet", url: "https://www.duplichecker.com/reverse-image-search.php" },
  { name: "Search4faces", description: "Facial recognition search engine", url: "https://search4faces.com/en/tt00/index.html" },
  { name: "Reverse Image Search", description: "General reverse image search tool", url: "https://yandex.com/images/" },
  { name: "RevEye Reverse Image Search", description: "Browser extension for reverse image searching", url: "https://chromewebstore.google.com/detail/reveye-reverse-image-sear/keaaclcjhehbbapnphnmpiklalfhelgf?hl=en" },
  { name: "Diff Checker", description: "Compare images and detect differences", url: "https://www.diffchecker.com/image-compare/" }
];

const ImageVideoAnalysisToolkit = () => {
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
            <span className="font-bold text-foreground">Image/Video Analysis Toolkit</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Image/Video Analysis Toolkit
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze multimedia content for forensic investigation and verification purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisTools.map((tool, index) => (
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

export default ImageVideoAnalysisToolkit;
