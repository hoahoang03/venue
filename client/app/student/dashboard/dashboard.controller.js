'use strict';

angular.module('venueApp')
  .controller('StudentDashboardCtrl', ($scope, $routeParams, User, Auth) => {

    $scope.user = {};
    $scope.courses = [];
    $scope.events = [];

    Auth.getCurrentUser((user) => {
      $scope.user = user;

      User.get({id: user._id, withSections:true, withEvents: true, withSectionsCourse:true}, (usr) => {
        $scope.user = usr;
      });


    });


  });
