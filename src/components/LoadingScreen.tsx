import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WhiteLogo from '../images/logo/Poadium_Primary Logo White.png';

const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState('Initializing Innovation...');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadingTexts = [
    'Initializing Innovation...',
    'Preparing the Stage...',
    'Loading Creativity...',
    'Setting Innovation...',
    'Almost Ready...'
  ];

  // Particle animation for background (using the same as HeroSection)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    // Using the same colors as HeroSection
    const colors = ['#1E40AF', '#0891B2', '#FF6B35'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        return loadingTexts[(currentIndex + 1) % loadingTexts.length];
      });
    }, 1500);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
      {/* Animated background - same as HeroSection */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient Overlay - same as HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-slate-800/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Logo without rotation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity }
            }}
            className="inline-block p-6 rounded-full bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-blue-400/30 shadow-2xl"
          >
            <div className="relative">
              <motion.img 
                src={WhiteLogo} 
                alt="Poadium Logo" 
                className="w-28 h-28"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                    "drop-shadow(0 0 20px rgba(8, 145, 178, 0.7))",
                    "drop-shadow(0 0 15px rgba(255, 107, 53, 0.6))",
                    "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(30, 64, 175, 0.3)",
                    "0 0 30px 10px rgba(8, 145, 178, 0.4)",
                    "0 0 25px 8px rgba(255, 107, 53, 0.3)",
                    "0 0 20px 5px rgba(30, 64, 175, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Poadium
            </span>
          </h1>
          <p className="text-slate-300 text-xl opacity-90">
            Setting the Stage for Innovation
          </p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-slate-300 font-medium">
            {loadingText}
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center items-center space-x-2 mb-10"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                backgroundColor: [
                  "rgb(30, 64, 175)",
                  "rgb(8, 145, 178)",
                  "rgb(255, 107, 53)",
                  "rgb(30, 64, 175)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

       {/* Progress Bar with Keywords Side by Side */}
        <div className="flex items-center gap-6 mb-12">
          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 rounded-full flex-1"
          />

          {/* Loading Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm whitespace-nowrap">
              {['Innovation', 'Creativity', 'Technology', 'Solutions'].map((word, i) => (
                <motion.span
                  key={word}
                  className="text-slate-400 inline-block"
                  animate={{
                    color: [
                      "rgb(148, 163, 184)",
                      "rgb(30, 64, 175)",
                      "rgb(8, 145, 178)",
                      "rgb(255, 107, 53)",
                      "rgb(148, 163, 184)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
