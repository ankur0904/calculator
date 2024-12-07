// src/components/Calculator.js
import React, { useState } from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const [percentValue, setPercentValue] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [percentResult, setPercentResult] = useState("");

  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [changeResult, setChangeResult] = useState("");

  const calculatePercentage = () => {
    if (firstValue && secondValue) {
      const percentage = (parseFloat(firstValue) / 100) * parseFloat(secondValue);
      setResult(percentage.toFixed(2));
    }
  };

  const calculateWhatPercent = () => {
    if (percentValue && totalValue) {
      const percent = (parseFloat(percentValue) / parseFloat(totalValue)) * 100;
      setPercentResult(percent.toFixed(2));
    }
  };

  const calculatePercentageChange = () => {
    if (initialValue && finalValue) {
      const change =
        ((parseFloat(finalValue) - parseFloat(initialValue)) /
          parseFloat(initialValue)) *
        100;
      setChangeResult(change.toFixed(2));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Percentage Calculator
      </h1>
      <p className="text-center text-gray-700 mb-6">
        Easily calculate percentages, find out percentage changes, or calculate 
        percentage contributions using this free and simple tool.
      </p>

      {/* Section 1 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What is{" "}
          <input
            type="number"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
            className="w-20 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="X"
          />{" "}
          % of{" "}
          <input
            type="number"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
            className="w-28 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Y"
          />
          ?
        </label>
        <button
          onClick={calculatePercentage}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
        {result && (
          <p className="mt-2 text-gray-700">
            Result: <span className="font-semibold">{result}</span>
          </p>
        )}
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <input
            type="number"
            value={percentValue}
            onChange={(e) => setPercentValue(e.target.value)}
            className="w-28 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="X"
          />{" "}
          is what percent of{" "}
          <input
            type="number"
            value={totalValue}
            onChange={(e) => setTotalValue(e.target.value)}
            className="w-28 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Y"
          />
          ?
        </label>
        <button
          onClick={calculateWhatPercent}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
        {percentResult && (
          <p className="mt-2 text-gray-700">
            Result: <span className="font-semibold">{percentResult}%</span>
          </p>
        )}
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What is the percentage increase/decrease from{" "}
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
            className="w-28 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Initial"
          />{" "}
          to{" "}
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            className="w-28 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Final"
          />
          ?
        </label>
        <button
          onClick={calculatePercentageChange}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
        {changeResult && (
          <p className="mt-2 text-gray-700">
            Result: <span className="font-semibold">{changeResult}%</span>
          </p>
        )}
      </div>

      {/* Informative Section */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-xl font-bold text-blue-600 mb-3">What is Percentage?</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          A percentage is a way of expressing a number as a fraction of 100. It
          is denoted by the symbol "%". Percentages are commonly used to compare
          proportions and express statistical data.
        </p>
        <p className="text-gray-700 leading-relaxed">
          To calculate percentages, you can use the formula:
        </p>
        <p className="mt-2 bg-gray-100 p-3 rounded-lg text-gray-900">
          <strong>Percentage Formula:</strong> (Part / Whole) × 100
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          This tool helps you quickly calculate percentages and understand
          changes in values with ease.
        </p>
      </div>
    </div>
  );
};

export default Calculator;
