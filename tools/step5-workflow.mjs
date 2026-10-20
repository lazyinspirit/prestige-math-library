#!/usr/bin/env node
// Round-based Step 5. Mathematical workers write evidence; only the controller
// collects it, judges a stable snapshot, and certifies a completed repair wave.
import { sol61Effort } from './math-workflow-effort.mjs';
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, appendFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, join, basename, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { freezeFrontier, validateFrontier, readLibraryItems, discoverDownstream, assessFatalThreshold } from './step5-rounds.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { currentHashesMany } from './step5-terminal-resolution.mjs';
import { MODELS } from './models.mjs';
import { loadOwnerReviewWithdrawal, withdrawnOwnerReport, withdrawalAllowsFreshPass, freshWithdrawalEvidence } from './step5-owner-review-withdrawal.mjs';
import { loadReportingOwnerRecovery, reportingRecoveryDuties, reportingSessionBinding, assertReportingSessionCompatibility } from './step5-reporting-owner-recovery.mjs';
import { supportingQuoteHistory } from './step5-quote-history.mjs';
import { stageCertifiedContractAggregation, validateCertifiedContractAggregation, completeCertifiedContractAggregation } from './step5-certified-contract-aggregation.mjs';
import { loadGateAggregationHistory, gateAggregationEvidenceReference } from './step5-gate-aggregation-history.mjs';
import { supportingSiblingContractHistory } from './step5-sibling-contract-history.mjs';
import { loadInitialMetadataHistory, loadRepeatMetadataHistory, initialMetadataSupportingHistory } from './step5-initial-metadata-history.mjs';
import { loadOwnerCurrentRepairs } from './step5-owner-current-repairs.mjs';
import { createdMaintenanceBasis } from './step5-created-maintenance-cert.mjs';
import { verdictIsCurrent } from './judge-currency.mjs';
import { gateDiagnostics } from './step5-gate-diagnostics.mjs';
import { FATAL_TYPES } from './step5-adjudication-compat.mjs';
import { restatedIds, statementHash } from './step5-statement.mjs';
import { syncMaintenance, maintenanceStatus, prepareMaintenance, collectMaintenance } from './consumer-maintenance.mjs';
import { orderedItems, runPages } from './item-dependency-levels.mjs';
import { loadReaderConcerns, checkFrozenReaderConcernInput, readerConcernSession } from './step5-reader-concerns.mjs';
import { loadInitialScopeFindings, checkFrozenInitialScopeFindingInput, recordInitialScopeFindings } from './step5-initial-scope-findings.mjs';
import { loadInitialPublishedMaintenance, recordInitialPublishedMaintenance, isInitialPublishedMaintenance, initialPublishedSupportingHistory, initialPublishedBaselineExclusions, verifyInitialPublishedBaselineExclusions } from './step5-initial-published-maintenance.mjs';
export { readerConcernSession };

export const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const lines = path => existsSync(path) ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
export const workflowDir = (root, run) => join(root, 'research', `${run}-step5-v2`);
export const packPath = (root, run, phase, round) => join(workflowDir(root, run), `${phase}-${round}.json`);
const atomic = (path, value) => { mkdirSync(resolve(path, '..'), {recursive:true}); const tmp = `${path}.${process.pid}.tmp`; writeFileSync(tmp, JSON.stringify(value,null,2)+'\n'); renameSync(tmp,path); };
const frozen = (path, value) => { if (existsSync(path)) { if (JSON.stringify(read(path)) !== JSON.stringify(value)) throw Error(`immutable evidence conflict: ${path}`); } else atomic(path,value); };
const key = row => `${row.id}\0${row.model}\0${row.context_sha256}`;
const hashes = (root, run) => Object.fromEntries(readLibraryItems(root,{run}).map(row => [row.id,row.guard_sha256]));
const statementHashes = (root, run) => Object.fromEntries(readLibraryItems(root,{run}).map(row => [row.id,row.statement_sha256]));
const diff = (a,b) => [...new Set([...Object.keys(a),...Object.keys(b)])].filter(id=>a[id]!==b[id]).sort();
const evidenceText = row => typeof row.reason === 'string' && row.reason.trim().length >= 40 && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url=>/^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const requireValue=(condition,message)=>{if(!condition)throw Error(message);};
function sol61Step5Run(root,run) {
  const dir=workflowDir(root,run);
  if(read(join(dir,'step4-verdicts.json')).some(row=>row.model===MODELS.sol61.id))return true;
  const path=join(dir,'initial-1-collected.json');
  if(!existsSync(path))return false;
  const collected=read(path);
  for(const [file,hash]of Object.entries(collected.evidence??{})){
    if(!/^alpha-adjudicate-step5-v2-initial-r1-u[^.]+\.result\.json$/.test(basename(file)))continue;
    requireValue(existsSync(file)&&digest(readFileSync(file,'utf8'))===hash,`Step 5 worker handoff changed: ${file}`);
    const worker=read(file);
    if(worker.ok===true&&worker.run===run&&worker.role==='alpha-adjudicate'
      &&worker.model===MODELS.sol61.id&&worker.provider_effort===sol61Effort(root,worker.run))return true;
  }
  return false;
}
// A sealed source41 certificate may retain its original shared ledger carrier
// after integration restores unrelated native frontier39/40 history. This is
// a historical-byte bridge, never a new judgment or a mutable certificate.
function restoredLedgerHistory(root, run, certificate, path, expected) {
  const originRun='frontier-41-ha-dt-29';
  const originCertificate='d1693df50e4d8beb126371fb9f209a2202e6f7474969ec5c7dc133316563a20f';
  const originLedger='a09e73a5779cc22e9f8c68ceaa12051b1738b0aa43ed052c17f124394cbdbfa8';
  if(run!==originRun||certificate.sha256!==originCertificate||expected!==originLedger
    ||resolve(root,path)!==join(resolve(root),'research','defect-ledger.jsonl'))return false;
  const directory=workflowDir(root,run), marker=join(directory,'merge-history-recovery.json');
  if(!existsSync(marker))return false;
  const receipt=read(marker),archive=join(directory,'source41-defect-ledger.jsonl');
  const bytes=readFileSync(archive,'utf8'),current=readFileSync(resolve(root,path),'utf8');
  requireValue(receipt.version===1&&receipt.policy==='step5-source41-ledger-history-bridge-v1'
    &&receipt.run===run&&receipt.owner===true&&receipt.owner_identity==='/root'
    &&receipt.source_commit==='7d58c00a7d9109bdcc6a07a32718d6f4ea2a9438'
    &&receipt.certificate_sha256===originCertificate
    &&receipt.original_ledger_sha256===originLedger&&digest(bytes)===originLedger
    &&receipt.current_ledger_sha256===digest(current)
    &&Number.isFinite(Date.parse(receipt.at))&&String(receipt.reason??'').trim().length>0,
    'invalid source41 shared-ledger recovery binding');
  const decode=text=>text.split(/\r?\n/).filter(Boolean).map(JSON.parse);
  const canonical=value=>Array.isArray(value)?value.map(canonical):value&&typeof value==='object'
    ?Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonical(value[key])])):value;
  const original=decode(bytes),live=decode(current),byId=new Map();
  for(const row of original){requireValue(typeof row.defect_id==='string'&&!byId.has(row.defect_id),
    'ambiguous original source41 ledger identity');byId.set(row.defect_id,row);}
  const seen=new Set();let restored=0;
  for(const row of live){
    requireValue(typeof row.defect_id==='string'&&!seen.has(row.defect_id),'ambiguous integrated ledger identity');
    seen.add(row.defect_id);
    const prior=byId.get(row.defect_id);
    if(prior)requireValue(JSON.stringify(canonical(prior))===JSON.stringify(canonical(row)),
      `source41 original ledger row changed: ${row.defect_id}`);
    else{requireValue(['frontier-39-analysis-30','frontier-40-geometry-braids-rep-27'].includes(row.run),
      `unrelated ledger addition in source41 recovery: ${row.defect_id}`);restored++;}
  }
  requireValue(original.every(row=>seen.has(row.defect_id))&&restored===1948,
    'source41 recovery must preserve every original row and exactly restored native history');
  requireValue(JSON.stringify(canonical(original.filter(row=>row.run===run)))
    ===JSON.stringify(canonical(live.filter(row=>row.run===run))),
    'source41 current-run ledger projection changed');
  return true;
}
function restoredRenderedLedgerHistory(root, run, certificate, path, expected) {
  const original='fed9e7d84607a4a631d0e4e358f6780ac15e09558b4481667ea643dc2ee65ffe';
  if (run!=='frontier-41-ha-dt-29'||expected!==original
    ||resolve(root,path)!==join(resolve(root),'research','DEFECT-LEDGER.md')) return false;
  if (!restoredLedgerHistory(root,run,certificate,'research/defect-ledger.jsonl',
    'a09e73a5779cc22e9f8c68ceaa12051b1738b0aa43ed052c17f124394cbdbfa8')) return false;
  const directory=workflowDir(root,run),receipt=read(join(directory,'merge-history-recovery.json'));
  requireValue(receipt.original_rendered_ledger_sha256===original
    &&digest(readFileSync(join(directory,'source41-DEFECT-LEDGER.md'),'utf8'))===original
    &&receipt.current_rendered_ledger_sha256===digest(readFileSync(resolve(root,path),'utf8')),
    'source41 derived ledger history binding changed');
  return true;
}
// Gate 2 observed the ledger before a later native schema repair. Preserve
// that exact historical input; this does not certify the current ledger.
function repairedRun44LedgerHistory(history,path,expected) {
  const run='frontier-44-special-representation-examples-28-six-step';
  const original='cda4f8517f01cb4fd434823f612d2c16cd349fc15b2599dc3363b0327921d085';
  if(!history||history.run!==run||expected!==original
    ||resolve(history.root,path)!==join(resolve(history.root),'research','defect-ledger.jsonl'))return false;
  const root=history.root,dir=workflowDir(root,run),base=join(root,'research',`${run}-owner-escalation-repairs`,
    'resume-20261011','step5-ledger-operator','history'),marker=join(base,'historical-ledger-receipt.json');
  if(!existsSync(marker))return false;
  const receipt=read(marker),{sha256,...payload}=receipt;
  requireValue(sha256===digest(payload)&&receipt.version===1&&receipt.run===run
    &&receipt.policy==='step5-native-ledger-schema-history-v1'&&receipt.owner_identity==='/root'
    &&receipt.historical_only===true&&receipt.original_sha256===original
    &&Array.isArray(receipt.bindings),'invalid historical Step 5 ledger receipt');
  const bound=(path)=>receipt.bindings.some(binding=>resolve(root,binding.path)===resolve(root,path));
  for(const binding of receipt.bindings){
    const path=resolve(root,binding.path);
    requireValue(path.startsWith(resolve(root,'research')+'/')&&existsSync(path)
      &&digest(readFileSync(path,'utf8'))===binding.sha256,
      `historical ledger binding changed: ${binding.path}`);
  }
  const archive=resolve(root,receipt.archive),nativeAfter=resolve(root,receipt.native_after_archive),ownerAfter=resolve(root,receipt.owner_after_archive);
  requireValue([archive,ownerAfter].every(path=>path.startsWith(resolve(base)+'/'))
    &&nativeAfter.startsWith(resolve(dir,'supporting-metadata')+'/')
    &&[archive,nativeAfter,ownerAfter].every(bound),'historical ledger archives are not authenticated');
  const beforeBytes=readFileSync(archive,'utf8'),afterBytes=readFileSync(nativeAfter,'utf8'),ownerBytes=readFileSync(ownerAfter,'utf8');
  requireValue(digest(beforeBytes)===original,'historical ledger preimage changed');
  const oldReportPath=join(dir,'step5-v2-gate-r2-u1.json'),oldPackPath=join(dir,'gate-2.json');
  const collectedPath=join(dir,'gate-2-collected.json'),certificatePath=join(dir,'certification-gate-2.json');
  requireValue([oldReportPath,oldPackPath,collectedPath,certificatePath].every(bound),'missing original gate-2 ledger authority');
  const oldReport=read(oldReportPath),oldPack=read(oldPackPath),collected=read(collectedPath),certificate=read(certificatePath);
  const {sha256:certificateHash,...certificatePayload}=certificate;
  requireValue(oldReport.run===run&&oldReport.phase==='gate'&&oldReport.round===2&&oldReport.unit==='1'
    &&oldReport.input_sha256===digest(oldPack)&&oldReport.supporting_evidence?.['research/defect-ledger.jsonl']===original
    &&collected.run===run&&collected.phase==='gate'&&collected.round===2
    &&collected.evidence?.['research/defect-ledger.jsonl']===original
    &&certificateHash==='00ef54bbcf603e321a945c6fd4514a1abd187fbd701383b5d28bbeccf51cf194'
    &&certificateHash===digest(certificatePayload)&&certificate.evidence?.['research/defect-ledger.jsonl']===original,
    'historical ledger differs from the original native gate-2 input');
  const reportPath=join(dir,'step5-v2-gate-r3-u1.json'),packPath=join(dir,'gate-3.json');
  const dispatchPath=join(root,'research',`${run}-dispatch`,'alpha-repair-step5-v2-gate-r3-u1.result.json');
  requireValue([reportPath,packPath,dispatchPath].every(bound),'missing native ledger repair authority');
  const report=read(reportPath),pack=read(packPath),dispatch=read(dispatchPath);
  requireValue(report.run===run&&report.phase==='gate'&&report.round===3&&report.unit==='1'
    &&report.input_sha256===digest(pack)&&pack.run===run&&pack.phase==='gate'&&pack.round===3
    &&dispatch.ok===true&&dispatch.run===run&&dispatch.role==='alpha-repair'
    &&dispatch.label===workerLabel('gate',3,'1')&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run)
    &&report.ledger_before_sha256===original&&report.ledger_after_sha256===digest(afterBytes)
    &&report.supporting_evidence?.['research/defect-ledger.jsonl']===digest(afterBytes)
    &&Array.isArray(report.ledger_schema_repairs)&&report.ledger_schema_repairs.length===11,
    'historical ledger lacks its successful native schema-repair transition');
  const prior=beforeBytes.split(/(?<=\n)/).filter(Boolean),next=afterBytes.split(/(?<=\n)/).filter(Boolean);
  requireValue(prior.length===next.length,'native ledger schema repair changed inventory');
  const changes=new Map(report.ledger_schema_repairs.map(row=>[row.defect_id,row])),seen=new Set();
  for(let index=0;index<prior.length;index++){
    if(prior[index]===next[index])continue;
    const before=JSON.parse(prior[index]),after=JSON.parse(next[index]),change=changes.get(before.defect_id);
    requireValue(change&&!seen.has(before.defect_id)&&before.run===run&&after.defect_id===before.defect_id
      &&digest(prior[index])===change.before_row_raw_sha256&&digest(next[index])===change.after_row_raw_sha256
      &&JSON.stringify(change.original_fields)===JSON.stringify({severity:{present:false,value:null}})
      &&!Object.hasOwn(before,'severity')&&after.severity===change.reconciled_fields.severity,
      'unbound native ledger schema delta');
    delete after.severity;delete after.schema_reconciliation.gate_round_3;
    requireValue(JSON.stringify(before)===JSON.stringify(after),'native ledger repair changed an original finding');
    seen.add(before.defect_id);
  }
  requireValue(seen.size===11,'missing native ledger schema deltas');
  requireValue(ownerBytes.startsWith(afterBytes)&&bound(receipt.owner_append_rows)&&bound(receipt.owner_integration_receipt),
    'owner ledger reconciliation did not preserve the native ledger bytes');
  const appended=ownerBytes.slice(afterBytes.length).split(/\r?\n/).filter(Boolean).map(JSON.parse),rows=read(resolve(root,receipt.owner_append_rows));
  requireValue(appended.length===7&&JSON.stringify(appended)===JSON.stringify(rows)
    &&rows.every(row=>row.run===run&&row.caught_by_role==='orchestrator'
      &&row.classification_kind==='owner-severity-assessment-of-recorded-repair'
      &&row.original_author_classification_claimed===false&&row.supersedes?.length===1
      &&changes.has(row.supersedes[0])),'owner ledger history is not the exact seven attributed append-only corrections');
  return true;
}
// Worker supporting metadata describes the bytes observed at that handoff,
// while the owning batch carriers remain writable by later native workers.
// This run's recovery binds exact historical bytes to unchanged native reports;
// it supplies no current-source review or gate coverage.
function supportingMetadataHistory(history,path,expected) {
  const siblings = supportingSiblingContractHistory(history,path,expected); if (siblings) return siblings;
  const quotes = supportingQuoteHistory(history,path,expected);
  if (quotes) return quotes;
  const metadata = initialMetadataSupportingHistory(history,path,expected);
  if (metadata) return metadata;
  const published = initialPublishedSupportingHistory(history,path,expected);
  if (published) return published;
  if(!history||history.run!=='frontier-44-special-representation-examples-28-six-step')return null;
  const {root,run}=history,base=join(root,'research',`${run}-owner-escalation-repairs`,
    'resume-20261011','step5-evidence-handoff');
  const marker=join(base,'historical-support-receipt.json');
  if(!existsSync(marker))return null;
  const receipt=read(marker),{sha256,...payload}=receipt;
  requireValue(sha256===digest(payload)&&receipt.version===1&&receipt.run===run
    &&receipt.policy==='step5-historical-native-metadata-support-v1'
    &&receipt.owner_identity==='/root'&&receipt.historical_only===true
    &&Array.isArray(receipt.carriers)&&Array.isArray(receipt.bindings),
    'invalid historical supporting metadata receipt');
  const carrier=receipt.carriers.find(row=>resolve(root,row.path)===resolve(root,path)
    &&row.original_sha256===expected);
  if(!carrier)return null;
  requireValue(new RegExp(`^research/${run}-batch-\\d+\\.(?:pages|proof-contracts)\\.json$`).test(carrier.path),
    'historical support is limited to batch metadata carriers');
  const archive=resolve(root,carrier.archive);
  requireValue(archive.startsWith(resolve(base)+'/')&&existsSync(archive)
    &&digest(readFileSync(archive,'utf8'))===expected,'historical supporting metadata archive changed');
  for(const binding of receipt.bindings){
    const bound=resolve(root,binding.path);
    requireValue(bound.startsWith(resolve(root,'research')+'/')&&existsSync(bound)
      &&digest(readFileSync(bound,'utf8'))===binding.sha256,
      `historical metadata native binding changed: ${binding.path}`);
  }
  const origin=read(resolve(root,carrier.origin_report)),originPack=read(resolve(root,carrier.origin_pack));
  const originDispatch=read(resolve(root,carrier.origin_dispatch));
  requireValue(origin.run===run&&origin.phase===carrier.origin_phase&&origin.round===1
    &&String(origin.unit)===carrier.origin_unit&&origin.input_sha256===digest(originPack)
    &&originPack.run===run&&originPack.phase===origin.phase&&originPack.round===1
    &&origin.supporting_evidence?.[carrier.path]===expected
    &&originDispatch.ok===true&&originDispatch.run===run
    &&originDispatch.label===workerLabel(origin.phase,1,origin.unit)
    &&originDispatch.role===(origin.phase==='initial'?'alpha-adjudicate':'alpha-repair')
    &&[carrier.origin_report,carrier.origin_pack,carrier.origin_dispatch].every(path=>
      receipt.bindings.some(binding=>binding.path===path)),
    'historical supporting metadata does not bind its native origin');
  if(carrier.origin_phase==='initial'){
    const collected=join(workflowDir(root,run),'initial-1-collected.json');
    requireValue(receipt.bindings.some(binding=>resolve(root,binding.path)===collected)
      &&read(collected).evidence?.[carrier.path]===expected,
      'historical initial metadata is not bound by the original collection');
  }
  requireValue(Array.isArray(receipt.repairs)&&receipt.repairs.length>0,'missing native metadata repair history');
  const repairSubjects=new Set();
  for(const repair of receipt.repairs){
    const report=read(resolve(root,repair.report)),pack=read(resolve(root,repair.pack));
    const dispatch=read(resolve(root,repair.dispatch));
    requireValue([repair.report,repair.pack,repair.dispatch].every(path=>receipt.bindings.some(binding=>binding.path===path))
      &&report.run===run&&report.phase==='impact-initial'&&report.round===1
      &&report.input_sha256===digest(pack)&&pack.run===run&&pack.phase===report.phase&&pack.round===1
      &&pack.assignments?.[report.unit]&&dispatch.ok===true&&dispatch.run===run
      &&dispatch.role==='alpha-repair'&&dispatch.label===workerLabel(report.phase,1,report.unit)
      &&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run),
      'historical metadata repair lacks its genuine native completion');
    for(const review of report.reviews??[])if(pack.assignments[report.unit].includes(review.id))repairSubjects.add(review.id);
  }
  const endpoint=resolve(root,carrier.successor_archive);
  requireValue(endpoint.startsWith(resolve(base)+'/')&&existsSync(endpoint)
    &&digest(readFileSync(endpoint,'utf8'))===carrier.successor_sha256,
    'historical metadata successor archive changed');
  const before=read(archive),after=read(endpoint),deltas=[];
  const same=(left,right)=>JSON.stringify(left)===JSON.stringify(right);
  if(carrier.path.endsWith('.pages.json')){
    requireValue(Array.isArray(before)&&Array.isArray(after)&&before.length===after.length,
      'historical manifest page inventory changed');
    for(let index=0;index<before.length;index++){
      const prior=before[index],next=after[index],{items:oldItems,...oldPage}=prior,{items:newItems,...newPage}=next;
      requireValue(same(oldPage,newPage)&&Array.isArray(oldItems)&&Array.isArray(newItems)
        &&oldItems.length===newItems.length,'historical manifest page identity changed');
      for(let row=0;row<oldItems.length;row++){
        const old=oldItems[row],now=newItems[row];
        requireValue(old.id===now.id,'historical manifest item inventory changed');
        for(const field of new Set([...Object.keys(old),...Object.keys(now)]))if(!same(old[field],now[field])){
          requireValue(repairSubjects.has(old.id)&&['deps','statement','strategy'].includes(field),
            `unbound historical manifest delta: ${old.id}/${field}`);deltas.push({id:old.id,field});
        }
      }
    }
  }else{
    const {contracts:oldContracts,...oldEnvelope}=before,{contracts:newContracts,...newEnvelope}=after;
    requireValue(same(oldEnvelope,newEnvelope)&&same(Object.keys(oldContracts),Object.keys(newContracts)),
      'historical contract inventory or envelope changed');
    for(const [id,old]of Object.entries(oldContracts))for(const field of new Set([...Object.keys(old),...Object.keys(newContracts[id])]))
      if(!same(old[field],newContracts[id][field])){
        requireValue(repairSubjects.has(id)&&['citations','derivations'].includes(field),
          `unbound historical contract delta: ${id}/${field}`);deltas.push({id,field});
      }
  }
  requireValue(same(deltas,carrier.metadata_deltas),'historical metadata delta inventory changed');
  return {archive,marker};
}
const verifyEvidence=(evidence,history=null)=>{for(const [p,hash]of Object.entries(evidence??{}))requireValue(
  existsSync(p)&&(digest(readFileSync(p,'utf8'))===hash
    ||history&&(gateAggregationEvidenceReference(history,p,hash)||supportingMetadataHistory(history,p,hash)
      ||repairedRun44LedgerHistory(history,p,hash)
      ||restoredLedgerHistory(history.root,history.run,history.certificate??{},p,hash)
      ||restoredRenderedLedgerHistory(history.root,history.run,history.certificate??{},p,hash))),
  `Step 5 evidence changed: ${p}`);};
