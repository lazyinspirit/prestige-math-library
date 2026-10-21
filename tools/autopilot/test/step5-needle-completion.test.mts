import {test} from 'node:test';
import assert from 'node:assert/strict';
import {join,relative} from 'node:path';
import {existsSync,readFileSync} from 'node:fs';
import {needleFixture} from '../../step5-unit3-needle-completion.test.mjs';
import {recordUnit3NeedleCompletion,NEEDLE_RUN as run,NEEDLE_UNIT,NEEDLE_LABEL,NEEDLE_CONSUMERS} from '../../step5-unit3-needle-completion.mjs';
import {step5Stages} from '../stages/mathlib.step5.mts';
import {ownerSupervisedCompactStages} from '../stages/owner-supervised-compact.mts';
import {collect} from '../../step5-workflow.mjs';
const stage=()=>step5Stages({gate:(id:string,argv:string[])=>({id,argv}),repoWide:()=>[],contractGates:()=>[],ledgerGate:()=>({}),closureGate:()=>({})}).find((s:any)=>s.id==='5.2-impact');
test('native Step5 completion is an additional exact unit and resumes actual original session after owner resume',()=>{const f=needleFixture();try{const s=stage(),ctx={repo:f.root,run,stageRounds:{'5.2-impact':1}};assert.deepEqual(s.units(ctx),['1','2','3']);recordUnit3NeedleCompletion(f.root,run,f.payload);f.state.paused=false;f.put(relative(f.root,join(f.stateDir,'state.json')),f.state);assert.deepEqual(s.units(ctx),['1','2','3',NEEDLE_UNIT]);assert.deepEqual(s.unitPrerequisites(ctx,NEEDLE_UNIT),['1','2','3']);const p=s.plan(ctx,[NEEDLE_UNIT])[0];assert.equal(p.label,NEEDLE_LABEL);assert.deepEqual(p.covers,[NEEDLE_UNIT]);assert.equal(p.resumeSession,'original-session-3');assert.equal(p.sessionHome,join(f.stateDir,'step5-reader-owner-sessions','u3'));assert.equal(s.pattern(ctx).test(`alpha-repair-${NEEDLE_LABEL}.result.json`),true);assert.match(s.artifacts(ctx,NEEDLE_UNIT),/u3-needle-completion\.json$/);
 const progress=join(f.dir,'impact-initial-1-progress.json');s.onProgress({ctx,stage:s,executor:{inflight:new Map(),hasAdoptedWork:()=>false,unitsComplete:()=>new Set(['1','2','3'])}});assert.equal(existsSync(progress),false);f.finish();s.onProgress({ctx,stage:s,executor:{inflight:new Map(),hasAdoptedWork:()=>false,unitsComplete:()=>new Set(['1','2','3',NEEDLE_UNIT])}});assert.equal(existsSync(progress),true);assert.ok(s.units(ctx).includes('impact-initial-pass-2:3'));assert.equal(NEEDLE_CONSUMERS.length,14);
 }finally{f.close();}});

test('doctor can describe completed needle work after base collection and pending consumer edits without licensing dispatch',()=>{
 const f=needleFixture();try{
  const s=stage(),ctx={repo:f.root,run,stageRounds:{'5.2-impact':1}};
  recordUnit3NeedleCompletion(f.root,run,f.payload);f.finish();
  collect(f.root,run,'impact-initial',1,{deferImpactClosure:true});
  const base=join(f.dir,'impact-initial-1-collected.json'),baseBytes=readFileSync(base,'utf8');
  // Root may now apply its separately reviewed proof-only consumer proposals.
  // This is historical descriptor enumeration, not another completion launch.
  const changed=new Map<string,string>();for(const consumer of NEEDLE_CONSUMERS.slice(3,5)){const source=join(f.root,'items',consumer+'.md');f.put(relative(f.root,source),readFileSync(source,'utf8').replace('Original argument.','Pending corrected consumer Fact argument.'));changed.set(source,readFileSync(source,'utf8'));}
  const units=s.units({...ctx,doctor:true});
  assert.ok(units.includes(NEEDLE_UNIT));
  const plans=s.plan({...ctx,doctor:true},units),needle=plans.find((p:any)=>p.label===NEEDLE_LABEL);
  assert.equal(needle.resumeSession,'original-session-3');assert.deepEqual(needle.covers,[NEEDLE_UNIT]);
  assert.throws(()=>s.plan(ctx,[NEEDLE_UNIT]),/completion is too late/);
  assert.equal(readFileSync(base,'utf8'),baseBytes);for(const [source,bytes]of changed)assert.equal(readFileSync(source,'utf8'),bytes);
  assert.equal(existsSync(join(f.dir,'impact-initial-1-progress.json')),false);
 }finally{f.close();}
});

