
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideArchitecture: React.FC<Props> = ({ slide }) => {
  const steps = [
    { num: '01', title: 'Tokenización', icon: 'grid_view', desc: 'La imagen se divide en parches cuadrados fijos (ej. 16x16) que se aplanan en vectores 1D.' },
    { num: '02', title: 'Embeddings', icon: 'pin_drop', desc: 'Se añaden vectores de posición aprendibles para retener la información espacial.' },
    { num: '03', title: 'Procesamiento', icon: 'settings_input_component', desc: 'Normalización, Auto-Atención (MSA), MLP y conexiones residuales.', highlight: true },
    { num: '04', title: 'Cabezal MLP', icon: 'output', desc: 'La salida del token [class] se introduce en un MLP final para la clasificación.' },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[1100px] w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
            <span className="material-symbols-outlined text-sm">architecture</span>
            {slide.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight font-display">
            Transformer Encoder: <span className="text-slate-500">Modularidad y Flujo de Datos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            {slide.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <div className={`flex flex-col h-full gap-4 rounded-2xl border p-6 transition-all duration-300 ${step.highlight ? 'bg-primary/10 border-primary ring-1 ring-primary/20' : 'bg-surface-dark border-border-dark hover:border-primary/40'}`}>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${step.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <span className={`text-xs font-mono font-bold ${step.highlight ? 'text-primary' : 'text-slate-500'}`}>
                    {step.num} {step.highlight && '(NÚCLEO)'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-surface-dark border border-border-dark rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b4354 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold font-display">Esquema Técnico de la Arquitectura</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="text-slate-400 text-xs font-bold">Parámetros Entrenables</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-600"></span><span className="text-slate-400 text-xs font-bold">Funciones Fijas</span></div>
              </div>
            </div>
            <div className="w-full aspect-video bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center p-8">
               <img src="https://picsum.photos/seed/vit-arch/1200/600" className="max-w-full max-h-full object-contain opacity-80" alt="Technical Arch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideArchitecture;
