"use strict";(self.webpackChunkaswan=self.webpackChunkaswan||[]).push([[4856],{4856:(e,t,o)=>{o.d(t,{TwinkleUpdater:()=>l});var i=o(4864);class s{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=i.wD.create(this.color,e.color)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.frequency&&(this.frequency=e.frequency),void 0!==e.opacity&&(this.opacity=(0,i.Ws)(e.opacity)))}}class n{constructor(){this.lines=new s,this.particles=new s}load(e){e&&(this.lines.load(e.lines),this.particles.load(e.particles))}}class l{getColorStyles(e,t,o,s){const n=e.options.twinkle;if(!n)return{};const l=n.particles,a=l.enable&&(0,i.CE)()<l.frequency,r=e.options.zIndex,c=(1-e.zIndexFactor)**r.opacityRate,d=a?(0,i.qS)(l.opacity)*c:s,p=(0,i.cl)(l.color),w=p?(0,i.CK)(p,d):void 0,h={},u=a&&w;return h.fill=u?w:void 0,h.stroke=u?w:void 0,h}async init(){await Promise.resolve()}isEnabled(e){const t=e.options.twinkle;return!!t&&t.particles.enable}loadOptions(e){e.twinkle||(e.twinkle=new n);for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];for(const s of o)e.twinkle.load(null===s||void 0===s?void 0:s.twinkle)}async update(){await Promise.resolve()}}}}]);
//# sourceMappingURL=4856.8b8eae90.chunk.js.map