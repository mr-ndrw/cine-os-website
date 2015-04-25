'use strict';

angular.module('cineos')
    .controller('FilmSelectionController', function ($scope, LxDialogService) {
        //  variables
        $scope.dialogCounter = 0;

        $scope.incrementCounter = function(){
            return dialogCounter++;
        };
        //  events
        $scope.openFilmDetailsDialog = function(dialogId){
            LxDialogService.open(dialogId);
        };

        $scope.closeFilmDetailsDialog = function(){

        };
        //  watch
        $scope.$watch("reservationModel.film", function(){
            $scope.isEverythingSelected = $scope.reservationModel.film == null;
        });
    });
