// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.



const root = document.getElementById('root');



const input = document.createElement('input');
input.placeholder = 'Enter a task';
root.appendChild(input);

const button = document.createElement('button');
button.textContent = 'Add Task';
root.appendChild(button);

const taskList = document.createElement('ul');
root.appendChild(taskList);


const counter = document.createElement('p');
root.appendChild(counter);


let tasks = [];


function updateCounter() {
  const remaining = tasks.filter(task => !task.completed).length;
  counter.textContent = `Tasks left: ${remaining}`;
}


// Function to show tasks
function showTasks() {
  taskList.innerHTML = ''; 
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      showTasks();
    });
 
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) {
      span.style.textDecoration = 'line-through';
    }
    
    const del = document.createElement('button');
    del.textContent = 'delete';
    del.addEventListener('click', () => {
      tasks.splice(index, 1);
      showTasks();
    });

   
    li.appendChild(checkbox);
    li.appendChild(span);.0
    li.appendChild(del);
    
    taskList.appendChild(li);
  });
  updateCounter();
}


button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') {
    alert('Please enter a task!');
    return;
  }
  tasks.push({ text: text, completed: false });
  input.value = '';
  showTasks();
});
