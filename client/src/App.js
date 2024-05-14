import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    async function fetchGainers() {
      try {
        const response = await axios.get('http://localhost:3001/top_gainers');
        setGainers(response.data);
      } catch (error) {
        console.error('Error fetching gainers:', error);
      }
    }
    fetchGainers();
  }, []);

  // Slice the top 5 gainers
  const top5Gainers = gainers.slice(0, 5);

  return (
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Top 5 Gainers</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100">Ticker</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100">Price</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100">Change Amount</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100">Change Percentage</th>
                <th className="border border-gray-300 px-4 py-2 bg-gray-100">Volume</th>
              </tr>
            </thead>
            <tbody>
              {top5Gainers.map((gainer, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{gainer.ticker}</td>
                  <td className="border border-gray-300 px-4 py-2">{gainer.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{gainer.change_amount}</td>
                  <td className="border border-gray-300 px-4 py-2">{gainer.change_percentage}</td>
                  <td className="border border-gray-300 px-4 py-2">{gainer.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
