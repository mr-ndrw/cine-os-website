'use strict';

angular.module('cineos', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'lumx'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('showReservation', {
                url: '/reservation/:idReservation',
                templateUrl: '',
                controller: ''
            })
            .state('createReservation', {
                abstract: true,
                url: '/reservation/create',
                templateUrl: 'app/createReservation/createReservation.html',
                controller: 'CreateReservationController'
            })
            .state('createReservation.userAuthorization', {
                url: '/authorize',
                templateUrl: 'app/createReservation/userAuthorization/userAuthorization.html',
                controller: 'UserAuthorizationController'
            })
            .state('createReservation.cinemaSelection', {
                url: '/select',
                templateUrl:'app/createReservation/cinemaSelection/cinemaSelection.html',
                controller: 'CinemaSelectionController'
            })
            .state('createReservation.filmSelection',{
                url: '/film',
                templateUrl: 'app/createReservation/filmSelection/filmSelection.html',
                controller: 'FilmSelectionController'
            });

        $urlRouterProvider.otherwise('/');
    });
