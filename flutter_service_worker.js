'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dc676e22afedb14a8c85f7571d2c31b",
".git/config": "8794ceb302d4ba5b350406c965307665",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3fd53e2ed595b1f60ad838100cd2581d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "774c9834ad05a98c875597913ef41e85",
".git/logs/refs/heads/master": "774c9834ad05a98c875597913ef41e85",
".git/logs/refs/remotes/origin/master": "e5309192048ed06cfcf1ef1684b8e101",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/672e8babef9e526a96996982a0ac50d258a685": "8101675962d9b70e39a54a1aa42b8156",
".git/objects/08/b6ac93f9c54848632c102d00ce7e03c54ccc4f": "5ba5640b3df15e4e4d601cdb77632644",
".git/objects/0b/8e658923a62d9442a432675aa5d686cfae36e3": "d3814a09db43fe5a249a0f32a17f797b",
".git/objects/0f/482596d0fab620d8f99a6b1db2c05e2c1bfcbf": "b11cdb92946f47d6ee096be0caff9868",
".git/objects/12/6dc119b8a362d612834b91bb7a61cf3a4ecb24": "f543d8f633fb945ff2dcb00d8169969a",
".git/objects/1b/7ed52b8333420af761911392a184b348d513f7": "6e32ec96b2628eadee1e9a00eb9bf500",
".git/objects/1f/1db22d0ca554bebb8fcafd720be95c3231af4c": "587721a2b83ecd26928cf7b887454d15",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/f635b0150b843ac82af095153bdd17bb0474ef": "f5f6d4ada2e8cd128a81e28de35cc88d",
".git/objects/2b/3850b37147ec1a1de9dcecc9337aefabb0dc80": "7c44365746773317e03f3ba7988e84aa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/7b503ed7de6ed44005eb8b9d3ac9a765e96526": "b030479e832080853d2259db3f6eb3cd",
".git/objects/51/85594dc7c230a1ae470fd26b6f76ef789e1a50": "f8e1eb69481039690fe99d400ecbd009",
".git/objects/52/3628eda6d0ac077a25e8d57f6013704fb21137": "2fbee9bfb5ef9ef963474cfa7cd252c6",
".git/objects/62/0b9bf80ce7c2856845d04af304e58c325d34f7": "3e540d64b29184f3ab6e327a6d45bcd5",
".git/objects/67/a1a2950d391312710e6f02694dcda5b7b3b5d4": "f62f908c4c6bae4ba1b74b5f18344a61",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6d/890fce6af86eba9ecef82c301d76bf84fb05f7": "611359d2b4882bcfb0c3e6010382484e",
".git/objects/73/a686ea04aa20f1f2a4473b5006d1c86b5d821c": "2392de9ff701c4990bc8bb0f173af410",
".git/objects/75/c0106e4b62d404b3b7054e9823a58b955ce9f9": "46b93010da91062444936143bd6219ae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/4daad245055859c4e1231747dcc814bd1910e4": "70f4b7cf755d6922ff1bcb9d17fdbe80",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d329e4ab208d5039a71e2a6115686c86ac9cec": "f08900b1516ad54d3c22733cec192c6f",
".git/objects/b0/942d1f3b2485027f68eabd7ea4e7fb44803280": "58b7757de29c819c09c15b02557a6a39",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/8e254bc234d8a88f25df12e3540cb4774aeee4": "038d5dc3c7e1418e3edaa3024e628b70",
".git/objects/cc/26dcab6af4ac23d5c1d1bfeeac3ac091ff58e6": "47915afacc98355b385ab041fb1b4a46",
".git/objects/d7/2acdb86f334db5f548e0f7b347614bf1bf940f": "9f35a8dca29ecad658bfa8f77a2bc4e8",
".git/objects/da/2798aad973b51445cbb64b30f094a23bf8c731": "1f3d0770b91e333683421795cd1903be",
".git/objects/dd/a85d0e650ac2f22c1637976dbde015651cd79a": "714493768d3b856bcbcbf724a8fdaa59",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/82fe64c83569ea58501836fb84a51266628b13": "1daa0aac9387255be2778026681c61b5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/5a1276cfa5cf09478b796f990ec7e8f903543b": "bfeb82a2d0062b201565424cf96e1802",
".git/objects/fb/6f8b95fa53a98a0e0bab18432dab9c19fa3d16": "3096be437e87dfce5f18032697e51b98",
".git/refs/heads/master": "acee0437896c57cf8796c92acb6ff926",
".git/refs/remotes/origin/master": "acee0437896c57cf8796c92acb6ff926",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "85c1b5053bddb2c196d50b4d708f4f53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e9be27593a3808b235e6117f2c903483",
"/": "e9be27593a3808b235e6117f2c903483",
"main.dart.js": "41d8b5e3ded58eb3b4d0dba029d0d5a5",
"manifest.json": "d81d43207f4e0c06cd12f3efce7d8bb7",
"version.json": "d442895564faadfe8a9425cb5e95a949"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
