import{a as $}from"./chunk-Z2IPDDGR.js";import{b as L}from"./chunk-X6VKCERE.js";import{a as D}from"./chunk-CUZY2KTZ.js";import{a as I,b as A}from"./chunk-FGIBSSDA.js";import{Fb as B,hb as C,ib as E,kb as _,lb as w}from"./chunk-7ONSFTRN.js";import{Db as u,He as M,Jb as m,Pd as S,Xb as d,Yb as k,Zb as y,e as p,ec as b,f as c,ie as x,lb as s,le as h,md as N,qb as f,sc as z,se as J,uc as v,ud as g,xb as l}from"./chunk-3SH7Y7C7.js";var P=p($(),1);var T=p(J(),1);function F(n,r){n&1&&y(0,"nz-spin",3)}var a=class n{constructor(r){this.notification=r}$t=h;websiteList=x;submitting=!1;bookmarksExport(){return c(this,null,function*(){if(!S())return this.notification.error("Error","Bad credentials");if(this.submitting)return;let r=JSON.parse(JSON.stringify(this.websiteList));function i(o){Array.isArray(o)&&o.forEach(t=>{if(t.title)for(let e in t)["title","nav"].includes(e)||delete t[e];if(t.url)for(let e in t)["url","icon","name"].includes(e)||delete t[e];Array.isArray(t.nav)&&i(t.nav)})}i(r),this.submitting=!0,M({data:T.default.compress(JSON.stringify(r))}).then(o=>{let t="bookmarks.html",e=new Blob([o.data.data],{type:"text/html;charset=utf-8"});(0,P.saveAs)(e,t),this.notification.success("OK",t,{nzDuration:0})}).finally(()=>{this.submitting=!1})})}static \u0275fac=function(i){return new(i||n)(f(D))};static \u0275cmp=l({type:n,selectors:[["system-bookmark-export"]],decls:4,vars:3,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"book-wrapper","mt-2.5"],["nz-button","","nzType","primary",3,"click","nzLoading"],["nzSimple","","nzSize","large",1,"text-center"]],template:function(i,o){i&1&&(u(0,F,1,0,"nz-spin",0),d(1,"div",1)(2,"button",2),b("click",function(){return o.bookmarksExport()}),z(3),k()()),i&2&&(m("ngIf",o.submitting),s(2),m("nzLoading",o.submitting),s(),v(" ",o.$t("_clickExport")," "))},dependencies:[g,N,L,A,I,B,w,_,C,E],encapsulation:2})};export{a as default};
