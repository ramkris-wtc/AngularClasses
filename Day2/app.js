// angular.module('myApp', []);


var app = angular.module('myApp', []);

// app.controller('StudentController', function($scope){
// 	$scope.firstname = '';
// })

// app.controller('CompanyController', function($scope) {
// 	$scope.name = "WTC";
// })

// app.controller('EmployeeController', function($scope) {
// 	//$scope.name = "John";
// })

// app.controller('MovieController', function(){
// 	this.name = 'Star Wars';
// 	this.year = 2009;
// 	this.genre = "scifi";
// })

app.controller('GroceryController', function(){
	this.groceries = [
		{
			item: 'tomato',
			qnty: 2,
			price: 10
		},
		{
			item: 'pumpkin',
			qnty: 5,
			price: 20
		},
		{
			item: 'cabbage',
			qnty: 3,
			price: 12
		}
	]
})

// app.filter('hellome', function() {
// 	return function(msg, opt, opt1) {
// 		return opt + '..' + opt1 + '...' + msg;
// 	}
// })

app.filter('squareme',function(){
	return function(items){
		var filteredItems = [];
		angular.forEach(items, function(item){
			filteredItems.push(item * item)
		})
		return filteredItems;
	}
})


