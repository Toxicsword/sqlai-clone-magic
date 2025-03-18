
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingPlan: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay: string;
}> = ({ name, price, description, features, isPopular = false, buttonText, delay }) => {
  return (
    <div className={`glass-card rounded-xl p-8 ${isPopular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'} animate-fade-up ${delay}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== 'Free' && <span className="text-gray-500 ml-2">/month</span>}
        </div>
        <p className="text-gray-600 mt-3">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={`w-full py-6 ${isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} button-shine`}>
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "Free",
      description: "Perfect for trying out SQLai",
      features: [
        "100 queries per month",
        "Single database connection",
        "Basic query generation",
        "Community support"
      ],
      buttonText: "Get started",
      delay: "animation-delay-100"
    },
    {
      name: "Professional",
      price: "$49",
      description: "For individual developers",
      features: [
        "1,000 queries per month",
        "5 database connections",
        "Advanced query generation",
        "Query history & saving",
        "Email support",
        "No SQL branding"
      ],
      isPopular: true,
      buttonText: "Start free trial",
      delay: "animation-delay-200"
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For teams and organizations",
      features: [
        "Unlimited queries",
        "Unlimited database connections",
        "Custom integrations",
        "Team collaboration",
        "24/7 priority support",
        "Advanced security features",
        "Custom training"
      ],
      buttonText: "Contact sales",
      delay: "animation-delay-300"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Choose the plan that's right for you
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees or long-term commitments. All plans include core features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              delay={plan.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
