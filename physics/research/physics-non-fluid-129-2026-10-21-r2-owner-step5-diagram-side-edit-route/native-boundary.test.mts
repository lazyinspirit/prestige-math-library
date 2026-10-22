// Native descriptor, preparation, read-only launch, sealing/pause and resumed
// gate subprocess are real code. The model report/dispatch are synthetic fixtures.
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync,symlinkSync,readFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {fixture} from './candidate/tools/physics-support/step5-explanatory-edit-review.test.mjs';
import {step5Stages} from './candidate/tools/physics-autopilot/stages/mathlib.step5.mts';
import {runGate} from '../../../tools/physics-autopilot/src/gates.mts';
import {remarksOnly} from './candidate/tools/physics-support/step5-explanatory-edit-review.mjs';
import {itemHashGuard} from './candidate/tools/physics-support/item-hash.mjs';
const here=dirname(fileURLToPath(import.meta.url));
test('actual native continuation plan seals and pauses, then resumed native gate collects without source changes',async t=>{
 const f=fixture(t,{published:true}),stage=step5Stages({gate:(id:string,argv:string[])=>({id,argv})}).find((s:any)=>s.id==='5.1-adjudicate');
 const ctx={run:f.run,repo:f.root},handoff:any={};
 const executor={inflight:new Map(),hasAdoptedWork:()=>false,unitsComplete:()=>new Set(['19']),state:{paused:false,stage:()=>handoff},reporter:{notify:()=>{}}};
 stage.onProgress({ctx,executor,stage});
 assert.deepEqual(stage.units(ctx),['19','explanatory-review-initial:1']);
 const plan=stage.plan(ctx,['explanatory-review-initial:1'])[0];
 assert.equal(plan.role,'alpha-repair');assert.equal(plan.profile,'gpt-6.1-sol-high');
 assert.equal(plan.label,'step5-v2-explanatory-review-initial-r1-u1');assert.deepEqual(plan.covers,['explanatory-review-initial:1']);
 assert.equal(stage.pattern(ctx).test('alpha-repair-'+plan.label+'.result.json'),true);
 assert.match(readFileSync(join(f.root,plan.task),'utf8'),/READ ONLY/);
 f.finish();stage.onProgress({ctx,executor,stage});assert.equal(executor.state.paused,true);assert.ok(handoff.explanatoryReviewPausedAt);
 executor.state.paused=false;stage.onProgress({ctx,executor,stage});assert.equal(executor.state.paused,false);
 mkdirSync(join(f.root,'tools/physics-support'),{recursive:true});symlinkSync(join(here,'candidate/tools/physics-support/step5-workflow.mjs'),join(f.root,'tools/physics-support/step5-workflow.mjs'));
 const gate=stage.gates(ctx)[0],result=await runGate(gate,{cwd:f.root});
 assert.equal(result.ok,true,JSON.stringify(result));
 const parent=JSON.parse(readFileSync(join(f.dir,'initial-1-collected.json'),'utf8'));
 assert.equal(parent.published_local_repairs.length,1);assert.equal(parent.native_explanatory_edit_review.reviews.length,1);
 t.diagnostic(JSON.stringify({plan:{role:plan.role,label:plan.label,covers:plan.covers,profile:plan.profile},gate:gate.argv,result}));
});
test('both genuine recovered original sources have exactly the two actual user Remarks deltas',()=>{
 for(const id of ['alg-emx-staggered-leapfrog','ex-nrqmx-three-spin-blocks']){
  const before=readFileSync(join(here,'preimages/items',id+'.md'),'utf8'),current=readFileSync(join(here,'current/items',id+'.md'),'utf8');
  remarksOnly(before,current);
  const pack=JSON.parse(readFileSync(join(here,'../'+ 'physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json'),'utf8'));
  assert.equal(itemHashGuard(before),pack.before[id]);
 }
});
