let BOWER_DIR = 'public/';
let requireConfig = {
    baseUrl: './',
    paths: {
        'app': ['scripts/app'],
        
        'angular': ['//cdn.bootcss.com/angular.js/1.4.6/angular.min', BOWER_DIR + 'angular/angular.min'],
        'angular-ui-router': ['//cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.min', BOWER_DIR + 'angular-ui-router/release/angular-ui-router.min'],
        'angular-require': [BOWER_DIR + 'angular-require/angular-require.min']
    },
    map: {
        '*': {
            'css': BOWER_DIR + 'require-css/css' 
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'ui-router'
        },
        'angular-require': {
            deps: [
                'angular'
            ],
            exports: 'angular-require'
        },
        'app': {
            deps: [
                'angular',
                'angular-ui-router',
                'angular-require'
            ]
        }
    }
};

require.config(requireConfig);

//require错误处理,否则默认会去访问官网,国外很慢
require.onError = function(err) {
    console.log('require error:', err, arguments);
};

requirejs(['app'], function() {
    angular.bootstrap(document, ['app']);
});
