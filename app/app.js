define(['angular', 'angular-ui-router'], function () {
  // Load route module in application by adding it as a dependent module.
  console.log("--------------");
  var app = angular.module('app', ['ui.router']);
  app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });

    $urlRouterProvider.otherwise('/state1');
  });

});


