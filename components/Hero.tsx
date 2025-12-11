import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-rich-950 text-white flex flex-col justify-center">
      
      {/* Abstract Background */}
      <div className="absolute inset-0">
        {/* Increased opacity to 50% for clear visibility */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50 animate-slow-zoom"></div>
        
        {/* Vertical gradient: Dark top for nav, transparent middle for image visibility, dark bottom for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-rich-950/80 via-transparent to-rich-950"></div>
        
        {/* Subtle radial vignette to focus attention on center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-rich-950/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col h-full justify-center">
        <div className="max-w-4xl animate-fade-up" style={{animationDelay: '0.2s'}}>
          <p className="text-bronze-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-8">
            Established 2024
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight mb-12 text-balance drop-shadow-2xl">
            Capital for the <br />
            <span className="italic text-white/90 font-light">Unimagined.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-xl leading-relaxed border-l border-bronze-500/50 pl-8 drop-shadow-lg">
            We deploy patient capital into the infrastructure of tomorrow. 
            Bridging the divide between present value and future potential.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-between container mx-auto px-6 md:px-12 items-end">
        <div className="hidden md:flex gap-16">
          <div>
            <span className="block text-3xl font-serif text-white drop-shadow-md">12B+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-300">Assets Under Management</span>
          </div>
          <div>
            <span className="block text-3xl font-serif text-white drop-shadow-md">45</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-300">Portfolio Companies</span>
          </div>
        </div>
        
        <Link 
          to="/firm"
          className="group flex items-center gap-4 text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors drop-shadow-md"
        >
          Explore
          <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-bronze-500 transition-colors backdrop-blur-sm">
            <ArrowRight className="w-4 h-4 group-hover:text-bronze-500" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;