(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{332:function(e,t,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("c6bb8674",content,!0,{sourceMap:!1})},357:function(e,t,r){"use strict";r(332)},358:function(e,t,r){var c=r(65)(!1);c.push([e.i,'*[data-v-341835e8]{font-family:"Noto Sans",sans-serif}body[data-v-341835e8]{position:relative}.cards-container .scroll a[data-v-341835e8]{text-decoration:none}.cards-container .scroll a .card[data-v-341835e8]{background-position:50%;position:relative;margin:1rem 10px;height:410px;transition:transform .5s ease;opacity:.8;padding:0 .8rem}.cards-container .scroll a .card .card-text[data-v-341835e8]{display:flex;flex-direction:column;color:#fff}.cards-container .scroll a .card .card-text h1[data-v-341835e8]{font-size:25px;line-height:31px;margin:290px 0 0;padding:0 .8rem}.cards-container .scroll a .card .card-text p[data-v-341835e8]{width:276px;font-family:"Brown";font-size:14px;font-weight:300;padding:0 .8rem}.cards-container .scroll a .card .card-text img[data-v-341835e8]{position:absolute;z-index:-1;width:296px;height:410px;border-radius:32px}.cards-container .scroll .card[data-v-341835e8]:hover{transform:scale(1.02);opacity:1}',""]),e.exports=c},421:function(e,t,r){"use strict";r.r(t);var c=r(8),o=(r(42),r(47)),n=r.n(o),l={props:["place","name","id","index"],data:function(){return{photoReference:this.place.fullSearchResult.photos[0].photo_reference}},computed:{placeId:function(){return this.place.fullSearchResult.place_id},getImageUrl:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.photoReference,"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE")}},methods:{getPlaceImage:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=".concat(e.photoReference,"&maxwidth=1600&maxheight=1600"),{headers:{"X-RapidAPI-Host":"google-maps28.p.rapidapi.com","X-RapidAPI-Key":"ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60"}}).then((function(e){})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)})))()}}},d=(r(357),r(36)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cards-container"},[r("div",{staticClass:"scroll"},[r("a",{attrs:{href:"/explore/"+e.place.fullSearchResult.place_id}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-text"},[r("h1",[e._v(e._s(e.place.fullSearchResult.name))]),e._v(" "),r("p",[e._v("\n            "+e._s(e.place.fullSearchResult.vicinity)+"\n          ")]),e._v(" "),r("img",{attrs:{src:e.getImageUrl,alt:""}})])])])])])}),[],!1,null,"341835e8",null);t.default=component.exports}}]);