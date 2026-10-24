import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync, rmSync,readdirSync,renameSync,symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {
  preparePrerequisiteRegistration, installPrerequisiteRegistration,
  finishPrerequisiteRegistration, prerequisiteRegistry, prerequisiteBoundary,
  assertNoPrerequisiteTransaction, checkOwnerAdditions,checkSupplement,
} from './step2-prerequisites.mjs';
import { batchInput, accepted,resolveOwner,collectBatch } from './batch-scope-review.mjs';
import {authorizePrerequisiteRepairs,completePrerequisiteRepairs,checkedRepairOverlay,repairReviewInputs,repairPaths,repairValueDigest,repairPublicSection,repairGraphFingerprint} from './step2-prerequisite-repairs.mjs';
import {writeBatchDependencyLevels} from './batch-dependency-levels.mjs';
import {gateReviewSnapshot} from '../physics-autopilot/src/owner-gate-recertification.mjs';
import {adoptAuthoredMetadata,checkedAuthoredMetadata,authoredMetadataPath,authoredMetadataReviewInputs} from './step2-authored-metadata.mjs';
import {nativePrerequisiteLifecycle,prerequisiteLifecycleBinding} from './step2-prerequisite-lifecycle.mjs';

const run = 'fixture-prerequisites';
const digest = value => createHash('sha256').update(value).digest('hex');
const drained = () => ({ controller: [], preflight: [], writer: [] });
const item = id => ({ id, kind: 'lemma', domain: 'mathematics', library: 'mathematics', statement: `The exact approved assertion for ${id}.`, deps: [] });
function pair(name, order) {
  const category = name.startsWith('new-') ? 'supplemental' : 'test';
  return [
    { id: `${name}-a`, kind: 'A', companion: `${name}-b`, category, library: 'mathematics', order, requires: [], items: [item(`lem-${name}`)] },
    { id: `${name}-b`, kind: 'B', companion: `${name}-a`, category, library: 'mathematics', order, requires: [`${name}-a`], items: [item(`ex-${name}`)] },
  ];
}
function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), 'physics-step2-prerequisites-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const root = join(dir, 'physics');
  mkdirSync(root);
  const put = (path, value) => {
    const full = join(root, path); mkdirSync(join(full, '..'), { recursive: true });
    writeFileSync(full, typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
  };
  const read = path => readFileSync(join(root, path), 'utf8');
  const json = path => JSON.parse(read(path));
  const bind = path => ({ path, sha256: digest(read(path)) });
  const git = (...args) => {
    const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); return result.stdout.trim();
  };
  git('init', '-q', dir); git('config', 'user.email', 'fixture@example.invalid'); git('config', 'user.name', 'Fixture');
  const originals = [pair('original-one', 1), pair('original-two', 2)];
  put('research/math-imports.json',{version:1,files:[]});
  put('research/plan-spec.json', { pages: originals.flat() });
  originals.forEach((pages, i) => {
    put(`research/${run}-batch-${i + 1}.pages.json`, pages);
    for (const page of pages) {
      put(`library/test/${page.id}.md`, `---\nid: ${page.id}\nstatus: draft\n---\n`);
      for (const row of page.items) put(`items/${row.id}.md`, `---\nid: ${row.id}\nkind: ${row.kind}\ndeps: []\n---\n\n## Statement\n\nOriginal interface.\n`);
    }
  });
  put(`research/${run}-scope-ledger.json`, { run, pages: originals.flatMap((pages, i) => pages.map(page => ({ id: page.id, kind: page.kind, batch: String(i + 1) }))) });
  put(`research/${run}-covers.json`, { 'alpha-a': ['1', '2'] });
  put(`research/${run}-alpha-groups.json`, [{ label: 'a', covers: ['1', '2'], rationale: 'Keep both original test-category pairs together for their shared mathematical supplier context.' }]);
  put(`research/${run}-batch-dependency-levels.json`, { version: 1, run, input_sha256: 'a'.repeat(64), batches: ['1', '2'].map(batch => ({ batch, requires: [], dependency_level: 0 })) });
  git('add', '.'); git('commit', '-qm', 'Original planning metadata');
  const base = git('rev-parse', 'HEAD');
  const statePath = `.physics-autopilot/${run}/state.json`, stateDir = join(root, `.physics-autopilot/${run}`);
  put(statePath, { version: 1, run, paused: true, stage: '2-scope-review', dispatches: {}, stages: { '1-scaffold': { enteredAt: '2026-01-01', doneAt: '2026-01-02', gatesPassedAt: '2026-01-02', coverage: ['1', '2'] }, '2-scope-review': { enteredAt: '2026-01-03' } } });
  const escalation = `research/${run}-scope-review/batch-1/state.json`;
  put(escalation, { version: 1, run, batch: '1', phase: 'held', reviews: [{ round: 0, decision: 'escalate' }], repairs: [], reason: 'Missing exact mathematical prerequisite.' });
  const evidence = `research/${run}-source-design.md`;
  put(evidence, 'Actual fixture source/design evidence; it makes no scientific acceptance claim.\n');
  const requestPath = `research/${run}-registration-request.json`;
  const request = { version: 1, run, reviewer: '/root', writers_drained:true, writer_scopes:[], reason: 'Register the exact missing prerequisite as separate supplemental construction while preserving all original authoring and native review history.', base_commit: base, escalation: bind(escalation), evidence: [bind(evidence)], pairs: [{ pages: pair('new-one', 3) }], additions: [] };
  put(requestPath, request);
  const calls = [];
  const prepare = (options = {}) => preparePrerequisiteRegistration(root, run, requestPath, { stateDir, scan: drained, invoke: value => calls.push(value), ...options });
  return { root, stateDir, statePath, put, read, json, bind, requestPath, request, prepare, calls, originals, evidence, escalation };
}

function repairFixture(t,{pageSetup=false,importedContext=null,ownerAddition=false}={}){
  const f=fixture(t),commit=()=>{
    for(const args of [['add','.'],['commit','-qm','Exact fixture repair preimages']]){
      const result=spawnSync('git',args,{cwd:f.root,encoding:'utf8'});assert.equal(result.status,0,result.stderr);
    }
    return spawnSync('git',['rev-parse','HEAD'],{cwd:f.root,encoding:'utf8'}).stdout.trim();
  };
  for(const pages of f.originals)for(const page of pages)for(const item of page.items){
    item.dependency_level=0;
    const path=`items/${item.id}.md`;f.put(path,f.read(path).replace('kind:',`status: draft\npipeline_run: ${run}\nkind:`));
  }
  if(pageSetup){
    f.originals[0][0].requires=['original-two-b'];f.originals[0][0].items[0].deps=['lem-original-two'];f.originals[0][0].items[0].dependency_level=1;
    f.put('items/lem-original-one.md',f.read('items/lem-original-one.md').replace('deps: []','deps: [lem-original-two]'));
    f.put('library/test/original-one-a.md','---\npage: original-one-a\nstatus: draft\nrequires: [original-two-b]\nitems: [lem-original-one]\nexamples: []\n---\n\nExact untouched page body.\n');
    f.put('library/test/original-two-a.md','---\npage: original-two-a\nstatus: published\nlibrary: mathematics\nrequires: []\nitems: [lem-original-two]\nexamples: []\n---\n\nPublished supplier context.\n');
  }
  if(importedContext){
    const {status='published',library='mathematics',alteredPin=false}=importedContext,path='library/math/pinned-context.md';
    f.put(path,`---\npage: pinned-context\nstatus: ${status}\nlibrary: ${library}\nrequires: []\nitems: [lem-pinned-context]\nexamples: []\n---\n\nImmutable imported supplier context.\n`);
    f.put('items/lem-pinned-context.md','---\nid: lem-pinned-context\nkind: lemma\nstatus: published\ndomain: mathematics\nlibrary: mathematics\ndeps: []\n---\n## Statement\n\nPublished fixture supplier.\n');
    f.put('research/math-imports.json',{version:1,files:[{path,sha256:alteredPin?'a'.repeat(64):f.bind(path).sha256},f.bind('items/lem-pinned-context.md')]});
    f.originals[0][0].items[0].deps.push('lem-pinned-context');
    f.put('items/lem-original-one.md',f.read('items/lem-original-one.md').replace('deps: [lem-original-two]','deps: [lem-original-two, lem-pinned-context]'));
  }
  if(ownerAddition){
    const id='lem-owner-repair-supplier',source=`items/${id}.md`,consumer='lem-original-one',reviewPath=`research/${run}-repair-addition-review.json`;
    f.put(source,`---\nid: ${id}\nkind: lemma\nstatus: draft\ndomain: mathematics\nlibrary: mathematics\ndeps: []\n---\n## Statement\n\nExact approved owner prerequisite.\n`);
    f.put(`items/${consumer}.md`,f.read(`items/${consumer}.md`)+`\n## Proof\n\nThe consumer uses exactly [[${id}]] under its declared hypotheses.\n`);
    f.put('library/test/original-one-a.md',`---\npage: original-one-a\nstatus: draft\nlibrary: mathematics\nitems: [${id}, ${consumer}]\nexamples: []\nrequires: []\n---\n`);
    f.put(reviewPath,{run,reviewer:'/root',native_review:false,decision:'accept',reason:'Root actually checked the added prerequisite statement, its complete proof and exact consumer use under all current hypotheses, preserving original scope.',items:[id],source_sha256:{[id]:f.bind(source).sha256},consumer_checks:[{id:consumer,decision:'unaffected',reason:'The exact original consumer uses the approved supplier conclusion and hypotheses without a scientific interface change.'}],consumer_sha256:{[consumer]:f.bind(`items/${consumer}.md`).sha256}});
    f.request.additions=[{batch:'1',page:'original-one-a',before:consumer,items:[{...item(id),dependency_level:0}],review:f.bind(reviewPath)}];
  }
  f.put('research/plan-spec.json',{pages:f.originals.flat()});
  f.originals.forEach((pages,i)=>f.put(`research/${run}-batch-${i+1}.pages.json`,pages));
  f.request.base_commit=commit();
  for(const page of f.request.pairs[0].pages)for(const item of page.items)item.dependency_level=0;
  f.put(f.requestPath,f.request);
  const entry=installPrerequisiteRegistration(f.root,run,f.stateDir,f.prepare());
  const state=f.json(f.statePath);state.stage='2-prerequisite-construct-1';state.stages[state.stage]={enteredAt:'2026-01-04'};f.put(f.statePath,state);
  const base=commit(),path='items/lem-original-one.md',authorization=`research/${run}-repair-authorize.json`,completion=`research/${run}-repair-complete.json`;
  const common={version:1,run,generation:1,reviewer:'/root',writers_drained:true,writer_scopes:[],reason:'Repair the exact observed proof formatting defect under actual Root scientific review while preserving original immutable construction history.',evidence:[f.bind(f.evidence)]};
  f.put(authorization,{...common,base_commit:base,items:['lem-original-one']});
  const authorize=()=>authorizePrerequisiteRepairs(f.root,run,f.stateDir,authorization,{scan:drained});
  const after=()=>{
    const before=f.bind(path).sha256;f.put(path,f.read(path)+'\n## Proof\n\nThe corrected focused proof formatting keeps the public assertion intact.\n');
    f.put(completion,{...common,reviews:[{id:'lem-original-one',before_sha256:before,after_sha256:f.bind(path).sha256,interface_changed:false,scientific_review:'Root checked the actual corrected proof and supplier hypotheses in this controlled fixture.',focused_checks:'Root performed the focused source layout and exact dependency-use checks in this fixture.',scoped_use_justification:'This proof-only correction preserves the public assertion and requires no changed consumer contract.',consumer_checks:[]}]});
  };
  const complete=(validate=()=>{})=>completePrerequisiteRepairs(f.root,run,f.stateDir,completion,{scan:drained,validate});
  return {...f,entry,path,authorization,completion,authorize,after,complete};
}

