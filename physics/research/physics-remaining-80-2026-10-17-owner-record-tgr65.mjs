// Root records released scientific dispositions; no gate/independent approval.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-tgr65-readiness-9');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const sha=b=>createHash('sha256').update(b).digest('hex'),json=p=>JSON.parse(readFileSync(p));
const reportPath=join(root,'research',run+'-owner-tgr-batch65-final-dispositions.json'),report=json(reportPath);
const state=json(join(root,'.physics-autopilot',run,'state.json'));
const native=state.dispatches['1-scaffold:batch-65'];if(!native?.endedAt||native.lastExitOk!==true)throw Error('Native65notdrained');
const snapshot=loadStep1Record(root,run),records=[];
for(const row of report.rows){
 const id=row.item,path=join(root,'items',id+'.md'),item=readItem(path),claim=snapshot.items.get(id)?.item;
 if(sha(readFileSync(path))!==row.current_source.raw_sha256)throw Error('Scientific binding changed '+id);
 if(!['retain-ready-authoring-disposition','ready-for-root-record'].includes(row.disposition))throw Error('Unresolved '+id);
 if(!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:row.actual_final_use_adoption+' Current scientific-owner evidence: research/'+run+'-owner-tgr-batch65-final-dispositions.json; mechanical metadata amendment: research/'+run+'-owner-tgr65-metadata-8/completion.json. Authoring readiness only; no independent review or gate acceptance.',dependencies:[...new Set(['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[]))]});
}
if(records.length!==4||report.rows.filter(x=>x.disposition==='ready-for-root-record').length!==3)throw Error('Exact4/3scope required');
// Exact current upstream source and metadata/contract bindings, before recording.
const bindings=report.rows.flatMap(row=>Object.values(row.direct_supplier_raw_bindings));
bindings.push(...report.four_P_pages_current,{path:report.minimal_repairs.contract_patch.path,raw_sha256:report.minimal_repairs.contract_patch.after_raw_sha256});
for(const binding of bindings){
 if(sha(readFileSync(join(root,binding.path)))!==binding.raw_sha256)throw Error('Changed scientific context '+binding.path);
}
for(const row of report.prior_root_rebind_five_actual_current_check.results)if(!step1Decision(snapshot,row.item).closed)throw Error('Upstream native record no longer closed '+row.item);
const receipt=json(join(root,'research/math-imports.json'));
for(const page of report.four_P_pages_current){
 const pin=receipt.files.find(x=>x.path===page.path);
 if(!pin||pin.sha256!==page.raw_sha256||sha(readFileSync(join(receipt.source_root,pin.source_path??pin.path)))!==pin.sha256)throw Error('Imported P pin/root drift '+page.page);
}

records.sort((a,b)=>snapshot.items.get(a.item).item.dependency_level-snapshot.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});
for(const row of records){const p=join(root,'research',run+'-step1-'+row.item+'.json');writeFileSync(join(out,'before',row.item+'.json'),readFileSync(p));}
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),scientific_report_sha256:sha(readFileSync(reportPath)),records},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const row of rows)if(!step1Decision(fresh,row.item).closed)throw Error('Fresh native record open '+row.item);
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),authoring_readiness_only:true,subjects:rows.length,escalations_resolved:3,all_fresh_native_records_closed:true},null,2)+'\n');
console.log(JSON.stringify({subjects:rows.length,escalations_resolved:3,fresh_native_closed:true}));
