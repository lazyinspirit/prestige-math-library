// Explicit supplemental construction, never retrospective Step-1 coverage.
import { existsSync, readFileSync, writeFileSync, readdirSync, mkdirSync, renameSync, unlinkSync, openSync, closeSync, fsyncSync, realpathSync,lstatSync } from 'node:fs';
import { join, resolve, relative,basename } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { loadStep3 } from './frontier-snapshot.mjs';
import { step1Decision } from './step1-decisions.mjs';
import { computeBatchDependencyLevels } from './batch-dependency-levels.mjs';
import { alphabeticLabel, validateAssignment } from '../alpha-group-assignment.mjs';
import { readItem } from './physics-content.mjs';
import { consumers } from './batch-scope-review.mjs';
import {frontmatterList} from './frontmatter-list.mjs';
import {readOriginalItemIdentity} from './original-item-index.mjs';
import {yaml} from './pathway-lib.mjs';
import { checkedRepairOverlay,repairGraphFingerprint } from './step2-prerequisite-repairs.mjs';
import {checkedAuthoredMetadata} from './step2-authored-metadata.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const regular=path=>{const stat=lstatSync(path);assert(stat.isFile()&&!stat.isSymbolicLink()&&realpathSync(path)===resolve(path),`nonregular/symlinked file ${path}`);return stat;};
const json = path => {regular(path);return JSON.parse(readFileSync(path, 'utf8'));};
const bytes = value => JSON.stringify(value, null, 2) + '\n';
const fail = message => { throw Error(`Step-2 prerequisites: ${message}`); };
const assert = (ok, message) => { if (!ok) fail(message); };
const safe = id => typeof id === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id);
const safeRun=id=>typeof id==='string'&&/^[a-zA-Z0-9_-]+$/.test(id);
const mathematicalKinds=new Set(['definition','algorithm','lemma','theorem','proposition','corollary','example','counterexample','false-statement','remark','open-problem']);
const present=path=>{try{lstatSync(path);return true;}catch(error){if(error.code==='ENOENT')return false;throw error;}};
const rawHash = path => present(path) ? (regular(path),hash(readFileSync(path))) : null;
const local = (root, path) => {
  assert(typeof path === 'string' && path && !path.includes('\\') && !path.split('/').includes('..') && !path.startsWith('/'), 'nonlocal path');
  const full = resolve(root, path);
  assert(full.startsWith(resolve(root) + '/'), 'path escapes workspace');
  // Existing ancestors must not redirect an otherwise local write/read.
  let ancestor = full;
  while (!present(ancestor)) ancestor = resolve(ancestor, '..');
  assert(!lstatSync(ancestor).isSymbolicLink()&&realpathSync(ancestor) === ancestor, `symlinked path ${path}`);
  return full;
};
const durable = (path, text) => {
  mkdirSync(resolve(path, '..'), { recursive: true });
  const fd = openSync(path, 'wx');
  try { writeFileSync(fd, text); fsyncSync(fd); } finally { closeSync(fd); }
};
const syncDirectory = path => { const fd = openSync(path, 'r'); try { fsyncSync(fd); } finally { closeSync(fd); } };
export const prerequisiteRegistryPath = (root, run) => {
  assert(safeRun(run), 'invalid run'); return join(root, 'research', `${run}-step2-prerequisites.json`);
};
export function prerequisiteRegistry(root, run, {allowPending=false}={}) {
  const path = prerequisiteRegistryPath(root, run);
  if (!existsSync(path)) return null;
  const row = json(path);
  assert(row.version === 1 && row.run === run && Array.isArray(row.original_batches) && row.original_batches.length
    && Array.isArray(row.generations) && row.generations.length, 'invalid registry');
  if(!allowPending) {
    const last=row.generations.at(-1);
    const journal=json(local(root,`${last.state_dir}/step2-prerequisites-installed-${last.number}.json`));
    const installed=journal.rows?.find(entry=>entry.path===relative(root,path));
    assert(journal.run===run&&installed?.after===rawHash(path),'registry does not match its completed native installation');
    assert(last.import_receipt_sha256===rawHash(local(root,'research/math-imports.json')),'registered import pins/receipt changed');
  }
  return row;
}
export function assertNoPrerequisiteTransaction(stateDir) {
  assert(!existsSync(join(stateDir, 'step2-prerequisites.lock')), 'interrupted/active installation; inspect journal and use prerequisites finish');
}
export function prerequisiteBoundary(root, run, stateDir, scan, {stage='2-scope-review'}={}) {
  assert(resolve(stateDir).startsWith(resolve(root) + '/'), 'state directory outside physics');
  stateDir=local(root,relative(root,resolve(stateDir)));
  assert(lstatSync(stateDir).isDirectory(),'state directory is not regular');
  const state = json(local(root,relative(root,join(stateDir, 'state.json'))));
  assert(state.version === 1 && state.run === run && state.paused && !state.finishedAt
    && state.stage === stage, 'exact paused unfinished Step 2 required');
  if(stage!=='2-scope-review')assert(!state.stages?.[stage]?.doneAt && !state.stages?.[stage]?.gatesPassedAt, 'active stage already closed');
  assert(state.stages?.['1-scaffold']?.doneAt && state.stages['1-scaffold'].gatesPassedAt, 'original construction is not closed');
  assert(!state.stages?.['2-scope-review']?.doneAt && !state.stages?.['2-scope-review']?.gatesPassedAt,
    'Step 2 already closed');
  assert(!Object.entries(state.stages ?? {}).some(([id, row]) => /^[3-6](?:[a-z.]|-)/.test(id) && (row.enteredAt || row.doneAt || row.gatesPassedAt)), 'later stage already entered');
  assert(!Object.values(state.dispatches ?? {}).some(row => row.startedAt && !row.endedAt), 'native dispatches not drained');
  for (const name of ['.controller.lock', 'controller.lock']) if (existsSync(join(stateDir, name))) {
    const lock = json(join(stateDir, name));
    let alive = false;
    if (Number.isInteger(lock.pid) && lock.pid > 0) try { process.kill(lock.pid, 0); alive = true; } catch (error) { alive = error.code === 'EPERM'; }
    assert(!alive, `live controller lock ${name}`);
  }
  assert(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared writer lock present');
  const live = scan({ repo: realpathSync(root), run, stateDir: realpathSync(stateDir) });
  assert(live && ['controller', 'preflight', 'writer'].every(key => Array.isArray(live[key]) && live[key].length === 0), 'controller/preflight/source writers must be stopped');
  return state;
}
const namesFor = (root, run) => readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(name))
  .sort((a, b) => Number(a.match(/-batch-(\d+)/)[1]) - Number(b.match(/-batch-(\d+)/)[1]));
