(function() {
  'use strict';

  angular
    .module('client')
    .factory('ajaxCall', ajaxCall);

  /** @ngInject */
  function ajaxCall($log, $http) {
    var baseurl = "http://api.posify.greyphase.xyz";
    var oxfordHeader = {
      "app_id": "4e3d8d18",
      "app_key": "cc0f84370e8cbba9f4ef3adc62b47e4b"
    };
    var oxfordUrl = "https://od-api.oxforddictionaries.com/api/v1/entries/en/"
    return {

      httpPost: function(url, param, callback) {
        var q = $http.post(baseurl + url, param)
          .then(function(res) {
            callback(null, res.data);
          })
          .catch(function(error) {
            callback(error, null)
          })
        return q;
      },
      httpGet: function(url, callback) {
        var q = $http.get(baseurl + url)
          .then(function(res) {
            callback(null, res.data);
          })
          .catch(function(error) {
            callback(error, null)
          })
        return q;
      },
      httpGetWord: function(word, callback) {
        var url = {
          url: oxfordUrl + word,
          headers: oxfordHeader,
        }
        var q = $http(url)
          .then(function(res) {
            callback(null, res.data);
          })
          .catch(function(error) {
            callback(error, null)
          })
        return q;
      }
    }
  }
})();
