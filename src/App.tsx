import { Hero } from "./components/hero";
import { AboutProject } from "./components/about-project";
import { ChemicalWaste } from "./components/chemical-waste";
import { DisposalSteps } from "./components/disposal-steps";
import { MaterDeiVisit } from "./components/mater-dei-visit";
import { DrVictorInterview } from "./components/dr-victor-interview";
import { FolderDownload } from "./components/folder-download";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <Hero />
      <AboutProject />
      <ChemicalWaste />
      <DisposalSteps />
      <MaterDeiVisit />
      <DrVictorInterview />
      <FolderDownload />
      <Footer />
    </div>
  );
}
