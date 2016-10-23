angular.module('mdHeaderDirective',[])
	.directive('mdHeader', function(dialogFactory){
            return{
                restrict:'E',
                scope:{
                    header:"=header",
                    subHeader:"=subHeader",
                    avatar:'=avatar',
                },
                controller: 'mdHACtrl',
                transclude:true,
                templateUrl:'templates/sample.html'
            };
	})
        .directive('mdHeaderAction', function(){
            return{
                require: '^^mdHeader',
                restrict:'E',
                transclude:true,
                controller:'mdHACtrl',
                scope:{
                    iconColor:"=iconColor",
                    iconId:"=iconId",
                    iconType:"=mdActionType"
                },
                link: function(scope, element, attrs, ctrl) {
                    ctrl.addIcon(scope);
                }
            };
	})