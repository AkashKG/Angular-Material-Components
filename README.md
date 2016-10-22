## Angular Material Components | Guide

_Why am I building this?_

There are many directives available out there such as material tables, which saves time. Thus looking that in mind I'm creating some _reusable components_.

####Status
I started this on 21st of October, 2016. Whenever I'll get an Idea to form a reusable compenent I'll make it.

##Current availability
**Header** A simple header block, which has following features.
* Avatar
* Header Info
	* Header
	* Subheader

#####Code Wiki
In any of your controller you will have to provide the following information.

In the `.html` file
```
<md-header avatar="'book'" header="'This is header'" sub-header="'This is subheader'">
	<md-header-actions icon-id="'more_vert'" icon-color="'warn'">
	<md-header-actions icon-id="'search'" icon-color="'default'">
</md-header>
```

Parameters | Help
---------- | ----
`avatar` | any `material-icon` eg: `book`, `settings` etc...
`header` | `String`
`sub-header` | `String`
`icon-id` | same as `avatar`
`icon-color` | angular material `warn` `primary` etc...

