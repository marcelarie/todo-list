import {folder} from '../model/folder.js'


function createTasks(name, tag, id = Math.random()) {
    folder[name] = [tag, id]
    const buttons = ['DESTROY IT!', 'DONE', 'FINISH ME', 'SPANG', 'FATALITY!', 'KILLING IT', 'ONE MORE']

    const tasksMenu = document.getElementById('tasks-menu')

    const task = document.createElement('div')
    const taskTag = document.createElement('div')
    const taskButton = document.createElement('div')
    const taskButtonDelete = document.createElement('div')
    const taskText = document.createElement('p')
    const taskTagText = document.createElement('p')
    const taskButtonText = document.createElement('p')

    // classes
    task.classList.add('tasks-menu-container')
    task.id = id;
    taskText.classList.add('tasks-menu-title')
    taskTag.classList.add('tasks-menu-tag')
    taskButton.classList.add('tasks-menu-button', 'no-select')
    taskButtonDelete.classList.add('tasks-button-delete', 'no-select')

    // text
    taskText.textContent = name;
    taskTagText.textContent = tag;
    taskButtonText.textContent = buttons[Math.floor(Math.random() * buttons.length)];
    taskButtonDelete.textContent = 'X'

    task.appendChild(taskText)
    task.appendChild(taskTag)
    task.appendChild(taskButtonDelete)
    task.appendChild(taskButton)

    taskTag.appendChild(taskTagText)
    taskButton.appendChild(taskButtonText)

    tasksMenu.appendChild(task)
}

function deleteTasks(id) {
    const taskMenu = document.getElementById('tasks-menu')
    const currentTask = document.getElementById(id)
    const taskName = currentTask.children[0].textContent

    taskMenu.removeChild(currentTask)
    delete folder[taskName]
}

function filterTasks(tag) {
    const list = folder.folderNames();

    list.forEach(itemList => {
        const currentTask = document.getElementById(itemList[1])
        itemList[0] !== tag ? currentTask.classList.add('none') : currentTask.classList.remove('none');
    })

}

// listeners
function taskSideBarListener() {
    const taskSideBar = document.getElementById('tasks-sidebar')
    taskSideBar.addEventListener('click', e => {
        const targetClasses = e.target.classList;
        let result = [];
        targetClasses.forEach(clase => result.push(clase));
        const tag = result[1].slice(4);
        filterTasks(tag);
    })
}
function deleteButtonListener() {
    const deleteButton = document.querySelectorAll('.tasks-button-delete')
    deleteButton.forEach(del => {
        del.addEventListener('click', e => {
            const currentTaskId = e.target.parentNode.id;
            deleteTasks(currentTaskId)
        })
    })
}


export {createTasks, deleteTasks, filterTasks, taskSideBarListener, deleteButtonListener}

