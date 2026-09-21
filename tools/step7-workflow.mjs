#!/usr/bin/env node
// Round-based Step 7. Mathematical workers write evidence; only the controller
// collects it, judges a stable snapshot, and certifies a completed repair wave.
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, appendFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { freezeFrontier, validateFrontier, readLibraryItems, discoverDownstream, assessFatalThreshold } from './step7-rounds.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { currentHashesMany } from './step7-terminal-resolution.mjs';
import { MODELS } from './models.mjs';

export const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const lines = path => existsSync(path) ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
export const workflowDir = (root, run) => join(root, 'research', `${run}-step7-v2`);
export const packPath = (root, run, phase, round) => join(workflowDir(root, run), `${phase}-${round}.json`);
const atomic = (path, value) => { mkdirSync(resolve(path, '..'), {recursive:true}); const tmp = `${path}.${process.pid}.tmp`; writeFileSync(tmp, JSON.stringify(value,null,2)+'\n'); renameSync(tmp,path); };
const frozen = (path, value) => { if (existsSync(path)) { if (JSON.stringify(read(path)) !== JSON.stringify(value)) throw Error(`immutable evidence conflict: ${path}`); } else atomic(path,value); };
const key = row => `${row.id}\0${row.model}\0${row.context_sha256}`;
const hashes = root => Object.fromEntries(readLibraryItems(root).map(row => [row.id,itemHashGuard(readFileSync(join(root,'items',`${row.id}.md`),'utf8'))]));
const diff = (a,b) => [...new Set([...Object.keys(a),...Object.keys(b)])].filter(id=>a[id]!==b[id]).sort();
const evidenceText = row => typeof row.reason === 'string' && row.reason.trim().length >= 40 && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url=>/^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const requireValue=(condition,message)=>{if(!condition)throw Error(message);};
const verifyEvidence=evidence=>{for(const [p,hash]of Object.entries(evidence??{}))requireValue(existsSync(p)&&digest(readFileSync(p,'utf8'))===hash,`Step 7 evidence changed: ${p}`);};
const rawHashes=root=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.sha256]));
const creationId=/^(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
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
function dependencyReviewHasher(items,current) {
  const graph=new Map(items.map(row=>[row.id,row.deps])),aliases=new Map();
  for(const row of items)for(const alias of row.aliases??[])if(!graph.has(alias))aliases.set(alias,row.id);
  return id=>{
    const seen=new Set(),queue=[id];
    for(let index=0;index<queue.length;index++){
      const next=aliases.get(queue[index])??queue[index];if(seen.has(next))continue;seen.add(next);
      queue.push(...(graph.get(next)??[]));
    }
    return digest([...seen].sort().map(supplier=>[supplier,current[supplier]??null]));
  };
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
  const latest=new Map(); for(const row of validVerdicts(verdicts)) latest.set(`${row.id}\0${row.model}`,row);
  if(phase==='initial')for(const id of frontier.ids)requireValue([...latest.values()].some(row=>row.id===id&&typeof row.keep==='boolean'),`missing Step 6 verdict: ${id}`);
  for(const row of latest.values())requireValue(typeof row.keep==='boolean',`missing complete judge verdict: ${row.id}`);
  const rejected=[...latest.values()].filter(r=>r.keep===false);
  const prior=verifyCertification(root,run), additions=new Map((prior?.creations??[]).map(row=>[row.id,String(row.batch)]));
  const byId=new Map(frontier.batches.flatMap(b=>b.items.map(id=>[id,String(b.id)])));
  // Published consumers acquired during owner repair are assigned once to the
  // first batch. The original denominator and ownership remain immutable.
  const units=frontier.batches.map(b=>String(b.id));
  const assignments=Object.fromEntries(units.map(u=>[u,rejected.filter(r=>(byId.get(r.id)??additions.get(r.id)??units[0])===u)]));
  const identity=libraryIdentity(root);
  const pack={version:2,run,phase,round,units,assignments,before:hashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),rejected,input_evidence:{[judgeInput]:digest(readFileSync(judgeInput,'utf8'))}};
  frozen(path,pack); writeTasks(root,pack,'adjudicate'); return pack;
}

