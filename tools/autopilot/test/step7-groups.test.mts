// Step-6 readers, historical group-scope compatibility, and dispatcher result
// naming. The replacement Step-7 protocol is covered by step7-stages-v2 and
// step7-workflow tests; historical group receipts cannot satisfy its rounds.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { appendFileSync, writeFileSync, readFileSync, readdirSync, rmSync, existsSync, mkdtempSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages, dependencyFirst } from '../stages/mathlib.mts';
import { MODELS } from '../../models.mjs';
import { validateCodexOutputSchema } from '../../codex-output-schema.mjs';
import { itemHashGuard } from '../../item-hash.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const READER_WARNING_ITEM = 'rem-invariance-of-domain';

const stage = (id: string): any => stages.find((s: any) => s.id === id);

test('FA queues put suppliers before consumers, including transitive suppliers', () => {
  const deps: Record<string, string[]> = { 'a-consumer': ['middle'], middle: ['z-supplier'] };
  assert.deepEqual(dependencyFirst(['a-consumer', 'z-supplier'], id => deps[id] ?? []),
    ['z-supplier', 'a-consumer']);
  assert.deepEqual(dependencyFirst(['b', 'a'], () => []), ['a', 'b']);
  assert.throws(() => dependencyFirst(['a'], id => id === 'a' ? ['b'] : ['a']), /dependency cycle/);
});

test('the step-6 reader output schema is accepted by the dispatcher', () => {
  const schema = JSON.parse(readFileSync(join(REPO, 'briefs/schemas/step7-context.json'), 'utf8'));
  assert.deepEqual(validateCodexOutputSchema(schema), []);
});

/** A throwaway repo holding just the group assignment and the item map, which is
 *  all the step-7 routing hooks read. */
function fixtureRepoWithGroups() {
  const dir = mkdtempSync(join(tmpdir(), 'step7-'));
  mkdirSync(join(dir, 'research'));
  mkdirSync(join(dir, 'tools'));
  mkdirSync(join(dir, 'briefs', 'tasks'), { recursive: true });
  // Recovery hooks refresh the derived task files before dispatch. These
  // routing tests need only attest that the refresh happened successfully;
  // step7-scope.mjs itself has integration tests against the real repository.
  writeFileSync(join(dir, 'tools', 'step7-scope.mjs'), 'process.exit(0);\n');
  writeFileSync(join(dir, 'research', 'demo-alpha-groups.json'),
    JSON.stringify([{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]));
  writeFileSync(join(dir, 'research', 'demo-step7-scope.json'),
    JSON.stringify({ by_item: { 'thm-demo-x': 'a', 'thm-demo-y': 'b' } }));
  for (const label of ['a', 'b']) {
    writeFileSync(join(dir, 'research', `demo-alpha-${label}-step7.task.md`),
      `# Fixture Step 7 task for group ${label}\n\nInspect and resolve only this group's exact assigned rows.\n`);
  }
  writeFileSync(join(dir, 'research', 'demo-alpha-step7.task.md'),
    '# Fixture Step 7 task\n\nInspect and resolve only the exact assigned rows.\n');
  writeFileSync(join(dir, 'briefs', 'tasks', 'alpha-step7-closure-recovery.md'),
    '# Fixture closure recovery\n\nAdjudicate every exact rejection row in the envelope.\n');
  writeFileSync(join(dir, 'briefs', 'tasks', 'alpha-step7-preflight.md'),
    '# Fixture preflight\n\nRepair every exact integrity failure in the envelope.\n');
  return dir;
}

// THE STEP-6 PRE-READ (owner, 2026-08-25): the group Alphas are spawned,
// assigned their groups and read their pairs WHILE the judges sweep. These tests
// pin the two properties that make that safe and worth doing — the pre-read
// cannot write, and it is a unit of the sweep's own stage rather than a stage in
// front of it, which is the difference between overlapping the sweep and
// delaying it.
test('the group read is a unit of the sweep stage, not a stage before it', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const s = stage('6-judge');
  const ctx = { run: 'frontier-18', repo: REPO };
  const units = s.units(ctx).map(String);
  assert.ok(units.includes('sweep'), 'the sweep is one unit');
  assert.ok(units.length > 1, 'and every group is another');
  assert.ok(s.concurrency > 1, 'they must be able to run at once, or this is serial after all');
  const plans = s.plan(ctx, units);
  const sweep = plans.find((p: any) => p.role === 'tool');
  const preads = plans.filter((p: any) => p.role === 'alpha-group-read');
  assert.ok(sweep, 'the sweep is still dispatched here');
  assert.equal(preads.length, units.length - 1, 'one reader per group');
  for (const p of preads) {
    assert.ok(s.pattern.test(`${p.role}-${p.label}.result.json`));
    assert.ok(p.outputSchema, 'a read-only role returns its digest through the schema path');
    assert.match(p.resultArtifact, /-step7-context\.json$/);
  }
  assert.ok(s.pattern.test(`${sweep.role}-${sweep.label}.result.json`));
});

