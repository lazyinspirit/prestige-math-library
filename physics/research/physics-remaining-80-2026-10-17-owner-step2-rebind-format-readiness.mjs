// Actual current-input initial-authoring readiness, never independent acceptance.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
import {originalImportPath} from '../../tools/physics-support/physics-imports.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-step2-format-readiness');
const json=p=>JSON.parse(readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed refresh');
const releasePath=join(root,'.physics-autopilot',run,'owner-step2-format-repair-release.json'),release=json(releasePath);
if(release.all_assigned_repairs_resolved!==true||!release.reports?.length)throw Error('Await all actual repair releases');
const metadataPath='research/'+run+'-owner-step2-metadata/completion.json',metadata=json(join(root,metadataPath));
const driftPath='research/'+run+'-owner-step2-current-drift/completion.json';if(!existsSync(join(root,driftPath)))throw Error('Current drift obligations not reconciled');
const reports=[...release.reports,{path:metadataPath,sha256:sha(readFileSync(join(root,metadataPath)))},{path:driftPath,sha256:sha(readFileSync(join(root,driftPath)))}];
for(const report of reports)if(sha(readFileSync(join(root,report.path)))!==report.sha256)throw Error('Changed release evidence '+report.path);
if(metadata.source_bindings.length!==712)throw Error('Incomplete metadata scope');
for(const binding of release.source_bindings)if(sha(readFileSync(join(root,binding.path)))!==binding.sha256)throw Error('Source changed after actual owner repair/metadata release '+binding.id);
const state=json(join(root,'.physics-autopilot',run,'state.json'));for(let b=1;b<=80;b++){const d=state.dispatches['1-scaffold:batch-'+b];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Native author active '+b);}
const s=loadStep1Record(root,run);if(s.items.size!==712||s.pages.length!==160)throw Error('Unexpected frontier');
const records=[],before=new Map(),contexts=new Set();
for(const [id,h] of s.items){
 const item=readItem(join(root,'items',id+'.md')),claim=h.item,path=join(root,'research',run+'-step1-'+id+'.json'),raw=existsSync(path)?readFileSync(path):null,old=raw?JSON.parse(raw):null;if(raw)before.set(id,raw);
 if(old&&old.decision!=='ready')throw Error('Unreleased native item escalation '+id);
 if(['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata not joined '+id);
 if(step1Decision(s,id).closed)continue;
 const dependencies=[...new Set([...['deps','justified_by','forward_refs','external_refs'].flatMap(k=>item[k]??[]),...(item.empirical_premises??[]).map(x=>x.experiment)].filter(x=>typeof x==='string'&&x))];
 records.push({item:id,decision:'ready',dependencies,reason:'Current initial authoring readiness after all 80 scope dispositions accepted, same-owner scientific repairs released, and current source/manifest metadata, exact quotation/step transcription, declared cross-batch edges, additive prerequisite drift and batch scheduling joined. Concrete reports: '+reports.map(r=>r.path).join(', ')+'. Current dependency IDs and scoped import/original pins are bound; original ready records retained at research/'+run+'-owner-step2-format-readiness/before/'+id+'.json when present. No independent proof acceptance, publication or gate approval.'});
 for(const path of itemInputPaths(s,id,dependencies))contexts.add(path);
}
if(!records.length)throw Error('No stale actual subjects; do not record a vacuous refresh');
const imports=json(join(root,'research/math-imports.json')),pins=new Map(imports.files.map(row=>[row.path,row]));let scopedImports=0;
for(const path of contexts){if(!existsSync(path))throw Error('Missing current context '+path);const pin=pins.get(path.slice(root.length));if(pin){if(sha(readFileSync(path))!==pin.sha256||sha(readFileSync(originalImportPath(imports,pin)))!==pin.sha256)throw Error('Actual import/root drift '+path);scopedImports++;}}
records.sort((a,b)=>s.items.get(a.item).item.dependency_level-s.items.get(b.item).item.dependency_level||s.items.get(a.item).page.order-s.items.get(b.item).page.order||a.item.localeCompare(b.item));
for(const [id,raw] of before)if(!readFileSync(join(root,'research',run+'-step1-'+id+'.json')).equals(raw))throw Error('Concurrent decision mutation');
for(const report of reports)if(sha(readFileSync(join(root,report.path)))!==report.sha256)throw Error('Concurrent release mutation');
mkdirSync(join(out,'before'),{recursive:true});for(const [id,raw] of before)writeFileSync(join(out,'before',id+'.json'),raw);
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Initial authoring current-input rebind, not independent review or gate receipt.',reports,records,scoped_imports_checked:scopedImports,context_files:contexts.size},null,2)+'\n');
const written=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const id of s.items.keys()){const decision=step1Decision(fresh,id);if(!decision.closed)throw Error('Fresh current readiness open '+id+': '+decision.reason);}
const completion={run,at:new Date().toISOString(),initial_authoring_only:true,rebound:written.length,subjects:712,pages:160,all_fresh_closed:true,context_files:contexts.size,scoped_imports_checked:scopedImports,gate_attempt:false};
writeFileSync(join(out,'completion.json'),JSON.stringify(completion,null,2)+'\n');console.log(JSON.stringify(completion));
