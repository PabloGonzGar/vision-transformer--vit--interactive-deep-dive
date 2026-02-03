
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideConclusion: React.FC<Props> = ({ slide }) => {
  const contacts = [
    { icon: 'mail', label: 'Questions?', val: 'contact@vit-research.edu' },
    { icon: 'code', label: 'Source Code', val: 'github.com/vit-demo' },
    { icon: 'article', label: 'Original Paper', val: 'ArXiv:2010.11929' },
    { icon: 'school', label: 'Learn More', val: 'Hugging Face Course' },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

      <div className="max-w-[800px] w-full flex flex-col items-center z-10">
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] mb-12 relative group">
          <img 
            src="https://picsum.photos/seed/future/1200/600" 
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

        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-[640px]">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary/40 transition-all group cursor-pointer">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">{c.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{c.label}</span>
                <span className="text-sm font-bold">{c.val}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-center gap-2 opacity-30 text-xs font-black uppercase tracking-[0.2em]">
           <span className="material-symbols-outlined text-sm">copyright</span>
           2024 AI Education Initiative
        </div>
      </div>
    </div>
  );
};

export default SlideConclusion;
