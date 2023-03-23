import React, { useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { toast } from 'react-toastify';

const CalendarBlock = ({ date, onCompletionChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const formattedDate = format(date, 'MMMM d');
  const dateParam = date.toISOString().split('T')[0];

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCompletionChange(date, newCheckedState);
    toast.info(`Block for ${formattedDate} is ${newCheckedState ? 'checked' : 'unchecked'}!`);
  };

  return (
    <div
      className={`${
        isChecked ? 'bg-green-400' : 'bg-white'
      } p-4 rounded-2xl shadow  h-28`}
    >
      <div className="flex items-center justify-between">
        <Link href={`/tasks/${dateParam}`}>
          <span className="text-black font-semibold">{formattedDate}</span>
        </Link>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default CalendarBlock;
