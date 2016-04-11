/**
 * Created by andrew on 18/05/15.
 */


angular.module('cineos')
    .controller('ProjectionSelectionController', function ($scope, $http) {

        $scope.projections = [];

        $scope.$watch('fromDate', function(){
            $scope.getProjectionsForDateSpan($scope.fromDate, $scope.toDate);
        });

        $scope.$watch('toDate', function(){
            $scope.getProjectionsForDateSpan($scope.fromDate, $scope.toDate);
        });

        $scope.getProjectionsForDateSpan = function (fromDate, toDate){
            if(fromDate == null || toDate == null) return;

            var fromDateString = getDateString(fromDate),
                toDateString = getDateString(toDate);

            var apiCall = '/api/cinema/' + $scope.reservationModel.cinema.Id;
            apiCall += '/film/' + $scope.reservationModel.film.Id;
            apiCall += '/' + fromDateString + '/' + toDateString;

            console.log($scope.apiaddress + apiCall);

            $http.get($scope.apiaddress + apiCall)
                .success(function(data){
                    $scope.projections = data;
                });

            $scope.$watch('reservationModel.projection', function(){
               console.log($scope.reservationModel.projection);
            });

        }

    });

function getDateString(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var dateString = year + '-' + month + '-' + day;

    return dateString;
}


