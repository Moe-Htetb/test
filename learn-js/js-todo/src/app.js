//select

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");

//process
const addList = () => {
  listGroup.append(createNewList(taskInput.value));
  taskInput.value = null;
  updateTaskTotal();
};

const updateTaskTotal = () => {
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

const updateDneTaskTotal = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//create new list
const createNewList = (currentTask) => {
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div
          class="border bg-white animate__animated animate__zoomIn border-stone-950 p-3 flex justify-between mb-3"
        >
          <div class="flex gap-3 items-center">
            <input type="checkbox" class="list-done-check accent-stone-950" />
            <p class="font-mono list-task">${currentTask}</p>
          </div>
          <div class="control">
            <button
              class="border list-edit-btn border-stone-950 active:bg-stone-400 active:scale-90 duration-200 disabled:opacity-20 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 pointer-events-none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              class="list-del-btn border border-stone-950 active:bg-stone-400 active:scale-90 duration-200 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 pointer-events-none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
  `;

  // const listDoneChecked = list.querySelector(".list-done-check");
  // const listTask = list.querySelector(".list-task");
  // const listDeleteBtn = list.querySelector(".list-del-btn");
  // const listEditBtn = list.querySelector(".list-edit-btn");

  // listEditBtn.addEventListener("click", () => {
  //   listEditBtn.setAttribute("disabled", true);
  //   listDoneChecked.setAttribute("disabled", true);
  //   const newTextInput = document.createElement("input");
  //   newTextInput.className =
  //     "border border-stone-950 px-2 w-[180px] py-1 font-mono focus-visible:outline-none";
  //   newTextInput.value = currentTask;
  //   listTask.after(newTextInput);
  //   newTextInput.focus();
  //   listTask.classList.add("hidden");

  //   newTextInput.addEventListener("blur", () => {
  //     listDoneChecked.removeAttribute("disabled");
  //     listEditBtn.removeAttribute("disabled");

  //     listTask.innerText = newTextInput.value;
  //     listTask.classList.remove("hidden");
  //     newTextInput.remove();
  //   });
  // });

  // listDeleteBtn.addEventListener("click", () => {
  //   if (confirm("Are you sure to delete")) {
  //     list.remove();
  //   }
  // });

  // listDoneChecked.addEventListener("change", () => {
  //   // console.log(`${currentTask} is done`);
  //   updateDneTaskTotal();
  //   listTask.classList.toggle("line-through");
  //   list.classList.toggle("opacity-20");
  //   list.classList.toggle("scale-90");
  //   list.classList.add("duration-200");
  //   if (listDoneChecked.checked) {
  //     listEditBtn.setAttribute("disabled", true);
  //   } else {
  //     listEditBtn.removeAttribute("disabled");
  //   }
  // });
  return list;
};

const handleListGroup = (event) => {
  const list = event.target.closest(".list");

  const listDoneChecked = list.querySelector(".list-done-check");
  const listTask = list.querySelector(".list-task");
  // const listDeleteBtn = list.querySelector(".list-del-btn");
  const listEditBtn = list.querySelector(".list-edit-btn");

  console.log(list);

  if (event.target.classList.contains("list-edit-btn")) {
    // console.log("u edit");
    listEditBtn.setAttribute("disabled", true);
    listDoneChecked.setAttribute("disabled", true);
    const newTextInput = document.createElement("input");
    newTextInput.className =
      "border border-stone-950 px-2 w-[180px] py-1 font-mono focus-visible:outline-none";
    const currentTask = listTask.innerText;
    newTextInput.value = currentTask;
    listTask.after(newTextInput);
    newTextInput.focus();
    listTask.classList.add("hidden");

    newTextInput.addEventListener("blur", () => {
      listDoneChecked.removeAttribute("disabled");
      listEditBtn.removeAttribute("disabled");

      listTask.innerText = newTextInput.value;
      listTask.classList.remove("hidden");
      newTextInput.remove();
    });
  }
  if (event.target.classList.contains("list-del-btn")) {
    if (confirm("Are you sure to delete")) {
      list.remove();
      updateTaskTotal();
    }
  }
  if (event.target.classList.contains("list-done-check")) {
    // console.log("u check");
    updateDneTaskTotal();
    listTask.classList.toggle("line-through");
    list.classList.toggle("opacity-20");
    list.classList.toggle("scale-90");
    list.classList.add("duration-200");
    if (listDoneChecked.checked) {
      listEditBtn.setAttribute("disabled", true);
    } else {
      listEditBtn.removeAttribute("disabled");
    }
  }
};
addTaskBtn.addEventListener("click", addList);
listGroup.addEventListener("click", handleListGroup);