import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
}

export const ProductCard = ({ name, description, price, image, imageAlt }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-card">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <p className="text-3xl font-bold text-primary">{price}</p>
        </div>
      </CardContent>
    </Card>
  );
};
