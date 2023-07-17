// todo on objects

/*const STATUS = {
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
*/

// todo on arrays

const STATUS = {
    'TODO': 'To Do',
    'IN_PROGRESS': 'In Progress',
    'DONE': 'Done'
};

const PRIORITY = {
    'LOW': 'Low',
    'HIGH': 'High'
};

const ERROR_MESSAGE = {
    'WRONG_STATUS': 'No such status!',
    'WRONG_TASK': 'No such task!',
    'WRONG_PRIORITY': 'No such priority!'
};

const tasks = [
    {
        name: 'create a new practice task',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.HIGH
    },
    {
        name: 'go to work',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.HIGH
    },
    {
        name: 'write a post',
        status: STATUS.TODO,
        priority: PRIORITY.LOW
    },
];

function addTask(name, priority) {
    if (priority === PRIORITY.HIGH) {
        tasks.unshift({name, status: STATUS.TODO, priority});
    } else if (priority === PRIORITY.LOW) {
        tasks.push({name, status: STATUS.TODO, priority});
    } else {
        console.log(ERROR_MESSAGE.WRONG_PRIORITY);
    }

}

function changeStatus(name, status) {
    const task = tasks.find(task => task.name === name);
    if (!task) {
        console.log(ERROR_MESSAGE.WRONG_TASK);
        return;
    }

    if (status !== STATUS.TODO && status !== STATUS.IN_PROGRESS && status !== STATUS.DONE) {
        console.log(ERROR_MESSAGE.WRONG_STATUS);
        return;
    }

    task.status = status;
}

function deleteTask(index) {
    if (index === 0) {
        tasks.shift();
    } else if (index === -1) {
        tasks.pop();
    } else {
        tasks.splice(index,index);
    }
}

function showList() {
    for (const task of tasks) {
    console.log(task);
    }
}

deleteTask(0);
addTask('have lunch', PRIORITY.HIGH);
changeStatus ('go to work', STATUS.DONE);
changeStatus ('kiki', STATUS.DONE);
changeStatus ('write a post', STATUS.PIPCH);
showList();