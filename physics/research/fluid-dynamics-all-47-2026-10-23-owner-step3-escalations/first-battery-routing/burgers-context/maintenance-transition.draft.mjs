// DRAFT pure guard for the EXISTING externalContextReceipt supersession loop.
// Caller has already authenticated the root context receipt, exact finding,
// current published supplier/consumer, and retained maintenance entry.
export function recordedMaintenanceToDeferred(entry,prior,current,{run,decisionPath,obligation,hashValue}){
  if(current?.run!==run||prior?.run!==run||current.disposition!=='deferred'
    ||prior.disposition!=='nonfatal-recorded'||current.severity==='fatal'||prior.severity==='fatal'
    ||current.caught_at_stage!=='3a-adjudicate'||prior.caught_at_stage!=='3a-adjudicate'
    ||!Array.isArray(current.supersedes)||!current.supersedes.includes(prior.defect_id))return false;
  const entries=(entry.maintenance_disposition_transitions??[])
    .filter(x=>x.prior_defect_id===prior.defect_id);
  if(entries.length!==1)return false;const t=entries[0];
  if(t.reviewed_by!=='root'||t.from!=='nonfatal-recorded'||t.to!=='deferred'
    ||t.prior_row_sha256!==hashValue(prior)||typeof t.rationale!=='string'||t.rationale.trim().length<100)return false;
  if(!['subject','class','subclass','severity','location','batch','consumer_id']
    .every(k=>prior[k]===current[k]))return false;
  const ref=x=>x.path===decisionPath&&x.obligation===obligation;
  return(prior.adjudication_ref??[]).some(ref)&&(current.adjudication_ref??[]).some(ref);
}
