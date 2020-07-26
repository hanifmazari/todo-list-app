var list = document.getElementById("list")
var li = document.createElement("li")

function addTodo(){
//create li Tag with text
var todo_item = document.getElementById("todoItem")
var li = document.createElement("li")
li.setAttribute("class", "border col-md-12 rounded input_item my-1")
var liText = document.createTextNode(todo_item.value)
li.appendChild(liText)
  

//create delete button
var delBtn = document.createElement("button")
var delTxt = document.createTextNode("DELETE")
delBtn.setAttribute("class","btn col-md-1")
delBtn.setAttribute("onclick","deletItem(this)")
delBtn.appendChild(delTxt)

// create edit button
var editBtn = document.createElement("button")
var editTxt = document.createTextNode("EDIT")
editBtn.setAttribute("class","btn col-md-1")
editBtn.setAttribute("onclick", "editItem(this)")
editBtn.appendChild(editTxt)

li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li)
todo_item.value =""
}

function deletItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter The Text",val)
    e.parentNode.firstChild.nodeValue = editValue
}