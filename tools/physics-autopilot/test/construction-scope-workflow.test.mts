import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { batchInput, batchPlan, collectBatch, loopState, loopDir, accepted, loopPattern, prerequisiteBatches,
  consumers, checkBatches, resolveOwner, captureRepairControl, verifyRepairControl, batchPlans, repairCohort } from '../../physics-support/batch-scope-review.mjs';
import { stages, workflowRevision } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../physics-support/models.mjs';
import { assertCognitive } from '../src/roles.mts';
import { recordStep1, checkStep1 } from '../../physics-support/step1-decisions.mjs';
import { loadStep3 } from '../../physics-support/frontier-snapshot.mjs';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
import { prepareRepairWorkspace, repairWorkspacePath } from '../../scope-repair-workspace.mjs';

const json=(path:string,value:any)=>writeFileSync(path,JSON.stringify(value,null,2)+'\n');
function fixture(t:any){
  const repo=mkdtempSync(join(tmpdir(),'scope-loop-'));
  for(const dir of ['research','items','library/test','dispatch'])mkdirSync(join(repo,dir),{recursive:true});
  t.after(()=>rmSync(repo,{recursive:true,force:true}));
  mkdirSync(join(repo,'briefs/schemas'),{recursive:true});
  for(const name of ['scope-reviewer.md','scope-repairer.md','scope-owner-repairer.md'])writeFileSync(join(repo,'briefs',name),'Read the whole assigned batch.');
  json(join(repo,'briefs/schemas/batch-scope-review.json'),{type:'object'});
  const ctx:any={repo,run:'demo',dispatchDir:join(repo,'dispatch')};
  const item=(id:string,deps:string[],level:number)=>({id,kind:'lemma',title:id,deps,dependency_level:level});
  const pages:any[]=[
    {id:'pair-a',kind:'A',category:'test',title:'A',companion:'pair-a-examples',order:1,requires:[],items:[item('lem-a',[],0)]},
    {id:'pair-a-examples',kind:'B',category:'test',title:'A examples',order:2,requires:['pair-a'],items:[item('ex-a',['lem-a'],1)]},
    {id:'pair-b',kind:'A',category:'test',title:'B',companion:'pair-b-examples',order:3,requires:['pair-a'],items:[item('lem-b',['lem-a'],1)]},
    {id:'pair-b-examples',kind:'B',category:'test',title:'B examples',order:4,requires:['pair-b'],items:[item('ex-b',['lem-b'],2)]},
  ];
  const writeItem=(id:string,deps:string[],statement='Original statement',aliases:string[]=[],root=repo)=>{
    writeFileSync(join(root,'items',`${id}.md`),`---\nid: ${id}\nstatus: draft\ndeps: ${JSON.stringify(deps)}\naliases: ${JSON.stringify(aliases)}\n---\n\n## Statement\n${statement}\n\n## Proof\n1. Argument. [def] ∎\n`);
  };
  for(const page of pages){writeFileSync(join(repo,'library/test',`${page.id}.md`),`# ${page.title}\n`);for(const i of page.items)writeItem(i.id,i.deps);}
  for(const batch of ['1','2']){
    json(join(repo,'research',`demo-batch-${batch}.pages.json`),pages.slice((Number(batch)-1)*2,Number(batch)*2));
    json(join(repo,'research',`demo-batch-${batch}.coverage.json`),{pages:[]});
    json(join(repo,'research',`demo-batch-${batch}.proof-contracts.json`),{contracts:[]});
  }
  json(join(repo,'research/plan-spec.json'),{pages:pages.map(p=>({...p,items:[]}))});
  json(join(repo,'research/demo-alpha-groups.json'),[{label:'a',covers:['1','2']}]);
  return {ctx,repo,pages,writeItem};
}
function independentPair(f:any,batch='3') {
  const pages=[
    {id:`independent-${batch}`,kind:'A',category:'test',title:'Independent',companion:`independent-${batch}-examples`,order:5,requires:[],items:[{id:`lem-independent-${batch}`,kind:'lemma',deps:[],dependency_level:0}]},
    {id:`independent-${batch}-examples`,kind:'B',category:'test',title:'Independent examples',order:6,requires:[`independent-${batch}`],items:[{id:`ex-independent-${batch}`,kind:'example',deps:[`lem-independent-${batch}`],dependency_level:1}]},
  ];
  for(const page of pages){writeFileSync(join(f.repo,'library/test',`${page.id}.md`),`# ${page.title}\n`);for(const item of page.items)f.writeItem(item.id,item.deps);}
  json(join(f.repo,'research',`demo-batch-${batch}.pages.json`),pages);
  json(join(f.repo,'research',`demo-batch-${batch}.coverage.json`),{pages:[]});
  json(join(f.repo,'research',`demo-batch-${batch}.proof-contracts.json`),{contracts:[]});
}
function prepareBatch(f:any,batch:string){
  const p=batchPlan(f.ctx,batch);
  const prepared=loopState(f.repo,'demo',batch).prepared;
  if(p && prepared?.write_files)prepareRepairWorkspace(f.repo,'demo',batch,prepared);
  return p;
}
function repairRoot(f:any,batch='1'){
  prepareBatch(f,batch);return repairWorkspacePath(f.repo,'demo',batch,loopState(f.repo,'demo',batch).prepared);
}
function complete(f:any,batch:string,decision='accept',options:any={}){
  const p=prepareBatch(f,batch);assert.ok(p);
  const state=loopState(f.repo,'demo',batch),input=state.prepared;
  const row={version:1,run:'demo',batch,round:input.round,input_sha256:input.input_sha256,
    reviewed_items:input.inventory.items,reviewed_pages:input.inventory.pages,decision,
    reason:decision==='accept'?'Complete batch reviewed and obligations met.':'Batch needs local prerequisite repair.',
    findings:decision==='accept'?[]:[{id:input.inventory.items[0],type:decision==='escalate'?'prerequisite':'local',reason:'Missing justified prerequisite use.'}],
    consumer_checks:[],...options};
  json(join(f.repo,p.resultArtifact),row);
  json(join(f.ctx.dispatchDir,`${p.role}-${p.label}.result.json`),{run:'demo',role:p.role,label:p.label,covers:[batch],ok:true,session_id:`session-${p.role}`});
  return {p,row,state:collectBatch(f.ctx,batch)};
}

