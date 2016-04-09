angular.module('pittsburghkids')
  .controller('SchedulerCtrl', ['dataService', function (dataService) {
    var self = this;

    self.groups = [];
    dataService.getGroups().then(function (data) {
      self.groups = data;
      self.activeGroup = self.groups[0];
    });

    self.previousGroup = function () {
      if (self.activeGroup === _.head(self.groups)) {
        self.activeGroup = _.last(self.groups);
        return;
      }

      self.activeGroup = self.groups[_.indexOf(self.groups, self.activeGroup) - 1];
    };

    self.nextGroup = function () {
      if (self.activeGroup === _.last(self.groups)) {
        self.activeGroup = _.head(self.groups);
        return;
      }

      self.activeGroup = self.groups[_.indexOf(self.groups, self.activeGroup) + 1];
    };

    self.activeGroupAges = function () {
      return _(self.activeGroup.subgroups).map(_.property('age')).uniq().value().join(', ');
    };

    self.activeGroupTotalKids = function () {
      var kids = _.map(self.activeGroup.subgroups, (_.property('kids')));
      return _.reduce(kids, _.add, 0);
    };

    self.activeGroupTotalAdults = function () {
      var kids = _.map(self.activeGroup.subgroups, (_.property('adults')));
      return _.reduce(kids, _.add, 0);
    };

    self.activeGroupTimeSpan = function () {
      return [self.activeGroup.arrivalTime, self.activeGroup.departTime].join(' - ');
    };

    self.showExtraInfo = false;
    self.toggleExtra = function () {
      self.showExtraInfo = !self.showExtraInfo;
    }
  }]);