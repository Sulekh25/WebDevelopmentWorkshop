const ip = document.querySelector(".add input")
const addBtn = document.querySelector(".add button")
const taskList = document.querySelector(".task-list")
function handleAdd()
{
    let val=ip.value;
    console.log(val)
    ip.value=""

    const task = document.createElement("div");
    task.classList.add("task");

    const ipval = document.createElement("input");
    ipval.value = val;

    ipval.setAttribute("disabled","disabled")

    const edit = document.createElement("button");
    edit.textContent="edit";
    edit.classList.add("edit");

    const del = document.createElement("button");
    del.textContent="delete"
    del.classList.add("delete");

    task.append(ipval);
    task.append(edit);
    task.append(del);

    taskList.append(task)

    del.addEventListener("click",function()
    {
        del.parentElement.remove()
    })

    edit.addEventListener("click",function()
    {
        if(edit.textContent=="save")
        edit.textContent="edit";
        else
        edit.textContent="save"

        ipval.toggleAttribute("disabled")
    })
}

addBtn.addEventListener("click",handleAdd)

