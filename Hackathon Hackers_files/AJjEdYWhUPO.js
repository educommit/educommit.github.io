/*!CK:2774728527!*//*1453173905,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["EXOju"]); }

__d("MessagingRealtimeConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={VIEWER_FBID:"realtime_viewer_fbid"};},null);
__d('ExplicitRegistrationDispatcherUtils',['ErrorUtils','FluxInternalConfig','emptyFunction','monitorCodeUse','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=j,n=false,o=j;f.exports={guessStoreName:m,warn:o,inlineRequiresEnabled:n};},null);
__d('ExplicitRegistrationDispatcher',['Dispatcher_DEPRECATED','ExplicitRegistrationDispatcherUtils','setImmediate'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;'use strict';k=babelHelpers.inherits(m,h);l=k&&k.prototype;function m(n){var o=n.strict;return (function(){l.constructor.call(this);this.$ExplicitRegistrationDispatcher1=o;this.$ExplicitRegistrationDispatcher2=1;this.$ExplicitRegistrationDispatcher3={};this.$ExplicitRegistrationDispatcher4={};this.$ExplicitRegistrationDispatcher5={};}).apply(this,arguments);}m.prototype.explicitlyRegisterStore=function(n){var o=n.getDispatchToken(),p=this.$ExplicitRegistrationDispatcher4[o];this.$ExplicitRegistrationDispatcher5[p]=true;};m.prototype.explicitlyRegisterStores=function(n){n.forEach((function(o){return this.explicitlyRegisterStore(o);}).bind(this));};m.prototype.register=function(n){var o=this.$ExplicitRegistrationDispatcher2++;this.$ExplicitRegistrationDispatcher3[o]=n;this.$ExplicitRegistrationDispatcher5[o]=false;var p=l.register.call(this,this.$ExplicitRegistrationDispatcher7.bind(this,o));this.$ExplicitRegistrationDispatcher4[p]=o;return p;};m.prototype.$ExplicitRegistrationDispatcher7=function(n,o){if(this.$ExplicitRegistrationDispatcher5[n]||!this.$ExplicitRegistrationDispatcher1)this.$ExplicitRegistrationDispatcher3[n](o);};f.exports=m;},null);
__d('ChatDispatcher',['ExplicitRegistrationDispatcher','LogHistory'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;'use strict';var l=i.getInstance('chat_dispatcher');j=babelHelpers.inherits(m,h);k=j&&j.prototype;m.prototype.dispatch=function(n){l.debug('action',n);k.dispatch.call(this,n);};function m(){j.apply(this,arguments);}f.exports=new m({strict:false});},null);
__d('ChatTabActions',['ChatDispatcher','keyMirror'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=i({CLOSE_TAB:null,CLOSE_ALL_TABS:null,CLOSE_FRAGILE_TABS:null,LOWER_TAB:null,OPEN_FRAGILE_TAB:null,OPEN_TAB:null,PERSIST_LOCAL_STATE:null,PROMOTE_TAB:null,RAISE_TAB:null}),k={Types:j,closeTab:function(l,m){h.dispatch({actionType:j.CLOSE_TAB,reason:m,threadID:l});},closeAllTabs:function(){h.dispatch({actionType:j.CLOSE_ALL_TABS});},closeFragileTabs:function(){h.dispatch({actionType:j.CLOSE_FRAGILE_TABS});},lowerTab:function(l){h.dispatch({actionType:j.LOWER_TAB,threadID:l});},openFragileTab:function(l){h.dispatch({actionType:j.OPEN_FRAGILE_TAB,threadID:l});},openTab:function(l){h.dispatch({actionType:j.OPEN_TAB,threadID:l});},persistLocalState:function(){h.dispatch({actionType:j.PERSIST_LOCAL_STATE});},promoteTab:function(l){h.dispatch({actionType:j.PROMOTE_TAB,threadID:l});},raiseTab:function(l,m,n){h.dispatch({actionType:j.RAISE_TAB,signatureID:n,threadID:l,userAction:m});}};f.exports=k;},null);
__d('StoreAndPropBasedStateMixin',['StoreBasedStateMixinHelper','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=(function(){for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];return {getInitialState:function(){return this.constructor.calculateState(this.props);},componentWillMount:function(){!this.constructor.calculateState?i(0):undefined;this._recalculateStateID=null;var o=(function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}).bind(this);this._mixin=new h(m);this._mixin.subscribeCallback((function(){if(this._recalculateStateID===null)this._recalculateStateID=j(o);}).bind(this));},componentWillReceiveProps:function(o){this.setState(this.constructor.calculateState(o));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}).bind(this);f.exports=k;},null);
__d('keyMirrorRecursive',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(l,m){return j(l,m);}function j(l,m){var n={},o;!k(l)?h(0):undefined;for(o in l){if(!l.hasOwnProperty(o))continue;var p=l[o],q=m?m+'.'+o:o;if(k(p)){p=j(p,q);}else p=q;n[o]=p;}return n;}function k(l){return l instanceof Object&&!Array.isArray(l);}f.exports=i;},null);
__d('mergeDeepInto',['invariant','mergeHelpers'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=i.ArrayStrategies,k=i.checkArrayStrategy,l=i.checkMergeArrayArgs,m=i.checkMergeLevel,n=i.checkMergeObjectArgs,o=i.isTerminal,p=i.normalizeMergeArg,q=function(u,v,w,x){n(u,v);m(x);var y=v?Object.keys(v):[];for(var z=0;z<y.length;z++){var aa=y[z];s(u,v,aa,w,x);}},r=function(u,v,w,x){l(u,v);m(x);var y=Math.max(u.length,v.length);for(var z=0;z<y;z++)s(u,v,z,w,x);},s=function(u,v,w,x,y){var z=v[w],aa=v.hasOwnProperty(w),ba=aa&&o(z),ca=aa&&Array.isArray(z),da=aa&&!ca&&!ca,ea=u[w],fa=u.hasOwnProperty(w),ga=fa&&o(ea),ha=fa&&Array.isArray(ea),ia=fa&&!ha&&!ha;if(ga){if(ba){u[w]=z;}else if(ca){u[w]=[];r(u[w],z,x,y+1);}else if(da){u[w]={};q(u[w],z,x,y+1);}else if(!aa)u[w]=ea;}else if(ha){if(ba){u[w]=z;}else if(ca){!j[x]?h(0):undefined;if(x===j.Clobber)ea.length=0;r(ea,z,x,y+1);}else if(da){u[w]={};q(u[w],z,x,y+1);}else !aa;}else if(ia){if(ba){u[w]=z;}else if(ca){u[w]=[];r(u[w],z,x,y+1);}else if(da){q(ea,z,x,y+1);}else !aa;}else if(!fa)if(ba){u[w]=z;}else if(ca){u[w]=[];r(u[w],z,x,y+1);}else if(da){u[w]={};q(u[w],z,x,y+1);}else !aa;},t=function(u,v,w){var x=p(v);k(w);q(u,x,w,0);};f.exports=t;},null);
__d('mergeDeep',['mergeHelpers','mergeDeepInto'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h.checkArrayStrategy,k=h.checkMergeObjectArgs,l=h.normalizeMergeArg,m=function(n,o,p){var q=l(n),r=l(o);k(q,r);j(p);var s={};i(s,q,p);i(s,r,p);return s;};f.exports=m;},null);
__d('DropdownContextualHelpLink',['DOM','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={set:function(k){var l=i('navHelpCenter');if(l!==null)h.replace(l,k);}};f.exports=j;},null);
__d('FBRTCMessageHandler',['Bootloader','FBRTCMessageListener','invariant','FBRTCSupport'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=null,m=false,n=null,o={init:function(){if(!m&&k.isReceiveWebrtcSupported()){m=true;i.init(false);i.once('messageReceived',function(r){p();});i.once('multiwayMessageReceived',function(r){q();});}},resetListener:function(){!l?j(0):undefined;i.removeMessageHandler();i.setMessageHandler(l.onMessageReceived,l);}};function p(){if(!l)h.loadModules(["FBRTCIncomingCallController","FBRTCIncomingCallDialog","FBRTCMissedVideoCallHandler","FBRTCUnsupportedBrowserMessage"],function(r,s,t,u){l=new r(s,u,new t());i.setMessageHandler(l.onMessageReceived,l);});}function q(){if(!n)h.loadModules(["FBRTCGroupCallIncomingController"],function(r){n=new r();i.setMultiwayMessageHandler(n.onMessageReceived,n);});}f.exports=o;},null);
__d('FBRTCStore',['FBRTCDispatcher','FluxStore'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;'use strict';j=babelHelpers.inherits(l,i);k=j&&j.prototype;function l(){k.constructor.call(this,h);}l.prototype.__emitChange=function(){this.__emitter.emit(this.__changeEvent);};f.exports=l;},null);
__d('WebMessengerEvents',['Arbiter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=Object.assign(new h(),{MASTER_DOM_CHANGED:'master-dom-changed',DETAIL_DOM_CHANGED:'detail-dom-changed',FOCUS_COMPOSER:'focus-composer',FOCUS_SEARCH:'focus-search',FOCUS_AND_SELECT_SEARCH:'focus-and-select-search',STICKER_CLICKED:'sticker-clicked',SUBMIT_REPLY:'submit-reply',UPDATE_SELECTION:'update-selection',masterDOMChanged:function(){this.inform(i.MASTER_DOM_CHANGED);},detailDOMChanged:function(){this.inform(i.DETAIL_DOM_CHANGED);},focusComposer:function(){this.inform(i.FOCUS_COMPOSER);},focusSearch:function(){this.inform(i.FOCUS_SEARCH);},focusAndSelectSearch:function(){this.inform(i.FOCUS_AND_SELECT_SEARCH);},updateSelection:function(j){this.inform(i.UPDATE_SELECTION,j);},stickerClicked:function(j,k){this.inform(i.STICKER_CLICKED,{packID:j,stickerID:k});},submitReply:function(){this.inform(i.SUBMIT_REPLY);}});f.exports=i;},null);
__d('WebMessengerSubscriptionsHandler',['SubscriptionsHandler'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new h('webmessenger');f.exports=i;},null);
__d("isWebMessengerURI",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return (/^(\/messages)/.test(i.getPath()));}f.exports=h;},null);
__d('WebMessengerWidthControl',['$','Arbiter','BlueBar','CSS','CSSClassTransition','Event','Style','URI','ViewportBounds','WebMessengerEvents','WebMessengerSubscriptionsHandler','cx','getViewportDimensions','isWebMessengerURI','requestAnimationFrame','setTimeoutAcrossTransitions','shield','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z=205,aa=981,ba=257,ca=18,da=848,ea=724,fa=.57,ga=56,ha,ia,ja;function ka(pa,qa,ra){this.masterChanged=pa;this.detailChaned=qa;r.addSubscriptions(m.listen(window,'resize',y(x(la,this,this),100)),i.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide','minisidebar/show'],x(la,this,this),i.SUBSCRIBE_NEW));var sa=oa()?ga:0;if(ra)sa=z;this._width=oa()?0:da;ja=true;la(this,sa);}function la(pa,qa){var ra=p.getRight()+p.getLeft();ra=ra||qa||0;var sa=t.withoutScrollbars().width-ra,ta=Math.round(Math.max(0,sa/2-aa/2));sa=aa+ta-ba;sa-=ca;sa=Math.max(ea,Math.min(da,sa));if(!isNaN(sa)&&pa._width!==sa){pa._width=sa;var ua=Math.round(sa/(1+fa)),va=sa-ua;pa.masterChanged(va);pa.detailChaned(ua);if(oa()){var wa=sa+ba;ma(function(){if(ia){document.body.className=ia;ia='';}na(wa+'px');k.removeClass(document.body,"_5uj5");ja&&q.detailDOMChanged();ja=false;},ia);}}}function ma(pa,qa){qa&&k.addClass(document.documentElement,"_5uj6");v(pa);qa&&w(k.removeClass.bind(null,document.documentElement,"_5uj6"),1000);}function na(pa){n.set(j.getNavRoot(),'width',pa);n.set(h('globalContainer'),'width',pa);}function oa(){if(!ha)ha=k.hasClass(document.body,"_6nw");return ha;}l.registerHandler(function(pa,qa,ra,sa){function ta(ua){return oa()&&u(new o(ua));}if(ta(sa)){ia=qa;return true;}else if(ta(ra)){ma(function(){pa.className=qa;na('');},true);return true;}});f.exports=ka;},null);
__d('Dcode',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i={},j={_:'%',A:'%2',B:'000',C:'%7d',D:'%7b%22',E:'%2c%22',F:'%22%3a',G:'%2c%22ut%22%3a1',H:'%2c%22bls%22%3a',I:'%2c%22n%22%3a%22%',J:'%22%3a%7b%22i%22%3a0%7d',K:'%2c%22pt%22%3a0%2c%22vis%22%3a',L:'%2c%22ch%22%3a%7b%22h%22%3a%22',M:'%7b%22v%22%3a2%2c%22time%22%3a1',N:'.channel%22%2c%22sub%22%3a%5b',O:'%2c%22sb%22%3a1%2c%22t%22%3a%5b',P:'%2c%22ud%22%3a100%2c%22lc%22%3a0',Q:'%5d%2c%22f%22%3anull%2c%22uct%22%3a',R:'.channel%22%2c%22sub%22%3a%5b1%5d',S:'%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a',T:'%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a',U:'%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',V:'%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a',W:'%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a',X:'%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1',Y:'%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',Z:'%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a'};(function(){var l=[];for(var m in j){i[j[m]]=m;l.push(j[m]);}l.reverse();h=new RegExp(l.join("|"),'g');})();var k={encode:function(l){return encodeURIComponent(l).replace(/([_A-Z])|%../g,function(m,n){return n?'%'+n.charCodeAt(0).toString(16):m;}).toLowerCase().replace(h,function(m){return i[m];});},decode:function(l){return decodeURIComponent(l.replace(/[_A-Z]/g,function(m){return j[m];}));}};f.exports=k;},null);
__d('SoundPlayer',['Arbiter','Flash','URI','createArrayFromMixed'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={},m=null,n=false,o='so_sound_player',p='/swf/cigars/SoundPlayer.swf?v=1',q=null,r={};function s(ca){var da=new j(ca);if(!da.getDomain())return new j(window.location.href).setPath(da.getPath()).toString();return ca;}function t(ca){var da=new j(ca).getPath();if(/\.mp3$/.test(da))return 'audio/mpeg';if(/\.og[ga]$/.test(da))return 'audio/ogg';return '';}function u(){if(!q){var ca=document.createElement('audio');if(!ca||!ca.canPlayType)return null;ca.setAttribute('preload','auto');document.body.appendChild(ca);q=ca;}return q;}function v(ca){return r[ca];}function w(ca,da){r[ca]=da;}function x(){var ca=document[o]||window[o];if(ca)if(!ca.playSound&&ca.length)ca=ca[0];return ca&&ca.playSound&&ca.loopSound?ca:null;}function y(){return n;}function z(ca,da,ea){m={path:ca,sync:da,loop:ea};}function aa(){n=true;if(m){var ca=x();if(m.loop){ca.loopSound(m.path,m.sync);}else ca.playSound(m.path,m.sync);}}var ba={init:function(ca){ca=k(ca);var da;for(var ea=0;ea<ca.length;++ea){da=ca[ea];if(l[da])return;}var fa=u();for(ea=0;fa&&ea<ca.length;++ea){da=ca[ea];if(fa.canPlayType(da)){l[da]=true;return;}}l['audio/mpeg']=true;if(x())return;try{h.registerCallback(aa,['sound/player_ready','sound/ready']);var ha=document.createElement('div');ha.id='sound_player_holder';document.body.appendChild(ha);var ia=window[o]=i.embed(p,ha,{allowscriptaccess:'always',wmode:'transparent'},{swf_id:o});ia.setAttribute('id',o);ia.setAttribute('width','1px');ia.setAttribute('height','1px');h.inform('sound/player_ready');}catch(ga){}},createAndPlayNewNative:function(ca,da){var ea=document.createElement('audio');ea.setAttribute('preload','auto');document.body.appendChild(ea);ea.src=s(ca);if(da){ea.setAttribute('loop','');}else ea.removeAttribute('loop');ea.play();w(ca,ea);return;},play:function(ca,da){ca=k(ca);var ea=u(),fa,ga;for(var ha=0;ea&&ha<ca.length;++ha){fa=ca[ha];var ia=v(fa);if(ia){if(da){ia.setAttribute('loop','');}else ia.removeAttribute('loop');ia.play();return;}ga=t(fa);if(!ea.canPlayType(ga))continue;ba.init([ga]);ba.createAndPlayNewNative(fa,da);return;}for(ha=0;ha<ca.length;++ha){fa=s(ca[ha]);ga=t(fa);if(ga!='audio/mpeg')continue;ba.init([ga]);var ja=x();if(!y()){z(fa,true,da);return;}else if(ja){if(da){ja.loopSound(fa,true);}else ja.playSound(fa,true);return;}}},stop:function(ca){ca=k(ca);for(var da=0;da<ca.length;++da){var ea=s(ca[da]),fa=v(ca[da]),ga=x();if(fa&&fa.src==ea){fa.pause();fa.removeAttribute('src');fa.src=ea;}else ga&&ga.stopSound(ea);}}};f.exports=ba;},null);
__d('SoundSynchronizer',['SoundPlayer','WebStorage','createArrayFromMixed'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='fb_sounds_playing3';function l(){var p=i.getLocalStorage();if(p)try{var r=p[k];if(r){r=JSON.parse(r);if(Array.isArray(r))return r;}}catch(q){}return [];}function m(p){var q=i.getLocalStorage();if(q){var r=l();r.push(p);while(r.length>5)r.shift();try{q[k]=JSON.stringify(r);}catch(s){}}}function n(p){return l().some(function(q){return q===p;});}var o={play:function(p,q,r){p=j(p);q=q||p[0]+Math.floor(Date.now()/1000);if(n(q))return;h.play(p,r);m(q);},isSupported:function(){return !!i.getLocalStorage();}};f.exports=o;},null);
__d('SoundRPC',['Event','FBJSON','SoundSynchronizer'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(m,n,o){j.play(m,n,o);}var l={playLocal:k,playRemote:function(m,n,o,p){var q={name:'SoundRPC',data:{paths:n,sync:o,loop:p}};m.postMessage(i.stringify(q),'*');},supportsRPC:function(){return !!window.postMessage;},_listen:function(){h.listen(window,'message',function(m){if(!/\.facebook.com$/.test(m.origin))return;var n={};try{n=i.parse(m.data);}catch(o){}if(n.name==='SoundRPC')k(n.data.paths,n.data.sync,n.data.loop);});}};f.exports=l;},null);
__d('Sound',['SoundInitialData','SoundPlayer','SoundRPC','SoundSynchronizer','URI','UserAgent_DEPRECATED','isFacebookURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=null,p={init:function(t){if(!o)i.init(t);},play:function(t,u,v){if(o){j.playRemote(o.contentWindow,t,u,false);}else j.playLocal(t,u,v);},stop:function(t){if(!o)i.stop(t);}},q=new l(location.href);if(q.getSubdomain()&&q.getSubdomain()!=='www')q.setSubdomain('www');var r=q.getDomain();function s(){if(m.ie()<9)return false;if(h.RPC_DISABLED)return false;return k.isSupported()&&j.supportsRPC();}if(n(q)&&location.host!==r&&s()){o=document.createElement('iframe');o.setAttribute('src','//'+r+'/sound_iframe.php');o.style.display='none';document.body.appendChild(o);}f.exports=p;},null);
__d('PresenceCookieManager',['Cookie','CurrentUser','Dcode','ErrorUtils','JSLogger','PresenceInitialData','PresenceUtil','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=m.cookieVersion,q=m.dictEncode,r='presence',s={},t=null,u=null,v=l.create('presence_cookie');function w(){try{var aa=h.get(r);if(t!==aa){t=aa;u=null;if(aa&&aa.charAt(0)=='E')aa=j.decode(aa.substring(1));if(aa)u=JSON.parse(aa);}if(u){if(u.user&&u.user!==i.getID())return null;if(u.v!==p)return null;return u;}}catch(z){v.warn('getcookie_error',z);}return null;}function x(){return parseInt(Date.now()/1000,10);}var y={register:function(z,aa){s[z]=aa;},store:function(){var z=w();if(z&&z.v&&p<z.v){v.debug('stale_cookie',p);return;}var aa={v:p,time:x(),user:i.getID()};for(var ba in s)aa[ba]=k.applyWithGuard(s[ba],s,[z&&z[ba]],function(fa){fa.presence_subcookie=ba;});var ca=JSON.stringify(aa);if(q)ca='E'+j.encode(ca);if(n.hasUserCookie()){var da=ca.length;if(da>1024)v.warn('big_cookie',da);var ea=o.getRequestURI(false).isSecure()&&!!h.get('csm');h.set(r,ca,null,null,ea);}},clear:function(){h.clear(r);},getSubCookie:function(z){var aa=w();if(!aa)return null;return aa[z];}};f.exports=y;},null);
__d('PresenceState',['Arbiter','ErrorUtils','JSLogger','PresenceCookieManager','debounceAcrossTransitions','setIntervalAcrossTransitions','PresenceInitialData'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=n.cookiePollInterval||2000,p=n.shouldSuppress||false,q=[],r=[],s=null,t=null,u=0,v=null,w=0,x=['sb2','t2','lm2','uct2','tr','tw','at','wml'],y=j.create('presence_state');function z(){return k.getSubCookie('state');}function aa(){u=Date.now();k.store();ea(t);}var ba=l(aa,0);function ca(ja){if(typeof ja=='undefined'||isNaN(ja)||ja==Number.POSITIVE_INFINITY||ja==Number.NEGATIVE_INFINITY)ja=0;return ja;}function da(ja){var ka={};if(ja){x.forEach(function(na){ka[na]=ja[na];});if(u<ja.ut)y.error('new_cookie',{cookie_time:ja.ut,local_time:u});}ka.ut=u;for(var la=0,ma=q.length;la<ma;la++)i.applyWithGuard(q[la],null,[ka]);t=ka;return t;}function ea(ja){w++;u=ca(ja.ut);if(!s)s=m(ha,o);t=ja;if(v===null)v=ja;for(var ka=0,la=r.length;ka<la;ka++)i.applyWithGuard(r[ka],null,[ja]);w--;}function fa(ja){if(ja&&ja.ut)if(u<ja.ut){return true;}else if(ja.ut<u)y.error('old_cookie',{cookie_time:ja.ut,local_time:u});return false;}function ga(){var ja=z();if(fa(ja))t=ja;return t;}function ha(){var ja=z();if(fa(ja))ea(ja);}k.register('state',da);h.subscribe(j.DUMP_EVENT,function(ja,ka){ka.presence_state={initial:babelHelpers._extends({},v),state:babelHelpers._extends({},t),update_time:u,sync_paused:w,poll_time:o};});(function(){var ja=ga();if(ja){ea(ja);}else{y.debug('no_cookie_initial');ea(da());return;}})();var ia={doSync:function(ja){if(w)return;if(ja){aa();}else ba();},registerStateStorer:function(ja){q.push(ja);},registerStateLoader:function(ja){r.push(ja);},get:function(){return ga();},getInitial:function(){return v;},shouldSuppress:function(){return p;},verifyNumber:ca};f.exports=ia;},null);