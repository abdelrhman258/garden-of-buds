import { Gift, Clock, Star, Sparkles } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="register" className="py-20 px-4 bg-gradient-rainbow relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-float max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-nursery-pink text-primary-foreground px-6 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-soft">
            <Gift className="w-5 h-5" />
            <span>عرض حصري لفترة محدودة</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              <Star className="w-8 h-8 text-nursery-yellow animate-spin-slow" />
              عرض خاص لأول 20 عائلة!
              <Star className="w-8 h-8 text-nursery-yellow animate-spin-slow" />
            </span>
          </h2>

          {/* Offer details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-xl">
              <Sparkles className="w-6 h-6 text-nursery-orange" />
              <span className="text-foreground font-medium">خصم 30% على رسوم التسجيل</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
              <Sparkles className="w-6 h-6 text-nursery-green" />
              <span className="text-foreground font-medium">شهر مجاني عند التسجيل السنوي</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
              <Sparkles className="w-6 h-6 text-nursery-purple" />
              <span className="text-foreground font-medium">حقيبة مدرسية وزي هدية</span>
            </div>
          </div>

          {/* Timer indicator */}
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-8">
            <Clock className="w-5 h-5 text-nursery-pink" />
            <span>العرض ساري حتى نفاد العدد</span>
          </div>

          {/* CTA */}
          <div>
            <a
              href="https://wa.me/966501747515"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-nursery-green text-primary-foreground px-10 py-5 rounded-full text-xl font-bold shadow-playful hover-lift transition-all"
            >
              <span>احجز مقعد طفلك الآن</span>
              <Gift className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating emojis */}
      <div className="absolute top-10 right-10 text-5xl animate-float">🎁</div>
      <div className="absolute bottom-10 left-10 text-5xl animate-float-reverse">🎉</div>
      <div className="absolute top-1/2 left-5 text-4xl animate-bounce-soft">⭐</div>
      <div className="absolute top-1/2 right-5 text-4xl animate-bounce-soft" style={{ animationDelay: '0.5s' }}>✨</div>
    </section>
  );
};

export default OfferSection;
