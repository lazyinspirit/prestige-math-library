import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,rmSync,existsSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {sourceIdenticalReversionContinuity as check} from './step3-owner-source-identical-reversion.mjs';
const base=resolve('research/machine-learning-all-101-2026-10-19-owner-step3-du-reversion/your-proposal');
const available=existsSync(join(base,'fixture-inputs.json')),actual={skip:!available};
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
function fixture(t){const root=mkdtempSync(join(tmpdir(),'du-reversion-'));t.after(()=>rmSync(root,{recursive:true,force:true}));cpSync(join(base,'fixture'),root,{recursive:true});const x=JSON.parse(readFileSync(join(base,'fixture-inputs.json')));return {...x,root,check(){return check(root,this.run,this.decision,this.target,this.before,this.current,this.entry);},json(path,fn){const p=join(root,path),d=JSON.parse(readFileSync(p));fn(d);writeFileSync(p,JSON.stringify(d));}};}
test('no registration preserves strict default without any file access',()=>assert.equal(check('/nonexistent','r',{id:'i',obligation:'touched:1:i'}, {},{}, {},undefined),false));
test('actual native reversion admits only exact added complete native risk review',actual,t=>{const f=fixture(t);assert.equal(f.check(),true);assert.equal(f.decision.verdict,'reverted_change');});
const changes={
 'wrong policy':f=>f.entry.policy+='other',
 'wrong version':f=>f.entry.version=2,
 'unknown field':f=>f.entry.waiver=true,
 'wrong run':f=>f.run='other',
 'wrong owner':f=>f.entry.owner_identity='/root/other',
 'execution coverage adopted':f=>f.entry.independent_execution_coverage_adopted=true,
 'wrong native verdict':f=>f.decision.verdict='accepted_repair',
 'wrong route':f=>f.decision.route='flagged',
 'wrong target':f=>f.target.id='lem-other',
 'stabilized target':f=>f.target.stabilized=true,
 'new item':f=>f.target.added=true,
 'changed native evidence':f=>f.decision.evidence+=' new',
 'changed native ledger':f=>f.decision.defect_ids=['unrelated'],
 'pre carrier altered':f=>f.before.item_sha256='0'.repeat(64),
 'current carrier altered':f=>f.current.contract_sha256='0'.repeat(64),
 'target binding altered':f=>f.entry.target_sha256='0'.repeat(64),
 'changed source':f=>writeFileSync(join(f.root,'items/'+f.decision.id+'.md'),readFileSync(join(f.root,'items/'+f.decision.id+'.md'),'utf8')+'\n'),
 'changed manifest':f=>f.json(`research/${f.run}-batch-45.pages.json`,d=>d.find(p=>p.items.some(x=>x.id===f.decision.id)).items.find(x=>x.id===f.decision.id).title+=' changed'),
 'contract field changed besides review':f=>f.json(`research/${f.run}-batch-45.proof-contracts.json`,d=>d.contracts[f.decision.id].derivations[0].claim+=' changed'),
 'review missing':f=>f.json(`research/${f.run}-batch-45.proof-contracts.json`,d=>delete d.contracts[f.decision.id].risk_review),
 'review incomplete':f=>f.json(`research/${f.run}-batch-45.proof-contracts.json`,d=>d.contracts[f.decision.id].risk_review.status='pending'),
 'review different notes even rebound carrier':f=>{f.json(`research/${f.run}-batch-45.proof-contracts.json`,d=>{d.contracts[f.decision.id].risk_review.notes+=' changed';f.current.contract_sha256=hash(d.contracts[f.decision.id]);f.entry.current_carrier_sha256=hash(f.current);});},
 'missing original snapshot':f=>rmSync(join(f.root,f.entry.pre_snapshot.path)),
 'forged snapshot with updated supplied hash':f=>{f.json(f.entry.pre_snapshot.path,d=>d.manifest=[]);f.entry.pre_snapshot.sha256=createHash('sha256').update(readFileSync(join(f.root,f.entry.pre_snapshot.path))).digest('hex');},
 'symlink source':f=>{const p=join(f.root,'items/'+f.decision.id+'.md');rmSync(p);symlinkSync(join(f.root,f.entry.pre_source.path),p);},
};
for(const[name,mutate]of Object.entries(changes))test('reject '+name,actual,t=>{const f=fixture(t);mutate(f);assert.equal(f.check(),false);});
for(const key of ['native_result','native_prompt','native_report','native_assignment','native_decisions','pre_snapshot','pre_source','pre_manifest','pre_contract'])test('reject altered authenticated '+key,actual,t=>{const f=fixture(t);writeFileSync(join(f.root,f.entry[key].path),readFileSync(join(f.root,f.entry[key].path),'utf8')+'\n');assert.equal(f.check(),false);});
test('normal root restamping changes only subject hash, never inherited native semantics',actual,t=>{const f=fixture(t);f.decision.subject_sha256=hash(f.current);assert.equal(f.check(),true);});
