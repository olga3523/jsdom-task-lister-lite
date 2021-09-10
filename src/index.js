let counter = 0;

function deleteTask( key ) {
  document.querySelector('.' + key).style.display = 'none';
}

function createTaskTag(text, priority) {
  let li = document.createElement('li');
  let button = document.createElement('button');

  let uniqueKey = 'id_' + counter;

  li.style.backgroundColor = priority;
  li.innerHTML = text;
  li.classList.add(uniqueKey);
  button.innerHTML = "X";
  button.onclick = function () { deleteTask( uniqueKey ) }

  li.appendChild(button);

  counter++;

  return li;
}

function addTaskToList(text, priority) {
  let tag = createTaskTag(text, priority);
  document.getElementById('list').appendChild(tag);
}

function addTask() {
  let input = document.querySelector('#create-task-form > input[type="text"]');
  let priority = document.querySelector('#priority').value;
  let text = input.value;

  if (text == "")
    return;

  addTaskToList(text, priority);

  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  
});