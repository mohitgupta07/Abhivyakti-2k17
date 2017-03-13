

angular.module('Abhivyakti.controllers', [])
  .constant('baseurl','http://abhivyakti.srmcem.ac.in/')
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }

  $scope.validation=function () {
    var date=new Date();
    var estdate=new Date("02/16/2017 10:00:00");

    var enddate=new Date("02/19/2017 10:00:00");
    console.log(date);
    console.log(estdate);
    if(date<estdate) {
      console.log(1);
      return 1;

    }
    else if(date>=estdate && date<enddate)
    {
      console.log(2);
      return 2;

    }
    else
    {console.log(3);
      return 3;}
  }


})

  .controller('EventsCtrl',function ($scope,baseurl,$http) {
    $scope.events;
    $http.get('json/events.json').then(
      function(response) {
        $scope.events=response.data;
        $scope.invalid=false;

        console.log(  "ohh u see founders"           );
        console.log(  $scope.events           );
      }
    );
      $http.get('http://abhivyakti.srmcem.ac.in/json/events.php').then(
        function(response) {
          $scope.events=response.data;
          $scope.invalid=false;

          console.log(  "ohh u see founders"           );
          console.log(  $scope.events           );
        }
      );
    $scope.cells=['STEP CELL','EUPHONY','DRACULA','RITUMBHARA','NEWS PAPER CELL','FINE ARTS','HANDICRAFT','PHOTOGRAPHY','LITERATI','MEDIA CELL','INFORMAL'];
    $http.get('http://abhivyakti.srmcem.ac.in/json/cells.php').then(
      function(response) {
        $scope.cells=response.data;
        $scope.invalid=false;

        console.log(  "ohh u see what the heck"           );
        console.log(  $scope.cells           );
      }
    );

  })
  .controller('eventDetailsCtrl',function ($scope,baseurl,$http,$stateParams) {

$scope.event=JSON.parse($stateParams.cell);
//x=$scope.event;
console.log($scope.event);

  })
  .controller('starNightCtrl',function ($scope,baseurl,$http) {

    $scope.cells=['STEP CELL','EUPHONY','DRACULA','RITUMBHARA','NEWSPAPER'];
  })

  .controller('StarsCtrl',function ($scope,baseurl,$http) {
    $scope.stars;
    $scope.baseurl="stars/";
    if(!$scope.stars)
      $http.get('json/stars.json').then(
        function(response) {
          $scope.stars=response.data;
          $scope.invalid=false;

          console.log(  "ohh u see founders"           );
          console.log(  $scope.stars           );
        }
      );
  })
  .controller('CellsCtrl',function ($scope,baseurl,$http) {
    $scope.cells;
    $scope.baseurl=baseurl+"public/cells/";
    if(!$scope.cells)
      $http.get('json/cells.json').then(
        function(response) {
          $scope.cells=response.data;
          $scope.invalid=false;

          console.log(  "ohh u see founders"           );
          console.log(  $scope.cells           );
        }
      );
  })
  .controller('TeamInfoCtrl',function ($scope,baseurl,$http) {
    $scope.team;
$scope.faculty=[
  
    {
      "DESIGNATION": "CHIEF PATRON",
      "NAME": "MR. PANKAJ AGARWAL ( \"EXECUTIVE DIRECTOR\")",
      "id": 1
    },
    {
      "DESIGNATION": "PATRON",
      "NAME": "MRS. POOJA AGARWAL (\"DEAN\")",
      "id": 2
    },
    {
      "DESIGNATION": "CO-PATRON",
      "NAME": "PROF. R.K. JAISWAL (\"DIRECTOR\")",
      "id": 3
    },
    {
      "DESIGNATION": "FACULTY CONVENOR",
      "NAME": "DR. ANAND MISHRA",
      "id": 4
    },
    {
      "DESIGNATION": "FACULTY CONVENOR",
      "NAME": "MR. DHIRENDRA P. SINGH",
      "id": 5
    },
    {
      "DESIGNATION": "FACULTY CONVENOR",
      "NAME": "MR. MAYANK SRIVASTAVA",
      "id": 6
    },
    {
      "DESIGNATION": "FACULTY CONVENOR",
      "NAME": "MR. GAURAV DHEER",
      "id": 7
    }
  
];
    function onSuccess(result){
      console.log("Success:"+result);
    }

    function onError(result) {
      console.log("Error:"+result);
    }
    $scope.callIt=function(number) {

      window.plugins.CallNumber.callNumber(onSuccess, onError, number, true);

    }
    $scope.baseurl="http://abhivyakti.srmcem.ac.in/public/";
    $scope.designations=["CONVENOR","ASST CONVENOR"];
    if(!$scope.team)
      $http.get('json/contactus.json').then(
        function(response) {
          $scope.team=response.data;
          $scope.invalid=false;

          console.log(  "ohh u see founders"           );
          console.log(  $scope.team           );
        }
      );
  })

  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function() {
      $state.go('app.home');
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  })

  .controller('FaqCtrl',function ($scope,baseurl,$http) {
    $scope.faq;
    $scope.baseurl="faq/";
    if(!$scope.faq)
      $http.get('json/faq.json').then(
        function(response) {
          $scope.faq=response.data;
          $scope.invalid=false;

          console.log(  "ohh u see founders"           );
          console.log(  $scope.faq           );
        }
      );
  })


;
