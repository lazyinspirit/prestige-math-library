import fs from 'node:fs';
import crypto from 'node:crypto';
import { activeOwnershipRows } from '../../../../tools/defect-ledger-ownership.mjs';
const run='frontier-44-special-representation-examples-28-six-step';
const dest='research/'+run+'-owner-escalation-repairs/resume-20261011/klr-labels';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hashValue=x=>sha(JSON.stringify(canonical(x))??'undefined');
const write=(name,value)=>fs.writeFileSync(dest+'/'+name,JSON.stringify(value,null,2)+'\n');
const native='research/'+run+'-alpha-batch-47-3a-decisions.json';
const scopePath='research/'+run+'-step3-scope-47.json';
const manifestPath='research/'+run+'-batch-47.pages.json';
const contractPath='research/'+run+'-batch-47.proof-contracts.json';
const ledgerPath='research/defect-ledger.jsonl';
const ownerEvidencePath='research/'+run+'-step3-owner-repair-evidence.json';
const sourceProposals=json(dest+'/guarded-closure-proposals.json').proposals;
const scope=json(scopePath),manifest=json(manifestPath),contracts=json(contractPath).contracts;
const originals=json(native).decisions;
const ledgerLines=read(ledgerPath).split('\n').filter(Boolean);
const ledger=ledgerLines.map(x=>JSON.parse(x));
const ownershipErrors=[];
const active=activeOwnershipRows(ledger.filter(x=>x.run===run),ownershipErrors);
if(ownershipErrors.length)throw Error(ownershipErrors.join('\n'));
const allIds=new Set(ledger.map(x=>x.defect_id));
const itemRows=new Map();
for(const page of Array.isArray(manifest)?manifest:manifest.pages)for(const x of page.items??[]){const item=typeof x==='string'?{id:x}:x;itemRows.set(item.id,canonical({...item,__step4_page_id:String(page.id)}));}
const rows=[],decisions=[],bindings=[],immutableRows=[],checks=[],shared=[];
const rowByOld=new Map();
const guards={};
for(const path of [native,scopePath,manifestPath,contractPath,ledgerPath,ownerEvidencePath,dest+'/assessment.md',dest+'/focused-consumer-checks.json',dest+'/guarded-closure-proposals.json'])if(fs.existsSync(path))guards[path]=sha(read(path));
const priorGuards=json(dest+'/input-guards.json');
guards[dest+'/input-guards.json']=sha(read(dest+'/input-guards.json'));
for(const guard of Object.values(priorGuards.item_guards)){
 if(sha(read(guard.path))!==guard.raw_sha256)throw Error('Supplier/consumer binding changed: '+guard.path);
 guards[guard.path]=guard.raw_sha256;
}
for(const proposal of sourceProposals){
 const original=originals.find(x=>x.obligation===proposal.obligation);
 if(!original||hashValue(original)!==hashValue(proposal.original_decision))throw Error('Native original changed: '+proposal.obligation);
 const target=proposal.obligation.startsWith('touched:')?{obligation:proposal.obligation,id:original.id,batch:'47',route:'touched',added:(scope.added??[]).includes(original.id)}:{...scope.refuter_findings.find(x=>x.obligation===proposal.obligation),route:'flagged'};
 if(target.id!==original.id)throw Error('Frozen target mismatch: '+proposal.obligation);
 const path='items/'+original.id+'.md',raw=sha(read(path));guards[path]=raw;
 if(!contracts[original.id]||!itemRows.has(original.id))throw Error('Missing owned contract/manifest '+original.id);
 const carrier={item_sha256:raw,contract_sha256:hashValue(contracts[original.id]),manifest_sha256:hashValue(itemRows.get(original.id))};
 const originalId=original.defect_ids[0];
 let row=rowByOld.get(originalId);
 if(!row){
  const prior=active.find(x=>x.defect_id===originalId);
  if(!prior)throw Error('Original defect is not active '+originalId);
  const index=ledger.findIndex(x=>x.defect_id===originalId);
  if(ledger.filter(x=>x.defect_id===originalId).length!==1)throw Error('Duplicated original id '+originalId);
  immutableRows.push({path:ledgerPath,line:index+1,raw_line:ledgerLines[index],raw_line_sha256:sha(ledgerLines[index]),row:prior});
  if(prior.disposition==='fixed')row=prior;
  else{
   if(prior.disposition!=='open')throw Error('Unexpected original disposition '+originalId);
   const newId=originalId+'-owner-resolved-r1-20261011';if(allIds.has(newId))throw Error('New id already exists '+newId);allIds.add(newId);
   row={...structuredClone(prior),defect_id:newId,at:new Date().toISOString(),disposition:'fixed',supersedes:[originalId],item_sha256:json(dest+'/input-guards.json').item_guards[original.id].content_sha256,repair_confidence:1,correction:proposal.concrete_complete_repair_grounds+' Complete current physical proof and exact affected uses checked; original findings remain historical true. No scope narrowing, new worker execution or refunded round.',evidence:[...structuredClone(prior.evidence??[]),{path:dest+'/assessment.md',note:proposal.concrete_complete_repair_grounds},{path:dest+'/focused-consumer-checks.json',note:'Six current carriers and all14 reachable item consumers checked at actual label uses; original hypotheses and scope remain.'}]};
   rows.push(row);
  }
  rowByOld.set(originalId,row);
 }
 const replacement=structuredClone(proposal.proposed_replacement);
 replacement.defect_ids=[row.defect_id];replacement.subject_sha256=hashValue(carrier);
 replacement.owner_resolution='Complete physical repair proposed after current proof and exact14-descendant actual-use checks: '+proposal.concrete_complete_repair_grounds+' Native immutable observations, original severity and source/round histories remain preserved; ROOT validation/application is the outstanding control action, not an absent mathematical calculation.';
 if(original.route==='touched')replacement.verdict='amended_repair';
 if(proposal.obligation==='refuter:47:20'){replacement.same_defect_as='touched:47:'+original.id;replacement.same_defect_evidence='Both immutable native observations identify the same missing exact all-color/all-path FIRST/RIGHT comparison, now supplied by the current vector-defined eta, free exact-string quotient calculation, mirror conversion and completed canonical crystal recognition.';}
 decisions.push({obligation:original.obligation,decision_file:native,before_file_sha256:sha(read(native)),before_decision_sha256:hashValue(original),before:original,replacement});
 bindings.push({obligation:original.obligation,scope_path:scopePath,scope_sha256:sha(read(scopePath)),target,target_sha256:hashValue(target),current_carrier:carrier,subject_sha256:hashValue(carrier)});
 checks.push({obligation:original.obligation,decision_route_matches_target:replacement.id===target.id&&replacement.route===target.route,allowed_verdict:original.route==='touched'?replacement.verdict==='amended_repair':replacement.verdict==='confirmed_fatal',physical_completion_marker:replacement.repair_confidence===1,current_contract_present:true,owned_manifest_present:true,current_hash_matches:replacement.subject_sha256===hashValue(carrier),row_exact_adjudication_reference:(row.adjudication_ref??[]).some(x=>x.path===native&&x.obligation===original.obligation)});
}
for(const [oldId,row] of rowByOld){const tied=decisions.filter(x=>x.replacement.defect_ids.includes(row.defect_id));shared.push({id:row.subject,defect_id:row.defect_id,ledger_row_sha256:hashValue(row),reason:tied.map(x=>x.replacement.owner_resolution).join(' '),current_path:'items/'+row.subject+'.md',current_raw_sha256:sha(read('items/'+row.subject+'.md')),evidence:[{path:dest+'/assessment.md',sha256:sha(read(dest+'/assessment.md'))},{path:dest+'/focused-consumer-checks.json',sha256:sha(read(dest+'/focused-consumer-checks.json'))}],obligations:tied.map(x=>({obligation:x.obligation,target_sha256:bindings.find(y=>y.obligation===x.obligation).target_sha256}))});}
const projectedErrors=[];
const projected=activeOwnershipRows([...ledger.filter(x=>x.run===run),...rows],projectedErrors);
for(const row of rows){if(projected.filter(x=>x.defect_id===row.defect_id).length!==1)projectedErrors.push('New row not sole active '+row.defect_id);for(const old of row.supersedes)if(projected.some(x=>x.defect_id===old))projectedErrors.push('Old row still active '+old);}
if(checks.some(x=>Object.values(x).some(v=>v===false))||projectedErrors.length)throw Error(JSON.stringify({checks,projectedErrors}));
const sharedChecks=[];
for(const entry of shared){
 const row=[...rowByOld.values()].find(x=>x.defect_id===entry.defect_id);
 const evidenceBinds=entry.id===row.subject&&entry.ledger_row_sha256===hashValue(row)&&['fixed','narrowed','dropped'].includes(row.disposition)&&entry.reason.trim().length>=80&&sha(read(entry.current_path))===entry.current_raw_sha256&&entry.evidence.length>0&&entry.evidence.every(ref=>sha(read(ref.path))===ref.sha256);
 const targetBinds=entry.obligations.every(binding=>binding.target_sha256===bindings.find(x=>x.obligation===binding.obligation)?.target_sha256);
 const pair=decisions.filter(x=>x.replacement.defect_ids.includes(entry.defect_id)).map(x=>x.replacement);
 const sharedPairBinds=pair.length<2||pair.every(x=>x.id===entry.id&&x.repair_confidence===1)&&pair.some(x=>typeof x.same_defect_evidence==='string'&&x.same_defect_evidence.trim().length>=40&&entry.obligations.some(b=>b.obligation===x.same_defect_as));
 sharedChecks.push({defect_id:entry.defect_id,evidenceBinds,targetBinds,sharedPairBinds});
 if(!evidenceBinds||!targetBinds||!sharedPairBinds)throw Error('Exact ownerSharedDefect predicate failed '+entry.defect_id);
}
const summary={version:1,run,status:'exact-guarded-append-only-proposal-not-applied',recorded_at:new Date().toISOString(),closure_scope:decisions.map(x=>x.obligation),new_rows:rows.length,reused_fixed_rows:rowByOld.size-rows.length,input_guards:guards,immutable_original_ledger:immutableRows,frozen_target_bindings:bindings,guarded_decision_deltas:decisions,ownerSharedDefects:shared,ownership_validation:{errors:projectedErrors,checks,sharedChecks},preconditions:['All current guard paths/hash bytes match immediately before serialized application.','Eight new ids absent; all original ledger rows unique and byte-identical; append only through defect-ledger tool.','Preserve unrelated owner shared_defects and prior_applied_repairs; append these entries without replacing them.','Replace only these9 native decisions, retaining originals in this guard packet; page47 closure excluded.','No new native worker coverage, source/review round reset or gate is supplied.'],physical_completion_marker_semantics:'1 records complete concrete named physical repair plus focused actual-use verification, not probability1 or independent native acceptance.'};
write('native-application-pack.json',summary);
write('native-decision-application-array.json',decisions);
write('append-array.json',rows);
write('owner-shared-defect-entries.json',{version:1,run,shared_defects:shared,prior_applied_repairs:[]});
fs.writeFileSync(dest+'/validation-ledger.jsonl',[...ledger.filter(x=>x.run===run),...rows].map(x=>JSON.stringify(x)).join('\n')+'\n');
fs.writeFileSync(dest+'/scoped-schema-validation-ledger.jsonl',[...immutableRows.map(x=>x.row),...rows].map(x=>JSON.stringify(x)).join('\n')+'\n');
write('native-predicate-validation.json',{version:1,run,checks,sharedChecks,ownership_errors:projectedErrors,shared_entries:shared.length,append_rows:rows.length,gate_attempt:false,canonical_mutations:[]});
console.log(JSON.stringify({decisions:decisions.length,append_rows:rows.length,shared_entries:shared.length,checks:checks.length,ownership_errors:projectedErrors.length}));
