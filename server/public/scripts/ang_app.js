var myApp = angular.module('myApp', ['ngRoute', 'ngFileUpload']);


  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/upload', {
        templateUrl: '/views/upload.html',
        controller: "uploadController"
      })
      .otherwise({
        redirectTo: 'upload'
      })
}]);
