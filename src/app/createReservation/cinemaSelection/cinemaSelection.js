'use strict';

angular.module('cineos')
    .controller('CinemaSelectionController', function($scope) {
        //  scope variables
        $scope.regions = regions;

        //  Events
        $scope.RegionCbSelect = function(newValue){
            $scope.cinemasInRegion = FilterCinemasInSelectedRegion(newValue.newValue);
            $scope.reservationModel.cinema = null;
        };

        $scope.$watch('reservationModel.cinema', function(){
            $scope.isEverythingSelected = $scope.reservationModel.cinema == null;
        });
    });

// Functions
function FilterCinemasInSelectedRegion(region){
    var filteredCinemas = [];
    angular.forEach(cinemas, function(cinema) {
        if (cinema.regionId == region.id) {
            filteredCinemas.push(cinema);
        }
    });
    return filteredCinemas;
}
