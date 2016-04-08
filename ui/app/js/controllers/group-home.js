angular.module('pittsburghkids')
  .controller('GroupHomeCtrl', ['$state', function ($state) {
    this.isHome = function () {
      return $state;
    }
  }]);