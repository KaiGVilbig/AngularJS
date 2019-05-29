(function () {
    'use strict';

    //no magic numbers 
    var maxFood = 3;

    angular.module('LunchCheck', [])
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.button = "Check If Too Much";
        $scope.lunch = [];

        $scope.CheckLunch = function () {

            //Checks to make sure array is not empty becasue if there isn't
            //split will break the program and not display the proper message
            if ($scope.lunch.length > 0) {
                $scope.lunch = $scope.lunch.split(",");
            }
            var lunchLen = $scope.lunch.length;

            if (lunchLen > maxFood) {
                $scope.message = "Too much!";
            }
            else if (lunchLen > 0) {
                $scope.message = "Enjoy";
            }
            else{
                $scope.message = "Please enter data first";
            }
        }
    }
})();