/* try applying another logic for solving the same problem */
//mapping DOM elements
var input = document.querySelector('#input');
var btn = document.querySelector('#btnAdd');
var taskList = document.querySelector('#taskList');

//adding event to the button
btn.addEventListener('click', function createTask(event){
    var newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    newTask.innerText = input.value;

    validateTask(newTask);
});

function validateTask(newTask){

    if (taskList.children.length === 0 && !input.value.length == 0) {
        addTask(newTask)
    } else {
        for(var i = 0; i < taskList.children.length; i++){
            if(newTask.innerText == taskList.children[i].innerText){
                removeDuplicate(newTask);
                if(confirm('duplicate task, add it anyway?')){
                    addTask(newTask);
                }
                break;
            } else  if(input.value.length == 0){
                alert('Empty task, please fill with content');
                //break; //Avoid repeating alert message
            } else {
                addTask(newTask);
            }
        }
    }
    
    return newTask;
}

function addTask(newTask){
    taskList.append(newTask);
}

function removeDuplicate(newTask){
    newTask.remove();
}