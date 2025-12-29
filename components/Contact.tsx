import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isStandalone = true }) => {
  return (
    <section className={`${isStandalone ? 'min-h-screen pt-40 pb-20' : 'py-24 md:py-32'} bg-rich-950 relative`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Partnership" title="Connect With Us" align="center" light className="mb-16" />
          
          <div className="bg-white/5 p-12 md:p-16 border border-white/10 backdrop-blur-sm">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent peer"
                    placeholder="Name"
                    id="name"
                  />
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mt-2 peer-focus:text-bronze-500 transition-colors">Full Name</label>
                </div>
                <div className="group">
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent peer"
                    placeholder="Organization"
                    id="org"
                  />
                  <label htmlFor="org" className="block text-xs uppercase tracking-widest text-gray-500 mt-2 peer-focus:text-bronze-500 transition-colors">Organization</label>
                </div>
              </div>

              <div className="group">
                <textarea 
                  rows={2}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-bronze-500 transition-colors resize-none placeholder-transparent peer"
                  placeholder="Inquiry"
                  id="msg"
                ></textarea>
                 <label htmlFor="msg" className="block text-xs uppercase tracking-widest text-gray-500 mt-2 peer-focus:text-bronze-500 transition-colors">Nature of Inquiry</label>
              </div>

              <div className="text-center pt-8">
                <Button type="submit" variant="primary" className="min-w-[200px]">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-400 font-serif border-t border-white/10 pt-12">
             <div>
                <h4 className="text-white text-lg mb-2">Lagos</h4>
                <p className="text-sm font-sans font-light">Victoria Island, <br/>Lagos, Nigeria</p>
             </div>
             <div>
                <h4 className="text-white text-lg mb-2">Johannesburg</h4>
                <p className="text-sm font-sans font-light">Sandton City, <br/>South Africa</p>
             </div>
             <div>
                <h4 className="text-white text-lg mb-2">Nairobi</h4>
                <p className="text-sm font-sans font-light">Westlands, <br/>Kenya</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;