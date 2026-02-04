
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideEthics: React.FC<Props> = ({ slide }) => {
  const cards = [
    { icon: 'factory', title: 'Sostenibilidad Industrial', color: 'text-green-400', img: 'https://images.unsplash.com/photo-1750969185331-e03829f72c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJlZCUyMG5ldXJvbmFsfGVufDB8fDB8fHwy', desc: 'El alto coste de entrenamiento inicial se compensa mediante transfer learning y una inferencia hasta 4 veces más eficiente que las CNN tradicionales.' },
    { icon: 'bolt', title: 'Eficiencia Energética', color: 'text-orange-400', img: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpcHxlbnwwfHwwfHx8Mg%3D%3D', desc: 'Cumplimiento del marco europeo gracias a la reducción drástica de la huella computacional en el despliegue a largo plazo.' },
    { icon: 'gavel', title: 'Gobernanza de Datos', color: 'text-purple-400', img: 'https://media.istockphoto.com/id/2191466536/es/foto/visión-de-la-tecnología-de-ia-en-diseño-abstracto-azul-y-rojo-de-alta-tecnología.webp?a=1&b=1&s=612x612&w=0&k=20&c=I_lGtidAp8ollP68c7ccFDfUvT3m_gyWDZecb-frc7s=', desc: 'Ante la falta de sesgo inductivo, la legislación exige auditorías estrictas y supervisión humana para evitar sesgos en los datasets masivos.' },
    { icon: 'visibility', title: 'Explicabilidad Nativa', color: 'text-blue-400', img: 'https://images.unsplash.com/photo-1743106436447-6cfc59017fe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhdG1hcHxlbnwwfHwwfHx8Mg%3D%3D', desc: 'Los mapas de atención permiten visualizar la toma de decisiones, cumpliendo con el requisito de transparencia del AI Act para sectores de alto riesgo.' },
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
            La adopción industrial de ViTs a menudo cae bajo la clasificación de Alto Riesgo en la Ley de IA de la UE, especialmente en biometría y salud. Se requiere documentación rigurosa de trazabilidad y equidad.
          </p>
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
