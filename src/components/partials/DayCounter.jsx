import React from 'react';

const DayCounter = ({ totalDays, completedDays }) => {
  const daysLeft = totalDays - completedDays;

  return (
    <div className="flex gap-5 justify-center">
      <div>
        <h2 className="text-xl  bg-primary-100 px-2 rounded-full text-white">Days left: {daysLeft}</h2>
      </div>
      <div>
        <h2 className="text-xl  bg-green-500 px-2 rounded-full text-white">Days completed: {completedDays}</h2>
      </div>
    </div>
  );
};

export default DayCounter;
