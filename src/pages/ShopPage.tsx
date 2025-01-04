import { Button } from "@/components/ui/button";

    const ShopPage = () => {
      const products = [
        {
          id: 1,
          name: "Ebook: Mastering Web Development",
          description: "A comprehensive guide to web development.",
          price: "रू999",
          image: "https://placehold.co/400x300",
        },
        {
          id: 2,
          name: "UI Kit for React",
          description: "A collection of UI components for React.",
          price: "रू1499",
          image: "https://placehold.co/400x300",
        },
        {
          id: 3,
          name: "SEO Checklist",
          description: "A checklist to optimize your website for search engines.",
          price: "रू499",
          image: "https://placehold.co/400x300",
        },
      ];

      return (
        <main className="pt-24">
          <section className="section-padding">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
                Shop
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-secondary/50 p-4 rounded-md fade-up">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <p className="font-bold">{product.price}</p>
                    <Button className="mt-4 w-full">Add to Cart</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      );
    };

    export default ShopPage;
