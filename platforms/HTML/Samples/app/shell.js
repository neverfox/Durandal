﻿define(['plugins/router'], function (router) {
    
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '',                            moduleId: 'hello/index',            title: 'Hello World',       nav: true },
                { route: 'view-composition',            moduleId: 'viewComposition/index',  title: 'View Composition',  nav: true },
                { route: 'modal',                       moduleId: 'modal/index',            title: 'Modal Dialogs',     nav: true },
                { route: 'event-aggregator',            moduleId: 'eventAggregator/index',  title: 'Events',            nav: true },
                { route: 'widgets',                     moduleId: 'widgets/index',          title: 'Widgets',           nav: true },
                { route: 'master-detail',               moduleId: 'masterDetail/index',     title: 'Master Detail',     nav: true },
                { route: 'knockout-samples*details',    moduleId: 'ko/index',               title: 'Knockout Samples',  nav: true, hash: '#knockout-samples' },
                { route: 'isotope-demos*details',       moduleId: 'isotope/index',          title: 'Isotope Demos',     nav: true, hash: '#isotope-demos' },
                { route: 'sigma-demos*details',         moduleId: 'sigmaExample/index',     title: 'Sigma Example',     nav: true, hash: '#sigma-demos' },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});