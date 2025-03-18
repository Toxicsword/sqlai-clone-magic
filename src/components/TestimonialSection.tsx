
import React from 'react';
import { Star } from 'lucide-react';

const Testimonial: React.FC<{
  content: string;
  author: string;
  role: string;
  company: string;
  delay: string;
}> = ({ content, author, role, company, delay }) => {
  return (
    <div className={`glass-card p-8 rounded-xl animate-fade-up ${delay}`}>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{content}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">{role}, {company}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content: "SQLai has transformed how our team works with databases. What used to take hours now takes seconds, and the queries are flawless.",
      author: "Jennifer Lee",
      role: "CTO",
      company: "TechVision Inc.",
      delay: "animation-delay-100"
    },
    {
      content: "As someone who doesn't know SQL well, this tool has been incredible. I can now get the data I need without bothering our developers.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "Dataflow",
      delay: "animation-delay-200"
    },
    {
      content: "The query optimization feature alone has improved our database performance by 40%. This tool pays for itself.",
      author: "David Chen",
      role: "Database Administrator",
      company: "Enterprise Solutions",
      delay: "animation-delay-300"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Loved by developers and teams
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who have transformed their workflow with SQLai
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
