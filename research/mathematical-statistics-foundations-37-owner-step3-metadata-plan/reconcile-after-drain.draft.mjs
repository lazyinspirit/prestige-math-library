// DRAFT ONLY. Not executed by its preparer. Root must review before execution.
// No source, manifest, readiness, native decision or frozen snapshot writes.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { runPages, dependencyLevels } from '../../tools/item-dependency-levels.mjs';
import { splitFrontmatter, sectionText } from '../../tools/facts-block.mjs';
import { yaml } from '../../tools/pathway-lib.mjs';
import { sourceIdenticalAcceptanceContinuity } from '../../tools/step3-owner-source-identical-continuity.mjs';

const run = 'mathematical-statistics-foundations-37';
const root = process.cwd();
if (!process.argv.includes('--root-execute-after-drain'))
  throw Error('Unexecuted draft: root review and explicit --root-execute-after-drain required');
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const canonical = x => Array.isArray(x) ? x.map(canonical)
  : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const rawHash = x => createHash('sha256').update(x).digest('hex');
const hash = x => rawHash(JSON.stringify(canonical(x)) ?? 'undefined');
const equal = (a,b) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
const assertDrained = () => {
  if (read(`.autopilot/${run}/state.json`).paused !== true) throw Error('Exact run must be paused');
  const live = execFileSync('ps', ['-eo','args='], {encoding:'utf8'}).split('\n')
    .filter(s => s.includes('tools/dispatch.mjs') && s.includes(`--run ${run}`));
  if (live.length) throw Error(`Native dispatcher still live (${live.length}); root must also attest all descendant writers drained`);
};
assertDrained();
// PHASE 1 ONLY: run BEFORE any manifest/contract edits or decision stamping.
// Captures actual originals even when current mirrors are not yet reconciled.
if (process.argv.includes('--capture-only')) {
  const dir = `research/${run}-owner-step3-metadata-plan/evidence/capture-${new Date().toISOString().replace(/[:.]/g,'-')}`;
  const records = [], copy = (path, role) => {
    const raw=readFileSync(path), dest=`${dir}/${role}/${basename(path)}`;
    mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,raw,{flag:'wx'});
    return {path:dest,sha256:rawHash(raw)};
  };
  for (let batch=1;batch<=37;batch++) {
    const path=`research/${run}-alpha-batch-${batch}-3a-decisions.json`;
    if(!existsSync(path))continue;
    const decisions=read(path).decisions??[], accepted=decisions.filter(d=>d.verdict==='accepted_repair');
    if(!accepted.length)continue;
    const archived=copy(path,`batch-${batch}`), postPath=`research/${run}-step3-hash-${batch}-post.json`, post=read(postPath);
    const native=[];
    for(const p of [postPath,`research/${run}-dispatch/alpha-3a-batch-${batch}.result.json`,`research/${run}-alpha-batch-${batch}-3a.md`,`research/${run}-alpha-batch-${batch}-3a-order.task.md`])native.push(copy(p,`batch-${batch}`));
    for(const d of accepted) {
      const record={batch,id:d.id,route:d.route,accepted_decision_archive:archived,native_archives:native};
      if(d.route==='touched') {
        const p=`items/${d.id}.md`, raw=readFileSync(p);
        if(rawHash(raw)===post.hashes?.[d.id]?.item_sha256)record.source_metadata_before=copy(p,`source-${batch}`);
        else record.source_capture_refused='Current raw source differs from immutable reader-post; these bytes cannot stand in for the accepted preimage';
      } else record.source_capture_refused='Page or other route: item acceptance continuity is inapplicable';
      records.push(record);
    }
  }
  for(let batch=1;batch<=37;batch++)for(const suffix of ['pages.json','proof-contracts.json'])copy(`research/${run}-batch-${batch}.${suffix}`,'metadata-before');
  copy(`research/${run}-proof-contracts.json`,'aggregate-before');
  const owner=`research/${run}-step3-owner-repair-evidence.json`;if(existsSync(owner))copy(owner,'owner-before');
  assertDrained();
  writeFileSync(`${dir}/capture.json`,JSON.stringify({version:1,run,mode:'capture-only',records,canonical_writes:[]},null,2)+'\n',{flag:'wx'});
  console.log(JSON.stringify({capture:dir,accepted_records:records.length,canonical_writes:[]}));
  process.exit(0);
}
const pages = runPages(root, run), graph = dependencyLevels(pages, {validateLabels:false});
if (!graph.items.size || graph.errors.length) throw Error(graph.errors.join('\n') || 'Empty frontier');
const batchDocs = new Map(), scopes = new Map(), sources = new Map(), errors = [], mirrorWarnings = [];
for (const p of pages) if (!batchDocs.has(p.batch)) {
  batchDocs.set(p.batch, read(`research/${run}-batch-${p.batch}.proof-contracts.json`));
  scopes.set(p.batch, read(`research/${run}-step3-scope-${p.batch}.json`));
}
// Refuse numeric edits: current inspection found none necessary. A future
// mismatch needs root's separately archived source_metadata_before operation.
for (const [id,{item,page}] of graph.items) {
  const raw = readFileSync(`items/${id}.md`, 'utf8');
  let meta; try { meta = yaml().parse(splitFrontmatter(raw).fm); }
  catch (e) { errors.push(`${id}: YAML parse failed: ${e.message}`); continue; }
  const level = graph.levels.get(id);
  if (meta.dependency_level !== level || item.dependency_level !== level)
    errors.push(`${id}: numeric labels changed since plan; root archive/reconciliation required`);
  for (const key of ['id','kind','title','deps']) if (!equal(meta[key],item[key])) errors.push(`${id}: source/manifest ${key} mismatch`);
  const heading = ['definition','algorithm'].includes(meta.kind) ? 'Definition'
    : meta.kind === 'example' ? 'Example' : meta.kind === 'counterexample' ? 'Statement refuted' : 'Statement';
  const norm = s => String(s??'').replace(/\s+/g,' ').trim();
  if (meta.kind !== 'remark' && norm(item.statement) !== norm(sectionText(splitFrontmatter(raw).body,heading)))
    mirrorWarnings.push({id,reason:`Exact current source ${heading} is not mirrored; an affected continuity must fail its real guard`});
  sources.set(id, raw);
}
if (errors.length) throw Error(JSON.stringify({preflight_errors:errors},null,2));
const stamp = new Date().toISOString().replace(/[:.]/g,'-');
const archiveDir = `research/${run}-owner-step3-metadata-plan/evidence/${stamp}`;
const archive = (path, role) => {
  const raw = readFileSync(path); const to = `${archiveDir}/${role}/${basename(path)}`;
  mkdirSync(dirname(to), {recursive:true}); writeFileSync(to,raw,{flag:'wx'});
  return {path:to,sha256:rawHash(raw)};
};
const ref = path => ({path,sha256:rawHash(readFileSync(path))});
const nativeRefs = batch => {
  const snapshot = `research/${run}-step3-hash-${batch}-post.json`;
  const result = `research/${run}-dispatch/alpha-3a-batch-${batch}.result.json`;
  const report = `research/${run}-alpha-batch-${batch}-3a.md`;
  const assignment = `research/${run}-alpha-batch-${batch}-3a-order.task.md`;
  const snap = read(snapshot), done = read(result);
  if (snap.version!==2 || snap.run!==run || String(snap.batch)!==String(batch) || snap.label!=='post'
    || done.run!==run || done.role!=='alpha' || done.ok!==true || done.exit_code!==0 || done.timed_out===true
    || !done.covers?.map(String).includes(String(batch)) || done.terminal_summary?.task_completed!==true
    || done.terminal_summary?.task_aborted===true) throw Error(`Batch${batch}: no genuine completed native Alpha/post-reader authority`);
  // Exact immutable-native refs must retain these canonical paths for the guard.
  // Additional archives below preserve their original bytes without replacing refs.
  for (const p of [snapshot,result,report,assignment]) archive(p,`native-${batch}`);
  return {snap,post_reader_snapshot:ref(snapshot),native_result:ref(result),native_report:ref(report),native_assignment:ref(assignment)};
};
const aggregatePath = `research/${run}-proof-contracts.json`;
const oldAggregate = read(aggregatePath), merged = {...oldAggregate, scope:[...graph.items.keys()], contracts:{...oldAggregate.contracts}};
for (const [id,{page}] of graph.items) {
  const doc = batchDocs.get(page.batch);
  if (!Object.hasOwn(doc.contracts??{},id)) throw Error(`${id}: missing current batch contract; do not synthesize`);
  // Whole actual entry, including risk_review, repair_confidence, finite checks,
  // source review qualifications and any future native fields. No regeneration.
  merged.contracts[id] = doc.contracts[id];
}
const entries = [], ineligible = [], pagesOnly = [], decisionArchives = [];
for (const batch of batchDocs.keys()) {
  const path = `research/${run}-alpha-batch-${batch}-3a-decisions.json`;
  if (!existsSync(path)) continue;
  const doc = read(path), accepted = (doc.decisions??[]).filter(d=>d.verdict==='accepted_repair');
  if (!accepted.length) continue;
  const acceptedArchive = archive(path,`accepted-decisions-${batch}`); decisionArchives.push(acceptedArchive);
  const native = nativeRefs(batch), scope = scopes.get(batch);
  for (const decision of accepted) {
    if (decision.route==='page') {
      const p = pages.find(p=>p.batch===String(batch)&&p.id===decision.id);
      if (!p) {pagesOnly.push({id:decision.id,batch,status:'page-current-home-missing'});continue;}
      const {items,...metadata}=p; delete metadata.batch;
      const currentRaw = readFileSync(`library/${p.category}/${p.id}.md`);
      const currentFull={file_sha256:rawHash(currentRaw),manifest_sha256:hash(metadata),item_order:items.map(i=>i.id)};
      const anchor=scope.page_order_anchors?.[decision.id];
      const project=v=>{if(!v||typeof v!=='object')return v;const {item_order=[],...carrier}=v;return anchor ? {...carrier,item_order:item_order.filter(id=>anchor.includes(id))}:carrier;};
      pagesOnly.push({id:decision.id,batch,status:equal(project(native.snap.page_hashes?.[decision.id]),project(currentFull))?'current-page-carrier-identical':'page-carrier-differs-owner-route-required',continuity_entry_created:false});
      continue; // Item continuity helper NEVER accepts a page route.
    }
    const before = native.snap.hashes?.[decision.id];
    const row = graph.items.get(decision.id);
    const target={obligation:`touched:${batch}:${decision.id}`,id:decision.id,batch:String(batch),route:'touched',added:(scope.added??[]).includes(decision.id)};
    if (!row || decision.route!=='touched' || decision.obligation!==target.obligation || !(scope.touched??[]).includes(decision.id) || target.added) {
      ineligible.push({id:decision.id,batch,reason:'Not a genuine non-added native touched obligation; no continuity fabricated'});continue;
    }
    const raw=sources.get(decision.id);
    if (!before?.item_sha256 || rawHash(raw)!==before.item_sha256) {
      ineligible.push({id:decision.id,batch,reason:'Current raw source does not equal immutable reader-post source; no accepted-source preimage archived from these bytes'});continue;
    }
    const sourceArchive=archive(`items/${decision.id}.md`,`accepted-sources-${batch}`);
    const current={item_sha256:rawHash(raw),contract_sha256:hash(batchDocs.get(row.page.batch).contracts[decision.id]),manifest_sha256:hash({...row.item,__step4_page_id:row.page.id})};
    if (equal(before,current)) {ineligible.push({id:decision.id,batch,reason:'Current carrier already equals reader-post; no continuity exception needed',source_archive:sourceArchive});continue;}
    const {snap,...refs}=native;
    const entry={version:1,policy:'step3-source-identical-acceptance-continuity-v1',run,id:decision.id,obligation:decision.obligation,
      post_reader_carrier_sha256:hash(before),target_sha256:hash(target),current_carrier_sha256:hash(current),
      historical_manifest_delta_unknown:true,independent_execution_coverage_adopted:false,...refs,
      accepted_decision_archive:acceptedArchive,accepted_decision_sha256:hash(decision),source_metadata_before:sourceArchive};
    // This real guard recomputes bindings and invokes the actual strict contract
    // validator. The draft preparer has NOT called it. A claimed pass is useless.
    if (!sourceIdenticalAcceptanceContinuity(root,run,decision,target,before,current,entry)) {
      ineligible.push({id:decision.id,batch,reason:'Actual continuity guard/strict current contract rejected; no entry appended',source_archive:sourceArchive});continue;
    }
    entries.push(entry);
  }
}
assertDrained();
archive(aggregatePath,'aggregate-before');
const evidencePath=`research/${run}-step3-owner-repair-evidence.json`;
const prior=existsSync(evidencePath)?read(evidencePath):{version:1,run};
if(prior.version!==1||prior.run!==run)throw Error('Wrong owner evidence identity');
if(existsSync(evidencePath))archive(evidencePath,'owner-evidence-before');
const existing=prior.source_identical_acceptance_continuities??[];
const next={...prior,source_identical_acceptance_continuities:[...existing.filter(old=>!entries.some(e=>e.id===old.id&&e.obligation===old.obligation)),...entries]};
// These are the only two canonical writes, authorized and executed by ROOT only.
writeFileSync(aggregatePath,JSON.stringify(merged,null,2)+'\n');
writeFileSync(evidencePath,JSON.stringify(next,null,2)+'\n');
const report={version:1,run,at:new Date().toISOString(),operation:'root-executed native-contract projection and guarded acceptance continuity',new_worker_coverage:false,new_acceptance_verdicts:0,source_edits:[],manifest_edits:[],readiness_edits:[],native_decision_edits:[],decisionArchives,mirrorWarnings,continuity_entries:entries.map(e=>({id:e.id,obligation:e.obligation})),ineligible,page_dispositions:pagesOnly,root_next:'Handle every ineligible/page mismatch through its real owner/native route; then use ordinary authorized mechanical stamping/recertification and full native battery. No guard waiver.'};
writeFileSync(`${archiveDir}/operation.json`,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({archiveDir,items:graph.items.size,continuities:entries.length,ineligible:ineligible.length,pages:pagesOnly},null,2));
