import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';
import { tmpdir } from 'node:os';
import { step5Stages } from '../stages/mathlib.step5.mts';
import { validateStages } from '../src/spec.mts';
import { MODEL_PROFILE_NAMES } from '../../physics-support/models.mjs';
import { freezeFrontier } from '../../physics-support/step5-rounds.mjs';

const gate=(id:string,argv:string[])=>({id,argv});
function fixture() {
  const repo=mkdtempSync(join(tmpdir(),'step5-stages-'));
  const ctx:any={repo,run:'demo',dispatchDir:join(repo,'research/demo-dispatch'),coversMap:{},stageRounds:{},stageFailures:{},config:{}};
  mkdirSync(join(repo,'research/demo-step5-v2'),{recursive:true});
  mkdirSync(join(repo,'items'), { recursive: true });
  for(const id of ['thm-a','thm-b'])writeFileSync(join(repo,'items',`${id}.md`),'fixture');
  writeFileSync(join(repo,'research/demo-step5-v2/frontier.json'),JSON.stringify(freezeFrontier({run:'demo',batches:[{id:'1',items:['thm-a']},{id:'2',items:['thm-b']}]})));
  const stages=step5Stages({gate,repoWide:()=>[gate('precheck',['node','precheck'])],contractGates:()=>[gate('proof-contract',['node','contracts'])],
    ledgerGate:()=>gate('defect-ledger',['node','ledger']),closureGate:()=>gate('judge-closure',['node','closure']),auditorCreatedGate:()=>gate('auditors',['node','auditors'])});
  return {repo,ctx,stages,stage:(id:string)=>stages.find(s=>s.id===id),close:()=>rmSync(repo,{recursive:true,force:true})};
}
test('Step 5 exposes all ten phases with one adjudicator per batch and exactly three owner units',()=>{
  const f=fixture();try {
    assert.deepEqual(f.stages.map(s=>s.id),['5-scope','5.1-adjudicate','5.2-impact','5.3-certify','5.4-rejudge','5.5-adjudicate','5.6-impact','5.7-certify','5.8-gate','5.9-repair','5.10-gate']);
    for(const id of ['5.1-adjudicate','5.5-adjudicate']){
      assert.deepEqual(f.stage(id).units(f.ctx),['1','2']);
      assert.equal(f.stage(id).modelProfile,MODEL_PROFILE_NAMES.sol61High);
    }
    for(const id of ['5.2-impact','5.6-impact','5.9-repair']) {
      const stage=f.stage(id);assert.deepEqual(stage.units(f.ctx),['1','2','3']);assert.equal(stage.modelProfile,MODEL_PROFILE_NAMES.sol61High);
      assert.equal(stage.concurrency,3);
      for(const unit of ['1','2','3'])assert.deepEqual(stage.unitPrerequisites(f.ctx,unit),[]);
    }
    for(const id of ['5.3-certify','5.7-certify'])assert.equal(f.stage(id).plan(f.ctx)[0].role,'tool');
    const freeze={id:'5-freeze',label:'freeze',units:()=>['all'],pattern:/freeze/,plan:()=>[],gates:()=>[gate('freeze',['node','check'])]};
    assert.deepEqual(validateStages([...f.stages,freeze],f.ctx),[]);
  }finally{f.close();}
});
test('new rounds cannot adopt old judge, review, impact, certification or gate receipts',()=>{
  const f=fixture();try {
    for(const id of ['5.4-rejudge','5.5-adjudicate','5.6-impact','5.7-certify','5.9-repair','5.10-gate']) {
      const s=f.stage(id),old=s.pattern(f.ctx),next=s.pattern({...f.ctx,stageRounds:{[id]:2}});
      assert.notEqual(old.source,next.source);
      const oldName=old.source.replace(/^\^/,'').replace(/\$$/,'');
      assert.ok(!next.test(oldName));
    }
  }finally{f.close();}
});
test('the initial page-only child has one native Sol high repair unit and no repeat-stage route',()=>{
  const f=fixture();try{
    const phase='page-correction-initial',unit=phase+':1';
    writeFileSync(join(f.repo,`research/demo-step5-v2/${phase}-1-progress.json`),'{}');
    writeFileSync(join(f.repo,'research/demo-step5-v2/initial-1.json'),'{}');
    const stage=f.stage('5.1-adjudicate'),job=stage.plan(f.ctx,[unit])[0];
    assert.deepEqual(stage.units(f.ctx),['1','2',unit]);
    assert.equal(job.role,'alpha-repair');assert.equal(job.profile,MODEL_PROFILE_NAMES.sol61High);
    assert.deepEqual(job.covers,[unit]);assert.equal(job.label,'step5-v2-page-correction-initial-r1-u1');
    assert.equal(job.task,'research/demo-step5-v2/step5-v2-page-correction-initial-r1-u1.task.md');
    assert.equal(stage.pattern(f.ctx).test('alpha-repair-'+job.label+'.result.json'),true);
    assert.equal(stage.pattern(f.ctx).test('alpha-repair-step5-v2-page-correction-initial-r1-u2.result.json'),false);
    assert.equal(f.stage('5.5-adjudicate').pattern(f.ctx).test('alpha-repair-'+job.label+'.result.json'),false);
    assert.deepEqual(f.stage('5.5-adjudicate').units(f.ctx),['1','2']);
  }finally{f.close();}
});
test('an authenticated page-parent handoff pauses once before the next gate snapshot',()=>{
  const f=fixture();try{
    for(const id of ['thm-a','thm-b'])writeFileSync(join(f.repo,'items',id+'.md'),`---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA valid claim.\n`);
    writeFileSync(join(f.repo,'research/demo-step5-v2/page-correction-initial-1-progress.json'),JSON.stringify({version:1,run:'demo',phase:'initial',round:1}));
    writeFileSync(join(f.repo,'research/demo-step5-v2/initial-1-collected.json'),JSON.stringify({version:2,run:'demo',phase:'initial',round:1,evidence:{},statement_events:[]}));
    const stage=f.stage('5.1-adjudicate'),handoff:any={},notices:any[]=[];
    const executor:any={inflight:new Map(),hasAdoptedWork:()=>false,unitsComplete:()=>new Set(stage.units(f.ctx)),
      state:{paused:false,stage:()=>handoff},reporter:{notify:(...args:any[])=>notices.push(args)}};
    stage.onProgress({ctx:f.ctx,executor,stage});
    assert.equal(executor.state.paused,true);assert.equal(notices.length,1);
    assert.match(notices[0][1],/Root closes canonical findings before the next gate snapshot/);
    executor.state.paused=false;
    stage.onProgress({ctx:f.ctx,executor,stage});
    assert.equal(executor.state.paused,false);assert.equal(notices.length,1);
  }finally{f.close();}
});
test('owner continuations run parallel siblings after the preceding pass drains',()=>{
  const f=fixture();try {
    writeFileSync(join(f.repo,'research/demo-step5-v2/impact-initial-1-progress.json'),JSON.stringify({passes:['impact-initial','impact-initial-pass-2']}));
    const s=f.stage('5.2-impact'),units=s.units(f.ctx);
    assert.deepEqual(units,['1','2','3','impact-initial-pass-2:1','impact-initial-pass-2:2','impact-initial-pass-2:3']);
    for(const unit of units.slice(3))assert.deepEqual(s.unitPrerequisites(f.ctx,unit),['1','2','3']);
    assert.ok(s.pattern(f.ctx).test('alpha-repair-step5-v2-impact-initial-pass-2-r1-u1.result.json'));
    assert.ok(!isAbsolute(s.artifacts(f.ctx,units[3])));
    assert.ok(s.artifacts(f.ctx,units[3]).endsWith('step5-v2-impact-initial-pass-2-r1-u1.json'));
    writeFileSync(join(f.repo,'research/demo-step5-v2/impact-initial-1.json'),'{}');
    const plan=s.plan(f.ctx,[units[3]])[0];
    assert.ok(!isAbsolute(plan.task));
    assert.deepEqual(plan.covers,[units[3]]);
    assert.equal(plan.label,'step5-v2-impact-initial-pass-2-r1-u1');
    for(const stage of f.stages)if(stage.artifacts)assert.ok(!isAbsolute(stage.artifacts(f.ctx,'1')));
    let scanned=false;
    s.onProgress({ctx:f.ctx,stage:s,executor:{inflight:new Map([['writer',{meta:{stage:s.id}}]]),hasAdoptedWork:()=>false,unitsComplete:()=>{scanned=true;return new Set(units);}}});
    assert.equal(scanned,false,'a live writer prevents repair-closure evaluation');
  }finally{f.close();}
});
test('doctor can inspect every future Step 5 command before prerequisite evidence exists',()=>{
  const f=fixture();try {
    rmSync(join(f.repo,'research/demo-step5-v2'),{recursive:true,force:true});
    const ctx={...f.ctx,doctor:true};
    for(const stage of f.stages){
      assert.doesNotThrow(()=>stage.plan?.(ctx,stage.units(ctx))??[],stage.id);
      assert.doesNotThrow(()=>stage.gates?.(ctx)??[],`${stage.id} gates`);
    }
    const freeze={id:'5-freeze',label:'freeze',units:()=>['all'],pattern:/freeze/,plan:()=>[],gates:()=>[gate('freeze',['node','check'])]};
    assert.deepEqual(validateStages([...f.stages,freeze],f.ctx),[],
      'start checks future gate descriptors before the Step 5 frontier exists');
  }finally{f.close();}
});

