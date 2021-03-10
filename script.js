function backgroundLiColor(e) {
    e.target.style.backgroundColor= 'rgb(128,128,128)';
}
function addLi() {
    const olTasks = document.getElementById('lista-tarefas')
    const taskText = document.getElementById('texto-tarefa')
    let liCreate = document.createElement('li');
    liCreate.innerText = taskText.value;
    olTasks.appendChild(liCreate);
    taskText.value = '';
    liCreate.className = 'item';
    liCreate.addEventListener('click', backgroundLiColor)
}


function createListItems() {
    const taskCreate = document.getElementById('criar-tarefa')
    taskCreate.addEventListener('click', addLi)

}

createListItems()
