
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
  onStart: () => void;
}

const SlideCover: React.FC<Props> = ({ slide, onStart }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <div className="max-w-[960px] w-full relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative overflow-hidden rounded-2xl bg-surface-dark shadow-2xl border border-white/5 p-12 md:p-20 flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{slide.label}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500 font-display">
            {slide.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {slide.subtitle}
          </p>

          <button 
            onClick={onStart}
            className="group flex items-center justify-center gap-3 rounded-xl bg-primary hover:bg-blue-600 px-10 py-5 text-white shadow-xl shadow-blue-500/20 transition-all transform hover:scale-105"
          >
            <span className="font-bold text-lg">Comenzar presentación</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
          </button>

          <div className="mt-16 pt-8 border-t border-white/5 w-full">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Autores</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium text-slate-300">
              {['Jorge Gomez', 'Antonio Perez', 'Isabel Curado', 'Pablo Gonzalez'].map(name => (
                <span key={name} className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCover;