function readyScaffold(f:any,batch:string) {
  const pages=JSON.parse(readFileSync(join(f.repo,'research',`demo-batch-${batch}.pages.json`),'utf8'));
  for(const page of pages)for(const item of page.items)recordStep1(f.repo,{run:'demo',item:item.id,
    decision:'ready',owner:true,reason:'Fixture carrier inputs recorded for readiness currency.',dependencies:item.deps});
}

test('scope acceptance CLI executes and fails closed through the workspace tools symlink', t => {
  const f=fixture(t);
  symlinkSync(fileURLToPath(new URL('../../',import.meta.url)),join(f.repo,'tools'),'dir');
  const args=['tools/physics-support/batch-scope-review.mjs','check','--run','demo'];
  const held=spawnSync(process.execPath,args,{cwd:f.repo,encoding:'utf8'});
  assert.equal(held.status,1);
  assert.match(held.stderr,/Batch 1 lacks current whole-batch acceptance/);
  complete(f,'1');complete(f,'2');
  const accepted=spawnSync(process.execPath,args,{cwd:f.repo,encoding:'utf8'});
  assert.equal(accepted.status,0,accepted.stderr);
  assert.match(accepted.stdout,/2 batch\(es\) accepted/);
});

test('owner resolution CLI accepts a genuine hold through the workspace tools symlink', t => {
  const f=fixture(t);
  symlinkSync(fileURLToPath(new URL('../../',import.meta.url)),join(f.repo,'tools'),'dir');
  complete(f,'1','escalate');
  const result=spawnSync(process.execPath,['tools/physics-support/batch-scope-review.mjs',
    'owner-resolve','--run','demo','--batch','1','--decision','accept',
    '--reviewer','owner','--reason','Supplier and affected consumers repaired.'],
    {cwd:f.repo,encoding:'utf8'});
  assert.equal(result.status,0,result.stderr);
  const receipt=JSON.parse(result.stdout);
  assert.equal(receipt.decision,'accept');
  assert.equal(receipt.review_count,1);assert.equal(receipt.repair_count,0);
  assert.equal(loopState(f.repo,'demo','1').phase,'accepted');
  assert.equal(batchPlan(f.ctx,'1'),null);
});
function scaffoldComplete(f:any,batch:string) {
  // Supplier readiness is now enforced at the full Step-1 gate, independently
  // of initial-authoring scheduling and durable local output accounting.
  try {
    const snapshot=loadStep3(f.repo,'demo');
    const pages=snapshot.pages.filter(page=>page.batch===batch);
    const pageIds=new Set(pages.map(page=>page.id));
    const itemIds=new Set(pages.flatMap(page=>page.items.map(item=>item.id)));
    return !checkStep1(snapshot).work.some(row=>itemIds.has(row.item)||pageIds.has(row.page));
  } catch { return false; }
}

test('scaffold readiness across fresh contexts invalidates changed suppliers and receipt decisions',t=>{
  const f=fixture(t);readyScaffold(f,'1');readyScaffold(f,'2');
  assert.equal(scaffoldComplete(f,'2'),true);assert.equal(scaffoldComplete(f,'2'),true);
  f.writeItem('lem-a',[],'Changed supplier statement');assert.equal(scaffoldComplete(f,'2'),false);
  readyScaffold(f,'2');assert.equal(scaffoldComplete(f,'2'),true);
  recordStep1(f.repo,{run:'demo',item:'lem-b',decision:'escalated',owner:true,
    reason:'Exact unresolved fixture prerequisite.',dependencies:['lem-a']});
  assert.equal(scaffoldComplete(f,'2'),false);
  readyScaffold(f,'2');assert.equal(scaffoldComplete(f,'2'),true);
});

test('scaffold readiness invalidates creation and deletion of a previously missing dependency',t=>{
  const f=fixture(t);f.writeItem('lem-a',['lem-external']);readyScaffold(f,'1');
  assert.equal(scaffoldComplete(f,'1'),true);
  f.writeItem('lem-external',[],'Newly supplied prerequisite');assert.equal(scaffoldComplete(f,'1'),false);
  readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  rmSync(join(f.repo,'items/lem-external.md'));assert.equal(scaffoldComplete(f,'1'),false);
});

test('scaffold readiness rebuilds aliases on reassignment and canonical alias-file creation',t=>{
  const f=fixture(t);f.writeItem('lem-external',[],'External supplier',['external-alias']);
  f.writeItem('lem-a',['external-alias']);readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  f.writeItem('lem-external',[],'External supplier');f.writeItem('lem-other',[],'Replacement supplier',['external-alias']);
  assert.equal(scaffoldComplete(f,'1'),false);
  readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  f.writeItem('external-alias',[],'Canonical replacement');assert.equal(scaffoldComplete(f,'1'),false);
});

test('scaffold readiness invalidates ambiguous aliases introduced by an unrelated carrier',t=>{
  const f=fixture(t);f.writeItem('lem-external',[],'External supplier',['external-alias']);
  f.writeItem('lem-a',['external-alias']);readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  f.writeItem('lem-other',[],'Other supplier',['external-alias']);assert.equal(scaffoldComplete(f,'1'),false);
  assert.equal(scaffoldComplete(f,'1'),false, 'a failed alias build must not leave a usable partial index');
});

test('scaffold readiness invalidates manifest and planned supplier changes',t=>{
  const f=fixture(t);readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  const manifest=join(f.repo,'research/demo-batch-1.pages.json'),pages=JSON.parse(readFileSync(manifest,'utf8'));
  pages[0].requires=['outside-context'];json(manifest,pages);assert.equal(scaffoldComplete(f,'1'),false);
  const planFile=join(f.repo,'research/plan-spec.json'),plan=JSON.parse(readFileSync(planFile,'utf8'));
  plan.pages.push({id:'outside-context',kind:'P',order:0,items:[{id:'lem-planned',deps:[],statement:'Initial'}]});
  json(planFile,plan);f.writeItem('lem-a',['lem-planned']);readyScaffold(f,'1');assert.equal(scaffoldComplete(f,'1'),true);
  plan.pages.at(-1).items[0].statement='Changed';json(planFile,plan);assert.equal(scaffoldComplete(f,'1'),false);
});

