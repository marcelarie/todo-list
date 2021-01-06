import {allListeners, createTasks, renderTasks, saveTasks} from "./data/tasks.js"
import {getFromLocalStorage} from './data/local-storage.js'
import {TaskFolder} from './model/folder.js'

const folder = {}
folder['tasks'] = new TaskFolder('tasks')
export {folder}
// empty task to start
if (localStorage.getItem('tasks') !== null) {
    getFromLocalStorage(folder)

    Object.keys(folder).length < 2 ? saveTasks('', '') : 0

}

renderTasks();




// listeners
allListeners();

