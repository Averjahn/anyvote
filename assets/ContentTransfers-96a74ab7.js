import{o as s,c as n,a as i,F as _,g as f,n as p,t as u}from"./index-1e56bd82.js";const d={class:"content-transfers"},m={class:"transfer-buttons"},v=["onClick"],h={__name:"ContentTransfers",props:["componentData"],setup(c){const t=c,l=a=>{for(let e=0;e<t.componentData.transfersList.length;e++)t.componentData.transfersList[e].isSelected=!1;t.componentData.transfersList[a].isSelected=!0};return(a,e)=>(s(),n("div",d,[i("div",m,[(s(!0),n(_,null,f(t.componentData.transfersList,(o,r)=>(s(),n("div",{key:r,onClick:D=>l(r),class:p(["transfer-button",{"transfer-button-selected":o.isSelected}])},u(o.buttonName),11,v))),128))])]))}};export{h as default};