test('the step-6 reader cannot write, and it is the kernel that says so', () => {
  const r = spawnSync('node', ['tools/dispatch.mjs', '--check-read-only'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  const line = r.stdout.split('\n').find((l) => l.startsWith('alpha-group-read'));
  assert.ok(line, 'alpha-group-read must appear in the read-only attestation');
  assert.match(line!, /--sandbox read-only \(process-level\)/,
    'a prompt-level instruction is not the guarantee step 6 needs');
});

test('digest recovery supplies exact diagnostics and the prior evidence instead of a blind reread', async () => {
  const root = fixtureRepoWithGroups();
  try {
    const started: any[] = [];
    const s = stage('6-judge');
    await s.onGateFailure({
      ctx: { run: 'demo', repo: root }, stage: s, round: 1,
      executor: { start: (_stage: any, plan: any) => started.push(plan) },
      failure: { id: 'step7-digests', output: 'group b: schema $.seams_checked[0].opened: unexpected field' },
    });
    assert.equal(started.length, 1);
    const task = readFileSync(join(root, started[0].task), 'utf8');
    assert.match(task, /seams_checked\[0\]\.opened: unexpected field/);
    assert.match(task, /demo-alpha-b-step7-context\.json/);
    assert.match(task, /preserve supported findings/);
    assert.deepEqual(started[0].covers, []);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a re-read round is not mistaken for the unit it repairs', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const s = stage('6-judge');
  const started: any[] = [];
  s.onGateFailure({
    ctx: { run: 'frontier-18', repo: REPO },
    executor: { start: (_x: any, p: any) => started.push(p) },
    stage: s, round: 1,
    failure: { id: 'step7-digests', why: 'group c items_read: unexpected `def-external`' },
  });
  assert.equal(started.length, 1, 'only the group with a thin digest is re-read');
  assert.match(started[0].label, /read-again-c-/);
  for (const p of started) {
    assert.equal(p.role, 'alpha-group-read', 'and still read-only');
    assert.deepEqual(p.covers, [], 'a repair round manufactures no coverage');
    assert.ok(!s.pattern.test(`${p.role}-${p.label}.result.json`),
      `${p.label} would satisfy the stage's own coverage`);
    rmSync(join(REPO, p.task), { force: true });
  }
});

// THE HANDOFF. Step 6 records compact durable findings; Step 7 consumes those
// findings in a fresh context instead of inheriting a full reader transcript.
test('the step-6 reader hands off a digest without a resumable session', { skip: !existsSync(join(REPO, 'research/frontier-18-alpha-groups.json')) }, () => {
  const ctx = { run: 'frontier-18', repo: REPO };
  const reader = stage('6-judge').plan(ctx, stage('6-judge').units(ctx).map(String))
    .filter((p: any) => p.role === 'alpha-group-read');
  assert.ok(reader.length, 'there are readers to check');
  for (const p of reader) {
    assert.match(p.resultArtifact, /-step7-context\.json$/);
    assert.equal(p.sessionHome, undefined);
    assert.equal(p.resumeSession, undefined);
  }
});
















test('Step-7 role briefs limit repair assignments to draft frontier items', () => {
  for (const name of ['step7-adjudicator.md', 'step7-owner-repair.md']) {
    const brief = readFileSync(join(REPO, 'briefs', name), 'utf8').replace(/\s+/g, ' ');
    assert.match(brief, /assigned draft items|assigned draft IDs/, name);
    assert.match(brief, /Published repairs.*no .*item.gate.*rejudge.*adjudication|Published repairs.*no adjudication.*rejudge.*item.gate/, name);
    assert.match(brief, /direct.*consumer|downstream consumer/i, name);
  }
});
test('the historical final-adjudicator lane retains its profile and explicitly retires from current Step 7', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'final-adjudicator', '--brief', 'briefs/final-adjudicator.md',
    '--task', 'briefs/tasks/final-adjudicator-step7.md', '--label', 'fa-test',
    '--run', 'fa-test', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.role, 'final-adjudicator');
  assert.equal(row.model, MODELS.astra.id);
  assert.equal(row.requested_effort, 'medium');
  assert.equal(row.provider_effort, 'medium');
  assert.equal(row.auto_compact_token_limit, 500000);
  assert.match(row.command, /model_auto_compact_token_limit=500000/);
  assert.match(row.command, /tools\.web_search=true/);
  // The access guarantees the owner restated on 2026-09-20: an adjudicator keeps
  // web search AND shell network access (source fetch), reads the whole library
  // and every item of the frontier — bundles are an entry point, not a fence.
  assert.match(row.command, /sandbox_workspace_write\.network_access=true/);
  assert.match(row.prompt, /retired from the current Step-7 workflow/);
  assert.match(row.prompt, /step7-adjudicator\.md/);
  assert.match(row.prompt, /step7-owner-repair\.md/);
});

test('the Step-7 group adjudicator lane keeps web search, network access and earlier compaction', () => {
  const result = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'alpha-adjudicate', '--brief', 'briefs/alpha.md',
    '--task', 'briefs/tasks/alpha-step7.md', '--label', 'step7-x',
    '--run', 'fa-test', '--covers', '1', '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const row = JSON.parse(result.stdout);
  assert.equal(row.role, 'alpha-adjudicate');
  assert.equal(row.sandbox, 'workspace-write');
  assert.match(row.command, /tools\.web_search=true/);
  assert.match(row.command, /sandbox_workspace_write\.network_access=true/);
  assert.equal(row.auto_compact_token_limit, 500000);
});

// Owner rule, 2026-10-01: EVERY agent lane auto-compacts at 500k, whatever the
// provider. The DeepSeek lane is the one that needs the check: its generated
// model catalog sets `auto_compact_token_limit: null`, so without the explicit
// `-c` flag that lane would never compact at all.
test('every role lane carries the 500k auto-compaction rule, DeepSeek included', () => {
  const roles = ['beta', 'reader', 'refuter', 'alpha', 'alpha-high', 'alpha-report',
    'alpha-adjudicate', 'final-adjudicator', 'alpha-group-read', 'alpha-assign',
    'scaffolder', 'mechanic'];
  for (const role of roles) {
    const result = spawnSync('node', ['tools/dispatch.mjs',
      '--role', role, '--brief', 'briefs/alpha.md', '--task', 'briefs/tasks/alpha-step7.md',
      '--label', 'compact-test', '--run', 'compact-test', '--covers', '1',
      '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
    assert.equal(result.status, 0, `${role}: ${result.stderr}`);
    const row = JSON.parse(result.stdout);
    assert.equal(row.auto_compact_token_limit, 500000, `${role} must compact at 500k`);
    assert.match(row.command, /model_auto_compact_token_limit=500000/, `${role} command`);
    assert.match(row.command, /model_auto_compact_token_limit_scope="total"/, `${role} scope`);
  }
  const deepseek = spawnSync('node', ['tools/dispatch.mjs',
    '--role', 'reader', '--brief', 'briefs/reader.md', '--label', 'compact-ds',
    '--run', 'compact-test', '--covers', '1', '--profile', 'deepseek-v4.1-flash-max',
    '--dry-run', '--json'], { cwd: REPO, encoding: 'utf8' });
  assert.equal(deepseek.status, 0, deepseek.stderr);
  const dsRow = JSON.parse(deepseek.stdout);
  assert.equal(dsRow.provider, 'deepseek');
  assert.equal(dsRow.auto_compact_token_limit, 500000,
    'the DeepSeek lane must compact at 500k too, overriding its catalog default');
  assert.match(dsRow.command, /model_auto_compact_token_limit=500000/);
});

// Against the live run, because the plan reads the VALIDATED group assignment
// and a fixture would exercise the positional fallback instead — the one thing
// `alphaGroups` documents as deliberately not the answer.

// `step7-scope.mjs` resolves the repository from its OWN location, not from
// cwd — deliberately, so a tool cannot be pointed at half a repo. A fixture
// therefore has to be a throwaway RUN inside the real `research/`, cleaned up in
// a finally. That is also the honest test: it exercises the paths the gate
// actually reads.
const check = (run: string) => spawnSync('node', ['tools/step7-scope.mjs', 'check', '--run', run],
  { cwd: REPO, encoding: 'utf8' });

const render = (run: string) => spawnSync('node', ['tools/step7-scope.mjs', 'render', '--run', run],
  { cwd: REPO, encoding: 'utf8' });

function withFixtureRun(files: Record<string, unknown>, body: (run: string) => void) {
  const run = `step7scopetest${process.pid}`;
  const written: string[] = [];
  try {
    for (const [suffix, content] of Object.entries(files)) {
      const p = join(REPO, 'research', `${run}-${suffix}`);
      // A string is written verbatim, so jsonl ledgers can be fixtures too.
      writeFileSync(p, typeof content === 'string' ? content : JSON.stringify(content));
      written.push(p);
    }
    body(run);
  } finally {
    for (const p of written) rmSync(p, { force: true });
    for (const name of readdirSync(join(REPO, 'research'))) {
      if (name.startsWith(`${run}-step7-bundle-`) && name.endsWith('.md')) {
        rmSync(join(REPO, 'research', name), { force: true });
      }
    }
  }
}

test('render excludes published judge rejections from the adjudication queue', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{ id: 'page-demo', kind: 'A', title: 'Demo', category: 'demo', order: 1,
      items: [{ id: 'thm-parallelogram-law' }], requires: [] }],
    'judge.jsonl': `${JSON.stringify({ id: 'thm-parallelogram-law', model: 'gpt-6-sol', keep: false,
      reason: 'A published claim needs correction.', context_sha256: 'a'.repeat(64) })}\n`,
  }, (run) => {
    const generated = ['step7-scope.json', 'step7-alerts.json', 'alpha-a-step7.task.md',
      'alpha-a-step7-recovery.task.md', 'alpha-a-step7-preflight.task.md',
      'alpha-a-step7-close.task.md', 'alpha-a-step6-read.task.md',
      'step7-bundle-a.md'].map((suffix) => join(REPO, 'research', `${run}-${suffix}`));
    try {
      const rendered = render(run);
      assert.equal(rendered.status, 0, `${rendered.stdout}${rendered.stderr}`);
      const scope = JSON.parse(readFileSync(generated[0], 'utf8'));
      assert.deepEqual(scope.groups[0].rejections, []);
      assert.doesNotMatch(readFileSync(generated[2], 'utf8'), /\| `thm-parallelogram-law` \|/);
    } finally {
      for (const path of generated) rmSync(path, { force: true });
    }
  });
});

