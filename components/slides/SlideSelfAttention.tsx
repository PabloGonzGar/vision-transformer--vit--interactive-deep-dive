
import React from 'react';
import { SlideData } from '../../types';

interface Props {
  slide: SlideData;
}

const SlideSelfAttention: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-1 flex items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[1280px] w-full grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              {slide.label}
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight font-display">
              Mecanismo de <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Auto-Atención</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              {slide.subtitle} Permite al modelo ponderar la importancia de diferentes parches entre sí.
            </p>
          </div>

          <div className="rounded-3xl bg-surface-dark border border-border-dark p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl font-display italic font-bold tracking-widest text-white leading-relaxed">
                Attention(Q,K,V) = softmax(<div className="inline-flex flex-col align-middle mx-3">
                  <div className="border-b border-current pb-1">QK<sup>T</sup></div>
                  <div className="text-lg md:text-3xl pt-1">√d<sub>k</sub></div>
                </div>)V
              </div>
              <div className="px-5 py-2 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-widest border border-primary/30">
                Atención de Producto Escalar Escalado
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all group">
              <div className="bg-primary/10 p-2 rounded-lg h-fit text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">data_array</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Interacción de Tensores</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Queries (búsqueda), Keys (índice) y Values (contenido) proyectan el espacio latente.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all group">
              <div className="bg-primary/10 p-2 rounded-lg h-fit text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">grain</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Palabras Visuales</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Los parches actúan como tokens. El modelo calcula afinidad entre cada par de la imagen.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl bg-surface-dark border border-border-dark overflow-hidden shadow-2xl flex flex-col h-full">
            <div className="p-5 border-b border-border-dark bg-white/5 flex justify-between items-center">
              <h3 className="font-bold text-xs uppercase tracking-widest text-slate-400">Visualización de la Matriz</h3>
              <span className="material-symbols-outlined text-primary">grid_on</span>
            </div>
            <div className="relative flex-1 min-h-[400px] bg-black">
              <img src="https://images.unsplash.com/photo-1676302440263-c6b4cea29567?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdGhzfGVufDB8fDB8fHwy" className="w-full h-full object-cover opacity-80" alt="Heatmap" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></div>
                  <span className="text-sm font-bold">Alta Atentividad</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Las áreas más claras indican métricas de relevancia más fuertes entre parches de imagen específicos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              A diferencia de las CNN que se enfocan en lo local, la Matriz de Atención permite una <strong>conectividad global</strong> desde la primera capa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSelfAttention;
