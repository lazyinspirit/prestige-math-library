#!/usr/bin/env node
import { realpathSync as physicsRealpath } from 'node:fs';
// Round-based Step 5. Mathematical workers write evidence; only the controller
// collects it, judges a stable snapshot, and certifies a completed repair wave.
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, appendFileSync, statSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { freezeFrontier, validateFrontier, readLibraryItems, discoverDownstream, assessFatalThreshold } from './step5-rounds.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { publishedMaintenance, isPublishedMaintenance } from './step5-published-maintenance.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { currentHashesMany } from './step5-terminal-resolution.mjs';
import { MODELS } from './models.mjs';
import { gateDiagnostics } from './step5-gate-diagnostics.mjs';
import { FATAL_TYPES } from './step5-adjudication-compat.mjs';
import { restatedIds, statementHash } from './step5-statement.mjs';
import { syncMaintenance, maintenanceStatus, prepareMaintenance, collectMaintenance } from './consumer-maintenance.mjs';
import { orderedItems, runPages } from './item-dependency-levels.mjs';
import { ownerRepairHandoffs, ownerHandoffPhase } from './step5-owner-repair-handoffs.mjs';
import { ownerFormatRepair } from './step5-owner-format-repair.mjs';
const CERTIFICATION_TRANSITION_URL=new URL('./step5-certification-transition.mjs',import.meta.url),CERTIFICATION_TRANSITION_STAT=statSync(CERTIFICATION_TRANSITION_URL);
const {certificationEvidenceTransition}=await import(CERTIFICATION_TRANSITION_URL.href+'?v='+CERTIFICATION_TRANSITION_STAT.mtimeMs+':'+CERTIFICATION_TRANSITION_STAT.size);
const HISTORICAL_MANIFEST_URL=new URL('./step5-historical-manifest.mjs',import.meta.url),HISTORICAL_MANIFEST_STAT=statSync(HISTORICAL_MANIFEST_URL);
const {historicalManifestEvidence,validateCurrentHistoricalManifestGate}=await import(HISTORICAL_MANIFEST_URL.href+'?v='+HISTORICAL_MANIFEST_STAT.mtimeMs+':'+HISTORICAL_MANIFEST_STAT.size);
// The live controller may have loaded an earlier helper during owner review.
const INHERITED_REPAIR_URL=new URL('./step5-inherited-repair.mjs',import.meta.url);
const INHERITED_REPAIR_STAT=statSync(INHERITED_REPAIR_URL);
const { correctionPhase, correctionProgressPath, correctionRequest, assertCorrectionDrained, correctionAdoption } = await import(
  INHERITED_REPAIR_URL.href+'?v='+INHERITED_REPAIR_STAT.mtimeMs+':'+INHERITED_REPAIR_STAT.size
);

// Resolve the current routing helper even in a hot-loaded controller.
const INVENTORY_URL=new URL('./step5-downstream-inventory.mjs',import.meta.url);
const INVENTORY_STAT=statSync(INVENTORY_URL);
const { ownerDownstreamInventory }=await import(INVENTORY_URL.href+'?v='+INVENTORY_STAT.mtimeMs+':'+INVENTORY_STAT.size);

const SCIENTIFIC_REPAIR_URL=new URL('./step5-scientific-repair.mjs',import.meta.url);
const SCIENTIFIC_REPAIR_STAT=statSync(SCIENTIFIC_REPAIR_URL);
const { ownerScientificRepair, scientificRepairCompletion }=await import(
  SCIENTIFIC_REPAIR_URL.href+'?v='+SCIENTIFIC_REPAIR_STAT.mtimeMs+':'+SCIENTIFIC_REPAIR_STAT.size
);

const ADJUDICATION_SCIENCE_URL=new URL('./step5-adjudication-scientific-repair.mjs',import.meta.url);
const ADJUDICATION_SCIENCE_STAT=statSync(ADJUDICATION_SCIENCE_URL);
const { scientificCorrectionPhase, scientificCorrectionProgressPath, scientificCorrectionRequest,
  assertScientificCorrectionDrained, scientificCorrectionCompletion }=await import(
  ADJUDICATION_SCIENCE_URL.href+'?v='+ADJUDICATION_SCIENCE_STAT.mtimeMs+':'+ADJUDICATION_SCIENCE_STAT.size);
const OWNER_FINDING_URL=new URL('./step5-owner-finding-queue.mjs',import.meta.url);
const OWNER_FINDING_STAT=statSync(OWNER_FINDING_URL);
const { ownerFindingRequest, ownerFindingCompletion }=await import(
  OWNER_FINDING_URL.href+'?v='+OWNER_FINDING_STAT.mtimeMs+':'+OWNER_FINDING_STAT.size);
const ownerFindingCollectionToken=Symbol('authenticated native owner finding collection');
const ownerFindingPhase=phase=>'owner-finding-correction-'+phase;
const ownerFindingProgressPath=(root,run,phase,round)=>join(workflowDir(root,run),ownerFindingPhase(phase)+'-'+round+'-progress.json');
const scientificValidationToken=Symbol('authenticated single-subject scientific correction');
const PAGE_CORRECTION_URL=new URL('./step5-owner-page-correction.mjs',import.meta.url);
const PAGE_CORRECTION_STAT=statSync(PAGE_CORRECTION_URL);
const { pageCorrectionPhase, pageCorrectionProgressPath, pageCorrectionRequest, pageCorrectionSources,
  pageCorrectionProtected, pageCorrectionConsumers, pageCorrectionReview, pageCorrectionCompletion, verifyPageCorrectionReplay }=await import(
  PAGE_CORRECTION_URL.href+'?v='+PAGE_CORRECTION_STAT.mtimeMs+':'+PAGE_CORRECTION_STAT.size);
const REVIEW_CORRECTION_URL=new URL('./step5-owner-review-correction.mjs',import.meta.url);
const REVIEW_CORRECTION_STAT=statSync(REVIEW_CORRECTION_URL);
const {reviewCorrectionPhase,reviewCorrectionProgressPath,reviewCorrectionRequest,reviewCorrectionSources,
  reviewCorrectionProtected,reviewCorrectionCompletion,verifyReviewCorrectionReplay}=await import(
  REVIEW_CORRECTION_URL.href+'?v='+REVIEW_CORRECTION_STAT.mtimeMs+':'+REVIEW_CORRECTION_STAT.size);