test('guarded repair preserves original generation/state and binds pending and completed evidence',t=>{
  const f=repairFixture(t),originalRegistry=f.read(`research/${run}-step2-prerequisites.json`),state=f.read(f.statePath),source=f.read(f.path);
  const absent=repairReviewInputs(f.root,run,1);assert.equal(absent.length,2);
  const snapshot=()=>gateReviewSnapshot({repo:f.root,run},[{id:'repair-inputs',argv:['true'],ownerReviewInputs:repairReviewInputs(f.root,run,1)}],['2-prerequisite-construct-1']).sha256;
  const beforeSnapshot=snapshot();
  f.authorize();assert.equal(f.read(f.path),source);
  const pendingSnapshot=snapshot();assert.notEqual(pendingSnapshot,beforeSnapshot);
  assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/incomplete/);
  const pending=repairReviewInputs(f.root,run,1);assert(pending.includes(f.authorization));
  f.after();let invoked=false;const result=f.complete(()=>{invoked=true;});assert(invoked);
  assert.equal(result.scientific_acceptance,false);
  assert.equal(f.read(f.statePath),state);assert.equal(f.read(`research/${run}-step2-prerequisites.json`),originalRegistry);
  assert.equal(checkedRepairOverlay(f.root,run,f.entry).sources[f.path],f.bind(f.path).sha256);
  assert(repairReviewInputs(f.root,run,1).includes(f.completion));
  assert.notEqual(snapshot(),pendingSnapshot);
  f.put(f.evidence,'Changed actual evidence');assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/evidence/);
});

test('repair admission refuses running writers, wrong stage, closed stage and uncommitted preimages',t=>{
  for(const mode of ['writers','stage','closed','preimage']){
    const f=repairFixture(t);
    if(mode==='preimage')f.put(f.path,f.read(f.path)+'\nUnregistered edit.\n');
    else {const state=f.json(f.statePath);if(mode==='writers')state.dispatches.worker={startedAt:'now'};if(mode==='stage')state.stage='2-scope-review';if(mode==='closed')state.stages[state.stage].gatesPassedAt='done';f.put(f.statePath,state);}
    assert.throws(f.authorize,/drained|paused|closed|preimage/);
    assert.equal(existsSync(join(f.root,repairPaths(run,1).authorization)),false);
  }
});

test('repair completion rejects unlisted sources, public interface misclassification and unrelated metadata edits',t=>{
  for(const mode of ['unlisted','interface','metadata']){
    const f=repairFixture(t);f.authorize();f.after();
    if(mode==='unlisted')f.put('items/lem-original-two.md',f.read('items/lem-original-two.md')+'\nUnlisted repair.\n');
    if(mode==='interface'){
      f.put(f.path,f.read(f.path).replace('Original interface.','Changed interface.'));
      const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;f.put(f.completion,req);
    }
    if(mode==='metadata'){const spec=f.json('research/plan-spec.json');spec.pages[0].order=99;f.put('research/plan-spec.json',spec);}
    assert.throws(f.complete,/unlisted source|classification|unapproved metadata/);
    assert.equal(existsSync(join(f.root,repairPaths(run,1).completion)),false);
  }
});

test('repair completion requires actual full-frontier validator and refuses stale receipt after success',t=>{
  const f=repairFixture(t);f.authorize();f.after();
  assert.throws(()=>f.complete(()=>{throw Error('actual current validator failed');}),/validator failed/);
  assert.equal(existsSync(join(f.root,repairPaths(run,1).completion)),false);
  f.complete();f.put(f.path,f.read(f.path)+'\nLater proof edit.\n');
  assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/stale/);
  assert.throws(f.complete,/already exists/);
});

test('repair permits exact source deps mirrored in plan/manifest with computed levels and ledger',t=>{
  const f=repairFixture(t),manifest=`research/${run}-batch-1.pages.json`;
  const auth=f.json(f.authorization);auth.metadata_changes=[
    {path:manifest,pointer:'/0/items/0/deps'},
    {path:'research/plan-spec.json',pointer:'/pages/0/items/0/deps'},
  ].map(row=>({...row,before_sha256:repairValueDigest([]),after_sha256:repairValueDigest(['lem-original-two'])}));
  f.put(f.authorization,auth);f.authorize();f.after();
  f.put(f.path,f.read(f.path).replace('deps: []','deps: [lem-original-two]'));
  const pages=f.json(manifest),plan=f.json('research/plan-spec.json');
  for(const list of [pages,plan.pages]){const item=list.flatMap(page=>page.items).find(item=>item.id==='lem-original-one');item.deps=['lem-original-two'];item.dependency_level=1;}
  f.put(manifest,pages);f.put('research/plan-spec.json',plan);writeBatchDependencyLevels(f.root,run);
  const request=f.json(f.completion);request.reviews[0].after_sha256=f.bind(f.path).sha256;request.reviews[0].interface_changed=true;f.put(f.completion,request);
  const done=f.complete();assert.equal(done.metadata[manifest],f.bind(manifest).sha256);
  assert.equal(checkedRepairOverlay(f.root,run,f.entry).metadata[manifest],f.bind(manifest).sha256);
  plan.pages[0].items[0].dependency_level=20;f.put('research/plan-spec.json',plan);
  assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/stale/);
});

test('repair rejects stale computed levels, foreign draft ownership and changed-interface missing consumer checks',t=>{
  for(const mode of ['level','foreign','consumer']){
    const f=repairFixture(t);f.authorize();f.after();
    if(mode==='level'){const pages=f.json(`research/${run}-batch-1.pages.json`);pages[0].items[0].dependency_level=7;f.put(`research/${run}-batch-1.pages.json`,pages);}
    if(mode==='foreign'){f.put(f.path,f.read(f.path).replace(`pipeline_run: ${run}`,'pipeline_run: foreign-run'));const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;f.put(f.completion,req);}
    if(mode==='consumer'){
      // A live consumer outside the owned frontier is still in the public-interface cone.
      f.put('items/lem-outside-consumer.md','---\nid: lem-outside-consumer\ndeps: [lem-original-one]\n---\n');
      f.put(f.path,f.read(f.path).replace('Original interface.','Changed interface.'));
      const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;req.reviews[0].interface_changed=true;f.put(f.completion,req);
    }
    assert.throws(f.complete,/differs from computed|identity\/status|same-owner consumer cone/);
  }
});

