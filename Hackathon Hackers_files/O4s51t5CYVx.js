/*!CK:373001870!*//*1453173905,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UTmyg"]); }

__d('PhotoResizeMath',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getScaledPhotoDimensions:function(i,j,k,l,m){var n=i/j,o=k/l;if(k&&l&&m==='stretch')return {width:k,height:l};if(!k&&l||m==='contain'!==n>=o)return {width:l*n,height:l};if(k)return {width:k,height:k/n};return {width:i,height:j};}};f.exports=h;},null);
__d('PixelzFocus',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={search:function(i,j){var k=0,l=i.length-1;while(k<=l){var m=k+Math.floor((l-k)/2),n=i[m];if(n>j){l=m-1;}else if(n<j){k=m+1;}else return m;}return Math.min(k,l);},forceSpecificPoint:function(i,j,k){var l=1e-09,m=h.search(i,j-k-l)+1,n=h.search(i,j+k);return i.slice(m,n+1);},findBiggestSets:function(i,j){var k=[],l=-1;for(var m=0;m<i.length;++m){var n=i[m],o=m,p=h.search(i,n+j),q=p-o;if(q>l)k=[];if(q>=l){l=q;k.push({low:o,high:p});}}return k;},getBestSet:function(i,j,k){var l=-1,m=null;for(var n=0;n<j.length;++n){var o=j[n],p=i[o.low],q=i[o.high],r=p+(q-p)/2,s=Math.min(p-(r-k),r+k-q);if(s>l){l=s;m=o;}}return m;},getFocusFromSet:function(i,j){var k=i[j.low],l=i[j.high];return k+(l-k)/2;},clampFocus:function(i,j){var k=j/2,l=1-j/2;if(i<k)return k;if(i>l)return l;return i;},convertFromCenterToCSS:function(i,j){if(Math.abs(1-j)<1e-05)return 0;return (i-j/2)/(1-j);},convertFromCSSToCenter:function(i,j){return i*(1-j)+j/2;},getVisible:function(i,j){if(i<j)return i/j;return j/i;},getHidden:function(i,j){return 1-h.getVisible(i,j);},focusHorizontally:function(i,j){return i<j;},convertVectorFromCenterToCSS:function(i,j,k){var l=h.focusHorizontally(j,k),m;if(l){m=i.x/100;}else m=i.x/100;var n=h.convertFromCenterToCSS(m,h.getVisible(j,k));if(l){return {x:n,y:0};}else return {x:0,y:n};},getCropRect:function(i,j,k){var l=h.focusHorizontally(j,k),m=h.getVisible(j,k);if(l){var n=(1-m)*i.x;return {left:n,top:0,width:m,height:1};}else{var o=(1-m)*i.y;return {left:0,top:o,width:1,height:m};}}};f.exports=h;},null);
__d('loadImage',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=new Image();k.onload=function(){j(k.width,k.height,k);};k.src=i;}f.exports=h;},null);
__d('Pixelz.react',['arrayContains','cx','loadImage','joinClasses','React','PhotoResizeMath','PixelzFocus'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=l.PropTypes,p=l.createClass({displayName:'Pixelz',propTypes:{width:o.number,height:o.number,resizeMode:o.oneOf(['contain','cover','stretch']),alt:o.string,letterbox:o.bool,borderRadius:o.number,insetBorderColor:o.string,animated:o.bool,upscale:o.bool,cropRect:function(q,r,s){var t=q[r],u='Invalid prop `'+r+'` supplied to `'+s+'`, expected a rectangle with values normalized '+'between 0 and 1.';if(t.left<0||t.top<0||t.width<0||t.height<0||t.left+t.width>1||t.top+t.height>1)return new Error(u);},focus:function(q,r,s){var t=q[r],u='Invalid prop `'+r+'` supplied to `'+s+'`, expected either a {x, y, type} vector where type '+'is `css` or `center` or an array of {x, y} vectors. All the vectors '+'have with values normalized between 0 and 1.';if(Array.isArray(t)){for(var v=0;v<t.length;++v)if(!(t[v].x>=0&&t[v].x<=1)||!(t[v].y>=0&&t[v].y<=1))return new Error(u);}else{if(!t.type)t.type='css';if(!(t.x>=0&&t.x<=1)||!(t.y>=0&&t.y<=1)||!h(['center','css'],t.type))return new Error(u);}}},getDefaultProps:function(){return {resizeMode:'cover',alt:'',letterbox:true,upscale:true,cropRect:{width:1,height:1,top:0,left:0},focus:{x:.5,y:.5,type:'css'}};},getInitialState:function(){return {srcDimensions:{}};},getSrcDimensions:function(){var q=this.props.src,r=this.state.srcDimensions[q];if(r)return r;j(q,(function(s,t){var u={};u[q]={width:s,height:t};this.isMounted()&&this.setState({srcDimensions:u});}).bind(this));return null;},getCropSrcDimensions:function(){var q=this.getSrcDimensions();return {width:q.width*this.props.cropRect.width,height:q.height*this.props.cropRect.height};},getUpscaleCropDimensions:function(){var q=this.getCropSrcDimensions();return m.getScaledPhotoDimensions(q.width,q.height,this.props.width,this.props.height,this.props.resizeMode);},getCropDimensions:function(){var q=this.getUpscaleCropDimensions(),r=this.getCropSrcDimensions();if(!this.props.upscale)return {width:Math.min(q.width,r.width),height:Math.min(q.height,r.height)};return q;},getCropAspectRatio:function(){var q=this.getCropDimensions();return q.width/q.height;},getContainerDimensions:function(){if(this.props.letterbox&&this.props.width&&this.props.height)return {width:this.props.width,height:this.props.height};return this.getCropDimensions();},getContainerAspectRatio:function(){var q=this.getContainerDimensions();return q.width/q.height;},getContainerPosition:function(){return {left:0,top:0};},getFocus:function(){var q=this.props.focus;if(!Array.isArray(q)&&q.type==='css')return {x:q.x,y:q.y};var r=this.getContainerAspectRatio(),s=this.getCropAspectRatio(),t=n.getVisible(r,s),u=n.focusHorizontally(r,s),v;if(!Array.isArray(q)){v=n.convertFromCenterToCSS(u?q.x:q.y,t);}else{var w=q.map(function(z){return u?z.x:z.y;});w.sort();var x=n.findBiggestSets(w,t),y=n.getBestSet(w,x,t);v=n.getFocusFromSet(w,y);}return {x:u?v:.5,y:u?.5:v};},getCropPosition:function(){var q=this.getCropDimensions(),r=this.getContainerDimensions(),s=this.getFocus();return {left:s.x*(r.width-q.width),top:s.y*(r.height-q.height)};},getScaleDimensions:function(){var q=this.getCropDimensions();return {width:q.width/this.props.cropRect.width,height:q.height/this.props.cropRect.height};},getScalePosition:function(){var q=this.getScaleDimensions();return {left:-q.width*this.props.cropRect.left,top:-q.height*this.props.cropRect.top};},getClipCropRectangle:function(){var q=this.getContainerDimensions(),r=this.getCropDimensions(),s=this.getContainerPosition(),t=this.getCropPosition(),u=Math.max(s.left,t.left),v=Math.max(s.top,t.top),w=Math.min(s.top+q.height,t.top+r.height),x=Math.min(s.left+q.width,t.left+r.width);return {left:u,top:v,width:x-u,height:w-v};},getClipCropPosition:function(){var q=this.getClipCropRectangle();return {left:q.left,top:q.top};},getClipCropDimensions:function(){var q=this.getClipCropRectangle();return {width:q.width,height:q.height};},getClipScalePosition:function(){var q=this.getScalePosition(),r=this.getClipCropPosition(),s=this.getCropPosition();return {left:q.left+(s.left-r.left),top:q.top+(s.top-r.top)};},getClipScaleDimensions:function(){return this.getScaleDimensions();},areDimensionsEqual:function(q,r){return q.width===r.width&&q.height===r.height;},shouldAddAllNodesAndStyles:function(){return this.props.animated;},hasCrop:function(){if(this.shouldAddAllNodesAndStyles())return true;var q=this.getContainerDimensions(),r=this.getClipCropDimensions(),s=this.getClipScaleDimensions();if(this.areDimensionsEqual(q,r)||this.areDimensionsEqual(r,s))return false;return true;},hasContainer:function(){if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())return true;var q=this.getContainerDimensions(),r=this.getClipScaleDimensions();if(this.areDimensionsEqual(q,r))return false;return true;},hasInsetBorder:function(){return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor;},applyPositionStyle:function(q,r){if(this.shouldAddAllNodesAndStyles()||r.left)q.left=Math.round(r.left);if(this.shouldAddAllNodesAndStyles()||r.top)q.top=Math.round(r.top);},applyDimensionsStyle:function(q,r){q.width=Math.round(r.width);q.height=Math.round(r.height);},applyBorderRadiusStyle:function(q){if(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)q.borderRadius=this.props.borderRadius||0;},getScaleStyle:function(){var q={},r=this.getClipCropDimensions(),s=this.getClipScaleDimensions();if(this.shouldAddAllNodesAndStyles()||!this.areDimensionsEqual(r,s)){this.applyPositionStyle(q,this.getClipScalePosition());}else this.applyPositionStyle(q,this.getClipCropPosition());this.applyDimensionsStyle(q,this.getClipScaleDimensions());this.applyBorderRadiusStyle(q);return q;},getCropStyle:function(){var q={};this.applyPositionStyle(q,this.getClipCropPosition());this.applyDimensionsStyle(q,this.getClipCropDimensions());this.applyBorderRadiusStyle(q);return q;},getInsetBorderStyle:function(){var q={borderColor:this.props.insetBorderColor||'transparent'};this.applyPositionStyle(q,this.getClipCropPosition());this.applyDimensionsStyle(q,this.getClipCropDimensions());this.applyBorderRadiusStyle(q);return q;},getContainerStyle:function(){var q={};this.applyDimensionsStyle(q,this.getContainerDimensions());this.applyBorderRadiusStyle(q);return q;},getScale:function(){var q=this.getScaleStyle(),r=q.width,s=q.height;q=babelHelpers._extends({},q);delete q.width;delete q.height;return (l.createElement('img',babelHelpers._extends({},this.props,{alt:this.props.alt,className:k(this.props.className,"_56wb"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":'')),src:this.props.src,style:babelHelpers._extends({},this.props.style||{},q),width:r,height:s})));},getCrop:function(){var q=this.getScale();if(!this.hasCrop())return q;return (l.createElement('div',{className:"_56ma"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getCropStyle()},q));},getInsetBorder:function(){if(!this.hasInsetBorder())return null;return (l.createElement('div',{className:"_56lv"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),style:this.getInsetBorderStyle()}));},getContainer:function(){var q=this.getCrop();if(!this.hasContainer())return q;var r=this.getInsetBorder();return (l.createElement('div',{className:"_56jj"+(this.shouldAddAllNodesAndStyles()?' '+"_56t5":''),'data-skipchecker':null,style:this.getContainerStyle()},q,r));},render:function(){var q=this.getSrcDimensions();if(!q)return l.createElement('span',{'data-skipchecker':null});return this.getContainer();}});f.exports=p;},null);
__d('Facepile.react',['joinClasses','Link.react','Pixelz.react','React','List.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o={small:24,medium:32,large:50},p=k.createClass({displayName:'Facepile',propTypes:{className:n.string,onFaceClick:n.func,onComponentDidMount:n.func,profiles:n.arrayOf(n.shape({URL:n.string,name:n.string.isRequired,uniqueID:n.number.isRequired,profilePicURI:n.string.isRequired})).isRequired,size:n.oneOf(['small','medium','large']).isRequired},_onFaceClick:function(q,r){if(this.props.onFaceClick)this.props.onFaceClick(q,r);},componentDidMount:function(){if(this.props.onComponentDidMount)this.props.onComponentDidMount();},renderFace:function(q,r){var s=o[this.props.size];return (k.createElement('li',{className:"_43q7",key:q.uniqueID,onClick:this._onFaceClick.bind(this,q,r)},k.createElement(i,{href:q.URL,'aria-label':q.name,'data-hover':'tooltip',className:"_2rt_ link",'data-ignoreclass':"_2rt_",'data-tooltip-alignh':'left'},k.createElement(j,{src:q.profilePicURI,width:s,height:s,className:'img'}))));},render:function(){var q=h(this.props.className,"_43qm"+(this.props.size=='small'?' '+"_43q9":'')+(this.props.size=='medium'?' '+"_43qc":'')+(this.props.size=='large'?' '+"_43qf":''));return (k.createElement('div',{className:q,style:this.props.style},k.createElement(l,{className:"_4cg3",direction:'horizontal',spacing:'none',border:'none'},this.props.profiles.map(this.renderFace))));}});f.exports=p;},null);
__d("XBrowserPushXOutController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/xout\/",{});},null);
__d("XServiceWorkerSessionChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/service_workers\/session\/persist\/",{});},null);
__d('BrowserPushSessionChange.react',['AsyncRequest','BanzaiLogger','Image.react','ImageBlock.react','LayerFadeOnHide','React','ReactLayeredComponentMixin','ReloadPage','XBrowserPushDisabledController','XBrowserPushXOutController','XServiceWorkerSessionChangeController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XUISpinner.react','XUIText.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=m.PropTypes,ea=m.createClass({displayName:'BrowserPushSessionChange',mixins:[n],propTypes:{onHide:da.func.isRequired,push:da.object.isRequired},getInitialState:function(){return {dialogShown:true,spin:false};},_onToggle:function(fa){if(fa)return;this.setState({dialogShown:false});this._logEvent('session_keep');var ga=r.getURIBuilder().getURI();new h().setURI(ga).setMethod('post').setData({app_id:this.props.push.appID}).setAllowCrossPageTransition(true).setHandler((function(ha){this.props.onHide();}).bind(this)).send();},_logEvent:function(event){var fa={event:event,appid:this.props.push.appID,surface:'session_change'};i.log('BrowserPushLoggerConfig',fa);},_doNotPersist:function(){this.setState({spin:true});this._logEvent('session_uninstall');this._logEvent('xout');var fa=q.getURIBuilder().getURI(),ga=(function(){this.props.push.unregisterPushAndSW(p,h).then(function(ha){o.now();})['catch'](function(ha){throw ha;});}).bind(this);new h().setURI(fa).setMethod('post').setHandler(ga).setAllowCrossPageTransition(true).send();},componentDidMount:function(){this._logEvent('session_change_prompt');},renderLayers:function(){if(!this.state.dialogShown)return {};var fa=ca('/images/notifications/potsy_jump.png');return {dialog:m.createElement(s,{shown:true,behaviors:{LayerFadeOnHide:l},onToggle:this._onToggle,width:445},m.createElement(x,null,ba._("Desktop Notifications Are On")),m.createElement(t,null,this.state.spin?m.createElement(y,{size:'large'}):m.createElement(k,{spacing:'medium'},m.createElement(j,{src:fa,alt:ba._("Desktop Notifications Are On")}),m.createElement('div',null,m.createElement('div',{className:"_3-8h"},m.createElement(z,{size:'large'},ba._("When you get a new notification, you'll see it in the corner of your screen."))),m.createElement('div',{className:"_3-8h"},m.createElement(z,{size:'small'},ba._("To be sure you get notifications, you'll now stay logged into Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.")))))),m.createElement(v,null,m.createElement(u,{action:'button',label:ba._("Undo"),onClick:this._doNotPersist}),m.createElement(w,{use:'confirm',action:'cancel'})))};},render:function(){return (m.createElement('span',null));}});f.exports=ea;},null);
__d('NotificationPermissionNotice.react',['Event','Keys','React','ReactLayeredComponentMixin','XUIAmbientNUX.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=[],p=j.PropTypes,q=j.createClass({displayName:'NotificationPermissionNotice',mixins:[k],propTypes:{onHide:p.func.isRequired,shortText:p.bool},componentDidMount:function(){o.push(h.listen(window,'mousedown',this.props.onHide));o.push(h.listen(window,'keydown',(function(event){if(event.keyCode===i.ESC)this.props.onHide();}).bind(this)));},componentWillUnmount:function(){while(o.length>0){var r=o.pop();r.remove();}},renderLayers:function(){var r=this.props.shortText?n._("Click the lock to give Chrome permission to send you desktop notifications."):n._("If you change your mind, click the lock to give Chrome permission to send you desktop notifications.");return {nux:j.createElement(l,{contextRef:(function(){return this.refs.noticeAnchor;}).bind(this),shown:true,position:'below',onCloseButtonClick:this.props.onHide},r)};},render:function(){return (j.createElement('span',{ref:'noticeAnchor',className:"_1_i1"}));}});f.exports=q;},null);
__d('Spotlight.react',['LayerHideOnBlur','LayerHideOnEscape','ReactLayer','Spotlight'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=j.createClass({getDefaultEnabledBehaviors:function(){return {hideOnBlur:h,hideOnEscape:i};},createLayer:function(m){var n=this.enumerateBehaviors(this.props.behaviors),o={addedBehaviors:n,rootClassName:this.props.rootClassName},p=new k(o,m);p.conditionShow(this.props.shown);if(this.props.onBeforeHide)p.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)p.subscribe('hide',this.props.onHide);return p;},receiveProps:function(m){this.layer.conditionShow(m.shown);}});f.exports=l;},null);
__d("XBrowserPushOptinFriendsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/push\/optin\/friends\/",{});},null);
__d('NotificationPermissionRequest.react',['AsyncRequest','Facepile.react','Spotlight.react','ShortProfiles','React','ReactLayeredComponentMixin','UserAgent','XBrowserPushOptinFriendsController','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=n.isPlatform('Mac OS X'),s=l.PropTypes,t=l.createClass({displayName:'NotificationPermissionRequest',mixins:[m],propTypes:{onHide:s.func.isRequired,useFaces:s.bool.isRequired,useAllow:s.bool.isRequired},getInitialState:function(){return {friendsList:[]};},componentWillMount:function(){if(!this.props.useFaces)return;new h().setURI(o.getURIBuilder().getURI()).setHandler((function(u){var v=u.payload.list,w=[];for(var x=0;w.length<(r?7:6)&&x<v.length;x++){var y=v[x].slice(0,-2),z=k.getNowUnsafe(y);if(z&&z.type==='friend')w.push(z);}w=w.map(function(aa){return {uniqueID:parseInt(aa.id,10),name:aa.name,profilePicURI:aa.thumbSrc};});this.setState({friendsList:w});}).bind(this)).send();},renderLayers:function(){var u=null;if(this.props.useAllow){var v=l.createElement('span',{className:"_23ah"},q._("Allow")),w=this.props.useFaces?q._("Don't miss updates from friends - click {allow} to see your notifications on your desktop.",[q.param('allow',v)]):q._("Click {allow} to see your notifications on your desktop.",[q.param('allow',v)]);u=l.createElement('div',{className:"_23ak"+(r?' '+"_3qwt":'')+(' '+"_50f5")},l.createElement('div',null,w));}return {spotlight:l.createElement(j,{shown:true,onHide:this.props.onHide},l.createElement('div',{className:"_n3"},l.createElement('div',{className:"_1s6q"+(r?' '+"_3qw_":'')},l.createElement(i,{profiles:this.state.friendsList,size:'medium',className:"_23aj"}),u)))};},render:function(){return l.createElement('span',null);}});f.exports=t;},null);
__d('BrowserPushCommands',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browser_push_ack',i='browser_push_redirect',j='browser_push_window_visible',k={ACK:h,REDIRECT:i,WINDOW_VISIBLE:j};f.exports=k;},null);
__d('BrowserPushMessageHandler',['BrowserPushCommands','EventListener','isFacebookURI','URISchemes'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(event){if(event.data.command&&event.data.command===h.REDIRECT){if(typeof window.onbeforeunload()==='undefined'){event.ports[0].postMessage({command:h.ACK,success:true});}else{event.ports[0].postMessage({command:h.ACK,success:false});return;}var n=event.data.uri;if(/^([^.:/?#]+):/.test(n)&&!k.isAllowed(/^([^.:/?#]+):/.exec(n)[0])&&j(n))throw new Error('goURI: URI scheme rejected, URI: '+n);window.location.href=n;}}var m={registerRedirectHandler:function(){i.listen(window,'message',function(event){if(event.origin==="")l(event);});if(navigator.serviceWorker&&navigator.serviceWorker.addEventListener)navigator.serviceWorker.addEventListener('message',function(event){if(new RegExp('^'+window.location.protocol+'//'+window.location.host+'$').test(event.origin))l(event);});}};f.exports=m;},null);
__d('BrowserPushVisibilityChanger',['BrowserPushCommands','ClientServiceWorkerMessage','Visibility'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(){new i(h.WINDOW_VISIBLE,null).sendViaController();}var l={listenForVisibility:function(){if(!j.isHidden())k();j.addListener(j.VISIBLE,k);}};f.exports=l;},null);
__d('ServiceWorkerRegistration',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=('serviceWorker' in navigator);function j(){var l=navigator.serviceWorker;if(!i||!l)throw new Error('serviceWorker is not supported in this browser');return l;}var k={isSupported:function(){return i;},registerWorkerIfUnregistered:function(l){var m=j();return new h((function(n,o){this.getWorkerRegistration(l).then(function(p){if(!p){m.register(l).then(function(){m.ready.then(n);});}else n(p);});}).bind(this));},getWorkerRegistration:function(l){var m=j();return m.getRegistration(l);}};f.exports=k;},null);
__d('PushRegistration',['Promise','BrowserPushMessageHandler','BrowserPushVisibilityChanger','Map','ServiceWorkerRegistration'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=window.Notification,n=new k();o.get=function(p,q){'use strict';if(n.has(q))return n.get(q);var r=new o(p,q);n.set(q,r);return r;};function o(p,q){'use strict';this.$PushRegistration1=p;this.appID=q;if(!o.$PushRegistration2&&!o.$PushRegistration3){o.$PushRegistration2=false;o.$PushRegistration3=false;}}o.prototype.getPushSubscription=function(){'use strict';return new h((function(p,q){if(!m||m.permission==='denied')q(new Error('No permission or not supported'));l.getWorkerRegistration(this.$PushRegistration1).then(function(r){if(!r){p(null);return;}r.pushManager.getSubscription().then(function(s){p(s);})['catch'](q);})['catch'](q);}).bind(this));};o.prototype.$PushRegistration4=function(p){'use strict';var q=p.endpoint;if('subscriptionId' in p&&!new RegExp('/'+p.subscriptionId+'$').test(q))q+='/'+p.subscriptionId;return q;};o.prototype.$PushRegistration5=function(p,q,r,s){'use strict';var t=this.$PushRegistration4(r),u=p.getURIBuilder().getURI(),v=new q(u);v.setData({app_id:this.appID,push_endpoint:t});v.setMethod('post');if(v.setHandler)v.setHandler(function(w){if(w.payload&&w.payload.session_change)s();});v.send();};o.prototype.getSubscription=function(){'use strict';return new h((function(p,q){this.getPushSubscription().then((function(r){if(r){p(this.$PushRegistration4(r));}else p(null);}).bind(this))['catch'](q);}).bind(this));};o.prototype.maybeRegisterPushAgain=function(p,q,r){'use strict';return new h((function(s,t){this.getPushSubscription().then((function(u){if(u){this.$PushRegistration5(p,q,u,r);s(this.$PushRegistration4(u));}else s(null);}).bind(this))['catch'](function(){s(null);});}).bind(this));};o.prototype.$PushRegistration6=function(p,q,r){'use strict';return new h((function(s,t){if(o.$PushRegistration3&&!r){t(new Error('sending disable info already'));return;}o.$PushRegistration3=true;var u=p.getURIBuilder().getURI(),v=new q(u.toString());v.setData({appid:this.appID,from_browser_settings:r});v.setMethod('post');if(v.listen){v.listen('finally',s);v.listen('fail',function(){o.$PushRegistration3=false;t();});}else if(v.setErrorHandler&&v.setHandler){v.setErrorHandler(function(){o.$PushRegistration3=false;t();});v.setHandler(s);}else s();v.send();}).bind(this));};o.prototype.isPushRegistered=function(p,q,r,s,t,u){'use strict';i.registerRedirectHandler();return new h((function(v,w){this.getPushSubscription().then((function(x){v(!!x||p&&!o.pushPermissionIsPending());if(x){if(t){x.unsubscribe().then((function(){this.registerPush(q,s,u);}).bind(this))['catch'](function(){});}else j.listenForVisibility();}else if(!x&&p)if(o.pushPermissionIsOn()){this.registerPush(q,s,u)['catch'](function(){});}else this.$PushRegistration6(r,s,false);}).bind(this))['catch']((function(){if(p){this.$PushRegistration6(r,s,false);w();}}).bind(this));}).bind(this));};o.prototype.registerPush=function(p,q,r){'use strict';if(o.$PushRegistration2)return new h(function(s,t){t(new Error('registering already'));});o.$PushRegistration2=true;return new h((function(s,t){l.registerWorkerIfUnregistered(this.$PushRegistration1).then((function(u){u.pushManager.subscribe({userVisibleOnly:true}).then((function(v){s(this.$PushRegistration4(v));this.$PushRegistration5(p,q,v,r);j.listenForVisibility();}).bind(this))['catch'](function(v){o.$PushRegistration2=false;u.unregister();t(v);});}).bind(this))['catch'](function(u){o.$PushRegistration2=false;t(u);});}).bind(this));};o.prototype.unregisterPushAndSW=function(p,q){'use strict';return new h((function(r,s){this.$PushRegistration6(p,q,true).then((function(){l.getWorkerRegistration(this.$PushRegistration1).then(function(t){if(t){t.pushManager.getSubscription().then(function(u){u.unsubscribe().then(function(){t.unregister().then(r).reject(s);})['catch'](function(){r(true);});})['catch'](function(){r(true);});}else t.unregister().then(r).reject(s);})['catch'](s);}).bind(this))['catch'](s);}).bind(this));};o.pushPermissionIsPending=function(){'use strict';return m&&m.permission==='default';};o.pushPermissionIsOn=function(){'use strict';return m&&m.permission==='granted';};f.exports=o;},null);
__d("XBrowserPushMuteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/mute\/",{push_endpoint:{type:"String",required:true},appid:{type:"Int",required:true},is_settings_page:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});},null);
__d('BrowserPushMuteOptions',['AsyncRequest','PushRegistration','React','ReactDOM','XBrowserPushMuteController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(p,q,r){var s=i.get(q,r);s.getPushSubscription().then(function(t){if(t){var u=l.getURIBuilder().setString('push_endpoint',t.endpoint).setInt('appid',r).getURI();new h().setURI(u).setRelativeTo(p).send();}})['catch'](function(t){throw t;});}var o={showMuteOptions:function(p,q,r){if(!i.pushPermissionIsOn())return;k.render(j.createElement('a',{href:'#',onClick:function(){n(p,q,r);}},m._("Mute")),p);}};f.exports=o;},null);
__d("XPushRegisterServiceWorkerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/push\/register\/service_worker\/",{});},null);
__d('BrowserPushNoUpsellInstaller',['Arbiter','AsyncRequest','BanzaiLogger','BrowserPushSessionChange.react','DOM','NotificationPermissionNotice.react','NotificationPermissionRequest.react','PushRegistration','React','ReactDOM','XBrowserPushDisabledController','XBrowserPushXOutController','XPushRegisterServiceWorkerController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=false;function v(event,z){var aa={event:event,appid:z,surface:'prompt'};j.log('BrowserPushLoggerConfig',aa);}function w(z){if(!u){u=true;q.unmountComponentAtNode(z);}}function x(z,aa){var ba=l.insertBefore(z,l.create('span')),ca=ba.pop();q.render(p.createElement(k,{onHide:function(){q.unmountComponentAtNode(z);},push:aa}),ca);}var y={installPush:function(z,aa,ba,ca,da,ea,fa,ga,ha){var ia=o.get(z,aa);ia.isPushRegistered(ea,t,r,i,!!ha,function(){x(ba,ia);}).then(function(ja){if(ja||fa)return;if(o.pushPermissionIsPending()&&!ga)q.render(p.createElement(n,{useFaces:ca,useAllow:da,onHide:function(){w(ba);}}),ba);v('turn_on',aa);ia.registerPush(t,i,function(){x(ba,ia);}).then(function(){w(ba);v('install',aa);h.inform('BrowserPushInstall/installed');})['catch'](function(ka){w(ba);if(window.Notification&&window.Notification.permission==='denied'){q.render(p.createElement(m,{onHide:function(){q.unmountComponentAtNode(ba);}}),ba);v('deny',aa);}else v('install_ignore',aa);var la=s.getURIBuilder().getURI();new i().setURI(la).setMethod('post').send();v('xout',aa);});})['catch'](function(){});}};f.exports=y;},null);