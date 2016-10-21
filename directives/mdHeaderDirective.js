angular.module('mdHeaderDirective',[])
	.controller('mdHeaderController',function($scope){
		$scope.headerIcons={
                    avatar:"book",
                    actions:[
                        {
                            id:'settings',
                            color:'warn'
                        },
                        {
                            id:'more_vert',
                            color:'default'
                        }
                    ]
                }
                $scope.info={
                    header:"MS Dhoni",
                    subHeader:"The Untold Story"
                }
	})
	.directive('mdHeader', function(){
		return{
			controller:'mdHeaderController',
			templateUrl:'templates/sample.html'
		};
	});