test('whole-batch review -> repair -> whole-batch acceptance reuses roles and sessions',t=>{
  const f=fixture(t);const first=complete(f,'1','repair');assert.equal(first.state.phase,'repair');
  assert.equal(loopPattern(f.ctx,['1','2']).test(`${first.p.role}-${first.p.label}.result.json`),false);
  const repair=batchPlan(f.ctx,'1');assert.equal(repair.role,'scope-repairer');
  assert.equal(repair.job,'authoring');assert.equal(assertCognitive(repair.job),true);
  f.writeItem('lem-a',[],'Original statement');
  complete(f,'1');assert.equal(loopState(f.repo,'demo','1').repairs.length,1);
  const next=batchPlan(f.ctx,'1');assert.equal(next.role,'scope-reviewer');assert.equal(next.resumeSession,'session-scope-reviewer');
  const text=readFileSync(join(f.repo,next.task),'utf8');assert.match(text,/ENTIRE batch/);assert.ok(text.indexOf('lem-a (level 0)')<text.indexOf('ex-a (level 1)'));
  complete(f,'1');assert.equal(accepted(f.repo,'demo','1'),true);
  complete(f,'2');assert.equal(checkBatches(f.repo,'demo'),2);
});

test('two repairs and three whole-batch reviews exhaust durably across reload and owner resolution',t=>{
  const f=fixture(t);
  for(let round=0;round<2;round++){complete(f,'1','repair');complete(f,'1');}
  const third=complete(f,'1','repair');assert.equal(third.state.phase,'held');
  assert.equal(loopState(f.repo,'demo','1').reviews.length,3);assert.equal(loopState(f.repo,'demo','1').repairs.length,2);
  assert.equal(prepareBatch(f,'1').role,'scope-repairer');
  resolveOwner(f.repo,'demo','1',{decision:'accept',reason:'Owner independently resolved and checked the whole batch.',reviewer:'owner'});
  const stage:any=stages.find(s=>s.id==='2-scope-review');
  stage.onProgress({ctx:f.ctx,stage,executor:{inflight:new Map(),adoptedUnits:()=>new Set()}});
  assert.equal(accepted(f.repo,'demo','1'),true);
  assert.ok(existsSync(join(f.ctx.dispatchDir,'tool-scope-accepted-1.result.json')));
  assert.equal(loopState(f.repo,'demo','1').repairs.length,2);
});

test('scheduling state views observe holds, owner resolution and changed supplier bytes',t=>{
  const f=fixture(t),loop:any=stages.find(s=>s.id==='2-scope-review');
  assert.equal(loop.unitEligible(f.ctx,'1'),true);
  complete(f,'1','escalate');assert.equal(loop.unitEligible(f.ctx,'1'),true);
  resolveOwner(f.repo,'demo','1',{reviewer:'owner',reason:'Escalation resolved.'});
  assert.equal(loop.unitEligible(f.ctx,'1'),true);
  assert.match(loop.artifacts(f.ctx,'1'),/state\.json$/);
  f.writeItem('lem-a',[],'Changed supplier after acceptance');
  assert.match(loop.artifacts(f.ctx,'1'),/acceptance-missing$/);
});

test('owner resolution accepts current inputs without another review and preserves history',t=>{
  const f=fixture(t);complete(f,'1','escalate');
  const before=loopState(f.repo,'demo','1');
  f.writeItem('lem-a',[],'Repaired supplier statement');
  const receipt=resolveOwner(f.repo,'demo','1',{reviewer:'owner',reason:'Flagged supplier and affected consumers repaired.'});
  const after=loopState(f.repo,'demo','1');
  assert.equal(receipt.decision,'accept');assert.equal(after.phase,'accepted');
  assert.deepEqual(after.reviews,before.reviews);assert.deepEqual(after.repairs,before.repairs);
  assert.equal(batchPlan(f.ctx,'1'),null);assert.equal(accepted(f.repo,'demo','1'),true);
  assert.equal(receipt.sha256,batchInput(f.repo,'demo','1').sha256);
  f.writeItem('lem-a',[],'Later changed supplier');
  assert.equal(accepted(f.repo,'demo','1'),false);assert.equal(collectBatch(f.ctx,'1').phase,'held');
});

test('owner acceptance supersedes a historical continuation and its queued review',t=>{
  const f=fixture(t);complete(f,'1','escalate');
  const before=loopState(f.repo,'demo','1');
  const legacy={...before,phase:'review',owner_resolution:{decision:'continue'}};
  const path=join(loopDir(f.repo,'demo','1'),'state.json');json(path,legacy);
  batchPlan(f.ctx,'1');
  const receipt=resolveOwner(f.repo,'demo','1',{decision:'continue',reviewer:'owner',reason:'Resolved; no repeat review.'});
  assert.equal(receipt.decision,'accept');assert.equal(batchPlan(f.ctx,'1'),null);
  assert.equal(loopState(f.repo,'demo','1').prepared,undefined);
  assert.deepEqual(loopState(f.repo,'demo','1').reviews,before.reviews);
});

test('significant unmet prerequisites dispatch a medium Sol owner repair in a private workspace',t=>{
  const f=fixture(t);assert.equal(complete(f,'1','escalate').state.phase,'held');
  assert.equal(loopState(f.repo,'demo','1').repairs.length,0);
  const plan=prepareBatch(f,'1'),prepared=loopState(f.repo,'demo','1').prepared;
  assert.equal(plan.role,'scope-repairer');assert.equal(plan.profile,MODEL_PROFILE_NAMES.sol61Medium);
  assert.equal(prepared.phase,'owner');assert.equal(prepared.round,1);
  assert.equal(plan.brief,'briefs/scope-owner-repairer.md');
  const work=repairRoot(f);assert.notEqual(work,f.repo);
  const original=readFileSync(join(f.repo,'items/lem-a.md'),'utf8');
  writeFileSync(join(work,'items/lem-a.md'),original.replace('1. Argument.','1. Repaired argument.'));
  assert.equal(readFileSync(join(f.repo,'items/lem-a.md'),'utf8'),original);
  complete(f,'1');assert.equal(accepted(f.repo,'demo','1'),true);
  assert.match(readFileSync(join(f.repo,'items/lem-a.md'),'utf8'),/Repaired argument/);
  const state=loopState(f.repo,'demo','1');assert.equal(state.owner_repairs.length,1);
  assert.equal(state.reviews.length,1);assert.equal(state.repairs.length,0);
  assert.equal(batchPlan(f.ctx,'1'),null,'Owner completion accepts directly without a native review');
});

