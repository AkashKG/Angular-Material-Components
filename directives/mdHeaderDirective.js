angular.module('mdHeaderDirective',[])
	.directive('mdHeader', function(){
            return{
                restrict:'E',
                scope:{
                    header:"=header",
                    subHeader:"=subHeader",
                    avatar:'=avatar',
                },
                controller: ['$scope', function mdHACtrl($scope) {
                        $scope.icons = [];
                        this.addIcon = function(icon) {  
                            console.log($scope.icons);
                            $scope.icons.push(icon);
                        };
                }],
                transclude:true,
                templateUrl:'templates/sample.html'
            };
	})
        .directive('mdHeaderAction', function(){
            return{
                require: '^^mdHeader',
                restrict:'E',
                transclude:true,
                scope:{
                    iconColor:"=iconColor",
                    iconId:"=iconId"
                },
                link: function(scope, element, attrs, ctrl) {
                    console.log(scope);
                    ctrl.addIcon(scope);
                }
            };
	})