const filesBelow = path => !existsSync(path) ? [] : readdirSync(path,{withFileTypes:true}).flatMap(row=>{
  const full=join(path,row.name);assert(!row.isSymbolicLink(),`symlinked native history ${full}`);
  return row.isDirectory()?filesBelow(full):[full];
});
function git(root, args) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  assert(result.status === 0, `Git evidence unavailable: ${args[0]}`); return result.stdout.trim();
}
function reference(root, run, ref) {
  assert(ref && typeof ref.path === 'string' && ref.path.startsWith(`research/${run}-`) && /^[a-f0-9]{64}$/.test(ref.sha256 ?? ''), 'invalid run-local evidence');
  assert(rawHash(local(root, ref.path)) === ref.sha256, `stale evidence ${ref.path}`); return ref;
}
function declaration(page, known) {
  assert(safe(page.id) && safe(page.category) && ['A', 'B'].includes(page.kind) && page.library === 'mathematics'
    && Number.isFinite(page.order) && Array.isArray(page.requires) && page.requires.every(safe)
    && Array.isArray(page.items) && page.items.length && page.items.length <= 100, 'invalid supplemental mathematical page');
  for (const item of page.items) {
    assert(item && safe(item.id) && !known.has(item.id) && item.domain === 'mathematics' && item.library === 'mathematics'
      && mathematicalKinds.has(item.kind) && typeof item.statement === 'string' && item.statement.trim()
      && Array.isArray(item.deps) && item.deps.every(safe), `invalid/duplicate declaration ${item?.id}`);
    known.add(item.id);
  }
}
function additionReview(root,run,addition,ref,{current=true,repairEntry=null}={}) {
  reference(root,run,ref);
  const review=json(local(root,ref.path));
  assert(review.run===run&&review.reviewer==='/root'&&review.native_review===false&&review.decision==='accept'
    &&typeof review.reason==='string'&&review.reason.trim().length>=80&&Array.isArray(review.items)
    &&JSON.stringify([...review.items].sort())===JSON.stringify([...addition.items].sort())&&Array.isArray(review.consumer_checks), 'invalid owner addition review');
  if(!current)return review;
  for(const id of addition.items) {
    const path=`items/${id}.md`,item=readItem(local(root,path));
    assert(review.source_sha256?.[id]===rawHash(local(root,path)),`stale owner addition review ${id}`);
    assert(item.id===id&&item.status==='draft'&&(item.domain??'mathematics')==='mathematics',`invalid owner addition carrier ${id}`);
  }
  const affected=consumers(root,addition.items).map(row=>row.id).sort();
  assert(JSON.stringify(review.consumer_checks.map(row=>row.id).sort())===JSON.stringify(affected)
    &&review.consumer_checks.every(row=>['accept','unaffected'].includes(row.decision)&&typeof row.reason==='string'&&row.reason.trim().length>=40), 'owner addition consumer review incomplete');
  assert(JSON.stringify(Object.keys(review.consumer_sha256??{}).sort())===JSON.stringify(affected), 'owner addition consumer source selection');
  let successor;
  for(const id of affected){
    const path=`items/${id}.md`,before=review.consumer_sha256[id],after=rawHash(local(root,path));
    if(before===after)continue;
    if(repairEntry&&!successor){
      const completed=checkedRepairOverlay(root,run,repairEntry);
      successor={completed,authorization:completed.authorization?json(local(root,completed.authorization.path)):null};
    }
    assert(successor?.authorization?.sources?.[path]===before&&repairEntry?.protected_sources?.[path]===before&&successor.completed.sources[path]===after,`stale owner addition consumer ${id}`);
  }
  return review;
}
/** Identity/home projection only. Unrelated prose and proof bodies grant no
 * ownership and are excluded from the transaction fingerprint. */
