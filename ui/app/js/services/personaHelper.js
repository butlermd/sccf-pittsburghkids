angular.module('pittsburghkids')
  .service('personaHelper', ['$state', function ($state) {
    var permissions = {
      map: ['scheduler', 'guide', 'chaperone'],
      schedule: ['scheduler', 'guide'],
      groups: ['scheduler'],
      exhibits: ['scheduler']
    };

    this.linkStatus = function (link) {
      return $state.includes('persona.' + link + '.**') ? 'active' : '';
    };

    this.islinkAllowed = function (link) {
      return _.some(permissions[link], function (persona) {
        return $state.includes('persona', {'persona': persona});
      });
    };
  }]);