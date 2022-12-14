let btnAdd = document.querySelector('.want-to-buy-list__input__summit-button')
let content = document.querySelector('#want-to-buy-list__input__content')

let tasks = getTasksFromLocalStorage()
render(tasks)


btnAdd.addEventListener("click", function() {
    if (!content.value) {
        alert('Please enter your dream product!');
        return false
    }

    let taskId = this.getAttribute('id')  
    let tasks = getTasksFromLocalStorage();
    let task = {name: content.value}

    if (taskId == 0 || taskId) {
        tasks[taskId] = task
        this.removeAttribute('id')
    }

    else {
        tasks.push(task);
    }

    console.log(tasks)
    content.value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks))
    render(tasks)
})


function editTask(id) {
    let tasks = getTasksFromLocalStorage();
    if (tasks.length > 0)
    {
        content.value = tasks[id].name;
        btnAdd.setAttribute('id', id)
    }
}

function deleteTask(id) {
    let tasks = getTasksFromLocalStorage();
    tasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    render(getTasksFromLocalStorage())
}

function render(tasks = []) {
    let content = '<ul>'
    tasks.forEach((task, index) => {
        content += `<li>
            <div class="want-to-buy-list__buying-list__product-name">${task.name}</div>
            <a href="#" onclick= "editTask(${index})" class="want-to-buy-list__buying-list__product-name__edit"> Edit</a>
            <a href="#" onclick= "deleteTask(${index})" class="want-to-buy-list__buying-list__product-name__delete"> Delete</a>
        </li>`
    });

    content += '</ul>'

    document.querySelector('#want-to-buy-list__buying-list_result').innerHTML = content
}

function getTasksFromLocalStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}