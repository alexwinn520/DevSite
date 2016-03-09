var app = angular.module('AlexApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'TypeView', 'appCtrl', 'scrollDirective', 'duScroll']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'PageCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
