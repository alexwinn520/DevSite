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

    
    var mailDiv = angular.element(document.getElementById('mailDiv'));
    var mailImg = angular.element(document.getElementById('mailImg'));
    var mailP = angular.element(document.getElementById('mailP'));
    var linkinDiv = angular.element(document.getElementById('linkinDiv'));
    var linkinImg = angular.element(document.getElementById('linkinImg'));
    var linkinP = angular.element(document.getElementById('linkinP'));
    var gitDiv = angular.element(document.getElementById('gitDiv'));
    var gitImg = angular.element(document.getElementById('gitImg'));
    var gitP = angular.element(document.getElementById('gitP'));
    var resumeDiv = angular.element(document.getElementById('resumeDiv'));
    var resumeImg = angular.element(document.getElementById('resumeImg'));
    var resumeP = angular.element(document.getElementById('resumeP'));
    mailDiv.on('mouseover', function(){
      mailDiv.addClass('fill') && mailImg.addClass('hide') && mailP.removeClass('hide').addClass('show');
    }).on('mouseout', function(){
      mailDiv.removeClass('fill') && mailImg.removeClass('hide') && mailP.removeClass('show').addClass('hide');
    });
    linkinDiv.on('mouseover', function(){
      linkinDiv.addClass('fill') && linkinImg.addClass('hide') && linkinP.removeClass('hide').addClass('show');
    }).on('mouseout', function(){
      linkinDiv.removeClass('fill') && linkinImg.removeClass('hide') && linkinP.removeClass('show').addClass('hide');
    });
    gitDiv.on('mouseover', function(){
      gitDiv.addClass('fill') && gitImg.addClass('hide') && gitP.removeClass('hide').addClass('show');
    }).on('mouseout', function(){
      gitDiv.removeClass('fill') && gitImg.removeClass('hide') && gitP.removeClass('show').addClass('hide');
    });
    resumeDiv.on('mouseover', function(){
      resumeDiv.addClass('fill') && resumeImg.addClass('hide') && resumeP.removeClass('hide').addClass('show');
    }).on('mouseout', function(){
      resumeDiv.removeClass('fill') && resumeImg.removeClass('hide') && resumeP.removeClass('show').addClass('hide');
    });

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