test('initial escalating review retains additional actual consumer observations as a hold',t=>{
  const f=fixture(t);
  const checks=[{id:'lem-b',decision:'repair',reason:'Outside consumer needs a typed supplier interface.'},
    {id:'ex-b',decision:'escalate',reason:'Indirect consumer requires owner repair.'}];
  const result=complete(f,'1','escalate',{consumer_checks:checks});
  assert.equal(result.state.phase,'held');assert.equal(result.state.reviews.length,1);
  assert.equal(result.state.repairs.length,0);assert.equal(accepted(f.repo,'demo','1'),false);
  assert.deepEqual(JSON.parse(readFileSync(join(f.repo,result.p.resultArtifact),'utf8')).consumer_checks,checks);
  assert.equal(prepareBatch(f,'1').role,'scope-repairer');
});

test('extra reviewer observations cannot invent consumers, duplicate checks or grant acceptance',t=>{
  const f=fixture(t);
  assert.throws(()=>complete(f,'1','escalate',{consumer_checks:[{id:'lem-missing',decision:'repair',reason:'Unknown.'}]}),/invalid extra observations/);
  assert.throws(()=>complete(f,'1','escalate',{consumer_checks:[{id:'lem-b',decision:'repair',reason:'One.'},{id:'lem-b',decision:'repair',reason:'Duplicate.'}]}),/invalid extra observations/);
  assert.throws(()=>complete(f,'1','accept',{consumer_checks:[{id:'lem-b',decision:'accept',reason:'Additional observation.'}]}),/invalid extra observations/);
  assert.equal(loopState(f.repo,'demo','1').reviews.length,0);
});

test('local repair requests preserve additional actual consumer observations without acceptance',t=>{
  const f=fixture(t);
  const checks=[{id:'lem-b',decision:'accept',reason:'Earlier supplier transfer is unchanged.'}];
  const result=complete(f,'1','repair',{consumer_checks:checks});
  assert.equal(result.state.phase,'repair');assert.equal(result.state.reviews.length,1);
  assert.equal(result.state.repairs.length,0);assert.equal(accepted(f.repo,'demo','1'),false);
  assert.deepEqual(JSON.parse(readFileSync(join(f.repo,result.p.resultArtifact),'utf8')).consumer_checks,checks);
});

test('partial batch inventories and significant findings disguised as routine repair are rejected',t=>{
  const f=fixture(t);
  assert.throws(()=>complete(f,'1','repair',{reviewed_items:['lem-a']}),/Incomplete batch/);
  assert.throws(()=>complete(f,'1','repair',{findings:[{id:'lem-a',type:'prerequisite',reason:'Significant gap.'}]}),/owner escalation/);
});

test('failed process output never advances the loop and stale supplier bytes invalidate acceptance',t=>{
  const f=fixture(t);const p=batchPlan(f.ctx,'1');
  json(join(f.ctx.dispatchDir,`${p.role}-${p.label}.result.json`),{run:'demo',role:p.role,covers:['1'],ok:false});
  assert.equal(collectBatch(f.ctx,'1').reviews.length,0);
  complete(f,'1');complete(f,'2');assert.equal(accepted(f.repo,'demo','2'),true);
  f.writeItem('lem-a',[],'Changed supplier statement');assert.equal(accepted(f.repo,'demo','2'),false);
  assert.equal(collectBatch(f.ctx,'2').phase,'held');
});

test('scheduling includes body-only logical dependencies and resolves aliases',t=>{
  const f=fixture(t);const b=f.pages.slice(2).map(p=>({...p,requires:p.kind==='A'?[]:['pair-b'],items:p.items.map((i:any)=>({...i,deps:i.id==='lem-b'?[]:i.deps}))}));
  json(join(f.repo,'research/demo-batch-2.pages.json'),b);
  f.writeItem('lem-a',[],'Supplier',['supplier-alias']);f.writeItem('lem-b',['supplier-alias']);
  assert.deepEqual(prerequisiteBatches(f.repo,'demo','2'),['1']);
  assert.throws(()=>batchPlan(f.ctx,'2'),/authored logical deps differ/);
  b[0].items[0].deps=['lem-a'];json(join(f.repo,'research/demo-batch-2.pages.json'),b);
  complete(f,'2');f.writeItem('lem-a',[],'Changed supplier',['supplier-alias']);assert.equal(accepted(f.repo,'demo','2'),false);
});

test('consumer tracing keeps indirect, old-edge, old-alias and also-restated consumers',t=>{
  const f=fixture(t);f.writeItem('lem-a',[],'Supplier',['old-alias']);f.writeItem('lem-b',['old-alias']);
  const before=batchPlan(f.ctx,'1');const original=loopState(f.repo,'demo','1').prepared.before_items;
  f.writeItem('lem-a',[],'Restated supplier');f.writeItem('lem-b',[],'Restated consumer');
  const impact=consumers(f.repo,['lem-a','lem-b'],original);
  assert.deepEqual(impact.map(x=>x.id),['ex-a','ex-b','lem-b']);
  assert.ok(impact.find(x=>x.id==='ex-b').paths.some((path:string[])=>path.join(',')==='lem-a,lem-b,ex-b'));
});

test('repair and following reviewer must check every direct and indirect consumer',t=>{
  const f=fixture(t);complete(f,'1','repair');const p=prepareBatch(f,'1');
  f.writeItem('lem-a',[],'Changed statement',[],repairRoot(f));
  assert.throws(()=>complete(f,'1'),/consumer checks/);
  const checks=consumers(f.repo,['lem-a']).map(row=>({id:row.id,decision:'accept',reason:'Current supplier use remains valid.'}));
  complete(f,'1','accept',{consumer_checks:checks});
  assert.throws(()=>complete(f,'1'),/consumer checks/);
  complete(f,'1','accept',{consumer_checks:checks});assert.equal(accepted(f.repo,'demo','1'),true);
});

