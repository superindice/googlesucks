"use strict";loaded_g_0(function(_){var window=this;
_.m("lOO0Vd");
_.M7a=new _.av(_.Kta);
_.J();
_.m("P6sQOc");
var R7a=function(a){var b={};_.fl(a.ba(),e=>{b[e]=!0});var c=a.ha(),d=a.ka();return new Q7a(a.aa(),_.Jw(c.getSeconds())*1E3,a.j(),_.Jw(d.getSeconds())*1E3,b)},S7a=function(a){if(a.aa){let b=Date.now()-a.wa;return a.aa(a.j+1,b)}return Math.random()*Math.min(a.na*Math.pow(a.ka,a.j),a.oa)},T7a=function(a,b){return a.j>=a.ha?!1:b!=null?!!a.ta[b]:!0},Q7a=class{constructor(a,b,c,d,e,f){this.ha=a;this.na=b;this.ka=c;this.oa=d;this.ta=e;this.aa=f||null;this.wa=Date.now();this.j=0;this.ba=S7a(this)}};var U7a=new _.cw("retryConfigOverrides"),V7a=function(a,b,c,d){return c.then(e=>e,e=>{if(e instanceof _.qw){if(!e.status||!T7a(d,e.status.j()))throw e;}else if("function"==typeof _.xx&&e instanceof _.xx)switch(e.aa){case 103:case 7:case 10:case 101:case 105:case 408:case 425:case 429:case 502:case 503:case 504:break;default:throw e;}if(d&&!T7a(d))return _.eo(e);var f=d.ba;return(new _.bo(g=>{setTimeout(g,f)})).then(()=>{if(!T7a(d))throw Error("Ag`"+d.ha);++d.j;d.ba=S7a(d);b=b.km(_.jHa,d.j);return V7a(a,
b,a.fetch(b),d)})})};
_.wj(class{constructor(){this.j=_.aj(_.O7a);this.aa=_.aj(_.M7a);this.logger=null;var a=_.aj(_.D7a);this.fetch=a.fetch.bind(a)}Z7(a,b){if(this.aa.getType(a.Qe())!==1)return new _.AC(a,null,0);var c=this.j.Eaa,d=a.Hd(U7a),e=null;if(d){e={};if(d.EGa)for(var f of d.EGa)e[f]=!0;else if(c)for(var g of c.ba())e[g]=!0;let q=1,r=0;f=Infinity;g=2;if(c){q=c.aa()||q;let w,x=(w=c.na())==null?void 0:w.getSeconds();r=_.Jw(c.oa().getSeconds())*1E3;f=x!=null?_.Jw(x)*1E3:f;g=c.j()||g}var k,l,p;let v;c=(k=d.ACa)!=null?
k:q;k=(l=d.rhb)!=null?l:r;l=(p=d.cfb)!=null?p:g;p=(v=d.iib)!=null?v:f;e=new Q7a(c,k,l,p,e,d.bfb)}else c&&(e=R7a(c));e&&T7a(e)?(b=V7a(this,a,b,e),a=new _.AC(a,b,2)):a=new _.AC(a,null,0);return a}},_.P7a);
_.J();
});
// Google Inc.
