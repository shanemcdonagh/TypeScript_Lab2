// Created array of strings
let tasks: string[] = [];

// Function: Add to array
function addTask(task: string):number
{
    tasks.push(task);
    console.log("_____ New Task Added_____");
    console.log("Task " + task + " inserted in the list");
    return tasks.length;
}

// Function: List elements of array
function listAllTasks():void
{
    console.log("START: All items in array: ");
    
    tasks.forEach(function(task)
    {
        console.log(task)
    });
    console.log("END: All items in array: ");
}

function deleteTask(task: string):number
{
   let index: number = tasks.indexOf(task);
   
   if(index > -1)
   {
       tasks.splice(index,1);
       console.log("______Task Removed_____");
       console.log("Task " + task + " removed from list");
       
       return tasks.length;
   }
}

let x:number = addTask("wake up");
console.log("Number of items in list: " +x);
addTask("sleep");

listAllTasks();

deleteTask("sleep");