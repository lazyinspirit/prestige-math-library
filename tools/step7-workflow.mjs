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
const verifyEvidence=evidence=>{for(const [p,hash]of Object.entries(evidence??{}))requireValue(existsSync(p)&&digest(readFileSync(p,'utf8'))===hash,`Step 7 evidence changed: ${p}`);};
const rawHashes=root=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.sha256]));
const creationId=/^(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
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

export function prepareAdjudication(root,run,phase,round) {
  requireValue(['initial','repeat'].includes(phase),'invalid adjudication phase');
  const path=packPath(root,run,phase,round); if(existsSync(path)) return read(path);
  const frontier=initialize(root,run), dir=workflowDir(root,run);
  const judgeInput=phase==='initial'?join(dir,'step6-verdicts.json'):join(dir,`judge-${round}.json`);
  const verdicts=phase==='initial' ? read(judgeInput) : read(judgeInput).verdicts;
  const activeModel=phase==='repeat'?MODELS.sol.id
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
    const body=[`# Step 7 ${mode}: ${pack.phase}, round ${pack.round}, unit ${unit}`,
      `Read briefs/step7-${mode==='adjudicate'?'adjudicator':'owner-repair'}.md.`,
      `Frozen inputs: ${packPath(root,pack.run,pack.phase,pack.round)}.`,
      `Write only your assigned frontier item files, their necessary owning contracts/metadata, and ${report}.`,
      'Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.',
      'SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.',
      pack.phase==='gate'||pack.basePhase==='gate'?'Step 7.9 permits no new items.':'You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.',
      'Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.',
      'Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.',
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
    ].join('\n\n');
    requireValue(pack.gateRoutingVersion!==1||body.length<64000,'gate launch task exceeds bounded prompt budget');
    writeFileSync(task,body+'\n',{flag:'wx'});
  }
}

