import { CheckCircle2, Users, Zap, TrendingUp, BarChart, Shield } from 'lucide-react';
import { useScrollAnimation, useCounter } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: BarChart,
    title: 'Data-Driven PPC Strategy',
    description:
      'High-performing keyword selection, competitor analysis, bid optimization for cost efficiency, and seasonal trend-based adjustments.',
  },
  {
    icon: Zap,
    title: 'Full Campaign Management',
    description:
      'Sponsored Product Ads, Sponsored Brand Ads, Sponsored Display Ads, and Video Ads — we manage it all to maximize your reach.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization & A/B Testing',
    description:
      'A/B testing ad copies, creatives, and bids. Negative keyword management and ad scheduling for peak performance.',
  },
  {
    icon: Shield,
    title: 'Cost-Effective Budget Management',
    description:
      'Every dollar counts. We focus on the lowest ACoS (Advertising Cost of Sales) to increase profitability without overspending.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics & Reporting',
    description:
      'Sales and conversion tracking, CTR analysis, CPC breakdown, and ROI evaluation to keep you informed.',
  },
  {
    icon: Users,
    title: 'An Extension of Your Team',
    description:
      'WeScaleForYou integrates seamlessly with your business — flexibility, collaboration, and transparency you\'d expect internally.',
  },
];

const stats = [
  { value: 42, suffix: '%', label: 'Avg. Conversion Increase' },
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 10, suffix: 'M+', label: 'Revenue Generated' },
  { value: 24, suffix: '/7', label: 'Dedicated Support' },
];

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="why-us" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Why Choose Us
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Your Success is{' '}
            <span className="text-primary">Our Priority</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            We combine expertise, technology, and dedication to deliver
            exceptional results for Amazon sellers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={statsVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
  isVisible,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Icon Container with Rotating Ring */}
        <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
          {/* Rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary animate-[spin_12s_linear_infinite_reverse]" />

          {/* Inner circle */}
          <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors z-10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({
  value,
  suffix,
  label,
  isVisible,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  index: number;
}) => {
  const count = useCounter(value, 2000, isVisible);

  return (
    <div
      className={`flex flex-col items-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-6">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-accent/20 animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

        {/* Rotating border ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />

        {/* Animated dashes ring */}
        <div className="absolute inset-2 rounded-full border-4 border-dashed border-primary animate-[spin_12s_linear_infinite_reverse]" />

        {/* Inner circle container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-card shadow-lg flex items-center justify-center border border-border/50 group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-500 z-10">
          <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/70 group-hover:scale-110 transition-transform duration-500">
            {count}
            {suffix}
          </span>
        </div>
      </div>

      {/* Label with underline effect */}
      <div className="relative">
        <div className="text-base sm:text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
          {label}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};
