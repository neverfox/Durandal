define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'sigmaExample',
            route:'sigma-demos'
        }).map([
            { route: '',      moduleId: 'demo1/index', title: 'Demo 1', type: 'intro' },
            { route: 'demo1', moduleId: 'demo1/index', title: 'Demo 1', type: 'intro', nav: true},
            { route: 'demo2', moduleId: 'demo2/index', title: 'Demo 2', type: 'intro', nav: true}
        ]).buildNavigationModel();

    return {
        router: childRouter
    };
});