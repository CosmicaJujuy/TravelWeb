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

    configApp.$inject = ['$translateProvider', '$provide'];
    /* @ngInject */
    function configApp($translateProvider, $provide) {

        $provide.decorator('selectedLanguage', function ($delegate, localStorageService) {
            var lang = localStorageService.get('selectedLanguage');
            if (lang === null) {
                var data = {lang: 'en'};
                localStorageService.set('selectedLanguage', data);
                lang = $delegate;
            } else {
                lang = lang.lang;
            }
            return lang;
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');

        $translateProvider.translations('en', {
            DESTINOS: 'Destinations',
            SERVICIOS: 'Services',
            LOG_IN: 'Log in',
            SIGN_IN: 'Sign in'
        });

        $translateProvider.translations('es', {
            DESTINOS: 'Destinos',
            SERVICIOS: 'Servicios',
            LOG_IN: 'Ingresar',
            SIGN_IN: 'Registrarte'
        });

    }

})();

