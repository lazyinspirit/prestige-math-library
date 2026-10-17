// Root current authoring records after released supplier-first scientific repairs.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-causal-xs-readiness-21'),json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const scientistPath=join(root,'research',run+'-owner-batch22-scientific-round1.json'),science=json(scientistPath),newId='def-emg-causal-solution-and-horizon-vocabulary';
const scienceRows=new Map(science.items.map(row=>[row.id,row]));if(scienceRows.size!==15)throw Error('Expected15');
for(const row of scienceRows.values())if(row.scientific_disposition!=='ready-for-authoring-readiness'||row.remaining_scientific_conditions.length||sha(readFileSync(join(root,row.source_binding.path)))!==row.source_binding.raw_sha256)throw Error('Scientific release not current '+row.id);
const producer=json(join(root,'research',run+'-owner-causal-vocabulary-round1-nonvacuity.json')),meta=json(join(root,'research',run+'-owner-causal-metadata-18/completion.json'));
const transition=meta.changes.find(row=>row.id===newId);if(!transition||transition.before_raw_sha256!==producer.source.raw_sha256||sha(readFileSync(join(root,producer.source.path)))!==transition.after_raw_sha256||!transition.body_unchanged)throw Error('Producer numeric transition not current');
for(const b of [producer.worksheet,science.worksheet_binding,science.supplier_current_binding])if(sha(readFileSync(join(root,b.path)))!==b.raw_sha256)throw Error('Changed released binding '+b.path);
const retained=['owner-emg-typed-batch22-final-use-currency','owner-emg-cauchy-batch22-finalscope','owner-matrix-ode-currency-batch22'].map(suffix=>join(root,'research',run+'-'+suffix+'.json'));
for(const path of retained)if(!existsSync(path))throw Error('Await retained currency '+path);
const state=json(join(root,'.physics-autopilot',run,'state.json')),stable=new Set(Object.values(state.dispatches).filter(d=>d.stage==='1-scaffold'&&d.endedAt&&d.lastExitOk===true).map(d=>String(d.covers[0])));
if(!stable.has('6')||!stable.has('22'))throw Error('Supplier/consumer native writers not drained');
const snapshot=loadStep1Record(root,run),oldSix=new Set([...snapshot.items].filter(([id,home])=>String(home.page.batch)==='6'&&home.page.kind==='A'&&id!==newId).map(([id])=>join(root,'items',id+'.md'))),records=[];
let reopened=0;
for(const [id,home] of snapshot.items){
 if(!stable.has(String(home.page.batch)))continue;
 const oldPath=join(root,'research',run+'-step1-'+id+'.json'),old=existsSync(oldPath)?json(oldPath):null,evidence=scienceRows.get(id);let reason;
 if(id===newId){if(old)throw Error('Unexpected producer predecessor');reason='Full approved causal/horizon vocabulary authored and checked; nonempty dense generator correction supplied by the same scientific owner. Source science: research/'+run+'-owner-causal-vocabulary-round1-nonvacuity.json. Numeric-only transition/home/context: owner-causal-home-17 and owner-causal-metadata-18. Retained typed/CP/ODE scientific scopes are compatible.';}
 else if(evidence){if(old?.decision!=='escalated')throw Error('Expected named escalation '+id);reason=evidence.evidence+' Same-owner final report: research/'+run+'-owner-batch22-scientific-round1.json; exact producer6/consumer22 home and current metadata amendments19/20.';}
 else{
  if(old?.decision!=='ready'||step1Decision(snapshot,id).closed)continue;
  if(!itemInputPaths(snapshot,id,old.dependencies).some(p=>oldSix.has(p)))throw Error('Unrelated stale subject '+id);
  reopened++;reason='Existing ready authoring disposition rebound after exact earlier CP01 published-context additions for the new local vocabulary. This changes page prerequisite metadata, not this item scientific claim or proof. Historical rationale: '+old.reason;
 }
 const item=readItem(join(root,'items',id+'.md')),claim=home.item;
 if(['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:reason+' Authoring readiness only; no independent proof approval, gate, or publication.',dependencies:[...new Set(['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[]))]});
}
if(records.filter(r=>scienceRows.has(r.item)).length!==15||!records.some(r=>r.item===newId))throw Error('Exact scientific scope missing');
records.sort((a,b)=>snapshot.items.get(a.item).item.dependency_level-snapshot.items.get(b.item).item.dependency_level);
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(row=>[row.path,row]));
for(const row of records)for(const path of itemInputPaths(snapshot,row.item,row.dependencies))contexts.add(path);
for(const path of contexts){
 const relative=path.slice(root.length),pin=pins.get(relative);
 if(pin&&(sha(readFileSync(path))!==pin.sha256||sha(readFileSync(join(imports.source_root,pin.source_path??pin.path)))!==pin.sha256))throw Error('Scoped import/root drift '+relative);
 if(relative.startsWith('items/')){const id=relative.slice(6,-3),home=snapshot.items.get(id);if(home&&!stable.has(String(home.page.batch)))throw Error('In-flight supplier '+id);}
}
mkdirSync(join(out,'before'),{recursive:true});for(const row of records){const path=join(root,'research',run+'-step1-'+row.item+'.json');if(existsSync(path))writeFileSync(join(out,'before',row.item+'.json'),readFileSync(path));}
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),science_report_sha256:sha(readFileSync(scientistPath)),retained_currency:retained.map(path=>({path,sha256:sha(readFileSync(path))})),records,context_files:contexts.size},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const row of rows)if(!step1Decision(fresh,row.item).closed)throw Error('Fresh native record open '+row.item);
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,subjects:rows.length,escalations_resolved:15,new_supplier:1,previously_ready_rebound:reopened,context_files:contexts.size,all_fresh_native_records_closed:true};writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
