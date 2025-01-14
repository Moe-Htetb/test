import { addBtnHandler, showAlertHandler } from "./handlers";
import { addBtn, showAlert } from "./selectors";

const listener = () => {
  addBtn.addEventListener("click", addBtnHandler);
  showAlert.addEventListener("click", showAlertHandler);
};

export default listener;
