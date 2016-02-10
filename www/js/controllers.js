angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('DashCtrl', function($scope) {
  $scope.readBarcode = function() {
    console.log('barcode');
  };
})

.controller('StoresCtrl', function($scope, Stores, $timeout, uiGmapGoogleMapApi, Yelp) {
  $scope.view = true;
  console.log(Stores.all());

  Stores.all().then(function(data) {
    $scope.stores = data.data.stores;
  }, function(err) {
    console.log(err);
  });

  $scope.changeView = function (value) {
    $scope.view = value;
  };


  $scope.markers = [];
  $scope.infoVisible = false;
  $scope.infoBusiness = {};

  // Initialize and show infoWindow for business
  $scope.showInfo = function(marker, eventName, markerModel) {
    $scope.infoBusiness = markerModel;
    $scope.infoVisible = true;
  };

  // Hide infoWindow when 'x' is clicked
  $scope.hideInfo = function() {
    $scope.infoVisible = false;
  };

  var initializeMap = function(position) {
    console.log(position);
    if (!position) {
      // Default to downtown Toronto
      position = {
        coords: {
          latitude: 43.6722780,
          longitude: -79.3745125
        }
      };
    }
    console.log(position);
    // TODO add marker on current location

    $scope.map = {
      center: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      zoom: 16
    };

    // Make info window for marker show up above marker
    $scope.windowOptions = {
      pixelOffset: {
        height: -32,
        width: 0
      }
    };

    Yelp.search(position).then(function(data) {
      for (var i = 0; i < 10; i++) {
        var business = data.data.businesses[i];
        $scope.markers.push({
          id: i,
          name: business.name,
          url: business.url,
          location: {
            latitude: business.location.coordinate.latitude,
            longitude: business.location.coordinate.longitude
          }
        });
      }
    }, function(error) {
      console.log("Unable to access yelp");
    });
  };

  uiGmapGoogleMapApi.then(function(maps) {
    // Don't pass timeout parameter here; that is handled by setTimeout below
    var posOptions = {enableHighAccuracy: false};
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Got location: " + JSON.stringify(position));
      initializeMap(position);
    }, function(error) {
      console.log(error);
      initializeMap();
    }, posOptions);
  });

  // Deal with case where user does not make a selection
  $timeout(function() {
    if (!$scope.map) {
      console.log("No confirmation from user, using fallback");
      initializeMap();
    }
  }, 5000);
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('ScanShopListCtrl', function($scope, $stateParams, ScanShopList) {
  $scope.view = true;
  $scope.list = ScanShopList.waiting();

  $scope.changeView = function (value) {
    $scope.view = value;
    $scope.list = value ? ScanShopList.waiting() : ScanShopList.closed();
  };
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