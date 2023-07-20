'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f12e2b9ec45361e9e43cefb171185f11",
"index.html": "15f3e077752d70fbe40168c535879026",
"/": "15f3e077752d70fbe40168c535879026",
"main.dart.js": "748ad55a9d0c22bd35c02dbe4bd82965",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac30528eae45a9954be49cb319d5ee1d",
"assets/AssetManifest.json": "67c83f93680f9293754065623f787606",
"assets/NOTICES": "0ca812c681af16ffbbe9a37e8c33ed73",
"assets/FontManifest.json": "bcc0dbffe921a74432984bfadea29f47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "13b08b625158861df325f1dcf21164b4",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/assets/banheira.webp": "796efcbb7c6c5083126e4a0ad7681ddf",
"assets/lib/assets/chupeta.jpg": "4d4eacb4dfdb25a724f2c90b4ce9c280",
"assets/lib/assets/present.riv": "e9243d75f5211a4870db6377b69a9fc7",
"assets/lib/assets/mobile-para-berc%25CC%25A7o.jpg": "18832a4791d975e663e6e8b0863735f7",
"assets/lib/assets/pares-de-meias.jpg": "56897e1d24e3a1cd119cabd479307d48",
"assets/lib/assets/macacao-de-linha.jpg": "787c782d55d95ec473b2c7edfab8a567",
"assets/lib/assets/mamadeira.jpeg": "388b2a13fcec6b3a3cdb6e512d1f9a98",
"assets/lib/assets/ninho-redutor.webp": "7b58f44a4f5eaa3ab3f93f9609b33d8c",
"assets/lib/assets/cueiro-franela.jpg": "39c0b8e77a580a90b099ee825dbddfe5",
"assets/lib/assets/fundo_imagem.png": "d234710b9f27f673ee0f82f3fffb74c0",
"assets/lib/assets/baby.webp": "2361ef89f246eca040a260cd18098c0d",
"assets/lib/assets/cobertor-pelucia.webp": "ca6ad4b08e6e5b45823cbf8830861e78",
"assets/lib/assets/hidratacao-do-bebe.webp": "7dca0ba9cd9823e2a169b9f910828ad2",
"assets/lib/assets/porta-lenco-umidecido.jpg": "09882f9b552472324abe696acf0127e5",
"assets/lib/assets/lencol-berco.webp": "843a10b7216eaf50863e8c79a71129fa",
"assets/lib/assets/protetor-berco.webp": "59c804702314d2c96af6bf2bc5a3f126",
"assets/lib/assets/kit-alimentacao.webp": "266f9d816f6b7ad15a65612b744607d5",
"assets/lib/assets/sabonete-liquido1.jpg": "b9d01cf3ff558e6fef35a445e4f6ed55",
"assets/lib/assets/body.png": "39b31c79a8cb7ece8da014f5a960e665",
"assets/lib/assets/babador-bandana.jpeg": "26754224a0e440514f3427ba08533166",
"assets/lib/assets/fita.png": "a49c64e43b03f2b2edae8f8055d1fcd3",
"assets/lib/assets/prendedor-de-chupeta.jpg": "2acfe36f574aef5408bb1551bd2a10f2",
"assets/lib/assets/trocador-fralda.webp": "7888bc6d4c7abf00d0ac5f0857fe5cbf",
"assets/lib/assets/porta-fraldas.png": "376cb7b68813241dbe4a1a3ea38c4273",
"assets/lib/assets/pente-e-escova.jpg": "80e4146048de301a4bf698463d8e887e",
"assets/lib/assets/kit-higiene.jpg": "408d720e959e8030eae9220e64d21370",
"assets/lib/assets/toalha-de-banho.jpeg": "10df68b6ee08f5d03122ce896043ac36",
"assets/lib/assets/barriga.jpeg": "2ebcd5a94be54bcfb7b69559abace5c2",
"assets/lib/assets/fralda-de-pano.jpeg": "6a172f0bbb6db8db81f68d204a48f829",
"assets/lib/assets/enfeite-porta.jpg": "4cd97d2f99ea4cf1927a294fba50af45",
"assets/lib/assets/kit-banho.jpeg": "98b445c4c0c45a13dfb14058d32d779b",
"assets/lib/assets/sling.webp": "5b183e5ca3571c3d67ba654d57a2b17d",
"assets/lib/assets/mosquiteiro.jpg": "f20bc5b61d6dc8d85ffaca307c3576d0",
"assets/lib/assets/GreatVibes-Regular.ttf": "4bd0ed00ca8deac6c6706a092d9afd13",
"assets/lib/assets/lancol-para-carrinho.jpg": "18f26143aa3d6a71caa2835cd2f9c308",
"assets/lib/assets/chocalho-e-brinquedos.webp": "0a9c610f631ab9d376d3e1c193775cf3",
"assets/AssetManifest.bin": "3e3a7e69d7810d8e38170c915b816b80",
"assets/fonts/MaterialIcons-Regular.otf": "a4e61f5c243cb8dc8451da434a305efc",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
