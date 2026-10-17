import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,existsSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {step5Stages} from '../stages/mathlib.step5.mts';
import {gateReviewSnapshot} from '../src/owner-gate-recertification.mjs';
import {freezeFrontier} from '../../physics-support/step5-rounds.mjs';
import {validateCurrentHistoricalManifestGate} from '../../physics-support/step5-historical-manifest.mjs';
const hash=(bytes:any)=>createHash('sha256').update(bytes).digest('hex');
function fixture(t:any,{fail=false}={}){
  const root=mkdtempSync(join(tmpdir(),'precert-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const stateDir=join(root,'.physics-autopilot/demo'),dir=join(root,'research/demo-step5-v2');
  for(const p of [stateDir,join(stateDir,'owner-gate-history'),dir,join(root,'items'),join(root,'library/test'),join(root,'tools')])mkdirSync(p,{recursive:true});
  const save=(p:string,x:any)=>writeFileSync(p,JSON.stringify(x,null,2)+'\n'),read=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
  const code=join(root,'tools/workflow.mjs'),marker=join(root,'battery-ran');writeFileSync(code,'// original native workflow\n');
  writeFileSync(join(root,'items/def-a.md'),'---\nid: def-a\nkind: definition\nstatus: draft\ndeps: []\n---\n## Definition\nA precise definition.\n');
  writeFileSync(join(root,'library/test/page-a.md'),'---\npage: page-a\nstatus: draft\n---\nA page.\n');
  save(join(root,'research/demo-batch-1.pages.json'),[{id:'page-a',category:'test',requires:[],items:[{id:'def-a',deps:[]}]}]);
  save(join(dir,'frontier.json'),freezeFrontier({run:'demo',batches:[{id:'1',items:['def-a']}]}));
  save(join(dir,'owner-historical-manifest-request.json'),{}); // Stage only tests presence; certification authenticates the actual binding separately.
  const ctx:any={repo:root,run:'demo',config:{repo:root,run:'demo',stateDir,ownerGateRecertification:true}};
  const gates=['physics-content','frontier-dependency-ledger','step5-wave-evidence'].map((id,i)=>({id,ownerReviewInputs:[code],argv:['node','-e',`require('fs').appendFileSync(${JSON.stringify(marker)},${JSON.stringify(id+'\n')});process.exit(${fail&&i===1?1:0})`]}));
  const snapshot=gateReviewSnapshot(ctx,gates,['5.2-impact']);
  const now=Date.now(),time=(n:number)=>new Date(now+n).toISOString();
  const receipt=(request:any)=>({version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:request.snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt:request.createdAt,reviewedAt:new Date().toISOString(),items:request.snapshot.items.map((row:any)=>({...row,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence:'Checked current formatting and complete canonical headings.'},metadata:{verdict:'pass',evidence:'Checked current identity, manifest and dependency metadata.'}}))});
  const original=join(stateDir,'owner-gate-history/original.json');
  const request={version:2,attempt:'original',createdAt:time(-9000),consumedAt:time(-3000),snapshot};
  const oldReceipt=receipt(request);oldReceipt.reviewStartedAt=time(-8000);oldReceipt.reviewedAt=time(-4000);save(original,{request,receipt:oldReceipt});
  const originalBytes=readFileSync(original),state={run:'demo',stage:'5.3-certify',stages:{'5.2-impact':{enteredAt:time(-10000),gatesPassedAt:time(-2000)},'5.3-certify':{enteredAt:time(-1000)}},dispatches:{}};save(join(stateDir,'state.json'),state);
  writeFileSync(code,'// genuine changed native workflow code\n');
  const gate=(id:string,argv:string[])=>({id,argv}),stages=step5Stages({gate,repoWide:()=>[],contractGates:()=>[],ledgerGate:()=>gate('ledger',['true']),closureGate:()=>gate('closure',['true']),auditorCreatedGate:()=>gate('auditor',['true'])});
  const stage=stages.find((s:any)=>s.id==='5.3-certify'),notices:any[]=[],events:any[]=[];
  const executor:any={inflight:new Map(),hasAdoptedWork:()=>false,liveDispatchLabels:()=>[],stages:[{id:'5.2-impact',gates:()=>gates},stage],state:{paused:false},reporter:{notify:(...x:any[])=>notices.push(x),event:(...x:any[])=>events.push(x)}};
  return {root,stateDir,ctx,stage,executor,gates,marker,code,original,originalBytes,save,read,notices,events,
    progress:()=>stage.onProgress({ctx,executor,stage}),receipt:()=>{const r=read(join(stateDir,'owner-gate-request.json'));save(join(stateDir,'owner-gate-receipt.json'),receipt(r));return r;}};
}
test('changed native code holds for a fresh Root pass then runs all three actual gates before certification',async t=>{
  const f=fixture(t);assert.throws(()=>validateCurrentHistoricalManifestGate(f.root,'demo','impact-initial',1),/current metadata gate input changed/);
  await f.progress();assert.equal(f.executor.state.paused,true);assert.equal(existsSync(f.marker),false);assert.match(f.notices[0][1],/Fresh pre-certification/);
  const request=f.receipt();assert.deepEqual(request.snapshot.stages,['5.3-certify']);assert.equal(request.snapshot.battery.length,3);
  f.executor.state.paused=false;await f.progress();assert.equal(f.executor.state.paused,false);
  assert.equal(readFileSync(f.marker,'utf8'),f.gates.map(g=>g.id+'\n').join(''));assert.equal(f.events.length,3);
  const evidence=validateCurrentHistoricalManifestGate(f.root,'demo','impact-initial',1);assert.ok(evidence[f.original]);
  const pointer=f.read(join(f.stateDir,'pre-certification-impact-initial-1.json')),record=f.read(pointer.record.path);
  assert.equal(pointer.record.sha256,hash(readFileSync(pointer.record.path)));assert.deepEqual(record.results.map((x:any)=>x.id),f.gates.map(g=>g.id));
  assert.deepEqual(readFileSync(f.original),f.originalBytes);assert.equal(f.stage.plan(f.ctx)[0].role,'tool');
  await f.progress();assert.equal(f.events.length,3,'successful native preparation replays without rerunning gates');
  writeFileSync(f.code,'// later changed workflow code\n');assert.throws(()=>validateCurrentHistoricalManifestGate(f.root,'demo','impact-initial',1),/current metadata gate input changed/);
  await f.progress();assert.equal(f.executor.state.paused,true);assert.equal(f.events.length,3);assert.notEqual(f.read(join(f.stateDir,'owner-gate-request.json')).attempt,request.attempt);
});
test('a failed native pre-cert battery retains diagnostics and requires a fresh owner attempt on retry',async t=>{
  const f=fixture(t,{fail:true});await f.progress();const first=f.receipt();f.executor.state.paused=false;
  await assert.rejects(f.progress,/fresh native pre-certification predecessor battery failed/);
  assert.equal(f.events.length,2);assert.equal(existsSync(join(f.stateDir,'pre-certification-impact-initial-1.json')),false);
  assert.deepEqual(readFileSync(f.original),f.originalBytes);
  await f.progress();assert.equal(f.executor.state.paused,true);assert.equal(f.events.length,2);assert.notEqual(f.read(join(f.stateDir,'owner-gate-request.json')).attempt,first.attempt);
});
test('incomplete composed batteries and active writers cannot produce native preparation',async t=>{
  const f=fixture(t);f.executor.inflight.set('native-writer',{});await f.progress();assert.equal(existsSync(join(f.stateDir,'owner-gate-request.json')),false);
  f.executor.inflight.clear();f.gates.pop();await assert.rejects(f.progress,/complete composed predecessor battery/);assert.equal(existsSync(f.marker),false);
});
for(const kind of ['missing-result','failed-result','skipped-result'])test(`native preparation replay rejects ${kind} even when its pointer is rehashed`,async t=>{
  const f=fixture(t);await f.progress();f.receipt();f.executor.state.paused=false;await f.progress();
  const pointerPath=join(f.stateDir,'pre-certification-impact-initial-1.json'),pointer=f.read(pointerPath),record=f.read(pointer.record.path);
  if(kind==='missing-result')record.results.pop();else if(kind==='failed-result')record.results[0].ok=false;else record.results[0].skipped=true;
  f.save(pointer.record.path,record);pointer.record.sha256=hash(readFileSync(pointer.record.path));f.save(pointerPath,pointer);
  assert.throws(()=>validateCurrentHistoricalManifestGate(f.root,'demo','impact-initial',1),/omitted or failed a predecessor gate/);
});