function ownershipProjection(root,run,subjects,pages) {
  const ids=new Set(subjects.flatMap(row=>[row.id,...row.aliases])),tokens=new Set([...ids,...pages.map(row=>row.id)]);
  const pageIds=new Set(pages.map(row=>row.id)),itemRows=[],pageRows=[],foreign=[];
  for(const name of readdirSync(join(root,'items')).filter(name=>name.endsWith('.md'))) {
    const path=`items/${name}`,full=local(root,path);regular(full);
    const item=readOriginalItemIdentity(full),aliases=item.aliases??[];
    if(tokens.has(item.id)||tokens.has(name.slice(0,-3))||aliases.some(alias=>tokens.has(alias)))
      itemRows.push({path,id:item.id,filename_id:name.slice(0,-3),aliases});
  }
  for(const full of filesBelow(join(root,'library')).filter(path=>path.endsWith('.md')&&!basename(path).startsWith('_'))) {
    const path=relative(root,full);regular(local(root,path));
    const text=readFileSync(full,'utf8'),fm=text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';
    const doc=yaml().parseDocument(fm),claims=new Set([basename(full,'.md')]),members=[];
    assert(yaml().isMap(doc.contents),`unreadable page ownership ${path}`);
    for(const pair of doc.contents.items)if(yaml().isScalar(pair.key)) {
      const key=pair.key.value;
      if(['page','id'].includes(key)) {
        assert(yaml().isScalar(pair.value)&&typeof pair.value.value==='string',`unreadable page identity ${path}`);claims.add(pair.value.value);
      }
      if(['items','examples'].includes(key)) {
        if(pair.value==null||yaml().isScalar(pair.value)&&pair.value.value===null)continue;
        assert(yaml().isSeq(pair.value),`unreadable page inventory ${path}`);
        for(const value of pair.value.items){assert(yaml().isScalar(value)&&typeof value.value==='string',`unreadable page member ${path}`);members.push(value.value);}
      }
    }
    if([...claims].some(id=>pageIds.has(id))||members.some(id=>ids.has(id)))pageRows.push({path,claims:[...claims].sort(),members:members.filter(id=>ids.has(id)).sort()});
  }
  for(const name of readdirSync(join(root,'research')).filter(name=>/^.+-batch-\d+\.pages\.json$/.test(name)&&!new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))) {
    const path=`research/${name}`,rows=json(local(root,path));assert(Array.isArray(rows),`unreadable foreign ownership ${path}`);
    for(const page of rows) {
      assert(typeof page?.id==='string'&&Array.isArray(page.items),`unreadable foreign page ownership ${path}`);
      const members=page.items.map(item=>typeof item==='string'?item:item?.id);
      assert(members.every(id=>typeof id==='string'),`unreadable foreign item ownership ${path}`);
      if(pageIds.has(page.id)||tokens.has(page.id)||members.some(id=>tokens.has(id)))foreign.push({path,page:page.id,items:members.filter(id=>tokens.has(id)).sort()});
    }
  }
  return {items:itemRows.sort((a,b)=>a.path.localeCompare(b.path)),pages:pageRows.sort((a,b)=>a.path.localeCompare(b.path)),foreign:foreign.sort((a,b)=>a.path.localeCompare(b.path)||a.page.localeCompare(b.page))};
}
function checkNewOwnership(root,run,newPages,additions,request,guards) {
  const pageRows=newPages.map(page=>({id:page.id,path:`library/${page.category}/${page.id}.md`}));
  const subjects=[...newPages.flatMap(page=>page.items.map(item=>({id:item.id,page:page.id,path:`items/${item.id}.md`,aliases:item.aliases??[]}))),
    ...additions.flatMap(row=>row.items.map(id=>({id,page:row.page,path:`items/${id}.md`,aliases:[]})))];
  for(const row of subjects) {
    assert(Array.isArray(row.aliases)&&row.aliases.every(safe),`invalid new aliases ${row.id}`);
    if(present(local(root,row.path)))row.aliases=[...new Set([...row.aliases,...(readOriginalItemIdentity(local(root,row.path)).aliases??[])])];
  }
  const claims=new Map();
  for(const row of subjects)for(const token of [row.id,...row.aliases]) {
    assert(!claims.has(token),`new item identities/aliases collide ${token}`);claims.set(token,row.id);
  }
  const projection=ownershipProjection(root,run,subjects,pageRows);
  assert(!projection.foreign.length,`foreign run owns requested source: ${projection.foreign[0]?.path}`);
  for(const row of subjects) {
    for(const existing of projection.items) {
      assert(!existing.aliases.includes(row.id),`new identity collides with existing alias ${row.id}`);
      if(existing.id===row.id||existing.filename_id===row.id)assert(existing.path===row.path&&existing.id===row.id,`new identity collides with actual carrier ${row.id}`);
      for(const alias of row.aliases)if(existing.id===alias||existing.filename_id===alias||existing.aliases.includes(alias))assert(existing.path===row.path,`new alias collides with actual identity ${alias}`);
    }
    for(const home of projection.pages.filter(page=>page.members.some(id=>id===row.id||row.aliases.includes(id)))) {
      const expected=newPages.find(page=>page.id===row.page);
      const path=expected?`library/${expected.category}/${expected.id}.md`:additions.find(addition=>addition.page===row.page)?.page_path;
      assert(home.path===path,`new item has another actual page home ${row.id}`);
    }
  }
  for(const row of pageRows) {
    assert(!subjects.some(item=>item.id===row.id||item.aliases.includes(row.id)),`new page collides with new item identity ${row.id}`);
    assert(!projection.items.some(item=>item.id===row.id||item.filename_id===row.id||item.aliases.includes(row.id)),`new page collides with actual item identity ${row.id}`);
    for(const existing of projection.pages.filter(page=>page.claims.includes(row.id)))assert(existing.path===row.path,`new page identity collides with another carrier ${row.id}`);
  }
  const adoptions=request.source_adoptions??[];assert(Array.isArray(adoptions),'source_adoptions must be an array');
  const required=[...pageRows,...subjects.filter(row=>newPages.some(page=>page.id===row.page))].filter(row=>present(local(root,row.path)));
  assert(adoptions.length===required.length&&new Set(adoptions.map(row=>row.path)).size===adoptions.length,'exact explicit draft source adoptions required');
  for(const adoption of adoptions) {
    const target=required.find(row=>row.path===adoption.path);
    assert(target&&adoption.page===(target.page??target.id)&&adoption.ownership==='unowned-local-draft'
      &&typeof adoption.reason==='string'&&adoption.reason.trim().length>=40&&adoption.sha256===rawHash(local(root,adoption.path)),`invalid/stale draft source adoption ${adoption.path}`);
    guards[adoption.path]=adoption.sha256;
  }
  return {subjects,pages:pageRows,sha256:hash(JSON.stringify(projection))};
}
/** Pure construction of prospective bytes. Does not write live content/state. */
export function preparePrerequisiteRegistration(root, run, requestPath, { invoke, scan, stateDir }) {
  assertNoPrerequisiteTransaction(stateDir);
  const state = prerequisiteBoundary(root, run, stateDir, scan);
  const stateHash=rawHash(join(stateDir,'state.json'));
  const request = json(local(root, requestPath));
  assert(requestPath.startsWith(`research/${run}-`) && request.version === 1 && request.run === run && request.reviewer === '/root'
    && typeof request.reason === 'string' && request.reason.trim().length >= 80 && /^[a-f0-9]{40}$/.test(request.base_commit ?? '')
    && Array.isArray(request.pairs) && Array.isArray(request.additions ?? []) && (request.pairs.length || request.additions.length)
    && request.writers_drained === true && Array.isArray(request.writer_scopes) && request.writer_scopes.length === 0
    && Array.isArray(request.evidence) && request.evidence.length, 'invalid Root request');
  reference(root, run, request.escalation); request.evidence.forEach(ref => reference(root, run, ref));
  const immutableInputs = Object.fromEntries([request.escalation, ...request.evidence, {path:requestPath,sha256:rawHash(local(root,requestPath))}].map(ref => [ref.path, ref.sha256]));
  const escalation = json(local(root, request.escalation.path));
  assert(escalation.phase === 'held' && escalation.run === run && String(escalation.batch), 'request must bind an actual held scope state');
  assert(request.escalation.path === `research/${run}-scope-review/batch-${escalation.batch}/state.json`, 'wrong escalation path');
  const registry = prerequisiteRegistry(root, run);
  if (registry) for (const generation of registry.generations) {
    assert(!generation.batches.length || state.stages?.[`2-prerequisite-construct-${generation.number}`]?.doneAt, 'earlier supplemental construction unfinished');
  }
  const names = namesFor(root, run), manifests = names.map(name => json(join(root, 'research', name)));
  assert(names.length && names.every((name, i) => name.endsWith(`-batch-${i + 1}.pages.json`)) && manifests.every(pages => pages.length === 2), 'contiguous one-pair manifests required');
  assert(names.length + request.pairs.length <= 130, 'pair capacity exceeded');
  const planPath = 'research/plan-spec.json', spec = json(local(root, planPath));
  const prefix = git(root, ['rev-parse', '--show-prefix']);
  const prior = {};
  for (const path of [planPath,'research/math-imports.json', ...names.map(name => `research/${name}`), `research/${run}-scope-ledger.json`, `research/${run}-covers.json`, `research/${run}-alpha-groups.json`, `research/${run}-batch-dependency-levels.json`]) {
    const oid = git(root, ['rev-parse', `${request.base_commit}:${prefix}${path}`]);
    const actual = git(root, ['hash-object', '--', path]);
    assert(oid === actual, `commit current metadata before registering: ${path}`);
    prior[path] = { sha256: rawHash(local(root, path)), git_blob: oid };
  }
  const declarations = new Set(spec.pages.flatMap(page => (page.items ?? []).map(item => typeof item === 'string' ? item : item.id)));
  const pageIds = new Set(spec.pages.map(page => page.id)), newPages = [], newBatches = [], additions = [];
  const nextSpec = structuredClone(spec), outputs = new Map();
  for (const pair of request.pairs) {
    assert(Array.isArray(pair.pages) && pair.pages.length === 2, 'each new pair needs two declarations');
    const [a, b] = structuredClone(pair.pages);
    assert(a.kind === 'A' && b.kind === 'B' && a.companion === b.id && b.companion === a.id
      && a.category === b.category && a.order === b.order && b.requires.includes(a.id) && !a.requires.includes(b.id), 'invalid reciprocal pair');
    for (const page of [a, b]) { assert(!pageIds.has(page.id), `existing page ${page.id}`); declaration(page, declarations); pageIds.add(page.id); }
    for (const page of [a,b]) for(const path of [`library/${page.category}/${page.id}.md`,...page.items.map(item=>`items/${item.id}.md`)]) {
      if(existsSync(local(root,path))) {
        const carrier=readItem(local(root,path));
        assert(carrier.status==='draft'&&(carrier.domain??'mathematics')==='mathematics'&&(carrier.library??'mathematics')==='mathematics',`new source is not local draft mathematics: ${path}`);
        assert([undefined,null,'',run].includes(carrier.pipeline_run),`foreign pipeline_run claims requested draft source ${path}`);
      }
    }
    const batch = String(names.length + newBatches.length + 1);
    newBatches.push(batch); newPages.push(a, b); nextSpec.pages.push(a, b);
    outputs.set(`research/${run}-batch-${batch}.pages.json`, bytes([a, b]));
  }
  const additionIds = new Set();
  for (const addition of request.additions ?? []) {
    assert(/^[1-9]\d*$/.test(String(addition.batch)) && Number(addition.batch) <= names.length && Array.isArray(addition.items) && addition.items.length, 'invalid existing-batch addition');
    const manifestPath = `research/${run}-batch-${addition.batch}.pages.json`;
    const holdPath=`research/${run}-scope-review/batch-${addition.batch}/state.json`,hold=json(local(root,holdPath));
    assert(hold.phase==='held'&&hold.run===run&&String(hold.batch)===String(addition.batch), 'existing-batch additions require an actual owner hold');
    immutableInputs[holdPath]=rawHash(local(root,holdPath));
    const pages = outputs.has(manifestPath) ? JSON.parse(outputs.get(manifestPath)) : structuredClone(manifests[Number(addition.batch) - 1]);
    const target = pages.find(page => page.id === addition.page), planned = nextSpec.pages.find(page => page.id === addition.page);
    assert(target && planned && target.kind === 'A' && planned.kind === 'A', 'addition must have existing A-page ownership');
    declaration({ ...target, items: addition.items }, declarations);
    assert(target.items.length + addition.items.length <= 100, 'addition exceeds capacity');
    const at=addition.before===undefined?target.items.length:target.items.findIndex(item=>item.id===addition.before);
    const plannedAt=addition.before===undefined?planned.items.length:planned.items.findIndex(item=>item.id===addition.before);
    assert(at>=0&&plannedAt>=0,'addition insertion point must be an existing owned item');
    target.items.splice(at,0,...addition.items); planned.items.splice(plannedAt,0,...addition.items);
    const carrier=readItem(local(root,`library/${target.category}/${target.id}.md`));
    assert(carrier.page===target.id&&carrier.status==='draft'
      &&JSON.stringify(carrier.items??[])===JSON.stringify(target.items.map(item=>item.id)), 'update the actual owning page inventory before registration');
    for (const item of addition.items) { additionIds.add(item.id); assert(existsSync(local(root, `items/${item.id}.md`)), `owner addition not authored: ${item.id}`); }
    const evidence = reference(root, run, addition.review); immutableInputs[evidence.path] = evidence.sha256;
    const review=additionReview(root,run,{items:addition.items.map(item=>item.id)},evidence);
    for(const id of [...review.items,...review.consumer_checks.map(row=>row.id)])immutableInputs[`items/${id}.md`]=rawHash(local(root,`items/${id}.md`));
    additions.push({ batch: String(addition.batch), page: addition.page,page_path:`library/${target.category}/${target.id}.md`, ...(addition.before===undefined?{}:{before:addition.before}),items: addition.items.map(item => item.id), review: evidence });
    outputs.set(manifestPath, bytes(pages));
  }
  const draftGuards={},ownership=checkNewOwnership(root,run,newPages,additions,request,draftGuards);
  outputs.set(planPath, bytes(nextSpec));
  const allManifests = [...manifests.map((pages, i) => JSON.parse(outputs.get(`research/${run}-batch-${i + 1}.pages.json`) ?? bytes(pages))), ...newBatches.map(batch => JSON.parse(outputs.get(`research/${run}-batch-${batch}.pages.json`)))];
  const pages = allManifests.flat(), home = new Map(pages.map((page, i) => [page.id, String(Math.floor(i / 2) + 1)]));
  const itemHome = new Map(pages.flatMap(page => page.items.map(item => [item.id, home.get(page.id)])));
  const actualDeps=new Map(pages.flatMap(page=>page.items.map(item=>{
    const path=local(root,`items/${item.id}.md`),actual=existsSync(path)?readItem(path):null;
    assert(!actual||actual.id===item.id&&(actual.deps===undefined||Array.isArray(actual.deps)&&actual.deps.every(safe)),`invalid authored dependencies ${item.id}`);
    return [item.id,[...new Set([...item.deps,...(actual?.deps??[])])]];
  })));
  const unresolved=new Set([...actualDeps.values()].flat().filter(id=>!itemHome.has(id)&&!existsSync(local(root,`items/${id}.md`))));
  const aliases=new Map();
  if(unresolved.size)for(const name of readdirSync(join(root,'items')).filter(name=>name.endsWith('.md'))) {
    const text=readFileSync(join(root,'items',name),'utf8'),fm=text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';
    for(const alias of frontmatterList(fm,'aliases'))if(unresolved.has(alias)) {
      assert(!aliases.has(alias)||aliases.get(alias)===name.slice(0,-3),`ambiguous used alias ${alias}`);aliases.set(alias,name.slice(0,-3));
    }
  }
  const graph = allManifests.map((owned, i) => ({ batch: String(i + 1), requires: [...new Set(owned.flatMap(page => [...page.requires.map(id => home.get(id)), ...page.items.flatMap(item => actualDeps.get(item.id).map(id => itemHome.get(aliases.get(id)??id)))]))].filter(batch => batch && batch !== String(i + 1)).sort((a,b)=>Number(a)-Number(b)) }));
  const levels = computeBatchDependencyLevels(graph);
  const levelInput = { manifests: allManifests.map((pages, i) => [String(i + 1), outputs.get(`research/${run}-batch-${i + 1}.pages.json`) ?? readFileSync(join(root, 'research', names[i]), 'utf8')]), graph };
  outputs.set(`research/${run}-batch-dependency-levels.json`, bytes({ version: 1, run, input_sha256: hash(JSON.stringify(levelInput)), batches: levels }));
  const ledger = json(join(root, 'research', `${run}-scope-ledger.json`));
  assert(ledger.run === run && Array.isArray(ledger.pages) && ledger.pages.length === manifests.length * 2
    && pages.slice(0, manifests.length * 2).every(page => ledger.pages.some(row => row.id === page.id && row.batch === home.get(page.id))), 'old ledger ownership mismatch');
  ledger.pages.push(...newPages.map(page => ({ id: page.id, kind: page.kind, batch: home.get(page.id) }))); ledger.pages.sort((a, b) => a.id.localeCompare(b.id));
  outputs.set(`research/${run}-scope-ledger.json`, bytes(ledger));
  const covers = json(join(root, 'research', `${run}-covers.json`));
  const groups = json(join(root, 'research', `${run}-alpha-groups.json`));
  // Existing groups keep their identities and membership; fresh batches get fresh groups.
  assert(covers && typeof covers === 'object' && !Array.isArray(covers) && Array.isArray(groups), 'unsupported covers/group shape');
  for (let at = 0; at < newBatches.length; at += 3) {
    const members = newBatches.slice(at, at + 3);
    let index = groups.length; while (groups.some(group => group.label === alphabeticLabel(index))) index++;
    const label = alphabeticLabel(index);
    groups.push({ label, covers: members, rationale: 'Owner-approved supplemental prerequisite batches; preserve every original group assignment.' });
    covers[`alpha-group-${label}`] = members;
  }
  const assignment = validateAssignment(groups, allManifests.map((owned, i) => ({id:String(i+1),categories:[...new Set(owned.map(page=>page.category))]})), {maxGroups:130,maxBatches:3});
  assert(!assignment.errors.length, `group extension invalid: ${assignment.errors.join('; ')}`);
  outputs.set(`research/${run}-covers.json`, bytes(covers)); outputs.set(`research/${run}-alpha-groups.json`, bytes(groups));
  const number = (registry?.generations.length ?? 0) + 1;
  const owned = newPages.flatMap(page => [`library/${page.category}/${page.id}.md`, ...page.items.map(item => `items/${item.id}.md`)]);
  const protectedSources = {};
  for (const page of manifests.flat()) for (const path of [`library/${page.category}/${page.id}.md`, ...page.items.map(item => `items/${item.id}.md`)]) protectedSources[path] = rawHash(local(root, path));
  for(const id of additionIds)protectedSources[`items/${id}.md`]=rawHash(local(root,`items/${id}.md`));
  const protectedNative=Object.fromEntries([
    ...filesBelow(join(root,'research',`${run}-dispatch`)),
    ...filesBelow(join(root,'research',`${run}-scope-review`)).filter(path=>!path.endsWith('/state.json')),
    ...filesBelow(join(stateDir,'owner-gate-history')),
  ].map(path=>[relative(root,path),rawHash(path)]));
  const entry = { number, request: { path: requestPath, sha256: rawHash(local(root, requestPath)) }, base_commit: request.base_commit, prior,
    original_step1: state.stages['1-scaffold'], batches: newBatches, pages: newPages.map(page => page.id), items: newPages.flatMap(page => page.items.map(item => item.id)),
    additions, state_dir:relative(root,stateDir), import_receipt_sha256:prior['research/math-imports.json'].sha256,
    owned_sources: owned,source_adoptions:request.source_adoptions??[], protected_sources: protectedSources, protected_native:protectedNative, inputs: immutableInputs,
    manifest_sha256:Object.fromEntries(allManifests.map((pages,i)=>{const path=`research/${run}-batch-${i+1}.pages.json`;return [path,hash(outputs.get(path)??readFileSync(local(root,path)))];})),
    scientific_acceptance: false, original_step1_coverage: false };
  for (const batch of newBatches) {
    const assigned = JSON.parse(outputs.get(`research/${run}-batch-${batch}.pages.json`));
    outputs.set(`research/${run}-prerequisite-${number}-batch-${batch}.task.md`, [
      `# Supplemental Step-2 prerequisite construction ${number}, batch ${batch}`,
      `Run: ${run}. This is separate supplemental authoring, not a Step-1 rerun or acceptance.`,
      `Read ${requestPath} and its actual source/design evidence, the complete approved declarations in research/${run}-batch-${batch}.pages.json, and owner directions.`,
      `Fully author exactly these A/B pages and their declared items: ${assigned.map(page => page.id).join(', ')}. Preserve sound existing drafts.`,
      `Source write scope: ${JSON.stringify(assigned.flatMap(page => [`library/${page.category}/${page.id}.md`, ...page.items.map(item => `items/${item.id}.md`)]))}.`,
      `Write only these sources and this batch's actual coverage, contracts, notes, cross-batch-dependencies and per-item readiness. Preserve exact declared inventory and scope; escalate additional missing theory to Root.`,
      `Never edit canonical plan, original manifests/sources/history, imported mathematics, owner adoption evidence or engine state. Do not create Step-1 native results or acceptance.`,
      `Use the ordinary rigorous authoring, actual-source, contract and readiness duties of briefs/beta-scaffold.md. Missing proofs remain escalated. No private worktrees or backups.`,
    ].join('\n') + '\n');
  }
  // Validate prospective graph/order/identities with the ordinary real plan validator.
  invoke({ plan: nextSpec, pages: [...newPages.map(page => page.id), ...additions.map(row => row.page)] });
  const nextRegistry = registry ?? { version: 1, run, original_batches: names.map((_, i) => String(i + 1)), generations: [] };
  nextRegistry.generations.push(entry);
  outputs.set(`research/${run}-step2-prerequisites.json`, bytes(nextRegistry));
  const guards = {...immutableInputs,...protectedSources,...protectedNative,...draftGuards};
  for (const [path, record] of Object.entries(prior)) if (!outputs.has(path)) guards[path] = record.sha256;
  assert(rawHash(join(stateDir,'state.json'))===stateHash,'native state changed during preparation');
  return { outputs, entry, guards,ownership, before:Object.fromEntries([...outputs.keys()].map(path=>[path,rawHash(local(root,path))])),state_hash: stateHash, request_path: requestPath, request_hash: entry.request.sha256 };
}

