(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[527],{49101:function(Ie,re,u){"use strict";u.d(re,{Z:function(){return H}});var G=u(28991),C=u(67294),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},d=t,ie=u(27029),pe=function(j,Ne){return C.createElement(ie.Z,(0,G.Z)((0,G.Z)({},j),{},{ref:Ne,icon:d}))};pe.displayName="PlusOutlined";var H=C.forwardRef(pe)},3749:function(){},51752:function(Ie,re,u){"use strict";u.d(re,{Z:function(){return ra}});var G=u(22122),C=u(96156),t=u(67294),d=u(28481),ie=u(90484),pe=u(81253),H=u(28991),Ve=u(94184),j=u.n(Ve),Ne=u(50344),wt=u(31131),je=u(21770),ze=u(85061),ce=u(75164),Fe=u(4084);function Ue(e){var o=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];n.current||(ce.Z.cancel(o.current),o.current=(0,ce.Z)(function(){e.apply(void 0,i)}))}return(0,t.useEffect)(function(){return function(){n.current=!0,ce.Z.cancel(o.current)}},[]),r}function Mt(e){var o=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,d.Z)(n,2),a=r[1],i=(0,t.useRef)(typeof e=="function"?e():e),c=Ue(function(){var s=i.current;o.current.forEach(function(p){s=p(s)}),o.current=[],i.current=s,a({})});function l(s){o.current.push(s),c()}return[i.current,l]}var X=u(15105);function At(e,o){var n,r=e.prefixCls,a=e.id,i=e.active,c=e.tab,l=c.key,s=c.tab,p=c.disabled,y=c.closeIcon,v=e.closable,E=e.renderWrapper,k=e.removeAriaLabel,Z=e.editable,m=e.onClick,W=e.onRemove,D=e.onFocus,w=e.style,b="".concat(r,"-tab");t.useEffect(function(){return W},[]);var x=Z&&v!==!1&&!p;function K(T){p||m(T)}function N(T){T.preventDefault(),T.stopPropagation(),Z.onEdit("remove",{key:l,event:T})}var V=t.createElement("div",{key:l,ref:o,className:j()(b,(n={},(0,C.Z)(n,"".concat(b,"-with-remove"),x),(0,C.Z)(n,"".concat(b,"-active"),i),(0,C.Z)(n,"".concat(b,"-disabled"),p),n)),style:w,onClick:K},t.createElement("div",{role:"tab","aria-selected":i,id:a&&"".concat(a,"-tab-").concat(l),className:"".concat(b,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(l),"aria-disabled":p,tabIndex:p?null:0,onClick:function(h){h.stopPropagation(),K(h)},onKeyDown:function(h){[X.Z.SPACE,X.Z.ENTER].includes(h.which)&&(h.preventDefault(),K(h))},onFocus:D},s),x&&t.createElement("button",{type:"button","aria-label":k||"remove",tabIndex:0,className:"".concat(b,"-remove"),onClick:function(h){h.stopPropagation(),N(h)}},y||Z.removeIcon||"\xD7"));return E?E(V):V}var Lt=t.forwardRef(At),Ge={width:0,height:0,left:0,top:0};function Wt(e,o,n){return(0,t.useMemo)(function(){for(var r,a=new Map,i=o.get((r=e[0])===null||r===void 0?void 0:r.key)||Ge,c=i.left+i.width,l=0;l<e.length;l+=1){var s=e[l].key,p=o.get(s);if(!p){var y;p=o.get((y=e[l-1])===null||y===void 0?void 0:y.key)||Ge}var v=a.get(s)||(0,H.Z)({},p);v.right=c-v.left-v.width,a.set(s,v)}return a},[e.map(function(r){return r.key}).join("_"),o,n])}var Ye={width:0,height:0,left:0,top:0,right:0};function Ot(e,o,n,r,a){var i=a.tabs,c=a.tabPosition,l=a.rtl,s,p,y;["top","bottom"].includes(c)?(s="width",p=l?"right":"left",y=Math.abs(o.left)):(s="height",p="top",y=-o.top);var v=o[s],E=n[s],k=r[s],Z=v;return E+k>v&&(Z=v-k),(0,t.useMemo)(function(){if(!i.length)return[0,0];for(var m=i.length,W=m,D=0;D<m;D+=1){var w=e.get(i[D].key)||Ye;if(w[p]+w[s]>y+Z){W=D-1;break}}for(var b=0,x=m-1;x>=0;x-=1){var K=e.get(i[x].key)||Ye;if(K[p]<y){b=x+1;break}}return[b,W]},[e,y,Z,c,i.map(function(m){return m.key}).join("_"),l])}var Xe=u(10985),Bt=u(70271);function Dt(e,o){var n=e.prefixCls,r=e.editable,a=e.locale,i=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:o,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(l){r.onEdit("add",{event:l})}},r.addIcon||"+")}var Je=t.forwardRef(Dt);function Kt(e,o){var n=e.prefixCls,r=e.id,a=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,s=l===void 0?"More":l,p=e.moreTransitionName,y=e.style,v=e.className,E=e.editable,k=e.tabBarGutter,Z=e.rtl,m=e.onTabClick,W=(0,t.useState)(!1),D=(0,d.Z)(W,2),w=D[0],b=D[1],x=(0,t.useState)(null),K=(0,d.Z)(x,2),N=K[0],V=K[1],T="".concat(r,"-more-popup"),h="".concat(n,"-dropdown"),P=N!==null?"".concat(T,"-").concat(N):null,M=i==null?void 0:i.dropdownAriaLabel,f=t.createElement(Xe.ZP,{onClick:function(O){var z=O.key,F=O.domEvent;m(z,F),b(!1)},id:T,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[N],"aria-label":M!==void 0?M:"expanded dropdown"},a.map(function(I){return t.createElement(Xe.sN,{key:I.key,id:"".concat(T,"-").concat(I.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(I.key),disabled:I.disabled},I.tab)}));function R(I){for(var O=a.filter(function(_){return!_.disabled}),z=O.findIndex(function(_){return _.key===N})||0,F=O.length,q=0;q<F;q+=1){z=(z+I+F)%F;var Y=O[z];if(!Y.disabled){V(Y.key);return}}}function A(I){var O=I.which;if(!w){[X.Z.DOWN,X.Z.SPACE,X.Z.ENTER].includes(O)&&(b(!0),I.preventDefault());return}switch(O){case X.Z.UP:R(-1),I.preventDefault();break;case X.Z.DOWN:R(1),I.preventDefault();break;case X.Z.ESC:b(!1);break;case X.Z.SPACE:case X.Z.ENTER:N!==null&&m(N,I);break}}(0,t.useEffect)(function(){var I=document.getElementById(P);I&&I.scrollIntoView&&I.scrollIntoView(!1)},[N]),(0,t.useEffect)(function(){w||V(null)},[w]);var L=(0,C.Z)({},Z?"marginRight":"marginLeft",k);a.length||(L.visibility="hidden",L.order=1);var Q=j()((0,C.Z)({},"".concat(h,"-rtl"),Z)),te=c?null:t.createElement(Bt.Z,{prefixCls:h,overlay:f,trigger:["hover"],visible:w,transitionName:p,onVisibleChange:b,overlayClassName:Q,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:L,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:A},s));return t.createElement("div",{className:j()("".concat(n,"-nav-operations"),v),style:y,ref:o},te,t.createElement(Je,{prefixCls:n,locale:i,editable:E}))}var $t=t.forwardRef(Kt),ke=(0,t.createContext)(null),Ht=.1,Qe=.01,ye=20,qe=Math.pow(.995,ye);function Vt(e,o){var n=(0,t.useState)(),r=(0,d.Z)(n,2),a=r[0],i=r[1],c=(0,t.useState)(0),l=(0,d.Z)(c,2),s=l[0],p=l[1],y=(0,t.useState)(0),v=(0,d.Z)(y,2),E=v[0],k=v[1],Z=(0,t.useState)(),m=(0,d.Z)(Z,2),W=m[0],D=m[1],w=(0,t.useRef)();function b(h){var P=h.touches[0],M=P.screenX,f=P.screenY;i({x:M,y:f}),window.clearInterval(w.current)}function x(h){if(!!a){h.preventDefault();var P=h.touches[0],M=P.screenX,f=P.screenY;i({x:M,y:f});var R=M-a.x,A=f-a.y;o(R,A);var L=Date.now();p(L),k(L-s),D({x:R,y:A})}}function K(){if(!!a&&(i(null),D(null),W)){var h=W.x/E,P=W.y/E,M=Math.abs(h),f=Math.abs(P);if(Math.max(M,f)<Ht)return;var R=h,A=P;w.current=window.setInterval(function(){if(Math.abs(R)<Qe&&Math.abs(A)<Qe){window.clearInterval(w.current);return}R*=qe,A*=qe,o(R*ye,A*ye)},ye)}}var N=(0,t.useRef)();function V(h){var P=h.deltaX,M=h.deltaY,f=0,R=Math.abs(P),A=Math.abs(M);R===A?f=N.current==="x"?P:M:R>A?(f=P,N.current="x"):(f=M,N.current="y"),o(-f,-f)&&h.preventDefault()}var T=(0,t.useRef)(null);T.current={onTouchStart:b,onTouchMove:x,onTouchEnd:K,onWheel:V},t.useEffect(function(){function h(R){T.current.onTouchStart(R)}function P(R){T.current.onTouchMove(R)}function M(R){T.current.onTouchEnd(R)}function f(R){T.current.onWheel(R)}return document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("touchend",M,{passive:!1}),e.current.addEventListener("touchstart",h,{passive:!1}),e.current.addEventListener("wheel",f),function(){document.removeEventListener("touchmove",P),document.removeEventListener("touchend",M)}},[])}function jt(){var e=(0,t.useRef)(new Map);function o(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[o,n]}function _e(e,o){var n=t.useRef(e),r=t.useState({}),a=(0,d.Z)(r,2),i=a[1];function c(l){var s=typeof l=="function"?l(n.current):l;s!==n.current&&o(s,n.current),n.current=s,i({})}return[n.current,c]}var et=function(o){var n=o.position,r=o.prefixCls,a=o.extra;if(!a)return null;var i,c={};return a&&(0,ie.Z)(a)==="object"&&!t.isValidElement(a)?c=a:c.right=a,n==="right"&&(i=c.right),n==="left"&&(i=c.left),i?t.createElement("div",{className:"".concat(r,"-extra-content")},i):null};function zt(e,o){var n,r=t.useContext(ke),a=r.prefixCls,i=r.tabs,c=e.className,l=e.style,s=e.id,p=e.animated,y=e.activeKey,v=e.rtl,E=e.extra,k=e.editable,Z=e.locale,m=e.tabPosition,W=e.tabBarGutter,D=e.children,w=e.onTabClick,b=e.onTabScroll,x=(0,t.useRef)(),K=(0,t.useRef)(),N=(0,t.useRef)(),V=(0,t.useRef)(),T=jt(),h=(0,d.Z)(T,2),P=h[0],M=h[1],f=m==="top"||m==="bottom",R=_e(0,function(S,g){f&&b&&b({direction:S>g?"left":"right"})}),A=(0,d.Z)(R,2),L=A[0],Q=A[1],te=_e(0,function(S,g){!f&&b&&b({direction:S>g?"top":"bottom"})}),I=(0,d.Z)(te,2),O=I[0],z=I[1],F=(0,t.useState)(0),q=(0,d.Z)(F,2),Y=q[0],_=q[1],ge=(0,t.useState)(0),Se=(0,d.Z)(ge,2),le=Se[0],Ee=Se[1],we=(0,t.useState)(0),xe=(0,d.Z)(we,2),ue=xe[0],Me=xe[1],Ce=(0,t.useState)(0),oe=(0,d.Z)(Ce,2),Ze=oe[0],$=oe[1],ae=(0,t.useState)(null),Te=(0,d.Z)(ae,2),J=Te[0],ia=Te[1],oa=(0,t.useState)(null),ot=(0,d.Z)(oa,2),se=ot[0],sa=ot[1],ca=(0,t.useState)(0),st=(0,d.Z)(ca,2),la=st[0],ua=st[1],da=(0,t.useState)(0),ct=(0,d.Z)(da,2),va=ct[0],fa=ct[1],ma=Mt(new Map),lt=(0,d.Z)(ma,2),ba=lt[0],ha=lt[1],Re=Wt(i,ba,Y),ut="".concat(a,"-nav-operations-hidden"),de=0,ve=0;f?v?(de=0,ve=Math.max(0,Y-J)):(de=Math.min(0,J-Y),ve=0):(de=Math.min(0,se-le),ve=0);function Ae(S){return S<de?de:S>ve?ve:S}var dt=(0,t.useRef)(),pa=(0,t.useState)(),vt=(0,d.Z)(pa,2),Le=vt[0],ft=vt[1];function We(){ft(Date.now())}function Oe(){window.clearTimeout(dt.current)}Vt(x,function(S,g){function B(U,ne){U(function(me){var be=Ae(me+ne);return be})}if(f){if(J>=Y)return!1;B(Q,S)}else{if(se>=le)return!1;B(z,g)}return Oe(),We(),!0}),(0,t.useEffect)(function(){return Oe(),Le&&(dt.current=window.setTimeout(function(){ft(0)},100)),Oe},[Le]);function mt(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,g=Re.get(S)||{width:0,height:0,left:0,right:0,top:0};if(f){var B=L;v?g.right<L?B=g.right:g.right+g.width>L+J&&(B=g.right+g.width-J):g.left<-L?B=-g.left:g.left+g.width>-L+J&&(B=-(g.left+g.width-J)),z(0),Q(Ae(B))}else{var U=O;g.top<-O?U=-g.top:g.top+g.height>-O+se&&(U=-(g.top+g.height-se)),Q(0),z(Ae(U))}}var ya=Ot(Re,{width:J,height:se,left:L,top:O},{width:ue,height:Ze},{width:la,height:va},(0,H.Z)((0,H.Z)({},e),{},{tabs:i})),bt=(0,d.Z)(ya,2),ga=bt[0],Sa=bt[1],Pe={};m==="top"||m==="bottom"?Pe[v?"marginRight":"marginLeft"]=W:Pe.marginTop=W;var ht=i.map(function(S,g){var B=S.key;return t.createElement(Lt,{id:s,prefixCls:a,key:B,tab:S,style:g===0?void 0:Pe,closable:S.closable,editable:k,active:B===y,renderWrapper:D,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:P(B),onClick:function(ne){w(B,ne)},onRemove:function(){M(B)},onFocus:function(){mt(B),We(),!!x.current&&(v||(x.current.scrollLeft=0),x.current.scrollTop=0)}})}),Be=Ue(function(){var S,g,B,U,ne,me,be,$e,He,Ra=((S=x.current)===null||S===void 0?void 0:S.offsetWidth)||0,Pa=((g=x.current)===null||g===void 0?void 0:g.offsetHeight)||0,Zt=((B=V.current)===null||B===void 0?void 0:B.offsetWidth)||0,Tt=((U=V.current)===null||U===void 0?void 0:U.offsetHeight)||0,Ia=((ne=N.current)===null||ne===void 0?void 0:ne.offsetWidth)||0,Na=((me=N.current)===null||me===void 0?void 0:me.offsetHeight)||0;ia(Ra),sa(Pa),ua(Zt),fa(Tt);var Rt=(((be=K.current)===null||be===void 0?void 0:be.offsetWidth)||0)-Zt,Pt=((($e=K.current)===null||$e===void 0?void 0:$e.offsetHeight)||0)-Tt;_(Rt),Ee(Pt);var It=(He=N.current)===null||He===void 0?void 0:He.className.includes(ut);Me(Rt-(It?0:Ia)),$(Pt-(It?0:Na)),ha(function(){var Nt=new Map;return i.forEach(function(ka){var kt=ka.key,he=P(kt).current;he&&Nt.set(kt,{width:he.offsetWidth,height:he.offsetHeight,left:he.offsetLeft,top:he.offsetTop})}),Nt})}),Ea=i.slice(0,ga),xa=i.slice(Sa+1),pt=[].concat((0,ze.Z)(Ea),(0,ze.Z)(xa)),Ca=(0,t.useState)(),yt=(0,d.Z)(Ca,2),Za=yt[0],Ta=yt[1],ee=Re.get(y),gt=(0,t.useRef)();function St(){ce.Z.cancel(gt.current)}(0,t.useEffect)(function(){var S={};return ee&&(f?(v?S.right=ee.right:S.left=ee.left,S.width=ee.width):(S.top=ee.top,S.height=ee.height)),St(),gt.current=(0,ce.Z)(function(){Ta(S)}),St},[ee,f,v]),(0,t.useEffect)(function(){mt()},[y,ee,Re,f]),(0,t.useEffect)(function(){Be()},[v,W,y,i.map(function(S){return S.key}).join("_")]);var Et=!!pt.length,fe="".concat(a,"-nav-wrap"),De,Ke,xt,Ct;return f?v?(Ke=L>0,De=L+J<Y):(De=L<0,Ke=-L+J<Y):(xt=O<0,Ct=-O+se<le),t.createElement("div",{ref:o,role:"tablist",className:j()("".concat(a,"-nav"),c),style:l,onKeyDown:function(){We()}},t.createElement(et,{position:"left",extra:E,prefixCls:a}),t.createElement(Fe.Z,{onResize:Be},t.createElement("div",{className:j()(fe,(n={},(0,C.Z)(n,"".concat(fe,"-ping-left"),De),(0,C.Z)(n,"".concat(fe,"-ping-right"),Ke),(0,C.Z)(n,"".concat(fe,"-ping-top"),xt),(0,C.Z)(n,"".concat(fe,"-ping-bottom"),Ct),n)),ref:x},t.createElement(Fe.Z,{onResize:Be},t.createElement("div",{ref:K,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat(O,"px)"),transition:Le?"none":void 0}},ht,t.createElement(Je,{ref:V,prefixCls:a,locale:Z,editable:k,style:(0,H.Z)((0,H.Z)({},ht.length===0?void 0:Pe),{},{visibility:Et?"hidden":null})}),t.createElement("div",{className:j()("".concat(a,"-ink-bar"),(0,C.Z)({},"".concat(a,"-ink-bar-animated"),p.inkBar)),style:Za}))))),t.createElement($t,(0,G.Z)({},e,{ref:N,prefixCls:a,tabs:pt,className:!Et&&ut})),t.createElement(et,{position:"right",extra:E,prefixCls:a}))}var tt=t.forwardRef(zt);function Ft(e){var o=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,l=t.useContext(ke),s=l.prefixCls,p=l.tabs,y=r.tabPane,v=p.findIndex(function(E){return E.key===n});return t.createElement("div",{className:j()("".concat(s,"-content-holder"))},t.createElement("div",{className:j()("".concat(s,"-content"),"".concat(s,"-content-").concat(a),(0,C.Z)({},"".concat(s,"-content-animated"),y)),style:v&&y?(0,C.Z)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},p.map(function(E){return t.cloneElement(E.node,{key:E.key,prefixCls:s,tabKey:E.key,id:o,animated:y,active:E.key===n,destroyInactiveTabPane:c})})))}function at(e){var o=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,i=e.id,c=e.active,l=e.animated,s=e.destroyInactiveTabPane,p=e.tabKey,y=e.children,v=t.useState(n),E=(0,d.Z)(v,2),k=E[0],Z=E[1];t.useEffect(function(){c?Z(!0):s&&Z(!1)},[c,s]);var m={};return c||(l?(m.visibility="hidden",m.height=0,m.overflowY="hidden"):m.display="none"),t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(p),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(p),"aria-hidden":!c,style:(0,H.Z)((0,H.Z)({},m),a),className:j()("".concat(o,"-tabpane"),c&&"".concat(o,"-tabpane-active"),r)},(c||k||n)&&y)}var Ut=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],nt=0;function Gt(e){return(0,Ne.Z)(e).map(function(o){if(t.isValidElement(o)){var n=o.key!==void 0?String(o.key):void 0;return(0,H.Z)((0,H.Z)({key:n},o.props),{},{node:o})}return null}).filter(function(o){return o})}function Yt(e,o){var n,r=e.id,a=e.prefixCls,i=a===void 0?"rc-tabs":a,c=e.className,l=e.children,s=e.direction,p=e.activeKey,y=e.defaultActiveKey,v=e.editable,E=e.animated,k=E===void 0?{inkBar:!0,tabPane:!1}:E,Z=e.tabPosition,m=Z===void 0?"top":Z,W=e.tabBarGutter,D=e.tabBarStyle,w=e.tabBarExtraContent,b=e.locale,x=e.moreIcon,K=e.moreTransitionName,N=e.destroyInactiveTabPane,V=e.renderTabBar,T=e.onChange,h=e.onTabClick,P=e.onTabScroll,M=(0,pe.Z)(e,Ut),f=Gt(l),R=s==="rtl",A;k===!1?A={inkBar:!1,tabPane:!1}:k===!0?A={inkBar:!0,tabPane:!0}:A=(0,H.Z)({inkBar:!0,tabPane:!1},(0,ie.Z)(k)==="object"?k:{});var L=(0,t.useState)(!1),Q=(0,d.Z)(L,2),te=Q[0],I=Q[1];(0,t.useEffect)(function(){I((0,wt.Z)())},[]);var O=(0,je.Z)(function(){var $;return($=f[0])===null||$===void 0?void 0:$.key},{value:p,defaultValue:y}),z=(0,d.Z)(O,2),F=z[0],q=z[1],Y=(0,t.useState)(function(){return f.findIndex(function($){return $.key===F})}),_=(0,d.Z)(Y,2),ge=_[0],Se=_[1];(0,t.useEffect)(function(){var $=f.findIndex(function(Te){return Te.key===F});if($===-1){var ae;$=Math.max(0,Math.min(ge,f.length-1)),q((ae=f[$])===null||ae===void 0?void 0:ae.key)}Se($)},[f.map(function($){return $.key}).join("_"),F,ge]);var le=(0,je.Z)(null,{value:r}),Ee=(0,d.Z)(le,2),we=Ee[0],xe=Ee[1],ue=m;te&&!["left","right"].includes(m)&&(ue="top"),(0,t.useEffect)(function(){r||(xe("rc-tabs-".concat(nt)),nt+=1)},[]);function Me($,ae){h==null||h($,ae),q($),T==null||T($)}var Ce={id:we,activeKey:F,animated:A,tabPosition:ue,rtl:R,mobile:te},oe,Ze=(0,H.Z)((0,H.Z)({},Ce),{},{editable:v,locale:b,moreIcon:x,moreTransitionName:K,tabBarGutter:W,onTabClick:Me,onTabScroll:P,extra:w,style:D,panes:l});return V?oe=V(Ze,tt):oe=t.createElement(tt,Ze),t.createElement(ke.Provider,{value:{tabs:f,prefixCls:i}},t.createElement("div",(0,G.Z)({ref:o,id:r,className:j()(i,"".concat(i,"-").concat(ue),(n={},(0,C.Z)(n,"".concat(i,"-mobile"),te),(0,C.Z)(n,"".concat(i,"-editable"),v),(0,C.Z)(n,"".concat(i,"-rtl"),R),n),c)},M),oe,t.createElement(Ft,(0,G.Z)({destroyInactiveTabPane:N},Ce,{animated:A}))))}var rt=t.forwardRef(Yt);rt.TabPane=at;var Xt=rt,Jt=Xt,Qt=u(44545),qt=u(49101),_t=u(54549),ea=u(21687),ta=u(65632),aa=u(97647),na=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function it(e){var o=e.type,n=e.className,r=e.size,a=e.onEdit,i=e.hideAdd,c=e.centered,l=e.addIcon,s=na(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=s.prefixCls,y=s.moreIcon,v=y===void 0?t.createElement(Qt.Z,null):y,E=t.useContext(ta.E_),k=E.getPrefixCls,Z=E.direction,m=k("tabs",p),W;o==="editable-card"&&(W={onEdit:function(b,x){var K=x.key,N=x.event;a==null||a(b==="add"?N:K,b)},removeIcon:t.createElement(_t.Z,null),addIcon:l||t.createElement(qt.Z,null),showAdd:i!==!0});var D=k();return(0,ea.Z)(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(aa.Z.Consumer,null,function(w){var b,x=r!==void 0?r:w;return t.createElement(Jt,(0,G.Z)({direction:Z,moreTransitionName:"".concat(D,"-slide-up")},s,{className:j()((b={},(0,C.Z)(b,"".concat(m,"-").concat(x),x),(0,C.Z)(b,"".concat(m,"-card"),["card","editable-card"].includes(o)),(0,C.Z)(b,"".concat(m,"-editable-card"),o==="editable-card"),(0,C.Z)(b,"".concat(m,"-centered"),c),b),n),editable:W,moreIcon:v,prefixCls:m}))})}it.TabPane=at;var ra=it},18106:function(Ie,re,u){"use strict";var G=u(43673),C=u.n(G),t=u(3749),d=u.n(t)},97435:function(Ie,re){"use strict";function u(G,C){for(var t=Object.assign({},G),d=0;d<C.length;d+=1){var ie=C[d];delete t[ie]}return t}re.Z=u}}]);