function frozenSupportingEvidence(root,run,supporting) {
  verifyEvidence(supporting,{root,run});
  const evidence={};
  for(const [path,hash]of Object.entries(supporting)){
    requireValue(digest(readFileSync(path,'utf8'))===hash||!gateAggregationEvidenceReference({root,run},path,hash),
      `supporting metadata preimage unavailable: ${path}`);
    // Keep ordinary immutable evidence at its original path. Only batch
    // metadata and shared ledgers need durable historical carriers.
    if(!new RegExp(`^${run}-batch-\\d+\\.(?:pages|proof-contracts)\\.json$`).test(basename(path))
      && !['research/defect-ledger.jsonl','research/DEFECT-LEDGER.md','research/published-consumer-supplier-ledger.md'].includes(path)){
      evidence[path]=hash;continue;
    }
    const history=digest(readFileSync(path,'utf8'))===hash?null:supportingMetadataHistory({root,run},path,hash);
    const bytes=readFileSync(history?.archive??path,'utf8');
    requireValue(digest(bytes)===hash,`supporting metadata preimage unavailable: ${path}`);
    const archive=join(workflowDir(root,run),'supporting-metadata',`${hash}.json`);
    mkdirSync(resolve(archive,'..'),{recursive:true});
    if(existsSync(archive))requireValue(readFileSync(archive,'utf8')===bytes,'immutable supporting metadata conflict');
    else writeFileSync(archive,bytes,{flag:'wx'});
    evidence[archive]=hash;
    if(history){evidence[history.marker]=digest(readFileSync(history.marker,'utf8'));Object.assign(evidence,history.evidence??{});}
  }
  return evidence;
}
const rawHashes=(root,run)=>Object.fromEntries(readLibraryItems(root,{run}).map(row=>[row.id,row.sha256]));
const creationId=/^(?:alg|def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
function subjectScope(pack,created=[]) {
  if(pack.repair_scope!=='frontier')return null;
  requireValue(Array.isArray(pack.frontier_ids)&&pack.frontier_ids.length>0,'missing nonempty frozen frontier scope');
  return new Set([...pack.frontier_ids,...created]);
}
// Keep full snapshots and the full graph. Only subjects and their actual
// prerequisite carriers can invalidate this run's stable collection boundary.
function prerequisiteScope(items,subjects) {
  const graph=new Map(items.map(row=>[row.id,row])),aliases=new Map();
  for(const row of items)for(const alias of row.aliases??[])if(!graph.has(alias))aliases.set(alias,row.id);
  const seen=new Set(),queue=[...subjects];
  for(let index=0;index<queue.length;index++){
    const id=aliases.get(queue[index])??queue[index];if(seen.has(id))continue;seen.add(id);
    const row=graph.get(id);queue.push(...(row?.deps??[]),...(row?.references??[]));
  }
  return seen;
}
function gateFrontier(root,run) {
  const path=join(workflowDir(root,run),'frontier.json');
  const frontier=existsSync(path)?read(path):initialize(root,run);
  validateFrontier(frontier);
  requireValue(frontier.run===run,'wrong run frontier');
  return new Set(frontier.ids);
}
function impactTargets(root,run,phase,items,seeds,discovered=[],createdIds=[]) {
  const frontier=new Set([...gateFrontier(root,run),...createdIds]),roots=[...new Set(seeds)];
  const impacts=discoverDownstream({items,repairedIds:roots});
  const direct=new Set(impacts.map(row=>row.id));
  const targets=[...new Set([...direct,...discovered.filter(id=>frontier.has(id))])]
    .filter(id=>frontier.has(id)).sort();
  // These are candidates for separately owned, necessary-only maintenance,
  // never Step 5 repair assignments or mathematical defect verdicts.
  const maintenance=impacts.filter(row=>!frontier.has(row.id));
  for(const id of discovered)if(roots.length&&!frontier.has(id)&&!maintenance.some(row=>row.id===id))
    maintenance.push({id,published:Boolean(items.find(row=>row.id===id)?.published),suppliers:roots,paths:roots.map(root=>[root,id]),reported:true});
  return {frontier,seeds:roots,impacts,targets,maintenance};
}
// Local continuation subjects come only from bound, collected native creations;
// neither the frozen frontier nor arbitrary new manifest IDs grant authority.
function collectedCreationIds(root,run,receipts) {
  const ids=new Set();
  for(const receipt of receipts.filter(Boolean))for(const row of receipt.created_items??[]){
    requireValue(typeof row.author_result==='string'&&basename(row.author_result)===row.author_result,'created closure lacks native author identity');
    const author=join(root,'research',`${run}-dispatch`,row.author_result);
    requireValue(receipt.evidence?.[author]===digest(readFileSync(author,'utf8')),'created closure lacks bound native author result');
    const native=read(author),unit=native.covers?.[0],reportPath=workerReport(root,run,receipt.phase,receipt.round,unit);
    requireValue(native.run===run&&native.ok===true&&['alpha-adjudicate','alpha-repair'].includes(native.role)
      &&JSON.stringify(native.covers)===JSON.stringify([unit])&&native.label===workerLabel(receipt.phase,receipt.round,unit)
      &&receipt.evidence?.[reportPath]===digest(readFileSync(reportPath,'utf8')),'created closure lacks bound native report');
    const report=read(reportPath),{author_result,...declaration}=row;
    const declarations=(report.created_items??[]).filter(value=>value.id===row.id);
    const reviews=(report.reviews??[]).filter(value=>value.id===row.id&&value.disposition==='authored');
    const original=readPack(root,run,receipt.phase,receipt.round);
    requireValue(report.run===run&&report.phase===receipt.phase&&report.round===receipt.round&&String(report.unit)===unit
      &&report.input_sha256===digest(original)&&!original.before[row.id]
      &&declarations.length===1&&digest(declarations[0])===digest(declaration)&&reviews.length===1
      &&!isPublishedItem(root,row.id),'created closure is not an original declared draft native authorship');
    creationRegistration(root,run,row);ids.add(row.id);
  }
  return ids;
}

function libraryIdentity(root,run) {
  const items=readLibraryItems(root,{run}),ids=new Set(items.map(row=>row.id)),aliases=new Map();
  for(const row of items)for(const alias of row.aliases??[]){
    if(ids.has(alias))continue; // Existing canonical IDs win, matching depcheck.
    requireValue(!aliases.has(alias),`duplicate library alias: ${alias}`);aliases.set(alias,row.id);
  }
  return {items,ids,aliases};
}
function itemKind(root,id) {
  const text=readFileSync(join(root,'items',`${id}.md`),'utf8');
  return text.match(/^---\r?\n[\s\S]*?^kind:\s*["']?([^\r\n"']+)["']?\s*$[\s\S]*?^---/m)?.[1]?.trim();
}
function manifestHomes(root,run) {
  const homes={};
  for(const file of readdirSync(join(root,'research')).sort()){
    const match=file.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));if(!match)continue;
    const raw=read(join(root,'research',file)),pages=Array.isArray(raw)?raw:raw.pages??[];
    homes[match[1]]=pages.map(page=>String(page.id)).sort();
  }
  return homes;
}
function creationRegistration(root,run,row) {
  requireValue(creationId.test(row.id??''),`invalid created item ID: ${row.id}`);
  requireValue(typeof row.kind==='string'&&row.kind.length>0,`missing created item kind: ${row.id}`);
  requireValue(typeof row.home_page==='string'&&row.home_page.length>0,`missing created item home_page: ${row.id}`);
  requireValue(typeof row.batch==='string'&&row.batch.length>0,`missing created item batch: ${row.id}`);
  requireValue(itemKind(root,row.id)===row.kind,`created item kind mismatch: ${row.id}`);
  const matches=[];
  for(const file of readdirSync(join(root,'research')).sort()){
    const match=file.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));if(!match)continue;
    const raw=read(join(root,'research',file)),pages=Array.isArray(raw)?raw:raw.pages??[];
    for(const page of pages)for(const entry of page.items??[])if((typeof entry==='string'?entry:entry?.id)===row.id)
      matches.push({batch:match[1],page:String(page.id)});
  }
  requireValue(matches.length===1&&matches[0].batch===row.batch&&matches[0].page===row.home_page,
    `created item must be registered exactly once in its declared batch/page: ${row.id}`);
  const contract=join(root,'research',`${run}-batch-${row.batch}.proof-contracts.json`);
  requireValue(existsSync(contract)&&Object.hasOwn(read(contract)?.contracts??{},row.id),`created item lacks its batch proof contract: ${row.id}`);
  return matches[0];
}
function validVerdicts(rows) {
  for(const row of rows)requireValue(typeof row.id==='string'&&typeof row.model==='string'&&/^[a-f0-9]{64}$/.test(row.context_sha256??'')&&[true,false,null].includes(row.keep),'malformed frozen judge verdict');
  return rows;
}
function reviewContexts(items) {
  const graph=new Map(items.map(row=>[row.id,row])),aliases=new Map();
  for(const row of items)for(const alias of row.aliases??[])if(!graph.has(alias))aliases.set(alias,row.id);
  const canonical=id=>aliases.get(id)??id;
  function closure(id,legacy=false) {
    const seen=new Set(),queue=[id,...(legacy?[]:graph.get(canonical(id))?.references??[])];
    for(let index=0;index<queue.length;index++){
      const next=canonical(queue[index]);if(seen.has(next))continue;seen.add(next);
      const row=graph.get(next);
      queue.push(...(row?.deps??[]),...(legacy?row?.body_links??[]:[]));
    }
    return [...seen].sort();
  }
  const hash=(ids,current,legacy=false)=>{
    const carriers=ids.map(supplier=>[supplier,current[supplier]??null]);
    return digest(legacy?carriers:{version:2,carriers});
  };
  const interfaceHash=(id,current)=>{
    const row=graph.get(id),suppliers=[...new Set([...(row?.deps??[]),...(row?.references??[])].map(canonical))].filter(supplier=>supplier!==id).sort();
    return digest({version:3,item:[id,current[id]??null],suppliers:suppliers.map(supplier=>[supplier,graph.get(supplier)?.statement_sha256??null])});
  };
  const hasStatements=items.every(row=>typeof row.statement_sha256==='string');
  return {hash:(id,current)=>hasStatements?interfaceHash(id,current):hash(closure(id),current),matches:(row,current,snapshot)=>{
    if(!row||row.post_sha256!==current[row.id])return false;
    if(hasStatements&&row.review_context_sha256===interfaceHash(row.id,current))return true;
    const ids=closure(row.id),now=hash(ids,current);
    if(row.review_context_sha256===now)return true;
    // Legacy receipts remain immutable. Reuse only if their original broad
    // context is exactly reconstructible and covered every currently required
    // carrier. Narrowing a graph never licenses refreshing a stale review.
    const legacyIds=closure(row.id,true),legacySet=new Set(legacyIds);
    if(ids.some(id=>!legacySet.has(id)))return false;
    if(row.review_context_sha256===hash(legacyIds,current,true))return true;
    return Boolean(snapshot&&row.post_sha256===snapshot[row.id]
      &&row.review_context_sha256===hash(legacyIds,snapshot,true)
      &&now===hash(ids,snapshot));
  }};
}
function dependencyReviewHasher(items,current) {
  const contexts=reviewContexts(items);
  return id=>contexts.hash(id,current);
}

export function reviewMatchesCurrent(items,current,row,snapshot) {
  return reviewContexts(items).matches(row,current,snapshot);
}

function nextImpactPhase(phase,progress) {
  const phases=[...progress.passes,...(progress.superseded??[]).map(row=>row.phase)];
  const highest=Math.max(1,...phases.map(value=>Number(value.match(/-pass-(\d+)$/)?.[1]??1)));
  return `${phase}-pass-${highest+1}`;
}

/** Workers call this read-only helper immediately after the mathematical
 * review. The supplied hash is preserved, never reconstructed after another
 * worker edits a supplier. Multiple simultaneously reviewed ids may be batched. */
export function reviewContextHashes(root,ids,{run=null}={}) {
  const items=readLibraryItems(root,{run,requiredIds:ids}),current=hashes(root,run),hash=dependencyReviewHasher(items,current);
  return Object.fromEntries(ids.map(id=>{requireValue(current[id],`unknown review item: ${id}`);return [id,{post_sha256:current[id],review_context_sha256:hash(id)}];}));
}

export function initialize(root, run) {
  const dir=workflowDir(root,run), path=join(dir,'frontier.json');
  if (existsSync(path)) {const frontier=read(path);validateFrontier(frontier);requireValue(frontier.run===run,'wrong run frontier');requireValue(existsSync(join(dir,'baseline.json'))&&existsSync(join(dir,'step4-verdicts.json')),'incomplete Step 5 initialization');return frontier;}
  const prefix=`${run}-batch-`;
  const batches=readdirSync(join(root,'research')).filter(f=>f.startsWith(prefix)&&/^\d+\.pages\.json$/.test(f.slice(prefix.length))).sort()
    .map(f=>({id:f.slice(prefix.length).split('.')[0],items:read(join(root,'research',f)).flatMap(p=>p.items.map(i=>i.id))}));
  if (!batches.length) throw Error('Step 5 requires nonempty original batch manifests');
  const frontier=freezeFrontier({run,batches});
  mkdirSync(dir,{recursive:true});
  frozen(join(dir,'baseline.json'),hashes(root,run));
  frozen(join(dir,'step4-verdicts.json'),validVerdicts(lines(join(root,'research',`${run}-judge.jsonl`))));
  frozen(path,frontier);
  return frontier;
}

export function readPack(root,run,phase,round) { return read(packPath(root,run,phase,round)); }
export function workerLabel(phase,round,unit) { return `step5-v2-${phase}-r${round}-u${unit}`; }
export function workerReport(root,run,phase,round,unit) { return join(workflowDir(root,run),`${workerLabel(phase,round,unit)}.json`); }

const adjudicationPackKeys=new Set(['version','adjudicationSchemaVersion','repair_scope','frontier_ids','run','phase','round','judge_model','units','assignments','dependency_levels','before','before_statements','before_aliases','home_pages','rejected','input_evidence']);
export const emptyAdjudicationLabel=(phase,round,unit)=>`step5-v2-empty-${phase}-r${round}-u${unit}`;
// Unknown pack obligations conservatively retain the mathematical worker.
export function emptyAdjudicationAssignment(pack,unit) {
  return pack?.version===2&&pack.adjudicationSchemaVersion===1&&pack.repair_scope==='frontier'
    &&['initial','repeat'].includes(pack.phase)&&Number.isInteger(pack.round)&&pack.round>0
    &&Object.keys(pack).every(key=>adjudicationPackKeys.has(key))
    &&Array.isArray(pack.units)&&pack.units.includes(unit)
    &&Object.hasOwn(pack.assignments??{},unit)&&Array.isArray(pack.assignments[unit])&&pack.assignments[unit].length===0
    &&Array.isArray(pack.rejected);
}
export function hasAdjudicatorArtifacts(root,run,phase,round,unit) {
  const dir=join(root,'research',`${run}-dispatch`),stem=`alpha-adjudicate-${workerLabel(phase,round,unit)}`;
  return existsSync(dir)&&readdirSync(dir).some(name=>name.startsWith(`${stem}.`));
}
function assertEmptyAdjudicationInput(root,run,phase,round,unit,inputHash) {
  const pack=readPack(root,run,phase,round);
  requireValue(pack.run===run&&pack.phase===phase&&pack.round===round&&digest(pack)===inputHash,'empty adjudication input identity or hash mismatch');
  requireValue(emptyAdjudicationAssignment(pack,unit),`not an empty batch adjudication assignment: ${unit}`);
  const frontier=read(join(workflowDir(root,run),'frontier.json'));validateFrontier(frontier);
  requireValue(frontier.run===run&&JSON.stringify(frontier.ids)===JSON.stringify(pack.frontier_ids)
    &&JSON.stringify(frontier.batches.map(row=>String(row.id)))===JSON.stringify(pack.units),'empty adjudication frontier binding mismatch');
  const owners=new Map(frontier.batches.flatMap(row=>row.items.map(id=>[id,String(row.id)])));
  const assigned=[];
  for(const owner of pack.units){
    requireValue(Array.isArray(pack.assignments[owner]),'malformed adjudication assignments');
    for(const row of pack.assignments[owner]){
      requireValue(row&&owners.get(row.id)===owner,'adjudication tuple assigned to wrong batch');assigned.push(key(row));
    }
  }
  requireValue(Object.keys(pack.assignments).length===pack.units.length
    &&new Set(assigned).size===assigned.length
    &&JSON.stringify(assigned.sort())===JSON.stringify(pack.rejected.map(key).sort()),'adjudication rejection coverage mismatch');
  const judgeInput=join(workflowDir(root,run),phase==='initial'?'step4-verdicts.json':`judge-${round}.json`);
  requireValue(Object.keys(pack.input_evidence??{}).length===1&&Object.hasOwn(pack.input_evidence,judgeInput),'missing exact frozen judge input');
  verifyEvidence(pack.input_evidence);
  const input=read(judgeInput),verdicts=validVerdicts(phase==='initial'?input:input.verdicts),latest=new Map();
  for(const row of verdicts.filter(row=>row.model===pack.judge_model))latest.set(row.id,row);
  for(const row of pack.rejected)requireValue(latest.get(row.id)?.keep===false&&key(latest.get(row.id))===key(row),'rejection differs from frozen judge input');
  for(const id of frontier.batches.find(row=>String(row.id)===unit).items){
    const row=latest.get(id);
    requireValue((phase!=='initial'||typeof row?.keep==='boolean')&&(!row||row.keep===true),`frozen judge input still owes adjudication: ${id}`);
  }
  requireValue(!hasAdjudicatorArtifacts(root,run,phase,round,unit),'preserve existing adjudicator artifacts');
  return pack;
}
function emptyAdjudicationReport(pack,unit) {
  return {run:pack.run,phase:pack.phase,round:pack.round,unit,input_sha256:digest(pack),
    completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false,
    decisions:[],reviews:[],created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[]};
}
function assertEmptyAdjudicationReport(pack,unit,report) {
  requireValue(emptyAdjudicationAssignment(pack,unit),'mechanical closure requires an empty batch adjudication');
  const expected=emptyAdjudicationReport(pack,unit);
  requireValue(Object.keys(report).length===Object.keys(expected).length
    &&Object.entries(expected).every(([key,value])=>Object.hasOwn(report,key)&&JSON.stringify(report[key])===JSON.stringify(value)),
    'invalid mechanical zero-work report');
}
export function closeEmptyAdjudication(root,run,phase,round,unit,inputHash) {
  const pack=assertEmptyAdjudicationInput(root,run,phase,round,unit,inputHash),report=emptyAdjudicationReport(pack,unit);
  const path=workerReport(root,run,phase,round,unit);
  try{writeFileSync(path,JSON.stringify(report,null,2)+'\n',{flag:'wx'});}
  catch(error){if(error.code!=='EEXIST')throw error;assertEmptyAdjudicationReport(pack,unit,read(path));}
  return report;
}

export function prepareAdjudication(root,run,phase,round) {
  requireValue(['initial','repeat'].includes(phase),'invalid adjudication phase');
  const path=packPath(root,run,phase,round); if(existsSync(path)) return read(path);
  const frontier=initialize(root,run), dir=workflowDir(root,run);
  const judgeInput=phase==='initial'?join(dir,'step4-verdicts.json'):join(dir,`judge-${round}.json`);
  const verdicts=phase==='initial' ? read(judgeInput) : read(judgeInput).verdicts;
  const sol61Run=sol61Step5Run(root,run);
  const activeModel=phase==='repeat'
    ? (verdicts.some(row=>row.model===MODELS.sol61.id)?MODELS.sol61.id:MODELS.sol.id)
    : sol61Run?MODELS.sol61.id
      : verdicts.some(row=>row.model===MODELS.luna.id)?MODELS.luna.id:MODELS.sol.id;
  const latest=new Map(); for(const row of validVerdicts(verdicts).filter(row=>row.model===activeModel)) latest.set(`${row.id}\0${row.model}`,row);
  const repairable=gateFrontier(root,run);
  if(phase==='initial')for(const id of repairable)requireValue([...latest.values()].some(row=>row.id===id&&typeof row.keep==='boolean'),`missing Step 4 verdict: ${id}`);
  for(const row of latest.values())if(repairable.has(row.id))requireValue(typeof row.keep==='boolean',`missing complete judge verdict: ${row.id}`);
  const rejected=[...latest.values()].filter(r=>r.keep===false&&repairable.has(r.id));
  const byId=new Map(frontier.batches.flatMap(b=>b.items.map(id=>[id,String(b.id)])));
  const units=frontier.batches.map(b=>String(b.id));
  const order=orderedItems(runPages(root,run),{validateLabels:false});
  const rank=new Map(order.map((row,index)=>[row.id,index]));
  const dependencyLevels=Object.fromEntries(order.map(row=>[row.id,row.level]));
  const assignments=Object.fromEntries(units.map(u=>[u,rejected.filter(r=>byId.get(r.id)===u)
    .sort((a,b)=>(rank.get(a.id)??Infinity)-(rank.get(b.id)??Infinity))]));
  const identity=libraryIdentity(root,run);
  const pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',frontier_ids:frontier.ids,run,phase,round,judge_model:activeModel,units,assignments,dependency_levels:dependencyLevels,before:hashes(root,run),before_statements:statementHashes(root,run),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),rejected,input_evidence:{[judgeInput]:digest(readFileSync(judgeInput,'utf8'))}};
  frozen(path,pack); writeTasks(root,pack,'adjudicate'); return pack;
}

function writeTasks(root,pack,mode) {
  for(const unit of pack.units) {
    const report=workerReport(root,pack.run,pack.phase,pack.round,unit);
    const task=report.replace(/\.json$/,'.task.md');
    const gateInput=task.replace(/\.task\.md$/,'.gate-diagnostics.json');
    if(pack.gateRoutingVersion===1)frozen(gateInput,(pack.gateAssignments??{})[unit]??[]);
    if(existsSync(task)) continue;
    const assigned=pack.assignments[unit];
    const batchDigest=join(root,'research',`${pack.run}-batch-${unit}-step5-context.json`);
    const entries=[`# Step 5 ${mode}: ${pack.phase}, round ${pack.round}, unit ${unit}`,
      `Read briefs/step5-${mode==='adjudicate'?'adjudicator':'owner-repair'}.md.`,
      `Frozen inputs: ${packPath(root,pack.run,pack.phase,pack.round)}.`,
      mode==='adjudicate'&&existsSync(batchDigest)
        ? `Read this batch's rejection-blind Step-4 review digest first: ${batchDigest}. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.` : '',
      pack.reader_concerns?.some(row=>assigned.includes(row.id))
        ? `Owner-confirmed Step-4 reader concerns assigned for genuine current review and smallest necessary repair (these are not judge rejections or downstream claims):\n${JSON.stringify(pack.reader_concerns.filter(row=>assigned.includes(row.id)),null,2)}. Review the bound original digest and individual owner evidence; repair confirmed presentation defects as well as mathematical defects. Return ordinary reviews, with no adjudication decision for these concerns. Only actual Statement/Definition changes propagate consumer examinations.` : '',
      pack.initial_scope_findings?.some(row=>assigned.includes(row.id))
        ? `Owner-confirmed findings from original native initial adjudication, assigned for current review and smallest necessary repair:\n${JSON.stringify(pack.initial_scope_findings.filter(row=>assigned.includes(row.id)),null,2)}. Read the original native report/finding and bound individual root instructions. These are explicit work requests, not Step-4 reader concerns, judge rejections, new adjudication decisions, or current acceptance. Return ordinary reviews with no adjudication decision. Only actual Statement/Definition changes propagate consumer examination.` : '',
      `Write only your assigned frontier item files, their necessary owning contracts/metadata, and ${report}.`,
      'Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.',
      'SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.',
      pack.phase==='gate'||pack.basePhase==='gate'?'Step 5.9 permits no new items.':'You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.',
      'Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.',
      mode==='adjudicate'
        ? 'Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.'
        : 'Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.',
      'Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.',
      'Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.',
      mode==='adjudicate' ? 'Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.' :
        'Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.',
      `Return JSON {run:"${pack.run}",phase:"${pack.phase}",round:${pack.round},unit:"${unit}",input_sha256:"${digest(pack)}",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.`,
      pack.native_downstream_pending?.some(row=>assigned.includes(row.id))
        ? `Explicit native pending consumer work (read the unchanged original report and examine actual current supplier effects): ${JSON.stringify(pack.native_downstream_pending.filter(row=>assigned.includes(row.id)))}. An earlier initial adjudicator review does not discharge this assignment. Return a genuine current review and repair only confirmed defects.` : '',
      pack.reporting_owner_recovery ? `This is an explicitly authorized NEW persistent reporting context, not a resume of the old ephemeral session. Historical source/use notes grant no fresh review credit. Read every assigned source and full proof, suppliers before affected consumers; report genuine fresh current review rows for all assigned recovery subjects. Original reporting evidence: ${pack.reporting_owner_recovery.path}.` : '',
      `Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run ${pack.run} --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.`,
      pack.reader_review_owners?`This pass retains your own genuine prior reviewer session. Selected same-reviewer obligations for this lane: ${assigned.filter(id=>pack.reader_review_owners[id]===unit).join(', ')||'(none)'}. Actually examine each current assigned consumer against your earlier supplier changes. Another reviewer may separately owe the same consumer in a later serialized pass; your review supplies only your own obligation.`:'',
      mode==='adjudicate' ? 'The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.' : '',
      mode==='adjudicate' ? `Assigned item order: ${[...new Set(assigned.map(row=>row.id))].map(id=>`${pack.dependency_levels?.[id]??'?'}:${id}`).join(', ')||'(none)'}.` : '',
      mode==='adjudicate' ? 'Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.' :
        'All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.',
      pack.ledger_updates?.length ? `Adjudicator ledger proposals requiring reconciliation:\n${JSON.stringify(pack.ledger_updates,null,2)}` : '',
      'For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.',
      'Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.',
      pack.gateRoutingVersion===1
        ? `Assigned input: read assignments["${unit}"] from the frozen pack above (${assigned.length} item(s)). Do not dump the whole pack or the entire library into context. Read your assignment array and the needed item files in bounded chunks.`
        : `Assigned input:\n${JSON.stringify(assigned,null,2)}`,
      pack.gateRoutingVersion===1
        ? `Gate diagnostics: read ${gateInput}. This file contains your diagnostic indices, scoped subject IDs and complete raw failure outputs. Examine every assigned diagnostic in bounded chunks, filtering item diagnostics to its subjects list; passing inventories and cited supplier names are not repair authority. Each item has exactly one owner. For a shared diagnostic, resolve only your listed subjects, not another lane's items. Global/owner-held diagnostic components belong only to the designated owner; reconcile shared metadata under the lock and report operator-only work honestly. Record gate_resolutions for every assigned index, stating the actual scope resolved. A resolution does not certify or waive the gate. Full diagnostics remain preserved on disk; never ignore a failure because its output is large. Further downstream work is scheduled only after Statement/Definition changes, not proof-only repairs or merely named suppliers.`
        : pack.failures ? `Your gate diagnostics:\n${JSON.stringify((pack.gateAssignments??{})[unit]??[],null,2)}\nAll failures:\n${JSON.stringify(pack.failures,null,2)}` : '',
    ];
    const nonempty=entries.filter(entry=>String(entry).trim());
    const body=mode==='adjudicate'
      ? [nonempty[0],...nonempty.slice(1).map(entry=>String(entry).split('\n')
        .map((line,index)=>index===0?`- ${line}`:`  ${line}`).join('\n'))].join('\n\n')
      : entries.join('\n\n');
    requireValue(pack.gateRoutingVersion!==1||body.length<64000,'gate launch task exceeds bounded prompt budget');
    writeFileSync(task,body+'\n',{flag:'wx'});
  }
}

