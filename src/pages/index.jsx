import { useState } from 'react';
import { addDays } from 'date-fns';
import CalendarBlock from '../components/partials/CalendarBlock';
import DayCounter from '../components/partials/DayCounter';

export default function Home() {
  const [completedDays, setCompletedDays] = useState(0);

  const handleDayCompletion = (date, completed) => {
    setCompletedDays(completedDays + (completed ? 1 : -1));
  };

  const blocks = Array.from({ length: 30 }, (_, i) => {
    const date = addDays(new Date(), i + 1);
    return (
      <CalendarBlock
        key={i}
        date={date}
        onCompletionChange={handleDayCompletion}
      />
    );
  });

  return (
    <div className=''>
      <DayCounter totalDays={30} completedDays={completedDays} />
      <div className="grid lg:grid-cols-5 gap-4 mb-8 mt-4">{blocks}</div>
    </div>
  );
}
