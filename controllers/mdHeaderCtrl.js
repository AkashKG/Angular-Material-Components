angular.module('mdHeaderCtrl',[])
        .controller('mdHeaderController',function($scope, dialogFactory){
	        $scope.performIconAction=function(){
                    var content = "This is a Dialog";
                    dialogFactory.alert("Alert", content);
                };
	});


