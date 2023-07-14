const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const toggleIcon = document.getElementById("toggle-icon");

// Add a task
const addTask = () => {
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    todoInput.value = "";
  }
};

// Create new task items
const createTaskItem = (taskText) => {
  const taskItem = document.createElement("li");
  taskItem.className = "todo-item";
  // taskItem.id = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  return taskItem;
};

// Delete tasks
const deleteTask = (event) => {
  const taskItem = event.target.parentNode;
  todoList.removeChild(taskItem);
};

// Cross out tasks
const toggleTask = (event) => {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle("completed");
};

// Event Listeners
addTaskButton.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

todoList.addEventListener("change", toggleTask);

// Examples of tasks
const initialTasks = ["Clean the house", "Pay Bills", "Send kids to school"];

initialTasks.forEach((task) => {
  const taskItem = createTaskItem(task);
  todoList.appendChild(taskItem);
});

console.log("Hello WORLD");

// Toggle between light and dark mode when clicked
toggleIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
