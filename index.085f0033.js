function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=l.default(e,t,"get");return s.default(e,r)};var l=i(o("fExtF")),s=i(o("iaRLo"));function i(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,r){d.default(e,t),t.set(e,r)};var c,d=(c=o("7K24o"))&&c.__esModule?c:{default:c};var f=new WeakMap,p=new WeakMap;const h=new class{fetchPhotos(){const t=new URLSearchParams({query:this.searchQuery,page:this.page,per_page:6,orientation:"landscape",client_id:e(a)(this,p)});return fetch(e(a)(this,f)+t).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){e(u)(this,f,{writable:!0,value:"https://api.unsplash.com/search/photos?"}),e(u)(this,p,{writable:!0,value:"w3wlkYGXQYTxkNkO6eQu7VkYZMao_MgIKvQ_v3jcSvI"}),this.page=null,this.searchQuery=null}},g={form:document.querySelector(".js-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".js-load-more")};function m(e){return`<a class="gallery__item" href="${e.urls.regular}">\n\t\t<img class="gallery__image" src="${e.urls.small}" alt="${e.alt_description}" />\n\t\t\t</a>`}g.form.addEventListener("submit",(function(e){e.preventDefault(),h.page=1,h.searchQuery=e.currentTarget.elements.text.value,h.fetchPhotos().then((e=>{const t=e.results.map(m).join("");g.gallery.innerHTML=t,lightGallery(document.getElementById("static-thumbnails")),g.loadMoreBtn.classList.remove("is-hidden")})).catch((e=>console.log(e)))})),g.loadMoreBtn.addEventListener("click",(function(e){h.page+=1,h.fetchPhotos().then((e=>{const t=e.results.map(m).join("");g.gallery.insertAdjacentHTML("beforeend",t),lightGallery(document.getElementById("static-thumbnails"))}))}));
//# sourceMappingURL=index.085f0033.js.map
