import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync, rmSync, copyFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

function check(t, target) {
  const root = mkdtempSync(join(tmpdir(), 'physics-digest-routing-'));
  t.after(() => rmSync(root, {recursive: true, force: true}));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'briefs/schemas'), {recursive: true});
  const save = (path, value) => writeFileSync(join(root, path), JSON.stringify(value));
  // Exercise the production schema, inventory and routing checks together.
  const schema = new URL('../../physics/briefs/schemas/step5-context.json', import.meta.url);
  copyFileSync(schema, join(root, 'briefs/schemas/step5-context.json'));
  save('research/demo-alpha-groups.json', [{label: 'alpha', covers: ['1', '2']}]);
  for (const batch of ['1', '2']) {
    const page = `page-${batch}`, id = `def-item-${batch}`;
    save(`research/demo-batch-${batch}.pages.json`, [{id: page, items: [{id}], requires: []}]);
    save(`research/demo-batch-${batch}-step5-context.json`, {
      group: 'alpha', batches: [batch], pages_read: [page], items_read: [id],
      conventions: [{convention: 'Real scalars', fixed_by: id, matters_for: [id]}],
      load_bearing: [{id, statement: 'A real vector space.', used_by: [id]}],
      published_dependencies: [], concerns: [], seams_checked: [],
      alerts: batch === '1' ? [{item: target, finding: 'Exact source wording needs review.', severity: 'presentation'}] : [],
    });
  }
  writeFileSync(join(root, 'items/thm-imported.md'), '---\nid: thm-imported\nstatus: published\n---\n## Statement\nPublished supplier.\n');
  return spawnSync(process.execPath, [new URL('./step5-scope.mjs', import.meta.url).pathname,
    'digests', '--run', 'demo'], {encoding: 'utf8', env: {...process.env, PHYSICS_REPO: root}});
}

for (const target of ['page-2', 'def-item-2', 'thm-imported']) {
  test(`accepts routed context alert ${target}`, t => {
    const result = check(t, target);
    assert.equal(result.status, 0, result.stderr);
  });
}
for (const target of ['page-1', 'def-item-1', 'unknown-target']) {
  test(`rejects invalid alert target ${target}`, t => {
    const result = check(t, target);
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, /that is a concern|belongs to no batch/);
  });
}
