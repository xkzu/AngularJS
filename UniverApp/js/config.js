app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'parciales/home.html',
        controller: 'homeCtrl'
    }).when('/profesores', {
        templateUrl: 'parciales/profesores.html',
        controller: 'profesoresCtrl'
    }).when('/alumnos', {
        templateUrl: 'parciales/alumnos.html',
        controller: 'alumnosCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});