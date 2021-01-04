
class Task {
    constructor(name, tag, id = Math.random()) {
        this.name = name;
        this.tag = tag;
    }
}

const t = new Task('yes', '')
console.log(t)

export {Task}
