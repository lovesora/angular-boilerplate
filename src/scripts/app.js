'use strict';

define(function () {
    // 因为在main.js中app依赖了angular-require和angular-ui-router，所以可以直接让app依赖ngRequire和ui.router两个模块
    // ngRequire和ui.router这两个名字是在angular-require和angular-ui-router两个文件中它们自己定义的
    let app = angular.module('app', ['ngRequire', 'ui.router']);

    // DI的名称也是angular-require和angular-ui-router两个文件中它们自己定义的
    // '$urlRouterProvider', '$stateProvider'是angular-ui-router中定义的
    // '$requireProvider'是在angular-reuiqre中定义的
    app.config(['$urlRouterProvider', '$stateProvider', '$requireProvider', function ($urlRouterProvider, $stateProvider, $requireProvider) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('app', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/home/home.html',
            resolve: {
                deps: $requireProvider.requireJS(['views/home/home.controller', 'css!views/home/home.css'])
            }
        }).state('404', {
            url: '/404',
            controller: 'ErrorController',
            templateUrl: 'views/error/404.html',
            resolve: {
                deps: $requireProvider.requireJS(['views/error/error.controller'])
            }
        });
    }]);

    return app;
});
