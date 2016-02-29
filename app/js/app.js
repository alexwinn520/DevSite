var app = angular.module('AlexApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'TypeView', 'duScroll']);

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
}])
.controller('PageCtrl', ['$scope', '$uibModal', '$document', function ($scope, $uibModal, $document) {
  $scope.navCollapsed = true;
  var duration = 1000;

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, duration)
    };

    $scope.toContact = function(){
    var contact = angular.element(document.getElementById('Contact'));
    $document.scrollToElement(contact, 0, duration);
    };

    var WAY = angular.element(document.getElementById("WAY"));
    var WAYthumb = angular.element(document.getElementById("WAYthumb"));
    var RR = angular.element(document.getElementById("RR"));
    var RRthumb = angular.element(document.getElementById("RRthumb"));
    var FF = angular.element(document.getElementById("FF"));
    var FFthumb = angular.element(document.getElementById("FFthumb"));

    WAYthumb.on('mouseover', (function(){
      WAY.removeClass('hide').addClass('show')
    })).on('mouseout', (function(){
      WAY.removeClass('show').addClass('hide')
    }));
    RRthumb.on('mouseover', (function(){
      RR.removeClass('hide').addClass('show')
    })).on('mouseout', (function(){
      RR.removeClass('show').addClass('hide')
    }));
    FFthumb.on('mouseover', (function(){
      FF.removeClass('hide').addClass('show')
    })).on('mouseout', (function(){
      FF.removeClass('show').addClass('hide')
    }));
}])
.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
          var navi = angular.element(document.getElementsByClassName("navbar-fixed-top"));
             if (this.pageYOffset >= 620) {
                 scope.boolChangeClass = true;
                 navi.removeClass('minfade').addClass('navSpy');;
             } else if (navi.hasClass('navSpy')){
                 scope.boolChangeClass = false;
                 navi.addClass('minfade');
             }
            scope.$apply();
        });
    };
});
