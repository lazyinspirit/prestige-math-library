// One native, durable batch loop: three whole-batch reviews, at most two repairs.
// Workers return evidence; the controller alone advances the loop.
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, unlinkSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { loadStep3, itemHash } from './frontier-snapshot.mjs';
import { orderedItems, dependencyLevels } from './item-dependency-levels.mjs';
import { readLibraryItems } from './step5-rounds.mjs';
import { statementHash } from './step5-statement.mjs';
import { yaml } from './pathway-lib.mjs';

const read = path => JSON.parse(readFileSync(path, 'utf8'));
const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const assert = (ok, message) => { if (!ok) throw Error(message); };
const safe = value => { assert(/^[a-zA-Z0-9_-]+$/.test(value ?? ''), 'Invalid identity'); return String(value); };
const same = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
export const loopDir = (root, run, batch) => join(root, 'research', `${safe(run)}-scope-review`, `batch-${safe(batch)}`);
const atomic = (path, value) => { mkdirSync(resolve(path, '..'), { recursive: true }); const temp = `${path}.${process.pid}.tmp`; writeFileSync(temp, JSON.stringify(value, null, 2)+'\n'); renameSync(temp, path); };
const files = (root, dir) => !existsSync(join(root, dir)) ? [] : readdirSync(join(root, dir), { withFileTypes: true })
  .flatMap(entry => entry.isDirectory() ? files(root, `${dir}/${entry.name}`) : entry.name.endsWith('.md') ? [`${dir}/${entry.name}`] : []);
const fileHashes = root => Object.fromEntries([...files(root, 'items'), ...files(root, 'library'),
  ...readdirSync(join(root, 'research')).filter(name => name === 'plan-spec.json' || /-batch-\d+\.(?:pages|coverage|proof-contracts|cross-batch-dependencies)\.json$/.test(name)).map(name => `research/${name}`)]
  .sort().map(path => [path, digest(readFileSync(join(root, path), 'utf8'))]));

export function batchInput(root, run, batch) {
  const snapshot = loadStep3(root, run), pages = snapshot.pages.filter(page => page.batch === String(batch));
  assert(pages.length && pages.every(page => page.items?.length), `Batch ${batch}: empty inventory`);
  const items = pages.flatMap(page => page.items.map(item => item.id));
  assert(items.every(id => existsSync(join(root, 'items', `${id}.md`))), `Batch ${batch}: missing authored item`);
  const inventory = { pages: pages.map(page => page.id), items,
    pairs: [...snapshot.pairs].filter(([, pair]) => pair[0].batch === String(batch)).map(([id]) => id) };
  const input = { pages, inputs: items.map(id => [id, itemHash(snapshot, id)]),
    pages_bytes: pages.map(page => [page.id, existsSync(join(root, 'library', page.category, `${page.id}.md`))
      ? digest(readFileSync(join(root, 'library', page.category, `${page.id}.md`), 'utf8')) : null]),
    contracts: read(join(root, 'research', `${run}-batch-${batch}.proof-contracts.json`)),
    coverage: read(join(root, 'research', `${run}-batch-${batch}.coverage.json`)) };
  return { sha256: digest(input), inventory, snapshot };
}

