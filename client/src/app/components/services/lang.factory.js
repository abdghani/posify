(function() {
  'use strict';

  angular
    .module('client')
    .factory('util', util);

  /** @ngInject */
  function util($log, $http) {
    return {

      languages: function() {
        return [{
          "code": "zh-CN",
          "name": "Chinese"
        }, {
          "code": "fr",
          "name": "French"
        }, {
          "code": "de",
          "name": "German"
        }, {
          "code": "el",
          "name": "Greek"
        }, {
          "code": "iw",
          "name": "Hebrew"
        }, {
          "code": "hi",
          "name": "Hindi"
        }, {
          "code": "ga",
          "name": "Irish"
        }, {
          "code": "it",
          "name": "Italian"
        }, {
          "code": "ja",
          "name": "Japanese"
        }, {
          "code": "ky",
          "name": "Kyrgyz"
        }, {
          "code": "la",
          "name": "Latin"
        }, {
          "code": "pl",
          "name": "Polish"
        }, {
          "code": "ru",
          "name": "Russian"
        }, {
          "code": "es",
          "name": "Spanish"
        }, {
          "code": "ta",
          "name": "Tamil"
        }, {
          "code": "ur",
          "name": "Urdu"
        }]

      },
      posColor: function() {
        return [{
          "name": "noun",
          "color": "#e5ff00",
          "count": 0
        }, {
          "name": "cardinal digit",
          "color": "#ffffff",
          "count": 0
        }, {
          "name": "determiner",
          "color": "#a0ed80",
          "count": 0
        }, {
          "name": "conjunction",
          "color": "#ffcef9",
          "count": 0
        }, {
          "name": "adjective",
          "color": "#fcca85",
          "count": 0
        }, {
          "name": "existential",
          "color": "#deeef2",
          "count": 0
        }, {
          "name": "preposition",
          "color": "#efa2a2",
          "count": 0
        }, {
          "name": "modal",
          "color": "#ff8a16",
          "count": 0
        }, {
          "name": "adverb",
          "color": "#e3efe3",
          "count": 0
        }, {
          "name": "interjection",
          "color": "#9cc19e",
          "count": 0
        }, {
          "name": "pronoun",
          "color": "#0afff2",
          "count": 0
        }, {
          "name": "verb",
          "color": "#51c0ff",
          "count": 0
        }];
      },
      pos: function() {
        return {
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
        }
      },
      chartCols: function() {
        return [{
          id: "t",
          label: "Type",
          type: "string"
        }, {
          id: "s",
          label: "Count",
          type: "number"
        }]
      }
    }
  }
})();
