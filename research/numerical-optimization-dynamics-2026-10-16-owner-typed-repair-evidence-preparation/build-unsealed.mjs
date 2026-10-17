// ROOT ONLY research builder. NO hashes, native tools, source/ledger edits or canonical application.
// Root runs only after actual decision owners complete and exports exact owed target objects.
import fs from 'node:fs';import path from 'node:path';
import {activeOwnershipRows} from '../../tools/defect-ledger-ownership.mjs';
const run='numerical-optimization-dynamics-2026-10-16',argv=process.argv.slice(2),option=k=>argv.includes(k)?argv[argv.indexOf(k)+1]:null;
const require=(ok,msg)=>{if(!ok)throw Error(msg);},read=p=>fs.readFileSync(p),json=p=>JSON.parse(read(p));
function own(p){require(typeof p==='string'&&p.startsWith(`research/${run}-`)&&!p.includes('\\')&&!p.split('/').includes('..'),'Ownrun research path required');return p;}
const authPath=own(option('--authorization')),authBytes=read(authPath),a=JSON.parse(authBytes),out=own(a.output_directory);
require(a.version===1&&a.run===run&&a.authorized_by==='root'&&a.all_selected_decision_owners_complete===true,'Actual final owner completion/root selection required');require(!fs.existsSync(out),'Fresh output required');
const evidencePath=`research/${run}-step3-owner-repair-evidence.json`,oldBytes=fs.existsSync(evidencePath)?read(evidencePath):null,doc=oldBytes?JSON.parse(oldBytes):{version:1,run};require(doc.version===1&&doc.run===run,'Existing owner evidence identity');
const ledgerBytes=read('research/defect-ledger.jsonl'),errors=[],ledger=activeOwnershipRows(ledgerBytes.toString().split(/\r?\n/).filter(Boolean).map(JSON.parse).filter(x=>x.run===run),errors);require(!errors.length,'Ledger ownership history requires root resolution');
const jobs=[],inputs=new Map([['research/defect-ledger.jsonl',ledgerBytes]]),work=[];
const targets=JSON.parse(capture(own(a.actual_targets_file)));
function capture(p){const bytes=read(p);if(inputs.has(p))require(inputs.get(p).equals(bytes),'Input changed '+p);else inputs.set(p,bytes);return bytes;}
function targetFor(binding){const d=JSON.parse(capture(own(binding.decision_path))).decisions.filter(x=>x.obligation===binding.obligation);require(d.length===1,'Exact final decision missing/ambiguous');const target=targets[binding.obligation];require(target&&target.obligation===binding.obligation&&target.id===d[0].id&&target.route===d[0].route,'Exact actual owed target missing/mismatched');require(!['escalated','context_accepted'].includes(d[0].verdict)&&d[0].repair_confidence===1,'Genuine completed confident decision required, never invented by builder');return{decision:d[0],target};}
function ref(p,pointer){capture(p);jobs.push({destination:pointer,algorithm:'raw-sha256',path:p});return{path:p,sha256:null};}
for(const request of a.requests??[]){
 require(['shared_defects','prior_applied_repairs'].includes(request.kind),'No invented stabilized evidence array');
 const matches=ledger.filter(x=>x.defect_id===request.defect_id);require(matches.length===1,'Exact ACTIVE successor row required');const row=matches[0];require(['fixed','narrowed','dropped'].includes(row.disposition)&&row.subject===request.id,'Real closed same-subject row required');
 require(typeof request.reason==='string'&&request.reason.trim().length>=80,'Concrete focused reason required');
 const list=doc[request.kind]??=[];require(Array.isArray(list),'Existing evidence array malformed');require(!list.some(x=>x.defect_id===request.defect_id&&(request.kind==='shared_defects'||x.obligation===request.obligation)),'Existing entry already owns coordinate; root must review instead of duplicating/replacing');
 const index=list.length,prefix=`/${request.kind}/${index}`,current=`items/${request.id}.md`;capture(current);
 const entry={id:request.id,defect_id:request.defect_id,ledger_row_sha256:null,reason:request.reason,current_path:current,current_raw_sha256:null,evidence:[]};
 jobs.push({destination:prefix+'/ledger_row_sha256',algorithm:'native-hashValue',value:row},{destination:prefix+'/current_raw_sha256',algorithm:'raw-sha256',path:current});
 require(request.evidence_paths?.length,'Genuine source/creator/reviewer artifacts required');entry.evidence=request.evidence_paths.map((p,i)=>ref(p,prefix+`/evidence/${i}/sha256`));
 if(request.kind==='shared_defects'){
  require(request.bindings?.length>=2,'At least two actual obligations');const bound=request.bindings.map(b=>({...b,...targetFor(b)}));require(bound.every(x=>x.decision.id===request.id),'Owner shared_defects is SAME subject only; helper uses built-in causal route');
  require(bound.some(x=>x.decision.same_defect_evidence?.trim().length>=40&&bound.some(y=>y.obligation===x.decision.same_defect_as)),'Actual native explicit sharing link required');
  entry.obligations=bound.map((x,i)=>{require(x.decision.defect_ids.includes(row.defect_id),'Final native decision must reference actual active successor');jobs.push({destination:prefix+`/obligations/${i}/target_sha256`,algorithm:'native-hashValue',value:x.target});return{obligation:x.obligation,target_sha256:null};});
 }else{
  require(request.required_because_current_equals_original_observed===true,'Do not generate priorApplied speculatively');
  const binding={decision_path:request.decision_path,obligation:request.obligation},{decision,target}=targetFor(binding);require(decision.id===request.id&&decision.defect_ids.includes(row.defect_id),'Final decision identity/closed row mismatch');
  const before=capture(own(request.before_file)).toString(),after=capture(current).toString();require(typeof request.before_literal==='string'&&request.before_literal&&typeof request.after_literal==='string'&&request.after_literal,'Exact literals required');require(after.split(request.after_literal).length===2&&after.replace(request.after_literal,()=>request.before_literal)===before,'Exact unique inverse-literal reconstruction must equal genuine before bytes');
  Object.assign(entry,{obligation:request.obligation,target_sha256:null,after_raw_sha256:null,before_raw_sha256:null,before_literal:request.before_literal,after_literal:request.after_literal,original_owner_artifact:{path:request.original_owner_artifact,sha256:null}});
  // Root supplies a genuine owner artifact already documenting real before/after hashes;
  // or seals an explicitly new retrospective binding from original receipt+archives first.
  capture(own(request.original_owner_artifact));jobs.push({destination:prefix+'/target_sha256',algorithm:'native-hashValue',value:target},{destination:prefix+'/before_raw_sha256',algorithm:'raw-sha256',path:request.before_file},{destination:prefix+'/after_raw_sha256',algorithm:'raw-sha256',path:current},{destination:prefix+'/original_owner_artifact/sha256',algorithm:'raw-sha256',path:request.original_owner_artifact});
 }
 list.push(entry);work.push({kind:request.kind,id:request.id,defect_id:request.defect_id,scope:'UNSEALED actual native decision target/active row binding; no observation rewrite/acceptance'});
}
for(const [p,bytes]of inputs)require(read(p).equals(bytes),'Input changed while reading '+p);
require(oldBytes?(fs.existsSync(evidencePath)&&read(evidencePath).equals(oldBytes)):!fs.existsSync(evidencePath),'Existing owner evidence changed during preparation');
fs.mkdirSync(out);const save=(p,b)=>{const dest=path.join(out,p);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,b,{flag:'wx'});};
save('ROOT-authorization.json',authBytes);save('existing-owner-evidence.before',oldBytes??'ABSENT\n');save('owner-evidence.UNSEALED.json',JSON.stringify(doc,null,2)+'\n');save('root-hash-jobs.json',JSON.stringify({run,algorithm_note:'native-hashValue is tools/step3-scope.mjs canonical recursively sorted object JSON, undefined represented as literal undefined. ROOT owns all hash generation. Deduplicate raw file hashes/cache identical canonical objects once; fill dependent original owner artifact before hashing it.',jobs},null,2)+'\n');
for(const [p,bytes]of inputs)save('inputs/'+p,bytes);
save('preparation.json',JSON.stringify({run,unsealed:true,work,hashes_computed:false,canonical_writes:0,native_acceptance:false,limits:'Root final guards+hashes+review/application only after current final native owners. No source/manifest/contract/decision/ledger edits or report observations synthesized.'},null,2)+'\n');console.log(out);
