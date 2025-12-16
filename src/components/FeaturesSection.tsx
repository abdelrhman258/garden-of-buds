import { 
  GraduationCap, 
  Shield, 
  Users, 
  Palette, 
  Heart, 
  Clock,
  Utensils,
  Bus
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "منهج تعليمي متطور",
    description: "برامج تعليمية حديثة تناسب كل المراحل العمرية",
    color: "bg-nursery-purple",
  },
  {
    icon: Shield,
    title: "بيئة آمنة ومحمية",
    description: "كاميرات مراقبة على مدار الساعة وطاقم أمني مدرب",
    color: "bg-nursery-blue",
  },
  {
    icon: Users,
    title: "معلمات متخصصات",
    description: "فريق تربوي مؤهل بخبرات عالية في رعاية الأطفال",
    color: "bg-nursery-pink",
  },
  {
    icon: Palette,
    title: "أنشطة إبداعية متنوعة",
    description: "فنون، موسيقى، رياضة، ومهارات حياتية",
    color: "bg-nursery-orange",
  },
  {
    icon: Heart,
    title: "رعاية نفسية متكاملة",
    description: "اهتمام بالصحة النفسية والاجتماعية للطفل",
    color: "bg-nursery-green",
  },
  {
    icon: Clock,
    title: "ساعات مرنة",
    description: "فترات صباحية ومسائية تناسب جميع الأسر",
    color: "bg-nursery-yellow text-foreground",
  },
  {
    icon: Utensils,
    title: "وجبات صحية",
    description: "قائمة طعام متوازنة ومغذية يومياً",
    color: "bg-nursery-purple",
  },
  {
    icon: Bus,
    title: "خدمة النقل",
    description: "حافلات آمنة ومكيفة لتوصيل الأطفال",
    color: "bg-nursery-blue",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gradient-rainbow">
          لماذا تختارنا؟ ✨
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          نقدم أفضل الخدمات لأغلى ما تملكون
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background rounded-3xl p-6 shadow-card hover-lift relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-wiggle transition-transform`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🎈</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">🌈</div>
    </section>
  );
};

export default FeaturesSection;
