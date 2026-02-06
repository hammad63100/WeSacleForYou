import { TrendingUp, DollarSign, ShoppingCart, BarChart3, Users, Target, Activity } from 'lucide-react';
import caseStudy1 from '@/assets/casestudy1.jpg';
import caseStudy2 from '@/assets/CaseStudy2.jpg';
import caseStudy3 from '@/assets/casestudy3.jpg';
import caseStudy4 from '@/assets/casestudy4.jpg';

export const caseStudies = [
    {
        id: 'health-supplement',
        title: 'Health Supplement',
        subtitle: 'Transformative Growth in Health Niche',
        category: 'Health & Wellness',
        image: caseStudy1,
        mainStat: { value: '393%', label: 'YOY Growth' },
        stats: [
            { label: 'Net Profits', value: '$730k', icon: DollarSign },
            { label: 'Net EBITDA', value: '36.52%', icon: BarChart3 },
        ],
        description: 'Scaled to $2M ARR via profit-first scaling, organic trust building, and retention optimization.',
        fullDetails: {
            hook: '𝟮 𝗠𝗶𝗹𝗹𝗶𝗼𝗻 𝗗𝗼𝗹𝗹𝗮𝗿𝘀 𝗔𝗥𝗥! | 𝗡𝗲𝘁 𝗣𝗿𝗼𝗳𝗶𝘁𝘀 $𝟳𝟯𝟬,𝟬𝟬𝟬 𝗜𝗻 𝟭𝟮 𝗠𝗼𝗻𝘁𝗵𝘀 | 𝗬𝗢𝗬 𝟯𝟵𝟯%',
            marketplace: 'United States',
            skus: '17',
            yoyGrowth: '393%',
            netEbitda: '36.52%',
            sections: [
                {
                    title: 'Profit-First Scaling',
                    icon: TrendingUp,
                    content: [
                        'Built a SKU-level scaling framework where ad budgets increased only after hitting target contribution margins.',
                        'Rebalanced spend weekly based on net profit per SKU, not top-line ROAS.',
                        'Deprioritized volume-only products and doubled down on high repeat-purchase SKUs.'
                    ]
                },
                {
                    title: 'From Traffic to Trust: Building An Organic Advantage',
                    icon: Users,
                    content: [
                        'Optimized listings around buying intent, not just keyword density.',
                        'Used review mining to rewrite bullets, images, and A+ content around actual objections.',
                        'Leveraged Amazon Posts and brand content to increase branded search and repeat visits.',
                        'Result: Organic rankings strengthened, paid dependency dropped, and conversion rates improved across the catalog.'
                    ]
                },
                {
                    title: 'PPC System Built for Control — Not Chaos',
                    icon: Target,
                    content: [
                        'Campaigns segmented by intent (ranking, harvesting, defense, scaling).',
                        'Long-tail keywords prioritized to capture high-intent buyers at lower CPCs.',
                        'Weekly pruning of wasted spend using search term isolation and placement controls.'
                    ]
                },
                {
                    title: 'Retention & LTV Optimization',
                    icon: Activity,
                    content: [
                        'Introduced SKU-specific Subscribe & Save incentives tied to reorder behavior.',
                        'Improved post-purchase experience to increase repeat conversion.',
                        'Identified cross-sell opportunities within the brand ecosystem.',
                        'Result: Higher lifetime value per customer and more stable monthly revenue.'
                    ]
                },
                {
                    title: 'Operational Discipline that Protected Margins',
                    icon: BarChart3,
                    content: [
                        'Demand forecasting tied to real-time velocity and review velocity.',
                        'Inventory planning adjusted to avoid forced discounting and stockouts.',
                        'Cost structure reviewed quarterly to protect contribution margin as volume scaled.',
                        'Outcome: Growth without operational stress or margin erosion.'
                    ]
                }
            ]
        }
    },
    {
        id: 'home-kitchen',
        title: 'Home & Kitchen',
        subtitle: 'Margin Control & Organic Growth Strategy',
        category: 'Home & Kitchen',
        image: caseStudy2,
        mainStat: { value: '5%', label: 'TACOS' },
        stats: [
            { label: 'Sales YTD', value: '$557,933', icon: DollarSign },
            { label: 'Net EBITDA', value: '27.89%', icon: BarChart3 },
        ],
        description: 'Achieved $557,933 in sales with only 5% TACOS and $155,607 net profit in just 11 months through organic-first strategy.',
        fullDetails: {
            hook: '𝗦𝗮𝗹𝗲𝘀 𝗼𝗳 $𝟱𝟱𝟳,𝟵𝟯𝟯 𝗬𝗧𝗗 𝗪𝗶𝘁𝗵 𝗧𝗔𝗖𝗢𝗦 𝗼𝗳 𝟱% 𝗼𝗻𝗹𝘆! | 𝗡𝗲𝘁 𝗣𝗿𝗼𝗳𝗶𝘁 $𝟭𝟱𝟱,𝟲𝟬𝟳 𝗝𝘂𝘀𝘁 𝗶𝗻 𝟭𝟭 𝗠𝗼𝗻𝘁𝗵𝘀!',
            marketplace: 'United States',
            skus: '21',
            sales: '$557,933',
            netEbitda: '27.89%',
            sections: [
                {
                    title: 'The Real Challenge',
                    icon: Target,
                    content: [
                        'Kitchen & Dining is not a category where ads alone win.',
                        'Heavy keyword overlap among competitors.',
                        'Constant price undercutting.',
                        'High ad fatigue on generic keywords.',
                        'Thin margins requiring tight spend control.',
                        'The objective was not to "scale PPC", but to engineer organic sales growth while keeping ads as a support system—not a crutch.'
                    ]
                },
                {
                    title: 'Organic-First Listing Architecture',
                    icon: TrendingUp,
                    content: [
                        'Instead of chasing volume keywords, we prioritized buyer-intent keyword clusters.',
                        'Long-tail dominance over generic high-volume terms.',
                        'Clear use-case positioning (kitchen practicality > features).',
                        'Visual clarity over design clutter.',
                        'This reduced dependence on paid traffic and improved organic session value.'
                    ]
                },
                {
                    title: 'Controlled PPC Deployment',
                    icon: Activity,
                    content: [
                        'Ads were structured with strict rules: Spend allocated only to proven converters.',
                        'No over-bidding for rank vanity.',
                        'Aggressive negation to prevent budget leakage.',
                        'Separate campaigns for ranking vs revenue protection.',
                        'As a result, PPC amplified organic performance instead of inflating costs.'
                    ]
                },
                {
                    title: 'Demand Timing & Sales Curve Management',
                    icon: BarChart3,
                    content: [
                        'The sales graph shows intentional peaks, not random spikes.',
                        'Increased ad pressure only during demand-ready periods.',
                        'Pulled back during low-intent months.',
                        'Maintained consistent baseline visibility to protect ranking.',
                        'This avoided the common mistake of "always-on aggressive spend."'
                    ]
                },
                {
                    title: 'What Most Kitchen & Dining Sellers Do Wrong',
                    icon: Users,
                    content: [
                        'Overspend on ads without analyzing true profitability.',
                        'Chase rankings blindly without understanding buyer intent.',
                        'Inflate revenue while killing margins.',
                        'Our approach focused on sustainable growth with margin protection.'
                    ]
                }
            ]
        }
    },
    {
        id: 'beauty-personal-care',
        title: 'Beauty & Personal Care',
        subtitle: 'Supplements Growth Strategy',
        category: 'Supplements',
        image: caseStudy3,
        mainStat: { value: '$1.16M', label: 'Sales YTD' },
        stats: [
            { label: 'Net Profit', value: '$420,000', icon: DollarSign },
            { label: 'Net EBITDA', value: '37.54%', icon: BarChart3 },
        ],
        description: '$1,161,000 in sales with $420,000 net profit through strategic focus on product optimization and advertising efficiency.',
        fullDetails: {
            hook: '$𝟭,𝟲𝟭,𝟬𝟬𝟬 𝗦𝗮𝗹𝗲𝘀 𝗬𝗧𝗗 | 𝗡𝗲𝘁 𝗠𝗮𝗿𝗴𝗶𝗻𝘀 $𝟰𝟮𝟬,𝟬𝟬𝟬 𝗡𝗲𝘁 𝗣𝗿𝗼𝗳𝗶𝘁𝘀',
            marketplace: 'United States',
            skus: '17',
            sales: '$1,161,000',
            netEbitda: '37.54%',
            sections: [
                {
                    title: 'Strategic Focus Areas',
                    icon: Target,
                    content: [
                        'Product Optimization: Listings were rewritten with clearer titles, enhanced images, and detailed descriptions aligned with customer search behavior.',
                        'Advertising Efficiency: Campaigns were rebuilt using data-driven insights. The emphasis was on profitable keywords and refined targeting, improving Ad Sales while reducing wasted ad spend.',
                        'Customer Experience: Responding quickly to feedback and addressing pain points improved ratings and built credibility within the supplements niche.',
                        'Consistent Monitoring: Sales patterns and seasonality were analyzed monthly, helping forecast inventory and identify high-performing SKUs.'
                    ]
                },
                {
                    title: 'Key Takeaways',
                    icon: TrendingUp,
                    content: [
                        'Growth in the supplements category requires a balance between experimentation and data discipline.',
                        'Organic visibility eventually outperforms paid ads when listings are optimized for both Amazon\'s algorithm and real customer intent.',
                        'Focusing on customer experience and inventory stability builds trust and consistent performance over time.',
                        'Crossing $1.16 million in sales within a single year stands as a milestone achieved through persistence, strategy, and adaptability.',
                        'From struggling to gain traction early on to consistently maintaining six-figure monthly sales, this journey highlights the power of long-term thinking and continuous improvement.'
                    ]
                }
            ]
        }
    },
    {
        id: 'electronics-accessories',
        title: 'Sports & Outdoor',
        subtitle: 'Electronics Category Transformation',
        category: 'Electronics',
        image: caseStudy4,
        mainStat: { value: '11.6%', label: 'TACOS' },
        stats: [
            { label: 'Sales', value: '$1,139,000', icon: DollarSign },
            { label: 'Net EBITDA', value: '29.65%', icon: BarChart3 },
        ],
        description: 'Closing $1,500,000 by December-End at 11.6% TACOS with over $420K Net EBITDA through strategic optimization.',
        fullDetails: {
            hook: '𝗖𝗹𝗼𝘀𝗶𝗻𝗴 $𝟭,𝟱𝟬𝟬,𝟬𝟬𝟬 𝗯𝘆 𝗗𝗲𝗰𝗲𝗺𝗯𝗲𝗿-𝗘𝗻𝗱 𝗮𝘁 𝟭𝟭.𝟲% 𝗧𝗔𝗖𝗢𝗦 | 𝗢𝘃𝗲𝗿 $𝟰𝟮𝟬𝗞 𝗡𝗲𝘁 𝗘𝗕𝗜𝗧𝗗𝗔!',
            marketplace: 'United States',
            skus: '13',
            sales: '$1,139,000',
            netEbitda: '29.65%',
            sections: [
                {
                    title: 'Strategic Shift',
                    icon: Target,
                    content: [
                        'Optimized Product Listings: Each listing was refined with SEO-friendly titles, high-quality images, and customer-centric descriptions.',
                        'Advertising Recalibration: Campaigns were rebuilt around performance metrics—cutting underperforming keywords and scaling proven ones.',
                        'Inventory Forecasting: Advanced demand tracking reduced stock outs and overstock situations, ensuring smoother fulfillment.',
                        'Customer Feedback Integration: Product improvements were made directly from customer reviews, improving ratings and conversion rates.'
                    ]
                },
                {
                    title: 'Key Learnings',
                    icon: TrendingUp,
                    content: [
                        'Sustainable growth comes from clarity, not complexity. Simplifying campaigns and focusing on proven keywords delivered better results than broad targeting.',
                        'Inventory discipline is growth\'s silent driver. Avoiding frequent stock outs kept rankings stable and improved customer trust.',
                        'Data-led advertising wins long-term. While ACOS averaged 40%, each dollar reinvested in optimized ads strengthened organic visibility.',
                        'Customer insights are gold. Every product improvement based on feedback directly correlated with review quality and conversion lift.',
                        'In just one year, the electronics brand evolved from limited visibility to a thriving Amazon business generating over $1.1 million in sales.',
                        'Beyond numbers, the transformation reflects persistence, adaptability, and a commitment to continuous improvement.'
                    ]
                }
            ]
        }
    },
];
