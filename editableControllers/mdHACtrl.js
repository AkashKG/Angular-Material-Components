angular.module('mdHeaderActionCtrl',[])
        .controller('mdHACtrl', function($scope, dialogFactory){
            $scope.icons = [];
            this.addIcon = function(icon) {
                $scope.icons.push(icon);   
            };            
            $scope.selectAction=function(action){
                dialogFactory.alert("Alert", "This is " + $scope.icons[action].iconId);
            }
});