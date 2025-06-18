
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const cryptoTools = [
  { name: "BTC.com", description: "Bitcoin blockchain explorer and mining pool", url: "https://explorer.btc.com/" },
  { name: "Blockchair", description: "Universal blockchain explorer for multiple cryptocurrencies", url: "https://blockchair.com/" },
  { name: "OKLink", description: "Multi-blockchain explorer and analytics platform", url: "https://www.oklink.com/" },
  { name: "Etherscan", description: "Ethereum blockchain explorer and analytics platform", url: "https://etherscan.io/" },
  { name: "BscScan", description: "Binance Smart Chain explorer and analytics", url: "https://bscscan.com/" },
  { name: "FTMScan", description: "Fantom blockchain explorer and analytics", url: "https://ftmscan.com/" },
  { name: "Tokenview", description: "Multi-blockchain explorer supporting 100+ blockchains", url: "https://tokenview.io/" },
  { name: "Polygonscan", description: "Polygon blockchain explorer and analytics", url: "https://polygonscan.com/" },
  { name: "XRP Ledger", description: "XRP Ledger explorer and transaction analyzer", url: "https://livenet.xrpl.org/" },
  { name: "Terra Finder", description: "Terra blockchain explorer and analytics", url: "https://finder.terra.money/" },
  { name: "Cardano", description: "Cardano blockchain explorer and analytics", url: "https://explorer.cardano.org/en.html" },
  { name: "Solana", description: "Solana blockchain explorer and analytics", url: "https://explorer.solana.com/" },
  { name: "Avascan", description: "Avalanche blockchain explorer and analytics", url: "https://avascan.info/" },
  { name: "DogeChain", description: "Dogecoin blockchain explorer", url: "https://dogechain.info/chain/Dogecoin" },
  { name: "Cronos", description: "Cronos blockchain explorer and analytics", url: "https://cronoscan.com/" },
  { name: "Mintscan", description: "Cosmos ecosystem blockchain explorer", url: "https://www.mintscan.io/cosmos" },
  { name: "Litecoin", description: "Litecoin blockchain explorer and analytics", url: "https://litecoinblockexplorer.net/" }
];

const CryptocurrencyAnalysisTools = () => {
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
            <span className="font-bold text-foreground">Cryptocurrency Analysis Tools</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cryptocurrency Analysis Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze blockchain transactions, wallets, and cryptocurrency activities for investigation purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoTools.map((tool, index) => (
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

export default CryptocurrencyAnalysisTools;
