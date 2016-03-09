angular.module('appCtrl', [])
.controller('PageCtrl', ['$scope', '$document', function ($scope, $document) {
  $scope.navCollapsed = true;

//handle scroll home and scroll to contact
  var duration = 1000;

    //scroll home
    $scope.toTheTop = function() { 
      $document.scrollTopAnimated(0, duration)
    };

    //scroll to contact info
    $scope.toContact = function(){ 
    var contact = angular.element(document.getElementById('Contact'));
      $document.scrollToElement(contact, 0, duration);
    };

//handle images hiding and showing on demo screen
   angular.element(document).ready(function(){
    $scope.imgClass = []
    $scope.imgClass.push('hide'); //on document load, hide image until mouseover event 
      $scope.showBigImg = function (imgsrc){ //handle class change for css animations
          $scope.imgClass.pop('hide') && $scope.imgClass.push('show');
        }
      $scope.hideBigImg = function(imgsrc){ //re-hide image until mouseover event happens again
          $scope.imgClass.pop('show') && $scope.imgClass.push('hide');
        }
    });

}]);