test('batch-local additions update the full review inventory while original-item deletion is rejected',t=>{
  const f=fixture(t);complete(f,'1','repair');const work=repairRoot(f);
  const pages=JSON.parse(readFileSync(join(work,'research/demo-batch-1.pages.json'),'utf8'));
  pages[0].items.push({id:'lem-added',kind:'lemma',title:'Added',deps:[],dependency_level:0});
  pages[1].items=[{id:'ex-replacement',kind:'example',title:'Replacement',deps:['lem-added'],dependency_level:1}];
  json(join(work,'research/demo-batch-1.pages.json'),pages);f.writeItem('lem-added',[],'Original statement',[],work);f.writeItem('ex-replacement',['lem-added'],'Original statement',[],work);rmSync(join(work,'items/ex-a.md'));
  assert.throws(()=>complete(f,'1'),/Repair removed or rehomed an existing item/);
  assert.ok(existsSync(join(f.repo,'items/ex-a.md')),'Rejected private proposal must not remove canonical scope');
  pages[1].items.unshift({id:'ex-a',kind:'example',title:'Original',deps:['lem-a'],dependency_level:1});
  json(join(work,'research/demo-batch-1.pages.json'),pages);f.writeItem('ex-a',['lem-a'],'Original statement',[],work);
  complete(f,'1');const review=batchPlan(f.ctx,'1');assert.match(readFileSync(join(f.repo,review.task),'utf8'),/lem-added/);
  assert.deepEqual(loopState(f.repo,'demo','1').prepared.inventory.items,['lem-a','lem-added','ex-a','ex-replacement']);
  complete(f,'1');assert.equal(accepted(f.repo,'demo','1'),true);
});

test('outside-batch content and protected sibling round-counter edits cannot pass',t=>{
  const f=fixture(t);complete(f,'1','repair');const work=repairRoot(f);batchPlan(f.ctx,'2');
  const guard=captureRepairControl(f.repo,'demo','1'),path=join(loopDir(f.repo,'demo','2'),'state.json'),before=readFileSync(path);
  json(path,{version:1,run:'demo',batch:'2',reviews:[],repairs:[],phase:'accepted'});
  assert.throws(()=>verifyRepairControl(guard),/protected controller/);assert.ok(readFileSync(path).equals(before));
  rmSync(loopDir(f.repo,'demo','1'),{recursive:true,force:true});
  assert.throws(()=>verifyRepairControl(guard),/protected controller/);assert.equal(loopState(f.repo,'demo','1').phase,'repair');
  const future=join(loopDir(f.repo,'demo','3'),'state.json');mkdirSync(loopDir(f.repo,'demo','3'),{recursive:true});json(future,{phase:'accepted'});
  assert.throws(()=>verifyRepairControl(guard),/protected controller/);assert.equal(existsSync(future),false);
  repairRoot(f); // Recreate the private copy removed by the controller-deletion attack.
  rmSync(join(work,'items/lem-b.md'));f.writeItem('lem-b',['lem-a'],'Unauthorized outside edit',[],work);
  assert.throws(()=>complete(f,'1'),/outside assigned scope/);
  assert.doesNotMatch(readFileSync(join(f.repo,'items/lem-b.md'),'utf8'),/Unauthorized/);
});

test('six-step table has complete Step-1 carriers, Luna-max batch loop and no assignment/splice stages',t=>{
  const f=fixture(t);assert.match(workflowRevision,/six-step/);
  assert.deepEqual([...new Set(stages.map(s=>Number(s.id[0])))],[1,2,3,4,5,6]);
  assert.ok(!stages.some(s=>/assign|splice/.test(s.id)));
  const author:any=stages.find(s=>s.id==='1-scaffold'),loop:any=stages.find(s=>s.id==='2-scope-review');
  assert.equal(loop.modelProfile,MODEL_PROFILE_NAMES.lunaMax);
  assert.ok(author.artifacts(f.ctx,'1').includes('items/lem-a.md'));assert.ok(author.artifacts(f.ctx,'1').includes('library/test/pair-a.md'));
  const gates=loop.gates(f.ctx);assert.ok(gates.some((g:any)=>g.id==='sync-accepted-plan'));assert.ok(gates.some((g:any)=>g.id==='post-author-snapshot'));
  const gateOrder=gates.map((g:any)=>g.id);assert.ok(gateOrder.indexOf('batch-scope-review')<gateOrder.indexOf('sync-accepted-plan'));
});

