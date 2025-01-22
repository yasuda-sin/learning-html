window.addEventListener("load", () => {
    todoList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI"){     //大文字
            const task = e.target;
            task.parentElement.removeChild(task);
            completedList.appendChild(task);
        }
    })

    completedList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            const task = e.target;
            task.parentElement.removeChild(task);
            todoList.appendChild(task);
        }
    })
});