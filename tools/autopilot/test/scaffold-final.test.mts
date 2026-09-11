import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { loadStep3, scopeHash, itemHash, recordStep3, checkStep3 } from '../../step3-decisions.mjs';
import { stages, step3Plan } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { writeAuditorBaseline, certifyAuditorItems } from '../../step3-auditor-items.mjs';

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'step3-'));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (name: string, value: any) => writeFileSync(join(root, 'research', name), JSON.stringify(value));
  const pages: any[] = [
    { id: 'a', kind: 'A', companion: 'b', order: 1, requires: [], items: [
      { id: 'lem-a', kind: 'lemma', statement: 'A', strategy: 'Proof A', deps: ['lem-published'] },
      { id: 'thm-b', kind: 'theorem', statement: 'B', strategy: 'Proof B', deps: ['lem-a'] }] },
    { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'], items: [
      { id: 'ex-c', kind: 'example', statement: 'C', strategy: 'Compute C', deps: ['thm-b'] }] }];
  const published = (text: string) => writeFileSync(join(root, 'items/lem-published.md'),
    `---\nid: lem-published\nstatus: published\ndeps: []\n---\n${text}\n`);
  published('Published proof');
  put('demo-batch-1.pages.json', pages);
  put('demo-batch-1.coverage.json', { pages: [{ page: 'a', sources: [] }] });
  put('plan-spec.json', { pages });
  put('demo-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
  const record = (input: any) => recordStep3(root, { run: 'demo', reason: 'Exact evidence', ...input });
  const scope = () => record({ phase: 'scope', page: 'a', decision: 'sufficient' });
  const audit = (item: string, options = {}) => record({ phase: 'item', item, decision: 'accept', confidence: 1, dependencies: [], ...options });
  const check = (phase = 'final') => checkStep3(loadStep3(root, 'demo'), phase);
  return { root, put, pages, published, record, scope, audit, check, ctx: { repo: root, run: 'demo' } };
}

test('Step 3 is two barriers with the requested profiles, not a Beta loop', t => {
  const f = fixture(t), pair = stages.filter(s => /^3[a-z]-/.test(s.id));
  assert.deepEqual(pair.map(s => s.id), ['3a-scope', '3b-author']);
  assert.ok(!stages.some(s => ['3-review', '3-fix', '3-recheck'].includes(s.id)));
  assert.ok(pair.every(s => !s.pipeline));
  for (const [s, profile, phase] of [[pair[0], MODEL_PROFILE_NAMES.solHigh, 'scope'], [pair[1], MODEL_PROFILE_NAMES.astraMedium, 'final']] as any) {
    assert.equal(s.modelProfile, profile);
    const plan = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, phase);
    assert.equal(plan.profile, profile);
    assert.ok(s.pattern.test(`${plan.role}-${plan.label}.result.json`));
  }
});

test('scope is required; legacy sufficient pair verdicts cannot approve items', t => {
  const f = fixture(t);
  f.put('demo-scaffold-final-a.json', { decision: 'accept', confidence: 1 });
  assert.equal(f.check('scope').closed, false);
  assert.throws(() => f.audit('lem-a'), /3a must clear/);
  f.scope();
  assert.equal(f.check('scope').closed, true);
  assert.equal(f.check().closed, false);
});