function writeTasks(root,pack,mode) {
  for(const unit of pack.units) {
    const report=workerReport(root,pack.run,pack.phase,pack.round,unit);
    const task=report.replace(/\.json$/,'.task.md');
    if(existsSync(task)) continue;
    const assigned=pack.assignments[unit];
    const body=[`# Step 7 ${mode}: ${pack.phase}, round ${pack.round}, unit ${unit}`,
      `Read briefs/step7-${mode==='adjudicate'?'adjudicator':'owner-repair'}.md.`,
      `Frozen inputs: ${packPath(root,pack.run,pack.phase,pack.round)}.`,
      `Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and ${report}.`,
      'Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.',
      'Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.',
      'Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.',
      mode==='adjudicate' ? 'Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.' :
        'Review every assigned downstream item, including published items. Repair each relevant impact, or explain why unaffected. Work supplier-before-consumer. Published repairs are authorized by the owner for this impact wave. Reconcile proof contracts, dependencies, page metadata and publication audit evidence.',
      `Return JSON {run,phase,round,unit,input_sha256:"${digest(pack)}",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.`,
      `Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run ${pack.run} --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.`,
      mode==='adjudicate' ? 'Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.' :
        'Owner repair units run serially. You may update research/published-consumer-supplier-ledger.md for your assigned findings, maintaining its canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.',
      pack.ledger_updates?.length ? `Adjudicator ledger proposals requiring reconciliation:\n${JSON.stringify(pack.ledger_updates,null,2)}` : '',
      'For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.',
      'Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.',
      `Assigned input:\n${JSON.stringify(assigned,null,2)}`,
      pack.failures ? `Your gate diagnostics:\n${JSON.stringify((pack.gateAssignments??{})[unit]??[],null,2)}\nAll failures:\n${JSON.stringify(pack.failures,null,2)}` : '',
    ].join('\n\n');
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
  if(existsSync(collectedPath)){const prior=read(collectedPath);verifyEvidence(prior.evidence);return prior;}
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
    const role=phase==='initial'||phase==='repeat'?'alpha-adjudicate':'alpha-repair';
    const dispatch=join(root,'research',`${run}-dispatch`,`${role}-${workerLabel(phase,round,unit)}.result.json`);
    const receipt=read(dispatch); if(receipt.ok!==true||receipt.run!==run||receipt.role!==role||receipt.label!==workerLabel(phase,round,unit)||receipt.model!==MODELS.sol.id||receipt.provider_effort!=='xhigh')throw Error(`worker did not succeed with required Sol xhigh identity: ${dispatch}`);
    evidence[dispatch]=digest(readFileSync(dispatch,'utf8'));
    for(const row of reports.find(value=>String(value.unit)===unit)?.created_items??[])creationAuthors.set(row.id,basename(dispatch));
  }
  const receipt={...result,created_items:result.created_items.map(row=>({...row,author_result:creationAuthors.get(row.id)})),version:2,run,phase,round,evidence,post:hashes(root),downstream:[...new Set(reports.flatMap(row=>row.downstream))],ledger_updates:reports.flatMap(row=>row.ledger_updates??[])};
  const required=discoverDownstream({items:readLibraryItems(root),repairedIds:result.changed});
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
  return receipt;
}

export const impactProgressPath=(root,run,phase,round)=>join(workflowDir(root,run),`${phase}-${round}-progress.json`);
export function impactPasses(root,run,phase,round) {
  const path=impactProgressPath(root,run,phase,round);
  return existsSync(path)?read(path).passes:[phase];
}

/** Called only after all three dispatches for the active pass have drained.
 * Completed evidence is immutable. Only missing or stale downstream reviews
 * enter the next three-owner pass; certification has not begun at this point. */
