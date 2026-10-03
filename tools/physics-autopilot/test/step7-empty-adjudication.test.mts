import { spawnSync } from './fixture-process.mts';
import { copyFixtureFile } from './fixture-io.mts';
import { mkdirSync as physicsMkdir } from 'node:fs';
import { dirname as physicsDirname } from 'node:path';
const copyFileSync = copyFixtureFile;
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync,copyFileSync as physicsCopyFile} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';

import {pathToFileURL} from 'node:url';
import {step7Stages} from '../stages/mathlib.step7.mts';
import {covered} from '../src/coverage.mts';
import {MODELS} from '../../physics-support/models.mjs';
import {REPO} from '../../physics-support/paths.mjs';
import {authorResultAllowed} from '../../physics-support/auditor-created-items.mjs';
import {prepareAdjudication,closeEmptyAdjudication,emptyAdjudicationAssignment,emptyAdjudicationLabel,
  workerReport,workerLabel,workflowDir,packPath,digest,validateReports,collect,reviewContextHashes} from '../../physics-support/step7-workflow.mjs';

const run='empty-fixture', h='a'.repeat(64);
const json=(path:string,value:any)=>writeFileSync(path,JSON.stringify(value,null,2)+'\n');
function fixture(phase='initial',round=1) {
  const root=mkdtempSync(join(tmpdir(),'step7-empty-'));
  mkdirSync(join(root,'research'), { recursive: true });mkdirSync(join(root,'items'), { recursive: true });mkdirSync(join(root,'research',`${run}-dispatch`), { recursive: true });
  const verdicts=['thm-owed','thm-empty'].map((id,index)=>({id,model:MODELS.sol.id,context_sha256:h,keep:index!==0}));
  for(const [index,id] of ['thm-owed','thm-empty'].entries()){
    writeFileSync(join(root,'items',`${id}.md`),`---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nFixture claim ${index}.\n`);
    json(join(root,'research',`${run}-batch-${index+1}.pages.json`),[{id:`page-${index+1}`,items:[{id,deps:[]}]}]);
  }
  writeFileSync(join(root,'research',`${run}-judge.jsonl`),verdicts.map(row=>JSON.stringify(row)).join('\n')+'\n');
  prepareAdjudication(root,run,'initial',1);
  if(phase==='repeat')json(join(workflowDir(root,run),`judge-${round}.json`),{verdicts});
  const pack=prepareAdjudication(root,run,phase,round);
  const ctx:any={repo:root,run,stageRounds:{'7.1-adjudicate':round,'7.5-adjudicate':round},stageFailures:{},coversMap:{},config:{}};
  const gate=(id:string,argv:string[])=>({id,argv});
  const stages=step7Stages({gate,repoWide:()=>[],contractGates:()=>[],ledgerGate:()=>gate('ledger',[]),closureGate:()=>gate('closure',[])});
  return {root,pack,ctx,stage:stages.find(row=>row.id===(phase==='initial'?'7.1-adjudicate':'7.5-adjudicate')),
    close:()=>rmSync(root,{recursive:true,force:true})};
}
function toolReceipt(f:any,overrides:any={}) {
  const label=emptyAdjudicationLabel(f.pack.phase,f.pack.round,'2');
  const path=join(f.root,'research',`${run}-dispatch`,`tool-${label}.result.json`);
  json(path,{role:'tool',label,run,covers:['2'],ok:true,written_by:'autopilot',ended_at:'2026-10-02T04:00:00Z',...overrides});
  return path;
}
function mathReport(f:any) {
  const p=f.pack,unit='1';
  json(workerReport(f.root,run,p.phase,p.round,unit),{run,phase:p.phase,round:p.round,unit,input_sha256:digest(p),
    decisions:p.assignments[unit].map((row:any)=>({...row,outcome:'false_positive',reason:'The complete assigned mathematical finding was examined and shown not to establish a defect.',uncertain:false,source_urls:[],familiar:true})),
    reviews:[{id:'thm-owed',disposition:'unaffected',...reviewContextHashes(f.root,['thm-owed'])['thm-owed'],reason:'The full mathematical claim and proof were reviewed against the rejected finding without edits.',uncertain:false,source_urls:[],familiar:true}],created_items:[],downstream:[]});
  const label=workerLabel(p.phase,p.round,unit);
  json(join(f.root,'research',`${run}-dispatch`,`alpha-adjudicate-${label}.result.json`),
    {run,role:'alpha-adjudicate',label,covers:[unit],ok:true,model:MODELS.sol.id,provider_effort:'xhigh'});
}

