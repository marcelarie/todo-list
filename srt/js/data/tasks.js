

function createTasks(name, tag, button) {
    const tasksMenu = document.getElementById('tasks-menu')

    const task = document.createElement('div')
    const taskTag = document.createElement('div')
    const taskButton = document.createElement('div')
    const taskText = document.createElement('p')
    const taskTagText = document.createElement('p')
    const taskButtonText = document.createElement('p')

    // classes
    task.classList.add('tasks-menu-container')
    taskText.classList.add('tasks-menu-title')
    taskTag.classList.add('tasks-menu-tag')
    taskButton.classList.add('tasks-menu-button', 'no-select')

    // text
    taskText.textContent = name;
    taskTagText.textContent = tag;
    taskButtonText.textContent = button;

    task.appendChild(taskText)
    task.appendChild(taskTag)
    task.appendChild(taskButton)

    taskTag.appendChild(taskTagText)
    taskButton.appendChild(taskButtonText)

    tasksMenu.appendChild(task)
}

export {createTasks}

createTasks('test', 'Completed', 'FINISH IT!')