/** Durable fail-closed journal. Prospective temp bytes are never backups. */
export function installPrerequisiteRegistration(root, run, stateDir, prepared, { afterInstall = () => {} } = {}) {
  assertNoPrerequisiteTransaction(stateDir);
  assert(rawHash(join(stateDir, 'state.json')) === prepared.state_hash && rawHash(local(root, prepared.request_path)) === prepared.request_hash, 'boundary changed during preparation');
  for (const [path, expected] of Object.entries(prepared.guards)) assert(rawHash(local(root,path)) === expected, `input changed during preparation: ${path}`);
  for (const [path, expected] of Object.entries(prepared.before)) assert(rawHash(local(root,path))===expected,`output changed during preparation: ${path}`);
  assert(hash(JSON.stringify(ownershipProjection(root,run,prepared.ownership.subjects,prepared.ownership.pages)))===prepared.ownership.sha256,'source ownership changed during preparation');
  for (const [path, record] of Object.entries(prepared.entry.prior)) assert(rawHash(local(root,path)) === record.sha256, `metadata changed during preparation: ${path}`);
  const lock = join(stateDir, 'step2-prerequisites.lock'), journalPath = join(stateDir, 'step2-prerequisites-journal.json');
  assert(!existsSync(journalPath), 'unreconciled journal');
  durable(lock, bytes({ run, request: prepared.request_path })); syncDirectory(stateDir);
  const rows = [];
  for (const [path, text] of prepared.outputs) {
    const full = local(root, path), temp = `${full}.step2-prerequisite-${prepared.entry.number}.tmp`;
    durable(temp, text); rows.push({ path, temp: relative(root, temp), before: prepared.before[path], after: hash(text) });
  }
  durable(journalPath, bytes({ version: 1, run, state_hash: prepared.state_hash, request: { path: prepared.request_path, sha256: prepared.request_hash }, guards:prepared.guards,ownership:prepared.ownership, rows })); syncDirectory(stateDir);
  return finishPrerequisiteRegistration(root, run, stateDir, { afterInstall });
}
export function finishPrerequisiteRegistration(root, run, stateDir, { afterInstall = () => {} } = {}) {
  assert(existsSync(join(stateDir, 'step2-prerequisites.lock')), 'no pending transaction');
  const lock=json(join(stateDir,'step2-prerequisites.lock'));
  const journalPath = join(stateDir, 'step2-prerequisites-journal.json');
  const installed=join(stateDir,`step2-prerequisites-installed-${prerequisiteRegistry(root,run,{allowPending:true})?.generations.length}.json`);
  const alreadyInstalled=!existsSync(journalPath)&&existsSync(installed);
  assert(existsSync(journalPath)||alreadyInstalled, 'pre-journal interruption: inspect prospective temps; refuse automatic recovery');
  const journal = json(alreadyInstalled?installed:journalPath);
  assert(lock.run===run&&lock.request===journal.request?.path&&journal.version === 1 && journal.run === run && journal.rows?.length && rawHash(join(stateDir, 'state.json')) === journal.state_hash
    && rawHash(local(root, journal.request.path)) === journal.request.sha256, 'stale transaction boundary');
  for (const [path, expected] of Object.entries(journal.guards ?? {})) assert(rawHash(local(root,path)) === expected, `changed transaction input ${path}`);
  assert(hash(JSON.stringify(ownershipProjection(root,run,journal.ownership.subjects,journal.ownership.pages)))===journal.ownership.sha256,'source ownership changed during installation');
  // Check every path before completing any interrupted installation.
  for (const row of journal.rows) {
    const current = rawHash(local(root, row.path));
    assert(current === row.before || current === row.after, `unexpected mutation ${row.path}`);
    if(alreadyInstalled)assert(current===row.after,`completed installation changed ${row.path}`);
    if (current !== row.after) assert(rawHash(local(root, row.temp)) === row.after, `missing prospective output ${row.path}`);
  }
  for (const [index, row] of journal.rows.entries()) {
    if (rawHash(local(root, row.path)) !== row.after) { renameSync(local(root, row.temp), local(root, row.path)); syncDirectory(resolve(local(root, row.path), '..')); }
    else if (existsSync(local(root, row.temp))) unlinkSync(local(root, row.temp));
    afterInstall(index);
  }
  // Keep the digest-only journal as immutable history; a later generation gets a new file.
  const receipt = join(stateDir, `step2-prerequisites-installed-${prerequisiteRegistry(root, run,{allowPending:true}).generations.length}.json`);
  if(!alreadyInstalled){assert(!existsSync(receipt), 'installed journal identity already exists'); renameSync(journalPath, receipt);syncDirectory(stateDir);}
  unlinkSync(join(stateDir, 'step2-prerequisites.lock')); syncDirectory(stateDir);
  return prerequisiteRegistry(root, run).generations.at(-1);
}