test('repair admits only predeclared exact source role/statement mirrors and retains foreign plan context',t=>{
  const f=repairFixture(t),manifest=`research/${run}-batch-1.pages.json`,plan=f.json('research/plan-spec.json');
  plan.pages.push({id:'foreign-context',category:'foreign',items:[{id:'def-foreign-context',deps:[],dependency_level:999,statement:'Foreign context remains untouched.'}]});
  f.put('research/plan-spec.json',plan);
  for(const args of [['add','.'],['commit','-qm','Exact foreign planning context']])assert.equal(spawnSync('git',args,{cwd:f.root}).status,0);
  const auth=f.json(f.authorization);auth.base_commit=spawnSync('git',['rev-parse','HEAD'],{cwd:f.root,encoding:'utf8'}).stdout.trim();
  const statement='Original interface.$';
  auth.metadata_changes=[manifest,'research/plan-spec.json'].flatMap(path=>['statement','dependency_roles'].map(field=>({path,pointer:`/${path===manifest?'':'pages/'}0/items/0/${field}`,before_sha256:repairValueDigest((path===manifest?f.json(manifest):plan.pages)[0].items[0][field]),after_sha256:repairValueDigest(field==='statement'?statement:{})})));
  f.put(f.authorization,auth);f.authorize();f.after();
  f.put(f.path,f.read(f.path).replace('Original interface.',statement).replace('deps: []','deps: []\ndependency_roles: {}'));
  const pages=f.json(manifest);
  for(const list of [pages,plan.pages]){list[0].items[0].statement=statement;list[0].items[0].dependency_roles={};}
  f.put(manifest,pages);f.put('research/plan-spec.json',plan);writeBatchDependencyLevels(f.root,run);
  const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;req.reviews[0].interface_changed=true;f.put(f.completion,req);
  // A same-hash planned value still cannot substitute for exact canonical source text.
  const invalid=structuredClone(plan);invalid.pages[0].items[0].statement='A different assertion.';f.put('research/plan-spec.json',invalid);
  assert.throws(f.complete,/exact repaired source mirror/);
  f.put('research/plan-spec.json',plan);f.complete();
  assert.equal(f.json('research/plan-spec.json').pages.at(-1).items[0].dependency_level,999);
});

test('repair freezes carrier identity and treats logical deps/roles as interface changes',t=>{
  for(const mode of ['kind','domain','library','aliases','deps','dependency_roles']){
    const f=repairFixture(t);f.authorize();f.after();
    const edit=mode==='kind'?f.read(f.path).replace('kind: lemma','kind: theorem'):f.read(f.path).replace('deps: []',mode==='deps'?'deps: [lem-original-two]':`deps: []\n${mode}: ${mode==='aliases'?'[lem-new-alias]':mode==='dependency_roles'?'{lem-original-two: mathematical-premise}':'physics'}`);
    f.put(f.path,edit);const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;f.put(f.completion,req);
    assert.throws(f.complete,mode==='deps'||mode==='dependency_roles'?/classification mismatch/:/must remain immutable/);
  }
  assert.equal(repairPublicSection('---\nkind: open-problem\n---\n## Open problem\n\nThe precise unresolved claim.\n\n## Status\nOpen.\n'),'The precise unresolved claim.');
  assert.throws(()=>repairPublicSection('---\nkind: open-problem\n---\n## Statement\nA misleading fallback.\n'),/missing canonical Open problem/);
});

test('authorized before consumers survive removed edges and completed repair rejects new consumers',t=>{
  const f=repairFixture(t),consumer='items/lem-prior-consumer.md';
  f.put(consumer,'---\nid: lem-prior-consumer\ndeps: [lem-original-one]\n---\n');
  const auth=f.authorize();assert.equal(auth.before_consumer_cones['lem-original-one'][0].sha256,f.bind(consumer).sha256);
  f.after();f.put(f.path,f.read(f.path).replace('Original interface.','Changed interface.'));
  f.put(consumer,'---\nid: lem-prior-consumer\ndeps: []\n---\n');
  const req=f.json(f.completion);req.reviews[0].after_sha256=f.bind(f.path).sha256;req.reviews[0].interface_changed=true;f.put(f.completion,req);
  assert.throws(f.complete,/same-owner consumer cone/);
  req.reviews[0].consumer_checks=[{id:'lem-prior-consumer',sha256:f.bind(consumer).sha256,decision:'unaffected',reason:'Actual fixture check confirms the removed consumer edge remains covered by before/after use review.'}];f.put(f.completion,req);f.complete();
  checkedRepairOverlay(f.root,run,f.entry);const before=repairGraphFingerprint(f.root,run,1);
  f.put('items/lem-unrelated-context.md','---\nid: lem-unrelated-context\ndeps: []\n---\nUnrelated [[def-unrelated-context]] use.\n');
  assert.equal(repairGraphFingerprint(f.root,run,1),before);
  f.put('items/lem-later-consumer.md','---\nid: lem-later-consumer\ndeps: []\n---\nNew actual [[lem-original-one]] use.\n');
  assert.notEqual(repairGraphFingerprint(f.root,run,1),before);
  assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/same-owner consumer cone/);
});

test('owner addition consumers accept only the exact fully checked repair successor and preserve original review',t=>{
  const f=repairFixture(t,{ownerAddition:true}),reviewPath=f.request.additions[0].review.path,original=f.read(reviewPath);
  checkOwnerAdditions(f.root,run,'1');f.authorize();f.after();
  assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/incomplete/);
  f.complete();checkOwnerAdditions(f.root,run,'1');assert.equal(f.read(reviewPath),original);
  assert.throws(()=>checkOwnerAdditions(f.root,run,'1',{requireAdoption:true}),/still requires explicit owner adoption/);
  f.put(f.path,f.read(f.path)+'\nUnauthorized successor edit.\n');
  assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/repair receipt stale/);
});

test('owner addition successor does not waive consumer selection or stale repair evidence',t=>{
  for(const mode of ['consumer','evidence']){
    const f=repairFixture(t,{ownerAddition:true});f.authorize();f.after();f.complete();
    if(mode==='consumer')f.put('items/lem-extra-addition-consumer.md','---\nid: lem-extra-addition-consumer\ndeps: [lem-owner-repair-supplier]\n---\n');
    else f.put(f.evidence,'Changed scientific repair evidence after completion.\n');
    assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),mode==='consumer'?/consumer review incomplete/:/stale\/nonlocal evidence/);
  }
});

function authoredFixture(t,{ownerAddition=false}={}){
  const f=repairFixture(t,{ownerAddition}),manifest=`research/${run}-batch-3.pages.json`,pages=f.json(manifest),plan=f.json('research/plan-spec.json'),id='lem-new-one',source=`items/${id}.md`;
  f.put(source,`---\nid: ${id}\nkind: lemma\ndomain: mathematics\nlibrary: mathematics\nstatus: draft\npipeline_run: ${run}\ndeps: []\nsources: {references: [{title: Actual author fixture reference, url: https://example.invalid/full-text}]}\n---\n## Statement\n\nActual complete approved clarification.\n`);
  const sourceItem={statement:'Actual complete approved clarification.',sources:{references:[{title:'Actual author fixture reference',url:'https://example.invalid/full-text'}]}};
  const base=f.json(f.authorization).base_commit,changes=[];
  for(const [path,list,prefix] of [[manifest,pages,''],['research/plan-spec.json',plan.pages,'pages/']]){
    const index=list.findIndex(page=>page.items.some(item=>item.id===id)),row=list[index].items[0];
    for(const field of ['statement','sources']){changes.push({path,pointer:`/${prefix}${index}/items/0/${field}`,before_sha256:repairValueDigest(row[field]),after_sha256:repairValueDigest(sourceItem[field])});row[field]=sourceItem[field];}
  }
  f.put(manifest,pages);f.put('research/plan-spec.json',plan);writeBatchDependencyLevels(f.root,run);
  const stage='2-prerequisite-construct-1',label='prerequisite-1-batch-3',state=f.json(f.statePath),resultPath=`research/${run}-dispatch/beta-${label}.result.json`;
  state.dispatches[`${stage}:${label}`]={stage,role:'beta',label,covers:['3'],attempt:1,startedAt:'2026-01-04T00:00:00.000Z',endedAt:'2026-01-04T01:00:00.000Z',lastExitOk:true};f.put(f.statePath,state);
  f.put(resultPath,{run,role:'beta',label,covers:['3'],attempt:1,stage,started_at:'2026-01-04T00:00:00.000Z',ended_at:'2026-01-04T01:00:00.000Z',ok:true,exit_code:0,timed_out:false});
  const request=`research/${run}-authored-adopt-request.json`,req={...f.json(f.authorization),base_commit:base,items:[id],metadata_changes:changes,reviews:[{id,source_sha256:f.bind(source).sha256,scope_preserved:true,scientific_review:'Root actually checked the full approved assertion and that the author clarification preserves every intended case.',reference_review:'Root read the actual fixture source reference and records the reading limits without claiming native proof acceptance.',consumer_checks:[]}]};f.put(request,req);
  return {...f,id,source,manifest,resultPath,adoptRequest:request,adoptReq:req,adopt:(validate=()=>{})=>adoptAuthoredMetadata(f.root,run,f.stateDir,request,{scan:drained,validate})};
}

