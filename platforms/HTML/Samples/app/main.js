﻿requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        // 'knockout': '../lib/knockout/knockout-2.2.1',
        'knockout': '../lib/isotope/knockout-2.2.0.debug',
        'knockout.isotope': '../lib/isotope/knockout-isotope',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'jquery.isotope': '../lib/isotope/jquery.isotope'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: '$.support.transition' // just picked one
        },
        'jquery.isotope': {
            deps: ['jquery']
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.plugins = {
        router:true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    };

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});