for (const subject of ['thm-demo-one', 'page-demo']) test(`Step-6 concern on ${subject} requires an owning-group decision`, () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo', kind: 'A', title: 'Demo', category: 'demo', order: 1,
      items: [{ id: 'thm-demo-one' }], requires: [],
    }],
    'alpha-a-step7-context.json': {
      group: 'a', pages_read: ['page-demo'], items_read: ['thm-demo-one'],
      conventions: [{ convention: 'Demo convention', fixed_by: 'thm-demo-one', matters_for: ['thm-demo-one'] }],
      load_bearing: [{ id: 'thm-demo-one', statement: 'Demo statement', used_by: [] }],
      published_dependencies: [],
      concerns: [{ id: subject, concern: 'The endpoint case is not justified.', severity: 'would-be-fatal' }],
      alerts: [], seams_checked: [],
    },
  }, (run) => {
    const generated = [
      'step7-scope.json', 'step7-alerts.json', 'alpha-a-step7.task.md',
      'alpha-a-step7-recovery.task.md', 'alpha-a-step7-preflight.task.md',
      'alpha-a-step7-close.task.md', 'alpha-a-step6-read.task.md',
      'step7-alert-decisions.jsonl',
    ].map((suffix) => join(REPO, 'research', `${run}-${suffix}`));
    try {
      const rendered = render(run);
      assert.equal(rendered.status, 0, `${rendered.stdout}${rendered.stderr}`);
      const alerts = JSON.parse(readFileSync(generated[1], 'utf8')).alerts;
      assert.equal(alerts.length, 1);
      assert.equal(alerts[0].source, 'step6-read');
      assert.equal(alerts[0].from_group, 'a');
      assert.equal(alerts[0].owning_group, 'a');
      const unanswered = check(run);
      assert.notEqual(unanswered.status, 0);
      assert.match(`${unanswered.stdout}${unanswered.stderr}`, /has no owning-group disposition/);
      writeFileSync(generated[7], `${JSON.stringify({
        version: 1, alert_id: alerts[0].alert_id, from_group: 'a', owning_group: 'a',
        item: subject, outcome: 'nonfatal',
        rationale: 'The concern is presentational and the written statement remains mathematically valid.',
        at: new Date().toISOString(),
      })}\n`);
      const answered = check(run);
      assert.equal(answered.status, 0, `${answered.stdout}${answered.stderr}`);
      if (subject === 'page-demo') {
        const decision = JSON.parse(readFileSync(generated[7], 'utf8'));
        writeFileSync(generated[7], JSON.stringify({ ...decision, outcome: 'confirmed_fatal',
          defect_type: 'dependency_citation', item_sha256: 'a'.repeat(64), post_sha256: 'b'.repeat(64) }) + '\n');
        const fatal = check(run);
        assert.notEqual(fatal.status, 0);
        assert.match(`${fatal.stdout}${fatal.stderr}`, /page warning cannot license/);
      }
    } finally {
      for (const path of generated) rmSync(path, { force: true });
    }
  });
});

