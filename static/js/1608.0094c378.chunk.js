"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[1608],{3544:(a,e,t)=>{t.d(e,{I:()=>s,TextDrawer:()=>i});var n=t(4864);const s=["text","character","char","multiline-text"];class i{async draw(a){const{drawText:e}=await t.e(4552).then(t.bind(t,4552));e(a)}async init(a){const e=a.actualOptions;if(s.find((a=>(0,n.Sc)(a,e.particles.shape.type)))){const a=s.map((a=>e.particles.shape.options[a])).find((a=>!!a)),t=[];(0,n.yW)(a,(a=>{t.push((0,n.or)(a.font,a.weight))})),await Promise.all(t)}}async particleInit(a,e){if(!e.shape||!s.includes(e.shape))return;const t=e.shapeData;if(void 0===t)return;const i=t.value;void 0!==i&&(e.text=(0,n.pd)(i,e.randomIndexData),await Promise.resolve())}}},1608:(a,e,t)=>{t.d(e,{loadTextShape:()=>s});var n=t(3544);async function s(a){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{TextDrawer:s}=await Promise.resolve().then(t.bind(t,3544));await a.addShape(n.I,new s,e)}}}]);
//# sourceMappingURL=1608.0094c378.chunk.js.map