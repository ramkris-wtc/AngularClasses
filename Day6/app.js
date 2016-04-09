// angular.module('myApp', []);


var app = angular.module('myApp', []);


app.controller('TestController', function($q, $timeout){
	
	var vm = this;
	this.hello = '';
	this.hello1 = '';

	this.sayHello = function(){
		//vm.hello = getHello();

		// getHelloAsyncCallback(function(msg){
		// 	vm.hello = msg;
		// })

		// getHelloAsync1()
		// .then(function(msg) {
		// 	vm.hello = msg;
		// }, function(err){
		// 	vm.hello = err;
		// })

		getHelloAsync1()
		.then(function(msg) {
			vm.hello = msg;
		}, function(err){
			vm.hello = err;
		})
		.then(getHelloAsync)
		.then(function(msg){
			vm.hello1 = msg;
		})
	}
	
	function getHello(){
		return 'Hello My Friend !'
	}

	function getHelloAsyncCallback(cb) {
		$timeout(function(){
			cb('Hello Friend');
		}, 2000);
	}

	function getHelloAsync(){
		var deferred = $q.defer();

		$timeout(function(){
			deferred.resolve('Hello My Friend !!')
			//deferred.reject('Error rrr !!')
		}, 2000);

		return deferred.promise;
	}

	function getHelloAsync1(){
		return $q(function(resolve, reject){

			$timeout(function(){
				resolve('Hello My Friend !!!!')
					//reject('Error rrr !!')
				}, 2000);
		})
	}
})

app.controller('BookController', function(BookService) {
	var vm = this;
	vm.books = [];
	vm.newBook = {};

	BookService.getBooks()
	.then(function(books){
		vm.books = books;
	})

	vm.addNewBook = function(){
		BookService.addBook(vm.newBook)
		.then(function(response){
			console.log('book added')
		})
		.then(BookService.getBooks)
		.then(function(books){
			vm.books = books;
		})
		vm.newBook = {};
	}

})

app.service('BookService', function($http){
	this.getBooks = function() {
		return $http.get('http://localhost:3000/books').
		then(function(response){
			return response.data;
		}, function(error){
			console.log(error)
		})
	}

	this.addBook = function(book) {
		return $http.post('http://localhost:3000/books', book).
		then(function(response){
			return response.data;
		}, function(error){
			console.log(error)
		})
	}
})

