/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 28 12:39
*/
KISSY.add("ua/base",function(){var b=navigator.userAgent,d="",e="",a,f=[6,9],g=document.createElement("div"),i,c={},h=function(j){var k=0;return parseFloat(j.replace(/\./g,function(){return k++===0?".":""}))};g.innerHTML="<!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}","");i=g.getElementsByTagName("s");if(i.length>0){e="ie";c[d="trident"]=0.1;if((a=b.match(/Trident\/([\d.]*)/))&&a[1])c[d]=h(a[1]);b=f[0];for(f=f[1];b<=f;b++){g.innerHTML="<!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}",
b);if(i.length>0){c[e]=b;break}}}else if((a=b.match(/AppleWebKit\/([\d.]*)/))&&a[1]){c[d="webkit"]=h(a[1]);if((a=b.match(/Chrome\/([\d.]*)/))&&a[1])c[e="chrome"]=h(a[1]);else if((a=b.match(/\/([\d.]*) Safari/))&&a[1])c[e="safari"]=h(a[1]);if(/ Mobile\//.test(b))c.mobile="apple";else if(a=b.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))c.mobile=a[0].toLowerCase()}else if((a=b.match(/Presto\/([\d.]*)/))&&a[1]){c[d="presto"]=h(a[1]);if((a=b.match(/Opera\/([\d.]*)/))&&a[1]){c[e="opera"]=h(a[1]);
if((a=b.match(/Opera\/.* Version\/([\d.]*)/))&&a[1])c[e]=h(a[1]);if((a=b.match(/Opera Mini[^;]*/))&&a)c.mobile=a[0].toLowerCase();else if((a=b.match(/Opera Mobi[^;]*/))&&a)c.mobile=a[0]}}else if((a=b.match(/MSIE\s([^;]*)/))&&a[1]){c[d="trident"]=0.1;c[e="ie"]=h(a[1]);if((a=b.match(/Trident\/([\d.]*)/))&&a[1])c[d]=h(a[1])}else if(a=b.match(/Gecko/)){c[d="gecko"]=0.1;if((a=b.match(/rv:([\d.]*)/))&&a[1])c[d]=h(a[1]);if((a=b.match(/Firefox\/([\d.]*)/))&&a[1])c[e="firefox"]=h(a[1])}c.core=d;c.shell=e;
c._numberify=h;return c});KISSY.add("ua/extra",function(b,d){var e=navigator.userAgent,a,f,g={},i=d._numberify;if(e.match(/360SE/))g[f="se360"]=3;else if(e.match(/Maxthon/)&&(a=window.external)){f="maxthon";try{g[f]=i(a.max_version)}catch(c){g[f]=0.1}}else if(a=e.match(/TencentTraveler\s([\d.]*)/))g[f="tt"]=a[1]?i(a[1]):0.1;else if(e.match(/TheWorld/))g[f="theworld"]=3;else if(a=e.match(/SE\s([\d.]*)/))g[f="sougou"]=a[1]?i(a[1]):0.1;f&&(g.shell=f);b.mix(d,g);return d},{requires:["ua/base"]});
KISSY.add("ua",function(b,d){return d},{requires:["ua/extra"]});
