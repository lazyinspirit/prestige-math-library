// Owner currency after proof-only C2 repair and exact manifest transcription.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-optics19-readiness-39');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded');
const paths=['owner-batch19-residual-final-use-currency.json','owner-matrix-ode-currency-batch19-new-inventory/resolution.json','owner-matrix-ode-currency-batch19-C2-successor.json'].map(n=>join(root,'research',run+'-'+n)),[residual,oldOde,ode]=paths.map(json);
function bind(b){const p=join(root,b.path.startsWith('physics/')?'../'+b.path:b.path);if(sha(readFileSync(p))!==(b.raw_sha256??b.sha256))throw Error('Changed binding '+b.path);}
if(residual.items.length!==7||Object.keys(oldOde.subjects).length!==7||ode.counts.confirmed_remaining_retained_gap!==0)throw Error('Incomplete scope');
for(const r of residual.items)bind(r.source_binding);
for(const b of [ode.scientific_owner_release,ode.source_before,ode.source_current,ode.worksheet_before,ode.worksheet_current,ode.current_manifest_binding,...ode.actual_supplier_bindings,...ode.six_unchanged_subject_bindings_verified_without_rereview])bind(b);
for(const b of oldOde.used_context_bindings)bind(b);
const before=readFileSync(join(root,residual.focused_repair.source_before.path),'utf8'),after=readFileSync(join(root,'items/ex-emg-ml-b04.md'),'utf8');
if(before.split('## Facts & Assumptions')[0]!==after.split('## Facts & Assumptions')[0]||before.split('3.1 ')[1]!==after.split('3.1 ')[1])throw Error('Public source or workcheck changed');
const state=json(join(root,'.physics-autopilot',run,'state.json')),stable=new Set(Object.values(state.dispatches).filter(d=>d.stage==='1-scaffold'&&d.endedAt&&d.lastExitOk===true).map(d=>String(d.covers[0])));if(!stable.has('19'))throw Error('Producer active');
const s=loadStep1Record(root,run),scope=[],records=[];
for(const [id,h] of s.items){if(!stable.has(String(h.page.batch)))continue;const p=join(root,'research',run+'-step1-'+id+'.json');if(existsSync(p)&&json(p).decision==='ready')scope.push(id);}
for(const r of residual.items){const id=r.id,item=readItem(join(root,'items',id+'.md')),claim=s.items.get(id)?.item,old=json(join(root,'research',run+'-step1-'+id+'.json'));
 if(old.decision!=='ready'||!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Unresolved metadata '+id);
 records.push({item:id,decision:'ready',reason:'Existing authored readiness rebound after exact seven full public claims were transcribed into missing manifest statement fields (metadata38; no source/numeric changes), plus one proof-only C2-potential correction: energy conservation is now proved by direct Minkowski Lorentz time-component cancellation and interval/endpoints, preserving full Example/frontmatter/scope/work check. Same-owner scientific and distinct retained ODE final evidence: '+paths.map(p=>p.slice(root.length)).join(', ')+'. Original rationale: '+old.reason+' Authoring readiness only; no independent proof, empirical or gate acceptance.',dependencies:[...new Set([...(old.dependencies??[]),...['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[])])]});}
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(r=>[r.path,r]));for(const r of records)for(const p of itemInputPaths(s,r.item,r.dependencies))contexts.add(p);
for(const p of contexts){if(!existsSync(p))throw Error('Missing context '+p);const pin=pins.get(p.slice(root.length));if(pin&&(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256))throw Error('Scoped import/root drift '+p);}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});for(const r of records)writeFileSync(join(out,'before',r.item+'.json'),readFileSync(join(root,'research',run+'-step1-'+r.item+'.json')));
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),reports:paths.map(p=>({path:p,sha256:sha(readFileSync(p))})),records,context_files:contexts.size,captured_ready_subjects:scope.length},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);for(const id of scope)if(!step1Decision(fresh,id).closed)throw Error('Captured ready subject stale '+id);
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,rebound:written.length,context_files:contexts.size,captured_successful_batches:stable.size,captured_ready_subjects:scope.length,all_captured_ready_fresh_closed:true,escalations_resolved:0,gate_attempt:false};writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
