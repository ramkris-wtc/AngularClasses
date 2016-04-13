var myApp = angular.module('myApp', []);

myApp.controller('TestController', function($scope, $timeout) {
    
    $scope.msg = '';
    
    // setTimeout(function(){
    //     $scope.msg = 'from setTimeout';
    // },2000);
    
    // setTimeout(function(){
    //     $scope.msg = 'from setTimeout';
    //     $scope.$digest();
    // },2000);
    
    // setTimeout(function(){
    //     $scope.$apply(function(){
    //         $scope.msg = 'from setTimeout';
    //     })
        
    // },2000);
    
    $timeout(function(){
        $scope.msg = 'from setTimeout';
    },2000);
    
//   $.ajax({url: "notes.txt", success: function(result){
//         $scope.msg = result;
//     }});
    
    // $.ajax({url: "notes.txt", success: function(result){
    //     $scope.msg = result;
    //     $scope.$digest();
    // }});
    
    // $scope.$watch('msg', function(newVal, oldVal){
    //     console.log('new val - ' + newVal)
    //     console.log('old val - ' + oldVal)
    // })
    
    $scope.$watch(function(){
        return $scope.msg;
    }, function(newVal, oldVal){
        console.log('new val - ' + newVal)
        console.log('old val - ' + oldVal)
    })
})