test('real executor admits supplier and consumer reviews together and synchronizes the accepted plan',async t=>{
  const f=fixture(t),loop:any=stages.find(s=>s.id==='2-scope-review');
  const fake=join(f.repo,'worker.mjs');
  writeFileSync(fake,`import {readFileSync,writeFileSync,appendFileSync} from 'node:fs';import {join} from 'node:path';
    const [role,label,batch,artifact]=process.argv.slice(2),dir=join(process.cwd(),'research/demo-scope-review','batch-'+batch);
    const state=JSON.parse(readFileSync(join(dir,'state.json'),'utf8')),p=state.prepared;
    appendFileSync('dispatch/order.log',batch+'\\n');
    writeFileSync(artifact,JSON.stringify({version:1,run:'demo',batch,round:p.round,input_sha256:p.input_sha256,
      reviewed_items:p.inventory.items,reviewed_pages:p.inventory.pages,decision:'accept',reason:'All scope and prerequisites checked.',findings:[],consumer_checks:[]}));
    writeFileSync(join('dispatch',role+'-'+label+'.result.json'),JSON.stringify({run:'demo',role,label,covers:[batch],ok:true}));`);
  const sync=loop.gates(f.ctx).find((g:any)=>g.id==='sync-accepted-plan');
  const script=new URL('../../physics-support/splice-plan.mjs',import.meta.url).pathname;
  const scopeStage={...loop,gates:()=>[{id:'sync',argv:[process.execPath,script,'--run','demo','--all']}]};
  const stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,argv:[process.execPath,fake,'{role}','{label}','{covers}','{resultArtifact}'],
    concurrency:30,globalConcurrency:30,dispatchStaggerMs:0,adoptCommand:false,ownerGateRecertification:false,maxAttempts:2};
  const state=new State(statePath(stateDir));state.init('demo');
  const reporter=new Reporter({dir:stateDir,sink:()=>{}});
  const executor=new Executor({config,stages:[scopeStage],state,reporter,adapter:makeExecAdapter({argv:config.argv,cwd:f.repo})});
  let ownerResumed=false;
  for(let i=0;i<40&&!state.data.finishedAt;i++){
    await executor.tick();
    if(state.paused&&!ownerResumed){
      assert.equal(state.data.stages['2-scope-review'].gatesPassedAt,null);
      json(join(stateDir,'control.json'),{command:'resume'});ownerResumed=true;
    }
    await new Promise(r=>setTimeout(r,25));
  }
  await Promise.all([...executor.inflight.values()].map(row=>row.promise));
  assert.equal(accepted(f.repo,'demo','1'),true);assert.equal(accepted(f.repo,'demo','2'),true);
  assert.deepEqual(readFileSync(join(f.repo,'dispatch/order.log'),'utf8').trim().split('\n').sort(),['1','2']);
  const plan=JSON.parse(readFileSync(join(f.repo,'research/plan-spec.json'),'utf8'));
  assert.equal(plan.pages[0].items[0].id,'lem-a');assert.equal(plan.pages[2].items[0].id,'lem-b');
  assert.equal(ownerResumed,true);
});

test('an owner repair locks its affected consumer while a disjoint review dispatches',async t=>{
  const f=fixture(t);independentPair(f);complete(f,'1','escalate');
  const loop:any=stages.find(s=>s.id==='2-scope-review'),stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const state=new State(statePath(stateDir));state.init('demo');
  const reporter=new Reporter({dir:stateDir,sink:()=>{}}),started:string[]=[];
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,
    concurrency:2,globalConcurrency:2,dispatchStaggerMs:0,adoptCommand:false,ownerGateRecertification:false};
  const gates=()=>[{id:'scope-acceptance',argv:[process.execPath,fileURLToPath(new URL('../../physics-support/batch-scope-review.mjs',import.meta.url)),'check','--run','demo']}];
  const executor=new Executor({config,stages:[{...loop,gates}],state,reporter,
    adapter:{invoke:async(vars:any)=>{started.push(...String(vars.covers).split(','));return {code:0,stdout:'',stderr:'',timedOut:false};}} as any});
  const ready=executor.unitReadiness(loop,f.ctx,['1','2','3']);
  assert.deepEqual(ready.ready,['1','2','3']);
  assert.deepEqual(loop.exclusiveCohort(f.ctx,'1').sort(),['1','2']);
  await executor.tick();await Promise.all([...executor.inflight.values()].map(row=>row.promise));
  assert.deepEqual(started,['1','3'],JSON.stringify({blockers:state.data.blockers,spec:executor.specProblems}));
  assert.ok(state.data.blockers.some((b:any)=>b.key==='scope-owner:1'));
  assert.equal(loopState(f.repo,'demo','1').phase,'held');
  assert.equal(loop.unitEligible(f.ctx,'1'),true);
  assert.equal(executor.stageStatus(loop,f.ctx).unitsDone,false);
});

test('a consumer review starts before supplier acceptance while an unrelated review remains active',async t=>{
  const f=fixture(t);independentPair(f);
  const loop:any=stages.find(s=>s.id==='2-scope-review'),fake=join(f.repo,'worker.mjs');
  writeFileSync(fake,`import {readFileSync,writeFileSync,appendFileSync,existsSync,unlinkSync} from 'node:fs';import {join} from 'node:path';
    const [role,label,batch,artifact]=process.argv.slice(2),dir=join(process.cwd(),'research/demo-scope-review','batch-'+batch);
    const state=JSON.parse(readFileSync(join(dir,'state.json'),'utf8')),p=state.prepared;
    const wait=async(file)=>{const deadline=Date.now()+5000;while(!existsSync(file)){if(Date.now()>deadline)throw Error('Timed out waiting for '+file);await new Promise(r=>setTimeout(r,10));}};
    appendFileSync('dispatch/order.log',batch+'\\n');
    if(batch==='3'){writeFileSync('dispatch/independent-running','yes');await wait('dispatch/consumer-started');unlinkSync('dispatch/independent-running');}
    if(batch==='1'){writeFileSync('dispatch/supplier-running','yes');await wait('dispatch/consumer-started');}
    if(batch==='2'){await wait('dispatch/independent-running');await wait('dispatch/supplier-running');if(JSON.parse(readFileSync(join(process.cwd(),'research/demo-scope-review/batch-1/state.json'),'utf8')).phase==='accepted')throw Error('Consumer waited for supplier acceptance');writeFileSync('dispatch/consumer-started','yes');}
    writeFileSync(artifact,JSON.stringify({version:1,run:'demo',batch,round:p.round,input_sha256:p.input_sha256,
      reviewed_items:p.inventory.items,reviewed_pages:p.inventory.pages,decision:'accept',reason:'All scope and prerequisites checked.',findings:[],consumer_checks:[]}));
    writeFileSync(join('dispatch',role+'-'+label+'.result.json'),JSON.stringify({run:'demo',role,label,covers:[batch],ok:true}));`);
  const stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,argv:[process.execPath,fake,'{role}','{label}','{covers}','{resultArtifact}'],
    concurrency:30,globalConcurrency:30,dispatchStaggerMs:0,adoptCommand:false,ownerGateRecertification:false,maxAttempts:1};
  const state=new State(statePath(stateDir));state.init('demo');const reporter=new Reporter({dir:stateDir,sink:()=>{}});
  const gates=()=>[{id:'scope-acceptance',argv:[process.execPath,fileURLToPath(new URL('../../physics-support/batch-scope-review.mjs',import.meta.url)),'check','--run','demo']}];
  const executor=new Executor({config,stages:[{...loop,gates}],state,reporter,adapter:makeExecAdapter({argv:config.argv,cwd:f.repo})});
  for(let i=0;i<100&&!state.data.finishedAt;i++){await executor.tick();await new Promise(r=>setTimeout(r,20));}
  await Promise.all([...executor.inflight.values()].map(row=>row.promise));
  assert.ok(existsSync(join(f.repo,'dispatch/consumer-started')),JSON.stringify({blockers:state.data.blockers,spec:executor.specProblems}));
  for(const batch of ['1','2','3'])assert.equal(accepted(f.repo,'demo',batch),true);
});

