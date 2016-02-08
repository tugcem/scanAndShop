angular.module('starter.services', [])

.factory('Stores', function() {
  // Some fake testing data
  var stores = [{
    id: 0,
    storeLocation: 'Conestoga Mail',
    address: '550 King St N, Waterloo, ON N2L 5W6',
    tel: '(519) 888-6485',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Roots_logo.svg/1280px-Roots_logo.svg.png',
    distance: '0.5'

  }, {
    id: 1,
    storeLocation: '17600 Yonge Street',
    address: 'Newmarket Toronto, ON L3Y 4ZI',
    tel: '(519) 895-0625',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRK4zbAd5ugIZExV9jm7owT4mYJBGyQi_HhJPX4LkvZ7pw_vVkch2X386Ft',
    distance: '0.9'
  }, {
    id: 2,
    storeLocation: '550 King St. N, Unit H16',
    address: 'Waterloo, ON N2L 5W6',
    tel: '(519) 772-0341',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t93Epyz4ya50mRGFKfdhxBMcXQgmHNeUZvn2fc1Dgjqca7Pq30br-A96',
    distance: '1.3'
  }, {
    id: 3,
    storeLocation: '1400 Ottawa St. S',
    address: 'Kitchener, ON N2E 4E2',
    tel: '(519) 568-7463',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQphNuvomd7qyps-RCSvy_QxTxO707LL91OtrShrxbzjFeYfnIWCHCJYgOIlA',
    distance: '1.9'
  }, {
    id: 4,
    storeLocation: '550 King Street North',
    address: 'Waterloo, ON N2L 5W6',
    tel: '(519) 884-6990',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3SmFNmG0EpmrHRBpfbiuvHJfElu0fn12AlS86JcB4ZH3aTx--Mc7PSDQ',
    distance: '2.2'
  }];

  return {
    all: function() {
      return stores;
    },
    get: function(storeId) {
      for (var i = 0; i < stores.length; i++) {
        if (stores[i].id === parseInt(storeId)) {
          return stores[i];
        }
      }
      return null;
    }
  };
});