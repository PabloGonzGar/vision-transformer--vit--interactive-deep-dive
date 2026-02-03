
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideConclusion: React.FC<Props> = ({ slide }) => {

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

      <div className="max-w-[800px] w-full flex flex-col items-center z-10">
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] mb-12 relative group">
          <img 
            src="https://images.unsplash.com/photo-1670163426610-69cdc930f4e0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4000ms]" 
            alt="End Visual" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-3">
             <div className="size-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
               <span className="material-symbols-outlined text-primary text-xl">hub</span>
             </div>
             <span className="text-xs font-black font-mono uppercase tracking-[0.3em] text-white/80">End of Sequence</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black font-display text-center mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          {slide.title}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-medium text-center leading-relaxed mb-16 max-w-2xl">
          {slide.subtitle} Esperamos que este "deep dive" haya iluminado el cambio de paradigma hacia mecanismos atencionales en visión por computadora.
        </p>
      </div>
    </div>
  );
};

export default SlideConclusion;
