import { Sparkles, Heart, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-20 px-4">
      <div className="container mx-auto text-center relative z-10">
        {/* Logo area */}
        <div className="mb-8 animate-bounce-soft">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-card shadow-float">
            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                <div className="w-6 h-8 bg-nursery-orange rounded-full" />
                <div className="w-6 h-8 bg-nursery-blue rounded-full" />
              </div>
              <div className="w-12 h-3 bg-nursery-green rounded-b-lg mt-1" />
              <div className="w-10 h-6 border-2 border-nursery-purple rounded-b-lg mt-1" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up">
          <span className="inline-flex items-center gap-2">
            <Star className="w-10 h-10 text-nursery-yellow animate-spin-slow" />
            <span className="text-gradient-rainbow">حضانة براعم الغد المتقدمة</span>
            <Sparkles className="w-10 h-10 text-nursery-pink animate-wiggle" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 flex-wrap justify-center">
            🎈 نبني مستقبل أطفالكم بالحب والرعاية 🧸
          </span>
        </p>

        {/* Message */}
        <div className="bg-card rounded-3xl p-8 max-w-2xl mx-auto shadow-card hover-lift animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-foreground font-medium flex items-center justify-center gap-3">
            <Heart className="w-6 h-6 text-nursery-pink animate-scale-bounce" />
            <span>وداعاً للقلق! مرحباً بطفلك في بيته الثاني</span>
            <Heart className="w-6 h-6 text-nursery-pink animate-scale-bounce" />
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#register"
            className="inline-flex items-center gap-3 bg-gradient-rainbow text-primary-foreground px-10 py-5 rounded-full text-xl font-bold shadow-playful hover-lift transition-all"
          >
            <span>سجّل طفلك الآن</span>
            <Sparkles className="w-6 h-6" />
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 text-6xl animate-float">🌟</div>
        <div className="absolute bottom-20 left-10 text-5xl animate-float-reverse">🎨</div>
        <div className="absolute top-40 left-20 text-4xl animate-bounce-soft">🎈</div>
        <div className="absolute bottom-40 right-20 text-5xl animate-float">🧸</div>
      </div>
    </section>
  );
};

export default HeroSection;
