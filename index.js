window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
       
        if (input.value == ""){
            alert("Please write something before adding a Task")
        }
        else{
    
        const task = input.value;
        
        const task_el = document.createElement("div");
        task_el.classList.add('task');

        const task_content_el = document.createElement("div");
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const input_el = document.createElement("input");
        input_el.classList.add("text");
        input_el.type = "text";
        input_el.value = task;
        input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");


        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";

        const task_del_el = document.createElement("button");
        task_del_el.classList.add("del");
        task_del_el.innerText = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);
        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener("click", (e) =>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
            input_el.removeAttribute("readonly");
            task_edit_el.innerText = "Save";
            input_el.focus();
            }else{
                task_edit_el.innerText = "Edit";
                input_el.setAttribute("readonly, readonly");
            }
        })
        task_del_el.addEventListener("click", (e) => {
            list_el.removeChild(task_el);
        })

        }
    });

});
