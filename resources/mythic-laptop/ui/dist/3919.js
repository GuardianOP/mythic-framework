"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3919,2142],{42142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(89526),a=(n(92070),n(71529)),o=n(91153),c=n(77548),i=n(565),u=n(59324),m=n.n(u),s=(0,a.Z)((function(e){return{}}));const l=function(e){var t=e.document;s();return r.createElement(o.ZP,{divider:!0,button:!0,component:i.rU,to:"/apps/documents/view/".concat(t._id,"/v")},r.createElement(c.Z,{primary:"".concat(t.title),secondary:r.createElement("span",null,"Last Edited"," ",r.createElement(m(),{unix:!0,fromNow:!0},t.time))}))}},93919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(89526),a=(n(92070),n(71529)),o=(n(59324),n(42142)),c=(0,a.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},status:{color:e.palette.success.main,"&::before":{content:'" - "',color:e.palette.text.main},"&.spawned":{color:e.palette.error.main}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const i=function(e){var t=e.documents,n=e.showShared,a=c(),i=t.filter((function(e){return n?e.shared:!e.shared}));return i.length>0?r.createElement(r.Fragment,null,i.sort((function(e,t){return t.time-e.time})).map((function(e,t){return r.createElement(o.default,{key:e._id,document:e})}))):r.createElement("div",{className:a.emptyMsg},n?"No Documents Shared With You":"No Saved Documents")}}}]);