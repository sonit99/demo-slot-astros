window.__require=function t(e,o,n){function i(r,a){if(!o[r]){if(!e[r]){var h=r.split("/");if(h=h[h.length-1],!e[h]){var s="function"==typeof __require&&__require;if(!a&&s)return s(h,!0);if(c)return c(h,!0);throw new Error("Cannot find module '"+r+"'")}r=h}var p=o[r]={exports:{}};e[r][0].call(p.exports,function(t){return i(e[r][1][t]||t)},p,p.exports,t,e,o,n)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({"Chat.Emo":[function(t,e,o){"use strict";cc._RF.push(e,"104d6020StEtq+nt8YiHm4f","Chat.Emo");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,h=r.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.emo=null,e}return i(e,t),e.prototype.setDataEmo=function(t){BGUI.ZLog.log("setDataEmo = ",t),this.emo.node.active=!0,this.emo.defaultAnimation=t,this.emo.setAnimation(0,t,!0)},c([h(sp.Skeleton)],e.prototype,"emo",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],"Chat.Manager":[function(t,e,o){"use strict";cc._RF.push(e,"3ee11RgMxJCxJMfOmbIR2jW","Chat.Manager");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./Chat.Emo"),a=t("./Chat.Text"),h=cc._decorator,s=h.ccclass,p=(h.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.onEnable=function(){BGUI.EventDispatch.instance.add("SHOW_CHAT_EMO",this.showChatEmo,this),BGUI.EventDispatch.instance.add("SHOW_CHAT_TEXT",this.showChatText,this)},e.prototype.onDisable=function(){BGUI.EventDispatch.instance.remove("SHOW_CHAT_EMO",this.showChatEmo,this),BGUI.EventDispatch.instance.remove("SHOW_CHAT_TEXT",this.showChatText,this)},e.prototype.showChatText=function(t){var e=t.node;this.hideAllEffectChat(e),BGUI.BundleManager.instance.getPrefabFromBundle("prefabs/CHAT_TEXT","Chat",function(o){var n=cc.instantiate(o);n.name="CHAT_TEXT",n.getComponent(a.default).setDataChat(t.content,t.vt),n.y=100,0===t.vt?n.x=180:n.x=-180,e.addChild(n,999)}),cc.tween(e).delay(3).call(function(){e.getChildByName("CHAT_TEXT")&&e.getChildByName("CHAT_TEXT").removeFromParent()}).start()},e.prototype.showChatEmo=function(t){var e=t.node;this.hideAllEffectChat(e),BGUI.BundleManager.instance.getPrefabFromBundle("prefabs/CHAT_EMO","Chat",function(o){var n=cc.instantiate(o);n.name="CHAT_EMO",n.getComponent(r.default).setDataEmo(t.content),e.addChild(n,999)}),cc.tween(e).delay(3).call(function(){e.getChildByName("CHAT_EMO")&&e.getChildByName("CHAT_EMO").removeFromParent()}).start()},e.prototype.hideAllEffectChat=function(t){t.stopAllActions(),t.getChildByName("CHAT_EMO")&&t.getChildByName("CHAT_EMO").removeFromParent(),t.getChildByName("CHAT_TEXT")&&t.getChildByName("CHAT_TEXT").removeFromParent()},c([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{"./Chat.Emo":"Chat.Emo","./Chat.Text":"Chat.Text"}],"Chat.Popup":[function(t,e,o){"use strict";cc._RF.push(e,"be47bOoUdJKFJ8k4U8ajTPO","Chat.Popup");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../../framework/localize/LanguageMgr"),a=cc._decorator,h=a.ccclass,s=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.UI_CHAT=null,e.edtInputChat=null,e.viewEmotion=null,e.viewQuickChat=null,e.emo=null,e.emotionChatContent=null,e.arrQuickChatLang=["boogyi.quick_chat_1","boogyi.quick_chat_2","boogyi.quick_chat_3","boogyi.quick_chat_4","boogyi.quick_chat_5","boogyi.quick_chat_6","boogyi.quick_chat_7","boogyi.quick_chat_8","boogyi.quick_chat_9","boogyi.quick_chat_10","boogyi.quick_chat_11","boogyi.quick_chat_12"],e.arrayEmotion=[],e}return i(e,t),e.prototype.onLoad=function(){this.emotionChatContent.removeAllChildren();for(var t=this.emo,e=1;e<=16;e++){var o=this.createButton(t,e);this.arrayEmotion.push(o),this.emotionChatContent.addChild(o)}this.switchPnChat("EMOTION")},e.prototype.onDestroy=function(){for(var t=0,e=this.arrayEmotion;t<e.length;t++)e[t].off("click",this.onClickChatEmotion,this)},e.prototype.setPosUICHAT=function(t){switch(console.log("setPosUICHAT = ",t),t){case 0:this.UI_CHAT.getComponent(cc.Widget).isAlignLeft=!0,this.UI_CHAT.getComponent(cc.Widget).left=20;break;case 1:this.UI_CHAT.getComponent(cc.Widget).isAlignRight=!0,this.UI_CHAT.getComponent(cc.Widget).right=20}console.log("this.UI_CHAT.position.x = ",this.UI_CHAT.position.x)},e.prototype.createButton=function(t,e){var o=new cc.Node;o.width=80,o.height=80,o.anchorX=.5,o.anchorY=.5,o.name=e.toString(),o.addComponent(cc.Button);var n=new cc.Node,i=n.addComponent(sp.Skeleton);return i.skeletonData=t,i.premultipliedAlpha=!1,i.setSkin("default"),i.setAnimation(0,e.toString(),!0),i.defaultAnimation=e.toString(),o.addChild(n),n.position=cc.v3(0,0,0),n.anchorX=.5,n.anchorY=.5,n.setScale(.5),o.on("click",this.onClickChatEmotion,this),o},e.prototype.switchQuickChat=function(){this.switchPnChat("QUICK")},e.prototype.switchEmotionChatContent=function(){this.switchPnChat("EMOTION")},e.prototype.switchPnChat=function(t){switch(BGUI.ZLog.log("switchPnChat...............-> "),t){case"QUICK":this.viewEmotion.active=!1,this.viewQuickChat.active=!0;break;case"EMOTION":this.viewQuickChat.active=!1,this.viewEmotion.active=!0}},e.prototype.sendChatText=function(){if(BGUI.ZLog.log("sendChatText...............-> "),this.edtInputChat.string.trim().length>0){var t=this.edtInputChat.string.trim();t=t.replace(/(\r\n?|\n){1,}/g," "),this.edtInputChat.string="",BGUI.EventDispatch.instance.emit("SEND_CHAT_TEXT",t),this.onClosePopup()}},e.prototype.onClickChatQuick=function(t,e){BGUI.ZLog.log("onClickChatQuick...............-> "),BGUI.EventDispatch.instance.emit("SEND_CHAT_TEXT",r.LanguageMgr.getString(this.arrQuickChatLang[e])),this.onClosePopup()},e.prototype.onClickChatEmotion=function(t){BGUI.ZLog.log("onClickChatEmotion...............-> "),BGUI.EventDispatch.instance.emit("SEND_CHAT_EMO",t.node.name),this.onClosePopup()},e.prototype.onClosePopup=function(){this.node.getChildByName("mask").active=!1,this.node.getChildByName("UI_CHAT").active=!1},e.prototype.onEditingReturn=function(){this.sendChatText()},c([s(cc.Node)],e.prototype,"UI_CHAT",void 0),c([s(cc.EditBox)],e.prototype,"edtInputChat",void 0),c([s(cc.Node)],e.prototype,"viewEmotion",void 0),c([s(cc.Node)],e.prototype,"viewQuickChat",void 0),c([s(sp.SkeletonData)],e.prototype,"emo",void 0),c([s(cc.Node)],e.prototype,"emotionChatContent",void 0),c([h],e)}(cc.Component);o.default=p,cc._RF.pop()},{"../../framework/localize/LanguageMgr":void 0}],"Chat.Text":[function(t,e,o){"use strict";cc._RF.push(e,"5b86bvOfWNLOJT8ScHDif3W","Chat.Text");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,h=r.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lb_chat=null,e.lb_chat1=null,e.sp_left=null,e.sp_right=null,e}return i(e,t),e.prototype.setDataChat=function(t,e){this.lb_chat.string=t,this.lb_chat1.string=t,0===e?(this.sp_left.active=!1,this.sp_right.active=!this.sp_left.active):(this.sp_left.active=!0,this.sp_right.active=!this.sp_left.active)},c([h(cc.Label)],e.prototype,"lb_chat",void 0),c([h(cc.Label)],e.prototype,"lb_chat1",void 0),c([h(cc.Node)],e.prototype,"sp_left",void 0),c([h(cc.Node)],e.prototype,"sp_right",void 0),c([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["Chat.Emo","Chat.Manager","Chat.Popup","Chat.Text"]);