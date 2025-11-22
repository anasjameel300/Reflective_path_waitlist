import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  /* 
    MATH FOR ALIGNMENT:
    Target Viewport: iPhone X/15 Pro (375px x 812px)
    Target Scale: 0.8
    
    Scaled Width: 375 * 0.8 = 300px
    Scaled Height: 812 * 0.8 = 649.6px (Round to 650px)
    
    Bezel (Border): 12px
    
    Total Container Width: 300px + (12px * 2) = 324px
    Total Container Height: 650px + (12px * 2) = 674px
    
    This ensures the internal 'transform' fills the container perfectly without gaps or cut-offs.
  */

  return (
    <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[12px] rounded-[3rem] h-[674px] w-[324px] shadow-2xl flex flex-col overflow-hidden select-none box-border z-10">
      
      {/* Buttons */}
      <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>
      
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 w-full flex justify-center z-50 pt-3 pointer-events-none">
         <div className="bg-black h-7 w-24 rounded-full"></div>
      </div>
      
      {/* Screen Container */}
      <div className="rounded-[2.2rem] w-full h-full bg-zinc-950 relative overflow-hidden">
        
        {/* 
           Virtual Viewport: 
           We render at 375x812 (Standard) then scale down to 0.8 to fit the 300x650 hole.
        */}
        <div 
            style={{ 
                width: '375px', 
                height: '812px',
                transform: 'scale(0.8)', 
                transformOrigin: 'top left' 
            }}
            className="pointer-events-none origin-top-left"
        >
            {children}
        </div>

      </div>
    </div>
  );
};