export const ownerSupplementPath=(root,run,phase,round)=>join(workflowDir(root,run),`${phase}-${round}-owner-supplement.json`);
const ownerSupplementSeal=Symbol('validated-root-owner-supplement');
function loadOwnerSupplement(root,pack,reports,current,items) {
  const path=ownerSupplementPath(root,pack.run,pack.phase,pack.round);if(!existsSync(path))return null;
  const row=read(path),unit=String(row.unit),native=reports.find(report=>String(report.unit)===unit);
  const scopeBlocked=row.version===2&&row.kind==='step5-owner-scope-blocker-supplement';
  const extraSupplier=row.version===3&&row.kind==='step5-owner-extra-supplier-supplement';
  const guardedSupplier=scopeBlocked||extraSupplier;
  requireValue((row.version===1||guardedSupplier)&&row.run===pack.run&&row.phase===pack.phase&&row.round===pack.round
    &&['initial','repeat'].includes(pack.phase)&&pack.rejected&&pack.repair_scope==='frontier'
    &&row.pack_sha256===digest(pack)&&native&&(guardedSupplier||native.completion==='blocked'),'invalid owner supplement identity or native blocker');
  requireValue(row.authorized_by==='owner'&&row.reviewed_by==='root'
    &&typeof row.authorization==='string'&&row.authorization.trim().length>=40,'owner supplement requires explicit root authority');
  const nativePath=workerReport(root,pack.run,pack.phase,pack.round,unit);
  const dispatchPath=join(root,'research',`${pack.run}-dispatch`,`alpha-adjudicate-${workerLabel(pack.phase,pack.round,unit)}.result.json`);
  const evidence={[path]:digest(readFileSync(path,'utf8'))};
  for(const [binding,expected] of [[row.original_report,nativePath],[row.dispatch,dispatchPath]]){
    requireValue(binding?.path===expected&&/^[a-f0-9]{64}$/.test(binding.sha256??''),'owner supplement native binding mismatch');
    evidence[expected]=binding.sha256;
  }
  const supporting=row.supporting_evidence;
  requireValue(supporting&&typeof supporting==='object'&&!Array.isArray(supporting)&&Object.keys(supporting).length>0,'owner supplement needs source evidence');
  for(const [p,hash]of Object.entries(supporting))requireValue(resolve(p).startsWith(resolve(root,'research')+'/')&&/^[a-f0-9]{64}$/.test(hash)
    &&(!Object.hasOwn(evidence,p)||evidence[p]===hash),'invalid owner supplement supporting evidence');
  Object.assign(evidence,supporting);verifyEvidence(evidence);
  const dispatch=read(dispatchPath),state=read(join(root,'.autopilot',pack.run,'state.json'));
  const stage=pack.phase==='initial'?'5.1-adjudicate':'5.5-adjudicate';
  requireValue(state.run===pack.run&&state.stage===stage
    &&(guardedSupplier||state.blockers?.some(value=>value.stage===stage&&value.key==='gate:step5-wave-evidence'))
    &&Object.values(state.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt)),
    'owner supplement requires the held native collection gate and drained writers');
  requireValue(dispatch.ok===true&&dispatch.run===pack.run&&dispatch.role==='alpha-adjudicate'
    &&dispatch.label===workerLabel(pack.phase,pack.round,unit)
    &&Number.isFinite(Date.parse(dispatch.ended_at))&&Number.isFinite(Date.parse(row.completed_at))
    &&Date.parse(row.completed_at)>=Date.parse(dispatch.ended_at),'owner supplement predates native worker completion');
  const rejected=pack.assignments[unit]?.find(value=>key(value)===key(row.rejection??{}));
  const blocker=native.blockers?.find(value=>value.id===rejected?.id&&value.uncertain===true);
  const oldReview=native.reviews?.find(value=>value.id===rejected?.id),oldDecision=native.decisions?.find(value=>key(value)===key(rejected??{}));
  if(guardedSupplier){
    if(extraSupplier){
      const finding=native.ledger_updates?.[row.open_finding_index];
      requireValue(rejected&&!Object.hasOwn(native,'completion')&&!(native.blockers??[]).length
        &&native.repair_notes?.status==='assigned_repair_complete'&&native.repair_notes.repair_complete===true
        &&oldReview?.disposition==='repaired'&&evidenceText(oldReview)
        &&/^[a-f0-9]{64}$/.test(oldReview.post_sha256??'')&&oldReview.post_sha256!==pack.before[rejected.id]
        &&oldDecision?.outcome==='confirmed_fatal'&&evidenceText(oldDecision)&&FATAL_TYPES.includes(oldDecision.defect_type)
        &&Number.isInteger(row.open_finding_index)&&row.open_finding_index>=0
        &&finding?.ledger==='canonical-defect-ledger'&&finding.action==='record-open-finding'
        &&finding.id===row.required_supplier&&finding.id!==rejected.id
        &&finding.status==='open'&&finding.severity==='fatal'&&evidenceText(finding)
        &&native.ledger_updates.filter(value=>value.ledger==='canonical-defect-ledger'&&value.action==='record-open-finding').length===1
        &&FATAL_TYPES.includes(finding.defect_type)&&row.open_finding_sha256===digest(finding)
        &&['source_excerpt','affected_use','minimality','route'].every(name=>typeof finding[name]==='string'&&finding[name].trim().length>=40)
        &&!pack.assignments[unit].some(value=>value.id===finding.id),
        'owner extra-supplier supplement requires a completed assigned repair and exact separate native open supplier finding');
    }else{
      const findings=(native.ledger_updates??[]).filter(value=>value.id===rejected?.id
        &&value.ledger==='canonical-defect-ledger'&&value.action==='record-open-finding');
      const finding=findings[0],proposal=native.repair_notes?.minimal_supplier_repair;
      requireValue(rejected&&!Object.hasOwn(native,'completion')&&!(native.blockers??[]).length
        &&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run)
        &&dispatch.exit_code===0&&dispatch.timed_out===false&&typeof dispatch.session_id==='string'&&dispatch.session_id.length>0
        &&JSON.stringify(dispatch.covers)===JSON.stringify([unit])
        &&native.repair_notes?.status==='blocked_by_assigned_file_scope'&&native.repair_notes.repair_complete===false
        &&oldReview?.disposition==='unaffected'&&oldReview.post_sha256===pack.before[rejected.id]&&evidenceText(oldReview)
        &&oldDecision?.outcome==='confirmed_fatal'&&evidenceText(oldDecision)&&FATAL_TYPES.includes(oldDecision.defect_type)
        &&findings.length===1&&finding.status==='open'&&finding.severity==='fatal'&&evidenceText(finding)
        &&finding.defect_type===oldDecision.defect_type&&finding.supplier===row.required_supplier
        &&row.open_finding_sha256===digest(finding)&&row.minimal_supplier_repair_sha256===digest(proposal)
        &&proposal?.path===`items/${finding.supplier}.md`&&proposal.section==='Definition'
        &&['source_excerpt','proposed_replacement','justification'].every(name=>typeof proposal[name]==='string'&&proposal[name].trim().length>0)
        &&proposal.source_excerpt!==proposal.proposed_replacement
        &&!Object.values(pack.assignments[unit]).some(value=>value.id===finding.supplier),
        'owner scope supplement requires an exact native open fatal scope-blocked supplier proposal');
    }
    requireValue(dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run)
      &&dispatch.exit_code===0&&dispatch.timed_out===false&&typeof dispatch.session_id==='string'&&dispatch.session_id.length>0
      &&JSON.stringify(dispatch.covers)===JSON.stringify([unit]),
      'owner supplier supplement requires the original successful native Sol completion');
    const attemptPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.result.json`);
    requireValue(Number.isInteger(dispatch.attempt)&&dispatch.attempt>0
      &&dispatch.prompt===dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.prompt.md`),
      'owner scope supplement requires the original native attempt and prompt');
    for(const [binding,expected] of [[row.original_attempt,attemptPath],[row.dispatch_prompt,dispatch.prompt]]){
      requireValue(binding?.path===expected&&/^[a-f0-9]{64}$/.test(binding.sha256??'')
        &&(!Object.hasOwn(evidence,expected)||evidence[expected]===binding.sha256),
        'owner scope supplement original attempt/prompt binding mismatch');
      evidence[expected]=binding.sha256;
    }
    verifyEvidence(evidence);
    requireValue(digest(read(attemptPath))===digest(dispatch),'owner scope supplement original native attempt differs from result');
    const creation=row.creation_state;
    requireValue(creation&&resolve(creation.path??'').startsWith(resolve(root,'research')+'/')
      &&/^[a-f0-9]{64}$/.test(creation.sha256??''),'owner scope supplement requires bound creation state');
    requireValue(!Object.hasOwn(evidence,creation.path)||evidence[creation.path]===creation.sha256,
      'owner scope supplement creation binding conflicts with supporting evidence');
    evidence[creation.path]=creation.sha256;verifyEvidence(evidence);
    const snapshot=read(creation.path);
    const failure=`stage ${stage}: gate step5-wave-evidence failed — confirmed defect not repaired ${rejected.id}`;
    const held=value=>value.run===pack.run&&value.stage===stage
      &&Object.values(value.dispatches??{}).every(dispatch=>!dispatch.startedAt||Boolean(dispatch.endedAt))
      &&value.blockers?.some(blocker=>blocker.stage===stage&&blocker.key==='gate:step5-wave-evidence'
        &&blocker.message===failure&&Date.parse(blocker.at)<=Date.parse(row.completed_at));
    const completed=value=>{const worker=value.dispatches?.[`${stage}:${dispatch.label}`];
      return worker?.lastExitOk===true&&worker.role===dispatch.role&&worker.attempt===dispatch.attempt
        &&JSON.stringify(worker.covers)===JSON.stringify(dispatch.covers)
        &&Date.parse(worker.endedAt)>=Date.parse(dispatch.ended_at)&&Date.parse(worker.endedAt)<=Date.parse(row.completed_at);};
    const creationHeld=extraSupplier
      ?snapshot.run===pack.run&&snapshot.stage===stage&&snapshot.stages?.[stage]?.gatesPassedAt===null
        &&snapshot.stages[stage].doneAt===null
        &&!snapshot.blockers?.some(blocker=>blocker.stage===stage&&String(blocker.key).startsWith('gate:'))
        &&Object.values(snapshot.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt))
      :held(snapshot);
    requireValue(creationHeld&&snapshot.paused===true&&completed(state)&&completed(snapshot),
      extraSupplier?'owner extra-supplier supplement requires paused drained original pre-gate creation state'
        :'owner scope supplement requires exact paused drained failure and successful native creation state');
  }else requireValue(rejected&&blocker&&row.blocker_sha256===digest(blocker)&&oldReview?.uncertain===true
    &&native.blockers.length===1
    &&oldDecision?.uncertain===false&&['confirmed_fatal','confirmed_nonfatal'].includes(oldDecision.outcome),
    'owner supplement must bind an exact uncertain native blocker and confirmed frozen rejection');
  requireValue(Array.isArray(row.scope)&&row.scope.length>0&&Array.isArray(row.reviews)&&Array.isArray(row.decisions)
    &&row.decisions.length===1&&Array.isArray(row.source_reading)&&row.source_reading.length>0,
    'malformed owner supplement review scope');
  requireValue(row.source_reading.every(value=>/^https:\/\//.test(value.url??'')&&value.full_text_reviewed===true
    &&typeof value.reason==='string'&&value.reason.trim().length>=40
    &&typeof value.read_extent==='string'&&value.read_extent.trim().length>=40),
    'owner supplement requires actual complete relevant proof review with an explicit full-text read extent');
  const frontier=gateFrontier(root,pack.run),byId=new Map(items.map(value=>[value.id,value])),ids=new Set();
  for(const value of row.scope)requireValue(value&&frontier.has(value.id)&&pack.before[value.id]&&byId.has(value.id),
    'owner supplement can only review existing draft frozen-frontier subjects');
  const primary=row.scope.filter(value=>value.role===(extraSupplier?'assigned-consumer':'blocker'));
  requireValue(primary.length===1&&primary[0].id===rejected.id,extraSupplier
    ?'owner extra-supplier assigned consumer scope mismatch':'owner supplement blocker scope mismatch');
  const prerequisites=row.scope.filter(value=>value.role==='prerequisite');
  for(const value of prerequisites)requireValue(value.id!==rejected.id
    &&(extraSupplier?['lemma','proposition','theorem','corollary']:['definition','algorithm']).includes(itemKind(root,value.id))
    &&discoverDownstream({items,repairedIds:[value.id]}).some(impact=>impact.id===rejected.id),
    extraSupplier?'owner extra-supplier prerequisite is not a necessary direct proved result'
      :'owner supplement prerequisite is not a necessary direct definition supplier');
  const suppliers=new Set([rejected.id,...prerequisites.map(value=>value.id)]);
  if(guardedSupplier){
    requireValue(prerequisites.length===1&&prerequisites[0].id===row.required_supplier
      &&byId.get(rejected.id).deps.includes(row.required_supplier)
      &&pack.before_statements?.[row.required_supplier]
      &&byId.get(row.required_supplier).statement_sha256!==pack.before_statements[row.required_supplier]
      &&current[row.required_supplier]!==pack.before[row.required_supplier]
      &&current[rejected.id]!==pack.before[rejected.id],
      extraSupplier?'owner extra-supplier supplement requires genuine supplier Statement and assigned consumer repairs'
        :'owner scope supplement requires genuine supplier Definition and blocker carrier repairs');
    if(extraSupplier){
      const binding=row.supplier_before,finding=native.ledger_updates[row.open_finding_index];
      requireValue(binding&&resolve(binding.path??'').startsWith(resolve(root,'research')+'/')
        &&/^[a-f0-9]{64}$/.test(binding.sha256??'')
        &&(!Object.hasOwn(evidence,binding.path)||evidence[binding.path]===binding.sha256),
        'owner extra-supplier supplement requires an exact archived supplier preimage');
      evidence[binding.path]=binding.sha256;verifyEvidence(evidence);
      const before=readFileSync(binding.path,'utf8'),after=readFileSync(join(root,'items',`${row.required_supplier}.md`),'utf8');
      const originalStatement=before.match(/^## Statement[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/m)?.[1];
      const proof=after.match(/^## Proof[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/m)?.[1];
      requireValue(itemHashGuard(before)===pack.before[row.required_supplier]
        &&statementHash(before)===pack.before_statements[row.required_supplier]
        &&originalStatement?.includes(finding.source_excerpt)&&!after.includes(finding.source_excerpt)
        &&typeof proof==='string'&&/^[1-9]\d*\.[1-9]\d*[ \t]+\S/m.test(proof),
        'owner extra-supplier supplement requires the native defect preimage and an actual changed proved supplier');
    }
    // Continue propagation only through actual interface changes. The exact
    // inventory cannot drop a current direct consumer of a repaired interface.
    const expected=new Set(suppliers),pending=[...suppliers];
    while(pending.length){
      const id=pending.shift();
      if(byId.get(id)?.statement_sha256===pack.before_statements?.[id])continue;
      for(const impact of discoverDownstream({items,repairedIds:[id]}).filter(value=>frontier.has(value.id))){
        if(!expected.has(impact.id)){expected.add(impact.id);pending.push(impact.id);}
      }
    }
    const inventory=[...expected].sort();
    requireValue(JSON.stringify(row.expected_review_ids)===JSON.stringify(inventory)
      &&JSON.stringify(row.scope.map(value=>value.id).sort())===JSON.stringify(inventory),
      'owner scope supplement must cover the exact affected consumer inventory');
    for(const id of expected)if(byId.get(id)?.statement_sha256!==pack.before_statements?.[id])suppliers.add(id);
  }
  const direct=discoverDownstream({items,repairedIds:[...suppliers]});
  for(const value of row.scope){
    requireValue(value&&frontier.has(value.id)&&pack.before[value.id]&&byId.has(value.id)&&!ids.has(value.id)
      &&typeof value.reason==='string'&&value.reason.trim().length>=40,'invalid owner supplement scope subject');
    ids.add(value.id);
    if(value.role==='direct-consumer')requireValue(suppliers.has(value.supplier)
      &&direct.some(impact=>impact.id===value.id&&impact.suppliers.includes(value.supplier))
      &&typeof value.consumed_clause==='string'&&value.consumed_clause.trim().length>=40,'owner supplement consumer lacks an actual direct supplier use');
    else requireValue([extraSupplier?'assigned-consumer':'blocker','prerequisite'].includes(value.role),'unknown owner supplement scope role');
  }
  for(const id of ids){
    const nativeRows=reports.flatMap(report=>report.reviews??[]).filter(value=>value.id===id);
    const assigned=Object.values(pack.assignments).flat().some(value=>value.id===id);
    requireValue(nativeRows.length===(assigned?1:0),`owner supplement cannot supply missing or duplicate native history: ${id}`);
    if(id!==rejected.id)for(const review of nativeRows)requireValue(evidenceText(review),`owner supplement cannot waive another uncertain native review: ${id}`);
  }
  const contexts=reviewContexts(items),seen=new Set(),judgeContexts=currentHashesMany(root,[...ids]);
  const reviewedSources=new Set(row.source_reading.map(value=>value.url));
  for(const review of row.reviews){
    const now=judgeContexts.get(review.id);
    requireValue(ids.has(review.id)&&!seen.has(review.id)&&review.reviewed_by==='root'&&evidenceText(review)
      &&review.source_urls.length>0&&review.source_urls.every(url=>reviewedSources.has(url))
      &&['repaired','unaffected'].includes(review.disposition)&&contexts.matches(review,current)
      &&now?.item_sha256===review.item_sha256&&now?.context_sha256===review.context_sha256,
      `invalid current root owner review: ${review.id}`);seen.add(review.id);
  }
  requireValue(seen.size===ids.size,'missing root owner review for supplement scope');
  const decision=row.decisions[0];
  requireValue(key(decision)===key(rejected)&&decision.outcome===oldDecision.outcome
    &&decision.defect_type===oldDecision.defect_type&&decision.reviewed_by==='root'&&evidenceText(decision)
    &&decision.source_urls.length>0&&decision.source_urls.every(url=>reviewedSources.has(url)),
    'owner supplement cannot replace the frozen verdict or confirmed defect classification');
  return {...row,ids,evidence,path,[ownerSupplementSeal]:true};
}


// This is an operational correction to a bad judge-lineup diagnostic, not a
// mathematical owner review or new judge coverage. Native reports stay intact.
const operationalSupplementSeal=Symbol('validated-operational-owner-supplement');
export const operationalSupplementPath=(root,run,phase,round)=>join(workflowDir(root,run),`${phase}-${round}-owner-operational-supplement.json`);
function operationalSubjects(pack) {
  const all=Object.values(pack.gateAssignments??{}).flat();
  const diagnostics=all.filter(row=>row.id==='judge-closure');
  requireValue(pack.phase==='gate'&&pack.gateRoutingVersion===1&&!pack.rejected&&diagnostics.length===pack.units.length,
    'operational supplement only applies to a native gate owner pack');
  const indices=new Set(diagnostics.map(row=>row.index));
  requireValue(indices.size===1,'ambiguous operational diagnostic index');
  const ids=[...new Set(diagnostics.flatMap(row=>row.subjects))].sort();
  for(const row of diagnostics){
    const document=JSON.parse(row.failure.output);
    requireValue(Array.isArray(document.errors)&&document.errors.length>0
      &&document.errors.every(error=>error.code==='judge-coverage-missing'&&ids.includes(error.id)),
      'operational supplement cannot close another diagnostic type');
    requireValue(JSON.stringify([...new Set(document.errors.map(error=>error.id))].sort())===JSON.stringify(ids),
      'operational diagnostic subject inventory is not exact');
  }
  requireValue(all.filter(row=>row.id!=='judge-closure').every(row=>row.subjects.every(id=>!ids.includes(id))),
    'operational subjects overlap a genuine source/contract/risk diagnostic');
  return {ids,index:[...indices][0]};
}
function verifyOperationalCoverage(root,run,ids,current) {
  const dir=workflowDir(root,run),baseline=read(join(dir,'baseline.json'));
  const original=read(join(dir,'step4-verdicts.json')),ledger=lines(join(root,'research',`${run}-judge.jsonl`));
  const adjudications=lines(join(root,'research',`${run}-judge-adjudications.jsonl`));
  const contexts=currentHashesMany(root,ids),covered=[];
  for(const id of ids){
    requireValue(current[id]===baseline[id],`operational carry is no longer unchanged: ${id}`);
    const now=contexts.get(id);
    const rows=original.filter(row=>row.id===id&&row.model===MODELS.luna.id&&typeof row.keep==='boolean'
      &&ledger.some(actual=>digest(actual)===digest(row))
      &&verdictIsCurrent(row,{context:now?.context_sha256,item:now?.item_sha256}));
    const row=rows.find(row=>row.keep===true||adjudications.some(answer=>key(answer)===key(row)
      &&answer.item_sha256===row.item_sha256&&['confirmed_nonfatal','false_positive'].includes(answer.outcome)));
    requireValue(row,`operational carry lacks a genuine current Luna verdict/disposition: ${id}`);
    covered.push({id,model:row.model,original_verdict_sha256:digest(row),item_sha256:row.item_sha256,
      context_sha256:row.context_sha256,coverage_basis:'existing-frozen-native-verdict',mathematical_review:false});
  }
  return covered;
}
function operationalBindings(root,pack,reports,certificate) {
  const dir=workflowDir(root,pack.run),bindings={};
  const bind=path=>{bindings[path]=digest(readFileSync(path,'utf8'));};
  bind(packPath(root,pack.run,pack.phase,pack.round));
  for(const name of ['frontier.json','baseline.json','step4-verdicts.json']){
    const path=join(dir,name);requireValue(certificate.evidence?.[path],`certificate lacks native frozen binding ${path}`);bind(path);
  }
  const frozenCertificate=effectiveWorkflowArtifact(root,pack.run,join(dir,`certification-${certificate.phase}-${certificate.round}.json`));
  requireValue(JSON.stringify(read(frozenCertificate))===JSON.stringify(certificate),'current certificate has no exact immutable archive');bind(frozenCertificate);
  for(const unit of pack.units){
    const report=workerReport(root,pack.run,pack.phase,pack.round,unit);bind(report);bind(report.replace(/\.json$/,'.gate-diagnostics.json'));
    const path=join(root,'research',`${pack.run}-dispatch`,`alpha-repair-${workerLabel(pack.phase,pack.round,unit)}.result.json`);
    const result=read(path);requireValue(result.ok===true&&result.run===pack.run&&result.role==='alpha-repair'
      &&result.label===workerLabel(pack.phase,pack.round,unit)&&result.model===MODELS.sol61.id&&result.provider_effort===sol61Effort(root,result.run),
      'operational supplement requires genuine completed native owner dispatches');bind(path);
  }
  return bindings;
}
export function recordOperationalSupplement(root,run,phase,round,authorizationPath) {
  const statePath=join(root,'.autopilot',run,'state.json'),state=read(statePath),auth=read(authorizationPath);
  const requestPath=join(root,'.autopilot',run,'owner-gate-request.json'),request=read(requestPath);
  const pack=readPack(root,run,phase,round),reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const {ids,index}=operationalSubjects(pack);
  requireValue(state.run===run&&state.stage==='5.9-repair'&&state.paused===true
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||Boolean(row.endedAt)),
    'operational receipt creation requires paused exact native stage and drained writers');
  requireValue(auth.version===1&&auth.run===run&&auth.phase===phase&&auth.round===round
    &&auth.authorized_by==='owner'&&auth.pack_sha256===digest(pack)&&auth.diagnostic_index===index
    &&request.run===run&&request.stages?.includes('5.9-repair')&&auth.owner_gate_request_id===request.id
    &&auth.mathematical_review===false&&auth.native_coverage_adopted===false
    &&typeof auth.reason==='string'&&auth.reason.trim().length>=80
    &&JSON.stringify(auth.subjects)===JSON.stringify(ids),'invalid exact operational owner authorization');
  const certificate=verifyCertification(root,run,{allowMissing:false}),current=hashes(root,run);
  const bindings=operationalBindings(root,pack,reports,certificate);
  const coverage=verifyOperationalCoverage(root,run,ids,current);
  for(const id of ids)requireValue(current[id]===pack.before[id],'operational carry changed after original assignment');
  const dir=workflowDir(root,run),snapshot=join(dir,`${phase}-${round}-owner-operational-creation-state.json`);
  frozen(snapshot,state);bindings[snapshot]=digest(readFileSync(snapshot,'utf8'));
  const requestSnapshot=join(dir,`${phase}-${round}-owner-operational-creation-request.json`);
  frozen(requestSnapshot,request);bindings[requestSnapshot]=digest(readFileSync(requestSnapshot,'utf8'));
  bindings[authorizationPath]=digest(readFileSync(authorizationPath,'utf8'));
  const row={version:1,kind:'step5-owner-operational-supplement',run,phase,round,authorized_by:'owner',
    recorded_by:'step5-workflow-native',recorded_at:new Date().toISOString(),pack_sha256:digest(pack),
    diagnostic_index:index,subjects:ids,reason:auth.reason,mathematical_review:false,native_coverage_adopted:false,
    creation_snapshot:snapshot,creation_request:requestSnapshot,owner_gate_request_id:request.id,bindings,coverage};
  const path=operationalSupplementPath(root,run,phase,round);frozen(path,row);return {path,subjects:ids.length,mathematical_review:false};
}
function loadOperationalSupplement(root,pack,reports,current) {
  const path=operationalSupplementPath(root,pack.run,pack.phase,pack.round);if(!existsSync(path))return null;
  const row=read(path),{ids,index}=operationalSubjects(pack),snapshot=read(row.creation_snapshot),request=read(row.creation_request);
  requireValue(row.version===1&&row.kind==='step5-owner-operational-supplement'&&row.run===pack.run
    &&row.phase===pack.phase&&row.round===pack.round&&row.authorized_by==='owner'
    &&row.recorded_by==='step5-workflow-native'&&row.pack_sha256===digest(pack)&&row.diagnostic_index===index
    &&row.mathematical_review===false&&row.native_coverage_adopted===false
    &&JSON.stringify(row.subjects)===JSON.stringify(ids)&&snapshot.run===pack.run
    &&snapshot.stage==='5.9-repair'&&snapshot.paused===true
    &&request.run===pack.run&&request.stages?.includes('5.9-repair')&&request.id===row.owner_gate_request_id
    &&Object.values(snapshot.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt)),
    'invalid operational receipt or creation snapshot');
  verifyEvidence(row.bindings);
  const coverage=verifyOperationalCoverage(root,pack.run,ids,current);
  requireValue(JSON.stringify(coverage)===JSON.stringify(row.coverage),'operational coverage binding changed');
  for(const id of ids){
    const unit=pack.units.find(unit=>pack.assignments[unit].includes(id));
    const observations=reports.find(report=>String(report.unit)===String(unit))?.reviews?.filter(value=>value.id===id);
    requireValue(observations?.length===1&&observations[0].disposition==='unaffected'
      &&observations[0].post_sha256===current[id]&&current[id]===pack.before[id],
      'operational supplement cannot replace missing history or a real source edit');
  }
  return {...row,ids:new Set(ids),path,evidence:{...row.bindings,[path]:digest(readFileSync(path,'utf8'))},[operationalSupplementSeal]:true};
}