test('a fatal reader warning requires an exact repaired post-state', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo', kind: 'A', title: 'Demo', category: 'demo', order: 1,
      items: [{ id: READER_WARNING_ITEM }], requires: [],
    }],
    'alpha-a-step7-context.json': {
      group: 'a', pages_read: ['page-demo'], items_read: [READER_WARNING_ITEM],
      conventions: [{ convention: 'Demo convention', fixed_by: READER_WARNING_ITEM, matters_for: [READER_WARNING_ITEM] }],
      load_bearing: [{ id: READER_WARNING_ITEM, statement: 'Demo statement', used_by: [] }],
      published_dependencies: [],
      concerns: [{ id: READER_WARNING_ITEM, concern: 'The endpoint case is false.', severity: 'would-be-fatal' }],
      alerts: [], seams_checked: [],
    },
  }, (run) => {
    const generated = [
      'step7-scope.json', 'step7-alerts.json', 'alpha-a-step7.task.md',
      'alpha-a-step7-recovery.task.md', 'alpha-a-step7-preflight.task.md',
      'alpha-a-step7-close.task.md', 'alpha-a-step6-read.task.md',
      'step7-alert-decisions.jsonl',
    ].map((suffix) => join(REPO, 'research', `${run}-${suffix}`));
    try {
      assert.equal(render(run).status, 0);
      const alert = JSON.parse(readFileSync(generated[1], 'utf8')).alerts[0];
      const post = itemHashGuard(readFileSync(join(REPO, 'items', `${READER_WARNING_ITEM}.md`), 'utf8'));
      writeFileSync(generated[7], `${JSON.stringify({
        version: 1, alert_id: alert.alert_id, from_group: 'a', owning_group: 'a',
        item: READER_WARNING_ITEM, outcome: 'confirmed_fatal', defect_type: 'logic',
        item_sha256: 'a'.repeat(64), post_sha256: post,
        rationale: 'The reader identified a fatal endpoint error and the owning Sol adjudicator repaired the exact item.',
        at: new Date().toISOString(),
      })}\n`);
      const accepted = check(run);
      assert.equal(accepted.status, 0, `${accepted.stdout}${accepted.stderr}`);
      writeFileSync(generated[7], `${JSON.stringify({
        version: 1, alert_id: alert.alert_id, from_group: 'a', owning_group: 'a',
        item: READER_WARNING_ITEM, outcome: 'confirmed_fatal', defect_type: 'logic',
        item_sha256: 'a'.repeat(64), post_sha256: 'b'.repeat(64),
        rationale: 'This row claims a repair but its post-state does not match the current item bytes.',
        at: new Date().toISOString(),
      })}\n`);
      const stale = check(run);
      assert.notEqual(stale.status, 0);
      assert.match(`${stale.stdout}${stale.stderr}`, /does not match the current item bytes/);
      appendFileSync(generated[7], `${JSON.stringify({
        version: 1, alert_id: alert.alert_id, from_group: 'a', owning_group: 'a',
        item: READER_WARNING_ITEM, outcome: 'confirmed_fatal', defect_type: 'logic',
        item_sha256: 'a'.repeat(64), post_sha256: post,
        rationale: 'This later append-only row corrects the stale historical repair receipt against the same stable alert.',
        at: new Date().toISOString(),
      })}\n`);
      const corrected = check(run);
      assert.equal(corrected.status, 0, `${corrected.stdout}${corrected.stderr}`);
    } finally {
      for (const path of generated) rmSync(path, { force: true });
    }
  });
});

