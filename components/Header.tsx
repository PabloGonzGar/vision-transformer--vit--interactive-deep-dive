
import React from 'react';

interface HeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  onHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentSlideIndex, totalSlides, onHome }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/90 backdrop-blur-md px-4 md:px-10 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={onHome}>
          <div className="size-8 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl">view_in_ar</span>
          </div>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] font-display">Grupo 6 | Vision Transformers(ViT)</h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a className="text-[#64748b] dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Intro</a>
            <a className="text-[#64748b] dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Analisis</a>
            <a className="text-[#64748b] dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Arquitectura</a>
            <a className="text-[#64748b] dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Rendimiento</a>
            <a className="text-[#64748b] dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Ética</a>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold shadow-lg shadow-primary/20">
            <span className="truncate">Download PDF</span>
          </button>
        </div>
        <div className="lg:hidden">
          <button className="p-2 text-[#111318] dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
