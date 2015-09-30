# Overview

This is a simple Ionic application that will interact with your devices Contact list - allow it to be filtered, and to be able to drill down into it and view additional information about the contact.

## Description

This project uses Ionic which is primarily a CSS framework with AngularJS-specific "extensions" that is targeted at Mobile platforms.  

AngularJS is a JS framework created by Google employees to better match the "semantic" web.  It is a MVW (Model-View-'Whatever' framework).

Ionic simply creates "Directives" and "Services" that are Mobile-centric.  So, at the end of the day, an Ionic application IS-A Angular Application, while the reverse IS NOT true. 


##Steps

This was generated using Ionics templates:

`ionic start ContactsSimple sidemenu`

Since we want to use our contacts list, we'll need to add that cordova plugin:

`ionic plugin add cordova-plugin-contacts`

And we're going to add in some Geolocation for our weather:

`ionic plugin add cordova-plugin-geolocation`

Next, we're going to modify the app to load some contacts AND load some weather!

#Running It

To run on the desktop for some initial testing, run:

`ionic serve`

To test on devices, we have to add the platforms:

`ionic platform add android`

or

`ionic platform add ios`

And then, we can easily run:

`ionic run android`

or 

`ionic run ios`