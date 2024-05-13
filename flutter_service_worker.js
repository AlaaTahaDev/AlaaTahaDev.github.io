'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6290bba738d090a07e3cd52fbe8ea208",
".git/config": "b934adfd1863d4a4bf1f26aaf6efe723",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6aab000c7b4fff81890afb9be4a10d89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7aee229b4852ad55f07b8186841f27ac",
".git/logs/refs/heads/main": "98268e5adad5ac7a181fc67a2842b24c",
".git/logs/refs/remotes/origin/main": "026e4833e1e79e7c5e6f43da8743b5fe",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/3bfb12a45ad96d9d78744a40a000ba61150f60": "6f3143e527f8e9fc51e2bcdd88549eb0",
".git/objects/0d/f47447e843b411d416678b5fa67b9e9615d8a3": "007af46450cc614da6808874e4971c8c",
".git/objects/15/73dc610fb613faef84fd877b8c08713f483526": "30c19552e3b259804ebdc0705594c2a6",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/ee5fae2e972e6d38d606b9f7d73d7100a6fe8b": "5f186304a738bda4ab8347bbc01ea32c",
".git/objects/33/cf0148d970b75bdde6d90bfeafa2d5b22cfe8c": "d6b649a1d23459e3f4974f8b2a0b5847",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/51/cd60d78e8064c63ed0aa989831da032313148f": "849a4e0514a6519d54f1406dac5bc26d",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/55/46725e5f7b5ac234dfd02af171e2b37bfb0ba1": "6b048dfa287353aacc28e7f11f4b9a54",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/b838fb8be1e695889a3d8f8da8a87e6854e6f2": "86b82b9fc39a31cbc2489885642f34e4",
".git/objects/6d/fcefed52225dd5a86d05f10eb995a6cd37f7bc": "a745bbcf84949c7fb7775979dda8b8e8",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/68916d77717f842fef9cf7eb9467c216f75e79": "f8327304db92110fac3b258b7e7c0021",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/462f28db61d4410d5ccbd81c97fa5bcd32361e": "db0969c848cd33998b5795a46a7c25a1",
".git/objects/9e/960fc18e0c7ac73266dd515cd25014ccb60144": "5c94551b73175de984c5f2ede8a5b214",
".git/objects/a5/a8aae6aa85d9b59712b43761d543171cbd6aba": "4a93a82052c8b7d4b61553685de32e59",
".git/objects/a6/916c44d44a94f31a1c5730aa1f8b0d156b50ab": "6141d4ceb43ece8c4c68b0c779bb9274",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b2/52cd8b9dfa4758d0e2614bcb57e74394aaba18": "a683be82608ec3586db058e99c832e14",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/27cae335caab939fc7b50f9a5c6403cd1f19ce": "823d09e626a9e317a237b366edb01888",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/94b9b9ecb3e0e7f67517042c2453a7a6bbffdc": "e46f203c5225d4b0e9bde78ea19547af",
".git/objects/c3/130ece45eef4681a6544720a68d3609f0e63c9": "0be9520a893fcb7f8e3a196a8eedde17",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/32b7956a533c7975fb5c2b9dacdea6335a6e1e": "d0b148d5071d5374637a925b4ec34e8a",
".git/objects/c7/007c52527ab861f0a3cb15ee5dafca7ff5b7e1": "7ea6e6c481f1fda0f2a0cc7bd72c3db1",
".git/objects/cb/becbdcc7bbc931c301351d6734a248a31cb02d": "4bbaef66d75521bb8af11c90b2b4e592",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/b84761f0c63c7bf0460a60afe6299b8c57519e": "080cb273b5ccbbd5a3f65cf381023477",
".git/objects/e0/b54b78aa809a3ddf2cc1b61913734bb5d76f5b": "23096f7cc93d38233adf3afb410d2031",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/37358403b1218efd78a86a4ac3ad7134be2683": "f91a6417ee59e54519497544769e5d01",
".git/objects/f5/356f15a76651812796bdeea6b1cd7a2028a3ac": "e5dcbd5b58cd66e5bdd1512010f865ef",
".git/objects/f6/0d5fa3dd8597d2c7579d5f25a616049a3c4b59": "b24673f49bb608271f0927c4fa23e796",
".git/objects/f7/5413fe40376319ad1fa4c34da25df00c50cf3e": "39b62d5a94a33568eb20a6657b0bfe37",
".git/objects/f8/a2fba24f81aaf916bad83f0c7ebf86064b67f7": "81cc29f91d9a808ad6091d77dc4d8f44",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/refs/heads/main": "1a2f82da88eab50c1ea6296cb8c20c86",
".git/refs/remotes/origin/main": "1a2f82da88eab50c1ea6296cb8c20c86",
"assets/AssetManifest.bin": "e6134cee656af5715b33ed8b6fd5ed5f",
"assets/AssetManifest.bin.json": "21c07393630df27c1cc848ab96baa0ee",
"assets/AssetManifest.json": "63d4bc589bc1232f7b9c25e18273e1f4",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/images/logos.png": "a557cafb5bc6521b532dd5e2383e6ec1",
"assets/assets/images/logoss.png": "4c030c5392ff4922c7ab7d83367658c9",
"assets/assets/images/Untitled-1.png": "0f2936801eafa4f299792e117554f464",
"assets/assets/images/Untitled-2.png": "4395b187a3f12b5c0de29337bb8b0825",
"assets/FontManifest.json": "9a978e5a5a73229c1d7fc4cf629b8882",
"assets/fonts/MaterialIcons-Regular.otf": "e5af24374ba04abcd62bfa49464318cf",
"assets/NOTICES": "c9730f62f0c4549e3491a66cf1b28fc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b377ff66c9e859fefa18e10618259d69",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3c3f61372a557566e2a9e5ab7f890017",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-512x512.png": "0f19365f31ff34814795cd3365e2ddb9",
"icons/apple-touch-icon.png": "80727e3da77d0fe53c46ebd0072b9f36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2d280723833799047380fa0497e5331",
"/": "d2d280723833799047380fa0497e5331",
"main.dart.js": "2b0aea085bdbbb3b5472b642aec32389",
"manifest.json": "db0e6ba2d2cc3cdc22f596ca9ee6d4ec",
"version.json": "edceb9e114983e67535de12132fd3e5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
