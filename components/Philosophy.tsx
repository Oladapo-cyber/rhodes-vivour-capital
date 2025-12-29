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
            <SectionHeading subtitle="The Firm" title="Empowering Communities, Building Legacies" light />
            <div className="h-px w-full bg-gradient-to-r from-bronze-500/50 to-transparent mb-12"></div>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-8">
              Driven by a mission to inspire progress, empower communities, and build lasting legacies.
            </p>
            <p className="text-gray-500 leading-loose font-light mb-8">
              At Rhodes-Vivour Capital, we are a passionate team dedicated to unlocking Africa's vast economic potential. By combining innovative investment strategies with a deep understanding of Africa's markets, we deliver value to stakeholders and catalyze development across the continent.
            </p>
             <p className="text-gray-500 leading-loose font-light mb-8">
              With a forward-looking vision, we leverage innovative approaches to create sustainable growth and drive impactful transformations in the continent's dynamic markets. We strategically enhance value chains across key industries to build a prosperous future for Africa.
            </p>
            
            {!isStandalone && (
              <Link to="/firm" className="inline-flex items-center text-xs uppercase tracking-widest text-bronze-500 hover:text-white transition-colors group">
                Read Full Thesis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="grid gap-8">
            {[
              { num: "01", title: "Sustainable Growth", text: "We leverage innovative approaches to create sustainable growth and drive impactful transformations in Africa's dynamic markets." },
              { num: "02", title: "Value Chain Enhancement", text: "We strategically enhance value chains across key industries, from commodity trading to cutting-edge technology, creating lasting economic impact." },
              { num: "03", title: "Africa-Centric Innovation", text: "Our investments focus on developing Africa-centric solutions in agriculture, technology, and research that address the continent's unique challenges and opportunities." }
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