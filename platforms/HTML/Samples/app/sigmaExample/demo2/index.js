define(['durandal/system', 'knockout', 'sigma'], function (system, ko, sigma) {

    ko.bindingHandlers.sigma = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var sigInst = sigma.init(element);
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
            sigma.draw();
        }
    };

    return {
        activate: function() {
            system.log('Lifecycle : activate');
        },
        beforeBind: function () {
            system.log('Lifecycle : beforeBind');
        },
        afterBind: function () {
            system.log('Lifecycle : afterBind');
        },
        attachedToParent: function (view, parent) {
            system.log('Lifecycle : attachedToParent');
        },
        compositionComplete: function (view) {
            system.log('Lifecycle : compositionComplete');
        },
        detachedFromDocument: function (view) {
            system.log('Lifecycle : detachedFromDocument'); //Note: This won't be called as long as the composition system is set to cache views.
        }
    };
});