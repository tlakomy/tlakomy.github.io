"use strict";var precacheConfig=[["/index.html","8d5450fdcd49629fa84582a03e3b20ac"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/main.492801cd.js","4bea39cd74085a3c38e82fce2c4b03d7"],["/static/media/airforce.83d88c5d.jpg","83d88c5d1ddae3223623e4e54875000d"],["/static/media/ardefinition.033dd823.png","033dd8230e14be1886b07db4c75242b9"],["/static/media/arjs.9c7c8e43.jpg","9c7c8e436f751d73cc573973ed02df92"],["/static/media/axis.0d17d232.png","0d17d232a98eb0c620a136da3875cf8b"],["/static/media/custom_marker.dffb7fbc.png","dffb7fbc0b24dc3809cb2489221dfcba"],["/static/media/expensive.7ed73cad.png","7ed73cad202e98802e5db7b9da5350a8"],["/static/media/explore.1cefa051.jpg","1cefa0518141dc4540b0ae16391b95f9"],["/static/media/frameworks.b1700388.png","b1700388fc4d751db9ec9f1c90068c07"],["/static/media/fuck.5f8c6b32.jpg","5f8c6b3236b7a69baab3c958124d5721"],["/static/media/future.0c7ff505.jpg","0c7ff505b32e003e688f3e9f3de1d7eb"],["/static/media/gearvr.250890a1.jpg","250890a1d9fb44cb480f024a93fa5307"],["/static/media/hellovr.7f9b4940.png","7f9b494091fa1672c4ff1618b44933fc"],["/static/media/hiro.642a01ca.png","642a01ca6a86c72d6020d10b9b24cc27"],["/static/media/hololens.d60f4ddd.jpg","d60f4ddd926ab017fd7fe05ed00d1762"],["/static/media/marker.2bde3d2c.jpg","2bde3d2c7914a90ea487bd596c75748c"],["/static/media/marker2.97930dc6.png","97930dc6dde2c4f055b263102c572475"],["/static/media/olx.fb5808d8.png","fb5808d821f4bbddf1c20c663d84c879"],["/static/media/past.79b355e6.jpg","79b355e644c7acc3c5d479de17d4f95b"],["/static/media/react.57e97fc2.jpg","57e97fc2d2ff74ae086810803052b0cd"],["/static/media/reactar.019319b0.png","019319b0671ea7a5a1e7630f83e9c4c4"],["/static/media/renderers.f432fd2f.png","f432fd2f4ef0bf82077ffe9f3c48dc5d"],["/static/media/surface.84267f35.jpg","84267f3584c308b472b97d01e818615e"],["/static/media/tv.b092f1fe.jpg","b092f1fe470a59f91569a0ec063b029a"],["/static/media/uber.dc2a2765.jpg","dc2a2765d6a48d6698b15f70f2554687"],["/static/media/virtualboy.c4806dfc.jpg","c4806dfc20d0ac87d88255f9704b6af2"],["/static/media/vr.bd43da7a.jpg","bd43da7add2de3b4cbd06806dacba04e"],["/static/media/vr_beka.5754545e.jpg","5754545e215696c50c8a90598726785f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});