'use strict';

angular.module('cineos')
    .controller('FilmSelectionController', function ($scope, LxDialogService, $http) {
        //  variables
        $scope.dialogCounter = 0;

        var apiCall = '/api/cinema/' + $scope.reservationModel.cinema.Id + '/newfilms';

        $http.get($scope.apiaddress + apiCall)
            .success(function(data){
                $scope.films = data;
            });

        console.log($scope.films);

        $scope.incrementCounter = function(){
            return dialogCounter++;
        };
        //  events
        $scope.openFilmDetailsDialog = function(dialogId){
            LxDialogService.open(dialogId);
        };

        $scope.closeFilmDetailsDialog = function(){

        };

        $scope.chooseFilm = function (filmId){
            //  if film is null, then search for the movie
            //  of provided idea and put into to creatReserv
            //  controller $scope.

            //  if film is null, disable other cards(make them)
            //  grey?) and disabled their choose buttons.
            //  or perhaps highlight the choice in some way?

            //  if it is not null, we should de-hightlight
            //  previously chosen card and enable buttons.
            //console.log(filmId);

            $scope.reservationModel.film = searchForFilmInFilmArray(filmId, $scope.films);

            $('.card-and-dialog').removeClass('gray--card');
            $('.card-and-dialog')
                .filter(function(){
                    console.log($(this).attr('data-counter'));
               return $(this).attr('data-counter') != filmId;
            })
                .addClass('gray--card');



            //console.log($scope.reservationModel.film);
        };

        //  watch
        $scope.$watch("reservationModel.film", function(){
            $scope.isEverythingSelected = $scope.reservationModel.film == null;
        });
    });

function searchForFilmInFilmArray(filmId, filmArray){
    var i = 0;
    var filmArrayLength = filmArray.length;
    for(i = 0; i < filmArrayLength; i++)
    {
        if (filmArray[i].Id == filmId)
            return filmArray[i];
    }
}
