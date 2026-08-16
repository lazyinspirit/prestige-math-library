// A query that silently becomes "no query" is worse than one that errors.
//
// WHY. `defect-ledger stats --by` with no value printed nothing and exited 0:
// `opt()` returns its default for a bare flag, so the grouping vanished and the
// caller's exit code said everything was fine. `--by <typo>` was worse — it
// grouped every row into one bucket named "(none)" and printed that as a
// result, which reads as data.
//
// The second half covers the doctor check built on `stats --coverage`: a run
// that confirmed fatal defects and wrote no ledger rows has a ledger that is
// quietly not being kept. It is scoped to the CURRENT run on purpose — about
// twenty historical runs are back-fill debt, and a check that is always red is
// a check nobody reads.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

import { doctor } from '../src/doctor.mts';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO: string = process.env.AUTOPILOT_TEST_REPO ?? resolve(HERE, '..', '..', '..');
const TOOL = join(REPO, 'tools', 'defect-ledger.mjs');
const STAGES = join(HERE, '..', 'stages', 'mathlib.mts');

const stats = (args: string[], cwd = REPO) =>
  spawnSync(process.execPath, [TOOL, 'stats', ...args], { cwd, encoding: 'utf8', timeout: 120_000 });

// ------------------------------------------------------------------ stats --by

test('a bare --by is a usage error, not a silent empty run', () => {
  const r = stats(['--by']);
  assert.equal(r.status, 2, `bare --by exited ${r.status}\n${r.stdout}${r.stderr}`);
  assert.match(r.stderr, /--by needs a comma-separated field list/);
  assert.match(r.stderr, /valid fields:/);
});

test('--by followed by another flag is a usage error too', () => {
  const r = stats(['--by', '--json']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--by needs a comma-separated field list/);
});

test('an unknown field is a usage error naming the valid fields', () => {
  const r = stats(['--by', 'subclas']);
  assert.equal(r.status, 2, `a typo must not group every row into "(none)"\n${r.stdout}`);
  assert.match(r.stderr, /unknown field\(s\) subclas/);
  assert.match(r.stderr, /valid fields:.*\bsubclass\b/s);
});

test('one bad field in a list fails the whole query', () => {
  const r = stats(['--by', 'subclass,nosuchthing']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /unknown field\(s\) nosuchthing/);
});

test('a real grouping still works, and every mandatory field is groupable', () => {
  const r = stats(['--by', 'subclass,caught_at_stage', '--json']);
  assert.equal(r.status, 0, r.stderr);
  const out = JSON.parse(r.stdout);
  assert.ok(Object.keys(out.by).length > 1, 'a real grouping must produce more than one bucket');
  for (const field of ['run', 'class', 'severity', 'location', 'disposition',
    'caught_by_role', 'should_have_caught', 'repair_cost', 'introduced_at_stage']) {
    assert.equal(stats(['--by', field, '--json']).status, 0, `--by ${field} was rejected`);
  }
});

// -------------------------------------------------- the doctor coverage check

/** A repo-shaped fixture: a stage table cannot be faked, so the check is
 *  exercised through the real tool with a synthetic research/ directory. */
function coverageFixture({ rows, fatalRun }: { rows: object[]; fatalRun: string }) {
  const dir = mkdtempSync(join(tmpdir(), 'cov-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'defect-ledger.jsonl'),
    rows.map((r) => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : ''));
  writeFileSync(join(dir, 'research', `${fatalRun}-judge-adjudications.jsonl`),
    JSON.stringify({ id: 'thm-x', model: 'deepseek-v4-pro', outcome: 'confirmed_fatal' }) + '\n');
  return dir;
}

test('stats --coverage names a run with fatals and no rows, and not one with rows', () => {
  const withRows = coverageFixture({
    rows: [{ defect_id: 'r-D001', run: 'demo-run', subclass: 'invalid-inference' }],
    fatalRun: 'demo-run',
  });
  const a = JSON.parse(stats(['--coverage', '--json'], withRows).stdout);
  assert.deepEqual(a.coverage.runs_with_fatal_and_no_rows, []);

  const noRows = coverageFixture({ rows: [], fatalRun: 'demo-run' });
  const b = JSON.parse(stats(['--coverage', '--json'], noRows).stdout);
  assert.deepEqual(b.coverage.runs_with_fatal_and_no_rows, [{ run: 'demo-run', confirmed_fatal: 1 }]);
});

test('doctor flags the CURRENT run when it has fatals and no ledger rows', async () => {
  const r = await doctor({ repo: REPO, run: 'frontier-8', stagesPath: STAGES, config: {} });
  const p = r.problems.find((l: string) => /confirmed_fatal adjudication\(s\) and no defect-ledger row/.test(l));
  assert.ok(p, 'frontier-8 has fatals and no rows; doctor must say so for that run');
  assert.match(p, /^frontier-8 has \d+ confirmed_fatal/);
  assert.match(p, /defect-ledger\.mjs append/, 'the problem must name the remedy');
});

test('doctor does NOT flag the ~20 historical back-fill runs when checking another run', async () => {
  const r = await doctor({ repo: REPO, run: 'frontier-14', stagesPath: STAGES, config: {} });
  assert.ok(r.ok.some((l: string) => /defect ledger covers frontier-14/.test(l)),
    'frontier-14 has rows; the check must pass for it');
  const strays = r.problems.filter((l: string) => /confirmed_fatal adjudication\(s\) and no defect-ledger row/.test(l));
  assert.deepEqual(strays, [],
    'historical runs are back-fill debt, not staleness — flagging them makes doctor permanently red');
});

test('doctor treats an unreadable coverage report as unknown, never as clean', async () => {
  // A repo with no research/ at all: the tool still runs, and a run with no
  // adjudication file has no hole — the check must say so rather than vanish.
  const empty = mkdtempSync(join(tmpdir(), 'norepo-'));
  const r = await doctor({ repo: REPO, run: 'no-such-run-at-all', stagesPath: STAGES, config: {} });
  const lines = [...r.problems, ...r.ok].filter((l: string) => /defect ledger|defect-ledger/.test(l));
  assert.equal(lines.length, 1, `the ledger check must emit exactly one line, got ${JSON.stringify(lines)}`);
  assert.ok(empty);
});