/** Actual item and page prerequisites; never infer order from batch numbers. */
export function prerequisiteBatches(root, run, batch) {
  const snapshot = loadStep3(root, run), home = new Map(snapshot.pages.map(page => [page.id, page.batch]));
  const out = new Set(), deps = new Set();
  for (const page of snapshot.pages.filter(page => page.batch === String(batch))) {
    for (const id of page.requires ?? []) if (home.has(id) && home.get(id) !== String(batch)) out.add(home.get(id));
    for (const item of page.items ?? []) {
      const path=join(root,'items',`${item.id}.md`);
      const text=existsSync(path)?readFileSync(path,'utf8'):'';
      const fm=yaml().parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
      for (const id of [...(item.deps??[]),...(fm.deps??[])]) deps.add(id);
    }
  }
  // Most construction inventories are empty, and canonical dependencies already
  // have manifest owners. Read the corpus only when a used ID needs aliases.
  const unresolved = new Set([...deps].filter(id => !snapshot.items.has(id)
    && !existsSync(join(root, 'items', `${id}.md`))));
  const aliases = new Map();
  if (unresolved.size) {
    const library = readLibraryItems(root), canonical = new Set(library.map(item => item.id));
    for (const item of library) for (const alias of item.aliases ?? [])
      if (unresolved.has(alias) && !canonical.has(alias)) {
        assert(!aliases.has(alias) || aliases.get(alias) === item.id, `Ambiguous alias ${alias}`);
        aliases.set(alias, item.id);
      }
  }
  for (const id of deps) {
    const owner = snapshot.items.get(aliases.get(id) ?? id)?.page.batch;
    if (owner && owner !== String(batch)) out.add(owner);
  }
  return [...out].sort((a,b) => Number(a)-Number(b));
}

/** Full transitive consumer cone, including definitions and nonlogical uses. */
export function consumers(root, changed, extra = []) {
  const items = readLibraryItems(root), byId = new Map(items.map(item => [item.id, item]));
  for (const item of extra) {
    const current=byId.get(item.id);
    byId.set(item.id,current?{...current,deps:[...new Set([...(item.deps??[]),...(current.deps??[])])],
      references:[...new Set([...(item.references??[]),...(current.references??[])])]}:item);
  }
  const aliases = new Map();
  for (const item of [...items,...extra]) for (const alias of item.aliases ?? []) if (!byId.has(alias)) {
    assert(!aliases.has(alias) || aliases.get(alias) === item.id, `Ambiguous alias ${alias}`); aliases.set(alias,item.id);
  }
  const reverse = new Map();
  for (const item of byId.values()) for (const dep of [...(item.deps ?? []), ...(item.references ?? [])]) {
    const id = aliases.get(dep) ?? dep;
    if (!reverse.has(id)) reverse.set(id, []);
    reverse.get(id).push(item.id);
  }
  const paths = new Map();
  for(const root of changed){
    const seen=new Set([root]),queue=[[root]];
    for (let i=0; i<queue.length; i++) for (const id of reverse.get(queue[i].at(-1)) ?? []) {
      if (seen.has(id)) continue;
      seen.add(id); const path=[...queue[i],id]; queue.push(path);
      if(id!==root){if(!paths.has(id))paths.set(id,[]);paths.get(id).push(path);}
    }
  }
  return [...paths].map(([id,all]) => ({ id,path:all[0],paths:all })).sort((a,b)=>a.id.localeCompare(b.id));
}

export function loopState(root, run, batch) {
  const path = join(loopDir(root,run,batch),'state.json');
  const state = existsSync(path) ? read(path) : { version:1, run, batch:String(batch), reviews:[], repairs:[], phase:'review' };
  assert(state.version === 1 && state.run === run && state.batch === String(batch)
    && Array.isArray(state.reviews) && state.reviews.length <= 3 && Array.isArray(state.repairs) && state.repairs.length <= 2,
    `Batch ${batch}: invalid loop history`);
  return state;
}
const save = (root,run,batch,state) => atomic(join(loopDir(root,run,batch),'state.json'),state);
const label = (batch,phase,n) => `scope-${phase}-${batch}-${n}`;
const receipt = (ctx, prepared) => join(ctx.dispatchDir, `${prepared.role}-${prepared.label}.result.json`);
const reportPath = (root,run,batch,phase,n) => join(loopDir(root,run,batch),`${phase}-${n}.json`);

