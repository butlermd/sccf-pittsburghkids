angular.module('pittsburghkids')
  .component('whirlNavbar', {
    templateUrl: 'partials/navbar.html',
    controller: ['personaHelper', function (personaHelper) {
      this.islinkAllowed = function () {
        return personaHelper.islinkAllowed.apply(personaHelper, arguments);
      };
    }]
  });