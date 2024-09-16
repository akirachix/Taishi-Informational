import React from 'react';
import Image from 'next/image';

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  reversed?:boolean;
  circleColor?:string
}

export default function Features() {
  return (
    <div className="font-josefin sm:mt-10 w-full mb-2 mx-18  sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-center sm:mb-6 lg:mt-10">Features</h1>

      <div className="flex flex-col sm:mt-10 md:mt-10 sm:space-y-18 lg:space-y-18">
        <Feature
          title="Focus on the hearing, let Themis handle the notes!"
          description="With Themis' real-time transcription, never miss a moment of your virtual court sessions. Accurate, fast, reliable, and transforms spoken words into text instantly, ensuring every detail is documented and every voice is heard."
          imageSrc="/Images/landing.png"
        />

        <Feature
          title="Condense Complexity: Deliver Clarity"
          description="Turn lengthy court hearings into concise, actionable summaries tailored for you. Themis' advanced summarization cuts through the noise providing the key points, critical arguments, and decisions that matter most. Saving time and enhancing courtroom efficiency."
          imageSrc="/Images/casesummarizationn.png"
          reversed={true}
        />

        <Feature
          title="Find Precedents in a Click: Justice Made Smarter"
          description="Leverage the power of AI to match current cases with relevant precedents instantly. Themis scans vast legal databases, identifies similar cases, and provides you with the insights needed to strengthen arguments and make informed decisions. Make every case count with precision-matched legal precedents"  
          imageSrc="/Images/transcription.png"
        />
      </div>
    </div>
  );
}

const Feature = ({ title, description, imageSrc, reversed = false, circleColor = 'bg-orange-300 md:h-[280px] md:w-[280px] mt-7 h-[230px] w-[230px]' }:FeatureProps) => {
  return (
    <div className={`lg:mt-12 flex gap-10 flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center space-y-8 lg:space-y-0 lg:space-x-10 ${reversed ? 'lg:space-x-reverse' : ''}`}>
      <div className="lg:mb-20 w-full lg:w-1/2 flex justify-center relative">
        <div className={`absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] ${circleColor} rounded-full`}></div>
        <div className="relative z-10 mt-10 sm:mt-6">
          <Image 
            src={imageSrc} 
            alt={title} 
            width={300}
            height={230}
            className="w-62 h-48 md:w-58 md:h-45 sm:w-76 sm:h-56 lg:w-96 lg:h-72 object-contain"
          />
        </div>
      </div>
      <div className={`w-full lg:w-1/2 ${reversed ? 'lg:pr-5' : 'lg:pl-5'} flex items-center `}>
        <div className="lg:mb-20 space-y-3 sm:space-y-4">
          <h4 className="text-xl lg:mt-16 mb-4 ml-5 mr-5 sm:text-2xl lg:text-3xl font-semibold">{title}</h4>
          <p className="text-base ml-5 mr-5 sm:text-lg md:text-xl lg:text-2xl leading-relaxed ">{description}</p>
          
        </div>
      </div>
    </div>
  );
};