test('Step-3 auditor-created items bypass self-review but inherit the approved baseline scope', t => {
  const f = fixture(t);
  f.scope();
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items', 'lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: []\n---\n\n## Statement\n\nCreated.\n\n## Proof\n\nDirect.\n');
  mkdirSync(join(f.root, 'research', 'demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a', covers: ['1'],
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  certifyAuditorItems(f.root, 'demo');
  assert.equal(f.check('scope').closed, true, 'the reviewed baseline plus exact addition closes current scope');
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  const final = f.check();
  assert.equal(final.closed, true);
  assert.equal(final.accepted, 4);
});

test('Step-3 auditor additions cannot turn an insufficient baseline scope into approval', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', decision: 'insufficient' });
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items', 'lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: []\n---\nCreated.\n');
  mkdirSync(join(f.root, 'research', 'demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a', covers: ['1'],
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  certifyAuditorItems(f.root, 'demo');
  const result = f.check('scope');
  assert.equal(result.closed, false);
  assert.equal(result.work[0].owner, true);
});

test('insufficient scope requires owner action; merge/enrich do not mean proceed', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', decision: 'insufficient' });
  assert.equal(f.check('scope').work[0].owner, true);
  assert.throws(() => f.scope(), /Only the owner/);
  for (const decision of ['merge', 'enrich']) {
    f.record({ phase: 'scope', page: 'a', decision, owner: true });
    assert.equal(f.check('scope').closed, false);
    assert.throws(() => f.scope(), /Only the owner/);
  }
  f.record({ phase: 'scope', page: 'a', decision: 'proceed', owner: true });
  assert.equal(f.check('scope').closed, true);
});

test('every A/B item needs a decision; uncertainty escalates; owner repair bypasses rejudge', t => {
  const f = fixture(t); f.scope();
  assert.throws(() => f.audit('lem-a', { confidence: .99 }), /100%/);
  assert.throws(() => f.audit('lem-a', { dependencies: undefined }), /examined dependency/);
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'repaired', dependencies: ['lem-published'] });
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  f.audit('thm-b', { decision: 'repaired' });
  assert.equal(f.check().accepted, 2);
  assert.equal(f.check().closed, false);
  f.audit('ex-c'); assert.equal(f.check().closed, true);
});

test('owner reopen authorizes a fresh audit without certifying the repair', t => {
  const f = fixture(t); f.scope();
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  const before = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final').label;
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'reopen', dependencies: ['lem-published'],
    reason: 'Supply the named local lemma and preserve the original claim.' });
  const open = f.check().work.find((w: any) => w.item === 'lem-a');
  assert.equal(open.owner, false);
  assert.match(open.reason, /fresh post-reopen item audit/);
  assert.notEqual(step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final').label, before);
  f.audit('lem-a', { decision: 'repaired', dependencies: ['lem-published'] });
  assert.equal(f.check().accepted, 1);
  assert.equal(f.check().closed, false);
});

test('proof changes invalidate the item and its consumers but not scope', t => {
  const f = fixture(t); f.scope();
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  const before = scopeHash(loadStep3(f.root, 'demo'), 'a');
  f.pages[0].items[0].strategy = 'New proof'; f.put('demo-batch-1.pages.json', f.pages);
  assert.equal(scopeHash(loadStep3(f.root, 'demo'), 'a'), before);
  assert.equal(f.check().accepted, 0);
});

test('published and implicit dependency changes invalidate decisions', t => {
  const f = fixture(t); f.scope();
  const path = join(f.root, 'items/lem-implicit.md');
  writeFileSync(path, '---\nid: lem-implicit\ndeps: []\n---\nFirst proof');
  f.audit('ex-c', { dependencies: ['lem-implicit'] });
  const before = itemHash(loadStep3(f.root, 'demo'), 'ex-c', ['lem-implicit']);
  writeFileSync(path, '---\nid: lem-implicit\ndeps: []\n---\nChanged proof');
  assert.notEqual(itemHash(loadStep3(f.root, 'demo'), 'ex-c', ['lem-implicit']), before);
  assert.equal(f.check().accepted, 0);
  f.audit('lem-a'); f.published('Changed supplier'); assert.equal(f.check().accepted, 0);
});

test('claim changes invalidate scope; shared plan registration alone does not', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', owner: true, decision: 'proceed' });
  f.put('plan-spec.json', { pages: f.pages }); assert.equal(f.check('scope').closed, true);
  f.pages[0].items[0].statement = 'New claim'; f.put('demo-batch-1.pages.json', f.pages);
  assert.equal(f.check('scope').closed, false);
});

test('changed evidence cannot let an adjudicator bypass an escalation', t => {
  const f = fixture(t); f.scope();
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  f.published('New dependency evidence');
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  assert.equal(f.check().work.find((w: any) => w.item === 'lem-a').owner, true);
});

