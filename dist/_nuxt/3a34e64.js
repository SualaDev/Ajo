(window.webpackJsonp=window.webpackJsonp||[]).push([[26,3,4,5,6,10,12,13,19,21],{307:function(e,t,n){"use strict";var o=n(11),r=n(1),c=n(4),l=n(115),d=n(16),v=n(12),f=n(207),h=n(43),x=n(84),m=n(206),w=n(5),M=n(85).f,y=n(37).f,_=n(18).f,D=n(308),N=n(309).trim,j="Number",I=r.Number,C=I.prototype,A=r.TypeError,O=c("".slice),k=c("".charCodeAt),z=function(e){var t=m(e,"number");return"bigint"==typeof t?t:T(t)},T=function(e){var t,n,o,r,c,l,d,code,v=m(e,"number");if(x(v))throw A("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=N(v),43===(t=k(v,0))||45===t){if(88===(n=k(v,2))||120===n)return NaN}else if(48===t){switch(k(v,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+v}for(l=(c=O(v,2)).length,d=0;d<l;d++)if((code=k(c,d))<48||code>r)return NaN;return parseInt(c,o)}return+v};if(l(j,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var E,S=function(e){var t=arguments.length<1?0:I(z(e)),n=this;return h(C,n)&&w((function(){D(n)}))?f(Object(t),n,S):t},L=o?M(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;L.length>R;R++)v(I,E=L[R])&&!v(S,E)&&_(S,E,y(I,E));S.prototype=C,C.constructor=S,d(r,j,S)}},308:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},309:function(e,t,n){var o=n(4),r=n(26),c=n(13),l=n(310),d=o("".replace),v="["+l+"]",f=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),x=function(e){return function(t){var n=c(r(t));return 1&e&&(n=d(n,f,"")),2&e&&(n=d(n,h,"")),n}};e.exports={start:x(1),end:x(2),trim:x(3)}},310:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},311:function(e,t,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("b3fe8fb8",content,!0,{sourceMap:!1})},317:function(e,t,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("d458ad56",content,!0,{sourceMap:!1})},318:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("b2814ca2",content,!0,{sourceMap:!1})},319:function(e,t,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("5726d774",content,!0,{sourceMap:!1})},320:function(e,t,n){"use strict";n(311)},321:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*{font-family:"Noto Sans",sans-serif}.nav,body{position:relative}.nav{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 32px;margin-top:45px}.nav svg{color:#9a9400;cursor:pointer}.nav img{width:20px}.nav .page-enter-active,.nav .page-leave-active{transition:opacity 1.5s}.nav .page-enter,.nav .page-leave-active{opacity:0}.drop-container{position:absolute;top:0;background-color:#fff;width:432px;z-index:2;padding-bottom:2rem}.drop-container .drop-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:34px;padding:0 1rem}.drop-container .drop-header .title a{display:flex;flex-direction:row;align-items:center;grid-gap:10px;gap:10px;text-decoration:none}.drop-container .drop-header .title a h1{font-family:"AirbnbCereal_W_Md";color:#041a7a}.drop-container .drop-header .title svg{color:#9a9400;cursor:pointer}.drop-container .drop-header svg{color:#041a7a;cursor:pointer}.drop-container .drop-items{padding:.5rem 1rem;display:flex;flex-direction:column}.drop-container .drop-items a{font-family:"AirbnbCereal_W_lt";color:#393939;padding-bottom:1.5rem;padding-top:.8rem;border-bottom:.5px solid #c7c4c4;text-decoration:none}.drop-container .drop-items .logout{padding-top:15px;color:#041a7a;cursor:pointer}',""]),e.exports=o},322:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{showDropdown:!1}},methods:{toggleDropdown:function(){console.log("tada"),this.showDropdown,this.showDropdown},closeDropDown:function(){this.showDropdown,this.showDropdown},logout:function(){this.$store.commit("setUserDetails",{}),this.$router.push("/"),console.log("User Logged Out")}}},r=(n(320),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDropdown,expression:"showDropdown"}],staticClass:"drop-container",staticStyle:{display:"block"}},[n("div",{staticClass:"drop-header"},[n("div",{staticClass:"title"},[n("nuxt-link",{attrs:{to:"/home"}},[n("font-awesome-icon",{attrs:{icon:"dove"}}),e._v(" "),n("h1",[e._v("AJO")])],1)],1),e._v(" "),n("div",[n("font-awesome-icon",{attrs:{icon:"xmark"},on:{click:function(t){e.showDropdown=!e.showDropdown}}})],1)]),e._v(" "),n("div",{staticClass:"drop-items"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("Wishlists")]),e._v(" "),n("nuxt-link",{attrs:{to:"/"}},[e._v("Past Trips")]),e._v(" "),n("nuxt-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" "),n("div",{staticClass:"logout",on:{click:e.logout}},[e._v("Log out")])],1)]),e._v(" "),n("div",{staticClass:"nav"},[n("font-awesome-icon",{attrs:{icon:"bars"},on:{click:function(t){e.showDropdown=!e.showDropdown}}}),e._v(" "),n("div",[n("nuxt-link",{attrs:{to:"/"}},[n("svg",{staticClass:"bi bi-person-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),e._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])])],1)],1)])}),[],!1,null,null,null);t.default=component.exports},323:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44OTk4IDBMNy4yNTM3MyA0LjQ4MDI3QzcuMjYzNjEgNC41MTI5NSA3LjI4Mjk0IDQuNTQxNDMgNy4zMDg5MyA0LjU2MTYxQzcuMzM0OTIgNC41ODE3OSA3LjM2NjI0IDQuNTkyNjMgNy4zOTgzNyA0LjU5MjU2TDExLjgwMTEgNC41ODMyN0w4LjIzMzU0IDcuMzQyNjdDOC4yMDc1MSA3LjM2MjgyIDguMTg4MTMgNy4zOTEyOCA4LjE3ODIxIDcuNDIzOTVDOC4xNjgyOSA3LjQ1NjYzIDguMTY4MzMgNy40OTE4MyA4LjE3ODMzIDcuNTI0NDdMOS41NDgxNyAxMkw1Ljk4OTEzIDkuMjI0OTFDNS45NjMxOCA5LjIwNDY3IDUuOTMxODggOS4xOTM3NiA1Ljg5OTc1IDkuMTkzNzZDNS44Njc2MyA5LjE5Mzc2IDUuODM2MzMgOS4yMDQ2NyA1LjgxMDM3IDkuMjI0OTFMMi4yNTI5OSAxMS45OTk4TDMuNjIyNzkgNy41MjQ0N0MzLjYzMjc5IDcuNDkxODMgMy42MzI4MyA3LjQ1NjYzIDMuNjIyOSA3LjQyMzk1QzMuNjEyOTggNy4zOTEyOCAzLjU5MzYxIDcuMzYyODIgMy41Njc1OCA3LjM0MjY3TDAgNC41ODMyN0w0LjQwMjc1IDQuNTkyNTZDNC40MzQ4OCA0LjU5MjYzIDQuNDY2MiA0LjU4MTc3IDQuNDkyMiA0LjU2MTU4QzQuNTE4MTkgNC41NDEzOSA0LjUzNzUxIDQuNTEyOSA0LjU0NzM4IDQuNDgwMjFMNS44OTk4IDBaIiBmaWxsPSIjRjFDNDBGIi8+DQo8L3N2Zz4NCg=="},324:function(e,t,n){"use strict";n.r(t);n(307);var o={name:"carousel-img",props:{pic:{Required:!0,type:Object},currentIndex:{Required:!0,type:Number},index:{Required:!0,type:Number}},computed:{placeImg:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.pic.photo_reference)+"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE"}}},r=(n(349),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{directives:[{name:"show",rawName:"v-show",value:e.currentIndex===e.index,expression:"currentIndex === index"}],attrs:{src:e.placeImg,alt:""}})}),[],!1,null,"a712af48",null);t.default=component.exports},325:function(e,t,n){"use strict";n.r(t);var o={name:"carousel-controls",methods:{previousSlideHandler:function(){this.$emit("previous-slide")},nextSlideHandler:function(){this.$emit("next-slide")}}},r=(n(351),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-control-containers"},[n("button",{staticClass:"btn-control prev",on:{click:e.previousSlideHandler}},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1),e._v(" "),n("button",{staticClass:"btn-control next",on:{click:e.nextSlideHandler}},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)])}),[],!1,null,"545404d2",null);t.default=component.exports},326:function(e,t,n){"use strict";n.r(t);n(307);var o={name:"carousel-indicators",props:{photosArray:{Required:!0,type:Array},currentIndex:{Required:!0,type:Number}}},r=(n(353),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carousel-indicator-container"},[n("div",{staticClass:"indicator-dots"},e._l(e.photosArray,(function(t,o){return n("div",{key:o,staticClass:"dots",class:{active:e.currentIndex===o}},[n("p")])})),0)])}),[],!1,null,"4b051630",null);t.default=component.exports},345:function(e,t,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("ecd17fea",content,!0,{sourceMap:!1})},346:function(e,t,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("37bbba2b",content,!0,{sourceMap:!1})},347:function(e,t,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("adb13b14",content,!0,{sourceMap:!1})},348:function(e,t,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("6acd7c68",content,!0,{sourceMap:!1})},349:function(e,t,n){"use strict";n(317)},350:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-a712af48]{font-family:"Noto Sans",sans-serif}body[data-v-a712af48]{position:relative}img[data-v-a712af48]{position:absolute;top:0;left:0;bottom:0;right:0;transition:all .5s ease;-webkit-animation-name:fade-in-data-v-a712af48;animation-name:fade-in-data-v-a712af48;-webkit-animation-duration:1s;animation-duration:1s}@-webkit-keyframes fade-in-data-v-a712af48{0%{opacity:.3}to{opacity:1}}@keyframes fade-in-data-v-a712af48{0%{opacity:.3}to{opacity:1}}',""]),e.exports=o},351:function(e,t,n){"use strict";n(318)},352:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-545404d2]{font-family:"Noto Sans",sans-serif}body[data-v-545404d2]{position:relative}.btn-control-containers .btn-control[data-v-545404d2]{position:absolute;padding:20px;border:none;outline:none;background:rgba(0,0,0,.6);color:#fff;top:calc(50% - 25px)}.btn-control-containers .prev[data-v-545404d2]{left:0;opacity:.2}.btn-control-containers .prev[data-v-545404d2]:hover{opacity:.8}.btn-control-containers .next[data-v-545404d2]{right:0;opacity:.2}.btn-control-containers .next[data-v-545404d2]:hover{opacity:.8}',""]),e.exports=o},353:function(e,t,n){"use strict";n(319)},354:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-4b051630]{font-family:"Noto Sans",sans-serif}body[data-v-4b051630]{position:relative}.carousel-indicator-container[data-v-4b051630]{position:absolute;bottom:20px;left:calc(50% - 56px)}.carousel-indicator-container .indicator-dots[data-v-4b051630]{display:flex;justify-content:center;align-items:center;grid-gap:5px;gap:5px;overflow-x:auto;overflow-y:hidden}.carousel-indicator-container .indicator-dots .dots[data-v-4b051630]{width:5px;height:5px;border-radius:50%;background:#fff}.carousel-indicator-container .indicator-dots .dots p[data-v-4b051630]{width:100%}.carousel-indicator-container .indicator-dots .active[data-v-4b051630]{width:22px;border-radius:16px}',""]),e.exports=o},355:function(e,t,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("7e5c9667",content,!0,{sourceMap:!1})},395:function(e,t,n){"use strict";n(345)},396:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-151e8b1e]{font-family:"Noto Sans",sans-serif}body[data-v-151e8b1e]{position:relative}.review-card-component[data-v-151e8b1e]{width:267px}.review-card[data-v-151e8b1e]{display:flex;justify-content:center;align-items:center;width:100%;grid-gap:10.32px;gap:10.32px;align-items:flex-start;padding:22px;box-shadow:0 1px 4px rgba(0,0,0,.25);border-radius:32px}.review-card .review-img img[data-v-151e8b1e]{height:45px;border-radius:6px;-o-object-fit:cover;object-fit:cover}.review-card .review-content[data-v-151e8b1e]{width:186px;height:166px}.review-card .review-content .review-heading[data-v-151e8b1e]{display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:1px solid #e6e5e5}.review-card .review-content .review-heading .star-ratings[data-v-151e8b1e]{width:100px}.review-card .review-content .review-heading .review-name h3[data-v-151e8b1e]{margin:0}.review-card .review-content .review-description[data-v-151e8b1e]{overflow-y:auto;overflow-x:hidden;height:100px}.review-card .review-content .review-description p[data-v-151e8b1e]{font-weight:300;font-size:14px;line-height:24px;margin:0}',""]),e.exports=o},397:function(e,t,n){"use strict";n(346)},398:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-4900b289]{font-family:"Noto Sans",sans-serif}body[data-v-4900b289]{position:relative}.place-card-container[data-v-4900b289]{border-radius:32px;width:170px;height:110px}.place-card-container img[data-v-4900b289]{height:110px;border-radius:32px;-o-object-fit:contain;object-fit:contain}',""]),e.exports=o},399:function(e,t,n){e.exports=n.p+"img/boltCar.3accad9.svg"},400:function(e,t,n){e.exports=n.p+"img/uberCar.86f3d99.svg"},401:function(e,t,n){"use strict";n(347)},402:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-e7fabc2e]{font-family:"Noto Sans",sans-serif}body[data-v-e7fabc2e]{position:relative}.modal-container[data-v-e7fabc2e]{z-index:9;width:100vw;height:100vh;background:rgba(1,8,40,.4);position:-webkit-sticky;position:sticky;left:0;bottom:0;display:flex;justify-content:center;align-items:center;align-items:flex-end}.modal-container .modal[data-v-e7fabc2e]{box-shadow:0 10px 25px rgba(0,0,0,.25);border-radius:16px 16px 0 0;background-color:#fff;width:100%}.modal-container .modal .modal-top .close-panel[data-v-e7fabc2e]{display:flex;justify-content:center;align-items:center;width:100%;padding:14px 0 23px}.modal-container .modal .modal-top .close-panel div[data-v-e7fabc2e]{width:60px;border-bottom:1px solid #e4e4e4}.modal-container .modal .modal-top .rides-panel div[data-v-e7fabc2e]{padding:21px 19px 26px;display:flex;grid-gap:9px;gap:9px}.modal-container .modal .modal-top .rides-panel .active[data-v-e7fabc2e]{background-color:#041a7a;color:#fff}.modal-container .modal .modal-bottom[data-v-e7fabc2e]{display:flex;justify-content:center;align-items:center;grid-gap:9px;gap:9px;padding:51px 30px 38px;background:#fff;box-shadow:0 4px 15px rgba(0,0,0,.25)}.modal-container .modal .modal-bottom button[data-v-e7fabc2e]{width:100%}.modal-container .modal .modal-bottom button[data-v-e7fabc2e]:first-child{background:#fcf300;border-radius:56px;padding:19px 0;border:none;outline:none;font-size:14px}.modal-container .modal .modal-bottom button[data-v-e7fabc2e]:nth-child(2){background:transparent;border-radius:56px;padding:19px 0;border:1px solid #9a9400;box-sizing:border-box;color:#9a9400;outline:none;font-size:14px}@media(min-width:1200px){.modal-container[data-v-e7fabc2e]{align-items:center}.modal-container .modal[data-v-e7fabc2e]{border-radius:16px;width:40%}.modal-container .modal .modal-bottom[data-v-e7fabc2e]{border-radius:0 0 16px 16px}}',""]),e.exports=o},403:function(e,t,n){"use strict";n(348)},404:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-279080ab]{font-family:"Noto Sans",sans-serif}body[data-v-279080ab]{position:relative}.review-card[data-v-279080ab]{display:flex;justify-content:center;align-items:center;grid-gap:10.32px;gap:10.32px;padding:16px 0 19px;border-bottom:1px solid #cecece;align-items:flex-start}.review-card .review-left .img-container[data-v-279080ab]{height:60px}.review-card .review-left .img-container img[data-v-279080ab]{width:42.1px;-o-object-fit:contain;object-fit:contain}.review-card .review-content .review-name h2[data-v-279080ab]{font-weight:500;font-size:14px;line-height:16px}.review-card .review-content .review-description p[data-v-279080ab]{font-weight:300;font-size:10px;line-height:16px;width:80vw}.review-card .review-content .review-rating[data-v-279080ab]{display:flex;align-items:center;grid-gap:10px;gap:10px}.review-card .review-content .review-rating .time-posted p[data-v-279080ab]{font-size:10px}',""]),e.exports=o},405:function(e,t,n){"use strict";n(355)},406:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*[data-v-39186ec3]{font-family:"Noto Sans",sans-serif}body[data-v-39186ec3]{position:relative}.carousel-container[data-v-39186ec3]{position:relative;display:flex;width:90vw;height:50vh;overflow-x:auto}',""]),e.exports=o},408:function(e,t,n){"use strict";n.r(t);var o={name:"placeCard",props:{place:{Required:!0,type:Object}},computed:{similarPlaceImg:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.place.fullSearchResult.photos[0].photo_reference)+"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE"}}},r=(n(397),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:"/explore/"+this.place.fullSearchResult.place_id}},[n("div",{staticClass:"place-card-container"},[n("img",{attrs:{src:e.similarPlaceImg,alt:"recommended place"}})])])}),[],!1,null,"4900b289",null);t.default=component.exports},409:function(e,t,n){"use strict";n.r(t);var o=n(33),r=Object(o.a)({name:"rideModal",data:function(){return{activateBolt:!0,activateUber:!1}},methods:{closeModal:function(){this.$emit("close-modal"),console.log("I'm being dragged")},initiateDrag:function(e){for(var i=e.target.style.height;i>0;i--)console.log("This is my height"+i)},activateBoltHandler:function(){this.activateBolt=!0,this.activateUber=!1},activateUberHandler:function(){this.activateUber=!0,this.activateBolt=!1}}},"methods",{closeModal:function(){this.$emit("close-modal")},activateBoltHandler:function(){this.activateBolt=!0,this.activateUber=!1},activateUberHandler:function(){this.activateUber=!0,this.activateBolt=!1}}),c=(n(401),n(36)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal"},[o("div",{staticClass:"modal-top"},[e._m(0),e._v(" "),o("div",{staticClass:"rides-panel"},[o("div",{staticClass:"bolt",class:{active:e.activateBolt},on:{click:e.activateBoltHandler}},[o("img",{attrs:{src:n(399),alt:"bolt"}}),e._v(" "),o("p",[e._v("Bolt")])]),e._v(" "),o("div",{staticClass:"uber",class:{active:e.activateUber},on:{click:e.activateUberHandler}},[o("img",{attrs:{src:n(400),alt:"uber"}}),e._v(" "),o("p",[e._v("Uber")])])])]),e._v(" "),o("div",{staticClass:"modal-bottom"},[o("button",[e._v("Go to app")]),e._v(" "),o("button",{on:{click:e.closeModal}},[e._v("Close")])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"close-panel"},[t("div")])}],!1,null,"e7fabc2e",null);t.default=component.exports},410:function(e,t,n){"use strict";n.r(t);var o={name:"reviewFull",props:{review:{Required:!0,type:Object}},computed:{starRatings:function(){for(var e=[],i=0;i<this.review.rating;i++)e.push(i);return e}}},r=(n(403),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"review-card"},[o("div",{staticClass:"review-left"},[o("div",{staticClass:"img-container"},[o("img",{attrs:{src:e.review.profile_photo_url,alt:e.review.author_name}})])]),e._v(" "),o("div",{staticClass:"review-content"},[o("div",{staticClass:"review-name"},[o("h2",[e._v(e._s(e.review.author_name))])]),e._v(" "),o("div",{staticClass:"review-rating"},[o("div",{staticClass:"star-ratings"},e._l(e.starRatings,(function(e){return o("img",{key:e,attrs:{src:n(323),alt:"star ratings"}})})),0),e._v(" "),o("div",{staticClass:"time-posted"},[o("p",[e._v(e._s(e.review.relative_time_description))])])]),e._v(" "),o("div",{staticClass:"review-description"},[o("p",[e._v("\n                "+e._s(e.review.text)+"\n            ")])])])])}),[],!1,null,"279080ab",null);t.default=component.exports},411:function(e,t,n){"use strict";n.r(t);var o=n(324),r=n(325),c=n(326),l={name:"carousel",components:{carouselImg:o.default,CarouselControls:r.default,CarouselIndicators:c.default},props:{photos:{Required:!0,type:Array}},data:function(){return{currentIndex:0,touch:{startX:0,endX:0}}},methods:{previousSlide:function(){this.currentIndex<=0?this.currentIndex:this.currentIndex-=1},nextSlide:function(){this.currentIndex>this.photos.length-2?this.currentIndex:this.currentIndex+=1},touchStart:function(e){this.touch.startX=e.touches[0].clientX,this.touch.endX=0},touchMove:function(e){this.touch.endX=e.touches[0].clientX},touchEnd:function(){!this.touch.endX||Math.abs(this.touch.end-this.touch.start)<20||(this.touch.endX<this.touch.startX?this.nextSlide():this.previousSlide())}},mounted:function(){var e=this;this.$el.addEventListener("touchstart",(function(t){return e.touchStart(t)})),this.$el.addEventListener("touchmove",(function(t){return e.touchMove(t)})),this.$el.addEventListener("touchend",(function(){return e.touchEnd()}))}},d=(n(405),n(36)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carousel-container"},[e._l(e.photos,(function(t,o){return n("carousel-img",{key:o,attrs:{pic:t,currentIndex:e.currentIndex,index:o}})})),e._v(" "),n("carousel-controls",{on:{"previous-slide":e.previousSlide,"next-slide":e.nextSlide}}),e._v(" "),n("carousel-indicators",{attrs:{photosArray:e.photos,currentIndex:e.currentIndex}})],2)}),[],!1,null,"39186ec3",null);t.default=component.exports;installComponents(component,{CarouselImg:n(324).default,CarouselControls:n(325).default,CarouselIndicators:n(326).default})},417:function(e,t,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("41e3dba0",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n.r(t);var o=n(8),r=(n(42),{name:"reviewCard",props:{review:{Required:!0,type:Object}},data:function(){return{stars:5}},computed:{starRatings:function(){for(var e=[],i=0;i<this.review.rating;i++)e.push(i);return e}},fetch:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.store,n.next=3,t.$store.dispatch("getUser",review.user_id);case 3:console.log("Fetching...");case 4:case"end":return n.stop()}}),n)})))()}}),c=(n(395),n(36)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"review-card-component"},[o("div",{staticClass:"review-card"},[o("div",{staticClass:"review-img"},[o("img",{attrs:{src:e.review.profile_photo_url,alt:e.review.author_name}})]),e._v(" "),o("div",{staticClass:"review-content"},[o("div",{staticClass:"review-heading"},[o("div",{staticClass:"review-name"},[o("h3",[e._v(e._s(e.review.author_name))])]),e._v(" "),o("div",{staticClass:"star-ratings"},e._l(e.starRatings,(function(e){return o("img",{key:e,attrs:{src:n(323),alt:"star ratings"}})})),0)]),e._v(" "),o("div",{staticClass:"review-description"},[o("p",[e._v("\n                    "+e._s(e.review.text)+"\n                ")])])])])])}),[],!1,null,"151e8b1e",null);t.default=component.exports},444:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45MzM2NyAwLjc2OTA0M0wxMC45ODM4IDYuNDAzNThDMTAuOTk4OCA2LjQ0NDY4IDExLjAyODEgNi40ODA1IDExLjA2NzQgNi41MDU4OEMxMS4xMDY4IDYuNTMxMjcgMTEuMTU0MiA2LjU0NDkgMTEuMjAyOCA2LjU0NDgxTDE3Ljg2OTYgNi41MzMxMkwxMi40Njc1IDEwLjAwMzRDMTIuNDI4MSAxMC4wMjg4IDEyLjM5ODcgMTAuMDY0NiAxMi4zODM3IDEwLjEwNTdDMTIuMzY4NyAxMC4xNDY4IDEyLjM2ODcgMTAuMTkxIDEyLjM4MzkgMTAuMjMyMUwxNC40NTgyIDE1Ljg2MDdMOS4wNjg5NCAxMi4zNzA2QzkuMDI5NjQgMTIuMzQ1MiA4Ljk4MjI1IDEyLjMzMTQgOC45MzM2IDEyLjMzMTRDOC44ODQ5NSAxMi4zMzE0IDguODM3NTYgMTIuMzQ1MiA4Ljc5ODI1IDEyLjM3MDZMMy40MTE1NSAxNS44NjA1TDUuNDg1NzQgMTAuMjMyMUM1LjUwMDg4IDEwLjE5MSA1LjUwMDk0IDEwLjE0NjggNS40ODU5MiAxMC4xMDU3QzUuNDcwODkgMTAuMDY0NiA1LjQ0MTU2IDEwLjAyODggNS40MDIxNCAxMC4wMDM0TDAgNi41MzMxMkw2LjY2Njc4IDYuNTQ0ODFDNi43MTU0NCA2LjU0NDg5IDYuNzYyODcgNi41MzEyNCA2LjgwMjIzIDYuNTA1ODVDNi44NDE1OSA2LjQ4MDQ1IDYuODcwODUgNi40NDQ2MiA2Ljg4NTc5IDYuNDAzNTFMOC45MzM2NyAwLjc2OTA0M1oiIGZpbGw9IiNGMUM0MEYiLz4NCjwvc3ZnPg0K"},445:function(e,t,n){"use strict";n(417)},446:function(e,t,n){var o=n(65)(!1);o.push([e.i,'*{font-family:"Noto Sans",sans-serif}.img-container,body{position:relative}.img-container{display:flex;justify-content:center;align-items:center;width:100%;height:50vh}.img-container img{border-radius:32px;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.place-description-container{display:flex;justify-content:center;align-items:center;padding:23px 32px}.place-description-container .place-description{display:flex;justify-content:space-between;align-items:center;width:100vw}.place-description-container .place-description .place-name{display:flex;flex-direction:column;grid-gap:5px;gap:5px}.place-description-container .place-description .place-name h2{margin:0;font-weight:700;font-size:21.88px;line-height:28px}.place-description-container .place-description .place-name p{margin:0;font-weight:400;font-size:15px;line-height:20px;color:#051d8c}.place-description-container .place-description .place-rating{display:flex;justify-content:center;align-items:center;grid-gap:5px;gap:5px}.place-description-container .place-description .place-rating p{margin:0;font-weight:400;font-size:17.5px;line-height:24px;color:#adacac}.place-info-container{padding:20px;background:#fafafa;border-radius:6px;margin:12px 30px 28px}.place-info-container .place-info{display:flex;justify-content:center;align-items:center;border-bottom:1px solid #e6e5e5}.place-info-container .place-info p{font-weight:400;font-size:14px;line-height:26px;color:#130f02}.place-info-container .place-address{padding-top:17px;display:flex;flex-direction:column;grid-gap:17px;gap:17px}.place-info-container .place-address svg{color:#b0aa00}.place-info-container .place-address .address,.place-info-container .place-address .contact{display:flex;grid-gap:11.42px;gap:11.42px;align-items:center;font-weight:400;font-size:12px;line-height:16px;text-decoration:none;color:#000}.place-info-container .place-address .contact{margin:0}.reviews-container{padding:23px 32px;overflow-x:auto}.reviews-container .reviews-header{display:flex;justify-content:space-between;align-items:center}.reviews-container .reviews-header p:first-child{font-weight:400;font-size:16px;line-height:16px}.reviews-container .reviews-header p:nth-child(2){font-weight:400;font-size:13px;line-height:17px;text-align:right;color:#051d8c;cursor:pointer}.reviews-container .review-card-container{width:100%;display:inline-flex;grid-gap:60px;gap:60px;overflow-x:auto;overflow-y:hidden}.recommended-places-container{padding:23px 32px}.recommended-places-container .recommended-places{display:flex;justify-content:center;align-items:center;justify-content:flex-start;grid-gap:12px;gap:12px;width:100%;overflow-x:auto;overflow-y:hidden}.book-btns{display:flex;justify-content:center;align-items:center;grid-gap:14px;gap:14px;padding:20px 36px 34px}.book-btns button{width:171px}.book-btns button:first-child{background:#fcf300;border-radius:56px;padding:19px 0;border:none;outline:none;font-size:14px}.book-btns a{background:transparent;border-radius:56px;border:1px solid #9a9400;box-sizing:border-box;color:#9a9400;outline:none;font-size:14px;text-decoration:none;padding:19px}.ride-modal-container{position:absolute;left:0;bottom:0}',""]),e.exports=o},453:function(e,t,n){"use strict";n.r(t);var o=n(8),r=(n(42),n(46),n(322)),c=n(426),l=n(408),d=n(409),v=n(410),f=n(411),h={name:"booking",components:{TheNavbarVue:r.default,reviewCard:c.default,placeCard:l.default,rideModal:d.default,ReviewFull:v.default,Carousel:f.default},data:function(){return{showModal:!1,seeReviews:!1,allPlaceImgs:this.$store.state.placeDetail.data.photos}},methods:{revealModal:function(){this.showModal=!0,this.showModal?this.disableScroll():this.enableScroll()},onCloseModal:function(){this.showModal=!1,this.enableScroll()},disableScroll:function(){var e=window.scrollY||document.documentElement.scrollTop,t=window.scrollX||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)}},enableScroll:function(){window.onscroll=function(){window.scrollTo()}},seeAllReviewsHandler:function(){this.seeReviews=!this.seeReviews}},computed:{reviews:function(){return this.$store.state.placeDetail.data.reviews.slice(0,2)},numberOfReviews:function(){var e=this.$store.state.placeDetail.data.reviews;return e.length>1||0==e.length?e.length+" reviews":e.length+" review"},seeAllReviews:function(){return this.$store.state.placeDetail.data.reviews.length>3},placeDetails:function(){return this.$store.state.placeDetail.data},toggleSeeReview:function(){return this.seeReviews?"See Less":"See All"},allReviews:function(){return this.$store.state.placeDetail.data.reviews},similarPlaces:function(){return this.$store.state.similarPlaces}},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,t.next=3,n.dispatch("getReviews");case 3:return t.next=5,n.dispatch("getPlaceDetails",o.place);case 5:return t.next=7,n.dispatch("getSimilarPlaces");case 7:case"end":return t.stop()}}),t)})))()}},x=(n(445),n(36)),component=Object(x.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"booking-container"},[o("TheNavbar"),e._v(" "),o("div",{staticClass:"img-container"},[o("carousel",{attrs:{photos:e.allPlaceImgs}})],1),e._v(" "),o("div",{staticClass:"place-description-container"},[o("div",{staticClass:"place-description"},[o("div",{staticClass:"place-name"},[o("h2",[e._v("\n          "+e._s(e.placeDetails.name)+"\n        ")]),e._v(" "),o("p",[e._v("\n          "+e._s(e.placeDetails.business_status)+"\n        ")])]),e._v(" "),o("div",{staticClass:"place-rating"},[o("p",[e._v("\n          "+e._s(e.placeDetails.rating)+"\n        ")]),e._v(" "),o("img",{attrs:{src:n(444),alt:"star"}})])])]),e._v(" "),o("div",{staticClass:"place-info-container"},[o("div",{staticClass:"place-address"},[o("a",{staticClass:"address",attrs:{href:e.placeDetails.url,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:"location-dot"}}),e._v("\n        "+e._s(e.placeDetails.vicinity)+"\n      ")],1),e._v(" "),e.placeDetails.international_phone_number?o("a",{staticClass:"contact",attrs:{href:"tel:"+e.placeDetails.international_phone_number}},[o("font-awesome-icon",{attrs:{icon:"phone"}}),e._v("\n        "+e._s(e.placeDetails.international_phone_number)+"\n      ")],1):e._e()])]),e._v(" "),o("div",{staticClass:"reviews-container"},[o("div",{staticClass:"reviews-header"},[o("p",[e._v(e._s(e.numberOfReviews))]),e._v(" "),e.seeAllReviews?o("p",{on:{click:e.seeAllReviewsHandler}},[e._v("\n        "+e._s(e.toggleSeeReview)+"\n      ")]):e._e()]),e._v(" "),e.seeReviews?e._e():o("div",{staticClass:"review-card-container"},e._l(e.reviews,(function(e){return o("review-card",{key:e._id,attrs:{review:e}})})),1)]),e._v(" "),e.seeReviews?o("div",{staticClass:"seeAll-review-container"},e._l(e.allReviews,(function(e){return o("review-full",{key:e._id,attrs:{review:e}})})),1):e._e(),e._v(" "),o("div",{staticClass:"recommended-places-container"},[e._m(0),e._v(" "),o("div",{staticClass:"recommended-places"},e._l(e.similarPlaces,(function(e,t){return o("place-card",{key:t,attrs:{place:e}})})),1)]),e._v(" "),o("div",{staticClass:"book-btns"},[o("button",{staticClass:"yellow-btn",on:{click:e.revealModal}},[e._v("Book ride")]),e._v(" "),o("a",{staticClass:"transparent-btn",attrs:{href:e.placeDetails.url,target:"_blank"}},[e._v("\n      Get Directions\n    ")])]),e._v(" "),o("div",{staticClass:"ride-modal-container"},[e.showModal?o("ride-modal",{on:{"close-modal":e.onCloseModal}}):e._e()],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-header"},[n("h3",[e._v("More like this")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{TheNavbar:n(322).default,Carousel:n(411).default,ReviewFull:n(410).default,PlaceCard:n(408).default,RideModal:n(409).default})}}]);