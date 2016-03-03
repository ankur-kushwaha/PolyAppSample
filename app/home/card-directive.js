(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:card
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <card></card>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('card', card);

  function card() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'home/card-directive.tpl.html',
      replace: false,
      controllerAs: 'card',
      controller: function () {
        var vm = this;
        vm.name = 'card';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
