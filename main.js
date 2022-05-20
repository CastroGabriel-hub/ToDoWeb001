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
    //getting all the tasks
    tasks = document.querySelectorAll('.task');
    if (tasks.length == 0) {
        addTask(newTask)
    }

    //validation loop
    for(var i = 0; i < tasks.length; i++){
        if(input.value === tasks.item(i).innerText){
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

    return newTask;
}

function addTask(newTask){
    newTask.innerText = input.value;
    taskList.append(newTask);
}

function removeDuplicate(newTask){
    newTask.remove();
}