test('Step 2 shares 30 slots across reviews and repairs and refills after one completion',async t=>{
  const f=fixture(t);complete(f,'1');complete(f,'2');
  const roots=Array.from({length:14},(_,i)=>String(40+i));
  const higher=Array.from({length:30},(_,i)=>String(3+i));
  for(const batch of [...roots,...higher]){
    independentPair(f,batch);
    if(higher.includes(batch)){
      const path=join(f.repo,`research/demo-batch-${batch}.pages.json`);
      const pages=JSON.parse(readFileSync(path,'utf8'));
      pages[0].requires=['pair-a'];pages[0].items[0].deps=['lem-a'];pages[0].items[0].dependency_level=1;
      pages[1].items[0].dependency_level=2;json(path,pages);
      f.writeItem(`lem-independent-${batch}`,['lem-a']);
    }
  }
  complete(f,higher[0],'escalate');complete(f,higher[1],'repair');
  const loop:any=stages.find(s=>s.id==='2-scope-review'),stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const state=new State(statePath(stateDir));state.init('demo');
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,
    globalConcurrency:100,dispatchStaggerMs:0,adoptCommand:false,ownerGateRecertification:false};
  const started:string[]=[],roles=new Map<string,string>(),finish=new Map<string,()=>void>();
  const executor=new Executor({config,stages:[loop],state,reporter:new Reporter({dir:stateDir,sink:()=>{}}),
    adapter:{invoke:async(vars:any)=>new Promise(resolve=>{
      const batch=String(vars.covers);started.push(batch);roles.set(batch,vars.role);prepareBatch(f,batch);
      finish.set(batch,()=>{
        const p=loopState(f.repo,'demo',batch).prepared;
        json(join(f.repo,vars.resultArtifact),{version:1,run:'demo',batch,round:p.round,input_sha256:p.input_sha256,
          reviewed_items:p.inventory.items,reviewed_pages:p.inventory.pages,decision:'accept',reason:'Current batch checked.',findings:[],consumer_checks:[]});
        json(join(f.ctx.dispatchDir,`${vars.role}-${vars.label}.result.json`),{run:'demo',role:vars.role,label:vars.label,covers:[batch],ok:true});
        resolve({code:0,stdout:'',stderr:'',timedOut:false});
      });
    })} as any});
  await executor.dispatchStage(loop,executor.ctx());
  const waitForStarts=async(count:number)=>{const deadline=Date.now()+3000;while(started.length<count&&Date.now()<deadline)await new Promise(r=>setTimeout(r,1));};
  await waitForStarts(30);
  assert.equal(executor.inflight.size,30);
  assert.deepEqual(started,higher);
  assert.equal(loop.concurrency,30);
  assert.equal(roles.get(higher[0]),'scope-repairer');assert.equal(roles.get(higher[1]),'scope-repairer');
  assert.equal(roles.get(higher[2]),'scope-reviewer');
  const done=[...executor.inflight.values()].find(row=>row.meta.covers.includes(higher[0]))!.promise;
  finish.get(higher[0])!();await done;await executor.tick();await waitForStarts(31);
  assert.equal(executor.inflight.size,30);assert.equal(started.at(-1),roots[0]);
  for(const [batch,end] of finish)if(batch!==higher[0])end();
  await Promise.all([...executor.inflight.values()].map(row=>row.promise));
  const adopted=higher;
  const lines=adopted.map(batch=>`123 node dispatch --run demo --role scope-reviewer --label scope-review-${batch}-0 --covers ${batch}`).join('\n');
  executor.config.adoptCommand="printf '%s' '"+lines+"'";
  const adoptionLoop={...loop,pattern:/^scope-reviewer-/};
  await executor.dispatchStage(adoptionLoop,executor.ctx());
  assert.equal(executor.inflight.size,0,'Thirty adopted agents leave no available slot');
});

test('Step 2 pauses once before its battery and retains the owner handoff across restart',async t=>{
  const f=fixture(t);complete(f,'1');complete(f,'2');
  const loop:any=stages.find(s=>s.id==='2-scope-review'),stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,adoptCommand:false,ownerGateRecertification:false};
  const state=new State(statePath(stateDir));state.init('demo');const reporter=new Reporter({dir:stateDir,sink:()=>{}});
  const marker=join(f.repo,'dispatch/battery-ran');
  const stage={...loop,gates:()=>[{id:'battery',argv:[process.execPath,'-e',`require('node:fs').writeFileSync(${JSON.stringify(marker)},'ran')`]}]};
  const make=(state:any)=>new Executor({config,stages:[stage],state,reporter,adapter:makeExecAdapter({argv:[process.execPath],cwd:f.repo})});
  const first=make(state);await first.tick();
  assert.equal(state.paused,true);assert.equal(existsSync(marker),false);
  assert.equal(state.data.stages[stage.id].gatesPassedAt,null);assert.equal(state.data.stages[stage.id].doneAt,null);
  const receipt=JSON.parse(readFileSync(join(f.repo,'research/demo-step2-owner-pass.json'),'utf8'));
  assert.deepEqual(receipt.dispositions.map((d:any)=>d.disposition),['accepted','accepted']);
  const restartedState=new State(statePath(stateDir)),restarted=make(restartedState);await restarted.tick();
  assert.equal(restartedState.paused,true);assert.equal(existsSync(marker),false);
  json(join(stateDir,'control.json'),{command:'resume'});await restarted.tick();
  assert.equal(existsSync(marker),true);assert.ok(restartedState.data.stages[stage.id].gatesPassedAt);
  assert.equal(JSON.parse(readFileSync(join(f.repo,'research/demo-step2-owner-pass.json'),'utf8')).at,receipt.at);
});

