import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1,step1Decision} from '../tools/physics-support/step1-decisions.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
import {dependencyLevels,runPages} from '../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-green-relation-readiness`,archive=`${dir}/before`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(archive))throw Error('Application already started; inspect its receipt and prior records');
const reports=[`research/${run}-owner-qft-green-maps/report.json`,`research/${run}-owner-hawking-metadata/relation-report.json`];
const edges=read(`research/${run}-owner-repair-page-edges/receipt.json`);
for(const path of reports)for(const [p,h]of Object.entries(read(path).current_inputs)){
 const actual=sha(readFileSync(p));if(actual===h)continue;
 const repair=edges.changes.find(c=>c.path===p&&c.before_sha256===h&&c.after_sha256===actual);
 if(!repair)throw Error('Unreviewed source change '+p);
}
const snapshot=loadStep1Record(root,run),pages=snapshot.pages.filter(p=>['58','68','120'].includes(p.batch)),ids=pages.flatMap(p=>p.items.map(i=>i.id));
if(ids.length!==24)throw Error('Unexpected source scope');
const plan=read('research/plan-spec.json');
for(const p of pages){if(JSON.stringify(plan.pages.find(x=>x.id===p.id).requires)!==JSON.stringify(p.requires))throw Error('Plan edge mismatch '+p.id);const actual=readItem(`library/${p.category}/${p.id}.md`);if(JSON.stringify([...actual.items??[],...actual.examples??[]])!==JSON.stringify(p.items.map(i=>i.id)))throw Error('Source inventory mismatch '+p.id);}
const layout=scanProofFiles(ids.map(id=>`items/${id}.md`),root);
if(layout.some(r=>r.errors.length))throw Error(JSON.stringify(layout.filter(r=>r.errors.length)));
const levels=dependencyLevels(runPages(root,run).filter(p=>p.items?.length),{validateLabels:false});
for(const p of pages)for(const item of p.items)if(item.dependency_level!==levels.levels.get(item.id))levels.errors.push(`${item.id}: scoped dependency level differs`);
if(levels.errors.length)throw Error(JSON.stringify(levels.errors));
const records=ids.map(id=>{const old=step1Decision(snapshot,id),item=readItem(`items/${id}.md`);return {id,dependencies:old.row?.dependencies??[...new Set([...(item.deps??[]),...(item.justified_by??[])])]};}).sort((a,b)=>levels.levels.get(a.id)-levels.levels.get(b.id)||a.id.localeCompare(b.id));
const owners=new Set(),paths=new Set(reports.concat(`research/${run}-owner-repair-page-edges/receipt.json`)),manifestOwners=new Map(snapshot.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch]));
for(const row of records)for(const p of itemInputPaths(snapshot,row.id,row.dependencies)){paths.add(p);if(manifestOwners.has(p))owners.add(manifestOwners.get(p));}
const assertDrained=()=>{const state=read(`.physics-autopilot/${run}/state.json`);for(const b of owners){if(!['58','68','119','120'].includes(b))throw Error('Unexpected source owner '+b);const d=state.dispatches[`1-scaffold:batch-${b}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Source writer active '+b);}};
assertDrained();const guards=new Map([...paths].map(p=>[p,sha(readFileSync(p))]));
const verify=()=>{assertDrained();for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Input changed '+p);};
mkdirSync(dir,{recursive:true});
writeFileSync(`${dir}/preflight.json`,JSON.stringify({at:new Date().toISOString(),ids,owners:[...owners],paths:guards.size,layout_items:layout.length,levels_errors:levels.errors,report_hashes:reports.map(p=>({path:p,sha256:sha(readFileSync(p))})),full_gate:false},null,2)+'\n');
if(!process.argv.includes('--apply')){console.log(JSON.stringify({preflight:true,items:ids.length,owners:[...owners],guarded:guards.size}));process.exit(0);}
mkdirSync(archive);for(const row of records){const p=`research/${run}-step1-${row.id}.json`;if(existsSync(p))writeFileSync(`${archive}/${row.id}.json`,readFileSync(p));}
const written=[];
for(const row of records){verify();written.push(recordStep1(root,{run,item:row.id,owner:true,decision:'ready',dependencies:row.dependencies,reason:`Root adopted the same-owner round1 Green and Hadamard/Hawking repairs documented in ${reports.join(' and ')}. The local construction proves generic smooth scalar Cauchy evolution, metric-cone support, continuity and Green maps; the compact-overlap lemma preserves CC-only consumers. Hadamard null covectors are tangent with either endpoint order, with physical Hawking premises retained and actual consumers checked by the same scientific owner. Root reconciled required earlier-page edges, checked current exact report/source bindings, inventories, proof layout and dependency metadata, and verified the actual source closure is drained. Scoped renderer, contract, policy, source and precheck evidence is retained with its actual limits. Old records are archived. This is local Step1 authoring readiness, not independent acceptance or full-run gate coverage.`}));verify();}
const fresh=loadStep1Record(root,run);for(const id of ids)if(!step1Decision(fresh,id).closed)throw Error('Record not current '+id);
writeFileSync(`${dir}/application.json`,JSON.stringify({at:new Date().toISOString(),run,operation:'ordinary native per-item recordStep1',items:written.map(r=>({item:r.item,sha256:r.sha256})),drained_source_batches:[...owners],guarded_paths:[...guards].map(([p,sha256])=>({path:relative(root,p),sha256})),unrelated_authors_continue:true,full_run_gate_attempted:false},null,2)+'\n');
console.log(JSON.stringify({ready:ids.length,owners:[...owners],guarded:guards.size}));
