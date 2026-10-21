import { readFileSync, writeFileSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
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
    const e=route.entry;
    if(ctx.doctor)return {...plan,label:e.label}; // no generated task writes
    const tasks=[...(Array.isArray(plan.task)?plan.task:[plan.task]),e.task.path];
    const sections=tasks.map((path:string)=>{
     if(typeof path!=='string'||isAbsolute(path)||path.includes('\\'))throw Error('home Alpha continuation: invalid task source');
     const full=resolve(ctx.repo,path),rel=relative(resolve(ctx.repo),full);
     if(!rel||rel.startsWith('..')||isAbsolute(rel))throw Error('home Alpha continuation: escaping task source');
     let at=resolve(ctx.repo);for(const part of rel.split('/')){at=resolve(at,part);if(lstatSync(at).isSymbolicLink())throw Error('home Alpha continuation: symlink task source');}
     if(!lstatSync(full).isFile())throw Error('home Alpha continuation: nonregular task source');
     const bytes=readFileSync(full);
     if(path===e.task.path&&createHash('sha256').update(bytes).digest('hex')!==e.task.sha256)throw Error('home Alpha continuation: registered task changed while assembling');
     return `## Exact task source: ${path}\n\n${bytes.toString()}\n\n`;
    });
    const task=`research/${ctx.run}-alpha-${e.canonical_group}-3a-home-continuation.task.md`;
    let parent=resolve(ctx.repo);for(const part of task.split('/').slice(0,-1)){parent=resolve(parent,part);if(lstatSync(parent).isSymbolicLink()||!lstatSync(parent).isDirectory())throw Error('home Alpha continuation: invalid assembled task parent');}
    try {const stat=lstatSync(resolve(ctx.repo,task));if(stat.isSymbolicLink()||!stat.isFile())throw Error('home Alpha continuation: nonregular assembled task');}
    catch(error:any){if(error.code!=='ENOENT')throw error;}
    writeFileSync(resolve(ctx.repo,task),`# Fresh native home Alpha: ${e.canonical_group}\n\n`+sections.join('---\n\n'));
    return {...plan,label:e.label,task};
   });
  },
 };
}
