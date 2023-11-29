(function(){"use strict";var e={2605:function(e,t,n){var s=n(9242),o=n(3396);function r(e,t,n,s,r,i){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var i={name:"App"},a=n(89);const c=(0,a.Z)(i,[["render",r]]);var u=c,d=n(2483),l=n(7139);const v={class:"voting-wrapper"},f={class:"voting-container"},h={class:"header"},p={class:"subheader"},g={key:0,class:"answers-container"},w=["onClick"],m={class:"answer-item-text"},b={key:1,innerHTML:"Спасибо!<br>Ваш голос учтен",class:"is-voted-text"},y={class:"voting-button-container"};function k(e,t,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",f,[(0,o._)("div",h,(0,l.zw)(r.questionData.question),1),(0,o._)("div",p,(0,l.zw)(1===r.questionData.type?"Можно отметить только один пункт":"Можно отметить несколько пунктов"),1),r.isVoted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.questionData.variants,(e=>((0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["answer-item",{"background-blue":r.selectedAnswerIds.includes(e.id)}]),key:e.id,onClick:t=>i.answerClick(e.id)},[(0,o._)("div",m,(0,l.zw)(e.name),1)],10,w)))),128))])),r.isVoted?((0,o.wg)(),(0,o.iD)("div",b)):(0,o.kq)("",!0),(0,o._)("div",y,[r.isVoted?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>i.vote&&i.vote(...e)),class:(0,l.C_)([{enable:r.selectedAnswerIds.length>0},"voting-button"])}," ПРОГОЛОСОВАТЬ ",2))])])])}n(7658);var D=n(1076),I={data(){return{serverURL:"https://tech2.med-game.ru/api/v1",questionData:{},selectedAnswerIds:[],isVoted:!1}},methods:{getQuestionData(){(0,D.Z)({method:"get",url:`${this.serverURL}/voting/${this.$route.params.sessionId}`}).then((e=>{this.questionData=e.data.data})).catch((e=>{console.log("Ошибка:"),console.log(e)}))},answerClick(e){if(1===this.questionData.type)this.selectedAnswerIds=[e];else{const t=this.selectedAnswerIds.indexOf(e);-1===t?this.selectedAnswerIds.push(e):this.selectedAnswerIds.splice(t,1)}},vote(){this.selectedAnswerIds.forEach((e=>{(0,D.Z)({url:`${this.serverURL}/voting/${this.$route.params.sessionId}/answer`,method:"post",data:{variant_id:e}}).then((()=>{this.isVoted=!0,localStorage.setItem(this.$route.params.sessionId,1)})).catch((function(e){console.log(e)}))}))}},mounted(){this.getQuestionData();const e=localStorage.getItem(this.$route.params.sessionId);this.isVoted=1==e}};const O=(0,a.Z)(I,[["render",k]]);var _=O;function q(e,t,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",null,"Стартовая страница голосования")}var j={};const A=(0,a.Z)(j,[["render",q]]);var C=A;const x=[{path:"/",name:"start",component:C},{path:"/:sessionId",name:"voting",component:_}],$=(0,d.p7)({history:(0,d.r5)(),routes:x});var S=$;(0,s.ri)(u).use(S).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,r){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(a=!1,r<i&&(i=r));if(a){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,i=s[0],a=s[1],c=s[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(s);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},s=self["webpackChunkmedtest14"]=self["webpackChunkmedtest14"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2605)}));s=n.O(s)})();
//# sourceMappingURL=app.253c0384.js.map