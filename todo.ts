// Import Interface
import {todoInterface} from './todointerface'

class ToDo implements todoInterface
{
    constructor()
    {

    }

    // ||Implementing from interface||

    // String array
    tasks: Array<string>=[];

    // Function
    addTask(task: string):number
    {
        this.tasks.push(task);
        console.log("_____ New Task Added_____");
        console.log("Task " + task + " inserted in the list");
        return this.tasks.length;
    }

    // Function
    listAllTasks():void
    {
        console.log("START: All items in array: ");
        
        this.tasks.forEach(function(task)
        {
            console.log(task)
        });
        console.log("END: All items in array: ");
    }

    // Function
    deleteTask(task: string):number
    {
        let index: number = this.tasks.indexOf(task);
    
        if(index > -1)
        {
            this.tasks.splice(index,1);
            console.log("______Task Removed_____");
            console.log("Task " + task + " removed from list");
            
            return this.tasks.length;
        }
    }
}
// Instantiation
let myTodos = new ToDo();

// Method calls
myTodos.addTask("eat");
myTodos.addTask("sleep");

myTodos.listAllTasks();

myTodos.deleteTask("sleep");