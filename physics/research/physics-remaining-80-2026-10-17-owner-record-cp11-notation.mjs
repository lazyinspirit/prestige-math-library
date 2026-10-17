// Root authoring currency after guarded supplier-first notation repair; no gate.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-cp11-notation-readiness-27');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded');
const reportPath=join(root,'research',run+'-owner-batch11-cauchy-notation-round2.json'),report=json(reportPath);
if(json(join(root,'research',run+'-owner-cp11-notation-metadata-26/completion.json')).changes.length)throw Error('Unexpected source numeric change');
for(const b of report.source_bindings)if(sha(readFileSync(join(root,'items',b.id+'.md')))!==b.raw_sha256)throw Error('Scientific release changed '+b.id);
const currencies=['owner-batch11-residual-notation-successor-currency.json','owner-matrix-ode-currency-batch11-notation-successor.json'].map(n=>join(root,'research',run+'-'+n));
for(const p of currencies)if(!existsSync(p))throw Error('Await currency '+p);
const state=json(join(root,'.physics-autopilot',run,'state.json')),stable=new Set(Object.values(state.dispatches).filter(d=>d.stage==='1-scaffold'&&d.endedAt&&d.lastExitOk===true).map(d=>String(d.covers[0])));
const s=loadStep1Record(root,run),affected=new Set(report.source_bindings.map(b=>join(root,'items',b.id+'.md'))),records=[];
for(const [id,h] of s.items){
 if(!stable.has(String(h.page.batch))||step1Decision(s,id).closed)continue;
 const oldPath=join(root,'research',run+'-step1-'+id+'.json');if(!existsSync(oldPath))throw Error('Unrelated missing record '+id);
 const old=json(oldPath);if(old.decision!=='ready'||!itemInputPaths(s,id,old.dependencies).some(p=>affected.has(p)))throw Error('Unrelated open record '+id);
 const item=readItem(join(root,'items',id+'.md')),claim=h.item;
 if(['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:'Existing authored readiness rebound after same scientific owner corrected charged mathcalD versus spatial Levi-Civita D and invariant momentum constraint, preserving full finite-Sobolev/smooth branches. Actual supplier and consumer dispositions: research/'+run+'-owner-batch11-cauchy-notation-round2.json; current action/SI and ODE successors retained. Metadata amendment26. Historical rationale: '+old.reason+' Authoring readiness only; no independent review, publication or gate approval.',dependencies:[...new Set(['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[]))]});
}
if(records.length!==3||report.source_bindings.some(b=>!records.some(r=>r.item===b.id)))throw Error('Expected exact2suppliers+zeroexample');
const contexts=new Set(),imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(r=>[r.path,r]));
for(const r of records)for(const p of itemInputPaths(s,r.item,r.dependencies))contexts.add(p);
for(const p of contexts){const rel=p.slice(root.length),pin=pins.get(rel);if(pin&&(sha(readFileSync(p))!==pin.sha256||sha(readFileSync(join(imports.source_root,pin.source_path??pin.path)))!==pin.sha256))throw Error('Import/root drift '+rel);}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});for(const r of records)writeFileSync(join(out,'before',r.item+'.json'),readFileSync(join(root,'research',run+'-step1-'+r.item+'.json')));
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),scientific_report_sha256:sha(readFileSync(reportPath)),currencies:currencies.map(p=>({path:p,sha256:sha(readFileSync(p))})),contexts:contexts.size,records},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const r of rows)if(!step1Decision(fresh,r.item).closed)throw Error('Fresh record open '+r.item);
let checked=0;for(const [id,h] of fresh.items)if(stable.has(String(h.page.batch))){checked++;if(!step1Decision(fresh,id).closed)throw Error('Stable subject open '+id);}
const result={run,at:new Date().toISOString(),authoring_readiness_only:true,rebound:rows.length,context_files:contexts.size,stable_batches:stable.size,all_stable_subjects:checked,all_fresh_closed:true,escalations_resolved:0};
writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
