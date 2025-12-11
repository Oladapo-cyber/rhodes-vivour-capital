import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PortfolioCompany } from '../types';
import { Link } from 'react-router-dom';

const companies: PortfolioCompany[] = [
  {
    id: '1',
    name: 'Nebula Genomics',
    category: 'BioTech',
    description: 'Personalized DNA sequencing infrastructure.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2000&auto=format&fit=crop',
    roi: 'Seed'
  },
  {
    id: '2',
    name: 'Solaris Systems',
    category: 'Energy',
    description: 'High-efficiency urban photovoltaic skins.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop',
    roi: 'Series B'
  },
  {
    id: '3',
    name: 'Quantum Ledger',
    category: 'FinTech',
    description: 'Institutional settlement layers for central banks.',
    image: 'https://images.unsplash.com/photo-1639322537228-ad714291f22c?q=80&w=2000&auto=format&fit=crop',
    roi: 'Series A'
  },
  {
    id: '4',
    name: 'AeroVantage',
    category: 'Logistics',
    description: 'Autonomous heavy-lift orbital drones.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000&auto=format&fit=crop',
    roi: 'Seed'
  },
  {
    id: '5',
    name: 'Synth-X',
    category: 'Materials',
    description: 'Carbon-negative synthetic construction materials.',
    image: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=2000&auto=format&fit=crop',
    roi: 'Series C'
  }
];

interface PortfolioProps {
  isStandalone?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isStandalone = true }) => {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  // Get the image of the currently hovered company, or default to the first one/none
  const activeImage = hoveredCompany 
    ? companies.find(c => c.id === hoveredCompany)?.image 
    : companies[0].image;

  return (
    <section className={`${isStandalone ? 'min-h-screen pt-40 pb-20' : 'py-24 md:py-32'} bg-[#080808] relative overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <SectionHeading subtitle="Portfolio" title="Selected Investments" light className="mb-0" />
          <p className="text-gray-500 max-w-xs text-sm mt-8 md:mt-0 text-right">
            Curated exposure to category-defining assets across critical sectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* List View */}
          <div className="flex-1">
            <div className="w-full">
              <div className="grid grid-cols-12 text-xs uppercase tracking-widest text-gray-600 pb-4 border-b border-white/10 mb-4">
                <div className="col-span-6 md:col-span-5">Company</div>
                <div className="col-span-3 md:col-span-3">Sector</div>
                <div className="col-span-3 md:col-span-3 text-right">Stage</div>
                <div className="col-span-0 md:col-span-1"></div>
              </div>
              
              {companies.map((company) => (
                <div 
                  key={company.id}
                  className="group grid grid-cols-12 items-center py-8 border-b border-white/5 hover:border-bronze-500/50 transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCompany(company.id)}
                  onMouseLeave={() => setHoveredCompany(null)}
                >
                  <div className="col-span-6 md:col-span-5">
                    <h3 className="text-xl md:text-3xl font-serif text-gray-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                      {company.name}
                    </h3>
                  </div>
                  <div className="col-span-3 md:col-span-3 text-sm text-gray-500 font-mono uppercase">
                    {company.category}
                  </div>
                  <div className="col-span-3 md:col-span-3 text-right text-sm text-bronze-500 font-medium">
                    {company.roi}
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
            
            {!isStandalone && (
              <div className="mt-12 text-center md:text-left">
                <Link to="/portfolio" className="inline-flex items-center text-xs uppercase tracking-widest text-white border-b border-white pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-colors">
                  View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Image Reveal (Sticky on Desktop) */}
          <div className="hidden lg:block w-1/3 relative h-[600px]">
            <div className="sticky top-32 w-full h-[500px] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <img 
                 src={activeImage} 
                 alt="Portfolio Preview"
                 className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredCompany ? 'scale-105 opacity-80' : 'scale-100 opacity-30 grayscale'}`}
               />
               <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-white font-serif italic text-2xl max-w-[200px]">
                    {hoveredCompany ? companies.find(c => c.id === hoveredCompany)?.description : "Building the future."}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;