test('initial and repeat plans dispatch only genuinely empty adjudication units mechanically',()=>{
  for(const [phase,round] of [['initial',1],['repeat',2]] as const){
    const f=fixture(phase,round);try{
      const jobs=f.stage.plan(f.ctx,['1','2']);
      assert.equal(jobs[0].role,'alpha-adjudicate');assert.equal(jobs[0].job,'adjudication');
      assert.equal(jobs[1].role,'tool');assert.equal(jobs[1].job,'bookkeeping-mechanical');
      assert.deepEqual(jobs[1].covers,['2']);assert.equal(jobs[1].task,undefined);
      assert.ok(jobs[1].argv.includes('close-empty-adjudication'));assert.ok(jobs[1].argv.includes(digest(f.pack)));
      for(const job of jobs)assert.ok(f.stage.pattern(f.ctx).test(`${job.role}-${job.label}.result.json`));
      assert.ok(!f.stage.pattern({...f.ctx,stageRounds:{[f.stage.id]:round+1}}).test(`tool-${jobs[1].label}.result.json`));
      assert.ok(!emptyAdjudicationAssignment({...f.pack,phase:'gate'},'2'));
      assert.ok(!emptyAdjudicationAssignment({...f.pack,phase:'impact-initial'},'2'));
      for(const obligations of [{gateAssignments:{'2':[]}},{seeds:[]},{maintenance:[]},{created_items:[]}]){
        assert.ok(!emptyAdjudicationAssignment({...f.pack,...obligations},'2'));
      }
      // Exercise the exact planned command through the actual CLI in a fixture repo.
      const args=[...jobs[1].argv];args[1]=join(REPO,args[1]);
      const result=spawnSync(args[0],args.slice(1),{cwd:f.root,encoding:'utf8'});
      assert.equal(result.status,0,result.stderr);
      assert.match(result.stdout,/mechanical zero-work closure/);
      assert.equal(f.stage.plan(f.ctx,['2'])[0].role,'tool','interrupted receipt writing may resume its own mechanical report');
      const receipt=toolReceipt(f);
      assert.equal(authorResultAllowed(7,JSON.parse(readFileSync(receipt,'utf8'))),false,
        'a tool receipt is never mathematical author provenance');
      assert.deepEqual([...covered(join(f.root,'research',`${run}-dispatch`),f.stage.pattern(f.ctx))],['2']);
      mathReport(f);
      const collected=collect(f.root,run,phase,round);
      assert.equal(collected.decisions.length,1);assert.equal(collected.reviews.length,1);
      assert.deepEqual(collected.created_items,[]);assert.deepEqual(collected.ledger_updates,[]);
    }finally{f.close();}
  }
});

test('empty closure rejects wrong binding, nonempty assignments and changed frozen evidence',()=>{
  const f=fixture();try{
    for(const [badRun,phase,round,unit,hash] of [
      ['other','initial',1,'2',digest(f.pack)], [run,'repeat',1,'2',digest(f.pack)],
      [run,'initial',2,'2',digest(f.pack)], [run,'initial',1,'missing',digest(f.pack)],
      [run,'initial',1,'2',h], [run,'initial',1,'1',digest(f.pack)],
    ] as const)assert.throws(()=>closeEmptyAdjudication(f.root,badRun,phase,round,unit,hash));
    const malformed={...f.pack,run:'wrong'};json(packPath(f.root,run,'initial',1),malformed);
    assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(malformed)),/identity/);
    json(packPath(f.root,run,'initial',1),f.pack);
    const judgeInput=Object.keys(f.pack.input_evidence)[0];writeFileSync(judgeInput,'[]\n');
    assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(f.pack)),/evidence changed/);
    assert.ok(!existsSync(workerReport(f.root,run,'initial',1,'2')));
  }finally{f.close();}
});

test('empty closure checks actual frozen rejections and batch routing, beyond a claimed empty list',()=>{
  const f=fixture();try{
    const path=packPath(f.root,run,'initial',1);
    const misplaced={...f.pack,assignments:{'1':[],'2':f.pack.rejected}};
    json(path,misplaced);
    assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'1',digest(misplaced)),/wrong batch/);
    const omitted={...f.pack,assignments:{'1':[],'2':[]},rejected:[]};
    json(path,omitted);
    assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'1',digest(omitted)),/still owes adjudication/);
  }finally{f.close();}
});

test('mechanical reports reject decisions, creations, reviews and other claimed obligations',()=>{
  const f=fixture();try{
    const report=closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(f.pack));
    assert.equal(report.mathematical_review,false);assert.equal(report.completion,'mechanical-zero-work');
    assert.deepEqual(closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(f.pack)),report);
    mathReport(f);
    const mathematicalReport=JSON.parse(readFileSync(workerReport(f.root,run,'initial',1,'1'),'utf8'));
    assert.deepEqual(validateReports(f.pack,[mathematicalReport,report],f.pack.before).errors,[]);
    for(const field of ['decisions','reviews','created_items','downstream','ledger_updates','gate_resolutions']){
      const invalid={...report,[field]:[{}]};
      const result=validateReports(f.pack,[mathematicalReport,invalid],f.pack.before);
      assert.ok(result.errors.includes('invalid mechanical zero-work report'),field);
    }
    for(const overrides of [{run:'other'},{unit:'1'},{input_sha256:h},{phase:'repeat'},{round:2},
      {mathematical_review:true},{model:MODELS.sol.id},{supporting_evidence:{}}]){
      assert.ok(validateReports(f.pack,[mathematicalReport,{...report,...overrides}],f.pack.before).errors.length>0);
    }
    json(workerReport(f.root,run,'initial',1,'2'),{...report,created_items:[{id:'lem-injected'}]});
    assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(f.pack)),/invalid mechanical/);
    json(workerReport(f.root,run,'initial',1,'2'),report);mathReport(f);
    for(const overrides of [{run:'other'},{covers:['1']},{written_by:'model'},{model:MODELS.sol.id},{role:'alpha-adjudicate'}]){
      toolReceipt(f,overrides);
      assert.throws(()=>collect(f.root,run,'initial',1),/invalid mechanical zero-work dispatch/);
    }
    toolReceipt(f);
    assert.doesNotThrow(()=>collect(f.root,run,'initial',1));
  }finally{f.close();}
});

