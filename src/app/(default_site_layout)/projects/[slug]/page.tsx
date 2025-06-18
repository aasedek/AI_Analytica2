import { projects, getProjectBySlug } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <div className="mb-8">
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary mb-4">{project.title}</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full rounded-md object-cover mb-8 shadow-md"
              data-ai-hint={project.dataAiHint}
            />
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-3">Project Overview</h2>
            <p className="text-foreground leading-relaxed mb-6">{project.longDescription || project.description}</p>
            
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-3">Outcome</h2>
            <p className="text-foreground leading-relaxed">{project.outcome}</p>
          </div>

          <aside className="md:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-md">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-3">Interested in a similar solution?</h3>
                <p className="text-muted-foreground text-sm mb-4">Let&apos;s discuss how Analytica AI can help your business achieve its goals.</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
            </div>

          </aside>
        </div>
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Analytica AI Projects`,
    description: project.description,
  };
}
