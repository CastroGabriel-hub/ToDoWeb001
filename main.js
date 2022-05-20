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

function addTask(newTask){
    //task validation
    //Try adding a validation for loop here
    if(input.value.length == 0){
        alert('Empty task, please add some content');
    } else {
        newTask.innerText = input.value;
        taskList.append(newTask);
    }

    return newTask;
}