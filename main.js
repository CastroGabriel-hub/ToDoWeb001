//mapping DOM elements
var input = document.querySelector('#input');
var btn = document.querySelector('#btnAdd');
var taskList = document.querySelector('#taskList');

//adding event to the button
btn.addEventListener('click', function createTask(event){
    var newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    
    validateTask(newTask);
});

function validateTask(newTask){
    //getting all the tasks to a NodeList
    tasks = document.querySelectorAll('.task');

    if (tasks.length == 0 && !input.value.length == 0) {
        addTask(newTask)
    } else  if(input.value.length == 0){
        alert('Empty task, please fill with content');
    } else {
        //validation loop
        for(var i = 0; i < tasks.length; i++){
            if(newTask.innerHTML == tasks.item(i).innerHTML){
                removeDuplicate(newTask);
                if(confirm('duplicate task, add it anyway?')){
                    addTask(newTask);
                }
                break; //Avoid repeating the same confirmation message
            } else  if(input.value.length == 0){
                alert('Empty task, please fill with content');
                break;//Avoid repeating alert message
            } else {
                addTask(newTask);
            }
        }
    }

    return newTask;
}

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
}

function removeDuplicate(newTask){
    newTask.remove();
}

//TODO: implement delete function and fix the validation function
