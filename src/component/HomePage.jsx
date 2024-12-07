import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Percentage Calculator</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:underline text-lg font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/percentage-calculator"
                  className="hover:underline text-lg font-medium"
                >
                  Calculator
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
          Everything You Need to Know About Percentages
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Percentages are everywhere in our daily lives! From shopping discounts 
          to understanding grades, percentages make numbers easier to compare. 
          This guide will help you learn everything about percentages, 
          their history, how to calculate them, and why they are important.
        </p>

        {/* History Section */}
        <h3 className="text-3xl font-bold text-blue-500 mt-6 mb-3">
          A Brief History of Percentages
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Did you know that percentages have been used for thousands of years? 
          The concept dates back to ancient civilizations where people used 
          fractions and proportions to divide goods or resources. The word 
          "percentage" itself comes from the Latin phrase *per centum*, which 
          means "by the hundred." In medieval Europe, percentages became 
          popular in trade and banking to calculate interest rates and taxes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Today, percentages are one of the most widely used mathematical tools. 
          From science to finance, they help simplify complex calculations and 
          make data easier to understand.
        </p>

        {/* Why Are Percentages Important? */}
        <h3 className="text-3xl font-bold text-blue-500 mt-6 mb-3">
          Why Are Percentages Important?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Percentages are not just a school math topic; they play a critical role 
          in our daily lives. Here are some common examples of why percentages 
          are important:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
          <li><strong>Shopping:</strong> Calculating discounts during sales.</li>
          <li><strong>Banking:</strong> Understanding interest rates on loans or savings.</li>
          <li><strong>Health:</strong> Tracking nutrition labels and daily intake percentages.</li>
          <li><strong>Education:</strong> Checking grades and performance scores.</li>
          <li><strong>Science:</strong> Comparing data, like growth percentages in experiments.</li>
          <li><strong>Business:</strong> Calculating profit margins and taxes.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          No matter where you look, percentages are an essential part of 
          decision-making and problem-solving.
        </p>

        {/* How to Calculate Percentages */}
        <h3 className="text-3xl font-bold text-blue-500 mt-6 mb-3">
          How to Calculate Percentages
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Calculating percentages is easy! Here’s a simple formula to remember:
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Percentage = (Part ÷ Whole) × 100
          </p>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Let’s break it down with an example:
        </p>
        <ul className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
          <li>Imagine you scored 80 out of 100 on a test.</li>
          <li>Divide your score by the total: <strong>80 ÷ 100 = 0.8</strong></li>
          <li>Multiply by 100 to convert to a percentage: <strong>0.8 × 100 = 80%</strong></li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          So, your score is <strong>80%</strong>! It’s that simple.
        </p>

        {/* Fun Facts Section */}
        <h3 className="text-3xl font-bold text-blue-500 mt-6 mb-3">
          Fun Facts About Percentages
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
          <li>The % symbol was first used in 1425 in Europe.</li>
          <li>Percentages are widely used in sports statistics to measure player performance.</li>
          <li>Most calculators have a dedicated percentage button!</li>
        </ul>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <Link to="/percentage-calculator">
            <button className="px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition">
              Start Using the Calculator
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-500 text-lg">© 2024 Percentage Calculator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
