angular.module('pittsburghkids')
  .controller('GroupListCtrl', ['dataService', function (dataService) {
    dataService.getGroups().then(function (data) {
      this.existingGroups = data;
    });
  }]);