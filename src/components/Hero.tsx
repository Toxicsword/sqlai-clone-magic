
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const queryInputRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (queryInputRef.current) {
        queryInputRef.current.classList.add('animate-pulse');
        setTimeout(() => {
          if (queryInputRef.current) {
            queryInputRef.current.classList.remove('animate-pulse');
          }
        }, 1000);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 animate-fade-up">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            SQL × AI = Data Intelligence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mx-auto max-w-4xl tracking-tight">
            Transform natural language into 
            <span className="text-gradient"> powerful SQL queries</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Connect your database and let AI generate flawless SQL. Save hours of coding with intelligent queries that match your intent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg button-shine">
              <span>Try free demo</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              View documentation
            </Button>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto animate-fade-up animation-delay-300">
          <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-gray-200/50">
            <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="ml-2 text-sm text-gray-500 font-medium">SQL Generator</div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="text-gray-700 font-medium">Show me all customers who spent more than $1000 last month and their purchase history</p>
              </div>
              
              <div ref={queryInputRef} className="bg-gray-950 p-5 rounded-lg font-mono text-sm text-blue-300 transition-all duration-500 ease-in-out">
                <pre>{`SELECT 
  c.customer_id, 
  c.first_name, 
  c.last_name, 
  c.email,
  SUM(o.total_amount) as total_spent,
  COUNT(o.order_id) as order_count
FROM 
  customers c
JOIN 
  orders o ON c.customer_id = o.customer_id
WHERE 
  o.order_date BETWEEN DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
  AND DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 day'
GROUP BY 
  c.customer_id, c.first_name, c.last_name, c.email
HAVING 
  SUM(o.total_amount) > 1000
ORDER BY 
  total_spent DESC;`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
