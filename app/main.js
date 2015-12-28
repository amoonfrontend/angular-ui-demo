'user strict'

require.config({
  baseUrl: "",
  paths:{
    "domReady": "../bower_components/requirejs-domready/domReady",
    "angular": "../bower_components/angular/angular",
    "angular-route": "../bower_components/angular-route/angular-route",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
    "angularAMD": "../bower_components/angularAMD/angularAMD",
    "routeConfig": 'route/route'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular'],
    'angular-ui-router': ['angular']
  },
  deps: ['bootstrap']
});