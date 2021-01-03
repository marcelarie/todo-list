import {folder} from '../model/folder.js'


function createTasks(name, tag, id = Math.random()) {
    folder[name] = [tag, id]
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

function deleteTasks(task) {
    const tasksMenu = document.getElementById('tasks-menu')
    const taskDiv = document.getElementById(id)

    const list = folder.folderNames();


    tasksMenu.removeChild(task)
}

function filterTasks(tag) {
    const list = folder.folderNames();

    list.forEach(itemList => {
        const currentTask = document.getElementById(itemList[1])
        itemList[0] !== tag ? currentTask.classList.add('none') : currentTask.classList.remove('none');
    })

}


export {createTasks, deleteTasks, filterTasks}

