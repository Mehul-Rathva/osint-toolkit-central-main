
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StateFirPortals from "./pages/StateFirPortals";
import ImeiCheckTools from "./pages/ImeiCheckTools";
import ImeiOnlineTools from "./pages/ImeiOnlineTools";
import LawEnforcementPortals from "./pages/LawEnforcementPortals";
import LawEnforcementRequestPortals from "./pages/LawEnforcementRequestPortals";
import IpAddressTools from "./pages/IpAddressTools";
import IpAddressRelatedTools from "./pages/IpAddressRelatedTools";
import NodalOfficerDirectory from "./pages/NodalOfficerDirectory";
import NodalOfficerContactInformation from "./pages/NodalOfficerContactInformation";
import OsintToolkit from "./pages/OsintToolkit";
import CryptocurrencyAnalysisTools from "./pages/CryptocurrencyAnalysisTools";
import ImageVideoAnalysisToolkit from "./pages/ImageVideoAnalysisToolkit";
import MobileNumberSmsTools from "./pages/MobileNumberSmsTools";
import OnlineCyberCrimeComplaintPortal from "./pages/OnlineCyberCrimeComplaintPortal";
import SocialMediaMonitoring from "./pages/SocialMediaMonitoring";
import BlackbirdOsintDashboard from "./pages/BlackbirdOsintDashboard";
import ImageVideoMetadataAnalyzer from "./pages/ImageVideoMetadataAnalyzer";
import AepsTransactionComplaintPortal from "./pages/AepsTransactionComplaintPortal";
import MalwareAnalysisPortal from "./pages/MalwareAnalysisPortal";
import InternetArchiveTools from "./pages/InternetArchiveTools";
import NationwideAtmLocator from "./pages/NationwideAtmLocator";
import ManytoolsOsintUtilityKit from "./pages/ManytoolsOsintUtilityKit";
import DeDiggerOsintTool from "./pages/DeDiggerOsintTool";
import IfscMicrFinder from "./pages/IfscMicrFinder";
import EmailHeaderAnalyzer from "./pages/EmailHeaderAnalyzer";
import GrabifyIpLoggerInterface from "./pages/GrabifyIpLoggerInterface";
import IpLoggerUtility from "./pages/IpLoggerUtility";
import CyberPolicePortal from "./pages/CyberPolicePortal";
import CarrotSearchEngineTool from "./pages/CarrotSearchEngineTool";
import EfirTheftReportPortal from "./pages/EfirTheftReportPortal";
import PhishingSiteLookup from "./pages/PhishingSiteLookup";
import GpsVisualizerMap from "./pages/GpsVisualizerMap";
import ShopifyLawEnforcementPortal from "./pages/ShopifyLawEnforcementPortal";
import ApkAnalyzer from "./pages/ApkAnalyzer";
import CarModelRecognizer from "./pages/CarModelRecognizer";
import LiveFlightSchedulesViewer from "./pages/LiveFlightSchedulesViewer";
import RealTimeFlightTracker from "./pages/RealTimeFlightTracker";
import LiveShipTracker from "./pages/LiveShipTracker";
import IndianRailLiveStatusTracker from "./pages/IndianRailLiveStatusTracker";
import BarcodeDecoderTool from "./pages/BarcodeDecoderTool";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/state-fir-portals" element={<StateFirPortals />} />
          <Route path="/imei-check-tools" element={<ImeiCheckTools />} />
          <Route path="/imei-online-tools" element={<ImeiOnlineTools />} />
          <Route path="/law-enforcement-portals" element={<LawEnforcementPortals />} />
          <Route path="/law-enforcement-request-portals" element={<LawEnforcementRequestPortals />} />
          <Route path="/ip-address-tools" element={<IpAddressTools />} />
          <Route path="/ip-address-related-tools" element={<IpAddressRelatedTools />} />
          <Route path="/nodal-officer-directory" element={<NodalOfficerDirectory />} />
          <Route path="/nodal-officer-contact-information" element={<NodalOfficerContactInformation />} />
          <Route path="/osint-toolkit" element={<OsintToolkit />} />
          <Route path="/cryptocurrency-analysis-tools" element={<CryptocurrencyAnalysisTools />} />
          <Route path="/image-video-analysis-toolkit" element={<ImageVideoAnalysisToolkit />} />
          <Route path="/mobile-number-sms-tools" element={<MobileNumberSmsTools />} />
          <Route path="/online-cyber-crime-complaint-portal" element={<OnlineCyberCrimeComplaintPortal />} />
          <Route path="/social-media-monitoring" element={<SocialMediaMonitoring />} />
          <Route path="/blackbird-osint-dashboard" element={<BlackbirdOsintDashboard />} />
          <Route path="/image-video-metadata-analyzer" element={<ImageVideoMetadataAnalyzer />} />
          <Route path="/aeps-transaction-complaint-portal" element={<AepsTransactionComplaintPortal />} />
          <Route path="/malware-analysis-portal" element={<MalwareAnalysisPortal />} />
          <Route path="/internet-archive-tools" element={<InternetArchiveTools />} />
          <Route path="/nationwide-atm-locator" element={<NationwideAtmLocator />} />
          <Route path="/manytools-osint-utility-kit" element={<ManytoolsOsintUtilityKit />} />
          <Route path="/de-digger-osint-tool" element={<DeDiggerOsintTool />} />
          <Route path="/ifsc-micr-finder" element={<IfscMicrFinder />} />
          <Route path="/email-header-analyzer" element={<EmailHeaderAnalyzer />} />
          <Route path="/grabify-ip-logger-interface" element={<GrabifyIpLoggerInterface />} />
          <Route path="/ip-logger-utility" element={<IpLoggerUtility />} />
          <Route path="/cyber-police-portal" element={<CyberPolicePortal />} />
          <Route path="/carrot-search-engine-tool" element={<CarrotSearchEngineTool />} />
          <Route path="/efir-theft-report-portal" element={<EfirTheftReportPortal />} />
          <Route path="/phishing-site-lookup" element={<PhishingSiteLookup />} />
          <Route path="/gps-visualizer-map" element={<GpsVisualizerMap />} />
          <Route path="/shopify-law-enforcement-portal" element={<ShopifyLawEnforcementPortal />} />
          <Route path="/apk-analyzer" element={<ApkAnalyzer />} />
          <Route path="/car-model-recognizer" element={<CarModelRecognizer />} />
          <Route path="/live-flight-schedules-viewer" element={<LiveFlightSchedulesViewer />} />
          <Route path="/real-time-flight-tracker" element={<RealTimeFlightTracker />} />
          <Route path="/live-ship-tracker" element={<LiveShipTracker />} />
          <Route path="/indian-rail-live-status-tracker" element={<IndianRailLiveStatusTracker />} />
          <Route path="/barcode-decoder-tool" element={<BarcodeDecoderTool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
