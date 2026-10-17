// Owner proof-repair currency only. No native gate or independent approval.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-proof-repair-readiness-31');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex'),rel=p=>p.startsWith('physics/')?p.slice(8):p;
if(existsSync(join(out,'completion.json')))throw Error('Already recorded');
const names=['owner-csm27-canonical-selector/final-report.json','owner-qsm42-new-inventory-interface-currency/resolution.json','owner-batch24-residual-causal-SI-final-corrected.json','owner-matrix-ode-currency-batch24-new-inventory.json'];
const paths=names.map(n=>join(root,'research',run+'-'+n)),[csm,qsm,residual,ode]=paths.map(json);
function bind(b){const p=join(root,rel(b.path));if(sha(readFileSync(p))!==(b.raw_sha256??b.sha256))throw Error('Changed released binding '+b.path);}
if(csm.changed.length!==2||qsm.records.length!==9||residual.items.length!==9||ode.new_actual_ODE_cone_records.length!==9)throw Error('Incomplete exact scientific scopes');
for(const b of csm.changed)bind(b);
for(const r of qsm.records)bind(r.source_binding);
for(const r of residual.items)bind(r.source_binding);
for(const r of ode.new_actual_ODE_cone_records)bind(r.source_binding);
bind(residual.worksheet_binding);
if(!JSON.stringify(qsm).includes(sha(readFileSync(join(root,'research',run+'-batch-42.proof-contracts.json')))))throw Error('Current42worksheet not bound in release');
const state=json(join(root,'.physics-autopilot',run,'state.json')),stable=new Set(Object.values(state.dispatches).filter(d=>d.stage==='1-scaffold'&&d.endedAt&&d.lastExitOk===true).map(d=>String(d.covers[0])));
for(const batch of ['27','42','24'])if(!stable.has(batch))throw Error('Producer not drained '+batch);
const core=['lem-csm-lattice-product-and-measure-compactness','thm-qsm-diagonal-kms-dlr-bijection','texp-emg-xs-rotating-ergoregion'],affected=new Set(core.map(id=>join(root,'items',id+'.md')));
const s=loadStep1Record(root,run),records=[],readyScope=[],excluded=[];
for(const [id,h] of s.items){
 if(!stable.has(String(h.page.batch)))continue;
 const oldPath=join(root,'research',run+'-step1-'+id+'.json');if(!existsSync(oldPath)){excluded.push({id,reason:'missing authoring record'});continue;}
 const old=json(oldPath);if(old.decision!=='ready'){excluded.push({id,decision:old.decision});continue;}
 readyScope.push(id);if(step1Decision(s,id).closed)continue;
 if(!itemInputPaths(s,id,old.dependencies).some(p=>affected.has(p)))throw Error('Unrelated stale ready subject '+id);
 const item=readItem(join(root,'items',id+'.md')),claim=h.item;
 if(['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:'Existing authored readiness rebound after three proof-only repairs, with public Statements unchanged: CSM canonical dyadic subsequence selector and duplicate body metadata removal; QSM finite-boundary cylinder qualification preserving general DLR/properness; rotating-ergoregion extremal inequalities. Scientific evidence: '+paths.map(p=>p.slice(root.length)).join(', ')+'. Same-owner used interfaces and original rationale retained: '+old.reason+' Authoring readiness only; no independent audit, publication or gate approval.',dependencies:[...new Set([...(old.dependencies??[]),...['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[])])]});
}
if(records.length<3||core.some(id=>!records.some(r=>r.item===id)))throw Error('Expected all3repaired cores stale/currently-ready');
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(row=>[row.path,row]));
for(const row of records)for(const p of itemInputPaths(s,row.item,row.dependencies))contexts.add(p);
for(const p of contexts){if(!existsSync(p))throw Error('Missing actual context '+p);const pin=pins.get(p.slice(root.length));if(pin&&(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256))throw Error('Scoped import/root drift '+p);}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});for(const row of records)writeFileSync(join(out,'before',row.item+'.json'),readFileSync(join(root,'research',run+'-step1-'+row.item+'.json')));
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),reports:paths.map(p=>({path:p,sha256:sha(readFileSync(p))})),records,context_files:contexts.size,captured_existing_ready_subjects:readyScope.length,excluded_unresolved:excluded},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const id of readyScope)if(!step1Decision(fresh,id).closed)throw Error('Captured resolved ready subject open '+id);
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,rebound:written.length,context_files:contexts.size,captured_successful_batches:stable.size,captured_ready_subjects:readyScope.length,all_captured_ready_subjects_fresh_closed:true,excluded_unresolved:excluded,escalations_resolved:0,gate_attempt:false};
writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