export function advanceImpact(root,run,phase,round) {
  requireValue(['impact-initial','impact-repeat','gate'].includes(phase),'invalid base owner phase');
  const path=impactProgressPath(root,run,phase,round);
  const progress=existsSync(path)?read(path):{version:2,run,phase,round,passes:[phase],activePhase:phase,complete:false};
  if(progress.complete)return {complete:true,phase,round,passes:progress.passes};
  const active=readPack(root,run,progress.activePhase,round);
  if(active.units.some(unit=>!existsSync(workerReport(root,run,active.phase,round,unit))))return {complete:false,pack:active,passes:progress.passes};
  collect(root,run,active.phase,round,{deferImpactClosure:true});
  const completed=progress.passes.map(pass=>read(join(workflowDir(root,run),`${pass}-${round}-collected.json`)));
  for(const receipt of completed)verifyEvidence(receipt.evidence);
  const base=readPack(root,run,phase,round),current=hashes(root),items=readLibraryItems(root);
  const changed=diff(base.before,current),seeds=[...new Set([...(base.seeds??[]),...changed])];
  const impacts=discoverDownstream({items,repairedIds:seeds});
  const required=new Set([...Object.values(base.assignments).flat(),...impacts.map(row=>row.id),...changed]);
  const reviews=new Map(completed.flatMap(receipt=>receipt.reviews).map(row=>[row.id,row]));
  // An adjudicator's source review remains valid unless an owner changes it.
  // It is used only for closure accounting, never counted as an owner repair.
  const source=phase==='impact-initial'?'initial':phase==='impact-repeat'?'repeat':null;
  const sourceReceipt=source?read(join(workflowDir(root,run),`${source}-${round}-collected.json`)):null;
  const sourceReviews=new Map((sourceReceipt?.reviews??[]).map(row=>[row.id,row]));
  for(const id of sourceReviews.keys())required.add(id);
  const contextHash=dependencyReviewHasher(items,current);
  const pending=[...required].filter(id=>{const row=reviews.get(id)??sourceReviews.get(id);return row?.post_sha256!==current[id]||row?.review_context_sha256!==contextHash(id);}).sort();
  if(pending.length) {
    const nextPhase=`${phase}-pass-${progress.passes.length+1}`;
    const assignments={'1':[],'2':[],'3':[]};
    const {order,cycles}=orderImpacts(items,pending);
    order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
    const identity=libraryIdentity(root);
    const pack={version:2,run,phase:nextPhase,basePhase:phase,round,units:['1','2','3'],assignments,before:current,before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),seeds,impacts,cycles,failures:null,gateAssignments:{},ledger_updates:completed.flatMap(receipt=>receipt.ledger_updates??[])};
    frozen(packPath(root,run,nextPhase,round),pack);writeTasks(root,pack,'repair');
    progress.passes.push(nextPhase);progress.activePhase=nextPhase;atomic(path,progress);
    return {complete:false,pack,passes:progress.passes};
  }
  const evidence=Object.assign({},...completed.map(receipt=>receipt.evidence));
  for(const pass of progress.passes){const p=join(workflowDir(root,run),`${pass}-${round}-collected.json`);evidence[p]=digest(readFileSync(p,'utf8'));}
  const receipt={version:2,run,phase,round,errors:[],decisions:[],reviews:[...reviews.values()],created_items:completed.flatMap(row=>row.created_items??[]),changed,post:current,evidence,downstream:impacts.map(row=>row.id),ledger_updates:completed.flatMap(row=>row.ledger_updates??[])};
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
  const source=phase==='impact-initial'?'initial':'repeat';
  const result=phase==='gate' ? null : collect(root,run,source,round);
  const items=readLibraryItems(root), allIds=new Set(items.map(r=>r.id));
  const named=failures ? [...new Set(JSON.stringify(failures).match(/\b(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*\b/g)??[])].filter(id=>allIds.has(id)) : [];
  const seeds=result?.changed??named;
  const impacts=discoverDownstream({items,repairedIds:seeds});
  const targets=[...new Set([...impacts.map(r=>r.id),...named])].sort();
  // Deterministic disjoint lanes run serially. This protects shared contracts
  // and transitive suppliers while still giving exactly three owner agents.
  const assignments={'1':[],'2':[],'3':[]};
  // Conservative body-link impact graphs can contain orientation cycles. Do
  // not suppress their repair tasks; the dependency gate still judges cycles.
  const {order,cycles}=orderImpacts(items,targets);
  order.forEach((id,index)=>assignments[String(Math.min(2,Math.floor(index/Math.max(1,Math.ceil(order.length/3))))+1)].push(id));
  const diagnostics=failures===null?[]:(Array.isArray(failures)?failures:[failures]);
  const gateAssignments=Object.fromEntries(['1','2','3'].map(unit=>[unit,diagnostics.map((failure,index)=>({index,failure})).filter(row=>String(row.index%3+1)===unit)]));
  const identity=libraryIdentity(root);
  const pack={version:2,run,phase,round,units:['1','2','3'],assignments,before:hashes(root),before_aliases:Object.fromEntries(identity.aliases),home_pages:manifestHomes(root,run),impacts,seeds,failures,gateAssignments,cycles:[...new Set(cycles)],ledger_updates:result?.ledger_updates??[]};
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
    const current=hashes(root);for(const row of saved.items)requireValue(row.guard_sha256===current[row.id],`stale completed certification ${row.id}`);
    const contexts=contextHasher(root,saved.items.map(row=>row.id));
    for(const row of saved.items){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale completed certification context ${row.id}`);}
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
  const reviewed=new Map(allReviews.map(row=>[row.id,row]));
  const current=hashes(root), rawBefore=rawHashes(root), baseline=read(join(dir,'baseline.json'));
  const changed=diff(baseline,current);
  const priorItems=new Map((prior?.items??[]).map(row=>[row.id,row]));
  const impactPack=readPack(root,run,phase,round);
  // Every writer's final report must still describe its actual final carrier.
  // This also rejects post-collection edits before certification can be minted.
  for(const id of diff(result.post,current))requireValue(false,`writer changed content after collection: ${id}`);
  const currentImpacts=discoverDownstream({items:readLibraryItems(root),repairedIds:[...new Set([...(impactPack.seeds??[]),...result.changed])]}).map(row=>row.id);
  for(const id of currentImpacts)if(!reviewed.has(id))throw Error(`new downstream consumer requires owner review: ${id}`);
  for(const row of allReviews)if(row.post_sha256!==current[row.id]&&reviewed.get(row.id)===row)throw Error(`review changed before certification: ${row.id}`);
  for(const id of changed) if(!reviewed.has(id)&&priorItems.get(id)?.guard_sha256!==current[id])throw Error(`uncertified change ${id}`);
  const ids=[...new Set([...changed,...reviewed.keys(),...(prior?.items??[]).map(r=>r.id)])].sort();
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
  const current=hashes(root);for(const row of cert.items)if(current[row.id]!==row.guard_sha256)throw Error(`item changed before Terra judgment: ${row.id}`);
  requireValue((round===1&&cert.phase==='impact-initial')||(round>1&&cert.phase==='impact-repeat'&&cert.round===round-1),'Terra round does not follow a completed certification barrier');
  const prev=round===1?{}:Object.fromEntries(read(join(dir,`judge-${round-1}.json`)).verdicts.map(r=>[r.id,r]));
  const beforeContexts=contextHasher(root,cert.items.map(row=>row.id));
  for(const row of cert.items){const now=beforeContexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`certified context changed before Terra judgment: ${row.id}`);}
  const ids=cert.changed.filter(id=>{const now=beforeContexts.get(id);requireValue(now,`missing judge context ${id}`);return prev[id]?.item_sha256!==now.item_sha256||prev[id]?.context_sha256!==now.context_sha256;});
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  if(ids.length) {
    const out=runSweep?runSweep({root,run,ids,ledger}):spawnSync(process.execPath,['tools/judge-sweep.mjs','--run',run,'--ledger',ledger,'--cost',`research/${run}-judge-cost.jsonl`,'--items',ids.join(','),'--models',MODELS.terra.id],{cwd:root,stdio:'inherit',timeout:43200000});
    if(out.status!==0)throw Error(`Terra sweep failed (${out.status}); resume preserves completed verdicts`);
  }
  const currentContexts=contextHasher(root,ids), verdicts=[];
  for(const id of ids)requireValue(JSON.stringify(beforeContexts.get(id))===JSON.stringify(currentContexts.get(id)),`item changed during Terra judgment: ${id}`);
  for(const id of ids){const now=currentContexts.get(id);const row=lines(ledger).filter(r=>r.id===id&&r.model===MODELS.terra.id&&r.item_sha256===now.item_sha256&&r.context_sha256===now.context_sha256&&typeof r.keep==='boolean').at(-1);if(!row)throw Error(`missing current Terra verdict ${id}`);verdicts.push(row);}
  const carried=Object.values(prev).filter(row=>!ids.includes(row.id));
  const receipt={version:2,run,round,items:ids,verdicts:[...carried,...verdicts],certification_sha256:cert.sha256};frozen(path,receipt);return receipt;
}

export function verifyWave(root,run,{contextHasher=currentHashesMany}={}) {
  const cert=verifyCertification(root,run,{allowMissing:false}), current=hashes(root);
  const contexts=contextHasher(root,cert.items.map(row=>row.id));
  for(const row of cert.items)if(row.guard_sha256!==current[row.id])throw Error(`stale Step 7 certification ${row.id}`);
  for(const row of cert.items){const now=contexts.get(row.id);requireValue(now?.item_sha256===row.item_sha256&&now?.context_sha256===row.context_sha256,`stale Step 7 certification context ${row.id}`);}
  for(const id of diff(read(join(workflowDir(root,run),'baseline.json')),current))if(!cert.items.some(row=>row.id===id))throw Error(`uncovered Step 7 repair ${id}`);
  return cert;
}

export function checkWorkflow(root,run,options={}) {
  const cert=verifyWave(root,run,options);
  requireValue(['impact-repeat','gate'].includes(cert.phase)&&Number.isInteger(cert.latest_adjudication_round),'Step 7 has not completed its Terra/adjudication cycle');
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