test('existing Alpha attempts and empty Alpha reports retain their original identity path',()=>{
  for(const artifact of ['attempt-1.prompt.md','result.json','log']){
    const f=fixture();try{
      const label=workerLabel('initial',1,'2'),path=join(f.root,'research',`${run}-dispatch`,`alpha-adjudicate-${label}.${artifact}`);
      writeFileSync(path,'existing evidence');
      assert.equal(f.stage.plan(f.ctx,['2'])[0].role,'alpha-adjudicate');
      assert.throws(()=>closeEmptyAdjudication(f.root,run,'initial',1,'2',digest(f.pack)),/preserve existing/);
      assert.equal(readFileSync(path,'utf8'),'existing evidence');
    }finally{f.close();}
  }
  const f=fixture();try{
    const label=workerLabel('initial',1,'2');
    json(workerReport(f.root,run,'initial',1,'2'),{run,phase:'initial',round:1,unit:'2',input_sha256:digest(f.pack),decisions:[],reviews:[],created_items:[],downstream:[]});
    assert.equal(f.stage.plan(f.ctx,['2'])[0].role,'alpha-adjudicate');
    json(join(f.root,'research',`${run}-dispatch`,`alpha-adjudicate-${label}.result.json`),
      {run,role:'alpha-adjudicate',label,covers:['2'],ok:true,model:MODELS.sol.id,provider_effort:'xhigh'});
    mathReport(f);assert.doesNotThrow(()=>collect(f.root,run,'initial',1));
  }finally{f.close();}
});

test('Step-7 stage reload refreshes workflow exports already cached by the live controller',async()=>{
  const root=mkdtempSync(join(tmpdir(),'step7-empty-reload-'));
  try{
    const dir=join(root,'tools/physics-autopilot/stages');mkdirSync(dir,{recursive:true});
    const entry=join(dir,'mathlib.step7.mts'),workflow=join(root,'tools/physics-support/step7-workflow.mjs');
    copyFileSync(new URL('../stages/mathlib.step7.mts',import.meta.url),entry);
    writeFileSync(join(root,'tools/physics-support/models.mjs'),'export const MODEL_PROFILE_NAMES={sol61High:"fixture-high"};');
    writeFileSync(join(root,'tools/physics-support/step7-frontier-gate.mjs'),'export const frontierGateBattery=()=>[];');
    const base=`
      export const prepareAdjudication=()=>({phase:'initial'});
      export const prepareImpact=()=>{},advanceImpact=()=>{},impactWork=()=>[],maintenanceLabel=()=>'',maintenancePack=()=>({});
      export const workerLabel=(phase,round,unit)=>'step7-v2-'+phase+'-r'+round+'-u'+unit;
      export const workerReport=(root)=>root+'/report.json',workflowDir=(root)=>root;
    `;
    // Cache the historical module with no newly introduced named exports.
    writeFileSync(workflow,base);await import(pathToFileURL(workflow).href);
    writeFileSync(workflow,base+`
      export const emptyAdjudicationAssignment=()=>false,digest=()=>'hash',emptyAdjudicationLabel=()=>'',hasAdjudicatorArtifacts=()=>false;
    `);
    const ctx={repo:root,run:'fixture',stageRounds:{}},options={gate:()=>({}),repoWide:()=>[],contractGates:()=>[]};
    const first=await import(`${pathToFileURL(entry).href}?test=first`);
    assert.equal(first.step7Stages(options).find((s:any)=>s.id==='7.1-adjudicate').plan(ctx,['2'])[0].role,'alpha-adjudicate');
    writeFileSync(workflow,base+`
      export const emptyAdjudicationAssignment=()=>true,digest=()=>'updated-hash',emptyAdjudicationLabel=()=>'empty-fixture',hasAdjudicatorArtifacts=()=>false;
    `);
    const second=await import(`${pathToFileURL(entry).href}?test=second`);
    const job=second.step7Stages(options).find((s:any)=>s.id==='7.1-adjudicate').plan(ctx,['2'])[0];
    assert.equal(job.role,'tool');assert.ok(job.argv.includes('updated-hash'));
  }finally{rmSync(root,{recursive:true,force:true});}
});
