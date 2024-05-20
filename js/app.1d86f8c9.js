(function(){"use strict";var e={7242:function(e,t,n){n.d(t,{A:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"boxTitle"},[t("div",{staticClass:"title",style:{backgroundColor:e.bgc}},[t("div",{staticClass:"left",on:{click:function(t){return e.$router.go(-1)}}},[e._t("go",(function(){return[t("van-icon",{attrs:{name:"arrow-left",color:e.leftColor}})]}))],2),t("div",{staticClass:"center",style:{color:e.color,fontWeight:e.blob}},[e._t("title",(function(){return[e._v("会员登录")]}))],2)])])},r=[],i={name:"NavBarIndex",props:{color:{type:String,default:"black"},bgc:{type:String,default:"#fff"},blob:{default:400},leftColor:{default:"black"}}},c=i,s=n(1656),a=(0,s.A)(c,o,r,!1,null,"db959698",null),u=a.exports},9652:function(e,t,n){n.d(t,{FD:function(){return s},U4:function(){return i},iH:function(){return c},ss:function(){return r}});var o=n(7987);function r(){return o.A.get("/cart/list")}function i(e){return o.A.post("/cart/add",{...e})}function c(e){return o.A.post("/cart/update",e)}function s(e){return o.A.post("/cart/clear",{cartIds:e})}},2069:function(e,t,n){var o=n(6848),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"searchviewIndex"}},[t("router-view")],1)],1)},i=[],c={name:"App"},s=c,a=n(1656),u=(0,a.A)(s,r,i,!1,null,null,null),d=u.exports,f=n(2208),l=n(1450),p=(n(7231),n(9363)),h=(n(3425),n(6141)),m=(n(3212),n(6874)),g=(n(9704),n(1981)),b=(n(79),n(5144)),v=(n(7057),n(6749)),y=(n(9809),n(4365)),A=(n(9867),n(4648)),k=(n(2427),n(5240)),T=(n(4368),n(8890)),w=(n(2564),n(1510)),C=(n(3050),n(3580)),O=(n(440),n(162)),_=(n(2512),n(6852)),I=(n(4420),n(6790));o.Ay.use(p.A).use(h.A).use(m.A).use(g.A).use(b.A).use(v.A).use(y.A).use(A.A).use(k.A).use(T.A).use(w.A).use(C.A).use(O.A).use(_.A).use(I.A);var D=n(7242);o.Ay.component("NavBar",D.A),o.Ay.config.productionTip=!1,new o.Ay({router:f.A,store:l.A,render:e=>e(d)}).$mount("#app")},2208:function(e,t,n){n.d(t,{A:function(){return S}});var o=n(6848),r=n(6178);const i=()=>n.e(5).then(n.bind(n,1005)),c=()=>n.e(261).then(n.bind(n,6261)),s=()=>n.e(811).then(n.bind(n,8811)),a=()=>n.e(240).then(n.bind(n,240)),u=()=>n.e(555).then(n.bind(n,6555));var d=[{path:"/",component:i,redirect:"/home",children:[{path:"home",component:c},{path:"classfiction",component:s},{path:"cart",component:a},{path:"my",component:u}]}],f=n(1450);const l=()=>n.e(51).then(n.bind(n,3051));var p=[{path:"/login",component:l,beforeEnter:(e,t,n)=>{f.A.state.loginToUrl=t.fullPath,n()}}];const h=()=>n.e(342).then(n.bind(n,7342));var m=[{path:"/myorder",component:h}];const g=()=>n.e(823).then(n.bind(n,2823));var b=[{path:"/pay",component:g}];const v=()=>n.e(47).then(n.bind(n,5047)),y=()=>n.e(241).then(n.bind(n,3241));var A=[{path:"/prodetail/:goodsId",component:v},{path:"/page/order/detail/:id",component:y}];const k=()=>n.e(461).then(n.bind(n,2461)),T=()=>n.e(367).then(n.bind(n,1367));var w=[{path:"/searchlist",component:k},{path:"/searchview",component:T}];const C=()=>n.e(14).then(n.bind(n,6014)),O=()=>n.e(411).then(n.bind(n,8411));var _=[{path:"/adresslist",component:O,beforeEnter(e,t,n){if("/pay"===t.path)f.A.state.addressTo=t;else{if("/adressedit"===t.path&&"888"===t.query.token)return n();f.A.state.addressTo=void 0}n()}},{path:"/adressedit",component:C}];o.Ay.use(r.Ay);const I=[...d,...p,...m,...b,...A,...w,..._],D=new r.Ay({routes:I}),x=["/pay","/myroder"];D.beforeEach(((e,t,n)=>{x.includes(e.path)?f.A.state.user.userInfo?n():n("/login"):n()}));var S=D},1450:function(e,t,n){n.d(t,{A:function(){return C}});var o=n(6848),r=n(3518),i=n(2272),c=n(2208);const s={userInfo:(0,i.c7)("hm_shopping_info")},a={cmUserInfo(e,t){e.userInfo=t,(0,i.cT)("hm_shopping_info",t)}},u={clearLogin(e){e.commit("cmUserInfo",null),e.commit("cart/commitData",[],{root:!0}),(0,i.Od)("check"),(0,i.Od)("hm_shopping_info"),(0,i.Od)("histroyRecode"),c.A.go(0)}},d={};var f={namespaced:!0,state:s,mutations:a,actions:u,getters:d};const l={histroyRecode:(0,i.c7)("histroyRecode")?(0,i.c7)("histroyRecode"):[]},p={addHistroyRecode(e,t){const n=e.histroyRecode,o=n.indexOf(t);-1!==o&&n.splice(o,1),n.unshift(t),(0,i.cT)("histroyRecode",n)},delHistroyRecode(e,t){e.histroyRecode.splice(e.histroyRecode.indexOf(t),1),(0,i.cT)("histroyRecode",e.histroyRecode)},delAllHistroyRecode(e){e.histroyRecode=[],(0,i.Od)("histroyRecode")}},h={},m={};var g={namespaced:!0,state:l,mutations:p,actions:h,getters:m},b=(n(9704),n(1981)),v=(n(4114),n(9652));const y={cartList:[]},A={commitData(e,t){if(t instanceof Array)e.cartList=t;else if(t instanceof Object){const n=e.cartList.find((e=>e.goods_id===t.goodsId));n.goods_num=t.goodsNum}},changeIsDecision(e,t){const n=(0,i.c7)("check"),o=e.cartList.find((e=>t.goodsId===e.id));o.isDecision=t.bool?1:0;const r=n.map((e=>(e.id===t.goodsId&&(e.bool=t.bool?1:0),e)));(0,i.cT)("check",r)},modify(e,t){e.cartList.forEach((e=>{e.isDecision=t?1:0}));const n=(0,i.c7)("check").map((e=>(e.bool=t?1:0,e)));(0,i.cT)("check",n)}},k={async getCartGoods(e){try{const{data:{list:t}}=await(0,v.ss)();let n=(0,i.c7)("check")||[];const o=0!==n.length?t.map((e=>{const t=n.find((t=>e.id===t.id));return t?e.isDecision=t.bool:(e.isDecision=1,n.push({id:e.id,bool:1})),e})):t.map((e=>(e.isDecision=1,n.push({id:e.id,bool:1}),e)));n=n.filter((e=>{const t=o.find((t=>e.id===t.id));return Boolean(t)})),(0,i.cT)("check",n),e.commit("commitData",o)}catch(t){if("缺少必要的参数token, 请先登录"===t)return(0,b.A)("请先登录");(0,b.A)(t)}},async updateCartItem(e,t){const n=await(0,v.iH)(t);200===n.status?e.commit("commitData",t):(0,b.A)("更新失败")},async delCartItem(e){if(0===e.getters.accountTotal)return;const t=e.getters.isDecisionTotal.map((e=>e.id)),n=await(0,v.FD)(t);200===n.status&&((0,b.A)("删除成功"),e.dispatch("getCartGoods"))}},T={total(e,t){const n=t.isDecisionTotal.reduce(((e,t)=>t.goods.goods_price_max*t.goods_num+e),0);return n.toFixed(2)},accountTotal(e,t){return t.isDecisionTotal.length},isDecisionTotal(e){return e.cartList.filter((e=>1===e.isDecision))}};var w={namespaced:!0,state:y,mutations:A,actions:k,getters:T};o.Ay.use(r.Ay);var C=new r.Ay.Store({state:{loginToUrl:"/home",addressTo:void 0},modules:{user:f,search:g,cart:w}})},2272:function(e,t,n){n.d(t,{Od:function(){return i},c7:function(){return o},cT:function(){return r}});const o=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},r=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},i=e=>{localStorage.removeItem(e)}},7987:function(e,t,n){n(2427);var o=n(5240),r=(n(9704),n(1981)),i=(n(4114),n(8355)),c=n(1450),s=n(2208);const a=i.A.create({baseURL:"https://smart-shop.itheima.net/index.php?s=/api",timeout:5e3});a.interceptors.request.use((function(e){return r.A.loading({message:"加载中",forbidClick:!0,duration:0,loadingType:"spinner"}),e.headers.platform="H5",c.A.state.user.userInfo&&(e.headers["Access-Token"]=c.A.state.user.userInfo.token),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){const t=e.data;return 200!==t.status?((0,r.A)(t.message),Promise.reject(t.message)):(r.A.clear(),t)}),(function(e){return"timeout of 5000ms exceeded"===e.message?(0,r.A)("请求超时"):"Network Error"===e.message?(0,r.A)("网络错误"):(401===e.state&&o.A.confirm({title:"未登录",message:"登录才能查看"}).then((()=>{s.A.push("/login")})).catch((()=>{})),Promise.reject(e))})),t.A=a}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(s=!1,i<c&&(c=i));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{5:"f21a2811",14:"7ed2678f",47:"24a437b7",51:"4b26f66c",240:"94970b40",241:"d512e5e5",261:"6817efba",342:"bd1fc7f0",367:"9b43ce14",411:"7c4582e2",461:"f426daa9",555:"ed718612",811:"bc7d776d",823:"658ba59d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{5:"45ec4079",14:"bf8dd969",47:"b486a590",51:"2e6c3b66",240:"5107b8b8",241:"38aa99f8",261:"e1e4759a",342:"a23d93cf",367:"2732936e",411:"7893e659",461:"339330bf",555:"6e72ea32",811:"99299b18",823:"c413b154"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shoppingmobile:";n.l=function(o,r,i,c){if(e[o])e[o].push(r);else{var s,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",n.nc&&(c.nonce=n.nc);var s=function(n){if(c.onerror=c.onload=null,"load"===n.type)r();else{var o=n&&n.type,s=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");a.name="ChunkLoadError",a.code="CSS_CHUNK_LOAD_FAILED",a.type=o,a.request=s,c.parentNode&&c.parentNode.removeChild(c),i(a)}};return c.onerror=c.onload=s,c.href=t,o?o.parentNode.insertBefore(c,o.nextSibling):document.head.appendChild(c),c},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){r=c[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var c=n.miniCssF(o),s=n.p+c;if(t(c,s))return r();e(o,s,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={5:1,14:1,47:1,51:1,240:1,241:1,261:1,342:1,367:1,411:1,461:1,555:1,811:1,823:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var c=n.p+n.u(t),s=new Error,a=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",s.name="ChunkLoadError",s.type=i,s.request=c,r[1](s)}};n.l(c,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],s=o[1],a=o[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var d=a(n)}for(t&&t(o);u<c.length;u++)i=c[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkshoppingmobile"]=self["webpackChunkshoppingmobile"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2069)}));o=n.O(o)})();
//# sourceMappingURL=app.1d86f8c9.js.map