import { createToDo } from "./create-to-do.js";
import { blankProjectLoad } from "./blank-project-load.js";
import {
  displayDefaultProject,
  displayTheForm,
  addItemToChecklist,
  clearForm,
} from "./dom-manip-js";
import "./style.css";

// Call blankProjectLoad on first land
blankProjectLoad();

// Call DOM Manipulation module to load default project
//displayDefaultProject();

// Click events module
let clickEventsModule = (function () {
  // click event for displaying the form
  const addNewToDo = document.querySelector(".add-todo-button");
  addNewToDo.addEventListener("click", displayTheForm);

  // click event for adding an item to the checklist on the form
  const addToChecklist = document.querySelector(".add-to-checklist");
  addToChecklist.addEventListener("click", addItemToChecklist);

  // Click event to clear the form
  const clearButton = document.querySelector(".reset-button");
  clearButton.addEventListener("click", clearForm);

  // Click event to submit a new todo form to project
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", createToDo);
})();

// Call create-to-do.js module file and apply some objects/properties (this will eventually be replaced by UI input)
const myToDo = createToDo(
  "Get Foodstuffs",
  "Go get groceries",
  "6/15/2024",
  "Low",
  "Meat",
  "Eggs",
  "Milk"
);
const myToDo2 = createToDo(
  "Assignment",
  "Do odin Project work",
  "6/20/2024",
  "Medium",
  "Read Functions, Do ToDo Project"
);
