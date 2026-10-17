import {readFileSync,writeFileSync,mkdtempSync,rmSync,existsSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const run='physics-remaining-80-2026-10-17',base='research/'+run+'-owner-step5-final-ledger-adoption';
const raw=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p,'utf8'));
const mapping=read(base+'/mapping-report.json'),ledgerPath='research/defect-ledger.jsonl',ledgerBytes=readFileSync(ledgerPath),ledgerLines=ledgerBytes.toString().trimEnd().split('\n'),ledger=ledgerLines.map(JSON.parse);
const oldCount=mapping.canonical_ledger_at_observation.rows,prefix=ledgerLines.slice(0,oldCount).join('\n')+'\n';assert.equal(raw(prefix),mapping.canonical_ledger_at_observation.sha256,'old canonical ledger prefix unchanged');
const appended=ledger.slice(oldCount),superseded=new Set(ledger.flatMap(r=>r.supersedes??[])),active=ledger.filter(r=>r.run===run&&!superseded.has(r.defect_id)),errors=[],verified=[];
const check=(ok,text)=>{if(!ok)errors.push(text);return !!ok;};
const same=(a,r)=>r.id===a.id&&r.item_sha256===a.item_sha256&&r.model===a.model&&r.context_sha256===a.context_sha256;
for(const entry of mapping.mapping){
 const a=entry.original_adjudication,owners=active.filter(r=>(r.adjudication_ref??[]).some(x=>same(a,x)));
 check(owners.length===1,a.id+': expected exactly one exact active canonical owner');if(owners.length!==1)continue;
 const row=owners[0],local=[];const verify=(ok,text)=>{if(!ok){local.push(text);errors.push(row.defect_id+': '+text);}return !!ok;};
 verify(appended.includes(row),'row must be newly appended after genuine observed prefix');verify(row.subject===a.id,'subject');verify(row.severity==='fatal'&&row.disposition==='fixed','fatal/fixed disposition');verify(row.caught_at_stage==='5-adjudicate'&&row.caught_by_role==='final-adjudicator','native adjudication stage/role');
 verify(row.original_defect_type===a.defect_type,'original native defect_type preserved');verify(row.correction===a.reason,'original exact decision/repair reason preserved');verify(row.adjudication_ref.length===1,'one original exact reference');
 const ref=row.adjudication_ref[0];verify(ref.path==='research/'+run+'-judge-adjudications.jsonl','exact adjudication ledger path');
 verify(row.recorded_by==='step5-v2-gate-r1-u2','actual native gate owner identity');
 const review=row.historical_author_review;verify(review.path===entry.bindings.report.path,'exact original native review report');verify(review.post_sha256===entry.native_original_review.post_sha256&&review.review_context_sha256===entry.native_original_review.review_context_sha256,'exact historical native author review stamps');
 verify(Array.isArray(row.evidence)&&row.evidence.length>0,'actual native evidence');
 const evidence=row.evidence.map(e=>{const actual=existsSync(e.path)?raw(readFileSync(e.path)):null;verify(actual===e.sha256,'genuine report bytes: '+e.path);return {...e,actual_sha256:actual,matches:actual===e.sha256};});
 verify(row.evidence.some(e=>e.path===entry.bindings.report.path&&e.sha256===entry.bindings.report.sha256),'canonical evidence matches original independently bound native report');
 const pack=read(entry.bindings.pack.path),report=read(entry.bindings.report.path),dispatch=read(entry.bindings.dispatch.path),collection=read(entry.bindings.collection.path);
 verify(report.input_sha256===raw(JSON.stringify(pack)),'original native report pack digest');
 verify(pack.before[a.id]===a.item_sha256,'exact original before guard');
 verify(pack.assignments[String(report.unit)].some(x=>x.id===a.id&&x.model===a.model&&x.context_sha256===a.context_sha256&&x.keep===false),'original judge tuple in actual native assignment');
 verify(dispatch.ok===true&&dispatch.role==='alpha-adjudicate'&&dispatch.run===run&&dispatch.model==='gpt-6.1-sol'&&dispatch.provider_effort==='high'&&dispatch.ended_at,'completed native Sol high authority');
 for(const key of ['pack','report','dispatch']){const r=entry.bindings[key];verify(raw(readFileSync(r.path))===r.sha256,'bound original '+key+' unchanged');verify(collection.evidence[resolve(r.path)]===r.sha256,'original collection authenticates '+key);}
 verify(report.decisions.some(d=>d.id===a.id&&d.model===a.model&&d.context_sha256===a.context_sha256&&d.outcome===a.outcome),'exact native confirmed fatal decision');
 verify(collection.decisions.some(d=>d.id===a.id&&d.model===a.model&&d.context_sha256===a.context_sha256&&d.outcome===a.outcome),'immutable collected decision');
 for(const key of ['impact_closed','original_certificate','current_certificate']){const r=entry.bindings[key];verify(raw(readFileSync(r.path))===r.sha256,'bound historical '+key+' unchanged');}
 const current=entry.bindings.current_source,sourceMatches=existsSync(current.path)&&raw(readFileSync(current.path))===current.sha256;
 verified.push({id:row.defect_id,subject:a.id,phase:a.step5_phase,round:a.step5_round,original_tuple:{id:a.id,model:a.model,item_sha256:a.item_sha256,context_sha256:a.context_sha256,outcome:a.outcome},taxonomy:{class:row.class,subclass:row.subclass,location:row.location},historical_evidence:evidence,current_source_matches_generation_observation:sourceMatches,errors:local});
}
check(appended.length===36,'expected exactly36newcanonicalrows after original3510snapshot');check(verified.length===36,'all36 missing original tuples have one active native owner');
const temp=mkdtempSync(join(tmpdir(),'step5-native-ledger-schema-'));let schema;
try{
 const incoming=join(temp,'native-rows.json'),ledger=join(temp,'validation-only.jsonl');writeFileSync(incoming,JSON.stringify(appended,null,2)+'\n');
 const result=spawnSync(process.execPath,['tools/physics-support/defect-ledger.mjs','append','--ledger',ledger,'--file',incoming,'--no-render'],{encoding:'utf8'});
 schema={tool:'tools/physics-support/defect-ledger.mjs append --ledger TEMP_VALIDATION_ONLY --file TEMP_NATIVE_36_ROWS --no-render',temporary_only:true,canonical_ledger_written:false,production_gate:false,status:result.status,stdout:result.stdout,stderr:result.stderr};check(result.status===0,'canonical closed-schema validation of36native rows failed');
}finally{rmSync(temp,{recursive:true,force:true});}
const afterBytes=readFileSync(ledgerPath);check(raw(afterBytes)===raw(ledgerBytes),'canonical ledger changed during independent read-only validation');
const result={version:1,run,at:new Date().toISOString(),scope:'Read-only provenance validation of actual native gate owner adoption. Candidate rows remain historical and MUST NOT be appended.',original_prefix:{rows:oldCount,sha256:raw(prefix)},observed_current_ledger:{rows:ledger.length,sha256:raw(ledgerBytes)},native_appended_count:appended.length,verified_count:verified.length,errors,schema_validation:schema,status:errors.length?'errors-found':'native-adoption-verified-root-current-closure-review-pending',adoption_authority:'Actual native gate-r1-u2 already appended36rows under its designated ledger-diagnostic assignment; this assistant made no canonical write.',root_pending:'Root independently rechecks current source/certificate/receipt state after all native Step5.9 writers drain. Historical certificates here are immutable round-specific evidence and do not assert current postrepair certification.',candidates:'Historical candidate-rows.json prepared before native adoption; do not append, because all original tuples now have exactly one active canonical owner.',rows:verified};
writeFileSync(base+'/native-adoption-validation.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({rows:ledger.length,verified:verified.length,errors,status:result.status,schema_status:schema.status,report:base+'/native-adoption-validation.json',current_sources_matching:verified.filter(x=>x.current_source_matches_generation_observation).length}));
