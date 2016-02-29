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
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Roots Kids",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_02",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Rosedale",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_03",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "St. Clair",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_04",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Roots Central",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_05",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Bloor Street",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_06",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Brookfield Place",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_07",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Home Store",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_08",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Orfus Road - Factory Outlet",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_09",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Yorkdale",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "ROOTS_CA_10",
                "retailer_code": "ROOTS_CA",
                "retailer_name": "Roots",
                "brand_logo_url": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                "brandTagUrl": "https://www.roots.com/on/demandware.static/Sites-RootsCA-Site/-/en_CA/images/stoLocR.png",
                "storeName": "Stockyards",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "EDDIEBAUER_CA_01",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/green.png",
                "storeName": "Toronto Eaton Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "EDDIEBAUER_CA_02",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/green.png",
                "storeName": "Shops at Don Mills",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "EDDIEBAUER_CA_03",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/green.png",
                "storeName": "Sherway Gardens",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "EDDIEBAUER_CA_04",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/green.png",
                "storeName": "Fairview Mall",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "EDDIEBAUER_CA_05",
                "retailer_code": "EDDIEBAUER_CA",
                "retailer_name": "Eddie Bauer",
                "brand_logo_url": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/green.png",
                "storeName": "Square One Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_01",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Bloor Street West",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_02",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Toronto Eaton Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_03",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Queen Street West",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_04",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Dufferin Mall",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_05",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Yorkdale Shopping Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "HNM_CA_06",
                "retailer_code": "HNM_CA",
                "retailer_name": "H AND M",
                "brand_logo_url": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0000/5239/brand.gif?itok=qQ_Xd2Mr",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/red.png",
                "storeName": "Sherway Garden",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_01",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Eaton Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_02",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Yorkdale Shoping Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_03",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Scarborough Town Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_04",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Eglington Town Centre",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_05",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Stockyards",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_06",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Square One",
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
                "distance": "1.5 Km"
            },
            {
                "@store_code": "OLDNAVY_CA_07",
                "retailer_code": "OLDNAVY_CA",
                "retailer_name": "OLD NAVY",
                "brand_logo_url": "https://www.savvybeaver.ca/Store/images/logo_s/564d641f5b9a802760a6bdec.jpg",
                "brandTagUrl": "http://maps.google.com/mapfiles/ms/icons/blue.png",
                "storeName": "Erin Mills Town Centre",
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
                "distance": "1.5 Km"
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
  var scanShopList = {
    "PRODUCTS": {
        "RETAILER": [
            {
                "@retailerCode": "ROOTS_CA",
                "PRODUCT": [
                    {
                        "productSku": "19020103",
                        "desc": "Alex Hoody Pendleton",
                        "price": "678.00",
                        "expectedPrice": "300.00",
                        "currency": "CAD",
                        "color": "GREY",
                        "size": "2,4,6",
                        "status": {
                          "description": "waiting",
                          "color": "#52D555"
                        },
                        "pictUrl": "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dw4e8e0d4a/19020103_W06_a.jpg?sw=962&sh=962&sm=fit",
                        "featureMthod": "TEXT",
                        "featureText": "Introducing Pendleton X Roots.This season Roots is proud to introduce our newest collaboration with Pendleton Woolen Mills.This collaboration embodies our core values of quality and integrity and is inspired by the decades of family legacy each company shares. Located in Portland, Oregon Pendleton mills has a long heritage of creating superior fabric for over 150 years. The intricate patterns of Pendleton's iconic designs and the warmth and beauty of American made Horween Leather along with our classic Africa Tribe make our collection unique and timeless.The Alex Hoody is the quintessential jacket, combining what you love most about our hoodies with the sleek style of a leather jacket.ABOUTDesigned and handcrafted in CanadaMade from 82% Wool / 18% Cotton and 100% genuine Tribe leather trimZip Front2 Front Zip PocketsFully LinedKnit Cuffs And WaistSIZE & FITModel is wearing: small; dress: 4Model Measurements: Height: 5'9; bust: 34B; waist: 25; hips: 35LOOK AFTER MEDry clean only",
                        "retailerName": "Roots",
                        "retailerLogo": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png"
                    },
                    {
                        "productSku": "16010237",
                        "desc": "Women Cabin Slipper",
                        "price": "88.50",
                        "expectedPrice": "50.00",
                        "currency": "CAD",
                        "color": "TAN",
                        "size": "5,6,7,8,9,10",
                        "pictUrl": "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dwb684f584/16010237_Y24_a.jpg?sw=962&sh=962&sm=fit",
                        "featureText": "A hand sewn moccasin with raw hide lace detail.Features Made from 100% genuine suede Wool sherpa lining for warmth and comfort Thin rubber outsole",
                        "retailerName": "Roots",
                        "retailerLogo": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                        "status": {
                          "description": "waiting",
                          "color": "#F2BA23"
                        },
                    },
                    {
                        "productSku": "14013548",
                        "desc": "Digital Print Toque",
                        "price": "30.00",
                        "expectedPrice": "10.00",
                        "currency": "CAD",
                        "retailerName": "Roots",
                        "retailerLogo": "http://demandware.edgesuite.net/aacg_prd/on/demandware.static/Sites-RootsCA-Site/-/default/dw6a14487d/images/header/Roots_logo_updated.png",
                        "color": "FATIGUE,MULTI",
                        "status": {
                          "description": "closed",
                          "color": "#0000FF"
                        },
                        "size": "ONE SIZE",
                        "pictUrl": "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/AACG_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dw12858fc9/14013548_A24_b.jpg?sw=2000&sh=2000&sm=fit",
                        "featureText": "This toque is  to capture the feeling of the great outdoors. Mix and match with our sweats for an added pop of colour. Wear brim up or down, dependable to ones preference."
                    }
                ]
            },
            {
                "@retailer_code": "EDDIEBAUER_CA",
                "PRODUCT": [
                    {
                        "productSku": "i06 792 8723",
                        "desc": "Women's Sun Valley Down Parka",
                        "price": "188.30",
                        "expectedPrice": "100.00",
                        "currency": "CAD",
                        "retailerName": "Eddie Bauer",
                        "retailerLogo": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                        "color": "Black,Carbon,Dk Loden,Driftwood,Navy,Plum",
                        "status": {
                          "description": "waiting",
                          "color": "#F2BA23"
                        },
                        "size": "XS,S,M,L,XL,XXL",
                        "pictUrl": "http://eddiebauer.scene7.com/is/image/EddieBauer/0068723_400C1?$xlarge$",
                        "featureText": "Besides warmth, our parka provides extra weather protection with exclusive StormRepel&reg; durable water-repellent (DWR) finish. Water beads on the nylon/polyester/cotton shell rather than soaking into the fabric. 650 fill Premium Down for exceptional warmth without weight. Metallic cross dyeing process gives the fabric a subtle, iridescent sheen. Two-way front zipper adjusts easily when you're active or sitting.\"Now there's no weather that will keep me indoors! With the removable hood, this coat is a must have."
                    },
                    {
                        "productSku": "i20 792 6191",
                        "desc": "Women's Eddie Bauer Solstice II Boot",
                        "price": "108.00",
                        "expectedPrice": "50.00",
                        "currency": "CAD",
                        "retailerName": "Eddie Bauer",
                        "retailerLogo": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/12962.png",
                        "color": "Black,Driftwood",
                        "status": {
                          "description": "closed",
                          "color": "#FF0000"
                        },
                        "size": "6M,6.5M,7M,7.5M,8M,9M,9.5M,10M,11M",
                        "pictUrl": "http://eddiebauer.scene7.com/is/image/EddieBauer/0206191_526C1?$xlarge$",
                        "featureText": "Enjoy dry, warm excursions all winter long. Constructed with waterproof synthetic nubuck leather plus ThermaFill&reg; 200 insulation, this boot provides hours of comfort, even as temperatures drop. Grippy MultiPitch Pro outsole features an exclusive lug design using Vibram&reg; XS Trek rubber compound for best-in-class performance, durability, and exceptional traction on varied terrain."
                    }
                ]
            }
        ]
    }
};

  function all() {
    return scanShopList.PRODUCTS.RETAILER[0].PRODUCT.concat(scanShopList.PRODUCTS.RETAILER[1].PRODUCT);
  };
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

  function filterByProductSku(productSku) {
    return function(obj) {
      if (obj.productSku === productSku){
        return true;
      }
    }
  };
  return {
    waiting: function() {
      return all().filter(filterByWaitingStatus);
    },
    closed: function() {
      return all().filter(filterByClosedStatus);
    },
    get: function(productSku) {
      return all().filter(filterByProductSku(productSku))[0];
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