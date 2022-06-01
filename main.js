//mapping DOM elements
const appDiv = document.querySelector('.todoApp');

//Events
window.addEventListener('load', createApp);

//Functions
function createApp(){
    //creating elements
    const form = document.createElement('form');
    form.setAttribute('class', 'inputs');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input');
    input.setAttribute('placeholder', 'New task here');

    const btn = document.createElement('input');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('value', 'Add task');
    btn.setAttribute('id', 'btnAdd');
    btn.addEventListener('click', addTask); //event

    const tasksDiv = document.createElement('div');
    tasksDiv.setAttribute('class', 'tasks');

    const taskList = document.createElement('ul');
    taskList.setAttribute('id', 'taskList');
    taskList.addEventListener('click', btnsFunctions);

    //appending elements
    form.appendChild(input);
    form.appendChild(btn);
    appDiv.appendChild(form);
    tasksDiv.appendChild(taskList);
    appDiv.appendChild(tasksDiv);

}

function appendBtns(newTask){
    //Creating a div for the elements
    const divBtns = document.createElement('div');
    divBtns.setAttribute('class', 'divBtns');

    //Checkbox Element
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'checkbox');
    divBtns.append(check);

    //Edit button
    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'taskBtn btnEdit');
    btnEdit.innerText = 'Edit';
    divBtns.append(btnEdit);

    //Delete button
    const btnDel = document.createElement('button');
    btnDel.setAttribute('class', 'taskBtn btnDel');
    btnDel.innerText = 'Delete';
    divBtns.append(btnDel);

    newTask.append(divBtns);
}

function addTask(event){
    event.preventDefault();
    const newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    newTask.innerHTML = '<input type="text" class="taskInput" readonly>';
    newTask.firstChild.setAttribute('value', input.value);
    appendBtns(newTask);
    taskList.append(newTask);
    input.value = "";
}

function btnsFunctions(e){
    const item = e.target;
    const todo = item.parentElement.parentElement; //task itself

    //delete todo
    if(item.className === 'taskBtn btnDel'){
        todo.remove();
    }

    //checkbox
    if(item.className === 'checkbox'){
        todo.classList.toggle('isChecked');
    }

    //edit
    if(item.className === 'taskBtn btnEdit'){
        todo.firstChild.removeAttribute('readonly');
    }

}