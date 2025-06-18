
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Phone, Globe, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { id: "voip", name: "VOIP Application Contacts", icon: Phone, description: "Contact information for VoIP applications" },
  { id: "isp", name: "India ISPs", icon: Globe, description: "Indian Internet Service Provider contacts" },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart, description: "E-commerce platform nodal officers" }
];

const contactData = {
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
  isp: [
    { name: "ISP Gujarat | GTPL", description: "Gujarat Telecom Private Limited", url: "https://www.gtpl.net/nodal-officer-subscribers" },
    { name: "ISP Delhi | RailTel", description: "RailTel Corporation of India Limited", url: "https://www.railtel.in/contact-us.html" },
    { name: "ISP Delhi | Adn Broadband", description: "ADN Broadband services", url: "https://www.adnbroadband.com/contact-us" },
    { name: "ISP Gujarat | Acushnet", description: "Acushnet Internet Services", url: "https://acushnet.in/home#contactus" },
    { name: "ISP Bengaluru | Actcorp", description: "ACTCorp Broadband Services", url: "https://www.actcorp.in/customer-corner" },
    { name: "ISP Gujarat | Sanchar Telenetwork Pvt Ltd", description: "Sanchar Telenetwork Private Limited", url: "https://www.indiacustomercare.com/sanchar-tele-network-customer-care-2411411" },
    { name: "ISP Mumbai | Hathway", description: "Hathway Cable & Datacom Limited", url: "https://www.hathway.com/Digital/NodalOfficer" }
  ],
  ecommerce: [
    { name: "FREECHARGE Nodal Officer", description: "Freecharge payment platform nodal officer", url: "https://www.freecharge.in/contactus" },
    { name: "BILLDESK Nodal Officer", description: "BillDesk payment gateway nodal officer", url: "https://www.billdesk.com/web/grievance-redressal" },
    { name: "SBIBUDDY Nodal Officer", description: "SBI Buddy application nodal officer", url: "https://sbi.co.in/documents/53471/91871/NODAL+OFFICER+LIST.pdf" },
    { name: "PAYTM Nodal Officer", description: "Paytm payment platform nodal officer", url: "https://www.paytmbank.com/Policies/Customer-Grievance-Redressal-Policy-for-Paytm-Payments-Bank" },
    { name: "Dhanipay Nodal Officer", description: "Dhanipay payment service nodal officer", url: "https://www.dhanipay.in/customercarepolicy_udioppi.php" }
  ]
};

const NodalOfficerContactInformation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    const categoryData = categories.find(cat => cat.id === selectedCategory);
    const contacts = contactData[selectedCategory as keyof typeof contactData];
    
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
              <img src="/header.png" alt="CyberForensics Tools Hub Logo" className="h-6 w-auto" />
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
              {contacts.map((contact, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-[#00c2a8]/30">
                  <CardHeader>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-[#00c2a8] group-hover:text-white group-hover:border-[#00c2a8] transition-colors"
                      asChild
                    >
                      <a href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>Contact</span>
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
            <img src="/header.png" alt="CyberForensics Tools Hub Logo" className="h-6 w-auto" />
            <span className="font-bold text-foreground">All Nodal Officer Contact Information</span>
          </div>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All Nodal Officer Contact Information
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive nodal officer directory organized by service type.
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
                        {contactData[category.id as keyof typeof contactData].length} contacts
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
                      View Contacts
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

export default NodalOfficerContactInformation;
