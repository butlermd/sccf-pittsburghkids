angular.module('pittsburghkids')
  .controller('MapCtrl', ['dataService', function (dataService) {
    //time now 12:25
    this.exhibits = [
      {
        name: 'Attic',
        svgId: 'map-attic',
        groups: [
          {
            name: '(1) Invading Chitauri',
            timeLeft: 5,
            count: 20
          },
          {
            name: '(3) Invading Chitauri',
            timeLeft: 20,
            count: 25
          },
          {
            name: 'The Avengers',
            timeLeft: -5,
            count: 44
          }
        ],
        capacity: 40,
        total: 45,
        popover: {
          side: 'right',
          active: false,
          top: '472px',
          left: '220px'
        }
      },
      {
        name: 'Makeshop',
        svgId: 'map-makeshop',
        groups: [
          {
            name: '(2) Invading Chitauri',
            timeLeft: 20,
            count: 30
          }
        ],
        capacity: 50,
        total: 30,
        popover: {
          side: 'top',
          active: false,
          top: '775px',
          left: '174px'
        }
      },
      {
        name: 'Studio',
        svgId: 'map-studio',
        groups: [
          {
            name: '(4) Invading Chitauri',
            timeLeft: 20,
            count: 35
          },
          {
            name: '(6) Invading Chitauri',
            timeLeft: 20,
            count: 30
          }
        ],
        capacity: 70,
        total: 65,
        popover: {
          side: 'top',
          active: false,
          top: '925px',
          left: '502px'
        }
      }
    ];

    this.exhibits.forEach(function (exhibit) {
      var exhibitBox = document.getElementById(exhibit.svgId).getBoundingClientRect();

      console.log(exhibitBox)
      exhibit.badgePosition = {
        position: 'absolute',
        top: 'calc(' + exhibitBox.bottom + 'px - 4.06em)',
        left: 'calc(' + exhibitBox.left + 'px + 0.5em)'
      };
    });

    this.badgeType = function (exhibit) {
      if (exhibit.total > exhibit.capacity) {
        return 'badge-danger';
      }

      if (exhibit.total >= (exhibit.capacity * 0.8)) {
        return 'badge-warning';
      }

      return 'badge-info';
    };

    //this is ass backwards because of 3am brain. ultimately, we want to filter 
    // out arrival times that are after now
    this.filterNegativeTimeLeft = function (value) {
      return value.timeLeft >= 0;
    };

    this.filterInNegativeTimeLeft = function (value) {
      return value.timeLeft < 0;
    };

    this.togglePopover = function (exhibit) {
      exhibit.popover.active = !exhibit.popover.active;
    }
  }]);