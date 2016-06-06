(function(){
  'use strict';

  angular.module('tasks')
         .service('tasksService', ['$q', TasksService]);

  /**
   * Tasks DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function TasksService($q) {
    var tasks = [
      {
        text: 'Morning Routine',
        subTasks: [
          {
            text: 'Brush teeth',
            isComplete: false
          },
          {
            text: 'Walk dogs',
            isComplete: false
          },
          {
            text: 'Eat breakfast',
            isComplete: false
          }
        ],
        isComplete: false,
        createdTime: new Date(),
        priority: 1
      },
      {
        text: 'Take vitamins',
        subTasks: [],
        isComplete: false,
        createdTime: new Date(),
        priority: 2
      }
    ];

    // Promise-based API
    return {
      loadAllTasks: function() {
        // Simulate async nature of real remote calls
        return $q.when(tasks);
      }
    };
  }

})();
