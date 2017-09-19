define(['app'], function (app) {
    app.controller('ErrorController', function ($scope, $state) {
        $scope.onClickLink = () => {
            $state.go('app');
        };
    });
});
