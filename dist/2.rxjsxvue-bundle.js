webpackJsonp([2],{358:function(t,e,o){var n,a;o(359),n=o(361),a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a._scopeId="data-v-2eb43e82",t.exports=n},359:function(t,e,o){var n=o(360);"string"==typeof n&&(n=[[t.id,n,""]]);o(6)(n,{});n.locals&&(t.exports=n.locals)},360:function(t,e,o){e=t.exports=o(5)(),e.push([t.id,".two[data-v-2eb43e82]{color:#aed123}.haha[data-v-2eb43e82]{display:block;color:#e4729d}",""])},361:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{b:"this is a vue 2.0 jsx demo page",d:[10,20,30]}},methods:{eventinjsx:function(t){console.log(t)}},render:function(t){var e=[];return this.d.map(function(o,n){e.push(t("li",null,[o]))}),t("div",{class:"two"},[this.b,t("ul",null,[e]),t("button",{on:{click:this.eventinjsx.bind(this,1)}},["haha"]),t("router-link",{attrs:{to:"/hello"},class:"haha"},["to 1"])])}}}});