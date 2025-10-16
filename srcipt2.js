const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.onclick = function () {
  const taskText = taskInput.value;
  if(taskText === ''){
    alert("Please add some text");
    return;
  }
  // Create Element li 
  const newTask = document.createElement('li');

  newTask.innerText = taskText;

  taskList.appendChild(newTask);
  taskInput.value = "";


}