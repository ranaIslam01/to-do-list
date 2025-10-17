// প্রয়োজনীয় HTML এলিমেন্টগুলো সিলেক্ট করা
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// একটি ফাংশন তৈরি করি যা নতুন কাজ যোগ করবে
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // ধাপ ২.১: নতুন <li> এলিমেন্ট তৈরি করা
    const newTask = document.createElement('li');

    // ধাপ ২.২: কাজের টেক্সটের জন্য একটি <span> তৈরি করা
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text'; // ক্লাস যোগ করা
    taskSpan.innerText = taskText;

    // ধাপ ২.৩: একটি "Delete" বাটন তৈরি করা
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn'; // ক্লাস যোগ করা
    deleteBtn.innerText = 'Delete';

    // ধাপ ২.৪: নতুন <li> এর ভেতরে span এবং বাটন যোগ করা
    // এখন <li> এর গঠন হবে: <li><span>Task Text</span><button>Delete</button></li>
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteBtn);

    // ধাপ ২.৫: সম্পূর্ণ <li> এলিমেন্টটিকে <ul> তালিকায় যোগ করা
    taskList.appendChild(newTask);

    // ইনপুট বক্স খালি করা
    taskInput.value = "";

    // --- ইভেন্ট হ্যান্ডলিং ---

    // ধাপ ২.৬: টেক্সটে ক্লিক করলে কাজটি সম্পন্ন হিসেবে চিহ্নিত করা
    newTask.onclick = function() {
        // li এলিমেন্টে 'completed' ক্লাস যোগ/বাতিল করা
        newTask.classList.toggle('completed');
    };

    // ধাপ ২.৭: "Delete" বাটনে ক্লিক করলে কাজটি মুছে ফেলা
    deleteBtn.onclick = function() {
        // remove() ব্যবহার করে li এলিমেন্টটি DOM থেকে মুছে ফেলা
        taskList.removeChild(newTask);
        // অথবা আরও সহজে: newTask.remove();
    };
}

// "Add Task" বাটনে ক্লিক করলে addTask ফাংশনটি কল হবে
addTaskBtn.onclick = addTask;

// Enter চাপলেও যেন কাজ যোগ হয় (বোনাস)
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});