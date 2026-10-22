import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1,step1Decision} from '../tools/physics-support/step1-decisions.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {inspectStatement} from '../tools/statement-first.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-schwarzschild-concentration`,archive=`${dir}/readiness-before-owner`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(archive))throw Error('Prior application exists; inspect before resuming');
const observation=read(`${dir}/current-bindings.json`),reportPath=`research/${run}-owner-schwarzschild-concentration/final-report.json`,report=read(reportPath);
const s=loadStep1Record(root,run),ids=[...observation.scope].sort((a,b)=>readItem(`items/${a}.md`).dependency_level-readItem(`items/${b}.md`).dependency_level);
if(ids.length!==10||report.round!==1)throw Error('Wrong reviewed scope');
for(const row of observation.current_inputs)if(sha(readFileSync(`items/${row.id}.md`))!==row.file_sha256)throw Error('Reviewed source changed '+row.id);
const plan=read('research/plan-spec.json'),pages=s.pages.filter(p=>p.batch==='36');
for(const p of pages){const planned=plan.pages.find(x=>x.id===p.id);if(JSON.stringify(planned.requires)!==JSON.stringify(p.requires))throw Error('Plan metadata mismatch');const actual=readItem(`library/${p.category}/${p.id}.md`);if(JSON.stringify([...actual.items??[],...actual.examples??[]])!==JSON.stringify(p.items.map(i=>i.id)))throw Error('Source inventory mismatch');}
const records=[];
for(const id of ids){const current=readItem(`items/${id}.md`),errors=await inspectStatement(id,current.kind,current.body);if(errors.length)throw Error(errors.join('\n'));const old=step1Decision(s,id);records.push({id,current,old:old.row,dependencies:old.row?.dependencies??[...new Set([...(current.deps??[]),...(current.justified_by??[])])]});}
const manifestOwners=new Map(s.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch])),owners=new Set(),paths=new Set();
for(const row of records)for(const p of itemInputPaths(s,row.id,row.dependencies)){paths.add(p);if(manifestOwners.has(p))owners.add(manifestOwners.get(p));}
const assertDrained=()=>{const state=read(`.physics-autopilot/${run}/state.json`);for(const batch of owners){const d=state.dispatches[`1-scaffold:batch-${batch}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Relevant native writer still active '+batch);}if([...owners].some(b=>!['29','35','36'].includes(b)))throw Error('Unexpected repair writer context: '+[...owners].join(','));};
assertDrained();const guard=new Map([...paths].map(p=>[p,sha(readFileSync(p))]));
const verify=()=>{assertDrained();for(const [p,h]of guard)if(sha(readFileSync(p))!==h)throw Error('Input changed '+relative(root,p));};
mkdirSync(archive);for(const row of records){const p=`research/${run}-step1-${row.id}.json`;if(existsSync(p))writeFileSync(`${archive}/${row.id}.json`,readFileSync(p));}
const written=[];
// Unrelated authors remain live. These are ordinary local per-item owner
// records on the actually drained 29/35/36 source closure, not a bulk join.
for(const row of records){verify();written.push(recordStep1(root,{run,item:row.id,owner:true,decision:'ready',dependencies:row.dependencies,reason:`Root adopted the actual round1 Schwarzschild concentration repair in ${reportPath}. The local helper proves the direct radial Cauchy construction, positive energy identity, explicit inverted Gaussian, residual/correction estimates, real-wave normalization and simultaneous whole-annulus concentration for every finite interval. The same owner restored the designed unconditional no-loss obstruction and checked its actual consumers; fixed-background test-wave qualifications and Countable Choice are preserved. Root read and checked the research derivation, verified exact current source bindings, formatting, source inventories, earlier-page metadata and drained29/35/36 dependency owners. All focused checks and actual source-reading limits are recorded; previous records are preserved. This is local Step1 authoring readiness, not independent acceptance, publication or complete129-pair gate coverage.`}));verify();}
const fresh=loadStep1Record(root,run);for(const id of ids)if(!step1Decision(fresh,id).closed)throw Error('Record not current '+id);
writeFileSync(`${dir}/owner-readiness-application.json`,JSON.stringify({run,at:new Date().toISOString(),owner:'/root',review_report_sha256:sha(readFileSync(reportPath)),observation_sha256:sha(readFileSync(`${dir}/current-bindings.json`)),metadata_reconciliation:report.metadata_and_contracts.requires,operation:'native per-item recordStep1',drained_source_batches:[...owners],guarded_paths:[...guard].map(([p,sha256])=>({path:relative(root,p),sha256})),records:written.map(r=>({item:r.item,sha256:r.sha256})),unrelated_native_authors_continue:true,full_run_gate_attempted:false},null,2)+'\n');
console.log(JSON.stringify({ready:ids.length,drainedOwners:[...owners],guardedPaths:guard.size}));