test('new-author metadata adoption binds real native results without changing sources/history and precedes original repair',t=>{
  const f=authoredFixture(t),registry=f.read(`research/${run}-step2-prerequisites.json`),source=f.read(f.source),state=f.read(f.statePath);
  assert.deepEqual(authoredMetadataReviewInputs(f.root,run,1),[authoredMetadataPath(run,1)]);
  let subjects;const adopted=f.adopt(selection=>{subjects=selection;});assert.deepEqual(subjects,{pages:['new-one-a','new-one-b'],items:['lem-new-one','ex-new-one']});
  assert.equal(adopted.scientific_acceptance,false);assert.deepEqual(Object.keys(adopted.manifests),[f.manifest]);
  assert.equal(f.read(f.source),source);assert.equal(f.read(f.statePath),state);assert.equal(f.read(`research/${run}-step2-prerequisites.json`),registry);
  assert.equal(checkedAuthoredMetadata(f.root,run,f.entry).manifests[f.manifest],f.bind(f.manifest).sha256);
  assert(authoredMetadataReviewInputs(f.root,run,1).includes(f.resultPath));
  for(const args of [['add','.'],['commit','-qm','Accepted metadata mirrors only; not scientific acceptance']])assert.equal(spawnSync('git',args,{cwd:f.root}).status,0);
  const auth=f.json(f.authorization);auth.base_commit=spawnSync('git',['rev-parse','HEAD'],{cwd:f.root,encoding:'utf8'}).stdout.trim();f.put(f.authorization,auth);
  f.authorize();f.after();f.complete();checkedRepairOverlay(f.root,run,f.entry);
  f.put(f.resultPath,JSON.stringify({...f.json(f.resultPath),ok:false}));assert.throws(()=>checkedAuthoredMetadata(f.root,run,f.entry),/evidence|result/);
});

test('new-author metadata rejects unfinished/failed native authors, old source edits, old rows and false source mirrors',t=>{
  for(const mode of ['unfinished','failed','source','row','mirror']){
    const f=authoredFixture(t);
    if(mode==='unfinished'){const state=f.json(f.statePath);Object.values(state.dispatches)[0].endedAt=null;f.put(f.statePath,state);}
    if(mode==='failed'){const result=f.json(f.resultPath);result.ok=false;f.put(f.resultPath,result);}
    if(mode==='source')f.put(f.path,f.read(f.path)+'\nUnauthorized old source change.\n');
    if(mode==='row'){const plan=f.json('research/plan-spec.json');plan.pages[0].items[0].title='Unrelated old-row change';f.put('research/plan-spec.json',plan);}
    if(mode==='mirror'){const req=f.json(f.adoptRequest);req.metadata_changes[0].after_sha256=repairValueDigest('Invented narrowed assertion.');f.put(f.adoptRequest,req);}
    assert.throws(f.adopt,/drained|successful|old-source|original rows|exactly mirror/);
    assert.equal(existsSync(join(f.root,authoredMetadataPath(run,1))),false);
  }
});

function lifecycleFixture(t){
  const f=authoredFixture(t,{ownerAddition:true});f.adopt();
  for(const args of [['add','.'],['commit','-qm','Exact adopted construction metadata']])assert.equal(spawnSync('git',args,{cwd:f.root}).status,0);
  const auth=f.json(f.authorization);auth.base_commit=spawnSync('git',['rev-parse','HEAD'],{cwd:f.root,encoding:'utf8'}).stdout.trim();f.put(f.authorization,auth);f.authorize();f.after();f.complete();
  const pages=f.json(f.manifest),items=pages.flatMap(page=>page.items.map(item=>item.id)),pageIds=pages.map(page=>page.id),files=[...items.map(id=>`items/${id}.md`),...pages.map(page=>`library/${page.category}/${page.id}.md`)];
  for(const item of pages.flatMap(page=>page.items))if(!existsSync(join(f.root,`items/${item.id}.md`)))f.put(`items/${item.id}.md`,`---\nid: ${item.id}\nkind: ${item.kind}\nstatus: draft\ndomain: mathematics\nlibrary: mathematics\ndeps: []\n---\n## Statement\n\n${item.statement}\n`);
  for(const page of pages)f.put(`library/${page.category}/${page.id}.md`,`---\npage: ${page.id}\nstatus: draft\nitems: ${JSON.stringify(page.items.map(item=>item.id))}\n---\n`);
  const stage='2-prerequisite-construct-1',attempt='abcdef01-0000-4000-8000-000000000001',historyPath=`.physics-autopilot/${run}/owner-gate-history/${attempt}.json`;
  const gates=[{id:'supplemental-construction',argv:['true'],ownerReviewInputs:[...repairReviewInputs(f.root,run,1),...authoredMetadataReviewInputs(f.root,run,1)]},{id:'ordinary-native-test',argv:['true']}];
  const snapshot=gateReviewSnapshot({repo:f.root,run},gates,[stage]);
  const receipt={version:2,attempt,snapshotSha256:snapshot.sha256,reviewer:'/root',recertificationScope:'formatting-metadata-only',writersDrained:true,writerScopes:[],reviewStartedAt:'2026-01-05T00:01:00.000Z',reviewedAt:'2026-01-05T00:02:00.000Z',items:snapshot.items.map(item=>({...item,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence:'Actual controlled native fixture formatting check.'},metadata:{verdict:'pass',evidence:'Actual controlled native fixture metadata check.'}}))};
  f.put(historyPath,{request:{version:2,attempt,createdAt:'2026-01-05T00:00:00.000Z',consumedAt:'2026-01-05T00:03:00.000Z',snapshot},receipt});
  const eventsPath=`.physics-autopilot/${run}/events.jsonl`,events=[{at:'2026-01-05T00:04:00.000Z',type:'owner-gate-authorized',attempt,ok:true},...gates.map(gate=>({at:'2026-01-05T00:05:00.000Z',type:'gate',id:gate.id,ok:true,code:0})),{at:'2026-01-05T00:06:00.000Z',type:'gates-ok',message:`${stage}: all gates green`},{at:'2026-01-05T00:06:00.000Z',type:'stage-clear',message:`${stage} cleared — exact fixture native battery`}];f.put(eventsPath,events.map(row=>JSON.stringify(row)).join('\n')+'\n');
  const state=f.json(f.statePath);state.stage='2-scope-review';state.stages[stage].gatesPassedAt=state.stages[stage].doneAt='2026-01-05T00:06:00.000Z';f.put(f.statePath,state);
  const dir=`research/${run}-scope-review/batch-3`,label='scope-repair-3-1';
  const input={phase:'repair',round:1,role:'scope-repairer',label,simple_loop:true,inventory:{items,pages:pageIds},write_files:files,before_interfaces:{'lem-new-one':[null,'## Statement\n\nActual complete approved clarification.']},consumer_scope:[]};
  f.put(`${dir}/repair-1.input.json`,input);f.put(`${dir}/repair-1.task.md`,'Actual native fixture assigned source files only.\n');
  f.put(`${dir}/state.json`,{version:1,run,batch:'3',phase:'repair',reviews:[{round:0,decision:'repair'}],repairs:[],prepared:input});
  f.put(`${dir}/review-0.json`,{version:1,run,batch:'3',round:0,decision:'repair',reviewed_items:items,reviewed_pages:pageIds,findings:[],consumer_checks:[]});
  f.put(`research/${run}-dispatch/scope-reviewer-scope-review-3-0.result.json`,{run,role:'scope-reviewer',label:'scope-review-3-0',covers:['3'],attempt:1,ok:true,exit_code:0});
  const active=f.json(f.statePath);active.dispatches['2-scope-review:scope-review-3-0']={stage:'2-scope-review',role:'scope-reviewer',label:'scope-review-3-0',covers:['3'],attempt:1,startedAt:'2026-01-05T00:08:00.000Z',endedAt:'2026-01-05T00:09:00.000Z',lastExitOk:true};active.dispatches[`2-scope-review:${label}`]={stage:'2-scope-review',role:'scope-repairer',label,covers:['3'],attempt:1,startedAt:'2026-01-05T00:10:00.000Z',endedAt:null,lastExitOk:null};f.put(f.statePath,active);
  const finish=(decision='accept')=>{const state=f.json(f.statePath);Object.assign(state.dispatches[`2-scope-review:${label}`],{endedAt:'2026-01-05T00:11:00.000Z',lastExitOk:true});f.put(f.statePath,state);f.put(`research/${run}-dispatch/scope-repairer-${label}.result.json`,{run,role:'scope-repairer',label,covers:['3'],attempt:1,ok:true,exit_code:0,timed_out:false});f.put(`${dir}/repair-1.json`,{version:1,run,batch:'3',round:1,decision,reviewed_items:items,reviewed_pages:pageIds,findings:[],consumer_checks:[]});};
  return {...f,historyPath,eventsPath,dir,finish};
}

