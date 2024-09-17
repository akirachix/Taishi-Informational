
import About from './components/About/index'
import Features from './components/Features';
import LandingPage from "./components/LandingPage";
import TeamSection from './components/Teams';

export default function Home() {
  return (
    <main>
      <LandingPage/>
      <Features/>
      <About/>
      <TeamSection/>

    </main>
  );
}
