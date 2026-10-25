import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
const repo = resolve(import.meta.dirname, '../..');
const sha = b => createHash('sha256').update(b).digest('hex');
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'physics-partial-'));
  for (const dir of ['research/r-dispatch', 'research/r-archive', 'items', 'library/test', 'tools']) mkdirSync(join(root, dir), {recursive:true});
  symlinkSync(join(repo, 'tools/physics-support'), join(root,'tools/physics-support'));
  const put = (p,v) => writeFileSync(join(root,p), typeof v === 'string' || Buffer.isBuffer(v) ? v : JSON.stringify(v));
  const get = p => readFileSync(join(root,p));
  const attempt = (...args) => spawnSync(process.execPath,[join(root,'tools/physics-support/step3-scope.mjs'),...args,'--root',root,'--run','r'],{cwd:root,env:{...process.env,PHYSICS_REPO:root},encoding:'utf8'});
  const run = (...args) => {const r=attempt(...args);assert.equal(r.status,0,r.stderr+r.stdout);return r;};
  const id='lem-subject', source=`---\nid: ${id}\nkind: lemma\ndomain: mathematics\nstatus: draft\npipeline_run: r\ndeps: []\n---\n## Statement\nThe homotopy has a missing initial condition.\n\n## Proof\n1.1 Old proof.\n`;
  put(`items/${id}.md`,source);
  put('research/r-batch-1.pages.json',[{id:'page',category:'test',items:[{id,kind:'lemma',deps:[]}]}]);
  put('library/test/page.md','---\npage: page\n---\n');
  put('research/r-alpha-groups.json',[{label:'a',covers:['1']}]);
  put('research/r-batch-1.proof-contracts.json',{version:1,scope:[id],contracts:{[id]:{notes:'old'}}});
  put('research/r-archive/before.md',source); put('research/r-archive/before-contracts.json',get('research/r-batch-1.proof-contracts.json'));
  run('hash','--batch','1','--label','pre');
  put(`items/${id}.md`,source.replace('Old proof.','Repaired proof; the initial condition is proved.'));
  put('research/r-batch-1.proof-contracts.json',{version:1,scope:[id],contracts:{[id]:{notes:'repaired'}}});
  run('hash','--batch','1','--label','post');
  for(const [p,q] of [['after.md',`items/${id}.md`],['after-contracts.json','research/r-batch-1.proof-contracts.json'],['manifest.json','research/r-batch-1.pages.json']])put(`research/r-archive/${p}`,get(q));
  const finding={id,subject_type:'in-flight-item',consumer_id:null,observed_source:null,location:'Statement',defect:'ill-formed',evidence:'Missing initial condition in the unchanged public statement.',severity:'fatal'};
  const report={batch:'1',coverage_note:'All assigned items read, proof repaired and separate statement finding remains.',findings:[finding]};
  put('research/r-reader-findings-1.json',report);put('research/r-reader-1.md','Native proof repair and separate original finding.');
  put('research/r-archive/review.md','Root actual review of the unchanged public claim and proof-only reader repair.');
  const prefix='research/r-dispatch/reader-reader-1', prompt=`${prefix}.attempt-1.prompt.md`;
  const native={run:'r',role:'reader',label:'reader-1',attempt:1,evidence_tag:'.attempt-1',covers:['1'],ok:true,exit_code:0,process_exit_code:0,timed_out:false,ended_at:'2026-10-23T12:00:00Z',prompt:join(root,prompt),tail:JSON.stringify(report)};
  put(prompt,'Actual native reader task.');put(`${prefix}.result.json`,native);put(`${prefix}.attempt-1.result.json`,native);put(`${prefix}.attempt-1.last-message.json`,report);
  const inputs={},bind=path=>{const sha256=sha(get(path));inputs[path]=sha256;return {path,sha256};};
  const auth={version:1,run:'r',batch:'1',kind:'same-batch-proof-only-partial-reader-repair',authorized_by:'/root',mathematical_acceptance:false,edit_permission:false,
    reason:'Root reviewed the unchanged public claim and authentic proof-only native repair; the original fatal finding and separate touched obligation remain fully owed.',inputs,
    native_receipt:bind(`${prefix}.result.json`),native_attempt:bind(`${prefix}.attempt-1.result.json`),native_prompt:bind(prompt),native_last_message:bind(`${prefix}.attempt-1.last-message.json`),
    original_findings:bind('research/r-reader-findings-1.json'),reader_report:bind('research/r-reader-1.md'),review:bind('research/r-archive/review.md'),
    pre_snapshot:bind('research/r-step3-hash-1-pre.json'),post_snapshot:bind('research/r-step3-hash-1-post.json'),manifest:bind('research/r-archive/manifest.json'),
    before_contracts:bind('research/r-archive/before-contracts.json'),after_contracts:bind('research/r-archive/after-contracts.json'),
    findings:[{finding_index:1,original_finding:finding,before_source:bind('research/r-archive/before.md'),after_source:bind('research/r-archive/after.md')}]};
  const save=()=>put('research/r-step3-partial-reader-repair-1.json',auth);
  const collect=scope=>{put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Full current sources independently read.'});return attempt('collect','--batch','1');};
  return {root,id,put,get,auth,save,run,attempt,collect,bind,source,clean:()=>rmSync(root,{recursive:true,force:true})};
}

