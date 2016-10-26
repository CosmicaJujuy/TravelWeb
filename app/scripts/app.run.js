/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular
            .module('travelApp')
            .run(runApp);

    runApp.$inject = ['$translate', 'selectedLanguage'];
    /* @ngInject */
    function runApp($translate, selectedLanguage) {
        $translate.use(selectedLanguage);
    }
    
})();

