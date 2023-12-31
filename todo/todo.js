const STATUS = {
    'TODO': 'To Do',
    'IN_PROGRESS': 'In Progress',
    'DONE': 'Done'
};

const list = {
	'create a new practice task': STATUS.IN_PROGRESS,
	'go to work': STATUS.DONE,
	'write a post': STATUS.TODO,
};

const errorMessage = {
    'WRONG_STATUS': 'No such status!',
    'WRONG_TASK': 'No such task!',
};

function addTask(task) {
    list[task] = STATUS.TODO;
}

function changeStatus(task, status) {
    if (!(task in list)) {
        console.log(errorMessage.WRONG_TASK);
    } else if (status !== STATUS.TODO && status !== STATUS.IN_PROGRESS && status !== STATUS.DONE) {
        console.log(errorMessage.WRONG_STATUS);
    } else {
        list[task] = status;
    }
}

function deleteTask(task) {
    if (!(task in list)) {
        console.log(errorMessage.WRONG_TASK);
    } else {
        delete list[task];
    }
}

function showList() {
    console.group(`${STATUS.TODO}:`)
    let check = false;
    for (key in list) {
        if (list[key] === STATUS.TODO) {
            check = true;
            console.log(key);
        }
    }

    if (check === false) {
        console.log('-');
    }
    console.groupEnd();

    console.group(`${STATUS.IN_PROGRESS}:`)
    check = false;
    for (key in list) {
        if (list[key] === STATUS.IN_PROGRESS) {
            check = true;
            console.log(key);
        }
    }

    if (check === false) {
        console.log('-');
    }
    console.groupEnd();

    console.group(`${STATUS.DONE}:`)
    check = false;
    for (key in list) {
        if (list[key] === STATUS.DONE) {
            check = true;
            console.log(key);
        }
    }

    if (check === false) {
        console.log('-');
    }
    console.groupEnd();
}

addTask('do this');
changeStatus('write a post','In Progress');
changeStatus('go to work','eee');
deleteTask('pipich');
showList();
