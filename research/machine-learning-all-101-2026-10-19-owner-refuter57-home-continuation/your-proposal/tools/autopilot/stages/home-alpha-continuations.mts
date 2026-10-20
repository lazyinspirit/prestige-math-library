import { homeAlphaContinuations } from '../../step3-owner-home-alpha-continuations.mjs';
export function withHomeAlphaContinuation(original: any): any {
 if(original.id!=='3a-adjudicate')return original;
 const entries=(ctx:any,beforeDispatch=false,selected:string[]|null=null)=>homeAlphaContinuations(ctx.repo,ctx.run,{beforeDispatch,units:original.units(ctx).map(String),selected});
 return {...original,
  pattern:(ctx:any)=>{
   const pattern=typeof original.pattern==='function'?original.pattern(ctx):original.pattern;
   const rows=entries(ctx);if(!rows.length)return pattern;
   const old=rows.map(({entry:e}:any)=>`alpha-(?:alpha-)?3a-batch-${e.unit}\\.result\\.json`).join('|');
   const fresh=rows.map(({entry:e}:any)=>`alpha-${e.label}\\.result\\.json`).join('|');
   return new RegExp(`^(?!(?:${old})$)(?:${pattern.source}|${fresh})$`,pattern.flags);
  },
  plan:(ctx:any,pending:string[])=>{
   const rows=entries(ctx),selected=pending.map(String).filter(unit=>rows.some(({entry:e}:any)=>e.unit===unit));
   // The original real Alpha planner writes its order task. Guard the selected
   // correction BEFORE calling it; an invalid/exhausted route writes nothing.
   if(selected.length&&!ctx.doctor)entries(ctx,true,selected);
   return original.plan(ctx,pending).map((plan:any)=>{
    const route=rows.find(({entry:e}:any)=>plan.covers?.length===1&&String(plan.covers[0])===e.unit);
    if(!route)return plan;
    const e=route.entry;return {...plan,label:e.label,task:[...(Array.isArray(plan.task)?plan.task:[plan.task]),e.task.path]};
   });
  },
 };
}
