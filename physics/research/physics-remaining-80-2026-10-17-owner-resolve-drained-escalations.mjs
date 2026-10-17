// Owner joins actual scientific dispositions to current native authoring records.
// No transition, independent review, publication or gate acceptance is asserted.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {loadStep1Record,itemHash} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',research=join(root,'research');
const out=join(research,run+'-owner-readiness-rebind-5');
if(existsSync(join(out,'completion.json')))throw Error('Already recorded; use a fresh explicit amendment');
const sha=b=>createHash('sha256').update(b).digest('hex'),json=p=>JSON.parse(readFileSync(p,'utf8'));
const metadata=json(join(research,run+'-owner-escalation-metadata-4/completion.json'));
const stable=new Set(metadata.stable_batches),scientific=new Map(),reports=[];
const definitions=[
 ['owner-emg-escalation-final-dispositions','items'],
 ['owner-emg-cauchy-authoring-readiness-dispositions','items'],
 ['owner-tgr-final-readiness-dispositions','rows'],
 ['owner-qsm-and-ode-readiness-dispositions','records'],
 ['owner-csm-final-authoring-dispositions','items'],
 ['owner-thermal75-final-dispositions','dispositions'],
];
function actualReviewedRaw(row){
 for(const key of ['source','source_binding','current_source','carrier']){
  const value=row[key];if(value?.raw_sha256)return value.raw_sha256;
  if(value?.raw_source_sha256)return value.raw_source_sha256;
 }
 return row.current_source_sha256;
}
for(const [suffix,key] of definitions){
 const path=join(research,run+'-'+suffix+'.json'),report=json(path);reports.push({path:path.slice(root.length),raw_sha256:sha(readFileSync(path))});
 for(const row of report[key]){
  const id=row.id??row.item,decision=row.disposition??row.decision??row.authoring_disposition;
  if(!['ready-for-authoring-readiness','ready-for-owner-record','ready-for-root-record'].includes(decision))throw Error('Unresolved disposition '+id);
  if(scientific.has(id))throw Error('Duplicate scientific ownership '+id);
  const source=join(root,'items',id+'.md'),current=readFileSync(source),reviewed=actualReviewedRaw(row);
  if(!reviewed)throw Error('No current scientific source binding '+id);
  if(sha(current)!==reviewed){
   const transition=metadata.changes.find(x=>x.id===id);
   const archived=join(research,run+'-owner-escalation-metadata-4/before/items',id+'.md');
   if(!transition||transition.before_raw_sha256!==reviewed||transition.after_raw_sha256!==sha(current)
      ||!existsSync(archived)||sha(readFileSync(archived))!==reviewed)throw Error('Unreviewed source change '+id);
   const before=readItem(archived),after=readItem(source);
   const clean=x=>{const {dependency_level,raw,body,file,...fm}=x;return fm;};
   if(before.body!==after.body||JSON.stringify(clean(before))!==JSON.stringify(clean(after)))throw Error('Non-level source mutation '+id);
  }
  const reason=row.scientific_reason??row.scientific_disposition??row.actual_supplier_use_disposition??row.scientific_use_disposition??row.basis??row.reason;
  if(typeof reason!=='string'||!reason.trim())throw Error('No scientific reason '+id);
  scientific.set(id,{report:reports.at(-1).path,reason,reviewed_raw:reviewed});
 }
}
if(scientific.size!==157)throw Error('Expected exact157 drained escalations, got '+scientific.size);
const typed=json(join(research,run+'-owner-emg-escalation-final-dispositions.json')).new10_supplier_carriers;
const newIds=new Set(typed.ids);if(newIds.size!==10)throw Error('Expected10 new typed suppliers');
const snapshot=loadStep1Record(root,run),sources=new Map(),records=[],beforeRows=[];
const currentState=json(join(root,'.physics-autopilot',run,'state.json'));
for(const batch of stable){const d=currentState.dispatches['1-scaffold:batch-'+batch];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Native scope not successfully drained '+batch);}
const subjects=[...snapshot.items].filter(([,home])=>stable.has(String(home.page.batch))).map(([id,home])=>({id,home}));
subjects.sort((a,b)=>a.home.item.dependency_level-b.home.item.dependency_level||a.id.localeCompare(b.id));
for(const {id,home} of subjects){
 const path=join(root,'items',id+'.md'),item=readItem(path),claim=home.item;
 if(item.id!==id||item.kind!==claim.kind||item.title!==claim.title||item.domain!==claim.domain
 ||item.dependency_level!==claim.dependency_level||JSON.stringify([...item.deps].sort())!==JSON.stringify([...claim.deps].sort()))throw Error('Metadata mismatch '+id);
 const oldPath=join(research,run+'-step1-'+id+'.json'),old=existsSync(oldPath)?json(oldPath):null,evidence=scientific.get(id);
 if(old?.decision==='escalated'&&!evidence)throw Error('Unresolved scientific escalation '+id);
 if(!old&&!newIds.has(id))throw Error('Unexpected missing native readiness '+id);
 let reason;
 if(evidence)reason=evidence.reason+' Evidence: '+evidence.report+'. Current-source numerical metadata amendment: research/'+run+'-owner-escalation-metadata-4/completion.json. Named scientific hold resolved; authoring readiness only, not independent approval or gate acceptance.';
 else if(newIds.has(id))reason='Full approved typed supplier authored and checked in existing typed/residual round2 scientific reports; actual source and computed numerical metadata match its current manifest. Evidence: '+typed.evidence.join(', ')+'. Authoring readiness only; ordinary independent review remains required.';
 else reason='Previously authored ready item in successful native batch '+home.page.batch+'. Rebound current source/dependency inputs after recorded prerequisite repairs and numerical metadata transcription; no new scientific review or independent approval is asserted. Existing authoring rationale: '+old.reason;
 const dependencies=[...new Set([...(item.deps??[]),...(item.justified_by??[]),...(item.forward_refs??[]),...(item.external_refs??[]),...(item.empirical_premises??[])])];
 records.push({item:id,decision:'ready',reason,dependencies});sources.set(id,item);
 beforeRows.push({item:id,path:oldPath,raw:existsSync(oldPath)?readFileSync(oldPath):null});
}
if(records.length!==335)throw Error('Expected exact335 successfully authored subjects');
// Seed the same strict identity index, then inspect actual presence/pins in the
// scoped dependency+discharge context, without auditing unrelated proofs.
itemHash(snapshot,records[0].item,records[0].dependencies);
const imports=json(join(research,'math-imports.json')),pins=new Map(imports.files.map(x=>[x.path,x]));
const seen=new Set(),queue=records.map(r=>({id:r.item,logical:true}));
for(const row of records)for(const id of row.dependencies)queue.push({id,logical:false});
for(let i=0;i<queue.length;i++){
 const entry=queue[i],idx=snapshot.identityIndex;
 const matches=idx.ids.get(entry.id)??idx.aliases.get(entry.id);
 const id=matches?.values().next().value??entry.id;
 if(seen.has(id))continue;seen.add(id);
 const path=join(root,'items',id+'.md');if(!existsSync(path))throw Error('Missing actual prerequisite carrier '+id);
 const item=sources.get(id)??readItem(path),owner=snapshot.items.get(id);
 if(owner&&!stable.has(String(owner.page.batch)))throw Error('Scoped prerequisite still native-incomplete '+id);
 if(entry.logical&&(item.kind==='open-problem'||id.startsWith('op-')))throw Error('Open logical supplier '+id);
 const pin=pins.get('items/'+id+'.md');
 if(pin){if(sha(item.raw)!==pin.sha256)throw Error('Changed import '+id);const original=join(imports.source_root,pin.source_path??pin.path);if(sha(readFileSync(original))!==pin.sha256)throw Error('Changed root original '+id);}
 const claim=owner?.item??snapshot.planned.get(id)?.item;
 for(const field of ['deps','justified_by','forward_refs'])for(const ref of new Set([...(item[field]??[]),...(claim?.[field]??[])]))queue.push({id:ref,logical:field!=='forward_refs'});
}
mkdirSync(join(out,'before'),{recursive:true});
for(const row of beforeRows)if(row.raw){const path=join(out,'before',row.item+'.json');if(existsSync(path)&&!readFileSync(path).equals(row.raw))throw Error('Archived predecessor differs '+row.item);writeFileSync(path,row.raw);}
writeFileSync(join(out,'request.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Owner actual scientific dispositions plus current-source structural metadata, preserved prior readiness rows; no gate or independent review.',reports,records,context_items:seen.size,metadata_amendment:run+'-owner-escalation-metadata-4/completion.json'},null,2)+'\n');
const rows=recordStep1Batch(root,{run,records,owner:true});
const fresh=loadStep1Record(root,run),bad=[];
for(const row of rows){const result=step1Decision(fresh,row.item);if(!result.closed)bad.push({item:row.item,reason:result.reason});}
if(bad.length)throw Error('Fresh native readiness verification failed '+JSON.stringify(bad));
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Current native authoring readiness only; no independent review/publication/gate.',subjects:rows.length,escalations_resolved:scientific.size,new_typed_suppliers:newIds.size,all_fresh_native_records_closed:true,reports,context_items:seen.size,record_hashes:rows.map(x=>({item:x.item,sha256:x.sha256}))},null,2)+'\n');
console.log(JSON.stringify({subjects:rows.length,escalations_resolved:scientific.size,new_typed_suppliers:newIds.size,context_items:seen.size,fresh_native_closed:true}));