// A confirmed consumer defect can be repaired at its direct supplier. This
// receipt identifies an already completed same-native-reviewer repair; it never
// supplies a new review, changes a decision, or treats downstream membership as
// proof of repair. See step5-supplier-repairs.md for the deliberately narrow form.
const supplierRepairSeal=Symbol('validated-same-native-supplier-repair');
export const supplierRepairPath=(root,run,phase,round)=>join(workflowDir(root,run),`${phase}-${round}-owner-supplier-repairs.json`);
function loadSupplierRepairs(root,pack,reports,current,items) {
  const path=supplierRepairPath(root,pack.run,pack.phase,pack.round);
  if(!existsSync(path))return null;
  const receipt=read(path),evidence={...receipt.bindings,[path]:digest(readFileSync(path,'utf8'))};
  requireValue(receipt.version===1&&receipt.kind==='same-native-reviewer-supplier-repairs'
    &&receipt.run===pack.run&&receipt.phase===pack.phase&&receipt.round===pack.round
    &&['initial','repeat'].includes(pack.phase)&&pack.rejected&&pack.repair_scope==='frontier'
    &&receipt.pack_sha256===digest(pack)&&receipt.authorized_by==='owner'&&receipt.owner_identity==='/root'
    &&receipt.native_coverage_adopted===false&&Number.isFinite(Date.parse(receipt.recorded_at))
    &&Array.isArray(receipt.entries)&&receipt.entries.length>0,'invalid supplier repair receipt identity');
  requireValue(receipt.bindings&&typeof receipt.bindings==='object'&&!Array.isArray(receipt.bindings)
    &&Object.entries(receipt.bindings).every(([p,hash])=>resolve(p).startsWith(resolve(root,'research')+'/')
      &&/^[a-f0-9]{64}$/.test(hash)),'invalid supplier repair evidence bindings');
  const bound=p=>{requireValue(Object.hasOwn(receipt.bindings,p),`missing supplier repair binding: ${p}`);return read(p);};
  verifyEvidence(evidence);
  requireValue(typeof receipt.owner_review_evidence==='string'
    &&Object.hasOwn(receipt.bindings,receipt.owner_review_evidence),'supplier repair requires bound focused owner review evidence');
  bound(packPath(root,pack.run,pack.phase,pack.round));
  const snapshot=bound(receipt.creation_state),stage=pack.phase==='initial'?'5.1-adjudicate':'5.5-adjudicate';
  requireValue(snapshot.run===pack.run&&snapshot.stage===stage&&snapshot.paused===true
    &&snapshot.blockers?.some(row=>row.stage===stage&&row.key==='gate:step5-wave-evidence')
    &&Object.values(snapshot.dispatches??{}).every(row=>!row.startedAt||Boolean(row.endedAt)),
    'supplier repair receipt requires an archived paused held collection gate and drained writers');
  const graph=new Map(items.map(row=>[row.id,row])),contexts=reviewContexts(items),resolved=new Map();
  for(const entry of receipt.entries){
    const unit=String(entry.unit),report=reports.find(row=>String(row.unit)===unit),decision=entry.decision;
    const nativePath=workerReport(root,pack.run,pack.phase,pack.round,unit);
    const reportBytes=bound(nativePath);
    requireValue(report&&digest(reportBytes)===digest(report)&&report.input_sha256===digest(pack)
      &&report.completion!=='blocked'&&!(report.blockers??[]).length,'supplier repair must retain the exact completed native report');
    const dispatchPath=join(root,'research',`${pack.run}-dispatch`,`alpha-adjudicate-${workerLabel(pack.phase,pack.round,unit)}.result.json`);
    const dispatch=bound(dispatchPath);
    requireValue(dispatch.ok===true&&dispatch.run===pack.run&&dispatch.role==='alpha-adjudicate'
      &&dispatch.label===workerLabel(pack.phase,pack.round,unit)&&dispatch.model===MODELS.sol61.id
      &&dispatch.provider_effort===sol61Effort(root,dispatch.run)&&typeof dispatch.session_id==='string'&&dispatch.session_id.length>0
      &&Number.isInteger(dispatch.attempt)&&dispatch.attempt>0&&Number.isFinite(Date.parse(dispatch.ended_at))
      &&Date.parse(receipt.recorded_at)>=Date.parse(dispatch.ended_at),'supplier repair lacks successful authorized native completion');
    const attemptPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.result.json`);
    requireValue(digest(bound(attemptPath))===digest(dispatch),'supplier repair native attempt differs from its successful result');
    requireValue(typeof dispatch.prompt==='string','supplier repair native prompt missing');
    requireValue(dispatch.prompt===dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.prompt.md`)
      &&Object.hasOwn(receipt.bindings,dispatch.prompt),'supplier repair must bind its actual native attempt prompt');
    const assigned=pack.assignments[unit]??[],supplier=entry.supplier;
    requireValue(decision&&assigned.some(row=>key(row)===key(decision))
      &&report.decisions.filter(row=>key(row)===key(decision)&&digest(row)===digest(decision)).length===1
      &&['confirmed_fatal','confirmed_nonfatal'].includes(decision.outcome)&&evidenceText(decision)
      &&!resolved.has(key(decision)),'supplier repair must name one exact unchanged confirmed native decision');
    const consumerReviews=report.reviews.filter(row=>row.id===decision.id),supplierReviews=report.reviews.filter(row=>row.id===supplier?.id);
    const consumer=consumerReviews[0],review=supplierReviews[0],supply=graph.get(supplier?.id);
    requireValue(supplier&&supplier.id!==decision.id&&assigned.some(row=>row.id===supplier.id)
      &&consumerReviews.length===1&&supplierReviews.length===1&&consumer.disposition==='unaffected'
      &&review.disposition==='repaired'&&evidenceText(consumer)&&evidenceText(review)
      &&digest(consumer)===entry.consumer_review_sha256&&digest(review)===supplier.review_sha256
      &&contexts.matches(consumer,current)&&contexts.matches(review,current)
      &&pack.before[decision.id]===current[decision.id]&&current[decision.id]===consumer.post_sha256
      &&entry.consumer_raw_sha256===graph.get(decision.id)?.sha256,
      'supplier repair requires unchanged consumer and current completed same-report reviews');
    const source=readFileSync(join(root,'items',`${decision.id}.md`),'utf8');
    const deps=source.match(/^---\r?\n[\s\S]*?^deps:[ \t]*\r?\n((?:[ \t]+[^\r\n]*\r?\n)*)/m)?.[1]??'';
    requireValue(supply&&graph.get(decision.id)?.deps.includes(supplier.id)
      &&deps.split(/\r?\n/).some(line=>line.trim()===`- ${supplier.id}`)
      &&['definition','algorithm'].includes(itemKind(root,supplier.id))
      &&supplier.before_guard_sha256===pack.before[supplier.id]&&supplier.before_guard_sha256!==current[supplier.id]
      &&supplier.post_guard_sha256===current[supplier.id]&&review.post_sha256===current[supplier.id]
      &&supplier.post_raw_sha256===supply.sha256
      &&/^[a-f0-9]{64}$/.test(pack.before_statements?.[supplier.id]??'')
      &&supplier.before_statement_sha256===pack.before_statements[supplier.id]
      &&supplier.post_statement_sha256===supply.statement_sha256
      &&supplier.before_statement_sha256!==supplier.post_statement_sha256,
      'supplier repair requires a changed direct declared definition interface, not metadata or an ancestor');
    requireValue(report.decisions.some(row=>row.id===supplier.id&&['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)
      &&evidenceText(row)&&digest(row)===supplier.decision_sha256),
      'supplier repair requires the supplier own confirmed native adjudication');
    const interfaceText=readFileSync(join(root,'items',`${supplier.id}.md`),'utf8')
      .match(/^## Definition[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/m)?.[1]??'';
    requireValue(typeof entry.reason==='string'&&entry.reason.trim().length>=80
      &&typeof entry.native_remedy_excerpt==='string'&&entry.native_remedy_excerpt.length>=40
      &&decision.reason.includes(entry.native_remedy_excerpt)&&consumer.reason.includes(entry.native_remedy_excerpt)
      &&typeof supplier.native_remedy_excerpt==='string'&&supplier.native_remedy_excerpt.length>=40
      &&review.reason.includes(supplier.native_remedy_excerpt)
      &&report.decisions.some(row=>digest(row)===supplier.decision_sha256&&row.reason.includes(supplier.native_remedy_excerpt))
      &&typeof supplier.current_interface_excerpt==='string'&&supplier.current_interface_excerpt.length>=20
      &&interfaceText.includes(supplier.current_interface_excerpt),
      'supplier repair lacks exact native remedy attribution and current defining clause');
    resolved.set(key(decision),digest(decision));
  }
  return {pack_sha256:digest(pack),resolved,evidence,path,[supplierRepairSeal]:true};
}

