// Physics-owned compact composition; preserve native transitions and decorations.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import { pageLayout } from '../../physics-support/page-layout.mjs';
import { readStatementPolicy } from '../../statement-first-policy.mjs';
import { statementFirstStages } from './statement-first.mts';
import type { Ctx, Plan, Stage } from './types.mts';
const directions = `
## Page presentation: no summaries

Author A/B pages as YAML frontmatter only, with no Markdown body.
Do not generate, restore or repair page summaries. Do not copy narrative prose
from planning scaffolds into authored pages. There is no generate-then-delete
summary pass. Leave page bodies empty;
this direction supersedes older page-summary instructions. The mechanical check
rejects any summary rather than deleting it. Preserve page
inventories, status and all other metadata. The engine mechanically sets
page_layout: compact-v1 after initial authoring, before its gates and subsequent
review snapshots. Preserve that flag afterward. Prerequisites remain computed
from real dependency edges and render as a native disclosure, collapsed by
default. Neither summary removal nor disclosure markup needs LLM authoring.
Category introductions and pathway briefs remain required and are unaffected.
`;
function decorate(ctx: Ctx, plan: Plan): Plan {
  if (plan.role === 'tool' || plan.argv || !plan.brief || (ctx as any).doctor) return plan;
  const source=(Array.isArray(plan.brief)?plan.brief:[plan.brief]).find(p=>existsSync(join(ctx.repo,p)));
  if (!source) throw Error('Missing page-layout brief');
  const body=readFileSync(join(ctx.repo,source),'utf8')+'\n'+directions;
  const path=join(ctx.repo,'research',`${ctx.run}-page-layout-briefs`,createHash('sha256').update(body).digest('hex')+'.md');
  mkdirSync(join(path,'..'),{recursive:true});
  if(!existsSync(path))writeFileSync(path,body,{flag:'wx'});
  return {...plan,brief:relative(ctx.repo,path)};
}
function hook(args: any) {
  return {...args,executor:new Proxy(args.executor,{get(target,key){
    if(key==='start')return (stage:Stage,plan:Plan,...rest:any[])=>target.start(stage,decorate(args.ctx,plan),...rest);
    const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;
  }})};
}
export function compactStages(ctx: Ctx, native: Stage[], domain:'physics'): Stage[] {
  if(readStatementPolicy(ctx.repo,ctx.run,domain)?.page_layout!=='compact-v1')throw Error('Compact stages require fresh page-layout policy');
  return statementFirstStages(ctx,native,domain).map(source=>{
    const stage={...source};
    if(source.plan)stage.plan=(context,pending,slots)=>source.plan!(context,pending,slots).map(p=>decorate(context,p));
    if(source.refreshPlan)stage.refreshPlan=(context,unit,request)=>decorate(context,source.refreshPlan!(context,unit,request));
    if(source.onProgress || source.id==='1-scaffold')stage.onProgress=async args=>{
      // The construction cohort is completely drained; never race its writers.
      // Step-1 readiness hashes bind items/deps, not these page presentation bytes.
      if(source.id==='1-scaffold' && !(args.ctx as any).doctor
        && ![...args.executor.inflight.values()].some((d:any)=>d.meta.stage===stage.id)
        && !args.executor.adoptedUnits(stage).size && args.executor.stageStatus(stage,args.ctx).unitsDone)
        pageLayout(args.ctx.repo,args.ctx.run,domain,{prepare:true});
      return source.onProgress?.(hook(args));
    };
    if(source.onGateFailure)stage.onGateFailure=args=>source.onGateFailure!(hook(args));
    if(source.gates && !['1-drift','1-drift-apply','1-baseline'].includes(source.id)
      && !/^1-append-(?:drift|apply)-/.test(source.id))stage.gates=context=>[...source.gates!(context),{
        id:'page-layout',argv:['node','tools/physics-support/page-layout.mjs','check','--run',context.run,'--domain',domain],
        liveness:{pattern:'page-layout: (\\d+) page',min:1,unit:'frontier pages'},
      }];
    return stage;
  });
}
