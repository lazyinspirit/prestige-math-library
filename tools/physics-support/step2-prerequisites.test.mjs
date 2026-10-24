import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync, rmSync,readdirSync,renameSync,symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  preparePrerequisiteRegistration, installPrerequisiteRegistration,
  finishPrerequisiteRegistration, prerequisiteRegistry, prerequisiteBoundary,
  assertNoPrerequisiteTransaction, checkOwnerAdditions,checkSupplement,
} from './step2-prerequisites.mjs';
import { batchInput, accepted,resolveOwner } from './batch-scope-review.mjs';

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
