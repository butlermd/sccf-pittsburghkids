angular.module('pittsburghkids')
  .controller('GroupManageCtrl', ['$state', '$stateParams', 'dataService', function ($state, $stateParams, dataService) {
    var self = this;

    self.mode = $state.includes('persona.groups.new') ? 'New' : 'Edit';

    self.activePage = 1;

    if (self.mode === 'New') {
      self.group = {
        subgroups: [{}]
      };
    } else {
      dataService.getGroup($stateParams.groupId).then(function (data) {
        self.group = data;
      });
    }

    self.addSubgroup = function () {
      self.group.subgroups.push({});
    }
  }]);