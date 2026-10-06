#!/usr/bin/env node
// Round-based Step 7. Mathematical workers write evidence; only the controller
// collects it, judges a stable snapshot, and certifies a completed repair wave.
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, appendFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { freezeFrontier, validateFrontier, readLibraryItems, discoverDownstream, assessFatalThreshold } from './step7-rounds.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { currentHashesMany } from './step7-terminal-resolution.mjs';
import { MODELS } from './models.mjs';
import { gateDiagnostics } from './step7-gate-diagnostics.mjs';
import { FATAL_TYPES } from './step7-adjudication-compat.mjs';
import { restatedIds, statementHash } from './step7-statement.mjs';
import { syncMaintenance, maintenanceStatus, prepareMaintenance, collectMaintenance } from './consumer-maintenance.mjs';
import { orderedItems, runPages } from './item-dependency-levels.mjs';

export const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const lines = path => existsSync(path) ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
export const workflowDir = (root, run) => join(root, 'research', `${run}-step7-v2`);
export const packPath = (root, run, phase, round) => join(workflowDir(root, run), `${phase}-${round}.json`);
const atomic = (path, value) => { mkdirSync(resolve(path, '..'), {recursive:true}); const tmp = `${path}.${process.pid}.tmp`; writeFileSync(tmp, JSON.stringify(value,null,2)+'\n'); renameSync(tmp,path); };
const frozen = (path, value) => { if (existsSync(path)) { if (JSON.stringify(read(path)) !== JSON.stringify(value)) throw Error(`immutable evidence conflict: ${path}`); } else atomic(path,value); };
const key = row => `${row.id}\0${row.model}\0${row.context_sha256}`;
const hashes = root => Object.fromEntries(readLibraryItems(root).map(row => [row.id,itemHashGuard(readFileSync(join(root,'items',`${row.id}.md`),'utf8'))]));
const statementHashes = root => Object.fromEntries(readLibraryItems(root).map(row => [row.id,row.statement_sha256]));
const diff = (a,b) => [...new Set([...Object.keys(a),...Object.keys(b)])].filter(id=>a[id]!==b[id]).sort();
const evidenceText = row => typeof row.reason === 'string' && row.reason.trim().length >= 40 && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url=>/^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const requireValue=(condition,message)=>{if(!condition)throw Error(message);};
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
  requireValue(receipt.version===1&&receipt.policy==='step7-source41-ledger-history-bridge-v1'
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
const verifyEvidence=(evidence,history=null)=>{for(const [p,hash]of Object.entries(evidence??{}))requireValue(
  existsSync(p)&&(digest(readFileSync(p,'utf8'))===hash
    ||history&&(restoredLedgerHistory(history.root,history.run,history.certificate,p,hash)
      ||restoredRenderedLedgerHistory(history.root,history.run,history.certificate,p,hash))),
  `Step 7 evidence changed: ${p}`);};
const rawHashes=root=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.sha256]));
const creationId=/^(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
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
  return new Set(frontier.ids.filter(id => !isPublishedItem(root, id)));
}
function impactTargets(root,run,phase,items,seeds,discovered=[]) {
  const frontier=gateFrontier(root,run),roots=[...new Set(seeds)];
  const impacts=discoverDownstream({items,repairedIds:roots});
  const direct=new Set(impacts.map(row=>row.id));
  const targets=[...new Set([...direct,...discovered.filter(id=>frontier.has(id))])]
    .filter(id=>frontier.has(id)).sort();
  // These are candidates for separately owned, necessary-only maintenance,
  // never Step 7 repair assignments or mathematical defect verdicts.
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
  if (existsSync(path)) {const frontier=read(path);validateFrontier(frontier);requireValue(frontier.run===run,'wrong run frontier');requireValue(existsSync(join(dir,'baseline.json'))&&existsSync(join(dir,'step6-verdicts.json')),'incomplete Step 7 initialization');return frontier;}
  const prefix=`${run}-batch-`;
  const batches=readdirSync(join(root,'research')).filter(f=>f.startsWith(prefix)&&/^\d+\.pages\.json$/.test(f.slice(prefix.length))).sort()
    .map(f=>({id:f.slice(prefix.length).split('.')[0],items:read(join(root,'research',f)).flatMap(p=>p.items.map(i=>i.id))}));
  if (!batches.length) throw Error('Step 7 requires nonempty original batch manifests');
  const frontier=freezeFrontier({run,batches});
  mkdirSync(dir,{recursive:true});
  frozen(join(dir,'baseline.json'),hashes(root));
  frozen(join(dir,'step6-verdicts.json'),validVerdicts(lines(join(root,'research',`${run}-judge.jsonl`))));
  frozen(path,frontier);
  return frontier;
}

