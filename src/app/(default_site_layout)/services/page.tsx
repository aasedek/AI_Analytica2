import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Services</h1>
        <p className="text-lg md:text-xl text-foreground mt-4 max-w-2xl mx-auto">
          Analytica AI offers a comprehensive suite of services designed to empower your business through data and artificial intelligence.
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-8 rounded-lg shadow-lg bg-card overflow-hidden ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
            {service.image && (
              <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={600} 
                  height={400} 
                  className="rounded-md object-cover w-full h-64 md:h-auto"
                  data-ai-hint={service.dataAiHint}
                />
              </div>
            )}
            <div className="w-full md:w-1/2 lg:w-3/5">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-headline font-semibold text-primary mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-4 text-lg">{service.description}</p>
              {service.longDescription && (
                <p className="text-foreground text-sm leading-relaxed">{service.longDescription}</p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Our Services | Analytica AI',
  description: 'Explore expert AI consultation, data analytics, Geoscience solutions, and data modeling services offered by Analytica AI.',
};
