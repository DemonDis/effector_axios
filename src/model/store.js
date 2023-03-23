import { createStore } from "effector";

export const $pickerOptions = createStore(["reactjs", "frontend"]);
export const $didInvalidate = createStore(false);
