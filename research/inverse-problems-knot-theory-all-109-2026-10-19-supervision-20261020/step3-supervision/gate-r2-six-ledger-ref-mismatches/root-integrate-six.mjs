#!/usr/bin/env node
// Root-run only. Preview has no writes. No hashes, gate calls, source edits or state controls.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {resolve,relative,dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {isDeepStrictEqual as equal} from 'node:util';
const here=dirname(fileURLToPath(import.meta.url));
const root=process.cwd();
const args=process.argv.slice(2),apply=args.includes('--apply');
const requireTrue=(v,m)=>{if(!v)throw Error(m)};
const read=p=>readFileSync(resolve(root,p),'utf8');
const proposal=JSON.parse(readFileSync(join(here,'guarded-proposal.json'),'utf8'));
const originals=JSON.parse(readFileSync(join(here,'original-ledger-rows.json'),'utf8'));
const ledgerPath='research/defect-ledger.jsonl';
const decisionPaths=[...new Set([...proposal.decision_field_patches,...proposal.append_subject_correct_decisions].map(x=>x.file))];
const initialLedger=read(ledgerPath);
const parseLedger=s=>s.split('\n').filter(x=>x.trim()).map(x=>JSON.parse(x));
const ledger=parseLedger(initialLedger), ledgerIds=new Set(ledger.map(x=>x.defect_id));
const originalDocuments=new Map(decisionPaths.map(p=>[p,read(p)]));
const docs=new Map([...originalDocuments].map(([p,s])=>[p,JSON.parse(s)]));
const tool=read('tools/defect-ledger.mjs');
// Check actual tool taxonomy clauses, not a presumed synonym; native append is the final row validator.
for(const [field,values] of Object.entries({class:['accuracy'],subclass:['citation-inaccurate','reader-repair'],severity:['nonfatal'],location:['frontmatter','proof-step'],caught_by_role:['owner'],disposition:['fixed']})){
 const start=tool.indexOf(field+': [');requireTrue(start>=0,'Cannot locate native taxonomy '+field);
 const body=tool.slice(start,tool.indexOf('],',start)+2);for(const value of values)requireTrue(body.includes("'"+value+"'"),'Native taxonomy lacks '+field+':'+value);
}
requireTrue(tool.includes("'3a-adjudicate'"),'Native stage enum no longer contains 3a-adjudicate');
requireTrue(proposal.decision_field_patches.length===5&&proposal.append_subject_disjoint_ledger_rows.length===4&&proposal.append_subject_correct_decisions.length===2,'Unexpected proposal cardinality');
for(const row of originals){requireTrue(ledger.filter(x=>x.defect_id===row.defect_id).length===1,'Original ledger ID absent/duplicated: '+row.defect_id);requireTrue(equal(ledger.find(x=>x.defect_id===row.defect_id),row),'Original ledger row changed: '+row.defect_id)}
for(const patch of proposal.decision_field_patches){
 const doc=docs.get(patch.file),matches=doc.decisions.filter(x=>x.obligation===patch.obligation);
 requireTrue(matches.length===1,'Decision missing/duplicate '+patch.obligation);
 requireTrue(equal(matches[0],patch.before_decision),'Full decision preimage changed '+patch.obligation);
 requireTrue(patch.field==='defect_ids'&&equal(matches[0].defect_ids,patch.before),'Unexpected field/preimage');
 matches[0].defect_ids=structuredClone(patch.after);
}
const newRows=structuredClone(proposal.append_subject_disjoint_ledger_rows);
for(const row of newRows){requireTrue(!ledgerIds.has(row.defect_id),'New ledger ID already exists '+row.defect_id);ledgerIds.add(row.defect_id);requireTrue(row.caught_by_role==='owner','New row must have honest owner attribution');requireTrue(row.subject!==originals.find(x=>x.defect_id===row.related_historical_defect)?.subject,'New row accidentally duplicates supplier subject');}
const oldUnrollingGate='gate:ipkt109-b46-owner-unrolling-product-measurability-fixed';
requireTrue(docs.get(decisionPaths.find(p=>p.includes('batch-46-'))).decisions.some(x=>x.obligation===oldUnrollingGate),'Separate actual owner unrolling resolution is missing');
for(const add of proposal.append_subject_correct_decisions){
 const doc=docs.get(add.file);requireTrue(!doc.decisions.some(x=>x.obligation===add.require_absent_obligation),'Supplemental route already present '+add.require_absent_obligation);
 const d=structuredClone(add.decision),row=originals.find(x=>d.defect_ids.includes(x.defect_id));
 requireTrue(row&&row.subject===d.id&&d.obligation==='gate:'+row.defect_id,'Supplemental subject/row mismatch');
 d.evidence+=' The original native report and immutable ledger note describe the then-open unrolling prerequisite historically; it is now separately resolved by '+oldUnrollingGate+'. This citation-only supplemental route claims neither that unrolling remains open nor that the old citation row resolved it.';
 doc.decisions.push(d);
}
const proposedLedger=[...ledger,...newRows];
for(const patch of proposal.decision_field_patches){const d=docs.get(patch.file).decisions.find(x=>x.obligation===patch.obligation);for(const id of d.defect_ids){const row=proposedLedger.find(x=>x.defect_id===id);requireTrue(row?.subject===d.id,'Remaining subject mismatch '+d.obligation+' -> '+id)}}
const preview={mode:apply?'apply':'preview',run:proposal.run,original_ledger_rows_preserved:originals.length,decision_fields:5,new_subject_disjoint_ledger_rows:4,supplemental_subject_correct_routes:2,decision_documents:decisionPaths.length,tool_taxonomy_checked:true,hashes_computed:false,native_gate_calls:false,canonical_source_changes:false,holds:[]};
if(!apply){console.log(JSON.stringify(preview,null,2));process.exit(0)}
requireTrue(args.includes('--approve-root-six-only'),'Apply requires explicit --approve-root-six-only');
const at=new Date().toISOString(),archive=join(here,'application-'+at.replaceAll(':','-'));
requireTrue(!existsSync(archive),'Application archive already exists');
// Complete ALL guards before the first archive/write. No earlier proposal can overwrite concurrent root changes.
for(const [p,s]of originalDocuments)requireTrue(read(p)===s,'Document changed during planning '+p);
requireTrue(read(ledgerPath)===initialLedger,'Ledger changed during planning');
mkdirSync(archive,{recursive:true});
for(const [p,s]of originalDocuments){const dest=join(archive,'before',p);mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,s)}
writeFileSync(join(archive,'original-ledger-full-before.jsonl'),initialLedger);
writeFileSync(join(archive,'guarded-proposal.json'),readFileSync(join(here,'guarded-proposal.json')));
for(const row of newRows){row.at=at;row.caught_by_role='owner';row.recorded_by='/root';row.reconciliation_review='/root/instanton_original_review';row.subclass_note+=' Recorded at actual root integration time; existing native reading/review is attributed solely to the cited original report.';}
writeFileSync(join(archive,'rows-for-native-append.json'),JSON.stringify(newRows,null,2)+'\n');
let receipt={...preview,at,archive:relative(root,archive),status:'prepared-not-completed',ledger_append_completed:false,decision_files_written:[],stamps_added:false,root_next:'Use native current-input stamping separately; this script does not compute or rebind any carrier hash.'};
const receiptPath=join(archive,'application.json');
const save=()=>writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n');save();
try{
 // Recheck after archive creation, before mutation; native append also locks/validates the ledger atomically.
 for(const[p,s]of originalDocuments)requireTrue(read(p)===s,'Document changed before native append '+p);
 requireTrue(read(ledgerPath)===initialLedger,'Ledger changed before native append');
 const result=spawnSync(process.execPath,['tools/defect-ledger.mjs','append','--file',join(archive,'rows-for-native-append.json')],{cwd:root,encoding:'utf8',maxBuffer:8*1024*1024});
 writeFileSync(join(archive,'native-append.stdout.txt'),result.stdout??'');writeFileSync(join(archive,'native-append.stderr.txt'),result.stderr??'');
 receipt.native_append_exit=result.status;
 const actual=read(ledgerPath),afterRows=parseLedger(actual);
 receipt.ledger_append_completed=newRows.every(r=>afterRows.some(x=>equal(x,r)));save();
 requireTrue(result.status===0,'Native append failed; inspect receipt/logs. Never retry blindly.');
 requireTrue(actual.startsWith(initialLedger),'Append-only ledger prefix changed');
 requireTrue(receipt.ledger_append_completed,'Native append did not retain exact proposed rows');
 for(const[p,s]of originalDocuments)requireTrue(read(p)===s,'Document changed after native append; stop before overwriting '+p);
 for(const[p,doc]of docs){const dest=resolve(root,p),tmp=dest+'.six-ledger-root-tmp';requireTrue(!existsSync(tmp),'Temporary target exists '+tmp);const output=JSON.stringify(doc,null,2)+'\n';writeFileSync(tmp,output,{flag:'wx'});renameSync(tmp,dest);receipt.decision_files_written.push(p);const copied=join(archive,'after',p);mkdirSync(dirname(copied),{recursive:true});writeFileSync(copied,output);save()}
 receipt.status='applied-owner-routing-only';save();console.log(JSON.stringify(receipt,null,2));
}catch(error){receipt.status='stopped-needs-root-inspection';receipt.error=String(error);save();throw error}
