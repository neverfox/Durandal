define(['durandal/system', 'sigma'], function (system, sigma) {

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
            var sigInst = sigma.init(document.getElementById('sigma-example'));
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
            }).draw();
        },
        compositionComplete: function (view) {
            system.log('Lifecycle : compositionComplete');
        },
        detachedFromDocument: function (view) {
            system.log('Lifecycle : detachedFromDocument'); //Note: This won't be called as long as the composition system is set to cache views.
        }
    };
});