import {folder} from '../model/folder.js'


//task generator
function createTasks(name, tag, id, element) {
    folder[id] = [name, tag]
    const buttons = ['DESTROY IT!', 'DONE', 'FINISH ME', 'SPANG!!!', 'FATALITY!', 'KILLING IT', 'ONE MORE']

    const tasksMenu = document.getElementById('tasks-menu')

    const task = document.createElement('div')
    const taskTag = document.createElement('div')
    const taskButton = document.createElement('div')
    const taskButtonDelete = document.createElement('div')
    const taskText = document.createElement('div')
    const taskTextInput = document.createElement('input')
    const taskTagText = document.createElement('p')
    const taskButtonText = document.createElement('p')

    // classes
    task.classList.add('tasks-menu-container')
    tag === '✅' ? task.classList.add('none') : 0;
    task.id = id;
    taskText.classList.add('tasks-menu-title')
    taskTextInput.classList.add('tasks-menu-input')
    taskTag.classList.add('tasks-menu-tag')
    taskButton.classList.add('tasks-menu-button', 'no-select')
    taskButtonDelete.classList.add('tasks-button-delete', 'no-select', 'none')
    taskTextInput.setAttribute('spellcheck', 'false')
    taskTextInput.setAttribute('maxlength', '40')

    // text
    taskTextInput.value = name;
    taskTagText.textContent = tag;
    taskButtonText.textContent = buttons[Math.floor(Math.random() * buttons.length)];
    taskButtonDelete.textContent = 'X'

    taskText.appendChild(taskTextInput)
    task.appendChild(taskTag)
    task.appendChild(taskText)
    task.appendChild(taskButtonDelete)
    task.appendChild(taskButton)

    taskTag.appendChild(taskTagText)
    taskButton.appendChild(taskButtonText)

    element ? element.after(task) : tasksMenu.appendChild(task);
}

function saveTasks(name, tag) {
    folder[Math.random()] = [name, tag]
}

saveTasks('this', '')

function renderTasks(element) {
    const tasksMenu = document.getElementById('tasks-menu')
    tasksMenu.innerHTML = ''
    const entries = Object.entries(folder)
    entries.forEach(entrie => {
        const id = entrie[0]
        const name = entrie[1][0]
        const tag = entrie[1][1]
        element ? createTasks(name, tag, id, element) : createTasks(name, tag, id);
    })
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
        if (tag.length > 0) {
            itemList[0] !== tag ? currentTask.classList.add('none') : currentTask.classList.remove('none');
        } else {
            itemList[0] === '✅' ? currentTask.classList.add('none') : currentTask.classList.remove('none');
        }
    })
}

function toggleNone(element) {
    element ? element.classList.toggle('none') : 0;
}

// listeners
function taskSideBarListener() {
    document.addEventListener('click', e => {
        const taskSide = e.target.parentElement.parentElement;
        if (taskSide.id === 'tasks-sidebar') {
            const targetClasses = e.target.classList;
            let result = [];
            targetClasses.forEach(clase => result.push(clase));
            const tag = result[1].slice(4);
            filterTasks(tag);
        }
    })
}
function deleteButtonListener() {
    document.addEventListener('click', e => {
        if (e.target.classList.contains('tasks-button-delete')) {
            const currentTaskId = e.target.parentNode.id;
            deleteTasks(currentTaskId)
        }
    })
}
function taskHoverListener() {
    // document.addEventListener('mouseover', () => {
    const taskBar = document.querySelectorAll('.tasks-menu-container')
    taskBar.forEach(taskk => {
        taskk.addEventListener('mouseenter', t => {
            toggleNone(t.target.children[2])
        })
        taskk.addEventListener('mouseleave', t => {
            toggleNone(t.target.children[2])
        })
    })
    // })
}

function taskInputListener() {
    const allTaskInputs = document.querySelectorAll('.tasks-menu-input');
    allTaskInputs.forEach(input => {
        input.addEventListener('keydown', e => {
            e.key === 'Enter' ? renderTasks(input.parentElement.parentElement) : 0;
        })
    })
}

function allListeners() {
    taskSideBarListener();
    deleteButtonListener();
    taskHoverListener();
    taskInputListener();
}


export {createTasks, deleteTasks, filterTasks, allListeners, renderTasks}

