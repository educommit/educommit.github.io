/*!CK:602448816!*//*1453173940,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8OEoj"]); }

__d("PageInsightsPostFields",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CAPTION:"caption",CREATION_TIME:"created_time",DESCRIPTION:"description",ID:"id",IDENTIFIER:"identifier",IS_HOT:"is_hot",LINK:"link",MESSAGE:"message",NAME:"name",PICTURE:"picture",PRIVACY:"privacy",PRIVACY_COUNTRIES:"privacy_countries",PRIVACY_CITIES:"privacy_cities",PRIVACY_DESCRIPTION:"privacy_description",PRIVACY_LOCALES:"privacy_locales",PRIVACY_POST_TARGETING:"privacy_post_targeting",PROPERTY:"properties",STATUS_TYPE:"status_type",STYLE:"style",TYPE:"type",HAS_HINTS:"has_hints",HINTS_CONFIG:"hints_config"};},null);
__d("PagesInsightsDataPayloadTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PAGE_ADMIN_SUMMARY_DATA:"page_admin_summary_data",PAGE_POST_REACH_DATA:"page_post_reach_data",POST_DETAILS_DATA:"post_details_data",POST_FOOTER_DATA:"post_footer_data",REQUEST_PAGE_ADMIN_SUMMARY_DATA:"request_page_admin_summary_data",REQUEST_PAGE_POST_REACH_DATA:"request_page_post_reach_data",REQUEST_POST_DETAILS_DATA:"request_post_details_data",REQUEST_POST_FOOTER_DATA:"request_post_footer_data",TIME_SELECTOR_REQUEST_DATA:"time_selector_request_data",VISITORS_TAB_VIEW_CHART_NAV_CLICK_REQUEST_DATA:"visitors_tab_view_chart_nav_click_request_data",VISITORS_TAB_VIEW_CHART_UPDATE_DATA:"visitors_tab_view_chart_update_data"};},null);
__d("d3/core/bisect",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(k){return {left:function(l,m,n,o){if(arguments.length<3)n=0;if(arguments.length<4)o=l.length;while(n<o){var p=n+o>>>1;if(k.call(l,l[p],p)<m){n=p+1;}else o=p;}return n;},right:function(l,m,n,o){if(arguments.length<3)n=0;if(arguments.length<4)o=l.length;while(n<o){var p=n+o>>>1;if(m<k.call(l,l[p],p)){o=p;}else n=p+1;}return n;}};},i=h(function(k){return k;}),j=i.right;j.left=i.left;j.right=j;j.or=h;f.exports=j;},null);
__d("d3/core/class",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){try{for(var l in j)Object.defineProperty(i.prototype,l,{value:j[l],enumerable:false});}catch(k){i.prototype=j;}}g._class=h;},null);
__d("d3/core/color",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){}h.prototype.toString=function(){return this.rgb()+"";};g._Color=h;},null);
__d('d3/core/core',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=Math.PI,i=1e-06,j={version:"3.0.6"},k=h/180,l=180/h,m=typeof document==='undefined'?null:document,n=typeof window==='undefined'?null:window;function o(q){return q.target;}function p(q){return q.source;}j._u03c0=h;j._u03b5=i;j._radians=k;j._degrees=l;j._document=m;j._window=n;j._target=o;j._source=p;f.exports=j;},null);
__d("d3/core/format-en_US",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=".",i=",",j=[3,3];g._decimalPoint=h;g._thousandsSeparator=i;g._grouping=j;},null);
__d("d3/core/identity",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return i;}g._identity=h;},null);
__d("d3/core/map",["d3/core/class"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/class")._class,i=function(m){var n=new j();for(var o in m)n.set(o,m[o]);return n;};function j(){}h(j,{has:function(m){return k+m in this;},get:function(m){return this[k+m];},set:function(m,n){return this[k+m]=n;},remove:function(m){m=k+m;return m in this&&delete this[m];},keys:function(){var m=[];this.forEach(function(n){m.push(n);});return m;},values:function(){var m=[];this.forEach(function(n,o){m.push(o);});return m;},entries:function(){var m=[];this.forEach(function(n,o){m.push({key:n,value:o});});return m;},forEach:function(m){for(var n in this)if(n.charCodeAt(0)===l)m.call(this,n.substring(1),this[n]);}});var k="\0",l=k.charCodeAt(0);i._Map=j;f.exports=i;},null);
__d("d3/core/round",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(i,j){return j?Math.round(i*(j=Math.pow(10,j)))/j:Math.round(i);};f.exports=h;},null);
__d("d3/core/format",["d3/core/format-en_US","d3/core/map","d3/core/round","d3/core/identity","d3/core/formatPrefix"],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h._decimalPoint,l=c("d3\/core\/identity")._identity,m=h._grouping,n=h._thousandsSeparator,o=function(v){var w=p.exec(v),x=w[1]||" ",y=w[2]||">",z=w[3]||"",aa=w[4]||"",ba=w[5],ca=+w[6],da=w[7],ea=w[8],fa=w[9],ga=1,ha="",ia=false;if(ea)ea=+ea.substring(1);if(ba||x==="0"&&y==="="){ba=x="0";y="=";if(da)ca-=Math.floor((ca-1)/4);}switch(fa){case "n":da=true;fa="g";break;case "%":ga=100;ha="%";fa="f";break;case "p":ga=100;ha="%";fa="r";break;case "b":case "o":case "x":case "X":if(aa)aa="0"+fa.toLowerCase();case "c":case "d":ia=true;ea=0;break;case "s":ga=-1;fa="r";break;}if(aa==="#")aa="";if(fa=="r"&&!ea)fa="g";fa=q.get(fa)||s;var ja=ba&&da;return function(ka){if(ia&&ka%1)return "";var la=ka<0||ka===0&&1/ka<0?(ka=-ka,"-"):z;if(ga<0){var ma=c("d3\/core\/formatPrefix")(ka,ea);ka=ma.scale(ka);ha=ma.symbol;}else ka*=ga;ka=fa(ka,ea);if(!ba&&da)ka=t(ka);var na=aa.length+ka.length+(ja?0:la.length),oa=na<ca?new Array(na=ca-na+1).join(x):"";if(ja)ka=t(oa+ka);if(k)ka.replace(".",k);la+=aa;return (y==="<"?la+ka+oa:y===">"?oa+la+ka:y==="^"?oa.substring(0,na>>=1)+la+ka+oa.substring(na):la+(ja?ka:oa+ka))+ha;};},p=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,q=i({b:function(v){return v.toString(2);},c:function(v){return String.fromCharCode(v);},o:function(v){return v.toString(8);},x:function(v){return v.toString(16);},X:function(v){return v.toString(16).toUpperCase();},g:function(v,w){return v.toPrecision(w);},e:function(v,w){return v.toExponential(w);},f:function(v,w){return v.toFixed(w);},r:function(v,w){return (v=j(v,r(v,w))).toFixed(Math.max(0,Math.min(20,r(v*(1+1e-15),w))));}});function r(v,w){return w-(v?Math.ceil(Math.log(v)/Math.LN10):1);}function s(v){return v+"";}var t=l;if(m){var u=m.length;t=function(v){var w=v.lastIndexOf("."),x=w>=0?"."+v.substring(w+1):(w=v.length,""),y=[],z=0,aa=m[0];while(w>0&&aa>0){y.push(v.substring(w-=aa,w+aa));aa=m[z=(z+1)%u];}return y.reverse().join(n||"")+x;};}o._precision=r;f.exports=o;},null);
__d("d3/core/formatPrefix",["d3/core/round","d3/core/format"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=["y","z","a","f","p","n","\u00b5","m","","k","M","G","T","P","E","Z","Y"].map(k),j=function(l,m){var n=0;if(l){if(l<0)l*=-1;if(m)l=h(l,c("d3\/core\/format")._precision(l,m));n=1+Math.floor(1e-12+Math.log(l)/Math.LN10);n=Math.max(-24,Math.min(24,Math.floor((n<=0?n+1:n-1)/3)*3));}return i[8+n/3];};function k(l,m){var n=Math.pow(10,Math.abs(8-m)*3);return {scale:m>8?function(o){return o/n;}:function(o){return o*n;},symbol:l};}f.exports=j;},null);
__d("d3/core/hcl",["d3/core/color","d3/core/core","d3/core/lab","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=c("d3\/core\/core")._radians,j=function(o,p,q){return arguments.length===1?o instanceof l?k(o.h,o.c,o.l):o instanceof c("d3\/core\/lab")._Lab?c("d3\/core\/lab")._hcl(o.l,o.a,o.b):c("d3\/core\/lab")._hcl((o=c("d3\/core\/rgb")._lab((o=c("d3\/core\/rgb")(o)).r,o.g,o.b)).l,o.a,o.b):k(+o,+p,+q);};function k(o,p,q){return new l(o,p,q);}function l(o,p,q){this.h=o;this.c=p;this.l=q;}var m=l.prototype=new h();m.brighter=function(o){return k(this.h,this.c,Math.min(100,this.l+c("d3\/core\/lab")._K*(arguments.length?o:1)));};m.darker=function(o){return k(this.h,this.c,Math.max(0,this.l-c("d3\/core\/lab")._K*(arguments.length?o:1)));};m.rgb=function(){return n(this.h,this.c,this.l).rgb();};function n(o,p,q){return c("d3\/core\/lab")._lab(q,Math.cos(o*=i)*p,Math.sin(o)*p);}j._Hcl=l;j._hcl=k;j._lab=n;f.exports=j;},null);
__d("d3/core/hsl",["d3/core/color","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=function(n,o,p){return arguments.length===1?n instanceof k?j(n.h,n.s,n.l):c("d3\/core\/rgb")._parse(""+n,c("d3\/core\/rgb")._hsl,j):j(+n,+o,+p);};function j(n,o,p){return new k(n,o,p);}function k(n,o,p){this.h=n;this.s=o;this.l=p;}var l=k.prototype=new h();l.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);return j(this.h,this.s,this.l/n);};l.darker=function(n){n=Math.pow(.7,arguments.length?n:1);return j(this.h,this.s,n*this.l);};l.rgb=function(){return m(this.h,this.s,this.l);};function m(n,o,p){var q,r;n=n%360;if(n<0)n+=360;o=o<0?0:o>1?1:o;p=p<0?0:p>1?1:p;r=p<=.5?p*(1+o):p+o-p*o;q=2*p-r;function s(u){if(u>360){u-=360;}else if(u<0)u+=360;if(u<60)return q+(r-q)*u/60;if(u<180)return r;if(u<240)return q+(r-q)*(240-u)/60;return q;}function t(u){return Math.round(s(u)*255);}return c("d3\/core\/rgb")._rgb(t(n+120),t(n),t(n-120));}i._hsl=j;i._rgb=m;f.exports=i;},null);
__d("d3/core/xyz",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return j>.008856?Math.pow(j,1/3):7.787037*j+4/29;}function i(j){return Math.round(255*(j<=.00304?12.92*j:1.055*Math.pow(j,1/2.4)-.055));}g._lab=h;g._rgb=i;},null);
__d("d3/core/lab",["d3/core/color","d3/core/xyz","d3/core/core","d3/core/hcl","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=c("d3\/core\/xyz")._rgb,j=c("d3\/core\/core")._u03c0,k=function(v,w,x){return arguments.length===1?v instanceof m?l(v.l,v.a,v.b):v instanceof c("d3\/core\/hcl")._Hcl?c("d3\/core\/hcl")._lab(v.l,v.c,v.h):c("d3\/core\/rgb")._lab((v=c("d3\/core\/rgb")(v)).r,v.g,v.b):l(+v,+w,+x);};function l(v,w,x){return new m(v,w,x);}function m(v,w,x){this.l=v;this.a=w;this.b=x;}var n=18,o=.95047,p=1,q=1.08883,r=m.prototype=new h();r.brighter=function(v){return l(Math.min(100,this.l+n*(arguments.length?v:1)),this.a,this.b);};r.darker=function(v){return l(Math.max(0,this.l-n*(arguments.length?v:1)),this.a,this.b);};r.rgb=function(){return s(this.l,this.a,this.b);};function s(v,w,x){var y=(v+16)/116,z=y+w/500,aa=y-x/200;z=u(z)*o;y=u(y)*p;aa=u(aa)*q;return c("d3\/core\/rgb")._rgb(i(3.2404542*z-1.5371385*y-.4985314*aa),i(-.969266*z+1.8760108*y+.041556*aa),i(.0556434*z-.2040259*y+1.0572252*aa));}function t(v,w,x){return c("d3\/core\/hcl")._hcl(Math.atan2(x,w)/j*180,Math.sqrt(w*w+x*x),v);}function u(v){return v>.206893034?v*v*v:(v-4/29)/7.787037;}k._K=n;k._X=o;k._Y=p;k._Z=q;k._Lab=m;k._lab=l;k._rgb=s;k._hcl=t;f.exports=k;},null);
__d("d3/core/rgb",["d3/core/map","d3/core/color","d3/core/xyz","d3/core/hsl","d3/core/lab"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c("d3\/core\/color")._Color,j=c("d3\/core\/xyz")._lab,k=function(v,w,x){return arguments.length===1?v instanceof m?l(v.r,v.g,v.b):p(""+v,l,c("d3\/core\/hsl")._rgb):l(~~v,~~w,~~x);};function l(v,w,x){return new m(v,w,x);}function m(v,w,x){this.r=v;this.g=w;this.b=x;}var n=m.prototype=new i();n.brighter=function(v){v=Math.pow(.7,arguments.length?v:1);var w=this.r,x=this.g,y=this.b,z=30;if(!w&&!x&&!y)return l(z,z,z);if(w&&w<z)w=z;if(x&&x<z)x=z;if(y&&y<z)y=z;return l(Math.min(255,Math.floor(w/v)),Math.min(255,Math.floor(x/v)),Math.min(255,Math.floor(y/v)));};n.darker=function(v){v=Math.pow(.7,arguments.length?v:1);return l(Math.floor(v*this.r),Math.floor(v*this.g),Math.floor(v*this.b));};n.hsl=function(){return q(this.r,this.g,this.b);};n.toString=function(){return "#"+o(this.r)+o(this.g)+o(this.b);};function o(v){return v<16?"0"+Math.max(0,v).toString(16):Math.min(255,v).toString(16);}function p(v,w,x){var y=0,z=0,aa=0,ba,ca,da;ba=/([a-z]+)\((.*)\)/i.exec(v);if(ba){ca=ba[2].split(",");switch(ba[1]){case "hsl":return x(parseFloat(ca[0]),parseFloat(ca[1])/100,parseFloat(ca[2])/100);case "rgb":return w(t(ca[0]),t(ca[1]),t(ca[2]));}}if(da=u.get(v))return w(da.r,da.g,da.b);if(v!=null&&v.charAt(0)==="#"){if(v.length===4){y=v.charAt(1);y+=y;z=v.charAt(2);z+=z;aa=v.charAt(3);aa+=aa;}else if(v.length===7){y=v.substring(1,3);z=v.substring(3,5);aa=v.substring(5,7);}y=parseInt(y,16);z=parseInt(z,16);aa=parseInt(aa,16);}return w(y,z,aa);}function q(v,w,x){var y=Math.min(v/=255,w/=255,x/=255),z=Math.max(v,w,x),aa=z-y,ba,ca,da=(z+y)/2;if(aa){ca=da<.5?aa/(z+y):aa/(2-z-y);if(v==z){ba=(w-x)/aa+(w<x?6:0);}else if(w==z){ba=(x-v)/aa+2;}else ba=(v-w)/aa+4;ba*=60;}else ca=ba=0;return c("d3\/core\/hsl")._hsl(ba,ca,da);}function r(v,w,x){v=s(v);w=s(w);x=s(x);var y=j((.4124564*v+.3575761*w+.1804375*x)/c("d3\/core\/lab")._X),z=j((.2126729*v+.7151522*w+.072175*x)/c("d3\/core\/lab")._Y),aa=j((.0193339*v+.119192*w+.9503041*x)/c("d3\/core\/lab")._Z);return c("d3\/core\/lab")._lab(116*z-16,500*(y-z),200*(z-aa));}function s(v){return (v/=255)<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4);}function t(v){var w=parseFloat(v);return v.charAt(v.length-1)==="%"?Math.round(w*2.55):w;}var u=h({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});u.forEach(function(v,w){u.set(v,p(w,l,c("d3\/core\/hsl")._rgb));});k._names=u;k._rgb=l;k._parse=p;k._hsl=q;k._hex=o;k._lab=r;f.exports=k;},null);
__d("d3/core/ns",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},i={prefix:h,qualify:function(j){var k=j.indexOf(":"),l=j;if(k>=0){l=j.substring(0,k);j=j.substring(k+1);}return h.hasOwnProperty(l)?{space:h[l],local:j}:j;}};f.exports=i;},null);
__d("d3/core/transform",["d3/core/core","d3/core/ns"],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h._document,k=h._degrees,l=function(r){var s=j.createElementNS(i.prefix.svg,"g");return (l=function(t){s.setAttribute("transform",t);var u=s.transform.baseVal.consolidate();return new m(u?u.matrix:q);})(r);};function m(r){var s=[r.a,r.b],t=[r.c,r.d],u=o(s),v=n(s,t),w=o(p(t,s,-v))||0;if(s[0]*t[1]<t[0]*s[1]){s[0]*=-1;s[1]*=-1;u*=-1;v*=-1;}this.rotate=(u?Math.atan2(s[1],s[0]):Math.atan2(-t[0],t[1]))*k;this.translate=[r.e,r.f];this.scale=[u,w];this.skew=w?Math.atan2(v,w)*k:0;}m.prototype.toString=function(){return "translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")";};function n(r,s){return r[0]*s[0]+r[1]*s[1];}function o(r){var s=Math.sqrt(n(r,r));if(s){r[0]/=s;r[1]/=s;}return s;}function p(r,s,t){r[0]+=t*s[0];r[1]+=t*s[1];return r;}var q={a:1,b:0,c:0,d:1,e:0,f:0};f.exports=l;},null);
__d("d3/core/interpolate",["d3/core/rgb","d3/core/hsl","d3/core/lab","d3/core/hcl","d3/core/transform","d3/core/color"],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h._hex,n=i._rgb,o=j._rgb,p=k._lab,q=h._names,r=c("d3\/core\/color")._Color,s=function(v,w){var x=s.interpolators.length,y;while(--x>=0&&!(y=s.interpolators[x](v,w)));return y;};s.number=function(v,w){w-=v;return function(x){return v+w*x;};};s.round=function(v,w){w-=v;return function(x){return Math.round(v+w*x);};};s.string=function(v,w){var x,y,z,aa=0,ba=0,ca=[],da=[],ea,fa;t.lastIndex=0;for(y=0;x=t.exec(w);++y){if(x.index)ca.push(w.substring(aa,ba=x.index));da.push({i:ca.length,x:x[0]});ca.push(null);aa=t.lastIndex;}if(aa<w.length)ca.push(w.substring(aa));for(y=0,ea=da.length;(x=t.exec(v))&&y<ea;++y){fa=da[y];if(fa.x==x[0]){if(fa.i){if(ca[fa.i+1]==null){ca[fa.i-1]+=fa.x;ca.splice(fa.i,1);for(z=y+1;z<ea;++z)da[z].i--;}else{ca[fa.i-1]+=fa.x+ca[fa.i+1];ca.splice(fa.i,2);for(z=y+1;z<ea;++z)da[z].i-=2;}}else if(ca[fa.i+1]==null){ca[fa.i]=fa.x;}else{ca[fa.i]=fa.x+ca[fa.i+1];ca.splice(fa.i+1,1);for(z=y+1;z<ea;++z)da[z].i--;}da.splice(y,1);ea--;y--;}else fa.x=s.number(parseFloat(x[0]),parseFloat(fa.x));}while(y<ea){fa=da.pop();if(ca[fa.i+1]==null){ca[fa.i]=fa.x;}else{ca[fa.i]=fa.x+ca[fa.i+1];ca.splice(fa.i+1,1);}ea--;}if(ca.length===1)return ca[0]==null?da[0].x:function(){return w;};return function(ga){for(y=0;y<ea;++y)ca[(fa=da[y]).i]=fa.x(ga);return ca.join("");};};s.transform=function(v,w){var x=[],y=[],z,aa=l(v),ba=l(w),ca=aa.translate,da=ba.translate,ea=aa.rotate,fa=ba.rotate,ga=aa.skew,ha=ba.skew,ia=aa.scale,ja=ba.scale;if(ca[0]!=da[0]||ca[1]!=da[1]){x.push("translate(",null,",",null,")");y.push({i:1,x:s.number(ca[0],da[0])},{i:3,x:s.number(ca[1],da[1])});}else if(da[0]||da[1]){x.push("translate("+da+")");}else x.push("");if(ea!=fa){if(ea-fa>180){fa+=360;}else if(fa-ea>180)ea+=360;y.push({i:x.push(x.pop()+"rotate(",null,")")-2,x:s.number(ea,fa)});}else if(fa)x.push(x.pop()+"rotate("+fa+")");if(ga!=ha){y.push({i:x.push(x.pop()+"skewX(",null,")")-2,x:s.number(ga,ha)});}else if(ha)x.push(x.pop()+"skewX("+ha+")");if(ia[0]!=ja[0]||ia[1]!=ja[1]){z=x.push(x.pop()+"scale(",null,",",null,")");y.push({i:z-4,x:s.number(ia[0],ja[0])},{i:z-2,x:s.number(ia[1],ja[1])});}else if(ja[0]!=1||ja[1]!=1)x.push(x.pop()+"scale("+ja+")");z=y.length;return function(ka){var la=-1,ma;while(++la<z)x[(ma=y[la]).i]=ma.x(ka);return x.join("");};};s.rgb=function(v,w){v=h(v);w=h(w);var x=v.r,y=v.g,z=v.b,aa=w.r-x,ba=w.g-y,ca=w.b-z;return function(da){return "#"+m(Math.round(x+aa*da))+m(Math.round(y+ba*da))+m(Math.round(z+ca*da));};};s.hsl=function(v,w){v=i(v);w=i(w);var x=v.h,y=v.s,z=v.l,aa=w.h-x,ba=w.s-y,ca=w.l-z;if(aa>180){aa-=360;}else if(aa<-180)aa+=360;return function(da){return n(x+aa*da,y+ba*da,z+ca*da)+"";};};s.lab=function(v,w){v=j(v);w=j(w);var x=v.l,y=v.a,z=v.b,aa=w.l-x,ba=w.a-y,ca=w.b-z;return function(da){return o(x+aa*da,y+ba*da,z+ca*da)+"";};};s.hcl=function(v,w){v=k(v);w=k(w);var x=v.h,y=v.c,z=v.l,aa=w.h-x,ba=w.c-y,ca=w.l-z;if(aa>180){aa-=360;}else if(aa<-180)aa+=360;return function(da){return p(x+aa*da,y+ba*da,z+ca*da)+"";};};s.array=function(v,w){var x=[],y=[],z=v.length,aa=w.length,ba=Math.min(v.length,w.length),ca;for(ca=0;ca<ba;++ca)x.push(s(v[ca],w[ca]));for(;ca<z;++ca)y[ca]=v[ca];for(;ca<aa;++ca)y[ca]=w[ca];return function(da){for(ca=0;ca<ba;++ca)y[ca]=x[ca](da);return y;};};s.object=function(v,w){var x={},y={},z;for(z in v)if(z in w){x[z]=u(z)(v[z],w[z]);}else y[z]=v[z];for(z in w)if(!(z in v))y[z]=w[z];return function(aa){for(z in x)y[z]=x[z](aa);return y;};};var t=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;function u(v){return v=="transform"?s.transform:s;}s.interpolators=[s.object,function(v,w){return w instanceof Array&&s.array(v,w);},function(v,w){return (typeof v==="string"||typeof w==="string")&&s.string(v+"",w+"");},function(v,w){return (typeof w==="string"?q.has(w)||/^(#|rgb\(|hsl\()/.test(w):w instanceof r)&&s.rgb(v,w);},function(v,w){return !isNaN(v=+v)&&!isNaN(w=+w)&&s.number(v,w);}];s._interpolateByName=u;f.exports=s;},null);
__d("d3/core/range",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j,k,l){if(arguments.length<3){l=1;if(arguments.length<2){k=j;j=0;}}if((k-j)/l===Infinity)throw new Error("infinite range");var m=[],n=i(Math.abs(l)),o=-1,p;j*=n,k*=n,l*=n;if(l<0){while((p=j+l*++o)>k)m.push(p/n);}else while((p=j+l*++o)<k)m.push(p/n);return m;};function i(j){var k=1;while(j*k%1)k*=10;return k;}f.exports=h;},null);
__d("d3/core/rebind",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j,k){var l=1,m=arguments.length,n;while(++l<m)j[n=arguments[l]]=i(j,k,k[n]);return j;};function i(j,k,l){return function(){var m=l.apply(k,arguments);return arguments.length?j:m;};}f.exports=h;},null);
__d("d3/core/uninterpolate",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){k=k-(j=+j)?1/(k-j):0;return function(l){return (l-j)*k;};}function i(j,k){k=k-(j=+j)?1/(k-j):0;return function(l){return Math.max(0,Math.min(1,(l-j)*k));};}g._uninterpolateNumber=h;g._uninterpolateClamp=i;},null);
__d("d3/scale/bilinear",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){var m=k(i[0],i[1]),n=l(j[0],j[1]);return function(o){return n(m(o));};}g._bilinear=h;},null);
__d("d3/scale/nice",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=0,m=j.length-1,n=j[l],o=j[m],p;if(o<n){p=l,l=m,m=p;p=n,n=o,o=p;}if(k=k(o-n)){j[l]=k.floor(n);j[m]=k.ceil(o);}return j;}function i(){return Math;}g._nice=h;g._niceDefault=i;},null);
__d("d3/scale/polylinear",["d3/core/bisect"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l,m){var n=[],o=[],p=0,q=Math.min(j.length,k.length)-1;if(j[q]<j[0]){j=j.slice().reverse();k=k.slice().reverse();}while(++p<=q){n.push(l(j[p-1],j[p]));o.push(m(k[p-1],k[p]));}return function(r){var s=h(j,r,1,q)-1;return o[s](n[s](r));};}g._polylinear=i;},null);
__d("d3/scale/scale",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(k){var l=k[0],m=k[k.length-1];return l<m?[l,m]:[m,l];}function j(k){return k.rangeExtent?k.rangeExtent():i(k.range());}h._scaleExtent=i;h._scaleRange=j;f.exports=h;},null);
__d("d3/scale/linear",["d3/core/uninterpolate","d3/core/interpolate","d3/core/rebind","d3/core/range","d3/core/core","d3/core/format","d3/scale/polylinear","d3/scale/bilinear","d3/scale/nice","d3/scale/scale"],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=c("d3\/scale\/polylinear")._polylinear,o=c("d3\/scale\/bilinear")._bilinear,p=h._uninterpolateClamp,q=h._uninterpolateNumber,r=c("d3\/scale\/nice")._nice,s=c("d3\/scale\/scale")._scaleExtent,t=function(){return u([0,1],[0,1],i,false);};function u(aa,ba,ca,da){var ea,fa;function ga(){var ia=Math.min(aa.length,ba.length)>2?n:o,ja=da?p:q;ea=ia(aa,ba,ja,ca);fa=ia(ba,aa,ja,i);return ha;}function ha(ia){return ea(ia);}ha.invert=function(ia){return fa(ia);};ha.domain=function(ia){if(!arguments.length)return aa;aa=ia.map(Number);return ga();};ha.range=function(ia){if(!arguments.length)return ba;ba=ia;return ga();};ha.rangeRound=function(ia){return ha.range(ia).interpolate(i.round);};ha.clamp=function(ia){if(!arguments.length)return da;da=ia;return ga();};ha.interpolate=function(ia){if(!arguments.length)return ca;ca=ia;return ga();};ha.ticks=function(ia){return y(aa,ia);};ha.tickFormat=function(ia){return z(aa,ia);};ha.nice=function(){r(aa,w);return ga();};ha.copy=function(){return u(aa,ba,ca,da);};return ga();}function v(aa,ba){return j(aa,ba,"range","rangeRound","interpolate","clamp");}function w(aa){aa=Math.pow(10,Math.round(Math.log(aa)/Math.LN10)-1);return aa&&{floor:function(ba){return Math.floor(ba/aa)*aa;},ceil:function(ba){return Math.ceil(ba/aa)*aa;}};}function x(aa,ba){var ca=s(aa),da=ca[1]-ca[0],ea=Math.pow(10,Math.floor(Math.log(da/ba)/Math.LN10)),fa=ba/da*ea;if(fa<=.15){ea*=10;}else if(fa<=.35){ea*=5;}else if(fa<=.75)ea*=2;ca[0]=Math.ceil(ca[0]/ea)*ea;ca[1]=Math.floor(ca[1]/ea)*ea+ea*.5;ca[2]=ea;return ca;}function y(aa,ba){return k.apply(l,x(aa,ba));}function z(aa,ba){return m(",."+Math.max(0,-Math.floor(Math.log(x(aa,ba)[2])/Math.LN10+.01))+"f");}t._linearTicks=y;t._linearTickFormat=z;t._linearNice=w;t._linearRebind=v;f.exports=t;},null);
__d("d3/time/time",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=Date,j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function k(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0]);}k.prototype={getDate:function(){return this._.getUTCDate();},getDay:function(){return this._.getUTCDay();},getFullYear:function(){return this._.getUTCFullYear();},getHours:function(){return this._.getUTCHours();},getMilliseconds:function(){return this._.getUTCMilliseconds();},getMinutes:function(){return this._.getUTCMinutes();},getMonth:function(){return this._.getUTCMonth();},getSeconds:function(){return this._.getUTCSeconds();},getTime:function(){return this._.getTime();},getTimezoneOffset:function(){return 0;},valueOf:function(){return this._.valueOf();},setDate:function(){l.setUTCDate.apply(this._,arguments);},setDay:function(){l.setUTCDay.apply(this._,arguments);},setFullYear:function(){l.setUTCFullYear.apply(this._,arguments);},setHours:function(){l.setUTCHours.apply(this._,arguments);},setMilliseconds:function(){l.setUTCMilliseconds.apply(this._,arguments);},setMinutes:function(){l.setUTCMinutes.apply(this._,arguments);},setMonth:function(){l.setUTCMonth.apply(this._,arguments);},setSeconds:function(){l.setUTCSeconds.apply(this._,arguments);},setTime:function(){l.setTime.apply(this._,arguments);}};var l=Date.prototype;h._time=i;h._daySymbols=j;h._utc=k;f.exports=h;},null);
__d("d3/time/interval",["d3/time/time"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h._utc;function j(l,m,n){function o(u){var v=l(u),w=q(v,1);return u-v<w-u?v:w;}function p(u){m(u=l(new h._time(u-1)),1);return u;}function q(u,v){m(u=new h._time(+u),v);return u;}function r(u,v,w){var x=p(u),y=[];if(w>1){while(x<v){if(!(n(x)%w))y.push(new Date(+x));m(x,1);}}else while(x<v)y.push(new Date(+x)),m(x,1);return y;}function s(u,v,w){try{h._time=i;var x=new i();x._=u;return r(x,v,w);}finally{h._time=Date;}}l.floor=l;l.round=o;l.ceil=p;l.offset=q;l.range=r;var t=l.utc=k(l);t.floor=t;t.round=k(o);t.ceil=k(p);t.offset=k(q);t.range=s;return l;}function k(l){return function(m,n){try{h._time=i;var o=new i();o._=m;return l(o,n)._;}finally{h._time=Date;}};}g._interval=j;},null);
__d("d3/time/day",["d3/time/time","d3/time/interval","d3/time/year"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c("d3\/time\/interval")._interval,j=i(function(k){var l=new h._time(1970,0);l.setFullYear(k.getFullYear(),k.getMonth(),k.getDate());return l;},function(k,l){k.setDate(k.getDate()+l);},function(k){return k.getDate()-1;});j.s=j.range;j.s.utc=j.utc.range;j.ofYear=function(k){var l=c("d3\/time\/year")(k);return Math.floor((k-l-(k.getTimezoneOffset()-l.getTimezoneOffset())*60000)/86400000);};f.exports=j;},null);
__d("d3/time/year",["d3/time/interval","d3/time/day"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){j=c("d3\/time\/day")(j);j.setMonth(0,1);return j;},function(j,k){j.setFullYear(j.getFullYear()+k);},function(j){return j.getFullYear();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);
__d('PagesInsightsDataDispatcher',['ReactDispatcher_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=new h();},null);
__d('SpectrumNumberUtilities',['NumberFormatConfig','fbt','intlNumUtils'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(q){return j.getIntegerString(Math.round(q),h.numberDelimiter);}function l(q){q=Math.round(q*10)/10;return j.getFloatString(q,h.numberDelimiter,h.decimalSeparator);}function m(q){if(Math.abs(q)>=1e+09)return l(q/1e+09)+'b';if(Math.abs(q)>=1e+06)return l(q/1e+06)+'m';if(Math.abs(q)>=1000)return l(q/1000)+'K';return k(q);}var n={GBP:163,EUR:128,JPY:165,USD:36};function o(q,r){var s=n[q];if(s)q=String.fromCharCode(s);var t,u='';if(r==Math.round(r)){t=m(r);}else{var v=r.toFixed(2).split('.'),w=h.decimalSeparator;t=k(parseInt(v[0],10))+w+v[1];if(r<0){t=t.replace(/-/,'');u='-';}}return i._("{negative sign(-) or blank}{currency symbol}{number}",[i.param('negative sign(-) or blank',u),i.param('currency symbol',q),i.param('number',t)]).toString();}var p={CURRENCY_FORMATS:n,currencyFormatter:o,integerFormatter:k,floatFormatter:l,shortIntegerFormatter:m};f.exports=p;},null);
__d('SpectrumBaseNumberScale',['d3/scale/linear','SpectrumNumberUtilities','d3/core/range'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(o){if(o===0)return 0;return Math.pow(10,Math.round(Math.log(Math.abs(o))/Math.LN10)-1);}function l(o,p){var q=o.domain(),r=q[0],s=q[q.length-1],t=s-r;if(s<r){r=s;s=q[0];}var u=o.ceilToFixed(Math.pow(10,o.floorToFixed(Math.log(t/p)/Math.LN10))),v=p*u/t;if(v<=.15){u*=10;}else if(v<=.35){u*=5;}else if(v<=.75)u*=2;return {start:r,stop:s,span:t,step:u};}function m(o,p){o.shift=function(){return Math.pow(10,p);};o.tickFormat=function(){return i.shortIntegerFormatter;};o.tooltipFormat=function(){return i.integerFormatter;};o.nice=function(r){var s=o.domain(),t=s[0],u=s[s.length-1],v=Math.max(k(t),k(u),1/o.shift());if(v===0){t=0;u=1;}else if(t==u){u=Math.ceil(u/v)*v;t=u-v;if(u>=0){t=Math.max(t,0);u=Math.max(u,v);}}else if(t<u){t=Math.floor(t/v)*v;u=Math.ceil(u/v)*v;}else{t=Math.ceil(t/v)*v;u=Math.floor(u/v)*v;}return o.domain([t,u]);};o.ceilToFixed=function(r){return Math.ceil(r*o.shift())/o.shift();};o.floorToFixed=function(r){return Math.floor(r*o.shift())/o.shift();};o.getTickStep=function(r){var s=l(o,r);return s.step;};o.ticks=function(r){var s=l(o,r),t=s.start,u=s.stop,v=s.span,w=s.step,x=t>0?1:-1,y=u>0?1:-1,z=j(x*Math.ceil(Math.abs(t/w))*w,y*Math.floor(Math.abs(u/w))*w+w*.5,w);if(z[0]<t)z.shift();var aa=z.map(o.tickFormat()).some(function(ba,ca,da){return ca>0&&ba==da[ca-1];});if(aa)z=o.ticks(r-1);if(z.length<=2)if(r>2&&u>1){return [t,t+v/2,u];}else return [t,u];return z;};var q=o.copy;o.copy=function(){return m(q(),p);};return o;}var n=function(o){o=o===undefined?0:o;return m(h(),o);};f.exports=n;},null);
__d('SpectrumIntegerScale',['SpectrumBaseNumberScale'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function(){return h(0);};f.exports=i;},null);
__d('HubbleConstants',['PageInsightsPostFields'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={DEFAULT_SECTION:'navOverview',NAV_SECTIONS:{LIKES:'navLikes',LOCAL:'navLocal',OVERVIEW:'navOverview',PEOPLE:'navPeople',POSTS:'navPosts',REACH:'navReach',VISITS:'navVisits',PAGE_VIEWS:'navPageViews',ACTIONS_ON_PAGE:'navActionsOnPage',WIFI:'navWifi',EVENTS:'navEvents',VIDEOS:'navVideos',SHOP:'navShop',BRANDED_CONTENT:'navBrandedContent'},SCROLL_TARGETS:{ENGAGEMENT:'engagement'},PIPELINE_DAILY:'pipe_daily',PIPELINE_WEEKLY:'pipe_weekly',PIPELINE_MONTHLY:'pipe_monthly',PIPELINE_LIFETIME:'pipe_lifetime',PIPELINE_DEMO:'pipe_demo',PERIOD_DAY:'day',PERIOD_WEEK:'week',PERIOD_28_DAYS:'days_28',PERIOD_LIFETIME:'lifetime',SERIES_AREA:'area',SERIES_LINE:'line',SEC_IN_MIN:60,DAYS_PER_WEEK:7,SORT_BY_DATE:'date',SORT_BY_REACH:'reach',SORT_BY_CLICKS:'clicks',SORT_BY_LCS:'lcs',REQ_PREMIUM_VIDEO:'premium_video',REQ_PUBLISHED:'published',REQ_SMART_PUBLISHING:'smart_publishing',REQ_UNPUBLISHED:'unpublished',REQ_VIDEO:'video',TABLE_PAGE_SIZE:10,FACEBOOK_DEMOGRAPHICS:{F:{ageBuckets:{'13-17':7.2,'18-24':14.4,'25-34':11.8,'35-44':6.2,'45-54':3.6,'55-64':1.9,'65+':1.1},total:46.2},M:{ageBuckets:{'13-17':7.7,'18-24':17.9,'25-34':14.8,'35-44':7,'45-54':3.6,'55-64':1.6,'65+':1.3},total:53.8},total:100},MIN_WIFI_USERS_COUNT:100,POSTS_TABLE_FIELDS:[h.CAPTION,h.CREATION_TIME,h.DESCRIPTION,h.ID,h.IDENTIFIER,h.MESSAGE,h.NAME,h.PICTURE,h.PRIVACY,h.STATUS_TYPE,h.TYPE,h.HAS_HINTS,h.HINTS_CONFIG]};f.exports=i;},null);
__d('InsightsUtils',['d3/time/day','UTCUtils','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=24*60*60,l=25*60*60,m=-1*8*60*60*1000,n={dateToSeconds:function(o){if(o instanceof Date)return parseInt(o.getTime()/1000,10);return o;},_isEmpty:function(o){return Object.keys(o).length===0;},_isKeyed:function(o){for(var p=0;p<o.length;++p){if(typeof o[p].value!=='object')return false;if(!this._isEmpty(o[p].value))return true;}return true;},formatInsightsResponse:function(o){var p=-Infinity,q=null,r=0,s=null,t=false,u=0,v=null,w=0,x=Infinity,y=o.data.length,z=null,aa=null,ba={};for(var ca=0;ca<y;++ca){s=o.data[ca];t=this._isKeyed(s.values);x=Math.min(x,s.values[0].end_time-k);p=Math.max(p,s.values[o.data[ca].values.length-1].end_time);ba[s.name]=ba[s.name]||{};if(t){ba[s.name][s.period]=v={};for(var da=0;da<s.values.length;++da){aa=s.values[da];Object.keys(aa.value).forEach(function(ea){if(!v.hasOwnProperty(ea))ba[s.name][s.period][ea]=null;});}}else ba[s.name][s.period]=null;}w=Math.round((p-x)/k);for(ca=0;ca<y;++ca){r=x;s=o.data[ca];t=this._isKeyed(s.values);u=0;z=s.period+'_timestamps';q=n.fillArray(w,null);ba[s.name][z]=q;if(!t)ba[s.name][s.period]=n.fillArray(w,null);for(da=0;da<s.values.length;++da){aa=s.values[da];if(aa.end_time-r>l)u+=Math.round((aa.end_time-r)/k)-1;if(t){v=ba[s.name][s.period];Object.keys(v).forEach(function(ea){if(v[ea]===null)v[ea]=n.fillArray(w,null);v[ea][da+u]=aa.value[ea]||0;});}else if(typeof aa.value==='object'){ba[s.name][s.period][da+u]=0;}else ba[s.name][s.period][da+u]=aa.value;ba[s.name][z][da+u]=aa.end_time;r=aa.end_time;}}return {endTime:n.pacificSecondsToUTCDate(p),seriesLength:w,startTime:n.pacificSecondsToUTCDate(x+k),values:ba};},formatParams:function(o){var p=babelHelpers._extends({},o);p.date_format='U';if(o.since)p.since=this.utcDateToPacificSeconds(o.since);if(o.until)p.until=this.utcDateToPacificSeconds(o.until);return p;},localTimeToPacificDate:function(o){return new Date(o.getTime()+i.offsetFromPacificTime(o));},pacificSecondsToUTCDate:function(o){var p=o*1000;return new Date(p+i.getPacificOffsetAt(p));},utcDateToPacificSeconds:function(o){return this.dateToSeconds(o)-Math.round(i.getPacificOffsetAt(o)/1000);},utcTimeToPacificDay:function(o){return new Date(h.utc.floor(o).getTime()-i.getPacificOffsetAt(o));},pstTimeToUTCDay:function(o){return h.utc.floor(new Date(o.getTime()+m));},utcTimeToPST:function(o){return new Date(h.utc.floor(o).getTime()-m);},getMostRecentPacificDayBegin:function(o){var p=o.getTime(),q=p+i.getPacificOffsetAt(p),r=h.utc.floor(new Date(q)).getTime(),s=new Date(r-i.getPacificOffsetAt(r));return s;},fillArray:function(o,p){var q=new Array(o);for(var r=0;r<o;)q[r++]=p;return q;},getRangeIndices:function(o,p){return [n.millisecondsToDays(p.since-o)+1,n.millisecondsToDays(p.until-o)];},millisecondsToDays:function(o){var p=1000*60*60*24;return Math.round(o/p);},sliceData:function(o,p,q){var r=n.getRangeIndices(p,q);return o.slice(r[0],r[1]+1);},moveRange:function(o,p){var q=p||-7;return {since:h.utc.offset(o.since,q),until:h.utc.offset(o.until,q)};},chartHasDataToRender:function(o){return o.lines&&o.lines.length||o.areas&&o.areas.length;}};f.exports=n;},null);
__d('PagesInsightsRequest',['AsyncRequest'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={sendRequest:function(j){new h(j).send();},getRequest:function(j){return new h(j);}};f.exports=i;},null);