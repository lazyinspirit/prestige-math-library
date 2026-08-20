// A dead SOURCE is missing mathematics, not a broken link.
//
// WHY. `url-sweep` asks whether a URL opens; `source-fetch-check` asks whether
// it serves the document. Neither asks which authored RESULTS were backed only
// by it — so the cheapest way past a dead citation was to delete the source
// row, which deletes its `included` rows with it, and every other gate stays
// green because they all validate what is present.
//
// frontier-16: Hu-Li-Li-Yan's *Calculus* went 403 to every client with no
// archive snapshot, and two authored results cited it. They survived only
// because that Beta had independently backed them with a second treatment.
// Nothing checked; nothing would have noticed if it hadn't.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages, dispatchSourceScouts } from '../stages/mathlib.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'source-backing.mjs');

const DEAD = 'https://example.edu/gone/Notes.pdf';
const LIVE = 'https://example.org/alive/special-functions.pdf';

/** One page, one authored result, backed by whichever sources are named. */
function fixture({ backedBy = [DEAD], liveness = [{ url: DEAD, ok: false }, { url: LIVE, ok: true }] } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'backing-'));
  mkdirSync(join(dir, 'research'));
  const source = (url: string) => ({
    url, kind: 'textbook', title: `Treatment at ${url}`, locator: 'Example 7.1.7, pp. 189-190',
    contents: [{
      name: 'Example 7.1.7, an ellipse perimeter is a second-kind elliptic integral',
      disposition: 'included',
      item: 'ex-sine-period-arc-length-as-a-complete-elliptic-integral',
    }],
  });
  writeFileSync(join(dir, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({
    pages: [{ page: 'trigonometric-and-oscillatory-examples', sources: backedBy.map(source) }],
  }, null, 2));
  writeFileSync(join(dir, 'research', 'demo-url-liveness.json'), JSON.stringify({ rows: liveness }, null, 2));
  return dir;
}

const run = (dir: string, extra: string[] = []) => spawnSync(process.execPath, [
  TOOL,
  '--coverage', join(dir, 'research', 'demo-batch-4.coverage.json'),
  '--liveness', join(dir, 'research', 'demo-url-liveness.json'),
  ...extra,
], { cwd: dir, encoding: 'utf8', timeout: 60_000 });

test('a result backed ONLY by a dead source fails, and is named', () => {
  const dir = fixture({ backedBy: [DEAD] });
  const r = run(dir);
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stderr, /ERROR backing-lost: trigonometric-and-oscillatory-examples: ex-sine-period-arc-length-as-a-complete-elliptic-integral/);
  // The URL must be in the message: it is what routes a scout to the batch.
  assert.match(r.stderr, /example\.edu\/gone/);
  // And the remedy must be stated as a replacement, never a deletion.
  assert.match(r.stderr, /never a dropped result/);
  rmSync(dir, { recursive: true, force: true });
});

test('the same result ALSO backed by a live source passes', () => {
  const dir = fixture({ backedBy: [DEAD, LIVE] });
  const r = run(dir);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /1 authored result\(s\).*every one still backed/);
  rmSync(dir, { recursive: true, force: true });
});

test('the re-harvest plan names the item, the dead source and the result line', () => {
  const dir = fixture({ backedBy: [DEAD] });
  const plan = join(dir, 'research', 'demo-reharvest-plan.json');
  const r = run(dir, ['--reharvest-plan', plan]);
  assert.equal(r.status, 1);
  assert.ok(existsSync(plan), 'no plan written for the scout to work from');
  const p = JSON.parse(readFileSync(plan, 'utf8'));
  assert.equal(p.work.length, 1);
  assert.equal(p.work[0].item, 'ex-sine-period-arc-length-as-a-complete-elliptic-integral');
  assert.equal(p.work[0].dead[0].url, DEAD);
  // The scout needs the RESULT, not just a page number: it has to find another
  // treatment that carries this specific statement.
  assert.match(p.work[0].dead[0].result, /second-kind elliptic integral/);
  assert.match(p.work[0].dead[0].locator, /7\.1\.7/);
  rmSync(dir, { recursive: true, force: true });
});

test('an absent liveness artifact is a failure, never a pass', () => {
  const dir = fixture({ backedBy: [DEAD] });
  rmSync(join(dir, 'research', 'demo-url-liveness.json'));
  const r = run(dir);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /backing-no-liveness/);
  rmSync(dir, { recursive: true, force: true });
});

