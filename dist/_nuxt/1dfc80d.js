(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{308:function(t,e,o){var content=o(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("634433df",content,!0,{sourceMap:!1})},330:function(t,e,o){"use strict";o(308)},331:function(t,e,o){var r=o(65)(!1);r.push([t.i,'*[data-v-7a49f4de]{font-family:"Noto Sans",sans-serif}body[data-v-7a49f4de]{position:relative}.scroll-container[data-v-7a49f4de]{position:relative;display:flex;flex-direction:row;overflow:hidden;overflow-x:scroll;padding:0 .5rem}.scroll-container[data-v-7a49f4de] ::-webkit-scrollbar{height:0;width:0;background:#fff}.scroll-container[data-v-7a49f4de] ::-webkit-scrollbar-thumb:horizontal{background:#fff;border-radius:10px}.scroll-container .scroll-text[data-v-7a49f4de]{display:flex;grid-gap:60px;gap:60px;padding:0 .5rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.scroll-container .scroll-text a[data-v-7a49f4de]{text-decoration:none}.scroll-container .scroll-text a p[data-v-7a49f4de]{font-family:"AirbnbCereal_W_Lt";color:#1d405a;font-size:14px;font-weight:400;cursor:pointer;width:140px}.scroll-container .scroll-text .yellow[data-v-7a49f4de]:after{content:"";position:absolute;height:2px;width:60px;bottom:0;background:#fcf300}.line[data-v-7a49f4de]{margin-top:10px;height:22px;background:#000;max-width:428px}',""]),t.exports=r},354:function(t,e,o){"use strict";o.r(e);o(44),o(34),o(43),o(13),o(67),o(37),o(68);var r=o(27),n=o(69);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={data:function(){return{showYellow:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({cities:function(t){return t.cities},popularPlaces:function(t){return t.popularPlaces}})),methods:{setYellow:function(){this.showYellow=!this.showYellow},hideYellow:function(){this.showYellow=!this.showYellow}}},d=c,f=(o(330),o(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"scroll-container"},[t._l(t.cities,(function(e,r){return o("div",{key:e.id,staticClass:"scroll-text"},[o("a",{class:{yellow:t.showYellow},attrs:{href:"/"+e.city}},[o("p",{on:{mouseover:t.setYellow,mouseleave:t.hideYellow}},[t._v("\n          "+t._s(e.city)+"\n        ")])])])})),t._v(" "),o("div",{staticClass:"line"})],2)])}),[],!1,null,"7a49f4de",null);e.default=component.exports}}]);