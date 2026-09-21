import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';
import { tmpdir } from 'node:os';
import { step7Stages } from '../stages/mathlib.step7.mts';
import { validateStages } from '../src/spec.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';

const gate=(id:string,argv:string[])=>({id,argv});
function fixture() {
  const repo=mkdtempSync(join(tmpdir(),'step7-stages-'));
  const ctx:any={repo,run:'demo',dispatchDir:join(repo,'research/demo-dispatch'),coversMap:{},stageRounds:{},stageFailures:{},config:{}};
  mkdirSync(join(repo,'research/demo-step7-v2'),{recursive:true});
  writeFileSync(join(repo,'research/demo-step7-v2/frontier.json'),JSON.stringify({batches:[{id:'1',items:['thm-a']},{id:'2',items:['thm-b']}]}));
  const stages=step7Stages({gate,repoWide:()=>[gate('precheck',['node','precheck'])],contractGates:()=>[gate('proof-contract',['node','contracts'])],
    ledgerGate:()=>gate('defect-ledger',['node','ledger']),closureGate:()=>gate('judge-closure',['node','closure']),auditorCreatedGate:()=>gate('auditors',['node','auditors'])});
  return {repo,ctx,stages,stage:(id:string)=>stages.find(s=>s.id===id),close:()=>rmSync(repo,{recursive:true,force:true})};
}
test('Step 7 exposes all ten phases with one adjudicator per batch and exactly three owner units',()=>{
  const f=fixture();try {
    assert.deepEqual(f.stages.map(s=>s.id),['7-scope','7.1-adjudicate','7.2-impact','7.3-certify','7.4-rejudge','7.5-adjudicate','7.6-impact','7.7-certify','7.8-gate','7.9-repair','7.10-gate']);
    for(const id of ['7.1-adjudicate','7.5-adjudicate'])assert.deepEqual(f.stage(id).units(f.ctx),['1','2']);
    for(const id of ['7.2-impact','7.6-impact','7.9-repair']) {assert.deepEqual(f.stage(id).units(f.ctx),['1','2','3']);assert.equal(f.stage(id).modelProfile,MODEL_PROFILE_NAMES.solXHigh);}
    for(const id of ['7.3-certify','7.7-certify'])assert.equal(f.stage(id).plan(f.ctx)[0].role,'tool');
    const freeze={id:'7-freeze',label:'freeze',units:()=>['all'],pattern:/freeze/,plan:()=>[],gates:()=>[gate('freeze',['node','check'])]};
    assert.deepEqual(validateStages([...f.stages,freeze],f.ctx),[]);
  }finally{f.close();}
});
test('new rounds cannot adopt old judge, review, impact, certification or gate receipts',()=>{
  const f=fixture();try {
    for(const id of ['7.4-rejudge','7.5-adjudicate','7.6-impact','7.7-certify','7.9-repair','7.10-gate']) {
      const s=f.stage(id),old=s.pattern(f.ctx),next=s.pattern({...f.ctx,stageRounds:{[id]:2}});
      assert.notEqual(old.source,next.source);
      const oldName=old.source.replace(/^\^/,'').replace(/\$$/,'');
      assert.ok(!next.test(oldName));
    }
  }finally{f.close();}
});
test('owner repair continuations remain in the repair stage with unique results and serial prerequisites',()=>{
  const f=fixture();try {
    writeFileSync(join(f.repo,'research/demo-step7-v2/impact-initial-1-progress.json'),JSON.stringify({passes:['impact-initial','impact-initial-pass-2']}));
    const s=f.stage('7.2-impact'),units=s.units(f.ctx);
    assert.deepEqual(units,['1','2','3','impact-initial-pass-2:1','impact-initial-pass-2:2','impact-initial-pass-2:3']);
    assert.deepEqual(s.unitPrerequisites(f.ctx,units[3]),['3']);
    assert.ok(s.pattern(f.ctx).test('alpha-repair-step7-v2-impact-initial-pass-2-r1-u1.result.json'));
    assert.ok(!isAbsolute(s.artifacts(f.ctx,units[3])));
    assert.ok(s.artifacts(f.ctx,units[3]).endsWith('step7-v2-impact-initial-pass-2-r1-u1.json'));
    writeFileSync(join(f.repo,'research/demo-step7-v2/impact-initial-1.json'),'{}');
    const plan=s.plan(f.ctx,[units[3]])[0];
    assert.ok(!isAbsolute(plan.task));
    assert.deepEqual(plan.covers,[units[3]]);
    assert.equal(plan.label,'step7-v2-impact-initial-pass-2-r1-u1');
    for(const stage of f.stages)if(stage.artifacts)assert.ok(!isAbsolute(stage.artifacts(f.ctx,'1')));
    let scanned=false;
    s.onProgress({ctx:f.ctx,stage:s,executor:{inflight:new Map([['writer',{meta:{stage:s.id}}]]),hasAdoptedWork:()=>false,unitsComplete:()=>{scanned=true;return new Set(units);}}});
    assert.equal(scanned,false,'a live writer prevents repair-closure evaluation');
  }finally{f.close();}
});
test('7.7 repeats only on a complete above-threshold report; gate failures preserve the repair loop',()=>{
  const f=fixture();try {
    const path=join(f.repo,'research/demo-step7-v2/threshold-1.json');
    writeFileSync(path,JSON.stringify({belowThreshold:false,errors:[]}));
    assert.deepEqual(f.stage('7.7-certify').route({ctx:f.ctx,outcome:'passed'}),{next:'7.4-rejudge'});
    writeFileSync(path,JSON.stringify({belowThreshold:true,errors:[]}));
    assert.equal(f.stage('7.7-certify').route({ctx:f.ctx,outcome:'passed'}),null);
    writeFileSync(path,JSON.stringify({belowThreshold:true,errors:['missing adjudication']}));
    assert.throws(()=>f.stage('7.7-certify').route({ctx:f.ctx,outcome:'passed'}),/invalid fatal/);
    assert.deepEqual(f.stage('7.8-gate').route({outcome:'failed'}),{next:'7.9-repair'});
    assert.deepEqual(f.stage('7.8-gate').route({outcome:'passed'}),{next:'7-freeze'});
    assert.deepEqual(f.stage('7.10-gate').route({outcome:'failed'}),{next:'7.9-repair'});
    assert.equal(f.stage('7.10-gate').route({outcome:'passed'}),null);
    assert.deepEqual(f.stage('7.8-gate').gates(f.ctx).map((g:any)=>g.id),f.stage('7.10-gate').gates(f.ctx).map((g:any)=>g.id));
  }finally{f.close();}
});
