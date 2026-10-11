// A dependency repair can discharge a real historical finding without editing
// the correctly stated consumer. This binds an actual completed owner repair.
import {readFileSync,existsSync} from 'node:fs';import {join,resolve} from 'node:path';import {createHash} from 'node:crypto';
import {activeOwnershipRows} from 'file:///home/lazyinspirit/Projects/prestige-math-library/tools/defect-ledger-ownership.mjs';import {splitFrontmatter} from 'file:///home/lazyinspirit/Projects/prestige-math-library/tools/facts-block.mjs';import {yaml} from 'file:///home/lazyinspirit/Projects/prestige-math-library/tools/pathway-lib.mjs';
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const sha=x=>createHash('sha256').update(x).digest('hex');const hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const pathFor=(root,p)=>{if(typeof p!=='string'||!['research/','items/','library/'].some(prefix=>p.startsWith(prefix)))return null;const resolved=resolve(root,p);return resolved.startsWith(resolve(root)+'/')?resolved:null};
const readRef=(root,ref)=>{const p=pathFor(root,ref?.path);if(!p||!existsSync(p))return null;const raw=readFileSync(p,'utf8');return sha(raw)===ref.sha256?raw:null;};
export function ownerSupplierRepairContinuity(root,run,decision,target,current,decisionRows,entry){
 try{
  if(!entry||entry.version!==1||entry.policy!=='step3-owner-supplier-repair-continuity-v1'||entry.run!==run||entry.id!==decision.id||entry.obligation!==decision.obligation
   ||!['reader','flagged'].includes(decision.route)||!['confirmed_fatal','confirmed_nonfatal'].includes(decision.verdict)||!target?.observed_sha256
   ||hash(current)!==target.observed_sha256||entry.target_sha256!==hash(target)||entry.current_carrier_sha256!==hash(current)
   ||entry.historical_finding_preserved!==true||entry.consumer_source_unchanged!==true||entry.independent_execution_coverage_adopted!==false)return false;
  const row=decisionRows.find(r=>r.defect_id===entry.consumer_defect_id);if(!row||row.subject!==decision.id||!['fixed','narrowed','dropped'].includes(row.disposition)||hash(row)!==entry.consumer_ledger_row_sha256)return false;
  const scopeRaw=readRef(root,entry.native_scope),catchScope=scopeRaw&&JSON.parse(scopeRaw);const findings=decision.route==='reader'?catchScope?.reader_findings:catchScope?.refuter_findings;
  const original=findings?.find(f=>f.obligation===decision.obligation);if(!original||hash({...original,route:decision.route})!==hash(target))return false;
  const consumerRaw=readRef(root,entry.consumer_source);if(!consumerRaw||sha(consumerRaw)!==(current.item_sha256??current.file_sha256))return false;
  const packetRaw=readRef(root,entry.completed_owner_repair),proofRaw=readRef(root,entry.completed_supplier_proof),beforeRaw=readRef(root,entry.supplier_before),afterRaw=readRef(root,entry.supplier_after);
  if(!packetRaw||!proofRaw||!beforeRaw||!afterRaw||sha(beforeRaw)===sha(afterRaw))return false;
  const packet=JSON.parse(packetRaw),record=packet.records?.find(r=>r.obligation===decision.obligation&&r.subject===decision.id);
  if(packet.version!==1||packet.run!==run||!record||record.current_raw_sha256!==sha(consumerRaw)||record.historical_finding?.was_true!==true||record.historical_finding?.false_positive!==false
   ||record.immutable_source_fields_preserved!==true||record.remaining_mathematical_prerequisites?.length!==0||record.confidence?.value!==1||typeof record.resolution!=='string'||record.resolution.trim().length<80)return false;
  const all=readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse).filter(r=>r.run===run);const errors=[];const active=activeOwnershipRows(all,errors);if(errors.length)return false;
  const supplier=active.find(r=>r.defect_id===entry.supplier_defect_id);if(!supplier||supplier.subject!==entry.supplier_id||!['fixed','narrowed','dropped'].includes(supplier.disposition)||hash(supplier)!==entry.supplier_ledger_row_sha256
   ||entry.supplier_after.path!==`items/${entry.supplier_id}.md`)return false;
  const snapshotRaw=readRef(root,entry.supplier_before_snapshot),snap=snapshotRaw&&JSON.parse(snapshotRaw);
  if(!snap||snap.version!==2||snap.run!==run||!['pre','post'].includes(snap.label)||snap.hashes?.[entry.supplier_id]?.item_sha256!==sha(beforeRaw))return false;
  // Follow a genuine current logical path; a random repaired supplier cannot
  // discharge this consumer. A page begins at one of its actual placed items.
  const path=entry.supplier_dependency_path;if(!Array.isArray(path)||path.length<1||path.at(-1)!==entry.supplier_id)return false;
  const consumerMeta=yaml().parse(splitFrontmatter(consumerRaw).fm)??{};let allowed=consumerMeta.deps??consumerMeta.items??[];
  for(const id of path){if(!allowed.includes(id))return false;const text=readFileSync(join(root,'items',id+'.md'),'utf8');const fm=yaml().parse(splitFrontmatter(text).fm)??{};allowed=fm.deps??[];}
  const proofId=entry.completed_supplier_proof_id;
  if(entry.completed_supplier_proof.path!==`items/${proofId}.md`||!proofRaw.includes('## Proof')||packet.supplier_bindings?.[proofId]!==sha(proofRaw)
   ||!(yaml().parse(splitFrontmatter(afterRaw).fm)?.deps??[]).includes(proofId))return false;
  return true;
 }catch{return false;}
}
