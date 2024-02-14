// 사용방법 : 그냥 원하는 곳에 올리면 됩니다.

import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        opacity: .8,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5,

      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        // 파티클 사라지는 속도 (높을수록 빨리 사라짐)
        particle.opacity -= 0.01; 
        // particle.x += particle.speedX * Math.sin(performance.now() * 0.005); // 물결 모션
        // particle.y += particle.speedY * Math.cos(performance.now() * 0.005); // 물결 모션

        if (particle.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animateParticles);
    };


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef}
  style={{width:'100vw', height:'100vh', position:'absolute',
  background:'', zIndex:'1' }}>
  </canvas>;
};

export default ParticleCanvas;
