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
// list of filtered array
let listFiltered = [];

// function which add tasks to list
const addTask = (e) => {
  e.preventDefault();
  const titleTask = addTaskInput.value;
  if (!(titleTask == '')) {
    const task = document.createElement('li');
    task.innerHTML = titleTask;
    liArr.push(task);
    if(liArr.length <= 5){
    ul.appendChild(task);
    // console.log(liArr);
    addTaskInput.value = '';
    }else{
      console.log('1');
    }
  } else {
    alert('Your task is empty string!');
  }
};

// function which search certain tasks
const searchTask = () => {
  const searchText = searchTaskInput.value;
  if (searchText.length > 0) {
    listFiltered = liArr.filter((li) =>
      li.textContent.toLowerCase().includes(searchText.toLowerCase())
    );
    ul.textContent = '';
    listFiltered.forEach((li) => ul.appendChild(li));
  } else {
    liArr.forEach((li) => ul.appendChild(li));
  }
};

// function which remove tasks
// const removeTask = (e) => {
//     e.preventDefault();
//     listFiltered.forEach(li => )
// }

// adding tasks to list
addBtn.addEventListener('click', addTask);

// searching filtered tasks
searchTaskInput.addEventListener('input', searchTask);