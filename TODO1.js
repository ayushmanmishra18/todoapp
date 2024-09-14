const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something !");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";  // Create a checkbox
        checkbox.className = "check-task";  // Add a class for checkbox styling

        let label = document.createElement("label");
        label.innerHTML = inputbox.value;

        li.appendChild(checkbox);
        li.appendChild(label);

        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Create the delete (cross) button
        li.appendChild(span);

        inputbox.value = "";
        saveData();
    }
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Remove the list item when cross is clicked
        saveData();
    }

    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentElement.classList.toggle("checked"); 
         // Toggle the checked class when checkbox is clicked
         saveData();
    }
});
function saveData(){
    localStorage.setItem("data",list.innerHTML);

}
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}

showtask();

document.querySelector('.about a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth'
    });
    document.querySelector('.about-details').style.display = 'block';
});

