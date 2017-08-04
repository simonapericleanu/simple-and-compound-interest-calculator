/**
 * Created by simona on 5/2/2017.
 */
var myApp = angular.module ("myModule", [])
    .controller("myController", ['$scope', function($scope) {
        $scope.interestType = '';
        $scope.principalAmount = '';
        $scope.interestRate = '';
        $scope.time = '';
        $scope.compoundInterval = '';

        $scope.calculateInterest = function () {
            if ($scope.interestType == "SI") {
                var simpleInt = $scope.principalAmount*$scope.interestRate*$scope.time;
                var simpleIntPercent = simpleInt/100;
                $scope.interest = "The result is: $" +simpleIntPercent.toFixed(2);
            } else {
                var n = $scope.compoundInterval;
                var rPercent = $scope.interestRate/100;
                var nRate = rPercent/n;
                var a = (1+nRate);
                var nt = n*$scope.time;
                var ant = Math.pow (a,nt);
                var compoundInterest = $scope.principalAmount*ant;
                $scope.interest = "The result is: $" +compoundInterest.toFixed(2);
            }
        };

        $scope.checkInterest = function () {
            if ($scope.interestType == "CI") {
                return !$scope.compoundInterval;
            } else {
                return $scope.compoundInterval;
            }
        };

        $scope.reset = function () {
            $scope.principalAmount = "";
            $scope.interestRate = "";
            $scope.compoundInterval = "";
            $scope.time = "";
            $scope.interest = "";
        };
        $scope.reset();
    }])

