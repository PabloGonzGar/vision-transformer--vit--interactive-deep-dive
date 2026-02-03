
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideEthics: React.FC<Props> = ({ slide }) => {
  const cards = [
    { icon: 'eco', title: 'Eficiencia Energética', color: 'text-green-400', img: 'https://picsum.photos/seed/green/400/300', desc: 'Optimización de huella de carbono mediante Green AI, poda y cuantización de modelos.' },
    { icon: 'visibility', title: 'Explicabilidad (XAI)', color: 'text-orange-400', img: 'https://picsum.photos/seed/xai/400/300', desc: 'Uso de Attention Rollout para auditar qué partes de la imagen influyen en la decisión.' },
    { icon: 'balance', title: 'Gestión de Sesgos', color: 'text-purple-400', img: 'https://picsum.photos/seed/bias/400/300', desc: 'Mitigación activa de sesgos demográficos en los datasets de entrenamiento masivos.' },
    { icon: 'shield', title: 'Seguridad', color: 'text-blue-400', img: 'https://picsum.photos/seed/sec/400/300', desc: 'Defensa contra ataques adversarios y envenenamiento de parches en modelos críticos.' },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[1100px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-primary text-sm font-black uppercase tracking-widest">{slide.label}</span>
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
                Marco Regulatorio (AI Act) y Aplicabilidad
              </h2>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-full px-5 py-2 flex items-center gap-3 shadow-lg shadow-primary/5">
              <span className="material-symbols-outlined text-primary text-xl">policy</span>
              <span className="text-primary text-xs font-black uppercase tracking-widest">Cumple Ley IA UE</span>
            </div>
          </div>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl">
            {slide.subtitle}. Asegurar el cumplimiento con los estándares globales de transparencia y robustez es ahora una restricción de ingeniería crítica.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex gap-6 items-start">
          <span className="material-symbols-outlined text-primary text-4xl shrink-0">info</span>
          <div>
            <h3 className="text-xl font-bold mb-3">Clasificación de Alto Riesgo</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              La adopción industrial de ViTs a menudo cae bajo la clasificación de <strong>Alto Riesgo</strong> en la Ley de IA de la UE, especialmente en biometría y salud. Se requiere documentación rigurosa de trazabilidad y equidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="group bg-surface-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
              <div className="h-44 relative">
                <img src={card.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 p-2.5 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/5">
                  <span className={`material-symbols-outlined ${card.color}`}>{card.icon}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideEthics;
