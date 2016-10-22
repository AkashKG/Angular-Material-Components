## Angular Material Components | Guide

_Why am I building this?_

There are many directives available out there for material tables, which can save you a lot more time. Thus looking that in mind I'm creating some reusable _reusable components_ such that it will help me and even others when needed.

####Status
I started this on 21st of October, 2016. Whenever I'll get an Idea to form a reusable compenent I'll make it.

#####Current availability
**Header** A simple header block, which has following features.
* Avatar
* Header Info
	* Header
	* Subheader

#####Code Wiki
In any of your controller you will have to provide the following information.
```
	$scope.headerIcons={
		avatar:"your avatar in material-icon",
		actions:[{
			/*As many icons*/
			id:'material-icon-name',
			color:'material icon color: example- warn, default etc.'
		}]
	}

	$scope.info={
		header:"Your title",
		subheader:"Your Subheader"
	}
```

In the `.html` file

`<md-header info="info" headerIcons="headerIcons"></md-header>`

**I'll be adding more details further**
