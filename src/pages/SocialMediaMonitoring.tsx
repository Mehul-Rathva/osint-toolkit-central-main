
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const monitoringTools = [
  { name: "TweetDeck", description: "Advanced Twitter monitoring and dashboard", url: "https://pro.x.com/" },
  { name: "Nitter", description: "Privacy-focused Twitter frontend", url: "https://www.telegramdb.org/search" },
  { name: "Followerwonk", description: "Twitter analytics and follower analysis", url: "https://followerwonk.com/" },
  { name: "Google Alerts", description: "Monitor web mentions and content", url: "https://www.google.com/alerts" },
  { name: "TINFOLEAK.COM", description: "Twitter intelligence and data extraction", url: "https://tinfoleak.com/" },
  { name: "Trendsmap", description: "Real-time Twitter trends visualization", url: "https://www.trendsmap.com/map" },
  { name: "Graph.tips", description: "Social media analytics and insights", url: "https://graph.tips/beta/" },
  { name: "Whopostedwhat", description: "Facebook post search and analysis", url: "https://www.whopostedwhat.com/" },
  { name: "Inteltechniques", description: "Social media investigation tools", url: "https://inteltechniques.com/tools/Facebook.html" },
  { name: "Snapchat Map", description: "Location-based Snapchat content discovery", url: "https://www.snapchat.com/" },
  { name: "Telegago", description: "Telegram channel and group search", url: "https://cse.google.com/cse?cx=006368593537057042503:efxu7xprihg#gsc.tab=0" },
  { name: "Telegramdb", description: "Telegram database and analytics", url: "https://www.telegramdb.org/search" },
  { name: "Onemilliontweetmap", description: "Real-time tweet location mapping", url: "https://onemilliontweetmap.com/?center=25.505,-0.09&zoom=2&search=&timeStep=0&timeSelector=0&hashtag1=&hashtag2=sad&sidebar=yes&hashtagBattle=0&timeRange=0&timeRange=25&heatmap=0&sun=0&cluster=1" },
  { name: "Botometer", description: "Twitter bot detection and analysis", url: "https://botometer.osome.iu.edu/" },
  { name: "Twitter Video Downloader", description: "Download Twitter videos for analysis", url: "https://twittervideodownloader.com/" },
  { name: "Twitter Advanced Search", description: "Advanced Twitter search capabilities", url: "https://x.com/i/flow/login?redirect_after_login=%2Fsearch-advanced" },
  { name: "Twlets", description: "Twitter list management and monitoring", url: "https://chromewebstore.google.com/detail/error" },
  { name: "Hashatit", description: "Hashtag tracking and analysis", url: "https://www.hashatit.com/" }
];

const SocialMediaMonitoring = () => {
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
            <span className="font-bold text-foreground">Social Media Monitoring</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Social Media Monitoring
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor social media platforms for mentions, trends, and investigative purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringTools.map((tool, index) => (
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

export default SocialMediaMonitoring;
