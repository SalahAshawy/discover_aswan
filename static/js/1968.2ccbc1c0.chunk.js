"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[1968],{1968:(e,t,s)=>{s.d(t,{BounceOutMode:()=>n});var i=s(4864);class n{constructor(e){this.container=e,this.modes=["bounce","split"]}async update(e,t,n,o){if(!this.modes.includes(o))return;const a=this.container;let c=!1;for(const[,s]of a.plugins)if(void 0!==s.particleBounce&&(c=await s.particleBounce(e,n,t)),c)break;if(c)return;const u=e.getPosition(),r=e.offset,d=e.getRadius(),f=(0,i.C_)(u,d),l=a.canvas.size,{bounceHorizontal:p,bounceVertical:b}=await s.e(9484).then(s.bind(s,9484));p({particle:e,outMode:o,direction:t,bounds:f,canvasSize:l,offset:r,size:d}),b({particle:e,outMode:o,direction:t,bounds:f,canvasSize:l,offset:r,size:d})}}}}]);
//# sourceMappingURL=1968.2ccbc1c0.chunk.js.map