define(['durandal/system', 'durandal/composition', 'knockout', 'sigma'], function (system, composition, ko, sigma) {

    composition.addBindingHandler('sigma', {
        sigInst: null,
        init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            sigInst = sigma.init(element);
            sigInst.addNode('hello',{
              label: 'Hello',
              color: '#ff0000'
            }).addNode('world',{
              label: 'World !',
              color: '#00ff00'
            }).addEdge('hello_world','hello','world').drawingProperties({
              defaultLabelColor: '#ccc',
              font: 'Arial',
              edgeColor: 'source',
              defaultEdgeType: 'curve'
            }).graphProperties({
              minNodeSize: 1,
              maxNodeSize: 10
            });
        },
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            sigInst.draw();
        }
    });

    return {
        activate: function() {
            system.log('Lifecycle : activate');
        },
        binding: function () {
            system.log('Lifecycle : binding');
        },
        bindingComplete: function () {
            system.log('Lifecycle : bindingComplete');
        },
        attached: function (view, parent) {
            system.log('Lifecycle : attached');
        },
        compositionComplete: function (view) {
            system.log('Lifecycle : compositionComplete');
        },
        detached: function (view) {
            system.log('Lifecycle : detached'); //Note: This won't be called as long as the composition system is set to cache views.
        }
    };
});