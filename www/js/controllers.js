angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.readBarcode = function() {
    console.log('barcode');
  };
})

.controller('StoresCtrl', function($scope, Stores) {
  $scope.view = true;
  $scope.stores = Stores.all();

  $scope.changeView = function (value) {
    $scope.view = value;
  };
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
  function initialize() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };

  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $stateParams) {
})

.controller('ProfileCtrl', function($scope, $ionicActionSheet) {
  $scope.imgURI = "http://placehold.it/120x120";

  $scope.addMedia = function () {
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Take photo' },
        { text: 'Photo from library' }
      ],
      titleText: 'Add Image',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.addImage(index);
      }
    });
  };

  $scope.addImage = function (type) {
    $scope.hideSheet();

    var options = optionsForType(type);

    navigator.camera.getPicture(function(imageData) {
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
      $scope.$apply();
    }, function(error) {
      console.log(error);
    }, options);
  };

  function optionsForType(type) {
    var source;
    switch (type) {
      case 0:
        source = Camera.PictureSourceType.CAMERA;
        break;
      case 1:
        source = Camera.PictureSourceType.PHOTOLIBRARY;
        break;
    }
    return {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: source,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 128,
      targetHeight: 128,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };
  };
});