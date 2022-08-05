'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0618f2a83c113b1279cf78ce27dd3717",
".git/config": "e14b9449f3ca343a663fe3296832e03a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d852ece90e8a311dd2e8a018e8485481",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "157bc6bec04f214a24cfd086505639b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92abcbe39c4a3cc77737515d8d33a958",
".git/logs/refs/heads/main": "1b252ae7d8f89b8276a0f77fa64afa19",
".git/logs/refs/remotes/origin/main": "0119b3361789c6ba13e652714ba88b20",
".git/objects/00/fdd5ad1b786e58ff4c8544b34c9dace1133e96": "a1314d0f2c5fd4649b767054f0d4a51d",
".git/objects/01/d1c4a477991cdc1cb56fa115c0406e815c912b": "1af484bc2f63c85f3765c5183085e432",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/b15693da84f91b5165a02d9ca2c55b0bd460c3": "de557d7761cf814562a9183239acd752",
".git/objects/07/ebd161fb9dcc12969c380532e8003b4fddfc47": "59fcd6b08b4f7a5b74af624e25db3fa0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/5878237c290fe7dedf0c6cddaf88538e6c6c93": "98ee56b49bd935e3f87cbe02b0813dc9",
".git/objects/1c/75b21453964f8d7c689101fc9b1e2a9dfd5249": "f887c3902ad175144e55b735b239c56b",
".git/objects/24/01a3fb114c89587c6cf6dc0c272a4e5503ff2f": "c0bfe70436fa2452fc5bca191b4c6898",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/8fbbe019f75849095611dfea4c83746db9f2bb": "4104e910b518dfdb76a83563d104e249",
".git/objects/27/c81795ece64241cfcf5e4b10d610b921723d94": "86e403dc5f677edfe9f9ec0966900647",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/37/eb241b3f91197206d607cb8855637839f6f7fb": "b8ec22edd9a092537a674b331769fa73",
".git/objects/3d/4637a3d61d2ffcd2a69ad9c2cb73a0cf4ae034": "9effd5b07bc7cd1dada1536cf237749b",
".git/objects/42/3c49afec62f3744189f5c8643118eb01be6b39": "b12d7d070603dc4e723dae366b1f50fe",
".git/objects/46/2dbf2e28f05094cc532afd33de08f858dcf8be": "a1d84f139fc3119c9ecea65e4799da2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/1e0b4d0d0e3aa9a0fccee9d3c1adc2166f5293": "4d343de460071bbf9ca988e85505f454",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/6f8949a0c69a848fd4060faf16e4e8404efad7": "8c6372e65c6572886855feebc4b04317",
".git/objects/52/c64af7394863ae4b7f6653ad4cca7f5bf3520e": "cfdd7bfefb62be691410e900e6dedb24",
".git/objects/56/3bd0ede6e35d1d3443343d8322e0660173b5c8": "369b3c53e5539c4e3f5626eed329ca55",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/69/91eb63f1a833e74f2785ba4ba5aef606109771": "334126943461c4e57f30100c8719271c",
".git/objects/6c/432918f2a82fd4d499be44f08e4c5b1c21719a": "70fa9f6171ee93ae6c6d36cc0c728be1",
".git/objects/70/bc40903bea570d7baa686a6c3e98cb460f8da0": "4c36fb13a0a9296c6efb66a24c9b84af",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/524ded6b2ce297c0286aca5e291b4d6f72be12": "3d517a6d641ba6067a734f95ca33048f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/ce015e013b263d0f34951278d8713b630d9b98": "54c40aa62cb1ff80dea65b45ae8a8d61",
".git/objects/87/e2c2ec911ffdc689e93425e28ca2419778fca0": "ac76de5f9763caa55e92027bee8b62ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc1e89ae73cff2c73b6313c10ddeb4b73ddb4c": "41a19c5629aeda434eb44a020fc58fba",
".git/objects/8b/d6a347266203b1c97fe39af8b4266af8efdca5": "c55aa08db1d56c4042eb1946d87f591d",
".git/objects/8d/2868ea0c34a01012a9b111f1c112d1563a2e47": "d195985e1e7788ad201eeac615835740",
".git/objects/91/3152a53151168d4c461fda19f0172789c95ca0": "d16c8df08766a5252bf61182cc5f9f99",
".git/objects/9a/082166b70e7e28cd5cc488d4e4e3a21fde5a99": "1ea96d29f1af53646bf6d8d08d671112",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/1a5cd7723159139a138fe1de7029be134eb79e": "a5fa76faf35e57c1d940047cdd39ad2b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/1b996df1a5d1a4298e0656ddfda262a83b673c": "1f1068c09e637cf22fbe1bdfb73ca850",
".git/objects/b4/5dc43fccb6affe0e7d15e6c6a6186b0ad5c485": "c5c00a083d64c8b2b7bd550502ca2697",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/064dd56e11dba8a602dedff8137809ebda1c8f": "6219095c207387644814711958bda9bb",
".git/objects/bf/27c76d6935f7fd8645e8db6afaf47f2468a901": "76f315f7e9e7c58a877e1d98dc5c4a54",
".git/objects/c4/a8c8f9474c8d3bed9b85a7e110b68718d5cff4": "213e60188e5ec729fb808c965bcc1f77",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/465096a4e8e10cc705ba451d814bc40e6641e5": "afafb551c6948bfdf9472590471c8320",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2b5a03b5ebe146ffb8e8a594468c6acca3ebab": "a053da5da683862e80e35fc176e2e85d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9db6bd224eecb30359ad20d1bcc8f7514340bf": "ecca8d2d4cbcb88a564a2d07bd7daf00",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/009dc0e8d1b04777e1c4af31577a12a4a757f4": "268799063188b527dd3de8c4c5c15658",
".git/objects/fd/c3b7e86780e53c36c514035bbd3984c278b076": "185ae8482aae262edaf7617435ee3ab3",
".git/refs/heads/main": "772ffcaef663cf45f92ec06748bfcc4a",
".git/refs/remotes/origin/main": "772ffcaef663cf45f92ec06748bfcc4a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2d7236aca695ba4cd213a3478e55d740",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "465cc5a3072f1aa193adccb302141a2a",
"/": "465cc5a3072f1aa193adccb302141a2a",
"main.dart.js": "69315cbe0f99cc1b67eb81e8f165b70a",
"manifest.json": "ecefa2096116f3807786f249dc26400d",
"version.json": "9e23208eff9bdc083f50e571bcf5621a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
