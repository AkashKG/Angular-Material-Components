angular.module('myApp',['ngMaterial', 'ngRoute', 'ngMessages', 'ngAria', 'ngAnimate', 'mdHeaderDirective','mdHeaderCtrl', 'mdHeaderActionCtrl'])
.factory('dialogFactory',['$mdDialog',function($mdDialog) {
    return {
        alert : function(title, content) {
            $mdDialog.show($mdDialog
                .alert()
                .clickOutsideToClose(true)
                .title(title)
                .content(content)
                .ariaLabel('Alert')
                .ok('Okay')
            );
        }
     };
} ]);