export function validateReports(pack,reports,now,{root=null,ownerSupplement=null,currentRepairs=null,operationalSupplement=null,supplierRepairs=null,publishedMaintenance=null}={}) {
  const errors=[],decisions=[],reviews=[],createdItems=[],creatorById=new Map();
  requireValue(!publishedMaintenance||isInitialPublishedMaintenance(publishedMaintenance,pack,now),
    'published maintenance must pass exact native guarded loading');
  requireValue(!ownerSupplement||(root&&ownerSupplement[ownerSupplementSeal]===true
    &&ownerSupplement.pack_sha256===digest(pack)),'owner supplement must pass native guarded loading');
  requireValue(!operationalSupplement||(root&&operationalSupplement[operationalSupplementSeal]===true
    &&operationalSupplement.pack_sha256===digest(pack)),'unvalidated operational supplement');
  requireValue(!supplierRepairs||(root&&supplierRepairs[supplierRepairSeal]===true
    &&supplierRepairs.pack_sha256===digest(pack)),'unvalidated supplier repair supplement');
  requireValue(!currentRepairs||(root&&currentRepairs[ownerSupplementSeal]===true
    &&currentRepairs.pack_sha256===digest(pack)),'unvalidated current-root repair supplement');
  const ownerReviews=new Map(),ownerDecisions=new Map();
  for(const row of [...(ownerSupplement?.reviews??[]),...(currentRepairs?.reviews??[])]){
    requireValue(!ownerReviews.has(row.id)||digest(ownerReviews.get(row.id))===digest(row),'conflicting coexisting current root reviews');ownerReviews.set(row.id,row);
  }
  for(const row of [...(ownerSupplement?.decisions??[]),...(currentRepairs?.decisions??[])]){
    requireValue(!ownerDecisions.has(key(row))||digest(ownerDecisions.get(key(row)))===digest(row),'conflicting coexisting original-classification decisions');ownerDecisions.set(key(row),row);
  }
  for(const unit of pack.units) {
    const report=reports.find(r=>String(r.unit)===unit);
    if(!report||report.run!==pack.run||report.phase!==pack.phase||report.round!==pack.round||report.input_sha256!==digest(pack)) { errors.push(`missing or mismatched report ${unit}`);continue; }
    if(report.completion==='mechanical-zero-work'){
      try{assertEmptyAdjudicationReport(pack,unit,report);}catch(error){errors.push(error.message);continue;}
    }
    if(!Array.isArray(report.reviews)||!Array.isArray(report.decisions)||!Array.isArray(report.created_items)||!Array.isArray(report.downstream)){errors.push(`malformed report arrays ${unit}`);continue;}
    const assigned=new Set(pack.assignments[unit].map(r=>typeof r==='string'?r:r.id)),creations=new Set();
    for(const row of report.created_items){
      if(pack.phase==='gate'||pack.basePhase==='gate')errors.push(`Step 5.9 cannot author out-of-frontier item ${row?.id}`);
      if(!row||!creationId.test(row.id??'')||creations.has(row.id)||creatorById.has(row.id)||pack.before[row.id]
        ||Object.hasOwn(pack.before_aliases??{},row.id)||!evidenceText(row)||!Array.isArray(row.consumers)||!row.consumers.length
        ||row.consumers.some(id=>typeof id!=='string')||!pack.home_pages?.[row.batch]?.includes(row.home_page)
        ||(pack.rejected&&String(row.batch)!==unit))errors.push(`invalid created item ${unit}/${row?.id}`);
      creations.add(row.id);creatorById.set(row.id,{unit,row,assigned,report});createdItems.push(row);
    }
    const ids=new Set([...assigned,...creations]),seen=new Set();
    for(const row of (report.reviews??[]).filter(row=>!ownerReviews.has(row.id))) {
      const dispositions=creations.has(row.id)?['authored']:['repaired','unaffected'];
      if(!ids.has(row.id)||seen.has(row.id)||!evidenceText(row)||!dispositions.includes(row.disposition)||row.post_sha256!==now[row.id]||!/^[a-f0-9]{64}$/.test(row.review_context_sha256??'')) errors.push(`invalid review ${unit}/${row.id}`);
      seen.add(row.id);
      if(!operationalSupplement?.ids.has(row.id))reviews.push(row);
    }
    for(const id of ids)if(!seen.has(id)&&!ownerReviews.has(id))errors.push(`missing review ${unit}/${id}`);
    const expected=new Map((pack.rejected?pack.assignments[unit]:[]).map(row=>[key(row),row])),decided=new Set();
    for(const nativeRow of report.decisions??[]) {
      const row=ownerDecisions.get(key(nativeRow))??nativeRow;
      if(!expected.has(key(row))||decided.has(key(row))||!evidenceText(row)||!['confirmed_fatal','confirmed_nonfatal','false_positive'].includes(row.outcome)) errors.push(`invalid adjudication ${unit}/${row.id}`);
      if(pack.adjudicationSchemaVersion===1&&row.outcome==='confirmed_fatal'&&!FATAL_TYPES.includes(row.defect_type))errors.push(`missing or invalid fatal defect_type ${unit}/${row.id}`);
      decided.add(key(row));decisions.push(row);
    }
    for(const tuple of expected.keys())if(!decided.has(tuple))errors.push(`missing adjudication ${tuple}`);
    if(report.downstream.some(id=>typeof id!=='string'||!now[id]))errors.push(`invalid downstream inventory ${unit}`);
    const gateExpected=new Set((pack.gateAssignments?.[unit]??[]).map(row=>row.index)),gateSeen=new Set();
    for(const row of report.gate_resolutions??[]) {
      if(!gateExpected.has(row.index)||gateSeen.has(row.index)||!evidenceText(row))errors.push(`invalid gate resolution ${unit}/${row.index}`);
      gateSeen.add(row.index);
    }
    for(const index of gateExpected)if(!gateSeen.has(index))errors.push(`missing gate resolution ${unit}/${index}`);
  }
  if(reports.length!==pack.units.length)errors.push('unexpected or duplicate reports');
  reviews.push(...ownerReviews.values());
  const scoped=subjectScope(pack,[...creatorById.keys()]);
  const changed=diff(pack.before,now).filter(id=>(!scoped||scoped.has(id))&&!publishedMaintenance?.ids.has(id));
  for(const id of changed) {
    const created=creatorById.get(id),review=reviews.find(r=>r.id===id&&r.disposition===(created?'authored':'repaired'));
    if(!now[id]||!review||(!created&&!pack.before[id]))errors.push(`unlicensed or unreviewed change ${id}`);
    if(pack.rejected&&!created&&!ownerReviews.has(id)&&!decisions.some(r=>r.id===id&&['confirmed_fatal','confirmed_nonfatal'].includes(r.outcome)))errors.push(`change without confirmed adjudication ${id}`);
  }
  for(const id of Object.keys(pack.before))if((!scoped||scoped.has(id))&&!now[id])errors.push(`unlicensed deletion ${id}`);
  for(const id of creatorById.keys())if(!changed.includes(id))errors.push(`claimed creation without new item ${id}`);
  for(const row of decisions)if(['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)&&!changed.includes(row.id)&&supplierRepairs?.resolved.get(key(row))!==digest(row))errors.push(`confirmed defect not repaired ${row.id}`);
  for(const row of reviews)if(['repaired','authored'].includes(row.disposition)&&!changed.includes(row.id))errors.push(`claimed repair or authorship without change ${row.id}`);
  if(createdItems.length&&root){
    try{
      const identity=libraryIdentity(root,pack.run),itemById=new Map(identity.items.map(value=>[value.id,value]));
      for(const row of createdItems)creationRegistration(root,pack.run,row);
      for(const [id,owner] of creatorById){
        const {row,assigned,report}=owner,local=new Set(report.created_items.map(value=>value.id));
        for(const alias of itemById.get(id)?.aliases??[]){
          if(identity.ids.has(alias)||identity.aliases.get(alias)!==id)errors.push(`created item alias is not globally unique ${id}/${alias}`);
        }
        for(const consumer of row.consumers){
          if(!assigned.has(consumer)&&!local.has(consumer))errors.push(`created prerequisite consumer is outside creator scope ${id}/${consumer}`);
          if(!(itemById.get(consumer)?.deps??[]).includes(id))errors.push(`created prerequisite is not a declared direct dependency ${id}/${consumer}`);
        }
        const queue=[id],seen=new Set([id]);let anchored=false;
        while(queue.length){
          const next=queue.shift(),created=report.created_items.find(value=>value.id===next);
          for(const consumer of created?.consumers??[]){
            if(assigned.has(consumer)){
              const review=report.reviews.find(value=>value.id===consumer);
              const decision=report.decisions.find(value=>value.id===consumer&&['confirmed_fatal','confirmed_nonfatal'].includes(value.outcome));
              if(review?.disposition==='repaired'&&(!pack.rejected||decision))anchored=true;
            }else if(local.has(consumer)&&!seen.has(consumer)){seen.add(consumer);queue.push(consumer);}
          }
        }
        if(!anchored)errors.push(`created prerequisite is not load-bearing for an assigned completed repair ${id}`);
      }
    }catch(error){errors.push(error.message);}
  }else if(createdItems.length)errors.push('creation validation requires repository root');
  return {errors,decisions,reviews,changed,created_items:createdItems};
}


// Recover cached derivatives created before an operational supplement existed.
// Originals remain immutable; only the designed live certificate pointer moves.
function effectiveWorkflowArtifact(root,run,path) {
  const name=basename(path),match=/^(?:gate-(\d+)-(?:collected|closed)|certification-gate-(\d+))\.json$/.exec(name);
  if(!match)return path;
  const round=Number(match[1]??match[2]),dir=workflowDir(root,run);
  const marker=join(dir,`gate-${round}-operational-derived-projection.json`);
  if(!existsSync(marker))return path;
  const projection=read(marker);
  requireValue(projection.version===1&&projection.kind==='native-operational-derived-artifact-projection'
    &&projection.run===run&&projection.phase==='gate'&&projection.round===round
    &&projection.recorded_by==='step5-workflow-native'&&projection.mathematical_review===false,
    'invalid operational derived projection');
  verifyEvidence(projection.evidence,{root,run});
  const entry=projection.variants?.find(row=>row.original_path===path);
  requireValue(entry&&entry.variant_path===path.replace(/\.json$/,'-operational.json')
    &&digest(readFileSync(path,'utf8'))===entry.original_sha256
    &&digest(readFileSync(entry.variant_path,'utf8'))===entry.variant_sha256,
    'operational projection does not bind the exact original and immutable variant');
  return entry.variant_path;
}
export function recoverOperationalDerived(root,run,round,authorizationPath) {
  const dir=workflowDir(root,run),phase='gate',auth=read(authorizationPath);
  const state=read(join(root,'.autopilot',run,'state.json'));
  const request=read(join(root,'.autopilot',run,'owner-gate-request.json'));
  requireValue(state.run===run&&state.stage==='5.10-gate'&&state.paused===true
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||Boolean(row.endedAt)),
    'derived recovery requires the exact paused native terminal battery and drained writers');
  const pack=readPack(root,run,phase,round),current=hashes(root,run),items=readLibraryItems(root,{run});
  const reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const operational=loadOperationalSupplement(root,pack,reports,current);
  requireValue(operational&&auth.version===1&&auth.run===run&&auth.phase===phase&&auth.round===round
    &&auth.authorized_by==='owner'&&auth.owner_gate_request_id===request.id&&request.run===run
    &&request.stages?.includes('5.10-gate')&&auth.pack_sha256===digest(pack)
    &&auth.mathematical_review===false&&auth.native_coverage_adopted===false
    &&typeof auth.reason==='string'&&auth.reason.trim().length>=80,'invalid exact native derived-recovery authorization');
  const normalCollected=join(dir,`gate-${round}-collected.json`),normalClosed=join(dir,`gate-${round}-closed.json`);
  const normalCertificate=join(dir,`certification-gate-${round}.json`);
  const originals=[normalCollected,normalClosed,normalCertificate];
  requireValue(originals.every(path=>auth.originals?.[path]===digest(readFileSync(path,'utf8'))),
    'owner authorization does not bind the exact cached derivatives');
  const oldCollected=read(normalCollected),oldClosed=read(normalClosed),oldCertificate=read(normalCertificate);
  for(const row of [oldCollected,oldClosed,oldCertificate])requireValue(row.run===run&&row.phase===phase&&row.round===round,
    'cached derivative identity changed');
  const {sha256:oldSha,...oldPayload}=oldCertificate;requireValue(oldSha===digest(oldPayload),'cached certificate payload changed');
  requireValue(!oldCollected.operational_resolution&&!oldClosed.operational_carries,
    'native recovery is only for derivatives predating the supplement');
  const validated=validateReports(pack,reports,current,{root,operationalSupplement:operational});
  requireValue(validated.errors.length===0,validated.errors.join('\n'));
  const observed=reports.flatMap(report=>report.reviews).filter(row=>operational.ids.has(row.id));
  const genuine=validated.reviews;
  requireValue(genuine.length===3&&oldCollected.reviews.length===genuine.length+observed.length
    &&oldClosed.reviews.length===oldCollected.reviews.length
    &&genuine.every(row=>oldCollected.reviews.some(old=>digest(old)===digest(row)))
    &&oldClosed.reviews.every(row=>oldCollected.reviews.some(old=>digest(old)===digest(row))),
    'cached collection does not preserve the exact genuine/native operational observations');
  const changed=diff(pack.before,current).filter(id=>gateFrontier(root,run).has(id));
  requireValue(JSON.stringify(changed)===JSON.stringify(validated.changed)
    &&JSON.stringify(changed)===JSON.stringify(oldCollected.changed)
    &&changed.every(id=>genuine.some(row=>row.id===id&&row.disposition==='repaired')),
    'real source edits lost native licensing during recovery');
  const contextsOfReviews=reviewContexts(items);
  for(const review of genuine)requireValue(contextsOfReviews.matches(review,current),`stale genuine native review: ${review.id}`);
  verifyEvidence(oldCollected.evidence,{root,run});verifyEvidence(oldClosed.evidence,{root,run});
  const priorPaths=Object.keys(operational.bindings).filter(path=>/\/certification-impact-repeat-[1-9]\d*\.json$/.test(path));
  requireValue(priorPaths.length===1,'operational supplement must bind one exact good prior certificate');
  const prior=read(priorPaths[0]),{sha256:priorSha,...priorPayload}=prior;
  requireValue(priorSha===digest(priorPayload)&&prior.run===run&&prior.phase==='impact-repeat',
    'invalid frozen prior certificate');verifyEvidence(prior.evidence,{root,run});
  const creationState=join(dir,`gate-${round}-operational-recovery-creation-state.json`);
  const creationRequest=join(dir,`gate-${round}-operational-recovery-creation-request.json`);
  frozen(creationState,state);frozen(creationRequest,request);
  const evidence={...prior.evidence,...oldCollected.evidence,...oldClosed.evidence,...operational.evidence};
  for(const path of [...originals,creationState,creationRequest,authorizationPath])evidence[path]=digest(readFileSync(path,'utf8'));
  const resolution={path:operational.path,subjects:[...operational.ids],reason:operational.reason,
    mathematical_review:false,native_coverage_adopted:false};
  const collectedPath=normalCollected.replace(/\.json$/,'-operational.json');
  const collected={...oldCollected,reviews:genuine,evidence:{...evidence},operational_resolution:resolution,
    operational_observations:observed,derived_projection:{kind:'operational-only-cached-derivative-correction',original:normalCollected}};
  frozen(collectedPath,collected);evidence[collectedPath]=digest(readFileSync(collectedPath,'utf8'));
  const closedPath=normalClosed.replace(/\.json$/,'-operational.json');
  const closed={...oldClosed,reviews:genuine,evidence:{...evidence},operational_carries:[...operational.ids],
    operational_resolutions:[resolution],derived_projection:{kind:'operational-only-cached-derivative-correction',original:normalClosed}};
  frozen(closedPath,closed);evidence[closedPath]=digest(readFileSync(closedPath,'utf8'));
  // Seed from the authenticated 118-item certificate, never the erroneous
  // 486-item cached certificate; only genuine native reviews can add/update rows.
  const byId=new Map(prior.items.map(row=>[row.id,row])),reviewed=new Map(genuine.map(row=>[row.id,row]));
  const ids=[...new Set([...byId.keys(),...reviewed.keys()])].sort(),contexts=currentHashesMany(root,ids);
  const certificateItems=ids.map(id=>{
    const now=contexts.get(id),review=reviewed.get(id),before=byId.get(id);
    requireValue(now&&current[id],`missing current certificate carrier: ${id}`);
    if(!review)requireValue(before.guard_sha256===current[id]&&before.item_sha256===now.item_sha256
      &&before.context_sha256===now.context_sha256,`prior genuine certification is no longer current: ${id}`);
    return review?{id,...now,guard_sha256:current[id],reason:review.reason}:before;
  });
  const baseline=read(join(dir,'baseline.json')),frontier=gateFrontier(root,run);
  const totalChanged=diff(baseline,current).filter(id=>frontier.has(id));
  requireValue(totalChanged.every(id=>ids.includes(id)),'recovery would lose actual changed-item certification');
  const payload={version:2,run,phase,round,at:new Date().toISOString(),items:certificateItems,
    creations:prior.creations,evidence:{...evidence},changed:totalChanged,latest_adjudication_round:prior.latest_adjudication_round,
    operational_recovery:{supplement:operational.path,original_certificate:normalCertificate,
      prior_certificate:priorPaths[0],reason:auth.reason,mathematical_review:false,native_coverage_adopted:false}};
  const certificate={...payload,sha256:digest(payload)},certificatePath=normalCertificate.replace(/\.json$/,'-operational.json');
  frozen(certificatePath,certificate);evidence[certificatePath]=digest(readFileSync(certificatePath,'utf8'));
  const variants=[...originals].map(path=>({original_path:path,original_sha256:digest(readFileSync(path,'utf8')),
    variant_path:path.replace(/\.json$/,'-operational.json'),variant_sha256:digest(readFileSync(path.replace(/\.json$/,'-operational.json'),'utf8'))}));
  const projection={version:1,kind:'native-operational-derived-artifact-projection',run,phase,round,
    recorded_by:'step5-workflow-native',recorded_at:new Date().toISOString(),mathematical_review:false,
    native_coverage_adopted:false,reason:auth.reason,variants,evidence};
  frozen(join(dir,`gate-${round}-operational-derived-projection.json`),projection);
  // This pointer is explicitly mutable by the ordinary native certification
  // protocol. All historical normal and variant receipts remain at their paths.
  atomic(join(dir,'certification.json'),certificate);
  return {items:certificateItems.length,genuine_reviews:genuine.length,operational_observations:observed.length,
    changed:totalChanged.length,mathematical_review:false};
}

export function collect(root,run,phase,round,{deferImpactClosure=false}={}) {
  // The controller joins all owner passes before this gate. Their individual
  // collections are historical snapshots; later assigned repairs may replace
  // them. Validate the completed aggregate, never rewrite the earlier receipts.
  if(!deferImpactClosure&&['impact-initial','impact-repeat','gate'].includes(phase)
    &&existsSync(impactProgressPath(root,run,phase,round))
    &&read(impactProgressPath(root,run,phase,round)).complete)
    return verifyCompletedImpact(root,run,phase,round);
  const collectedPath=effectiveWorkflowArtifact(root,run,join(workflowDir(root,run),`${phase}-${round}-collected.json`));
  if(existsSync(collectedPath)){
    const prior=read(collectedPath);verifyEvidence(prior.evidence,{root,run});
    if(!deferImpactClosure){
      const scoped=prerequisiteScope(readLibraryItems(root,{run}),[...gateFrontier(root,run),...(prior.created_items??[]).map(row=>row.id)]);
      for(const id of diff(prior.post,hashes(root,run)).filter(id=>scoped.has(id)))throw Error(`writer changed relevant content after collection: ${id}`);
    }
    syncMaintenance(root,run,prior.statement_events??[]);return prior;
  }
  const pack=readPack(root,run,phase,round);
  const reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const current=hashes(root,run),reported={...current},items=readLibraryItems(root,{run});
  const metadataHistory=phase==='initial'&&round===1?loadInitialMetadataHistory(root,run,{current:true}):phase==='repeat'?loadRepeatMetadataHistory(root,run,round,{current:true}):null;
  const publishedMaintenance=phase==='initial'&&round===1?loadInitialPublishedMaintenance(root,run,{current:true}):null;
  // Validate original reviews against exact historical source bytes only.
  // The collection's post snapshot below always describes actual current bytes.
  if(metadataHistory)Object.assign(reported,metadataHistory.historicalGuards);
  const withdrawal=phase==='impact-initial'&&round===1?loadOwnerReviewWithdrawal(root,run,{current:true}):null;
  const ownerSupplement=loadOwnerSupplement(root,pack,reports,current,items);
  const currentRepairPath=join(workflowDir(root,run),`${phase}-${round}-owner-current-repairs.json`);
  const currentRepairs=existsSync(currentRepairPath)?{
    ...loadOwnerCurrentRepairs(root,pack,reports,current,items,read(currentRepairPath),{matchesReview:review=>reviewContexts(items).matches(review,current)}),
    [ownerSupplementSeal]:true,
  }:null;
  const operationalSupplement=loadOperationalSupplement(root,pack,reports,current);
  const supplierRepairs=loadSupplierRepairs(root,pack,reports,current,items);
  if(deferImpactClosure) {
    requireValue(!pack.rejected,'only owner waves can defer impact closure');
    // Archive the carriers workers actually reviewed. Later edits are queued
    // for another owner pass instead of invalidating already completed work.
    const assigned=new Set([...Object.values(pack.assignments).flat(),...reports.flatMap(report=>(report.created_items??[]).map(row=>row.id))]);
    for(const row of reports.flatMap(report=>report.reviews??[]))if(assigned.has(row.id)&&/^[a-f0-9]{64}$/.test(row.post_sha256??''))reported[row.id]=row.post_sha256;
  }
  const result=validateReports(pack,reports,reported,{root,ownerSupplement,currentRepairs,operationalSupplement,supplierRepairs,publishedMaintenance});
  if(result.errors.length)throw Error(result.errors.join('\n'));
  const evidence={...(pack.input_evidence??{}),[packPath(root,run,phase,round)]:digest(readFileSync(packPath(root,run,phase,round),'utf8'))};
  Object.assign(evidence,ownerSupplement?.evidence??{},currentRepairs?.evidence??{},operationalSupplement?.evidence??{},supplierRepairs?.evidence??{},metadataHistory?.evidence??{},publishedMaintenance?.evidence??{});
  for(const [p,h]of Object.entries(withdrawal?.evidence??{})){requireValue(!evidence[p]||evidence[p]===h,'withdrawal evidence collision');evidence[p]=h;}
  verifyEvidence(evidence);
  const creationAuthors=new Map();
  for(const unit of pack.units) {
    const p=workerReport(root,run,phase,round,unit); evidence[p]=digest(readFileSync(p,'utf8'));
    if(pack.gateRoutingVersion===1){
      const diagnosticPath=p.replace(/\.json$/,'.gate-diagnostics.json');
      requireValue(existsSync(diagnosticPath)&&JSON.stringify(read(diagnosticPath))===JSON.stringify(pack.gateAssignments[unit]),`gate diagnostic input changed: ${unit}`);
      evidence[diagnosticPath]=digest(readFileSync(diagnosticPath,'utf8'));
    }
    // Owner-authorized handoff corrections retain the original report and
    // any separately attributed review supplements as bound audit evidence.
    const supporting=reports.find(value=>String(value.unit)===unit)?.supporting_evidence??{};
    requireValue(supporting&&typeof supporting==='object'&&!Array.isArray(supporting),'invalid supporting evidence');
    for(const [path,hash] of Object.entries(supporting)){
      requireValue(resolve(path).startsWith(resolve(root,'research')+'/')&&/^[a-f0-9]{64}$/.test(hash),`invalid supporting evidence path or hash: ${path}`);
    }
    if(!withdrawnOwnerReport(withdrawal,pack,unit))Object.assign(evidence,frozenSupportingEvidence(root,run,supporting));
    const report=reports.find(value=>String(value.unit)===unit);
    if(report.completion==='mechanical-zero-work'){
      assertEmptyAdjudicationInput(root,run,phase,round,unit,report.input_sha256);
      assertEmptyAdjudicationReport(pack,unit,report);
      const label=emptyAdjudicationLabel(phase,round,unit),dispatch=join(root,'research',`${run}-dispatch`,`tool-${label}.result.json`),receipt=read(dispatch);
      const keys=['role','label','run','covers','ok','written_by','ended_at'];
      requireValue(receipt.ok===true&&receipt.run===run&&receipt.role==='tool'&&receipt.label===label
        &&receipt.written_by==='autopilot'&&JSON.stringify(receipt.covers)===JSON.stringify([unit])
        &&Object.keys(receipt).every(key=>keys.includes(key))&&typeof receipt.ended_at==='string'&&!Number.isNaN(Date.parse(receipt.ended_at)),
        `invalid mechanical zero-work dispatch: ${dispatch}`);
      evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));continue;
    }
    const role=phase==='initial'||phase==='repeat'?'alpha-adjudicate':'alpha-repair';
    const dispatch=join(root,'research',`${run}-dispatch`,`${role}-${workerLabel(phase,round,unit)}.result.json`);
    const receipt=read(dispatch);
    const sol61Run=sol61Step5Run(root,run);
    const expected=sol61Run
      ? [[MODELS.sol61.id,sol61Effort(root,run)]]
      : role==='alpha-adjudicate'
        ? pack.judge_model===MODELS.luna.id?[[MODELS.astra.id,'medium']]:[[MODELS.astra.id,'medium'],[MODELS.sol.id,'xhigh']]
        : [[MODELS.sol.id,'xhigh']];
    if(receipt.ok!==true||receipt.run!==run||receipt.role!==role||receipt.label!==workerLabel(phase,round,unit)
      ||!(receipt.model===MODELS.sol61.id&&receipt.provider_effort===sol61Effort(root,receipt.run))
        &&!expected.some(([model,effort])=>receipt.model===model&&receipt.provider_effort===effort))
      throw Error(`worker did not succeed with an authorized identity: ${dispatch}`);
    evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    for(const row of reports.find(value=>String(value.unit)===unit)?.created_items??[])creationAuthors.set(row.id,basename(dispatch));
  }
  // Creation consumers are an explicit native inventory too. validateReports
  // already checked their actual direct dependency and completed repair anchor;
  // joining them records routing, never an additional mathematical review.
  const downstream=[...new Set([...reports.flatMap(row=>row.downstream),...result.created_items.flatMap(row=>row.consumers)])];
  const receipt={...result,created_items:result.created_items.map(row=>({...row,author_result:creationAuthors.get(row.id)})),version:2,run,phase,round,evidence,post:hashes(root,run),downstream,ledger_updates:reports.flatMap(row=>row.ledger_updates??[])};
  if(withdrawal){
    receipt.review_withdrawal={path:withdrawal.path,unit:'1',targets:[...withdrawal.row.targets],review_credit_granted:false,repair_acceptance_granted:false};
    receipt.withdrawn_native_reviews=withdrawal.row.original_reviews;
    receipt.withdrawn_supporting_evidence=withdrawal.row.original_supporting_evidence;
    receipt.reviews=receipt.reviews.filter(row=>!withdrawal.ids.has(row.id));
    receipt.withdrawn_physical_changes=receipt.changed.filter(id=>withdrawal.ids.has(id));
  }
  if(publishedMaintenance)receipt.published_maintenance={path:publishedMaintenance.path,ids:[...publishedMaintenance.ids],historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false};
  if(metadataHistory){
    const historical=new Set(metadataHistory.sourceIds);
    receipt.metadata_history={path:metadataHistory.path,historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false};
    receipt.metadata_history_current_review_targets=[...historical];
    receipt.historical_metadata_reviews=receipt.reviews.filter(row=>historical.has(row.id));
    receipt.reviews=receipt.reviews.filter(row=>!historical.has(row.id));
    // Preserve original rows and hashes separately; none is certified current.
    requireValue(JSON.stringify(receipt.historical_metadata_reviews)===JSON.stringify(metadataHistory.historicalReviews),'historical metadata review inventory mismatch');
  }
  if(operationalSupplement){
    receipt.operational_resolution={path:operationalSupplement.path,subjects:[...operationalSupplement.ids],
      reason:operationalSupplement.reason,mathematical_review:false,native_coverage_adopted:false};
    receipt.operational_observations=reports.flatMap(report=>report.reviews).filter(row=>operationalSupplement.ids.has(row.id));
  }
  if(ownerSupplement){
    receipt.owner_supplement=ownerSupplement.path;
    receipt.native_reviews=reports.flatMap(report=>report.reviews).filter(row=>ownerSupplement.ids.has(row.id));
    receipt.native_decisions=reports.flatMap(report=>report.decisions).filter(row=>key(row)===key(ownerSupplement.rejection));
    receipt.native_downstream=[...receipt.downstream];
    receipt.native_ledger_updates=receipt.ledger_updates;
    if(ownerSupplement.version===2)receipt.native_scope_blocker={
      unit:ownerSupplement.unit,repair_notes:reports.find(row=>String(row.unit)===String(ownerSupplement.unit)).repair_notes,
      open_finding_sha256:ownerSupplement.open_finding_sha256,
      minimal_supplier_repair_sha256:ownerSupplement.minimal_supplier_repair_sha256,
      native_execution_coverage_adopted:false};
    if(ownerSupplement.version===3)receipt.native_extra_supplier_finding={
      unit:ownerSupplement.unit,repair_notes:reports.find(row=>String(row.unit)===String(ownerSupplement.unit)).repair_notes,
      finding:reports.find(row=>String(row.unit)===String(ownerSupplement.unit)).ledger_updates[ownerSupplement.open_finding_index],
      open_finding_sha256:ownerSupplement.open_finding_sha256,native_execution_coverage_adopted:false};
    receipt.ledger_updates_origin='native-worker-historical-proposals';
    receipt.owner_resolution={reviewed_by:'root',status:'owner-repair-reviewed',id:ownerSupplement.rejection.id,
      rejection:ownerSupplement.rejection,decision:ownerSupplement.decisions[0],completed_at:ownerSupplement.completed_at,
      supplement:ownerSupplement.path,supplement_sha256:evidence[ownerSupplement.path],
      reviewed_ids:[...ownerSupplement.ids],supporting_evidence:ownerSupplement.supporting_evidence};
  }
  if(currentRepairs){
    receipt.owner_current_repairs=currentRepairs.path;
    receipt.native_current_repair_reviews=reports.flatMap(report=>report.reviews).filter(review=>currentRepairs.ids.has(review.id));
    receipt.native_current_repair_decisions=reports.flatMap(report=>report.decisions).filter(decision=>currentRepairs.rejections.some(rejected=>key(decision)===key(rejected)));
    receipt.native_current_repair_origins=currentRepairs.origin_rows;
    receipt.root_current_reviews=currentRepairs.reviews;
    receipt.root_current_repair_resolution={reviewed_by:'root',ids:currentRepairs.entries.map(entry=>entry.id),
      repairer_identity:currentRepairs.repairer_identity,repair_evidence:currentRepairs.repair_evidence,completed_at:currentRepairs.completed_at,
      root_interface_changes:currentRepairs.root_interface_changes,examined_ids:[...currentRepairs.ids],
      native_execution_coverage_adopted:false,native_finding_synthesized:false};
  }
  receipt.restated=restatedIds(pack,result.changed,statementHashes(root,run));
  const afterStatements=statementHashes(root,run);
  receipt.statement_events=receipt.restated.filter(id=>pack.before_statements?.[id]||!pack.before[id]).map(id=>({id,before_statement_sha256:pack.before_statements?.[id]??statementHash(''),after_statement_sha256:afterStatements[id]}));
  if(pack.before_statements&&!receipt.restated.length&&!pack.seeds?.length)receipt.downstream=[];
  const frontier=gateFrontier(root,run);
  // Outside edits are context, not Step-5 repair subjects. Relevant supplier
  // interface changes still route their actual frontier consumers for review.
  const closure=prerequisiteScope(items,frontier);
  receipt.external_supplier_changes=diff(pack.before,current).filter(id=>!frontier.has(id)&&closure.has(id));
  receipt.external_supplier_restatements=restatedIds(pack,receipt.external_supplier_changes,afterStatements).filter(id=>current[id]);
  receipt.external_supplier_impacts=discoverDownstream({items,repairedIds:receipt.external_supplier_restatements}).filter(row=>frontier.has(row.id));
  const direct=discoverDownstream({items,repairedIds:receipt.restated});
  const required=direct.filter(row=>frontier.has(row.id));
  if(ownerSupplement){
    // The root has examined these exact current consumers, including a
    // rejected blocker that consumes its newly corrected Definition. Preserve
    // the native inventory separately rather than attributing later reads to it.
    receipt.owner_downstream=required.filter(row=>ownerSupplement.ids.has(row.id)).map(row=>row.id);
    receipt.downstream=[...new Set([...receipt.downstream,...receipt.owner_downstream])];
    receipt.owner_resolution.examined_downstream=receipt.owner_downstream;
    if(ownerSupplement.version===3)receipt.owner_resolution.extra_supplier=ownerSupplement.required_supplier;
  }
  if(currentRepairs){
    const primary=new Set(currentRepairs.entries.map(entry=>entry.id));
    receipt.root_current_downstream=[...currentRepairs.ids].filter(id=>!primary.has(id));
    receipt.downstream=[...new Set([...receipt.downstream,...receipt.root_current_downstream])];
  }
  const discoveries=receipt.downstream.filter(id=>!frontier.has(id)&&!direct.some(row=>row.id===id)&&!receipt.restated.includes(id));
  const uses=Object.assign({},...reports.map(row=>row.downstream_uses??{}));
  if(receipt.statement_events.length)for(const id of discoveries)requireValue(typeof uses[id]==='string'&&uses[id].trim().length>=40,`missing exact downstream use for outside consumer: ${id}`);
  if(discoveries.length)for(const event of receipt.statement_events)Object.assign(event,{consumer_ids:discoveries,discovery_evidence:Object.fromEntries(discoveries.map(id=>[id,uses[id]]))});
  receipt.inventory_missing=required.filter(row=>!receipt.downstream.includes(row.id)).map(row=>row.id);
  if(!deferImpactClosure)for(const id of receipt.inventory_missing)requireValue(false,`missing downstream inventory: ${id}`);
  receipt.downstream=[...new Set([...receipt.downstream,...receipt.external_supplier_impacts.map(row=>row.id)])];
  // Merge compatibility evidence once, bound to the actual frozen rejection.
  // Never invent a judge verdict or re-label adjudication as an independent pass.
  const ledger=join(root,'research',`${run}-judge-adjudications.jsonl`), existing=lines(ledger);
  for(const row of result.decisions) {
    const record={...row,run,step5_round:round,step5_phase:phase,item_sha256:pack.before[row.id],at:new Date().toISOString()};
    if(!existing.some(old=>key(old)===key(row)&&old.step5_round===round&&old.step5_phase===phase&&old.outcome===row.outcome))appendFileSync(ledger,JSON.stringify(record)+'\n');
  }
  frozen(collectedPath,receipt);
  // Queue only controller-observed interface transitions, never guessed legacy
  // before states. Queueing is not repair authority or completed maintenance.
  syncMaintenance(root,run,receipt.statement_events);
  return receipt;
}

export const impactProgressPath=(root,run,phase,round)=>join(workflowDir(root,run),`${phase}-${round}-progress.json`);
export function impactPasses(root,run,phase,round) {
  const path=impactProgressPath(root,run,phase,round);
  return existsSync(path)?read(path).passes:[phase];
}

export function impactWork(root,run,phase,round) {
  const path=impactProgressPath(root,run,phase,round);
  const progress=existsSync(path)?read(path):{passes:[phase]};
  return progress.work_order??progress.passes.map(pass=>({kind:'frontier',phase:pass}));
}
export const maintenanceLabel=(phase,round,id,lane)=>`consumer-maintenance-${phase}-r${round}-${id}-lane-${lane}`;
export const maintenancePack=(root,run,id)=>read(join(root,'research',`${run}-consumer-maintenance`,`${id}.json`));

