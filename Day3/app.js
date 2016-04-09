// angular.module('myApp', []);


var app = angular.module('myApp', []);

//app.value('FBSdk', FB);
//app.constant('PI', 3.14)

app.controller('MovieController', function(MovieService){
	var vm = this;
	vm.movies = MovieService.getAllMovies();
	vm.movie = {};

	
	vm.addMovie = function(){
		MovieService.addMovie(vm.movie);
		vm.movie = {};
	}

	vm.removeMovie = function(id){
		MovieService.deleteMovie(id);
	}
})

app.factory('MovieService', function(){

	var idCounter = 0;

	var movies = [
		{
			id: idCounter,
			name: 'Star Wars',
			year: 1232,
			genre: 'scifi'
		}
	];

	var addMovie = function(movie) {
		idCounter++;
		movie.id = idCounter;
		movies.push(movie)
	}

	var getAllMovies = function() {
		return movies;
	}

	var deleteMovie = function(id){
		for(i in movies){
			if(movies[i].id == id)
				movies.splice(i,1);
		}
	}

	return {
		addMovie: addMovie,
		getAllMovies: getAllMovies,
		deleteMovie: deleteMovie
	}
})