// A CROSS-GROUP FINDING IS AN ALERT, NOT A NOTE (owner, 2026-08-25). The gate
// already refused to close over an unanswered one, but a gate that blocks and
// dispatches nobody spends a round doing nothing and ends in a blocker — which is
// the opposite of alerting the group that has to act.


// A PUBLISHED REPAIR IS ROUTED TO THE CONFIGURED JUDGE (owner, 2026-08-25). The
// closure receipt is computed over the RUN's scope, so a published item is never
// in it — without the union below the repair ships to a live page unjudged.


test('step7-guard licenses a published repair, and only a well-formed one', () => {
  const run = `step7guardtest${process.pid}`;
  const ledger = join(REPO, 'research', `${run}-published-repairs.jsonl`);
  try {
    // A row with no correction_basis is not a licence: it records that something
    // changed, not that the replacement is right.
    writeFileSync(ledger, `${JSON.stringify({ kind: 'repaired', id: 'lem-x', group: 'a', found_via: 'thm-y', pre_sha256: 'a'.repeat(64), defect: 'was false' })}\n`);
    const r = spawnSync('node', ['tools/step7-guard.mjs',
      '--touches', 'research/does-not-exist.json', '--baseline', 'pre-step7',
      '--judge-ledger', `research/${run}-missing-judge.jsonl`,
      '--adjudications', `research/${run}-published-repairs.jsonl`,
      '--scope', `research/${run}-missing-scope.json`,
      '--published-repairs', `research/${run}-published-repairs.jsonl`],
    { cwd: REPO, encoding: 'utf8' });
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /correction_basis|touch ledger|not found/i);
  } finally {
    rmSync(ledger, { force: true });
  }
});

