import { projects } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Projects</h1>
        <p className="text-lg md:text-xl text-foreground mt-4 max-w-2xl mx-auto">
          Discover how Analytica AI has delivered impactful solutions for clients across various industries.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <Card key={project.id} id={project.slug} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up rounded-lg" style={{animationDelay: `${index * 0.15}s`}}>
            <Image 
              src={project.image} 
              alt={project.title} 
              width={600} 
              height={400} 
              className="w-full h-56 object-cover"
              data-ai-hint={project.dataAiHint}
            />
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div>
                <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Outcome:</h4>
                <p className="text-muted-foreground text-sm">{project.outcome}</p>
              </div>
            </CardContent>
            <CardFooter>
               {/* Link to a dedicated project page if it exists, otherwise just for scrolling on this page */}
               {/* For now, we don't have individual project pages, so it will just be an anchor. */}
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 w-full">
                <Link href={`/projects/${project.slug}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Our Projects | Analytica AI',
  description: 'Browse a gallery of successful projects completed by Analytica AI, showcasing our expertise in AI, data analytics, and Geoscience.',
};
