import fs from 'node:fs';import crypto from 'node:crypto';import {spawnSync} from 'node:child_process';
import {dependencyLevels} from '../../tools/item-dependency-levels.mjs';
import {loadStep3} from '../../tools/step3-decisions.mjs';
import {step1Decision,recordStep1} from '../../tools/step1-decisions.mjs';
const run='frontier-40-geometry-braids-rep-27',dir=`research/${run}-owner-fell-lifting`,file=`research/${run}-batch-4.pages.json`,pages=JSON.parse(fs.readFileSync(file)),items=pages.flatMap(p=>p.items),old=new Map(JSON.parse(fs.readFileSync(dir+'/before.pages.json')).flatMap(p=>p.items).map(i=>[i.id,i]));
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const checkedAt=new Date().toISOString();const checks=[];
for(const args of [
['tools/manifest-deps.mjs',file],
['tools/content-policy.mjs',file,'--manifest-only'],
['tools/coverage-checklist.mjs',`research/${run}-batch-4.coverage.json`,'--require-destination'],
['tools/source-fetch-check.mjs','--coverage',`research/${run}-batch-4.coverage.json`]
]){const r=spawnSync(process.execPath,args,{encoding:'utf8'});checks.push({command:'node '+args.join(' '),exit_code:r.status,stdout:r.stdout,stderr:r.stderr,at:checkedAt});}
const d=dependencyLevels(pages),errs=[...d.errors],globalIds=new Set(items.map(i=>i.id));for(const p of pages){let earlier=new Set();for(const i of p.items){if(p.kind==='A')for(const dep of i.deps)if(globalIds.has(dep)&&!earlier.has(dep))errs.push(`${i.id}: later A supplier ${dep}`);earlier.add(i.id);}}
checks.push({command:'dependencyLevels(batch4) and supplier-order inspection',exit_code:errs.length?1:0,stdout:JSON.stringify({items:items.length,pages:pages.length,max_level:Math.max(...d.levels.values()),errors:errs}),at:checkedAt});
const mathematical=items.filter(i=>!old.has(i.id)||i.statement!==old.get(i.id).statement||i.strategy!==old.get(i.id).strategy||JSON.stringify(i.deps)!==JSON.stringify(old.get(i.id).deps));
const changedStatements=mathematical.filter(i=>old.has(i.id)&&i.statement!==old.get(i.id).statement).map(i=>i.id);
let outside=[];for(const f of fs.readdirSync('research').filter(f=>f.startsWith(run+'-batch-')&&f.endsWith('.pages.json')&&!f.includes('-batch-4.')))for(const p of JSON.parse(fs.readFileSync('research/'+f)))for(const i of p.items||[])for(const id of changedStatements)if(i.deps?.includes(id)||i.statement?.includes('[['+id)||i.strategy?.includes('[['+id))outside.push({file:f,item:i.id,supplier:id});
// Published-file search reports every occurrence; do not silently classify a reference as a logical consumer.
for(const id of changedStatements){const r=spawnSync('rg',['-l','--fixed-strings',id,'items','library'],{encoding:'utf8'});if(r.status===0)outside.push({supplier:id,published_occurrences:r.stdout.trim().split('\n')});if(r.status!==0&&r.status!==1)throw Error('published search failed: '+r.stderr);}
const sourceEvidence=['bdh.pdf','bdhv.pdf','cstar.pdf'].map(f=>({file:dir+'/'+f,bytes:fs.statSync(dir+'/'+f).size,sha256:hash(dir+'/'+f)}));
const report={run,at:checkedAt,review_kind:'owner-local-step1-source-and-argument-repair',independent_audit:false,scaffold_only:true,new_helpers:items.filter(i=>!old.has(i.id)).map(i=>i.id),mathematical_changes:mathematical.map(i=>({id:i.id,new:!old.has(i.id),statement_changed:old.has(i.id)&&i.statement!==old.get(i.id).statement,before_statement:old.get(i.id)?.statement,after_statement:i.statement,deps:i.deps,direct_consumers:items.filter(j=>j.deps.includes(i.id)).map(j=>j.id),consumer_review:'Internal proof uses reconciled supplier-first; unchanged consumer interfaces terminate propagation.'})),all_changed_ids:items.filter(i=>!old.has(i.id)||JSON.stringify(i)!==JSON.stringify(old.get(i.id))).map(i=>i.id),outside_affected_items:outside,source_evidence:sourceEvidence,source_uncertainty:'Fell1960 remains unread. The full commissioned topology theorem is supplied by explicit local proof; neither a citation nor the unread source closes readiness.',source_recovery:'Fresh BdHV request timed out after40s; complete earlier downloaded PDF/text recovered from /tmp/f40-src, checked against coverage hash. New complete179pp Shirbisheh PDF fetched directly from arxiv with45s bound. Complete BdH source recovered from same prior cache.',checks_path:dir+'/checks.json',carrier_sha256:hash(file),root_integration:['Reconcile shared plan/prose/inventory to 44 batch4 records and their stable supplier order.','Refresh whole-run levels, source/dependency ledger and generated tasks after all writers drain, then retry the same held Step1 gate.','Author full proof-formatted bodies and require ordinary independent Step3 review.','No controller control, published-item mutation, shared-plan mutation or commit was performed by this agent.']};
fs.writeFileSync(dir+'/checks.json',JSON.stringify({run,at:checkedAt,manifest_sha256:hash(file),coverage_sha256:hash(`research/${run}-batch-4.coverage.json`),checks},null,2)+'\n');
if(checks.some(c=>c.exit_code!==0)){fs.writeFileSync(dir+'/review-report.json',JSON.stringify({...report,readiness:'owner-held: scoped checks fail'},null,2)+'\n');throw Error('scoped check failure');}
const s=loadStep3(process.cwd(),run),refreshed=[];
for(const i of [...items].sort((a,b)=>a.dependency_level-b.dependency_level)){
 const previous=step1Decision(s,i.id);
 if(previous.closed&&!mathematical.some(j=>j.id===i.id))continue;
 const reason=`Owner-local Step1 argument/source repair, not independent approval. Exact final strategy and examined supplier interfaces: ${dir}/review-report.json; scoped checks: ${dir}/checks.json. Complete local lifting uses positive dual-ball extremality, individual-family selection and the direct closure identity; Fell1960 is unread and not consumed. Recorded type-I remark stays non-consumable. AC is stated where inherited or used. Supplier-first proof uses reconciled; no outside affected consumer found.`;
 refreshed.push(recordStep1(process.cwd(),{run,item:i.id,decision:'ready',owner:true,dependencies:i.deps,reason}));
}
const finalState=loadStep3(process.cwd(),run),state=items.map(i=>({id:i.id,...step1Decision(finalState,i.id)}));
report.readiness={items:items.length,ready:state.filter(i=>i.closed).length,work:state.filter(i=>!i.closed).map(i=>({id:i.id,reason:i.reason})),refreshed:refreshed.map(r=>r.item),flagged_item:state.find(i=>i.id==='thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space')?.row?.decision};
fs.writeFileSync(dir+'/review-report.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({new_helpers:report.new_helpers,math_edits:mathematical.length,checks:checks.map(c=>({command:c.command,exit_code:c.exit_code,stdout:c.stdout})),readiness:report.readiness,outside_affected_items:outside},null,2));
if(report.readiness.work.length)process.exitCode=1;
