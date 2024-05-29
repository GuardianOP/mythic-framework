"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5397,2471],{95397:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(89526),r=n(92070),a=n(88590),i=n(14710),l=n(33933),c=n(16025),s=n(71529),u=n(57170),p=n(21447),d=n(20785),m=n(87961),f=n(22471);function g(e,t,n,o,r,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(o,r)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){g(a,o,r,i,l,"next",e)}function l(e){g(a,o,r,i,l,"throw",e)}i(void 0)}))}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v=(0,s.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,position:"relative"},header:{background:e.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},buttons:{width:"100%",display:"flex",marginTop:10},button:{width:"-webkit-fill-available",padding:20,color:e.palette.warning.main,"&:hover":{backgroundColor:"".concat(e.palette.warning.main,"14")}},buttonNegative:{width:"-webkit-fill-available",padding:20,color:e.palette.error.main,"&:hover":{backgroundColor:"".concat(e.palette.error.main,"14")}},buttonPositive:{width:"-webkit-fill-available",padding:20,color:e.palette.success.main,"&:hover":{backgroundColor:"".concat(e.palette.success.main,"14")}},buttonInfo:{width:"-webkit-fill-available",padding:20,color:e.palette.info.main,"&:hover":{backgroundColor:"".concat(e.palette.info.main,"14")}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const y=function(e){var t=e.groups,n=e.myGroup,s=e.loading,g=e.onRefresh,k=v(),y=(0,m.VY)(),x=(0,r.v9)((function(e){return e.data.data.player})),w=h((0,o.useState)(!1),2),Z=w[0],C=w[1],E=h((0,o.useState)(!1),2),W=E[0],S=E[1],I=h((0,o.useState)(!1),2),D=I[0],B=I[1],N=function(){B(!1),C(!1),S(!1)},R=function(){var e=b(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.send("CreateWorkgroup");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,y(t?"Workgroup Created":"Unable to Create Workgroup"),setTimeout((function(){g()}),200),N(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),y("Unable to Create Workgroup"),N();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=b(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Working){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,p.Z.send("JoinWorkgroup",t);case 5:return e.next=7,e.sent.json();case 7:n=e.sent,y(n?"Sent Request To Join":"Unable to Join Workgroup"),setTimeout((function(){g()}),200),N(),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),y("Unable to Join Workgroup"),N();case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=b(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.send("DisbandWorkgroup");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,y(t?"Workgroup Disbanded":"Unable to Disband Workgroup"),setTimeout((function(){g()}),200),N(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),y("Unable to Disband Workgroup"),N();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=b(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.send("LeaveWorkgroup",n);case 3:return e.next=5,e.sent.json();case 5:t=e.sent,y(t?"Left Workgroup":"Unable to Leave Workgroup"),setTimeout((function(){g()}),200),N(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),y("Unable to Leave Workgroup"),N();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement("div",{className:k.wrapper},o.createElement(a.Z,{position:"static",className:k.header},o.createElement(i.ZP,{container:!0},o.createElement(i.ZP,{item:!0,xs:8},"Labor"),o.createElement(i.ZP,{item:!0,xs:4,className:k.headerAction},Boolean(n)?n.Creator.ID==x.Source?o.createElement(l.Z,{title:"Disband Workgroup"},o.createElement(c.Z,{disabled:s,onClick:function(){return B(!0)}},o.createElement(u.G,{disabled:Boolean(x.TempJob)||s||n.Working,icon:["fas","trash"]}))):o.createElement(l.Z,{title:"Leave Workgroup"},o.createElement(c.Z,{disabled:Boolean(x.TempJob)||s||n.Working,onClick:function(){return S(!0)}},o.createElement(u.G,{disabled:n.Working,icon:["fas","sign-out"]}))):o.createElement(l.Z,{title:"Create Workgroup"},o.createElement(c.Z,{disabled:Boolean(x.TempJob)||s||Boolean(n),onClick:function(){return C(!0)}},o.createElement(u.G,{icon:["fas","plus"]}))),o.createElement(l.Z,{title:"Refresh Workgroups"},o.createElement(c.Z,{onClick:g},o.createElement(u.G,{className:"fa ".concat(s?"fa-spin":""),icon:["fas","arrows-rotate"]})))))),o.createElement("div",{className:k.body},Boolean(t)?o.createElement(o.Fragment,null,Boolean(t)?t.length>0?t.map((function(e,t){return o.createElement(f.default,{key:"wg-".concat(t),group:e,onJoin:A,disabled:s,isInGroup:Boolean(n)})})):o.createElement("div",{className:k.emptyMsg},"No Workgroups"):null):o.createElement(d.aN,{static:!0,text:"Loading"}))),Boolean(n)?n.Creator.ID==x.Source?o.createElement(d.I4,{title:"Disband Workgroup?",open:D,confirm:"Disband",decline:"Cancel",onConfirm:T,onDecline:function(){return B(!1)}}):o.createElement(d.I4,{title:"Leave Workgroup?",open:W,confirm:"Leave",decline:"Cancel",onConfirm:z,onDecline:function(){return S(!1)}}):o.createElement(d.I4,{title:"Create Workgroup?",open:Z,confirm:"Create",decline:"Cancel",onConfirm:R,onDecline:function(){return C(!1)}}))}},22471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(89526),r=n(92070),a=n(72757),i=n(14710),l=n(21722),c=n(71529),s=n(57170),u=(0,c.Z)((function(e){return{wrapper:{padding:10,background:e.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"fit-content",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:e.palette.primary.main,fontWeight:"bold"},pay:{fontSize:16,color:e.palette.success.main},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"}}}));const p=function(e){var t=e.group,n=e.isInGroup,c=e.onJoin,p=e.disabled,d=u(),m=(0,r.v9)((function(e){return e.data.data.player}));return o.createElement(a.Z,{className:d.wrapper},o.createElement(i.ZP,{container:!0},o.createElement(i.ZP,{item:!0,xs:7,style:{position:"relative",height:65}},o.createElement("div",{className:d.details},o.createElement("div",{className:d.title},t.Creator.ID==m.SID&&o.createElement(s.G,{style:{marginRight:5,color:"gold"},icon:["fas","crown"]}),t.Creator.First," ",t.Creator.Last))),o.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},o.createElement("div",{className:d.duty},t.Members.length+1," / 5")),o.createElement(i.ZP,{item:!0,xs:3,style:{position:"relative"}},o.createElement(l.Z,{variant:"text",className:d.actions,disabled:n||t.Members.length>=4||p||t.Working||Boolean(m.TempJob),onClick:function(){return c(t)}},"Join"))))}},88590:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(71972),r=n(17692),a=n(89526),i=n(23060),l=n(82082),c=n(47671),s=n(26966),u=n(9333),p=n(72757),d=n(24989);function m(e){return(0,d.Z)("MuiAppBar",e)}(0,n(36787).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=n(67557);const g=["className","color","enableColorOnDark","position"],b=(0,c.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,u.Z)(n.position)}`],t[`color${(0,u.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:e.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,r.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),h=a.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:p=!1,position:d="fixed"}=n,h=(0,o.Z)(n,g),k=(0,r.Z)({},n,{color:c,position:d,enableColorOnDark:p}),v=(e=>{const{color:t,position:n,classes:o}=e,r={root:["root",`color${(0,u.Z)(t)}`,`position${(0,u.Z)(n)}`]};return(0,l.Z)(r,m,o)})(k);return(0,f.jsx)(b,(0,r.Z)({square:!0,component:"header",ownerState:k,elevation:4,className:(0,i.Z)(v.root,a,"fixed"===d&&"mui-fixed"),ref:t},h))}))}}]);