test('closed native construction permits exact follow-on ownership, then native collection pins repaired bytes',t=>{
  const f=lifecycleFixture(t),receipt=f.read(authoredMetadataPath(run,1)),original=f.read(f.authorization);
  const history=f.json(f.historyPath);for(const row of history.request.snapshot.inputs)if(row.path.startsWith(f.root+'/'))row.path=row.path.slice(f.root.length+1);const {sha256,...body}=history.request.snapshot;history.request.snapshot.sha256=digest(JSON.stringify(body));history.receipt.snapshotSha256=history.request.snapshot.sha256;f.put(f.historyPath,history);
  const events=f.read(f.eventsPath).trimEnd().split('\n').map(line=>JSON.parse(line));events.at(-1).at='2026-01-05T00:06:00.001Z';f.put(f.eventsPath,events.map(row=>JSON.stringify(row)).join('\n')+'\n');
  f.put(f.source,f.read(f.source).replace('Actual complete approved clarification.','Equivalent clarification supplied by the native Step2 repair.'));
  checkedAuthoredMetadata(f.root,run,f.entry);checkOwnerAdditions(f.root,run,'1');assert.equal(accepted(f.root,run,'3'),false);
  const first=prerequisiteLifecycleBinding(f.root,run);assert(first.inputs.includes(f.historyPath));assert(!first.inputs.includes(f.statePath));assert(!first.inputs.includes(f.eventsPath));
  const nativeSnapshot=gateReviewSnapshot({repo:f.root,run},[{id:'batch-scope-review',argv:['true','--prerequisite-lifecycle-sha256',first.fingerprint],ownerReviewInputs:first.inputs}],['2-scope-review']);
  for(const name of ['step2-prerequisite-lifecycle.mjs','step2-authored-metadata.mjs','step2-prerequisite-repairs.mjs','batch-scope-review.mjs'])assert(nativeSnapshot.inputs.some(row=>row.path===fileURLToPath(new URL(name,import.meta.url))&&typeof row.sha256==='string'));
  f.put(f.eventsPath,f.read(f.eventsPath)+'{"type":"report","at":"2026-01-05T00:10:01.000Z"}\n{"unfinished":');assert.equal(prerequisiteLifecycleBinding(f.root,run).fingerprint,first.fingerprint);
  f.put(f.eventsPath,f.read(f.eventsPath).split('{"unfinished":')[0]);f.finish();checkedAuthoredMetadata(f.root,run,f.entry);
  const collected=collectBatch({repo:f.root,run,dispatchDir:join(f.root,`research/${run}-dispatch`)},'3');assert.equal(collected.repairs[0].source_sha256[f.source],f.bind(f.source).sha256);
  checkOwnerAdditions(f.root,run,'1');assert.equal(f.read(authoredMetadataPath(run,1)),receipt);assert.equal(f.read(f.authorization),original);
  f.put(f.source,f.read(f.source)+'\nUnowned post-collection source mutation.\n');assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/collected native repair source changed/);
});

test('lifecycle rejects premature pass, incomplete or wrong history, out-of-scope ownership and old repaired-source edits',t=>{
  for(const mode of ['premature','history','partial','repo','gate','ownership','scope','old']){
    const f=lifecycleFixture(t);f.put(f.source,f.read(f.source).replace('Actual complete approved clarification.','Native follow-on source change.'));
    if(mode==='premature'){const state=f.json(f.statePath);delete state.stages['2-prerequisite-construct-1'].doneAt;f.put(f.statePath,state);}
    if(mode==='history'){const row=f.json(f.historyPath);row.receipt.snapshotSha256='a'.repeat(64);f.put(f.historyPath,row);}
    if(mode==='partial'||mode==='repo'){const row=f.json(f.historyPath);if(mode==='partial'){row.request.snapshot.items=[];row.receipt.items=[];}else row.request.snapshot.repo='/wrong-workspace';const {sha256,...body}=row.request.snapshot;row.request.snapshot.sha256=digest(JSON.stringify(body));row.receipt.snapshotSha256=row.request.snapshot.sha256;f.put(f.historyPath,row);}
    if(mode==='gate')f.put(f.eventsPath,f.read(f.eventsPath).replace('"code":0','"code":1'));
    if(mode==='ownership'){const state=f.json(f.statePath);delete state.dispatches['2-scope-review:scope-repair-3-1'];f.put(f.statePath,state);}
    if(mode==='scope'){const input=f.json(`${f.dir}/repair-1.input.json`);input.write_files.push(f.path);input.write_batches=['1','3'];f.put(`${f.dir}/repair-1.input.json`,input);const loop=f.json(`${f.dir}/state.json`);loop.prepared=input;f.put(`${f.dir}/state.json`,loop);}
    if(mode==='old')f.put(f.path,f.read(f.path)+'\nUnauthorized old protected-source change.\n');
    assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/closure|history|receipt|frontier|lineage|ownership|repair receipt stale/);
  }
});

test('native terminal escalation retains edit ownership and collects into hold, while failed or missing results reject',t=>{
  const f=lifecycleFixture(t);f.put(f.source,f.read(f.source)+'\nScoped native work records an unresolved prerequisite.\n');f.finish('escalate');
  checkOwnerAdditions(f.root,run,'1');const held=collectBatch({repo:f.root,run,dispatchDir:join(f.root,`research/${run}-dispatch`)},'3');assert.equal(held.phase,'held');assert.equal(accepted(f.root,run,'3'),false);checkOwnerAdditions(f.root,run,'1');
  f.put(f.source,f.read(f.source)+'\nRoot owns the focused supplier/consumer repair at this real hold.\n');assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/collected native repair source changed/);
  const owner=resolveOwner(f.root,run,'3',{decision:'accept',reviewer:'/root',reason:'Root actually reviewed the complete held source scope, repaired the supplier and checked all affected consumers under the existing owner resolution protocol.'});assert.equal(owner.source_sha256[f.source],f.bind(f.source).sha256);checkOwnerAdditions(f.root,run,'1');
  f.put(f.source,f.read(f.source)+'\nLater edit not bound by Root owner resolution.\n');assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/collected native repair source changed/);
  for(const mode of ['failed','missing']){
    const f=lifecycleFixture(t);f.put(f.source,f.read(f.source)+'\nAttempted native follow-on repair.\n');f.finish();
    if(mode==='failed'){const path=`research/${run}-dispatch/scope-repairer-scope-repair-3-1.result.json`,result=f.json(path);result.ok=false;result.exit_code=1;f.put(path,result);}
    else rmSync(join(f.root,`${f.dir}/repair-1.json`));
    assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/repair result invalid|ENOENT/);
  }
});

function pageRepairFixture(t,{importedContext=null}={}){
  const f=repairFixture(t,{pageSetup:true,importedContext}),page='original-one-a',pageSource=`library/test/${page}.md`,manifest=`research/${run}-batch-1.pages.json`,target=importedContext?'pinned-context':'original-two-a',requires=['original-two-b',target];
  const auth=f.json(f.authorization);auth.pages=[page];auth.metadata_changes=[{path:manifest,pointer:'/0/requires'},{path:'research/plan-spec.json',pointer:'/pages/0/requires'}].map(row=>({...row,before_sha256:repairValueDigest(['original-two-b']),after_sha256:repairValueDigest(requires)}));f.put(f.authorization,auth);
  const change=()=>{
    f.after();const before=f.bind(pageSource).sha256;f.put(pageSource,f.read(pageSource).replace('requires: [original-two-b]',`requires: [original-two-b, ${target}]`));
    const pages=f.json(manifest),plan=f.json('research/plan-spec.json');pages[0].requires=requires;plan.pages[0].requires=requires;f.put(manifest,pages);f.put('research/plan-spec.json',plan);writeBatchDependencyLevels(f.root,run);
    const req=f.json(f.completion);req.page_reviews=[{id:page,before_sha256:before,after_sha256:f.bind(pageSource).sha256,scoped_use_justification:'Root checked the actual item dependency supplier home and confirms this adds only necessary prerequisite reading context.',focused_checks:'Root checked unchanged body, complete item inventories and ordering, and all non-requires frontmatter bytes.'}];f.put(f.completion,req);
  };
  return {...f,page,pageSource,manifest,change};
}

test('guarded page requires additions preserve original bytes/history and require exact source mirrors/context',t=>{
  const f=pageRepairFixture(t),registry=f.read(`research/${run}-step2-prerequisites.json`);f.authorize();f.change();let full=false;
  const done=f.complete(selection=>{assert.equal(selection,undefined);full=true;});assert(full);
  assert.equal(done.sources[f.pageSource],f.bind(f.pageSource).sha256);assert(done.page_context['library/test/original-two-a.md']);assert.equal(f.read(`research/${run}-step2-prerequisites.json`),registry);
  checkedRepairOverlay(f.root,run,f.entry);assert(repairReviewInputs(f.root,run,1).includes('library/test/original-two-a.md'));
  f.put('library/test/original-two-a.md',f.read('library/test/original-two-a.md')+'\nChanged context.\n');assert.throws(()=>checkedRepairOverlay(f.root,run,f.entry),/context review map/);
});

test('page context admits authenticated published imports absent from plan and rejects invalid pins/classification',t=>{
  const f=pageRepairFixture(t,{importedContext:{}});assert(!f.json('research/plan-spec.json').pages.some(page=>page.id==='pinned-context'));
  f.authorize();f.change();const result=f.complete();assert(result.page_context['library/math/pinned-context.md']);checkedRepairOverlay(f.root,run,f.entry);
  for(const importedContext of [{alteredPin:true},{library:'physics'},{status:'draft'}]){
    const negative=pageRepairFixture(t,{importedContext});negative.authorize();negative.change();
    assert.throws(negative.complete,/immutable pin|classification mismatch/);
    assert.equal(existsSync(join(negative.root,repairPaths(run,1).completion)),false);
  }
});

