(function () {
    'use strict';


    /**
     * @ngdoc function
     * @name travelApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the travelApp
     */
    angular.module('travelApp')
            .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$translate', 'localStorageService'];
    /* @ngInject */
    function MainCtrl($translate, localStorageService) {
        /* jshint validthis: true */
        var vm = this;
        vm.changeLanguage = changeLanguage;
        vm.selectedLanguage = $translate.use();

        function changeLanguage(lang) {
            var data = {lang: lang};
            localStorageService.set('selectedLanguage', data);
            location.reload();
        }
    }

})();
