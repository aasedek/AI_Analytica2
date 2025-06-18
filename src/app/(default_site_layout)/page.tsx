import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services, projects, testimonials, blogPosts } from '@/lib/data';
import Image from 'next/image';
import { ArrowRight, MessageSquare } from 'lucide-react';
import AIChatAssistantDialog from '@/components/ai/ai-chat-assistant-dialog';

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/placeholder-abstract-bg.svg')" }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary mb-6 animate-slide-up [animation-delay:0.2s]">
            Unlock the Power of Your Data
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 animate-slide-up [animation-delay:0.4s]">
            Analytica AI provides cutting-edge consultation in AI, data analytics, Geoscience, and data modeling to drive innovation and growth for your business.
          </p>
          <div className="space-x-4 animate-slide-up [animation-delay:0.6s]">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${0.2 * index + 0.8}s`}}>
              <CardHeader className="items-center">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-headline text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm text-center">{service.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="link" asChild className="text-primary hover:text-accent">
                  <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Success in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${0.2 * index + 1.6}s`}}>
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={project.dataAiHint}/>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={`/projects#${project.slug}`}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0,3).map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-background p-6 rounded-lg shadow-lg animate-slide-up" style={{animationDelay: `${0.2 * index + 2.2}s`}}>
              <CardContent className="text-center">
                {testimonial.image && (
                  <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint={testimonial.dataAiHint} />
                )}
                <p className="text-muted-foreground italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/success-stories">More Success Stories</Link>
            </Button>
          </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${0.2 * index + 2.8}s`}}>
                <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={post.dataAiHint} />
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">{post.date} by {post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-primary hover:text-accent">
                    <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Floating AI Chat Assistant Button - now part of header */}
    </div>
  );
}
