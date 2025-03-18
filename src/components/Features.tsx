
import React from 'react';
import { Database, Code, Terminal, Brain, LayoutDashboard, Lock } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div className={`glass-card p-6 rounded-xl animate-fade-up ${delay}`}>
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Multiple Database Support",
      description: "Connect to PostgreSQL, MySQL, SQLite, SQL Server, Oracle, and more with seamless integration.",
      delay: "animation-delay-100"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Query Generation",
      description: "Convert natural language to optimized SQL queries with our advanced language model.",
      delay: "animation-delay-200"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Query Optimization",
      description: "Automatically optimize and enhance your queries for better performance and efficiency.",
      delay: "animation-delay-300"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Interactive Console",
      description: "Test and refine queries in real-time with our responsive interactive console.",
      delay: "animation-delay-400"
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Result Visualization",
      description: "Visualize query results with beautiful charts and graphs for better data insights.",
      delay: "animation-delay-500"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to keep your data safe and protected.",
      delay: "animation-delay-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Everything you need for SQL mastery
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines AI intelligence with powerful database tools to streamline your workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
