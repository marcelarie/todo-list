import {allListeners, createTasks, renderTasks, saveTasks} from "./data/tasks.js"
import {getFromLocalStorage} from './data/local-storage.js'
import {folder} from './model/folder.js'

// empty task to start
saveTasks('', '')
if (localStorage.getItem('tasks') !== null) {
    getFromLocalStorage(folder)
}

renderTasks();




// listeners
allListeners();
