'use strict';

describe('Controller: NamegeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('starwars.nameApp'));

  var NamegeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NamegeneratorCtrl = $controller('NamegeneratorCtrl', {
      $scope: scope
    });
  }));

  it('generates first name correctly', function () {
    scope.firstName = 'dexxxxx';
    scope.lastName = 'abcxxxx';
    expect(scope.generateFirstName()).toBe('Abcde');
  });

  it('generates last name correctly', function () {
    scope.mothersLastName = 'abxxxxx';
    scope.placeOfBirth = 'cdexxxxx';
    expect(scope.generateLastName()).toBe('Abcde');
  });

  it('capitilizes names correctly', function () {
    expect(scope.capitilizeName('aBcDefG')).toBe('Abcdefg');
  });
});
