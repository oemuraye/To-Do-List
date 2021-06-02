let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('dos');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('li');
    paragraph.classList.add('paragraph');
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ' ';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})