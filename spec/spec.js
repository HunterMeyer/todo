describe("Task", function() {
  it("sets up an object for a task", function() {
    Object.create(Task);
    Task.should.exist;
  });

  it("lets you set the description of the task", function() {
    var task = Object.create(Task);
    task.setDescription("Make a todo list");
    task.description.should.equal("Make a todo list");
  });

  it("starts off as marked unfinished and can be marked completed upon click", function() {
    var task = Object.create(Task);
    task.switchDone();
    task.isDone.should.be.true;
  });

  it("starts off as marked unfinished and can be marked completed upon click", function() {
    var task = Object.create(Task);
    task.switchDone();
    task.isDone.should.be.true;
  });

});

describe("TodoList", function() {
  it("sets up a list that can hold and utilize various tasks", function() {
    Object.create(TodoList);
    TodoList.should.exist;
  });

  it("lets you save tasks in a list", function() {
    var list = Object.create(TodoList);
    list.initialize();
    list.addTasks("Make a todo list");
    list.tasks[0].should.equal("Make a todo list");
  });
});