/*!CK:2903993722!*//*1452813995,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3757k"]); }

__d('MercuryCallLogMessage.react',['Bootloader','FBRTCSupport','React','SimpleXUIDialog','Tooltip.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.createClass({displayName:'MercuryCallLogMessage',render:function(){if(this.props.isAnswered){return (this._renderAnsweredCallLogMessage(this.props.peerFBID,this.props.peerName,this.props.isOutgoingCall));}else return (this._renderMissedCallLogMessage(this.props.peerFBID,this.props.peerName,this.props.isOutgoingCall));},_renderAnsweredCallLogMessage:function(p,q,r){var s=n._("Call {firstname}",[n.param('firstname',q)]),t;if(r){t=n._("You called {firstname}.",[n.param('firstname',q)]);}else t=n._("{firstname} called you.",[n.param('firstname',q)]);return this._generateCallLink(t,s,p,q);},_renderMissedCallLogMessage:function(p,q,r){var s,t;if(r){s=n._("{firstname} missed a call from you.",[n.param('firstname',q)]);t=n._("Call {firstname} again",[n.param('firstname',q)]);}else{s=n._("You missed a call from {firstname}.",[n.param('firstname',q)]);t=n._("Call {firstname} back",[n.param('firstname',q)]);}return this._generateCallLink(s,t,p,q);},_generateCallLink:function(p,q,r,s){if(i.isOSSupported()){return (j.createElement('a',{className:"_1xpw",onClick:this._handleClick.bind(this,r,s)},j.createElement(l,{alignH:'center',position:'above',tooltip:q},p)));}else return (j.createElement('span',{className:"_1xpw"},p));},_handleClick:function(p,q){h.loadModules(["FBRTCCore","FBRTCLogger"],function(r,s){if(r.isAvailableForWebrtcCalling(p)){r.startOutgoingCall(p,s.Trigger.ADMIN_MESSAGE,false);}else k.show(n._("{firstname} can't be called because they are temporarily offline.",[n.param('firstname',q)]),n._("Can't Connect Call"));});}});f.exports=o;},null);