"use strict";_F_installCss(".ythazd{display:none}.n1Kwqc{position:fixed}.n1Kwqc{inset-inline-start:0}@container (max-width: 1099.98px){.n1Kwqc{display:none!important}}.n1Kwqc{inline-size:100%;margin-block-start:8px}.ftzhQ{grid-column:15/-2}.pxiwBd .ftzhQ{grid-column:unset}.ftzhQ{box-shadow:0px 4px 12px rgba(23,23,23,0.9);border-radius:16px}.ftzhQ>.fgq4ud{display:block;margin:0}sentinel{}");
loaded_g_0(function(_){var window=this;
_.m("d6FVZd");

_.J();
_.P9a=_.tg("yb08jf",[]);_.zh(_.P9a);
_.m("yb08jf");
var ljd,mjd;ljd=function(a,b){a.j.forEach(c=>{var d=b.filter(e=>c.elements.includes(e.target));d.length>0&&c.callback(d)})};mjd=class{constructor(){this.j=[];this.aa=1;var a=window;this.Lc=a.ResizeObserver===void 0?void 0:new a.ResizeObserver(b=>{ljd(this,b)})}pause(){this.Lc!==void 0&&this.Lc.disconnect()}resume(){this.Lc!==void 0&&this.j.flatMap(a=>a.elements).forEach(a=>{this.Lc.observe(a)})}isSupported(){return this.Lc!==void 0}};_.njd=class{constructor(){this.Lc=new mjd}pause(){this.Lc.pause()}resume(){this.Lc.resume()}isSupported(){return this.Lc.isSupported()}};
_.wj(_.njd,_.P9a);
_.J();
_.m("mB45Oc");
var rjd;
_.qjd=function(){var [a,b]=_.N(!1,void 0,"j7QQ6c"),{ju:c}=(0,_.VPc)({}),d=_.gy("div"),e=_.aj(_.njd);_.Ls(()=>{var f=_.aj(_.uU),g=f.ba.bind(l=>{a:{for(let p of _.GY(l))if(!(_.hMc&&!p.ba()||_.iMc&&p.Wd())){l=!0;break a}l=!1}b(l)}),k;d.value&&e.isSupported()&&(k=_.ojd(e,d.value,l=>{l.forEach(p=>{_.vMc(f,p.contentRect.height)})}));_.Rq(()=>{g();k&&_.pjd(e.Lc,k)})});return _.U("div",{"data-xid":"boPQy",class:_.Q(()=>_.T(_.qU&&a()&&!c()?_.T(_.nL&&"YNk70c","n1Kwqc"):"ythazd"),void 0,"pKCUof")},_.U("div",{el:d,
class:"ftzhQ"},_.U(_.ijd,null)))};rjd=function(a,b,c){var d=a.aa++;if(a.Lc===void 0)return d;b=b instanceof _.Vp?b.toArray():[b];a.j.push({key:d,elements:b,callback:c});b.forEach(e=>{a.Lc.observe(e)});return d};_.pjd=function(a,b){if(a.Lc!==void 0){var c=a.j.filter(d=>d.key===b).flatMap(d=>d.elements);a.j=a.j.filter(d=>d.key!==b);c.filter(d=>!a.j.flatMap(e=>e.elements).includes(d)).forEach(d=>{a.Lc.unobserve(d)})}};_.ojd=function(a,b,c){return rjd(a.Lc,b,c)};_.lMc=_.qjd;
_.J();
_.m("Vm4Ogc");
_.NZb=_.qjd;
var sjd=[],tjd=class extends _.Uy{constructor(a){super(a.fa,{ga:new Set([1,2,3])});this.response=a}aa(){var [a,b]=this.da("bqcF3d",_.N(!1,void 0,"hEHlL")),{ju:c}=_.oF(_.mhd,this,"0",{}),d=_.Ry(this,1,"div"),e=_.aj(_.njd);this.onInit(function(){var f=_.aj(_.uU),g=f.ba.bind(l=>{a:{for(let p of _.GY(l))if(!(_.hMc&&!p.ba()||_.iMc&&p.Wd())){l=!0;break a}l=!1}b(l)}),k;d.value&&e.isSupported()&&(k=_.ojd(e,d.value,l=>{l.forEach(p=>{_.vMc(f,p.contentRect.height)})}));_.Rq(()=>{g();k&&_.pjd(e.Lc,k)})});this.da("ggNWmb",
_.Q(()=>_.T(_.qU&&a()&&!c()?_.T(_.nL&&"YNk70c","n1Kwqc"):"ythazd"),void 0,"wmaaGc"))}j(){return super.j()}ba(){return sjd}};tjd.prototype.$wa$p2ggSe=function(){return this.ba};tjd.prototype.$wa$QyQmSc=function(){return this.j};tjd.prototype.$wa$kXCA5e=function(){return this.aa};_.X(_.n("Vm4Ogc#Y5Be4b","Vm4Ogc",[_.Y]),tjd);
_.J();
});
// Google Inc.
