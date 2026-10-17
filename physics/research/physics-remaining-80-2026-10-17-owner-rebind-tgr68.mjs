// Root mechanical final-inventory currency, no science acceptance or gate.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-tgr68-readiness-36');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded');
const paths=['owner-tgr-batch68-interface-currency.json','owner-matrix-ode-currency-batch68-new-inventory/resolution.json'].map(n=>join(root,'research',run+'-'+n)),[tgr,ode]=paths.map(json);
function bind(b){const p=join(root,b.path.startsWith('physics/')?'../'+b.path:b.path);if(sha(readFileSync(p))!==(b.raw_sha256??b.sha256))throw Error('Changed current binding '+b.path);}
if(tgr.rows.length!==3||Object.keys(ode.subjects).length!==3)throw Error('Incomplete scope');
for(const r of tgr.rows){bind(r.current_source);for(const b of Object.values(r.direct_source_bindings))bind(b);if(r.required_source_repair!==null)throw Error('Unresolved repair');}
for(const r of Object.values(ode.subjects))bind(r.source_binding);
for(const b of [...ode.batch_context_bindings,...ode.used_context_bindings])bind(b);
const state=json(join(root,'.physics-autopilot',run,'state.json')),d=state.dispatches['1-scaffold:batch-68'];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Producer not drained');
const s=loadStep1Record(root,run),records=[],prior=[];
for(const r of tgr.rows){const id=r.item,item=readItem(join(root,'items',id+'.md')),claim=s.items.get(id)?.item,old=json(join(root,'research',run+'-step1-'+id+'.json'));if(old.decision!=='ready')throw Error('Unexpected prior '+id);
 if(!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 prior.push({item:id,closed:step1Decision(s,id).closed,record_at:old.at});
 records.push({item:id,decision:'ready',reason:'Existing authored readiness rebound to successful native68 final inventory. Two saved records were stale; all three actual source files and all 1595 declared-source ancestry bindings stayed byte-identical to the retained post-handoff reports. Current metadata transcription35 made zero file changes. Same-owner actual TGR and ODE-use evidence: '+paths.map(p=>p.slice(root.length)).join(', ')+'. Original rationale retained: '+old.reason+' Authoring readiness only; no independent approval or gate acceptance.',dependencies:[...new Set([...(old.dependencies??[]),...['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[])])]});}
const ancestry=json(join(root,'research',run+'-owner-matrix-ode-currency-batch68-new-inventory/declared-ancestry.json'));if(ancestry.nodes.length!==1595)throw Error('Ancestry incomplete');for(const n of ancestry.nodes)bind(n.source_binding);
if(prior.filter(r=>!r.closed).length!==2)throw Error('Unexpected stale scope');
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(r=>[r.path,r]));for(const r of records)for(const p of itemInputPaths(s,r.item,r.dependencies))contexts.add(p);
for(const p of contexts){if(!existsSync(p))throw Error('Missing input '+p);const pin=pins.get(p.slice(root.length));if(pin&&(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256))throw Error('Scoped import/root drift '+p);}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});for(const r of records)writeFileSync(join(out,'before',r.item+'.json'),readFileSync(join(root,'research',run+'-step1-'+r.item+'.json')));
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),prior,reports:paths.map(p=>({path:p,sha256:sha(readFileSync(p))})),records,context_files:contexts.size},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);for(const r of written)if(!step1Decision(fresh,r.item).closed)throw Error('Fresh record stale '+r.item);
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,rebound:written.length,prior_stale:2,context_files:contexts.size,all3fresh_closed:true,escalations_resolved:0,gate_attempt:false};writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
