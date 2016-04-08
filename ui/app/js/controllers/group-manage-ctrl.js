angular.module('pittsburghkids')
  .controller('GroupManageCtrl', ['$state', '$stateParams', 'dataService', function ($state, $stateParams, dataService) {
    this.mode = $state.includes('persona.groups.new') ? 'New' : 'Edit';

    this.activePage = 1;

    if (this.mode === 'New') {
      this.group = {
        subgroups: [{}]
      };
    } else {
      dataService.getGroup($stateParams.groupId).then(function (data) {
        this.group = data;
      });
    }

    this.addSubgroup = function () {
      this.group.subgroups.push({});
    }
  }]);