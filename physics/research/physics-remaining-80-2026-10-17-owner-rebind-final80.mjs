// Owner current-input readiness only. No independent acceptance or gate authority.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-final80-readiness-47');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const names=['owner-final-ODE-QSM-all80-interface-closure/resolution.json','owner-thermal80-final-closure.json','owner-residual-all80-final-consumer-closure.json','owner-cauchy-all80-deps-justified-by-closure.json','owner-emg-typed-all80-final-consumer-closure.json','owner-csm80-public-interface-closure/union-edge-addendum.json','owner-tgr-all80-public-interface-both-edges-addendum.json','owner-final80-metadata-44/completion.json','owner-drift-metadata-45/completion.json','owner-crossbatch-final-46/completion.json'];
const reports=names.map(n=>({path:'research/'+run+'-'+n,sha256:sha(readFileSync(join(root,'research',run+'-'+n)))})),ode=json(join(root,reports[0].path));
if(Object.keys(ode.subjects).length!==709||ode.summary.uncovered_current_selected_retained_uses!==0)throw Error('Incomplete final current scope');
function bind(b){const p=b.path.startsWith('/')?b.path:join(root,b.path.startsWith('physics/')?'../'+b.path:b.path);if(sha(readFileSync(p))!==(b.raw_sha256??b.sha256))throw Error('Changed binding '+b.path);}
for(const row of Object.values(ode.subjects))bind(row.current_source);for(const row of [...ode.actual_manifest_bindings,...ode.actual_page_bindings])bind(row);bind(ode.current_declared_ancestry_snapshot);
const state=json(join(root,'.physics-autopilot',run,'state.json'));for(let i=1;i<=80;i++){const d=state.dispatches['1-scaffold:batch-'+i];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Native writer active '+i);}
const s=loadStep1Record(root,run);if(s.items.size!==709||s.pages.length!==160)throw Error('Unexpected actual frontier');
const allowed=new Set(['post-tgr-thermodynamic-horizon-identification','pthm-tgr-area-entropy-calibration','texp-tgr-horizon-entropy-difference','post-tgr-photon-emitter-and-quasistatic-balance','pthm-tgr-ideal-photon-emission','texp-tgr-half-mass-emitter']);
const records=[],oldRecords=new Map(),contexts=new Set(),promoted=[];
for(const [id,h] of s.items){const item=readItem(join(root,'items',id+'.md')),claim=h.item,path=join(root,'research',run+'-step1-'+id+'.json');if(!existsSync(path))throw Error('Missing actual authored decision '+id);const old=json(path);oldRecords.set(id,readFileSync(path));
 if(old.decision!=='ready'&&!(old.decision==='escalated'&&allowed.has(id)))throw Error('Unreleased decision '+id);
 if(['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Unresolved current metadata '+id);
 if(old.decision==='escalated')promoted.push(id);
 const dependencies=[...new Set([...(old.dependencies??[]),...['deps','justified_by','forward_refs','external_refs'].flatMap(k=>item[k]??[]),...(item.empirical_premises??[]).map(x=>x.experiment)].filter(x=>typeof x==='string'&&x))];
 records.push({item:id,decision:'ready',reason:'Current authored readiness after final80 metadata44 and exact full public-claim transcription; source bodies preserved by the mechanical label/role join. Same-owner final changed-public-interface consumer closures include both deps and justified_by. Thermal AComega premise repair and all actual79/80 consumer uses scientifically resolved by retained thermal owner; six derivative native escalations released for root recording. Original scientific evidence is preserved in named final reports; crossbatch structural inventory is not scientific approval. Prior historical rationale: '+old.reason+' Final reports: '+reports.map(x=>x.path).join(', ')+'. This is initial authoring readiness only, not independent acceptance, publication or gate approval.',dependencies});
 for(const p of itemInputPaths(s,id,dependencies))contexts.add(p);
}
if(promoted.length!==6||promoted.some(x=>!allowed.has(x)))throw Error('Unexpected escalation scope');
const imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(r=>[r.path,r]));let checkedImports=0;
for(const p of contexts){if(!existsSync(p))throw Error('Missing actual context '+p);const pin=pins.get(p.slice(root.length));if(pin){if(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256)throw Error('Actual scoped import/root drift '+p);checkedImports++;}}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level||s.items.get(a.item).page.order-s.items.get(b.item).page.order||a.item.localeCompare(b.item));
for(const [id,bytes] of oldRecords)if(!readFileSync(join(root,'research',run+'-step1-'+id+'.json')).equals(bytes))throw Error('Concurrent record mutation '+id);
for(const r of reports)if(sha(readFileSync(join(root,r.path)))!==r.sha256)throw Error('Changed final release '+r.path);
mkdirSync(join(out,'before'),{recursive:true});for(const [id,bytes] of oldRecords)writeFileSync(join(out,'before',id+'.json'),bytes);
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Owner current authoring readiness refresh, not a native gate receipt.',reports,records,promoted,context_files:contexts.size,scoped_imports_checked:checkedImports},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);for(const r of records){const v=step1Decision(fresh,r.item);if(!v.closed)throw Error('Fresh current readiness open '+r.item+': '+v.reason);}
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,rebound:written.length,context_files:contexts.size,scoped_imports_checked:checkedImports,stable_batches:80,subjects:709,all_fresh_closed:true,escalations_resolved:promoted.length,promoted,gate_attempt:false};writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
