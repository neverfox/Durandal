define(['knockout', 'knockout.isotope', 'jquery.isotope'], function (ko) {
  var ViewModel = function () {
    var self = this;
    self.items = ko.observableArray([1, 2]);

    self.getOptions = function () {
      return {
        layoutMode: 'cellsByRow',
        cellsByRow: {
          columnWidth: 220,
          rowHeight: 160
        }
      };
    };

    setTimeout(function () {
      self.items([3, 2, 1]);
    }, 1000);
  };

  return ViewModel;
});