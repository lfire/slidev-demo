import{d as _,$ as u,y as h,b as a,e as t,x as s,A as r,F as v,Z as f,o as n,a0 as g,l as b,g as x}from"../modules/vue-C5xgGysf.js";import{u as y,h as N,c as m,b as k}from"../index-CigzRTy9.js";import{N as w}from"./NoteDisplay-Cztqm8v6.js";import"../modules/shiki-CwsrKtTr.js";const D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>d.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",D,[t("div",L,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",j,s(new Date().toLocaleString()),1)]),(n(!0),a(v,null,f(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(p)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",C)):x("v-if",!0)]))),128))])]))}}),W=k(F,[["__file","/Users/benji/Documents/benji/github/slidev-demo/node_modules/.pnpm/@slidev+client@0.48.7_postcss@8.4.38_vite@5.2.6/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