export const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const lines = path => existsSync(path) ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
export const workflowDir = (root, run) => join(root, 'research', `${run}-step5-v2`);
export const packPath = (root, run, phase, round) => join(workflowDir(root, run), `${phase}-${round}.json`);
const atomic = (path, value) => { mkdirSync(resolve(path, '..'), {recursive:true}); const tmp = `${path}.${process.pid}.tmp`; writeFileSync(tmp, JSON.stringify(value,null,2)+'\n'); renameSync(tmp,path); };
const frozen = (path, value) => { if (existsSync(path)) { if (JSON.stringify(read(path)) !== JSON.stringify(value)) throw Error(`immutable evidence conflict: ${path}`); } else atomic(path,value); };
const key = row => `${row.id}\0${row.model}\0${row.context_sha256}`;
const hashes = (root,items=readLibraryItems(root)) => Object.fromEntries(items.map(row => [row.id,itemHashGuard(readFileSync(join(root,'items',`${row.id}.md`),'utf8'))]));
const statementHashes = root => Object.fromEntries(readLibraryItems(root).map(row => [row.id,row.statement_sha256]));
const diff = (a,b) => [...new Set([...Object.keys(a),...Object.keys(b)])].filter(id=>a[id]!==b[id]).sort();
const evidenceText = row => typeof row.reason === 'string' && row.reason.trim().length >= 40 && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url=>/^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const requireValue=(condition,message)=>{if(!condition)throw Error(message);};
// Step-4 judges and Step-5 workers are independent lanes. Retain historical
// identities while following the hash-bound native Sol 6.1 worker handoff.
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
      &&worker.model===MODELS.sol61.id&&worker.provider_effort==='high')return true;
  }
  return false;
}
const verifyEvidence=evidence=>{for(const [p,hash]of Object.entries(evidence??{}))requireValue(existsSync(p)&&createHash('sha256').update(readFileSync(p)).digest('hex')===hash,`Step 5 evidence changed: ${p}`);};
// Only immutable collection/certification history may resolve this one typed
// native manifest transition. Intake and ordinary scientific evidence stay strict.
const verifyHistoricalEvidence=(root,run,evidence)=>{
  const binding=historicalManifestEvidence(root,run,evidence);verifyEvidence(binding.evidence);return binding;
};
const rawHashes=root=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.sha256]));
const creationId=/^(?:alg|def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
function gateFrontier(root,run) {
  const path=join(workflowDir(root,run),'frontier.json');
  const frontier=existsSync(path)?read(path):initialize(root,run);
  validateFrontier(frontier);
  requireValue(frontier.run===run,'wrong run frontier');
  return new Set(frontier.ids.filter(id => !isPublishedItem(root, id)));
}
function impactTargets(root,run,phase,items,seeds,discovered=[]) {
  const frontier=gateFrontier(root,run),roots=[...new Set(seeds)];
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
function libraryIdentity(root) {
  const items=readLibraryItems(root),ids=new Set(items.map(row=>row.id)),aliases=new Map();
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
export function reviewContextHashes(root,ids) {
  const items=readLibraryItems(root),current=hashes(root),hash=dependencyReviewHasher(items,current);
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
  frozen(join(dir,'baseline.json'),hashes(root));
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
    if(isPublishedItem(root,id))continue;
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
  const identity=libraryIdentity(root);
  const pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',frontier_ids:frontier.ids,run,phase,round,judge_model:activeModel,units,assignments,dependency_levels:dependencyLevels,before:hashes(root),before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),rejected,input_evidence:{[judgeInput]:digest(readFileSync(judgeInput,'utf8'))}};
  frozen(path,pack); writeTasks(root,pack,'adjudicate'); return pack;
}

function writeTasks(root,pack,mode) {
  for(const unit of pack.units) {
    const report=workerReport(root,pack.run,pack.phase,pack.round,unit);
    const task=report.replace(/\.json$/,'.task.md');
    const gateInput=task.replace(/\.task\.md$/,'.gate-diagnostics.json');
    if(pack.gateRoutingVersion===1)frozen(gateInput,(pack.gateAssignments??{})[unit]??[]);
    const formatInput=task.replace(/\.task\.md$/,'.format-diagnostics.json');
    if(pack.format_repair)frozen(formatInput,pack.failures.filter(row=>pack.assignments[unit].includes(row.item_id)));
    if(existsSync(task)) continue;
    const assigned=pack.assignments[unit];
    const batchDigest=join(root,'research',`${pack.run}-batch-${unit}-step5-context.json`);
    const entries=[`# Step 5 ${mode}: ${pack.phase}, round ${pack.round}, unit ${unit}`,
      `Read briefs/step5-${mode==='adjudicate'?'adjudicator':'owner-repair'}.md.`,
      `Frozen inputs: ${packPath(root,pack.run,pack.phase,pack.round)}.`,
      mode==='adjudicate'&&existsSync(batchDigest)
        ? `Read this batch's rejection-blind Step-4 review digest first: ${batchDigest}. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.` : '',
      `Write only your assigned frontier item files, their necessary owning contracts/metadata, and ${report}.`,
      'Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.',
      'SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.',
      pack.format_repair?'This mechanical formatting continuation permits no new items or changes to claims, proof arguments, public interfaces, physical scope or empirical qualifications.':pack.phase==='gate'||pack.basePhase==='gate'?'Step 5.9 permits no new items.':'You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.',
      'Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.',
      mode==='adjudicate'
        ? 'Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.'
        : 'Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.',
      'Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.',
      'Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.',
      mode==='adjudicate' ? 'Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.' :
        'Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.',
      `Return JSON {run:"${pack.run}",phase:"${pack.phase}",round:${pack.round},unit:"${unit}",input_sha256:"${digest(pack)}",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.`,
      `Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run ${pack.run} --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.`,
      mode==='adjudicate' ? 'The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.' : '',
      mode==='adjudicate' ? `Assigned item order: ${[...new Set(assigned.map(row=>row.id))].map(id=>`${pack.dependency_levels?.[id]??'?'}:${id}`).join(', ')||'(none)'}.` : '',
      mode==='adjudicate' ? 'Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.' :
        'All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.',
      pack.format_repair ? `ROOT AUTHORIZATION: repair the actual canonical-phase formatting failures for your assigned items mechanically. Read ${formatInput} for the exact hash-bound precheck results and proposals. Read the root request ${pack.format_repair.request.path} and its hash-bound proposal/diagnosis files; locate your item rows, individual proposed files, unapplied patches and metadata mappings. These are proposals, not applied repairs or reviews. Preserve every proof argument and public claim/interface; do not replace a proof wholesale from precheck output. Make only the necessary phase/step labels, matching cross-references and owning proof-contract derivation-ID changes. Reconcile only your assigned owning contracts under the shared metadata lock. Run scoped normative precheck (must pass without a proposed repair), proof-layout and applicable contract validators; record genuine command/results evidence in your report. Perform and return your own current native reviews after the repair, preserving existing reports and hashes. This is pre-gate formatting repair, not a gate finding, gate waiver, certification, new-item authorization or judge-budget override.` : '',
      pack.ledger_updates?.length ? `Adjudicator ledger proposals requiring reconciliation:\n${JSON.stringify(pack.ledger_updates,null,2)}` : '',
      'For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.',
      'Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.',
      pack.gateRoutingVersion===1
        ? `Assigned input: read assignments["${unit}"] from the frozen pack above (${assigned.length} item(s)). Do not dump the whole pack or the entire library into context. Read your assignment array and the needed item files in bounded chunks.`
        : `Assigned input:\n${JSON.stringify(assigned,null,2)}`,
      pack.gateRoutingVersion===1
        ? `Gate diagnostics: read ${gateInput}. This file contains your diagnostic indices, scoped subject IDs and complete raw failure outputs. Examine every assigned diagnostic in bounded chunks, filtering item diagnostics to its subjects list; passing inventories and cited supplier names are not repair authority. Each item has exactly one owner. For a shared diagnostic, resolve only your listed subjects, not another lane's items. Global/owner-held diagnostic components belong only to the designated owner; reconcile shared metadata under the lock and report operator-only work honestly. Record gate_resolutions for every assigned index, stating the actual scope resolved. A resolution does not certify or waive the gate. Full diagnostics remain preserved on disk; never ignore a failure because its output is large. Further downstream work is scheduled only after public-interface changes, including physical scope and empirical qualifications, not proof-only repairs or merely named suppliers.`
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

export function validateReports(pack,reports,now,{root=null,scientificCorrection=null,ownerFindingCorrection=null,publishedLocalMaintenance=null}={}) {
  const childReview=id=>ownerFindingCorrection?.token===ownerFindingCollectionToken
    ?ownerFindingCorrection.reviews.find(row=>row.id===id):null;
  const corrected=id=>(scientificCorrection?.token===scientificValidationToken&&scientificCorrection.subject===id)||!!childReview(id);
  const errors=[],decisions=[],reviews=[],createdItems=[],creatorById=new Map();
  for(const unit of pack.units) {
    const report=reports.find(r=>String(r.unit)===unit);
    if(!report||report.run!==pack.run||report.phase!==pack.phase||report.round!==pack.round||report.input_sha256!==digest(pack)) { errors.push(`missing or mismatched report ${unit}`);continue; }
    if(report.completion==='mechanical-zero-work'){
      try{assertEmptyAdjudicationReport(pack,unit,report);}catch(error){errors.push(error.message);continue;}
    }
    if(!Array.isArray(report.reviews)||!Array.isArray(report.decisions)||!Array.isArray(report.created_items)||!Array.isArray(report.downstream)){errors.push(`malformed report arrays ${unit}`);continue;}
    const assigned=new Set(pack.assignments[unit].map(r=>typeof r==='string'?r:r.id)),creations=new Set();
    for(const row of report.created_items){
      if(pack.format_repair)errors.push(`formatting continuation cannot author item ${row?.id}`);
      if(pack.phase==='gate'||pack.basePhase==='gate')errors.push(`Step 5.9 cannot author out-of-frontier item ${row?.id}`);
      if(!row||!creationId.test(row.id??'')||creations.has(row.id)||creatorById.has(row.id)||pack.before[row.id]
        ||Object.hasOwn(pack.before_aliases??{},row.id)||!evidenceText(row)||!Array.isArray(row.consumers)||!row.consumers.length
        ||row.consumers.some(id=>typeof id!=='string')||!pack.home_pages?.[row.batch]?.includes(row.home_page)
        ||(pack.rejected&&String(row.batch)!==unit))errors.push(`invalid created item ${unit}/${row?.id}`);
      creations.add(row.id);creatorById.set(row.id,{unit,row,assigned,report});createdItems.push(row);
    }
    const ids=new Set([...assigned,...creations]),seen=new Set();
    for(const row of report.reviews??[]) {
      const dispositions=creations.has(row.id)?['authored']:['repaired','unaffected'];
      if(!ids.has(row.id)||seen.has(row.id)||!evidenceText(row)||!dispositions.includes(row.disposition)||row.post_sha256!==now[row.id]||!/^[a-f0-9]{64}$/.test(row.review_context_sha256??'')) errors.push(`invalid review ${unit}/${row.id}`);
      seen.add(row.id);reviews.push(row);
    }
    for(const id of ids)if(!seen.has(id))errors.push(`missing review ${unit}/${id}`);
    const expected=new Map((pack.rejected?pack.assignments[unit]:[]).map(row=>[key(row),row])),decided=new Set();
    for(const row of report.decisions??[]) {
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
  const changed=diff(pack.before,now);
  if(pack.format_repair&&root){
    const statements=statementHashes(root);
    for(const id of diff(pack.before_statements,statements))errors.push(`formatting continuation changed public interface ${id}`);
  }
  for(const id of changed) {
    // Authentic local published receipts are a separate policy state. Ordinary
    // draft repairs retain their exact assigned review and decision checks.
    if(isPublishedMaintenance(publishedLocalMaintenance)&&publishedLocalMaintenance.guards[id]===now[id])continue;
    if(pack.repair_scope==='frontier'&&!pack.frontier_ids?.includes(id)&&pack.before[id])errors.push(`out-of-frontier consumer cannot be repaired by Step 5: ${id}`);
    const created=creatorById.get(id),review=childReview(id)??reviews.find(r=>r.id===id&&r.disposition===(created?'authored':'repaired'));
    if(!now[id]||!review||review.post_sha256!==now[id]||(!created&&!pack.before[id]))errors.push(`unlicensed or unreviewed change ${id}`);
    if(pack.rejected&&!created&&!corrected(id)&&!decisions.some(r=>r.id===id&&['confirmed_fatal','confirmed_nonfatal'].includes(r.outcome)))errors.push(`change without confirmed adjudication ${id}`);
  }
  for(const id of Object.keys(pack.before))if(!now[id])errors.push(`unlicensed deletion ${id}`);
  for(const id of creatorById.keys())if(!changed.includes(id))errors.push(`claimed creation without new item ${id}`);
  for(const row of decisions)if(['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)&&!changed.includes(row.id))errors.push(`confirmed defect not repaired ${row.id}`);
  for(const row of reviews)if(['repaired','authored'].includes(row.disposition)&&!changed.includes(row.id)&&!corrected(row.id))errors.push(`claimed repair or authorship without change ${row.id}`);
  if(createdItems.length&&root){
    try{
      const identity=libraryIdentity(root),itemById=new Map(identity.items.map(value=>[value.id,value]));
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

// The original assignment did not license a false-positive edit. Only a
// separately completed native adoption can reconcile that historical violation.
export function adjudicationCorrectionWork(root,run,phase,round) {
  const path=correctionProgressPath(workflowDir(root,run),phase,round);
  return [...(existsSync(path)?[correctionPhase(phase)+':1']:[]),
    ...(existsSync(scientificCorrectionProgressPath(workflowDir(root,run),phase,round))?[scientificCorrectionPhase(phase)+':1']:[]),
    ...(existsSync(ownerFindingProgressPath(root,run,phase,round))?['1','2','3'].map(unit=>ownerFindingPhase(phase)+':'+unit):[]),
    ...(phase==='initial'&&existsSync(pageCorrectionProgressPath(root,run,round))?[pageCorrectionPhase+':1']:[]),
    ...(phase==='initial'&&round===1&&existsSync(reviewCorrectionProgressPath(root,run))?[reviewCorrectionPhase+':1']:[])];
}

function reviewCorrectionContext(root,run,phase,round){
  const context=reviewCorrectionRequest(root,run,phase,round);if(!context)return null;
  const pack=readPack(root,run,'initial',1),ownerPack=packPath(root,run,'owner-finding-correction-initial',1);
  const historical=existsSync(ownerPack)?read(ownerPack).before:hashes(root);
  const reports=pack.units.map(unit=>read(workerReport(root,run,'initial',1,unit)));
  const errors=validateReports(pack,reports,historical,{root}).errors;
  requireValue(errors.length===1&&errors[0]==='invalid review '+context.payload.original_unit+'/'+context.payload.subject,
    'review correction must match the sole genuine original historical validation failure');
  return context;
}
function advanceReviewCorrection(root,run,phase,round){
  const context=reviewCorrectionContext(root,run,phase,round);if(!context)return null;
  const path=reviewCorrectionProgressPath(root,run),request=context.payload;
  if(existsSync(path)){
    const prior=read(path);requireValue(prior.request.path===context.request.path&&prior.request.sha256===context.request.sha256,'read-only review authority changed');
    verifyEvidence(prior.evidence);
    const dispatch=join(root,'research',run+'-dispatch','alpha-repair-'+workerLabel(reviewCorrectionPhase,1,'1')+'.result.json');
    if(!existsSync(dispatch)||read(dispatch).ok!==true)return prior;
    return {...prior,completion:reviewCorrectionCompletion(root,run,context,reviewContextHashes(root,[request.subject])[request.subject])};
  }
  const pack={version:1,run,phase:reviewCorrectionPhase,round:1,unit:'1',repair_scope:'read-only-one-malformed-review',
    request:context.request,payload:request,before_sources:reviewCorrectionSources(root),before_protected:reviewCorrectionProtected(root,run)};
  const packFile=packPath(root,run,reviewCorrectionPhase,1),report=workerReport(root,run,reviewCorrectionPhase,1,'1'),task=report.replace(/\.json$/,'.task.md');
  const text=[
    '# Native read-only correction of one malformed review stamp',
    'Read CLAUDE.md, SCHEMA.md, WORKFLOW.md and the general role brief. This exact read-only assignment replaces ordinary item/page authoring authority.',
    'Frozen inputs: '+packFile+'. Root request: '+context.request.path+'. Only review subject: '+request.subject+'.',
    'NO source or metadata permission: do not edit items, pages, contracts, manifests, ledgers, source evidence, original reports/tasks/tuples, packs, code or state. Write only '+report+'.',
    'The source is genuinely unchanged. Its original false-positive tuple and original malformed 65-hex review_context_sha256 remain immutable history. Do not truncate, guess, or reuse a stale digest. Actually review the exact current carrier and its affected supplier context yourself. Reuse genuine unaffected prior reasoning only with attribution; report uncertainty rather than acceptance if the source or context is unsound.',
    'After completing the actual current review, run node tools/physics-support/step5-workflow.mjs review-contexts --run '+run+' --items '+request.subject+' and copy both genuine hashes into one disposition:unaffected review. No ordinary decisions, source repair, prerequisite creation or canonical ledger closure.',
    'Return JSON {version:1,run:"'+run+'",phase:"'+reviewCorrectionPhase+'",round:1,unit:"1",input_sha256:"'+digest(pack)+'",decisions:[],reviews:[{id:"'+request.subject+'",disposition:"unaffected",post_sha256,review_context_sha256,reason,uncertain:false,source_urls:[],familiar:true}],created_items:[],downstream:[],root_finding_resolutions:[{defect_id:"'+request.runtime_finding.defect_id+'",status:"fixed",subjects:["'+request.subject+'"],reason,uncertain:false,source_urls:[],familiar:true}],supporting_evidence:{}}.',
    'Every reason needs at least 40 characters of concrete actual review evidence. Be honest about sources/familiarity and uncertainty. Bind run-local research evidence actually used by raw SHA256. No tests, judges, certificates, source checks requiring edits, gates or claims of independent acceptance.', ''
  ].join('\n');
  frozen(packFile,pack);if(existsSync(task))requireValue(readFileSync(task,'utf8')===text,'immutable read-only review task conflict');else writeFileSync(task,text,{flag:'wx'});
  const progress={version:1,run,phase,round,correction_phase:reviewCorrectionPhase,request:context.request,
    evidence:{...context.evidence,[packFile]:digest(readFileSync(packFile,'utf8')),[task]:digest(text)}};
  frozen(path,progress);return progress;
}

function advancePageCorrection(root,run,phase,round) {
  if(phase!=='initial')return null;
  const progressPath=pageCorrectionProgressPath(root,run,round);
  if(existsSync(progressPath)){
    const prior=read(progressPath),pointer=read(join(workflowDir(root,run),'owner-page-correction-request.json'));
    requireValue(prior.run===run&&prior.phase===phase&&prior.round===round
      &&resolve(root,pointer.request.path)===prior.request.path&&pointer.request.sha256===prior.request.sha256,
      'frozen page correction authority changed');
    verifyEvidence(prior.evidence);
    const dispatch=join(root,'research',run+'-dispatch','alpha-repair-'+workerLabel(pageCorrectionPhase,round,'1')+'.result.json');
    if(!existsSync(dispatch)||read(dispatch).ok!==true)return prior;
    return {...prior,completion:pageCorrectionCompletion(root,run,round,pageCorrectionRequest(root,run,phase,round,{continuation:true}))};
  }
  const context=pageCorrectionRequest(root,run,phase,round);
  if(!context)return null;
  const request=context.payload,packFile=packPath(root,run,pageCorrectionPhase,round);
  const pack={version:1,run,phase:pageCorrectionPhase,round,unit:'1',repair_scope:'one-referred-draft-page-prose',
    subject:request.subject,page_path:request.page_path,request:context.request,payload:request,
    expected_page_sha256:context.expected_page_sha256,before_sources:pageCorrectionSources(root),
    before_protected:pageCorrectionProtected(root,run),consumers:pageCorrectionConsumers(root,request.subject)};
  const report=workerReport(root,run,pageCorrectionPhase,round,'1'),task=report.replace(/\.json$/,'.task.md');
  const text=[
    '# Native initial page-only correction',
    'Read physics CLAUDE.md, SCHEMA.md and WORKFLOW.md. This exact generated page-only assignment replaces the ordinary frontier item-repair scope in the general role brief.',
    'Frozen inputs: '+packFile+'. Immutable Root request: '+context.request.path+'.',
    'ONLY source permission: '+request.page_path+'. Correct only the single genuine before-body excerpt in the original scientific owner proposal, after checking its countercase, intended qualified claim and actual supplier uses. The candidate is unapplied evidence; reject it and report uncertainty if unsound. Preserve all other page bytes, frontmatter, inventory and prerequisites.',
    'No item, other page, contract, manifest, ledger, source evidence, original report/task/tuple, frozen pack, code or state edits. No prerequisite creation, ordinary item decisions/reviews, judges, certificates, gates or canonical ledger closure.',
    'Use the guarded shared metadata write-lock command from the role brief for the one page edit; reread the exact page inside the short guarded command. Do not hold the lock while reading science or reviewing.',
    'Read the completed native page_uses referral, exact batch Step4 digest, and original scientific owner proposal plus its bound candidate/patch/preimage. Credit prior focused science honestly; review the actual current page and precise supplier hypotheses yourself. Preserve the richest sound claim and all conditional proof statuses. Do not repeat whole-proof audits.',
    'Read each exact consumer in pack.consumers and return an unaffected consumer review with its actual use checked. If any consumer requires an edit, report uncertainty and stop; this one-page permission cannot repair that consumer.',
    'After the edit and actual page/consumer reviews, run node tools/physics-support/step5-workflow.mjs page-review-context --run '+run+' --round '+round+' and copy its exact id/path/post_sha256/review_context_sha256 fields into page_review. Never refresh a stale review without examining the changed context.',
    'Run scoped page rendercheck and appropriate page metadata checks. No item proof-layout is needed because all items must remain byte-for-byte unchanged. Record genuine commands/results in repair_notes, not invented evidence paths.',
    'Return JSON {version:1,run:"'+run+'",phase:"'+pageCorrectionPhase+'",round:'+round+',unit:"1",input_sha256:"'+digest(pack)+'",decisions:[],reviews:[],created_items:[],downstream:[],page_review:{id:"'+request.subject+'",path:"'+request.page_path+'",disposition:"repaired",post_sha256,review_context_sha256,reason,uncertain:false,source_urls:[],familiar:true},consumer_reviews:[{id,path,kind,disposition:"unaffected",reason,uncertain:false,source_urls:[],familiar:true}],root_finding_resolutions:[{defect_id:"'+request.root_finding.defect_id+'",status:"fixed",subjects:["'+request.subject+'"],reason,uncertain:false,source_urls:[],familiar:true}],supporting_evidence:{},repair_notes:{}}.',
    'Every reason is at least 40 characters of concrete actual checks. Familiarity/source evidence must be honest; unresolved uncertainty blocks collection. Bind extra run-local research evidence actually read by raw SHA256 in supporting_evidence. Do not claim independent acceptance, certification or a gate waiver.',
    'Write only the exact page and '+report+'.', ''
  ].join('\n');
  frozen(packFile,pack);
  if(existsSync(task))requireValue(readFileSync(task,'utf8')===text,'immutable page-only task conflict');else writeFileSync(task,text,{flag:'wx'});
  const progress={version:1,run,phase,round,correction_phase:pageCorrectionPhase,request:context.request,subject:request.subject,
    evidence:{...context.evidence,[packFile]:digest(readFileSync(packFile,'utf8')),[task]:digest(text)}};
  frozen(progressPath,progress);return progress;
}

function inheritedContext(root,run,phase,round) {
  if(!['initial','repeat'].includes(phase))return null;
  const dir=workflowDir(root,run);
  if(!existsSync(join(dir,'owner-inherited-repair-request.json')))return null;
  const pack=readPack(root,run,phase,round),reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const current=hashes(root),items=readLibraryItems(root);
  return correctionRequest(root,run,phase,round,{pack,reports,current,items,dir,
    statements:Object.fromEntries(items.map(row=>[row.id,row.statement_sha256])),
    errors:validateReports(pack,reports,current,{root}).errors});
}

function scientificAdjudicationContext(root,run,phase,round) {
  if(phase!=='repeat')return null;
  const dir=workflowDir(root,run);
  if(!existsSync(join(dir,'owner-adjudication-scientific-repair-request.json')))return null;
  const pack=readPack(root,run,phase,round),items=readLibraryItems(root),current=hashes(root,items),contexts=reviewContexts(items);
  const currentReviewCallback=id=>({post_sha256:current[id],review_context_sha256:contexts.hash(id,current)});
  return scientificCorrectionRequest(root,run,phase,round,{pack,
    reports:pack.units.map(unit=>read(workerReport(root,run,phase,round,unit))),
    current,statements:Object.fromEntries(items.map(row=>[row.id,row.statement_sha256])),items,dir,currentReviewCallback,
    ...(existsSync(scientificCorrectionProgressPath(dir,phase,round))
      &&existsSync(workerReport(root,run,scientificCorrectionPhase(phase),round,'1'))
      ?{allowCompletedContinuation:true,currentReview:reviewContextHashes(root,
        [read(scientificCorrectionProgressPath(dir,phase,round)).subject])[
          read(scientificCorrectionProgressPath(dir,phase,round)).subject]}:{})});
}

function advanceScientificAdjudication(root,run,phase,round) {
  const context=scientificAdjudicationContext(root,run,phase,round);
  if(!context)return null;
  assertScientificCorrectionDrained(root,context);
  const dir=workflowDir(root,run),path=scientificCorrectionProgressPath(dir,phase,round);
  if(existsSync(path)){
    const prior=read(path);
    requireValue(prior.request.path===context.request.path&&prior.request.sha256===context.request.sha256,'scientific correction request changed');
    verifyEvidence(prior.evidence);return prior;
  }
  const originalPack=readPack(root,run,phase,round),originalReports=originalPack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const originalValidation=validateReports(originalPack,originalReports,hashes(root),{root});
  requireValue(!originalValidation.errors.length,originalValidation.errors.join('\n'));
  const identity=libraryIdentity(root),request=context.payload,correction=scientificCorrectionPhase(phase);
  const pack={version:2,run,phase:correction,round,repair_scope:'frontier',
    frontier_ids:[...gateFrontier(root,run)],units:['1'],assignments:{'1':[request.subject]},
    before:hashes(root),before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),
    home_pages:manifestHomes(root,run),seeds:[],impacts:[],cycles:[],failures:null,gateAssignments:{},
    ledger_updates:[],input_evidence:context.evidence};
  frozen(packPath(root,run,correction,round),pack);writeTasks(root,pack,'repair');
  const task=workerReport(root,run,correction,round,'1').replace(/\.json$/,'.task.md');
  writeFileSync(task,readFileSync(task,'utf8')+[
    '', '# Native single-subject scientific scope restoration',
    'Read root request '+context.request.path+' and its genuine bound original-owner evidence and proposed restoration.',
    'Only items/'+request.subject+'.md is assigned for source editing. No other Source, prerequisite creation, shared metadata, original report, original tuple, original task or pack edits are authorized.',
    'Restore the richest sound generic GR tetrad scope while retaining precise native typing. Future-directed must remain an additional qualification; only that subclass agrees with SR. Preserve all other sound clauses. Check the exact affected uses using original-owner evidence; do not repeat unaffected proof audits.',
    'Actually repair the current narrowed Source, obtain a fresh review-context immediately after review, and return ordinary decisions:[], created_items:[], one genuine repaired review, downstream and exact downstream_uses.',
    'Additionally return scientific_correction_adjudications:[{id,model,context_sha256,outcome,defect_type,reason,uncertain:false,source_urls:[],familiar:true}] using ONLY the exact frozen original tuple identity in the request. This is a separately attributed fresh effective decision; preserve the original decision/report unchanged. Restoring the original rich content requires effective outcome false_positive.',
    'Return root_finding_resolutions:[{defect_id:"'+request.root_finding.defect_id+'",status:"fixed",subjects:["'+request.subject+'"],reason,uncertain:false,source_urls:[],familiar:true}]. This reports a native resolution and does not itself close the canonical ledger.',
    'Bind all scientific evidence actually used, including nested files, by exact raw SHA256 in supporting_evidence. Report real content checks. Do not run software tests or claim independent certification. Run required proof-layout on the explicit changed item.', ''
  ].join('\n'));
  const progress={version:1,run,phase,round,correction_phase:correction,request:context.request,
    subject:request.subject,evidence:{...context.evidence,
      [packPath(root,run,correction,round)]:digest(readFileSync(packPath(root,run,correction,round),'utf8')),
      [task]:digest(readFileSync(task,'utf8'))}};
  frozen(path,progress);return progress;
}

function ownerFindingContext(root,run,phase,round) {
  if(!['initial','repeat'].includes(phase))return null;
  const dir=workflowDir(root,run);
  if(!existsSync(join(dir,'owner-finding-queue-request.json')))return null;
  const items=readLibraryItems(root),progress=ownerFindingProgressPath(root,run,phase,round);
  const continuation=existsSync(progress)&&['1','2','3'].every(unit=>existsSync(workerReport(root,run,ownerFindingPhase(phase),round,unit)));
  const contexts=continuation?reviewContextHashes(root,read(progress).subjects):null;
  return ownerFindingRequest(root,run,phase,round,{items,current:hashes(root,items),
    statements:Object.fromEntries(items.map(row=>[row.id,row.statement_sha256])),dir,
    allowCompletedContinuation:continuation,currentReviewCallback:id=>contexts?.[id]});
}

function advanceOwnerFindingQueue(root,run,phase,round) {
  const context=ownerFindingContext(root,run,phase,round);
  if(!context)return null;
  const path=ownerFindingProgressPath(root,run,phase,round);
  if(existsSync(path)){
    const prior=read(path);
    requireValue(prior.request.path===context.request.path&&prior.request.sha256===context.request.sha256,'owner finding queue request changed');
    verifyEvidence(prior.evidence);return prior;
  }
  // Close the prior native scope correction on its genuine own snapshot before
  // another authorized writer changes other sources. This is no gate attempt.
  const scientificProgress=scientificCorrectionProgressPath(workflowDir(root,run),phase,round);
  if(existsSync(scientificProgress)){
    const prior=scientificAdjudicationContext(root,run,phase,round);
    requireValue(prior?.continuation,'scope correction has not genuinely completed');
    collect(root,run,scientificCorrectionPhase(phase),round,{correctionToken:scientificCollectionToken});
  }
  const identity=libraryIdentity(root),correction=ownerFindingPhase(phase);
  const pack={version:2,run,phase:correction,round,repair_scope:'frontier',frontier_ids:[...gateFrontier(root,run)],
    units:['1','2','3'],assignments:context.assignments,before:hashes(root),before_statements:statementHashes(root),
    before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds:[],impacts:[],cycles:[],
    failures:null,gateAssignments:{},ledger_updates:[],input_evidence:context.evidence,
    owner_finding_queue:{request:context.request,payload:context.payload}};
  frozen(packPath(root,run,correction,round),pack);writeTasks(root,pack,'repair');
  const evidence={...context.evidence,[packPath(root,run,correction,round)]:digest(readFileSync(packPath(root,run,correction,round),'utf8'))};
  for(const unit of pack.units){
    const task=workerReport(root,run,correction,round,unit).replace(/\.json$/,'.task.md');
    const entries=context.payload.entries.filter(row=>row.owner_lane===unit);
    writeFileSync(task,readFileSync(task,'utf8')+[
      '', '# Explicit canonical owner findings: native repair continuation',
      'Request: '+context.request.path+'. Assigned findings: '+entries.map(row=>row.root_finding.defect_id).join(', ')+'.',
      'Repair only assigned Source items and the exact necessary owning contract/metadata. No prerequisite creation, original report, original tuple, original task, frozen pack, baseline or workflow edits. Independent lanes preserve original scientific-owner grouping; work supplier before consumer within your lane.',
      'Read the actual completed native outcome and original scientific owner evidence/proposals for each entry. Preserve the richest sound scope and completed native improvements. Reuse existing unaffected proof evidence with attribution; no repeated whole-proof audits. Proposals are evidence to check, never automatic proof authority.',
      'Every entry requires a genuine minimal Source repair, fresh actual review-context and root_finding_resolutions row {defect_id,status:"fixed",subjects:[subject],reason,uncertain:false,source_urls:[],familiar:true}. Ordinary decisions:[] and created_items:[].',
      'For entries containing original_tuple, also return scientific_correction_adjudications with ONLY that exact frozen id/model/context_sha256 identity and fresh effective outcome/reason/evidence. Preserve the original false-positive outcome for a distinct newly referred defect; do not pretend the original rejection was valid. Keep every original report/decision immutable.',
      'Return genuine current repaired reviews, exact downstream affected uses and supporting_evidence raw hashes for all nested scientific evidence actually used. Explicitly repair only invalidated contract quotes and metadata under the shared write lock. Report all scoped content checks and proof-layout. No software tests, judges, certificates or claims of independent acceptance.', ''
    ].join('\n'));
    evidence[task]=digest(readFileSync(task,'utf8'));
  }
  const progress={version:1,run,phase,round,correction_phase:correction,request:context.request,
    subjects:context.subjects,assignments:context.assignments,evidence};
  frozen(path,progress);return progress;
}

export function advanceAdjudicationCorrection(root,run,phase,round) {
  // Pending writers retain their frozen authority. Full scientific current-
  // state authentication belongs at the drained completion join, not mid-edit.
  if(phase==='initial'&&(existsSync(pageCorrectionProgressPath(root,run,round))||round===1&&existsSync(reviewCorrectionProgressPath(root,run)))
    &&existsSync(join(workflowDir(root,run),'initial-'+round+'-collected.json'))){
    collect(root,run,phase,round);
    const progress=existsSync(pageCorrectionProgressPath(root,run,round))?pageCorrectionProgressPath(root,run,round):reviewCorrectionProgressPath(root,run);
    return {...read(progress),parent_collected:true};
  }
  const queueProgress=ownerFindingProgressPath(root,run,phase,round);
  if(existsSync(queueProgress)){
    const prior=read(queueProgress),pointer=read(join(workflowDir(root,run),'owner-finding-queue-request.json'));
    requireValue(prior.run===run&&prior.phase===phase&&prior.round===round
      &&resolve(root,pointer.request.path)===prior.request.path&&pointer.request.sha256===prior.request.sha256,
      'frozen owner finding queue authority changed');
    verifyEvidence(prior.evidence);
    const completed=['1','2','3'].every(unit=>{
      const path=join(root,'research',run+'-dispatch','alpha-repair-'+workerLabel(ownerFindingPhase(phase),round,unit)+'.result.json');
      return existsSync(path)&&read(path).ok===true;
    });
    if(completed){
      // The one-page writer starts only after genuine item correction
      // completion, before either correction can collect the parent.
      if(phase==='initial'&&existsSync(join(workflowDir(root,run),'owner-page-correction-request.json')))
        requireValue(ownerFindingContext(root,run,phase,round)?.continuation,'item corrections have not genuinely completed before page intake');
      const page=advancePageCorrection(root,run,phase,round);
      if(page&&!page.completion)return page;
      const review=advanceReviewCorrection(root,run,phase,round);
      if(review&&!review.completion)return review;
      collect(root,run,phase,round);
      return {...prior,parent_collected:true};
    }
    return prior;
  }
  const scientific=advanceScientificAdjudication(root,run,phase,round);
  if(scientific){
    const path=join(root,'research',run+'-dispatch','alpha-repair-'+workerLabel(scientificCorrectionPhase(phase),round,'1')+'.result.json');
    if(!existsSync(path)||read(path).ok!==true)return scientific;
  }
  const findings=advanceOwnerFindingQueue(root,run,phase,round);
  if(findings)return findings;
  if(scientific)return scientific;
  const page=advancePageCorrection(root,run,phase,round);
  if(page){
    if(!page.completion)return page;
    const review=advanceReviewCorrection(root,run,phase,round);
    if(review&&!review.completion)return review;
    collect(root,run,phase,round);return {...page,parent_collected:true};
  }
  const review=advanceReviewCorrection(root,run,phase,round);
  if(review){if(!review.completion)return review;collect(root,run,phase,round);return {...review,parent_collected:true};}
  const context=inheritedContext(root,run,phase,round);
  if(!context)return null;
  assertCorrectionDrained(root,context);
  const dir=workflowDir(root,run),path=correctionProgressPath(dir,phase,round);
  const correction=correctionPhase(phase),request=context.payload;
  if(existsSync(path)){
    const prior=read(path);
    requireValue(prior.request.path===context.request.path&&prior.request.sha256===context.request.sha256,'inherited correction request changed');
    verifyEvidence(prior.evidence);return prior;
  }
  const identity=libraryIdentity(root);
  const pack={version:2,run,phase:correction,round,repair_scope:'frontier',
    frontier_ids:[...gateFrontier(root,run)],units:['1'],assignments:{'1':[request.subject]},
    before:hashes(root),before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),
    home_pages:manifestHomes(root,run),seeds:[],impacts:[],cycles:[],failures:null,gateAssignments:{},
    ledger_updates:[],input_evidence:context.evidence};
  frozen(packPath(root,run,correction,round),pack);writeTasks(root,pack,'repair');
  const task=workerReport(root,run,correction,round,'1').replace(/\.json$/,'.task.md');
  const instructions=[
    '',
    '# Native inherited-defect correction review',
    context.violation,
    'Root request: '+context.request.path+'. Read its bound before/current carriers and scientific evidence.',
    'Only '+request.subject+' is assigned. Original confirmed supplier: '+request.supplier+'.',
    'READ AND ADOPT ONLY: do not edit source, original reports, frozen tuples, contracts or shared metadata. If a further repair is necessary, report uncertainty and stop adoption.',
    'Inspect the distinct inherited defect in the preserved before carrier, the exact delta, the confirmed supplier interface and actual consumer uses. Reuse genuine completed proof review only with attribution.',
    'Return ordinary decisions:[], created_items:[], and one reviews row with disposition:unaffected for the exact existing current carrier. Obtain fresh review-contexts after the current review.',
    'Also return inherited_adjudications:[{id,outcome:confirmed_fatal|confirmed_nonfatal,defect_type:logic,reason,uncertain:false,source_urls:[],familiar:true}]. This finding is separately attributed; omit model/context_sha256 and never invent an original judge tuple.',
    'Return inherited_adoptions:[{id,disposition:adopted,original_scope_violation:true,reason}]. Confirm no rejected false-positive claim was changed. Preserve the original instruction violation explicitly.',
    'Bind every additional scientific-review nested source, diff or prior receipt actually read in supporting_evidence using its exact raw SHA256. Reading the parent JSON does not authenticate those nested files.',
    'Record actual affected consumer uses and necessary referrals in downstream; do not close downstream defects. Do not claim a source repair or independent acceptance for adopting existing content.',
    ''
  ].join('\n');
  writeFileSync(task,readFileSync(task,'utf8')+instructions);
  const progress={version:1,run,phase,round,correction_phase:correction,request:context.request,
    subject:request.subject,violation:context.violation,evidence:context.evidence};
  frozen(path,progress);return progress;
}

// The correction receipt is collected only inside its authenticated parent.
const inheritedCollectionToken=Symbol('native inherited correction collection');
const scientificCollectionToken=Symbol('native scientific correction collection');
export function collect(root,run,phase,round,{deferImpactClosure=false,correctionToken=null}={}) {
  requireValue(phase!==pageCorrectionPhase,'page-only correction must be collected by its authenticated initial parent');
  requireValue(phase!==reviewCorrectionPhase,'read-only review correction must be collected by its authenticated initial parent');
  if(phase.startsWith('owner-finding-correction-'))requireValue(correctionToken===ownerFindingCollectionToken,
    'owner finding collection requires its authenticated native parent');
  if(phase.startsWith('scientific-correction-'))requireValue(correctionToken===scientificCollectionToken,
    'scientific correction collection requires its authenticated native parent');
  if(phase.startsWith('correction-'))requireValue(correctionToken===inheritedCollectionToken,
    'correction collection requires its authenticated native parent');
  const collectedPath=join(workflowDir(root,run),`${phase}-${round}-collected.json`);
  if(existsSync(collectedPath)){
    const prior=read(collectedPath);
    if(prior.external_owner_repairs?.length){
      requireValue(ownerHandoffPhase(phase),'external owner repairs require deferred impact collection');
      if(!deferImpactClosure)return verifyClosedOwnerCollection(root,run,phase,round,collectedPath,prior);
    }
    verifyHistoricalEvidence(root,run,prior.evidence);
    if(prior.published_local_repairs?.length)publishedMaintenance(root,run,readPack(root,run,phase,round),hashes(root),{replay:prior.published_local_repairs});
    if(phase==='initial'){verifyPageCorrectionReplay(root,run,round,prior);verifyReviewCorrectionReplay(root,run,prior);}
    syncMaintenance(root,run,prior.statement_events??[]);return prior;
  }
  const pack=readPack(root,run,phase,round);
  requireValue(pack.run===run&&pack.phase===phase&&pack.round===round,'collection pack identity mismatch');
  const reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const collectionItems=pack.scientific_repair?readLibraryItems(root):null;
  const current=hashes(root,collectionItems??undefined),reported={...current};
  const pageProgress=phase==='initial'?pageCorrectionProgressPath(root,run,round):null;
  const pageCompletion=pageProgress&&existsSync(pageProgress)
    ?pageCorrectionCompletion(root,run,round,pageCorrectionRequest(root,run,phase,round,{continuation:true})):null;
  if(phase==='initial'&&existsSync(join(workflowDir(root,run),'owner-page-correction-request.json')))
    requireValue(pageCompletion,'explicit page correction is pending native completion before parent collection');
  const reviewContext=phase==='initial'?reviewCorrectionContext(root,run,phase,round):null;
  const reviewCompletion=reviewContext&&existsSync(reviewCorrectionProgressPath(root,run))
    ?reviewCorrectionCompletion(root,run,reviewContext,reviewContextHashes(root,[reviewContext.payload.subject])[reviewContext.payload.subject]):null;
  if(reviewContext)requireValue(reviewCompletion,'explicit read-only review correction is pending native completion');
  const historicalReports=reviewCompletion?reports.map(report=>String(report.unit)!==reviewCompletion.original_unit?report:{...report,
    reviews:report.reviews.map(row=>row.id===reviewCompletion.subject?reviewCompletion.effective_review:row)}):reports;
  let external={repairs:[],evidence:{}};
  if(deferImpactClosure) {
    requireValue(!pack.rejected,'only owner waves can defer impact closure');
    // Archive the carriers workers actually reviewed. Later edits are queued
    // for another owner pass instead of invalidating already completed work.
    const assigned=new Set(Object.values(pack.assignments).flat());
    for(const row of reports.flatMap(report=>report.reviews??[]))if(assigned.has(row.id)&&/^[a-f0-9]{64}$/.test(row.post_sha256??''))reported[row.id]=row.post_sha256;
    if(ownerHandoffPhase(phase))external=ownerRepairHandoffs(root,workflowDir(root,run),pack,current);
    // Root licenses only the external author. The actual current carrier is
    // retained in receipt.post and must receive a fresh native owner review.
    for(const repair of external.repairs)reported[repair.id]=pack.before[repair.id];
  }
  let ownerCorrection=null,ownerCompletion=null,ownerContext=null;
  const ownerProgress=ownerFindingProgressPath(root,run,phase,round);
  const ownerPack=['initial','repeat'].includes(phase)&&existsSync(ownerProgress)
    ?readPack(root,run,ownerFindingPhase(phase),round):null;
  let scientificCorrection=null,scientificAdopted=null,scientificContext=null;
  let effectiveReports=historicalReports;
  const scientificProgress=scientificCorrectionProgressPath(workflowDir(root,run),phase,round);
  if(['initial','repeat'].includes(phase)&&existsSync(scientificProgress)){
    scientificContext=scientificAdjudicationContext(root,run,phase,round);
    const progress=read(scientificProgress),context=scientificContext;
    requireValue(context&&progress.request.path===context.request.path&&progress.request.sha256===context.request.sha256,
      'missing or stale scientific correction request');
    assertScientificCorrectionDrained(root,context);verifyEvidence(progress.evidence);
    const historical={...(ownerPack?.before??reported),[context.payload.subject]:context.payload.narrowed_content_sha256};
    const originalValidation=validateReports(pack,historicalReports,historical,{root});
    requireValue(!originalValidation.errors.length,originalValidation.errors.join('\n'));
    const childPhase=scientificCorrectionPhase(phase),child=read(workerReport(root,run,childPhase,round,'1'));
    scientificAdopted=scientificCorrectionCompletion(child,context.payload,current,
      reviewContextHashes(root,[context.payload.subject])[context.payload.subject]);
    scientificCorrection=collect(root,run,childPhase,round,{correctionToken:scientificCollectionToken});
    const subject=context.payload.subject,originalKey=key(context.payload.original_tuple);
    effectiveReports=historicalReports.map(report=>String(report.unit)!==context.payload.unit?report:{...report,
      decisions:report.decisions.map(row=>key(row)===originalKey?scientificAdopted.decision:row),
      reviews:report.reviews.map(row=>row.id===subject?scientificAdopted.review:row)});
  }
  if(ownerPack){
    ownerContext=ownerFindingContext(root,run,phase,round);
    const progress=read(ownerProgress);
    requireValue(ownerContext&&progress.request.path===ownerContext.request.path&&progress.request.sha256===ownerContext.request.sha256,
      'missing or stale owner finding queue request');
    verifyEvidence(progress.evidence);
    const childPhase=ownerFindingPhase(phase),childReports=ownerPack.units.map(unit=>read(workerReport(root,run,childPhase,round,unit)));
    const contexts=reviewContextHashes(root,ownerContext.subjects);
    ownerCompletion=ownerFindingCompletion(ownerPack,childReports,current,id=>contexts[id]);
    // The earlier native snapshot is genuine queue evidence, not a fabricated
    // current map. Every original report must validate before any projection.
    const historical={...ownerPack.before};
    if(scientificContext)historical[scientificContext.payload.subject]=scientificContext.payload.narrowed_content_sha256;
    const originals=validateReports(pack,historicalReports,historical,{root});
    requireValue(!originals.errors.length,originals.errors.join('\n'));
    ownerCorrection=collect(root,run,childPhase,round,{correctionToken:ownerFindingCollectionToken});
    const decisions=new Map(ownerCompletion.decisions.map(row=>[key(row),row]));
    const reviews=new Map(ownerCompletion.reviews.map(row=>[row.id,row]));
    effectiveReports=effectiveReports.map(report=>({...report,
      decisions:report.decisions.map(row=>decisions.get(key(row))??row),
      reviews:report.reviews.map(row=>reviews.get(row.id)??row)}));
  }
  const publishedLocalMaintenance=phase==='initial'&&round===1?publishedMaintenance(root,run,pack,current):null;
  const result=validateReports(pack,effectiveReports,reported,{root,publishedLocalMaintenance,
    scientificCorrection:scientificAdopted?{token:scientificValidationToken,subject:scientificAdopted.subject}:null,
    ownerFindingCorrection:ownerCompletion?{token:ownerFindingCollectionToken,reviews:ownerCompletion.reviews}:null});
  if(ownerCompletion){
    const assigned=new Set(result.reviews.map(row=>row.id));
    result.reviews.push(...ownerCompletion.reviews.filter(row=>!assigned.has(row.id)));
  }
  let correction=null,adopted=null;
  if(result.errors.length&&['initial','repeat'].includes(phase)){
    const progressPath=correctionProgressPath(workflowDir(root,run),phase,round);
    if(existsSync(progressPath)){
      const context=inheritedContext(root,run,phase,round),progress=read(progressPath);
      requireValue(context&&progress.request.path===context.request.path&&progress.request.sha256===context.request.sha256,'missing or stale native correction request');
      assertCorrectionDrained(root,context);verifyEvidence(progress.evidence);
      const correctionReport=read(workerReport(root,run,correctionPhase(phase),round,'1'));
      adopted=correctionAdoption(correctionReport,context.payload,current,
        reviewContextHashes(root,[context.payload.subject])[context.payload.subject]);
      correction=collect(root,run,correctionPhase(phase),round,{correctionToken:inheritedCollectionToken});
      // A separately completed native adoption supplies new authority now.
      // The original false-positive tuple and scope violation remain evidence.
      result.errors=[];
      result.reviews=result.reviews.map(row=>row.id===adopted.review.id?adopted.review:row);
    }
  }
  if(result.errors.length)throw Error(result.errors.join('\n'));
  if(pack.owner_finding_queue){
    const contexts=reviewContextHashes(root,pack.owner_finding_queue.payload.entries.map(row=>row.subject));
    ownerCompletion=ownerFindingCompletion(pack,reports,current,id=>contexts[id]);
  }
  const scientificContexts=collectionItems?reviewContexts(collectionItems):null;
  const scientificCompletion=scientificRepairCompletion(pack,reports,current,
    row=>scientificContexts.matches(row,current));
  const evidence={...(pack.input_evidence??{}),...external.evidence,...(publishedLocalMaintenance?.evidence??{}),[packPath(root,run,phase,round)]:digest(readFileSync(packPath(root,run,phase,round),'utf8'))};
  verifyEvidence(evidence);
  const creationAuthors=new Map();
  for(const unit of pack.units) {
    const p=workerReport(root,run,phase,round,unit); evidence[p]=digest(readFileSync(p,'utf8'));
    if(pack.format_repair){
      const diagnosticPath=p.replace(/\.json$/,'.format-diagnostics.json');
      requireValue(existsSync(diagnosticPath)&&JSON.stringify(read(diagnosticPath))===JSON.stringify(pack.failures.filter(row=>pack.assignments[unit].includes(row.item_id))),`format diagnostic input changed: ${unit}`);
      evidence[diagnosticPath]=digest(readFileSync(diagnosticPath,'utf8'));
    }
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
    verifyEvidence(supporting);Object.assign(evidence,supporting);
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
    const expected=pack.format_repair||sol61Run
      ? [[MODELS.sol61.id,'high']]
      : role==='alpha-adjudicate'
        ? pack.judge_model===MODELS.luna.id?[[MODELS.astra.id,'medium']]:[[MODELS.astra.id,'medium'],[MODELS.sol.id,'xhigh']]
        : [[MODELS.sol.id,'xhigh']];
    if(receipt.ok!==true||receipt.run!==run||receipt.role!==role||receipt.label!==workerLabel(phase,round,unit)
      ||!(receipt.model===MODELS.sol61.id&&receipt.provider_effort==='high')
        &&!expected.some(([model,effort])=>receipt.model===model&&receipt.provider_effort===effort))
      throw Error(`worker did not succeed with an authorized identity: ${dispatch}`);
    evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    for(const row of reports.find(value=>String(value.unit)===unit)?.created_items??[])creationAuthors.set(row.id,basename(dispatch));
  }
  const receipt={...result,created_items:result.created_items.map(row=>({...row,author_result:creationAuthors.get(row.id)})),version:2,run,phase,round,evidence,post:hashes(root),downstream:[...new Set(reports.flatMap(row=>row.downstream))],ledger_updates:reports.flatMap(row=>row.ledger_updates??[])};
  if(publishedLocalMaintenance?.repairs.length)receipt.published_local_repairs=publishedLocalMaintenance.repairs;
  if(external.repairs.length)receipt.external_owner_repairs=external.repairs;
  if(scientificCompletion)receipt.scientific_repair_completion=scientificCompletion;
  if(correction){
    const correctionPath=join(workflowDir(root,run),correctionPhase(phase)+'-'+round+'-collected.json');
    Object.assign(receipt.evidence,correction.evidence,{[correctionPath]:digest(readFileSync(correctionPath,'utf8'))});
    receipt.native_corrections=[{phase:correctionPhase(phase),round,id:adopted.review.id,
      original_scope_violation:true,adoption:adopted.adoption}];
    receipt.native_correction_decisions=[adopted.decision];
    receipt.downstream=[...new Set([...receipt.downstream,...correction.downstream])];
    receipt.ledger_updates.push(...correction.ledger_updates);
  }
  if(scientificCorrection){
    const path=join(workflowDir(root,run),scientificCorrectionPhase(phase)+'-'+round+'-collected.json');
    Object.assign(receipt.evidence,scientificContext.evidence,scientificCorrection.evidence,{[path]:digest(readFileSync(path,'utf8'))});
    receipt.native_scientific_corrections=[{phase:scientificCorrectionPhase(phase),round,
      original_decision:scientificContext.originalDecision,original_review:scientificContext.originalReview,
      effective_decision:scientificAdopted.decision,review:scientificAdopted.review,
      root_finding_resolution:scientificAdopted.root_finding_resolution,
      request:scientificContext.request,projection:'subject-only separately attributed native correction'}];
    receipt.downstream=[...new Set([...receipt.downstream,...scientificCorrection.downstream])];
    receipt.ledger_updates.push(...scientificCorrection.ledger_updates);
  }
  if(pack.owner_finding_queue)receipt.owner_finding_completion=ownerCompletion;
  if(reviewCompletion){
    const path=join(workflowDir(root,run),reviewCorrectionPhase+'-1-collected.json');frozen(path,reviewCompletion);
    Object.assign(receipt.evidence,reviewCompletion.evidence,{[path]:digest(readFileSync(path,'utf8'))});
    receipt.native_review_correction=reviewCompletion;
  }
  if(pageCompletion){
    const path=join(workflowDir(root,run),pageCorrectionPhase+'-'+round+'-collected.json');
    frozen(path,pageCompletion);
    Object.assign(receipt.evidence,pageCompletion.evidence,{[path]:digest(readFileSync(path,'utf8'))});
    receipt.native_page_correction={request:pageCompletion.request,subject:pageCompletion.subject,page_path:pageCompletion.page_path,
      page_review:pageCompletion.page_review,root_finding_resolution:pageCompletion.root_finding_resolution,
      attribution:'Separate exact native page prose correction; all item adjudications and source guards retained'};
  }
  if(ownerCorrection){
    const path=join(workflowDir(root,run),ownerFindingPhase(phase)+'-'+round+'-collected.json');
    Object.assign(receipt.evidence,ownerContext.evidence,ownerCorrection.evidence,{[path]:digest(readFileSync(path,'utf8'))});
    receipt.native_owner_finding_decisions=ownerContext.payload.entries.map(entry=>{
      const data=read(resolve(root,entry.root_finding.record.path)),finding=Array.isArray(data)?data[0]:data;
      const resolution=ownerCompletion.root_finding_resolutions.find(row=>row.defect_id===finding.defect_id);
      requireValue(resolution,'missing authenticated native finding resolution');
      return {id:entry.subject,outcome:finding.severity==='fatal'?'confirmed_fatal':'confirmed_nonfatal',
        reason:resolution.reason,root_finding_defect_id:finding.defect_id,
        attribution:'Separately confirmed native owner finding; not an original judge tuple'};
    });
    receipt.native_owner_finding_corrections={request:ownerContext.request,completion:ownerCompletion,
      original_decisions:reports.flatMap(report=>report.decisions).filter(row=>ownerCompletion.decisions.some(decision=>key(decision)===key(row))),
      attribution:'Exact separately completed native repairs; original reports preserved'};
    receipt.downstream=[...new Set([...receipt.downstream,...ownerCorrection.downstream])];
    receipt.ledger_updates.push(...ownerCorrection.ledger_updates);
  }
  receipt.restated=restatedIds(pack,diff(pack.before,current),statementHashes(root));
  const afterStatements=statementHashes(root);
  receipt.statement_events=receipt.restated.filter(id=>pack.before_statements?.[id]||!pack.before[id]).map(id=>({id,before_statement_sha256:pack.before_statements?.[id]??statementHash(''),after_statement_sha256:afterStatements[id]}));
  // Gate workers may explicitly refer a failed, unassigned frontier carrier.
  // Retain that inventory for native review without inventing interface seeds.
  if(pack.before_statements&&!receipt.restated.length&&!pack.seeds?.length&&pack.phase!=='gate'&&pack.basePhase!=='gate'&&!phase.startsWith('correction-')&&!phase.startsWith('scientific-correction-')&&!scientificCorrection&&!ownerCorrection&&!phase.startsWith('owner-finding-correction-'))receipt.downstream=[];
  const frontier=gateFrontier(root,run);
  const direct=discoverDownstream({items:readLibraryItems(root),repairedIds:receipt.restated});
  const required=direct.filter(row=>frontier.has(row.id));
  const discoveries=receipt.downstream.filter(id=>!frontier.has(id)&&!direct.some(row=>row.id===id)&&!receipt.restated.includes(id));
  const uses=Object.assign({},...reports.map(row=>row.downstream_uses??{}));
  if(receipt.statement_events.length)for(const id of discoveries)requireValue(typeof uses[id]==='string'&&uses[id].trim().length>=40,`missing exact downstream use for outside consumer: ${id}`);
  if(discoveries.length)for(const event of receipt.statement_events)Object.assign(event,{consumer_ids:discoveries,discovery_evidence:Object.fromEntries(discoveries.map(id=>[id,uses[id]]))});
  receipt.inventory_missing=required.filter(row=>!receipt.downstream.includes(row.id)).map(row=>row.id);
  if(!deferImpactClosure&&receipt.inventory_missing.length){
    const completion=ownerDownstreamInventory(root,run,phase,round,{pack,restated:receipt.restated,required,
      missing:required.filter(row=>receipt.inventory_missing.includes(row.id)),reported:receipt.downstream,
      current,statements:afterStatements,frontier});
    if(completion){
      receipt.downstream=[...new Set([...receipt.downstream,...completion.ids])];
      Object.assign(receipt.evidence,completion.evidence);receipt.inventory_completion=completion.attribution;
      receipt.inventory_missing=required.filter(row=>!receipt.downstream.includes(row.id)).map(row=>row.id);
    }
  }
  if(!deferImpactClosure)for(const id of receipt.inventory_missing)requireValue(false,`missing downstream inventory: ${id}`);
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
export function impactClosedPath(root,run,phase,round,progress=null) {
  progress??=read(impactProgressPath(root,run,phase,round));
  const dir=workflowDir(root,run),ref=progress.closed_receipt;
  if(!ref)return join(dir,`${phase}-${round}-closed.json`);
  requireValue(resolve(ref.path,'..')===resolve(dir)&&new RegExp(`^${phase}-${round}-closed(?:-[0-9]+)?\\.json$`).test(basename(ref.path)), 'invalid owner closure pointer');
  requireValue(existsSync(ref.path)&&digest(readFileSync(ref.path,'utf8'))===ref.sha256,'owner closure receipt changed');
  return ref.path;
}

// Rechecking a completed wave verifies its historical deferred intake; it never
// re-adopts an outside author's carrier or substitutes for fresh native review.
function verifyClosedOwnerCollection(root,run,phase,round,collectedPath,prior) {
  const basePhase=phase.match(/^(impact-(?:initial|repeat))(?:-pass-[1-9][0-9]*)?$/)?.[1];
  requireValue(basePhase&&prior.run===run&&prior.phase===phase&&prior.round===round,
    'invalid historical external owner collection');
  const progressPath=impactProgressPath(root,run,basePhase,round);
  requireValue(existsSync(progressPath),'external owner repairs require deferred impact collection until native closure');
  const progress=read(progressPath),passes=progress.passes;
  requireValue(progress.version===2&&progress.run===run&&progress.phase===basePhase&&progress.round===round
    &&progress.complete===true&&!progress.activeMaintenance&&progress.closed_receipt
    &&Array.isArray(passes)&&new Set(passes).size===passes.length&&passes.includes(phase)
    &&passes.every(pass=>ownerHandoffPhase(pass)&&(pass===basePhase||pass.startsWith(basePhase+'-pass-')))
    &&progress.activePhase===passes.at(-1),'external owner repair wave lacks complete native closure');
  const closedPath=impactClosedPath(root,run,basePhase,round,progress),closed=read(closedPath);
  requireValue(closed.run===run&&closed.phase===basePhase&&closed.round===round
    &&Array.isArray(closed.errors)&&closed.errors.length===0
    &&closed.evidence?.[collectedPath]===createHash('sha256').update(readFileSync(collectedPath)).digest('hex')
    &&Object.entries(prior.evidence??{}).every(([path,hash])=>closed.evidence[path]===hash),
    'native closure does not bind the original deferred collection');
  verifyEvidence(closed.evidence);
  const frontier=gateFrontier(root,run),current={};
  for(const id of frontier){
    current[id]=itemHashGuard(readFileSync(join(root,'items',id+'.md'),'utf8'));
    requireValue(current[id]===closed.post?.[id],'source changed after external owner native closure: '+id);
  }
  const items=readLibraryItems(root),contexts=reviewContexts(items);
  let legacyCurrent=null;
  const later=passes.slice(passes.indexOf(phase)+1).map(pass=>{
    const path=join(workflowDir(root,run),pass+'-'+round+'-collected.json');
    requireValue(closed.evidence[path],'native closure omits a completed continuation');
    const receipt=read(path),packFile=packPath(root,run,pass,round),pack=readPack(root,run,pass,round);
    const packHash=closed.evidence[packFile];
    requireValue(receipt.run===run&&receipt.phase===pass&&receipt.round===round
      &&pack.run===run&&pack.phase===pass&&pack.round===round,'wrong completed continuation identity');
    requireValue(/^[a-f0-9]{64}$/.test(packHash??'')&&receipt.evidence?.[packFile]===packHash
      &&createHash('sha256').update(readFileSync(packFile)).digest('hex')===packHash,
      'native closure does not bind the actual continuation pack');
    return {receipt,pack};
  });
  for(const repair of prior.external_owner_repairs){
    const review=closed.reviews?.find(row=>row.id===repair.id);
    requireValue(repair.phase===phase&&repair.round===round&&frontier.has(repair.id)
      &&review&&['repaired','unaffected'].includes(review.disposition)
      &&review.post_sha256===closed.post?.[repair.id]&&evidenceText(review)
      &&/^[a-f0-9]{64}$/.test(review.review_context_sha256??'')
      &&(review.review_context_sha256===contexts.hash(repair.id,current)
        ||contexts.matches(review,legacyCurrent??=hashes(root,items),closed.post))
      &&later.some(({receipt,pack})=>Object.values(pack.assignments).some(ids=>ids.includes(repair.id))
        &&receipt.reviews?.some(row=>JSON.stringify(row)===JSON.stringify(review))),
      'external owner repair lacks fresh completed native review: '+repair.id);
  }
  return closed;
}

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

export function assertImpactProgress(packs,pending,current) {
  const targets=[...new Set(pending)].sort();
  for(const pack of packs) {
    // Pre-statement-policy assignments may legitimately need one migration
    // pass with the new review context. Do not mistake that for a repeat.
    if(!pack.before_statements)continue;
    const previous=[...new Set(Object.values(pack.assignments).flat())].sort();
    if(JSON.stringify(previous)===JSON.stringify(targets)&&diff(pack.before,current).length===0)
      throw Error(`Step 5 no-progress hold: ${pack.phase} already assigned the same ${targets.length} pending item(s) at this exact content state. Resolve stale/missing review evidence or the repair oscillation before retry; no duplicate owner wave was launched.`);
  }
}

/** Called only after all three dispatches for the active pass have drained.
 * Completed evidence is immutable. Only missing or stale downstream reviews
 * enter the next three-owner pass; certification has not begun at this point. */
function queueScientificRepair(root,run,phase,round,path,progress,request,current,items,frontier,pending) {
  const nextPhase=nextImpactPhase(phase,progress),pair=new Set(request.subjects);
  const {order,cycles}=orderImpacts(items,pending.filter(id=>!pair.has(id)));
  const assignments={'1':[...request.subjects],'2':[],'3':[]};
  order.forEach((id,index)=>assignments[index<Math.ceil(order.length/2)?'2':'3'].push(id));
  const identity=libraryIdentity(root);
  const pack={version:2,run,phase:nextPhase,basePhase:phase,round,repair_scope:'frontier',frontier_ids:[...frontier].sort(),
    units:['1','2','3'],assignments,before:current,before_statements:Object.fromEntries(items.map(row=>[row.id,row.statement_sha256])),
    before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds:[],impacts:[],cycles,
    failures:null,gateAssignments:{},ledger_updates:[],input_evidence:request.evidence,
    scientific_repair:{request:request.request,payload:request.payload}};
  frozen(packPath(root,run,nextPhase,round),pack);writeTasks(root,pack,'repair');
  const task=workerReport(root,run,nextPhase,round,'1').replace(/\.json$/,'.task.md');
  const instructions=[
    '',
    '# Root scientific repair, native owner 1 only',
    'Root request: '+request.request.path+'. Root finding: '+request.payload.root_finding.defect_id+'.',
    'Repair the coupled scientific pair in this order: '+request.subjects.join(', ')+'. Other lanes own only ordinary pending-context targets.',
    'This is scientific source authoring and review, separate from formatting repair or outside handoff. Preserve all original completed packs/reports and sound existing indexing corrections. Restore the richest sound approved scope from the actual arguments; private proposals are evidence, not proof authority.',
    'Both requested sources must receive necessary repairs and genuine current native repaired reviews. After the final coupled edits, examine their interface effects and bind both final review contexts; never refresh stale hashes without that examination.',
    'Return root_finding_resolutions:[{defect_id:'+request.payload.root_finding.defect_id+',status:fixed,subjects:'+JSON.stringify(request.subjects)+',reason,uncertain:false,source_urls:[],familiar:true}]. Propose the corresponding canonical root-defect update in ledger_updates; the root owns adoption of that ledger proposal.',
    'Do not invent a judge tuple, independent acceptance, canonical closure or certificate. If the requested rich scope is not proved, report uncertainty and leave the finding unresolved. Units 2 and 3 do not own this root-finding resolution.',
    'Bind all additional nested scientific evidence actually read in supporting_evidence. Carry every necessary downstream affected-use referral in the ordinary report.',
    ''
  ].join('\n');
  writeFileSync(task,readFileSync(task,'utf8')+instructions);
  progress.scientific_repairs??=[];
  progress.scientific_repairs.push({request:request.request,evidence:request.evidence,phase:nextPhase,
    subjects:request.subjects,root_finding:request.payload.root_finding.defect_id,status:'pending'});
  progress.passes.push(nextPhase);progress.work_order.push({kind:'frontier',phase:nextPhase});
  progress.activePhase=nextPhase;progress.complete=false;atomic(path,progress);
  return {complete:false,pack,passes:progress.passes};
}

export function advanceImpact(root,run,phase,round) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid base owner phase');
  const path=impactProgressPath(root,run,phase,round);
  const progress=existsSync(path)?read(path):{version:2,run,phase,round,passes:[phase],activePhase:phase,complete:false};
  progress.work_order??=progress.passes.map(pass=>({kind:'frontier',phase:pass}));
  for(const row of progress.superseded??[])verifyEvidence(row.evidence);
  verifyEvidence(progress.maintenance_evidence);
  for(const repair of progress.format_repairs??[])verifyEvidence(repair.evidence);
  for(const repair of progress.scientific_repairs??[])verifyEvidence(repair.evidence);
  let scientificRequest=null;
  if(progress.complete){
    const closedPath=impactClosedPath(root,run,phase,round,progress);
    const closed=existsSync(closedPath)?read(closedPath):null;
    if(closed)verifyEvidence(closed.evidence);
    if(existsSync(join(workflowDir(root,run),'owner-scientific-repair-request.json'))){
      const current=hashes(root),items=readLibraryItems(root),frontier=gateFrontier(root,run);
      requireValue(closed&&[...frontier].every(id=>current[id]===closed.post?.[id]),
        'frontier content changed after closure; reconcile authorship before scientific reopening');
      scientificRequest=ownerScientificRepair(root,run,phase,round,progress,current,items,frontier);
    }
    if(scientificRequest)progress.complete=false;
    else {
      if(!existsSync(join(workflowDir(root,run),'owner-format-repair-request.json')))return {complete:true,phase,round,passes:progress.passes};
      const current=hashes(root),frontier=gateFrontier(root,run);
      const request=ownerFormatRepair(root,run,phase,round,progress,current,frontier,closedPath);
      if(!request)return {complete:true,phase,round,passes:progress.passes};
      const nextPhase=nextImpactPhase(phase,progress),identity=libraryIdentity(root);
      const assignments={'1':[],'2':[],'3':[]},{order,cycles}=orderImpacts(identity.items,request.subjects);
      order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
      const pack={version:2,run,phase:nextPhase,basePhase:phase,round,repair_scope:'frontier',frontier_ids:[...frontier].sort(),units:['1','2','3'],assignments,
        before:current,before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),
        seeds:[],impacts:[],cycles,failures:request.failures,gateAssignments:{},ledger_updates:[],input_evidence:request.evidence,
        review_contexts:reviewContextHashes(root,request.subjects),format_repair:{request:request.request,payload:request.payload,gate_request:request.gate_request}};
      frozen(packPath(root,run,nextPhase,round),pack);writeTasks(root,pack,'repair');
      progress.format_repairs??=[];
      progress.format_repairs.push({request:request.request,evidence:request.evidence,phase:nextPhase,subjects:request.subjects});
      progress.passes.push(nextPhase);progress.work_order.push({kind:'frontier',phase:nextPhase});progress.activePhase=nextPhase;progress.complete=false;
      atomic(path,progress);return {complete:false,pack,passes:progress.passes};
    }
  }
  if(progress.activeMaintenance){
    const pack=maintenancePack(root,run,progress.activeMaintenance);
    if(pack.lanes.some(lane=>!existsSync(join(root,lane.report))))return {complete:false,maintenance:pack};
    for(const lane of pack.lanes){
      const label=maintenanceLabel(phase,round,pack.id,lane.lane);
      const dispatch=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`),result=read(dispatch);
      const sol61Run=sol61Step5Run(root,run);
      const authorized=(result.model===MODELS.sol61.id&&result.provider_effort==='high')||(sol61Run
        ? result.model===MODELS.sol61.id&&result.provider_effort==='high'
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
  collect(root,run,active.phase,round,{deferImpactClosure:true});
  const completed=progress.passes.map(pass=>read(join(workflowDir(root,run),`${pass}-${round}-collected.json`)));
  for(const receipt of completed)verifyEvidence(receipt.evidence);
  const base=readPack(root,run,progress.repairBasePhase??phase,round),current=hashes(root),items=readLibraryItems(root);
  for(const repair of progress.scientific_repairs??[])if(repair.status==='pending'&&repair.phase===active.phase){
    const receipt=completed.find(row=>row.phase===active.phase);
    const completionContexts=reviewContexts(items);
    const completion=scientificRepairCompletion(active,active.units.map(unit=>read(workerReport(root,run,active.phase,round,unit))),
      current,row=>completionContexts.matches(row,current));
    requireValue(completion&&receipt.scientific_repair_completion?.request.sha256===repair.request.sha256,
      'scientific repair lacks genuine current completion');
    const receiptPath=join(workflowDir(root,run),active.phase+'-'+round+'-collected.json');
    repair.status='consumed';repair.completion={path:receiptPath,sha256:digest(readFileSync(receiptPath,'utf8'))};
    atomic(path,progress);
  }
  const maintenance=maintenanceStatus(root,run),maintenanceIds=new Set(progress.work_order.filter(row=>row.kind==='maintenance').map(row=>row.id));
  const maintenanceChanges=maintenance.completed_changes.filter(row=>maintenanceIds.has(row.pack));
  const changed=diff(base.before,current),rawSeeds=[...new Set([...(base.seeds??[]),...completed.flatMap(receipt=>receipt.restated??receipt.changed),...maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id)])];
  const maintenanceRestatements=new Set(maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id));
  const returned=maintenance.frontier_events.filter(row=>maintenanceRestatements.has(row.id)).map(row=>row.consumer_id);
  const scope=impactTargets(root,run,phase,items,rawSeeds,[...completed.flatMap(receipt=>receipt.downstream??[]),...returned]);
  const {seeds,impacts}=scope;
  const required=new Set([...Object.values(base.assignments).flat(),...scope.targets,...changed,
    ...completed.flatMap(receipt=>(receipt.external_owner_repairs??[]).map(row=>row.id))]);
  const reviews=new Map(completed.flatMap(receipt=>receipt.reviews).map(row=>[row.id,row]));
  // An adjudicator's source review remains valid unless an owner changes it.
  // It is used only for closure accounting, never counted as an owner repair.
  const source=phase==='impact-initial'?'initial':phase==='impact-repeat'?'repeat':null;
  const sourceReceipt=source?read(join(workflowDir(root,run),`${source}-${round}-collected.json`)):null;
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
  const pending=[...required].filter(id=>!contexts.matches(reviews.get(id)??sourceReviews.get(id),current,snapshots.get(id))).sort();
  scientificRequest??=ownerScientificRepair(root,run,phase,round,progress,current,items,scope.frontier);
  if(scientificRequest)return queueScientificRepair(root,run,phase,round,path,progress,scientificRequest,current,items,scope.frontier,pending);
  if(pending.length) {
    assertImpactProgress(progress.passes.map(pass=>readPack(root,run,pass,round)),pending,current);
    const nextPhase=nextImpactPhase(phase,progress);
    const assignments={'1':[],'2':[],'3':[]};
    const {order,cycles}=orderImpacts(items,pending);
    order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
    const identity=libraryIdentity(root);
    const formatPack=progress.format_repairs?.length?readPack(root,run,progress.format_repairs.at(-1).phase,round):null;
    const pack={version:2,run,phase:nextPhase,basePhase:phase,repair_scope:'frontier',frontier_ids:[...scope.frontier].sort(),consumer_maintenance:scope.maintenance,round,units:['1','2','3'],assignments,before:current,before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds,impacts,cycles,failures:formatPack?.failures??null,gateAssignments:{},ledger_updates:completed.flatMap(receipt=>receipt.ledger_updates??[]),
      ...(formatPack?{format_repair:formatPack.format_repair,input_evidence:formatPack.input_evidence,review_contexts:reviewContextHashes(root,pending)}:{})};
    frozen(packPath(root,run,nextPhase,round),pack);writeTasks(root,pack,'repair');
    progress.passes.push(nextPhase);progress.work_order.push({kind:'frontier',phase:nextPhase});progress.activePhase=nextPhase;atomic(path,progress);
    return {complete:false,pack,passes:progress.passes};
  }
  requireValue((progress.scientific_repairs??[]).every(row=>row.status==='consumed'),
    'root scientific repair still lacks completed native resolution');
  const outside=prepareMaintenance(root,run);
  if(!outside.complete){
    progress.activeMaintenance=outside.pack.id;
    if(!progress.work_order.some(row=>row.kind==='maintenance'&&row.id===outside.pack.id))progress.work_order.push({kind:'maintenance',id:outside.pack.id});
    atomic(path,progress);return {complete:false,maintenance:outside.pack,passes:progress.passes};
  }
  const evidence=Object.assign({},...completed.map(receipt=>receipt.evidence),progress.maintenance_evidence??{},...(progress.format_repairs??[]).map(row=>row.evidence),...(progress.scientific_repairs??[]).map(row=>row.evidence));
  for(const pass of progress.passes){const p=join(workflowDir(root,run),`${pass}-${round}-collected.json`);evidence[p]=digest(readFileSync(p,'utf8'));}
  for(const collection of maintenance.collections.filter(row=>maintenanceIds.has(row.pack)))evidence[join(root,collection.path)]=collection.sha256;
  const receipt={version:2,run,phase,round,errors:[],decisions:[],reviews:[...reviews.values()],created_items:completed.flatMap(row=>row.created_items??[]),changed,restated:seeds,post:current,evidence,downstream:scope.targets,consumer_maintenance:scope.maintenance,maintenance_packs:[...maintenanceIds],ledger_updates:completed.flatMap(row=>row.ledger_updates??[])};
  const reopenedCount=(progress.format_repairs?.length??0)+(progress.scientific_repairs?.length??0);
  const closedPath=join(workflowDir(root,run),phase+'-'+round+'-closed'+(reopenedCount?'-'+(reopenedCount+1):'')+'.json');
  frozen(closedPath,receipt);
  progress.closed_receipt={path:closedPath,sha256:digest(readFileSync(closedPath,'utf8'))};
  progress.complete=true;atomic(path,progress);
  return {complete:true,phase,round,passes:progress.passes};
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
  const path=packPath(root,run,phase,round); if(existsSync(path))return read(path);
  if(phase==='gate')return prepareGateRepairPack(root,run,phase,round,failures);
  const source=phase==='impact-initial'?'initial':'repeat';
  const result=collect(root,run,source,round);
  const items=readLibraryItems(root);
  const scope=impactTargets(root,run,phase,items,result.restated??result.changed,result.downstream??[]);
  const {seeds,impacts,targets}=scope;
  // Deterministic disjoint lanes run concurrently; shared metadata edits lock.
  // Closure requeues reviews invalidated by a concurrent supplier repair.
  const assignments={'1':[],'2':[],'3':[]};
  // Preserve explicit dependency cycles for the dependency gate to judge.
  const {order,cycles}=orderImpacts(items,targets);
  order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
  const identity=libraryIdentity(root);
  const pack={version:2,run,phase,round,repair_scope:'frontier',frontier_ids:[...scope.frontier].sort(),consumer_maintenance:scope.maintenance,units:['1','2','3'],assignments,before:hashes(root),before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),impacts,seeds,failures:null,gateAssignments:{},cycles:[...new Set(cycles)],ledger_updates:result.ledger_updates??[]};
  frozen(path,pack);writeTasks(root,pack,'repair');return pack;
}

/** Gate failures identify repair candidates, not already-repaired suppliers.
 * Only real subsequent changes (or explicit worker discoveries) propagate. */
export function prepareGateRepairPack(root,run,phase,round,failures) {
  requireValue(/^gate(?:-pass-[0-9]+)?$/.test(phase),'invalid gate repair phase');
  const path=packPath(root,run,phase,round);
  if(existsSync(path)){const saved=read(path);writeTasks(root,saved,'repair');return saved;}
  requireValue(failures!==null,'gate repair requires failed diagnostics');
  const identity=libraryIdentity(root),diagnostics=gateDiagnostics(failures,identity.ids);
  requireValue(diagnostics.length>0,'gate repair requires at least one failed diagnostic');
  const frontier=gateFrontier(root,run);
  const excluded=[...new Set(diagnostics.flatMap(row=>row.subjects).filter(id=>!frontier.has(id)))].sort();
  for(const diagnostic of diagnostics) {
    const originalSubjects = diagnostic.subjects;
    diagnostic.subjects = originalSubjects.filter(id=>frontier.has(id));
    // A missing contract for a selected published/reused proof is a run-owned
    // metadata obligation, not authority to repair or rejudge published text.
    // Preserve it for the existing diagnostic owner instead of excluding it.
    if(diagnostic.id==='proof-contract-coverage' && diagnostic.subjects.length!==originalSubjects.length)
      diagnostic.ownerHeld=true;
  }
  const scoped=diagnostics.filter(row=>row.subjects.length||row.ownerHeld);
  requireValue(scoped.length>0,'Step 5.9: diagnostics contain only excluded out-of-frontier findings; rerun the frontier-scoped gate instead of launching repairs');
  const targets=[...new Set(diagnostics.flatMap(row=>row.subjects))].sort();
  const {order,cycles}=orderImpacts(identity.items,targets),assignments={'1':[],'2':[],'3':[]};
  order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
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
    before:hashes(root),before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),
    impacts:[],seeds:[],failures,excluded_out_of_frontier:excluded,gateAssignments,cycles,ledger_updates:[]};
  frozen(path,pack);writeTasks(root,pack,'repair');return pack;
}

function readCertification(root,run,{allowMissing=true}={}) {
  const path=join(workflowDir(root,run),'certification.json');
  if(!existsSync(path)){if(allowMissing)return null;throw Error('Step 5 certification missing');}
  const row=read(path);
  if(row.version!==2||row.run!==run||!Array.isArray(row.items)||!Array.isArray(row.creations??[])||!row.evidence)throw Error('malformed Step 5 certification');
  const {sha256,...payload}=row;
  requireValue(sha256===digest(payload),'Step 5 certification payload changed');
  const seen=new Set();for(const item of row.items){requireValue(!seen.has(item.id)&&['item_sha256','context_sha256','guard_sha256'].every(k=>/^[a-f0-9]{64}$/.test(item[k]??'')),`malformed Step 5 certificate item ${item.id}`);seen.add(item.id);}
  const created=new Set();for(const item of row.creations??[]){requireValue(!created.has(item.id)&&seen.has(item.id)&&typeof item.author_result==='string',`malformed Step 5 creation ${item.id}`);created.add(item.id);creationRegistration(root,run,item);}
  return row;
}

export function verifyCertification(root,run,options={}) {
  const row=readCertification(root,run,options);
  if(row)verifyHistoricalEvidence(root,run,row.evidence);
  return row;
}

export function certify(root,run,phase,round,{contextHasher=currentHashesMany}={}) {
  const savedPath=join(workflowDir(root,run),`certification-${phase}-${round}.json`);
  if(existsSync(savedPath)) {
    const saved=read(savedPath),{sha256,...payload}=saved;requireValue(sha256===digest(payload),'completed certification payload changed');verifyHistoricalEvidence(root,run,saved.evidence);
    const frontier=gateFrontier(root,run),scoped=saved.items.filter(row=>frontier.has(row.id));
    const current=hashes(root);for(const row of scoped)requireValue(row.guard_sha256===current[row.id],`stale completed certification ${row.id}`);
    const contexts=contextHasher(root,scoped.map(row=>row.id));
    for(const row of scoped){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale completed certification context ${row.id}`);}
    atomic(join(workflowDir(root,run),'certification.json'),saved);return saved;
  }
  const advanced=advanceImpact(root,run,phase,round);
  requireValue(advanced.complete,'owner impact repair continuation must finish before certification');
  const dir=workflowDir(root,run), closedPath=impactClosedPath(root,run,phase,round),result=read(closedPath);
  const resultHistory=verifyHistoricalEvidence(root,run,result.evidence);
  const source=phase==='impact-initial'?'initial':'repeat';
  const prior=readCertification(root,run);
  const sourceResult=phase==='gate'?null:read(join(dir,`${source}-${round}-collected.json`));
  const sourceHistory=verifyHistoricalEvidence(root,run,sourceResult?.evidence);
  const transition=certificationEvidenceTransition(root,run,phase,round,prior,sourceResult,result);
  verifyEvidence({...prior?.evidence,...transition.evidence});
  const manifestTransitions=[...sourceHistory.transitions,...resultHistory.transitions,...transition.transitions.filter(row=>row.kind==='historical-page-manifest')];
  const currentManifestGate=manifestTransitions.length?validateCurrentHistoricalManifestGate(root,run,phase,round):{};
  const allReviews=[...(sourceResult?.reviews??[]),...result.reviews];
  const eligible=gateFrontier(root,run),createdIds=new Set([...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])].map(row=>row.id));
  const certifiedScope=id=>eligible.has(id)||createdIds.has(id);
  const reviewed=new Map(allReviews.filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const current=hashes(root), rawBefore=rawHashes(root), baseline=read(join(dir,'baseline.json'));
  const changed=diff(baseline,current).filter(certifiedScope);
  const priorItems=new Map((prior?.items??[]).filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const progress=read(impactProgressPath(root,run,phase,round));
  const impactPack=readPack(root,run,progress.repairBasePhase??phase,round);
  // Every writer's final report must still describe its actual final carrier.
  // This also rejects post-collection edits before certification can be minted.
  for(const id of diff(result.post,current))requireValue(false,`writer changed content after collection: ${id}`);
  // Certification covers an examination of every discovered consumer. A
  // consumer may remain unchanged when sound; only logically necessary owner
  // repairs belong in `changed`.
  const currentImpacts=discoverDownstream({items:readLibraryItems(root),repairedIds:result.restated??[...new Set([...(impactPack.seeds??[]),...result.changed])]}).map(row=>row.id);
  const allowed=gateFrontier(root,run);
  for(const id of currentImpacts)if((!allowed||allowed.has(id))&&!reviewed.has(id))throw Error(`new downstream consumer requires owner review: ${id}`);
  for(const row of allReviews)if(row.post_sha256!==current[row.id]&&reviewed.get(row.id)===row)throw Error(`review changed before certification: ${row.id}`);
  for(const id of changed) if(!reviewed.has(id)&&priorItems.get(id)?.guard_sha256!==current[id])throw Error(`uncertified change ${id}`);
  const ids=[...new Set([...changed,...reviewed.keys(),...priorItems.keys()])].sort();
  const contexts=contextHasher(root,ids); // One corpus read, after every writer drains.
  for(const id of ids)requireValue(contexts.has(id),`missing certification context: ${id}`);
  if(JSON.stringify(rawBefore)!==JSON.stringify(rawHashes(root)))throw Error('item writer overlapped certification');
  const evidence={...(prior?.evidence??{}),...sourceHistory.evidence,...resultHistory.evidence,...transition.evidence,...currentManifestGate};
  evidence[closedPath]=digest(readFileSync(closedPath,'utf8'));
  for(const name of ['frontier.json','baseline.json','step4-verdicts.json',`${phase}-${round}-progress.json`,...(phase==='gate'?[]:[`${source}-${round}-collected.json`])]){const p=join(dir,name);evidence[p]=digest(readFileSync(p,'utf8'));}
  const items=ids.map(id=>({id,...contexts.get(id),guard_sha256:current[id],reason:reviewed.get(id)?.reason??priorItems.get(id)?.reason}));
  const creationRows=[...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])],creationById=new Map();
  for(const row of creationRows){const old=creationById.get(row.id);if(old&&JSON.stringify(old)!==JSON.stringify(row))throw Error(`conflicting creation provenance: ${row.id}`);creationById.set(row.id,row);}
  const creations=[...creationById.values()].sort((a,b)=>a.id.localeCompare(b.id));
  for(const row of creations){creationRegistration(root,run,row);requireValue(current[row.id],`created item missing at certification: ${row.id}`);}
  const certificate={version:2,run,phase,round,at:new Date().toISOString(),items,creations,evidence,changed,
    ...(transition.transitions.length||sourceHistory.transitions.length||resultHistory.transitions.length||prior?.evidence_transitions?.length
      ?{evidence_transitions:[...(prior?.evidence_transitions??[]),...sourceHistory.transitions,...resultHistory.transitions,...transition.transitions]}:{}),
    latest_adjudication_round:phase==='impact-repeat'?round:(prior?.latest_adjudication_round??null)};
  if(phase==='impact-repeat') {
    const frontier=read(join(dir,'frontier.json'));
    const decisions=[...sourceResult.decisions,...(sourceResult.native_correction_decisions??[]),...(sourceResult.native_owner_finding_decisions??[])].map(d=>({run,round,id:d.id,decision:d.outcome==='confirmed_fatal'?'confirmed-fatal':'rejected-finding',resolved:true,basis:d.reason,item_sha256:readPack(root,run,'repeat',round).before[d.id]}));
    const byId=new Map();for(const row of decisions){const old=byId.get(row.id);if(!old||row.decision==='confirmed-fatal')byId.set(row.id,row);}
    const threshold=assessFatalThreshold({frontier,round,expectedIds:[...byId.keys()],decisions:[...byId.values()]});
    if(threshold.errors.length)throw Error(threshold.errors.join('\n'));
    frozen(join(dir,`threshold-${round}.json`),threshold);
    const p=join(dir,`threshold-${round}.json`);evidence[p]=digest(readFileSync(p,'utf8'));
  }
  certificate.sha256=digest(certificate);
  frozen(join(dir,`certification-${phase}-${round}.json`),certificate);
  atomic(join(dir,'certification.json'),certificate);
  return certificate;
}

export function judge(root,run,round,{contextHasher=currentHashesMany,runSweep=null}={}) {
  const dir=workflowDir(root,run), path=join(dir,`judge-${round}.json`);
  if(existsSync(path))return read(path);
  const cert=verifyCertification(root,run,{allowMissing:false});
  const frontier=gateFrontier(root,run),candidates=cert.items.filter(row=>frontier.has(row.id));
  const current=hashes(root);for(const row of candidates)if(current[row.id]!==row.guard_sha256)throw Error(`item changed before Sol judgment: ${row.id}`);
  requireValue((round===1&&cert.phase==='impact-initial')||(round>1&&cert.phase==='impact-repeat'&&cert.round===round-1),'Sol judge round does not follow a completed certification barrier');
  const priorVerdicts=round===1?[]:read(join(dir,`judge-${round-1}.json`)).verdicts;
  const judgeModel=MODELS.sol61.id;
  const judgeLineup='sol61';
  const judgeEffort='high';
  const prev=Object.fromEntries(priorVerdicts.filter(r=>r.model===judgeModel).map(r=>[r.id,r]));
  const beforeContexts=contextHasher(root,candidates.map(row=>row.id));
  for(const row of candidates){const now=beforeContexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`certified context changed before Sol judgment: ${row.id}`);}
  const migrationIds=priorVerdicts.filter(r=>r.model!==judgeModel).map(r=>r.id);
  const ids=[...new Set([...cert.changed,...migrationIds])].filter(id=>frontier.has(id)).filter(id=>{const now=beforeContexts.get(id);requireValue(now,`missing judge context ${id}`);return prev[id]?.item_sha256!==now.item_sha256||prev[id]?.context_sha256!==now.context_sha256;});
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  if(ids.length) {
    const out=runSweep?runSweep({root,run,ids,ledger}):spawnSync(process.execPath,['tools/physics-support/judge-sweep.mjs','--run',run,'--ledger',ledger,'--cost',`research/${run}-judge-cost.jsonl`,'--items',ids.join(','),'--lineup',judgeLineup,'--effort',judgeEffort,'--strict-context'],{cwd:root,stdio:'inherit',timeout:43200000});
    if(out.status!==0)throw Error(`Sol sweep failed (${out.status}); resume preserves completed verdicts`);
  }
  const currentContexts=contextHasher(root,ids), verdicts=[];
  for(const id of ids)requireValue(JSON.stringify(beforeContexts.get(id))===JSON.stringify(currentContexts.get(id)),`item changed during Sol judgment: ${id}`);
  for(const id of ids){const now=currentContexts.get(id);const row=lines(ledger).filter(r=>r.id===id&&r.model===judgeModel&&r.item_sha256===now.item_sha256&&r.context_sha256===now.context_sha256&&typeof r.keep==='boolean').at(-1);if(!row)throw Error(`missing current ${judgeModel} verdict ${id}`);verdicts.push(row);}
  const carried=Object.values(prev).filter(row=>frontier.has(row.id)&&!ids.includes(row.id));
  const receipt={version:2,run,round,items:ids,verdicts:[...carried,...verdicts],certification_sha256:cert.sha256};frozen(path,receipt);return receipt;
}

export function verifyWave(root,run,{contextHasher=currentHashesMany,frontierOnly=true}={}) {
  const cert=verifyCertification(root,run,{allowMissing:false}), current=hashes(root);
  const frontier=frontierOnly?gateFrontier(root,run):null,items=cert.items.filter(row=>!frontier||frontier.has(row.id));
  const contexts=contextHasher(root,items.map(row=>row.id));
  for(const row of items)if(row.guard_sha256!==current[row.id])throw Error(`stale Step 5 certification ${row.id}`);
  for(const row of items){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale Step 5 certification context ${row.id}`);}
  for(const id of diff(read(join(workflowDir(root,run),'baseline.json')),current))if((!frontier||frontier.has(id))&&!items.some(row=>row.id===id))throw Error(`uncovered Step 5 repair ${id}`);
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
    console.log(JSON.stringify(reviewContextHashes(root,ids),null,2));return;
  }
  if(args[0]==='page-review-context'){
    console.log(JSON.stringify(pageCorrectionReview(root,run,round),null,2));return;
  }
  switch(args[0]) {
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
  if(args[0]==='close-empty-adjudication'){
    console.log(`step5-workflow close-empty-adjudication: mechanical zero-work closure for ${phase}/${round}/${result.unit}; no mathematical review`);return;
  }
  console.log(`step5-workflow ${args[0]}: ${result.items?.length??result.changed?.length??result.ids?.length??0} item(s), complete`);
}
if(process.argv[1]&&physicsRealpath(resolve(process.argv[1])) === fileURLToPath(import.meta.url)){try{main();}catch(error){console.error(error.message);process.exitCode=1;}}
