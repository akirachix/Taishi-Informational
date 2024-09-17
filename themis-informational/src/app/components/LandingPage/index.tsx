import { Josefin_Sans } from 'next/font/google';
import Navbar from '../Navbar';
const josefinSans = Josefin_Sans({ subsets: ['latin'] });
const LandingPage = () => {
    return (
        <div id='home' style={{ backgroundImage: 'url(/i mages/Gavel-landing-page.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative' }}>
            
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Navbar />
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 px-4 text-center">
                <h1 className={`${josefinSans.className} text-white text-2xl font-bold tracking-[.025em] ns:text-5xl w-3/5 pt-16 md:text-6xl lg:text-7xl w-4/5 dt:text-8xl w-9/12`}>
                    From Words to Verdicts: Justice, Accelerated</h1>
                <p className={`${josefinSans.className} text-white text-sm tracking-[.025em] w-full sm:w-4/5  ns:text-2xl lg:w-4/6 text-lg md:text-2xl lg:text-4xl dt:text-4xl w-2/5 py-2`}>
                    Transform spoken words into actionable insights instantly. Experience flawless
                    <b> transcription, customized summaries</b>, and immediate access to relevant
                    legal precedents—all in real-time. With Themis, make every second count towards
                    delivering fair and timely justice.</p>
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                    <button className={`${josefinSans.className} bg-[#D38816] text-white py-2 text-lg lg:text-2xl font-bold px-8 py-3 rounded-lg hover:bg-opacity-90`}>
                        Get Started</button>
                    <button className={`${josefinSans.className} border-2 py-2 border-white text-white text-lg lg:text-2xl font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-black`}>
                        Read More</button>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;