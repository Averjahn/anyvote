import{u as f,g as e,o as n,c as l,a,F as v,r as b,t as L,f as k,b as I}from"./index-a8985bbb.js";import P from"./ModalImage-70cf351e.js";const W={class:"content-image-wrapper"},C={class:"content-image"},D={class:"content-image-item"},M=["onClick"],R=["src"],U={class:"content-image-label"},V={__name:"ContentImages",props:["componentData"],setup(i){const t=i;f(o=>({f2fb0774:m.value,dcbe3d44:r.value,"4fe2e461":d.value,"09efee49":g.value,bb4da6f0:u.value}));const m=e(),r=e(),d=e(),g=e(),u=e(),s=e(!1),_=e("");m.value=t.componentData.imagesWidthPercent+"%",r.value=100/t.componentData.imagesList.length+"%",d.value=t.componentData.imagesWidthPercentSmall+"%",g.value=100/t.componentData.imagesList.length+"%",u.value=t.componentData.imagesWidthPercentMobile+"%";const p=o=>{_.value=o,s.value=!0},h=()=>{s.value=!1};return(o,x)=>(n(),l(v,null,[a("div",W,[a("div",C,[(n(!0),l(v,null,b(i.componentData.imagesList,c=>(n(),l("div",D,[a("div",{onClick:y=>p(c.imageURL)},[a("img",{src:c.imageURL,class:"content-image-image"},null,8,R)],8,M),a("div",U,L(c.label),1)]))),256))])]),s.value?(n(),k(P,{key:0,imageURL:_.value,onCloseModal:h},null,8,["imageURL"])):I("",!0)],64))}};export{V as default};
