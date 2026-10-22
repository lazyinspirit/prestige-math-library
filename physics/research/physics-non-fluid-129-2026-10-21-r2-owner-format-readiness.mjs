// Root-only mechanical recertification of exact reviewed formatting closures.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {checkStep1,recordStep1Batch} from '../tools/physics-support/step1-decisions.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {loadPhysicsRepository,validatePhysicsContent,readItem} from '../tools/physics-support/physics-content.mjs';
import {numberedProofSteps,splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-preparation-repairs`,out=`${base}/final-readiness`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!process.argv.includes('--source-writers-drained'))throw Error('Require actual global writer drain');
if(existsSync(out))throw Error('Preserve existing operation');
function drain(){if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native controller/workers not drained');}
drain();
const config=read(`${base}/central-contract-config.json`),application=read(`${base}/central-contracts/application.json`);
if(config.items.length!==62||application.items!==66)throw Error('Incomplete released repair scope');
const corrections=read(`${base}/central-contracts/corrections/receipt.json`),correctionMap=new Map(corrections.changes.map(c=>[c.path,c]));
for(const c of corrections.changes){const original=application.changes.find(r=>r.path===c.path);if(original&&original.after_sha256!==c.before_sha256)throw Error('Broken contract repair chain '+c.path);}
const bindings=[...config.bindings,{path:`${base}/central-contract-config.json`,sha256:sha(readFileSync(`${base}/central-contract-config.json`))},{path:`${base}/central-contracts/corrections/receipt.json`,sha256:sha(readFileSync(`${base}/central-contracts/corrections/receipt.json`))},...application.changes.map(c=>({path:c.path,sha256:correctionMap.get(c.path)?.after_sha256??c.after_sha256}))];
for(const b of bindings)if(sha(readFileSync(b.path))!==b.sha256)throw Error('Released input changed '+b.path);
const snapshot=loadStep1Record(root,run),currency=checkStep1(snapshot),pages=runPages(root,run),graph=dependencyLevels(pages);
if(graph.errors.length||snapshot.items.size!==845||!currency.work.length)throw Error('Invalid/non-repair frontier');
const changedPaths=new Set(config.changed_source_ids.map(id=>`${root}/items/${id}.md`)),paths=new Set(bindings.map(b=>b.path)),groups=new Map(),records=[];
for(const w of currency.work){
 if(!w.item||w.row?.decision!=='ready'||w.reason!=='Item or dependency changed; record current readiness')throw Error('Unresolved non-format hold '+JSON.stringify(w));
 const inputs=itemInputPaths(snapshot,w.item,w.row.dependencies);
 if(!inputs.some(p=>changedPaths.has(p)))throw Error('Unexplained stale closure '+w.item);
 for(const p of inputs)paths.add(p);
 const item=readItem(`items/${w.item}.md`),level=graph.levels.get(w.item);
 if(item.dependency_level!==level)throw Error('Source dependency level differs '+w.item);
 const batch=snapshot.items.get(w.item).page.batch;
 if(!groups.has(batch))groups.set(batch,[]);groups.get(batch).push(w.item);
 records.push({item:w.item,decision:'ready',dependencies:[...new Set([...w.row.dependencies,...(item.deps??[]),...(item.justified_by??[])])],level,
 reason:`Root recertifies the exact current reviewed format/metadata closure recorded in ${base}/central-contract-config.json and central-contracts/application.json. Released owners verified all canonical paragraph mappings and accurate previously implicit local references, public mathematical claims are unchanged (two displays have whitespace-only normalization), and the four hard reference/structure repairs preserve their claims. Six role corrections preserve logical dependency sets and source bodies. Every supplier citation in the affected current run uses only Statement/Definition, not old proof-step labels. Root preserved old examined dependency/context IDs; actual closure intersects only these known reviewed changes. Exact focused strict proof contracts, citation quotes and current physics metadata pass under guarded source/manifest bindings. All source writers are drained. Ordinary native authoring readiness only; no independent scientific acceptance or full gate.`});
}
records.sort((a,b)=>a.level-b.level||a.item.localeCompare(b.item));
paths.add('research/plan-spec.json');paths.add('research/math-imports.json');
const guards=new Map([...paths].map(p=>[p,sha(readFileSync(p))]));
function verify(){drain();for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Guard changed '+p);}
mkdirSync(`${out}/before`,{recursive:true});
writeFileSync(`${out}/currency.before.json`,JSON.stringify(currency,null,2)+'\n');
writeFileSync(`${out}/scope.json`,JSON.stringify({items:records.map(r=>r.item),groups:[...groups],guarded_inputs:guards.size},null,2)+'\n');
const checks=[];
for(const[batch,ids]of groups){const path=`research/${run}-batch-${batch}.proof-contracts.json`,doc=read(path),selected=ids.filter(id=>doc.scope.includes(id)),nonproof=ids.filter(id=>!doc.scope.includes(id));
 for(const id of nonproof)if(numberedProofSteps(splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body).length)throw Error('Proof-bearing item lacks contract scope '+id);
 if(!selected.length)continue;
 const r=spawnSync(process.execPath,['tools/physics-support/proof-contract.mjs',path,'--items',selected.join(','),'--strict','--json'],{encoding:'utf8',maxBuffer:32*1024*1024});writeFileSync(`${out}/contracts-${batch}.json`,r.stdout??'');checks.push({batch,selected,nonproof_without_numbered_arguments:nonproof,exit:r.status,error:r.stderr});console.log(JSON.stringify({contract_batch:batch,items:selected.length,exit:r.status}));}
const contracts=[...groups.keys()].map(b=>`research/${run}-batch-${b}.proof-contracts.json`),fidelity=spawnSync(process.execPath,['tools/physics-support/citation-fidelity.mjs',...contracts,'--json','--fail-on-missing-quote'],{encoding:'utf8',maxBuffer:32*1024*1024});writeFileSync(`${out}/citation-fidelity.json`,fidelity.stdout??'');
const selected=new Set(records.map(r=>r.item)),pageIds=new Set(records.map(r=>snapshot.items.get(r.item).page.id)),repository=loadPhysicsRepository(root,null,pageIds),metadata=validatePhysicsContent({...repository,selectedItems:selected,selectedPages:pageIds,requireBodies:true});writeFileSync(`${out}/physics-metadata.json`,JSON.stringify(metadata,null,2)+'\n');
writeFileSync(`${out}/checks.json`,JSON.stringify({checks,fidelity_exit:fidelity.status,metadata_errors:metadata,full_native_gate:false},null,2)+'\n');
if(checks.some(c=>c.exit!==0)||fidelity.status!==0||metadata.length)throw Error('Resolve all focused findings together before readiness');
verify();
for(const r of records){const p=`research/${run}-step1-${r.item}.json`;writeFileSync(`${out}/before/${r.item}.json`,readFileSync(p));}
const written=recordStep1Batch(root,{run,owner:true,records:records.map(({level,...r})=>r)});verify();
const final=checkStep1(loadStep1Record(root,run));writeFileSync(`${out}/currency.after.json`,JSON.stringify(final,null,2)+'\n');
writeFileSync(`${out}/application.json`,JSON.stringify({at:new Date().toISOString(),written:written.map(r=>({item:r.item,sha256:r.sha256})),current_items:final.items,all_current:final.closed,guards:[...guards].map(([path,sha256])=>({path,sha256})),full_native_gate:false},null,2)+'\n');
if(!final.closed)throw Error('Unexpected remaining readiness holds');console.log(JSON.stringify({ready:written.length,items:final.items,all_current:final.closed}));
