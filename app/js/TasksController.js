(function(){

  angular.module('tasks')
       .controller('TasksController', ['tasksService', TasksController]);

  /**
   * Main Controller
   */
  function TasksController(tasksService) {
    var self = this;

    self.selected = null;
    self.tasks    = [];

    // Load all tasks
    tasksService
          .loadAllTasks()
          .then(function (tasks) {
            self.tasks    = [].concat(tasks);
            self.selected = tasks[0];
          });
  }
})();
