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
  $scope.notView = true;
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
.controller('ProductDetailCtrl', function($scope, $stateParams, $state) {
  $scope.goToList = function() {
    $state.go('tab.scan-shop-list');
  };
  $scope.showForm = false;
  $scope.product = {
    title: 'Build a School In Africa T-shirt',
    description: 'Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt v Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School In Africa T-shirt Build a School ',
    uid: '(5198886485) ',
    price: '2428.95',
    store: {
      name: 'Roots',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Roots_logo.svg/1280px-Roots_logo.svg.png'
    },
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPDxAPDw8PEA8PDw8PDw8NDQ8PFREWFhURFRUYHSggGBolGxUVITEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLi0tLi0tMDcuKystKy0tLS0tLS0uKy0tLS0tLS0tLS0tLS0vKystLS0rLS0tLSsrLv/AABEIAN4A4wMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAwECBAUGB//EAD8QAAIBAgMDBwoEBAcBAAAAAAABAgMRBSExBAZREhMiQWFxkSQyQmKBobGywdEjcnOCM1KS8BU0Q1Ois9IU/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECBAUGAwf/xAA4EQEAAgADAwkHAwMFAQAAAAAAAQIDBBEFITESM0FRYXGBsdETIjI0ocHwFBWRcuHxIyRCQ1JE/9oADAMBAAIRAxEAPwD3EAAAAAAAAAAhtLN5Li8kRMxEayRGrXbVjlCn6XLfCC5Xv095r8bauWwv+XKns3/Xh9WVh5PFv0ad7T7ZvPNpqlFQydm+lLw0+Jqsbbd7bsOvJ7Z3z6ebNw9n1jfedXM707fXqUaMudkpRmpXUnG0rZNW0ZhRm8XEmJvaZZUYFKa8mD8C38rQtDao86llzi6NT29TNlhbUxKbr+9H1/v+b2LiZGlvh3T9HXbLvVsdRJ85yG+qcZJ+Ky95sKbVy1uNuT3x+Qw7ZHGjhGvcyXj2yrPn4ey7PSdpZWP+yFf0mN/5Ym0b17NHzXKo/VjZe+xi4m28tX4dbeHro9abPxZ46Q5/E97qtTo0lzSfXC0qlu9rL2I1WPtjHxN1Pcj6/wAs7CyGHTfb3pYmF45tNJNKbkpOUnzlqls7XuYuHtHMYOvJtrr179/i9cTK4WJxj+HQYfvXeyrQ/fD6xZsstt7oxq+MejDxdndOHPhLoNk22nVV6c4y4pPNd61RvcDM4WPGuHaJ/OprsTCvhzpaNGQe7zAAAAAAAAAAAAAAAAAABgbXi9GndOXKkvRh0n7epe0wcfaOBg7ptrPVG/8Ax4sjDyuJib4jSO1qNq3jm8qcVBcZdKX2XvNTjbaxLbsOvJ798+nmzsPZ9Y+KdWn2rbpz8+cpd7y9i0RqMbM4mL8dpn86uDOw8KtPhjRr6tVvIxLW1esQpCWZESlXbKfLoygs2tF3HtW2m/qVmGhp02tH7H0kZE21ViGbSj2J9zseFpXg9Q9X3lNe1KeY7Irxl9iOWCOyXyu+GWS8ETF9ZQzHBRXJiupRXYlkRM75khKZRIp1HF3i3FrRp2a9pNbTWdYnSUTETGktzsO8teGU7VY+tlP+pfW5tcvtrMYe6/vx28f59dWHi5DCvvj3ZdDsOPUKtk26cn1TyXslob7L7Wy+NumeTPb68Guxcli03xvjsbU2bDAAAAAAAAAAAAAABz2PYm21QpO13aclr2xRz+08/Mz7HCnvn7erZ5PLREe0vHc5+vNRk4pZLQ0N5itprDZ13xqRKoec2W0LnIpMpJtcppqkyNOxeIQlgYW07EpdKOT611MvW+m6TRh15VYJKFGVSTb66SS0sny6kNbvNX0Nvs/ByWLWfb20nXdvYWaxMxSY9lXWGQtn23m5vmqKnlzcpSXN6R87p3efL0fXHtNl+37NiNZmdO+WH+pzfDTf4G7DGtKnHnowjUt0+bvzd76q7fxOfz2HgRi6Zeda6feettsKbcmOVx3fzpv+rMSUVxfH6GJuhdVR49ZVIcSNAtkCLgXjJiBt8GxupQkoybnSvnF5uPbHh3G0yG08TLWitp1p1dXd6MTM5SuLGsbrfnF29GrGcVKLUoyV01o0dlS9b1i1Z1iWitWazMTxhcsqAAAAAAAAAADUY7ifNrm4Ppy1a9Ffc1G08/7KPZ0n3p49n92dlMty55duHm5SU7KdR+jF273kczE8bNx1Qpt2qfFL4FMbjqmnBiymeEyurHMRGockXQGBW5AGgK2ZCVlOWmduF8i3KtppruRpHFFm9XYjeJUV3gSBBAXUVyElIDIgs0uCuTHFDHo1OVynwYtGiXQbtY1zMuaqP8Kbyb/05ce7ibfZO0PYW9niT7k/SfTr/nrYOdyvtI5Vfij6u2OvaMAAAAAAAAAYGLYiqMcs5y81cO1mBn87GXpu+KeHqyctl5xbdkORqTcm5N3bzbZydrTaZtO+ZbuIiI0hhYnPk0ZLi0UnhotHFavK8IP1UeeJvrC1eMsRnisZTLQg0sKsiRUhICEhKSUJJEEAAq2QKXKpHIzTJ4iyecnwRbplDX4VO9OUuM5W9mR6Y0aW07is6nqR5aJdpuni/LjzFR9OK/Db9KK9HvXw7jqNj5/lx7DEnfHDtjq748u5p8/luTPtK8J4ukN81oAAAAAAMXENtjRhynr6Metsxc3mq5enKnj0R1vbAwZxbaQ4zadplVm5Sd23/aOPxca2Neb2nWZb2mHFKxWFXkiizXYm7xaPKZ96F4hahLlUIPskvCTRbEjciOJaPDoXWgIDUXhCGRIqyEgCUEJRIkkEhIqQKzZWUqIgNgi9UE1JWU+5siI3pa/BlbZoPrlypeLZ75nnZUw/hhkJnkudQqyhJSi2pRaaa1TQra1LRas6TCJiJjSXomCYmtopqWSnGyqR4PiuxnbbPztc1ha/8o4x+dEufzOXnBvp0TwbEzmMAAAATte0xpRc5PJaLrb4I8cfHpg0m9nphYdsS3Jq4rFdvlVk5S9i6kuBxuczV8e/Kt/hvsDBrh10hi0NDHpwesrVJEzJDB2jNM8J4rwtsa/AS9ap88me2JOtVI4lyPCV0xIgOiekIWYkUKipCUpkwLIlCyJFZESKkJUkVkEQGxLwhgYlUtCb9VlsONbR3k8FdnhyKNKPCEfGwxJ5WJMlY0iBFkSk1FRscFxB7PVjPWLymuMX9TKyWbnLYsXjh0x2PHMYMYtJr09D0WnUUkpRd4ySaa0aZ3VLxesWrOsS5y1ZrOk9CxZAAXXrRhFyk7Jf3Y88XFrh0m9uELUpN7RWHHYtiMq0rvKK82PBfc5DO5y2YvrPDohvcvgVwq6Rxamo7mutOrKg6noeleCsqVXkVtKYY1TzbnmsvsGdO3ry+57dCk8S6izPCVxBkB8S8IWLIKlqUnisGBUgXRKFrlhDIC2yqVSBaJMBiLQhqMaf4U0tWuT4u31PXL/HCL/DLLrrJdiR414rER1LyHIoGFR1m6GKZf8AzzfF02/fH6+J0exM7/8APef6fvH3jxavaGX/AOyvj6upOlakAcjjmKOpJxV1GDas8nylrftOT2lnbYt5pwivQ3eUy8UrrxmWpeZq+LMY0nmeU8VmQnkenQqRVlkedpWgiu+gRHQk3C10Jdj+iPeN6kq1tTwtxXguJUPgy8IXLBUzzlKGBBAui0CxKEMiQplUoIF4loF+oshqMYfQl3x+ZHrl/ihF+DMrvI8a8ViI6l5GRFHnIuQJo1XCSlFtNNNNaprrLVtNZi1Z0mETETGkvRcGxBbRSU/SXRmuEvszuchm4zODF+mN097nszgTg306OhnGax2oxzBVXXLhaFZdb82ov5ZfR9Xboa7P7Ppma6xut0T9p/NzLy2athTpO+rkJwlCThNOMou0k9UzkL0th2ml40mG8raLRFqzrElzR5yslyJmUEz0POVidpfRsTUZWFro1PzJf8UZFPh1UtxLramPbivBSKhsGTAYi6C5lJSqQAC8S0CbkoRIiUlMqIAvECzZYafHXanLtlTXjUij3y3xx4+SuJ8LNrvJHjVYqGpaRkwPORZsgLbLDaYDij2epfWErKcezj3ozMhnLZXF5X/Gd093rDHzOBGNTTp6HoNKopRUotOMkmmtGjuKXresWrOsS561ZrOk8YXLIarHcJVePKjZVYLovRSX8j7Ph4mu2hkIzNNY3XjhP2n83MvK5mcK2k/DP5q4qV02mmmm008mmtUzjbRNbTWY0mG9iYmNYLkykrKTkQMeq7kwMrCJ3jW4c7l/REyo3YcPOfiFbUxbcXpBRUXgTAci8IUkispLKguBaLJgWTJENkSFsgRcC6AlkjWYvC8LevS91SJ7ZedLeE+St41g3aJZlaRuWFFEWGVE8xWRMBUmWgbPCMJq7RK1NWivOqSuoLs7X2fAzMpkMXNT7u6OuXhj5mmDHvcep2+x4TGnCMOXVfJ6+W4ptu7yWmp1WBkKYWHFItO7taXEzVr2m2kfw2JnsYAc9vLhPKTr0100vxIr04r0l2r3ruNHtbIe0r7bDj3o49seseTY5LM8mfZ24dHY4+UjlG5JqyJiAirWRetZG02DZalKm1UhKDnJzSkrScWkuVbqzT14GVi4V8OIi8aaxr4PGt63n3Z10LrmHZ6wQyiV4gOiekIEyJCJFEqtgWgwGlhEiJCpMgQgLoCQMTboSkkoxnN3i+TCEqkrKSbdlnlqe+Wpa9+TWNZ3+St7RWNZKebExyd0rcT6aPOQ1lAuTLQOjwHdmVW1XaE4U9Y0/NnPtf8AKvf3G+yGyJv7+Nujq6Z9GuzOeinu4e+evqdnRpRhFRhFRjFWUUrJI6ata0iK1jSIae1ptOszrK5ZAAAADid7cI5p8/TVqcn0ktISf0f99Rym1tn+yt7ake7PHsn0nzbrI5nlxyLcY+rQbPh9avJRowlLOzla0I98tEa/LZXExp0pXXy/lmYuNTDjW06O2wHdels9qk7Va+vKa6EH6i+uvcdTk9m4eB7077eXd6tLmM5bF3Ruhi71fxY/pr5pGq21z8f0/eWZs/m57/Rzdc0Nmxhj3KJXgA6JeEJqE2IYs2UhJcmTEBtMrIcyyFZMiUlMgQgGJgSBst1l5ZT7I1PkZtti/NV8fJiZ7mJ8PNsd8MBvfaqMc1nWgl5y/wBxdvHx79rtXZ/LicbDjf0x19rDyOa0/wBO/Do9HKU5ZHLTDbrqLbSs23kkldtvqSERMzpHGSZ03y7Hd/dxQtWrpOprCm840+18ZfA6vZ2yowojExY1t1dX92mzWdm/uYfDr63Sm7a4AAAAAAFK1KM4uE0pRkrSi800VtWLxNbRrEpraazrHEUaMYRUYRUYrSMVZIUpWlYrWNIhNrTadZnWVyyrlt6l+LH9NfMzmNtc/Hd95bjZ/Nz3ucrmhu2MMVlErxAdAvCE1NBYhiTZWElSZeA+BSQ+5IpJlZC2BUkMRAlAbPdV+WQ/LP5GbXY3zVfHyYme5i3h5u/OzaBx+P7qu7q7KtXeVHJd7h9vDgc/tDZHKmcTBjw9PT/Da5XPaRycT+fVst3MBVBKpVtKs1ktVSXBcZcX7F25OzdmRl49pib7+X9+3+O3wzebnF92vw+bfG3YIAAAAAAAAAAADl96f4kfyL4s5nbXPR3feW32fzc97m65oLtlDEkysJXiQHRZaBM9CZ4IYlRkQkpssHwKSHrQCkiAtkiEBdECQNjus/LKX7/+uRs9k/N4fj5Sxc7zFvDzh6Edq58AAAAAAAAAAAAAAABy+9H8RfkXxZzG2eejuj7txkObnvcztLNDfi2MMRsJMiUkOiTAmpoTJDDqPMmAssHwPOQ+GggVkQFMkQmSLlRNwNjux/nKP7/kkbLZPzeH4+UsbO8xb86YehnbOeAAAAAAAAAAAAAAAActvQ/xP2R+LOX2zz/hH3bnIc34uYrGhtxbGGMwGRIkNiIBUYkYc9S8CpIdApIyIaEQKyICpkwKokXuVEgbDdt+V0e+XyM2Oy/msP8AOiWNnOZt+dL0U7dzwAAAAAAAAAAAAAAADk96X+L+2P1OV2zP+v4Q3WQ5vxc1VNFLYEMkWRAbEgFUkYjLir1JDYlJD6ZUEmAqZMCqLCyKibgZ+7z8qofnfwZn7M+aw+/7MfN8zbuejncOdAAAAAAAAAAAAAAAAcdvbL8a3qxOS23P+48IbvZ8f6Tn6hpZZ5DJExIkNiQIqk9Ix2iwW9SwdErIfSKwCRAVMmBRFhZMgSQM7AX5VQ/URm7PnTM4ffDxzPM37npJ3TmwAAAAAAAAAAAAAAAHF72P8d/lj8Dj9tfMz3Q3uQ5mGiqmolmkMkERIbAqCoSESLQFdZboDYlRkUivSIkQFSLQKEiyIEoDMwV+U0P1YfMjLyO7MYf9UebyzHNX7pemHduaAAAAAAAAAAAAAAAAcTvW/KJd0PlRxu2Z/wB1bw8m+yHMx4+bRVGalmEyLQCIkNgVEzATIvAS9SwYioyKJXpBMgLkTAWWEpgWRAycJflFD9an8yMjKc/h/wBUecPPH5q/dPk9PO+cyAAAAAAAAAAAAAAAA4fev/MT7ofKjjNs/NW8PKG+yPMx4+bRSZqoZhckWgESZDYFJBUYCZF4CussLkB9FlJFpEBciYC2XAiBZEDIwz+PR/Vp/OjIyvP4f9Uebzxubt3T5PUTvnMgAAAAAAAAAAAAAAAOF3sflE/2fIji9sfN28PKG/yPM18fNo2axlqSLQIQDYFZBUEBci0BC1LdAYyA6iUsLyIFJEwEsuJRAlAO2B2rUuypT+ZHtl+dp3x5qYnwW7peqHfuYAAAAAAAAAAAAAAAAcFvW/Kan7PkRxW1/m7+HlDoMjzFfHzaVs1rKUkWgCAZArIJiAuZaAlal+gMZUMpMrYNkVC5kwFMuBAWRAvsztUg+E4v3o9MKdL1nthFt9Zern0FywAAAAAAAAAAAAAAADz/AHpflVT9vyI4javzmJ4eUOgyXMV/Olp2YDKVZIgBlNkSCTIgUkWgJ6y4YVF6ZWQ5lQqaLQFFhKAsiAU/OXeiYnTePWj6I5UAAAAAAAAAAAAAAAB57vQ/KavfH5UcPtT5zE8PKHQ5PmK/nS05hMkWAhgXpkSCTECsiYCXqX6BdMqLwIkOKCkiYCi4lABAmnqhPBL1mOi7j6JHByspJQAAAAAAAAAAAAAADzreN32mr+b6HC7R+axO90eV5mvc13IMLV7ocRqKTRaBamiJE8kjULmXgJLBkEVkMgishyZUUmiYCrFgAQyRamsyJ4JesU3ku5fA+h14Q5W3GViyAAAAAAAAAAAAAAAcfieA1alarUTpWlOTV5TTt1ejwOXzWysfFxr31rvnrn0bjBzmHTDrXSd0fnS020YfKGrj7G39DXYmz8WnGY+vozK49bcGO9nfFHh7C3Y9OXBbo9WRHsrHKg6ns7tbIn9PeepHLhaezPs95acpeOmEe0hiVKD7B7G0LcuFqOxSby5Ptv8AYvXLXtwmETiRDLp4VN9cPF/Y9f27Fnpj6+jznMVjrPhglTjT8ZfYt+1Y09MfX0V/V06pN/wSrxp/1S/8j9oxuuPr6I/WU6p/PFSeDVONPxl9is7Lxo6Y+vomM1TqkqWEz4w8ZfYj9txeuPr6Lfqadqv+D1ONPxl9i37bi/8AqPr6I/U06pRLBqnGn4y+w/bcWOmPr6H6mnVKI4XO6V4X43f2K/t+L1x9fRb9RXtelQVklwSO2iNIc5PFJKAAAAAAAf/Z',
  };
})
.controller('ScanShopListCtrl', function($scope, $stateParams, ScanShopList) {
  $scope.view = true;
  $scope.notView = true;
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