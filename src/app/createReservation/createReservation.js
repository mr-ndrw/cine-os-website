'use strict';

angular.module('cineos')
    .controller('CreateReservationController', function($scope){

        var apiaddress = 'http://10.211.55.3:1218';

        $scope.apiaddress = apiaddress;

        var reservationModel = {
            login: {email: '', password: ''},
            clientid: -1,
            region: null,
            cinema: null,
            projection: null,
            film: null,
            seat: null
        };

        $scope.reservationModel = reservationModel;

        $scope.seats = null;
        $scope.SlideChangeButtonClick = function (transitionClass) {
            $scope.transitionClass = transitionClass;
            window.scrollTo(0,0);
        };

        //  watches
        $scope.$watch('reservationModel.cinema', function(){
            if($scope.reservationModel.cinema != null)
                $scope.filmsForChosenCinema = films;
        });
    });


/**
 Returns the films which are being played in the provided cinema, based on the provided projections list.
 */
function getFilmsForCinema(cinema, projections, films) {
    var projectionsLength = projections.length;
    //  Filter out the projections which happen in the provided cinema;
    var foundProjections = [];

    for (var i = 0; i < projectionsLength; i++) {
        var projection = projections[i];
        if (projection.cinemaId == cinema.id) {
            foundProjections.push(projection);
        }
    }

    //  Once we've got the projections, now filter out the films which are being played in this projections
    //  Just make sure to only contain one reference to a film.
    var filmsResult = [];
    films.forEach(function(film) {
        foundProjections.forEach(function(projection) {
            if (projection.filmId == film.id) {
                if (!doesArrayContain(filmsResult, film)) {
                    filmsResult.push(film);
                }
            }
        });
    });
    return filmsResult;
}