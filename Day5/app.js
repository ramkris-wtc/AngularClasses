// angular.module('myApp', []);


var app = angular.module('myApp', []);





app.controller('EmployeeController', function(){
	
	var vm = this;

	this.change = function(empForm){
      		empForm.$setPristine();
      		empForm.$setUntouched();
	}
	
})

