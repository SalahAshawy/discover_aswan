"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[3592],{3592:(a,e,n)=>{n.d(e,{updateWobble:()=>b});var o=n(4864);const t=0,l=2*Math.PI,s=60;function b(a,e){var n;const{wobble:b}=a.options,{wobble:c}=a;if(null===b||void 0===b||!b.enable||!c)return;const i=c.angleSpeed*e.factor,r=c.moveSpeed*e.factor*((null!==(n=a.retina.wobbleDistance)&&void 0!==n?n:t)*e.factor)/(o.Ub/s),u=l,{position:p}=a;c.angle+=i,c.angle>u&&(c.angle-=u),p.x+=r*Math.cos(c.angle),p.y+=r*Math.abs(Math.sin(c.angle))}}}]);
//# sourceMappingURL=3592.51f8383d.chunk.js.map