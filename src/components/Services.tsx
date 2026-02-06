import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import badge images
import amazonAdPartner from '@/assets/Amazon ad verified partner.jfif';
import amazonAdvertising from '@/assets/Amazon advertising.jfif';
import helium10 from '@/assets/helium 10.jpg';
import pickFu from '@/assets/pickFu.png';

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Split services: first 3 for row 1, remaining 4 for row 2
  const firstRowServices = services.slice(0, 3);
  const secondRowServices = services.slice(3, 7);

  const badges = [
    { src: amazonAdPartner, alt: 'Amazon Ad Verified Partner' },
    { src: amazonAdvertising, alt: 'Amazon Advertising' },
    { src: helium10, alt: 'Helium 10' },
    { src: pickFu, alt: 'PickFu' },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Everything You Need to{' '}
            <span className="text-primary">Grow Your Amazon Business</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Welcome to WeScaleForYou — where your brand's growth happens "On the Same Floor." 
            Every detail is handled with precision by our team of seasoned ecommerce experts who live and breathe Amazon.
          </p>
        </div>

        {/* Trusted Partner Badges */}
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground mb-8">
            Trusted Partner
          </span>
          <div className="flex justify-center items-center gap-12">
            {badges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="h-25 w-auto object-contain transition-transform duration-300 hover:scale-110"
                style={{ mixBlendMode: 'multiply', background: 'transparent' }}
              />
            ))}
          </div>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {firstRowServices.map((service, index) => {
            const slug = service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '');
            
            return (
              <Link key={index} to={`/service/${slug}`} className="block h-full">
                <ServiceCard
                  {...service}
                  index={index}
                  isVisible={isVisible}
                />
              </Link>
            );
          })}
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondRowServices.map((service, index) => {
            const slug = service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '');
            
            return (
              <Link key={index + 3} to={`/service/${slug}`} className="block h-full">
                <ServiceCard
                  {...service}
                  index={index + 3}
                  isVisible={isVisible}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  image,
  index,
  isVisible,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group overflow-hidden rounded-xl border border-border/50 bg-card ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms`, transition: 'opacity 0.5s, transform 0.5s' }}
    >
      {/* Image at top */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Title and Description below image */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
