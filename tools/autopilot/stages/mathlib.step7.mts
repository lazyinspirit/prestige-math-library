// Explicit Step 7 repair rounds. Every mathematical writer drains before the
// one controller certification; only the engine routes or launches judgments.
import { existsSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { prepareAdjudication, prepareImpact, advanceImpact, impactWork, maintenanceLabel, maintenancePack, workerLabel, workerReport, workflowDir } from '../../step7-workflow.mjs';
import { frontierGateBattery } from '../../step7-frontier-gate.mjs';

export function step7Stages({ gate, repoWide, contractGates, ledgerGate, closureGate, auditorCreatedGate, step7GuardGate, publishedGate }: any): any[] {
  const round=(ctx:any,id:string)=>ctx.stageRounds?.[id]??1;
  const tool=(ctx:any,command:string,phase:string,n:number)=>['node','tools/step7-workflow.mjs',command,'--run',ctx.run,'--phase',phase,'--round',String(n)];
  const pattern=(phase:string,id:string)=>(ctx:any)=>new RegExp(`^(?:alpha-adjudicate|alpha-repair|tool)-step7-v2-${phase}(?:-pass-[0-9]+)?-r${round(ctx,id)}-(?:u[^.]+|all)\\.result\\.json$`);
  const report=(ctx:any,phase:string,n:number,unit:string)=>workerReport(ctx.repo,ctx.run,phase,n,unit);
  const decode=(phase:string,u:string)=>u.includes(':')?u.split(':'):[phase,u];
  const ownerUnits=(ctx:any,phase:string,id:string)=>impactWork(ctx.repo,ctx.run,phase,round(ctx,id))
    .flatMap((work:any)=>['1','2','3'].map(u=>work.kind==='maintenance'?`maintenance:${work.id}:${u}`:work.phase===phase?u:`${work.phase}:${u}`));
  const outsideLane=(ctx:any,u:string)=>{const [,pack,lane]=u.split(':');return maintenancePack(ctx.repo,ctx.run,pack).lanes.find((row:any)=>String(row.lane)===lane);};
  const workerStage=(id:string,phase:string,adjudication:boolean):any=>({
    id,label:`${id.split('-')[0]} ${adjudication?'batch adjudication and repair':'three owner agents repair downstream consumers'}`,
    modelProfile:MODEL_PROFILE_NAMES.solXHigh,
    units:(ctx:any)=>adjudication ? (existsSync(join(workflowDir(ctx.repo,ctx.run),'frontier.json'))
      ? JSON.parse(readFileSync(join(workflowDir(ctx.repo,ctx.run),'frontier.json'),'utf8')).batches.map((b:any)=>String(b.id)) : ['1']) : ownerUnits(ctx,phase,id),
    pattern:(ctx:any)=>adjudication?pattern(phase,id)(ctx):new RegExp(`(?:${pattern(phase,id)(ctx).source})|^alpha-repair-${maintenanceLabel(phase,round(ctx,id),'pack-[0-9]+','[123]')}\\.result\\.json$`),concurrency:adjudication?24:3,
    // Sibling owners run concurrently. Shared metadata edits use a short
    // critical section; a new pass waits for the entire preceding pass.
    ...(!adjudication?{
      unitPrerequisites:(ctx:any,u:string)=>{const units=ownerUnits(ctx,phase,id),i=units.indexOf(u),start=Math.floor(i/3)*3;return start>0?units.slice(start-3,start):[];},
      onProgress:({ctx,executor,stage}:any)=>{
        if([...executor.inflight.values()].some((d:any)=>d.meta.stage===id)||executor.hasAdoptedWork(stage))return;
        const complete=executor.unitsComplete(stage,ctx);
        if(ownerUnits(ctx,phase,id).every((u:string)=>complete.has(u)))advanceImpact(ctx.repo,ctx.run,phase,round(ctx,id));
      },
    }:{}),
    artifacts:(ctx:any,u:string)=>{if(u.startsWith('maintenance:'))return outsideLane(ctx,u).report;const [pass,unit]=decode(phase,u);return relative(ctx.repo,report(ctx,pass,round(ctx,id),unit));},
    plan:(ctx:any,pending:string[])=>{
      const n=round(ctx,id);
      if(adjudication&&!ctx.doctor)prepareAdjudication(ctx.repo,ctx.run,phase,n);
      else {
        const failures=phase==='gate'?(ctx.stageFailures?.['7.10-gate']??ctx.stageFailures?.['7.8-gate']):null;
        if(phase==='gate'&&!failures&&!ctx.doctor)throw Error('7.9 requires actual failed gate diagnostics');
        if(!ctx.doctor)prepareImpact(ctx.repo,ctx.run,phase,n,{failures});
      }
      return pending.map(u=>{
        if(u.startsWith('maintenance:')){
          const [,pack,lane]=u.split(':'),input=outsideLane(ctx,u);
          return {role:'alpha-repair',label:maintenanceLabel(phase,n,pack,lane),job:'authoring',covers:[u],profile:MODEL_PROFILE_NAMES.solXHigh,
            brief:'briefs/consumer-maintenance.md',task:input.task,timeout:21600};
        }
        const [pass,unit]=decode(phase,u);return {role:adjudication?'alpha-adjudicate':'alpha-repair',label:workerLabel(pass,n,unit),
        job:adjudication?'adjudication':'authoring',covers:[u],profile:MODEL_PROFILE_NAMES.solXHigh,
        brief:`briefs/step7-${adjudication?'adjudicator':'owner-repair'}.md`,
        task:relative(ctx.repo,report(ctx,pass,n,unit).replace(/\.json$/,'.task.md')),timeout:21600};});
    },
    gates:(ctx:any)=>[gate('step7-wave-evidence',tool(ctx,'collect',phase,round(ctx,id)))],
  });
  const certifyStage=(id:string,phase:string):any=>({
    id,label:`${id.split('-')[0]} orchestrator certifies complete stable repair wave`,units:()=>['all'],
    pattern:pattern(`certify-${phase}`,id),concurrency:1,
    artifacts:(ctx:any)=>relative(ctx.repo,join(workflowDir(ctx.repo,ctx.run),`certification-${phase}-${round(ctx,id)}.json`)),
    plan:(ctx:any)=>[{role:'tool',label:`step7-v2-certify-${phase}-r${round(ctx,id)}-all`,covers:['all'],job:'bookkeeping-mechanical',
      argv:tool(ctx,'certify',phase,round(ctx,id))}],
    gates:(ctx:any)=>[gate('step7-wave-certification',tool(ctx,'verify-wave',phase,round(ctx,id)))],
  });
  const recert=certifyStage('7.7-certify','impact-repeat');
  recert.routeTargets=['7.4-rejudge'];
  recert.route=({ctx,outcome}:any)=>{
    if(outcome!=='passed')return null;
    const p=join(workflowDir(ctx.repo,ctx.run),`threshold-${round(ctx,'7.7-certify')}.json`);
    const threshold=JSON.parse(readFileSync(p,'utf8'));
    if(threshold.errors?.length||typeof threshold.belowThreshold!=='boolean')throw Error('invalid fatal threshold evidence');
    return threshold.belowThreshold?null:{next:'7.4-rejudge'};
  };
  const battery=(ctx:any)=>frontierGateBattery(ctx,[
    gate('step7-round-certification',tool(ctx,'check','final',1)),
    ...(step7GuardGate?[step7GuardGate(ctx)]:[]),
    ...repoWide(ctx),...contractGates(ctx,{reviewed:true}),
    // Published maintenance and auditor additions are outside the immutable
    // original frontier; their certification gates belong to later stages.
    closureGate(ctx),ledgerGate(ctx),
  ]);
  const gateStage=(id:string):any=>({id,label:`${id.split('-')[0]} complete Step 7 gate battery`,units:()=>['all'],
    concurrency:1,
    plan:(ctx:any)=>[{role:'tool',label:`step7-v2-gate-check-r${round(ctx,id)}-${id}-all`,covers:['all'],job:'bookkeeping-mechanical',argv:['node','-e','console.log("Step 7 gate battery ready")']}],
    // Include stage ID to distinguish 7.8's first gate from 7.10's first retry.
    pattern:(ctx:any)=>new RegExp(`^tool-step7-v2-gate-check-r${round(ctx,id)}-${id.replace('.','\\.')}-all\\.result\\.json$`),
    gates:battery,routeTargets:id==='7.8-gate'?['7.9-repair','7-freeze']:['7.9-repair'],
    route:({outcome}:any)=>outcome==='failed'?{next:'7.9-repair'}:id==='7.8-gate'?{next:'7-freeze'}:null,
  });
  const repair=workerStage('7.9-repair','gate',false);
  // This stage's join performs precisely one recertification after all three
  // repair workers complete; 7.10 then reruns the entire battery.
  repair.gates=(ctx:any)=>[gate('step7-gate-recertify',tool(ctx,'certify','gate',round(ctx,'7.9-repair')))];
  return [
    {id:'7-scope',label:'freeze original Step 7 frontier',units:()=>['all'],
      pattern:/^tool-step7-v2-init\.result\.json$/,concurrency:1,
      artifacts:(ctx:any)=>relative(ctx.repo,join(workflowDir(ctx.repo,ctx.run),'frontier.json')),
      plan:(ctx:any)=>[{role:'tool',label:'step7-v2-init',covers:['all'],job:'bookkeeping-mechanical',argv:tool(ctx,'init','initial',1)}],
      gatesWaived:'Initialization freezes the original frontier and Step 6 evidence; every later round validates these immutable inputs.'},
    workerStage('7.1-adjudicate','initial',true),workerStage('7.2-impact','impact-initial',false),certifyStage('7.3-certify','impact-initial'),
    {id:'7.4-rejudge',label:'7.4 Sol judges repaired items',units:()=>['all'],pattern:pattern('judge','7.4-rejudge'),concurrency:1,maxAttempts:1,
      artifacts:(ctx:any)=>relative(ctx.repo,join(workflowDir(ctx.repo,ctx.run),`judge-${round(ctx,'7.4-rejudge')}.json`)),
      plan:(ctx:any)=>[{role:'tool',label:`step7-v2-judge-r${round(ctx,'7.4-rejudge')}-all`,covers:['all'],job:'judgement',timeout:43200,
        argv:tool(ctx,'judge','repeat',round(ctx,'7.4-rejudge'))}],
      gatesWaived:'The judge command requires a complete current Sol verdict for each frozen repaired target before writing its round receipt.'},
    workerStage('7.5-adjudicate','repeat',true),workerStage('7.6-impact','impact-repeat',false),recert,
    gateStage('7.8-gate'),repair,gateStage('7.10-gate'),
  ];
}
