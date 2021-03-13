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
// shared identifier for tasks
let taskUniqueId = 0;

// function to render the list
const renderList = (list) => {
  console.log(`rendering: ${list.length} items`);
  // clean the ul first
  ul.innerHTML = '';
  // then populate
  list.forEach((li) => ul.appendChild(li));
};

// remove task
const removeTask = (id, render = false) => {
  console.log(`removing ${id}`);

  // will filter the array keeping all the ids
  // that are different by the id
  liArr = liArr.filter((li) => {
    console.log(li.id);
    // need to cast both to same type (string) to
    // have proper comparision
    return `${li.id}` !== `${id}`;
  });

  console.log(liArr);

  // do we want to render?
  if (render) {
    renderList(liArr);
  }
};

// function which add tasks to list
const addTask = (e) => {
  e.preventDefault();
  const titleTask = addTaskInput.value;
  // do we have a task?
  if (!(titleTask == '')) {
    // increase the unique id
    taskUniqueId += 1;

    // create a li
    const liTask = document.createElement('li');
    // ad assing the new unique id
    liTask.setAttribute('id', taskUniqueId);

    // add a now the remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'x';
    // assing the onclick action
    // referring to the taskid assigned
    // and ask to refresh
    removeButton.setAttribute('onclick', `removeTask(${taskUniqueId}, true)`);

    const task = document.createElement('strong');
    task.innerHTML = titleTask;

    liTask.appendChild(task);
    liTask.appendChild(removeButton);

    liArr.push(liTask);
    console.log(liArr);
    // reset the add
    addTaskInput.value = '';

    // render again the list
    renderList(liArr);
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
    renderList(listFiltered);
  } else {
    renderList(liArr);
  }
};

// adding tasks to list
addBtn.addEventListener('click', addTask);

// searching filtered tasks
searchTaskInput.addEventListener('input', searchTask);
