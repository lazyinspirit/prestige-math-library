// Root records released scientific dispositions; no gate/independent approval.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemInputPaths} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-cp11-readiness-12');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; preserve history');
const sha=b=>createHash('sha256').update(b).digest('hex'),json=p=>JSON.parse(readFileSync(p));
const reportPath=join(root,'research',run+'-owner-batch11-cauchy-round1.json'),report=json(reportPath);
const state=json(join(root,'.physics-autopilot',run,'state.json'));
const native=state.dispatches['1-scaffold:batch-11'];if(!native?.endedAt||native.lastExitOk!==true)throw Error('Native11notdrained');
const snapshot=loadStep1Record(root,run),records=[];
for(const row of report.items){
 const id=row.id,path=join(root,'items',id+'.md'),item=readItem(path),claim=snapshot.items.get(id)?.item;
 if(sha(readFileSync(path))!==row.source_binding.raw_sha256)throw Error('Scientific binding changed '+id);
 if(!['ready-for-root-record'].includes(row.disposition))throw Error('Unresolved '+id);
 if(!claim||['id','kind','title','domain','dependency_level'].some(k=>item[k]!==claim[k])||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 records.push({item:id,decision:'ready',reason:row.scientific_reason+' Current scientific-owner evidence: research/'+run+'-owner-batch11-cauchy-round1.json; mechanical metadata amendment: research/'+run+'-owner-cp11-metadata-11/completion.json. Authoring readiness only; no independent review or gate acceptance.',dependencies:[...new Set(['deps','justified_by','forward_refs','external_refs','empirical_premises'].flatMap(k=>item[k]??[]))]});
}
if(records.length!==6||report.items.filter(x=>x.disposition==='ready-for-root-record').length!==6)throw Error('Exact6/6scope required');
// Retained same-owner final currency reports must exist before joining.
const currencyPaths=['owner-batch11-residual-final-use-currency.json','owner-matrix-ode-currency-batch11-released.json'].map(suffix=>join(root,'research',run+'-'+suffix));
for(const path of currencyPaths)if(!existsSync(path))throw Error('Await retained final currency '+path);
const context=new Set(),pins=json(join(root,'research/math-imports.json')),byPath=new Map(pins.files.map(row=>[row.path,row]));
for(const record of records)for(const path of itemInputPaths(snapshot,record.item,record.dependencies))context.add(path);
for(const path of context){
 const relative=path.slice(root.length),pin=byPath.get(relative);
 if(pin&&(sha(readFileSync(path))!==pin.sha256||sha(readFileSync(join(pins.source_root,pin.source_path??pin.path)))!==pin.sha256))throw Error('Scoped import/root drift '+relative);
}

records.sort((a,b)=>snapshot.items.get(a.item).item.dependency_level-snapshot.items.get(b.item).item.dependency_level);
mkdirSync(join(out,'before'),{recursive:true});
for(const row of records){const p=join(root,'research',run+'-step1-'+row.item+'.json');writeFileSync(join(out,'before',row.item+'.json'),readFileSync(p));}
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),scientific_report_sha256:sha(readFileSync(reportPath)),retained_currency:currencyPaths.map(path=>({path,sha256:sha(readFileSync(path))})),context_files:context.size,records},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true}),fresh=loadStep1Record(root,run);
for(const row of rows)if(!step1Decision(fresh,row.item).closed)throw Error('Fresh native record open '+row.item);
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),authoring_readiness_only:true,subjects:rows.length,escalations_resolved:6,all_fresh_native_records_closed:true},null,2)+'\n');
console.log(JSON.stringify({subjects:rows.length,escalations_resolved:6,fresh_native_closed:true}));
