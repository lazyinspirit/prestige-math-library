// Ordinary root per-item readiness for released closures. No global gate.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,recordStep1} from '../tools/physics-support/step1-decisions.mjs';
import {readItem,loadPhysicsRepository,validatePhysicsContent} from '../tools/physics-support/physics-content.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p));
const archive=`research/${run}-owner-resolved-join-readiness/${new Date().toISOString().replace(/[:.]/g,'-')}`;
const imports=read(`research/${run}-owner-final-import-reconciliation/receipt.json`);
if(!imports.verification.passed)throw Error('Inactive import reconciliation not verified');
const reports=[`research/${run}-owner-final-home-drift/report.json`,`research/${run}-owner-ribbon-tqft-readiness/final75-77-81-82-followup.json`,`research/${run}-owner-inverse-gibbs-context/final-source-consumer-report.json`,`research/${run}-owner-inverse-gibbs-context/batch98-final-bindings.json`,`research/${run}-owner-inverse-mirror-application/receipt.json`];
const numberingPath=`research/${run}-owner-ribbon-tqft-readiness/batch82-numbering-repair/report.json`;
if(sha(readFileSync(numberingPath))!=='2ae9dcee71002a6d845b7b5ff393dd90393bec005988314eec693ad50124ed9e')throw Error('Released numbering report changed');
reports.push(numberingPath);
const numbering=read(numberingPath),overrides=new Map([[numbering.source,{before:numbering.source_before_sha256,after:numbering.source_after_sha256}],[numbering.contract,{before:numbering.contract_before_sha256,after:numbering.contract_after_sha256}]]);
const released=read(`research/${run}-owner-ribbon-tqft-readiness/final75-81-82-join/inputs.json`).files;
for(const row of released)if(row.path.startsWith('items/')||row.path.includes('.proof-contracts.json')||row.path.includes('.pages.json')||row.path.startsWith('library/')){const repair=overrides.get(row.path);if(repair&&row.sha256!==repair.before)throw Error('Numbering preimage differs '+row.path);if(sha(readFileSync(row.path))!==(repair?.after??row.sha256))throw Error('Released ribbon source changed '+row.path);}
for(const row of read(reports[3]).bindings)if(sha(readFileSync(`items/${row.id}.md`))!==row.file_sha256)throw Error('Released98 source changed '+row.id);
for(const row of read(reports[2]).minimality_resolution.source_bindings)if(sha(readFileSync(`items/${row.id}.md`))!==row.file_sha256)throw Error('Released96 use changed '+row.id);
const batches=new Set(['77','80','81','82','96','98','117','126','128']);
const s=loadStep1Record(root,run),pages=s.pages.filter(p=>batches.has(p.batch)),ids=pages.flatMap(p=>p.items.map(i=>i.id));
const index=new Map(runPages(root,run).flatMap(p=>p.items.filter(i=>i?.id).map(i=>[i.id,i]))),needed=new Set();
function visit(id){if(needed.has(id)||!index.has(id))return;needed.add(id);for(const dep of index.get(id).deps??[])visit(dep);}
ids.forEach(visit);
const context=runPages(root,run).map(p=>({...p,items:p.items.filter(i=>needed.has(i?.id))})).filter(p=>p.items.length);
const levels=dependencyLevels(context,{validateLabels:false});
for(const id of ids){const item=readItem(`items/${id}.md`);if(item.id!==id||item.dependency_level!==levels.levels.get(id)||index.get(id).dependency_level!==levels.levels.get(id))levels.errors.push('Source/manifest scoped level mismatch '+id);}
if(levels.errors.length)throw Error(JSON.stringify(levels.errors));
const canonicalId=id=>id==='lem-tgrx-noether-charge-decomposition'?'pthm-tgrx-noether-charge-decomposition':id;
const records=ids.map(id=>({id,old:step1Decision(s,id)})).filter(r=>!r.old.closed).map(({id,old})=>({id,dependencies:(old.row?.dependencies??[...new Set([...(readItem(`items/${id}.md`).deps??[]),...(readItem(`items/${id}.md`).justified_by??[])])]).map(canonicalId)})).sort((a,b)=>levels.levels.get(a.id)-levels.levels.get(b.id)||a.id.localeCompare(b.id));
const paths=new Set(reports),owners=new Set(),manifestOwners=new Map(s.pages.map(p=>[join(root,'research',`${run}-batch-${p.batch}.pages.json`),p.batch]));
for(const row of records)for(const path of itemInputPaths(s,row.id,row.dependencies)){paths.add(path);if(manifestOwners.has(path))owners.add(manifestOwners.get(path));}
if(owners.has('97'))throw Error('Released scope overlaps active outside FK source writer');
for(const page of pages){paths.add(`library/${page.category}/${page.id}.md`);paths.add(`research/${run}-batch-${page.batch}.proof-contracts.json`);}
const guards=new Map([...paths].map(path=>[path,sha(readFileSync(path))]));
function verify(){const state=read(`.physics-autopilot/${run}/state.json`);for(const b of owners){const d=state.dispatches[`1-scaffold:batch-${b}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Native closure writer active '+b);}for(const[path,h]of guards)if(sha(readFileSync(path))!==h)throw Error('Guarded input changed '+path);}
verify();mkdirSync(archive,{recursive:true});
const failures=[],checks=[];
function command(name,args){const r=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:64*1024*1024,timeout:300000});writeFileSync(`${archive}/${name}.stdout`,r.stdout??'');writeFileSync(`${archive}/${name}.stderr`,r.stderr??'');checks.push({name,args,exit_code:r.status});if(r.status!==0||r.error)failures.push(name);}
const files=ids.map(id=>`items/${id}.md`);
for(let n=0;n<files.length;n+=16)command(`precheck-${n/16}`,['tools/tsx-run.mjs','tools/physics-support/precheck.mts',...files.slice(n,n+16),'--json']);
command('render',['tools/physics-support/rendercheck.mjs',...files,...pages.map(p=>`library/${p.category}/${p.id}.md`),'--json']);
for(const b of batches)command(`contract-${b}`,['tools/physics-support/proof-contract.mjs',`research/${run}-batch-${b}.proof-contracts.json`,'--strict','--json']);
const layout=scanProofFiles(files,root);writeFileSync(`${archive}/layout.json`,JSON.stringify(layout,null,2)+'\n');if(layout.some(r=>r.errors.length))failures.push('layout');
const repo=loadPhysicsRepository(root,null,new Set(pages.map(p=>p.id))),metadata=validatePhysicsContent({...repo,selectedItems:new Set(ids),selectedPages:new Set(pages.map(p=>p.id)),requireBodies:true});writeFileSync(`${archive}/metadata.json`,JSON.stringify(metadata,null,2)+'\n');if(metadata.length)failures.push('metadata');
verify();const report={at:new Date().toISOString(),run,ids,records,checks,failures,owners:[...owners],guarded_paths:[...guards].map(([path,sha256])=>({path:relative(root,path.startsWith('/')?path:join(root,path)),sha256})),full_native_gate:false};writeFileSync(`${archive}/preflight.json`,JSON.stringify(report,null,2)+'\n');
if(failures.length)throw Error(JSON.stringify({archive,failures}));
if(!process.argv.includes('--apply')){console.log(JSON.stringify({archive,checked:ids.length,to_refresh:records.length}));process.exit(0);}
mkdirSync(`${archive}/before`);for(const row of records){const path=`research/${run}-step1-${row.id}.json`;if(existsSync(path))writeFileSync(`${archive}/before/${row.id}.json`,readFileSync(path));}
const written=[];
for(const row of records){verify();const b=pages.find(p=>p.items.some(i=>i.id===row.id)).batch;const reason=['77','80','81','82'].includes(b)?'Same-owner final ribbon/TQFT/Hall/categorified/WZW use reports release the exact source interfaces; root completed native-verified exact import reconciliation, including Bockstein placement and the link-definition CC qualifications.': ['96','98'].includes(b)?'The native author restored the intended explicit minimality hypothesis; the same owner checked the final MLE and sole actual consumer and released all six98 context-only holds. Root applied only six reviewed prefix-to-complete claim mirrors; all old declared logical and seven96A context IDs are preserved.':'Root repaired only malformed Noether identifier/page YAML delimiters, display source line breaks and canonical direct-phase labels with exact consumer contract mirrors. Scientific prose and equations are retained; AdS/JT consumers remain qualified as before.';
written.push(recordStep1(root,{run,item:row.id,decision:'ready',owner:true,dependencies:row.dependencies,reason:`${reason} Root adopted the recorded scoped dispositions, checked current source bindings and actual drained input closure, and ran real focused precheck/render/layout/strict-contract and physics metadata checks. Prior records are preserved under ${archive}. This is local Step1 authoring readiness, not independent scientific acceptance or a full native gate.`}));verify();}
const fresh=loadStep1Record(root,run);for(const row of records)if(!step1Decision(fresh,row.id).closed)throw Error('New record not current '+row.id);
writeFileSync(`${archive}/application.json`,JSON.stringify({...report,completed_at:new Date().toISOString(),operation:'ordinary native per-item recordStep1',written:written.map(r=>({id:r.item,sha256:r.sha256}))},null,2)+'\n');console.log(JSON.stringify({archive,ready:written.length,checked:ids.length}));
