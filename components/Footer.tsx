
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer class="border-t border-[#e5e7eb] dark:border-border-dark bg-background-light dark:bg-background-dark py-10">
      <div class="flex flex-col gap-6 px-4 md:px-10 text-center container mx-auto max-w-[1280px]">
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <a class="text-[#64748b] dark:text-[#9da6b9] hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#">
            <span class="material-symbols-outlined text-[18px]">menu_book</span>
            Referencias
          </a>
          <a class="text-[#64748b] dark:text-[#9da6b9] hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#">
            <span class="material-symbols-outlined text-[18px]">description</span>
            Fuente del Paper
          </a>
          <a class="text-[#64748b] dark:text-[#9da6b9] hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#">
            <span class="material-symbols-outlined text-[18px]">code</span>
            Repo GitHub
          </a>
        </div>
        <p class="text-[#64748b] dark:text-[#586072] text-xs font-normal">© 2024 AI Education Initiative. Diseñado para Mentes Técnicas.</p>
      </div>
    </footer>
  );
};

export default Footer;
