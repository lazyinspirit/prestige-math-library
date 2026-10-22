import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1,step1Decision} from '../tools/physics-support/step1-decisions.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
import {dependencyLevels,runPages} from '../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-ribbon-readiness`,archive=`${dir}/before`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(archive))throw Error('Application already started; inspect its receipt and prior records');
const reportPath=`research/${run}-owner-ribbon-tqft-readiness/batch75-released-local-bindings.json`,report=read(reportPath),reports=[reportPath];
const released=report.bindings;
for(const row of released)if(sha(readFileSync(row.path))!==row.sha256)throw Error('Released source changed '+row.path);
if(report.no_unresolved_local75_defect!==true||report.checks.final_render.exit_code!==0)throw Error('Scientific source owner has not released local scope');
const snapshot=loadStep1Record(root,run),pages=snapshot.pages.filter(p=>p.batch==='75'),ids=report.scope;
if(ids.length!==5)throw Error('Unexpected released source scope');
const plan=read('research/plan-spec.json');
for(const p of pages){if(JSON.stringify(plan.pages.find(x=>x.id===p.id).requires)!==JSON.stringify(p.requires))throw Error('Plan edge mismatch '+p.id);const actual=readItem(`library/${p.category}/${p.id}.md`);if(JSON.stringify([...actual.items??[],...actual.examples??[]])!==JSON.stringify(p.items.map(i=>i.id)))throw Error('Source inventory mismatch '+p.id);}
const layout=scanProofFiles(ids.map(id=>`items/${id}.md`),root);
if(layout.some(r=>r.errors.length))throw Error(JSON.stringify(layout.filter(r=>r.errors.length)));
const allPages=runPages(root,run),index=new Map(allPages.flatMap(p=>(p.items??[]).filter(i=>i?.id).map(i=>[i.id,i]))),needed=new Set();
const visit=id=>{if(needed.has(id)||!index.has(id))return;needed.add(id);for(const dep of index.get(id).deps??[])visit(dep);};
for(const p of pages)for(const i of p.items)visit(i.id);
const context=allPages.map(p=>({...p,items:(p.items??[]).filter(i=>needed.has(i?.id))})).filter(p=>p.items.length);
const levels=dependencyLevels(context,{validateLabels:false});
for(const p of pages)for(const item of p.items)if(item.dependency_level!==levels.levels.get(item.id))levels.errors.push(`${item.id}: scoped dependency level differs`);
if(levels.errors.length)throw Error(JSON.stringify(levels.errors));
const records=ids.map(id=>{const old=step1Decision(snapshot,id),item=readItem(`items/${id}.md`);return {id,dependencies:old.row?.dependencies??[...new Set([...(item.deps??[]),...(item.justified_by??[])])]};}).sort((a,b)=>levels.levels.get(a.id)-levels.levels.get(b.id)||a.id.localeCompare(b.id));
const owners=new Set(),paths=new Set(reports.concat(released.map(r=>r.path))),manifestOwners=new Map(snapshot.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch]));
for(const row of records)for(const p of itemInputPaths(snapshot,row.id,row.dependencies)){paths.add(p);if(manifestOwners.has(p))owners.add(manifestOwners.get(p));}
const assertDrained=()=>{const state=read(`.physics-autopilot/${run}/state.json`);for(const b of owners){const d=state.dispatches[`1-scaffold:batch-${b}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Source writer active '+b);}};
assertDrained();const guards=new Map([...paths].map(p=>[p,sha(readFileSync(p))]));
const verify=()=>{assertDrained();for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Input changed '+p);};
mkdirSync(dir,{recursive:true});
writeFileSync(`${dir}/preflight.json`,JSON.stringify({at:new Date().toISOString(),ids,owners:[...owners],paths:guards.size,layout_items:layout.length,levels_errors:levels.errors,report_hashes:reports.map(p=>({path:p,sha256:sha(readFileSync(p))})),full_gate:false},null,2)+'\n');
if(!process.argv.includes('--apply')){console.log(JSON.stringify({preflight:true,items:ids.length,owners:[...owners],guarded:guards.size}));process.exit(0);}
mkdirSync(archive);for(const row of records){const p=`research/${run}-step1-${row.id}.json`;if(existsSync(p))writeFileSync(`${archive}/${row.id}.json`,readFileSync(p));}
const written=[];
for(const row of records){verify();written.push(recordStep1(root,{run,item:row.id,owner:true,decision:'ready',dependencies:row.dependencies,reason:`Root adopted the completed local ribbon/braid source-use disposition and exact bindings in ${reportPath}. The source owner checked all five carriers and the normalized F/TL suppliers; the new rank-one overlap lemma supplies the reverse adjacent identity with signed loop parameter, spectator multiplicities and zero blocks retained. Root added five existing-published P context declarations and the exact necessary page prerequisites, preserving all source item claims, proofs, inventories and statuses. Focused plan, contract, policy, layout and renderer checks pass at their recorded scopes. Root verified exact current bindings, source inventories, dependency labels, formatting and drained actual native input owners; all adopted source writers for this closure released their files. Prior escalation records are archived. Batch80consumer final use remains separately provisional. This is local Step1 authoring readiness, not independent acceptance or full-run gate coverage.`}));verify();}
const fresh=loadStep1Record(root,run);for(const id of ids)if(!step1Decision(fresh,id).closed)throw Error('Record not current '+id);
writeFileSync(`${dir}/application.json`,JSON.stringify({at:new Date().toISOString(),run,operation:'ordinary native per-item recordStep1',items:written.map(r=>({item:r.item,sha256:r.sha256})),drained_source_batches:[...owners],guarded_paths:[...guards].map(([p,sha256])=>({path:relative(root,p),sha256})),unrelated_authors_continue:true,full_run_gate_attempted:false},null,2)+'\n');
console.log(JSON.stringify({ready:ids.length,owners:[...owners],guarded:guards.size}));
