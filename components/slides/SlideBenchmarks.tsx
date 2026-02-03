
import React from 'react';
import { SlideData } from '../../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, Legend } from 'recharts';

interface Props {
  slide: SlideData;
}

const accuracyData = [
  { compute: 1, vit: 74, resnet: 72 },
  { compute: 10, vit: 78, resnet: 74 },
  { compute: 50, vit: 82, resnet: 76 },
  { compute: 200, vit: 85, resnet: 77 },
  { compute: 500, vit: 88, resnet: 78 },
];

const datasetImpact = [
  { name: 'ImageNet-1k', bit: 78, vit: 73 },
  { name: 'ImageNet-21k', bit: 82, vit: 84 },
  { name: 'JFT-300M', bit: 84, vit: 89 },
];

const SlideBenchmarks: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 animate-fade-in">
      <div className="max-w-[1280px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {slide.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            {slide.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Scaling Chart */}
          <div className="lg:col-span-2 bg-surface-dark rounded-3xl border border-border-dark p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-1">Precisión vs Cómputo</h3>
                <p className="text-sm text-slate-500">Eficiencia de escalado en dataset JFT-300M</p>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-green-500/20">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span>ViT +20% EFICIENCIA</span>
              </div>
            </div>

            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f242d" />
                  <XAxis dataKey="compute" label={{ value: 'Cómputo (ExaFLOPs)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 10 }} stroke="#64748b" tick={{ fontSize: 10 }} />
                  <YAxis domain={[70, 90]} stroke="#64748b" tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11141b', border: '1px solid #1f242d', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Legend verticalAlign="top" align="right" />
                  <Line type="monotone" dataKey="vit" stroke="#135bec" strokeWidth={3} dot={{ r: 5, fill: '#135bec' }} name="ViT (Huge)" />
                  <Line type="monotone" dataKey="resnet" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: '#94a3b8' }} name="ResNet-152" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Dataset Size Impact */}
          <div className="bg-surface-dark rounded-3xl border border-border-dark p-8 flex flex-col gap-6 shadow-2xl">
            <h3 className="text-xl font-bold">Impacto de Escala</h3>
            <p className="text-sm text-slate-500">ViT requiere pre-entrenamiento masivo para superar a las CNN.</p>
            
            <div className="flex-1 w-full min-h-[250px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={datasetImpact} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#64748b" tick={{ fontSize: 10 }} width={80} />
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#11141b', border: '1px solid #1f242d', borderRadius: '12px' }}
                  />
                  <Legend verticalAlign="bottom" />
                  <Bar dataKey="bit" fill="#475569" name="BiT (ResNet)" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="vit" fill="#135bec" name="ViT-H/14" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'dataset', title: 'Eficiencia de Datos', color: 'bg-blue-900/30 text-blue-400', desc: 'ViT carece de sesgos inductivos, requiriendo datos masivos para generalizar.' },
            { icon: 'rocket_launch', title: 'Escalabilidad', color: 'bg-purple-900/30 text-purple-400', desc: 'El rendimiento escala linealmente con el cómputo y el tamaño del dataset.' },
            { icon: 'savings', title: 'Ahorro Cómputo', color: 'bg-emerald-900/30 text-emerald-400', desc: 'Requiere 2-4x menos cómputo para lograr la misma precisión que CNNs SOTA.' },
            { icon: 'memory', title: 'Hardware Ready', color: 'bg-orange-900/30 text-orange-400', desc: 'Optimizado naturalmente para el paralelismo masivo de TPUs y GPUs modernas.' }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-3xl bg-surface-dark border border-border-dark hover:border-primary/40 transition-colors group">
              <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideBenchmarks;
