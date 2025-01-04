import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ServiceDetailProps {
  name: string;
  description: string;
  features: string[];
  price: string;
  delivery: string;
  bestFor: string;
}

const ServiceDetail = ({ name, description, features, price, delivery, bestFor }: ServiceDetailProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">Price Range:</h4>
              <p>{price}</p>
            </div>
            <div>
              <h4 className="font-semibold">Delivery Time:</h4>
              <p>{delivery}</p>
            </div>
            <div>
              <h4 className="font-semibold">Best For:</h4>
              <p>{bestFor}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetail;