export function readPack(root,run,phase,round) { return read(packPath(root,run,phase,round)); }
export function workerLabel(phase,round,unit) { return `step7-v2-${phase}-r${round}-u${unit}`; }
export function workerReport(root,run,phase,round,unit) { return join(workflowDir(root,run),`${workerLabel(phase,round,unit)}.json`); }

const adjudicationPackKeys=new Set(['version','adjudicationSchemaVersion','repair_scope','frontier_ids','run','phase','round','judge_model','units','assignments','dependency_levels','before','before_statements','before_aliases','home_pages','rejected','input_evidence']);
export const emptyAdjudicationLabel=(phase,round,unit)=>`step7-v2-empty-${phase}-r${round}-u${unit}`;
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
  const judgeInput=join(workflowDir(root,run),phase==='initial'?'step6-verdicts.json':`judge-${round}.json`);
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
    completion:'mechanical-zero-work',written_by:'step7-workflow',mathematical_review:false,
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
  const judgeInput=phase==='initial'?join(dir,'step6-verdicts.json'):join(dir,`judge-${round}.json`);
  const verdicts=phase==='initial' ? read(judgeInput) : read(judgeInput).verdicts;
  const sol61Run=read(join(dir,'step6-verdicts.json')).some(row=>row.model===MODELS.sol61.id);
  const activeModel=phase==='repeat'
    ? (sol61Run?MODELS.sol61.id:MODELS.sol.id)
    : sol61Run?MODELS.sol61.id
      : verdicts.some(row=>row.model===MODELS.luna.id)?MODELS.luna.id:MODELS.sol.id;
  const latest=new Map(); for(const row of validVerdicts(verdicts).filter(row=>row.model===activeModel)) latest.set(`${row.id}\0${row.model}`,row);
  const repairable=gateFrontier(root,run);
  if(phase==='initial')for(const id of repairable)requireValue([...latest.values()].some(row=>row.id===id&&typeof row.keep==='boolean'),`missing Step 6 verdict: ${id}`);
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
    if(existsSync(task)) continue;
    const assigned=pack.assignments[unit];
    const entries=[`# Step 7 ${mode}: ${pack.phase}, round ${pack.round}, unit ${unit}`,
      `Read briefs/step7-${mode==='adjudicate'?'adjudicator':'owner-repair'}.md.`,
      `Frozen inputs: ${packPath(root,pack.run,pack.phase,pack.round)}.`,
      `Write only your assigned frontier item files, their necessary owning contracts/metadata, and ${report}.`,
      'Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.',
      'SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.',
      pack.phase==='gate'||pack.basePhase==='gate'?'Step 7.9 permits no new items.':'You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.',
      'Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.',
      mode==='adjudicate'
        ? 'Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.'
        : 'Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.',
      'Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.',
      'Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.',
      mode==='adjudicate' ? 'Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.' :
        'Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.',
      `Return JSON {run:"${pack.run}",phase:"${pack.phase}",round:${pack.round},unit:"${unit}",input_sha256:"${digest(pack)}",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.`,
      `Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run ${pack.run} --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.`,
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
  requireValue(row.version===1&&row.run===pack.run&&row.phase===pack.phase&&row.round===pack.round
    &&['initial','repeat'].includes(pack.phase)&&pack.rejected&&pack.repair_scope==='frontier'
    &&row.pack_sha256===digest(pack)&&native?.completion==='blocked','invalid owner supplement identity or native blocker');
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
  const stage=pack.phase==='initial'?'7.1-adjudicate':'7.5-adjudicate';
  requireValue(state.run===pack.run&&state.stage===stage
    &&state.blockers?.some(value=>value.stage===stage&&value.key==='gate:step7-wave-evidence')
    &&Object.values(state.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt)),
    'owner supplement requires the held native collection gate and drained writers');
  requireValue(dispatch.ok===true&&dispatch.run===pack.run&&dispatch.role==='alpha-adjudicate'
    &&dispatch.label===workerLabel(pack.phase,pack.round,unit)
    &&Number.isFinite(Date.parse(dispatch.ended_at))&&Number.isFinite(Date.parse(row.completed_at))
    &&Date.parse(row.completed_at)>=Date.parse(dispatch.ended_at),'owner supplement predates native worker completion');
  const rejected=pack.assignments[unit]?.find(value=>key(value)===key(row.rejection??{}));
  const blocker=native.blockers?.find(value=>value.id===rejected?.id&&value.uncertain===true);
  const oldReview=native.reviews?.find(value=>value.id===rejected?.id),oldDecision=native.decisions?.find(value=>key(value)===key(rejected??{}));
  requireValue(rejected&&blocker&&row.blocker_sha256===digest(blocker)&&oldReview?.uncertain===true
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
  const primary=row.scope.filter(value=>value.role==='blocker');
  requireValue(primary.length===1&&primary[0].id===rejected.id,'owner supplement blocker scope mismatch');
  const prerequisites=row.scope.filter(value=>value.role==='prerequisite');
  for(const value of prerequisites)requireValue(value.id!==rejected.id&&itemKind(root,value.id)==='definition'
    &&discoverDownstream({items,repairedIds:[value.id]}).some(impact=>impact.id===rejected.id),
    'owner supplement prerequisite is not a necessary direct definition supplier');
  const suppliers=new Set([rejected.id,...prerequisites.map(value=>value.id)]);
  const direct=discoverDownstream({items,repairedIds:[...suppliers]});
  for(const value of row.scope){
    requireValue(value&&frontier.has(value.id)&&pack.before[value.id]&&byId.has(value.id)&&!ids.has(value.id)
      &&typeof value.reason==='string'&&value.reason.trim().length>=40,'invalid owner supplement scope subject');
    ids.add(value.id);
    if(value.role==='direct-consumer')requireValue(suppliers.has(value.supplier)
      &&direct.some(impact=>impact.id===value.id&&impact.suppliers.includes(value.supplier))
      &&typeof value.consumed_clause==='string'&&value.consumed_clause.trim().length>=40,'owner supplement consumer lacks an actual direct supplier use');
    else requireValue(['blocker','prerequisite'].includes(value.role),'unknown owner supplement scope role');
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

export function validateReports(pack,reports,now,{root=null,ownerSupplement=null}={}) {
  const errors=[],decisions=[],reviews=[],createdItems=[],creatorById=new Map();
  requireValue(!ownerSupplement||(root&&ownerSupplement[ownerSupplementSeal]===true
    &&ownerSupplement.pack_sha256===digest(pack)),'owner supplement must pass native guarded loading');
  const ownerReviews=new Map((ownerSupplement?.reviews??[]).map(row=>[row.id,row]));
  const ownerDecisions=new Map((ownerSupplement?.decisions??[]).map(row=>[key(row),row]));
  for(const unit of pack.units) {
    const report=reports.find(r=>String(r.unit)===unit);
    if(!report||report.run!==pack.run||report.phase!==pack.phase||report.round!==pack.round||report.input_sha256!==digest(pack)) { errors.push(`missing or mismatched report ${unit}`);continue; }
    if(report.completion==='mechanical-zero-work'){
      try{assertEmptyAdjudicationReport(pack,unit,report);}catch(error){errors.push(error.message);continue;}
    }
    if(!Array.isArray(report.reviews)||!Array.isArray(report.decisions)||!Array.isArray(report.created_items)||!Array.isArray(report.downstream)){errors.push(`malformed report arrays ${unit}`);continue;}
    const assigned=new Set(pack.assignments[unit].map(r=>typeof r==='string'?r:r.id)),creations=new Set();
    for(const row of report.created_items){
      if(pack.phase==='gate'||pack.basePhase==='gate')errors.push(`Step 7.9 cannot author out-of-frontier item ${row?.id}`);
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
      seen.add(row.id);reviews.push(row);
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
  const changed=diff(pack.before,now).filter(id=>!scoped||scoped.has(id));
  for(const id of changed) {
    const created=creatorById.get(id),review=reviews.find(r=>r.id===id&&r.disposition===(created?'authored':'repaired'));
    if(!now[id]||!review||(!created&&!pack.before[id]))errors.push(`unlicensed or unreviewed change ${id}`);
    if(pack.rejected&&!created&&!ownerReviews.has(id)&&!decisions.some(r=>r.id===id&&['confirmed_fatal','confirmed_nonfatal'].includes(r.outcome)))errors.push(`change without confirmed adjudication ${id}`);
  }
  for(const id of Object.keys(pack.before))if((!scoped||scoped.has(id))&&!now[id])errors.push(`unlicensed deletion ${id}`);
  for(const id of creatorById.keys())if(!changed.includes(id))errors.push(`claimed creation without new item ${id}`);
  for(const row of decisions)if(['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)&&!changed.includes(row.id))errors.push(`confirmed defect not repaired ${row.id}`);
  for(const row of reviews)if(['repaired','authored'].includes(row.disposition)&&!changed.includes(row.id))errors.push(`claimed repair or authorship without change ${row.id}`);
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

export function collect(root,run,phase,round,{deferImpactClosure=false}={}) {
  // The controller joins all owner passes before this gate. Their individual
  // collections are historical snapshots; later assigned repairs may replace
  // them. Validate the completed aggregate, never rewrite the earlier receipts.
  if(!deferImpactClosure&&['impact-initial','impact-repeat','gate'].includes(phase)
    &&existsSync(impactProgressPath(root,run,phase,round))
    &&read(impactProgressPath(root,run,phase,round)).complete)
    return verifyCompletedImpact(root,run,phase,round);
  const collectedPath=join(workflowDir(root,run),`${phase}-${round}-collected.json`);
  if(existsSync(collectedPath)){
    const prior=read(collectedPath);verifyEvidence(prior.evidence);
    if(!deferImpactClosure){
      const scoped=prerequisiteScope(readLibraryItems(root),[...gateFrontier(root,run),...(prior.created_items??[]).map(row=>row.id)]);
      for(const id of diff(prior.post,hashes(root)).filter(id=>scoped.has(id)))throw Error(`writer changed relevant content after collection: ${id}`);
    }
    syncMaintenance(root,run,prior.statement_events??[]);return prior;
  }
  const pack=readPack(root,run,phase,round);
  const reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const current=hashes(root),reported={...current},items=readLibraryItems(root);
  const ownerSupplement=loadOwnerSupplement(root,pack,reports,current,items);
  if(deferImpactClosure) {
    requireValue(!pack.rejected,'only owner waves can defer impact closure');
    // Archive the carriers workers actually reviewed. Later edits are queued
    // for another owner pass instead of invalidating already completed work.
    const assigned=new Set(Object.values(pack.assignments).flat());
    for(const row of reports.flatMap(report=>report.reviews??[]))if(assigned.has(row.id)&&/^[a-f0-9]{64}$/.test(row.post_sha256??''))reported[row.id]=row.post_sha256;
  }
  const result=validateReports(pack,reports,reported,{root,ownerSupplement});
  if(result.errors.length)throw Error(result.errors.join('\n'));
  const evidence={...(pack.input_evidence??{}),[packPath(root,run,phase,round)]:digest(readFileSync(packPath(root,run,phase,round),'utf8'))};
  Object.assign(evidence,ownerSupplement?.evidence??{});
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
    const sol61Run=read(join(workflowDir(root,run),'step6-verdicts.json')).some(row=>row.model===MODELS.sol61.id);
    const expected=sol61Run
      ? [[MODELS.sol61.id,'high']]
      : role==='alpha-adjudicate'
        ? pack.judge_model===MODELS.luna.id?[[MODELS.astra.id,'medium']]:[[MODELS.astra.id,'medium'],[MODELS.sol.id,'xhigh']]
        : [[MODELS.sol.id,'xhigh']];
    if(receipt.ok!==true||receipt.run!==run||receipt.role!==role||receipt.label!==workerLabel(phase,round,unit)
      ||!expected.some(([model,effort])=>receipt.model===model&&receipt.provider_effort===effort))
      throw Error(`worker did not succeed with an authorized identity: ${dispatch}`);
    evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    for(const row of reports.find(value=>String(value.unit)===unit)?.created_items??[])creationAuthors.set(row.id,basename(dispatch));
  }
  const receipt={...result,created_items:result.created_items.map(row=>({...row,author_result:creationAuthors.get(row.id)})),version:2,run,phase,round,evidence,post:hashes(root),downstream:[...new Set(reports.flatMap(row=>row.downstream))],ledger_updates:reports.flatMap(row=>row.ledger_updates??[])};
  if(ownerSupplement){
    receipt.owner_supplement=ownerSupplement.path;
    receipt.native_reviews=reports.flatMap(report=>report.reviews).filter(row=>ownerSupplement.ids.has(row.id));
    receipt.native_decisions=reports.flatMap(report=>report.decisions).filter(row=>key(row)===key(ownerSupplement.rejection));
    receipt.native_downstream=[...receipt.downstream];
    receipt.native_ledger_updates=receipt.ledger_updates;
    receipt.ledger_updates_origin='native-worker-historical-proposals';
    receipt.owner_resolution={reviewed_by:'root',status:'owner-repair-reviewed',id:ownerSupplement.rejection.id,
      rejection:ownerSupplement.rejection,decision:ownerSupplement.decisions[0],completed_at:ownerSupplement.completed_at,
      supplement:ownerSupplement.path,supplement_sha256:evidence[ownerSupplement.path],
      reviewed_ids:[...ownerSupplement.ids],supporting_evidence:ownerSupplement.supporting_evidence};
  }
  receipt.restated=restatedIds(pack,result.changed,statementHashes(root));
  const afterStatements=statementHashes(root);
  receipt.statement_events=receipt.restated.filter(id=>pack.before_statements?.[id]||!pack.before[id]).map(id=>({id,before_statement_sha256:pack.before_statements?.[id]??statementHash(''),after_statement_sha256:afterStatements[id]}));
  if(pack.before_statements&&!receipt.restated.length&&!pack.seeds?.length)receipt.downstream=[];
  const frontier=gateFrontier(root,run);
  // Outside edits are context, not Step-7 repair subjects. Relevant supplier
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
    const record={...row,run,step7_round:round,step7_phase:phase,item_sha256:pack.before[row.id],at:new Date().toISOString()};
    if(!existing.some(old=>key(old)===key(row)&&old.step7_round===round&&old.step7_phase===phase&&old.outcome===row.outcome))appendFileSync(ledger,JSON.stringify(record)+'\n');
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

export function assertImpactProgress(packs,pending,current,{items=null}={}) {
  const targets=[...new Set(pending)].sort();
  for(const pack of packs) {
    // Pre-statement-policy assignments may legitimately need one migration
    // pass with the new review context. Do not mistake that for a repeat.
    if(!pack.before_statements)continue;
    const previous=[...new Set(Object.values(pack.assignments).flat())].sort();
    const scoped=items?prerequisiteScope(items,targets):subjectScope(pack);
    if(JSON.stringify(previous)===JSON.stringify(targets)&&diff(pack.before,current).filter(id=>!scoped||scoped.has(id)).length===0)
      throw Error(`Step 7 no-progress hold: ${pack.phase} already assigned the same ${targets.length} pending item(s) at this exact content state. Resolve stale/missing review evidence or the repair oscillation before retry; no duplicate owner wave was launched.`);
  }
}

/** Called only after all three dispatches for the active pass have drained.
 * Completed evidence is immutable. Only missing or stale downstream reviews
 * enter the next three-owner pass; certification has not begun at this point. */
export function advanceImpact(root,run,phase,round) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid base owner phase');
  const path=impactProgressPath(root,run,phase,round);
  const progress=existsSync(path)?read(path):{version:2,run,phase,round,passes:[phase],activePhase:phase,complete:false};
  progress.work_order??=progress.passes.map(pass=>({kind:'frontier',phase:pass}));
  for(const row of progress.superseded??[])verifyEvidence(row.evidence);
  verifyEvidence(progress.maintenance_evidence);
  if(progress.complete)return {complete:true,phase,round,passes:progress.passes};
  if(progress.activeMaintenance){
    const pack=maintenancePack(root,run,progress.activeMaintenance);
    if(pack.lanes.some(lane=>!existsSync(join(root,lane.report))))return {complete:false,maintenance:pack};
    for(const lane of pack.lanes){
      const label=maintenanceLabel(phase,round,pack.id,lane.lane);
      const dispatch=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`),result=read(dispatch);
      const sol61Run=read(join(workflowDir(root,run),'step6-verdicts.json')).some(row=>row.model===MODELS.sol61.id);
      const authorized=sol61Run
        ? result.model===MODELS.sol61.id&&result.provider_effort==='high'
        : result.model===MODELS.sol.id&&result.provider_effort==='xhigh';
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
  const maintenance=maintenanceStatus(root,run),maintenanceIds=new Set(progress.work_order.filter(row=>row.kind==='maintenance').map(row=>row.id));
  const maintenanceChanges=maintenance.completed_changes.filter(row=>maintenanceIds.has(row.pack));
  const frontier=gateFrontier(root,run);
  const changed=diff(base.before,current).filter(id=>frontier.has(id)),rawSeeds=[...new Set([...(base.seeds??[]),...completed.flatMap(receipt=>receipt.restated??receipt.changed),...maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id)])];
  const maintenanceRestatements=new Set(maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id));
  const returned=maintenance.frontier_events.filter(row=>maintenanceRestatements.has(row.id)).map(row=>row.consumer_id);
  const scope=impactTargets(root,run,phase,items,rawSeeds,[...completed.flatMap(receipt=>receipt.downstream??[]),...returned]);
  const {seeds,impacts}=scope;
  const required=new Set([...Object.values(base.assignments).flat(),...scope.targets,...changed]);
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
  // Step 7.9 is frontier-only. Preserve completed historical repairs, but do
  // not assign further outside work under superseded whole-library authority.
  const allowed=scope.frontier;
  for(const id of required)if(!allowed.has(id))required.delete(id);
  const contexts=reviewContexts(items);
  const snapshots=new Map([sourceReceipt,...completed].filter(Boolean).flatMap(receipt=>receipt.reviews.map(row=>[row.id,receipt.post])));
  const pending=[...required].filter(id=>!contexts.matches(reviews.get(id)??sourceReviews.get(id),current,snapshots.get(id))).sort();
  if(pending.length) {
    assertImpactProgress(progress.passes.map(pass=>readPack(root,run,pass,round)),pending,current,{items});
    const nextPhase=nextImpactPhase(phase,progress);
    const assignments={'1':[],'2':[],'3':[]};
    const {order,cycles}=orderImpacts(items,pending);
    order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
    const identity=libraryIdentity(root);
    const pack={version:2,run,phase:nextPhase,basePhase:phase,repair_scope:'frontier',frontier_ids:[...scope.frontier].sort(),consumer_maintenance:scope.maintenance,round,units:['1','2','3'],assignments,before:current,before_statements:statementHashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds,impacts,cycles,failures:null,gateAssignments:{},ledger_updates:completed.flatMap(receipt=>receipt.ledger_updates??[])};
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
  const evidence=Object.assign({},...completed.map(receipt=>receipt.evidence),progress.maintenance_evidence??{});
  for(const pass of progress.passes){const p=join(workflowDir(root,run),`${pass}-${round}-collected.json`);evidence[p]=digest(readFileSync(p,'utf8'));}
  for(const collection of maintenance.collections.filter(row=>maintenanceIds.has(row.pack)))evidence[join(root,collection.path)]=collection.sha256;
  const receipt={version:2,run,phase,round,errors:[],decisions:[],reviews:[...reviews.values()],created_items:completed.flatMap(row=>row.created_items??[]),changed,restated:seeds,post:current,evidence,downstream:scope.targets,consumer_maintenance:scope.maintenance,maintenance_packs:[...maintenanceIds],ledger_updates:completed.flatMap(row=>row.ledger_updates??[])};
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
  const dir=workflowDir(root,run),result=read(join(dir,`${phase}-${round}-closed.json`));
  requireValue(result.run===run&&result.phase===phase&&result.round===round
    &&Array.isArray(result.errors)&&result.errors.length===0,'invalid completed owner collection');
  verifyEvidence(result.evidence);
  const passes=progress.passes.map(pass=>{
    const path=join(dir,`${pass}-${round}-collected.json`);
    requireValue(result.evidence[path]===digest(readFileSync(path,'utf8')),
      `completed owner collection does not bind pass: ${pass}`);
    const receipt=read(path);verifyEvidence(receipt.evidence);return receipt;
  });
  const items=readLibraryItems(root),frontier=gateFrontier(root,run),current=hashes(root);
  const stable=prerequisiteScope(items,[...frontier,...(result.created_items??[]).map(row=>row.id)]);
  for(const id of diff(result.post,current).filter(id=>stable.has(id)))
    throw Error(`writer changed relevant content after completed owner collection: ${id}`);
  const source=phase==='impact-initial'?'initial':phase==='impact-repeat'?'repeat':null;
  const sourceReceipt=source?read(join(dir,`${source}-${round}-collected.json`)):null;
  if(sourceReceipt)verifyEvidence(sourceReceipt.evidence);
  const reviews=new Map([...(sourceReceipt?.reviews??[]),...result.reviews].map(row=>[row.id,row]));
  const snapshots=new Map([sourceReceipt,...passes].filter(Boolean)
    .flatMap(receipt=>receipt.reviews.map(row=>[row.id,receipt.post])));
  const base=readPack(root,run,progress.repairBasePhase??phase,round);
  const scope=impactTargets(root,run,phase,items,result.restated??base.seeds??[],result.downstream??[]);
  const required=new Set([...progress.passes.flatMap(pass=>Object.values(readPack(root,run,pass,round).assignments).flat()),
    ...scope.targets,...result.changed,...(sourceReceipt?.reviews??[]).map(row=>row.id)]);
  const contexts=reviewContexts(items);
  for(const id of required)if(frontier.has(id))requireValue(contexts.matches(reviews.get(id),current,snapshots.get(id)),
    `completed owner collection lacks current review: ${id}`);
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
  for(const diagnostic of diagnostics)diagnostic.subjects=diagnostic.subjects.filter(id=>frontier.has(id));
  const scoped=diagnostics.filter(row=>row.subjects.length||row.ownerHeld);
  requireValue(scoped.length>0,'Step 7.9: diagnostics contain only excluded out-of-frontier findings; rerun the frontier-scoped gate instead of launching repairs');
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

export function verifyCertification(root,run,{allowMissing=true}={}) {
  const path=join(workflowDir(root,run),'certification.json');
  if(!existsSync(path)){if(allowMissing)return null;throw Error('Step 7 certification missing');}
  const row=read(path);
  if(row.version!==2||row.run!==run||!Array.isArray(row.items)||!Array.isArray(row.creations??[])||!row.evidence)throw Error('malformed Step 7 certification');
  const {sha256,...payload}=row;
  requireValue(sha256===digest(payload),'Step 7 certification payload changed');
  const seen=new Set();for(const item of row.items){requireValue(!seen.has(item.id)&&['item_sha256','context_sha256','guard_sha256'].every(k=>/^[a-f0-9]{64}$/.test(item[k]??'')),`malformed Step 7 certificate item ${item.id}`);seen.add(item.id);}
  const created=new Set();for(const item of row.creations??[]){requireValue(!created.has(item.id)&&seen.has(item.id)&&typeof item.author_result==='string',`malformed Step 7 creation ${item.id}`);created.add(item.id);creationRegistration(root,run,item);}
  verifyEvidence(row.evidence,{root,run,certificate:row});
  return row;
}

export function certify(root,run,phase,round,{contextHasher=currentHashesMany}={}) {
  const savedPath=join(workflowDir(root,run),`certification-${phase}-${round}.json`);
  if(existsSync(savedPath)) {
    const saved=read(savedPath),{sha256,...payload}=saved;requireValue(sha256===digest(payload),'completed certification payload changed');verifyEvidence(saved.evidence);
    const frontier=gateFrontier(root,run),scoped=saved.items.filter(row=>frontier.has(row.id));
    const current=hashes(root);for(const row of scoped)requireValue(row.guard_sha256===current[row.id],`stale completed certification ${row.id}`);
    const contexts=contextHasher(root,scoped.map(row=>row.id));
    for(const row of scoped){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale completed certification context ${row.id}`);}
    atomic(join(workflowDir(root,run),'certification.json'),saved);return saved;
  }
  const advanced=advanceImpact(root,run,phase,round);
  requireValue(advanced.complete,'owner impact repair continuation must finish before certification');
  const dir=workflowDir(root,run), result=read(join(dir,`${phase}-${round}-closed.json`));
  verifyEvidence(result.evidence);
  const source=phase==='impact-initial'?'initial':'repeat';
  const prior=verifyCertification(root,run);
  const sourceResult=phase==='gate'?null:read(join(dir,`${source}-${round}-collected.json`));
  const allReviews=[...(sourceResult?.reviews??[]),...result.reviews];
  const eligible=gateFrontier(root,run),createdIds=new Set([...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])].map(row=>row.id));
  const certifiedScope=id=>eligible.has(id)||createdIds.has(id);
  const reviewed=new Map(allReviews.filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const current=hashes(root), rawBefore=rawHashes(root), baseline=read(join(dir,'baseline.json'));
  const changed=diff(baseline,current).filter(certifiedScope);
  const priorItems=new Map((prior?.items??[]).filter(row=>certifiedScope(row.id)).map(row=>[row.id,row]));
  const progress=read(impactProgressPath(root,run,phase,round));
  const impactPack=readPack(root,run,progress.repairBasePhase??phase,round);
  // Stable subjects retain all external prerequisite carriers as context;
  // unrelated writers cannot turn their own content into this run's subjects.
  const library=readLibraryItems(root),stable=prerequisiteScope(library,[...eligible,...createdIds]);
  for(const id of diff(result.post,current).filter(id=>stable.has(id)))requireValue(false,`writer changed relevant content after collection: ${id}`);
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
  const reviewContextsNow=reviewContexts(library);
  for(const [id,row]of reviewed){
    if(row.reviewed_by==='root')requireValue(reviewContextsNow.matches(row,current)
      &&contexts.get(id)?.item_sha256===row.item_sha256&&contexts.get(id)?.context_sha256===row.context_sha256,
      `stale root owner review context before certification: ${id}`);
  }
  if(diff(rawBefore,rawHashes(root)).some(id=>stable.has(id)))throw Error('relevant item writer overlapped certification');
  const evidence={...(prior?.evidence??{}),...(sourceResult?.evidence??{}),...result.evidence};
  for(const name of ['frontier.json','baseline.json','step6-verdicts.json',`${phase}-${round}-closed.json`,`${phase}-${round}-progress.json`,...(phase==='gate'?[]:[`${source}-${round}-collected.json`])]){const p=join(dir,name);evidence[p]=digest(readFileSync(p,'utf8'));}
  const items=ids.map(id=>({id,...contexts.get(id),guard_sha256:current[id],reason:reviewed.get(id)?.reason??priorItems.get(id)?.reason}));
  const creationRows=[...(prior?.creations??[]),...(sourceResult?.created_items??[]),...(result.created_items??[])],creationById=new Map();
  for(const row of creationRows){const old=creationById.get(row.id);if(old&&JSON.stringify(old)!==JSON.stringify(row))throw Error(`conflicting creation provenance: ${row.id}`);creationById.set(row.id,row);}
  const creations=[...creationById.values()].sort((a,b)=>a.id.localeCompare(b.id));
  for(const row of creations){creationRegistration(root,run,row);requireValue(current[row.id],`created item missing at certification: ${row.id}`);}
  const certificate={version:2,run,phase,round,at:new Date().toISOString(),items,creations,evidence,changed,
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
  const step6Verdicts=read(join(dir,'step6-verdicts.json'));
  const judgeModel=step6Verdicts.some(row=>row.model===MODELS.sol61.id)?MODELS.sol61.id:MODELS.sol.id;
  const judgeLineup=judgeModel===MODELS.sol61.id?'sol61':'sol';
  const judgeEffort='high';
  const prev=Object.fromEntries(priorVerdicts.filter(r=>r.model===judgeModel).map(r=>[r.id,r]));
  const beforeContexts=contextHasher(root,candidates.map(row=>row.id));
  for(const row of candidates){const now=beforeContexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`certified context changed before Sol judgment: ${row.id}`);}
  const migrationIds=priorVerdicts.filter(r=>r.model!==judgeModel).map(r=>r.id);
  const ids=[...new Set([...cert.changed,...migrationIds])].filter(id=>frontier.has(id)).filter(id=>{const now=beforeContexts.get(id);requireValue(now,`missing judge context ${id}`);return prev[id]?.item_sha256!==now.item_sha256||prev[id]?.context_sha256!==now.context_sha256;});
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  if(ids.length) {
    const out=runSweep?runSweep({root,run,ids,ledger}):spawnSync(process.execPath,['tools/judge-sweep.mjs','--run',run,'--ledger',ledger,'--cost',`research/${run}-judge-cost.jsonl`,'--items',ids.join(','),'--lineup',judgeLineup,'--effort',judgeEffort],{cwd:root,stdio:'inherit',timeout:43200000});
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
  for(const row of items)if(row.guard_sha256!==current[row.id])throw Error(`stale Step 7 certification ${row.id}`);
  for(const row of items){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale Step 7 certification context ${row.id}`);}
  for(const id of diff(read(join(workflowDir(root,run),'baseline.json')),current))if((!frontier||frontier.has(id))&&!items.some(row=>row.id===id))throw Error(`uncovered Step 7 repair ${id}`);
  return cert;
}

export function checkWorkflow(root,run,options={}) {
  const cert=verifyWave(root,run,{...options,frontierOnly:true});
  requireValue(['impact-repeat','gate'].includes(cert.phase)&&Number.isInteger(cert.latest_adjudication_round),'Step 7 has not completed its Sol judgment/adjudication cycle');
  const thresholdPath=join(workflowDir(root,run),`threshold-${cert.latest_adjudication_round}.json`);
  requireValue(cert.evidence[thresholdPath]&&existsSync(thresholdPath),'missing bound fatal threshold');
  const threshold=read(thresholdPath);requireValue(threshold.belowThreshold===true&&threshold.errors?.length===0&&threshold.fatalCount*20<threshold.originalCount,'Step 7 fatal threshold not reached');
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
    console.log(`step7-workflow close-empty-adjudication: mechanical zero-work closure for ${phase}/${round}/${result.unit}; no mathematical review`);return;
  }
  console.log(`step7-workflow ${args[0]}: ${result.items?.length??result.changed?.length??result.ids?.length??0} item(s), complete`);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{main();}catch(error){console.error(error.message);process.exitCode=1;}}
