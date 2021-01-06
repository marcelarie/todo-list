import {allListeners, createTasks, renderTasks, saveTasks} from "./data/tasks.js"
import {getFromLocalStorage} from './data/local-storage.js'
import {TaskFolder} from './model/folder.js'

const folder = {}
folder['tasks'] = new TaskFolder('tasks')
export {folder}

// empty task to start
if (localStorage.getItem('tasks') !== null && localStorage.getItem('tasks').length > 2) {
    getFromLocalStorage(folder)
} else {
    saveTasks('', '')
}

renderTasks();




// listeners
allListeners();

