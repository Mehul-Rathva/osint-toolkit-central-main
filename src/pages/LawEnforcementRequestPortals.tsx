
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Users, DollarSign, Wallet, Mail, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { id: "social", name: "Social Media Portals", icon: Users, description: "Law enforcement request portals for social media platforms" },
  { id: "crypto", name: "Cryptocurrency Portals", icon: DollarSign, description: "Cryptocurrency exchange law enforcement portals" },
  { id: "ewallet", name: "E-Wallet Portals", icon: Wallet, description: "Digital wallet and payment platform portals" },
  { id: "email", name: "Email & SMS Portals", icon: Mail, description: "Email and SMS service provider portals" },
  { id: "voip", name: "VoIP Apps", icon: Phone, description: "Voice over IP application contacts" },
  { id: "other", name: "Other", icon: Shield, description: "Additional law enforcement request portals" }
];

const serviceData = {
  social: [
    { name: "Instagram Law Enforcement Request", description: "Official Instagram law enforcement portal", url: "https://www.facebook.com/records/login/" },
    { name: "Facebook Law Enforcement Request", description: "Official Facebook law enforcement portal", url: "https://www.facebook.com/records/login/" },
    { name: "Twitter Law Enforcement Request", description: "Official Twitter/X law enforcement portal", url: "https://legalrequests.twitter.com/forms/landing_disclaimer" },
    { name: "WhatsApp Law Enforcement Request", description: "Official WhatsApp law enforcement portal", url: "https://www.whatsapp.com/records/login/" },
    { name: "Google Products Law Enforcement Request", description: "Google products law enforcement portal", url: "https://lers.google.com/signup_v2/landing" },
    { name: "Yahoo Law Enforcement Request", description: "Official Yahoo law enforcement portal", url: "https://lawenforcementrequests.oath.com/" },
    { name: "Pinterest Law Enforcement Request", description: "Official Pinterest law enforcement portal", url: "https://help.pinterest.com/en/law-enforcement" },
    { name: "Kik Law Enforcement Request", description: "Official Kik law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Zoom Law Enforcement Request", description: "Official Zoom law enforcement portal", url: "https://lers.zoom.us/#/" },
    { name: "LinkedIn Law Enforcement Request", description: "Official LinkedIn law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Badoo Law Enforcement Request", description: "Official Badoo law enforcement portal", url: "https://app.kodexglobal.com/badoo/signup" },
    { name: "Gab Law Enforcement Request", description: "Official Gab law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Bumble Law Enforcement Request", description: "Official Bumble law enforcement portal", url: "https://app.kodexglobal.com/:orgSlug?/signup" },
    { name: "Amino Law Enforcement Request", description: "Official Amino law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Snapchat Nodal Contact", description: "Snapchat nodal officer contact", url: "https://help.snapchat.com/hc/en-us/categories/5685833655188" },
    { name: "ShareChat Nodal Contact", description: "ShareChat nodal officer contact", url: "https://help.sharechat.com/contact/" },
    { name: "MX TakaTak Nodal Contact", description: "MX TakaTak nodal officer contact", url: "https://help-takatak.mojapp.in/contact/" },
    { name: "Koo Nodal Contact", description: "Koo nodal officer contact", url: "https://www.indiacustomercare.com/koo-customer-care" }
  ],
  crypto: [
    { name: "Binance", description: "Binance law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Binance France", description: "Binance France law enforcement portal", url: "https://app.kodexglobal.com/binance-fr/signup" },
    { name: "Coinbase", description: "Coinbase law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Coinbase US", description: "Coinbase US law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "FTX US", description: "FTX US law enforcement portal", url: "https://app.kodexglobal.com/ftx-us/signup" },
    { name: "MoonPay", description: "MoonPay law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "CrossRiver", description: "CrossRiver law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "OpenSea", description: "OpenSea law enforcement portal", url: "https://app.kodexglobal.com/signin" }
  ],
  ewallet: [
    { name: "Google Pay", description: "Google Pay law enforcement portal", url: "https://support.google.com/pay/india/contact/pay_india_requests" },
    { name: "PhonePe", description: "PhonePe law enforcement portal", url: "https://cybercell.phonepe.com/" },
    { name: "RazorPay", description: "RazorPay law enforcement portal", url: "https://razorpay.com/support/?cybercrime=true" },
    { name: "Paytm Nodal Officer", description: "Paytm nodal officer contact", url: "https://www.paytmbank.com/Policies/Customer-Grievance-Redressal-Policy-for-Paytm-Payments-Bank" },
    { name: "Freecharge Nodal Officer", description: "Freecharge nodal officer contact", url: "https://www.freecharge.in/contactus" },
    { name: "BillDesk Nodal Officer", description: "BillDesk nodal officer contact", url: "https://www.billdesk.com/web/grievance-redressal" },
    { name: "SBIBUDDY Nodal Officer", description: "SBIBUDDY nodal officer contact", url: "https://sbi.co.in/documents/53471/91871/NODAL+OFFICER+LIST.pdf" }
  ],
  email: [
    { name: "Gmail", description: "Gmail law enforcement portal", url: "https://lers.google.com/signup_v2/landing" },
    { name: "Yahoo", description: "Yahoo law enforcement portal", url: "https://lawenforcementrequests.oath.com/" },
    { name: "Outlook", description: "Microsoft Outlook law enforcement portal", url: "https://leportal.microsoft.com/home" },
    { name: "SendGrid", description: "SendGrid law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Vfirst", description: "Vfirst law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Twilio", description: "Twilio law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Rediffmail", description: "Rediffmail law enforcement portal", url: "https://m.rediff.com/grievances.html" }
  ],
  voip: [
    { name: "2nd Line", description: "Contact: support@2ndline.net", url: "http://2ndline.net/en/privacy_policy.html" },
    { name: "Burner", description: "Contact: support@burnerapp.com", url: "https://www.adhoclabs.co/privacy-policy" },
    { name: "CoverMe", description: "Contact: info@coverme.ws", url: "https://www.coverme.ws/pp" },
    { name: "Dingtone", description: "Contact: support@dingtone.me / info@dingtone.me", url: "https://www.dingtone.me/privacy_policy.html" },
    { name: "Call India", description: "Contact: freecall2me@gmail.com", url: "https://www.freecall.me/static/privacy_policy.html" },
    { name: "GrooVe IP", description: "Contact: snrb.labs@gmail.com", url: "https://snrblabs.com/GrooVeIP/PrivacyPolicy" },
    { name: "Hushed", description: "Contact: support@hushed.com", url: "https://hushed.com/privacy-policy/" },
    { name: "Line2", description: "Contact: developer.android@line2.com", url: "https://www.line2.com/privacy/" },
    { name: "Talkatone", description: "Contact: support@talkatone.com", url: "https://www.talkatone.com/privacy/" }
  ],
  other: [
    { name: "Twilio Authy", description: "Twilio Authy law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Fintech Fincrime Exchange", description: "Fintech financial crime exchange portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Roblox", description: "Roblox law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Segment", description: "Segment law enforcement portal", url: "https://app.kodexglobal.com/signin" },
    { name: "Subsentio", description: "Subsentio law enforcement portal", url: "https://app.kodexglobal.com/subsentio/signup" },
    { name: "Twilio Zipwhip", description: "Twilio Zipwhip law enforcement portal", url: "https://app.kodexglobal.com/signin" }
  ]
};

const LawEnforcementRequestPortals = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    const categoryData = categories.find(cat => cat.id === selectedCategory);
    const services = serviceData[selectedCategory as keyof typeof serviceData];
    
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedCategory(null)}
              className="mr-4 flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Categories</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-[#00c2a8]" />
              <span className="font-bold text-foreground">{categoryData?.name}</span>
            </div>
          </div>
        </header>

        <main className="py-8 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {categoryData?.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {categoryData?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                      asChild
                    >
                      <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>Access Portal</span>
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
  }

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
            <span className="font-bold text-foreground">All Law Enforcement Request Portals</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All Law Enforcement Request Portals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete collection of law enforcement request portals organized by service type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-[#00c2a8] group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground">
                        {serviceData[category.id as keyof typeof serviceData].length} services
                      </span>
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                    >
                      View Services
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LawEnforcementRequestPortals;
