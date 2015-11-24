angular.module('starter.controllers', [])

// .controller('FeedCtrl', function($scope, $http) {
//   $http.get("http://hulk.imu.uiowa.edu/after-class/events/feed/")
//   .then(function(res){
//         console.log(res.data.events);
//         $scope.events = res.data.events;    
//         });

// })



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('FeedCtrl', function(Events, $scope, Events){



 Events.getEventsByTag("art").then(function(res) { 
  console.log(res.data.events);
  $scope.featuredEvents = res.data.events;
  $scope.featuredTag = "art";

});

 Events.async().then(function(res) { 
  console.log(res.data.events);
  $scope.events = res.data.events;
});

})

.controller('SingleEventCtrl', function($scope, $stateParams, Events){
  Events.get($stateParams.eventId).then(function(res) { 
    console.log(res.data.events);
    $scope.event = res.data.event;
    $scope.eventTags = res.data.event.tags;
    $scope.eventVenue = res.data.event.venue;

  });
})

.controller('TaggedEventsCtrl', function($scope, $stateParams, Events){
  Events.getEventsByTag($stateParams.tagId).then(function(res) { 
    console.log(res.data.events);
    $scope.events = res.data.events;
    $scope.tag = $stateParams.tagId;

  });
})

// .controller('TaggedEventsCtrl', function($scope, $stateParams, Events){
//   Events.getByTag($stateParams.tagId).then(function(res) { 
//     console.log(res.data.events);
//     $scope.events = res.data.events;
//     $scope.tag = $stateParams.tagId;

//   });
// })

.controller('VenuesCtrl', function($scope, $stateParams, Events){
  Events.getByVenue($stateParams.venueId).then(function(res) { 
    console.log(res.data.events);
    $scope.events = res.data.events;
    $scope.venue = $stateParams.venueId;

  });
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


/////////

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })



// .controller('FeedCtrl', function(Events, $scope){

//  Events.async().then(function(res) { 
//     console.log(res.data.events);
//     $scope.events = res.data.events;
//   });

// })

// .controller('SingleEventCtrl', function($scope, $stateParams, Events){
//   Events.get($stateParams.eventId).then(function(res) { 
//     console.log(res.data.event);
//     $scope.event = res.data.event;
//     $scope.eventTags = res.data.event.tags;
    
//   });
// })




// .controller('VenuesCtrl', function($scope, $stateParams, Events){
//   Events.getEventsByVenue($stateParams.venueId).then(function(res) { 
//     console.log(res.data.events);
//     $scope.events = res.data.events;
    
//     $scope.venue = res.data.event.venueId;

//   });
// })


// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });


