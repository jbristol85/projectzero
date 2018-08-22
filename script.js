const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    var line = document.createElement("LI");
    var text = document.createTextNode(classNames.TODO_TEXT);
    line.appendChild(text);
    list.append(line);
    
    itemCountSpan.textContent++;
    uncheckedCountSpan.textContent++;
}
