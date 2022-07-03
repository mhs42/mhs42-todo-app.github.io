const form = document.forms["myForm"];
const input = form["taskInput"];
const ul = document.getElementById("taskList");

form.addEventListener("submit", (e)=>
{
    // This prevents reloading of page
    // every time a new entry is added
    e.preventDefault();

    const val = input.value;
    const newLi = document.createElement("li");
    // Use innerHTML instead of innerText as there is
    // an i tag present in the li (which counts as HTML)

    // We pass this to deleteTask() in order to pass the
    // whole JS object to the function, allowing us to
    // pinpoint which task we want to delete from the
    // list

    newLi.innerHTML = val + "<i onclick=\"deleteTask(this)\" class=\"fas fa-times\" style=\"float:right;\"></i>";

    ul.appendChild(newLi);
})

// Check out getElementsByTagName()

function deleteTask(element)
{
    // element is just the x button
    // We must also add .parentElement in front to
    // remove the entirety of the item
    element.parentElement.remove();
    // element.parentElement.style.textDecoration="line-through;";
}