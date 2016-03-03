/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PostpaidService', function () {
  var service;

  beforeEach(module('home'));

  beforeEach(inject(function (PostpaidService) {
    service = PostpaidService;
  }));

  it('should equal PostpaidService', function () {
    expect(service.get()).toEqual('PostpaidService');
  });
});