export function checkSupplement(root, run, number) {
  const registry = prerequisiteRegistry(root, run), entry = registry?.generations.find(row => row.number === Number(number));
  assert(entry, 'unknown supplemental generation');
  // The held state genuinely evolves after collection; authenticate its original
  // digest through the immutable request, not as a perpetual live obligation.
  assert(rawHash(local(root,entry.request.path)) === entry.request.sha256, 'changed supplemental request');
  const state=json(local(root,`${entry.state_dir}/state.json`));
  assert(state.run===run&&JSON.stringify(state.stages?.['1-scaffold'])===JSON.stringify(entry.original_step1), 'original Step-1 stamp changed');
  const snapshot = loadStep3(root, run);
  for (const id of entry.items) { const ready = step1Decision(snapshot, id); assert(ready.closed, `${id}: ${ready.reason}`); }
  const repairs=checkedRepairOverlay(root,run,entry);
  const authored=checkedAuthoredMetadata(root,run,entry);
  for (const [path, expected] of Object.entries({...entry.protected_sources,...repairs.sources})) assert(rawHash(local(root, path)) === expected, `supplemental author changed original source ${path}`);
  for (const [path, expected] of Object.entries({...entry.manifest_sha256,...authored.manifests,...repairs.metadata})) assert(rawHash(local(root,path)) === expected, `supplemental author changed manifest ${path}`);
  for (const [path, expected] of Object.entries(entry.protected_native)) assert(rawHash(local(root,path))===expected,`supplemental author changed native history ${path}`);
  for (const addition of entry.additions) reference(root, run, addition.review);
  for (const batch of entry.batches) {
    const expected = entry.pages.filter(page => snapshot.pages.find(row => row.id === page)?.batch === batch);
    assert(expected.length === 2, 'supplemental pair ownership changed');
    const actual=snapshot.pages.filter(page => page.batch === batch).flatMap(page => page.items.map(item => item.id));
    const declared=entry.items.filter(id=>snapshot.items.get(id)?.page.batch===batch);
    assert(actual.length===declared.length&&actual.every(id => entry.items.includes(id)), 'changed supplemental item inventory');
  }
  return entry.items.length + entry.additions.reduce((count, addition) => count + addition.items.length, 0);
}
export function checkOwnerAdditions(root, run, batch, {requireAdoption=false}={}) {
  for (const generation of prerequisiteRegistry(root, run)?.generations ?? []) for (const addition of generation.additions.filter(row => row.batch === String(batch))) {
    const statePath=local(root,`${generation.state_dir}/state.json`),state=json(statePath);
    assert(state.run===run,'owner addition state identity');
    // A genuine later native repair does not retroactively erase Step-2 acceptance.
    additionReview(root,run,addition,addition.review,{current:!state.stages?.['2-scope-review']?.doneAt,repairEntry:generation});
    if(requireAdoption) {
      const owner=json(local(root,`research/${run}-scope-review/batch-${batch}/state.json`)).owner_resolution;
      assert(owner?.owner_additions?.some(ref=>ref.path===addition.review.path&&ref.sha256===addition.review.sha256)
        &&addition.items.every(id=>owner.reviewed_inventory?.items?.includes(id)), 'registered addition still requires explicit owner adoption');
    }
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), opt = name => args[args.indexOf(`--${name}`) + 1];
    assert(args[0] === 'check' && args.includes('--run') && args.includes('--generation'), 'Usage: step2-prerequisites.mjs check --run RUN --generation N');
    if(args.includes('--repair-graph-sha256'))assert(opt('repair-graph-sha256')===repairGraphFingerprint(process.cwd(),opt('run'),opt('generation')),'repair graph changed since owner preparation');
    console.log(`step2-prerequisites: ${checkSupplement(process.cwd(), opt('run'), opt('generation'))} items constructed`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
