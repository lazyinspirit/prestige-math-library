import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolve,join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const repo=process.cwd(),proposal=resolve(dirname(fileURLToPath(import.meta.url)),'..'),run='inverse-problems-knot-theory-all-109-2026-10-19';
const {validateUnmanifestedRepairDecision}=await import(pathToFileURL(join(repo,'tools/step3-owner-unmanifested-draft-context.mjs')));
const source=fs.readFileSync(join(proposal,'tools/step3-scope.mjs'),'utf8');
const evidenceBinds=source.slice(source.indexOf('    const evidenceBinds ='),source.indexOf('    const ownerSharedDefect ='));
const prior=source.slice(source.indexOf('    const priorAppliedRepair ='),source.indexOf('    const referenced ='));
const predicate=source.slice(source.indexOf('          if(repairedUnmanifestedContext && (decision.verdict'),source.indexOf('          if (unchangedRequiredPageContext',source.indexOf('          if(repairedUnmanifestedContext && (decision.verdict')));
assert.match(predicate,/priorAppliedRepair\(decision,target,\[row\]\)/);
const check=Function('ownerEvidence','run','R','sha256','hashValue','readFileSync','existsSync','decision','target','row',`const closedOwnerRepairs=new Set(['fixed','narrowed','dropped']);${evidenceBinds}${prior}const errors=[];const error=(...x)=>errors.push(x);const repairedUnmanifestedContext=true;const defectId=row.defect_id;const group={label:'batch-97'};${predicate}return errors;`);
const sha=b=>createHash('sha256').update(b).digest('hex'),canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x,hash=x=>sha(JSON.stringify(canon(x))??'undefined');
function fixture(t){
 const root=fs.mkdtempSync(join(tmpdir(),'prior-repaired97-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const read=n=>JSON.parse(fs.readFileSync(join(proposal,n))),entry=read('prior-applied-repair.entry.proposed.json'),row=read('original-ledger-row.json'),target=read('actual-target.json'),decision=read('actual-decision.json');
 const carriers=JSON.parse(fs.readFileSync(resolve(proposal,'../current-typed-carriers.json'))).rows,carrier=carriers.find(x=>x.obligation==='reader:97:2').carrier;
 const copy=p=>{fs.mkdirSync(dirname(join(root,p)),{recursive:true});fs.copyFileSync(join(repo,p),join(root,p))};
 for(const p of new Set([entry.current_path,entry.original_owner_artifact.path,...entry.evidence.map(x=>x.path),...['current_source','current_consumer','application'].map(k=>decision.independent_repair_review[k].path)]))copy(p);
 const owner={version:1,run,prior_applied_repairs:[entry]};
 const put=(p,x)=>{fs.mkdirSync(dirname(join(root,p)),{recursive:true});fs.writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x))};
 const guard=()=>{try{validateUnmanifestedRepairDecision(root,run,carrier,decision)}catch{return false}return check(owner,run,(...p)=>join(root,...p),sha,hash,fs.readFileSync,fs.existsSync,decision,target,row).length===0};
 return{root,entry,row,target,decision,owner,carrier,guard,put};
}
test('exact actual applied whole-Proof repair binds unchanged original native fatal/fixed row',t=>{
 const f=fixture(t),before=JSON.stringify(f.row);assert.equal(f.entry.ledger_row_sha256,hash(f.row));assert.equal(f.entry.target_sha256,hash(f.target));assert.equal(Object.hasOwn(f.target,'batch'),false);const nativeScope=JSON.parse(fs.readFileSync(join(repo,`research/${run}-step3-scope-97.json`)));assert.deepEqual(f.target,{...nativeScope.reader_findings.find(x=>x.obligation==='reader:97:2'),route:'reader'});assert.ok(f.guard());assert.equal(JSON.stringify(f.row),before);assert.equal(typeof f.row.adjudication_ref[0],'string');
});
test('original typed-reference branch remains sufficient without prior-repair evidence',t=>{
 const f=fixture(t);f.owner.prior_applied_repairs=[];f.row.adjudication_ref.push({path:`research/${run}-alpha-batch-97-3a-decisions.json`,obligation:'reader:97:2'});assert.ok(f.guard());
});
for(const [name,change]of Object.entries({
 'no existing prior entry and no typed reference':f=>{f.owner.prior_applied_repairs=[]},
 'wrong ledger row binding':f=>{f.entry.ledger_row_sha256='a'.repeat(64)},
 'wrong exact current target':f=>{f.entry.target_sha256='a'.repeat(64)},
 'different obligation':f=>{f.entry.obligation='reader:97:1'},
 'missing current source':f=>{fs.unlinkSync(join(f.root,f.entry.current_path))},
 'current source changed':f=>{fs.appendFileSync(join(f.root,f.entry.current_path),'Unlogged successor')},
 'wrong original artifact hash':f=>{f.entry.original_owner_artifact.sha256='a'.repeat(64)},
 'missing original application':f=>{fs.unlinkSync(join(f.root,f.entry.original_owner_artifact.path))},
 'application lacks before/after raw binding':f=>{f.put(f.entry.original_owner_artifact.path,{run});f.entry.original_owner_artifact.sha256=sha(fs.readFileSync(join(f.root,f.entry.original_owner_artifact.path)))},
 'no-op alleged repair':f=>{f.entry.before_raw_sha256=f.entry.after_raw_sha256},
 'wrong before proof literal':f=>{f.entry.before_literal+='Unlogged addition'},
 'wrong after proof literal':f=>{f.entry.after_literal='Nonexistent proof'},
 'wrong after raw hash':f=>{f.entry.after_raw_sha256='a'.repeat(64)},
 'evidence reference changed':f=>{f.entry.evidence[0].sha256='a'.repeat(64)},
 'nonfatal decision':f=>{f.decision.verdict='confirmed_nonfatal'},
 'incomplete confidence':f=>{f.decision.repair_confidence=0.5},
 'nonfatal original row even with updated row binding':f=>{f.row.severity='nonfatal';f.entry.ledger_row_sha256=hash(f.row)},
 'narrowed disposition even with updated row binding':f=>{f.row.disposition='narrowed';f.entry.ledger_row_sha256=hash(f.row)},
 'wrong original defect ID':f=>{f.decision.defect_ids=['different-original-defect']},
 'independent full proof review missing':f=>{f.decision.independent_repair_review.full_current_proof_read=false},
 'independent affected consumer review missing':f=>{f.decision.independent_repair_review.affected_consumer_use_reviewed=false},
 'independent original gap resolutions missing':f=>{f.decision.independent_repair_review.original_gap_resolutions=[]},
}))test('reject '+name,t=>{const f=fixture(t);change(f);assert.equal(f.guard(),false)});
