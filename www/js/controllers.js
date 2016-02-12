angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('DashCtrl', function($scope, $state) {
  $scope.readBarcode = function() {
    document.addEventListener("deviceready", function () {
      cordova.plugins.barcodeScanner
        .scan(function(barcodeData) {
          console.log('barcodeData', barcodeData);
          $state.go('tab.product-detail');
          // Success! Barcode data is here
        }, function(error) {
          console.log('error', error);
          $state.go('tab.product-detail');
          // An error occurred
        });


      // // NOTE: encoding not functioning yet
      // $cordovaBarcodeScanner
      //   .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      //   .then(function(success) {
      //     // Success!
      //   }, function(error) {
      //     // An error occurred
      //   });

    }, false);
  };
})

.controller('StoresCtrl', function($scope, Stores, $timeout, uiGmapGoogleMapApi, Yelp) {
  $scope.view = true;
  $scope.notView = false;
  $scope.stores = Stores.all();
  // Stores.all().then(function(data) {
  //   $scope.stores = data.data.STORES.STORE;
  // }, function(err) {
  //   console.log(err);
  // });
  $scope.selected = 0;

  $scope.select= function(index) {
     $scope.selected = index;
  };

  $scope.changeView = function (value) {
    $scope.view = value;
    $scope.notView = !value;
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

  // $scope.$on('$ionicView.enter', function(e) {
  // });
})
.controller('ProductDetailCtrl', function($scope, $stateParams, $state, ScanShopList) {
  $scope.goToList = function() {
    $state.go('tab.scan-shop-list');
  };
  $scope.showForm = false;
  $scope.product = ScanShopList.get();
})
.controller('ScanShopListCtrl', function($scope, $stateParams, ScanShopList) {
  $scope.view = true;
  $scope.notView = false;
  $scope.list = ScanShopList.waiting();

  $scope.changeView = function (value) {
    $scope.view = value;
    $scope.notView = !value;
    $scope.list = value ? ScanShopList.waiting() : ScanShopList.closed();
  };

  $scope.readBarcode = function() {
    document.addEventListener("deviceready", function () {
      cordova.plugins.barcodeScanner
        .scan(function(barcodeData) {
          console.log('barcodeData', barcodeData);
          $state.go('tab.product-detail');
          // Success! Barcode data is here
        }, function(error) {
          console.log('error', error);
          $state.go('tab.product-detail');
          // An error occurred
        });


      // // NOTE: encoding not functioning yet
      // $cordovaBarcodeScanner
      //   .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      //   .then(function(success) {
      //     // Success!
      //   }, function(error) {
      //     // An error occurred
      //   });

    }, false);
  };
})
.controller('ProfileCtrl', function($scope, $ionicActionSheet, Customer, $state) {
  $scope.imgURI = "http://placehold.it/120x120";
  $scope.user = Customer.get();
  $scope.birthday = {
    value: new Date(1974, 02, 14)
  };

  $scope.saveRequest = function () {
    $state.go('tab.scan-shop-list');
  };
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