// The dispatcher retains this guard in memory while a repairer runs. A worker
// cannot reset its own durable round counters or alter a native input/task.
export function captureRepairControl(root,run,batch) {
  const dir=loopDir(root,run,batch);
  const protectedFiles=readdirSync(join(root,'research')).filter(name=>name.startsWith(`${run}-`)
    && !name.startsWith(`${run}-dispatch`) && /\.(?:json|jsonl)$/.test(name)
    && !name.startsWith(`${run}-batch-${batch}.`)).map(name=>join(root,'research',name));
  const parent=resolve(dir,'..');
  for(const sibling of readdirSync(parent).filter(name=>/^batch-\d+$/.test(name)))
    for(const name of readdirSync(join(parent,sibling)))
      if(/^(?:state\.json|owner-[a-f0-9]+\.json|(?:review|repair)-\d+\.(?:input\.json|task\.md|json))$/.test(name))protectedFiles.push(join(parent,sibling,name));
  const guard=protectedFiles.map(path=>({path,bytes:readFileSync(path)}));
  guard.root=root;guard.run=run;guard.batch=batch;
  return guard;
}
export function verifyRepairControl(guard) {
  const changed=guard.filter(row=>!existsSync(row.path)||!readFileSync(row.path).equals(row.bytes));
  // Restore only controller-owned loop bookkeeping; keep content defects visible.
  for(const row of changed.filter(row=>/-scope-review\/batch-/.test(row.path))){
    mkdirSync(resolve(row.path,'..'),{recursive:true});writeFileSync(row.path,row.bytes);
  }
  const now=captureRepairControl(guard.root,guard.run,guard.batch), before=new Set(guard.map(row=>row.path));
  const added=now.filter(row=>!before.has(row.path));
  for(const row of added.filter(row=>/-scope-review\/batch-/.test(row.path)))unlinkSync(row.path);
  assert(!changed.length&&!added.length,`Repair changed protected controller/review evidence: ${[...changed,...added].map(row=>row.path).join(', ')}`);
}

export function accepted(root,run,batch) {
  try {
    const state = loopState(root,run,batch);
    for(const [phase,rows] of [['review',state.reviews],['repair',state.repairs]])for(const row of rows)
      if(digest(read(reportPath(root,run,batch,phase,row.round)))!==row.report_sha256)return false;
    return state.phase === 'accepted' && state.accepted_sha256 === batchInput(root,run,batch).sha256;
  }
  catch { return false; }
}

function validateReport(row, state, prepared, input) {
  assert(row.version === 1 && row.run === state.run && row.batch === state.batch && row.round === prepared.round
    && row.input_sha256 === prepared.input_sha256 && same(row.reviewed_items, prepared.inventory.items)
    && row.reviewed_items.length === prepared.inventory.items.length && same(row.reviewed_pages, prepared.inventory.pages)
    && row.reviewed_pages.length === prepared.inventory.pages.length, 'Incomplete batch review or wrong report identity');
  assert(['accept','repair','escalate'].includes(row.decision) && Array.isArray(row.findings)
    && Array.isArray(row.consumer_checks) && typeof row.reason === 'string' && row.reason.trim() && row.reason.length <= 400,
    'Invalid lightweight batch report');
  for (const finding of row.findings) assert(typeof finding.id === 'string' && finding.id
    && ['prerequisite','scope','outside-batch','uncertainty','local'].includes(finding.type)
    && typeof finding.reason === 'string' && finding.reason.trim() && finding.reason.length <= 400, 'Invalid finding');
  if (prepared.phase === 'review') {
    assert(input.sha256 === prepared.input_sha256,'Review inputs changed during review');
    assert(row.decision !== 'accept' || !row.findings.length,'Acceptance contains unresolved findings');
    assert(!row.findings.some(f => ['prerequisite','scope','outside-batch','uncertainty'].includes(f.type)) || row.decision === 'escalate',
      'Significant prerequisite/scope/uncertainty requires owner escalation');
    assert(row.decision !== 'repair' || row.findings.length,'Repair requested without findings');
  }
}

function changedInterfaces(root, prepared) {
  const after = readLibraryItems(root), now = new Map(after.map(item => [item.id,item]));
  const changed = prepared.before_items.filter(item => !now.has(item.id) || now.get(item.id).statement_sha256 !== item.statement_sha256).map(item => item.id);
  return { changed, affected: consumers(root, changed, prepared.before_items) };
}

