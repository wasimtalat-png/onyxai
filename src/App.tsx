import { Hero } from './sections/Hero';
import { Identity } from './sections/Identity';
import { ValueProposition } from './sections/ValueProposition';
import { MissionTarget } from './sections/MissionTarget';
import { Services } from './sections/Services';
import { Trust } from './sections/Trust';
import { Footer } from './sections/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="bg-onyx-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <ValueProposition />
        <MissionTarget />
        <Services />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}

export default App;
