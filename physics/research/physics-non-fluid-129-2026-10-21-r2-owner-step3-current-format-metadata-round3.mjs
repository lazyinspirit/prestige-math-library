// Actual drained source checks for root reconciliation. This is not a native
// owner-request receipt and cannot authorize a stage transition or gate waiver.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readItem,loadPhysicsRepository,validatePhysicsContent} from '../tools/physics-support/physics-content.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {scanProofFiles} from '../tools/physics-support/proof-layout.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',out=`research/${run}-owner-step3-root-adoption/current-format-metadata-round3`;
const read=p=>JSON.parse(readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex');
if(existsSync(out))throw Error('Preserve prior actual checks');
const state=read(`.physics-autopilot/${run}/state.json`);
if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Native writers active');
const pages=runPages(process.cwd(),run),graph=dependencyLevels(pages);
if(graph.errors.length||graph.items.size!==854||pages.length!==258)throw Error('Current scope or levels differ');
const items=[...graph.items.keys()].sort((a,b)=>graph.levels.get(a)-graph.levels.get(b)||a.localeCompare(b));
const files=items.map(id=>`items/${id}.md`),pageFiles=pages.map(p=>`library/${p.category}/${p.id}.md`);
const guards=[...files,...pageFiles].map(path=>({path,sha256:sha(readFileSync(path))}));
mkdirSync(out,{recursive:true});
const checks=[],failures=[];
function command(name,args){
 const r=spawnSync(process.execPath,args,{encoding:'utf8',maxBuffer:128*1024*1024,timeout:300000});
 writeFileSync(`${out}/${name}.stdout`,r.stdout??'');writeFileSync(`${out}/${name}.stderr`,r.stderr??'');
 checks.push({name,argv:['node',...args],exit_code:r.status,error:r.error?.message});
 if(r.status!==0||r.error)failures.push({name,exit_code:r.status,error:r.error?.message});
}
for(let n=0;n<files.length;n+=16)command(`precheck-${n/16+1}`,['tools/tsx-run.mjs','tools/physics-support/precheck.mts',...files.slice(n,n+16),'--json']);
command('render',['tools/physics-support/rendercheck.mjs',...files,...pageFiles,'--json']);
const layout=scanProofFiles(files,process.cwd());writeFileSync(`${out}/layout.json`,JSON.stringify(layout,null,2)+'\n');
for(const x of layout)for(const error of x.errors)failures.push({file:x.file,error});
const pageIds=new Set(pages.map(p=>p.id)),repo=loadPhysicsRepository(process.cwd(),null,pageIds);
const metadata=validatePhysicsContent({...repo,selectedItems:new Set(items),selectedPages:pageIds,requireBodies:true});
writeFileSync(`${out}/metadata.json`,JSON.stringify(metadata,null,2)+'\n');failures.push(...metadata);
for(const id of items){
 const s=readItem(`items/${id}.md`),m=graph.items.get(id).item;
 if(s.dependency_level!==graph.levels.get(id)||s.kind!==m.kind||s.id!==id||s.domain!==m.domain)failures.push({id,reason:'Current source identity/domain/level mismatch'});
 if(JSON.stringify(s.deps??[])!==JSON.stringify(m.deps??[]))failures.push({id,reason:'Current source/manifest dependencies mismatch'});
}
for(const g of guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error('Check input changed '+g.path);
const report={at:new Date().toISOString(),run,items:items.length,pages:pages.length,dependency_order:items,checks,layout_items:layout.length,failures,guards,scientific_acceptance:false,native_gate_receipt:false,stage_transition_authorized:false};
writeFileSync(`${out}/report.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({items:items.length,pages:pages.length,precheck_groups:Math.ceil(files.length/16),layout_items:layout.length,failures:failures.length,report:`${out}/report.json`}));
if(failures.length)process.exitCode=1;
