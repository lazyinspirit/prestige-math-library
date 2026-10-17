// Root records released scientific dispositions; no gate/independent approval.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-qsm41-readiness-16');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const sha=b=>createHash('sha256').update(b).digest('hex'),json=p=>JSON.parse(readFileSync(p));
const reportPath=join(root,'research',run+'-owner-qsm41-scoped-triage/resolution.json'),report=json(reportPath);
const state=json(join(root,'.physics-autopilot',run,'state.json'));
const native=state.dispatches['1-scaffold:batch-41'];if(!native?.endedAt||native.lastExitOk!==true)throw Error('Native41notdrained');
const snapshot=loadStep1Record(root,run),records=[];
for(const row of report.records){
 const id=row.id,path=join(root,'items',id+'.md'),item=readItem(path),claim=snapshot.items.get(id)?.item;
 if(sha(readFileSync(path))!==row.source_binding.raw_sha256)throw Error('Scientific binding changed '+id);
 if(!row.disposition.startsWith('ready-for-root-record'))throw Error('Unresolved '+id);
 if(!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:JSON.stringify(row.actual_interface_use)+' Current scientific-owner evidence: research/'+run+'-owner-qsm41-scoped-triage/resolution.json (scoped citation/source-locator repair; full Statements/dependencies/levels unchanged; current-source metadata amendment: research/physics-remaining-80-2026-10-17-owner-qsm41-metadata-15/completion.json). Authoring readiness only; no independent review or gate acceptance.',dependencies:[...new Set(['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[]))]});
}
if(records.length!==7||report.records.length!==7)throw Error('Exact7scope required');
// Exact current upstream source and metadata/contract bindings, before recording.
for(const binding of [...report.current_relevant_upstream_bindings.map(row=>row.current_physics_source),report.current_source_context.native_dependency_inputs,report.current_source_context.current_math_import_receipt]){
 const path=fileURLToPath(new URL('../../'+binding.path,import.meta.url));
 if(sha(readFileSync(path))!==binding.raw_sha256)throw Error('Changed released context '+binding.path);
}
const contract='research/'+run+'-batch-41.proof-contracts.json';
if(!readFileSync(join(root,contract)).equals(readFileSync(join(root,'research',run+'-owner-qsm41-scoped-triage/before',run+'-batch-41.proof-contracts.json'))))throw Error('Worksheet changed after reported check');

records.sort((a,b)=>snapshot.items.get(a.item).item.dependency_level-snapshot.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});
for(const row of records){const p=join(root,'research',run+'-step1-'+row.item+'.json');writeFileSync(join(out,'before',row.item+'.json'),readFileSync(p));}
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),scientific_report_sha256:sha(readFileSync(reportPath)),records},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const row of rows)if(!step1Decision(fresh,row.item).closed)throw Error('Fresh native record open '+row.item);
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),authoring_readiness_only:true,subjects:rows.length,authoring_readiness_records_refreshed:7,all_fresh_native_records_closed:true},null,2)+'\n');
console.log(JSON.stringify({subjects:rows.length,authoring_readiness_records_refreshed:7,fresh_native_closed:true}));
