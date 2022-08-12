'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f0a914a7f82ba27f1ee29eba7955fdb2",
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
".git/index": "bf5f366771f3ca88f6983ddf13548f19",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f3d08a629809759b140a7cc90197c5f",
".git/logs/refs/heads/main": "4faf5e2e17a87448e1639e58c86b73a3",
".git/logs/refs/remotes/origin/main": "65f6637146e325b2d5f5a0d8bfe6676b",
".git/objects/00/fdd5ad1b786e58ff4c8544b34c9dace1133e96": "a1314d0f2c5fd4649b767054f0d4a51d",
".git/objects/01/d1c4a477991cdc1cb56fa115c0406e815c912b": "1af484bc2f63c85f3765c5183085e432",
".git/objects/02/a282061e87507442d9431e71799e0ca1a24be9": "ae2d7daa06f38ddcc4e05f5fff8b5e4e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/8ccda0a323238173c9c349ed3aa33f00f8bb6e": "06185d42826058ab1feb0e04a20dca9b",
".git/objects/05/b15693da84f91b5165a02d9ca2c55b0bd460c3": "de557d7761cf814562a9183239acd752",
".git/objects/07/2a9f111361407dc83815fa4e7dc0b3309f88c5": "9eeaf7225b2a81cfd09897221d7cbd92",
".git/objects/07/ebd161fb9dcc12969c380532e8003b4fddfc47": "59fcd6b08b4f7a5b74af624e25db3fa0",
".git/objects/0b/eeaad536abe56026d461e513e802290143b433": "969bbc0dd97b38188011906646b4b67e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/5878237c290fe7dedf0c6cddaf88538e6c6c93": "98ee56b49bd935e3f87cbe02b0813dc9",
".git/objects/1c/75b21453964f8d7c689101fc9b1e2a9dfd5249": "f887c3902ad175144e55b735b239c56b",
".git/objects/1c/8fd7dee88d39a8fdb1f887fce1372ad0b82b10": "d921647eca79ae9664f5d6f9207106ca",
".git/objects/23/651c1d337d7ad99037ef1e13e839c75cf610fd": "ae7d30ffd29cfd5c13e6b86ccdef157c",
".git/objects/23/b1e6307200255d903543c5504efb54f5a2058f": "80be40b358e0e587592820fc8a0d32ed",
".git/objects/24/01a3fb114c89587c6cf6dc0c272a4e5503ff2f": "c0bfe70436fa2452fc5bca191b4c6898",
".git/objects/24/7e304e288c90bfb93685d2f391d73ac6623bf6": "64c2ef9f80f91ce295735633a016efc0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/8fbbe019f75849095611dfea4c83746db9f2bb": "4104e910b518dfdb76a83563d104e249",
".git/objects/27/c3670418ef10df9798fc030a5019d537473bde": "33f5b0de8c6ab9d2bb89f38e3b0bd576",
".git/objects/27/c81795ece64241cfcf5e4b10d610b921723d94": "86e403dc5f677edfe9f9ec0966900647",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/462b9266be380f3987b2523079eac4a81b0a39": "915e7dfaa72d100dc1065baf6f23e0b8",
".git/objects/36/def5c16152a0af81402db9d66761884ac84204": "b44bc69b3c2c8be241f80a7c3bfc822b",
".git/objects/37/eb241b3f91197206d607cb8855637839f6f7fb": "b8ec22edd9a092537a674b331769fa73",
".git/objects/3a/bb38249b5b90238efb65b32dd64bdfb7789bb5": "5eed4bc65e49e0dc474e84011e192424",
".git/objects/3d/4637a3d61d2ffcd2a69ad9c2cb73a0cf4ae034": "9effd5b07bc7cd1dada1536cf237749b",
".git/objects/42/3c49afec62f3744189f5c8643118eb01be6b39": "b12d7d070603dc4e723dae366b1f50fe",
".git/objects/46/2dbf2e28f05094cc532afd33de08f858dcf8be": "a1d84f139fc3119c9ecea65e4799da2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b8b160fbc805576e15c7b9c845218d4231c6f1": "98c93d44cf6e97bdad34111245c0ea05",
".git/objects/47/cc2da44baafbaabddf519ba2164bc38e4c85bb": "422ff3d3cb3899ec1635afaca57db802",
".git/objects/49/1e0b4d0d0e3aa9a0fccee9d3c1adc2166f5293": "4d343de460071bbf9ca988e85505f454",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/bd5822a70f75688013a4684ec8d06ddc73bf92": "7988dd7aa1512800d925a8c215b3aff4",
".git/objects/50/6f8949a0c69a848fd4060faf16e4e8404efad7": "8c6372e65c6572886855feebc4b04317",
".git/objects/52/c64af7394863ae4b7f6653ad4cca7f5bf3520e": "cfdd7bfefb62be691410e900e6dedb24",
".git/objects/54/321bd7dccf10afae9cd5612ee611ee0379d1b8": "e3d4f0464eded2e3af3f376422b9f6a1",
".git/objects/56/3bd0ede6e35d1d3443343d8322e0660173b5c8": "369b3c53e5539c4e3f5626eed329ca55",
".git/objects/56/adcbb3d3fb4ae9f88c4cd56afd1f59cc5021cf": "0f92c9b9441d80a1f916f1036dd3fd6d",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/5a/03c08a68c53ea12c513a7cab3fb239623b5e2a": "f60e86346a92073eba26a80175215ed1",
".git/objects/5b/4257cc98630d5b3476fb88387623c25146ef44": "e832c4ab65c24031211a1ceb5da86b55",
".git/objects/5b/acb095a7f29355c8e8cb0865251823cc6a66f7": "b53075841af70dd62fa3ac169f7dabc3",
".git/objects/5c/56953de39c516422c0ff4c4e51c2a42e6540ab": "4c0c5eed0a7c7742cd0302f85c912b01",
".git/objects/5c/89111d735466601300b69305e24fe5649aa057": "89938692059c2e0cbb9ab4143949a654",
".git/objects/5c/a68b58bdcdd7770d27d668b744f8c2c0c52eb9": "26e2fc6526f7b88ef6e51e102188704b",
".git/objects/61/02c7f624c66aa3b03f58c52e8e5c72bc89053e": "d3b9aca0c9cb6d6992174488e4e5ae5a",
".git/objects/69/91eb63f1a833e74f2785ba4ba5aef606109771": "334126943461c4e57f30100c8719271c",
".git/objects/6c/432918f2a82fd4d499be44f08e4c5b1c21719a": "70fa9f6171ee93ae6c6d36cc0c728be1",
".git/objects/70/bc40903bea570d7baa686a6c3e98cb460f8da0": "4c36fb13a0a9296c6efb66a24c9b84af",
".git/objects/71/0a90604c74d257198d61a15d5241fc8a114bee": "a8dd7df95d56a10382a0c7673b5b9f8f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/524ded6b2ce297c0286aca5e291b4d6f72be12": "3d517a6d641ba6067a734f95ca33048f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e308562238722bcab686f2138f0f6994823c4f": "36220429afccb78d021214c49482d560",
".git/objects/7e/3186bb8772bf4d89bdb86e32b2bfe3c58ab2ef": "cfc594f0088defca085183e0bb1f6bc8",
".git/objects/84/7a1e4a7d7e6d75d43011c33167962e3c89bcbf": "59a29fa8b38cf1ba62347878403589ae",
".git/objects/87/ce015e013b263d0f34951278d8713b630d9b98": "54c40aa62cb1ff80dea65b45ae8a8d61",
".git/objects/87/e2c2ec911ffdc689e93425e28ca2419778fca0": "ac76de5f9763caa55e92027bee8b62ca",
".git/objects/88/52cb5fe2271c4e1c96bd722cc32c6fbd1d46a3": "8f2404788525c8472a22d2a9c9483781",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc1e89ae73cff2c73b6313c10ddeb4b73ddb4c": "41a19c5629aeda434eb44a020fc58fba",
".git/objects/8a/d1da1c6132e04d716de0f2793078d459916dc6": "fa84a56977e7c38c4f2f35a3732b768e",
".git/objects/8b/d28372624cd91b4169b81af780bb4e9ab72fb8": "22bd5bce39cda908cb1624d7bd668f41",
".git/objects/8b/d6a347266203b1c97fe39af8b4266af8efdca5": "c55aa08db1d56c4042eb1946d87f591d",
".git/objects/8d/2868ea0c34a01012a9b111f1c112d1563a2e47": "d195985e1e7788ad201eeac615835740",
".git/objects/91/3152a53151168d4c461fda19f0172789c95ca0": "d16c8df08766a5252bf61182cc5f9f99",
".git/objects/91/b44d039a2e07818d4b10d0316b1d0f0391608c": "08dd373e70c81e4076e52daf2752de92",
".git/objects/9a/082166b70e7e28cd5cc488d4e4e3a21fde5a99": "1ea96d29f1af53646bf6d8d08d671112",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/1ccac19c3c44b59f2f9895f112f3c03cea52c7": "f941ab21ff12f9b40b14e7813121fe0d",
".git/objects/a5/1a5cd7723159139a138fe1de7029be134eb79e": "a5fa76faf35e57c1d940047cdd39ad2b",
".git/objects/a5/cad5900261600b6ee23b8a7d7c1f5c3935baed": "bb8cf1c9a1e9014efc5caa815fab4b47",
".git/objects/a7/01dd80505bf059b7a589162eb8f11582318823": "21c404feb47a6b634d98d76f551c4297",
".git/objects/a8/699dbb74f6467273cbb5fa21e69afee6395143": "5edb212f6412038979a3879f77f4e42d",
".git/objects/a8/98ab8392b46d904fb4cc56561737cd06556b4d": "921e802dcbf6fcc9c84e8d7b5f9457ac",
".git/objects/a8/d708d77f3505ddb6b340e49d09167022fcc718": "d6feaacef02205f5e4020acdd534e315",
".git/objects/aa/ea5223aa13a5cf662f90385a826244238fffe0": "1fc921fd783dde97bceb07e7a880a9e7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e9146d1a579978fc987b4f9558687071b1fa7f": "f240a8e91509e47aecac94e2fd1475b6",
".git/objects/ac/5007a8e73c215c96e6436af4dd20601232dae9": "81522520425a848b2c0a906020ec9f91",
".git/objects/ad/43cd980a8eab0e166d43b68cef581c671cda0b": "9f7a83dbc84fcf71435561afdcf70eba",
".git/objects/b1/1b996df1a5d1a4298e0656ddfda262a83b673c": "1f1068c09e637cf22fbe1bdfb73ca850",
".git/objects/b4/5dc43fccb6affe0e7d15e6c6a6186b0ad5c485": "c5c00a083d64c8b2b7bd550502ca2697",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/064dd56e11dba8a602dedff8137809ebda1c8f": "6219095c207387644814711958bda9bb",
".git/objects/bc/a51696090d8de1c96526903a82805198a9b0a6": "288635fc939e1cba56b52aa40a04551d",
".git/objects/bf/27c76d6935f7fd8645e8db6afaf47f2468a901": "76f315f7e9e7c58a877e1d98dc5c4a54",
".git/objects/c2/3f85651a0a0e5a56e0fd727ad9d91c2b4937c7": "c086e7f3441e9f527b7497c8e5e4b74a",
".git/objects/c4/a8c8f9474c8d3bed9b85a7e110b68718d5cff4": "213e60188e5ec729fb808c965bcc1f77",
".git/objects/cb/0b7569bbcd358650cb75c8455450c501967455": "b2ecd6822e26a5bd14df8b114fab794e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/465096a4e8e10cc705ba451d814bc40e6641e5": "afafb551c6948bfdf9472590471c8320",
".git/objects/cf/073060db4f28b7aa5f26182982190eb33154f1": "bd0b615129daea1ad0b6aa531141fcc0",
".git/objects/d4/272b4cdbfba2d9b93a0f39cfd691a24503051c": "9fbfb6d16295cb1c229379ed9b053cec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2b5a03b5ebe146ffb8e8a594468c6acca3ebab": "a053da5da683862e80e35fc176e2e85d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/dd1b5ccee05fff6bea9ab7727d700428bd2840": "5f9bf43272609302a1478c21823f846f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/6236e37799996faf4c2c38622e377e5871671f": "ef7f25a4a1152485d7154a7b94ee50fa",
".git/objects/e6/9db6bd224eecb30359ad20d1bcc8f7514340bf": "ecca8d2d4cbcb88a564a2d07bd7daf00",
".git/objects/e8/9e9fa23d62b19c8977604fe3c62b90922022c0": "76bf49f2da0f45706ffd96c72126bda7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/2fb5eafd276a07e9477845ca02dd64c9c9d027": "a4cbfe339408f31f219b2b2becfed296",
".git/objects/eb/620d83f5168316afacaa6f674be6ff9ab1e0f8": "30e52637897d6f3b95a04e4e3f16b6eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/cc48de1a0678e82ee1de363014cae37b5f1a14": "d93b5181b16c9710266ea25e924b082e",
".git/objects/f8/009dc0e8d1b04777e1c4af31577a12a4a757f4": "268799063188b527dd3de8c4c5c15658",
".git/objects/fd/c3b7e86780e53c36c514035bbd3984c278b076": "185ae8482aae262edaf7617435ee3ab3",
".git/refs/heads/main": "c0db0a5f6a93d4a8fd5d8a9063d31348",
".git/refs/remotes/origin/main": "c0db0a5f6a93d4a8fd5d8a9063d31348",
"assets/AssetManifest.json": "43b3e14073aa1d6322b61f0d2926a156",
"assets/assets/images/Dorador_CV.jpg": "28d5c4ae9fd37b48fb61e6938b800b6c",
"assets/assets/images/logo_flutter.png": "d8c4504744960085f9f9a6604af36df5",
"assets/assets/images/logo_kepware.png": "6016ec46e60c51d3790f458e30ee196a",
"assets/assets/images/logo_M_flow.png": "098e234ead33b2fa8f25dbfc2445beaf",
"assets/assets/images/logo_M_papps.png": "a4ccbda2b0e0d755750ab2ec2871a0b0",
"assets/assets/images/logo_M_powerbi.png": "17da9f40171ba0f621d450c7427ca839",
"assets/assets/images/logo_M_sharepoint.png": "d032b4a04a093b63c31cdd37b8bfaf74",
"assets/assets/images/logo_osisoft.png": "c50794a56ad77e7bf1d31a9a8ce2eced",
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
"index.html": "f2c4801ba96921491632b41b95ce0db4",
"/": "f2c4801ba96921491632b41b95ce0db4",
"main.dart.js": "f0d0563c62942e2d31431d0d0e1fecd2",
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
