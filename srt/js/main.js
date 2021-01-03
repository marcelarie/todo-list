import {createTasks, deleteTasks, filterTasks} from "./data/tasks.js"
import {folder} from './model/folder.js'

createTasks('test', '✅')
createTasks('treure a la reina', '❗')
createTasks('This task its extense and I need to explain it', '')





// listeners

const taskSideBar = document.getElementById('tasks-sidebar')

taskSideBar.addEventListener('click', e => {
    if (e.target.href) {
        // TODO
        // function to extract tag
    }
})
