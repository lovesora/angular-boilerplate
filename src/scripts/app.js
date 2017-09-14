define(function() {
    let app = angular.module('app', ['ngRequire', 'ui.router']);

    app.config(['$urlRouterProvider', '$stateProvider', '$requireProvider', function($urlRouterProvider, $stateProvider, $requireProvider) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'views/home/home.html',
                resolve: {
                    deps: $requireProvider.requireJS(['views/home/home.controller', 'css!views/home/home.css'])
                }
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/error/404.html'
            });
    }]);

    return app;
});
