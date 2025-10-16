// ধাপ ২.১: প্রয়োজনীয় HTML এলিমেন্টগুলো সিলেক্ট করা
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


// ধাপ ২.২: "Add Task" বাটনের জন্য একটি ক্লিক ইভেন্ট তৈরি করা
addTaskBtn.onclick = function() {
    // ইনপুট বক্স থেকে ব্যবহারকারীর লেখা টেক্সট নেওয়া
    const taskText = taskInput.value;

    // যদি ইনপুট বক্স খালি থাকে, তাহলে কিছু না করা
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // ধাপ ২.৩: একটি নতুন list item (<li>) এলিমেন্ট তৈরি করা
    const newTask = document.createElement('li');
    newTask.innerText = taskText; // <li> এর ভেতরে টেক্সট যোগ করা

    // ধাপ ২.৪: নতুন তৈরি করা <li> এলিমেন্টটিকে <ul> তালিকায় যোগ করা
    taskList.appendChild(newTask);

    // কাজ যোগ করার পর ইনপুট বক্স খালি করে দেওয়া
    taskInput.value = "";

    // ধাপ ২.৫ (বোনাস): প্রতিটি কাজে ক্লিক করলে স্টাইল পরিবর্তন করা
    newTask.onclick = function() {
        // 'completed' ক্লাস যোগ বা বাতিল করা
        newTask.classList.toggle('completed');
    };
};
