"use strict";angular.module("cineos",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ngMaterial","lumx"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("showReservation",{url:"/reservation/:idReservation",templateUrl:"",controller:""}).state("createReservation",{"abstract":!0,url:"/reservation/create",templateUrl:"app/createReservation/createReservation.html",controller:"CreateReservationController"}).state("createReservation.userAuthorization",{url:"/authorize",templateUrl:"app/createReservation/userAuthorization/userAuthorization.html",controller:"UserAuthorizationController"}).state("createReservation.cinemaSelection",{url:"/select",templateUrl:"app/createReservation/cinemaSelection/cinemaSelection.html",controller:"CinemaSelectionController"}),e.otherwise("/")}]),angular.module("cineos").controller("UserAuthorizationController",["$scope",function(t){console.log(t)}]),angular.module("cineos").controller("CinemaSelectionController",["$scope",function(){}]),angular.module("cineos").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),angular.module("cineos").controller("MainCtrl",["$scope",function(){}]),angular.module("cineos").controller("CreateReservationController",["$scope",function(t){t.hello="Hello snapbaby"}]),angular.module("cineos").run(["$templateCache",function(t){t.put("app/createReservation/createReservation.html",'<div ui-view=""></div>'),t.put("app/main/main.html",'<div class="container"><button class="btn btn--m btn--blue btn--raised" lx-ripple="">Button</button> <button class="btn btn--m btn--blue btn--flat" lx-ripple="">Button</button> <button class="btn btn--m btn--blue btn--fab" lx-ripple=""><i class="mdi mdi-plus"></i></button> <button class="btn btn--m btn--blue btn--icon" lx-ripple=""><i class="mdi mdi-plus"></i></button></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>'),t.put("app/createReservation/cinemaSelection/cinemaSelection.html",'<div layout="column" layout-align="center center"><div class="slide" layout="" layout-align="center center"><div class="slide-title"><h1>Select cinema</h1></div><div class="slide-content"><p>Regions.</p></div><div class="slide-button-section"><div layout="row"><div class="left-section" flex="33"><md-button class="md-accent md-hue-1 md-raised" ui-sref="home">Previous</md-button></div><div flex="33"></div><div class="right-section" flex="33"><md-button class="md-accent md-hue-1 md-raised">Next</md-button></div></div></div></div></div>'),t.put("app/createReservation/userAuthorization/userAuthorization.html",'<div layout="column" layout-align="center center" ng-controller="UserAuthorizationController"><div class="slide" layout="" layout-align="center center"><div class="slide-title"><h1>Hello</h1></div><div class="slide-content"><md-input-container><label>E-mail</label> <input type="email"></md-input-container><md-input-container><label>Password</label> <input type="password"></md-input-container></div><div class="slide-button-section"><div layout="row"><div class="left-section" flex="33"></div><div flex="33"></div><div class="right-section" flex="33"><md-button class="md-accent md-hue-1 md-raised" ui-sref="createReservation.cinemaSelection" ng-click="">Next</md-button></div></div></div></div></div>')}]);