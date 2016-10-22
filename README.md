## Angular Material Components | Guide

_Why am I building this?_

There are many directives available out there such as material tables, which saves time. Thus looking that in mind I'm creating some _reusable components_.

####Status
I started this on 21st of October, 2016. Whenever I'll get an Idea to form a reusable compenent I'll make it.

##Current availability

![Header](https://s17.postimg.org/cfulldnxr/image.jpg)

**Header** A simple header block, which has following features.
* Avatar
* Header Info
	* Header
	* Subheader
* Actions


####Code Wiki
In any of your controller you will have to provide the following information.

In the `.html` file
```
<md-header avatar="'book'" header="'This is header'" sub-header="'This is subheader'">
	<md-header-actions icon-id="'more_vert'" icon-color="'warn'">
	<md-header-actions icon-id="'search'" icon-color="'default'">
</md-header>
```
**Add actions to every action element**

1. Goto `editableControllers > mdHACtrl.js`
2. Add your functionality at selectAction()

```$scope.selectAction=function(action){ //Add functionality here.             
	dialogFactory.alert("Alert", "This is " + $scope.icons[action].iconId);
   }
```	
Parameters | Help
---------- | ----
`avatar` | any `material-icon` eg: `book`, `settings` etc...
`header` | `String`
`sub-header` | `String`
`icon-id` | same as `avatar`
`icon-color` | angular material `warn` `primary` etc...

