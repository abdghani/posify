!function(){"use strict";angular.module("client",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","toastr","googlechart"])}(),function(){"use strict";function e(){function e(){return o}var o=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"}];this.getTec=e}angular.module("client").service("webDevTec",e)}(),function(){"use strict";function e(e,o){return{languages:function(){return[{code:"zh-CN",name:"Chinese"},{code:"fr",name:"French"},{code:"de",name:"German"},{code:"el",name:"Greek"},{code:"iw",name:"Hebrew"},{code:"hi",name:"Hindi"},{code:"ga",name:"Irish"},{code:"it",name:"Italian"},{code:"ja",name:"Japanese"},{code:"ky",name:"Kyrgyz"},{code:"la",name:"Latin"},{code:"pl",name:"Polish"},{code:"ru",name:"Russian"},{code:"es",name:"Spanish"},{code:"ta",name:"Tamil"},{code:"ur",name:"Urdu"}]},posColor:function(){return[{name:"noun",color:"#e5ff00",count:0},{name:"cardinal digit",color:"#ffffff",count:0},{name:"determiner",color:"#a0ed80",count:0},{name:"conjunction",color:"#ffcef9",count:0},{name:"adjective",color:"#fcca85",count:0},{name:"existential",color:"#deeef2",count:0},{name:"preposition",color:"#efa2a2",count:0},{name:"modal",color:"#ff8a16",count:0},{name:"adverb",color:"#e3efe3",count:0},{name:"interjection",color:"#9cc19e",count:0},{name:"pronoun",color:"#0afff2",count:0},{name:"verb",color:"#51c0ff",count:0}]},pos:function(){return{CC:{name:"conjunction",color:"#db8e1c","back-color":"#ffcef9"},CD:{name:"cardinal digit",color:"#000000","back-color":"#ffcef9"},DT:{name:"determiner",color:"#dd07f9","back-color":"#a0ed80"},WDT:{name:"determiner",color:"#dd07f9","back-color":"#a0ed80"},EX:{name:"existential",color:"#6d6464","back-color":"#deeef2"},IN:{name:"preposition",color:"#efa2a2","back-color":"#baf3ff"},JJ:{name:"adjective",color:"#02e294","back-color":"#fcca85"},JJR:{name:"adjective",color:"#02e294","back-color":"#fcca85"},JJS:{name:"adjective",color:"#02e294","back-color":"#fcca85"},MD:{name:"modal",color:"#e59eb1","back-color":"#ff8a16"},NN:{name:"noun",color:"#f44242","back-color":"#e5ff00"},NNS:{name:"noun",color:"#f44242","back-color":"#e5ff00"},NNP:{name:"noun",color:"#f44242","back-color":"#e5ff00"},NNPS:{name:"noun",color:"#f44242","back-color":"#e5ff00"},RB:{name:"adverb",color:"#663811","back-color":"#e3efe3"},RBR:{name:"adverb",color:"#663811","back-color":"#e3efe3"},RBS:{name:"adverb",color:"#663811","back-color":"#e3efe3"},WRB:{name:"adverb",color:"#663811","back-color":"#e3efe3"},UH:{name:"interjection",color:"#576060","back-color":"#9cc19e"},VB:{name:"verb",color:"#414df4","back-color":"#51c0ff"},VBD:{name:"verb",color:"#414df4","back-color":"#51c0ff"},VBG:{name:"verb",color:"#414df4","back-color":"#51c0ff"},VBN:{name:"verb",color:"#414df4","back-color":"#51c0ff"},VBP:{name:"verb",color:"#414df4","back-color":"#51c0ff"},VBZ:{name:"verb",color:"#414df4","back-color":"#fcf285"},WP:{name:"pronoun",color:"#004d7a","back-color":"#0afff2"},PRP$:{name:"pronoun",color:"#004d7a","back-color":"#0afff2"},PRP:{name:"pronoun",color:"#004d7a","back-color":"#0afff2"},WP$:{name:"pronoun",color:"#004d7a","back-color":"#0afff2"},TO:{name:"pronoun",color:"#004d7a","back-color":"#0afff2"}}},chartCols:function(){return[{id:"t",label:"Type",type:"string"},{id:"s",label:"Count",type:"number"}]}}}e.$inject=["$log","$http"],angular.module("client").factory("util",e)}(),function(){"use strict";function e(e,o){var n="http://api.posify.greyphase.xyz",t={app_id:"4e3d8d18",app_key:"cc0f84370e8cbba9f4ef3adc62b47e4b"},a="https://od-api.oxforddictionaries.com/api/v1/entries/en/";return{httpPost:function(e,t,a){var r=o.post(n+e,t).then(function(e){a(null,e.data)})["catch"](function(e){a(e,null)});return r},httpGet:function(e,t){var a=o.get(n+e).then(function(e){t(null,e.data)})["catch"](function(e){t(e,null)});return a},httpGetWord:function(e,n){var r={method:"GET",url:a+e,headers:t},c=o(r).then(function(e){n(null,e.data)})["catch"](function(e){n(e,null)});return c}}}e.$inject=["$log","$http"],angular.module("client").factory("ajaxCall",e)}(),function(){"use strict";function e(e){function o(o,n,t,a){var r,c=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(o.extraValues,function(e){c.type(e).pause()["delete"]()}),r=o.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){c.type(e.login).pause()["delete"]()})}),o.$on("$destroy",function(){r()})}function n(e,o){function n(){return t().then(function(){e.info("Activated Contributors View")})}function t(){return o.getContributors(10).then(function(e){return a.contributors=e,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:n,controllerAs:"vm"};return t}e.$inject=["malarkey"],angular.module("client").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(e){var o=this;o.relativeDate=e(o.creationDate).fromNow()}e.$inject=["moment"];var o={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return o}angular.module("client").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,o){function n(n){function a(e){return e.data}function r(o){e.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}return n||(n=30),o.get(t+"/contributors?per_page="+n).then(a)["catch"](r)}var t="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:t,getContributors:n};return a}e.$inject=["$log","$http"],angular.module("client").factory("githubContributor",e)}(),function(){"use strict";function e(e,o,n,t,a){function r(e){var n=o.obj.posColor.findIndex(function(o){return o.name==e});o.obj.posColor[n].count+=1}o.obj={},o.funcs={},o.obj.query="",o.obj.html="",o.obj.load=!1,o.obj.loadtext=!1,o.obj.resultCame=!1,o.obj.transalatedGen=!1,o.obj.sentiment=[],o.obj.cols=t.chartCols(),o.obj.posColor=t.posColor(),o.obj.pos=t.pos(),o.obj.languages=t.languages(),o.obj.seletedlanguage=o.obj.languages[0],o.obj.transaltedLanguage="",o.posDist={},o.posDist.type="PieChart",o.posDist.data={cols:o.obj.cols,rows:[]},o.sentimentDist={},o.sentimentDist.type="PieChart",o.sentimentDist.data={cols:o.obj.cols,rows:[]},o.funcs.changeTranslated=function(e){o.obj.seletedlanguage=e,o.getTransaltedLanguage()},o.funcs.generatePos=function(){o.obj.load=!0,n.httpPost("/api/pos",{query:o.obj.query},function(e,n){o.funcs.generateHtml(n),o.funcs.getSentiment(),o.obj.resultCame=!0})},o.funcs.generateRandomText=function(){o.obj.loadtext=!0,n.httpGet("/api/randomtext",function(e,n){e||(o.obj.query=n),o.obj.loadtext=!1})},o.funcs.generateHtml=function(e){if(e){o.obj.html="";for(var n=0;n<e.length;n++)if(o.obj.pos[e[n][1]]){var t=o.obj.pos[e[n][1]].name;o.obj.html+='<span  style="font-size:20px;color:'+o.obj.pos[e[n][1]].color+";background-color:"+o.obj.pos[e[n][1]]["back-color"]+'" title="'+t+'"> <a ng-click="funcs.getMeaning('+e[n][0]+')">'+e[n][0]+" </a></span>",r(t)}else o.obj.html+='<span ng-click="funcs.getMeaning('+e[n][0]+')"  style="font-size:20px"> '+e[n][0]+" </span>";o.obj.load=!1,o.obj.html=a.trustAsHtml(o.obj.html),o.funcs.generateChart()}},o.funcs.generateChart=function(){for(var e=[],n=0;n<o.obj.posColor.length;n++)e.push({c:[{v:o.obj.posColor[n].name},{v:o.obj.posColor[n].count}]});o.posDist.data.rows=e},o.funcs.getMeaning=function(e){n.httpGetWord(e,function(e,o){e||console.log(o)})},o.funcs.getSentiment=function(){n.httpPost("/api/sentiment",{query:o.obj.query},function(e,n){o.obj.sentiment=n;for(var t=[],a=0;a<n.length;a++)t.push({c:[{v:0==a?"subjectivity":"polarity"},{v:n[a]}]});o.sentimentDist.data.rows=t,o.getTransaltedLanguage()})},o.getTransaltedLanguage=function(){o.obj.transalatedGen=!0,n.httpPost("/api/translate",{query:o.obj.query,lang:o.obj.seletedlanguage.code},function(e,n){o.obj.transalatedGen=!1,o.obj.transaltedLanguage=n.translated})}}e.$inject=["$timeout","$scope","ajaxCall","util","$sce"],angular.module("client").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("client").run(e)}(),function(){"use strict";function e(e,o){e.state("home",{url:"/pos",views:{main:{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}}}),o.otherwise("/pos")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("client").config(e)}(),function(){"use strict";angular.module("client").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,o){e.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-top-right",o.preventDuplicates=!0,o.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("client").config(e)}(),angular.module("client").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container is-fluid"><nav class="navbar is-primary"><div class=navbar-brand><a href=# class="navbar-item logo"><h2 href=#>POSify</h2></a></div></nav><br><div class=field><label class="label has-text-centered">ENTER SOME TEXT BLOG</label><div class=control><textarea class=textarea placeholder="Enter Some Text" rows=25 ng-model=obj.query ng-maxlength=1000></textarea></div><span class="wordCount has-text-right" ng-bind="obj.query.split(\' \').length+\' WORDS\'" ng-if="obj.query.split(\' \').length!=1"></span></div><div class=has-text-centered><a class="button is-primary is-large" ng-class="{\'is-loading\':obj.load}" ng-click=funcs.generatePos() ng-disabled="obj.query.length==0">Run POS tagging </a>&nbsp; <a class="button is-primary is-large" ng-class="{\'is-loading\':obj.loadtext}" ng-click=funcs.generateRandomText()>Generate Random Text</a></div><div class=has-text-centered ng-if="obj.resultCame && obj.query.length>0"><hr><span ng-repeat="poss in obj.posColor"><span style="border:0.1px solid ; border-radius 50px;  min-width: 20px; height: 20px; background: {{poss.color}}">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span ng-bind="poss.name+\' \'" class="mar-r-30px boldWeight" ng-if="poss.count==0"></span> <span ng-bind="poss.name+\' (\'+poss.count+\')\'" class="mar-r-10px boldWeight" ng-if="poss.count!=0"></span></span><hr><br><br><div><p class=headr>PARTS OF SPEECH</p><div ng-bind-html=obj.html></div><br></div><hr><div class=columns><div class=column><p class=headr>POS CHART</p><div google-chart chart=posDist style="height:600px; width:100%"></div></div><hr><div class=column><p class=headr>SENTIMENT</p><div google-chart chart=sentimentDist style="height:600px; width:100%"></div></div></div><p class=headr>TRANSLATION</p><div class="tabs is-centered is-boxed is-medium"><ul><li ng-repeat="l in obj.languages" ng-class="{\'is-active\':l.code==obj.seletedlanguage.code}"><a ng-bind=l.name ng-click=funcs.changeTranslated(l)></a></li></ul></div><div class=field><label class="label has-text-centered">Translation in {{obj.seletedlanguage.name}}</label><div class=control><textarea class=textarea placeholder=Translation rows=25 ng-model=obj.transaltedLanguage></textarea></div></div></div></div>'),e.put("app/components/navbar/navbar.html","<nav class=navbar><a href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</a><ul><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class=acme-navbar-text><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>")}]);
//# sourceMappingURL=../maps/scripts/app-dbc642aae2.js.map