/** Called only after that batch's worker drains. Failed processes never advance. */
export function collectBatch(ctx,batch) {
  const state = loopState(ctx.repo,ctx.run,batch), p = state.prepared;
  if (state.phase === 'accepted' && !accepted(ctx.repo,ctx.run,batch)) { state.phase='held'; state.reason='Accepted inputs changed; owner resolution required'; save(ctx.repo,ctx.run,batch,state); }
  if (!p || state.phase === 'held' || state.phase === 'accepted' || !existsSync(receipt(ctx,p))) return state;
  const done=read(receipt(ctx,p));
  if (done.ok !== true) return state;
  assert(done.run === ctx.run && done.role === p.role && same(done.covers ?? [],[String(batch)]),'Wrong worker receipt');
  const path=reportPath(ctx.repo,ctx.run,batch,p.phase,p.round);
  assert(existsSync(path),'Successful worker omitted its report');
  const row=read(path), input=batchInput(ctx.repo,ctx.run,batch);
  validateReport(row,state,p,input);
  if (p.phase === 'repair') {
    const after=fileHashes(ctx.repo), before=p.before_files;
    const allowed=new Set([...p.inventory.items,...input.inventory.items].map(id=>`items/${id}.md`));
    for(const page of input.snapshot.pages.filter(page=>page.batch===String(batch)))allowed.add(`library/${page.category}/${page.id}.md`);
    for(const suffix of ['pages','coverage','proof-contracts','cross-batch-dependencies'])allowed.add(`research/${ctx.run}-batch-${batch}.${suffix}.json`);
    const imports=join(ctx.repo,'research','math-imports.json');
    if(existsSync(imports))for(const file of read(imports).files??[])allowed.delete(file.path);
    for(const file of new Set([...Object.keys(before),...Object.keys(after)])) if(before[file]!==after[file])
      assert(allowed.has(file),`Repair changed outside-batch file ${file}; owner resolution required`);
    assert(same(input.inventory.pages,p.inventory.pages),'Repair changed pair/page scope outside its authority');
    for(const id of input.inventory.items) if(!p.inventory.items.includes(id))assert(!p.before_files[`items/${id}.md`],'Repair rehomed an existing item');
    const impact=changedInterfaces(ctx.repo,p);
    assert(same(row.consumer_checks.map(x=>x.id),impact.affected.map(x=>x.id)),'Repair omitted direct or indirect consumer checks');
    if(row.consumer_checks.some(x=>x.decision!=='accept'))
      assert(row.decision==='escalate','Unresolved consumer repair or uncertainty requires escalation');
    assert(row.decision!=='accept'||!row.findings.length,'Completed repair has unresolved findings');
    assert(row.decision!=='repair','Repairer must report completion or escalation, not request another repair');
    state.repairs.push({round:p.round,report_sha256:digest(row),changed:impact.changed,consumers:impact.affected});
    state.phase=row.decision==='escalate'?'held':'review';
  } else {
    const prior=state.repairs.at(-1);
    const affected=prior?.consumers??[];
    const observed=row.consumer_checks.map(x=>x.id), required=affected.map(x=>x.id);
    const known=new Set(p.before_items.map(item=>item.id));
    // Escalating whole-batch readers can identify additional actual consumers.
    // Preserve those observations without turning them into acceptance coverage.
    assert(new Set(observed).size===observed.length && required.every(id=>observed.includes(id))
      && (same(observed,required) || (row.decision==='escalate' && observed.every(id=>known.has(id)))),
      'Reviewer omitted direct or indirect consumer checks or supplied invalid extra observations');
    assert(row.consumer_checks.every(x=>x.decision==='accept')||row.decision!=='accept','Acceptance has unresolved consumer impacts');
    state.reviews.push({round:p.round,report_sha256:digest(row),decision:row.decision});
    state.phase=row.decision==='accept'?'accepted':row.decision==='escalate'||state.reviews.length===3?'held':'repair';
    if(state.phase==='accepted')state.accepted_sha256=input.sha256;
  }
  state.reason=row.reason; delete state.prepared; save(ctx.repo,ctx.run,batch,state);
  if(state.phase==='accepted')atomic(join(ctx.dispatchDir,`tool-scope-accepted-${batch}.result.json`),
    {run:ctx.run,role:'tool',label:`scope-accepted-${batch}`,covers:[String(batch)],ok:true});
  return state;
}

