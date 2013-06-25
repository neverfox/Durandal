define(['knockout', 'knockout.isotope', 'jquery.isotope'], function (ko) {
  var ViewModel = function () {
    var self = this;
    this.filterValue = ko.observable();
    this.things = ko.observableArray([{type: 'type1', stuff: 'Thing1'},
      {type: 'type1', stuff: 'Thing2'},
      {type: 'type2', stuff: 'Thing3'},
      {type: 'type2', stuff: 'Thing4'},
      {type: 'type2', stuff: 'Thing5'},
      {type: 'type2', stuff: 'Thing6'}
      ]);

    this.filters = ko.observableArray(['none', 'type1', 'type2']);

    this.isoFilter = ko.observable(false);

    function itemFilter(value) {
      if (value != 'none') {
        return ko.utils.arrayFilter(self.things(), function(thing) {
          return thing.type === value;
        });
      } else {
          return self.things();
      }
    }

    this.isotopefilteredThings = ko.computed(function () {
      var filter = self.isoFilter();
      if (filter !== 'none') {
        return ko.utils.arrayFilter(self.things(), function (thing) {
          return thing.type === filter;
        });
      }
      return self.things();
    });

    this.isotopeOptions = function () {
      return {layoutMode: 'fitRows'};
    };

    this.foreachFilter = ko.observable(false);

    this.filteredThings = ko.computed(function () {
      var filter = self.foreachFilter(), result;
      if (filter !== 'none') {
        result = ko.utils.arrayFilter(self.things(), function (thing) {
          return thing.type === filter;
        });
      }
      else
        result = self.things();

      return result;
    });
  };

  return ViewModel;
});