angular.module('mdHeaderDirective',[])
	.directive('mdHeader', function(){
            return{
                restrict:'E',
                scope:{
                    info:'=info',
                    headerIcons:'=headerIcons'
                },
                templateUrl:'templates/sample.html'
            };
	});
