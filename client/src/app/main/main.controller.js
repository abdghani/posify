(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  function MainController($timeout, $scope, ajaxCall, $sce) {
    $scope.obj = {};
    $scope.funcs = {};
    $scope.obj.query = '';
    $scope.obj.html = '';
    $scope.obj.load = false;
    $scope.obj.loadtext = false;
    $scope.obj.posColor = [{
      "name": "noun",
      "color": "#e5ff00"
    }, {
      "name": "cardinal digit",
      "color": "#ffffff"
    }, {
      "name": "determiner",
      "color": "#a0ed80"
    }, {
      "name": "conjunction",
      "color": "#ffcef9"
    }, {
      "name": "adjective",
      "color": "#fcca85"
    }, {
      "name": "existential",
      "color": "#deeef2"
    }, {
      "name": "preposition",
      "color": "#efa2a2"
    }, {
      "name": "modal",
      "color": "#ff8a16"
    }, {
      "name": "adverb",
      "color": "#e3efe3"
    }, {
      "name": "interjection",
      "color": "#9cc19e"
    }, {
      "name": "pronoun",
      "color": "#0afff2"
    }, {
      "name": "verb",
      "color": "#51c0ff"
    }];
    $scope.obj.pos = {
      "CC": {
        "name": "conjunction",
        "color": "#db8e1c",
        "back-color": "#ffcef9"
      },
      "CD": {
        "name": "cardinal digit",
        "color": "#000000",
        "back-color": "#ffcef9"
      },
      "DT": {
        "name": "determiner",
        "color": "#dd07f9",
        "back-color": "#a0ed80"
      },
      "WDT": {
        "name": "determiner",
        "color": "#dd07f9",
        "back-color": "#a0ed80"
      },
      "EX": {
        "name": "existential",
        "color": "#6d6464",
        "back-color": "#deeef2"
      },
      "IN": {
        "name": "preposition",
        "color": "#efa2a2",
        "back-color": "#baf3ff"
      },
      "JJ": {
        "name": "adjective",
        "color": "#02e294",
        "back-color": "#fcca85"
      },
      "JJR": {
        "name": "adjective",
        "color": "#02e294",
        "back-color": "#fcca85"
      },
      "JJS": {
        "name": "adjective",
        "color": "#02e294",
        "back-color": "#fcca85"
      },
      "MD": {
        "name": "modal",
        "color": "#e59eb1",
        "back-color": "#ff8a16"
      },
      "NN": {
        "name": "noun",
        "color": "#f44242",
        "back-color": "#e5ff00"
      },
      "NNS": {
        "name": "noun",
        "color": "#f44242",
        "back-color": "#e5ff00"
      },
      "NNP": {
        "name": "noun",
        "color": "#f44242",
        "back-color": "#e5ff00"
      },
      "NNPS": {
        "name": "noun",
        "color": "#f44242",
        "back-color": "#e5ff00"
      },
      "RB": {
        "name": "adverb",
        "color": "#663811",
        "back-color": "#e3efe3"
      },
      "RBR": {
        "name": "adverb",
        "color": "#663811",
        "back-color": "#e3efe3"
      },
      "RBS": {
        "name": "adverb",
        "color": "#663811",
        "back-color": "#e3efe3"
      },
      "WRB": {
        "name": "adverb",
        "color": "#663811",
        "back-color": "#e3efe3"
      },
      "UH": {
        "name": "interjection",
        "color": "#576060",
        "back-color": "#9cc19e"
      },
      "VB": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#51c0ff"
      },
      "VBD": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#51c0ff"
      },
      "VBG": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#51c0ff"
      },
      "VBN": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#51c0ff"
      },
      "VBP": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#51c0ff"
      },
      "VBZ": {
        "name": "verb",
        "color": "#414df4",
        "back-color": "#fcf285"
      },
      "WP": {
        "name": "pronoun",
        "color": "#004d7a",
        "back-color": "#0afff2"
      },
      "PRP$": {
        "name": "pronoun",
        "color": "#004d7a",
        "back-color": "#0afff2"
      },
      "PRP": {
        "name": "pronoun",
        "color": "#004d7a",
        "back-color": "#0afff2"
      },
      "WP$": {
        "name": "pronoun",
        "color": "#004d7a",
        "back-color": "#0afff2"
      },
      "TO": {
        "name": "pronoun",
        "color": "#004d7a",
        "back-color": "#0afff2"
      },
    };
    $scope.obj.cols = [{
        id: "t",
        label: "Type",
        type: "string"
      }, {
        id: "s",
        label: "Count",
        type: "number"
      }]
      // $scope.myChartObject1.data = {
      //   "cols": $scope.obj.cols,
      //   "rows": []
      // };

    $scope.funcs.generatePos = function() {
      $scope.obj.load = true;
      ajaxCall.httpPost('/api/pos', {
        query: $scope.obj.query
      }, function(err, res) {
        $scope.funcs.generateHtml(res);
      })
    }
    $scope.funcs.generateRandomText = function() {
      $scope.obj.loadtext = true;
      ajaxCall.httpGet('/api/randomtext', function(err, res) {
        if (!err) {
          $scope.obj.query = res;
        }
        $scope.obj.loadtext = false;
      })
    }
    $scope.funcs.generateHtml = function(data) {
      $scope.obj.html = ""
      for (var i = 0; i < data.length; i++) {
        if ($scope.obj.pos[data[i][1]]) {
          $scope.obj.html += '<span  style="font-size:20px;color:' + $scope.obj.pos[data[i][1]].color + ';background-color:' + $scope.obj.pos[data[i][1]]["back-color"] + '" title="' + $scope.obj.pos[data[i][1]].name + '"> <a ng-click="funcs.getMeaning(' + data[i][0] + ')">' + data[i][0] + ' </a></span>';
        } else {
          $scope.obj.html += '<span ng-click="funcs.getMeaning(' + data[i][0] + ')"  style="font-size:20px"> ' + data[i][0] + ' </span>'
        }
      }
      $scope.obj.load = false;
      $scope.obj.html = $sce.trustAsHtml($scope.obj.html);
    }
    $scope.funcs.getMeaning = function(word) {
      console.log(word);
      ajaxCall.httpGetWord(word, function(err, res) {
        if (!err) {
          console.log(res);
        }
      })
    }
  }
})();
