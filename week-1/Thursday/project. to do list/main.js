//User clicked on the addB
//if there any text inside the Item field, add that text to the TDL
document.getElementById("add").addEventListener("click", function() {
    var value = document.getElementById("item").value;
    if(value) addItemTodo(value)});


//Adds new item to the todo List
function addItemTodo(text){
    var list = document.getElementById("todo")
    var item = document.createElement("li")
    item.innerText = text

   var buttons = document.createElement("div")
   buttons.classList.add("buttons")

   var remove = document.createElement("button")
   remove.classList.add("remove")


   var complete = document.createElement("button")
   complete.classList.add("complete")

   buttons.appendChild(remove)
   buttons.appendChild(complete)
   item.appendChild(buttons)

   list.appendChild(item)

   buttons.appendChild(remove)
   buttons.appendChild(complete)
   item.appendChild(buttons)

   list.appendChild(item)

}
