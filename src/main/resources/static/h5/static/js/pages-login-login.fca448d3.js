(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"24cb":function(t,e,n){var i=n("3ec1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("9b5a8604",i,!0,{sourceMap:!1,shadowMode:!1})},2501:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tn-code[data-v-0d62945d]{width:0;height:0;position:fixed;z-index:-1}',""]),t.exports=e},2634:function(t,e,n){"use strict";var i=n("24cb"),o=n.n(i);o.a},"29f2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},"2eea":function(t,e,n){"use strict";n.r(e);var i=n("47aa"),o=n("36570");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("59af");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"0d62945d",null,!1,i["a"],void 0);e["default"]=s.exports},36570:function(t,e,n){"use strict";n.r(e);var i=n("3c7a"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"3c7a":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i={name:"tn-verification-code",props:{seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},countDownText:{type:String,default:"s秒后重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{timer:null,secNum:this.seconds,canGetCode:!0}},watch:{seconds:{handler:function(t){this.secNum=t},immediate:!0}},mounted:function(){this.checkKeepRunning()},beforeDestroy:function(){this.setTimeToStorage(),this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$tCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$tCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.countDownText.replace(/s|S/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.countDownText.replace(/s|S/,t.secNum)):(t.reset(),t.$emit("end"))}),1e3)},reset:function(){this.canGetCode=!0,this.timer&&(clearInterval(this.timer),this.timer=null),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorageSync(this.uniqueKey+"_$tCountDownTimestamp",t+this.secNum)}}}};e.default=i},"3ec1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tn-custom-nav-bar__back[data-v-bf97464a]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-bf97464a]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-bf97464a]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 粒子背景 start*/.template-login2[data-v-bf97464a]{background:linear-gradient(90deg,#892fe8,#3d7eff);min-height:100vh}.mycanvas[data-v-bf97464a]{position:absolute;background-size:cover;width:100vw;height:100vh;justify-content:center;flex-direction:column;color:#fff}.login[data-v-bf97464a]{position:relative;height:100%;z-index:1\r\n  /* 内容 start */\r\n  /* 切换 start */\r\n  /* 切换 end */\r\n  /* 登录注册信息 start */\r\n  /* 登录注册信息 end */\r\n  /* 登录方式切换 start */\r\n  /* 登录方式切换 end */\r\n  /* 内容 end */}.login__wrapper[data-v-bf97464a]{padding-top:%?400?%;width:100%}.login__mode[data-v-bf97464a]{position:relative;margin:0 auto;width:%?476?%;height:%?77?%;background-color:hsla(0,0%,100%,.2);backdrop-filter:blur(%?6?%);-webkit-backdrop-filter:blur(%?6?%);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?39?%}.login__mode__item[data-v-bf97464a]{height:%?77?%;width:100%;line-height:%?77?%;text-align:center;font-size:%?31?%;color:#fff;letter-spacing:1em;text-indent:1em;z-index:2;transition:all .4s}.login__mode__item--active[data-v-bf97464a]{font-weight:700;color:#fff}.login__mode__slider[data-v-bf97464a]{position:absolute;height:inherit;width:calc(%?476?% / 2);border-radius:inherit;box-shadow:%?0?% %?18?% %?72?% %?18?% rgba(0,195,255,.1);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.login__info[data-v-bf97464a]{margin:0 %?50?%;margin-top:%?105?%;padding:%?30?% %?51?%;padding-bottom:0;border-radius:%?20?%;background-color:hsla(0,0%,100%,.2);backdrop-filter:blur(%?6?%);-webkit-backdrop-filter:blur(%?6?%);border:%?2?% solid hsla(0,0%,100%,.1);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1)}.login__info__item__input[data-v-bf97464a]{margin-top:%?59?%;width:100%;height:%?77?%;border:%?1?% solid #fff;border-radius:%?39?%}.login__info__item__input__left-icon[data-v-bf97464a]{width:10%;font-size:%?44?%;margin-left:%?20?%;color:#fff}.login__info__item__input__content[data-v-bf97464a]{width:80%;padding-left:%?10?%}.login__info__item__input__content--verify-code[data-v-bf97464a]{width:56%}.login__info__item__input__content uni-input[data-v-bf97464a]{font-size:%?24?%;color:#fff}.login__info__item__input__right-icon[data-v-bf97464a]{width:10%;font-size:%?44?%;margin-right:%?20?%;color:#fff}.login__info__item__input__right-verify-code[data-v-bf97464a]{width:34%;margin-right:%?20?%}.login__info__item__button[data-v-bf97464a]{margin-top:%?75?%;margin-bottom:%?39?%;width:100%;height:%?77?%;text-align:center;font-size:%?31?%;font-weight:700;line-height:%?77?%;letter-spacing:1em;text-indent:1em;border-radius:%?100?%;color:#fff;background-color:hsla(0,0%,100%,.2)}.login__info__item__tips[data-v-bf97464a]{margin:%?30?% 0;color:#fff}.login__way[data-v-bf97464a]{margin:0 auto;margin-top:%?110?%}.login__way__item--icon[data-v-bf97464a]{width:%?77?%;height:%?77?%;font-size:%?50?%;border-radius:%?100?%;margin-bottom:%?18?%;position:relative;z-index:1}.login__way__item--icon[data-v-bf97464a]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(http://124.71.39.108/static/image/cool_bg_image/icon_bg5.png)}[data-v-bf97464a] .input-placeholder{font-size:%?24?%;color:#e6e6e6}',""]),t.exports=e},4309:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var o=i(n("7e5d")),r={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=r},"47aa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-code-class tn-code"})},o=[]},"4de1":function(t,e,n){"use strict";n.r(e);var i=n("4309"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"59af":function(t,e,n){"use strict";var i=n("ac69"),o=n.n(i);o.a},"7e5d":function(t,e,n){n("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$tn.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$tn.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$tn.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$tn.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$tn.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(z){d=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var o=e&&e.prototype instanceof g?e:g,r=Object.create(o.prototype),s=new E(i||[]);return a(r,"_invoke",{value:C(t,n,s)}),r}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(z){return{type:"throw",arg:z}}}e.wrap=f;var p={};function g(){}function v(){}function _(){}var m={};d(m,c,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b($([])));x&&x!==n&&r.call(x,c)&&(m=x);var w=_.prototype=g.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;a(this,"_invoke",{value:function(o,a){function s(){return new e((function(n,s){(function n(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(o,a,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return I()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=h(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function $(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=_,a(w,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:v,configurable:!0}),v.displayName=d(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,d(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},y(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,i,o,r){void 0===r&&(r=Promise);var a=new k(f(t,n,i,o),r);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(w),d(w,u,"Generator"),d(w,c,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=$,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:$(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports},a7d4:function(t,e,n){"use strict";n.r(e);var i=n("b0e5"),o=n("ae51");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("2634");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"bf97464a",null,!1,i["a"],void 0);e["default"]=s.exports},ac69:function(t,e,n){var i=n("2501");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5dd3e224",i,!0,{sourceMap:!1,shadowMode:!1})},ae51:function(t,e,n){"use strict";n.r(e);var i=n("c5e1"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},b0e5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnButton:n("c39a").default,tnVerificationCode:n("2eea").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-login2"},[n("v-uni-canvas",{staticClass:"mycanvas",style:"width:"+t.screenWidth+"px;height:"+t.screenHeight+"px;",attrs:{"canvas-id":"star_canvas"}}),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login__wrapper"},[n("v-uni-view",{staticClass:"login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[0===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"},model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),1===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入注册手机号码"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-code"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content login__info__item__input__content--verify-code"},[n("v-uni-input",{attrs:{"placeholder-class":"input-placeholder",placeholder:"请输入验证码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-verify-code",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm",padding:"5rpx 10rpx",width:"100%",shape:"round"}},[t._v(t._s(t.tips))])],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),n("v-uni-view",{staticClass:"login__info__item__button tn-cool-bg-color-7--reverse",attrs:{"hover-class":"tn-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handLogin.apply(void 0,arguments)}}},[t._v(t._s(0===t.currentModeIndex?"登录":"注册"))]),0===t.currentModeIndex?n("v-uni-view",{staticClass:"login__info__item__tips",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toReg.apply(void 0,arguments)}}},[t._v("注册用户")]):t._e()],2)],1)],1),n("tn-verification-code",{ref:"code",attrs:{uniqueKey:"login-demo-2",seconds:60},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1)},r=[]},c39a:function(t,e,n){"use strict";n.r(e);var i=n("29f2"),o=n("4de1");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("d40a");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"778c77a3",null,!1,i["a"],void 0);e["default"]=s.exports},c5e1:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("cb29"),n("14d9"),n("99af"),n("e9c4");var o=i(n("5530")),r=i(n("d4ec")),a=i(n("bee2")),s=i(n("f1a7")),c=n("64a0"),l=n("26cb"),u=function(){function t(e,n){(0,r.default)(this,t),this.x=e,this.y=n,this.r=1+2*Math.random(),this.sx=2*Math.random()-1,this.sy=2*Math.random()-1}return(0,a.default)(t,[{key:"draw",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#fff",t.fill()}},{key:"move",value:function(t,e){this.x+=this.sx,this.y+=this.sy,(this.x>t||this.x<0)&&(this.sx=-this.sx),(this.y>e||this.y<0)&&(this.sy=-this.sy)}},{key:"drawLine",value:function(t,e){var n=this.x-e.x,i=this.y-e.y,o=Math.sqrt(n*n+i*i);if(o<100){var r=(100-o)/300*1;t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(e.x,e.y),t.closePath(),t.strokeStyle="rgba(255, 255, 255, "+r+")",t.strokeWidth=1,t.stroke()}}}]),t}(),d=uni.getSystemInfoSync(),f=1e3,h={name:"login-demo-2",mixins:[s.default],data:function(){return{ctx:null,screenWidth:d.screenWidth,screenHeight:d.screenHeight,timer:null,points:[],currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,tips:"获取验证码",username:null,passwd:null,serverUrl:c.serverUrl}},onLoad:function(t){this.username=this.userInfo&&this.userInfo.username,this.passwd=this.userInfo&&this.userInfo.passwd,this.username&&this.passwd&&this.handLogin(),this.from=t.from||"";for(var e=0;e<80;e++)this.points.push(new u(400*Math.random(),Math.random()*f));this.ctx=uni.createCanvasContext("star_canvas"),this.gameloop()},onUnload:function(){clearTimeout(this.timer)},watch:{currentModeIndex:function(t){var e=uni.upx2px(238);this.modeSliderStyle.left="".concat(e*t,"px")}},methods:(0,o.default)((0,o.default)({},(0,l.mapActions)(["updateUserInfo","logout"])),{},{toReg:function(){uni.redirectTo({url:"./register"})},getUserInfos:function(t){var e=this;console.log("getsuerer--------------------------------"),uni.showLoading({title:"微信登录中..."}),uni.getUserProfile({provider:"weixin",desc:"获取用户信息已获取头信息昵称",lang:"zh_CN",success:function(t){console.log(t),e.wechatLogin()},fail:function(t){console.log(t)},complete:function(t){}})},wechatLogin2:function(t){var e=this;uni.login({provider:"weixin",success:function(t){var n=t.code;e.code=n;var i="https://api.weixin.qq.com/sns/jscode2session?appid=".concat("wx2106d56eae24772e","&secret=").concat("0518f699152064d287f8c222a0619d50","&js_code=").concat(n,"&grant_type=authorization_code");uni.request({url:i,success:function(t){console.info("wechatLogin success"),console.info(JSON.stringify(t)),e.open_id=t.data.openid,e.session_key=t.data.session_key,console.info("openid:".concat(e.open_id," sesskey:").concat(e.session_key))}}),console.log(n)}})},wechatLogin:function(t){var e=this;uni.login({provider:"weixin",success:function(t){var n=t.code;uni.request({url:e.serverUrl+"database/wxlogin",data:{code:n},success:function(t){200==t.statusCode&&(console.info("wechatLogin success"),e.open_id=t.data.openid,e.session_key=t.data.session_key,console.info("openid:".concat(e.open_id," sesskey:").concat(e.session_key)),e.handLogin())}}),console.log(n)}})},handLogin:function(){var t=this;console.log("------------------\x3ehandLogin"),uni.showLoading({title:"登录中..."}),this.open_id?(console.log("------------------\x3ehandLogin:使用openid登录:"+this.open_id),(0,c.findj)({params:{table:"user",openid:this.open_id}}).then((function(e){uni.hideLoading(),console.log("openid find "+e),e?(console.log("openid login success "+e),t.loginSuccess(e)):(console.log("openid login add "),(0,c.savej)({params:{table:"user",openid:t.open_id,roletype:"2"}}).then((function(e){if(console.log("openid login add success "+e),e){var n={};n.id=e,n.openid=t.open_id,t.loginSuccess(n)}})).catch((function(t){uni.hideLoading()})))})).catch((function(t){uni.hideLoading()}))):(console.log("------------------\x3ehandLogin:用户名密码登录:"),this.username&&this.username?(0,c.findj)({params:{table:"user",username:this.username,passwd:this.passwd}}).then((function(e){uni.hideLoading(),e?t.loginSuccess(e):uni.showToast({title:"用户名密码错误!"})})).catch((function(t){console.log(t),uni.hideLoading()})):uni.showToast({icon:"none",title:"请检查输入"}))},loginSuccess:function(t){uni.hideLoading(),console.info(JSON.stringify(t)),this.updateUserInfo(t),setTimeout((function(){uni.switchTab({url:"../index/index"})}),500)},gameloop:function(){this.timer=setTimeout(this.gameloop,100),this.paint()},paint:function(){this.ctx.clearRect(0,0,400,f);for(var t=0;t<this.points.length;t++){this.points[t].move(400,f),this.points[t].draw(this.ctx);for(var e=t+1;e<this.points.length;e++)this.points[t].drawLine(this.ctx,this.points[e])}this.ctx.draw()},modeSwitch:function(t){this.currentModeIndex=t,this.showPassword=!1},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$t.message.loading("正在获取验证码"),setTimeout((function(){t.$t.message.closeLoading(),t.$t.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$t.message.toast(this.$refs.code.secNum+"秒后再重试")},codeChange:function(t){this.tips=t}}),computed:(0,o.default)({},(0,l.mapState)(["userInfo"]))};e.default=h},c973:function(t,e,n){function i(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,o)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,c,"next",t)}function c(t){i(a,o,r,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},cb29:function(t,e,n){var i=n("23e7"),o=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:o}),r("fill")},d40a:function(t,e,n){"use strict";var i=n("d888"),o=n.n(i);o.a},d888:function(t,e,n){var i=n("fe39");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("78136558",i,!0,{sourceMap:!1,shadowMode:!1})},f1a7:function(t,e,n){var i=n("7ec2").default,o=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return o(i().mark((function e(){var n,o,r;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,o=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,o=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",o),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},fe39:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e}}]);