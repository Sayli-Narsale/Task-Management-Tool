function addTask(){
    event.preventDefault();

    var Name = document.getElementById("name").value;
    var taskname = document.getElementById("tname").value;
    var taskdescription = document.getElementById("tdec").value;

    var taskElement = document.createElement("table");
    taskElement.className = "task",

    var taskContent = 

    <tr>
        <th>User Name</th>
        <th>Task Name</th>
        <th>Task description</th>
    </tr>

    <tr>
        <td>${name} </td>
        <td>${taskname} </td>
        <td>${taskdescription}</td>
        <td><buton class="delete task">DONE</buton></td>
    </tr>
    ;
    taskElement.innerHTML = taskContent;

    var tasklist = document.getElementById("Task-list");
    tasklist.appendchild("taskElment");

    document.getElementById("form").reset();

    var deleteButton = taskElement.getElementByClassName("delete-task")[0];
    deleteButton.addEventListener("click",function(){
        tasklist.removeChild(taskElement;)
    });

}
<script>function myfunction(){
                    document.getElementById("my form").reset();}</script>