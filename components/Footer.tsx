import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rich-950 text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-12 md:mb-0">
          <h4 className="text-2xl md:text-3xl font-serif tracking-wide mb-2 uppercase">Rhodes-Vivour</h4>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Capital</p>
        </div>
        
        <div className="flex gap-8 md:gap-16">
           <div className="flex flex-col gap-4">
              <span className="text-xs text-gray-600 uppercase tracking-widest mb-2">Legal</span>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</a>
           </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/5 flex justify-center text-xs text-gray-700">
        <p>© {new Date().getFullYear()} Rhodes-Vivour Capital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;