test('missing prerequisites can be escalated and forged receipt identities fail closed', t => {
  const f = fixture(t); f.scope();
  f.pages[0].items[0].deps.push('lem-missing'); f.put('demo-batch-1.pages.json', f.pages);
  f.audit('lem-a', { decision: 'escalate', confidence: undefined, dependencies: ['lem-missing'] });
  assert.equal(f.check().work.find((w: any) => w.item === 'lem-a').owner, true);
  const row = f.audit('thm-b');
  f.put('demo-step3b-review-thm-b.json', { ...row, target: 'wrong' });
  assert.throws(() => f.check(), /receipt identity/);
});

test('final gate retains mechanical and cross-batch checks', t => {
  const f = fixture(t), s: any = stages.find(s => s.id === '3b-author');
  const ids = s.gates(f.ctx).map((g: any) => g.id);
  for (const id of ['step3-items', 'manifest-deps', 'scope-decisions', 'url-liveness', 'frontier-dependency-ledger', 'proof-contract', 'rendercheck'])
    assert.ok(ids.includes(id), `${id} missing`);
  assert.ok(!ids.includes('splice-verify'), 'the author barrier precedes the splice');
  assert.ok(stages.find(s => s.id === '4-splice').gates(f.ctx).some(g => g.id === 'validate-plan'));
  assert.ok(ids.some((id: string) => /coverage/.test(id)));
  assert.ok(ids.some((id: string) => /policy/.test(id)));
});

test('fresh missing decisions dispatch only the owning groups', async t => {
  const f = fixture(t), started: any[] = [];
  const scope: any = stages.find(s => s.id === '3a-scope');
  const args = { ctx: f.ctx, stage: scope, failure: { id: 'step3-scope' },
    executor: { start: (_s: any, plan: any) => started.push(plan) } };
  await scope.onGateFailure(args);
  assert.equal(started.length, 1);
  assert.deepEqual(started[0].covers, ['1']);
  assert.equal(started[0].profile, MODEL_PROFILE_NAMES.solHigh);
  f.scope(); started.length = 0;
  const audit: any = stages.find(s => s.id === '3b-author');
  await audit.onGateFailure({ ...args, stage: audit });
  assert.equal(started.length, 1);
  assert.equal(started[0].profile, MODEL_PROFILE_NAMES.astraMedium);
});

test('the CLI records scope and returns nonzero until every item clears', t => {
  const f = fixture(t);
  const tool = fileURLToPath(new URL('../../step3-decisions.mjs', import.meta.url));
  const run = (...args: string[]) => spawnSync(process.execPath, [tool, ...args, '--run', 'demo'],
    { cwd: f.root, encoding: 'utf8' });
  assert.equal(run('check', '--phase', 'scope').status, 1);
  const r = run('record-scope', '--page', 'a', '--decision', 'sufficient', '--reason', 'Scope evidence');
  assert.equal(r.status, 0, r.stderr);
  assert.equal(run('check', '--phase', 'scope').status, 0);
  assert.equal(run('check', '--phase', 'final').status, 1);
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  assert.equal(run('check', '--phase', 'final').status, 0);
});

test('escalations, unchanged incomplete audits and final mechanical failures never loop', async t => {
  const f = fixture(t); f.scope();
  const s: any = stages.find(s => s.id === '3b-author');
  const args = { ctx: f.ctx, stage: s, failure: { id: 'step3-items' }, executor: { start: () => assert.fail('Unexpected dispatch') } };
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  assert.match((await s.onGateFailure(args)).owner.reason, /lem-a/);
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'repaired', dependencies: [] });
  const plan = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  f.put('demo-dispatch/done.result.json', { label: plan.label });
  assert.match((await s.onGateFailure(args)).owner.reason, /unchanged inputs/);
  f.audit('thm-b'); f.audit('ex-c');
  assert.match((await s.onGateFailure({ ...args, failure: { id: 'source-fetch-check' } })).owner.reason, /mechanical gate/);
});

test('prompts require concise scope decisions and impartial sequential dependency audits', () => {
  const base = new URL('../../../briefs/', import.meta.url);
  assert.match(readFileSync(new URL('step3-scope.md', base), 'utf8'), /owner alone decides/);
  const audit = readFileSync(new URL('group-author.md', base), 'utf8');
  for (const re of [/one item\s+at a time/, /impartial/, /honest/, /authoritative sources/, /published item/, /cross-batch/, /confidence 1/, /still needs authored content/]) assert.match(audit, re);
});
