class TaskFolder {
    folderNames() {
        const listOfTask = [];
        for (let task in this) {
            listOfTask.push(this[task]);
        }
        return listOfTask;
    }
}
const folder = {}
folder['tasks'] = new TaskFolder('tasks')
console.log(folder['tasks'])


export {folder}