test('published repair receipt has no judge or adjudication gate obligation', () => {
  const run = `step7pubpolicy${process.pid}`;
  const path = join(REPO, 'research', `${run}-step7-published-repairs.jsonl`);
  const receipt = join(tmpdir(), `${run}-published-closure.json`);
  try {
    writeFileSync(path, [
      { kind: 'repaired', id: 'lem-cauchy-bounded', defect: 'A repaired published claim.', correction_basis: 'Direct mathematical correction.' },
      { kind: 'escalated', id: 'thm-parallelogram-law', why: 'A separate owner decision is pending.' },
    ].map(JSON.stringify).join('\n') + '\n');
    const result = spawnSync('node', ['tools/step7-scope.mjs', 'published', '--run', run, '--out', receipt],
      { cwd: REPO, encoding: 'utf8' });
    assert.equal(result.status, 0, `${result.stdout}${result.stderr}`);
    const closure = JSON.parse(readFileSync(receipt, 'utf8'));
    assert.deepEqual(closure.repaired, ['lem-cauchy-bounded']);
    assert.deepEqual(closure.needs_rejudge, []);
    assert.deepEqual(closure.unadjudicated_rows, []);
    assert.equal(closure.policy, 'published-repairs-exempt');
  } finally {
    rmSync(path, { force: true });
    rmSync(receipt, { force: true });
  }
});

