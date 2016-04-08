angular.module('pittsburghkids')
  .controller('GroupListCtrl', ['dataService', function (dataService) {
    var self = this;
    dataService.getGroups().then(function (data) {
      self.existingGroups = data;
    });
  }]);