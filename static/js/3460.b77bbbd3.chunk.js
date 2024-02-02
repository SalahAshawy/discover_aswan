"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[3460],{3460:(i,n,t)=>{t.d(n,{LinkInstance:()=>o});var e=t(4864);function s(i,n){const t=((s=i.map((i=>i.id))).sort(((i,n)=>i-n)),s.join("_"));var s;let o=n.get(t);return void 0===o&&(o=(0,e.CE)(),n.set(t,o)),o}class o{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(null===t||void 0===t||!t.enable)return;const s=this.container,o=s.actualOptions,a=n.destination,l=i.getPosition(),r=a.getPosition();let c=n.opacity;s.canvas.draw((n=>{var d,k,u;let f;const h=null===(d=i.options.twinkle)||void 0===d?void 0:d.lines;if(null!==h&&void 0!==h&&h.enable){const i=h.frequency,n=(0,e.Af)(h.color);(0,e.CE)()<i&&n&&(f=n,c=(0,e.qS)(h.opacity))}if(!f){const n=void 0!==t.id?s.particles.linksColors.get(t.id):s.particles.linksColor;f=(0,e.MF)(i,a,n)}if(!f)return;const p=null!==(k=i.retina.linksWidth)&&void 0!==k?k:0,y=null!==(u=i.retina.linksDistance)&&void 0!==u?u:0,{backgroundMask:g}=o;!function(i){let n=!1;const{begin:t,end:s,maxDistance:o,context:a,canvasSize:l,width:r,backgroundMask:c,colorLine:d,opacity:k,links:u}=i;if((0,e.c$)(t,s)<=o)(0,e.Cw)(a,t,s),n=!0;else if(u.warp){let i,r;const c={x:s.x-l.width,y:s.y},d=(0,e.If)(t,c);if(d.distance<=o){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},r={x:l.width,y:n}}else{const n={x:s.x,y:s.y-l.height},a=(0,e.If)(t,n);if(a.distance<=o){const n=-(t.y-a.dy/a.dx*t.x)/(a.dy/a.dx);i={x:n,y:0},r={x:n,y:l.height}}else{const n={x:s.x-l.width,y:s.y-l.height},a=(0,e.If)(t,n);if(a.distance<=o){const n=t.y-a.dy/a.dx*t.x;i={x:-n/(a.dy/a.dx),y:n},r={x:i.x+l.width,y:i.y+l.height}}}}i&&r&&((0,e.Cw)(a,t,i),(0,e.Cw)(a,s,r),n=!0)}if(!n)return;a.lineWidth=r,c.enable&&(a.globalCompositeOperation=c.composite),a.strokeStyle=(0,e.a2)(d,k);const{shadow:f}=u;if(f.enable){const i=(0,e.Af)(f.color);i&&(a.shadowBlur=f.blur,a.shadowColor=(0,e.a2)(i))}a.stroke()}({context:n,width:p,begin:l,end:r,maxDistance:y,canvasSize:s.canvas.size,links:t,backgroundMask:g,colorLine:f,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{var s;const o=i.options.links;if(null===o||void 0===o||!o.enable)return;const a=o.triangles;if(!a.enable)return;const l=this.container,r=l.actualOptions,c=n.destination,d=t.destination,k=null!==(s=a.opacity)&&void 0!==s?s:.5*(n.opacity+t.opacity);k<=0||l.canvas.draw((n=>{var t;const s=i.getPosition(),u=c.getPosition(),f=d.getPosition(),h=null!==(t=i.retina.linksDistance)&&void 0!==t?t:0;if((0,e.c$)(s,u)>h||(0,e.c$)(f,u)>h||(0,e.c$)(f,s)>h)return;let p=(0,e.Af)(a.color);if(!p){const n=void 0!==o.id?l.particles.linksColors.get(o.id):l.particles.linksColor;p=(0,e.MF)(i,c,n)}p&&function(i){const{context:n,pos1:t,pos2:s,pos3:o,backgroundMask:a,colorTriangle:l,opacityTriangle:r}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,s,o),a.enable&&(n.globalCompositeOperation=a.composite),n.fillStyle=(0,e.a2)(l,r),n.fill()}({context:n,pos1:s,pos2:u,pos3:f,backgroundMask:r.backgroundMask,colorTriangle:p,opacityTriangle:k})}))},this._drawTriangles=(i,n,t,e)=>{var s,o,a;const l=t.destination;if(null===(s=i.links)||void 0===s||!s.triangles.enable||null===(o=l.options.links)||void 0===o||!o.triangles.enable)return;const r=null===(a=l.links)||void 0===a?void 0:a.filter((i=>{const n=this._getLinkFrequency(l,i.destination);return l.options.links&&n<=l.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(null!==r&&void 0!==r&&r.length)for(const c of r){const e=c.destination;this._getTriangleFrequency(n,l,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,c)}},this._getLinkFrequency=(i,n)=>s([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>s([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}async drawParticle(i,n){const{links:t,options:e}=n;if(null===t||void 0===t||!t.length)return;const s=t.filter((i=>e.links&&this._getLinkFrequency(n,i.destination)<=e.links.frequency));for(const a of s){var o;this._drawTriangles(e,n,a,s),a.opacity>0&&(null!==(o=n.retina.linksWidth)&&void 0!==o?o:0)>0&&this._drawLinkLine(n,a)}await Promise.resolve()}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:s}=i.options.links;t.linksDistance=e*n,t.linksWidth=s*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=3460.b77bbbd3.chunk.js.map