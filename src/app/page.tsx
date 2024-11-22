import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";


export default function Home() {
  return (
  
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Core Tracks Section */}
      <CoreTracks />
      {/* Specialized Tracks */}
      <SpecializedTracks />
      {/* Outcome Section */}
      <ProgramOutcome />

    </main>
  
  );
}
