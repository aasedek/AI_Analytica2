"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service of interest."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    // In a real app, you'd send this data to a server/API
    console.log("Form submitted:", values);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch shortly.",
      variant: "default", 
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get in Touch</h1>
        <p className="text-lg md:text-xl text-foreground mt-4 max-w-2xl mx-auto">
          We&apos;re here to help. Whether you have a question about our services or want to discuss a potential project, feel free to reach out.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="bg-card p-8 md:p-10 rounded-lg shadow-xl animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6">Contact Form</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please provide as much detail as possible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6">Contact Information</h2>
          <div className="space-y-6 text-foreground">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <p className="text-muted-foreground">123 Innovation Drive, Tech City, TX 75001, USA</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a href="mailto:info@analytica.ai" className="text-muted-foreground hover:text-primary transition-colors">info@analytica.ai</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t">
             <h3 className="text-xl font-headline font-semibold text-primary mb-4">Business Hours</h3>
             <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
             <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Removed metadata export as it's not allowed in "use client" components.
// If metadata is needed for this page, it should be defined in a parent server component or layout.
