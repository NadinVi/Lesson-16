//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає

const block = document.querySelector(".block");

const div = document.createElement("div");
div.classList.add("box")
div.style.width = "50px";
div.style.height = "50px";
div.style.backgroundColor = "red";


block.addEventListener("focusin", inputFocus);
//block.addEventListener("focusout", () => console.log("Bye"));
block.addEventListener("focusout", inputFocusOut);

function inputFocus() {
    text.append(div);
};

function inputFocusOut() {
    //console.log("Bye");
    div.remove();
};

