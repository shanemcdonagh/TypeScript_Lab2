// Created array of strings
var tasks = [];
// Function: Add to array
function addTask(task) {
    tasks.push(task);
    console.log("_____ New Task Added_____");
    console.log("Task " + task + "inserted in the list");
    return tasks.length;
}
// Function: List elements of array
function listAllTasks() {
    console.log("START: All items in array: ");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: All items in array: ");
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("______Task Removed_____");
        console.log("Task " + task + " removed from list");
        return tasks.length;
    }
}
addTask("wake up");
addTask("sleep");
listAllTasks();
deleteTask("sleep");
