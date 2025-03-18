
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center animate-fade-up">
        <div className="glass-card py-16 px-8 md:px-12 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to transform your SQL workflow?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of developers and teams who are saving time and writing better queries with SQLai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg button-shine">
              <span>Try free demo</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