test('an empty liveness artifact is a failure — a sweep over nothing is not a sweep', () => {
  const dir = fixture({ backedBy: [DEAD], liveness: [] });
  const r = run(dir);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /backing-empty-liveness/);
  rmSync(dir, { recursive: true, force: true });
});

test('a source the sweep never saw is not assumed dead', () => {
  // The sweep collects from these same files, so an absent row means the shapes
  // disagree. Inventing a death from that would delete real results.
  const dir = fixture({ backedBy: [DEAD], liveness: [{ url: LIVE, ok: true }] });
  const r = run(dir);
  assert.equal(r.status, 0, r.stderr);
  rmSync(dir, { recursive: true, force: true });
});

test('lost backing routes a RE-HARVEST task, not a URL scout', () => {
  const dir = mkdtempSync(join(tmpdir(), 'backing-route-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'demo-batch-4.pages.json'), '[]');
  writeFileSync(join(dir, 'research', 'demo-batch-4.coverage.json'), JSON.stringify({
    pages: [{ page: 'oscillatory', sources: [{ url: DEAD, contents: [] }] }],
  }));
  writeFileSync(join(dir, 'research', 'demo-scope-ledger.json'), JSON.stringify({
    run: 'demo', pages: [{ id: 'oscillatory', kind: 'A', batch: '4' }],
  }));
  const started: any[] = [];
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  const routed = dispatchSourceScouts({
    ctx: { run: 'demo', repo: dir },
    executor: { start: (_s: any, p: any) => started.push(p) },
    stage: s1, round: 1,
    stderr: `ERROR backing-lost: oscillatory: ex-something — backed only by ${DEAD}`,
  });
  assert.equal(routed, true);
  assert.equal(started.length, 1);
  assert.match(started[0].task[0], /beta-reharvest\.task\.md$/,
    'a dead SOURCE needs the re-harvest task; the URL scout looks for the same document again');
  assert.match(started[0].label, /^reharvest-/);
  rmSync(dir, { recursive: true, force: true });
});

// RETIRING A REDUNDANT DEAD SOURCE. The scouting order has three options —
// same document elsewhere, same document from the archive, different source and
// re-harvest — and none fits a dead source whose every result is ALSO backed by
// a live one. There is nothing to replace and no licence to remove, so a scout
// re-points the URL, fails, and spends a round. frontier-16 spent three that
// way on one walled textbook whose two results were backed the whole time.
test('a dead source whose results are all backed elsewhere is retired, and recorded', () => {
  const dir = fixture({ backedBy: [DEAD, LIVE] });
  const record = join(dir, 'research', 'retired.json');
  const r = run(dir, ['--retire-redundant', '--retired-record', record]);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /retired 1 redundant dead source/);

  const cov = JSON.parse(readFileSync(join(dir, 'research', 'demo-batch-4.coverage.json'), 'utf8'));
  const urls = cov.pages[0].sources.map((s: any) => s.url);
  assert.deepEqual(urls, [LIVE], 'the dead source should be gone and the live one kept');

  // The rows leave the harvest with it, so this artifact is the only durable
  // evidence the source was ever read. Silent removal is the defect.
  const rec = JSON.parse(readFileSync(record, 'utf8'));
  assert.equal(rec.retired.length, 1);
  assert.equal(rec.retired[0].url, DEAD);
  assert.match(rec.retired[0].reason, /independently backed/);
  assert.equal(rec.retired[0].results[0].item, 'ex-sine-period-arc-length-as-a-complete-elliptic-integral');

  // And the level still passes on its own terms afterwards.
  assert.equal(run(dir).status, 0);
  rmSync(dir, { recursive: true, force: true });
});

test('a dead source carrying the ONLY backing is never retired', () => {
  const dir = fixture({ backedBy: [DEAD] });
  const r = run(dir, ['--retire-redundant']);
  // Retirement must not fire, and the level must still fail as backing-lost:
  // this is the case that needs a different source, not a deletion.
  assert.equal(r.status, 1);
  assert.match(r.stdout, /no dead source was redundant/);
  assert.match(r.stderr, /backing-lost/);
  const cov = JSON.parse(readFileSync(join(dir, 'research', 'demo-batch-4.coverage.json'), 'utf8'));
  assert.equal(cov.pages[0].sources.length, 1, 'the source must survive: removing it deletes the result');
  rmSync(dir, { recursive: true, force: true });
});
