// Verify actual focused native results and strict allowed-field/source guards.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
const run='numerical-optimization-dynamics-2026-10-16',base=`research/${run}-ROOT-native-sharing-followups`;
const read=p=>fs.readFileSync(p),json=p=>JSON.parse(read(p));
const sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const eq=(a,b)=>JSON.stringify(canon(a))===JSON.stringify(canon(b));
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const results=[];
for(const spec of json(`${base}/launch-plan.json`)){
 const b=spec.batch,dir=`${base}/b${b}`,prefix=`research/${run}-dispatch/alpha-3a-batch-${b}`;
 const ip=`${prefix}.attempt-${spec.attempt}.result.json`,r=json(ip);
 assert(r.run===run&&r.role==='alpha'&&r.label===`3a-batch-${b}`&&r.attempt===spec.attempt&&r.ok===true&&r.exit_code===0&&r.process_exit_code===0&&r.timed_out===false&&r.terminal_summary.task_completed===true&&r.terminal_summary.task_aborted===false&&r.terminal_summary.final_response_present===true,'Genuine successful current native result');
 assert(read(ip).equals(read(`${prefix}.result.json`)),'Stable result equals actual immutable attempt');
 const dp=`research/${run}-alpha-batch-${b}-3a-decisions.json`,before=json(`${dir}/${run}-alpha-batch-${b}-3a-decisions.json`),after=json(dp),expected=json(`${dir}/exact-family-context.json`);
 const omit=({same_defect_as,same_defect_evidence,...x})=>x;
 assert(before.decisions.length===after.decisions.length,'Native inventory unchanged');
 const changes=[];
 for(let i=0;i<before.decisions.length;i++){
  const a=before.decisions[i],z=after.decisions[i];if(eq(a,z))continue;
  assert(eq(omit(a),omit(z)),'Only two explanatory native fields may change');
  const matches=expected.filter(x=>x.smallest_followup.decision_obligation===z.obligation);
  assert(matches.length===1&&matches[0].smallest_followup.candidate_same_defect_as===z.same_defect_as&&typeof z.same_defect_evidence==='string'&&z.same_defect_evidence.length>=80,'Actual narrowly assigned identity annotation');changes.push(z.obligation);
 }
 assert(changes.length===expected.length,'All assigned actual links completed');
 for(const g of json(`${dir}/before-guards.json`).guards){
  if(g.path.includes('-alpha-batch-')||g.path.endsWith('.result.json'))continue;
  assert(sha(read(g.path))===g.sha256,'Source/manifest/contract changed: '+g.path);
 }
 const rp=`research/${run}-alpha-batch-${b}-3a.md`,old=read(`${dir}/${run}-alpha-batch-${b}-3a.md`),now=read(rp);
 assert(now.subarray(0,old.length).equals(old),'Original complete report preserved verbatim');
 results.push({batch:b,attempt:r.attempt,session_id:r.session_id,result:{path:ip,sha256:sha(read(ip))},ended_at:r.ended_at,actual_annotations:changes,source_manifest_contract_unchanged:true,full_original_report_preserved:true});
}
const output=`${base}/ROOT-verified-completions.json`;assert(!fs.existsSync(output),'No overwrite');
fs.writeFileSync(output,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),reviewed_by:'/root',results,scope:'Actual explanatory metadata only; no fresh whole-proof review or verdict supplied; mandatory full native battery remains owed.'},null,2)+'\n');console.log(output);
