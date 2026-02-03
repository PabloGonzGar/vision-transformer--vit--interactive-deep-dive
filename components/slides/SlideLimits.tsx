
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideLimits: React.FC<Props> = ({ slide }) => {
  const items = [
    { icon: 'crop_free', title: 'Dependencia Local', desc: 'El campo receptivo limitado impide capturar relaciones globales lejanas en la imagen desde las primeras capas.' },
    { icon: 'compress', title: 'Degradación de Datos', desc: 'La información espacial fina se pierde progresivamente a través de operaciones de pooling y convolución repetida.' },
    { icon: 'account_tree', title: 'Jerarquía Rígida', desc: 'La estructura fija asume que la localidad es lo más importante, dificultando la adaptación a relaciones no espaciales.' },
    { icon: 'database', title: 'Inflexibilidad a Escala', desc: 'El rendimiento de las CNN tiende a saturarse más rápido con datasets masivos comparado con los Transformers.' },
  ];

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[1280px] w-full grid lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
              {slide.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight font-display">
              {slide.title}
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
              {slide.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div key={i} className="group flex gap-5 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-dark shadow-2xl">
            <img 
              src="https://picsum.photos/seed/cnn/800/1000" 
              alt="Conceptual Tech" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2">
              <span className="text-xs font-mono text-primary font-bold">MODE: CONVOLUTIONAL</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white">visibility_off</span>
                <h3 className="text-white text-2xl font-bold font-display">Campo Receptivo Limitado</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                La CNN solo "ve" fragmentos aislados a la vez, incapaz de conectar el pixel superior izquierdo con el inferior derecho hasta capas muy profundas.
              </p>
            </div>
            
            {/* HUD Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="size-48 border border-primary/40 rounded-full animate-pulse-slow"></div>
              <div className="absolute h-px w-2/3 bg-primary/20"></div>
              <div className="absolute w-px h-2/3 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideLimits;
