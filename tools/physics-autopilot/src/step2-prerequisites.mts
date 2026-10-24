// Physics-only supplemental source ownership, after the immutable Step-1 prefix.
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { scanAppendProcesses } from './frontier-append.mts';
import { preparePrerequisiteRegistration, installPrerequisiteRegistration, finishPrerequisiteRegistration,
  prerequisiteRegistry, prerequisiteBoundary, assertNoPrerequisiteTransaction } from '../../physics-support/step2-prerequisites.mjs';
import { MODEL_PROFILE_NAMES } from '../../physics-support/models.mjs';
import {readSchedulingBatchDependencyLevels} from '../../physics-support/batch-dependency-levels.mjs';
import {step1HoldPacket} from './step1-hold-evidence.mjs';
import type { Stage } from './types.mts';
import {authorizePrerequisiteRepairs,completePrerequisiteRepairs} from '../../physics-support/step2-prerequisite-repairs.mjs';
import {runPages} from '../../physics-support/item-dependency-levels.mjs';
import {adoptAuthoredMetadata} from '../../physics-support/step2-authored-metadata.mjs';
export { assertNoPrerequisiteTransaction };

export function repairStep2Prerequisites({repo,run,stateDir,request,complete=false,authored=false,scan=scanAppendProcesses}:any){
  const validate=()=>{
    const dir=mkdtempSync(join(tmpdir(),'physics-prerequisite-repair-'));
    try{
      const pages=runPages(repo,run),selector=join(dir,'pages.json'),items=join(dir,'items.json');
      writeFileSync(selector,JSON.stringify(pages.map((page:any)=>page.id)));
      writeFileSync(items,JSON.stringify(pages.flatMap((page:any)=>page.items.map((item:any)=>item.id))));
      for(const argv of [
        ['tools/physics-support/validate-plan.mjs','research/plan-spec.json','--repo',repo,'--pages-file',selector],
        ['tools/physics-support/depcheck.mjs','--items-file',items,'--quiet'],
      ]){
        const result=spawnSync(process.execPath,argv,{cwd:repo,encoding:'utf8',env:{...process.env,PHYSICS_REPO:repo},maxBuffer:32*1024*1024});
        if(result.status!==0)throw Error(`Repair current full-frontier validation failed: ${result.stderr||result.stdout}`);
      }
    }finally{rmSync(dir,{recursive:true,force:true});}
  };
  return (authored?adoptAuthoredMetadata:complete?completePrerequisiteRepairs:authorizePrerequisiteRepairs)(repo,run,stateDir,request,{scan,validate});
}

export function registerStep2Prerequisites({repo, run, stateDir, request, scan = scanAppendProcesses}: any) {
  const invoke = ({plan, pages}: any) => {
    const dir = mkdtempSync(join(tmpdir(), 'physics-step2-prospective-'));
    try {
      // These are prospective output/selection bytes, never copies of preimages.
      const planPath = join(dir, 'plan.json'), selector = join(dir, 'pages.json');
      writeFileSync(planPath, JSON.stringify(plan)); writeFileSync(selector, JSON.stringify(pages));
      const result = spawnSync(process.execPath, ['tools/physics-support/validate-plan.mjs', planPath, '--repo', repo, '--pages-file', selector],
        {cwd:repo,encoding:'utf8',env:{...process.env,PHYSICS_REPO:repo},maxBuffer:32*1024*1024});
      if (result.status !== 0) throw Error(`Supplemental prospective plan failed: ${result.stderr || result.stdout}`);
    } finally { rmSync(dir, {recursive:true,force:true}); }
  };
  const prepared = preparePrerequisiteRegistration(repo,run,request,{invoke,scan,stateDir});
  // Recheck actual process ownership immediately before installing any live bytes.
  prerequisiteBoundary(repo,run,stateDir,scan);
  return installPrerequisiteRegistration(repo,run,stateDir,prepared);
}
export function finishStep2Prerequisites({repo,run,stateDir,scan=scanAppendProcesses}:any) {
  prerequisiteBoundary(repo,run,stateDir,scan);
  return finishPrerequisiteRegistration(repo,run,stateDir);
}

/** Only old construction's units are frozen; current Step 2 and later own all manifests. */
export function originalConstructionBatches(ctx:any, current:string[]) {
  return prerequisiteRegistry(ctx.repo,ctx.run)?.original_batches ?? current;
}
export function holdSupplementalPrerequisites({ctx,stage,failure}:any) {
  const number=/^2-prerequisite-construct-(\d+)$/.exec(stage.id)?.[1];
  if(!number)throw Error('Supplemental hold requires an exact construction generation');
  const path=`research/${ctx.run}-prerequisite-${number}-blockers.json`;
  writeFileSync(join(ctx.repo,path),step1HoldPacket(ctx.run,stage.id,new Date().toISOString(),failure));
  return {owner:{reason:`Supplemental prerequisite construction held; resolve ${path}`}};
}
export function step2PrerequisiteStages(native:Stage[],ctx:any,{artifacts,gates}:any):Stage[] {
  const registry=prerequisiteRegistry(ctx.repo,ctx.run); if(!registry)return native;
  const index=native.findIndex(stage=>stage.id==='2-scope-review');
  if(index<1||native[index-1].id!=='1-scaffold')throw Error('Supplemental prerequisites require the unchanged construction/scope boundary');
  const extra:Stage[]=registry.generations.filter((entry:any)=>entry.batches.length).map((entry:any)=>({
    id:`2-prerequisite-construct-${entry.number}`,
    label:`Supplemental prerequisite construction ${entry.number}`,
    units:()=>entry.batches,
    modelProfile:MODEL_PROFILE_NAMES.lunaMax,
    concurrency:30,
    pattern:new RegExp(`^beta-prerequisite-${entry.number}-batch-\\d+\\.result\\.json$`),
    labelFor:unit=>`prerequisite-${entry.number}-batch-${unit}`,
    artifacts:(context:any,unit:string)=>artifacts(context,unit),
    plan:(context:any,pending:string[])=>{
      const levels=context.doctor?null:readSchedulingBatchDependencyLevels(context.repo,context.run);
      const byBatch=new Map(levels?.batches.map((row:any)=>[row.batch,row.dependency_level])??[]);
      return [...pending].sort((a,b)=>Number(byBatch.get(a)??0)-Number(byBatch.get(b)??0)).map(unit=>({role:'beta',label:`prerequisite-${entry.number}-batch-${unit}`,job:'scaffolding',covers:[unit],
        brief:'briefs/beta-scaffold.md',task:`research/${ctx.run}-prerequisite-${entry.number}-batch-${unit}.task.md`,timeout:14400}));
    },
    gates:(context:any)=>gates(context,entry),
    onHold:holdSupplementalPrerequisites,
  }));
  return [...native.slice(0,index),...extra,...native.slice(index)];
}