test('outside maintenance has separate tasks and waits between parallel frontier waves',()=>{
  const f=fixture();try{
    const phase='impact-initial',pack='pack-0001';
    mkdirSync(join(f.repo,'research/demo-consumer-maintenance'), { recursive: true });
    writeFileSync(join(f.repo,`research/demo-consumer-maintenance/${pack}.json`),JSON.stringify({lanes:['1','2','3'].map(lane=>({lane,task:`research/demo-consumer-maintenance/${pack}-lane-${lane}.md`,report:`research/demo-consumer-maintenance/${pack}-lane-${lane}-report.json`}))}));
    writeFileSync(join(f.repo,'research/demo-step5-v2/impact-initial-1.json'),'{}');
    writeFileSync(join(f.repo,'research/demo-step5-v2/impact-initial-1-progress.json'),JSON.stringify({passes:[phase,`${phase}-pass-2`],work_order:[{kind:'frontier',phase},{kind:'maintenance',id:pack},{kind:'frontier',phase:`${phase}-pass-2`}]}));
    const stage=f.stage('5.2-impact'),units=stage.units(f.ctx);
    assert.deepEqual(units.slice(3,6),['1','2','3'].map(lane=>`maintenance:${pack}:${lane}`));
    for(const unit of units.slice(3,6))assert.deepEqual(stage.unitPrerequisites(f.ctx,unit),units.slice(0,3));
    for(const unit of units.slice(6))assert.deepEqual(stage.unitPrerequisites(f.ctx,unit),units.slice(3,6));
    const jobs=stage.plan(f.ctx,units.slice(3,6));
    assert.equal(jobs.length,3);
    for(const job of jobs){
      assert.equal(job.brief,'briefs/consumer-maintenance.md');
      assert.match(job.task,/consumer-maintenance\/pack-/);
      assert.ok(stage.pattern(f.ctx).test(`alpha-repair-${job.label}.result.json`));
      assert.equal(job.profile,MODEL_PROFILE_NAMES.sol61High);
    }
  }finally{f.close();}
});
test('5.7 repeats until a complete zero-defect report; gate failures preserve the repair loop',()=>{
  const f=fixture();try {
    const path=join(f.repo,'research/demo-step5-v2/threshold-1.json');
    writeFileSync(path,JSON.stringify({belowThreshold:false,fatalCount:2,originalCount:100,errors:[]}));
    assert.deepEqual(f.stage('5.7-certify').route({ctx:f.ctx,outcome:'passed'}),{next:'5.4-rejudge'});
    writeFileSync(path,JSON.stringify({belowThreshold:true,fatalCount:0,originalCount:100,errors:[]}));
    assert.equal(f.stage('5.7-certify').route({ctx:f.ctx,outcome:'passed'}),null);
    for(const fatalCount of [1,2,3]){
      writeFileSync(path,JSON.stringify({belowThreshold:true,fatalCount,originalCount:100,errors:[]}));
      assert.deepEqual(f.stage('5.7-certify').route({ctx:f.ctx,outcome:'passed'}),{next:'5.4-rejudge'});
    }
    writeFileSync(path,JSON.stringify({belowThreshold:true,fatalCount:1,originalCount:100,errors:['missing adjudication']}));
    assert.throws(()=>f.stage('5.7-certify').route({ctx:f.ctx,outcome:'passed'}),/invalid fatal/);
    assert.deepEqual(f.stage('5.8-gate').route({outcome:'failed'}),{next:'5.9-repair'});
    assert.deepEqual(f.stage('5.8-gate').route({outcome:'passed'}),{next:'5-freeze'});
    assert.deepEqual(f.stage('5.10-gate').route({outcome:'failed'}),{next:'5.9-repair'});
    assert.equal(f.stage('5.10-gate').route({outcome:'passed'}),null);
    assert.deepEqual(f.stage('5.8-gate').gates(f.ctx).map((g:any)=>g.id),f.stage('5.10-gate').gates(f.ctx).map((g:any)=>g.id));
  }finally{f.close();}
});
