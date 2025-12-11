import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  subtitle, 
  title, 
  align = 'left', 
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <span className="text-bronze-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-6xl font-serif font-medium leading-tight ${light ? 'text-white' : 'text-rich-950 dark:text-white'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;