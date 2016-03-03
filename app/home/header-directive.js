(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:header
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <header></header>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('header', header);

  function header() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'home/header-directive.tpl.html',
      replace: false,
      controllerAs: 'header',
      controller: function () {
        var vm = this;
        vm.name = 'header';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
