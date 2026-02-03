
import React from 'react';
import { SlideData } from '../../types';
import { REFERENCES } from '../../constants';

interface Props {
  slide: SlideData;
}

const SlideReferences: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[960px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-widest self-start">{slide.label}</span>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">{slide.title}</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{slide.subtitle}</p>
        </div>

        <div className="flex flex-col gap-4">
          {REFERENCES.map((ref, i) => (
            <a 
              key={i}
              href={ref.src}
              target='_blank'
              className="group flex flex-col sm:flex-row gap-6 bg-surface-dark border border-border-dark hover:border-primary/40 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                <span className="material-symbols-outlined text-3xl">{ref.icon}</span>
              </div>
              
              <div className="flex-grow flex flex-col justify-center gap-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg">{ref.title}</h3>
                  {ref.tag && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">{ref.tag}</span>
                  )}
                </div>
                <p className="text-sm text-slate-500">{ref.description}</p>
                <p className="text-sm font-medium text-slate-300 mt-1">{ref.author}</p>
              </div>

              <div className="shrink-0 flex items-center justify-center text-slate-600 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideReferences;
