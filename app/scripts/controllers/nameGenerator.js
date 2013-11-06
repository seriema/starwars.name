'use strict';

angular.module('starwars.nameApp')
    .controller('NamegeneratorCtrl', function ($scope) {
        $scope.generateName = function() {
            var first = $scope.generateFirstName();
            var last = $scope.generateLastName();

            $scope.name = first + ' ' + last;
        };

        $scope.capitilizeName = function(name) {
            name = name.toLowerCase();
            name = name.charAt(0).toUpperCase() + name.substr(1);
            return name;
        };

        $scope.generateFirstName = function() {
            var name = ($scope.lastName ? $scope.lastName.substr(0, 3) : '') + ($scope.firstName ? $scope.firstName.substr(0, 2) : '');
            return $scope.capitilizeName(name);
        };

        $scope.generateLastName = function() {
            var name = ($scope.mothersLastName ? $scope.mothersLastName.substr(0, 2) : '') + ($scope.placeOfBirth ? $scope.placeOfBirth.substr(0, 3) : '');
            return $scope.capitilizeName(name);
        };
    });
