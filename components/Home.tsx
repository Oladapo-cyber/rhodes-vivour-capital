import React from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Portfolio from './Portfolio';
import AIOpportunity from './AIOpportunity';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Philosophy isStandalone={false} />
      <Portfolio isStandalone={false} />
      <AIOpportunity isStandalone={false} />
      <Contact isStandalone={false} />
    </>
  );
};

export default Home;