angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('DashCtrl', function($scope, $state) {
  $scope.readBarcode = function() {
    document.addEventListener("deviceready", function () {
      cordova.plugins.barcodeScanner
        .scan(function(barcodeData) {
          console.log('barcodeData', barcodeData);
          $state.go('tab.product-detail', { productSku: "16010237", showDescription: true, showMakeDeal: true, showForm: false});
          // Success! Barcode data is here
        }, function(error) {
          console.log('error', error);
          $state.go('tab.dash');
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

.controller('StoresCtrl', function($scope, Stores, $timeout, uiGmapGoogleMapApi) {
  $scope.data = {
      clientSide : 'list'
  };
  $scope.changeView = function(value) {
    $scope.data.clientSide = value;
  };

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

  var count = 0;
  Stores.all().forEach(function(el) {
    $scope.markers.push({
      id: count,
      name: el.storeName,
      location: {
        latitude: el.latitude,
        longitude: el.longitude
      },
      icon: el.brandTagUrl
    });
    count++
  });

  $scope.windowOptions = {
    pixelOffset: {
      height: -32,
      width: 0
    }
  };

  uiGmapGoogleMapApi.then(function(maps) {
    if( typeof _.contains === 'undefined' ) {
      _.contains = _.includes;
    }
    if( typeof _.object === 'undefined' ) {
      _.object = _.zipObject;
    }
    $scope.map = {
      center: {
        latitude: 43.730309,
        longitude: -79.376378
      },
      zoom: 10
    };
  });
})
.controller('ProductDetailCtrl', function($scope, $stateParams, $state, ScanShopList) {
  $scope.goToList = function() {
    $state.go('tab.scan-shop-list');
  };
  $scope.showDescription = $stateParams.showDescription;
  $scope.showMakeDeal = $stateParams.showMakeDeal;
  $scope.showForm = $stateParams.showForm;
  $scope.product = ScanShopList.get($stateParams.productSku);

  // $scope.$on('$locationChangeStart', function( event ) {
  //   $scope.preferredPrice = null;
  //   $scope.preferredDiscount = null;
  //   $scope.showForm = false;
  // });
  $scope.makeDeal = function() {
    $scope.showDescription = false;
    $scope.showMakeDeal = false;
    $scope.showForm = true;
  };
  $scope.saveRequest = function() {
    $scope.preferredPrice = null;
    $scope.preferredDiscount = null;
    $scope.showDescription = false;
    $scope.showMakeDeal = false;
    $scope.showForm = false;
    $state.go('tab.scan-shop-list');
  };
})
.controller('ScanShopListCtrl', function($scope, $state, $stateParams, ScanShopList) {
  $scope.waitingList = ScanShopList.waiting();
  $scope.closedlist = ScanShopList.closed();
  $scope.data = {
    listType: 'waiting'
  };

  $scope.changeView = function (value) {
    $scope.data.listType = value;
  };

  $scope.readBarcode = function () {
    document.addEventListener("deviceready", function () {
      cordova.plugins.barcodeScanner
        .scan(function(barcodeData) {
          console.log('barcodeData', barcodeData);
          $state.go('tab.product-detail', { productSku: "16010237", showDescription: true, showMakeDeal: true, showForm: false});
          // Success! Barcode data is here
        }, function(error) {
          console.log('error', error);
          $state.go('tab.dash');
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

  $scope.goToDeal = function (productSku) {
    $state.go('tab.product-detail', { productSku: productSku, showDescription: true, showMakeDeal: false, showForm: false });
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