"use strict";
exports.__esModule = true;
var ToDo = /** @class */ (function () {
    function ToDo() {
        // ||Implementing from interface||
        // String array
        this.tasks = [];
    }
    // Function
    ToDo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("_____ New Task Added_____");
        console.log("Task " + task + " inserted in the list");
        return this.tasks.length;
    };
    // Function
    ToDo.prototype.listAllTasks = function () {
        console.log("START: All items in array: ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in array: ");
    };
    // Function
    ToDo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("______Task Removed_____");
            console.log("Task " + task + " removed from list");
            return this.tasks.length;
        }
    };
    return ToDo;
}());
// Instantiation
var myTodos = new ToDo();
// Method calls
myTodos.addTask("eat");
myTodos.addTask("sleep");
myTodos.listAllTasks();
myTodos.deleteTask("sleep");