// Attribute only the exact archived native creation interface, never a later
// Statement change. The owner preparation was already frozen by withdrawal;
// its exact source archives supply history, not current review coverage.
function historicalCreatedEvent(root,run,pack,receipt,unit,review,event,withdrawal,evidence) {
  if(!withdrawal)return false;
  const inputPath=resolve(root,withdrawal.row.preparation_inputs_file);
  requireValue(receipt.evidence[inputPath]===withdrawal.evidence[inputPath],'created event lacks bound owner preparation');
  const inputs=read(inputPath),guards=new Map(inputs.guards.map(row=>[row.path,row.raw_sha256]));
  const pin=(path,expected)=>{
    const p=resolve(root,path);
    requireValue(p.startsWith(resolve(root,'research')+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/'),'invalid created event archive');
    const bytes=readFileSync(p,'utf8'),sha=digest(bytes);
    requireValue(sha===expected&&(!evidence[p]||evidence[p]===sha),'created event archive hash or evidence collision');evidence[p]=sha;return bytes;
  };
  const authorization=JSON.parse(pin(inputs.authorization,guards.get(inputs.authorization)));
  const rows=(authorization.native_creations??[]).filter(row=>row.id===event.id),item=inputs.items.find(row=>row.id===event.id);
  requireValue(rows.length===1&&item&&item.status==='draft'&&Number.isSafeInteger(item.level)&&item.level>=0,'created event lacks exact numeric source preparation');
  const row=rows[0],paths={pack:packPath(root,run,pack.phase,pack.round),report:workerReport(root,run,pack.phase,pack.round,unit),dispatch_result:join(root,'research',`${run}-dispatch`,`alpha-repair-${workerLabel(pack.phase,pack.round,unit)}.result.json`)};
  for(const [key,path]of Object.entries(paths))requireValue(resolve(root,row[key]?.path??'')===path&&row[key]?.sha256===receipt.evidence[path],'created event provenance differs from collected native authorship');
  const prior=row.numeric_metadata_before;
  requireValue(prior&&basename(prior.path)==='before.md'&&prior.sha256===guards.get(prior.path),'created event lacks bound original full source');
  const before=pin(prior.path,prior.sha256),after=pin(join(dirname(prior.path),'proposed.md'),item.raw_sha256);
  const field=/^dependency_level: ([0-9]+)[ \t]*$/gm,matches=[...before.matchAll(field)];
  requireValue(matches.length===1&&Number(matches[0][1])!==item.level
    &&before.replace(field,`dependency_level: ${item.level}`)===after
    &&itemHashGuard(before)===review.post_sha256&&itemHashGuard(after)===receipt.post[event.id]
    &&item.guard_sha256===receipt.post[event.id]&&event.before_statement_sha256===statementHash('')
    &&statementHash(before)===event.after_statement_sha256&&statementHash(after)===event.after_statement_sha256,
    'created event is not exact unchanged-interface numeric-only history');
  return true;
}

// Keep the authentic reviewer identity separate from an item's several review
// obligations. A native review belongs to its report lane and persistent session,
// never to the last writer or an arbitrarily selected supplier owner.
function readerReviewOwnership(root,run,packs,receipts,items,current) {
  const obligations=new Map(),originalOwners={},events=[],records=[],contexts=reviewContexts(items),evidence={};
  const withdrawal=packs.some(p=>p.phase==='impact-initial'&&p.round===1)?loadOwnerReviewWithdrawal(root,run):null;
  const createdIds=collectedCreationIds(root,run,receipts);
  const frontier=new Set([...packs.flatMap(pack=>pack.frontier_ids??[]),...createdIds]);
  const add=(id,unit)=>{
    if(!frontier.has(id))return false;
    requireValue(['1','2','3'].includes(unit),`invalid reader reviewer lane: ${id}/${unit}`);
    if(!obligations.has(id))obligations.set(id,new Set());
    const owners=obligations.get(id),size=owners.size;owners.add(unit);return owners.size!==size;
  };
  for(const pack of packs)if(pack.reader_concerns?.length||pack.initial_scope_findings?.length){
    for(const concern of [...(pack.reader_concerns??[]),...(pack.initial_scope_findings??[])]){
      const unit=pack.reader_concern_owners?.[concern.id];
      requireValue(unit&&pack.assignments[unit]?.includes(concern.id)
        &&(!originalOwners[concern.id]||originalOwners[concern.id]===unit),
        `reader concern original reviewer changed: ${concern.id}`);
      originalOwners[concern.id]=unit;add(concern.id,unit);
    }
  }
  if(withdrawal)for(const id of withdrawal.row.targets){requireValue(!originalOwners[id]||originalOwners[id]==='1','withdrawn original reviewer changed');originalOwners[id]='1';add(id,'1');}
  if(!obligations.size)return {originalOwners,obligations,pending:new Map(),coverage:[],evidence};
  const originCache=new Map();
  const origin=unit=>{
    if(originCache.has(unit))return originCache.get(unit);
    const path=join(root,'research',`${run}-dispatch`,`alpha-repair-${workerLabel('impact-initial',1,unit)}.result.json`);
    const result=read(path),sha256=digest(readFileSync(path,'utf8'));
    requireValue(result.run===run&&result.role==='alpha-repair'&&result.label===workerLabel('impact-initial',1,unit)
      &&result.ok===true&&result.model===MODELS.sol61.id&&result.provider_effort===sol61Effort(root,result.run)
      &&typeof result.session_home==='string'
      &&resolve(root,result.session_home)===resolve(root,'.autopilot',run,'step5-reader-owner-sessions',`u${unit}`)
      &&typeof result.session_id==='string'&&result.session_id.length>0,
      `reader concern lacks genuine persistent reviewer origin: ${unit}`);
    const value={path,result,sha256};originCache.set(unit,value);return value;
  };
  for(let index=0;index<packs.length;index++){
    const pack=packs[index],receipt=receipts[index];
    // Frozen earlier obligations cannot disappear when a later repair changes an
    // edge. This adds duties only; it never supplies coverage for any of them.
    for(const [id,units]of Object.entries(pack.reader_review_obligations??{})){
      requireValue(Array.isArray(units)&&units.length>0,`invalid reader review obligations: ${id}`);
      for(const unit of units)add(id,unit);
    }
    const nativeReports=new Map(pack.units.map(unit=>[unit,read(workerReport(root,run,pack.phase,pack.round,unit))]));
    for(const event of receipt.statement_events??[]){
      if(event.before_statement_sha256===event.after_statement_sha256)continue;
      const createdBy=unit=>createdIds.has(event.id)&&!Object.hasOwn(pack.before,event.id)
        &&nativeReports.get(unit).created_items.some(row=>row.id===event.id)
        &&receipt.created_items.some(row=>row.id===event.id);
      const units=pack.units.filter(unit=>pack.assignments[unit]?.includes(event.id)||createdBy(unit));
      const review=units.length===1?nativeReports.get(units[0]).reviews.find(row=>row.id===event.id):null;
      const historicalCreation=review?.disposition==='authored'&&createdBy(units[0])&&review.post_sha256!==receipt.post[event.id]
        &&receipt.reviews.some(row=>digest(row)===digest(review))
        &&historicalCreatedEvent(root,run,pack,receipt,units[0],review,event,withdrawal,evidence);
      requireValue((review?.disposition==='repaired'||review?.disposition==='authored'&&createdBy(units[0]))
        &&(review.post_sha256===receipt.post[event.id]||historicalCreation||withdrawnOwnerReport(withdrawal,pack,units[0],receipt)
          &&withdrawal.row.original_reviews.some(row=>row.id===event.id&&row.post_sha256===review.post_sha256)),
        `reader repair event lacks its actual native repairing or creating lane: ${event.id}`);
      if(historicalCreation)add(event.id,units[0]);
      events.push({id:event.id,unit:units[0]});
    }
    for(const unit of pack.units){
      const reportPath=workerReport(root,run,pack.phase,pack.round,unit),report=nativeReports.get(unit);
      const dispatchPath=join(root,'research',`${run}-dispatch`,`alpha-repair-${workerLabel(pack.phase,pack.round,unit)}.result.json`);
      if(!withdrawnOwnerReport(withdrawal,pack,unit,receipt))for(const review of report.reviews??[])records.push({id:review.id,unit,review,pack,receipt,reportPath,dispatchPath});
    }
  }
  // Only actual interface changes propagate. If an already affected consumer
  // itself restated, its actual modifying reviewer owns that next boundary.
  // Iterate to cover supplier-before-consumer changes within the same pass.
  const edges=discoverDownstream({items,repairedIds:[...new Set(events.map(row=>row.id))]});
  const historical=packs.flatMap(pack=>pack.impacts??[]);
  let grew=true;
  while(grew){
    grew=false;
    for(const event of events)if(obligations.has(event.id)){
      grew=add(event.id,event.unit)||grew;
      for(const impact of [...edges,...historical])if(impact.suppliers?.includes(event.id))grew=add(impact.id,event.unit)||grew;
    }
  }
  const pending=new Map(),coverage=[];
  for(const [id,units]of [...obligations].sort(([a],[b])=>a.localeCompare(b))){
    for(const unit of [...units].sort()){
      const auth=origin(unit);
      // Every qualifying review is looked up in its original native report;
      // aggregate receipts cannot relabel another lane's review as this one's.
      let match=null;
      for(const record of records.filter(row=>row.id===id&&row.unit===unit)){
        const claimed=(record.pack.reader_review_owners??record.pack.reader_concern_owners)?.[id]===unit;
        const currentReview=contexts.matches(record.review,current,record.receipt.post);
        if(!claimed&&!currentReview)continue;
        requireValue(record.receipt.evidence[record.reportPath]===digest(readFileSync(record.reportPath,'utf8'))
          &&record.receipt.evidence[record.dispatchPath]===digest(readFileSync(record.dispatchPath,'utf8'))
          &&record.receipt.reviews.some(row=>digest(row)===digest(record.review)),
          `reader review is not bound to its original collected native evidence: ${id}/${unit}`);
        const dispatch=read(record.dispatchPath);
        const sameReviewer=dispatch.run===run&&dispatch.role==='alpha-repair'
          &&dispatch.label===workerLabel(record.pack.phase,record.pack.round,unit)
          &&dispatch.ok===true&&dispatch.model===MODELS.sol61.id&&dispatch.provider_effort===sol61Effort(root,dispatch.run)
          &&typeof dispatch.session_home==='string'
          &&resolve(root,dispatch.session_home)===resolve(root,auth.result.session_home)
          &&dispatch.session_id===auth.result.session_id;
        // An incidental lane number grants no coverage. A genuine review from
        // this exact session can count even before this item acquired a tag.
        if(!claimed&&!sameReviewer)continue;
        requireValue(sameReviewer,`reader review does not retain its genuine reviewer session: ${id}/${unit}`);
        if(claimed&&(record.pack.phase!=='impact-initial'||record.pack.round!==1)){
          const binding=record.pack.reader_owner_sessions?.[unit];
          requireValue(binding?.result===auth.path&&binding.sha256===auth.sha256&&binding.session_id===auth.result.session_id
            &&record.pack.input_evidence?.[auth.path]===auth.sha256,
            `reader review continuation lacks its exact original session binding: ${id}/${unit}`);
        }
        if(!currentReview)continue;
        if(withdrawal?.ids.has(id))Object.assign(evidence,freshWithdrawalEvidence(withdrawal,{...record,root,run}));
        match={id,unit,phase:record.pack.phase,report:record.reportPath,dispatch:record.dispatchPath,
          session_id:dispatch.session_id,review_sha256:digest(record.review)};
      }
      if(match)coverage.push(match);
      else {if(!pending.has(id))pending.set(id,[]);pending.get(id).push(unit);}
    }
  }
  return {originalOwners,obligations,pending,coverage,evidence};
}
const readerObligationInventory=ownership=>Object.fromEntries([...ownership.obligations]
  .sort(([a],[b])=>a.localeCompare(b)).map(([id,units])=>[id,[...units].sort()]));

// An explicit native pending consumer is an owner-wave duty, even when the
// old initial source review still matches an unchanged Statement/Definition.
function nativeDownstreamPending(root,run,packs,receipts,items,current,recovery=null,recoveryDuties=null) {
  const withdrawal=packs.some(p=>p.phase==='impact-initial'&&p.round===1)?loadOwnerReviewWithdrawal(root,run):null;
  const contexts=reviewContexts(items),frontier=gateFrontier(root,run),claims=[],records=[],evidence={};
  const bound=(receipt,path)=>receipt.evidence?.[path]===digest(readFileSync(path,'utf8'));
  const success=record=>{
    const {pack,receipt,unit,report,reportPath}=record;
    const label=workerLabel(pack.phase,pack.round,unit);
    const dispatchPath=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`);
    requireValue(receipt.run===run&&receipt.phase===pack.phase&&receipt.round===pack.round
      &&report.run===run&&report.phase===pack.phase&&report.round===pack.round&&String(report.unit)===unit
      &&report.input_sha256===digest(pack)&&bound(receipt,reportPath)&&bound(receipt,dispatchPath)
      &&bound(receipt,packPath(root,run,pack.phase,pack.round)),
      'native pending work lacks its original exact collected report/pack/dispatch');
    const native=read(dispatchPath);
    // ownerUnits uses the bare lane only for the base owner pack. Native
    // continuation dispatches cover the encoded phase:lane stage unit, while
    // report.unit remains the decoded bare lane. Match that exact identity.
    const basePhase=pack.basePhase??pack.phase;
    const nativeCover=pack.phase===basePhase?unit:`${pack.phase}:${unit}`;
    requireValue(native.run===run&&native.role==='alpha-repair'&&native.label===label
      &&native.ok===true&&native.model===MODELS.sol61.id&&native.provider_effort===sol61Effort(root,native.run)
      &&JSON.stringify(native.covers)===JSON.stringify([nativeCover])
      &&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false
      &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
      &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0
      &&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.evidence_tag===`.attempt-${native.attempt}`,
      'native pending work requires genuine successful immutable owner execution');
    const attemptPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`);
    requireValue(readFileSync(attemptPath,'utf8')===readFileSync(dispatchPath,'utf8'),
      'native pending work immutable attempt differs from original collected result');
    for(const path of [reportPath,dispatchPath,attemptPath])evidence[path]=digest(readFileSync(path,'utf8'));
    return {dispatchPath,attemptPath,native};
  };
  for(let index=0;index<packs.length;index++){
    const pack=packs[index],receipt=receipts[index];
    for(const unit of pack.units){
      const reportPath=workerReport(root,run,pack.phase,pack.round,unit),report=read(reportPath);
      const record={pack,receipt,unit,report,reportPath,index};records.push(record);
      // Separate derived duty: an actual native interface repair owns its
      // reported direct consumer. This is not a fabricated downstream_pending
      // field and supplies no review credit from the original affected-use note.
      if(['impact-repeat','gate'].includes(pack.basePhase??pack.phase))for(const event of receipt.statement_events??[]){
        if(!pack.assignments[unit]?.includes(event.id))continue;
        const review=report.reviews?.find(row=>row.id===event.id);
        const direct=[...new Map([...discoverDownstream({items,repairedIds:[event.id]}).filter(row=>current[event.id]===review?.post_sha256&&current[row.id]===receipt.post[row.id]),
          ...packs.filter(p=>p.before?.[event.id]===review?.post_sha256).flatMap(p=>p.impacts??[]).filter(row=>row.suppliers?.includes(event.id)),
          ...packs.flatMap(p=>p.native_interface_consumer_obligations??[]).filter(row=>row.supplier===event.id&&row.supplier_post_sha256===review?.post_sha256).map(row=>({id:row.id,suppliers:[event.id]}))].map(row=>[row.id,row])).values()];
        for(const impact of direct){
          const id=impact.id,use=report.downstream_uses?.[id];
          if(!frontier.has(id)||!report.downstream?.includes(id)||typeof use!=='string'||use.trim().length<40)continue;
          requireValue(review?.disposition==='repaired'&&review.post_sha256===receipt.post[event.id]
            &&receipt.reviews.some(row=>digest(row)===digest(review))
            &&receipt.restated?.includes(event.id)&&receipt.downstream?.includes(id)
            &&event.before_statement_sha256===pack.before_statements?.[event.id]
            &&/^[a-f0-9]{64}$/.test(event.after_statement_sha256??'')
            &&event.before_statement_sha256!==event.after_statement_sha256,
            'native interface consumer lacks exact assigned repairing source/event');
          if(current[event.id]===review.post_sha256)requireValue(event.after_statement_sha256===statementHash(readFileSync(join(root,'items',`${event.id}.md`),'utf8')),
            'native interface event differs from its exact current source');
          const auth=success(record);
          const promptPath=resolve(root,auth.native.prompt??''),expectedPrompt=auth.attemptPath.replace(/\.result\.json$/,'.prompt.md');
          requireValue(promptPath===expectedPrompt&&existsSync(promptPath),'native interface duty lacks immutable prompt');
          const prompt=readFileSync(promptPath,'utf8');
          requireValue(prompt.includes(`run: ${run}\nrole: alpha-repair\nlabel: ${auth.native.label}\n`)
            &&prompt.includes(report.input_sha256)&&prompt.includes(`output: ${relative(root,reportPath)}\n`),
            'native interface duty prompt does not bind exact report/pack');
          for(const path of [packPath(root,run,pack.phase,pack.round),effectiveWorkflowArtifact(root,run,join(workflowDir(root,run),`${pack.phase}-${pack.round}-collected.json`)),promptPath])evidence[path]=digest(readFileSync(path,'utf8'));
          claims.push({kind:'native-interface-consumer',id,unit,phase:pack.phase,index,supplier:event.id,
            before_statement_sha256:event.before_statement_sha256,after_statement_sha256:event.after_statement_sha256,
            supplier_post_sha256:review.post_sha256,supplier_review_context_sha256:review.review_context_sha256,
            supplier_review_sha256:digest(review),report:reportPath,dispatch:auth.dispatchPath,attempt:auth.attemptPath,affected_use:use});
        }
      }
      if(report.downstream_pending===undefined)continue;
      requireValue(Array.isArray(report.downstream_pending)&&Array.isArray(report.downstream)
        &&report.downstream_pending.length<=report.downstream.length
        &&new Set(report.downstream_pending).size===report.downstream_pending.length
        &&report.downstream_pending.every(id=>typeof id==='string'&&frontier.has(id)
          &&report.downstream.includes(id)&&receipt.downstream?.includes(id)),
        'native downstream_pending must be unique actual downstream frontier IDs');
      if(!report.downstream_pending.length)continue;
      const auth=success(record);
      for(const id of report.downstream_pending)claims.push({id,unit,phase:pack.phase,index,
        report:reportPath,dispatch:auth.dispatchPath,attempt:auth.attemptPath,
        affected_use:typeof report.downstream_uses?.[id]==='string'?report.downstream_uses[id]:null});
    }
  }
  const pending=new Map(),coverage=[],sessions={};
  for(const id of [...new Set(claims.map(row=>row.id))].sort()){
    const latest=Math.max(...claims.filter(row=>row.id===id).map(row=>row.index));
    requireValue(!claims.some(row=>row.id===id&&row.kind==='native-interface-consumer')||new Set(claims.filter(row=>row.id===id).map(row=>row.unit)).size<=1,
      'native interface consumer has conflicting genuine repairing owners; resolve without dropping either duty');
    if(claims.some(row=>row.id===id&&row.kind==='native-interface-consumer')&&!recovery?.targets.has(id)){
      const identities=claims.filter(row=>row.id===id).map(row=>{const binding=reportingSessionBinding(root,run,packs[0].basePhase??packs[0].phase,packs[0].round,row.unit,row.dispatch);return `${row.unit}:${binding.session_home}:${binding.session_id}`;});
      requireValue(new Set(identities).size===1,'native interface consumer has conflicting repairing session identities');
    }
    if(recovery?.targets.has(id)){const row=recoveryDuties.coverage.find(row=>row.id===id&&packs.findIndex(pack=>pack.phase===row.phase)>=latest);if(row)coverage.push(row);else {const unit=recoveryDuties.pending.get(id)??recovery.owners?.get(id)??recovery.row.unit;requireValue(['1','2','3'].includes(unit)&&recoveryDuties.sessions[unit],'recovered consumer lacks its genuine reporting owner');pending.set(id,unit);sessions[unit]=recoveryDuties.sessions[unit];}continue;}
    let match=null;
    // A same-wave sibling or later genuine owner review may discharge the
    // consumer. Initial adjudicator reviews and earlier passes cannot do so.
    for(const record of records.filter(row=>row.index>=latest&&!withdrawnOwnerReport(withdrawal,row.pack,row.unit,row.receipt)))for(const review of record.report.reviews??[]){
      if(review.id!==id||!record.pack.assignments[record.unit]?.includes(id)
        ||!contexts.matches(review,current,record.receipt.post))continue;
      requireValue(record.receipt.reviews.some(row=>digest(row)===digest(review)),
        'pending consumer review is absent from its original native collection');
      const auth=success(record);
      const claim=claims.filter(row=>row.id===id&&row.index===latest).sort((a,b)=>a.unit.localeCompare(b.unit))[0],base=packs[0].basePhase??packs[0].phase;
      if(['impact-repeat','gate'].includes(base)||recovery&&claim.index>0){const origin=reportingSessionBinding(root,run,base,packs[0].round,claim.unit,claim.dispatch);if(record.unit!==claim.unit||auth.native.session_id!==origin.session_id||resolve(root,auth.native.session_home??'')!==origin.session_home)continue;}
      match={id,phase:record.pack.phase,unit:record.unit,
        report:record.reportPath,dispatch:auth.dispatchPath,review_sha256:digest(review)};
    }
    if(match)coverage.push(match);
    else {
      const claim=claims.filter(row=>row.id===id&&row.index===latest).sort((a,b)=>a.unit.localeCompare(b.unit))[0];
      pending.set(id,claim.unit);
      // Selecting a lane must resume the actual reporting reviewer, not a
      // coincidentally numbered fresh process. Existing session routing is reused.
      const base=packs[0].basePhase??packs[0].phase;
      if(['impact-repeat','gate'].includes(base)||recovery&&claim.index>0){const binding=reportingSessionBinding(root,run,base,packs[0].round,claim.unit,claim.dispatch);if(sessions[claim.unit])requireValue(sessions[claim.unit].session_id===binding.session_id&&sessions[claim.unit].session_home===binding.session_home,'conflicting genuine reporting owners for lane');sessions[claim.unit]=binding;evidence[binding.result]=binding.sha256;continue;}
      const origin=join(root,'research',`${run}-dispatch`,`alpha-repair-${workerLabel('impact-initial',1,claim.unit)}.result.json`);
      const first=read(origin),reporting=read(claim.dispatch),home=resolve(root,'.autopilot',run,'step5-reader-owner-sessions',`u${claim.unit}`);
      requireValue(first.run===run&&first.role==='alpha-repair'&&first.ok===true
        &&first.label===workerLabel('impact-initial',1,claim.unit)&&JSON.stringify(first.covers)===JSON.stringify([claim.unit])
        &&first.model===MODELS.sol61.id&&first.provider_effort===sol61Effort(root,first.run)
        &&typeof first.session_home==='string'&&resolve(root,first.session_home)===home
        &&typeof first.session_id==='string'&&first.session_id.length>0
        &&typeof reporting.session_home==='string'&&resolve(root,reporting.session_home)===home
        &&reporting.session_id===first.session_id,'pending consumer lacks its actual persistent reporting owner');
      evidence[origin]=digest(readFileSync(origin,'utf8'));
    }
  }
  return {obligations:claims.filter(row=>row.kind!=='native-interface-consumer'),interface_obligations:claims.filter(row=>row.kind==='native-interface-consumer'),pending,coverage,evidence,sessions};
}

export function assertImpactProgress(packs,pending,current,{items=null,reviewOwners=null,withdrawal=null}={}) {
  const targets=[...new Set(pending)].sort();
  for(const pack of packs) {
    // Pre-statement-policy assignments may legitimately need one migration
    // pass with the new review context. Do not mistake that for a repeat.
    if(!pack.before_statements)continue;
    const previous=[...new Set(Object.values(pack.assignments).flat())].sort();
    const scoped=items?prerequisiteScope(items,targets):subjectScope(pack);
    const sameOwners=!reviewOwners||targets.every(id=>!reviewOwners[id]
      ||(pack.reader_review_owners?.[id]??pack.units.find(unit=>pack.assignments[unit]?.includes(id)))===reviewOwners[id]);
    if(JSON.stringify(previous)===JSON.stringify(targets)&&sameOwners&&diff(pack.before,current).filter(id=>!scoped||scoped.has(id)).length===0&&!withdrawalAllowsFreshPass(withdrawal,pack,targets,current))
      throw Error(`Step 5 no-progress hold: ${pack.phase} already assigned the same ${targets.length} pending item(s) at this exact content state. Resolve stale/missing review evidence or the repair oscillation before retry; no duplicate owner wave was launched.`);
  }
}

// This derivative is scheduling evidence only; ordinary collect never reads it.
function impactSchedulingReceiptPath(root,run,basePhase,round,pass){
 if(basePhase==='impact-initial'&&pass==='impact-initial'){
  const recovery=loadReportingOwnerRecovery(root,run,basePhase,round);
  if(recovery?.observationPath)return recovery.observationPath;
 }
 return effectiveWorkflowArtifact(root,run,join(workflowDir(root,run),`${pass}-${round}-collected.json`));
}
export function buildInitialReportingObservation(root,run,pack,reports,evidence){
 requireValue(pack.phase==='impact-initial'&&pack.round===1,'historical scheduling is initial only');
 const current=hashes(root,run),reported={...current};
 for(const r of reports)for(const row of r.reviews??[])if(pack.assignments[String(r.unit)]?.includes(row.id))reported[row.id]=row.post_sha256;
 // Diagnostic-only structural check: no clone is returned, collected or credited.
 const structural=validateReports(pack,reports.map(r=>({...r,reviews:r.reviews.map(v=>v.uncertain===true?{...v,uncertain:false}:v)})),reported,{root});
 requireValue(structural.errors.length===0,'historical scheduling cannot defer another native defect hidden by uncertainty');
 const result=validateReports(pack,reports,reported,{root});
 const expected=reports.flatMap(r=>r.reviews.filter(v=>v.uncertain===true).map(v=>`invalid review ${r.unit}/${v.id}`));
 requireValue(JSON.stringify(result.errors)===JSON.stringify(expected),'historical scheduling cannot defer another native defect');
 const after=statementHashes(root,run),restated=restatedIds(pack,result.changed,after);
 return {...result,version:2,run,phase:'impact-initial',round:1,historical_only:true,native_acceptance:false,reviews:[],historical_reviews:reports.flatMap(r=>r.reviews),evidence,post:current,downstream:[...new Set(reports.flatMap(r=>r.downstream))],ledger_updates:reports.flatMap(r=>r.ledger_updates??[]),restated,statement_events:restated.filter(id=>pack.before_statements?.[id]||!pack.before[id]).map(id=>({id,before_statement_sha256:pack.before_statements?.[id]??statementHash(''),after_statement_sha256:after[id]}))};
}

/** Called only after all three dispatches for the active pass have drained.
 * Completed evidence is immutable. Only missing or stale downstream reviews
 * enter the next three-owner pass; certification has not begun at this point. */
export function advanceImpact(root,run,phase,round) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid base owner phase');
  const path=impactProgressPath(root,run,phase,round);
  const progress=existsSync(path)?read(path):{version:2,run,phase,round,passes:[phase],activePhase:phase,complete:false};
  progress.work_order??=progress.passes.map(pass=>({kind:'frontier',phase:pass}));
  for(const row of progress.superseded??[])verifyEvidence(row.evidence,{root,run});
  verifyEvidence(progress.maintenance_evidence,{root,run});
  if(progress.complete){verifyCompletedImpact(root,run,phase,round);return {complete:true,phase,round,passes:progress.passes};}
  if(progress.activeMaintenance){
    const pack=maintenancePack(root,run,progress.activeMaintenance);
    if(pack.lanes.some(lane=>!existsSync(join(root,lane.report))))return {complete:false,maintenance:pack};
    for(const lane of pack.lanes){
      const label=maintenanceLabel(phase,round,pack.id,lane.lane);
      const dispatch=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`),result=read(dispatch);
      const sol61Run=sol61Step5Run(root,run);
      const authorized=(result.model===MODELS.sol61.id&&result.provider_effort===sol61Effort(root,result.run))||(sol61Run
        ? result.model===MODELS.sol61.id&&result.provider_effort===sol61Effort(root,result.run)
        : result.model===MODELS.sol.id&&result.provider_effort==='xhigh');
      requireValue(result.ok===true&&result.run===run&&result.role==='alpha-repair'&&result.label===label&&authorized,`maintenance worker did not succeed with an authorized identity: ${label}`);
      progress.maintenance_evidence??={};progress.maintenance_evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    }
    const state=maintenanceStatus(root,run);
    if(state.active===pack.id)collectMaintenance(root,run,pack.id);
    else requireValue(state.collections.some(row=>row.pack===pack.id),'maintenance completion is missing');
    progress.activeMaintenance=null;atomic(path,progress);
  }
  const active=readPack(root,run,progress.activePhase,round);
  if(active.units.some(unit=>!existsSync(workerReport(root,run,active.phase,round,unit))))return {complete:false,pack:active,passes:progress.passes};
  const schedulingRecovery=phase==='impact-initial'?loadReportingOwnerRecovery(root,run,phase,round,{current:!existsSync(path)}):null;
  if(active.phase==='impact-initial'&&schedulingRecovery?.observationPath)syncMaintenance(root,run,schedulingRecovery.observation.statement_events);
  else collect(root,run,active.phase,round,{deferImpactClosure:true});
  const completed=progress.passes.map(pass=>read(impactSchedulingReceiptPath(root,run,phase,round,pass)));
  for(const receipt of completed)verifyEvidence(receipt.evidence,{root,run});
  const base=readPack(root,run,progress.repairBasePhase??phase,round),current=hashes(root,run),items=readLibraryItems(root,{run});
  const maintenance=maintenanceStatus(root,run),maintenanceIds=new Set(progress.work_order.filter(row=>row.kind==='maintenance').map(row=>row.id));
  const maintenanceChanges=maintenance.completed_changes.filter(row=>maintenanceIds.has(row.pack));
  const source=phase==='impact-initial'?'initial':phase==='impact-repeat'?'repeat':null;
  const sourceReceipt=source?read(join(workflowDir(root,run),`${source}-${round}-collected.json`)):null;
  if(sourceReceipt)verifyEvidence(sourceReceipt.evidence,{root,run});
  const createdIds=collectedCreationIds(root,run,[sourceReceipt,...completed]);
  const frontier=new Set([...gateFrontier(root,run),...createdIds]);
  const changed=diff(base.before,current).filter(id=>frontier.has(id)),rawSeeds=[...new Set([...(base.seeds??[]),...completed.flatMap(receipt=>receipt.restated??receipt.changed),...maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id)])];
  const maintenanceRestatements=new Set(maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id));
  const returned=maintenance.frontier_events.filter(row=>maintenanceRestatements.has(row.id)).map(row=>row.consumer_id);
  const scope=impactTargets(root,run,phase,items,rawSeeds,[...completed.flatMap(receipt=>receipt.downstream??[]),...returned],createdIds);
  const {seeds,impacts}=scope;
  const required=new Set([...Object.values(base.assignments).flat(),...scope.targets,...changed,...createdIds]);
  const reviews=new Map(completed.flatMap(receipt=>receipt.reviews).map(row=>[row.id,row]));
  // An adjudicator's source review remains valid unless an owner changes it.
  // It is used only for closure accounting, never counted as an owner repair.
  // Actual proof/interface consumers reported by workers need not yet have a
  // graph edge. Keep them in closure until a current owner review covers them.
  for(const receipt of [sourceReceipt,...completed])for(const id of receipt?.downstream??[])if(scope.frontier.has(id))required.add(id);
  const sourceReviews=new Map((sourceReceipt?.reviews??[]).map(row=>[row.id,row]));
  for(const id of sourceReviews.keys())required.add(id);
  // Step 5.9 is frontier-only. Preserve completed historical repairs, but do
  // not assign further outside work under superseded whole-library authority.
  const allowed=scope.frontier;
  for(const id of required)if(!allowed.has(id))required.delete(id);
  const contexts=reviewContexts(items);
  const snapshots=new Map([sourceReceipt,...completed].filter(Boolean).flatMap(receipt=>receipt.reviews.map(row=>[row.id,receipt.post])));
  const operationalIds=[...new Set(completed.flatMap(receipt=>receipt.operational_resolution?.subjects??[]))]
    .filter(id=>!scope.targets.includes(id)&&!changed.includes(id));
  if(operationalIds.length){verifyOperationalCoverage(root,run,operationalIds,current);for(const id of operationalIds)required.delete(id);}
  const packs=progress.passes.map(pass=>readPack(root,run,pass,round));
  const withdrawal=phase==='impact-initial'&&round===1?loadOwnerReviewWithdrawal(root,run):null;
  const ownership=readerReviewOwnership(root,run,packs,completed,items,current);
  const reportingRecovery=['impact-initial','impact-repeat'].includes(phase)?loadReportingOwnerRecovery(root,run,phase,round,{current:!existsSync(impactProgressPath(root,run,phase,round))}):null;
  const reportingDuties=reportingRecoveryDuties(reportingRecovery,packs,completed,items,current,contexts.matches,{allowed:scope.frontier});
  const explicitPending=nativeDownstreamPending(root,run,packs,completed,items,current,reportingRecovery,reportingDuties);
  const pending=[...new Set([...required].filter(id=>!contexts.matches(reviews.get(id)??sourceReviews.get(id),current,snapshots.get(id)))
    .concat([...ownership.pending.keys()],[...explicitPending.pending.keys()],[...reportingDuties.pending.keys()]))].sort();
  if(pending.length) {
    // One actual reviewer per item in this pass. Remaining owed reviewers run
    // in later drained native passes, preserving disjoint write assignments.
    const selectedOwners=Object.fromEntries([...ownership.pending].map(([id,units])=>[id,units[0]]));
    for(const id of pending)if(!selectedOwners[id]&&ownership.obligations.has(id))selectedOwners[id]=[...ownership.obligations.get(id)].sort()[0];
    for(const [id,unit]of explicitPending.pending)if(!selectedOwners[id])selectedOwners[id]=unit;
    for(const [id,unit]of reportingDuties.pending){requireValue(!selectedOwners[id]||selectedOwners[id]===unit,'reporting recovery conflicts with genuine existing reviewer');selectedOwners[id]=unit;}
    assertImpactProgress(packs,pending,current,{items,reviewOwners:selectedOwners,withdrawal});
    const nextPhase=nextImpactPhase(phase,progress);
    const assignments={'1':[],'2':[],'3':[]};
    const {order,cycles}=orderImpacts(items,pending);
    order.forEach((id,index)=>assignments[selectedOwners[id]??String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
    const identity=libraryIdentity(root,run);
    const pack={version:2,run,phase:nextPhase,basePhase:phase,repair_scope:'frontier',frontier_ids:[...scope.frontier].sort(),consumer_maintenance:scope.maintenance,round,units:['1','2','3'],assignments,before:current,before_statements:statementHashes(root,run),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds,impacts,cycles,failures:null,gateAssignments:{},ledger_updates:completed.flatMap(receipt=>receipt.ledger_updates??[])};
    if(ownership.obligations.size||phase==='impact-initial'&&[...explicitPending.pending].some(([id])=>!reportingDuties.obligations.has(id)&&!explicitPending.sessions[explicitPending.pending.get(id)])){
      pack.reader_concern_owners=ownership.originalOwners;
      pack.reader_review_obligations=readerObligationInventory(ownership);
      pack.reader_review_owners=selectedOwners;
      pack.reader_owner_sessions={};pack.input_evidence={};
      for(const unit of pack.units){
        if(!assignments[unit].some(id=>selectedOwners[id]===unit&&!reportingDuties.obligations.has(id)&&!explicitPending.sessions[unit]))continue;
        const origin=join(root,'research',`${run}-dispatch`,`alpha-repair-${workerLabel('impact-initial',1,unit)}.result.json`);
        const result=read(origin);
        pack.reader_owner_sessions[unit]={result:origin,sha256:digest(readFileSync(origin,'utf8')),session_id:result.session_id};
        pack.input_evidence[origin]=pack.reader_owner_sessions[unit].sha256;
      }
      // Validate real session continuity before freezing or dispatching work.
      for(const unit of pack.units){
        const binding=pack.reader_owner_sessions[unit];if(!binding)continue;
        const result=read(binding.result),home=resolve(root,'.autopilot',run,'step5-reader-owner-sessions',`u${unit}`);
        requireValue(result.run===run&&result.role==='alpha-repair'&&result.ok===true&&result.model===MODELS.sol61.id
          &&result.provider_effort===sol61Effort(root,result.run)&&typeof result.session_home==='string'
          &&resolve(root,result.session_home)===home&&typeof result.session_id==='string'&&result.session_id.length>0,
          `reader concern continuation lacks genuine persistent reviewer: ${unit}`);
      }
    }
    if((['impact-repeat','gate'].includes(phase)||reportingRecovery)&&(explicitPending.pending.size||reportingDuties.pending.size||reportingRecovery)){
      pack.reporting_owner_sessions={};pack.input_evidence??={};
      for(const [unit,binding]of Object.entries({...explicitPending.sessions,...reportingDuties.sessions}))if(assignments[unit].some(id=>selectedOwners[id]===unit)||reportingRecovery&&(unit===reportingRecovery.row.unit||reportingRecovery.row.units?.includes(unit))){
        const other=explicitPending.sessions[unit];if(other&&binding.mode==='resume'&&other.mode==='resume')requireValue(other.session_id===binding.session_id&&other.session_home===binding.session_home,'conflicting reporting session continuations');
        pack.reporting_owner_sessions[unit]=binding;if(binding.result)pack.input_evidence[binding.result]=binding.sha256;
      }
    }
    if(reportingRecovery){
      pack.reporting_owner_recovery={path:reportingRecovery.path,targets:[...reportingRecovery.targets],resume_original_session:false};
      pack.reporting_owner_review_obligations=[...reportingDuties.obligations].sort();
      if(reportingRecovery.owners)pack.reporting_owner_review_owners=Object.fromEntries([...reportingDuties.coverage.map(r=>[r.id,r.unit]),...reportingDuties.pending]);pack.input_evidence??={};
      for(const [p,h]of Object.entries(reportingDuties.evidence)){requireValue(!pack.input_evidence[p]||pack.input_evidence[p]===h,'reporting recovery evidence collision');pack.input_evidence[p]=h;}
    }
    if(explicitPending.interface_obligations.length)pack.native_interface_consumer_obligations=explicitPending.interface_obligations;
    if(explicitPending.obligations.length||explicitPending.interface_obligations.length){
      if(explicitPending.obligations.length)pack.native_downstream_pending=explicitPending.obligations;
      pack.input_evidence??={};
      for(const [file,hash]of Object.entries(explicitPending.evidence)){
        requireValue(!Object.hasOwn(pack.input_evidence,file)||pack.input_evidence[file]===hash,'conflicting native pending-work origin evidence');
        pack.input_evidence[file]=hash;
      }
    }
    for(const [p,h]of Object.entries(ownership.evidence??{})){pack.input_evidence??={};requireValue(!pack.input_evidence[p]||pack.input_evidence[p]===h,'owner review evidence collision');pack.input_evidence[p]=h;}
    if(withdrawal){
      pack.review_withdrawal={path:withdrawal.path,unit:'1',targets:[...withdrawal.row.targets]};
      pack.input_evidence??={};for(const [p,h]of Object.entries(withdrawal.evidence)){requireValue(!pack.input_evidence[p]||pack.input_evidence[p]===h,'withdrawal evidence collision');pack.input_evidence[p]=h;}
    }
    for(const unit of pack.units)assertReportingSessionCompatibility(root,pack,unit);
    if(reportingRecovery?.observationPath&&!existsSync(path))loadReportingOwnerRecovery(root,run,phase,round,{current:true});
    frozen(packPath(root,run,nextPhase,round),pack);writeTasks(root,pack,'repair');
    progress.passes.push(nextPhase);progress.work_order.push({kind:'frontier',phase:nextPhase});progress.activePhase=nextPhase;atomic(path,progress);
    return {complete:false,pack,passes:progress.passes};
  }
  const outside=prepareMaintenance(root,run);
  if(!outside.complete){
    progress.activeMaintenance=outside.pack.id;
    if(!progress.work_order.some(row=>row.kind==='maintenance'&&row.id===outside.pack.id))progress.work_order.push({kind:'maintenance',id:outside.pack.id});
    atomic(path,progress);return {complete:false,maintenance:outside.pack,passes:progress.passes};
  }
  const evidence=Object.assign({},...completed.map(receipt=>receipt.evidence),progress.maintenance_evidence??{},explicitPending.evidence,ownership.evidence??{},reportingDuties.evidence);
  for(const pass of progress.passes){const p=impactSchedulingReceiptPath(root,run,phase,round,pass);evidence[p]=digest(readFileSync(p,'utf8'));}
  for(const collection of maintenance.collections.filter(row=>maintenanceIds.has(row.pack)))evidence[join(root,collection.path)]=collection.sha256;
  const receipt={version:2,run,phase,round,errors:[],decisions:[],reviews:[...reviews.values()],created_items:completed.flatMap(row=>row.created_items??[]),changed,restated:seeds,post:current,evidence,downstream:scope.targets,consumer_maintenance:scope.maintenance,maintenance_packs:[...maintenanceIds],ledger_updates:completed.flatMap(row=>row.ledger_updates??[])};
  if(reportingRecovery){receipt.reporting_owner_recovery={path:reportingRecovery.path,targets:[...reportingRecovery.targets]};receipt.reporting_owner_review_obligations=[...reportingDuties.obligations].sort();receipt.reporting_owner_reviews=reportingDuties.coverage;}
  if(explicitPending.interface_obligations.length){receipt.native_interface_consumer_obligations=explicitPending.interface_obligations;receipt.native_interface_consumer_coverage=explicitPending.coverage.filter(row=>explicitPending.interface_obligations.some(d=>d.id===row.id));}
  if(explicitPending.obligations.length||explicitPending.interface_obligations.length){
    if(explicitPending.obligations.length)receipt.native_downstream_pending=explicitPending.obligations;
    if(explicitPending.obligations.length)receipt.native_downstream_pending_coverage=explicitPending.coverage.filter(row=>explicitPending.obligations.some(d=>d.id===row.id));
  }
  receipt.operational_carries=operationalIds;
  receipt.operational_resolutions=completed.filter(row=>row.operational_resolution).map(row=>row.operational_resolution);
  if(ownership.obligations.size){
    receipt.reader_review_obligations=readerObligationInventory(ownership);
    receipt.reader_owner_reviews=ownership.coverage;
  }
  frozen(join(workflowDir(root,run),`${phase}-${round}-closed.json`),receipt);
  progress.complete=true;atomic(path,progress);
  return {complete:true,phase,round,passes:progress.passes};
}

export function verifyCompletedImpact(root,run,phase,round) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid completed owner phase');
  const progress=read(impactProgressPath(root,run,phase,round));
  requireValue(progress.run===run&&progress.phase===phase&&progress.round===round
    &&progress.complete===true&&Array.isArray(progress.passes)&&progress.passes.length>0,
    'owner impact continuation is not complete');
  const dir=workflowDir(root,run),result=read(effectiveWorkflowArtifact(root,run,join(dir,`${phase}-${round}-closed.json`)));
  requireValue(result.run===run&&result.phase===phase&&result.round===round
    &&Array.isArray(result.errors)&&result.errors.length===0,'invalid completed owner collection');
  verifyEvidence(result.evidence,{root,run});
  const passes=progress.passes.map(pass=>{
    const path=impactSchedulingReceiptPath(root,run,phase,round,pass);
    requireValue(result.evidence[path]===digest(readFileSync(path,'utf8')),
      `completed owner collection does not bind pass: ${pass}`);
    const receipt=read(path);verifyEvidence(receipt.evidence,{root,run});return receipt;
  });
  const items=readLibraryItems(root,{run}),current=hashes(root,run);
  const source=phase==='impact-initial'?'initial':phase==='impact-repeat'?'repeat':null;
  const sourceReceipt=source?read(join(dir,`${source}-${round}-collected.json`)):null;
  if(sourceReceipt)verifyEvidence(sourceReceipt.evidence,{root,run});
  const createdIds=collectedCreationIds(root,run,[sourceReceipt,...passes]);
  requireValue(digest(result.created_items??[])===digest(passes.flatMap(receipt=>receipt.created_items??[])),'completed creation inventory differs from collected native declarations');
  const frontier=new Set([...gateFrontier(root,run),...createdIds]);
  const stable=prerequisiteScope(items,[...frontier]);
  for(const id of diff(result.post,current).filter(id=>stable.has(id)))
    throw Error(`writer changed relevant content after completed owner collection: ${id}`);
  const reviews=new Map([...(sourceReceipt?.reviews??[]),...result.reviews].map(row=>[row.id,row]));
  const snapshots=new Map([sourceReceipt,...passes].filter(Boolean)
    .flatMap(receipt=>receipt.reviews.map(row=>[row.id,receipt.post])));
  const base=readPack(root,run,progress.repairBasePhase??phase,round);
  const scope=impactTargets(root,run,phase,items,result.restated??base.seeds??[],result.downstream??[],createdIds);
  const required=new Set([...progress.passes.flatMap(pass=>Object.values(readPack(root,run,pass,round).assignments).flat()),
    ...scope.targets,...result.changed,...(sourceReceipt?.reviews??[]).map(row=>row.id),...createdIds]);
  const authorizedOperational=new Set(passes.flatMap(receipt=>receipt.operational_resolution?.subjects??[]));
  requireValue((result.operational_carries??[]).every(id=>authorizedOperational.has(id)),'unbound operational carry');
  const operationalIds=(result.operational_carries??[]).filter(id=>!scope.targets.includes(id)&&!result.changed.includes(id));
  if(operationalIds.length){verifyOperationalCoverage(root,run,operationalIds,current);for(const id of operationalIds)required.delete(id);}
  const aggregation=phase==='gate'?loadGateAggregationHistory(root,run):null;
  for(const id of aggregation?.targets??[]){
    required.add(id);
    const native=passes.some(receipt=>readPack(root,run,receipt.phase,receipt.round).units.some(unit=>{
      const p=workerReport(root,run,receipt.phase,receipt.round,unit);
      if(!existsSync(p)||receipt.evidence?.[p]!==digest(readFileSync(p,'utf8')))return false;
      return (read(p).reviews??[]).some(row=>row.id===id&&row.reviewed_by!=='root'&&row.uncertain===false
        &&row.post_sha256===current[id]&&result.reviews.some(actual=>actual.id===id&&actual.reviewed_by!=='root'
          &&actual.post_sha256===row.post_sha256&&actual.review_context_sha256===row.review_context_sha256));
    }));
    requireValue(native,`missing fresh native gate-source review: ${id}`);
  }
  const contexts=reviewContexts(items);
  for(const id of required)if(frontier.has(id))requireValue(contexts.matches(reviews.get(id),current,snapshots.get(id)),
    `completed owner collection lacks current review: ${id}`);
  const ownerPacks=progress.passes.map(pass=>readPack(root,run,pass,round));
  const reportingRecovery=['impact-initial','impact-repeat'].includes(phase)?loadReportingOwnerRecovery(root,run,phase,round):null;
  const reportingDuties=reportingRecoveryDuties(reportingRecovery,ownerPacks,passes,items,current,contexts.matches,{allowed:frontier});
  requireValue(reportingDuties.pending.size===0,'completed owner collection lacks genuine fresh reporting-owner recovery reviews');
  if(reportingRecovery){requireValue(digest(result.reporting_owner_review_obligations)===digest([...reportingDuties.obligations].sort())&&digest(result.reporting_owner_reviews)===digest(reportingDuties.coverage),'completed reporting recovery coverage changed');for(const [p,h]of Object.entries(reportingDuties.evidence))requireValue(result.evidence[p]===h,'completed reporting recovery provenance changed');}
  const explicitPending=nativeDownstreamPending(root,run,ownerPacks,passes,items,current,reportingRecovery,reportingDuties);
  requireValue(explicitPending.pending.size===0,`completed owner collection lacks explicit native pending-consumer review: ${[...explicitPending.pending.keys()].join('; ')}`);
  requireValue(digest(result.native_interface_consumer_obligations??[])===digest(explicitPending.interface_obligations),'completed native interface-consumer ownership changed');
  if(explicitPending.interface_obligations.length)requireValue(digest(result.native_interface_consumer_coverage)===digest(explicitPending.coverage.filter(row=>explicitPending.interface_obligations.some(d=>d.id===row.id))),'completed native interface-consumer coverage changed');
  if(result.native_downstream_pending!==undefined)requireValue(digest(result.native_downstream_pending)===digest(explicitPending.obligations)
    &&digest(result.native_downstream_pending_coverage)===digest(explicitPending.coverage.filter(row=>explicitPending.obligations.some(d=>d.id===row.id))),'completed explicit native pending-work coverage changed');
  const ownership=readerReviewOwnership(root,run,ownerPacks,passes,items,current);
  requireValue(ownership.pending.size===0,
    `completed owner collection lacks current same-reviewer obligations: ${[...ownership.pending].map(([id,units])=>`${id}/${units.join(',')}`).join('; ')}`);
  for(const [p,h]of Object.entries(ownership.evidence??{}))requireValue(result.evidence[p]===h,'completed withdrawal review evidence changed');
  if(ownership.obligations.size)requireValue(digest(result.reader_review_obligations)===digest(readerObligationInventory(ownership))
    &&digest(result.reader_owner_reviews)===digest(ownership.coverage),'completed owner reviewer obligations or native provenance changed');
  return result;
}

function orderImpacts(items,targets) {
  const targetSet=new Set(targets),visited=new Set(),visiting=new Set(),order=[],cycles=[];
  const graph=new Map(items.map(row=>[row.id,row.deps]));
  const aliases=new Map();for(const row of items)for(const alias of row.aliases??[])if(!graph.has(alias))aliases.set(alias,row.id);
  const visit=raw=>{const id=aliases.get(raw)??raw;if(visited.has(id))return;if(visiting.has(id)){cycles.push(id);return;}visiting.add(id);for(const dep of graph.get(id)??[])visit(dep);visiting.delete(id);visited.add(id);if(targetSet.has(id))order.push(id);};
  for(const id of targets)visit(id);
  return {order,cycles:[...new Set(cycles)]};
}

export function prepareImpact(root,run,phase,round,{failures=null}={}) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid impact phase');
  const path=packPath(root,run,phase,round);
  if(existsSync(path)){
    const saved=read(path);
    if(phase==='impact-initial'&&round===1){
      checkFrozenReaderConcernInput(root,run,saved);
      checkFrozenInitialScopeFindingInput(root,run,saved);
    }
    return saved;
  }
  if(phase==='gate')return prepareGateRepairPack(root,run,phase,round,failures);
  const source=phase==='impact-initial'?'initial':'repeat';
  const result=collect(root,run,source,round);
  const items=readLibraryItems(root,{run});
  const scope=impactTargets(root,run,phase,items,result.restated??result.changed,result.downstream??[]);
  const {seeds,impacts}=scope;
  const concerns=phase==='impact-initial'&&round===1?loadReaderConcerns(root,run):null;
  const scopeFindings=phase==='impact-initial'&&round===1?loadInitialScopeFindings(root,run):null;
  const targets=[...new Set([...scope.targets,...(concerns?.entries??[]).map(row=>row.id),...(scopeFindings?.entries??[]).map(row=>row.id),...(result.metadata_history_current_review_targets??[])])];
  // Deterministic disjoint lanes run concurrently; shared metadata edits lock.
  // Closure requeues reviews invalidated by a concurrent supplier repair.
  const assignments={'1':[],'2':[],'3':[]};
  // Preserve explicit dependency cycles for the dependency gate to judge.
  const {order,cycles}=orderImpacts(items,targets);
  order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
  const identity=libraryIdentity(root,run);
  const pack={version:2,run,phase,round,repair_scope:'frontier',frontier_ids:[...scope.frontier].sort(),consumer_maintenance:scope.maintenance,units:['1','2','3'],assignments,before:hashes(root,run),before_statements:statementHashes(root,run),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),impacts,seeds,failures:null,gateAssignments:{},cycles:[...new Set(cycles)],ledger_updates:result.ledger_updates??[]};
  if(result.metadata_history){
    pack.metadata_history_current_review_targets=[...result.metadata_history_current_review_targets];
    pack.input_evidence??={};
    const collection=join(workflowDir(root,run),`${source}-${round}-collected.json`);
    pack.input_evidence[collection]=digest(readFileSync(collection,'utf8'));
    for(const [file,hash]of Object.entries(result.evidence)){
      requireValue(!Object.hasOwn(pack.input_evidence,file)||pack.input_evidence[file]===hash,'conflicting initial metadata history evidence');
      pack.input_evidence[file]=hash;
    }
  }
  if(concerns){
    pack.reader_concerns=concerns.entries;
    pack.reader_concern_owners=Object.fromEntries(concerns.entries.map(row=>[row.id,pack.units.find(unit=>assignments[unit].includes(row.id))]));
  }
  if(scopeFindings)pack.initial_scope_findings=scopeFindings.entries;
  if(concerns||scopeFindings){
    pack.reader_concern_owners={...(pack.reader_concern_owners??{}),...Object.fromEntries((scopeFindings?.entries??[]).map(row=>[row.id,pack.units.find(unit=>assignments[unit].includes(row.id))]))};
    pack.input_evidence??={};
    for(const admission of [concerns,scopeFindings].filter(Boolean))for(const [file,hash]of Object.entries(frozenSupportingEvidence(root,run,admission.evidence))){
      requireValue(!Object.hasOwn(pack.input_evidence,file)||pack.input_evidence[file]===hash,`conflicting work-admission evidence: ${file}`);
      pack.input_evidence[file]=hash;
    }
  }
  frozen(path,pack);writeTasks(root,pack,'repair');return pack;
}

/** Gate failures identify repair candidates, not already-repaired suppliers.
 * Only real subsequent changes (or explicit worker discoveries) propagate. */
export function prepareGateRepairPack(root,run,phase,round,failures) {
  requireValue(/^gate(?:-pass-[0-9]+)?$/.test(phase),'invalid gate repair phase');
  const path=packPath(root,run,phase,round);
  if(existsSync(path)){const saved=read(path);writeTasks(root,saved,'repair');return saved;}
  requireValue(failures!==null,'gate repair requires failed diagnostics');
  const identity=libraryIdentity(root,run),diagnostics=gateDiagnostics(failures,identity.ids);
  requireValue(diagnostics.length>0,'gate repair requires at least one failed diagnostic');
  const frontier=gateFrontier(root,run);
  const excluded=[...new Set(diagnostics.flatMap(row=>row.subjects).filter(id=>!frontier.has(id)))].sort();
  for(const diagnostic of diagnostics) {
    const originalSubjects = diagnostic.subjects;
    diagnostic.subjects = originalSubjects.filter(id=>frontier.has(id));
    // A missing contract outside the selected frontier is an owner metadata
    // obligation; published subjects inside the frontier retain full repair duties.
    // Preserve it for the existing diagnostic owner instead of excluding it.
    if(diagnostic.id==='proof-contract-coverage' && diagnostic.subjects.length!==originalSubjects.length)
      diagnostic.ownerHeld=true;
  }
  const scoped=diagnostics.filter(row=>row.subjects.length||row.ownerHeld);
  requireValue(scoped.length>0,'Step 5.9: diagnostics contain only excluded out-of-frontier findings; rerun the frontier-scoped gate instead of launching repairs');
  const aggregation=loadGateAggregationHistory(root,run);
  const targets=[...new Set([...diagnostics.flatMap(row=>row.subjects),...(aggregation?.targets??[])])].sort();
  const {order,cycles}=orderImpacts(identity.items,targets),assignments={'1':[],'2':[],'3':[]};
  order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
  if(aggregation){for(const unit of Object.keys(assignments))assignments[unit]=assignments[unit].filter(id=>!aggregation.targets.includes(id));assignments['1'].push(...aggregation.targets);for(const unit of Object.keys(assignments)){const own=new Set(assignments[unit]);assignments[unit]=order.filter(id=>own.has(id));}}
  const owner=new Map(Object.entries(assignments).flatMap(([unit,ids])=>ids.map(id=>[id,unit])));
  const gateAssignments={'1':[],'2':[],'3':[]};
  let globals=0;
  for(const diagnostic of scoped){
    const scoped=new Map();
    for(const id of diagnostic.subjects){const unit=owner.get(id);if(!scoped.has(unit))scoped.set(unit,[]);scoped.get(unit).push(id);}
    const globalOwner=diagnostic.ownerHeld||!diagnostic.subjects.length?String(globals++%3+1):null;
    if(globalOwner&&!scoped.has(globalOwner))scoped.set(globalOwner,[]);
    for(const [unit,subjects] of scoped)gateAssignments[unit].push({...diagnostic,subjects,ownerHeld:unit===globalOwner});
  }
  const pack={version:2,gateRoutingVersion:1,repair_scope:'frontier',frontier_ids:[...frontier].sort(),run,phase,basePhase:'gate',round,units:['1','2','3'],assignments,
    before:hashes(root,run),before_statements:statementHashes(root,run),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),
    impacts:[],seeds:[],failures,excluded_out_of_frontier:excluded,gateAssignments,cycles,ledger_updates:[]};
  if(aggregation){pack.owner_aggregation_current_review_targets=aggregation.targets;pack.input_evidence=aggregation.evidence;}
  frozen(path,pack);writeTasks(root,pack,'repair');return pack;
}

export function verifyCertification(root,run,{allowMissing=true}={}) {
  const path=join(workflowDir(root,run),'certification.json');
  if(!existsSync(path)){if(allowMissing)return null;throw Error('Step 5 certification missing');}
  const row=read(path);
  if(row.version!==2||row.run!==run||!Array.isArray(row.items)||!Array.isArray(row.creations??[])||!row.evidence)throw Error('malformed Step 5 certification');
  const {sha256,...payload}=row;
  requireValue(sha256===digest(payload),'Step 5 certification payload changed');
  const seen=new Set();for(const item of row.items){requireValue(!seen.has(item.id)&&['item_sha256','context_sha256','guard_sha256'].every(k=>/^[a-f0-9]{64}$/.test(item[k]??'')),`malformed Step 5 certificate item ${item.id}`);seen.add(item.id);}
  const created=new Set();for(const item of row.creations??[]){requireValue(!created.has(item.id)&&seen.has(item.id)&&typeof item.author_result==='string',`malformed Step 5 creation ${item.id}`);created.add(item.id);creationRegistration(root,run,item);}
  requireValue(Array.isArray(row.maintenance_certifications??[]),'malformed maintenance certification basis');
  const maintenanceSeen=new Set();
  for(const entry of row.maintenance_certifications??[]){
    const item=row.items.find(x=>x.id===entry.id);
    requireValue(entry.basis==='native-consumer-maintenance'&&created.has(entry.id)&&!maintenanceSeen.has(entry.id)
      &&entry.after_item_sha256===item?.item_sha256&&entry.after_guard_sha256===item?.guard_sha256
      &&['before_sha256','after_sha256','after_item_sha256','before_guard_sha256','after_guard_sha256','statement_sha256'].every(k=>/^[a-f0-9]{64}$/.test(entry[k]??''))
      &&['collection','report','dispatch','prompt'].every(k=>typeof entry[k]==='string'&&row.evidence[entry[k]])
      &&typeof entry.reason==='string'&&entry.reason.trim().length>=40,'malformed created-helper maintenance basis');
    maintenanceSeen.add(entry.id);
  }
  if(row.contract_aggregation)validateCertifiedContractAggregation(root,run,row,{current:false,installed:true});
  verifyEvidence(row.evidence,{root,run,certificate:row});
  verifyInitialPublishedBaselineExclusions(root,run,row);
  return row;
}

export function certify(root,run,phase,round,{contextHasher=currentHashesMany}={}) {
  const savedPath=effectiveWorkflowArtifact(root,run,join(workflowDir(root,run),`certification-${phase}-${round}.json`));
  if(existsSync(savedPath)) {
    const saved=read(savedPath),{sha256,...payload}=saved;requireValue(sha256===digest(payload),'completed certification payload changed');
    const staged=saved.contract_aggregation?validateCertifiedContractAggregation(root,run,saved):null;
    verifyEvidence(staged?.evidence??saved.evidence,{root,run});
    verifyInitialPublishedBaselineExclusions(root,run,saved,{current:true});
    const frontier=gateFrontier(root,run),maintained=new Set((saved.maintenance_certifications??[]).map(row=>row.id));
    const scoped=saved.items.filter(row=>frontier.has(row.id)||maintained.has(row.id));
    const current=hashes(root,run);for(const row of scoped)requireValue(row.guard_sha256===current[row.id],`stale completed certification ${row.id}`);
    const contexts=contextHasher(root,scoped.map(row=>row.id));
    for(const row of scoped){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale completed certification context ${row.id}`);}
    verifyCompletedImpact(root,run,phase,round);
    if(staged){completeCertifiedContractAggregation(root,run,saved,{verifyOtherEvidence:evidence=>verifyEvidence(evidence,{root,run})});verifyEvidence(saved.evidence,{root,run});}
    atomic(join(workflowDir(root,run),'certification.json'),saved);return saved;
  }
  const advanced=advanceImpact(root,run,phase,round);
  requireValue(advanced.complete,'owner impact repair continuation must finish before certification');
  const dir=workflowDir(root,run), result=verifyCompletedImpact(root,run,phase,round);
  verifyEvidence(result.evidence,{root,run});
  const source=phase==='impact-initial'?'initial':'repeat';
  const prior=verifyCertification(root,run);
  const sourceResult=phase==='gate'?null:read(join(dir,`${source}-${round}-collected.json`));
  const allReviews=[...(sourceResult?.reviews??[]),...result.reviews];
  const eligible=gateFrontier(root,run),createdIds=new Set([...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])].map(row=>row.id));
  const certifiedScope=id=>eligible.has(id)||createdIds.has(id);
  const reviewed=new Map(allReviews.filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const current=hashes(root,run), rawBefore=rawHashes(root,run), baseline=read(join(dir,'baseline.json'));
  // A changed source label is still a changed guard. Only actual subsequent
  // native owner review can supply current certification for this target.
  for(const id of sourceResult?.metadata_history_current_review_targets??[])
    requireValue(result.reviews.some(row=>row.id===id&&row.post_sha256===current[id]),`missing current native metadata-target review: ${id}`);
  const publishedBaseline=initialPublishedBaselineExclusions(root,run);
  // Only this original baseline difference is historical ordinary maintenance.
  // Native consumer reviews, contexts, impacts and gates keep the full scope.
  const changed=diff(baseline,current).filter(id=>certifiedScope(id)&&!publishedBaseline?.ids.has(id));
  const priorItems=new Map((prior?.items??[]).filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const progress=read(impactProgressPath(root,run,phase,round));
  const impactPack=readPack(root,run,progress.repairBasePhase??phase,round);
  // Stable subjects retain all external prerequisite carriers as context;
  // unrelated writers cannot turn their own content into this run's subjects.
  const library=readLibraryItems(root,{run}),stable=prerequisiteScope(library,[...eligible,...createdIds]);
  for(const id of diff(result.post,current).filter(id=>stable.has(id)))requireValue(false,`writer changed relevant content after collection: ${id}`);
  // Certification covers an examination of every discovered consumer. A
  // consumer may remain unchanged when sound; only logically necessary owner
  // repairs belong in `changed`.
  const currentImpacts=discoverDownstream({items:readLibraryItems(root,{run}),repairedIds:result.restated??[...new Set([...(impactPack.seeds??[]),...result.changed])]}).map(row=>row.id);
  const allowed=gateFrontier(root,run);
  for(const id of currentImpacts)if((!allowed||allowed.has(id))&&!reviewed.has(id))throw Error(`new downstream consumer requires owner review: ${id}`);
  for(const row of allReviews)if(row.post_sha256!==current[row.id]&&reviewed.get(row.id)===row)throw Error(`review changed before certification: ${row.id}`);
  // A completed native outside-maintenance repair is a separate typed basis,
  // never a synthesized frontier review or a rewritten creation certificate.
  const maintenance=createdMaintenanceBasis(root,run,phase,round,{prior,result,progress,eligible,items:library,current});
  for(const id of changed) if(!reviewed.has(id)&&!maintenance.basis.has(id)&&priorItems.get(id)?.guard_sha256!==current[id])throw Error(`uncertified change ${id}`);
  const ids=[...new Set([...changed,...reviewed.keys(),...priorItems.keys()])].sort();
  const contexts=contextHasher(root,ids); // One corpus read, after every writer drains.
  for(const id of ids)requireValue(contexts.has(id),`missing certification context: ${id}`);
  const reviewContextsNow=reviewContexts(library);
  for(const [id,row]of reviewed){
    if(row.reviewed_by==='root')requireValue(reviewContextsNow.matches(row,current)
      &&contexts.get(id)?.item_sha256===row.item_sha256&&contexts.get(id)?.context_sha256===row.context_sha256,
      `stale root owner review context before certification: ${id}`);
  }
  if(diff(rawBefore,rawHashes(root,run)).some(id=>stable.has(id)))throw Error('relevant item writer overlapped certification');
  const aggregation=phase==='gate'?loadGateAggregationHistory(root,run):null;
  const stagedAggregation=aggregation&&round>=2?stageCertifiedContractAggregation(root,run,round,prior):null;
  const evidence={...(prior?.evidence??{}),...(sourceResult?.evidence??{}),...result.evidence,...maintenance.evidence,...publishedBaseline?.evidence,...aggregation?.evidence,...stagedAggregation?.evidence};
  if(aggregation)evidence[resolve(root,aggregation.cache)]=stagedAggregation?.record.after.sha256??digest(readFileSync(resolve(root,aggregation.cache),'utf8'));
  // Retain the original relative pin as historical evidence; the new exact
  // current cache pin and immutable transition are separately bound above.
  for(const name of ['frontier.json','baseline.json','step4-verdicts.json',`${phase}-${round}-closed.json`,`${phase}-${round}-progress.json`,...(phase==='gate'?[]:[`${source}-${round}-collected.json`])]){const p=join(dir,name);evidence[p]=digest(readFileSync(p,'utf8'));}
  const items=ids.map(id=>({id,...contexts.get(id),guard_sha256:current[id],reason:reviewed.get(id)?.reason??maintenance.basis.get(id)?.reason??priorItems.get(id)?.reason}));
  const creationRows=[...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])],creationById=new Map();
  for(const row of creationRows){const old=creationById.get(row.id);if(old&&JSON.stringify(old)!==JSON.stringify(row))throw Error(`conflicting creation provenance: ${row.id}`);creationById.set(row.id,row);}
  const creations=[...creationById.values()].sort((a,b)=>a.id.localeCompare(b.id));
  for(const row of creations){creationRegistration(root,run,row);requireValue(current[row.id],`created item missing at certification: ${row.id}`);}
  const certificate={version:2,run,phase,round,at:new Date().toISOString(),items,creations,evidence,changed,
    ...(maintenance.records.length?{maintenance_certifications:maintenance.records}:{}),
    latest_adjudication_round:phase==='impact-repeat'?round:(prior?.latest_adjudication_round??null)};
  if(phase==='impact-repeat') {
    const frontier=read(join(dir,'frontier.json'));
    const decisions=sourceResult.decisions.map(d=>({run,round,id:d.id,decision:d.outcome==='confirmed_fatal'?'confirmed-fatal':'rejected-finding',resolved:true,basis:d.reason,item_sha256:readPack(root,run,'repeat',round).before[d.id]}));
    const byId=new Map();for(const row of decisions){const old=byId.get(row.id);if(!old||row.decision==='confirmed-fatal')byId.set(row.id,row);}
    const threshold=assessFatalThreshold({frontier,round,expectedIds:[...byId.keys()],decisions:[...byId.values()]});
    if(threshold.errors.length)throw Error(threshold.errors.join('\n'));
    frozen(join(dir,`threshold-${round}.json`),threshold);
    const p=join(dir,`threshold-${round}.json`);evidence[p]=digest(readFileSync(p,'utf8'));
  }
  if(stagedAggregation)certificate.contract_aggregation=stagedAggregation.record;
  if(publishedBaseline)certificate.ordinary_published_baseline_exclusions=publishedBaseline.record;
  verifyInitialPublishedBaselineExclusions(root,run,certificate,{current:true});
  certificate.sha256=digest(certificate);
  // The frozen candidate is a write-ahead intent. A failed derivative write
  // leaves the live old certificate untouched and has a strict saved retry.
  if(diff(rawBefore,rawHashes(root,run)).some(id=>stable.has(id)))throw Error('relevant item writer overlapped aggregation staging');
  frozen(join(dir,`certification-${phase}-${round}.json`),certificate);
  if(stagedAggregation){completeCertifiedContractAggregation(root,run,certificate,{verifyOtherEvidence:evidence=>verifyEvidence(evidence,{root,run})});verifyEvidence(certificate.evidence,{root,run});}
  atomic(join(dir,'certification.json'),certificate);
  return certificate;
}

