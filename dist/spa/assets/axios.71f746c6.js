import{b as ye}from"./index.feac95db.js";var F={exports:{}},te=function(e,t){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return e.apply(t,a)}},be=te,w=Object.prototype.toString;function H(r){return w.call(r)==="[object Array]"}function D(r){return typeof r=="undefined"}function we(r){return r!==null&&!D(r)&&r.constructor!==null&&!D(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ge(r){return w.call(r)==="[object ArrayBuffer]"}function Ee(r){return typeof FormData!="undefined"&&r instanceof FormData}function xe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Se(r){return typeof r=="string"}function Ce(r){return typeof r=="number"}function ne(r){return r!==null&&typeof r=="object"}function A(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Oe(r){return w.call(r)==="[object Date]"}function Re(r){return w.call(r)==="[object File]"}function Ae(r){return w.call(r)==="[object Blob]"}function ae(r){return w.call(r)==="[object Function]"}function $e(r){return ne(r)&&ae(r.pipe)}function je(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ne(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Pe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),H(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function q(){var r={};function e(a,i){A(r[i])&&A(a)?r[i]=q(r[i],a):A(a)?r[i]=q({},a):H(a)?r[i]=a.slice():r[i]=a}for(var t=0,n=arguments.length;t<n;t++)M(arguments[t],e);return r}function Te(r,e,t){return M(e,function(a,i){t&&typeof a=="function"?r[i]=be(a,t):r[i]=a}),r}function Ue(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:H,isArrayBuffer:ge,isBuffer:we,isFormData:Ee,isArrayBufferView:xe,isString:Se,isNumber:Ce,isObject:ne,isPlainObject:A,isUndefined:D,isDate:Oe,isFile:Re,isBlob:Ae,isFunction:ae,isStream:$e,isURLSearchParams:je,isStandardBrowserEnv:Pe,forEach:M,merge:q,extend:Te,trim:Ne,stripBOM:Ue},E=h;function V(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var se=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(E.isURLSearchParams(t))a=t.toString();else{var i=[];E.forEach(t,function(s,v){s===null||typeof s=="undefined"||(E.isArray(s)?v=v+"[]":s=[s],E.forEach(s,function(l){E.isDate(l)?l=l.toISOString():E.isObject(l)&&(l=JSON.stringify(l)),i.push(V(v)+"="+V(l))}))}),a=i.join("&")}if(a){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},ke=h;function N(){this.handlers=[]}N.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};N.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};N.prototype.forEach=function(e){ke.forEach(this.handlers,function(n){n!==null&&e(n)})};var Be=N,Le=h,De=function(e,t){Le.forEach(e,function(a,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[i])})},ie=function(e,t,n,a,i){return e.config=t,n&&(e.code=n),e.request=a,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},qe=ie,oe=function(e,t,n,a,i){var o=new Error(e);return qe(o,t,n,a,i)},Fe=oe,He=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(Fe("Request failed with status code "+n.status,n.config,null,n.request,n))},O=h,Me=O.isStandardBrowserEnv()?function(){return{write:function(t,n,a,i,o,u){var s=[];s.push(t+"="+encodeURIComponent(n)),O.isNumber(a)&&s.push("expires="+new Date(a).toGMTString()),O.isString(i)&&s.push("path="+i),O.isString(o)&&s.push("domain="+o),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ie=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},_e=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Je=Ie,ze=_e,Ve=function(e,t){return e&&!Je(t)?ze(e,t):t},U=h,Ke=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],We=function(e){var t={},n,a,i;return e&&U.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=U.trim(u.substr(0,i)).toLowerCase(),a=U.trim(u.substr(i+1)),n){if(t[n]&&Ke.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},K=h,Xe=K.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(o){var u=K.isString(o)?a(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),R=h,Ge=He,Ye=Me,Ze=se,Qe=Ve,er=We,rr=Xe,k=oe,W=function(e){return new Promise(function(n,a){var i=e.data,o=e.headers,u=e.responseType;R.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(v+":"+g)}var l=Qe(e.baseURL,e.url);s.open(e.method.toUpperCase(),Ze(l,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function f(){if(!!s){var b="getAllResponseHeaders"in s?er(s.getAllResponseHeaders()):null,y=!u||u==="text"||u==="json"?s.responseText:s.response,S={data:y,status:s.status,statusText:s.statusText,headers:b,config:e,request:s};Ge(n,a,S),s=null}}if("onloadend"in s?s.onloadend=f:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(f)},s.onabort=function(){!s||(a(k("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){a(k("Network Error",e,null,s)),s=null},s.ontimeout=function(){var y="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),a(k(y,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},R.isStandardBrowserEnv()){var c=(e.withCredentials||rr(l))&&e.xsrfCookieName?Ye.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}"setRequestHeader"in s&&R.forEach(o,function(y,S){typeof i=="undefined"&&S.toLowerCase()==="content-type"?delete o[S]:s.setRequestHeader(S,y)}),R.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(y){!s||(s.abort(),a(y),s=null)}),i||(i=null),s.send(i)})},d=h,X=De,tr=ie,nr={"Content-Type":"application/x-www-form-urlencoded"};function G(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function ar(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=W),r}function sr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var P={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:ar(),transformRequest:[function(e,t){return X(t,"Accept"),X(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(G(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(G(t,"application/json"),sr(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||a&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?tr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};P.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){P.headers[e]={}});d.forEach(["post","put","patch"],function(e){P.headers[e]=d.merge(nr)});var I=P,ir=h,or=I,ur=function(e,t,n){var a=this||or;return ir.forEach(n,function(o){e=o.call(a,e,t)}),e},ue=function(e){return!!(e&&e.__CANCEL__)},Y=h,B=ur,cr=ue,fr=I;function L(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var lr=function(e){L(e),e.headers=e.headers||{},e.data=B.call(e,e.data,e.headers,e.transformRequest),e.headers=Y.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Y.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||fr.adapter;return t(e).then(function(a){return L(e),a.data=B.call(e,a.data,a.headers,e.transformResponse),a},function(a){return cr(a)||(L(e),a&&a.response&&(a.response.data=B.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},p=h,ce=function(e,t){t=t||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function s(f,c){return p.isPlainObject(f)&&p.isPlainObject(c)?p.merge(f,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function v(f){p.isUndefined(t[f])?p.isUndefined(e[f])||(n[f]=s(void 0,e[f])):n[f]=s(e[f],t[f])}p.forEach(a,function(c){p.isUndefined(t[c])||(n[c]=s(void 0,t[c]))}),p.forEach(i,v),p.forEach(o,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=s(void 0,e[c])):n[c]=s(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=s(e[c],t[c]):c in e&&(n[c]=s(void 0,e[c]))});var g=a.concat(i).concat(o).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter(function(c){return g.indexOf(c)===-1});return p.forEach(l,v),n};const dr="axios",pr="0.21.4",hr="Promise based HTTP client for the browser and node.js",mr="index.js",vr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},yr={type:"git",url:"https://github.com/axios/axios.git"},br=["xhr","http","ajax","promise","node"],wr="Matt Zabriskie",gr="MIT",Er={url:"https://github.com/axios/axios/issues"},xr="https://axios-http.com",Sr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Cr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Or="dist/axios.min.js",Rr="dist/axios.min.js",Ar="./index.d.ts",$r={"follow-redirects":"^1.14.0"},jr=[{path:"./dist/axios.min.js",threshold:"5kB"}];var Nr={name:dr,version:pr,description:hr,main:mr,scripts:vr,repository:yr,keywords:br,author:wr,license:gr,bugs:Er,homepage:xr,devDependencies:Sr,browser:Cr,jsdelivr:Or,unpkg:Rr,typings:Ar,dependencies:$r,bundlesize:jr},fe=Nr,_={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){_[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Z={},Pr=fe.version.split(".");function le(r,e){for(var t=e?e.split("."):Pr,n=r.split("."),a=0;a<3;a++){if(t[a]>n[a])return!0;if(t[a]<n[a])return!1}return!1}_.transitional=function(e,t,n){var a=t&&le(t);function i(o,u){return"[Axios v"+fe.version+"] Transitional option '"+o+"'"+u+(n?". "+n:"")}return function(o,u,s){if(e===!1)throw new Error(i(u," has been removed in "+t));return a&&!Z[u]&&(Z[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,u,s):!0}};function Tr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),a=n.length;a-- >0;){var i=n[a],o=e[i];if(o){var u=r[i],s=u===void 0||o(u,i,r);if(s!==!0)throw new TypeError("option "+i+" must be "+s);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Ur={isOlderVersion:le,assertOptions:Tr,validators:_},de=h,kr=se,Q=Be,ee=lr,T=ce,pe=Ur,x=pe.validators;function C(r){this.defaults=r,this.interceptors={request:new Q,response:new Q}}C.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=T(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&pe.assertOptions(t,{silentJSONParsing:x.transitional(x.boolean,"1.0.0"),forcedJSONParsing:x.transitional(x.boolean,"1.0.0"),clarifyTimeoutError:x.transitional(x.boolean,"1.0.0")},!1);var n=[],a=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(a=a&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!a){var u=[ee,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var s=e;n.length;){var v=n.shift(),g=n.shift();try{s=v(s)}catch(l){g(l);break}}try{o=ee(s)}catch(l){return Promise.reject(l)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};C.prototype.getUri=function(e){return e=T(this.defaults,e),kr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};de.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(t,n){return this.request(T(n||{},{method:e,url:t,data:(n||{}).data}))}});de.forEach(["post","put","patch"],function(e){C.prototype[e]=function(t,n,a){return this.request(T(a||{},{method:e,url:t,data:n}))}});var Br=C;function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var he=J,Lr=he;function j(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;r(function(a){t.reason||(t.reason=new Lr(a),e(t.reason))})}j.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};j.source=function(){var e,t=new j(function(a){e=a});return{token:t,cancel:e}};var Dr=j,qr=function(e){return function(n){return e.apply(null,n)}},Fr=function(e){return typeof e=="object"&&e.isAxiosError===!0},re=h,Hr=te,$=Br,Mr=ce,Ir=I;function me(r){var e=new $(r),t=Hr($.prototype.request,e);return re.extend(t,$.prototype,e),re.extend(t,e),t}var m=me(Ir);m.Axios=$;m.create=function(e){return me(Mr(m.defaults,e))};m.Cancel=he;m.CancelToken=Dr;m.isCancel=ue;m.all=function(e){return Promise.all(e)};m.spread=qr;m.isAxiosError=Fr;F.exports=m;F.exports.default=m;var _r=F.exports,z=_r;let ve="https://gerprojeto-api.tecnoklim.com.br";const Jr=z.create({baseURL:ve+"/api",withCredentials:!0}),Vr=z.create({baseURL:ve,withCredentials:!0});var Kr=ye(({app:r})=>{r.config.globalProperties.$axios=z,r.config.globalProperties.$api=Jr});export{Jr as api,Kr as default,Vr as sanctum};
