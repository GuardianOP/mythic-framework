"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[1765],{61765:(e,n,r)=>{r.r(n),r.d(n,{default:()=>y});var t=r(89526),a=r(91153),o=r(77548),l=r(81939),u=r(16025),c=r(71529),i=r(57170),d=r(87961),s=r(20785),p=r(21447);function f(e,n,r,t,a,o,l){try{var u=e[o](l),c=u.value}catch(e){return void r(e)}u.done?n(c):Promise.resolve(c).then(t,a)}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,o=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);l=!0);}catch(e){u=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var h=(0,c.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}}}}));const y=function(e){var n,r,c,v,y,g,b,w=e.property,E=e.type,P=e.upgrade,k=e.setLoading,U=e.onRefresh,x=h(),A=(0,d.VY)(),S=m((0,t.useState)(!1),2),C=S[0],Z=S[1],j=null===(n=P.levels)||void 0===n?void 0:n[(null!==(r=null==w||null===(c=w.upgrades)||void 0===c?void 0:c[E])&&void 0!==r?r:1)-1],R=null===(v=P.levels)||void 0===v?void 0:v[null!==(y=null==w||null===(g=w.upgrades)||void 0===g?void 0:g[E])&&void 0!==y?y:1],I=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),Z(!1),e.prev=2,e.next=5,p.Z.send("PurchasePropertyUpgrade",{upgrade:E,id:w.id});case 5:return e.next=7,e.sent.json();case 7:e.sent?(A("Upgrade Purchased"),U()):A("Unable to Purchase Upgrade"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),A("Unable to Purchase Upgrade");case 15:k(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function l(e){f(o,t,a,l,u,"next",e)}function u(e){f(o,t,a,l,u,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();return t.createElement("div",{className:x.wrapper},t.createElement(a.ZP,{className:x.item},t.createElement(o.Z,{primary:"".concat(j.name),secondary:"".concat(j.info).concat(R?"":" - Max Upgrade Reached")}),t.createElement(l.Z,null,t.createElement(u.Z,{edge:"end",onClick:function(){return Z(!0)},disabled:!R},t.createElement(i.G,{icon:["fas","turn-up"]})))),t.createElement(s.u_,{form:!0,open:C,title:"Purchase ".concat(null==R?void 0:R.name,"?"),onAccept:I,submitLang:"Purchase",onClose:function(){return Z(!1)}},t.createElement("p",null,null==R?void 0:R.name," - ",null==R?void 0:R.info),t.createElement("p",null,"Upgrade Cost: $",null==R||null===(b=R.price)||void 0===b?void 0:b.toLocaleString("en-US")),t.createElement("p",null,t.createElement("i",null,"Money will be taken from your main bank account.")),t.createElement("p",null,"Are you sure you want to upgrade? Purchases may not be refunded.")))}}}]);