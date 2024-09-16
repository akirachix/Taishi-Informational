"use client";

import React, { useState, ReactNode } from 'react';

interface CardProps {
  title: string;
  imageSrc: string;
  children: ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, children, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`p-8 md:p-12 lg:p-16 nh:p-8 transition-all duration-300 ease-in-out
                  ${isActive ? 'bg-black' : 'bg-white'} h-full flex flex-col nh:text-lg`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl nh:text-3xl font-semibold mb-6 text-center text-[#D38816]">
        {title}
      </h2>
      <div className="w-full mb-6 flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-64 lg:h-60 nh:w-24 nh:h-20 flex items-center justify-center overflow-hidden">
          <img src={imageSrc} alt={title} className="" />
        </div>
      </div>
   
      <p className={`text-base md:text-lg lg:text-xl nh:text-xl ${isActive ? 'text-[#D38816]' : 'text-black'}`}>
        {children}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div id='about' className="mx-[48px] py-14 md:py-18">
      <h1 className="text-3xl md:text-4xl lg:text-5xl nh:text-5xl font-bold text-center mx-auto mb-8 md:mb-12 font-josefin">
        About
      </h1>
 
      <p className="text-base md:text-lg lg:text-xl nh:text-xl mb-12 md:mb-16 text-center max-w-6xl mx-auto">
        This project emerged from the pressing need to enhance the efficiency of the Kenyan judicial 
        system, which faces challenges such as lengthy court processes and inadequate documentation 
        during hearings. In response, <span className="text-[#D38816] font-semibold">Themis AI</span> developed an innovative solution that utilizes artificial 
        intelligence to provide real-time transcription and generate comprehensive case briefs during 
        virtual court hearings.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 xl:gap-20 nh:gap-6">
        <Card 
          title="Mission" 
          imageSrc="/images/mission.png"
          isActive={activeCard === 'mission'}
          onMouseEnter={() => setActiveCard('mission')}
          onMouseLeave={() => setActiveCard(null)}
        >
          Our mission is to harness the power of artificial intelligence to streamline judicial operations, 
          reduce delays, and improve the overall quality of legal proceedings in Kenya.
        </Card>
        
        <Card 
          title="Vision" 
          imageSrc="/images/vision.png"
          isActive={activeCard === 'vision'}
          onMouseEnter={() => setActiveCard('vision')}
          onMouseLeave={() => setActiveCard(null)}
        >
          To revolutionize the Kenyan judiciary system by providing innovative AI solutions that enhance 
          the efficiency and accessibility of legal processes, ensuring that justice is served swiftly 
          and accurately.
        </Card>
        
        <Card 
          title="Values" 
          imageSrc="/images/values.png"
          isActive={activeCard === 'values'}
          onMouseEnter={() => setActiveCard('values')}
          onMouseLeave={() => setActiveCard(null)}
        >
          Our values are integrity, innovation, collaboration, accountability, and respect for human rights.
        </Card>
      </div>
    </div>
  );
};

export default About;