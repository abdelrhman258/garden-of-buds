import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "966501747515";
  const message = "مرحباً، أرغب في الاستفسار عن حضانة براعم الغد المتقدمة";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-nursery-green text-primary-foreground px-5 py-4 rounded-full shadow-float hover-lift animate-pulse-glow cursor-pointer group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 group-hover:animate-wiggle" />
      <span className="font-bold text-lg hidden sm:inline">تواصل معنا</span>
    </button>
  );
};

export default WhatsAppButton;
