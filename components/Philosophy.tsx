import React from 'react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PhilosophyProps {
  isStandalone?: boolean;
}

const Philosophy: React.FC<PhilosophyProps> = ({ isStandalone = true }) => {
  return (
    <section className={`${isStandalone ? 'min-h-screen pt-40 pb-20' : 'py-24 md:py-32'} bg-rich-950 relative`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading subtitle="The Firm" title="Architecting Value Across Generations" light />
            <div className="h-px w-full bg-gradient-to-r from-bronze-500/50 to-transparent mb-12"></div>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-8">
              True wealth is not merely accumulated; it is engineered. 
            </p>
            <p className="text-gray-500 leading-loose font-light mb-8">
              At Rhodes-Vivour, we do not chase market trends. We analyze fundamental shifts in technology, demographics, and resource scarcity to identify value decades before it becomes obvious. Our approach is mathematical, disciplined, and relentlessly long-term.
            </p>
             <p className="text-gray-500 leading-loose font-light mb-8">
              Founded on the principles of integrity and intellectual rigor, Rhodes-Vivour serves a select group of institutional partners and ultra-high-net-worth families. We view capital not just as a financial instrument, but as a tool for shaping the trajectory of human progress.
            </p>
            
            {!isStandalone && (
              <Link to="/firm" className="inline-flex items-center text-xs uppercase tracking-widest text-bronze-500 hover:text-white transition-colors group">
                Read Full Thesis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="grid gap-8">
            {[
              { num: "01", title: "Asymmetric Upside", text: "We seek opportunities where the potential for reward vastly outweighs the calculated risk, leveraging proprietary AI modeling to identify market inefficiencies." },
              { num: "02", title: "Operator Mindset", text: "We are not passive allocators. We partner deeply with management teams, providing strategic guidance and operational expertise to catalyze growth." },
              { num: "03", title: "Global Mandate", text: "Innovation has no borders. Our capital flows seamlessly between developed and emerging markets, capturing growth wherever it manifests." }
            ].map((item, idx) => (
              <div key={idx} className="group border-b border-white/10 pb-8 hover:border-bronze-500/50 transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-bronze-200 transition-colors">{item.title}</h3>
                  <span className="text-xs font-bold text-gray-700 font-mono">{item.num}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md group-hover:text-gray-400 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;