
const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const message = document.getElementById("message");



function showMessage(text,type){

message.textContent = text;

message.className = type;


setTimeout(()=>{

message.textContent="";

},3000);

}




function addTask(){


let task = taskInput.value.trim();



if(task===""){

showMessage("Please enter a task","error");

return;

}



let li = document.createElement("li");



li.innerHTML=`

<span>${task}</span>


<div class="task-buttons">

<button class="edit">
Edit
</button>


<button class="delete">
Delete
</button>

</div>

`;



const editBtn = li.querySelector(".edit");
const deleteBtn = li.querySelector(".delete");
const taskText = li.querySelector("span");




editBtn.addEventListener("click",()=>{


let updatedTask = prompt(

"Edit Task",

taskText.textContent

);



if(updatedTask!==null){


updatedTask = updatedTask.trim();


if(updatedTask===""){

showMessage("Task cannot be empty","error");

}


else{

taskText.textContent = updatedTask;

showMessage("Task updated","success");

}

}

});




deleteBtn.addEventListener("click",()=>{

li.remove();

showMessage("Task deleted","success");

});



taskList.appendChild(li);


taskInput.value="";


showMessage("Task added successfully","success");

}
