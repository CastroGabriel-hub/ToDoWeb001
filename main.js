//mapping DOM elements
var input = document.querySelector('#input');
var btn = document.querySelector('#btnAdd');
var taskList = document.querySelector('#taskList');

//Events
btn.addEventListener('click', addTask);
taskList.addEventListener('click', btnsFunctions);

//Functions
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
    const newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    newTask.innerHTML = '<p>' + input.value + '</p>';
    appendBtns(newTask);
    taskList.append(newTask);
    input.value = "";
}

function btnsFunctions(e){
    const item = e.target;
    const todo = item.parentElement.parentElement; //task itself

    console.log(item + todo);
    //delete todo
    if(item.className === 'taskBtn btnDel'){
        todo.remove();
    }

    //check mark
    if(item.className === 'checkbox'){
        todo.classList.toggle('isChecked');
    }
}