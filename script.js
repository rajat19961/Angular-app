var app = angular.module('mainapp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/main',{
        templateUrl:'main.html',
        controller:'ServicesCtrl'
    })
    .when('/about',{
        templateUrl:'about.html'
        
    })
    .when('/services',{
        templateUrl:'services.html',
        controller:'ServicesCtrl'
    })
    .when('/contact',{
        templateUrl:'contact.html',
        controller:'ContactCtrl'
    })
    .otherwise({
        redirectTo : '/main'
    });
});

app.controller('MainCtrl', function(){
    console.log('this is MainCtrl');
});

app.controller('ServicesCtrl', function($scope, $http){
    $http.get('services.json').then(function(response){
        $scope.services = response.data;
    });
});

app.controller('ContactCtrl', function(){
    
});