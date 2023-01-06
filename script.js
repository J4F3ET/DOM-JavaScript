import checkComplete from "./components/checkComplet.js";
import deleteIcon from "./components/deleteIcon.js";
(()=>{
    const btn = document.querySelector("[data-form-btn]");
    const addTask = () =>{
        const list = document.querySelector("[data-list]");
        console.log(list);
        const task = createTask(event);
        list.appendChild(task);
        console.log(list);
    }
    const createTask =(e) =>{
        e.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const calendar = document.querySelector("[data-form-date]");
        const dateel= moment(calendar.value).format("DD-MM-YYYY")
        const task = document.createElement("li");
        task.classList.add("card")
        const value = input.value
        input.value="";
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete())
        const titleTask = document.createElement("span");
        const dateElement = document.createElement('span');
        dateElement.innerHTML = dateel;
        titleTask.classList.add("task")
        titleTask.innerHTML=value;
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
        return task;    
    };
    btn.addEventListener("click", addTask);

})();