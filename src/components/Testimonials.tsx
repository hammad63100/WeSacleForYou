import { useRef } from 'react';
import { Star, Quote, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'David Miller',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    platform: 'Facebook',
    rating: 5,
    text: "WeScaleForYou's Amazon PPC Management completely transformed our ad strategy. Before working with them, our ACOS was at 45%. Within 3 months, they brought it down to 18% while increasing our sales by 120%. Their team is incredibly responsive and truly understands the Amazon ecosystem.",
  },
  {
    name: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    platform: 'LinkedIn',
    rating: 5,
    text: "The A+ Content they created for our products is absolutely stunning. Our conversion rate jumped from 8% to 19% after implementing their designs. They really know how to tell a brand story visually. The A-Z Brand Launch service was exactly what we needed to enter the market confidently.",
  },
  {
    name: 'Robert Thompson',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    platform: 'Fiverr',
    rating: 5,
    text: "Their Amazon Listing Optimization service is top-notch. They rewrote all our titles, bullet points, and descriptions with proper keyword research. We went from page 3 to page 1 for our main keywords within 6 weeks. The backend search term optimization was a game-changer for organic traffic.",
  },
  {
    name: 'Jennifer Davis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    platform: 'Facebook',
    rating: 5,
    text: "WeScaleForYou helped us with LLC creation and trademark filing. The process was smooth and they handled everything professionally. Getting our brand registered on Amazon Brand Registry was seamless after that. Now our products are protected and we have access to all premium seller tools.",
  },
  {
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    platform: 'LinkedIn',
    rating: 5,
    text: "Their Products Sourcing service saved us from a potential disaster. They helped us find reliable suppliers in China, negotiated better pricing, and ensured quality control. We launched 5 products with their full A-Z Brand Launch support and hit $50K monthly revenue in just 4 months!",
  },
  {
    name: 'Emily Johnson',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    platform: 'Fiverr',
    rating: 5,
    text: "We were struggling with our PPC campaigns for over a year. WeScaleForYou took over and within 60 days, our ROAS improved from 1.5x to 4.2x. Their weekly reporting and transparent communication made us feel confident in every decision. Highly recommend their Amazon PPC Management!",
  },
  {
    name: 'Christopher Anderson',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    platform: 'Facebook',
    rating: 5,
    text: "WeScaleForYou's trademark filing service was quick and hassle-free. They guided us through the entire process and got our brand protected. The LLC creation support was equally impressive. Now we're fully Brand Registered and enjoying all the benefits. Thank you, WeScaleForYou!",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-24 bg-muted/30 overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-4 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Don't just take our word for it. Hear from the brands we've helped
            scale on Amazon.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className={`relative w-full transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-muted/30 via-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-muted/30 via-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: "-50%" }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="w-[350px] aspect-square flex-shrink-0 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
              >
                <CardContent className="p-6 h-full flex flex-col items-center text-center justify-between">
                  {/* Top: Quote & Rating */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-primary fill-primary"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Middle: Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6">
                    "{testimonial.text}"
                  </p>

                  {/* Bottom: Client Profile */}
                  <div className="flex items-center gap-3 w-full pt-4 border-t border-border/30 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border border-primary/20"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className={`text-xs font-medium flex items-center gap-1.5 ${testimonial.platform === 'Facebook' ? 'text-[#1877F2]' :
                          testimonial.platform === 'LinkedIn' ? 'text-[#0A66C2]' :
                            'text-[#1DBF73]'
                        }`}>
                        {testimonial.platform === 'Facebook' && <Facebook className="w-3.5 h-3.5 fill-current" />}
                        {testimonial.platform === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5 fill-current" />}
                        {testimonial.platform === 'Fiverr' && (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M21.196 14.805c-.792 2.204-2.775 3.515-5 3.515-3.606 0-5.836-2.673-5.836-6.046 0-3.328 2.28-6.079 5.808-6.079 2.052 0 4.015 1.189 4.803 3.238l-3.003 1.259c-.389-1.026-1.125-1.516-1.92-1.516-1.42 0-2.31 1.487-2.31 3.1 0 1.58.835 2.983 2.195 2.983.89 0 1.748-.61 2.222-1.748l3.041 1.294zM7.106 18.32H3.633V5.7h3.473v12.62zm9.33-13.62c-1.252 0-2.283 1.001-2.283 2.253 0 1.252 1.031 2.253 2.283 2.253 1.252 0 2.253-1.001 2.253-2.253 0-1.252-1.001-2.253-2.253-2.253z" />
                          </svg>
                        )}
                        {testimonial.platform}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
