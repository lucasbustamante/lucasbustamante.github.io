'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "45943fcfbd5058203ab4d51ddf718412",
"assets/assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/assets/images/apps/1.jpg": "f13f83dcf15baf472f4c30b97dd17c26",
"assets/assets/images/apps/99.png": "08c40b0fdad933d84e9b274b941c894b",
"assets/assets/images/apps/ame.png": "f8b47aedddc520b81627905e256d9ba5",
"assets/assets/images/apps/background1.json": "43d298a3af5c3c285cee87b410f68aaa",
"assets/assets/images/apps/background2.json": "7ba3530cf5665625ece15d2c5c715665",
"assets/assets/images/apps/background3.json": "8fe0775ec10ba0b7a616a8ae7a3d78ae",
"assets/assets/images/apps/background4.json": "38b1f6330776f6ef0d3094c431bb26ed",
"assets/assets/images/apps/background5.json": "7dc87b189e206597efc806d253f1e6c2",
"assets/assets/images/apps/c6.png": "91d9bba0683feadd73767087b6e5d351",
"assets/assets/images/apps/caixa.png": "924164f8cd8e2ade5dd993b85655fbb2",
"assets/assets/images/apps/facebook.png": "d408974556c0afc8a118c92db9babca2",
"assets/assets/images/apps/flutter.png": "e4c14189ce38e29a1d1cce3a5a4019b9",
"assets/assets/images/apps/gif.gif": "d96a3495f56fe298d2765ade73d2d440",
"assets/assets/images/apps/github.png": "1524a0d688a355fa873cebf069b00d57",
"assets/assets/images/apps/instagram.png": "4a0d3773d12972352608e6f9abf5701b",
"assets/assets/images/apps/itau.png": "a6aef168eb6cca7ea55fd5db1a7b1ccf",
"assets/assets/images/apps/linkedin.png": "cf4b563264b631523510aa7ecd1c6ccc",
"assets/assets/images/apps/logo.png": "3e1848b7d931211e945e97955e24e9d0",
"assets/assets/images/apps/mercadopago.png": "71e2bd231ef71a4dcc738f1dafee173e",
"assets/assets/images/apps/picpay.png": "1f74f48fd4aa834681ddcdcab0aa11f7",
"assets/assets/images/apps/pix.png": "36c1e05e92ba2aa1168af3920d0b30bd",
"assets/assets/images/apps/whatsapp.png": "fd8dbec1ddce7f88be6b35df88c9ad8e",
"assets/assets/images/arrow_dark.json": "85e455b3378aded3798b3854a2ff1286",
"assets/assets/images/arrow_light.json": "acff55b8b778dd472d553b0d92e8a7e2",
"assets/assets/images/cell.png": "9e9200a79b15c5a7bcc616b6ad077b6a",
"assets/assets/images/cell.psd": "1a3c77ca0338eebcf371e4766f2de3e5",
"assets/assets/images/flutter.png": "e4c14189ce38e29a1d1cce3a5a4019b9",
"assets/assets/images/hi_dark.json": "9a6924e8158f4e9ac672952d309739da",
"assets/assets/images/hi_light.json": "8d912664c3fac11fe3acd94c1877cad2",
"assets/assets/images/profile.jpg": "f13f83dcf15baf472f4c30b97dd17c26",
"assets/assets/images/project1.png": "4b8c58723ac1e25b9526f95bdc82d325",
"assets/assets/images/project2.png": "74bd3f564d8047d70051912252b38afd",
"assets/assets/images/project3.png": "b40fe2ec999e88249fb3e03c89f5455f",
"assets/assets/images/project4.png": "bad37254f3d96d6d7b99ab60f43195de",
"assets/assets/images/projectMobi1.png": "973566f3b2c105ab94ed7dd3eab25eb7",
"assets/assets/images/projectMobi2.png": "3f00edecd2939386773294129e1a346d",
"assets/assets/images/projectMobi3.png": "e0d3f36dd9b3d2243e59ac813797d9a7",
"assets/assets/images/projectMobi4.png": "b9358af5c9ea4ad65867ceaf1c6a6bd5",
"assets/assets/svg/github.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/svg/instagram.svg": "341a67c538d67f9ce92005cf14255dc2",
"assets/assets/svg/linkedIn.svg": "5b238434e2862c877f08572b96c0ef7b",
"assets/assets/svg/whatsapp.svg": "c45df616ed13f1df0839e87c3704555d",
"assets/FontManifest.json": "e9f5284d2904bdc29f1b10498b85658f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c8291d7da2dfa692e6ea660b053ac1ac",
"assets/packages/flutter_neumorphic_null_safety/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "014a9f30d7da9d3eee55e490af175e28",
"/": "014a9f30d7da9d3eee55e490af175e28",
"main.dart.js": "58928c1cef872e46a07e41d68faecf41",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
