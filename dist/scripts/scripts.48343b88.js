!function(){"use strict";angular.module("travelApp",["ngAnimate","ngCookies","ngMessages","ngSanitize","ui.router","anim-in-out","ngMessages","toaster","ngCookies","LocalStorageModule","ngMaterial","ngTable","ngDialog","angular-loading-bar","pascalprecht.translate"])}(),function(){"use strict";function a(a,b,c){c.html5Mode({enabled:!0,requireBase:!1}),b.otherwise("/"),a.state("main",{url:"/",controller:"MainCtrl as vm",templateUrl:"views/main.html"})}angular.module("travelApp").config(a),a.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"]}(),function(){"use strict";function a(a,b){a.iconSet("social","img/icons/sets/social-icons.svg",24).defaultIconSet("styles/icons/sets/core-icons.svg",24),b.theme("tour").primaryPalette("blue").warnPalette("blue").accentPalette("blue").backgroundPalette("grey").dark(!1)}angular.module("travelApp").config(a),a.$inject=["$mdIconProvider","$mdThemingProvider"]}(),function(){"use strict";function a(a,b){b.decorator("selectedLanguage",["$delegate","localStorageService",function(a,b){var c=b.get("selectedLanguage");if(null===c){var d={lang:"en"};b.set("selectedLanguage",d),c=a}else c=c.lang;return c}]),a.useSanitizeValueStrategy("sanitize"),a.translations("en",{DESTINOS:"Destinations",SERVICIOS:"Services",LOG_IN:"Log in",SIGN_IN:"Sign in"}),a.translations("es",{DESTINOS:"Destinos",SERVICIOS:"Servicios",LOG_IN:"Ingresar",SIGN_IN:"Registrarte"})}angular.module("travelApp").config(a),a.$inject=["$translateProvider","$provide"]}(),function(){"use strict";function a(){var a="en";return a}angular.module("travelApp").value("selectedLanguage",a)}(),function(){"use strict";function a(a,b){a.use(b)}angular.module("travelApp").run(a),a.$inject=["$translate","selectedLanguage"]}(),function(){"use strict";function a(a,b){function c(a){var c={lang:a};b.set("selectedLanguage",c),location.reload()}var d=this;d.changeLanguage=c,d.selectedLanguage=a.use()}angular.module("travelApp").controller("MainCtrl",a),a.$inject=["$translate","localStorageService"]}(),angular.module("travelApp").run(["$templateCache",function(a){"use strict";a.put("views/main.html",'<div ng-cloak md-theme="tour"> <md-content> <md-toolbar> <div class="md-toolbar-tools"> <md-button class="md-icon-button" aria-label="Settings"> <md-icon>&#xE5D2;</md-icon> </md-button> <h2 flex="15"> <span><a href="/">Turismo Jujuy</a></span> </h2> <h2 flex="15"> <span><a href="/">{{\'DESTINOS\'| translate}}</a></span> </h2> <h2 flex="15"> <span><a href="/">{{\'SERVICIOS\'| translate}}</a></span> </h2> <span flex></span> <h2> <md-button class="md-fab" aria-label="Spanish" ng-class="{\'md-raised\': vm.selectedLanguage == \'es\'}" ng-click="vm.changeLanguage(\'es\')"> <span class="flag-icon flag-icon-es"></span> </md-button> <md-button class="md-fab" aria-label="English" ng-class="{\'md-raised\': vm.selectedLanguage == \'en\'}" ng-click="vm.changeLanguage(\'en\')"> <span class="flag-icon flag-icon-us"></span> </md-button> </h2> <md-button class="md-icon-button" aria-label="More"> <md-icon>&#xE5D4;</md-icon> </md-button> <md-button class="md-raised" aria-label="Log in"> <span>{{\'LOG_IN\'| translate}}</span> </md-button> <md-button aria-label="Sign in" class="md-raised" md-colors="{background: \'green\'}"> <span>{{\'SIGN_IN\'| translate}}</span> </md-button> </div> </md-toolbar> </md-content> </div>')}]);