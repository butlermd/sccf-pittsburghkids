angular.module('pittsburghkids')
  .service('dataTransformation', function () {
    this.dbScheduleToGroup = function (dbSchedule) {
      var group = {
        id: dbSchedule.scheduleid,
        name: dbSchedule.groupname,
        primaryContact: dbSchedule.groupcontact,
        schoolDistrict: dbSchedule.groupschooldistrict,
        contactPhone: dbSchedule.groupphone,
        contactEmail: dbSchedule.groupemail,
        contactAddress: dbSchedule.groupaddress,
        contactCity: dbSchedule.groupcity,
        contactState: dbSchedule.groupstate,
        contactZip: dbSchedule.groupzip,
        date: dbSchedule.visitdate,
        arrivalTime: dbSchedule.arrivaltime,
        departTime: dbSchedule.departuretime,
        transport: dbSchedule.transportationname,
        lunch: dbSchedule.lunchaccomodationname,
        guided: dbSchedule.guidedvisit,
        special: dbSchedule.specialaccomodations,
        comments: dbSchedule.additionalinstructions,
        subgroups: []
      };

      dbSchedule.subgroups.forEach(function (subgroup) {
        group.subgroups.push({
          age: subgroup.agegroupname,
          exhibits: [],
          kids: subgroup.groupsize,
          adults: subgroup.totaladults
        });
      });
    };
  });