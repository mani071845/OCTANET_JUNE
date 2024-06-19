function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value.trim();
    
    if (text !== "") {
      var listItem = document.createElement("li");
      listItem.className = "todo-item";
      
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.addEventListener("change", toggleCheckbox);
      
      var todoText = document.createElement("span");
      todoText.className = "todo-text";
      todoText.textContent = text;
      
      listItem.appendChild(checkbox);
      listItem.appendChild(todoText);
      
      document.getElementById("todoList").appendChild(listItem);
      
      input.value = "";
    }
  }
  
  function toggleCheckbox(event) {
    var checkbox = event.target;
    var todoText = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }
  }
  