angular.module('mdHeaderDirective',[])
	.directive('mdHeader', function(){
		return{
			controller:'mdHeaderController',
			templateUrl:'templates/sample.html'
		};
	});
