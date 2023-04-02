{
    const tasks = [
        {
            content: "Wyjść do pracy",
            done: true,
        },
        {
            content: "zjeść obiad",
            done: false,
        },
    ];
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,

        });
        render();
    }
const removeTask = (taskIndex)=>{
    tasks.splice(taskIndex, 1);
    render();
}

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li
            ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            <button class="js-remove">usuń</button>
            ${task.content}
            
           </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex)=>{
            removeButton.addEventListener("click", ()=>{
                removeTask(taskIndex);
                render();
            })
        })
            
    
    }

    

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;

        };
        addNewTask(newTaskContent);
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };
    init();
}


