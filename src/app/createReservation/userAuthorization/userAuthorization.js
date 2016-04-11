'use strict';

angular.module('cineos')
    .controller('UserAuthorizationController', function($scope, $http) {

        //  watches
        $scope.$watch('reservationModel.login.password',
            function(){

            var emailPasswordEnding = $scope.reservationModel.login.email
                + '/' + $scope.reservationModel.login.password;

            console.log(emailPasswordEnding);

            $http.get($scope.apiaddress + '/api/auth/exsits/' + emailPasswordEnding)
                .success(function(data){
                    $scope.reservationModel.clientid = data;
                })
                .error(function(){

                });
        });

        $scope.$watch('reservationModel.clientid', function(){
            $scope.isLoginInvalid = $scope.reservationModel.clientid < 0;
            console.log($scope.isLoginInvalid);
        });

    });
