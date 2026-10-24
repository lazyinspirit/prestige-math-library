import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,readdirSync,existsSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {step2PrerequisiteStages,originalConstructionBatches} from '../src/step2-prerequisites.mts';
import {completedPrefixProblem,Executor} from '../src/executor.mts';
import {validateStages} from '../src/spec.mts';
import {compactStages} from '../src/page-layout.mts';
import {writeStatementPolicy} from '../../statement-first-policy.mjs';
import {authoringBatches,authorArtifacts,scaffoldArtifacts,supplementalConstructionGates} from '../stages/mathlib.mts';

function fixture(t:any) {
  const repo=mkdtempSync(join(tmpdir(),'physics-supplement-stage-'));
  t.after(()=>rmSync(repo,{recursive:true,force:true}));
  for(const path of ['research','items','library/math','briefs'])mkdirSync(join(repo,path),{recursive:true});
  const put=(path:string,value:any)=>writeFileSync(join(repo,path),typeof value==='string'?value:JSON.stringify(value));
  const ctx:any={repo,run:'demo',doctor:true};
  put('research/math-imports.json',{version:1,files:[]});
  const entry={number:1,state_dir:'.physics-autopilot/demo',batches:['3','4'],pages:['third','third-examples','fourth','fourth-examples'],items:['def-third','ex-third','def-fourth','ex-fourth'],additions:[],
    request:{path:'research/demo-request.json'},inputs:{'research/demo-source-design.md':'a'.repeat(64)},import_receipt_sha256:createHash('sha256').update(JSON.stringify({version:1,files:[]})).digest('hex')};
  const registry={version:1,run:'demo',original_batches:['1','2'],generations:[entry]};
  const activate=()=>{
    put('research/demo-step2-prerequisites.json',registry);
    mkdirSync(join(repo,'.physics-autopilot/demo'),{recursive:true});
    put('.physics-autopilot/demo/step2-prerequisites-installed-1.json',{run:'demo',rows:[{path:'research/demo-step2-prerequisites.json',after:createHash('sha256').update(JSON.stringify(registry)).digest('hex')}]});
  };
  const native:any[]=['1-drift','1-scaffold','2-scope-review','3-review'].map(id=>({id,units:()=>['1','2','3','4'],pattern:/^native\.result\.json$/,plan:()=>[],gates:()=>[{id:'native',argv:['node','native'] }]}));
  const hooks={artifacts:(context:any,unit:string)=>[...scaffoldArtifacts(context,unit),...authorArtifacts(context,unit)],gates:supplementalConstructionGates,onHold:()=>{}};
  for(const [at,id] of ['first','second','third','fourth'].entries()) {
    const pages=[id,id+'-examples'].map((page,i)=>({id:page,kind:i?'B':'A',companion:i?id:id+'-examples',category:'math',library:'mathematics',order:at+1,requires:i?[id]:[],items:[{id:(i?'ex-':'def-')+id}]}));
    put(`research/demo-batch-${at+1}.pages.json`,pages);
    for(const [i,page] of pages.entries())put(`library/math/${page.id}.md`,`---\npage: ${page.id}\nstatus: draft\nlibrary: mathematics\nitems: [${page.items[0].id}]\nexamples: []\n${at<2?'page_layout: compact-v1\n':''}---\n`);
  }
  return {ctx,entry,registry,native,hooks,put,activate};
}
test('no registry is exactly inert: same stage array/objects, units, gates and workers, no writes',t=>{
  const f=fixture(t),before=readdirSync(join(f.ctx.repo,'research'));
  const result=step2PrerequisiteStages(f.native,f.ctx,f.hooks);
  assert.equal(result,f.native);
  for(const [i,stage] of result.entries()) {
    assert.equal(stage,f.native[i]);assert.deepEqual(stage.units(f.ctx),['1','2','3','4']);
    assert.deepEqual(stage.gates(f.ctx),f.native[i].gates(f.ctx));assert.deepEqual(stage.plan(f.ctx,[],30),[]);
  }
  const units=['1','2','3','4'];assert.equal(originalConstructionBatches(f.ctx,units),units);
  assert.deepEqual(authoringBatches(f.ctx),units);
  assert.deepEqual(readdirSync(join(f.ctx.repo,'research')),before);
  const mixed={...f.ctx,run:'Demo_1'};assert.equal(step2PrerequisiteStages(f.native,mixed,f.hooks),f.native);assert.equal(originalConstructionBatches(mixed,units),units);
});
test('new construction follows unchanged completed prefix; original construction units freeze but Step 2 owns all batches',t=>{
  const f=fixture(t);f.activate();
  const result=step2PrerequisiteStages(f.native,f.ctx,f.hooks),supplement=result[2];
  assert.deepEqual(result.map(stage=>stage.id),['1-drift','1-scaffold','2-prerequisite-construct-1','2-scope-review','3-review']);
  const stamps={'1-drift':{doneAt:'genuine'},'1-scaffold':{doneAt:'genuine',gatesPassedAt:'genuine'}};
  assert.equal(completedPrefixProblem(f.native,result,stamps),null);
  assert.deepEqual(authoringBatches(f.ctx),['1','2']);
  assert.deepEqual(result[3].units!(f.ctx),['1','2','3','4']);
  assert.deepEqual(supplement.units!(f.ctx),['3','4']);
  const plans=supplement.plan!(f.ctx,['3','4'],30);
  assert.deepEqual(plans.map(plan=>plan.label),['prerequisite-1-batch-3','prerequisite-1-batch-4']);
  assert.ok(plans.every(plan=>plan.role==='beta'&&plan.job==='scaffolding'));
  assert.equal((supplement.pattern as RegExp).test('beta-batch-3.result.json'),false);
  assert.equal((supplement.pattern as RegExp).test('beta-prerequisite-1-batch-3.result.json'),true);
  // Historical stamps remain durable, with no new coverage assertion.
  const context:any={state:{data:{stages:stamps}}};
  assert.equal(Executor.prototype.stageStatus.call(context,result[1],f.ctx).why,'stamped complete');
  assert.equal(stamps['1-scaffold'].doneAt,'genuine');
});
test('supplement artifacts require real carriers, coverage, readiness and contracts; full gate descriptors retain ordinary duties',t=>{
  const f=fixture(t);f.activate();
  const stage=step2PrerequisiteStages(f.native,f.ctx,f.hooks)[2];
  const artifacts=stage.artifacts!(f.ctx,'3') as string[];
  for(const path of ['research/demo-batch-3.coverage.json','research/demo-batch-3.proof-contracts.json','research/demo-step1-def-third.json','items/def-third.md','library/math/third.md'])assert.ok(artifacts.includes(path),path);
  assert.equal(existsSync(join(f.ctx.repo,'items/def-third.md')),false);
  const gates=stage.gates!(f.ctx),ids=gates.map(gate=>gate.id);
  for(const id of ['supplemental-construction','physics-content','item-dependency-levels','coverage-1','coverage-4','content-policy-items','proof-contract','finite-smoke','boundary-audit','citation-fidelity','gate-liveness','supplemental-source-fetch'])assert.ok(ids.includes(id),id);
  assert.ok(!ids.includes('batch-scope-review')); // genuine new review follows construction
  assert.ok(!ids.includes('drift-review')); // original report never gains new review coverage
  assert.equal(validateStages(step2PrerequisiteStages(f.native,f.ctx,f.hooks),f.ctx).length,0);
  const source=gates.find(gate=>gate.id==='supplemental-source-fetch')!;
  assert.deepEqual(source.argv,['node','tools/physics-support/source-fetch-check.mjs','--coverage','research/demo-batch-3.coverage.json,research/demo-batch-4.coverage.json']);
  assert.deepEqual(source.liveness,{pattern:'(\\d+)/\\d+ source\\(s\\) resolved',min:1,unit:'sources resolved'});
});
test('supplemental compact/statement-first composition prepares pages only after native and adopted source writers drain',async t=>{
  const f=fixture(t);f.activate();
  f.put('research/math-imports.json',{version:1,files:[]});writeStatementPolicy(f.ctx.repo,'demo','physics');
  const stage=compactStages(f.ctx,step2PrerequisiteStages(f.native,f.ctx,f.hooks),'physics')[2];
  const original=readFileSync(join(f.ctx.repo,'library/math/first.md'),'utf8');
  const inflight=new Map([['native',{meta:{stage:stage.id}}]]);
  const executor:any={inflight,adoptedUnits:()=>new Set(),stageStatus:()=>({unitsDone:true})};
  const ctx={...f.ctx,doctor:false};
  await stage.onProgress!({ctx,stage,executor});
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/math/third.md'),'utf8'),/page_layout/);
  inflight.clear();await stage.onProgress!({ctx,stage,executor:{...executor,adoptedUnits:()=>new Set(['3'])}});
  assert.doesNotMatch(readFileSync(join(ctx.repo,'library/math/third.md'),'utf8'),/page_layout/);
  await stage.onProgress!({ctx,stage,executor});
  assert.match(readFileSync(join(ctx.repo,'library/math/third.md'),'utf8'),/page_layout: compact-v1/);
  assert.equal(readFileSync(join(ctx.repo,'library/math/first.md'),'utf8'),original);
  assert.deepEqual(stage.gates!(f.ctx).slice(-2).map(gate=>gate.id),['statement-first','page-layout']);
});

test('supplemental hold preserves original Step-1 blocker bytes and records its own generation',async t=>{
  const f=fixture(t);f.activate();const stage=step2PrerequisiteStages(f.native,f.ctx,f.hooks)[2];
  const original='Immutable original Step-1 blocker history.\n';f.put('research/demo-step1-blockers.json',original);
  const result=await stage.onHold!({ctx:f.ctx,stage,failure:{id:'actual-supplement-failure',ok:false,why:'Actual supplemental source obligation remains unresolved.'}} as any);
  assert.equal(readFileSync(join(f.ctx.repo,'research/demo-step1-blockers.json'),'utf8'),original);
  const packet=JSON.parse(readFileSync(join(f.ctx.repo,'research/demo-prerequisite-1-blockers.json'),'utf8'));
  assert.equal(packet.stage,'2-prerequisite-construct-1');assert.match(result.owner.reason,/Supplemental prerequisite construction held/);
});
