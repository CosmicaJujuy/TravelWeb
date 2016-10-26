(function () {
    'use strict';

    angular
            .module('travelApp')
            .config(configApp);

    configApp.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    /* @ngInject */
    function configApp($stateProvider, $urlRouterProvider, $locationProvider) {

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/

        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'MainCtrl as vm',
                    templateUrl: 'views/main.html'
                });

    }

})();

