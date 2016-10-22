angular.module('mdHeaderCtrl',[])
        .controller('mdHeaderController',function($scope, dialogFactory){
		$scope.headerIcons={
                    avatar:"book",
                    actions:[
                        {
                            id:'settings',
                            color:'warn'
                        },
                        {
                            id:'edit',
                            color:'default'
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
                
                /*Header Icon Action function. */
                
                $scope.performIconAction=function(actionId){
                    var id = $scope.headerIcons.actions[actionId].id;
                    var content = "This is " + id + " Dialog";
                    dialogFactory.alert(id, content);
                };
	});