test('step7-scope check fails on an unrendered partition', () => {
  const r = check(`step7scopeabsent${process.pid}`);
  assert.notEqual(r.status, 0, 'a missing scope file is a failure, not a pass');
  assert.match(`${r.stdout}${r.stderr}`, /has not rendered the partition/);
});

test('step6 scope renders before the judge ledger exists', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo-a', kind: 'A', title: 'Demo', category: 'demo', order: 1,
      items: [{ id: 'thm-demo-one', kind: 'theorem', title: 'Demo theorem' }],
      requires: [],
    }],
  }, (run) => {
    const generated = [
      'step7-scope.json', 'step7-alerts.json', 'alpha-a-step7.task.md',
      'alpha-a-step7-recovery.task.md', 'alpha-a-step7-preflight.task.md',
      'alpha-a-step7-close.task.md', 'alpha-a-step6-read.task.md',
    ].map((suffix) => join(REPO, 'research', `${run}-${suffix}`));
    try {
      const r = render(run);
      assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
      assert.match(r.stdout, /0 open rejection\(s\) partitioned/);
      const scope = JSON.parse(readFileSync(generated[0], 'utf8'));
      assert.deepEqual(scope.groups[0].rejections, []);
      assert.match(readFileSync(generated[2], 'utf8'),
        /engine-generated, round-bound task/,
        'current adjudication instructions defer exact schemas and ownership to the round task');
      assert.match(readFileSync(generated[2], 'utf8'), /step7-adjudicator\.md/);
      assert.match(readFileSync(generated[3], 'utf8'),
        /defect_type` to exactly one of\s+`logic`, `dependency_citation`, or `other`/,
        'rendered recovery tasks must preserve the same defect-type vocabulary');
      assert.match(readFileSync(generated[3], 'utf8'), /Historical compatibility task only/);
      const checked = check(run);
      assert.equal(checked.status, 0, `${checked.stdout}${checked.stderr}`);
      assert.match(checked.stdout, /1 item\(s\) partitioned/);
    } finally {
      for (const p of generated) rmSync(p, { force: true });
    }
  });
});

test('step7-scope check fails when the rendered scope disagrees with the assignment', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1', '2'] }],
    'step7-scope.json': {
      groups: [{ label: 'a', batches: ['1'], task: 'research/nonexistent.task.md', pages: ['p'], items: ['i'] }],
      by_item: {},
    },
  }, (run) => {
    const r = check(run);
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /re-render/,
      'the message must say the render is stale, not merely that something is wrong');
  });
});

test('step7-scope check fails on a group whose task file was never written', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'step7-scope.json': {
      groups: [{ label: 'a', batches: ['1'], task: 'research/nonexistent.task.md', pages: ['p'], items: ['i'] }],
      by_item: {},
    },
  }, (run) => {
    const r = check(run);
    assert.notEqual(r.status, 0);
    assert.match(`${r.stdout}${r.stderr}`, /does not exist/);
  });
});

test('step7 digest coverage is an exact inventory, not a self-attested count', () => {
  withFixtureRun({
    'alpha-groups.json': [{ label: 'a', covers: ['1'] }],
    'batch-1.pages.json': [{
      id: 'page-demo',
      items: [{ id: 'thm-demo-one' }, { id: 'lem-demo-two' }],
      requires: [],
    }],
    'alpha-a-step7-context.json': {
      group: 'a',
      pages_read: ['page-demo'],
      items_read: 2,
      seams_checked: [],
      conventions: ['Definitions are stated before dependent theorems.'],
      load_bearing: ['thm-demo-one'],
      concerns: [],
      alerts: [],
    },
  }, (run) => {
    const command = () => spawnSync('node', ['tools/step7-scope.mjs', 'digests', '--run', run],
      { cwd: REPO, encoding: 'utf8' });
    const oldShape = command();
    assert.notEqual(oldShape.status, 0);
    assert.match(`${oldShape.stdout}${oldShape.stderr}`, /items_read: expected array/);
    writeFileSync(join(REPO, 'research', `${run}-alpha-a-step7-context.json`), JSON.stringify({
      group: 'a',
      batches: ['1'],
      pages_read: ['page-demo'],
      items_read: ['thm-demo-one', 'lem-demo-two'],
      seams_checked: [],
      conventions: [{ convention: 'Definitions precede uses.', fixed_by: 'thm-demo-one', matters_for: ['lem-demo-two'] }],
      load_bearing: [{ id: 'thm-demo-one', statement: 'Demo statement.', used_by: ['lem-demo-two'] }],
      published_dependencies: [],
      concerns: [],
      alerts: [],
    }));
    const exact = command();
    assert.equal(exact.status, 0, `${exact.stdout}${exact.stderr}`);
    assert.match(exact.stdout, /2 item\(s\) opened/);
    const path = join(REPO, 'research', `${run}-alpha-a-step7-context.json`);
    const incomplete = JSON.parse(readFileSync(path, 'utf8'));
    delete incomplete.concerns;
    writeFileSync(path, JSON.stringify(incomplete));
    const missing = command();
    assert.notEqual(missing.status, 0);
    assert.match(`${missing.stdout}${missing.stderr}`, /concerns: required field missing/);
  });
});


// THE CLASS GUARD. A stage that cannot recognise its own result file re-runs a
// completed agent forever, and nothing else in the engine notices: the dispatch
// exits zero, the result is written, coverage stays empty. Checked for every
// stage whose plan is derivable without a live run.
test('every stage pattern matches the result file its own plan produces', () => {
  const ctx = { run: 'frontier-18', repo: REPO };
  const checked: string[] = [];
  for (const s of stages as any[]) {
    // V2's round-specific plans freeze inputs; their fixture tests own coverage
    // here so this historical smoke never materializes a new live-run pack.
    if (s.id === '7-scope' || /^7\./.test(s.id)) continue;
    if (!s.pattern || !s.plan || !s.units) continue;
    const pattern = typeof s.pattern === 'function' ? s.pattern(ctx) : s.pattern;
    let plans: any[];
    // Each stage's OWN units. A fixed list would hand `1-scaffold` the unit
    // `all`, which is not one of its units, and the guard would report a
    // mismatch that cannot occur.
    try { plans = s.plan(ctx, s.units(ctx).map(String)) ?? []; } catch { continue; }
    for (const p of plans) {
      if (!p?.role || !p?.label) continue;
      // Preparatory recovery dispatches repair an input artifact and declare
      // no coverage. The subsequent tool dispatch is what satisfies the stage.
      if (Array.isArray(p.covers) && p.covers.length === 0) continue;
      // A mechanical rider is exempt: `8-scope` plans a `tool` snapshot in front
      // of its Alpha so the ordering is guaranteed, and that snapshot is
      // deliberately not what satisfies an agent stage's coverage.
      if (p.role === 'tool' && !pattern.source.startsWith('^tool-')) continue;
      assert.ok(pattern.test(`${p.role}-${p.label}.result.json`),
        `stage ${s.id}: pattern ${pattern} does not match ${p.role}-${p.label}.result.json`);
      checked.push(s.id);
    }
  }
  assert.ok(checked.length > 5, `too few stages checked (${checked.length}) — the guard went vacuous`);
});
