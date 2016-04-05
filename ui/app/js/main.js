angular.module('pittsburghkids', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html"
    })
    .state('scheduler', {
      url: "/scheduler",
      templateUrl: "partials/scheduler.html"
    })
    .state('scheduler.home', {
      url: "/scheduler/home",
      templateUrl: "partials/scheduler.home.html"
    })
    .state('guide', {
      url: "/guide",
      templateUrl: "partials/guide.html"
    })
    .state('guide.home', {
      url: "/guide/home",
      templateUrl: "partials/guide.home.html"
    });
});