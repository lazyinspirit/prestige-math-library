// RESEARCH-ONLY DELIVERY. Default run writes a research transaction proposal only.
// Root may apply after final FM/contracts and explicit source-writer release.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync,copyFileSync} from 'node:fs';
import {resolve,dirname,join} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,checkStep1,recordStep1Batch} from '../../tools/physics-support/step1-decisions.mjs';
import {runPages,dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {itemHashGuard,itemHashJudge} from '../../tools/physics-support/item-hash.mjs';
const RUN='physics-non-fluid-129-2026-10-21-r2',root=process.cwd();
const arg=k=>{let i=process.argv.indexOf(k);return i<0?null:process.argv[i+1];};
const configPath=arg('--config'),out=arg('--out'),apply=process.argv.includes('--apply');
if(!configPath||!out)throw Error('Use --config research/FINAL-root-input.json --out research/NEW-transaction [--apply --all-source-writers-drained]');
const read=p=>JSON.parse(readFileSync(p,'utf8')),sha=b=>createHash('sha256').update(b).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))),save=(p,x)=>writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const research=p=>{if(!resolve(p).startsWith(resolve('research')+'/'))throw Error('Research-only path required '+p);return p;};
research(configPath);research(out);if(existsSync(out))throw Error('Use a fresh transaction; never overwrite evidence');
const cfg=read(configPath);if(cfg.run!==RUN||cfg.final_metadata_and_contracts!==true||cfg.all_source_owners_released!==true)throw Error('Root final joins/release required');
if(!Array.isArray(cfg.guards)||!cfg.guards.length||!cfg.readiness_reason?.trim())throw Error('Missing exact final root evidence/guard/reason');
const baselinePath=`research/${RUN}-step3-auditor-baseline.json`,baseline=read(baselinePath);
const helpers=['lem-qftx-global-microlocal-pullback','lem-qftx-microcausal-contraction-compatibility'];
function drained(){const state=read(`.physics-autopilot/${RUN}/state.json`);if(existsSync(`.physics-autopilot/${RUN}/controller.lock`)||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt)||!String(state.stage).startsWith('3'))throw Error('Native Step3 is not stopped/drained');return state;}
const state=drained();
if(baseline.run!==RUN||baseline.step!==3||baseline.items.length!==852||helpers.some(id=>baseline.items.some(x=>x.id===id)||baseline.existing_item_files.includes(id)))throw Error('Immutable Step3 baseline origin mismatch');
const pages=runPages(root,RUN),levels=dependencyLevels(pages);if(pages.length!==258||levels.items.size!==854||levels.errors.length)throw Error('Expected current854/258 and valid levels');
const allContracts=read(`research/${RUN}-proof-contracts.json`);if(Object.keys(allContracts.contracts??{}).length!==796)throw Error('Final merged contracts must be794+2=796');
const guards=new Map(cfg.guards.map(g=>[g.path,g.sha256]));
const guard=p=>{const h=sha(readFileSync(p));if(guards.has(p)&&guards.get(p)!==h)throw Error('Root final guard differs '+p);guards.set(p,h);};
for(const g of cfg.guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error('Stale root guard '+g.path);
for(const p of ['tools/physics-support/auditor-created-items.mjs','tools/physics-support/step1-decisions.mjs','tools/physics-support/frontier-snapshot.mjs','tools/physics-support/item-hash.mjs','tools/physics-support/item-dependency-levels.mjs'])guard(p);
const inventory=[];
for(const f of readdirSync('research').filter(n=>new RegExp(`^${RUN}-batch-\\d+\\.pages\\.json$`).test(n)).sort()){
 const p=`research/${f}`,batch=f.match(/-batch-(\d+)/)[1];guard(p);const raw=read(p);for(const page of (Array.isArray(raw)?raw:raw.pages??[]))for(const rawItem of page.items??[]){const item=typeof rawItem==='string'?{id:rawItem}:rawItem;inventory.push({id:item.id,page:page.id,batch,manifest_entry:{...item,__step4_page_id:String(page.id)}});}
}
if(inventory.length!==854||new Set(inventory.map(r=>r.id)).size!==854)throw Error('Native-style inventory differs');
for(const row of inventory){guard(`items/${row.id}.md`);guard(`research/${RUN}-batch-${row.batch}.proof-contracts.json`);const contract=read(`research/${RUN}-batch-${row.batch}.proof-contracts.json`).contracts?.[row.id];if(contract&&hash(contract)!==hash(allContracts.contracts?.[row.id]))throw Error('Merged/batch contract mismatch '+row.id);}
for(const p of [baselinePath,`research/${RUN}-proof-contracts.json`,configPath,...pages.map(p=>`library/${p.category}/${p.id}.md`)])guard(p);
const snapshot=loadStep1Record(root,RUN);if(snapshot.items.size!==854||snapshot.pages.length!==258||snapshot.pairs.size!==129)throw Error('Snapshot854/258/129 required');
const records=[],unchanged=[],creations=[];
for(const [id,{item}] of [...snapshot.items].sort((a,b)=>levels.levels.get(a[0])-levels.levels.get(b[0])||a[0].localeCompare(b[0]))){
 const old=step1Decision(snapshot,id),source=readItem(`items/${id}.md`);if(source.dependency_level!==levels.levels.get(id)||JSON.stringify([...(source.deps??[])].sort())!==JSON.stringify([...(item.deps??[])].sort()))throw Error('Source/manifest mismatch '+id);
 if(old.closed){unchanged.push(id);continue;}
 const disposition=cfg.dispositions?.[id];if(!disposition?.reason?.trim()||!disposition.evidence?.length)throw Error('Missing actual current root-owned source/use disposition '+id);
 for(const p of disposition.evidence)guard(research(p));
 if(old.row?.decision==='escalated'&&disposition.resolves_existing_escalation!==true)throw Error('Explicit authoring escalation not resolved '+id);
 records.push({item:id,decision:'ready',dependencies:[...new Set([...(old.row?.dependencies??[]),...(source.deps??[]),...(source.justified_by??[]),...(source.forward_refs??[]),...(item.deps??[]),...(item.justified_by??[]),...(item.forward_refs??[])])],reason:`${cfg.readiness_reason} Item-specific actual disposition: ${disposition.reason} Evidence: ${disposition.evidence.join(', ')}. Ordinary owner-recorded authoring readiness after actual Step3 work, not historical Step1 gate coverage, native author result or independent proof acceptance.`});
}
for(const id of helpers){
 if(existsSync(`research/${RUN}-step3-owner-creation-${id}.json`))throw Error('Immutable origin already exists; use native existing-origin/owner-recertify route rather than recreating '+id);
 const input=cfg.helpers?.[id],row=inventory.find(x=>x.id===id);if(!input?.reason?.trim()||input.author!=='/root/qft_green_maps'||!input.owner_held_escalation?.trim())throw Error('Missing genuine helper authorship/origin '+id);
 const text=readFileSync(`items/${id}.md`,'utf8'),contract=read(`research/${RUN}-batch-${row.batch}.proof-contracts.json`).contracts?.[id];if(!contract)throw Error('New helper contract missing '+id);
 const carrier={item_sha256:sha(text),contract_sha256:hash(contract),manifest_sha256:hash(row.manifest_entry)};
 const carriers={guard_sha256:itemHashGuard(text),judge_sha256:itemHashJudge(text),item_file_sha256:sha(text),manifest_sha256:carrier.manifest_sha256,contract_sha256:carrier.contract_sha256,step3_subject_sha256:hash(carrier)};
 const sources=input.sources.map(s=>{if(!['assignment','escalation','authorship'].includes(s.role))throw Error('Bad source role');research(s.path);guard(s.path);return{role:s.role,path:s.path,sha256:sha(readFileSync(s.path))};});
 if(!['assignment','escalation','authorship'].every(role=>sources.some(x=>x.role===role)))throw Error('All3 actual origin evidence roles required');
 const evidenceText=sources.map(x=>readFileSync(x.path,'utf8')).join('\n');for(const value of [RUN,id,input.author,input.owner_held_escalation])if(!evidenceText.includes(value))throw Error('Incomplete actual origin evidence '+value);
 creations.push({version:1,policy:'owner-spawned-step3-creation-v1',evidence_class:'owner-spawned-creation',run:RUN,step:3,id,owner:true,owner_identity:'/root',author:{identity:input.author,timeline:{mode:'unknown',after_baseline:true,reason:input.timeline_reason??'Created in the owner-delegated Step3 repair after the immutable baseline; exact start/end times were not captured and are not invented.'}},attested_at:new Date().toISOString(),reason:input.reason,owner_held_escalation:input.owner_held_escalation,baseline_sha256:sha(JSON.stringify(baseline)),page:row.page,batch:row.batch,carriers,sources});
}
function verify(){drained();for(const[p,h]of guards)if(sha(readFileSync(p))!==h)throw Error('Input changed '+p);}
verify();mkdirSync(out,{recursive:true});
save(`${out}/proposal.json`,{run:RUN,apply_requested:apply,counts:{items:854,pages:258,contracts:796},records,unchanged,creations,guards:[...guards].map(([path,sha256])=>({path,sha256})),native_gate:false,scientific_acceptance:false});
if(!apply){console.log(`Research proposal only: ${records.length} ready-row successors; 2 owner-creation drafts; no production writes`);process.exit(0);}
if(!process.argv.includes('--all-source-writers-drained')||cfg.root_authorizes_application!==true)throw Error('Explicit root application/release required');
// Archive every readiness/context record and existing origin/certification receipt first.
for(const f of readdirSync('research').filter(n=>n.startsWith(`${RUN}-step1-`)||n===`${RUN}-step3-auditor-certifications.json`||n.startsWith(`${RUN}-step3-owner-creation-`)||n.startsWith(`${RUN}-step3-owner-recertification-`))){mkdirSync(`${out}/before`,{recursive:true});copyFileSync(`research/${f}`,`${out}/before/${f}`);}
verify();const written=records.length?recordStep1Batch(root,{run:RUN,records,owner:true}):[];verify();const current=checkStep1(loadStep1Record(root,RUN));save(`${out}/currency.after.json`,current);if(!current.closed||current.ready!==854)throw Error('Current readiness did not close854');
for(const creation of creations){const evidence=`${out}/${creation.id}.owner-creation.json`;save(evidence,creation);const r=spawnSync(process.execPath,['tools/physics-support/auditor-created-items.mjs','owner-create','--run',RUN,'--step','3','--id',creation.id,'--evidence',evidence],{encoding:'utf8'});writeFileSync(`${out}/${creation.id}.owner-create.log`,r.stdout+r.stderr);if(r.status!==0)throw Error('Native owner-create failed; preserve transaction, investigate; no reset');verify();}
const r=spawnSync(process.execPath,['tools/physics-support/auditor-created-items.mjs','certify','--run',RUN,'--step','3'],{encoding:'utf8'});writeFileSync(`${out}/certify.log`,r.stdout+r.stderr);if(r.status!==0)throw Error('Native certify failed; preserve all evidence, no forced restart');verify();
save(`${out}/receipt.json`,{run:RUN,at:new Date().toISOString(),written:written.map(x=>x.item),unchanged,ready:current.ready,owner_created:helpers,certification: `research/${RUN}-step3-auditor-certifications.json`,native_gate:false,scientific_acceptance:false});
console.log('Root application complete: current authoring readiness and native owner-created provenance only; no full gate/acceptance claim');
