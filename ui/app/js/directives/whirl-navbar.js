angular.module('pittsburghkids')
  .component('whirlNavbar', {
    templateUrl: 'partials/navbar.html',
    controller: ['personaHelper', function (personaHelper) {
      this.islinkAllowed = personaHelper.islinkAllowed;
      this.linkStatus = personaHelper.linkStatus;
    }]
  });