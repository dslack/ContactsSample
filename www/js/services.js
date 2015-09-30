(function(){
  angular.module('contacts.services',[])
    .factory("WeatherService", WeatherService)
    .factory("GeoService", GeoService)
    .factory("ContactsService", ContactsService);

  function WeatherService($http, $interpolate, $q, APIKey){
    var URL = "http://api.openweathermap.org/data/2.5/weather";
    var byGeoURL = URL+"?lat={{lat}}&lon={{lon}}&units=metric&APPID={{apikey}}";

    var api = {
      byGeo: byGeo
    };

    return api;

    function byGeo(lat,lon) {
      var exp = $interpolate(byGeoURL);
      var url = exp({lat: lat, lon:lon, apikey: APIKey});

      return $q(function(resolve, reject){
        $http({method:"GET", url: url}).then(function(response){
          resolve(response.data);
        }, function(err){
          reject(err);
        });
      });
    }
  }

  function GeoService($q){
    var api = {
      currentPosition: currentPosition
    };

    return api;

    function currentPosition(){
      return $q(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(function(position){
          resolve(position);
        }, function(err){
          resolve(reject);
        });
      });
    }
  }

  function ContactsService($q) {
    var api = {
      find: find
    };

    return api;

    function find(pattern) {
      var options = new ContactFindOptions();
      options.filter = pattern;
      options.multiple = true;

      return $q(function(resolve, reject){
        navigator.contacts.find(["*"], function(contacts){
          contacts.sort(function(a,b){
            if (!a.displayName || !b.displayName) {
              return 0;
            }
            return a.displayName.localeCompare(b.displayName);
          });
          resolve(contacts);
        }, function(err){
          reject(err);
        }, options);
      });
    }
  }
})();
