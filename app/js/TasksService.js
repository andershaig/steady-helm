(function(){
  'use strict';

  angular.module('tasks').service('tasksService', ['$q', TasksService]);

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
        text: 'Brush teeth',
        isComplete: false,
        completedTime: null,
        createdTime: new Date()
      },
      {
        text: 'Walk dogs',
        isComplete: false,
        completedTime: null,
        createdTime: new Date()
      },
      {
        text: 'Eat breakfast',
        isComplete: false,
        completedTime: null,
        createdTime: new Date()
      },
      {
        text: 'Take vitamins',
        isComplete: false,
        completedTime: null,
        createdTime: new Date()
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
