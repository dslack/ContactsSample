angular.module('contacts.controllers', [])
  .controller("WeatherCtrl", function($scope, GeoService, WeatherService){
    $scope.data = {
      weatherLoaded: false
    };

    $scope.$on('$ionicView.enter', load);

    function load() {
      ionic.Platform.ready(function () {
        GeoService.currentPosition().then(function (position) {
          WeatherService.byGeo(position.coords.latitude, position.coords.longitude).then(function (weatherData) {
            $scope.data.weather = weatherData;
            $scope.data.weatherLoaded = true;
          });
        });
      });
    }
  })
  .controller("ContactsCtrl", function($scope, $ionicModal, ContactsService){
    $scope.data = {
      contactsLoaded: false
    };

    $ionicModal.fromTemplateUrl("templates/contactDetails.html", {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
    });

    $scope.showMore = function(contact){
      $scope.contact = contact;
      $scope.modal.show();
    };

    $scope.$on('$ionicView.enter', function(){
      find("");
    });

    $scope.$watch('data.search', function(newVal, prevVal){
      if (newVal) {
        find(newVal);
      }
    });

    function find(pattern) {
      ionic.Platform.ready(function () {
        ContactsService.find(pattern).then(function (contacts) {
          $scope.data.contacts = contacts;
          $scope.data.contactsLoaded = true;
        }, function(err){
          $scope.data.error = true;
        });
      });
    }
  })
.controller('AppCtrl', function($scope) {
});
