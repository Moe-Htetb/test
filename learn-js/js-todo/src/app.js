// selectors

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
const doneAll = document.querySelector("#doneAll");
const deleteAll = document.querySelector("#deleteAll");
const listTemplate = document.querySelector("#listTemplate");

// let count = 1;

// actions ( Business logic )

const updateTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

const updateDoneTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

// create new list
const createNewList = (currentTask) => {
  if (!currentTask) {
    console.error("Task content is empty or undefined");
    return;
  }

  const list = listTemplate.content.cloneNode(true);

  // Set the ID for the list item
  const listId = "list" + Date.now();
  list.querySelector(".list").id = listId;

  // Set the task content in the list
  const taskElement = list.querySelector(".list-task");

  taskElement.innerText = currentTask; // Assign the task content

  // Return the cloned and updated template
  return list;
};

const deleteList = (listId) => {
  console.log("U del");
  const currentList = document.querySelector(`#${listId}`);
  // console.log(currentList);
  if (window.confirm("Are you sure to delete ?")) {
    currentList.classList.add("animate__animated", "animate__hinge");

    currentList.remove();
    updateDoneTaskTotal();
    updateTaskTotal();
  }
};

const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none ";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");

    console.log("edit finish");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });

  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");

      console.log("edit finish");
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
  });
};

const updateList = () => {};

const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  console.log(currentList);
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  console.log(listEditBtn);

  listTask.classList.toggle("line-through");
  currentList.classList.add("duration-200");
  currentList.classList.toggle("opacity-20");
  currentList.classList.toggle("scale-90");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
  updateDoneTaskTotal();
};
const addList = (text) => {
  // console.log(taskInput.value);
  listGroup.append(createNewList(text));
  taskInput.value = null;
  updateTaskTotal();
};

// Application Logic

// handler
const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

const addTaskBtnHandler = () => {
  // console.log(taskInput.value.trim() ? true : false);
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("U must input task");
  }
};

const taskInputHandler = (event) => {
  // console.clear();
  // console.log(event);
  if (event.key === "Enter") {
    addList(taskInput.value);
  }
};

const deleteAllHandler = () => {
  if (confirm("Are you sure to delete all list")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
      list.remove();
    });
  }
};
const doneAllHandler = () => {
  if (confirm("Are you sure to done all list")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};
// listener
addTaskBtn.addEventListener("click", addTaskBtnHandler);
taskInput.addEventListener("keyup", taskInputHandler);
listGroup.addEventListener("click", listGroupHandler);
deleteAll.addEventListener("click", deleteAllHandler);
doneAll.addEventListener("click", doneAllHandler);
// console.log(deleteAll, doneAll);

// const run = (x, y) => {
//   return x + y;
// };

// console.dir(run.bind(null, 5, 4).apply());
