// angular.module('myApp', []);


var app = angular.module('myApp', ['ngResource']);


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

app.service('BookService', function($resource){
	var Book = $resource('https://angularclasses-ramkriswtc.c9users.io:8081/books');

	this.getBooks = function () {
		return Book.query().$promise
	}

	this.addBook = function (book) {
		// body...
		return Book.save(book).$promise;
	}
})

// app.service('BookService', function($http){
// 	this.getBooks = function() {
// 		return $http.get('https://angularclasses-ramkriswtc.c9users.io:8081/books', {
// 			transformResponse: function(data){
// 				var books = [];
// 				console.log(data);
// 				data = JSON.parse(data)
// 				data.forEach(function(book){
// 					books.push({
// 						"id": book.id,
// 						"title": book.title,
// 						"author": book.author
// 					})
// 				})
// 				console.log(books);
// 				return books;
// 				//return JSON.parse(data);
// 			}
// 		}).
// 		then(function(response){
// 			return response.data;
// 		}, function(error){
// 			console.log(error)
// 		})
// 	}

// 	// this.addBook = function(book) {
// 	// 	return $http.post('https://angularclasses-ramkriswtc.c9users.io:8081/books', book).
// 	// 	then(function(response){
// 	// 		return response.data;
// 	// 	}, function(error){
// 	// 		console.log(error)
// 	// 	})
// 	// }

// 	this.addBook = function(book) {
// 		return $http.post('http://localhost:3000/books', book, {
// 			headers: {
// 				'MyHeader':'XXXXXXXXXX'
// 			}
// 		}).
// 		then(function(response){
// 			return response.data;
// 		}, function(error){
// 			console.log(error)
// 		})
// 	}
// })

app.service('UserService', function(){
	this.currentUser = {
		name: 'John',
		email: 'xxx@yyyy.com',
		auth_token: 'dshjak838shsfj+sj2!33'
	}
})

app.factory('apiInterceptor', function(UserService){
	return {
		request: function(config) {
			if(UserService.currentUser){
				config.headers['auth_token'] = UserService.currentUser.auth_token;
				console.log(config)
			}
			return config;
		},

		requestError: function(config) {
			return config;
		},

		response: function(res) {
			return res;
		},

		responseError: function(res) {
			return res;
		}
	}
})

app.config(function($httpProvider){
	//$httpProvider.defaults.headers.common["MyHeader1"] = 'ZZZZZZZZZZZ';
	$httpProvider.defaults.headers.post["MyHeader1"] = 'ZZZZZZZZZZZ';
	$httpProvider.interceptors.push('apiInterceptor');
})

