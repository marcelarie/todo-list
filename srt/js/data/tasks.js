import {folder} from '../model/folder.js'


//task generator
function createTasks(name, tag, id) {
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

    tasksMenu.appendChild(task);
    return id;
}

function focusId(id) {
    const parentElement = document.getElementById(id)
    const elementToFocus = parentElement.children[1].children[0]
    elementToFocus.focus()
}

function saveTasks(name, tag) {
    const id = Math.random();
    folder[id] = [name, tag]
    return id
}
saveTasks('Entrenar anillas', '✅')
saveTasks('Treure la reina', '')
saveTasks('Correr', '')

function renderTasks() {
    const tasksMenu = document.getElementById('tasks-menu')
    tasksMenu.innerHTML = ''
    const entries = Object.entries(folder)
    entries.forEach(entrie => {
        const id = entrie[0]
        const name = entrie[1][0]
        const tag = entrie[1][1]
        createTasks(name, tag, id)
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
    const list = Object.entries(folder)

    list.forEach(itemList => {
        const currentTask = document.getElementById(itemList[0])
        if (tag.length > 0) {
            itemList[1][1] !== tag ? currentTask.classList.add('none') : currentTask.classList.remove('none');
        } else {
            itemList[1][1] === '✅' ? currentTask.classList.add('none') : currentTask.classList.remove('none');
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
            if (e.key === 'Enter') {
                saveTasksValue();
                const id = saveTasks(' ', ' ')
                renderTasks();
                focusId(id);
                allListeners();
            }
        })
    })
}

function saveTasksValue() {
    const folderItems = Object.entries(folder)
    console.log(folderItems)
    folderItems.forEach(item => {
        const id = item[0]
        const taskDiv = document.getElementById(id)
        const newText = taskDiv.children[1].children[0];
        console.log(newText.value)
        folder[id][0] = newText.value
    })

}


function allListeners() {
    taskSideBarListener();
    deleteButtonListener();
    taskHoverListener();
    taskInputListener();
}


export {createTasks, deleteTasks, filterTasks, allListeners, renderTasks, saveTasksValue}