test('authentic own-batch proof repair retains original finding, touched obligation and full refuter coverage',()=>{const f=fixture();try{
  assert.match(f.attempt('split','--batch','1').stderr,/names changed carrier/);f.save();f.run('split','--batch','1');
  const scope=JSON.parse(f.get('research/r-step3-scope-1.json'));
  assert.deepEqual(scope.touched,[f.id]);assert.ok(scope.refuter_scope.includes(f.id));assert.equal(scope.reader_findings[0].obligation,'reader:1:1');
  assert.equal(f.collect(scope).status,0);f.run('check','--batch','1','--phase','split');
  // A genuine later Alpha edit does not rewrite or invalidate the original native history.
  f.put(`items/${f.id}.md`,f.get(`items/${f.id}.md`).toString().replace('missing initial condition','specified initial condition'));
  assert.equal(f.collect(scope).status,0);f.run('check','--batch','1','--phase','split');
  f.put('research/r-alpha-a-3a-decisions.json',{version:1,run:'r',group:'a',decisions:[]});
  const missing=f.attempt('check','--batch','1','--phase','adjudicate').stderr;
  assert.match(missing,new RegExp(`touched:1:${f.id}`));assert.match(missing,/reader:1:1/);
  scope.reader_findings[0].partial_reader_repair.authority.sha256='0'.repeat(64);f.put('research/r-step3-scope-1.json',scope);
  assert.notEqual(f.collect(scope).status,0);assert.notEqual(f.attempt('check','--batch','1','--phase','split').status,0);
}finally{f.clean();}});

for(const defect of ['fake-owner','stale-evidence','fake-attempt','changed-final','changed-claim','wrong-owner','current-change','contract-change','missing-input','lost-route','rewritten-finding','unopened'])test(`partial reader repair rejects ${defect}`,()=>{const f=fixture();try{
  if(defect==='fake-owner')f.auth.authorized_by='reader';
  if(defect==='stale-evidence')f.put('research/r-archive/before.md','changed');
  if(defect==='fake-attempt'){const p='research/r-dispatch/reader-reader-1.attempt-1.result.json';const n=JSON.parse(f.get(p));n.ok=false;f.put(p,n);f.auth.native_attempt=f.bind(p);}
  if(defect==='changed-final'){const p='research/r-dispatch/reader-reader-1.attempt-1.last-message.json';f.put(p,{findings:[]});f.auth.native_last_message=f.bind(p);}
  if(defect==='changed-claim'){const p='research/r-archive/before.md';f.put(p,f.source.replace('missing initial','different initial'));f.auth.findings[0].before_source=f.bind(p);}
  if(defect==='wrong-owner')f.put('research/r-batch-2.pages.json',[{id:'other',category:'test',items:[f.id]}]);
  if(defect==='current-change')f.put(`items/${f.id}.md`,f.source);
  if(defect==='contract-change')f.put('research/r-batch-1.proof-contracts.json',{contracts:{[f.id]:{}}});
  if(defect==='missing-input')delete f.auth.inputs[f.auth.native_prompt.path];
  f.save();
  if(['lost-route','rewritten-finding','unopened'].includes(defect)){f.run('split','--batch','1');const s=JSON.parse(f.get('research/r-step3-scope-1.json'));
    if(defect==='lost-route'){delete s.reader_findings[0].partial_reader_repair;f.put('research/r-step3-scope-1.json',s);assert.notEqual(f.collect(s).status,0);}
    else if(defect==='rewritten-finding'){s.reader_findings[0].evidence='Invented new observation';f.put('research/r-step3-scope-1.json',s);assert.notEqual(f.collect(s).status,0);}
    else {s.refuter_scope=s.refuter_scope.filter(x=>x!==f.id);assert.notEqual(f.collect(s).status,0);}
  }else assert.notEqual(f.attempt('split','--batch','1').status,0);
}finally{f.clean();}});

test('owner preparation binds exact authority and all immutable input bytes',async()=>{const f=fixture();try{
  const {gateReviewSnapshot}=await import('../physics-autopilot/src/owner-gate-recertification.mjs');
  rmSync(join(f.root,'tools/physics-support'));mkdirSync(join(f.root,'tools/physics-support'));
  f.put('tools/physics-support/step3-partial-reader-repair.mjs',readFileSync(join(repo,'tools/physics-support/step3-partial-reader-repair.mjs')));
  const snapshot=()=>gateReviewSnapshot({repo:f.root,run:'r',config:{}},[{id:'step3',argv:['node','tools/physics-support/step3-scope.mjs','check','--run','r']}],['3a-adjudicate']);
  const absent=snapshot();f.save();const before=snapshot();assert.notEqual(before.sha256,absent.sha256);
  const paths=new Set(before.inputs.map(r=>r.path));assert.ok(paths.has(join(f.root,'tools/physics-support/step3-partial-reader-repair.mjs')));for(const p of Object.keys(f.auth.inputs))assert.ok(paths.has(join(f.root,p)),p);
  f.put('tools/physics-support/step3-partial-reader-repair.mjs','changed helper');assert.notEqual(snapshot().sha256,before.sha256);
  const codeChanged=snapshot();f.put('research/r-archive/before.md','changed');assert.notEqual(snapshot().sha256,codeChanged.sha256);
}finally{f.clean();}});
