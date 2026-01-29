import { useState } from 'react';
import logoImage from '@/assets/logo.jfif';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  onClick?: () => void;
  className?: string;
}

export const AnimatedLogo = ({ onClick, className }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative block transition-transform duration-300 hover:scale-105',
        className
      )}
      style={{ perspective: '1000px' }}
    >
      {/* Glow effect behind logo */}
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-primary/30 blur-xl transition-all duration-500',
          isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        )}
      />
      
      {/* 3D Container */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? 'rotateY(15deg) rotateX(-5deg)' 
            : 'rotateY(0deg) rotateX(0deg)',
        }}
      >
        {/* Main logo image */}
        <img
          src={logoImage}
          alt="WeScaleForYou Logo"
          className="h-10 w-auto object-contain relative z-10 drop-shadow-lg"
          style={{
            filter: isHovered 
              ? 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))' 
              : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}
        />
        
        {/* 3D shadow layer */}
        <img
          src={logoImage}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 h-10 w-auto object-contain opacity-20 blur-sm"
          style={{
            transform: 'translateZ(-20px) translateY(4px) translateX(4px)',
            filter: 'brightness(0)',
          }}
        />
      </div>
      
      {/* Animated ring effect on hover */}
      <div
        className={cn(
          'absolute inset-0 rounded-full border-2 border-primary/50 transition-all duration-700',
          isHovered 
            ? 'opacity-100 scale-[2] animate-ping' 
            : 'opacity-0 scale-100'
        )}
        style={{ animationDuration: '1.5s' }}
      />
    </a>
  );
};
