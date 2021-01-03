
function createTasks(name, tag, id = Math.random()) {
    const buttons = ['DESTROY IT!', 'DONE', 'FINISH ME', 'SPANG', 'FATALITY!', 'KILLING IT', 'ONE MORE']

    const tasksMenu = document.getElementById('tasks-menu')

    const task = document.createElement('div')
    const taskTag = document.createElement('div')
    const taskButton = document.createElement('div')
    const taskText = document.createElement('p')
    const taskTagText = document.createElement('p')
    const taskButtonText = document.createElement('p')

    // classes
    task.classList.add('tasks-menu-container')
    task.id = id
    taskText.classList.add('tasks-menu-title')
    taskTag.classList.add('tasks-menu-tag')
    taskButton.classList.add('tasks-menu-button', 'no-select')

    // text
    taskText.textContent = name;
    taskTagText.textContent = tag;
    taskButtonText.textContent = buttons[Math.floor(Math.random() * buttons.length)];

    task.appendChild(taskText)
    task.appendChild(taskTag)
    task.appendChild(taskButton)

    taskTag.appendChild(taskTagText)
    taskButton.appendChild(taskButtonText)

    tasksMenu.appendChild(task)
}

function deleteTasks(id) {
    const tasksMenu = document.getElementById('tasks-menu')
    const task = document.getElementById(id)
    tasksMenu.removeChild(task)
}

export {createTasks, deleteTasks}

