(function(){

  angular.module('tasks')
       .controller('TasksController',
        ['tasksService', TasksController]);

  /**
   * Main Controller
   */
  function TasksController(tasksService) {
    var self = this;

    self.selected = null;
    self.users    = [];

    // Load all registered users
    tasksService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });
  }
})();
