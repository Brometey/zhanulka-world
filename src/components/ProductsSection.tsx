import { ProductCard } from "./ProductCard";
import tshirtCat from "@/assets/tshirt-cat.jpg";
import hoodieCat from "@/assets/hoodie-cat.jpg";
import socksCat from "@/assets/socks-cat.jpg";

export const ProductsSection = () => {
  const products = [
    {
      name: "Футболка",
      description: "Лёгкая футболка с котиком",
      price: "3 000 ₽",
      image: tshirtCat,
      imageAlt: "Белая футболка с милым принтом котёнка"
    },
    {
      name: "Худи",
      description: "Тёплое худи с котиком",
      price: "4 000 ₽",
      image: hoodieCat,
      imageAlt: "Уютное худи с принтом кошачьей мордочки"
    },
    {
      name: "Носки",
      description: "Весёлые носки с лапками",
      price: "800 ₽",
      image: socksCat,
      imageAlt: "Цветные носки с узором из кошачьих лапок"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
          Мерч
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
