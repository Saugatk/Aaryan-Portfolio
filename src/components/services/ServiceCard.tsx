import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  index: number;
  onSelect: (title: string) => void;
}

const ServiceCard = ({ title, description, features, price, index, onSelect }: ServiceCardProps) => {
  return (
    <Card
      className="fade-up cursor-pointer hover:shadow-lg transition-shadow"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <p className="font-semibold mb-4">{price}</p>
        <Button 
          className="w-full"
          onClick={() => onSelect(title)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