test('page context admission rejects requires deletion, body/inventory edits, foreign ownership and unlisted pages',t=>{
  for(const mode of ['delete','body','inventory','foreign','unlisted','unused','pointer']){
    const f=pageRepairFixture(t);
    if(mode==='foreign'){const auth=f.json(f.authorization);auth.pages=['original-two-a'];f.put(f.authorization,auth);assert.throws(f.authorize,/draft pages/);continue;}
    f.authorize();f.change();
    if(mode==='delete')f.put(f.pageSource,f.read(f.pageSource).replace('original-two-b, ',''));
    if(mode==='body')f.put(f.pageSource,f.read(f.pageSource)+'\nChanged claim.\n');
    if(mode==='inventory')f.put(f.pageSource,f.read(f.pageSource).replace('items: [lem-original-one]','items: []'));
    if(mode==='unlisted')f.put('library/test/original-one-b.md',f.read('library/test/original-one-b.md')+'\nUnlisted page edit.\n');
    if(mode==='unused')f.put(f.pageSource,f.read(f.pageSource).replace('original-two-b, original-two-a','original-two-b, original-one-b'));
    if(mode==='pointer'){const plan=f.json('research/plan-spec.json');plan.pages[1].requires=['original-one-a','original-two-a'];f.put('research/plan-spec.json',plan);}
    const req=f.json(f.completion);req.page_reviews[0].after_sha256=f.bind(f.pageSource).sha256;f.put(f.completion,req);
    assert.throws(f.complete,/only add context|must remain exact|unlisted source|actual item dependency home|unapproved metadata/);
    assert.equal(existsSync(join(f.root,repairPaths(run,1).completion)),false);
  }
});

test('registration is prospective, preserves original sources/Step 1, and enters ordinary Step-2 inventory without acceptance', t => {
  const f = fixture(t), oldState = f.read(f.statePath), oldScope = f.read(f.escalation);
  const oldManifest = f.read(`research/${run}-batch-1.pages.json`);
  const oldSource = f.read('items/lem-original-one.md');
  const prepared = f.prepare();
  assert.equal(prerequisiteRegistry(f.root, run), null);
  assert.equal(existsSync(join(f.root, `research/${run}-batch-3.pages.json`)), false);
  assert.deepEqual(f.calls[0].pages, ['new-one-a', 'new-one-b']);
  assert.equal(f.calls[0].plan.pages.length, 6);
  const result = installPrerequisiteRegistration(f.root, run, f.stateDir, prepared);
  assert.deepEqual(result.batches, ['3']);
  assert.equal(result.scientific_acceptance, false);
  assert.equal(result.original_step1_coverage, false);
  assert.equal(f.read(f.statePath), oldState);
  assert.equal(f.read(f.escalation), oldScope);
  assert.equal(f.read(`research/${run}-batch-1.pages.json`), oldManifest);
  assert.equal(f.read('items/lem-original-one.md'), oldSource);
  assert.deepEqual(batchInput(f.root, run, '3').inventory.items, ['lem-new-one', 'ex-new-one']);
  assert.equal(accepted(f.root, run, '3'), false);
  assert.equal(existsSync(join(f.root, `items/lem-new-one.md`)), false);
  assert.equal(existsSync(join(f.root, `research/${run}-dispatch/tool-scope-accepted-3.result.json`)), false);
  assert.deepEqual(prerequisiteRegistry(f.root, run).original_batches, ['1', '2']);
  assert.throws(()=>checkSupplement(f.root,run,1),/Readiness record missing/);
});

for (const [name, mutate, expected] of [
  ['unpaused controller', s => { s.paused = false; }, /paused unfinished Step 2/],
  ['wrong active stage', s => { s.stage = '1-scaffold'; }, /paused unfinished Step 2/],
  ['unclosed Step 1', s => { delete s.stages['1-scaffold'].gatesPassedAt; }, /construction is not closed/],
  ['closed Step 2', s => { s.stages['2-scope-review'].doneAt = 'done'; }, /Step 2 already closed/],
  ['entered later stage', s => { s.stages['3-read'] = { enteredAt: 'started' }; }, /later stage already entered/],
  ['native writer still running', s => { s.dispatches.worker = { startedAt: 'started' }; }, /native dispatches not drained/],
]) test(`refuses ${name} before preparing outputs`, t => {
  const f = fixture(t), state = f.json(f.statePath); mutate(state); f.put(f.statePath, state);
  assert.throws(() => f.prepare(), expected);
  assert.equal(prerequisiteRegistry(f.root, run), null);
});

test('live controller lock and external source writer fail closed', t => {
  const f = fixture(t);
  f.put(`.physics-autopilot/${run}/controller.lock`, { pid: process.pid });
  assert.throws(() => f.prepare(), /live controller lock/);
  rmSync(join(f.stateDir, 'controller.lock'));
  assert.throws(() => prerequisiteBoundary(f.root, run, f.stateDir, () => ({ ...drained(), writer: [{ pid: process.pid }] })), /writers must be stopped/);
});

test('rejects stale source evidence and committed metadata mismatch', t => {
  const f = fixture(t);
  f.put(f.evidence, 'Changed source evidence.');
  assert.throws(() => f.prepare(), /stale evidence/);
  f.request.evidence = [f.bind(f.evidence)]; f.put(f.requestPath, f.request);
  f.put('research/plan-spec.json', { pages: f.originals.flat(), changed: true });
  assert.throws(() => f.prepare(), /commit current metadata before registering/);
});

test('rejects nonexistent base commit rather than substituting HEAD', t => {
  const f = fixture(t); f.request.base_commit = '0'.repeat(40); f.put(f.requestPath, f.request);
  assert.throws(() => f.prepare(), /Git evidence unavailable/);
});

test('ordinary prospective validator rejection leaves no live registration or journal', t => {
  const f = fixture(t), before = f.read('research/plan-spec.json');
  assert.throws(() => f.prepare({ invoke: ({ plan, pages }) => {
    assert.equal(plan.pages.length, 6); assert.deepEqual(pages, ['new-one-a', 'new-one-b']);
    throw Error('ordinary validator: page prerequisite cycle');
  } }), /page prerequisite cycle/);
  assert.equal(f.read('research/plan-spec.json'), before);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), false);
});

test('cross-batch item dependency cycle fails before install', t => {
  const f = fixture(t), second = pair('new-two', 4);
  f.request.pairs[0].pages[0].items[0].deps = ['lem-new-two'];
  second[0].items[0].deps = ['lem-new-one'];
  f.request.pairs.push({ pages: second }); f.put(f.requestPath, f.request);
  assert.throws(() => f.prepare(), /Batch dependency cycle/);
});

test('interrupted installation blocks new work and finish installs the exact prospective bytes', t => {
  const f = fixture(t), prepared = f.prepare(), state = f.read(f.statePath);
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared, { afterInstall(index) { if (index === 0) throw Error('simulated interruption'); } }), /simulated interruption/);
  assert.throws(() => assertNoPrerequisiteTransaction(f.stateDir), /interrupted\/active installation/);
  assert.throws(() => f.prepare(), /interrupted\/active installation/);
  finishPrerequisiteRegistration(f.root, run, f.stateDir);
  for (const [path, text] of prepared.outputs) assert.equal(f.read(path), text);
  assert.equal(f.read(f.statePath), state);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), false);
  const journal = f.json(`.physics-autopilot/${run}/step2-prerequisites-installed-1.json`);
  assert.ok(journal.rows.every(row => /^[a-f0-9]{64}$/.test(row.after) && !('contents' in row) && !('preimage' in row)));
});

test('finish checks all targets before making progress when a third party mutates one target', t => {
  const f = fixture(t), prepared = f.prepare();
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared, { afterInstall() { throw Error('interrupted'); } }), /interrupted/);
  f.put('research/plan-spec.json', '{"unexpected":"mutation"}\n');
  const ledger = f.read(`research/${run}-scope-ledger.json`);
  assert.throws(() => finishPrerequisiteRegistration(f.root, run, f.stateDir), /unexpected mutation research\/plan-spec.json/);
  assert.equal(f.read(`research/${run}-scope-ledger.json`), ledger);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), true);
});

test('install refuses changed native state after preparation', t => {
  const f = fixture(t), prepared = f.prepare();
  f.put(f.statePath, { ...f.json(f.statePath), paused: false });
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared), /boundary changed during preparation/);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), false);
});

test('install refuses changed request after preparation', t => {
  const f = fixture(t), prepared = f.prepare();
  f.put(f.requestPath, { ...f.request, reason: f.request.reason + ' Changed authorization.' });
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared), /boundary changed during preparation/);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), false);
});

for (const target of ['evidence', 'source', 'metadata']) test(`install refuses changed ${target} since preparation before taking the lock`, t => {
  const f = fixture(t), prepared = f.prepare();
  const path = target === 'evidence' ? f.evidence : target === 'source' ? 'items/lem-original-one.md' : `research/${run}-covers.json`;
  f.put(path, f.read(path) + '\nChanged after preparation.\n');
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared), /(?:input|metadata|output) changed during preparation/);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), false);
  assert.equal(prerequisiteRegistry(f.root, run), null);
});

