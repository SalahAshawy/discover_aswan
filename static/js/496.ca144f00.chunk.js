"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[496],{496:(e,t,n)=>{n.d(t,{LifeUpdater:()=>c});var a=n(4864);class i extends a.S4{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s extends a.S4{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o{constructor(){this.count=0,this.delay=new i,this.duration=new s}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class c{constructor(e){this.container=e}async init(e){const t=this.container,n=e.options.life;n&&(e.life={delay:t.retina.reduceFactor?(0,a.qS)(n.delay.value)*(n.delay.sync?1:(0,a.CE)())/t.retina.reduceFactor*a.Ub:0,delayTime:0,duration:t.retina.reduceFactor?(0,a.qS)(n.duration.value)*(n.duration.sync?1:(0,a.CE)())/t.retina.reduceFactor*a.Ub:0,time:0,count:n.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0),await Promise.resolve())}isEnabled(e){return!e.destroyed}loadOptions(e){e.life||(e.life=new o);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];for(const i of n)e.life.load(null===i||void 0===i?void 0:i.life)}async update(e,t){if(!this.isEnabled(e)||!e.life)return;const{updateLife:a}=await n.e(5984).then(n.bind(n,1222));a(e,t,this.container.canvas.size)}}}}]);
//# sourceMappingURL=496.ca144f00.chunk.js.map