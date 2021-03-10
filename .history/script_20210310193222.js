const createTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask(add) {
  add.preventDefault();
  const newTaskItem = document.createElement('li');
  const newTask = inputTask.value;
  newTaskItem.classList.add('task')
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function changeItemColors(change) {
  change.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function selectItem(changeItem) {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].className = 'task';
  }
  changeItem.target.classList.add('selected');
}

function markCompleted(mark) {
  if (!e.target.classList.contains('completed')) {
    e.target.classList.add('completed');
  } else {
    e.target.classList.remove('completed');
  }
}

createTask.addEventListener('click', addTask);
taskList.addEventListener('click', changeItemColors)
taskList.addEventListener('click', selectItem);