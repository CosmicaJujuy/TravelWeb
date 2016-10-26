/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular
            .module('travelApp')
            .config(configApp);

    configApp.$inject = ['$mdIconProvider', '$mdThemingProvider'];
    /* @ngInject */
    function configApp($mdIconProvider, $mdThemingProvider) {

        $mdIconProvider
                .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                .defaultIconSet('styles/icons/sets/core-icons.svg', 24);

        $mdThemingProvider.theme('tour')
                .primaryPalette('blue')
                .warnPalette('blue')
                .accentPalette('blue')
                .backgroundPalette('grey')
                .dark(false);
    }
})();

