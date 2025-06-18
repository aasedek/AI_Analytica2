import type { LucideIcon } from "lucide-react";
import { Cpu, BarChartBig, Globe, Database, Star, Users, Brain, Network, Mountain, PieChart, GalleryThumbnails, LayoutGrid, Newspaper, Lightbulb, CalendarDays, Send, Bot, MessageCircle, DollarSign, Calculator } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  image?: string;
  dataAiHint?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  outcome: string;
  image: string;
  dataAiHint: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; // Markdown content
  image: string;
  dataAiHint: string;
  tags: string[];
}

export interface Testimonial {
  id:string;
  quote: string;
  name: string;
  company: string;
  image?: string;
  dataAiHint?: string;
}

export const services: Service[] = [
  {
    id: "ai-consultation",
    title: "AI Consultation",
    description: "Strategic guidance to integrate AI into your business operations effectively.",
    longDescription: "Our AI consultation services provide strategic guidance to help you identify and implement AI solutions that drive growth and efficiency. We assess your current infrastructure, identify opportunities for AI integration, and develop a roadmap for successful deployment. From machine learning model development to AI-driven automation, we cover all aspects of your AI journey.",
    icon: Brain,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "artificial intelligence"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Unlock insights from your data to make informed business decisions.",
    longDescription: "Leverage the power of your data with our advanced data analytics services. We help you collect, process, and analyze complex datasets to uncover actionable insights. Our expertise includes predictive analytics, data visualization, and business intelligence, enabling you to optimize operations and identify new market opportunities.",
    icon: BarChartBig,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "data charts"
  },
  {
    id: "geoscience",
    title: "Geoscience Solutions",
    description: "Expert analysis and modeling for geological and environmental projects.",
    longDescription: "Our Geoscience solutions offer expert analysis and modeling for a wide range of geological and environmental challenges. We utilize cutting-edge technologies and methodologies for subsurface characterization, resource estimation, and environmental impact assessment. Trust our geoscientists to deliver accurate and reliable insights for your projects.",
    icon: Globe,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "earth globe"
  },
  {
    id: "data-modeling",
    title: "Data Modeling",
    description: "Building robust and scalable data architectures for your applications.",
    longDescription: "We specialize in designing and implementing robust data models that form the backbone of your data strategy. Our services include conceptual, logical, and physical data modeling, ensuring data integrity, scalability, and performance. Whether you're building a new database or optimizing an existing one, we provide tailored solutions.",
    icon: Database,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "database servers"
  },
];

