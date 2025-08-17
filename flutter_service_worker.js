'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06bd65277d2fd12c14e712098a60367d",
"version.json": "a62a18ccc68c1ee34ec33d78c2e4dc39",
"index.html": "10727a346304297bf734924762786a47",
"/": "10727a346304297bf734924762786a47",
"main.dart.js": "ba2ac7d2391728077a2ac09878cc4b2b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "004c33008f28505b228623d040010134",
".git/config": "57735e623f533acd6233092427b19a59",
".git/objects/95/ea2b9f29eb6d0811626da4b00073692029265d": "ccef9550866b5169f39a1b072b43281e",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/9b/4ae1345d10d0f1c131b748cb317e42446f5591": "ec9efd4d385dbaa228c510ed945e74d4",
".git/objects/3d/4c3f173f602f50548c346f523cbd584683b961": "bdaa531bd78727015bbad447174bda87",
".git/objects/0b/ef0b90dfe8497f92b3a91215bdf18dfa2f734b": "d66bb709504aa7abba48d03ad642c023",
".git/objects/5f/83267468963488cdb96c4620885397419521dd": "0fdb92798212b938f63a2bee575c1817",
".git/objects/33/307e5ae31382be15e513d0920c70db01174750": "0bcaa3ef5d6b3c4159f0d5fb269ab869",
".git/objects/33/4ec87c2248ddb58ec97e6df16e19bc38ac8630": "eba6a25afc0309f20cb328c46ebaffe5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/32bb3ee9f3bc585af9ee547dd0bb9b881a13e2": "03f737fa1fb4de565305e1456ca87c21",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/24d776638ef74e42b00b6d48294bc8a0984e5e": "f4aab83a1c27f096c7c2b9deefaf883e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/28/212361dee1411704676d990409e2fd147b25e6": "3b70e401f49911c2a4f710faf7579a95",
".git/objects/17/bf9095ce245be4e76e8a45c4e17360601eeb5c": "9463241e3a6c2cf8d26d0ce0482e0da7",
".git/objects/8f/58dd1658e92af0e970925fded5d35bf9ec04fe": "7fda40f73b54b0464ec3ff355b91bfeb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/5b741d36dc7b08bb3b852eb8b917f876a20e38": "1b447d8b2d40dd8baf2e31d0ccb3c297",
".git/objects/43/f7061fc7fda957e914612761ee56e59b656d21": "272850112c367f026f52f6fb65f71bdf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/213311bb3ae81867a949e57a1b56bd9870174d": "cd0310fd184848e58b52e32ab6793000",
".git/objects/09/f7291e1d548aa36f879d67c812485ac6546502": "abaac2f0ad786eaa15a0fb087a672963",
".git/objects/65/b07615934e34f91a3dac09bb99e20f5f9dc96f": "7b333c1bde404bc0980f46ce73d1a996",
".git/objects/53/490d6aab6b834e5f5a024c79d5246a9d0752a0": "f95d707134604a519462d0d80f721d4a",
".git/objects/30/8328ad4e0bc64a067f42193b4b6d27d871af52": "02b33816a877a3db671d4632d3e807e4",
".git/objects/5b/99b4082728a35afa95f66c9bb723de82164336": "a9cb6ba7c7cbb5d5919d978e164ee614",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/c1da1ab16d0ceb88495819980282073f11468a": "e21f3426ea2c5f399dfedf8bf7962879",
".git/objects/90/f55f672a42e7df3939c8b789bd7b2ea60a9e71": "d7a6b4b48c0abc711bb0fe120f3f39df",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/5dced4ce9b2c3090c39198e52d1262a52cd21b": "58da2a1c9a906755c80dcb184185ca34",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/062f4470913cf7da475771d40ea5fe29c10c7c": "362b840d8c042a30b01366cc6ae6a055",
".git/objects/db/4d84987dbaa3f20e589e6a81265c9f38eb42ba": "d8788839a94388046342bcac3867112a",
".git/objects/a6/b5760204f73b6ffaaaf3578334ed3d4b1d7b69": "4a8de4f1b8dcb0159bb8a561127ea237",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/b437ddb7dec17ce9c756d5f12af1fb1fd36a42": "26eddc89f6b1c4cc58236eacb4d470be",
".git/objects/cd/a14bf67de0bc50a47df9e81e90f8794c89e254": "1d6771578a7770ce34dc4a7703443822",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/6e1e4a8b4fc7d4b8f929e4f3156f3b01c2c077": "59636a84874f943c3a313c5addbf5c71",
".git/objects/83/c1dbc60d6cd4787387dcfe0116d7009eac51c2": "a9791521e79930c0c2335556bc3a2706",
".git/objects/1b/d3e7b802efacb8d53e8f411dc36e83bfbe84ce": "ac182b7f6bfba459e74940b12016e3d8",
".git/objects/84/72f49f39bcb73636d024f68613ebc8ac16a5a8": "7feced14fb412c3b9e15ffcfc7d18680",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/1c/334b7f2565c9a176a4d7da18c852ba35e204c8": "e2bed80b8ecd03b57541fc0dafa84b82",
".git/objects/7a/a999b511e918c59a9d05628c8000cdba2688a1": "0fe3c6caad898ee0d8ce487ad28ecef8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "441dfed54d84544d198d789a1f79acb7",
".git/logs/refs/heads/master": "441dfed54d84544d198d789a1f79acb7",
".git/logs/refs/remotes/origin/master": "98e58c121e3d3099ae5a997c46fde5f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "59770e8dd55a6148942bddcd11015943",
".git/refs/remotes/origin/master": "59770e8dd55a6148942bddcd11015943",
".git/index": "f4e4fdac3db4f42fafdb05cd4e91724b",
".git/COMMIT_EDITMSG": "58f6d8cb5378b32b8703cc7fedc6cfb8",
"assets/images/logo_oil.png": "98265d0bb8dc2e2e553e019bd7bb4604",
"assets/images/logo_fabric.png": "07826cccc1cf452821272636bc000a1b",
"assets/images/my_qr_code.png": "de5054e13df471aca07321c26e1db89c",
"assets/images/logo.png": "ef7c3ca5497622acebcf294a62648a7a",
"assets/images/logo_elecshow.png": "42ea4288809581b27d63da2673f9d9df",
"assets/AssetManifest.json": "fee7fd45c2043381097845411390c6dd",
"assets/NOTICES": "924bc1e7b881e2cb031a035f3664ebf8",
"assets/lang/en.json": "824384df8567d886da061f6c071fe0ff",
"assets/lang/fa.json": "01562132c9700b38668ba55a3d270766",
"assets/FontManifest.json": "6f7f8cbc347786a45bfd273412d1edbb",
"assets/AssetManifest.bin.json": "90dfbb640f923442cad6879f3edf0b3a",
"assets/icons/poi_icon.png": "f2657711b6042d75f2a88df83a9d6147",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "961abee8a087fa947d5a02c65436d518",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "070a63dd23012bd5cfd4a27352e43b1a",
"assets/fonts/iransans.ttf": "80470e5cc0dea2d75af2700d8c35ba6a",
"assets/fonts/iran_sans.ttf": "d41d82662a710e51ece8325e239c7711",
"assets/fonts/MaterialIcons-Regular.otf": "90242f491ed20dbd317ff75a91dccf10",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
