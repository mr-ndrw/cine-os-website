angular.module('cineos')
    .controller('SummaryController', function($scope, $http){

        $scope.changeCinema = function(){
            $scope.reservationModel.seat = null;
            $scope.reservationModel.film = null;
            $scope.reservationModel.projection = null;
            $scope.reservationModel.cinema = null;
            $scope.reservationModel.region = null;

            $scope.SlideChangeButtonClick('slide-right');
        };

        $scope.changeFilm = function(){
            $scope.reservationModel.seat = null;
            $scope.reservationModel.film = null;
            $scope.reservationModel.projection = null;
            $scope.SlideChangeButtonClick('slide-right');
        };

        $scope.changeProjection = function(){
            $scope.reservationModel.seat = null;
            $scope.reservationModel.projection = null;
            $scope.SlideChangeButtonClick('slide-right');
        };

        $scope.changeSeat = function(){
            $scope.reservationModel.seat = null;
            $scope.SlideChangeButtonClick('slide-right');
        };

        $scope.accept = function(){
            /*console.log($scope.reservationModel.clientid);
            console.log($scope.reservationModel.projection.Id);
            console.log($scope.reservationModel.seat.Id);*/

            var newReserervation = {
                ClientId: $scope.reservationModel.clientid,
                SeatId: $scope.reservationModel.seat.Id,
                ProjectionId: $scope.reservationModel.projection.Id
            };

            console.log(newReserervation);

            var apiCall = '/api/reservation';
            var jsonReservation = JSON.stringify(newReserervation);

            console.log(jsonReservation);

            $http.post($scope.apiaddress + apiCall, newReserervation,{
                    headers:{
                        'Content-Type': 'application/json; charset=utf-8'

                    }});

            /*$http({
                url: $scope.apiaddress + apiCall,
                method: "POST",
                data: $.param({
                    ClientId: $scope.reservationModel.clientid,
                    SeatId: $scope.reservationModel.seat.Id,
                    ProjectionId: $scope.reservationModel.projection.Id
                }),
                headers: { 'Content-Type': 'application/json' }
            });*/

            $scope.SlideChangeButtonClick('slide-left');
        };

    });