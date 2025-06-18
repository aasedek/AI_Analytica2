import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Insights Blog</h1>
        <p className="text-lg md:text-xl text-foreground mt-4 max-w-2xl mx-auto">
          Stay updated with the latest trends, analysis, and expert opinions in AI, data analytics, and Geoscience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {blogPosts.map((post, index) => (
          <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up rounded-lg" style={{animationDelay: `${index * 0.15}s`}}>
            <Link href={`/blog/${post.slug}`} className="block">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={800} 
                height={450} 
                className="w-full h-56 object-cover"
                data-ai-hint={post.dataAiHint}
              />
            </Link>
            <CardHeader>
              <Link href={`/blog/${post.slug}`}>
                <CardTitle className="font-headline text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
              </Link>
              <CardDescription className="text-xs text-muted-foreground">
                {post.date} by {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-4">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="text-primary hover:text-accent p-0">
                <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Insights Blog | Analytica AI',
  description: 'Read articles and insights on AI, data analytics, and Geoscience from the experts at Analytica AI.',
};