// Owner resolution is explicit and hash-bound. It never refunds worker rounds.
export function resolveOwner(root,run,batch,{decision,reason,reviewer}) {
  const state=loopState(root,run,batch), input=batchInput(root,run,batch);
  assert(state.phase==='held','Owner resolution requires an actual hold');
  assert(['accept','continue'].includes(decision)&&reason?.trim()&&reviewer?.trim(),'Specify owner decision, reason and reviewer');
  assert(decision!=='continue'||state.reviews.length<3,'Three reviews exhausted; owner must independently resolve and accept');
  const receipt={version:1,run,batch:String(batch),decision,reason,reviewer,at:new Date().toISOString(),
    sha256:input.sha256,inventory:input.inventory,review_count:state.reviews.length,repair_count:state.repairs.length};
  atomic(join(loopDir(root,run,batch),`owner-${digest(receipt).slice(0,16)}.json`),receipt);
  state.owner_resolution=receipt;state.phase=decision==='accept'?'accepted':'review';delete state.prepared;
  if(decision==='accept')state.accepted_sha256=input.sha256;
  save(root,run,batch,state);
  return receipt;
}

export function loopPattern(ctx,batches) {
  const labels=[];
  for(const batch of batches){
    if(accepted(ctx.repo,ctx.run,batch))labels.push(`tool-scope-accepted-${batch}`);
    const state=loopState(ctx.repo,ctx.run,batch);
    if(state.prepared)labels.push(`${state.prepared.role}-${state.prepared.label}`);
  }
  return labels.length?new RegExp(`^(?:${labels.join('|')})\\.result\\.json$`):/^(?!)$/;
}

