import checkComplete from "./components/checkComplet.js";
import deleteIcon from "./components/deleteIcon.js";
(()=>{
    const btn = document.querySelector("[data-form-btn]");
    const createTask =(e) =>{
        e.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card")
        const value = input.value
        input.value="";
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete())
        const titleTask = document.createElement("span");
        titleTask.classList.add("task")
        titleTask.innerHTML=value;
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };
    btn.addEventListener("click", createTask);

})();