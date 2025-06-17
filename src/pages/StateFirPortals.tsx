import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const statePortals = [
  { name: "Gujarat Citizen Portal", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", url: "https://gujhome.gujarat.gov.in" },
  { name: "Uttar Pradesh Citizen Portal", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop", url: "https://uppolice.gov.in/#Home" },
  { name: "Delhi Citizen Portal", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", url: "https://delhipolice.gov.in/viewfir" },
  { name: "Maharashtra Citizen Portal", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", url: "https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx" },
  { name: "Rajasthan Citizen Portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", url: "https://jansoochna.rajasthan.gov.in/Scheme?q=tgK9kwVZQ9q9Mwteqb45AGH+OPYVeBeY" },
  { name: "Madhya Pradesh Citizen Portal", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop", url: "https://citizen.mppolice.gov.in/CitizenLogin.aspx?CtznService=13" },
  { name: "Haryana Citizen Portal", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", url: "https://haryanapolice.gov.in/ViewFIR/FIRStatusSearch?From=LFhlihlx/W49VSlBvdGc4w==" },
  { name: "Telangana Citizen Portal", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop", url: "https://www.tspolice.gov.in/jsp/citizenLogin?method=viewLoginForm" },
  { name: "Jharkhand Citizen Portal", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", url: "https://citizen.jhpolice.gov.in/citizen/login.htm?lang=hi_IN&stov=AWRJ-I2Z7-BGBG-HS40-DFMJ-DW47-FLU9-AXZ7" },
  { name: "Kerala Citizen Portal", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", url: "https://keralapolice.gov.in/" },
  { name: "Chhattisgarh Citizen Portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", url: "https://search.cgpolice.gov.in/CCTNS_Citizen_Portal/Citizen_Login.jsp" },
  { name: "Andhra Pradesh Citizen Portal", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop", url: "https://citizen.appolice.gov.in/jsp/citizenLogin.do?method=viewLoginForm&loginfromLink=viewfirlink" },
  { name: "Assam Citizen Portal", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", url: "https://assampolice.assam.gov.in/citizen/FIRDownload.aspx" },
  { name: "Goa Citizen Portal", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop", url: "https://citizen.goapolice.gov.in/web/guest/firdocsearch" },
  { name: "West Bengal Citizen Portal", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", url: "https://wbpolice.gov.in/" },
  { name: "Uttarakhand Citizen Portal", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", url: "https://policecitizenportal.uk.gov.in/Citi/firSearch.aspx" },
  { name: "Karnataka Citizen Portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", url: "https://ksp.karnataka.gov.in/firsearch/en" },
  { name: "Arunachal Pradesh Citizen Portal", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop", url: "http://citizenportal.arunpol.gov.in/citizen/login.htm" },
  { name: "Bihar Citizen Portal", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", url: "https://police.bihar.gov.in/" },
  { name: "Himachal Pradesh Citizen Portal", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop", url: "https://citizenportal.hppolice.gov.in/citizen/login.htm" },
  { name: "Manipur Citizen Portal", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", url: "https://manipurpolice.gov.in/?page_id=3245" },
  { name: "Meghalaya Citizen Portal", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", url: "https://megpolice.gov.in/citizen-services" },
  { name: "Odisha Citizen Portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", url: "https://citizenportal-op.gov.in/citizen/FIR_Copy.aspx" },
  { name: "Punjab Citizen Portal", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop", url: "https://www.punjabpolice.gov.in/" },
  { name: "Sikkim Citizen Portal", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", url: "https://police.sikkim.gov.in" },
  { name: "Tamil Nadu Citizen Portal", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/CitizenFIRView?0" },
  { name: "Tripura Citizen Portal", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", url: "https://police.tripura.gov.in/" }
];

const StateFirPortals = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-4 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Tools</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-[#00c2a8]" />
            <span className="font-bold text-foreground">All State FIR Download</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All State FIR Download Portals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access official citizen and FIR-related portals for all Indian states. 
              Click on any state card to visit their official portal.
            </p>
          </div>

          {/* State Portals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {statePortals.map((portal, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                <CardHeader className="p-4 pb-2">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img 
                      src={portal.image} 
                      alt={portal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-sm leading-tight text-center">
                    {portal.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                    asChild
                  >
                    <a href={portal.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span>Visit Portal</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>How to Use These Portals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left space-y-2">
                  <p>• Each state portal provides access to citizen services including FIR registration and downloads</p>
                  <p>• Some portals may require registration or login for certain services</p>
                  <p>• For emergency situations, contact your local police station directly</p>
                  <p>• Portal URLs and availability may vary by state</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StateFirPortals;
