/*!CK:3658236140!*//*1452813634,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["31\/zP"]); }

__d('MessengerSearchInput.react',['AbstractTextInput.react','ReactComponentWithPureRenderMixin','React','XUICloseButton.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MessengerSearchInput',mixins:[i],propTypes:{isFocused:n.bool,onBlur:n.func,onChange:n.func,onClear:n.func,onEnter:n.func,onFocus:n.func,placeholder:n.string,value:n.string.isRequired},render:function(){return (j.createElement('div',{className:m(this.props.className,"_5iwm"+(this.props.isFocused||!!this.props.value?' '+"_5iwn":'')),role:'search'},j.createElement(h,{className:"_3deo",onBlur:this.props.onBlur,onChange:this.props.onChange,onEnter:this.props.onEnter,onFocus:this.props.onFocus,placeholder:this.props.placeholder,ref:'inputField',value:this.props.value}),j.createElement(k,{size:'small',onMouseDown:this.props.onClear,className:(this.props.value.length===0?"hidden_elem":'')+(' '+"_2xme")})));},focusInput:function(){this.refs.inputField.focusInput();}});f.exports=o;},null);