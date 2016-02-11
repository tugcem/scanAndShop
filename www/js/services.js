angular.module('starter.services', [])

.factory('Stores', function($http) {
  var stores = {
    "STORES": {
        "STORE": [
            {
                "@store_code": "ROOTS_CA_01",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Roots Kids",
                "address": {
                    "street": "89 Bloor Street West",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M5S 1M1",
                    "state": "ON"
                },
                "phone": "4169258900",
                "longitude": "-79.39047029999999",
                "latitude": "43.6692857",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_02",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Rosedale",
                "address": {
                    "street": "1073 Yonge Street",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M4W 2L2",
                    "state": "ON"
                },
                "phone": "4169271989",
                "longitude": "-79.3899764",
                "latitude": "43.67887959999999",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_03",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "St. Clair",
                "address": {
                    "street": "1485 Yonge Street",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M4T 1Z2",
                    "state": "ON"
                },
                "phone": "4169674499",
                "longitude": "-79.3941979",
                "latitude": "43.6888259",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_04",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Roots Central",
                "address": {
                    "street": "220 Yonge Street",
                    "unitno": "C32 Level3",
                    "city": "Toronto",
                    "post_code": "M5B 2H1",
                    "state": "ON"
                },
                "phone": "4165939640",
                "longitude": "-79.3800603",
                "latitude": "43.6536106",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_05",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Bloor Street",
                "address": {
                    "street": "80 Bloor Street West",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M5S 2V1",
                    "state": "ON"
                },
                "phone": "4163233289",
                "longitude": "-79.39017679999999",
                "latitude": "43.6698634",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_06",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Brookfield Place",
                "address": {
                    "street": "181 Bay Street",
                    "unitno": "S-112",
                    "city": "Toronto",
                    "post_code": "M5J 2T3",
                    "state": "ON"
                },
                "phone": "4163640582",
                "longitude": "-79.3787906",
                "latitude": "43.6471458",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_07",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Home Store",
                "address": {
                    "street": "1400 Castlefield Ave",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M6B 4C4",
                    "state": "ON"
                },
                "phone": "4167813574",
                "longitude": "-79.4648845",
                "latitude": "43.6986554",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_08",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Orfus Road - Factory Outlet",
                "address": {
                    "street": "120 Orfus Rd",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M6A 1L9",
                    "state": "ON"
                },
                "phone": "4167818729",
                "longitude": "-79.46687849999999",
                "latitude": "43.7180267",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_09",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Yorkdale",
                "address": {
                    "street": "3401 Dufferin Street",
                    "unitno": "117",
                    "city": "Toronto",
                    "post_code": "M6A 2T9",
                    "state": "ON"
                },
                "phone": "4167833371",
                "longitude": "-79.4547427",
                "latitude": "43.7248438",
                "distance": "1.5"
            },
            {
                "@store_code": "ROOTS_CA_10",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brand_tag_url": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "store_name": "Stockyards",
                "address": {
                    "street": "45 Gunns Rd",
                    "unitno": "101",
                    "city": "Toronto",
                    "post_code": "M6N 0A3",
                    "state": "ON"
                },
                "phone": "4166041707",
                "longitude": "-79.4720055",
                "latitude": "43.6728418",
                "distance": "1.5"
            },
            {
                "@store_code": "EDDIEBAUER_CA_01",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "http://photos.prnewswire.com/prn/20141223/166032LOGO",
                "brand_tag_url": "http://www.eddiebauer.com/static/img/pin_graphic.gif",
                "store_name": "Toronto Eaton Centre",
                "address": {
                    "street": "220 Yonge Street",
                    "unitno": "A046B",
                    "city": "Toronto",
                    "post_code": "M5B 2H6",
                    "state": "ON"
                },
                "phone": "4166420638",
                "longitude": "-79.379605",
                "latitude": "43.653289",
                "distance": "1.5"
            },
            {
                "@store_code": "EDDIEBAUER_CA_02",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "http://photos.prnewswire.com/prn/20141223/166032LOGO",
                "brand_tag_url": "http://www.eddiebauer.com/static/img/pin_graphic.gif",
                "store_name": "Shops at Don Mills",
                "address": {
                    "street": "32 Karl Fraser Road",
                    "unitno": "CRU J10",
                    "city": "North York",
                    "post_code": "M3C 0E8",
                    "state": "ON"
                },
                "phone": "4166402291",
                "longitude": "-79.344775",
                "latitude": "43.733814",
                "distance": "1.5"
            },
            {
                "@store_code": "EDDIEBAUER_CA_03",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "http://photos.prnewswire.com/prn/20141223/166032LOGO",
                "brand_tag_url": "http://www.eddiebauer.com/static/img/pin_graphic.gif",
                "store_name": "Sherway Gardens",
                "address": {
                    "street": "25 The West Mall",
                    "unitno": "78",
                    "city": "Etobicoke",
                    "post_code": "M9C 1B8",
                    "state": "ON"
                },
                "phone": "4166229531",
                "longitude": "-79.561445",
                "latitude": "43.610471",
                "distance": "1.5"
            },
            {
                "@store_code": "EDDIEBAUER_CA_04",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "http://photos.prnewswire.com/prn/20141223/166032LOGO",
                "brand_tag_url": "http://www.eddiebauer.com/static/img/pin_graphic.gif",
                "store_name": "Fairview Mall",
                "address": {
                    "street": "1800 Sheppard Ave. East",
                    "unitno": "1012",
                    "city": "Willowdale",
                    "post_code": "M2J 5A7",
                    "state": "ON"
                },
                "phone": "4164909444",
                "longitude": "-79.345215",
                "latitude": "43.775492",
                "distance": "1.5"
            },
            {
                "@store_code": "EDDIEBAUER_CA_05",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "http://photos.prnewswire.com/prn/20141223/166032LOGO",
                "brand_tag_url": "http://www.eddiebauer.com/static/img/pin_graphic.gif",
                "store_name": "Square One Centre",
                "address": {
                    "street": "100 City Centre Dr",
                    "unitno": null,
                    "city": "Mississauga",
                    "post_code": "L5B 2C9",
                    "state": "ON"
                },
                "phone": "9053660086",
                "longitude": "-79.641458",
                "latitude": "43.59024",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_01",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Bloor Street West",
                "address": {
                    "street": "15 Bloor Street West",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M4W 1A3",
                    "state": "ON"
                },
                "phone": "4169203592",
                "longitude": "-79.3898907",
                "latitude": "43.6700673",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_02",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Toronto Eaton Centre",
                "address": {
                    "street": "1 Dundas Street West",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M5G 1Z3",
                    "state": "ON"
                },
                "phone": "4165930064",
                "longitude": "-79.3841176",
                "latitude": "43.6554038",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_03",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Queen Street West",
                "address": {
                    "street": "427 Queen Street West",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M5V 2A5",
                    "state": "ON"
                },
                "phone": "4165930167",
                "longitude": "-79.3976218",
                "latitude": "43.6486395",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_04",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Dufferin Mall",
                "address": {
                    "street": "900 Dufferin Street",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M6H 4B1",
                    "state": "ON"
                },
                "phone": "4165319618",
                "longitude": "-79.4352469",
                "latitude": "43.6560132",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_05",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Yorkdale Shopping Centre",
                "address": {
                    "street": "3401 Dufferin Street",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M6G 3A1",
                    "state": "ON"
                },
                "phone": "4162563997",
                "longitude": "-79.4294785",
                "latitude": "43.6732845",
                "distance": "1.5"
            },
            {
                "@store_code": "HNM_CA_06",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brand_tag_url": "http://4.bp.blogspot.com/-UY_5--dpg0U/U5tgb3tixJI/AAAAAAAAGT4/Kzc4BKJbqPA/s1600/location-icon.png",
                "store_name": "Sherway Garden",
                "address": {
                    "street": "25 The West Mall",
                    "unitno": null,
                    "city": "Etobicoke",
                    "post_code": "M9C 1B8",
                    "state": "ON"
                },
                "phone": "4166211545",
                "longitude": "-79.55686709999999",
                "latitude": "43.6112889",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_01",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Eaton Centre",
                "address": {
                    "street": "260 Yonge Street",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M5B 2L9",
                    "state": "ON"
                },
                "phone": "4165930065",
                "longitude": "-79.3805654",
                "latitude": "43.6546609",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_02",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Yorkdale Shoping Centre",
                "address": {
                    "street": "1 Yorkdale Road",
                    "unitno": null,
                    "city": "Toronto",
                    "post_code": "M6A 3A1",
                    "state": "ON"
                },
                "phone": "4167879384",
                "longitude": "-79.44917819999999",
                "latitude": "43.7251234",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_03",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Scarborough Town Centre",
                "address": {
                    "street": "300 Borough Drive",
                    "unitno": null,
                    "city": "Scarborough",
                    "post_code": "M1P 4P5",
                    "state": "ON"
                },
                "phone": "4162791143",
                "longitude": "-79.2576385",
                "latitude": "43.7761307",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_04",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Eglington Town Centre",
                "address": {
                    "street": "6 Lebovic Avenue",
                    "unitno": null,
                    "city": "Scarborough",
                    "post_code": "M1L 2L8",
                    "state": "ON"
                },
                "phone": "4167577806",
                "longitude": "-79.2929338",
                "latitude": "43.7243287",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_05",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Stockyards",
                "address": {
                    "street": "30 Weston Road",
                    "unitno": "125",
                    "city": "Toronto",
                    "post_code": "M6N 5H3",
                    "state": "ON"
                },
                "phone": "4167610021",
                "longitude": "-79.468469",
                "latitude": "43.6729625",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_06",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Square One",
                "address": {
                    "street": "100 City Centre Drive",
                    "unitno": null,
                    "city": "Mississauga",
                    "post_code": "L5B 1M7",
                    "state": "ON"
                },
                "phone": "9052704841",
                "longitude": "-79.6423516",
                "latitude": "43.5931214",
                "distance": "1.5"
            },
            {
                "@store_code": "OLDNAVY_CA_07",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brand_tag_url": "http://geisingeradmi.org/site/assets/files/5464/map-pin.320x300.png",
                "store_name": "Erin Mills Town Centre",
                "address": {
                    "street": "5100 Erin Mills Parkway",
                    "unitno": null,
                    "city": "Mississauga",
                    "post_code": "L5M 4Z5",
                    "state": "ON"
                },
                "phone": "9058280521",
                "longitude": "-79.7115283",
                "latitude": "43.5583681",
                "distance": "1.5"
            }
        ]
    }
};
//   var stores;
//   var url = "/stores.json";
//   if(ionic.Platform.isAndroid()){
//       url = "/android_asset/www/stores.json";
//   }
//   return {
//     all: function() {
//       return $http({method: 'GET', url: url});
//     },
//     get: function(storeId) {
//       for (var i = 0; i < stores.length; i++) {
//         if (stores[i].id === parseInt(storeId)) {
//           return stores[i];
//         }
//       }
//       return null;
//     }
//   };

  return {
    all: function() {
      return stores.STORES.STORE;
    }
  }
})

