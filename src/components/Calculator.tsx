
import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Plus, Minus, Divide, Multiply } from "lucide-react";

const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
  const [result, setResult] = useState<number | string>(0);

  const calculateResult = () => {
    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
        break;
    }
  };

  return (
    <section className="calculator bg-[#F5F5F5] py-24">
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A237E] mb-5 flex items-center justify-center gap-2">
            <CalculatorIcon className="w-8 h-8" />
            Interactive Cost Calculator
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Calculate your potential savings with our AI Phone Receptionist compared to traditional solutions.
          </p>
        </div>
        
        <div className="calculator-container max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-[#1A237E] mb-2">First Number</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B8D4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A237E] mb-2">Second Number</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B8D4]"
              />
            </div>
          </div>
          
          <div className="operation-buttons grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => setOperation('add')}
              className={`flex items-center justify-center gap-2 p-3 rounded-md transition-colors ${
                operation === 'add' ? 'bg-[#00B8D4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#1A237E]'
              }`}
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
            <button
              onClick={() => setOperation('subtract')}
              className={`flex items-center justify-center gap-2 p-3 rounded-md transition-colors ${
                operation === 'subtract' ? 'bg-[#00B8D4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#1A237E]'
              }`}
            >
              <Minus className="w-4 h-4" />
              Subtract
            </button>
            <button
              onClick={() => setOperation('multiply')}
              className={`flex items-center justify-center gap-2 p-3 rounded-md transition-colors ${
                operation === 'multiply' ? 'bg-[#00B8D4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#1A237E]'
              }`}
            >
              <Multiply className="w-4 h-4" />
              Multiply
            </button>
            <button
              onClick={() => setOperation('divide')}
              className={`flex items-center justify-center gap-2 p-3 rounded-md transition-colors ${
                operation === 'divide' ? 'bg-[#00B8D4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#1A237E]'
              }`}
            >
              <Divide className="w-4 h-4" />
              Divide
            </button>
          </div>
          
          <button
            onClick={calculateResult}
            className="w-full bg-[#1A237E] text-white py-3 rounded-md hover:bg-[#141c64] transition-colors mb-6"
          >
            Calculate
          </button>
          
          <div className="result text-center">
            <div className="text-sm font-medium text-[#777] mb-2">Result</div>
            <div className="text-2xl font-bold text-[#1A237E]">{result}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
