
import React from 'react';
import { CircleCheck } from 'lucide-react';

const Step: React.FC<{
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
}> = ({ number, title, description, isActive = false }) => {
  return (
    <div className={`relative ${isActive ? 'opacity-100' : 'opacity-70'}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className={`h-10 w-10 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {number < 4 && (
        <div className="absolute left-5 top-12 h-16 w-0.5 bg-gray-200"></div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            How SQLai works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From natural language to powerful SQL in just a few steps
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="md:w-1/2 space-y-12 animate-fade-right">
            <Step 
              number={1} 
              title="Connect Your Database" 
              description="Securely connect SQLai to your existing database with our easy setup wizard." 
              isActive={true}
            />
            <Step 
              number={2} 
              title="Ask Your Question" 
              description="Type your question in plain English - no SQL knowledge required." 
              isActive={true}
            />
            <Step 
              number={3} 
              title="Review Generated SQL" 
              description="Our AI generates optimized SQL queries that you can review and edit if needed." 
              isActive={true}
            />
            <Step 
              number={4} 
              title="Get Instant Results" 
              description="Execute the query with one click and visualize your results immediately." 
              isActive={true}
            />
          </div>
          
          <div className="md:w-1/2 animate-fade-left">
            <div className="glass-card rounded-xl overflow-hidden shadow-xl border border-gray-200/50">
              <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="ml-2 text-sm text-gray-500 font-medium">Results Preview</div>
              </div>
              
              <div className="p-6 bg-white space-y-6">
                <div className="flex items-center space-x-2 text-blue-600">
                  <CircleCheck className="h-5 w-5" />
                  <p className="font-medium">Query executed successfully</p>
                </div>
                
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1001</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Smith</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.smith@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,450.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1042</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sarah Johnson</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">sarah.j@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1,875.50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1108</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Michael Chen</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">m.chen@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1,250.75</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
