"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[3356],{3356:(e,n,s)=>{s.d(n,{Collider:()=>i});var o=s(4864);async function t(e,n,o,t){switch(e.options.collisions.mode){case"absorb":{const{absorb:i}=await s.e(2696).then(s.bind(s,2696));i(e,n,o,t);break}case"bounce":{const{bounce:o}=await s.e(1787).then(s.bind(s,1787));o(e,n);break}case"destroy":{const{destroy:o}=await s.e(4744).then(s.bind(s,4744));o(e,n);break}}}class i extends o.Cm{constructor(e){super(e)}clear(){}init(){}async interact(e,n){if(e.destroyed||e.spawning)return;const s=this.container,i=e.getPosition(),a=e.getRadius(),c=s.particles.quadTree.queryCircle(i,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(i.z)-Math.round(c.z))>a+l)continue;(0,o.c$)(i,c)>a+l||await t(e,r,n,s.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=3356.5594152c.chunk.js.map