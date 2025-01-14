import Swal from "sweetalert2";
import { listGroup, taskInput } from "./selectors";

export const addBtnHandler = (e) => {
  const taskName = taskInput.value;
  const list = document.createElement("li");
  list.classList.add("border", "p-2", "border-black", "w-52", "my-2");
  list.innerText = taskName;
  listGroup.append(list);
  taskInput.value = "";
};

export const showAlertHandler = () => {
  Swal.fire("lee lr");
};
