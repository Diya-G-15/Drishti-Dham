import React from 'react';
import { Link } from 'react-router-dom';

const TempleCard = ({ temple, refId }) => {
  return (
    <Link to={`/temple/${refId}`} className='no-underline'>
      <div className=" cursor-pointer bg-white shadow-lg shadow-amber-200 rounded-lg overflow-hidden m-2 h-[700px]">
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-[360px] object-cover aspect-square object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{temple.name}</h2>
          <p className="text-gray-700 mb-2"><strong>Location:</strong> {temple.location}</p>
          <p className="text-gray-700 mb-2"><strong>Opening Time:</strong> {temple.openingTiming}</p>
           {temple.closingTiming!=="N/A"&&<p className="text-gray-700 mb-2"><strong>Closing Time:</strong> {temple.closingTiming}</p>}
          <p className="text-gray-700 mb-2"><strong>Prashad:</strong> {temple.prashad}</p>
          <p className="text-gray-700 mb-2"><strong>Establishment:</strong> {temple.establishment}</p>
          <p className="text-gray-700 mb-2"><strong>Key Information:</strong> {temple.keyInformation}</p>
          <p className="text-gray-700"><strong>Important Dates:</strong> {temple.importantDates.join(', ')}</p>
        </div>
      </div>
    </Link>
  );
};

export default TempleCard;