export function judge(root,run,round,{contextHasher=currentHashesMany,runSweep=null}={}) {
  const dir=workflowDir(root,run), path=join(dir,`judge-${round}.json`);
  if(existsSync(path))return read(path);
  const cert=verifyCertification(root,run,{allowMissing:false});
  const frontier=gateFrontier(root,run),candidates=cert.items.filter(row=>frontier.has(row.id));
  const current=hashes(root,run);for(const row of candidates)if(current[row.id]!==row.guard_sha256)throw Error(`item changed before Sol judgment: ${row.id}`);
  requireValue((round===1&&cert.phase==='impact-initial')||(round>1&&cert.phase==='impact-repeat'&&cert.round===round-1),'Sol judge round does not follow a completed certification barrier');
  const priorVerdicts=round===1?[]:read(join(dir,`judge-${round-1}.json`)).verdicts;
  const judgeModel=MODELS.sol61.id;
  const judgeLineup='sol61';
  const judgeEffort=sol61Effort(root,run);
  const prev=Object.fromEntries(priorVerdicts.filter(r=>r.model===judgeModel).map(r=>[r.id,r]));
  const beforeContexts=contextHasher(root,candidates.map(row=>row.id));
  for(const row of candidates){const now=beforeContexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`certified context changed before Sol judgment: ${row.id}`);}
  const migrationIds=priorVerdicts.filter(r=>r.model!==judgeModel).map(r=>r.id);
  const ids=[...new Set([...cert.changed,...migrationIds])].filter(id=>frontier.has(id)).filter(id=>{const now=beforeContexts.get(id);requireValue(now,`missing judge context ${id}`);return prev[id]?.item_sha256!==now.item_sha256||prev[id]?.context_sha256!==now.context_sha256;});
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  if(ids.length) {
    const out=runSweep?runSweep({root,run,ids,ledger}):spawnSync(process.execPath,['tools/judge-sweep.mjs','--run',run,'--ledger',ledger,'--cost',`research/${run}-judge-cost.jsonl`,'--items',ids.join(','),'--lineup',judgeLineup,'--effort',judgeEffort,'--currency','exact-context'],{cwd:root,stdio:'inherit',timeout:43200000});
    if(out.status!==0)throw Error(`Sol sweep failed (${out.status}); resume preserves completed verdicts`);
  }
  const currentContexts=contextHasher(root,ids), verdicts=[];
  for(const id of ids)requireValue(JSON.stringify(beforeContexts.get(id))===JSON.stringify(currentContexts.get(id)),`item changed during Sol judgment: ${id}`);
  for(const id of ids){const now=currentContexts.get(id);const row=lines(ledger).filter(r=>r.id===id&&r.model===judgeModel&&r.item_sha256===now.item_sha256&&r.context_sha256===now.context_sha256&&typeof r.keep==='boolean').at(-1);if(!row)throw Error(`missing current ${judgeModel} verdict ${id}`);verdicts.push(row);}
  const carried=Object.values(prev).filter(row=>frontier.has(row.id)&&!ids.includes(row.id));
  const receipt={version:2,run,round,items:ids,verdicts:[...carried,...verdicts],certification_sha256:cert.sha256};frozen(path,receipt);return receipt;
}

