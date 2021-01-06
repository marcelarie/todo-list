class TaskFolder {
    folderNames() {
        const listOfTask = [];
        for (let task in this) {
            listOfTask.push(this[task]);
        }
        return listOfTask;
    }
}

export {TaskFolder}