for (const target of ['evidence', 'source']) test(`replay refuses changed ${target} without advancing other outputs`, t => {
  const f = fixture(t), prepared = f.prepare();
  assert.throws(() => installPrerequisiteRegistration(f.root, run, f.stateDir, prepared, { afterInstall() { throw Error('interrupted'); } }), /interrupted/);
  const path = target === 'evidence' ? f.evidence : 'items/lem-original-one.md';
  f.put(path, f.read(path) + '\nChanged while installation was interrupted.\n');
  const plan = f.read('research/plan-spec.json');
  assert.throws(() => finishPrerequisiteRegistration(f.root, run, f.stateDir), /changed transaction input/);
  assert.equal(f.read('research/plan-spec.json'), plan);
  assert.equal(existsSync(join(f.stateDir, 'step2-prerequisites.lock')), true);
});

for (const [name, mutate, expected] of [
  ['non-Root request', r => { r.reviewer = 'worker'; }, /invalid Root request/],
  ['existing page identity', r => { r.pairs[0].pages[0].id = 'original-one-a'; r.pairs[0].pages[1].companion = 'original-one-a'; r.pairs[0].pages[1].requires = ['original-one-a']; }, /existing page/],
  ['duplicate item identity', r => { r.pairs[0].pages[0].items[0].id = 'lem-original-one'; }, /invalid\/duplicate declaration/],
  ['physical supplemental declaration', r => { r.pairs[0].pages[0].items[0].domain = 'physics'; }, /invalid\/duplicate declaration/],
  ['broken reciprocal companion', r => { r.pairs[0].pages[1].companion = 'other-page'; }, /invalid reciprocal pair/],
]) test(`rejects ${name} without installing anything`, t => {
  const f = fixture(t); mutate(f.request); f.put(f.requestPath, f.request);
  assert.throws(() => f.prepare(), expected);
  assert.equal(prerequisiteRegistry(f.root, run), null);
});

test('owner additions require exact source-bound review and become current batch inventory without resetting its hold', t => {
  const f = fixture(t), id = 'lem-owner-added', source = `items/${id}.md`;
  f.put(source, `---\nid: ${id}\nkind: lemma\nstatus: draft\ndomain: mathematics\ndeps: []\n---\n\n## Statement\n\nExact owner-added lemma.\n`);
  f.put('library/test/original-one-a.md',`---\npage: original-one-a\nstatus: draft\nlibrary: mathematics\nitems: [lem-original-one, ${id}]\nexamples: []\n---\n`);
  const reviewPath = `research/${run}-owner-addition-review.json`;
  f.put(reviewPath, { run, reviewer: '/root', native_review: false, decision: 'accept', reason: 'The owner has actually reviewed the precise additional prerequisite statement, complete argument, hypotheses, and affected consumer uses.', items: [id], source_sha256: { [id]: digest(f.read(source)) }, consumer_checks: [] });
  f.request.additions = [{ batch: '1', page: 'original-one-a', items: [item(id)], review: f.bind(reviewPath) }];
  f.put(f.requestPath, f.request);
  installPrerequisiteRegistration(f.root, run, f.stateDir, f.prepare());
  assert.deepEqual(batchInput(f.root, run, '1').inventory.items, ['lem-original-one', id, 'ex-original-one']);
  assert.equal(f.json(f.escalation).phase, 'held');
  assert.equal(f.json(f.escalation).reviews.length, 1);
  assert.equal(accepted(f.root, run, '1'), false);
  assert.doesNotThrow(() => checkOwnerAdditions(f.root, run, '1'));
  const acceptance=resolveOwner(f.root,run,'1',{reviewer:'/root',decision:'accept',reason:'Actual complete source-bound review, current owning metadata and every affected consumer have now been resolved.'});
  assert.equal(acceptance.review_count,1);assert.equal(acceptance.repair_count,0);
  assert.ok(acceptance.reviewed_inventory.items.includes(id));assert.equal(accepted(f.root,run,'1'),true);
  f.put(source, f.read(source) + '\nChanged proof.\n');
  assert.throws(() => checkOwnerAdditions(f.root, run, '1'), /stale owner addition review/);
  const state=f.json(f.statePath);state.stages['2-scope-review'].doneAt='genuine-later-native-step2-pass';f.put(f.statePath,state);
  assert.doesNotThrow(()=>checkOwnerAdditions(f.root,run,'1'),'later native source repairs preserve genuine historical acceptance');
});

test('every atomic output interruption can finish without copying original bytes or asserting acceptance',t=>{
  const count=fixture(t).prepare().outputs.size;
  for(let interrupted=0;interrupted<count;interrupted++) {
    const f=fixture(t),prepared=f.prepare(),oldState=f.read(f.statePath);
    assert.throws(()=>installPrerequisiteRegistration(f.root,run,f.stateDir,prepared,{afterInstall(index){if(index===interrupted)throw Error('injected interruption');}}),/injected interruption/);
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),true);
    finishPrerequisiteRegistration(f.root,run,f.stateDir);
    assert.equal(prerequisiteRegistry(f.root,run).generations.length,1);
    assert.equal(f.read(f.statePath),oldState);
    assert.equal(accepted(f.root,run,'3'),false);
    const journal=f.json(`.physics-autopilot/${run}/step2-prerequisites-installed-1.json`);
    assert.ok(journal.rows.every(row=>Object.keys(row).sort().join(',')==='after,before,path,temp'));
    assert.ok(!readdirSync(f.stateDir).some(name=>/backup|archive/i.test(name)));
  }
});

test('hand-edited registry and changed import receipt fail authenticated activation',t=>{
  const f=fixture(t);installPrerequisiteRegistration(f.root,run,f.stateDir,f.prepare());
  const path=`research/${run}-step2-prerequisites.json`,original=f.read(path);
  f.put(path,{...f.json(path),original_batches:['1']});
  assert.throws(()=>prerequisiteRegistry(f.root,run),/completed native installation/);
  f.put(path,original);f.put('research/math-imports.json',{version:1,files:[],unauthorized_pin_change:true});
  assert.throws(()=>prerequisiteRegistry(f.root,run),/import pins\/receipt changed/);
});

test('source writer attestation and newly appeared output paths are checked before taking a lock',t=>{
  const f=fixture(t);f.put(f.requestPath,{...f.request,writers_drained:false});
  assert.throws(()=>f.prepare(),/invalid Root request/);
  f.put(f.requestPath,f.request);const prepared=f.prepare();
  f.put(`research/${run}-batch-3.pages.json`,[]);
  assert.throws(()=>installPrerequisiteRegistration(f.root,run,f.stateDir,prepared),/output changed during preparation/);
  assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
});

test('owner supplier insertion preserves old relative order and requires complete current consumer review',t=>{
  const f=fixture(t),id='lem-inserted-supplier',source=`items/${id}.md`,consumer='lem-original-one';
  f.put(source,`---\nid: ${id}\nkind: lemma\nstatus: draft\ndomain: mathematics\ndeps: []\n---\n\n## Statement\n\nExact supplier.\n`);
  f.put(`items/${consumer}.md`,`---\nid: ${consumer}\nkind: lemma\ndeps: [${id}]\n---\n\n## Statement\n\nConsumer.\n`);
  f.put('library/test/original-one-a.md',`---\npage: original-one-a\nstatus: draft\nlibrary: mathematics\nitems: [${id}, ${consumer}]\nexamples: []\n---\n`);
  const reviewPath=`research/${run}-insert-review.json`;
  const review={run,reviewer:'/root',native_review:false,decision:'accept',reason:'Root has independently checked this complete added supplier argument and the exact source-bound direct and indirect consumer uses with unchanged hypotheses.',items:[id],source_sha256:{[id]:digest(f.read(source))},consumer_checks:[]};
  f.put(reviewPath,review);
  f.request.additions=[{batch:'1',page:'original-one-a',before:consumer,items:[item(id)],review:f.bind(reviewPath)}];f.put(f.requestPath,f.request);
  assert.throws(()=>f.prepare(),/consumer review incomplete/);
  Object.assign(review,{consumer_checks:[{id:consumer,decision:'unaffected',reason:'The consumer uses exactly the proved supplier hypotheses and conclusion; no additional public-interface or proof repair remains.'}],consumer_sha256:{[consumer]:digest(f.read(`items/${consumer}.md`))}});
  f.put(reviewPath,review);f.request.additions[0].review=f.bind(reviewPath);f.put(f.requestPath,f.request);
  installPrerequisiteRegistration(f.root,run,f.stateDir,f.prepare());
  assert.deepEqual(batchInput(f.root,run,'1').inventory.items,[id,consumer,'ex-original-one']);
  f.put(`items/${consumer}.md`,f.read(`items/${consumer}.md`)+'\nChanged after owner review.\n');
  assert.throws(()=>checkOwnerAdditions(f.root,run,'1'),/stale owner addition consumer/);
});

test('two prerequisite pairs append as disjoint native source owners with fresh ordinary scope inventories',t=>{
  const f=fixture(t);f.request.pairs.push({pages:pair('new-two',4)});f.put(f.requestPath,f.request);
  const entry=installPrerequisiteRegistration(f.root,run,f.stateDir,f.prepare());
  assert.deepEqual(entry.batches,['3','4']);assert.equal(entry.owned_sources.length,8);
  assert.equal(new Set(entry.owned_sources).size,8);
  assert.deepEqual(batchInput(f.root,run,'4').inventory.items,['lem-new-two','ex-new-two']);
  for(const batch of entry.batches)assert.equal(accepted(f.root,run,batch),false);
  const old=f.json(f.statePath).stages['1-scaffold'];assert.deepEqual(old.coverage,['1','2']);
});

