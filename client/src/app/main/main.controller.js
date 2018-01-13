(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  function MainController($timeout, $scope, ajaxCall, util, $sce) {
    $scope.obj = {};
    $scope.funcs = {};
    $scope.obj.query = '';
    $scope.obj.html = '';
    $scope.obj.load = false;
    $scope.obj.loadtext = false;
    $scope.obj.resultCame = false;
    $scope.obj.transalatedGen = false;
    $scope.obj.sentiment = [];
    $scope.obj.cols = util.chartCols();
    $scope.obj.posColor = util.posColor()
    $scope.obj.pos = util.pos();
    $scope.obj.languages = util.languages();
    $scope.obj.seletedlanguage = $scope.obj.languages[0];
    $scope.obj.transaltedLanguage = "";

    $scope.posDist = {};
    $scope.posDist.type = "PieChart";
    $scope.posDist.data = {
      "cols": $scope.obj.cols,
      "rows": []
    };
    //sentimentAnalysisDistributionChart
    $scope.sentimentDist = {};
    $scope.sentimentDist.type = "PieChart";
    $scope.sentimentDist.data = {
      "cols": $scope.obj.cols,
      "rows": []
    };

    function increaseCount(type) {
      var index = $scope.obj.posColor.findIndex(function(item) {
        return item.name == type;
      })
      $scope.obj.posColor[index].count += 1
    }
    $scope.funcs.changeTranslated = function(code) {
      $scope.obj.seletedlanguage = code;
      $scope.getTransaltedLanguage();
    }
    $scope.funcs.generatePos = function() {
      $scope.obj.load = true;
      ajaxCall.httpPost('/api/pos', {
        query: $scope.obj.query
      }, function(err, res) {
        $scope.funcs.generateHtml(res);
        $scope.funcs.getSentiment();
        $scope.obj.resultCame = true;
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
      if (data) {
        $scope.obj.html = ""
        for (var i = 0; i < data.length; i++) {
          if ($scope.obj.pos[data[i][1]]) {
            var type = $scope.obj.pos[data[i][1]].name;
            $scope.obj.html += '<span  style="font-size:20px;color:' + $scope.obj.pos[data[i][1]].color + ';background-color:' + $scope.obj.pos[data[i][1]]["back-color"] + '" title="' + type + '"> <a ng-click="funcs.getMeaning(' + data[i][0] + ')">' + data[i][0] + ' </a></span>';
            increaseCount(type)
          } else {
            $scope.obj.html += '<span ng-click="funcs.getMeaning(' + data[i][0] + ')"  style="font-size:20px"> ' + data[i][0] + ' </span>'
          }
        }
        $scope.obj.load = false;
        $scope.obj.html = $sce.trustAsHtml($scope.obj.html);
        $scope.funcs.generateChart();
      }
    }
    $scope.funcs.generateChart = function() {
      var arr = []
      for (var i = 0; i < $scope.obj.posColor.length; i++) {
        arr.push({
          c: [{
            v: $scope.obj.posColor[i].name
          }, {
            v: $scope.obj.posColor[i].count
          }]
        });
      }
      $scope.posDist.data.rows = arr;
    }

    $scope.funcs.getMeaning = function(word) {
      ajaxCall.httpGetWord(word, function(err, res) {
        if (!err) {
          console.log(res);
        }
      })
    }
    $scope.funcs.getSentiment = function() {
      ajaxCall.httpPost('/api/sentiment', {
        query: $scope.obj.query
      }, function(err, res) {
        $scope.obj.sentiment = res;
        var arr = []
        for (var i = 0; i < res.length; i++) {
          arr.push({
            c: [{
              v: i == 0 ? 'subjectivity' : 'polarity'
            }, {
              v: res[i]
            }]
          });
        }
        $scope.sentimentDist.data.rows = arr;
        $scope.getTransaltedLanguage();
      })
    }
    $scope.getTransaltedLanguage = function() {
      $scope.obj.transalatedGen = true;
      ajaxCall.httpPost('/api/translate', {
        query: $scope.obj.query,
        lang: $scope.obj.seletedlanguage.code
      }, function(err, res) {
        $scope.obj.transalatedGen = false;
        $scope.obj.transaltedLanguage = res.translated;
      })
    }
  }
})();