test('Step 2 hands exhausted owner repairs to the owner without blocking prerequisite consumers',async t=>{
  const f=fixture(t);independentPair(f);complete(f,'1','escalate');complete(f,'1','escalate');complete(f,'1','escalate');complete(f,'2');complete(f,'3');
  assert.equal(loopState(f.repo,'demo','1').owner_repairs.length,2);
  assert.throws(()=>batchPlan(f.ctx,'1'),/after two escalation repairs/);
  const loop:any=stages.find(s=>s.id==='2-scope-review'),stateDir=join(f.repo,'state');mkdirSync(stateDir);
  const state=new State(statePath(stateDir));state.init('demo');const reporter=new Reporter({dir:stateDir,sink:()=>{}});
  const config:any={run:'demo',repo:f.repo,stateDir,dispatchDir:f.ctx.dispatchDir,adoptCommand:false,ownerGateRecertification:false};
  const gates=()=>[{id:'scope-acceptance',argv:[process.execPath,fileURLToPath(new URL('../../physics-support/batch-scope-review.mjs',import.meta.url)),'check','--run','demo']}];
  const executor=new Executor({config,stages:[{...loop,gates}],state,reporter,adapter:makeExecAdapter({argv:[process.execPath],cwd:f.repo})});
  await executor.tick();
  assert.equal(state.paused,true);assert.equal(state.data.stages[loop.id].gatesPassedAt,null);
  const receipt=JSON.parse(readFileSync(join(f.repo,'research/demo-step2-owner-pass.json'),'utf8'));
  assert.deepEqual(receipt.dispositions.map((d:any)=>[d.batch,d.disposition]),[['1','owner-escalation'],['2','accepted'],['3','accepted']]);
  assert.equal(receipt.dispositions[1].reviewed,true);assert.equal(receipt.dispositions[1].blocked_by,undefined);
  assert.equal(receipt.dispositions[0].owner_repairs,2);assert.equal(loop.unitEligible(f.ctx,'1'),false);
  assert.equal(loopState(f.repo,'demo','1').reviews.length,1);assert.equal(loopState(f.repo,'demo','1').repairs.length,0);
  resolveOwner(f.repo,'demo','1',{reviewer:'owner',reason:'Supplier escalation and affected consumers resolved.'});
  assert.equal(batchPlan(f.ctx,'1'),null,'Resolved escalation must not dispatch another engine review');
  assert.equal(loopState(f.repo,'demo','1').reviews.length,1);
  json(join(stateDir,'control.json'),{command:'resume'});await executor.tick();
  assert.equal(state.paused,true,'Finishing resumed native loops still requires the owner battery decision');
  assert.equal(state.data.stages[loop.id].gatesPassedAt,null);
  assert.ok(existsSync(join(f.repo,'research/demo-step2-owner-battery-ready.json')));
  assert.equal(JSON.parse(readFileSync(join(f.repo,'research/demo-step2-owner-pass.json'),'utf8')).at,receipt.at);
  json(join(stateDir,'control.json'),{command:'resume'});await executor.tick();
  assert.ok(state.data.stages[loop.id].gatesPassedAt);
});


test('external supplier aliases bind acceptance to actual source bytes',t=>{
  const f=fixture(t);f.writeItem('lem-external',[],'External supplier',['external-alias']);
  const pages=JSON.parse(readFileSync(join(f.repo,'research/demo-batch-1.pages.json'),'utf8'));
  pages[0].items[0].deps=['external-alias'];json(join(f.repo,'research/demo-batch-1.pages.json'),pages);
  f.writeItem('lem-a',['external-alias']);complete(f,'1');assert.equal(accepted(f.repo,'demo','1'),true);
  f.writeItem('lem-external',[],'Changed external supplier',['external-alias']);assert.equal(accepted(f.repo,'demo','1'),false);
});

test('doctor describes empty planned batches without creating loop history',t=>{
  const f=fixture(t);for(const batch of ['1','2']){
    const pages=JSON.parse(readFileSync(join(f.repo,'research',`demo-batch-${batch}.pages.json`),'utf8'));
    json(join(f.repo,'research',`demo-batch-${batch}.pages.json`),pages.map((page:any)=>({...page,items:[]})));
  }
  const stage:any=stages.find(s=>s.id==='2-scope-review');
  const plans=stage.plan({...f.ctx,doctor:true},['1','2']);assert.equal(plans.length,2);
  assert.ok(plans.every((plan:any)=>plan.role==='scope-reviewer'));assert.equal(existsSync(loopDir(f.repo,'demo','1')),false);
});


test('owner repairs have a separate durable two-round cap and direct acceptance',t=>{
  const f=fixture(t);complete(f,'1','escalate');
  complete(f,'1','escalate');
  const second=prepareBatch(f,'1');assert.equal(loopState(f.repo,'demo','1').prepared.round,2);
  assert.equal(second.profile,MODEL_PROFILE_NAMES.sol61Medium);
  complete(f,'1');const state=loopState(f.repo,'demo','1');
  assert.equal(state.owner_repairs.length,2);assert.equal(state.reviews.length,1);assert.equal(state.repairs.length,0);
  assert.equal(accepted(f.repo,'demo','1'),true);assert.equal(batchPlan(f.ctx,'1'),null);
});

test('repair planning preserves disjoint write/read scopes and permits independent writers',t=>{
  const f=fixture(t);independentPair(f);complete(f,'1','repair');complete(f,'3','repair');
  const plans=batchPlans(f.ctx,['1','2','3'],30);
  assert.deepEqual(plans.map((plan:any)=>plan.covers[0]),['1','3']);
  assert.ok(plans.every((plan:any)=>plan.role==='scope-repairer'));
  assert.deepEqual(repairCohort(f.ctx,'1').sort(),['1','2']);
  assert.deepEqual(repairCohort(f.ctx,'2').sort(),['1','2']);
  assert.deepEqual(repairCohort(f.ctx,'3'),['3']);
  const one=repairRoot(f,'1'),three=repairRoot(f,'3');assert.notEqual(one,three);
  assert.ok(existsSync(join(one,'.git')));assert.ok(existsSync(join(three,'.git')));
});