test('existing additions cannot borrow an already accepted native batch disposition',t=>{
  const f=fixture(t),scope=f.json(f.escalation);scope.phase='accepted';f.put(f.escalation,scope);
  // Keep a different genuine originating hold, as when adding to another batch.
  const other=`research/${run}-scope-review/batch-2/state.json`;f.put(other,{...scope,batch:'2',phase:'held'});
  f.request.escalation=f.bind(other);f.request.additions=[{batch:'1',page:'original-one-a',items:[item('lem-extra')]}];f.put(f.requestPath,f.request);
  assert.throws(()=>f.prepare(),/actual owner hold/);
  assert.equal(existsSync(join(f.root,`research/${run}-step2-prerequisites.json`)),false);
});

test('new canonical identities cannot steal existing aliases or off-plan page homes',t=>{
  for(const collision of ['alias','page']) {
    const f=fixture(t);
    if(collision==='alias')f.put('items/lem-original-one.md',f.read('items/lem-original-one.md').replace('deps: []','deps: []\naliases: [lem-collision]'));
    else f.put('library/foreign/new-one-a.md','---\npage: new-one-a\nstatus: published\nitems: []\nexamples: []\n---\n');
    if(collision==='alias'){f.request.pairs[0].pages[0].items[0].id='lem-collision';f.put(f.requestPath,f.request);}
    assert.throws(()=>f.prepare(),collision==='alias'?/collides with existing alias/:/new page identity collides/);
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
  }
});

test('null page inventories are empty ownership lists without hiding page identity collisions',t=>{
  for(const value of ['', ' null', ' ~'])for(const collision of [false,true]) {
    const f=fixture(t),page=collision?'new-one-a':'unrelated-null-page';
    f.put(`library/foreign/${page}.md`,`---\npage: ${page}\nstatus: published\nitems:${value}\nexamples:${value}\n---\n`);
    if(collision)assert.throws(()=>f.prepare(),/new page identity collides with another carrier/);
    else assert.doesNotThrow(()=>f.prepare(),'unrelated published null inventories do not block registration');
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
  }
});

test('non-null malformed page inventories and null sequence members remain blocking',t=>{
  for(const field of ['items','examples'])for(const value of [' {}',' "null"',' false',' 0',' lem-untyped',' [null]']) {
    const f=fixture(t);
    f.put('library/foreign/malformed-inventory.md',`---\npage: malformed-inventory\nstatus: published\n${field}:${value}\n---\n`);
    assert.throws(()=>f.prepare(),/unreadable page (?:inventory|member)/);
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
  }
});

test('foreign manifest claims cannot be adopted as new unowned draft source',t=>{
  const f=fixture(t),id='lem-new-one';
  f.put(`items/${id}.md`,`---\nid: ${id}\nkind: lemma\nstatus: draft\ndomain: mathematics\ndeps: []\n---\n`);
  f.put('research/foreign-run-batch-1.pages.json',[{id:'foreign-a',items:[{id}]}]);
  f.request.source_adoptions=[{path:`items/${id}.md`,sha256:digest(f.read(`items/${id}.md`)),page:'new-one-a',ownership:'unowned-local-draft',reason:'Root explicitly adopts these exact unowned local draft source bytes for this new prerequisite.'}];f.put(f.requestPath,f.request);
  assert.throws(()=>f.prepare(),/foreign run owns requested source/);
});

test('foreign pipeline_run markers cannot be adopted without a surviving foreign manifest',t=>{
  for(const kind of ['item','page']) {
    const f=fixture(t),path=kind==='item'?'items/lem-new-one.md':'library/supplemental/new-one-a.md';
    const identity=kind==='item'?'id: lem-new-one\nkind: lemma':'page: new-one-a\nitems: [lem-new-one]\nexamples: []';
    f.put(path,`---\n${identity}\nstatus: draft\ndomain: mathematics\nlibrary: mathematics\npipeline_run: foreign-run\ndeps: []\n---\n`);
    f.request.source_adoptions=[{path,sha256:digest(f.read(path)),page:'new-one-a',ownership:'unowned-local-draft',reason:'Root explicitly adopts this exact draft source only when current or unowned source ownership is genuine.'}];f.put(f.requestPath,f.request);
    assert.throws(()=>f.prepare(),/foreign pipeline_run claims requested draft source/);
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
    f.put(path,f.read(path).replace('pipeline_run: foreign-run',`pipeline_run: ${run}`));
    f.request.source_adoptions[0].sha256=digest(f.read(path));f.put(f.requestPath,f.request);
    assert.doesNotThrow(()=>f.prepare(),'current-run draft ownership remains admissible');
  }
});

test('existing unowned new drafts require exact explicit Root source grants and stay bound through installation',t=>{
  const f=fixture(t),path='items/lem-new-one.md';
  f.put(path,'---\nid: lem-new-one\nkind: lemma\nstatus: draft\ndomain: mathematics\ndeps: []\n---\n\n## Statement\n\nA pending draft proof.\n');
  assert.throws(()=>f.prepare(),/exact explicit draft source adoptions required/);
  f.request.source_adoptions=[{path,sha256:digest(f.read(path)),page:'new-one-a',ownership:'unowned-local-draft',reason:'Root explicitly adopts this exact unowned draft source for the proposed new prerequisite page.'}];f.put(f.requestPath,f.request);
  const prepared=f.prepare();assert.equal(prepared.entry.source_adoptions.length,1);
  f.put(path,f.read(path)+'\nChanged after the source grant.\n');
  assert.throws(()=>installPrerequisiteRegistration(f.root,run,f.stateDir,prepared),/input changed during preparation/);
});

test('source ownership projection is refreshed before install and interrupted replay',t=>{
  for(const replay of [false,true]) {
    const f=fixture(t),prepared=f.prepare();
    if(replay)assert.throws(()=>installPrerequisiteRegistration(f.root,run,f.stateDir,prepared,{afterInstall(){throw Error('interrupted');}}),/interrupted/);
    f.put('items/def-late-claim.md','---\nid: def-late-claim\nkind: definition\naliases: [lem-new-one]\n---\n');
    assert.throws(()=>replay?finishPrerequisiteRegistration(f.root,run,f.stateDir):installPrerequisiteRegistration(f.root,run,f.stateDir,prepared),/source ownership changed/);
  }
});

test('additional held batch state is an immutable transaction input, separately from the originating hold',t=>{
  const f=fixture(t),id='lem-second-owner-addition',source=`items/${id}.md`,hold=`research/${run}-scope-review/batch-2/state.json`,reviewPath=`research/${run}-second-addition-review.json`;
  f.put(hold,{version:1,run,batch:'2',phase:'held',reviews:[{round:0,decision:'escalate'}],repairs:[]});
  f.put(source,`---\nid: ${id}\nkind: lemma\nstatus: draft\ndomain: mathematics\ndeps: []\n---\n`);
  f.put('library/test/original-two-a.md',`---\npage: original-two-a\nstatus: draft\nitems: [lem-original-two, ${id}]\nexamples: []\n---\n`);
  f.put(reviewPath,{run,reviewer:'/root',native_review:false,decision:'accept',reason:'Root has actually reviewed this exact completed owner-added mathematical supplier and every affected use; no native review is being asserted.',items:[id],source_sha256:{[id]:digest(f.read(source))},consumer_checks:[]});
  f.request.additions=[{batch:'2',page:'original-two-a',items:[item(id)],review:f.bind(reviewPath)}];f.put(f.requestPath,f.request);
  const prepared=f.prepare();assert.equal(prepared.guards[hold],digest(f.read(hold)));
  f.put(hold,{...f.json(hold),phase:'accepted'});
  assert.throws(()=>installPrerequisiteRegistration(f.root,run,f.stateDir,prepared),/input changed during preparation/);
});

test('native mixed-case underscore run identities remain inert without a registry',t=>{
  const f=fixture(t),other='Demo_1';
  f.put(`research/${other}-scope-review/batch-1/state.json`,{version:1,run:other,batch:'1',phase:'accepted',reviews:[],repairs:[]});
  assert.equal(prerequisiteRegistry(f.root,other),null);assert.equal(accepted(f.root,other,'1'),true);
});

test('symlinked state directory, state file and dangling prospective target all fail before preparation',t=>{
  for(const kind of ['directory','state-file','output']) {
    const f=fixture(t);
    if(kind==='directory'){const outside=join(f.root,'..','outside-state');renameSync(f.stateDir,outside);symlinkSync(outside,f.stateDir,'dir');}
    else if(kind==='state-file'){const outside=join(f.root,'..','outside-state.json');renameSync(join(f.root,f.statePath),outside);symlinkSync(outside,join(f.root,f.statePath));}
    else symlinkSync(join(f.root,'..','missing-target'),join(f.root,`research/${run}-prerequisite-1-batch-3.task.md`));
    assert.throws(()=>f.prepare(),/symlinked/);
    assert.equal(existsSync(join(f.stateDir,'step2-prerequisites.lock')),false);
  }
});
