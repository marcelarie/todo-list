import {createTasks, deleteButtonListener, deleteTasks, filterTasks, taskSideBarListener, taskHoverListener} from "./data/tasks.js"
import {folder} from './model/folder.js'

createTasks('test', '✅')
createTasks('treure a la reina', '❗')
createTasks('This task its extense and I need to explain it', '')





// listeners
taskSideBarListener();
deleteButtonListener();
taskHoverListener();
