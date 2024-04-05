import * as fs from "fs";

export enum TaskStatus {
  TODO = 1,
  DOING = 2,
  LATE = 3,
  FINISHED = 4,
}

interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  done: boolean;
}

let tasks: Task[] = [];

//CRUD - C - Create
export function createTask(name: string, description: string) {
  const task = {
    id: Date.now(),
    name,
    description,
    status: TaskStatus.TODO,
    done: false,
  };

  try {
    tasks.push(task);
    saveTasksToFile();
    return task;
  } catch (error) {
    return null;
  }
}

//CRUD - R - Read
export function readTasks() {
  return tasks;
}

//CRUD - U - Update
export function updateTask(
  id: number,
  name?: string,
  description?: string,
  status?: TaskStatus,
  done?: boolean,
) {
  const findedTask = tasks.find((task) => task.id === id);

  if (findedTask) {
    if (name) {
      findedTask.name = name;
    }
    if (description) {
      findedTask.description = description;
    }
    if (status !== undefined) {
      findedTask.status = status;
    }
    if (done !== undefined) {
      findedTask.done = done;
    }
    saveTasksToFile();
    return findedTask;
  }
  return null;
}

//CRUD - D - Delete
export function deleteTask(id: number) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasksToFile();
    return true;
  }
  return false;
}

// Função para salvar tarefas em um arquivo JSON
function saveTasksToFile() {
  const data = JSON.stringify(tasks, null, 2);

  fs.writeFile("tasks.json", data, (err) => {
    if (err) {
      console.error("Erro ao salvar tarefas no arquivo:", err);
    } else {
      console.log("Tarefas salvas com sucesso no arquivo tasks.json");
    }
  });
}

// Funções para carregar tarefas de um arquivo JSON
export function loadTasksFromFile() {
  try {
    const data = fs.readFileSync("tasks.json", "utf8");
    tasks = JSON.parse(data);
    console.log("Tarefas carregadas com sucesso do arquivo tasks.json");
  } catch (error) {
    console.error("Erro ao ler arquivo de tarefas:", error);
    tasks = [];
  }
}

// Função para obter a lista de status de tarefa válidos
export function getStatusList() {
  return Object.values(TaskStatus);
}
