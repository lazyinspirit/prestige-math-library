// A gate that cannot fail is decorative.
//
// WHY. tools/audit-manifest.mjs classified every declared relationship and
// printed `missing-source: 3` — and then exited 0, because the file contained
// no `process.exit(1)` path at all. It is the 6c scope-checklist gate, and the
// engine reads exit codes, not prose, so a batch manifest naming items that do
// not exist passed the checklist that exists to catch exactly that.
//
// Two conditions it already detected are now failures: `missing-source` (a
// manifest lists an item on no page of items/) and `unresolved` (a declared
// dependency resolving to no published or in-run item). A clean run still
// exits 0, and the summary line the engine's liveness probe reads is asserted
// here too — a manifest set that resolved to nothing must not pass as an audit.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'audit-manifest.mjs');

/** audit-manifest reads items/ and library/ from the REPO it lives in, so a
 *  fixture cannot relocate the corpus. It builds its manifest out of two real
 *  published items instead, and adds the defect by naming an id that is not
 *  one — which is precisely the shape the gate must catch. */
function manifest(entries: any[]) {
  const dir = mkdtempSync(join(tmpdir(), 'am-'));
  const file = join(dir, 'demo-batch-1.pages.json');
  writeFileSync(file, JSON.stringify(entries, null, 2));
  return { dir, file };
}

const run = (file: string, extra: string[] = []) => spawnSync(
  process.execPath, [TOOL, file, ...extra],
  { cwd: REPO, encoding: 'utf8', timeout: 180_000 });

const REAL_ITEMS = ['lem-cauchy-bounded'];

function pageHomeFixture(pageStatus: 'draft' | 'published') {
  const root = mkdtempSync(join(tmpdir(), 'am-page-home-'));
  mkdirSync(join(root, 'tools'), { recursive: true });
  mkdirSync(join(root, 'items'), { recursive: true });
  mkdirSync(join(root, 'library', 'demo'), { recursive: true });
  copyFileSync(TOOL, join(root, 'tools', 'audit-manifest.mjs'));
  writeFileSync(join(root, 'items', 'thm-source.md'), `---\nid: thm-source\nstatus: draft\ndeps: [thm-target]\n---\n`);
  writeFileSync(join(root, 'items', 'thm-target.md'), `---\nid: thm-target\nstatus: draft\n---\n`);
  writeFileSync(join(root, 'library', 'demo', 'target-page.md'), `---\npage: target-page\nstatus: ${pageStatus}\nitems: [thm-target]\n---\n`);
  const file = join(root, 'demo-batch-1.pages.json');
  writeFileSync(file, JSON.stringify([{ id: 'source-page', items: [{ id: 'thm-source' }] }]));
  return { root, file };
}

function runFixture(root: string, file: string) {
  return spawnSync(process.execPath, [join(root, 'tools', 'audit-manifest.mjs'), file], {
    cwd: root,
    encoding: 'utf8',
    timeout: 180_000,
  });
}

test('a manifest naming a nonexistent item exits 1', () => {
  const { dir, file } = manifest([{
    id: 'demo-page',
    items: [...REAL_ITEMS.map((id) => ({ id })), { id: 'thm-this-item-does-not-exist' }],
  }]);
  const r = run(file);
  assert.equal(r.status, 1, `a bogus manifest must fail the gate\n${r.stdout}${r.stderr}`);
  assert.match(r.stdout + r.stderr, /ERROR missing-source: .*thm-this-item-does-not-exist/);
  rmSync(dir, { recursive: true, force: true });
});

test('a manifest of real items exits 0', () => {
  const { dir, file } = manifest([{ id: 'demo-page', items: REAL_ITEMS.map((id) => ({ id })) }]);
  const r = run(file);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.match(r.stdout + r.stderr, /0 defect\(s\)/);
  rmSync(dir, { recursive: true, force: true });
});

test('a published page is a valid published home for a legacy draft item', () => {
  const { root, file } = pageHomeFixture('published');
  const r = runFixture(root, file);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  assert.match(r.stdout + r.stderr, /published-backward: 1/);
  rmSync(root, { recursive: true, force: true });
});

test('a draft page does not make its draft item a published home', () => {
  const { root, file } = pageHomeFixture('draft');
  const r = runFixture(root, file);
  assert.equal(r.status, 1, `${r.stdout}${r.stderr}`);
  assert.match(r.stdout + r.stderr, /ERROR unresolved: thm-source/);
  rmSync(root, { recursive: true, force: true });
});

test('the summary line carries the count the engine liveness probe reads', () => {
  const { dir, file } = manifest([{ id: 'demo-page', items: REAL_ITEMS.map((id) => ({ id })) }]);
  const r = run(file);
  // the same regex the mathlib stage table declares for this gate
  const m = /over (\d+) item\(s\) in/.exec(r.stdout + r.stderr);
  assert.ok(m, `no liveness-readable summary line\n${r.stdout}${r.stderr}`);
  assert.ok(Number(m![1]) >= 1, 'the probe must see at least one manifest item');
  rmSync(dir, { recursive: true, force: true });
});

test('an empty manifest reports zero items, so the liveness probe fails it', () => {
  const { dir, file } = manifest([]);
  const r = run(file);
  assert.equal(r.status, 0, 'an empty manifest is not itself a defect — the probe is what catches it');
  const m = /over (\d+) item\(s\) in/.exec(r.stdout + r.stderr);
  assert.equal(Number(m![1]), 0, 'and the count it reports must be 0, not absent');
  rmSync(dir, { recursive: true, force: true });
});

test('--json without --output keeps stdout a pure JSON document', () => {
  const { dir, file } = manifest([{ id: 'demo-page', items: REAL_ITEMS.map((id) => ({ id })) }]);
  const r = run(file, ['--json']);
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  const parsed = JSON.parse(r.stdout);   // throws if the summary leaked into stdout
  assert.ok(parsed.summary);
  assert.match(r.stderr, /audit-manifest: \d+ relationship/);
  rmSync(dir, { recursive: true, force: true });
});

test('the mathlib stage declares a liveness probe on the audit-manifest gate', async () => {
  const { stages } = await import('../stages/mathlib.mts');
  const stage: any = stages.find((entry: any) => entry.id === '6c-cross');
  const gate = stage.gates({ run: 'r', repo: REPO }).find((entry: any) => entry.id === 'audit-manifest');
  assert.equal(gate?.liveness?.min, 1, 'the 6c audit-manifest gate must carry a liveness probe');
});
