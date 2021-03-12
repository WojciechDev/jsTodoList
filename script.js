// download input for adding tasks
const addTaskInput = document.querySelector('.input1');
// download button which confirm adding tasks
const addBtn = document.querySelector('.addBtn');
// download ul to which will be added tasks
const ul = document.querySelector('ul');
// download input for searching tasks
const searchTaskInput = document.querySelector('.input2');
// list array
let liArr = [];

// function which add tasks to list
const addTask = (e) => {
  e.preventDefault();
  const titleTask = addTaskInput.value;
  if (!(titleTask == '')) {
    const task = document.createElement('li');
    task.innerHTML = titleTask;
    ul.appendChild(task);
    liArr.push(task);
    console.log(liArr);
    addTaskInput.value = '';
  } else {
    alert('Your task is empty string!');
  }
};

// function which search certain tasks
const searchTask = () => {
  const searchText = searchTaskInput.value;
  liArr = liArr.filter((li) => li.textContent.includes(searchText));
  ul.textContent = '';
  liArr.forEach((li) => ul.appendChild(li));
};

// adding tasks to list
addBtn.addEventListener('click', addTask);

// searching filtered tasks
searchTaskInput.addEventListener('input', searchTask);
