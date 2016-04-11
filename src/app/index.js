'use strict';

angular.module('cineos', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'lumx'])
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
            })
            .state('createReservation.projectionSelection',{
                url: '/projection',
                templateUrl: 'app/createReservation/projectionSelection/projectionSelection.html',
                controller: 'ProjectionSelectionController'
            })
            .state('createReservation.seatSelection',{
                url: '/seats',
                templateUrl: 'app/createReservation/seatSelection/seatSelection.html',
                controller: 'SeatSelectionController'
            })
            .state('createReservation.summary', {
                url: '/summ',
                templateUrl: 'app/createReservation/summary/summary.html',
                controller: 'SummaryController'
            });

        $urlRouterProvider.otherwise('/');
    });
