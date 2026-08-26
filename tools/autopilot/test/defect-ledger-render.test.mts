// The generated view says "GENERATED from … @ <hash> — do not edit". Something
// has to keep that true.
//
// WHY. `render` was wired into no stage, so the first append without a manual
// render made the header a false claim about the file it names — the same drift
// that made BUILD-AUDIT-INDEX.md wrong by 6x on its own headline, one level
// down and self-inflicted. Two mechanisms now, at the two ends: `append`
// re-renders in the same invocation, and `check` recomputes the fingerprint and
// fails `render-stale` when the header disagrees. The remaining stale paths — a
// hand-edited jsonl, a hand-edited view, a `--no-render` append — are exactly
// what the second one catches.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'defect-ledger.mjs');

const ROW = (id: string) => ({
  defect_id: id, run: 'demo-run', at: '2026-08-16', class: 'accuracy',
  subclass: 'invalid-inference', severity: 'fatal', location: 'proof-step',
  subject: 'thm-demo', caught_at_stage: '6b-adjudicate', caught_by_role: 'group-alpha',
  disposition: 'fixed', adjudication_ref: [{ item_sha256: 'a'.repeat(64) }],
});

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), 'dl-'));
  const ledger = join(dir, 'defect-ledger.jsonl');
  const view = join(dir, 'DEFECT-LEDGER.md');
  const adj = join(dir, 'adj.jsonl');
  writeFileSync(ledger, JSON.stringify(ROW('demo-run-D001')) + '\n');
  writeFileSync(adj, JSON.stringify({
    id: 'thm-demo', model: 'gpt-5.6-terra', outcome: 'confirmed_fatal', item_sha256: 'a'.repeat(64),
  }) + '\n');
  return { dir, ledger, view, adj };
}

const run = (args: string[]) => spawnSync(process.execPath, [TOOL, ...args],
  { cwd: REPO, encoding: 'utf8', timeout: 120_000 });

const fingerprint = (p: string) =>
  createHash('sha256').update(readFileSync(p)).digest('hex').slice(0, 12);

const stampedIn = (p: string) =>
  /^> GENERATED from `[^`]+` @ ([0-9a-f]{12}) by/m.exec(readFileSync(p, 'utf8'))?.[1] ?? null;

test('render stamps the sha256 of the ledger bytes, first 12 hex', () => {
  const f = fixture();
  const r = run(['render', '--ledger', f.ledger, '--out', f.view]);
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.equal(stampedIn(f.view), fingerprint(f.ledger));
});

test('check passes the staleness clause on a freshly rendered view', () => {
  const f = fixture();
  run(['render', '--ledger', f.ledger, '--out', f.view]);
  const r = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.doesNotMatch(r.stdout + r.stderr, /render-stale/);
});

test('an append behind the view is render-stale, and render clears it', () => {
  const f = fixture();
  run(['render', '--ledger', f.ledger, '--out', f.view]);
  // the --no-render escape hatch, which is the remaining way to go stale
  const rowFile = join(f.dir, 'rows.json');
  writeFileSync(rowFile, JSON.stringify([ROW('demo-run-D002')]));
  const a = run(['append', '--ledger', f.ledger, '--file', rowFile, '--no-render']);
  assert.equal(a.status, 0, a.stdout + a.stderr);

  const red = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.equal(red.status, 1, 'a view behind its ledger must fail');
  assert.match(red.stdout + red.stderr, /ERROR render-stale:.*was generated from [0-9a-f]{12} but/);
  assert.match(red.stdout + red.stderr, /defect-ledger\.mjs render/, 'the error must name the remedy');

  run(['render', '--ledger', f.ledger, '--out', f.view]);
  const green = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.doesNotMatch(green.stdout + green.stderr, /render-stale/);
});

test('a plain append re-renders, so the view is never behind', () => {
  const f = fixture();
  const rowFile = join(f.dir, 'rows.json');
  writeFileSync(rowFile, JSON.stringify([ROW('demo-run-D003')]));
  const a = run(['append', '--ledger', f.ledger, '--file', rowFile, '--out', f.view]);
  assert.equal(a.status, 0, a.stdout + a.stderr);
  assert.equal(stampedIn(f.view), fingerprint(f.ledger),
    'the header must match the ledger the append just wrote');
  const r = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.doesNotMatch(r.stdout + r.stderr, /render-stale/);
});

test('a hand-edited ledger is render-stale even with the view untouched', () => {
  const f = fixture();
  run(['render', '--ledger', f.ledger, '--out', f.view]);
  appendFileSync(f.ledger, JSON.stringify(ROW('demo-run-D004')) + '\n');
  const r = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.equal(r.status, 1);
  assert.match(r.stdout + r.stderr, /render-stale/);
});

test('a missing view is render-stale, not an exemption', () => {
  const f = fixture();
  const r = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', join(f.dir, 'nope.md')]);
  assert.equal(r.status, 1);
  assert.match(r.stdout + r.stderr, /render-stale:.*missing or carries no GENERATED header/);
});

test('a hand-edited view whose header was rewritten is render-stale', () => {
  const f = fixture();
  run(['render', '--ledger', f.ledger, '--out', f.view]);
  const doctored = readFileSync(f.view, 'utf8').replace(/@ [0-9a-f]{12}/, '@ deadbeefcafe');
  writeFileSync(f.view, doctored);
  const r = run(['check', '--run', 'demo-run', '--ledger', f.ledger,
    '--adjudications', f.adj, '--view', f.view]);
  assert.equal(r.status, 1);
  assert.match(r.stdout + r.stderr, /render-stale/);
});

test('the committed view is current against the committed ledger', () => {
  const ledger = join(REPO, 'research', 'defect-ledger.jsonl');
  const view = join(REPO, 'research', 'DEFECT-LEDGER.md');
  assert.equal(stampedIn(view), fingerprint(ledger),
    'run `node tools/defect-ledger.mjs render` and commit the result');
});
