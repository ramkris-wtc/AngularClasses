var myApp = angular.module('myApp', []);

myApp.directive('testDirective', function() {
    return {
        template: '<h1>I am a directive</h1>',
        restrict: 'E'
    }
})

// myApp.controller('PersonController', function($scope){

//     $scope.name = "mark";
//     $scope.address = "Hyderabad";

// })


// myApp.directive('person', function(){
//     return {
//         templateUrl: 'partials/person.html',
//         restrict: 'E'
//     }
// })


// myApp.controller('PersonController', function($scope){

//     $scope.mark = {};
//     $scope.mark.name = "mark";
//     $scope.mark.address = "Hyderabad";

//     $scope.john = {};
//     $scope.john.name = "john";
//     $scope.john.address = "Secbad";
// })


// myApp.directive('person', function(){
//     return {
//         templateUrl: 'partials/person.html',
//         restrict: 'E',
//         scope:{
//             info:'='
//         }
//     }
// })



myApp.controller('PersonController', function($scope) {

    $scope.mark = {};
    $scope.mark.name = "mark";
    $scope.mark.address = "Hyderabad";
    $scope.mark.age = 65;

    $scope.john = {};
    $scope.john.name = "john";
    $scope.john.address = "Secbad";
    $scope.john.age = 18;
    
    
})

myApp.controller('CompanyController', function($scope) {

    $scope.companyaddress = "Mumbai, India."
})


// myApp.directive('person', function() {
//     return {
//         templateUrl: 'partials/person.html',
//         restrict: 'E',
//         // compile: function(el, attr) {
            
//         //     return function($scope, el, attr) {
            
//         //         if ($scope.info.age > 18)
//         //             el.css("color", "#ff0000");
//         //         else
//         //             el.css("color", "#00ff00");
                    
//         //         console.log($scope.info.age)
//         //     }
//         // },
        
//         link: function($scope, el, attr) {
            
//                 if ($scope.info.age > 18)
//                     el.css("color", "#ff0000");
//                 else
//                     el.css("color", "#00ff00");
                    
//                 //console.log($scope.info.age)
//             },
        
//         scope: {
//             info: '='
//         }
//     }
// })


myApp.directive('person', function() {
    return {
        templateUrl: 'partials/person.html',
        restrict: 'E',
        compile: function(el, attr) {
            
            return function($scope, el, attr) {
            
                $scope.$watch('info.age', function(){
                    if ($scope.info.age > 18)
                    el.css("color", "#ff0000");
                else
                    el.css("color", "#00ff00");
                })
               
                    
                console.log($scope.info.age)
            }
        },

        scope: {
            info: '='
        }
    }
})



myApp.directive('companyAddress', function() {
    return {
        template: '<p ng-transclude></p>',
        restrict: 'E',
        transclude: true
    }
})