export const projects: Project[] = [
  {
    id: "project-alpha",
    slug: "predictive-maintenance-iot",
    title: "Predictive Maintenance for IoT Fleet",
    description: "Developed an AI model to predict equipment failure in a large IoT fleet, reducing downtime by 25%.",
    longDescription: "This project involved analyzing sensor data from thousands of IoT devices to build a machine learning model capable of predicting potential equipment failures. By implementing this predictive maintenance solution, the client significantly reduced operational disruptions and maintenance costs.",
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "Kafka"],
    outcome: "Reduced equipment downtime by 25% and maintenance costs by 15%.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "iot devices"
  },
  {
    id: "project-beta",
    slug: "geospatial-risk-analysis",
    title: "Geospatial Risk Analysis Platform",
    description: "Created a platform for analyzing geospatial data to assess environmental risks for infrastructure projects.",
    longDescription: "Our team built a comprehensive platform that integrates various geospatial datasets to perform advanced risk analysis for large-scale infrastructure projects. The platform provides interactive visualizations and reporting tools to support decision-making.",
    technologies: ["PostGIS", "QGIS", "React", "GeoServer"],
    outcome: "Improved risk assessment accuracy and sped up planning by 30%.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "map analysis"
  },
  {
    id: "project-gamma",
    slug: "customer-segmentation-retail",
    title: "Customer Segmentation for Retail",
    description: "Implemented a data analytics solution to segment customers, enabling targeted marketing campaigns.",
    longDescription: "We developed a customer segmentation model using advanced clustering algorithms on retail transaction data. This allowed the client to understand customer behavior better and launch highly effective, personalized marketing campaigns.",
    technologies: ["R", "Spark", "Tableau", "SQL"],
    outcome: "Increased marketing campaign ROI by 40% and customer engagement by 20%.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "retail analytics"
  },
    {
    id: "project-delta",
    slug: "ai-powered-resource-discovery",
    title: "AI-Powered Resource Discovery",
    description: "Leveraged machine learning for automated mineral deposit identification from satellite imagery.",
    longDescription: "This innovative project utilized deep learning models to analyze satellite and geological survey data, automating the early-stage identification of potential mineral deposits. This significantly accelerated the exploration lifecycle for our client in the mining sector.",
    technologies: ["Python", "PyTorch", "GDAL", "Remote Sensing"],
    outcome: "Reduced initial exploration time by 50% and identified 3 high-potential new sites.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "satellite imagery"
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: Trends to Watch",
    date: "2024-07-15",
    author: "Dr. Eva Rostova",
    excerpt: "Artificial Intelligence is rapidly transforming industries. Discover the key AI trends that will shape the future of business and how you can prepare.",
    content: "## Introduction\n\nArtificial Intelligence (AI) is no longer a futuristic concept but a present-day reality transforming industries globally. As businesses strive for greater efficiency, innovation, and competitive advantage, understanding and adopting AI technologies becomes crucial. This article explores key AI trends that are set to shape the future of business.\n\n### Trend 1: Generative AI\n\nGenerative AI, exemplified by models like GPT-4, is revolutionizing content creation, software development, and customer interaction. Businesses are leveraging these tools for everything from marketing copy to code generation, significantly boosting productivity.\n\n### Trend 2: AI Ethics and Responsible AI\n\nAs AI becomes more pervasive, the focus on ethical implications and responsible AI development is intensifying. Companies are investing in frameworks and guidelines to ensure fairness, transparency, and accountability in their AI systems.\n\n### Trend 3: AI-Powered Hyper-Automation\n\nHyper-automation, the combination of AI, machine learning, and robotic process automation (RPA), is enabling end-to-end automation of complex business processes. This trend is driving unprecedented levels of efficiency and operational excellence.\n\n## Conclusion\n\nThe future of AI in business is bright and full of opportunities. By staying informed about these trends and strategically integrating AI, organizations can unlock new potentials and redefine their industries.",
    image: "https://placehold.co/800x450.png",
    dataAiHint: "futuristic technology",
    tags: ["AI", "Business", "Trends", "Innovation"]
  },
  {
    id: "blog-2",
    slug: "unlocking-value-data-analytics",
    title: "Unlocking Business Value with Data Analytics",
    date: "2024-06-28",
    author: "John Analytica",
    excerpt: "Data is the new oil, but how do you refine it? Learn how effective data analytics can turn raw data into actionable insights and tangible business value.",
    content: "## The Power of Data\n\nIn today's digital age, businesses are inundated with data from various sources. However, raw data itself holds little value. The true power lies in the ability to analyze this data, extract meaningful insights, and use them to drive strategic decisions. This is where data analytics comes into play.\n\n### Key Areas Data Analytics Adds Value:\n\n*   **Customer Understanding:** Analyze customer behavior, preferences, and feedback to personalize experiences and improve retention.\n*   **Operational Efficiency:** Identify bottlenecks, optimize processes, and reduce costs by analyzing operational data.\n*   **Informed Decision-Making:** Move from gut feelings to data-driven strategies for product development, market entry, and resource allocation.\n*   **Risk Management:** Proactively identify and mitigate risks by analyzing historical data and predictive models.\n\n## Building a Data-Driven Culture\n\nImplementing data analytics tools is only part of the equation. Fostering a data-driven culture where employees at all levels are empowered to use data is equally important. This involves training, access to user-friendly tools, and leadership commitment.\n\n## Conclusion\n\nEffectively leveraging data analytics is no longer a luxury but a necessity for businesses looking to thrive in a competitive landscape. By investing in the right tools, talent, and culture, organizations can unlock significant business value and gain a sustainable competitive edge.",
    image: "https://placehold.co/800x450.png",
    dataAiHint: "data visualization",
    tags: ["Data Analytics", "Business Intelligence", "Big Data"]
  },
  {
    id: "blog-3",
    slug: "geoscience-tech-sustainability",
    title: "Geoscience Technology: A Pillar for Sustainability",
    date: "2024-05-10",
    author: "Dr. Terra Firma",
    excerpt: "Explore how cutting-edge geoscience technologies are playing a vital role in addressing sustainability challenges, from resource management to climate change mitigation.",
    content: "## Geoscience in the 21st Century\n\nGeoscience, the study of the Earth, has always been fundamental to understanding our planet. In the 21st century, advancements in technology have supercharged its capabilities, making it a critical pillar in our global pursuit of sustainability.\n\n### Applications in Sustainability:\n\n*   **Renewable Energy Exploration:** Geoscience techniques are crucial for identifying suitable locations for geothermal, wind, and solar energy projects.\n*   **Water Resource Management:** Understanding groundwater systems and surface water dynamics through geoscience helps in sustainable water management, especially in water-scarce regions.\n*   **Carbon Sequestration:** Geologists play a key role in identifying and characterizing sites for safe and long-term storage of CO2 emissions.\n*   **Natural Hazard Mitigation:** Advanced modeling and monitoring help predict and mitigate the impacts of earthquakes, landslides, and volcanic eruptions, protecting communities and infrastructure.\n\n## The Role of Data and AI\n\nThe integration of big data analytics and artificial intelligence is further enhancing the power of geoscience. Machine learning models can process vast amounts of geological and satellite data to identify patterns and make predictions with unprecedented accuracy and speed.\n\n## Conclusion\n\nGeoscience technology is indispensable for tackling some of the world's most pressing sustainability challenges. Continued innovation and interdisciplinary collaboration in this field will be essential for building a more resilient and sustainable future for all.",
    image: "https://placehold.co/800x450.png",
    dataAiHint: "earth layers",
    tags: ["Geoscience", "Sustainability", "Technology", "Climate Change"]
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Analytica AI transformed our approach to data. Their insights led to a 20% increase in operational efficiency. Truly game-changing!",
    name: "Sarah Chen",
    company: "CEO, Innovatech Ltd.",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "business woman"
  },
  {
    id: "testimonial-2",
    quote: "The geoscience expertise provided by Analytica AI was unparalleled. They helped us de-risk a major infrastructure project with their precise modeling.",
    name: "David Miller",
    company: "Project Director, TerraConstruct Inc.",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "male engineer"
  },
  {
    id: "testimonial-3",
    quote: "Working with Analytica AI on our AI strategy was a pivotal moment for our company. Their team is knowledgeable, professional, and delivered exceptional results.",
    name: "Maria Rodriguez",
    company: "CTO, Future Solutions Co.",
    image: "https://placehold.co/100x100.png",
    dataAiHint: "female executive"
  },
];

export const icons = {
  Cpu, BarChartBig, Globe, Database, Star, Users, Brain, Network, Mountain, PieChart, GalleryThumbnails, LayoutGrid, Newspaper, Lightbulb, CalendarDays, Send, Bot, MessageCircle, DollarSign, Calculator
};

// Helper function to get a specific blog post
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get a specific project
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
