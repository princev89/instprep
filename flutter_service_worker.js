'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6aa658e138d698555d04cee818f5a302",
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
".git/index": "d360ca2b3817f48cf7324719437494ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b529a8bcc5f799566d4faddd6cd45003",
".git/logs/refs/heads/master": "b529a8bcc5f799566d4faddd6cd45003",
".git/logs/refs/remotes/origin/master": "7c615811ab57b20903e3741e45663cf4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/672e8babef9e526a96996982a0ac50d258a685": "8101675962d9b70e39a54a1aa42b8156",
".git/objects/06/777b444120a44abecaedfd2d8b9efaf2f8658d": "59c9bb105b75feb699a4ca3a57a983c3",
".git/objects/08/b6ac93f9c54848632c102d00ce7e03c54ccc4f": "5ba5640b3df15e4e4d601cdb77632644",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0b/8e658923a62d9442a432675aa5d686cfae36e3": "d3814a09db43fe5a249a0f32a17f797b",
".git/objects/0f/482596d0fab620d8f99a6b1db2c05e2c1bfcbf": "b11cdb92946f47d6ee096be0caff9868",
".git/objects/10/5a6248874bceea7dc7bf5db384bcf835f3f73e": "6ec719e975cc3c3c46c5e10507ca3c9c",
".git/objects/12/6dc119b8a362d612834b91bb7a61cf3a4ecb24": "f543d8f633fb945ff2dcb00d8169969a",
".git/objects/1b/7ed52b8333420af761911392a184b348d513f7": "6e32ec96b2628eadee1e9a00eb9bf500",
".git/objects/1f/1db22d0ca554bebb8fcafd720be95c3231af4c": "587721a2b83ecd26928cf7b887454d15",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/31c6e5b065070bee4c934728710457bb7bee7e": "6f5dd0aa282f8b514bca86c1f7aa6729",
".git/objects/24/f635b0150b843ac82af095153bdd17bb0474ef": "f5f6d4ada2e8cd128a81e28de35cc88d",
".git/objects/26/5ce3d8eab39009579865dfa8e3d4259e1f5835": "eb4e75b57e46ec1684b4f1c3db57f4e6",
".git/objects/27/3cc0ef3e4d2f7fb881ba5051ae2989d9b81744": "6c9700da6a514bd417f99878d31abc2a",
".git/objects/2b/0aaa6a3e02506d614a3e6a7ccd0a79909b3224": "0016d4751a87b4e4c7d8a49bf98c7bd4",
".git/objects/2b/3850b37147ec1a1de9dcecc9337aefabb0dc80": "7c44365746773317e03f3ba7988e84aa",
".git/objects/2d/df3a8313030f5e6d6eafdd0339c72990d937df": "55cccb7ef619ba37c140b6487fd50aa6",
".git/objects/3b/253dadd6d1cd3975a5dbd1c7194bf623ebaacd": "4a2201a403d791c3a389ddb29216fa14",
".git/objects/3b/8a5fd4789f904f52602fe368a34e0a0f01c661": "2602b25314a1141ddda9241cbd0cf089",
".git/objects/3c/6cd574525b829950c203c92cde2ad46b44be3e": "856cf696b126fa807a79ba996ac08488",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/7b503ed7de6ed44005eb8b9d3ac9a765e96526": "b030479e832080853d2259db3f6eb3cd",
".git/objects/51/85594dc7c230a1ae470fd26b6f76ef789e1a50": "f8e1eb69481039690fe99d400ecbd009",
".git/objects/52/3628eda6d0ac077a25e8d57f6013704fb21137": "2fbee9bfb5ef9ef963474cfa7cd252c6",
".git/objects/54/54ef623482af3413ca835f6787f43416ab8d7a": "fcc8976590630bb31cdebc33f233f7fc",
".git/objects/5e/9438ba27112b4acd68c2f20f970052cfab3816": "52ea0ab25487d78cc85a23c31ae734da",
".git/objects/5f/343f22087599f66957e68043e6744ff2ab977a": "89b0292ecab9186d0f602ad9f3a794dc",
".git/objects/60/69a8bf76b4d8da6aab52826ad81a1fdda4d59e": "b0aabd0f525792b658950aecaf626f0a",
".git/objects/62/0b9bf80ce7c2856845d04af304e58c325d34f7": "3e540d64b29184f3ab6e327a6d45bcd5",
".git/objects/67/a1a2950d391312710e6f02694dcda5b7b3b5d4": "f62f908c4c6bae4ba1b74b5f18344a61",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6d/890fce6af86eba9ecef82c301d76bf84fb05f7": "611359d2b4882bcfb0c3e6010382484e",
".git/objects/6e/2e088de218cbfbe9a32b5ca3fe3f4c7eb5f072": "c3b47f09702ef56f9e48ba247064fd38",
".git/objects/73/a686ea04aa20f1f2a4473b5006d1c86b5d821c": "2392de9ff701c4990bc8bb0f173af410",
".git/objects/75/c0106e4b62d404b3b7054e9823a58b955ce9f9": "46b93010da91062444936143bd6219ae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e055f6993284e1e310f78a253e5f735158b764": "488a9e595798d90e188eb054fe5c37db",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2359f97c29064d2abe69df6030adbad909bb75": "f70abb9faa8ef20942a405055c28a546",
".git/objects/97/7de608730caf4803979b6fe4531d84cb2087e7": "e086336b17932ae9b8dec4cfaed0c7c2",
".git/objects/9b/70a4ef389bd7be40c04497b7ce4962a44d2b8d": "78cb2094a0d34c47239cf1c14a8636a4",
".git/objects/9e/4780767e7d1c9a7cc0797c11bfdd52be9bf378": "18bf2b12f5555a60806c8a00ea960efa",
".git/objects/9e/bbd092a64a67e1bc1346e78d127536f6e89778": "7580cbb892751ab6c6d3ffd8d2472164",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/15203cb998062c3bbe63c63ba13bf8205dfa1d": "6f0a091eed95771f6f09c943aa466f77",
".git/objects/a7/4bc099f13c5a7c23614d087c922d23786eddd4": "28904ad5cf9e2a5c701b576f35f087eb",
".git/objects/a7/4daad245055859c4e1231747dcc814bd1910e4": "70f4b7cf755d6922ff1bcb9d17fdbe80",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/3d3a5f67b33a25505086652f17124a132449b8": "6b3ed0e7a44b2bfc56e72a126a31ff4d",
".git/objects/a9/1567dec16417525bfdb69d50c2f5da71635863": "0901103bfbbab7980af184105c0a7285",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d329e4ab208d5039a71e2a6115686c86ac9cec": "f08900b1516ad54d3c22733cec192c6f",
".git/objects/b0/942d1f3b2485027f68eabd7ea4e7fb44803280": "58b7757de29c819c09c15b02557a6a39",
".git/objects/b4/4847657f5d55e23620cb976b68fafc07b37052": "8f17b3725c3d6f965f21a6fb97a19dd1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/8e254bc234d8a88f25df12e3540cb4774aeee4": "038d5dc3c7e1418e3edaa3024e628b70",
".git/objects/ca/3500b0fcf3e94bb915ce9a5fab89f80c98b26d": "4aead3d0e5b96a02e2dc2a886df004df",
".git/objects/cc/26dcab6af4ac23d5c1d1bfeeac3ac091ff58e6": "47915afacc98355b385ab041fb1b4a46",
".git/objects/d1/b0b082ec8e5604aa3ec6ce99f950d7b0f41cbd": "914da8e30da9cb583c96c079c5e5bea0",
".git/objects/d6/05c19a77243c2a5f3f5491a0bfefaf123b8906": "96aaec866d5ff4dbc194b15f729e2914",
".git/objects/d7/2acdb86f334db5f548e0f7b347614bf1bf940f": "9f35a8dca29ecad658bfa8f77a2bc4e8",
".git/objects/da/2798aad973b51445cbb64b30f094a23bf8c731": "1f3d0770b91e333683421795cd1903be",
".git/objects/dd/a85d0e650ac2f22c1637976dbde015651cd79a": "714493768d3b856bcbcbf724a8fdaa59",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/82fe64c83569ea58501836fb84a51266628b13": "1daa0aac9387255be2778026681c61b5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/5a1276cfa5cf09478b796f990ec7e8f903543b": "bfeb82a2d0062b201565424cf96e1802",
".git/objects/fb/6f8b95fa53a98a0e0bab18432dab9c19fa3d16": "3096be437e87dfce5f18032697e51b98",
".git/refs/heads/master": "08bc7e523f90b3065b6e0e40c7c21b68",
".git/refs/remotes/origin/master": "08bc7e523f90b3065b6e0e40c7c21b68",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5a56b20d01727c95198da9b15e4f7d69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2da43d877c9229ec0ee3b486a3f50013",
"/": "2da43d877c9229ec0ee3b486a3f50013",
"main.dart.js": "defb2c1bd955a2f517c0a97f0f6411e6",
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
