(function(){
    angular.module("trialApp", [])
    .controller("ctrl", ctrlfun);

    ctrlfun.$inject = ['$scope'];
    function ctrlfun($scope){
        $scope.var = 0;
        $scope.india = function(){
            $scope.var = 0;
        }
        $scope.abroad = function(){
            $scope.var = 1;
        }
    }

})()