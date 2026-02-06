import {
  Target,
  FileText,
  Palette,
  Rocket,
  Shield,
  Building2,
  Package,
  LucideIcon,
} from 'lucide-react';

// Import service images
import amazonPPCImage from '@/assets/Amazon PPC Management.jpeg';
import listingOptImage from '@/assets/Amazon Listing Optimization.jpeg';
import aPlusImage from '@/assets/A+ Content & Creatives.jpeg';
import brandLaunchImage from '@/assets/A-Z Brand Launch.jpeg';
import tradeMarkImage from '@/assets/Trade Mark Filing.jpeg';
import llcImage from '@/assets/LLC  Company Creation.jpeg';
import productSourcingImage from '@/assets/Products Sourcing.jpeg';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    icon: Target,
    title: 'Amazon PPC Management',
    description:
      'We manage Amazon PPC campaigns to increase visibility, drive targeted traffic, and improve sales while keeping ad costs under control. Our focus is on data-driven optimization and consistent performance growth.',
    image: amazonPPCImage,
  },
  {
    icon: FileText,
    title: 'Amazon Listing Optimization',
    description:
      'We optimize your Amazon listings with keyword-rich titles, bullet points, descriptions, and backend search terms to improve rankings, click-through rate, and conversions.',
    image: listingOptImage,
  },
  {
    icon: Palette,
    title: 'A+ Content & Creatives',
    description:
      'We design high-quality A+ Content and creatives that clearly explain your product benefits, build brand trust, and help customers make confident buying decisions.',
    image: aPlusImage,
  },
  {
    icon: Rocket,
    title: 'A-Z Brand Launch',
    description:
      'From product research to launch strategy, we handle the complete Amazon brand launch process. This includes listing setup, pricing strategy, PPC launch, and initial growth planning.',
    image: brandLaunchImage,
  },
  {
    icon: Shield,
    title: 'Trade Mark Filing',
    description:
      'We assist with trademark filing to protect your brand name and logo, helping you secure brand ownership and eligibility for Amazon Brand Registry.',
    image: tradeMarkImage,
  },
  {
    icon: Building2,
    title: 'LLC / Company Creation',
    description:
      'We provide guidance and support for LLC or company formation, ensuring your business is set up correctly and ready to operate legally and professionally.',
    image: llcImage,
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description:
      'We help you find reliable suppliers, negotiate pricing, and ensure product quality, so you can source profitable products with confidence and reduced risk.',
    image: productSourcingImage,
  },
];
