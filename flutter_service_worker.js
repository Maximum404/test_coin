'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3efedeb0e33169be8eb9c9ed97e810d8",
"assets/AssetManifest.bin.json": "8022e59247a2844a1f5a0e08575c1b62",
"assets/AssetManifest.json": "d6850510372ca2de9991f73b84c8d9cf",
"assets/assets/fonts/FontsFree-Net-ffg7.ttf": "a585f9edb2b9618acc932ab8d4bf9253",
"assets/assets/images/boost/3d-mini-gamepad.png": "2d22041b33ea2d3f3c32368b7ad9b125",
"assets/assets/images/boost/guru.png": "b6f7ff773a016b2bff7e43c7322d243e",
"assets/assets/images/boost/tank.png": "eed6bea34fd530a35f44e6f72dcd0279",
"assets/assets/images/bottom_panel/btn_1_1.png": "402dc3676df2fb9b3e25668b3934946d",
"assets/assets/images/bottom_panel/btn_1_2.png": "1e3b06cd78539ee1fd26887a30d8eeda",
"assets/assets/images/bottom_panel/btn_2_1.png": "66cadc5278bb4d32475d254d6b7e9543",
"assets/assets/images/bottom_panel/btn_2_2.png": "aa267f2fec3622540792a58d24989d2c",
"assets/assets/images/bottom_panel/btn_3_1.png": "0c9b1159c9cf4261d6378263c427df11",
"assets/assets/images/bottom_panel/btn_3_2.png": "5ec6bfc5f8646678de3b346f3583f76c",
"assets/assets/images/bottom_panel/btn_4_1.png": "4514aa3170b5b0a1377d65e91ec7f91d",
"assets/assets/images/bottom_panel/btn_4_2.png": "c2c5b1ad122e0b37929a555b2ddafe82",
"assets/assets/images/bottom_panel/btn_5_1.png": "b56eb77f0c8c6ed42182907fa0373ed9",
"assets/assets/images/bottom_panel/btn_5_2.png": "f7b55d8fc47c9c98dab15659bccb3461",
"assets/assets/images/btn_0.png": "5fc0c5e17620a10a0d20bf08285b9340",
"assets/assets/images/enerje.png": "9b2e3c1ab1bc9544dffd9b3e3635bfd8",
"assets/assets/images/enerje.svg": "2e17252bd8438d0b038387ec3a91ffaf",
"assets/assets/images/fon.png": "5ef632296ce6eb3fa8016d77eec8f3ec",
"assets/assets/images/fon.svg": "61b55042f36263c7b5f89f746c43045d",
"assets/assets/images/Group%25206.png": "6c274fa4fade5a07cce7bd6f83e3b6f8",
"assets/assets/images/Group%252061.png": "72a68c201370ad4a44643db376c890f4",
"assets/assets/images/Group%252062.png": "6973fb94d6503cf7ebdb4f3ecf29b9c5",
"assets/assets/images/Group%252063.png": "17f7da052ba13ddb576177fb5a0cf292",
"assets/assets/images/Group%252064.png": "87cbcb124807e137b99560a1ea2ccc73",
"assets/assets/images/legendary.png": "6ddad965ffd0ab32ce0cdf97e557dfff",
"assets/FontManifest.json": "1201c31a2a6e81ecf9375443881071a1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9dc40fe98fc42c5f48498f1955bcd3b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cbf78d0477908c7563b76354c2a32f09",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "38001f6efd7ffd8419a8cb38e027ad39",
"/": "38001f6efd7ffd8419a8cb38e027ad39",
"main.dart.js": "02125474ea2df7a542a3c3ba8546ba52",
"manifest.json": "aa0c3fbdc7aaa3b7d15bc59a656478fb",
"version.json": "006d350fb238949f7c617ccca89f6dc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
