var Task = {
  isDone: false,
  setDescription: function(newDescription) {
    this.description = newDescription;
  },
  switchDone: function() {
    if (this.isDone) {
      this.isDone = false;
    } else {
      this.isDone = true;
    };
  }   
}

var TodoList = {
  initialize: function() {
    this.tasks = [];
  },
  addTasks: function(newTask) {
    this.tasks.push(newTask);
  }
}


$(function() {
  var todos = Object.create(TodoList);
  todos.initialize();
  var i = 0;
  var ii = 0;

  $("form#create-list").submit(function() {
    var listTitle = $("#list-name").val();
    if (listTitle !== "") {
      $("#warning").hide();
      $("#task-list").append("<ul class='tasklists col-3' id='list" + i + "'>" + listTitle + "</ul>");
      var whichList = $("div#task-list ul:last-child").attr("id");
      $("#" + whichList).append("<form id='task-input" + whichList + "'><input type='text' class='user-input' id='task" + whichList + "' placeholder='Add Task'><input type='submit' class='user-submit' id='task-submit" + whichList + "' value='+'></form>");
      $("#task-input" + whichList).submit(function() {
        var taskTitle = $("#task" + whichList).val();
        createTask(whichList, taskTitle);
        return false;
      });
      i++;
      $("#list-name").val(""); 
    } else {
      $("#warning").show();
      $("#warning").empty().append("<p id='warning'>Cannot be blank.</p>");
    };
    return false;
  });


  function createTask(list, newTask) {
    var task = Object.create(Task);
    task.setDescription(newTask);
    todos.addTasks(task);
    $("ul#" + list).append("<li class='tasks' id='task" + ii + "'>" + task.description + "</li>");
    $("li.tasks").last().click(function() {
      $(this).toggleClass("struck");
    });
    $("#task" + list).val("");
    ii++;
  };
});
