import {allListeners, createTasks, renderTasks, saveTasks} from "./data/tasks.js"

// empty task to start
saveTasks('', '')

renderTasks();




// listeners
allListeners();
