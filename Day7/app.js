// angular.module('myApp', []);


var app = angular.module('myApp', ['ngRoute']);


app.controller('ProductListController', function(ProductService) {
	var vm = this;
	vm.products = ProductService.products;
})

app.controller('ProductDetailsController', function($routeParams, $route, ProductService) {
	var vm = this;
	vm.products = ProductService.products;
	vm.currentProductId = $routeParams.productId;
	console.log($routeParams.productId)
	console.log($route.current.testObj)
})

app.service('ProductService', function() {
	this.products = [{
			id: 1,
			title: 'DELL Laptop',
			price: 34322,
			details: '14 inch core i3 laptop',
			comments: ['nice laptop by techieman']
		}, {
			id: 2,
			title: 'Sony Digi Cam',
			price: 28222,
			details: 'High definition HD cam',
			comments: ['nice laptop by techieman']
		}, {
			id: 3,
			title: 'Ipad 4th gen',
			price: 12487,
			details: 'Apple Ipad tablet',
			comments: ['nice laptop by techieman']
		}, {
			id: 4,
			title: 'Galaxy 4S',
			price: 23125,
			details: 'Android Phone',
			comments: ['nice laptop by techieman']
		}, {
			id: 5,
			title: 'Surface Pro',
			price: 28977,
			details: 'Microsoft windows tab',
			comments: ['nice laptop by techieman']
		}, {
			id: 6,
			title: 'Kingston 16GB',
			price: 1555,
			details: '16GB USB3 Pendrive',
			comments: ['nice laptop by techieman']
		}

	]

})

app.config(function($routeProvider) {
	$routeProvider
		.when('/products', {
			templateUrl: './partials/product-list.html',
			controller: 'ProductListController',
			controllerAs: 'productCtrl'
		})
		.when('/products/:productId/details', {
			templateUrl: './partials/product-details.html',
			controller: 'ProductDetailsController',
			controllerAs: 'productCtrl',
			testObj:{
				prop:'1',
				prop1: '2'
			}
		})
		.otherwise({
			redirectTo: '/'
		});
})