.factory('ScanShopList', function() {
  // Some fake testing data
  var scanShopList = [{
    id: 0,
    store: {
      name: 'Roots'
    },
    description: 'Build a School In Africa T-shirt',
    uid: '(5198886485) ',
    image: 'data:image/jpeg;base64,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',
    price: '2.95',
    expectedPrice: '14.95',
    status: {
      description: 'waiting',
      color: '#52D555'
    }
  }, {
    id: 1,
    store: {
      name: 'Best Buy'
    },
    description: 'Samsung 65" 4K Ultra HD Led Smart TV',
    uid: '(UN51988FK86S485)',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZ7KqjqqUW14lWbm0LNhiYCzOoYtNF4hAngrgN8jL6APxfzr0Uig',
    price: '1.999',
    expectedPrice: '2.999',
    status: {
      description: 'waiting',
      color: '#52D555'
    }
  }, {
    id: 2,
    store: {
      name: 'Roots'
    },
    description: 'Suma Flannel Tunic',
    uid: '(02020343) ',
    image: 'data:image/jpeg;base64,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',
    price: '78.00',
    expectedPrice: '50.00',
    status: {
      description: 'closed',
      color: '#FF0000'
    }
  }, {
    id: 3,
    store: {
      name: 'Roots'
    },
    description: 'Wmns Winter Sheepskin',
    uid: '(16020238) ',
    image: 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dwb4abdd98/16020238_Y20_b.jpg?sw=962&sh=962&sm=fit',
    price: '6.999',
    expectedPrice: '4.00',
    status: {
      description: 'closed',
      color: '#0000FF'
    }
  }, {
    id: 4,
    store: {
      name: 'H&M'
    },
    description: '5-pocket jeans in washed superstretch twill with a denim look. ',
    uid: '(HM5198886485) ',
    image: 'http://lp.hm.com/hmprod?set=key[source],value[/model/2015/B00%200323203%20003%2057%200122.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=5&call=url[file:/product/quicklook/large]',
    price: '3.99',
    expectedPrice: '1.99',
    status: {
      description: 'waiting',
      color: '#F2BA23'
    }
  }];

  function filterByWaitingStatus(obj) {
    if (obj.status.description === "waiting"){
      return true;
    }
  };

  function filterByClosedStatus(obj) {
    if (obj.status.description === "closed"){
      return true;
    }
  };

  return {
    all: function() {
      return scanShopList;
    },
    waiting: function() {
      return scanShopList.filter(filterByWaitingStatus);
    },
    closed: function() {
      return scanShopList.filter(filterByClosedStatus);
    },
    get: function(itemId) {
      for (var i = 0; i < scanShopList.length; i++) {
        if (scanShopList[i].id === parseInt(itemId)) {
          return scanShopList[i];
        }
      }
      return null;
    }
  };
})



.factory('Customer', function() {
  var customer = {
    "CONSUMER": {
        "id": "1234567890",
        "secret_key": "ABCDEFGH23EFD34YZS",
        "name": "John DOE",
        "email": "john.doe@gmail.com",
        "emailVer": false,
        "phone": "4161112233",
        "phoneVer": "true",
        "dob": "1974-02-14",
        "addrStreet": "89 KING ST E",
        "addrUnitno": null,
        "addrCity": "Toronto",
        "addrPostCode": "M2V 1B1",
        "addrState": "Ontario",
        "country": "CA"
      }
    };
  return {
    get: function() {
      return customer.CONSUMER;
    }
  };

})
.factory('Yelp', function($http, $q) {
  return {
    search: function(position) {
      return $http({
        method: "get",
        url: 'https://angular-google-maps-example.herokuapp.com/api/v1/yelp/search',
        params: {
          limit: 10,
          radius_filter: 500,
          sort: 1,
          ll: [position.coords.latitude, position.coords.longitude].join()
        }
      });
    }
  };
});