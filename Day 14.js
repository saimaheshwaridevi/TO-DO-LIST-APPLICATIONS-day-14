document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
        taskInput.value = '';
      }
    });

    function addTask(taskText) {
      if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
          taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      }
    }
  });