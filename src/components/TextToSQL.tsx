
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Copy, Database } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const TextToSQL: React.FC = () => {
  const [textQuery, setTextQuery] = useState('');
  const [sqlResult, setSqlResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDb, setSelectedDb] = useState('postgresql');
  
  // Sample SQL generation examples to showcase the feature
  const examples = [
    "Show me all users who signed up last month",
    "Find the top 10 products by revenue",
    "Count active users by country"
  ];

  const databases = [
    { id: 'postgresql', name: 'PostgreSQL' },
    { id: 'mysql', name: 'MySQL' },
    { id: 'mssql', name: 'SQL Server' },
    { id: 'snowflake', name: 'Snowflake' },
    { id: 'bigquery', name: 'BigQuery' }
  ];

  const generateSQL = () => {
    if (!textQuery.trim()) return;
    
    setIsLoading(true);
    
    // Simulating API call with timeout
    setTimeout(() => {
      // Sample SQL generation based on input and selected database
      let generatedSQL = '';
      
      if (textQuery.toLowerCase().includes('users') && textQuery.toLowerCase().includes('last month')) {
        if (selectedDb === 'postgresql' || selectedDb === 'mysql') {
          generatedSQL = `SELECT 
  user_id, 
  first_name, 
  last_name, 
  email, 
  created_at
FROM 
  users
WHERE 
  created_at BETWEEN DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
  AND DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 day'
ORDER BY 
  created_at DESC;`;
        } else if (selectedDb === 'mssql') {
          generatedSQL = `SELECT 
  user_id, 
  first_name, 
  last_name, 
  email, 
  created_at
FROM 
  users
WHERE 
  created_at BETWEEN DATEADD(MONTH, -1, DATETRUNC(MONTH, GETDATE()))
  AND DATEADD(DAY, -1, DATETRUNC(MONTH, GETDATE()))
ORDER BY 
  created_at DESC;`;
        } else if (selectedDb === 'snowflake') {
          generatedSQL = `SELECT 
  user_id, 
  first_name, 
  last_name, 
  email, 
  created_at
FROM 
  users
WHERE 
  created_at BETWEEN DATE_TRUNC('MONTH', CURRENT_DATE()) - INTERVAL '1 MONTH'
  AND DATE_TRUNC('MONTH', CURRENT_DATE()) - INTERVAL '1 DAY'
ORDER BY 
  created_at DESC;`;
        } else if (selectedDb === 'bigquery') {
          generatedSQL = `SELECT 
  user_id, 
  first_name, 
  last_name, 
  email, 
  created_at
FROM 
  users
WHERE 
  created_at BETWEEN DATE_TRUNC(DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH), MONTH)
  AND DATE_SUB(DATE_TRUNC(CURRENT_DATE(), MONTH), INTERVAL 1 DAY)
ORDER BY 
  created_at DESC;`;
        }
      } else if (textQuery.toLowerCase().includes('products') && textQuery.toLowerCase().includes('revenue')) {
        if (selectedDb === 'postgresql' || selectedDb === 'mysql') {
          generatedSQL = `SELECT 
  p.product_id, 
  p.product_name, 
  SUM(oi.quantity * oi.price) as revenue
FROM 
  products p
JOIN 
  order_items oi ON p.product_id = oi.product_id
JOIN 
  orders o ON oi.order_id = o.order_id
WHERE 
  o.status = 'completed'
GROUP BY 
  p.product_id, p.product_name
ORDER BY 
  revenue DESC
LIMIT 10;`;
        } else {
          generatedSQL = `-- ${selectedDb.toUpperCase()} query for products by revenue
SELECT 
  p.product_id, 
  p.product_name, 
  SUM(oi.quantity * oi.price) as revenue
FROM 
  products p
JOIN 
  order_items oi ON p.product_id = oi.product_id
JOIN 
  orders o ON oi.order_id = o.order_id
WHERE 
  o.status = 'completed'
GROUP BY 
  p.product_id, p.product_name
ORDER BY 
  revenue DESC
LIMIT 10;`;
        }
      } else {
        generatedSQL = `-- Generated ${selectedDb.toUpperCase()} query based on: "${textQuery}"
SELECT 
  *
FROM 
  table_name
WHERE 
  condition = true
LIMIT 100;`;
      }
      
      setSqlResult(generatedSQL);
      setIsLoading(false);
    }, 1500);
  };

  const handleExampleClick = (example: string) => {
    setTextQuery(example);
    setSqlResult('');
  };

  const handleCopySQL = () => {
    if (!sqlResult) return;
    
    navigator.clipboard.writeText(sqlResult);
    toast("SQL copied to clipboard", {
      description: "The SQL query has been copied to your clipboard",
      position: "bottom-right",
    });
  };

  const handleSqlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSqlResult(e.target.value);
  };

  return (
    <section id="text-to-sql" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Turn plain English into SQL
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simply describe what data you need in natural language and let our AI generate the perfect SQL query
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-5 bg-white shadow-md rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="textQuery" className="block text-sm font-medium text-gray-700">
                  Describe what data you need
                </label>
                <div className="w-36">
                  <Select value={selectedDb} onValueChange={setSelectedDb}>
                    <SelectTrigger>
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <SelectValue placeholder="Select database" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {databases.map((db) => (
                        <SelectItem key={db.id} value={db.id}>
                          {db.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Textarea
                id="textQuery"
                value={textQuery}
                onChange={(e) => setTextQuery(e.target.value)}
                placeholder="e.g., Show me all users who signed up last month"
                className="min-h-[150px]"
              />
              <Button
                onClick={generateSQL}
                disabled={isLoading || !textQuery.trim()}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating SQL...
                  </span>
                ) : (
                  <span className="flex items-center">Generate SQL <ArrowRight className="ml-2 h-5 w-5" /></span>
                )}
              </Button>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-950 p-5 rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-400">Generated SQL</div>
              {sqlResult && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                  onClick={handleCopySQL}
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </Button>
              )}
            </div>
            <Textarea
              value={sqlResult}
              onChange={handleSqlChange}
              className="font-mono text-sm text-blue-300 bg-gray-950 border-gray-800 resize-none min-h-[350px] focus:ring-blue-500"
              placeholder="-- Your SQL will appear here --"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextToSQL;
