//mapping DOM elements
var input = document.querySelector('#input');
var btn = document.querySelector('#btnAdd');
var taskList = document.querySelector('#taskList');

//adding event to the button
btn.addEventListener('click', function createTask(event){
    var newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    
    addTask(newTask);
});

function appendBtns(newTask){
    //Creating a div for the elements
    var divBtns = document.createElement('div');
    divBtns.setAttribute('class', 'divBtns');

    //Checkbox Element
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'checkbox');
    divBtns.append(check);

    //Edit button
    var btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'taskBtn btnEdit');
    btnEdit.innerText = 'Edit';
    divBtns.append(btnEdit);

    //Delete button
    var btnDel = document.createElement('button');
    btnDel.setAttribute('class', 'taskBtn btnDel');
    btnDel.innerText = 'Delete';
    divBtns.append(btnDel);

    newTask.append(divBtns);
}

function addTask(newTask){
    newTask.innerHTML = '<p>' + input.value + '</p>';
    appendBtns(newTask);
    taskList.append(newTask);
    check(newTask);
}

function check(newTask){//Only works for the first task element unforntully
    var cbs = document.querySelector('.checkbox');

    cbs.addEventListener('click', function isChecked(event){
        if(cbs.checked == true){
            cbs.parentElement.parentElement.setAttribute('class', 'task isChecked');
        }else{
            cbs.parentElement.parentElement.setAttribute('class', 'task');
        }
    })
    
}