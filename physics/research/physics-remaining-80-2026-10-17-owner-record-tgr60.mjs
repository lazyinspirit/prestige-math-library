// Root joins released scientific scopes; authoring readiness only, no gate acceptance.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-tgr60-readiness-34');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const paths=['owner-tgr-batch60-final-dispositions.json','owner-matrix-ode-currency-batch60-released.json'].map(n=>join(root,'research',run+'-'+n));
const [report,ode]=paths.map(json);
function bind(b){const path=join(root,b.path.startsWith('physics/')?'../'+b.path:b.path);if(sha(readFileSync(path))!==(b.raw_sha256??b.sha256))throw Error('Changed scientific binding '+b.path);}
if(report.rows.length!==4||ode.records.length!==4||report.summary.new_or_remaining_mathematical_gaps!==0)throw Error('Incomplete release');
for(const r of report.rows){bind(r.current_source);for(const b of Object.values(r.current_direct_supplier_bindings))bind(b);}
for(const p of report.pages)bind({path:p.current_path,raw_sha256:p.raw_sha256});
bind({path:report.minimal_edits.worksheet.path,raw_sha256:report.minimal_edits.worksheet.current_raw_sha256});
for(const r of ode.records){bind(r.source_binding);if(!report.rows.some(x=>x.item===r.id&&x.current_source.raw_sha256===r.source_binding.raw_sha256))throw Error('ODE scope mismatch');}
for(const c of ode.current_relevant_supplier_context){bind(c.current_physics_binding);if(c.current_root_binding)bind(c.current_root_binding);}
const state=json(join(root,'.physics-autopilot',run,'state.json')),d=state.dispatches['1-scaffold:batch-60'];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Native60writer active');
const snapshot=loadStep1Record(root,run),records=[];
for(const obs of report.current_native_supplier_confirmation.observations)if(!step1Decision(snapshot,obs.item).closed)throw Error('Upstream not current '+obs.item);
for(const row of report.rows){
 const id=row.item,item=readItem(join(root,'items',id+'.md')),claim=snapshot.items.get(id)?.item;
 if(row.disposition!=='ready-for-root-record'||row.remaining_scientific_gap!==null)throw Error('Unresolved scientific gap '+id);
 if(!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 const old=json(join(root,'research',run+'-step1-'+id+'.json'));if(old.decision!=='escalated')throw Error('Unexpected prior decision '+id);
 records.push({item:id,decision:'ready',reason:row.actual_final_use_adoption+' Same-owner TGR scientific release and distinct retained ODE-use confirmation: '+paths.map(p=>p.slice(root.length)).join(', ')+'. Mechanical metadata transcription: research/'+run+'-owner-tgr60-metadata-33/completion.json. Authoring readiness only; no independent acceptance, audit or publication.',dependencies:[...new Set([...(old.dependencies??[]),...['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[])])]});
}
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(r=>[r.path,r]));
for(const r of records)for(const p of itemInputPaths(snapshot,r.item,r.dependencies))contexts.add(p);
for(const p of contexts){if(!existsSync(p))throw Error('Missing context '+p);const pin=pins.get(p.slice(root.length));if(pin&&(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256))throw Error('Import/root drift '+p);}
records.sort((a,b)=>snapshot.items.get(a.item).item.dependency_level-snapshot.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});for(const r of records)writeFileSync(join(out,'before',r.item+'.json'),readFileSync(join(root,'research',run+'-step1-'+r.item+'.json')));
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),reports:paths.map(p=>({path:p,sha256:sha(readFileSync(p))})),records,context_files:contexts.size},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const r of written)if(!step1Decision(fresh,r.item).closed)throw Error('Fresh record not closed '+r.item);
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,subjects:written.length,escalations_resolved:4,all_fresh_native_records_closed:true,context_files:contexts.size,gate_attempt:false};
writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
