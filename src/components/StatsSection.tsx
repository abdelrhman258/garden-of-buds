import { Calendar, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+10",
    label: "سنوات خبرة",
    color: "bg-nursery-pink",
  },
  {
    icon: Users,
    value: "+300",
    label: "طفل سعيد",
    color: "bg-nursery-blue",
  },
  {
    icon: Award,
    value: "25",
    label: "معلمة متخصصة",
    color: "bg-nursery-green",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gradient-rainbow">
          إنجازاتنا تتحدث عنا 🏆
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-24 h-24 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-float group-hover:animate-scale-bounce transition-transform`}>
                <stat.icon className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <div className="text-5xl md:text-6xl font-black text-foreground mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-nursery-yellow rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-nursery-purple rounded-full opacity-20 blur-3xl" />
    </section>
  );
};

export default StatsSection;
