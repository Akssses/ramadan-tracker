import { useRouter } from 'next/router';
import TaskList from '../../components/partials/TaskList';

const TaskPage = () => {
  const router = useRouter();
  const { date } = router.query;

  if (!date) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-4">Tasks for {date}</h1>
      <TaskList date={date} />
    </div>
  );
};

export default TaskPage;
