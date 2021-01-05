

function saveOnLocalStorage(folder) {
    localStorage.setItem('tasks', JSON.stringify(folder))
}

function getFromLocalStorage(folder) {
    let storage = localStorage.getItem('tasks');
    folder['tasks'] = JSON.parse(storage)
}

export {saveOnLocalStorage, getFromLocalStorage}
