import { db } from "@/lib/db";

export default async function Home() {
  const tasks = await db.task.findMany();
  console.log(tasks);

  return (
    <div className="bg-red-200 text-black">
      <p>Okay</p>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <div>why are tasks not listing</div>
    </div>
  );
}
