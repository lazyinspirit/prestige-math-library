import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,recordStep1} from '../tools/physics-support/step1-decisions.mjs';
import {loadPhysicsRepository,validatePhysicsContent} from '../tools/physics-support/physics-content.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-fem-readiness`,read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(dir))throw Error('Prior application exists');
const observation=read(`research/${run}-owner-fem-page-edge/readiness-observation.json`),snapshot=loadStep1Record(root,run),records=observation.rows;
if(records.length!==6||records.some(r=>r.batch!=='12'||!r.affected_by12))throw Error('Unexpected affected scope');
const pages=snapshot.pages.filter(p=>p.batch==='12'),ids=records.map(r=>r.id),files=ids.map(id=>`items/${id}.md`),paths=new Set([`research/${run}-owner-fem-page-edge/receipt.json`,`research/${run}-owner-final-import-reconciliation/receipt.json`,`research/${run}-owner-final-home-drift/report.json`]);
for(const row of records){const old=step1Decision(snapshot,row.id);if(old.row?.decision!=='ready'||JSON.stringify(old.row.dependencies)!==JSON.stringify(row.dependencies))throw Error('Prior readiness changed '+row.id);for(const p of itemInputPaths(snapshot,row.id,row.dependencies))paths.add(p);}
for(const p of pages)paths.add(`library/${p.category}/${p.id}.md`);
paths.add(`research/${run}-batch-12.proof-contracts.json`);
const manifests=new Map(snapshot.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch])),owners=new Set([...paths].filter(p=>manifests.has(p)).map(p=>manifests.get(p)));
if(owners.has('97'))throw Error('Overlaps active outside97 writer');
const guards=new Map([...paths].map(p=>[p,sha(readFileSync(p))]));
const verify=()=>{const state=read(`.physics-autopilot/${run}/state.json`);for(const b of owners){const d=state.dispatches[`1-scaffold:batch-${b}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Closure writer active '+b);}for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Current input changed '+p);};
verify();mkdirSync(dir);const failures=[],checks=[];
function command(name,args){const r=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:64*1024*1024});writeFileSync(`${dir}/${name}.stdout`,r.stdout??'');writeFileSync(`${dir}/${name}.stderr`,r.stderr??'');checks.push({name,args,exit_code:r.status});if(r.status!==0)failures.push(name);}
command('precheck',['tools/tsx-run.mjs','tools/physics-support/precheck.mts',...files,'--json']);
command('render',['tools/physics-support/rendercheck.mjs',...files,...pages.map(p=>`library/${p.category}/${p.id}.md`),'--json']);
command('contract',['tools/physics-support/proof-contract.mjs',`research/${run}-batch-12.proof-contracts.json`,'--strict','--json']);
const layout=scanProofFiles(files,root);writeFileSync(`${dir}/layout.json`,JSON.stringify(layout,null,2)+'\n');if(layout.some(r=>r.errors.length))failures.push('layout');
const repo=loadPhysicsRepository(root,null,new Set(pages.map(p=>p.id))),metadata=validatePhysicsContent({...repo,selectedItems:new Set(ids),selectedPages:new Set(pages.map(p=>p.id)),requireBodies:true});writeFileSync(`${dir}/metadata.json`,JSON.stringify(metadata,null,2)+'\n');if(metadata.length)failures.push('metadata');
const all=runPages(root,run),index=new Map(all.flatMap(p=>p.items.filter(i=>i?.id).map(i=>[i.id,i]))),needed=new Set();function visit(id){if(needed.has(id)||!index.has(id))return;needed.add(id);for(const d of index.get(id).deps??[])visit(d);}ids.forEach(visit);
const levels=dependencyLevels(all.map(p=>({...p,items:p.items.filter(i=>needed.has(i?.id))})).filter(p=>p.items.length),{validateLabels:false});if(levels.errors.length||ids.some(id=>index.get(id).dependency_level!==levels.levels.get(id)))failures.push('levels');
verify();writeFileSync(`${dir}/preflight.json`,JSON.stringify({checks,failures,ids,owners:[...owners],full_native_gate:false},null,2)+'\n');if(failures.length)throw Error(JSON.stringify(failures));
mkdirSync(`${dir}/before`);const written=[];
for(const row of records.sort((a,b)=>levels.levels.get(a.id)-levels.levels.get(b.id)||a.id.localeCompare(b.id))){verify();writeFileSync(`${dir}/before/${row.id}.json`,readFileSync(`research/${run}-step1-${row.id}.json`));written.push(recordStep1(root,{run,item:row.id,decision:'ready',owner:true,dependencies:row.dependencies,reason:`Root added the missing canonical published H(div) home prerequisite in the exact batch12 plan/manifest/source page, following native-verified six-file inactive import reconciliation. All six item bodies and scientific interfaces are unchanged; same-owner imported supplier use and exact unchanged FEM bodies were checked in owner-final-home-drift/report.json. Real focused six-item dependency check, current six-item two-page overlay plan validation, precheck, render, strict contracts, layout and physics metadata checks pass. Root verified actual input closure/native writer drain, excludes active outside97 sources, retains every examined dependency ID and archives prior records. Ordinary local authoring readiness only; no independent acceptance or full native gate.`}));verify();}
const fresh=loadStep1Record(root,run);for(const id of ids)if(!step1Decision(fresh,id).closed)throw Error('Readiness not current '+id);
writeFileSync(`${dir}/application.json`,JSON.stringify({at:new Date().toISOString(),run,ready:written.map(r=>({id:r.item,sha256:r.sha256})),guards:[...guards].map(([p,sha256])=>({path:relative(root,p.startsWith('/')?p:join(root,p)),sha256})),owners:[...owners],full_native_gate:false},null,2)+'\n');console.log(JSON.stringify({ready:written.length,owners:[...owners],guarded_paths:guards.size}));
