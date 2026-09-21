import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { itemHashGuard, itemHashJudge, shortHash } from '../../item-hash.mjs';
import { freezeFrontier } from '../../step7-rounds.mjs';
import { digest } from '../../step7-workflow.mjs';

const repo = join(import.meta.dirname, '..', '..', '..');
const text = (id: string, body: string) => `---\nid: ${id}\ntitle: Demo\nstatus: published\ndeps: []\n---\n\n${body}\n`;
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step7-central-guard-'));
  const dir = join(root, 'research', 'demo-step7-v2');
  mkdirSync(dir, { recursive: true }); mkdirSync(join(root, 'items'));
  const write = (path: string, value: any) => {
    if (path.endsWith('/certification.json')) {
      const { sha256, ...payload } = value;
      value = { ...payload, sha256: digest(payload) };
    }
    writeFileSync(path, JSON.stringify(value));
  };
  const ids = ['a', 'published-consumer'];
  const baseline = Object.fromEntries(ids.map(id => [id, itemHashGuard(text(id, 'Before.'))]));
  for (const id of ids) writeFileSync(join(root, 'items', `${id}.md`), text(id, 'A repaired argument with its supplier correctly used.'));
  write(join(dir, 'frontier.json'), freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['a'] }] }));
  write(join(dir, 'baseline.json'), baseline);
  const report = join(dir, 'report.json');
  write(report, { reviewed: ids, uncertain: false });
  const threshold = join(dir, 'threshold-1.json');
  write(threshold, { round: 1, originalCount: 1, fatalIds: [], fatalCount: 0, belowThreshold: true, errors: [] });
  const cert = { version: 2, run: 'demo', phase: 'impact-repeat', round: 1, latest_adjudication_round: 1, changed: ids,
    items: ids.map(id => ({ id, guard_sha256: itemHashGuard(readFileSync(join(root, 'items', `${id}.md`), 'utf8')),
      item_sha256: itemHashJudge(readFileSync(join(root, 'items', `${id}.md`), 'utf8')),
      context_sha256: 'c'.repeat(64), reason: 'Reviewed the repaired item and checked every relevant dependency.' })),
    evidence: { [report]: digest(readFileSync(report, 'utf8')), [threshold]: digest(readFileSync(threshold, 'utf8')) } };
  mkdirSync(join(root, 'tools'));
  // A model-free context-hash subprocess fixture. Guard-hash comparisons still
  // read the actual fixture item files and detect edits after certification.
  writeFileSync(join(root, 'tools', 'judge.mts'), `console.log(${JSON.stringify(JSON.stringify({ contexts: Object.fromEntries(cert.items.map(row => [row.id, { item_sha256: row.item_sha256, context_sha256: row.context_sha256 }])) }))});`);
  write(join(dir, 'certification.json'), cert);
  write(join(root, 'touches.json'), { snapshots: [{ label: 'pre-step7', hashes: Object.fromEntries(ids.map(id => [id, shortHash(baseline[id])])) }] });
  write(join(root, 'scope.json'), { run: 'demo', by_item: { a: '1' } });
  const guard = () => spawnSync('node', ['tools/step7-guard.mjs', '--touches', join(root, 'touches.json'),
    '--baseline', 'pre-step7', '--scope', join(root, 'scope.json'), '--items-dir', join(root, 'items'),
    '--workflow-root', root, '--judge-ledger', join(root, 'deliberately-absent-judge.jsonl'),
    '--adjudications', join(root, 'deliberately-absent-adjudications.jsonl'),
    '--terminal-resolutions', join(root, 'deliberately-absent-terminal.jsonl'), '--json'], { cwd: repo, encoding: 'utf8' });
  return { root, dir, write, cert, guard };
}

test('centralized certification licenses published downstream repair without synthetic judge or terminal rows', () => {
  const fx = fixture(), result = fx.guard();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(JSON.parse(result.stdout).summary.licensed_by_centralized_certification, 2);
});

test('centralized guard preserves the exact original touchlog baseline and frontier', () => {
  const fx = fixture();
  fx.write(join(fx.root, 'scope.json'), { run: 'demo', by_item: { a: '1', extra: '1' } });
  let result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /frozen original frontier/);
  fx.write(join(fx.root, 'scope.json'), { run: 'demo', by_item: { a: '1' } });
  const baseline = JSON.parse(readFileSync(join(fx.dir, 'baseline.json'), 'utf8')); baseline.a = 'a'.repeat(64);
  fx.write(join(fx.dir, 'baseline.json'), baseline);
  result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /original touchlog baseline/);
});

test('a missing centralized certificate cannot fall back to historical licence paths', () => {
  const fx = fixture();
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, items: [] });
  const result = fx.guard();
  assert.equal(result.status, 1); assert.match(result.stdout, /uncovered Step 7 repair/);
});

test('initial-wave certification cannot terminal-close Step7', () => {
  const fx = fixture(); fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, phase: 'impact-initial' });
  const result = fx.guard(); assert.equal(result.status, 1);
  assert.match(result.stdout, /completed repeat-round certification|not completed its Terra\/adjudication cycle/);
});

test('edits to certified carriers or their underlying evidence invalidate closure', () => {
  const fx = fixture();
  writeFileSync(join(fx.root, 'items', 'published-consumer.md'), text('published-consumer', 'Changed after certification.'));
  let result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /stale Step 7 certification/);
  writeFileSync(join(fx.root, 'items', 'published-consumer.md'), text('published-consumer', 'A repaired argument with its supplier correctly used.'));
  fx.write(join(fx.dir, 'report.json'), { reviewed: [] });
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /evidence changed/);
});

test('v2 evidence loss fails closed and cannot invoke the legacy licence fallback', () => {
  const fx = fixture(); unlinkSync(join(fx.dir, 'certification.json'));
  let result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /certification missing/);
  fx.write(join(fx.dir, 'certification.json'), fx.cert); unlinkSync(join(fx.dir, 'frontier.json'));
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /frontier.json/);
});

test('final closure requires a bound threshold and fresh supplier contexts', () => {
  const fx = fixture();
  const threshold = join(fx.dir, 'threshold-1.json');
  const evidence = { ...fx.cert.evidence }; delete evidence[threshold];
  fx.write(join(fx.dir, 'certification.json'), { ...fx.cert, evidence });
  let result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /missing bound fatal threshold/);
  fx.write(join(fx.dir, 'certification.json'), fx.cert);
  const contextTool = join(fx.root, 'tools', 'judge.mts');
  writeFileSync(contextTool, readFileSync(contextTool, 'utf8').replaceAll('c'.repeat(64), 'd'.repeat(64)));
  result = fx.guard(); assert.equal(result.status, 1); assert.match(result.stdout, /stale Step 7 certification context/);
});
