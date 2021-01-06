import {folder} from '../model/folder.js'
import {saveOnLocalStorage, getFromLocalStorage} from './local-storage.js'


//task generator
function createTasks(name, tag, id) {
    folder['tasks'][id] = [name, tag]
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
    tag === '✓' ? task.classList.add('none') : 0;
    task.id = id;
    taskText.classList.add('tasks-menu-title')
    taskTextInput.classList.add('tasks-menu-input')
    taskTag.classList.add('tasks-menu-tag')
    taskButton.classList.add('tasks-menu-button', 'no-select')
    taskTagText.classList.add('no-select', 'task-important-button')
    taskButtonDelete.classList.add('tasks-button-delete', 'no-select', 'none')
    taskTextInput.setAttribute('spellcheck', 'false')
    taskTextInput.setAttribute('maxlength', '40')

    tagColor(tag, taskTagText)

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

function tagColor(tag, tagText) {
    if (tag === '✓') {
        tagText.classList.remove('red-color')
        tagText.classList.add('green-color')
    } else if (tag === '!') {
        tagText.classList.remove('green-color')
        tagText.classList.add('red-color')
    } else {
        tagText.classList.add('red-color')
    }
}

function focusId(id) {
    const parentElement = document.getElementById(id)
    const elementToFocus = parentElement.children[1].children[0]
    elementToFocus.focus()
}

function saveTasks(name, tag) {
    const id = Math.random();
    folder['tasks'][id] = [name, tag];
    return id;
}

function renderTasks() {
    const tasksMenu = document.getElementById('tasks-menu')
    tasksMenu.innerHTML = ''
    const entries = Object.entries(folder['tasks'])
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

    taskMenu.removeChild(currentTask)
    delete folder['tasks'][id]
    saveOnLocalStorage(folder['tasks']);
}

function filterTasks(tag) {
    const list = Object.entries(folder['tasks'])

    list.forEach(itemList => {
        const currentTask = document.getElementById(itemList[0])
        itemList[1]
        if (tag.length > 0) {
            itemList[1][1] !== tag ? currentTask.classList.add('none') : currentTask.classList.remove('none');
        } else {
            itemList[1][1] === '✓' ? currentTask.classList.add('none') : currentTask.classList.remove('none');
            if (list.length === 1 && list[0][1][1] !== '') {
                saveTasksValue();
                saveTasks(' ', ' ')
                renderTasks();
                allListeners();
            }
        }
    })
}

function toggleNone(element) {
    element ? element.classList.toggle('none') : 0;
}

function saveTasksValue() {
    const folderItems = Object.entries(folder['tasks'])
    folderItems.forEach(item => {
        const id = item[0]
        console.log(item[0])
        const taskDiv = document.getElementById(id)
        const newText = taskDiv.children[1].children[0];
        folder['tasks'][id][0] = newText.value
    })
}

// listeners
function taskSideBarListener() {
    document.addEventListener('click', e => {
        saveOnLocalStorage(folder['tasks'])
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
    const taskBar = document.querySelectorAll('.tasks-menu-container')
    if (taskBar.length > 1) {
        taskBar.forEach(taskk => {
            taskk.addEventListener('mouseenter', t => {
                toggleNone(t.target.children[2])
            })
            taskk.addEventListener('mouseleave', t => {
                toggleNone(t.target.children[2])
            })
        })
    }
}

function taskInputListener() {
    const allTaskInputs = document.querySelectorAll('.tasks-menu-input');
    allTaskInputs.forEach(input => {
        const taskParent = input.parentNode.parentNode;
        const previousTask = taskParent.previousSibling
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter' && input.value.length > 1) {
                saveTasksValue();
                const id = saveTasks(' ', ' ')
                renderTasks();
                focusId(id);
                allListeners();
                saveOnLocalStorage(folder['tasks']);
                console.log(folder['tasks'])
            }
            if (e.key === 'Backspace' && input.value <= 0) {
                e.preventDefault();
                saveTasksValue();
                previousTask ? deleteTasks(taskParent.id) : 0
                renderTasks();
                previousTask ? focusId(previousTask.id) : 0;
                allListeners();
                saveOnLocalStorage(folder['tasks']);
            }
        })
    })
}


function taskImportantListener() {
    const allTaskTagMenus = document.querySelectorAll('.task-important-button')
    allTaskTagMenus.forEach(tag => {
        tag.addEventListener('click', e => {
            saveOnLocalStorage(folder['tasks'])
            let textButton = e.target.innerHTML;
            if (textButton === '!') {
                e.target.innerHTML = '';
                folder['tasks'][e.target.parentNode.parentNode.id][1] = ''
            } else if (textButton === '✓') {
                e.target.innerHTML = '';
                folder['tasks'][e.target.parentNode.parentNode.id][1] = ''
                e.target.parentNode.parentNode.classList.toggle('none')
                e.target.parentNode.children[0].classList.remove('green-color')
                e.target.parentNode.children[0].classList.add('red-color')
            } else {
                e.target.innerHTML = '!';
                folder['tasks'][e.target.parentNode.parentNode.id][1] = '!'
            }
        })
    })
}

function finishTaskListener() {
    const allTaskFinishButtons = document.querySelectorAll('.tasks-menu-button')
    allTaskFinishButtons.forEach(button => {
        button.addEventListener('click', e => {
            let taskBar = {};
            e.target.children.length > 0 ? taskBar = e.target.parentElement : taskBar = e.target.parentElement.parentElement;
            completeTask(taskBar)
        })
    })
}

function completeTask(task) {
    task.children[0].children[0].innerHTML = '✓'
    folder['tasks'][task.id][1] = '✓'
    task.classList.toggle('none')
    tagColor(task.children[0].children[0].textContent, task.children[0].children[0])
}


function allListeners() {
    taskSideBarListener();
    deleteButtonListener();
    taskHoverListener();
    taskInputListener();
    taskImportantListener();
    finishTaskListener();
}


export {createTasks, deleteTasks, filterTasks, allListeners, renderTasks, saveTasksValue, saveTasks}

