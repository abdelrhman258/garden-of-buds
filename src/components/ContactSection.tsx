import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gradient-rainbow">
          تواصل معنا 📞
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          نحن هنا للإجابة على جميع استفساراتكم
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+966501747515"
            className="bg-background rounded-3xl p-6 shadow-card hover-lift text-center group"
          >
            <div className="w-16 h-16 bg-nursery-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">اتصل بنا</h3>
            <p className="text-muted-foreground" dir="ltr">+966 50 174 7515</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966501747515"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background rounded-3xl p-6 shadow-card hover-lift text-center group"
          >
            <div className="w-16 h-16 bg-nursery-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">واتساب</h3>
            <p className="text-muted-foreground">راسلنا الآن</p>
          </a>

          {/* Location */}
          <div className="bg-background rounded-3xl p-6 shadow-card hover-lift text-center group">
            <div className="w-16 h-16 bg-nursery-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">الموقع</h3>
            <p className="text-muted-foreground">الرياض - حي العارض</p>
          </div>

          {/* Working Hours */}
          <div className="bg-background rounded-3xl p-6 shadow-card hover-lift text-center group">
            <div className="w-16 h-16 bg-nursery-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">ساعات العمل</h3>
            <p className="text-muted-foreground">الأحد - الخميس</p>
            <p className="text-muted-foreground">7 صباحاً - 5 مساءً</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 text-8xl opacity-10">📍</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-10">💌</div>
    </section>
  );
};

export default ContactSection;
