"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[9904],{9904:(a,o,i)=>{i.d(o,{OpacityUpdater:()=>s});var t=i(4864);class s{constructor(a){this.container=a}async init(a){const o=a.options.opacity;a.opacity=(0,t.aI)(o,1);const i=o.animation;i.enable&&(a.opacity.velocity=(0,t.qS)(i.speed)/t.sc*this.container.retina.reduceFactor,i.sync||(a.opacity.velocity*=(0,t.CE)())),await Promise.resolve()}isEnabled(a){var o,i,t,s;return!a.destroyed&&!a.spawning&&!!a.opacity&&a.opacity.enable&&((null!==(o=a.opacity.maxLoops)&&void 0!==o?o:0)<=0||(null!==(i=a.opacity.maxLoops)&&void 0!==i?i:0)>0&&(null!==(t=a.opacity.loops)&&void 0!==t?t:0)<(null!==(s=a.opacity.maxLoops)&&void 0!==s?s:0))}reset(a){a.opacity&&(a.opacity.time=0,a.opacity.loops=0)}async update(a,o){this.isEnabled(a)&&a.opacity&&((0,t.C2)(a,a.opacity,!0,a.options.opacity.animation.destroy,o),await Promise.resolve())}}}}]);
//# sourceMappingURL=9904.fd18ea30.chunk.js.map