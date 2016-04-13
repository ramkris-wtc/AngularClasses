// angular.module('myApp', []);


var app = angular.module('myApp', []);





app.controller('EmployeeController', function() {

	var vm = this;

	this.change = function(empForm) {
		empForm.$setPristine();
		empForm.$setUntouched();
	}

})


app.directive('integer', function() {
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.integer = function(modelValue, viewValue) {
				console.log(modelValue)
				console.log(viewValue)
				
				if (ctrl.$isEmpty(modelValue)) {
					return true;
				}
				var INTEGER_REGEXP = /^\-?\d+$/;
				if (INTEGER_REGEXP.test(viewValue)) {
					return true;
				}
				return false;
			};
		}
	};
});


app.directive('overwriteEmail', function() {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
       if (ctrl && ctrl.$validators.email) {
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});