test('wrapped native impact progress queues genuine successors before hold and still holds after true closure',async()=>{
 const f=needleFixture();try{
  const native=stage(),[wrapped]=ownerSupervisedCompactStages([native]),ctx={repo:f.root,run,stateDir:f.stateDir,stageRounds:{'5.2-impact':1}};
  recordUnit3NeedleCompletion(f.root,run,f.payload);f.finish();collect(f.root,run,'impact-initial',1,{deferImpactClosure:true});
  const base=join(f.dir,'impact-initial-1-collected.json'),baseBytes=readFileSync(base,'utf8');
  for(const consumer of NEEDLE_CONSUMERS.slice(3,5)){const path=join(f.root,'items',consumer+'.md');f.put(relative(f.root,path),readFileSync(path,'utf8').replace('Original argument.','Root corrected Fact argument after authentic base.'));}
  const complete=new Set(['1','2','3',NEEDLE_UNIT]);
  f.state.stages={};
  const state={data:f.state,get paused(){return f.state.paused;},set paused(value:boolean){f.state.paused=value;},save(){f.put(relative(f.root,join(f.stateDir,'state.json')),f.state);}};
  const executor={state,inflight:new Map(),hasAdoptedWork:()=>false,liveDispatchLabels:()=>[],pipelineGroup:()=>[wrapped],unitsComplete:()=>complete,
    stageStatus:()=>({unitsDone:wrapped.units(ctx).every((u:string)=>complete.has(u)),gatesPassed:false}),reporter:{notify(){}}};
  assert.equal(executor.stageStatus().unitsDone,true);
  await wrapped.onProgress({ctx,executor,stage:wrapped});
  assert.equal(state.paused,false);assert.equal(executor.stageStatus().unitsDone,false);
  assert.equal(existsSync(join(f.stateDir,'owner-gate-permission.json')),false);
  // The old request is truthful prior-stage evidence, not a fabricated impact
  // battery request or permission. Pending work must not mutate it.
  assert.equal(JSON.parse(readFileSync(join(f.stateDir,'owner-gate-request.json'),'utf8')).group,'5.1-adjudicate');
  assert.throws(()=>wrapped.gates(ctx),/Missing owner/);
  const next=JSON.parse(readFileSync(join(f.dir,'impact-initial-pass-2-1.json'),'utf8'));
  assert.deepEqual(next.assignments['3'].sort(),[...NEEDLE_CONSUMERS].sort());
  f.reportPack(next);for(const unit of ['1','2','3'])complete.add(`${next.phase}:${unit}`);
  await wrapped.onProgress({ctx,executor,stage:wrapped});
  assert.equal(JSON.parse(readFileSync(join(f.dir,'impact-initial-1-progress.json'),'utf8')).complete,true);
  assert.equal(state.paused,true);
  assert.equal(JSON.parse(readFileSync(join(f.stateDir,'owner-gate-request.json'),'utf8')).group,'5.2-impact');
  assert.equal(existsSync(join(f.stateDir,'owner-gate-permission.json')),false);
  assert.throws(()=>wrapped.gates(ctx),/Missing owner/);
  assert.equal(readFileSync(base,'utf8'),baseBytes);
 }finally{f.close();}
});
