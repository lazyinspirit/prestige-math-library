// Authenticate one root-reviewed causal repair shared across producer/consumer
// groups. Read-only: never issue receipts, change observations or seal carriers.
import {createHash} from 'node:crypto';
export const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'
  ?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
export const hashObject=x=>digest(JSON.stringify(canonical(x)));
export function decisionCore(d){
  // Exclude only the pointer to this receipt, avoiding a circular hash.
  // Native subject stamps are independently checked by the existing checker.
  const {shared_causal_receipt_sha256:_receipt,subject_sha256:_stamp,...core}=d;
  return core;
}

export function sharedCausalRepair({run,prior,decision,target,canonicalRow,
  currentCarrier,readBytes,hashValue=hashObject}){
  try{
    const require=(ok,message)=>{if(!ok)throw Error(message);};
    const receiptPath=`research/${run}-step3-cross-group-causal-repairs.json`;
    const rb=readBytes(receiptPath),receipt=JSON.parse(rb);
    require(receipt.version===1&&receipt.run===run&&receipt.reviewed_by==='root'
      &&receipt.kind==='cross-group-shared-causal-repair','root receipt');
    require(digest(rb)===decision.shared_causal_receipt_sha256,'receipt pointer');
    const entries=receipt.repairs.filter(x=>x.canonical_defect_id===canonicalRow.defect_id
      &&x.primary.obligation===prior.obligation&&x.aliases.some(a=>a.obligation===decision.obligation));
    require(entries.length===1,'one exact repair');const e=entries[0];
    require(e.subject===canonicalRow.subject&&e.subject===prior.id&&e.subject===decision.id
      &&canonicalRow.run===run&&canonicalRow.caught_at_stage==='3a-adjudicate'
      &&canonicalRow.disposition==='fixed'&&canonicalRow.severity==='fatal'
      &&canonicalRow.repair_confidence===1,'one repaired fatal subject');
    require(hashValue(canonicalRow)===e.canonical_row_sha256,'exact merged row');
    require(Array.isArray(e.merged_original_ids)&&e.merged_original_ids.length===2
      &&new Set(e.merged_original_ids).size===2
      &&hashValue([...canonicalRow.supersedes].sort())===hashValue([...e.merged_original_ids].sort()),'two original rows merged');
    require(e.one_actual_defect===true&&typeof e.causal_statement==='string'
      &&e.causal_statement.length>=100,'explicit one-cause determination');
    const bind=g=>{
      require(g&&typeof g.path==='string'&&g.path.startsWith(`research/${run}-`)
        &&!g.path.split('/').includes('..')&&/^[a-f0-9]{64}$/.test(g.sha256),'guard shape');
      const b=readBytes(g.path);require(digest(b)===g.sha256,'guard bytes');return JSON.parse(b);
    };
    require(e.original_ledger_row_guards?.length===2,'original ledger row guards');
    const originals=e.original_ledger_row_guards.map(bind);
    require(originals.every(x=>x.run===run&&x.subject===e.subject)
      &&hashValue(originals.map(x=>x.defect_id).sort())===hashValue([...e.merged_original_ids].sort()),'same actual original subject');
    // Immutable evidence is authenticated, never rewritten or compared through
    // a manufactured observed_source or same-source alias.
    const scope3=bind(e.primary.scope_guard),scope12=bind(e.consumer_scope_guard);
    const p=e.primary,a=e.aliases.find(x=>x.obligation===decision.obligation);
    require(String(scope3.batch)===String(p.batch)&&scope3.run===run
      &&String(scope12.batch)===String(a.batch)&&scope12.run===run
      &&String(a.batch)!==String(p.batch),'different exact scope groups');
    require(p.route==='touched'&&prior.route==='touched'
      &&p.obligation===`touched:${p.batch}:${e.subject}`
      &&(scope3.touched??[]).includes(e.subject)
      &&['accepted_repair','amended_repair'].includes(prior.verdict)
      &&prior.repair_confidence===1,'actual producer repair');
    require(['reader','flagged'].includes(a.route)&&decision.route===a.route
      &&decision.verdict==='confirmed_fatal'&&decision.repair_confidence===1
      &&decision.same_defect_as===p.obligation
      &&typeof decision.same_defect_evidence==='string'&&decision.same_defect_evidence.length>=100,'explicit cross-group causal pointer');
    const frozen=[...(scope12.reader_findings??[]),...(scope12.refuter_findings??[])]
      .filter(x=>x.obligation===a.obligation);
    const {batch:_batch,route:_route,...actualTarget}=target;
    require(frozen.length===1&&hashValue(frozen[0])===a.frozen_finding_sha256
      &&hashValue(actualTarget)===hashValue(frozen[0]),'exact frozen observation');
    require(frozen[0].id===e.subject&&frozen[0].subject_type==='in-run-dependency'
      &&String(frozen[0].producer_batch)===String(p.batch)
      &&frozen[0].consumer_id===a.consumer_id
      &&frozen[0].dependency_path?.some(x=>x.id===e.subject),'actual supplier reach');
    for(const key of ['producer_batch','consumer_id','observed_source','observed_sha256',
      'producer_carrier_at_split','producer_pre_snapshot','observation_basis','dependency_path'])
      require(hashValue(decision[key]??null)===hashValue(frozen[0][key]??null),'unchanged observation fields');
    // Both aliases must be independently guarded, including their original
    // differing severities; every declared lane is present in the frozen scope.
    require(e.aliases.length===2&&new Set(e.aliases.map(x=>x.route)).size===2,'reader and refuter only');
    for(const alias of e.aliases){
      const f=[...(scope12.reader_findings??[]),...(scope12.refuter_findings??[])]
        .find(x=>x.obligation===alias.obligation);
      require(f&&hashValue(f)===alias.frozen_finding_sha256
        &&f.id===e.subject&&f.producer_batch===frozen[0].producer_batch
        &&f.consumer_id===alias.consumer_id,'all original aliases preserved');
    }
    const primaryDecision=bind(p.decision_guard).decisions.find(x=>x.obligation===p.obligation);
    require(primaryDecision&&primaryDecision.id===prior.id&&primaryDecision.route===prior.route
      &&primaryDecision.verdict===prior.verdict&&primaryDecision.repair_confidence===1,'actual primary decision');
    require(hashValue(decisionCore(primaryDecision))===p.decision_core_sha256
      &&hashValue(decisionCore(decision))===a.decision_core_sha256,'exact decision semantics');
    require(primaryDecision.defect_ids.includes(canonicalRow.defect_id)
      &&decision.defect_ids.length===1&&decision.defect_ids[0]===canonicalRow.defect_id,'canonical ownership only');
    const required=new Set([`research/${run}-reader-findings-${p.batch}.json`,
      `research/${run}-refute-${p.batch}.json`,`research/${run}-reader-findings-${a.batch}.json`,
      `research/${run}-refute-${a.batch}.json`,...['pre','post'].flatMap(label=>
        [p.batch,a.batch].map(b=>`research/${run}-step3-hash-${b}-${label}.json`))]);
    for(const g of e.immutable_guards??[]){bind(g);required.delete(g.path);}
    require(required.size===0,'all reports and pre/post snapshots');
    const repaired=bind(e.causal_repair_receipt);
    require(repaired.run===run&&repaired.one_actual_defect===true&&repaired.accepted_by==='root'
      &&repaired.subject===e.subject&&hashValue(repaired.merged_original_ids)===hashValue(e.merged_original_ids)
      &&repaired.primary_obligation===p.obligation
      &&hashValue(repaired.alias_obligations)===hashValue(e.aliases.map(x=>x.obligation))
      &&typeof repaired.same_literal_fault==='string'&&repaired.same_literal_fault.length>=100,'root causal repair acceptance');
    for(const g of e.final_scientific_reports??[])bind(g);
    require((e.final_scientific_reports??[]).length>=2,'final scientific evidence');
    require(hashValue(currentCarrier)===e.current_carrier_sha256,'actual current supplier carrier');
    for(const ref of [p,...e.aliases])require(canonicalRow.adjudication_ref?.some(x=>
      x.path===`research/${run}-alpha-batch-${ref.batch}-3a-decisions.json`&&x.obligation===ref.obligation),'all refs preserved');
    return true;
  }catch{return false;}
}