export function batchPlan(ctx,batch) {
  const state=loopState(ctx.repo,ctx.run,batch);
  if(state.phase==='held')throw Error(`Batch ${batch} held for owner: ${state.reason}`);
  if(accepted(ctx.repo,ctx.run,batch))return null;
  const phase=state.phase, round=phase==='review'?state.reviews.length:state.repairs.length+1;
  assert(phase==='review'?round<3:round<=2,'Batch repair budget exhausted; owner resolution required');
  const input=batchInput(ctx.repo,ctx.run,batch), role=phase==='review'?'scope-reviewer':'scope-repairer';
  // Review order must agree with the actual authored logical dependencies.
  const library=readLibraryItems(ctx.repo), byId=new Map(library.map(item=>[item.id,item]));
  const aliases=new Map(library.flatMap(item=>(item.aliases??[]).map(alias=>[alias,item.id])));
  const actual=input.snapshot.pages.map(page=>({...page,items:page.items.map(item=>{
    const text=readFileSync(join(ctx.repo,'items',`${item.id}.md`),'utf8');
    const fm=yaml().parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
    const canonical=id=>byId.has(id)?id:aliases.get(id)??id;
    const body=(fm.deps??[]).map(canonical),manifest=(item.deps??[]).map(canonical);
    assert(same(body,manifest),`${item.id}: authored logical deps differ from its manifest; reconcile before reviewing`);
    return {...item,deps:body};
  })}));
  const order=orderedItems(actual).filter(item=>item.batch===String(batch));
  const dir=loopDir(ctx.repo,ctx.run,batch), task=join(dir,`${phase}-${round}.task.md`);
  if(!state.prepared){
    const p={phase,round,role,label:label(batch,phase,round),input_sha256:input.sha256,inventory:input.inventory,
      before_items:readLibraryItems(ctx.repo), ...(phase==='repair'?{before_files:fileHashes(ctx.repo)}:{})};
    atomic(join(dir,`${phase}-${round}.input.json`),p);
    state.prepared=p;save(ctx.repo,ctx.run,batch,state);
    const prior=state.reviews.length?relative(ctx.repo,reportPath(ctx.repo,ctx.run,batch,'review',state.reviews.length-1)):null;
    const consumerRows=state.repairs.at(-1)?.consumers??[];
    writeFileSync(task,`# Batch ${batch}: ${phase} ${round}\n\nRead research/workflow-rebuild-plan.md and any research/${ctx.run}-owner-authoring-direction.md.\n`
      +`Run: ${ctx.run}\nBatch: ${batch}\nRound: ${round}\nInput SHA256: ${input.sha256}\n`
      +`Read ${relative(ctx.repo,join(dir,`${phase}-${round}.input.json`))}, current batch manifests, coverage, contracts, complete A/B pages and items, and their controlling design documents.\n`
      +`Review the ENTIRE batch before reporting; never hand partial findings to the repairer.\n`
      +`Dependency order: ${order.map(item=>`${item.id} (level ${item.level})`).join(', ')}. Finish lower prerequisite pairs before higher consumers.\n`
      +`Pages: ${input.inventory.pages.join(', ')}\nItems: ${input.inventory.items.join(', ')}\n`
      +`${prior?`Consolidated preceding review: ${prior}\n`:''}`
      +`Consumer checks from preceding repairs: ${JSON.stringify(consumerRows)}. Both roles must trace every direct and indirect consumer when an original Statement/Definition or physical public interface changes. Inspect necessary outside-batch consumers read-only; escalate desired outside-batch changes.\n`
      +`Return the prescribed lightweight JSON with exact identity, full reviewed inventories, findings and consumer_checks. Do not write the report file yourself. Each reason is one sentence, at most 400 characters.\n`);
  }
  const prepared=state.prepared;
  assert(prepared.input_sha256===input.sha256||phase==='repair','Prepared review inputs changed; owner resolution required');
  const previous=state[phase==='review'?'reviews':'repairs'].at(-1);
  const priorReceipt=previous?join(ctx.dispatchDir,`${role}-${label(batch,phase,previous.round)}.result.json`):null;
  const session=priorReceipt&&existsSync(priorReceipt)?read(priorReceipt).session_id:null;
  return {role,label:prepared.label,job:phase==='review'?'audit':'repair',covers:[String(batch)],
    brief:`briefs/scope-${phase==='review'?'reviewer':'repairer'}.md`,task:relative(ctx.repo,task),
    outputSchema:'briefs/schemas/batch-scope-review.json', resultArtifact:relative(ctx.repo,reportPath(ctx.repo,ctx.run,batch,phase,round)),
    sessionHome:join(dir,`${role}-session`), ...(session?{resumeSession:session}:{}), timeout:14400};
}

export function checkBatches(root,run) {
  const snapshot=loadStep3(root,run), batches=[...new Set(snapshot.pages.map(page=>page.batch))];
  const levels=dependencyLevels(snapshot.pages);
  assert(!levels.errors.length,levels.errors.join('\n'));
  for(const batch of batches)assert(accepted(root,run,batch),`Batch ${batch} lacks current whole-batch acceptance`);
  return batches.length;
}

if(process.argv[1] && import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  try{
    const args=process.argv.slice(2),run=args[args.indexOf('--run')+1];
    const option=name=>args[args.indexOf(`--${name}`)+1];
    assert(args.includes('--run'),'Specify --run');
    if(args[0]==='owner-resolve')console.log(JSON.stringify(resolveOwner(process.cwd(),run,option('batch'),
      {decision:option('decision'),reason:option('reason'),reviewer:option('reviewer')})));
    else {assert(args[0]==='check','Usage: batch-scope-review.mjs check|owner-resolve --run RUN');
      console.log(`batch-scope-review: ${checkBatches(process.cwd(),run)} batch(es) accepted`);}
  }catch(error){console.error(error.message);process.exitCode=1;}
}
