export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD",
  task: Task
}

interface DeleteTask {
  type: "DELETE",
  taskId: number
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[] = [], action: TaskAction) => {
  switch (action.type) {
    case "ADD": return [...tasks, action.task];
    case "DELETE": return tasks.filter(task => task.id !== action.taskId);
  }
}

export default tasksReducer;