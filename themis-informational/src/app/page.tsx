
import Image from "next/image";
import Features from "./components/Features";
export default function Home() {
  return (
    <div>
<Features/>
    </div>
  );


import About from './components/About/index'
// import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

export default function Home(){
  
  return(
    <main>
      <LandingPage/>
      <About/>
    </main>
  )



  }