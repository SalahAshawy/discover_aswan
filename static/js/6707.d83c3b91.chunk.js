"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[6707],{6707:(s,r,a)=>{a.d(r,{Absorbers:()=>i});var t=a(4864);class i{constructor(s){this.container=s,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],s.getAbsorber=s=>void 0===s||(0,t.Ib)(s)?this.array[null!==s&&void 0!==s?s:0]:this.array.find((r=>r.name===s)),s.addAbsorber=async(s,r)=>this.addAbsorber(s,r)}async addAbsorber(s,r){const{AbsorberInstance:t}=await a.e(6372).then(a.bind(a,6372)),i=new t(this,this.container,s,r);return this.array.push(i),i}async draw(s){for(const r of this.array)await r.draw(s)}handleClickMode(s){const r=this.absorbers,a=this.interactivityAbsorbers;if("absorber"===s){const s=(0,t.pd)(a),i=null!==s&&void 0!==s?s:(0,t.pd)(r),e=this.container.interactivity.mouse.clickPosition;this.addAbsorber(i,e)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const s=(0,t.yW)(this.absorbers,(async s=>{await this.addAbsorber(s)}));s instanceof Array?await Promise.all(s):await s}particleUpdate(s){for(const r of this.array)if(r.attract(s),s.destroyed)break}removeAbsorber(s){const r=this.array.indexOf(s);r>=0&&this.array.splice(r,1)}resize(){for(const s of this.array)s.resize()}stop(){this.array=[]}}}}]);
//# sourceMappingURL=6707.d83c3b91.chunk.js.map