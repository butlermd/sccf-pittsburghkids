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
      templateUrl: 'partials/scheduler.map.html',
      controller: 'MapCtrl',
      controllerAs: '$ctrl'      
    })
    .state('persona.schedule', {
      url: '/schedule',
      templateUrl: 'partials/scheduler.schedule.html',
      controller: 'SchedulerCtrl',
      controllerAs: '$ctrl'
    })
    .state('persona.groups', {
      url: '/groups',
      templateUrl: 'partials/scheduler.groups.html'
    })
    .state('persona.groups.new', {
      url: '/new',
      templateUrl: 'partials/scheduler.groups.manage.html',
      controller: 'GroupManageCtrl',
      controllerAs: '$ctrl'
    })
    .state('persona.groups.edit', {
      url: '/{groupId:int}/edit',
      templateUrl: 'partials/scheduler.groups.manage.html',
      controller: 'GroupManageCtrl',
      controllerAs: '$ctrl' //needs to inject stateParams (it's an object with the params)
    })
    .state('persona.groups.list', {
      url: '/list',
      templateUrl: 'partials/scheduler.groups.list.html',
      controller: 'GroupListCtrl',
      controllerAs: '$ctrl'
    })
    .state('persona.exhibits', {
      url: '/exhibits',
      templateUrl: 'partials/scheduler.exhibits.html'
    });
});