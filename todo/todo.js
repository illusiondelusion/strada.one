const todoList = {

    list: {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
    },

    addTask(task) {
        this.list[task] = 'To Do';
    },

    changeStatus(task,status) {
        this.list[task] = status;
    },

    deleteTask(task) {
        delete this.list[task];
    },

    showList() {
        console.log(this.list);
    },

}

todoList.addTask('do this');
todoList.changeStatus('write a post','In Progress')
todoList.showList();
