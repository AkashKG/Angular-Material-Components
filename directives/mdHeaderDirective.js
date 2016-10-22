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
                scope:{
                    iconColor:"=iconColor",
                    iconId:"=iconId"
                },
                link: function(scope, element, attrs, ctrl) {
                    ctrl.addIcon(scope);
                }
            };
	})