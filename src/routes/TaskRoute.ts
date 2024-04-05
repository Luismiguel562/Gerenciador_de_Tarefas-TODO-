import { Router } from "express";
import { getStatusList, TaskStatus } from "../models/TaskModel";
import {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
  loadTasksFromFile,
} from "../models/TaskModel";

const taskRouter = Router();

// Carregar tarefas do arquivo ao iniciar a aplicação
loadTasksFromFile();

// Função para verificar se o status é válido
function isValidStatus(status: TaskStatus): boolean {
  return status >= 1 && status <= 4;
}

taskRouter.get("/statuses", (req, res) => {
  const statusList = getStatusList();

  const statusObject = {
    "TO DO": statusList[0],
    DOING: statusList[1],
    LATE: statusList[2],
    FINISHED: statusList[3],
  };

  res.status(200).json(statusObject);
});

taskRouter.get("/read", (req, res) => {
  const tasksJson = readTasks();
  res.status(200).json(tasksJson);
});

taskRouter.post("/create", (req, res) => {
  const { name, description } = req.body;
  const task = createTask(name, description);

  if (!task) {
    res.status(500).json({ error: "Failed to create task" });
  } else {
    res.status(201).json(task);
  }
});

taskRouter.put("/update", (req, res) => {
  const { id, name, description, status, done } = req.body;

  // Verifica se o status é válido
  if (status !== undefined && !isValidStatus(status)) {
    return res.status(400).json({ error: "Invalid status provided" });
  }

  const task = updateTask(id, name, description, status, done);

  if (!task) {
    res.status(500).json({ error: "Failed to update task" });
  } else {
    res.status(200).json(task);
  }
});

taskRouter.delete("/delete", (req, res) => {
  const { id } = req.body;
  const deleted = deleteTask(id);

  if (!deleted) {
    res.status(500).json({ error: "Failed to delete task" });
  } else {
    res.status(200).json({ deleted });
  }
});

export default taskRouter;
