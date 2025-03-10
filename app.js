const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".lists");


let editButton = null;

const addTodo = () => {
    const inputValue = inputBox.value.trim();
    if (inputValue == "") {
        alert("You must enter something");
        return;
    }

    if (editButton) {
        editButton.innerText = inputValue;
        editButton = null;
        inputBox.value = "";
        addBtn.innerText = "Add";
        return;

    }

    //Creating a paragraph element
    let items = document.createElement("li");
    let para = document.createElement("p");
    para.innerText = inputValue;
    items.appendChild(para);

    //Creating an edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    items.appendChild(editBtn);

    //Creating a delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Remove";
    delBtn.classList.add("del-btn");
    items.appendChild(delBtn);

    ul.appendChild(items);
    inputBox.value = "";
}

const updateTodo = (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentElement.remove();
    }

    if (e.target.innerText === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerText;
        inputBox.focus();
        addBtn.innerText = "Edit";
        editButton = e.target.previousElementSibling;
    }
}

addBtn.addEventListener("click", addTodo);
ul.addEventListener("click", updateTodo);

