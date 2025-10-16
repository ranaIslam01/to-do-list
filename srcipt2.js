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
  //Text add
  newTask.innerText = taskText;
  // Ul er vitore li add 
  taskList.appendChild(newTask);
  // Input felid empty
  taskInput.value = "";
  // Li er jonno styling
  newTask.onclick = function (){
    newTask.classList.toggle('completed')
  }


}