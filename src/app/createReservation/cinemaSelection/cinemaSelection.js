'use strict';

angular.module('cineos')
    .controller('CinemaSelectionController', function ($scope, $http) {
        //  scope variables

        $http.get($scope.apiaddress + '/api/regions/')
            .success(function (data) {
                $scope.regions = data;
            })
            .error(function () {

            });


        //  Events
        $scope.RegionCbSelect = function (values) {
            $scope.reservationModel.cinema = null;
            $scope.reservationModel.region = values.newValue;

            $http.get($scope.apiaddress + '/api/region/' + escape($scope.reservationModel.region.Id) + '/cinemas')
                .success(function (data) {
                    $scope.cinemasInRegion = data;
                });
        };

        $scope.$watch('reservationModel.cinema', function () {
            $scope.isEverythingSelected = $scope.reservationModel.cinema == null;
        });
    });

// Functions
function FilterCinemasInSelectedRegion(region) {
    var filteredCinemas = [];
    angular.forEach(cinemas, function (cinema) {
        if (cinema.regionId == region.id) {
            filteredCinemas.push(cinema);
        }
    });
    return filteredCinemas;
}
