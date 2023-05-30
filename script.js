const form = document.querySelector("form");
const input = document.querySelector("#input");
const description = document.querySelector("#description")
const submit = document.querySelector("#smt-btn");
let taskList = document.querySelector(".task-list");

let tasks = [];
tasks = JSON.parse(localStorage.getItem("task"));
showAllTasks();
function clearAllTask(){
    tasks.forEach((value,index)=>{
        const task = document.querySelector(".task")
        task.remove();
    })
}


function showAllTasks(){

    tasks.forEach((value,index)=>{
        const task = document.createElement("div");
        task.setAttribute("class","task");

        const item = document.createElement("div");
        item.setAttribute("class","item");
        const h3 = document.createElement("div");
        h3.setAttribute("class","title");
        h3.innerHTML = value.title;
        const desc = document.createElement("div");
        desc.innerHTML = value.description
        desc.setAttribute("class","desc");
        item.append(h3);
        item.append(desc);
        task.append(item);

        const remove = document.createElement("div");
        remove.innerHTML = '<i class="fas fa-minus-circle"></i>';
        remove.addEventListener("click",()=>{
            clearAllTask();
            tasks.splice(index,1);
            localStorage.setItem("task",JSON.stringify(tasks));
            showAllTasks();
        })
        task.append(remove);
        taskList.appendChild(task);
    })
}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    clearAllTask();
    tasks.push({
        title: input.value,
        description: description.value,
    })
    input.value=description.value="";
    localStorage.setItem("task",JSON.stringify(tasks));
    showAllTasks();

})



