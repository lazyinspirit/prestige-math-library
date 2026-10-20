import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { inspectStep6Cutover, cutoverStep6 } from '../src/step6-cutover.mts';
import { assertFreshStep6State } from '../../step6-prepared.mjs';
import { planDocument } from '../../step6-plan-projection.mjs';

const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const encode = (value: unknown) => JSON.stringify(value, null, 2) + '\n';
// Synthetic operational history only: these fixtures grant no production gate coverage.
function fixture(t: any, revision = 'six-step-v1-compact') {
  const repo = mkdtempSync(join(tmpdir(), 'compact-refresh-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const cwd = process.cwd(); process.chdir(repo);
  t.after(() => process.chdir(cwd));
  const run = 'demo', stateDir = join(repo, '.autopilot', run), dispatchDir = join(repo, 'research', run + '-dispatch');
  const put = (path: string, value: unknown) => {
    mkdirSync(join(repo, path, '..'), { recursive: true });
    writeFileSync(join(repo, path), typeof value === 'string' ? value : encode(value));
  };
  const git = (...args: string[]) => execFileSync('git', args, { cwd: repo, encoding: 'utf8' }).trim();
  const read = (path: string) => readFileSync(join(repo, path));
  put('.gitignore', '.autopilot/\n');
  put('.autopilot/demo/config.json', { run, stages: 'tools/autopilot/stages/owner-supervised-compact.mts' });
  put('research/demo-statement-first.json', { version: 1, run, domain: 'math', standard: 'statement-first-v1', page_layout: 'compact-v1' });
  const page = { id: 'owned-page', kind: 'A', category: 'algebra', requires: [], items: ['thm-owned'] };
  put('research/plan-spec.json', { pages: [page] });
  put('research/demo-scope-ledger.json', { run, pages: [{ id: page.id, kind: 'A', category: 'algebra' }] });
  put('research/demo-batch-1.pages.json', [page]);
  put('library/algebra/owned-page.md', '---\npage: owned-page\nitems: [thm-owned]\nexamples: []\n---\n');
  put('items/thm-owned.md', '---\nid: thm-owned\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nFixture.\n');
  put('research/published-consumer-supplier-ledger.md', '');
  put('research/defect-ledger.jsonl', '');
  put('tools/autopilot/stages/mathlib.mts', '// fixture native v3 table\n');
  put('tools/autopilot/stages/mathlib.compact.mts', '// fixture compact adapter\n');
  put('tools/autopilot/stages/owner-supervised-compact.mts', '// fixture wrapper\n');
  put('autopilot.config.json', { stages: 'tools/autopilot/stages/owner-supervised-compact.mts' });
  git('init', '-b', 'main'); git('config', 'user.name', 'Fixture'); git('config', 'user.email', 'fixture@example.invalid');
  mkdirSync(join(repo, 'empty-hooks')); git('config', 'core.hooksPath', join(repo, 'empty-hooks'));
  git('add', '.'); git('commit', '-qm', 'fixture original');
  const originalHead = git('rev-parse', 'HEAD');
  const rows = [{ id: page.id, raw: JSON.stringify(page) }];
  const authority = 'research/demo-plan-projection.json';
  put(authority, { version: 1, kind: 'plan-page-replacement-projection', run, path: 'research/plan-spec.json',
    authorized_by: 'owner', authorization: 'Seal exactly the fixture owned page projection.',
    original_head: originalHead, original_index_blob: git('rev-parse', ':research/plan-spec.json'),
    page_ids: [page.id], base_head_owned_rows: rows, base_index_owned_rows: rows, target_owned_rows: rows,
    evidence: ['research/demo-scope-ledger.json', 'research/demo-batch-1.pages.json'].map(path => ({ path, sha256: hash(read(path)) })) });
  // Match plan's exact raw row tokens rather than its incidental enclosing layout.
  put('research/plan-spec.json', '{"pages":[' + JSON.stringify(page) + ']}');
  const originalRaw = planDocument(execFileSync('git', ['show', originalHead + ':research/plan-spec.json'],
    { cwd: repo, encoding: 'utf8' })).rows[0].raw;
  const spec = JSON.parse(read(authority).toString());
  spec.base_head_owned_rows = spec.base_index_owned_rows = [{ id: page.id, raw: originalRaw }];
  put(authority, spec);
  put('research/demo-closeout-scope.json', { version: 1, run, authorized_by: 'owner',
    authorization: 'Authorize exactly the operational fixture frontier.', additional_paths: [],
    plan_projection: { path: 'research/plan-spec.json', authority, sha256: hash(read(authority)) } });
  const at = (n: number) => `2026-01-01T00:00:${String(n).padStart(2, '0')}.000Z`;
  const gates = [{ id: 'fixture-final', argv: ['fixture'], required: true }];
  put('.autopilot/demo/step6-prepared.json', { run, kind: 'actual-step6-format-metadata-preparation',
    validationStage: '6-final-validation-v3', gates, gateInventorySha256: hash(JSON.stringify(gates)), completedAt: at(1) });
  const state: any = { version: 1, run, workflowRevision: revision, paused: true, stage: '6-finalize-v3', stages: {
    '5.10-gate': { gatesPassedAt: at(0) }, '5-freeze': { enteredAt: at(0) },
    '6-prepare-v3': { doneAt: at(1) },
    '6-final-validation-v3': { gatesPassedAt: at(4), doneAt: at(5) }, '6-finalize-v3': { enteredAt: at(6) } },
    dispatches: { '6-finalize-v3:step6-finalize-v3': { stage: '6-finalize-v3', role: 'tool', label: 'step6-finalize-v3',
      startedAt: at(7), endedAt: at(8), lastExitOk: false } } };
  const events: any[] = [
    { type: 'gates', at: at(2), message: '6-final-validation-v3: running 1 gate(s)' },
    { type: 'gate', at: at(3), id: 'fixture-final', ok: true },
    { type: 'gates-ok', at: at(4), message: '6-final-validation-v3: all gates green' },
    { type: 'stage-clear', at: at(5), message: '6-final-validation-v3 cleared — fixture' },
    { type: 'dispatch', at: at(7), stage: '6-finalize-v3', role: 'tool', label: 'step6-finalize-v3' },
    { type: 'dispatch-failed', at: at(8), key: '6-finalize-v3:step6-finalize-v3', ok: false,
      message: 'tool/step6-finalize-v3 exit=1 :: step6-finalize: Step-6 prepared source or derived evidence changed' } ];
  put('research/demo-dispatch/tool-step6-finalize-v3.result.json', { ok: false });
  const save = () => { put('.autopilot/demo/state.json', state); put('.autopilot/demo/events.jsonl', events.map(row => JSON.stringify(row)).join('\n') + '\n'); };
  save();
  const authorizationPath = join(repo, 'research/demo-step6-refresh-authorization.json');
  const options = { repo, run, stateDir, dispatchDir, authorizationPath, refresh: true };
  return { repo, state, events, save, put, read, git, options, originalHead };
}

for (const revision of ['six-step-v1-compact', 'six-step-v1-construction-scope'])
  test(`${revision} refresh authenticates fresh-v3 history and foreign successor commits`, t => {
    const f = fixture(t, revision);
    f.put('foreign.md', 'independent tooling commit\n'); f.git('add', 'foreign.md'); f.git('commit', '-qm', 'foreign successor');
    const before = f.read('.autopilot/demo/state.json');
    const inspected = inspectStep6Cutover(f.options);
    assert.equal(inspected.guards.failed_refresh_basis.original_head, f.originalHead);
    assert.deepEqual(inspected.guards.failed_refresh_basis.checked_descendant_commits, [f.git('rev-parse', 'HEAD')]);
    assert.deepEqual(f.read('.autopilot/demo/state.json'), before, 'inspection is read only');
    const source = inspected.guards.source_sha256;
    f.put('tools/autopilot/stages/owner-supervised-compact.mts', '// changed actual wrapper\n');
    assert.notEqual(inspectStep6Cutover(f.options).guards.source_sha256, source, 'selected compact wrapper is source-bound');
  });

test('sealed compact refresh archives history, preserves prefix/revision and resets only Step 6', t => {
  const f = fixture(t), beforeHead = f.git('rev-parse', 'HEAD'), beforeIndex = f.read('.git/index');
  const prefix = { '5.10-gate': f.state.stages['5.10-gate'], '5-freeze': f.state.stages['5-freeze'] };
  const events = f.read('.autopilot/demo/events.jsonl');
  const inspected = inspectStep6Cutover(f.options);
  f.put('research/demo-step6-refresh-authorization.json', { version: 1, run: 'demo', authorized_by: 'owner',
    kind: 'current-input-step6-v3-refresh', authorization: 'Reopen fixture finalization with fresh preparation and complete gates.', guards: inspected.guards });
  const result = cutoverStep6(f.options);
  const state = JSON.parse(f.read('.autopilot/demo/state.json').toString());
  assert.equal(state.stage, '6-prepare-v3'); assert.equal(state.paused, true);
  assert.equal(state.workflowRevision, 'six-step-v1-compact'); assert.deepEqual(state.stages, prefix);
  assert.deepEqual(state.dispatches, {}); assert.equal(existsSync(join(f.options.dispatchDir, 'tool-step6-finalize-v3.result.json')), false);
  assert.deepEqual(f.read(result.archive + '/state.json'), inspected.stateBytes);
  assert.ok(f.read('.autopilot/demo/events.jsonl').subarray(0, events.length).equals(events));
  assert.equal(f.git('rev-parse', 'HEAD'), beforeHead); assert.deepEqual(f.read('.git/index'), beforeIndex);
  assertFreshStep6State(f.options);
});

for (const [label, mutate, error] of [
  ['unknown revision', (f: any) => { f.state.workflowRevision = 'six-step-v1-future'; }, /unsupported workflow revision/],
  ['compact historical cutover', (f: any) => { f.options.refresh = false; f.state.stage = '6-contracts'; f.state.stages = { '5.10-gate': { gatesPassedAt: 'x' }, '5-freeze': { enteredAt: 'x' } }; }, /unsupported workflow revision/],
  ['compact refresh outside finalizer', (f: any) => { f.state.stage = '6-prepare-v3'; }, /unfinished native v3 finalization/],
  ['undrained dispatch', (f: any) => { delete f.state.dispatches['6-finalize-v3:step6-finalize-v3'].endedAt; }, /unresolved native dispatch/],
  ['missing Step-5 terminal gate', (f: any) => { delete f.state.stages['5.10-gate']; }, /Step-5 terminal/],
  ['failed preceding gate', (f: any) => { f.events[1].ok = false; }, /battery is incomplete/],
  ['unknown finalizer refusal', (f: any) => { f.events[5].message = 'arbitrary failure'; }, /authenticated pre-ref refusal/],
  ['successful terminal result', (f: any) => { f.put('research/demo-dispatch/tool-step6-finalize-v3.result.json', { ok: true }); }, /transaction may have landed/],
  ['unknown compact adapter', (f: any) => { f.put('.autopilot/demo/config.json', { run: 'demo', stages: 'tools/autopilot/stages/mathlib.mts' }); }, /known native compact adapter/],
  ['foreign runtime config', (f: any) => { f.put('.autopilot/demo/config.json', { run: 'foreign', stages: 'tools/autopilot/stages/mathlib.compact.mts' }); }, /exact run-local native configuration/],
  ['unknown runtime config key', (f: any) => { f.put('.autopilot/demo/config.json', { run: 'demo', stages: 'tools/autopilot/stages/mathlib.compact.mts', bypass: true }); }, /exact run-local native configuration/],
  ['noncompact policy', (f: any) => { f.put('research/demo-statement-first.json', { version: 1, run: 'demo', domain: 'math', standard: 'statement-first-v1' }); }, /native compact-v1 policy/],
  ['owned staged difference', (f: any) => { f.put('items/thm-owned.md', f.read('items/thm-owned.md').toString() + '\nStaged delta.\n'); f.git('add', 'items/thm-owned.md'); }, /owned staged rows differ/],
  ['owned intervening commit', (f: any) => { f.put('items/thm-owned.md', f.read('items/thm-owned.md').toString() + '\nCommitted delta.\n'); f.git('add', 'items/thm-owned.md'); f.git('commit', '-qm', 'owned change'); }, /owned HEAD changed/],
] as const) test(`compact refresh rejects ${label}`, t => {
  const f = fixture(t); mutate(f); f.save(); assert.throws(() => inspectStep6Cutover(f.options), error);
});

test('construction-scope historical cutover still uses the original route', t => {
  const f = fixture(t, 'six-step-v1-construction-scope');
  f.state.stage = '6-contracts';
  f.state.stages = { '5.10-gate': f.state.stages['5.10-gate'], '5-freeze': f.state.stages['5-freeze'], '6-contracts': {} };
  f.state.dispatches = {}; f.save();
  const inspected = inspectStep6Cutover({ ...f.options, refresh: false });
  assert.equal(inspected.guards.refresh, false);
  assert.equal(inspected.guards.failed_refresh_basis, undefined);
  assert.deepEqual(inspected.guards.reset_stages, ['6-contracts']);
});

test('compact runtime config raw bytes and either exact native adapter are guard-bound', t => {
  const f = fixture(t), first = inspectStep6Cutover(f.options).guards;
  const path = '.autopilot/demo/config.json';
  f.put(path, f.read(path).toString() + ' ');
  const changed = inspectStep6Cutover(f.options).guards;
  assert.notEqual(changed.compact_refresh_context.config_sha256, first.compact_refresh_context.config_sha256);
  assert.equal(changed.source_sha256, first.source_sha256, 'runtime seal covers bytes outside sourceState');
  f.put(path, { run: 'demo', stages: 'tools/autopilot/stages/mathlib.compact.mts' });
  assert.equal(inspectStep6Cutover(f.options).guards.compact_refresh_context.adapter, 'tools/autopilot/stages/mathlib.compact.mts');
});

test('sealed compact refresh refuses changed runtime config before any archive/state mutation', t => {
  const f = fixture(t), before = f.read('.autopilot/demo/state.json');
  const guards = inspectStep6Cutover(f.options).guards;
  f.put('research/demo-step6-refresh-authorization.json', { version: 1, run: 'demo', authorized_by: 'owner',
    kind: 'current-input-step6-v3-refresh', authorization: 'Reopen fixture with native preparation and all final gates.', guards });
  f.put('.autopilot/demo/config.json', f.read('.autopilot/demo/config.json').toString() + ' ');
  assert.throws(() => cutoverStep6(f.options), /sealed guards changed/);
  assert.deepEqual(f.read('.autopilot/demo/state.json'), before);
  assert.ok(existsSync(join(f.options.dispatchDir, 'tool-step6-finalize-v3.result.json')));
});