export function verifyWave(root,run,{contextHasher=currentHashesMany,frontierOnly=true}={}) {
  const cert=verifyCertification(root,run,{allowMissing:false}), current=hashes(root,run);
  verifyInitialPublishedBaselineExclusions(root,run,cert,{current:true});
  const publishedBaseline=new Set((cert.ordinary_published_baseline_exclusions?.entries??[]).map(row=>row.id));
  const frontier=frontierOnly?gateFrontier(root,run):null,items=cert.items.filter(row=>!frontier||frontier.has(row.id));
  const contexts=contextHasher(root,items.map(row=>row.id));
  for(const row of items)if(row.guard_sha256!==current[row.id])throw Error(`stale Step 5 certification ${row.id}`);
  for(const row of items){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale Step 5 certification context ${row.id}`);}
  for(const id of diff(read(join(workflowDir(root,run),'baseline.json')),current))if((!frontier||frontier.has(id))&&!publishedBaseline.has(id)&&!items.some(row=>row.id===id))throw Error(`uncovered Step 5 repair ${id}`);
  return cert;
}

export function checkWorkflow(root,run,options={}) {
  const cert=verifyWave(root,run,{...options,frontierOnly:true});
  requireValue(['impact-repeat','gate'].includes(cert.phase)&&Number.isInteger(cert.latest_adjudication_round),'Step 5 has not completed its Sol judgment/adjudication cycle');
  const thresholdPath=join(workflowDir(root,run),`threshold-${cert.latest_adjudication_round}.json`);
  requireValue(cert.evidence[thresholdPath]&&existsSync(thresholdPath),'missing bound fatal threshold');
  const threshold=read(thresholdPath);requireValue(threshold.belowThreshold===true&&threshold.errors?.length===0&&threshold.fatalCount===0,'Step 5 requires zero items deemed defective by adjudicators (confirmed-fatal count must be 0)');
  return cert;
}

function main() {
  const args=process.argv.slice(2),opt=(flag,fallback='')=>{const i=args.indexOf(flag);return i<0?fallback:args[i+1];};
  const root=resolve(opt('--root',process.cwd())),run=opt('--run'),phase=opt('--phase'),round=Number(opt('--round','1'));
  if(!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(run)||!Number.isInteger(round)||round<1)throw Error('valid --run and --round required');
  let result;
  if(args[0]==='review-contexts'){
    const ids=opt('--items').split(',').filter(Boolean);requireValue(ids.length,'--items required');
    console.log(JSON.stringify(reviewContextHashes(root,ids,{run}),null,2));return;
  }
  switch(args[0]) {
    case 'recover-operational-derived':result=recoverOperationalDerived(root,run,round,opt('--authorization'));break;
    case 'record-operational-supplement':result=recordOperationalSupplement(root,run,phase,round,opt('--authorization'));break;
    case 'check-reader-concerns':{
      const admission=loadReaderConcerns(root,run,{requireCollection:false});
      requireValue(admission,'reader concern admission missing');
      console.log(JSON.stringify({run,ids:admission.entries.map(row=>row.id),mathematical_review:false,native_coverage_adopted:false}));return;
    }
    case 'record-initial-published-maintenance':result=recordInitialPublishedMaintenance(root,run,opt('--authorization'));break;
    case 'check-initial-published-maintenance':{
      const history=loadInitialPublishedMaintenance(root,run,{current:true});
      requireValue(history,'initial published-maintenance receipt missing');
      result={run,ids:[...history.ids],historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false};break;
    }
    case 'record-initial-scope-findings':result=recordInitialScopeFindings(root,run,opt('--authorization'));break;
    case 'check-initial-scope-findings':{
      const admission=loadInitialScopeFindings(root,run,{requireCollection:false});
      requireValue(admission,'initial-scope finding registry missing');
      console.log(JSON.stringify({run,ids:admission.entries.map(row=>row.id),mathematical_review:false,native_coverage_adopted:false}));return;
    }
    case 'init':result=initialize(root,run);break;
    case 'prepare':result=['initial','repeat'].includes(phase)?prepareAdjudication(root,run,phase,round):prepareImpact(root,run,phase,round,{failures:opt('--failures')?read(opt('--failures')):null});break;
    case 'collect':result=collect(root,run,phase,round);break;
    case 'close-empty-adjudication':result=closeEmptyAdjudication(root,run,phase,round,opt('--unit'),opt('--input-sha256'));break;
    case 'advance-impact':result=advanceImpact(root,run,phase,round);break;
    case 'certify':result=certify(root,run,phase,round);break;
    case 'judge':result=judge(root,run,round);break;
    case 'verify-wave':result=verifyWave(root,run);break;
    case 'check':result=checkWorkflow(root,run);break;
    default:throw Error('expected init|prepare|collect|close-empty-adjudication|advance-impact|certify|judge|verify-wave|check');
  }
  if(['record-operational-supplement','recover-operational-derived'].includes(args[0])){console.log(JSON.stringify(result));return;}
  if(args[0]==='close-empty-adjudication'){
    console.log(`step5-workflow close-empty-adjudication: mechanical zero-work closure for ${phase}/${round}/${result.unit}; no mathematical review`);return;
  }
  console.log(`step5-workflow ${args[0]}: ${result.items?.length??result.changed?.length??result.ids?.length??0} item(s), complete`);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{main();}catch(error){console.error(error.message);process.exitCode=1;}}
