import { blogPosts, getBlogPostBySlug } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

// Basic markdown to HTML renderer
function renderMarkdown(markdown: string) {
  // Replace ## headers
  let html = markdown.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">$1</h2>');
  // Replace ### headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-headline font-semibold mt-4 mb-2">$1</h3>');
  // Replace paragraphs
  html = html.split('\n\n').map(paragraph => {
    if (paragraph.startsWith('<h') || paragraph.trim() === '') return paragraph;
    // Replace * list items
    if (paragraph.startsWith('* ')) {
        const listItems = paragraph.split('\n').map(item => `<li class="mb-1">${item.substring(2)}</li>`).join('');
        return `<ul class="list-disc list-inside my-4 pl-4">${listItems}</ul>`;
    }
    return `<p class="text-foreground leading-relaxed mb-4">${paragraph}</p>`;
  }).join('');
  
  return { __html: html };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <div className="mb-8">
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article className="max-w-3xl mx-auto bg-card p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl">
        <header className="mb-8 border-b pb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="mr-2 h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </header>

        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full rounded-md object-cover mb-8 shadow-md"
            data-ai-hint={post.dataAiHint}
            priority // For LCP
          />
        )}
        
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={renderMarkdown(post.content)} />

      </article>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Analytica AI Blog`,
    description: post.excerpt,
  };
}
