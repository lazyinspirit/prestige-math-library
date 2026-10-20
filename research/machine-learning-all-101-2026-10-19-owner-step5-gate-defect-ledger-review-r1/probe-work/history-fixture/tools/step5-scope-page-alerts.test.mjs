import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, copyFileSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// Run the real CLI against an isolated repository, including its production
// schema and strict published-repair validator. No real run evidence is edited.
const here = dirname(fileURLToPath(import.meta.url));
const repo = process.env.PAGE_ALERT_TEST_REPO ?? resolve(here, '..');
const tools = join(repo, 'tools');
function fixture(t, target = 'page-two') {
  const root = mkdtempSync(join(tmpdir(), 'step5-page-alert-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const p of ['tools', 'items', 'research', 'briefs/schemas']) mkdirSync(join(root, p), { recursive: true });
  for (const name of readdirSync(tools).filter(n => n.endsWith('.mjs'))) {
    if (name !== 'step5-scope.mjs') symlinkSync(join(tools, name), join(root, 'tools', name));
  }
  copyFileSync(join(here, 'step5-scope.mjs'), join(root, 'tools/step5-scope.mjs'));
  copyFileSync(join(repo, 'briefs/schemas/step5-context.json'), join(root, 'briefs/schemas/step5-context.json'));
  const put = (p, value) => writeFileSync(join(root, p), typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
  const groups = [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }];
  put('research/demo-alpha-groups.json', groups);
  const pages = ['page-one', 'page-two'];
  for (const [i, page] of pages.entries()) {
    const batch = String(i + 1), id = `def-item-${batch}`;
    put(`research/demo-batch-${batch}.pages.json`, [{ id: page, items: [{ id }], requires: [] }]);
    put(`research/demo-batch-${batch}-step5-context.json`, {
      group: groups[i].label, batches: [batch], pages_read: [page], items_read: [id],
      conventions: [{ convention: 'Real scalars.', fixed_by: id, matters_for: [id] }],
      load_bearing: [{ id, statement: 'A vector space.', used_by: [id] }],
      published_dependencies: [], concerns: [], seams_checked: [],
      alerts: i === 0 ? [{ item: target, finding: 'The page prose mislabels the coefficient ring.', severity: 'presentation' }] : [],
    });
    put(`research/task-${batch}.md`, page);
  }
  put('research/demo-step5-scope.json', { version: 2, groups: groups.map((g, i) => ({ label: g.label,
    batches: g.covers, pages: [pages[i]], items: [`def-item-${i + 1}`], task: `research/task-${i + 1}.md` })) });
  put('items/thm-published.md', '---\nid: thm-published\nstatus: published\n---\nPublished supplier.\n');
  const run = (mode, ...args) => spawnSync(process.execPath,
    [join(root, 'tools/step5-scope.mjs'), mode, '--run', 'demo', ...args], { encoding: 'utf8' });
  return { root, put, run };
}
for (const target of ['page-two', 'def-item-2']) test(`cross-batch alert ${target} passes digest routing`, t => {
  const f = fixture(t, target), result = f.run('digests');
  assert.equal(result.status, 0, result.stderr);
});
for (const target of ['page-one', 'def-item-1', 'unknown-page']) test(`invalid alert ${target} fails`, t => {
  const result = fixture(t, target).run('digests');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /that is a concern|belongs to no batch/);
});
test('outside published item still requires its exact policy-valid route', t => {
  const result = fixture(t, 'thm-published').run('digests');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /published alert thm-published/);
});
test('page alert remains visible and requires the genuine owning-group disposition', t => {
  const f = fixture(t);
  let result = f.run('check');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /no owning-group disposition/);
  const pending = f.run('check', '--allow-pending-alerts');
  assert.equal(pending.status, 0, pending.stderr);
  const receipt = JSON.parse(readFileSync(join(f.root, 'research/demo-step5-alerts.json')));
  assert.equal(receipt.alerts.length, 1);
  assert.equal(receipt.published_alerts.length, 0);
  const alert = receipt.alerts[0];
  assert.equal(alert.owning_group, 'b');
  assert.equal(alert.from_group, 'a');
  assert.equal(alert.item, 'page-two');
  const decision = { version: 1, alert_id: alert.alert_id, owning_group: 'a', from_group: 'a', item: 'page-two',
    outcome: 'nonfatal', at: new Date().toISOString(), rationale: 'A focused presentation correction belongs to the page owner.' };
  f.put('research/demo-step5-alert-decisions.jsonl', JSON.stringify(decision) + '\n');
  result = f.run('check');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /decision provenance does not match/);
  decision.owning_group = 'b';
  f.put('research/demo-step5-alert-decisions.jsonl', JSON.stringify(decision) + '\n');
  result = f.run('check');
  assert.equal(result.status, 0, result.stderr);
  decision.outcome = 'confirmed_fatal';
  f.put('research/demo-step5-alert-decisions.jsonl', JSON.stringify(decision) + '\n');
  result = f.run('check');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /page warning cannot license an item repair/);
});
