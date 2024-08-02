import React, { useState, useEffect } from 'react';
import axios from 'axios';

const monthsDict = [
  { number: 1, name: 'January' },
  { number: 2, name: 'February' },
  { number: 3, name: 'March' },
  { number: 4, name: 'April' },
  { number: 5, name: 'May' },
  { number: 6, name: 'June' },
  { number: 7, name: 'July' },
  { number: 8, name: 'August' },
  { number: 9, name: 'September' },
  { number: 10, name: 'October' },
  { number: 11, name: 'November' },
  { number: 12, name: 'December' }
];

function Blog() {
  const [festivals, setFestivals] = useState([]);
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://panchang.astrosage.com/calendars/indiancalendar?language=en&date=${year}`;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      try {
        const response = await axios.get(proxyUrl + url);
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(response.data, 'text/html');
        const festivalTables = htmlDoc.querySelectorAll('table');
        const festivalData = [];

        festivalTables.forEach((table) => {
          const monthName = table.querySelector('thead th').textContent.split(" ")[0];
          if (month && monthName.toLowerCase() !== monthsDict[parseInt(month) - 1].name.toLowerCase()) {
            return;
          }

          const rows = table.querySelectorAll('tbody tr');
          rows.forEach((row) => {
            const columns = row.querySelectorAll('td');
            festivalData.push({
              month: monthName,
              date: columns[0].textContent.trim().split(" ")[0],
              day: columns[0].textContent.trim().split(" ")[1],
              name: columns[1].textContent.trim(),
            });
          });
        });

        setFestivals(festivalData);
      } catch (error) {
        console.error('Error fetching festivals:', error);
      }
    };

    fetchData();
  }, [year, month]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">Indian Festivals Calendar</h1>
      <div className="mb-6">
        <label htmlFor="year" className="block text-lg font-medium mb-2 text-gray-700">Select Year:</label>
        <input
          id="year"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="month" className="block text-lg font-medium mb-2 text-gray-700">Select Month:</label>
        <select
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Months</option>
          {monthsDict.map((m) => (
            <option key={m.number} value={m.number}>{m.name}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-4xl">
        {festivals.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No festivals found.</p>
        ) : (
          <div>
            {monthsDict.map((m) => {
              const monthFestivals = festivals.filter(fest => fest.month.toLowerCase() === m.name.toLowerCase());
              return monthFestivals.length > 0 && (
                <div key={m.number} className="mb-8">
                  <h2 className="text-3xl font-semibold mb-4 text-blue-600">{m.name}</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    {monthFestivals.map((fest, index) => (
                      <li key={index} className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                        <span className="font-semibold text-gray-800">{fest.date} {fest.month}, {fest.day}:</span> {fest.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
     <img src="calenear.webp"></img>
    </div>
  );
}

export default Blog;
