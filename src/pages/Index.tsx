import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onBuyClick={scrollToContact} />
      <ProductsSection />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
