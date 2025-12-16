const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pink circle */}
      <div 
        className="floating-shape w-32 h-32 bg-nursery-pink animate-float"
        style={{ top: '10%', right: '5%', animationDelay: '0s' }}
      />
      {/* Blue circle */}
      <div 
        className="floating-shape w-24 h-24 bg-nursery-blue animate-float-reverse"
        style={{ top: '30%', left: '3%', animationDelay: '1s' }}
      />
      {/* Yellow circle */}
      <div 
        className="floating-shape w-20 h-20 bg-nursery-yellow animate-float"
        style={{ top: '60%', right: '8%', animationDelay: '2s' }}
      />
      {/* Green circle */}
      <div 
        className="floating-shape w-16 h-16 bg-nursery-green animate-float-reverse"
        style={{ top: '80%', left: '10%', animationDelay: '0.5s' }}
      />
      {/* Purple circle */}
      <div 
        className="floating-shape w-28 h-28 bg-nursery-purple animate-float"
        style={{ top: '45%', right: '15%', animationDelay: '1.5s' }}
      />
      {/* Orange circle */}
      <div 
        className="floating-shape w-14 h-14 bg-nursery-orange animate-float-reverse"
        style={{ top: '20%', left: '20%', animationDelay: '2.5s' }}
      />
      {/* Additional shapes */}
      <div 
        className="floating-shape w-10 h-10 bg-nursery-pink animate-bounce-soft"
        style={{ top: '70%', right: '25%', animationDelay: '0.8s' }}
      />
      <div 
        className="floating-shape w-12 h-12 bg-nursery-blue animate-bounce-soft"
        style={{ top: '15%', left: '35%', animationDelay: '1.2s' }}
      />
    </div>
  );
};

export default FloatingShapes;
