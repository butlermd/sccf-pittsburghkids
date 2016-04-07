angular.module('pittsburghkids', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/login');
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html'
    })
    .state('persona', {
      url: '/:persona',
      templateUrl: 'partials/scheduler.html'
    })
    .state('persona.map', {
      url: '/map',
      templateUrl: 'partials/scheduler.map.html'
    })
    .state('persona.schedule', {
      url: '/schedule',
      templateUrl: 'partials/scheduler.schedule.html'
    })
    .state('persona.groups', {
      templateUrl: 'partials/scheduler.groups.html'
    })
    .state('persona.groups.home', {
      url: '/groups',
      templateUrl: 'partials/scheduler.groups.home.html'
    })
    .state('persona.groups.new', {
      url: '/new',
      templateUrl: 'partials/scheduler.groups.manage.html'
    })
    .state('persona.groups.edit', {
      url: '/{groupId:int}/edit',
      templateUrl: 'partials/scheduler.groups.manage.html',
      controller: 'GroupEditCtrl' //needs to inject stateParams (it's an object with the params)
    })
    .state('persona.groups.list', {
      url: '/list',
      templateUrl: 'partials/scheduler.groups.list.html',
      controller: 'GroupListCtrl'
    })
    .state('persona.exhibits', {
      url: '/exhibits',
      templateUrl: 'partials/scheduler.exhibits.html'
    });
});