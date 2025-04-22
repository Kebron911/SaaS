
import React, { useState } from 'react';
import { Calculator as CalculatorIcon } from "lucide-react";

const Calculator = () => {
  const [monthlyCallVolume, setMonthlyCallVolume] = useState(1000);
  const [currentReceptionistCost, setCurrentReceptionistCost] = useState(3500);
  const [aiReceptionistCost] = useState(499);

  const calculateMonthlySavings = () => {
    return currentReceptionistCost - aiReceptionistCost;
  };

  const calculateAnnualSavings = () => {
    return calculateMonthlySavings() * 12;
  };

  const calculateROI = () => {
    return ((calculateAnnualSavings() / (aiReceptionistCost * 12)) * 100).toFixed(0);
  };

  return (
    <section className="calculator bg-[#F5F5F5] py-24">
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A237E] mb-5 flex items-center justify-center gap-2">
            <CalculatorIcon className="w-8 h-8" />
            Cost Savings Calculator
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Calculate your potential savings with our AI Phone Receptionist compared to traditional solutions.
          </p>
        </div>
        
        <div className="calculator-container max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#1A237E] mb-2">
              Monthly Call Volume
            </label>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={monthlyCallVolume}
              onChange={(e) => setMonthlyCallVolume(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00B8D4]"
            />
            <div className="text-right text-sm text-gray-600 mt-1">
              {monthlyCallVolume.toLocaleString()} calls/month
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-[#1A237E] mb-2">
              Current Monthly Receptionist Cost
            </label>
            <input
              type="range"
              min="2000"
              max="10000"
              step="100"
              value={currentReceptionistCost}
              onChange={(e) => setCurrentReceptionistCost(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00B8D4]"
            />
            <div className="text-right text-sm text-gray-600 mt-1">
              ${currentReceptionistCost.toLocaleString()}/month
            </div>
          </div>

          <div className="results space-y-6">
            <div className="result-item bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Monthly AI Receptionist Cost</div>
              <div className="text-2xl font-bold text-[#00B8D4]">${aiReceptionistCost}/month</div>
            </div>

            <div className="result-item bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Your Monthly Savings</div>
              <div className="text-2xl font-bold text-[#4CAF50]">
                ${calculateMonthlySavings().toLocaleString()}/month
              </div>
            </div>

            <div className="result-item bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Your Annual Savings</div>
              <div className="text-2xl font-bold text-[#4CAF50]">
                ${calculateAnnualSavings().toLocaleString()}/year
              </div>
            </div>

            <div className="result-item bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-600">Return on Investment</div>
              <div className="text-2xl font-bold text-[#4CAF50]">{calculateROI()}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
