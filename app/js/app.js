var app = angular.module('AlexApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'TypeView', 'duScroll']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'PageCtrl'
  })
  .when('/about', {
    templateUrl: '/views/about.html'
  })
  .when('/development',{
  	templateUrl:'views/development.html'
  })
  .when('/advertising',{
    templateUrl:'views/advertising.html'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}])
.controller('PageCtrl', ['$scope', '$uibModal', '$document', function ($scope, $uibModal, $document) {
  $scope.navCollapsed = true;
  
    // var top = 400;
    // var duration = 2000; //milliseconds

    // //Scroll to the exact position
    // $document.scrollTop(top, duration).then(function() {
    //   console && console.log('You just scrolled to the top!');
    // });

    // var offset = 30; //pixels; adjust for floating menu, context etc
    // //Scroll to #some-id with 30 px "padding"
    // //Note: Use this in a directive, not with document.getElementById 
    // var someElement = angular.element(document.getElementById('some-id'));
    // $document.scrollToElement(someElement, offset, duration);
}]);





// app.controller('HexCtrl', ['$scope', '$document', function($scope, $document){
//  var hex = document.getElementsByClassName("hex")
//   for(var i = 0; i < hex.length; i++){
//     hex[i].onmouseover = function() {
//         this.setAttribute("class", "hex animated flip");
//     }
//   } 
// }]);
