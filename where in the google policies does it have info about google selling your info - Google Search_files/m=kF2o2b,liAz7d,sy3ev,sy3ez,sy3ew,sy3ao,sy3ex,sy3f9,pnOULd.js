loaded_h_0(function(_){var window=this;
_.v("kF2o2b");
_.hg(_.y_a,class extends _.Qo{constructor(){super();this.ka=_.BQ({GEa:""})}updateMagiStateParams(a){this.ka.value=a}jPc(a){this.ka.subscribe(b=>{a.pdd(b)})}});
_.w();
_.v("liAz7d");
_.Szs=new _.ag(_.z_a);
_.w();
_.Zth=!!(_.Li[95]>>18&1);_.$th=!!(_.Li[95]>>19&1);_.auh=!!(_.Li[95]>>20&1);_.buh=!!(_.Li[95]>>21&1);_.cuh=!!(_.Li[95]>>22&1);_.duh=!!(_.Li[95]>>23&1);_.euh=!!(_.Li[95]>>24&1);_.fuh=!!(_.Li[95]>>25&1);_.guh=!!(_.Li[95]>>26&1);_.huh=!!(_.Li[95]>>27&1);_.iuh=!!(_.Li[96]&1);
_.muh={BAe:"appbar",GSe:"ee",s7e:"mode",kWe:"fb",Tcf:"rhs",R3e:"lhs",Xgf:"sge",iBe:"atvcap",pgf:"stb",Hgf:"dark",Tnf:"uib",b$e:"osrp_st_tabs",aQe:"dthm",S5e:"mgq",aPe:"ctor",lmf:"taw",eFe:"cq",Vud:"emb",fTe:"emb_cb",z0e:"imlt",uaf:"pff_map",iAe:"aic",pkf:"ssp",S3e:"lb",jnf:"tophf"};_.nuh=Object.values(_.muh);
_.juh=function(){return _.Pm("center_col")};
var a4g,Z3g,$3g;
_.b4g=function(){var a=_.Vi?_.Om("center_col"):_.Om("rcnt");if(a===null)return[];var b=new Set;for(var c of Z3g){var d=Array.prototype.slice.call(a.querySelectorAll(c[0]),0);for(var e of d)if(c.length===2&&c[1]==="PARENT")d=e.parentElement,d!==null&&b.add(d);else if(c.length===2&&c[1]==="DESCENDANTS"){if(d=e.childNodes,d!==null)for(var f of d)b.add(f)}else b.add(e)}a=Array.from(b);b=[];for(c=0;c<a.length;c++){if(!(a[c]instanceof HTMLElement))continue;e=a[c];f=!0;d=e.getBoundingClientRect();if(e.offsetParent===
null||d.width===0||d.height===0)f=!1;if(f)for(d=0;d<a.length;d++)if(c!==d&&_.ah(a[d],e)){f=!1;break}if(f)for(let g of $3g){if(g.length===2&&g[1]==="ANCESTORS")e.querySelector(g[0])!==null&&(f=!1);else if(g.length===2&&g[1]==="DESCENDANTS")for(d=e.parentElement;d;){if(d.matches(g[0])){f=!1;break}d=d.parentElement}else if(g.length===2&&g[1]==="PARENT"){if(d=e.childNodes,d!==null)for(let h of d)if(h.matches(g[0])){f=!1;break}}else if(e.matches(g[0])){f=!1;break}if(!f)break}f&&b.push(e)}return a4g(b)};
a4g=function(a){var b=[..._.Qm("*")];return a.sort((c,d)=>b.indexOf(c)-b.indexOf(d))};
Z3g=[["#rso > div:not(.ULSxyf):not([jsname='TlEBqd']):not(.MjjYud):not(.hlcw0c)[class]"],["#rso div.ULSxyf:not(:only-of-type):not(:last-of-type)"],["#rso div.MjjYud:not(:only-of-type):not(:last-of-type):not(:has(div.grvXqb))"],["#rso div.hlcw0c:not(:only-of-type):not(:last-of-type)"],["#rso div.ULSxyf:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#rso div.MjjYud:not(:only-of-type):last-of-type:not(:nth-of-type(2)):not(:has(div.grvXqb))"],["#rso div.hlcw0c:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],
["#bres"],["[jsname='xQjRM']"],[".g-blk"],["[jsname='GDPwke'] div.MjjYud"],[".e6hL7d","DESCENDANTS"],[".kkCXT"],[".cu-container"],["#tvcap"],["#bottomads"],["[jsname='Ypkwb']"],[".yCYahc"],["#rhs .pCnXsf"]];$3g=[];
_.kuh=function(){return _.zIa("rcnt")};_.luh=function(){return _.kuh()||_.juh()};
var Xvh,Vvh;_.Wvh=function(){return document.querySelector("[jsname=xcvsnc]")?document.querySelector("[jsname=xcvsnc]"):_.B8a?document.querySelector("[data-st-tgt=fb"):_.Om(Vvh)};_.Yvh=function(a,b){var c=_.Wvh();c?Xvh(c,a,b):_.kuh()&&_.Ka(_.Sm("rfiSsc"),d=>{Xvh(d,a,b,!0)})};
Xvh=function(a,b,c,d=!1){a=_.Qm("A",a);for(let f of a){if(d&&(f.classList.contains("zItAnd")&&!f.classList.contains("FOU1zf")||f.classList.contains("nPDzT")&&!f.classList.contains("LatpMc")))break;if(a=f.getAttribute("href"))if(a.startsWith("/url")&&b==="q"){var e=_.gd(a,"q");if(!e)continue;e=_.jd(e,b,c);f.setAttribute("href",_.jd(a,"q",e))}else f.setAttribute("href",_.jd(a,b,c))}};Vvh=_.kuh()?"pTwnEc":"hdtb-sc";
_.v("pnOULd");
_.hg(_.A_a,class extends _.Qo{static Qa(){return{service:{navigation:_.zB,jab:_.Szs}}}constructor(a){super();this.Yb=a.service.navigation;this.jab=a.service.jab}updateLinks(a){_.Yvh("q",a)}navigateTo(a,b=!1){this.Yb.navigateTo(a,b)}hideMobileModeSelector(){if(!_.kuh()){var a=_.Wvh();a&&(a.style.display="none")}}showMobileModeSelector(){if(!_.kuh()){var a=_.Wvh();a&&(a.style.display="")}}updateSrpSuggestionGroup(){}updateMagiStateParams(a){this.jab.updateMagiStateParams({GEa:a})}fetch(a,b){return _.CNc(a,
{urlParams:b})}});

_.w();
});
// Google Inc.