export function validateReports(pack,reports,now,{root=null}={}) {
  const errors=[],decisions=[],reviews=[],createdItems=[],creatorById=new Map();
  for(const unit of pack.units) {
    const report=reports.find(r=>String(r.unit)===unit);
    if(!report||report.run!==pack.run||report.phase!==pack.phase||report.round!==pack.round||report.input_sha256!==digest(pack)) { errors.push(`missing or mismatched report ${unit}`);continue; }
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
  for(const id of changed) {
    if(pack.repair_scope==='frontier'&&!pack.frontier_ids?.includes(id)&&pack.before[id])errors.push(`out-of-frontier consumer cannot be repaired by Step 7: ${id}`);
    const created=creatorById.get(id),review=reviews.find(r=>r.id===id&&r.disposition===(created?'authored':'repaired'));
    if(!now[id]||!review||(!created&&!pack.before[id]))errors.push(`unlicensed or unreviewed change ${id}`);
    if(pack.rejected&&!created&&!decisions.some(r=>r.id===id&&['confirmed_fatal','confirmed_nonfatal'].includes(r.outcome)))errors.push(`change without confirmed adjudication ${id}`);
  }
  for(const id of Object.keys(pack.before))if(!now[id])errors.push(`unlicensed deletion ${id}`);
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
  const collectedPath=join(workflowDir(root,run),`${phase}-${round}-collected.json`);
  if(existsSync(collectedPath)){const prior=read(collectedPath);verifyEvidence(prior.evidence);syncMaintenance(root,run,prior.statement_events??[]);return prior;}
  const pack=readPack(root,run,phase,round);
  const reports=pack.units.map(unit=>read(workerReport(root,run,phase,round,unit)));
  const current=hashes(root),reported={...current};
  if(deferImpactClosure) {
    requireValue(!pack.rejected,'only owner waves can defer impact closure');
    // Archive the carriers workers actually reviewed. Later edits are queued
    // for another owner pass instead of invalidating already completed work.
    const assigned=new Set(Object.values(pack.assignments).flat());
    for(const row of reports.flatMap(report=>report.reviews??[]))if(assigned.has(row.id)&&/^[a-f0-9]{64}$/.test(row.post_sha256??''))reported[row.id]=row.post_sha256;
  }
  const result=validateReports(pack,reports,reported,{root});
  if(result.errors.length)throw Error(result.errors.join('\n'));
  const evidence={...(pack.input_evidence??{}),[packPath(root,run,phase,round)]:digest(readFileSync(packPath(root,run,phase,round),'utf8'))};
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
    const role=phase==='initial'||phase==='repeat'?'alpha-adjudicate':'alpha-repair';
    const dispatch=join(root,'research',`${run}-dispatch`,`${role}-${workerLabel(phase,round,unit)}.result.json`);
    const receipt=read(dispatch);
    const expected=role==='alpha-adjudicate'
      ? pack.judge_model===MODELS.luna.id?[[MODELS.astra.id,'medium']]:[[MODELS.astra.id,'medium'],[MODELS.sol.id,'xhigh']]
      : [[MODELS.sol.id,'xhigh']];
    if(receipt.ok!==true||receipt.run!==run||receipt.role!==role||receipt.label!==workerLabel(phase,round,unit)
      ||!expected.some(([model,effort])=>receipt.model===model&&receipt.provider_effort===effort))
      throw Error(`worker did not succeed with an authorized identity: ${dispatch}`);
    evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    for(const row of reports.find(value=>String(value.unit)===unit)?.created_items??[])creationAuthors.set(row.id,basename(dispatch));
  }
  const receipt={...result,created_items:result.created_items.map(row=>({...row,author_result:creationAuthors.get(row.id)})),version:2,run,phase,round,evidence,post:hashes(root),downstream:[...new Set(reports.flatMap(row=>row.downstream))],ledger_updates:reports.flatMap(row=>row.ledger_updates??[])};
  receipt.restated=restatedIds(pack,diff(pack.before,current),statementHashes(root));
  const afterStatements=statementHashes(root);
  receipt.statement_events=receipt.restated.filter(id=>pack.before_statements?.[id]||!pack.before[id]).map(id=>({id,before_statement_sha256:pack.before_statements?.[id]??statementHash(''),after_statement_sha256:afterStatements[id]}));
  if(pack.before_statements&&!receipt.restated.length&&!pack.seeds?.length)receipt.downstream=[];
  const frontier=gateFrontier(root,run);
  const direct=discoverDownstream({items:readLibraryItems(root),repairedIds:receipt.restated});
  const required=direct.filter(row=>frontier.has(row.id));
  const discoveries=receipt.downstream.filter(id=>!frontier.has(id)&&!direct.some(row=>row.id===id)&&!receipt.restated.includes(id));
  const uses=Object.assign({},...reports.map(row=>row.downstream_uses??{}));
  if(receipt.statement_events.length)for(const id of discoveries)requireValue(typeof uses[id]==='string'&&uses[id].trim().length>=40,`missing exact downstream use for outside consumer: ${id}`);
  if(discoveries.length)for(const event of receipt.statement_events)Object.assign(event,{consumer_ids:discoveries,discovery_evidence:Object.fromEntries(discoveries.map(id=>[id,uses[id]]))});
  receipt.inventory_missing=required.filter(row=>!receipt.downstream.includes(row.id)).map(row=>row.id);
  if(!deferImpactClosure)for(const id of receipt.inventory_missing)requireValue(false,`missing downstream inventory: ${id}`);
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

export function assertImpactProgress(packs,pending,current) {
  const targets=[...new Set(pending)].sort();
  for(const pack of packs) {
    // Pre-statement-policy assignments may legitimately need one migration
    // pass with the new review context. Do not mistake that for a repeat.
    if(!pack.before_statements)continue;
    const previous=[...new Set(Object.values(pack.assignments).flat())].sort();
    if(JSON.stringify(previous)===JSON.stringify(targets)&&diff(pack.before,current).length===0)
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
      requireValue(result.ok===true&&result.run===run&&result.role==='alpha-repair'&&result.label===label&&result.model===MODELS.sol.id&&result.provider_effort==='xhigh',`maintenance worker did not succeed with Sol xhigh identity: ${label}`);
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
  const changed=diff(base.before,current),rawSeeds=[...new Set([...(base.seeds??[]),...completed.flatMap(receipt=>receipt.restated??receipt.changed),...maintenanceChanges.filter(row=>row.before_statement_sha256!==row.after_statement_sha256).map(row=>row.id)])];
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
    assertImpactProgress(progress.passes.map(pass=>readPack(root,run,pass,round)),pending,current);
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
  verifyEvidence(row.evidence);
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
  const prev=Object.fromEntries(priorVerdicts.filter(r=>r.model===MODELS.sol.id).map(r=>[r.id,r]));
  const beforeContexts=contextHasher(root,candidates.map(row=>row.id));
  for(const row of candidates){const now=beforeContexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`certified context changed before Sol judgment: ${row.id}`);}
  const migrationIds=priorVerdicts.filter(r=>r.model!==MODELS.sol.id).map(r=>r.id);
  const ids=[...new Set([...cert.changed,...migrationIds])].filter(id=>frontier.has(id)).filter(id=>{const now=beforeContexts.get(id);requireValue(now,`missing judge context ${id}`);return prev[id]?.item_sha256!==now.item_sha256||prev[id]?.context_sha256!==now.context_sha256;});
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  if(ids.length) {
    const out=runSweep?runSweep({root,run,ids,ledger}):spawnSync(process.execPath,['tools/judge-sweep.mjs','--run',run,'--ledger',ledger,'--cost',`research/${run}-judge-cost.jsonl`,'--items',ids.join(','),'--lineup','sol','--effort','high'],{cwd:root,stdio:'inherit',timeout:43200000});
    if(out.status!==0)throw Error(`Sol sweep failed (${out.status}); resume preserves completed verdicts`);
  }
  const currentContexts=contextHasher(root,ids), verdicts=[];
  for(const id of ids)requireValue(JSON.stringify(beforeContexts.get(id))===JSON.stringify(currentContexts.get(id)),`item changed during Sol judgment: ${id}`);
  for(const id of ids){const now=currentContexts.get(id);const row=lines(ledger).filter(r=>r.id===id&&r.model===MODELS.sol.id&&r.item_sha256===now.item_sha256&&r.context_sha256===now.context_sha256&&typeof r.keep==='boolean').at(-1);if(!row)throw Error(`missing current Sol verdict ${id}`);verdicts.push(row);}
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
    case 'advance-impact':result=advanceImpact(root,run,phase,round);break;
    case 'certify':result=certify(root,run,phase,round);break;
    case 'judge':result=judge(root,run,round);break;
    case 'verify-wave':result=verifyWave(root,run);break;
    case 'check':result=checkWorkflow(root,run);break;
    default:throw Error('expected init|prepare|collect|advance-impact|certify|judge|verify-wave|check');
  }
  console.log(`step7-workflow ${args[0]}: ${result.items?.length??result.changed?.length??result.ids?.length??0} item(s), complete`);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{main();}catch(error){console.error(error.message);process.exitCode=1;}}
