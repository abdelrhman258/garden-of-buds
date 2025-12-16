import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg">صُنع بـ</span>
          <Heart className="w-5 h-5 text-nursery-pink fill-nursery-pink animate-scale-bounce" />
          <span className="text-lg">لأطفالكم الأعزاء</span>
        </div>
        
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} حضانة براعم الغد المتقدمة - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
