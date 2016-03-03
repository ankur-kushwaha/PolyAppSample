(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name home.service:PostpaidService
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('PostpaidService', PostpaidService);

  function PostpaidService() {
    var self = this;

    self.get = function () {
      return 'PostpaidService';
    };
  }
}());
