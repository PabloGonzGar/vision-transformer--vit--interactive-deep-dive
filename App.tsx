
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideType } from './types';
import Header from './components/Header';
import SlideCover from './components/slides/SlideCover';
import SlideLimits from './components/slides/SlideLimits';
import SlideArchitecture from './components/slides/SlideArchitecture';
import SlideSelfAttention from './components/slides/SlideSelfAttention';
import SlideBenchmarks from './components/slides/SlideBenchmarks';
import SlideEthics from './components/slides/SlideEthics';
import SlideReferences from './components/slides/SlideReferences';
import SlideConclusion from './components/slides/SlideConclusion';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    const slide = SLIDES[currentSlideIndex];
    switch (slide.type) {
      case SlideType.COVER: return <SlideCover slide={slide} onStart={nextSlide} />;
      case SlideType.LIMITS: return <SlideLimits slide={slide} />;
      case SlideType.ARCHITECTURE: return <SlideArchitecture slide={slide} />;
      case SlideType.SELF_ATTENTION: return <SlideSelfAttention slide={slide} />;
      case SlideType.BENCHMARKS: return <SlideBenchmarks slide={slide} />;
      case SlideType.ETHICS: return <SlideEthics slide={slide} />;
      case SlideType.REFERENCES: return <SlideReferences slide={slide} />;
      case SlideType.CONCLUSION: return <SlideConclusion slide={slide} />;
      default: return <SlideCover slide={slide} onStart={nextSlide} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentSlideIndex={currentSlideIndex} totalSlides={SLIDES.length} onHome={() => setCurrentSlideIndex(0)} />
      
      <main className="flex-grow flex flex-col relative overflow-hidden bg-grid-pattern">
        {renderSlide()}

        {/* Floating Navigation Controls */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-2 p-2 rounded-full transition-all ${currentSlideIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary/20 text-white'}`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          
          <div className="text-xs font-mono font-bold text-slate-400">
            {currentSlideIndex + 1} <span className="opacity-30">/</span> {SLIDES.length}
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className={`flex items-center gap-2 p-2 rounded-full transition-all ${currentSlideIndex === SLIDES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary/20 text-white'}`}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
