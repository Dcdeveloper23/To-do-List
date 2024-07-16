function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    return;
  }

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.innerText = taskInput.value;

  const btnGroup = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.className = "btn btn-success btn-sm mr-2";
  doneBtn.innerText = "Done";
  doneBtn.onclick = () => {
    span.classList.toggle("done");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  taskInput.value = "";
}
