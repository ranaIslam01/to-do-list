const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask(event) {
  event?.preventDefault(); // reload বন্ধ

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // 🟢 li তৈরি
  const newTask = document.createElement('li');
  newTask.classList.add("task-item");

  // টাস্ক টেক্সট
  const span = document.createElement('span');
  span.textContent = taskText;
  span.classList.add("task-text");

  // ডিলিট বাটন
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');


  // Complete toggle
  span.onclick = function () {
    span.classList.toggle('completed');
  };

  // Delete
  deleteBtn.onclick = function () {
    newTask.remove();
  };

  // 🟢 এবার নিচে না গিয়ে উপরে add করবো
  // সাধারণত appendChild নিচে add করে, তাই insertBefore ব্যবহার করছি
  if (taskList.firstChild) {
    taskList.insertBefore(newTask, taskList.firstChild);
  } else {
    taskList.appendChild(newTask);
  }

  // li তে content add করা হচ্ছে
  newTask.appendChild(span);
  newTask.appendChild(deleteBtn);

  // ইনপুট ক্লিয়ার
  taskInput.value = "";
}

// 🟢 Add button click
addTaskBtn.addEventListener("click", addTask);

// 🟢 Enter চাপলেও একই কাজ করবে
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask(event);
  }
});
