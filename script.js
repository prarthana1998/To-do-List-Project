const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask()
{
    if(inputBox.value == '')
    {
        alert("The field is blank!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    Database();
}
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        Database();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        Database();
    }
},false);

function Database()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function DisplayTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
DisplayTask();