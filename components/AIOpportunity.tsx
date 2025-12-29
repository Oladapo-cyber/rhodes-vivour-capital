import React, { useState } from 'react';
import { Terminal, ArrowRight, Activity } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { generateMarketThesis } from '../services/geminiService';
import { InsightCategory } from '../types';
import { Link } from 'react-router-dom';

interface AIOpportunityProps {
  isStandalone?: boolean;
}

const AIOpportunity: React.FC<AIOpportunityProps> = ({ isStandalone = true }) => {
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (sector: string) => {
    setSelectedSector(sector);
    setLoading(true);
    setInsight(null);
    const thesis = await generateMarketThesis(sector);
    setLoading(false);
    setInsight(thesis);
  };

  const handleDownload = () => {
    if (!insight) return;

    const reportContent = `
RHODES-VIVOUR CAPITAL
INTELLIGENCE BRIEFING // PROPRIETARY
------------------------------------------------------------------
DATE:       ${new Date().toLocaleDateString()}
TIME:       ${new Date().toLocaleTimeString()}
SECTOR:     ${selectedSector}
SOURCE:     GEMINI 2.5 NEURAL ARCHITECTURE
CONFIDENCE: HIGH
------------------------------------------------------------------

INVESTMENT THESIS:
${insight}

------------------------------------------------------------------
This document contains proprietary insights intended solely for 
Rhodes-Vivour Capital partners. 

© ${new Date().getFullYear()} Rhodes-Vivour Capital. All rights reserved.
------------------------------------------------------------------
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rhodes-Vivour_Intelligence_${selectedSector.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className={`${isStandalone ? 'min-h-screen pt-40 pb-20' : 'py-24 md:py-32'} bg-rich-900 relative`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
            <SectionHeading subtitle="A.I. Labs" title="Africa-Centric AI Solutions" light />
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Leading the integration of cutting-edge AI solutions to enhance operations and build smarter systems for businesses and communities. We invest in state-of-the-art research hubs to nurture innovation and develop Africa-centric AI applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-xs uppercase tracking-widest text-bronze-500 mb-4">Select Investment Sector</p>
              <div className="flex flex-wrap gap-2">
                {Object.values(InsightCategory).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleGenerate(category)}
                    disabled={loading && selectedSector === category}
                    className={`px-6 py-3 text-xs uppercase tracking-wider border transition-all duration-300 ${
                      selectedSector === category 
                      ? 'border-bronze-500 bg-bronze-500/10 text-white' 
                      : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {!isStandalone && (
               <Link to="/intelligence" className="text-xs uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-colors">
                 Explore A.I. Labs Insights
               </Link>
            )}
          </div>

          <div className="lg:w-2/3">
             <div className="bg-[#050505] border border-white/10 p-1 min-h-[500px] relative shadow-2xl">
                {/* Header of the "Terminal" */}
                <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-500" />
                    <span className="text-[10px] font-mono text-gray-400">LIVE FEED // GEMINI-2.5-FLASH</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                </div>

                <div className="p-8 md:p-12 font-mono text-sm leading-relaxed">
                  {loading ? (
                    <div className="space-y-2 animate-pulse">
                      <div className="flex items-center text-bronze-500">
                        {/* FIX 1: Replaced > with &gt; */}
                        <span className="mr-2">&gt;</span>
                        <span>INITIALIZING VECTOR ANALYSIS...</span>
                      </div>
                      <div className="text-gray-600 pl-4">Parsing global macro data...</div>
                      <div className="text-gray-600 pl-4">Evaluating {selectedSector} volatility indices...</div>
                      <div className="text-gray-600 pl-4">Synthesizing output...</div>
                    </div>
                  ) : insight ? (
                    <div className="animate-fade-in space-y-6">
                      <div className="flex items-center text-bronze-500 mb-6">
                        {/* FIX 2: Replaced > with &gt; */}
                        <span className="mr-2">&gt;</span>
                        <span className="uppercase">THESIS GENERATED: {selectedSector}</span>
                        <span className="ml-auto text-xs text-gray-600">{new Date().toISOString()}</span>
                      </div>
                      
                      <div className="text-gray-300 border-l-2 border-bronze-500/50 pl-6 py-2">
                        {insight}
                      </div>

                      <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-green-500">CONFIDENCE: HIGH</span>
                        <button 
                          onClick={handleDownload}
                          className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors"
                        >
                          DOWNLOAD REPORT <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[350px] text-gray-700">
                      <Terminal className="w-12 h-12 mb-4 opacity-50" />
                      <p>AWAITING INPUT COMMAND...</p>
                    </div>
                  )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIOpportunity;