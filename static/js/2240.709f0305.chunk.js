"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[2240],{2240:(t,e,s)=>{s.d(e,{OutOfCanvasUpdater:()=>o});const a=(t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e;class o{constructor(t){this._updateOutMode=async(t,e,s,a)=>{for(const o of this.updaters)await o.update(t,a,e,s)},this.container=t,this.updaters=[]}async init(t){this.updaters=[];const e=t.options.move.outModes;if(a(e,"bounce")){const{BounceOutMode:t}=await Promise.all([s.e(4864),s.e(1968)]).then(s.bind(s,1968));this.updaters.push(new t(this.container))}else if(a(e,"out")){const{OutOutMode:t}=await Promise.all([s.e(4864),s.e(1105)]).then(s.bind(s,1105));this.updaters.push(new t(this.container))}else if(a(e,"destroy")){const{DestroyOutMode:t}=await Promise.all([s.e(4864),s.e(4388)]).then(s.bind(s,2007));this.updaters.push(new t(this.container))}else if(a(e,"none")){const{NoneOutMode:t}=await Promise.all([s.e(4864),s.e(4384)]).then(s.bind(s,4384));this.updaters.push(new t(this.container))}}isEnabled(t){return!t.destroyed&&!t.spawning}async update(t,e){var s,a,o,i;const n=t.options.move.outModes;await this._updateOutMode(t,e,null!==(s=n.bottom)&&void 0!==s?s:n.default,"bottom"),await this._updateOutMode(t,e,null!==(a=n.left)&&void 0!==a?a:n.default,"left"),await this._updateOutMode(t,e,null!==(o=n.right)&&void 0!==o?o:n.default,"right"),await this._updateOutMode(t,e,null!==(i=n.top)&&void 0!==i?i:n.default,"top")}}}}]);
//# sourceMappingURL=2240.709f0305.chunk.js.map