import compareAsc, format, parseISO, startOfToday  from 'date-fns';
import clearForm  from './dom-manip';


// Creating an array for ToDo, if needed down the road
let toDoArray = [];

// Factory function to create todo list
export const createToDo = () => {

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;
    
    // Check to see if empty fields exist
    if (Title == "" || Description == "" || DueDate == "") {
        return;
    }

    // Check to see if a pre-date was entered
    if (parseISO(DueDate) < startOfToday()) {
        return;
    }

    // Loop over the nodeList for Check List items from the DOM and format to string
    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++) {

       // Strip off the "x" from end of each li then push to temp array 
       let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
       CheckListArray.push(strippedCheckList);  

    }

    // Strip off the checklist array and convert to string with commas
    let CheckList = CheckListArray.join(", ");


    // TODO: remove below two lines of code if array is not needed
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });


    // Reset the form after successful submission 
    clearForm();

    return { Title, Description, DueDate, Priority, CheckList };
}