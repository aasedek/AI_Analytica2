
import { testimonials } from '@/lib/data';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react'; // Using Star for visual appeal

export default function SuccessStoriesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Client Success Stories</h1>
        <p className="text-lg md:text-xl text-foreground mt-4 max-w-2xl mx-auto">
          Hear directly from our clients about how Analytica AI has helped them achieve their goals and drive success.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.id} className="bg-card p-6 md:p-8 rounded-lg shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.15}s`}}>
            {testimonial.image && (
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                width={100} 
                height={100} 
                className="rounded-full mb-6 border-4 border-primary/20 shadow-md"
                data-ai-hint={testimonial.dataAiHint}
              />
            )}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <CardContent className="flex-grow">
              <blockquote className="text-muted-foreground italic text-lg mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-xl text-primary font-headline">{testimonial.name}</p>
              <p className="text-sm text-foreground">{testimonial.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Placeholder for Case Studies section */}
      <section className="mt-16 md:mt-24 py-12 bg-secondary rounded-lg">
        <div className="text-center">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Detailed Case Studies</h2>
            <p className="text-foreground max-w-xl mx-auto mb-8">
                Dive deeper into how we've solved complex challenges for our clients. (Coming Soon)
            </p>
            {/* Example placeholder cards for case studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
                <Card className="p-6 text-left">
                    <CardTitle className="font-headline text-lg mb-2">Case Study: Enhancing Retail Analytics</CardTitle>
                    <CardDescription>A deep dive into optimizing supply chains and customer experiences for a major retailer.</CardDescription>
                </Card>
                <Card className="p-6 text-left">
                    <CardTitle className="font-headline text-lg mb-2">Case Study: Geospatial AI for Environmental Monitoring</CardTitle>
                    <CardDescription>How AI and satellite imagery are revolutionizing environmental protection efforts.</CardDescription>
                </Card>
            </div>
        </div>
      </section>

    </div>
  );
}

export const metadata = {
  title: 'Client Success Stories | Analytica AI',
  description: 'Read testimonials and case studies from satisfied clients of Analytica AI.',
};
