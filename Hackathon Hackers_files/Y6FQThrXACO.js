/*!CK:511056695!*//*1451951875,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/mEq2"]); }

__d('ReactComposerGroupStore',['ReactComposerActionStore','ReactComposerMediaConfig','ReactComposerPostUtils'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,h);l=k&&k.prototype;function m(){'use strict';l.constructor.call(this);}m.prototype.__onPostStarted=function(n){'use strict';j.post({actorID:n.actorID,composerID:n.composerID,contextInfo:n.config.contextInfo,targetID:n.targetID});};m.prototype.__canPost=function(n){'use strict';return !j.isPostButtonDisabled(n.composerID,i.photo.limit);};f.exports=new m();},null);