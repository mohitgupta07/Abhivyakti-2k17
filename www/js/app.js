// Ionic Abhivyakti App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Abhivyakti' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'Abhivyakti.controllers' is found in controllers.js
angular.module('Abhivyakti', ['ionic','ngCordova', 'Abhivyakti.controllers','Abhivyakti.services'])

.run(function($ionicPlatform,$rootScope, $ionicLoading,$timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('loading:show', function () {
    $ionicLoading.show({
      template: '<ion-spinner icon="lines"></ion-spinner> Loading ...'
    })
  });

  $rootScope.$on('loading:hide', function () {
    $timeout(function () {

      $ionicLoading.hide();
    },700);
  });

  $rootScope.$on('$stateChangeStart', function () {
    console.log('Loading ...');
    $rootScope.$broadcast('loading:show');
  });

  $rootScope.$on('$stateChangeSuccess', function () {
    console.log('done');
    $rootScope.$broadcast('loading:hide');
  });

})
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'http://www.youngmodulus.com/**',
      'https://docs.google.com/document/**'
    ]);
  })
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar.html',
    controller: 'AppCtrl'
  })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller:'AppCtrl'
        }
      }
    })

    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller:'EventsCtrl'
        }
      }
    })

    .state('app.starNight', {
      url: '/starNight',
      views: {
        'menuContent': {
          templateUrl: 'templates/starNight.html',
          controller:'starNightCtrl'
        }
      }
    })

    .state('app.starslist', {
      url: '/starslist',
      views: {
        'menuContent': {
          templateUrl: 'templates/starslist.html',
          controller: 'StarsCtrl'
        }
      }
    })

    .state('app.cellslist', {
      url: '/cellslist',
      views: {
        'menuContent': {
          templateUrl: 'templates/cellslist.html',
          controller:'CellsCtrl'
        }
      }
    })

    .state('app.gallery', {
      url: '/gallery',
      views: {
        'menuContent': {
          templateUrl: 'templates/gallery.html'
        }
      }
    })

    .state('app.teaminfo', {
      url: '/teaminfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/teaminfo.html',
          controller:'TeamInfoCtrl'
        }
      }
    })

    .state('app.aboutabhivyakti', {
      url: '/aboutabhivyakti',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutabhivyakti.html'
        }
      }
    })
    .state('app.day1', {
      url: '/day1',
      views: {
        'menuContent': {
          templateUrl: 'templates/day1.html'
        }
      }
    })
    .state('app.day2', {
      url: '/day2',
      views: {
        'menuContent': {
          templateUrl: 'templates/day2.html'
        }
      }
    })
    .state('app.day3', {
      url: '/day3',
      views: {
        'menuContent': {
          templateUrl: 'templates/day3.html'
        }
      }
    })
    .state('app.results', {
      url: '/results',
      views: {
        'menuContent': {
          templateUrl: 'templates/results.html'
        }
      }
    })
    .state('app.developerinfo', {
      url: '/developerinfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/developerinfo.html'
        }
      }
    })
    .state('app.eventDetails', {
      url: '/events/:cell',
      views: {
        'menuContent': {
          templateUrl: 'templates/eventDetails.html',
          controller:'eventDetailsCtrl'
        }
      }
    })
    .state('app.reachUs', {
      url: '/reachUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/reachUs.html',

        }
      }
    })
    .state('app.faq', {
      url: '/faq',
      views: {
        'menuContent': {
          templateUrl: 'templates/faq.html',
controller:'FaqCtrl'
        }
      }
    })
    .state('app.disclaimer', {
      url: '/disclaimer',
      views: {
        'menuContent': {
          templateUrl: 'templates/disclaimer.html',

        }
      }
    })
    .state('app.cookie', {
      url: '/cookie',
      views: {
        'menuContent': {
          templateUrl: 'templates/cookie.html',

        }
      }
    })
    .state('app.t&c', {
      url: '/t&c',
      views: {
        'menuContent': {
          templateUrl: 'templates/t&c.html',

        }
      }
    })
    .state('app.privacy', {
      url: '/privacy',
      views: {
        'menuContent': {
          templateUrl: 'templates/privacy.html',

        }
      }
    })
    .state('intro', {
      url: '/intro',
      templateUrl: 'templates/Intro.html',
      controller: 'IntroCtrl'
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');//app home
});
