angular.module('pittsburghkids')
  .service('dataService', ['$q', function ($q) {
    var groups = [
      {
        id: 0,
        name: 'Invading Chitauri',
        primaryContact: 'Ronan the Destroyer',
        schoolDistrict: 'Kree Space',
        contactPhone: '1 (123) 456-7891',
        contactEmail: 'imbluedabadee@gmail.com',
        contactAddress: '1001 Kree Space Ship',
        contactCity: 'Kree',
        contactState: 'KS',
        contactZip: '12345',
        billingSameAsContact: true,
        billingPhone: '1 (123) 456-7891',
        billingEmail: 'imbluedabadee@gmail.com',
        billingAddress: '1001 Kree Space Ship',
        billingCity: 'Kree',
        billingState: 'KS',
        billingZip: '12345',
        date: '2016-05-04',
        arrivalTime: '10:00',
        departTime: '14:00',
        transport: 'bus',
        lunch: 'brought',
        subgroups: [
          {
            age: '5-6',
            exhibits: [],
            kids: 222,
            adults: 22
          }
        ],
        guided: true,
        special: false,
        comments: 'This group will be educating themselves before attempting to take over the world. If they win, they\'ll like us. If they lose, we might be branded as traitors'
      },
      {
        id: 1,
        name: 'The Avengers',
        primaryContact: 'Captain American',
        schoolDistrict: 'Stark Tower',
        contactPhone: '1 (987) 654-3210',
        contactEmail: 'imredwhiteandbluedabadee@gmail.com',
        contactAddress: '1001 Stark Tower',
        contactCity: 'New York City',
        contactState: 'NY',
        contactZip: '67890',
        billingSameAsContact: false,
        billingPhone: '1 (123) 456-7891',
        billingEmail: 'imbluedabadee@gmail.com',
        billingAddress: '1234 Shield St',
        billingCity: 'Washington',
        billingState: 'DC',
        billingZip: '10293',
        date: '2016-05-04',
        arrivalTime: '09:00',
        departTime: '13:00',
        transport: 'bus',
        lunch: 'box',
        subgroups: [
          {
            age: '4-8',
            exhibits: [],
            kids: 44,
            adults: 4
          }
        ],
        guided: false,
        special: false,
        comments: 'Might need to be separate from the Chitauri'
      }
    ];

    this.getGroup = function (id) {
      return groups[id] ? $q.when(groups[id]) : $q.reject(404);
    };

    this.getGroups = function () {
      return $q.when(groups);
    }    
  }]);