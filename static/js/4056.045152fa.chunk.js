"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[4056],{4056:(t,e,o)=>{o.d(e,{divBounce:()=>h,mouseBounce:()=>l});var n=o(4864);const i=2,s=.5,f=Math.PI*s,c=2,a=10,u=0;function r(t,e,o,s,c){const a=t.particles.quadTree.query(s,c);for(const u of a)s instanceof n.um?(0,n.ee)((0,n.ch)(u),{position:e,radius:o,mass:o**i*f,velocity:n.Cg.origin,factor:n.Cg.origin}):s instanceof n.Yt&&(0,n.Yh)(u,(0,n.C_)(e,o))}function h(t,e,o,i){(0,n.g$)(o,e,((e,o)=>function(t,e,o,i){const f=document.querySelectorAll(e);f.length&&f.forEach((e=>{const f=e,u=t.retina.pixelRatio,r={x:(f.offsetLeft+f.offsetWidth*s)*u,y:(f.offsetTop+f.offsetHeight*s)*u},h=f.offsetWidth*s*u,l=a*u,p="circle"===o.type?new n.um(r.x,r.y,h+l):new n.Yt(f.offsetLeft*u-l,f.offsetTop*u-l,f.offsetWidth*u+l*c,f.offsetHeight*u+l*c);i(r,h,p)}))}(t,e,o,((e,o,n)=>r(t,e,o,n,i)))))}function l(t,e){const o=t.retina.pixelRatio,i=a*o,s=t.interactivity.mouse.position,f=t.retina.bounceModeDistance;!f||f<u||!s||r(t,s,f,new n.um(s.x,s.y,f+i),e)}}}]);
//# sourceMappingURL=4056.045152fa.chunk.js.map