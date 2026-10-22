import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { scopedReadinessTree } from './step6-scoped-tree.mjs';
import { sha256, protectedEntryHash } from './step6-lib.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'scoped-supporting-archive-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, text) => { mkdirSync(join(root, file, '..'), { recursive: true }); writeFileSync(join(root, file), text); };
  const json = (file, value) => put(file, JSON.stringify(value));
  put('items/def-example.md', '---\nid: def-example\n---\n## Definition\nExample.\n');
  put('library/category/page.md', '---\npage: page\nitems: [def-example]\n---\n');
  json('research/demo-batch-1.pages.json', [{ id: 'page', items: ['def-example'] }]);
  json('research/plan-spec.json', { pages: [{ id: 'page', items: ['def-example'] }] });
  put('research/defect-ledger.jsonl', ''); put('research/published-consumer-supplier-ledger.md', '');
  const scope = { items: [{ id: 'def-example' }], pages: [{ id: 'page', file: 'library/category/page.md' }], pathwayFiles: [] };
  const tree = options => scopedReadinessTree('demo', root, { scope, includeRows: true, ...options });
  const reference = path => json('research/demo-step5-v2/certification-1.json', { evidence: { [path]: 'native reference' } });
  return { root, put, json, tree, reference };
}

for (const owner of ['demo', 'foreign']) for (const format of ['JSON', 'JSONL', 'Markdown']) {
  test(`${owner} native ${format} archive seals exact bytes and stops historical links`, t => {
    const f = fixture(t), poison = 'research/unrelated-invalid.json';
    f.put(poison, '{malformed historical evidence');
    const row = { id: 'def-example', path: poison };
    const bytes = format === 'JSON' ? JSON.stringify(row) : format === 'JSONL'
      ? JSON.stringify(row) + '\n' + JSON.stringify({ run: 'old' }) + '\n'
      : '# Historical ledger\n\ndef-example ' + poison + '\n';
    const path = `research/${owner}-step5-v2/supporting-metadata/${sha256(bytes)}.json`;
    f.put(path, bytes);
    // Nested external relevant record exercises follow(projection), while the
    // local native walk exercises the other discovery route.
    f.json('research/foreign-review.json', { records: [{ id: 'def-example', archive: path }] });
    f.reference('research/foreign-review.json');
    const result = f.tree();
    assert.ok(result.protected_tree_paths.includes(path));
    assert.ok(!result.protected_tree_projections.includes(path));
    assert.ok(!result.protected_tree_paths.includes(poison));
    assert.ok(!result.protected_tree_projections.includes(poison));
    assert.ok(result.protected_tree_rows.includes(`${path}\0${protectedEntryHash(join(f.root, path))}`));
    const previous = result.protected_tree_sha256;
    f.put(poison, 'different still malformed historical evidence');
    assert.equal(f.tree().protected_tree_sha256, previous);
    f.put(path, bytes + 'tamper');
    assert.throws(f.tree, /native supporting metadata archive changed/);
  });
}

for (const owner of ['demo', 'foreign']) {
  test(`${owner} missing or symlinked archive blocks`, t => {
    const f = fixture(t), hash = sha256('{}');
    const path = `research/${owner}-step5-v2/supporting-metadata/${hash}.json`;
    f.reference(path);
    assert.throws(f.tree, /ENOENT/);
    f.put('research/target.json', '{}');
    mkdirSync(join(f.root, path, '..'), { recursive: true });
    symlinkSync(join(f.root, 'research/target.json'), join(f.root, path));
    assert.throws(f.tree, /symlink in native supporting metadata archive/);
  });
}

test('archive ancestry may not traverse a symlink', t => {
  const f = fixture(t), hash = sha256('{}');
  f.put(`research/real/${hash}.json`, '{}');
  mkdirSync(join(f.root, 'research/foreign-step5-v2'), { recursive: true });
  symlinkSync(join(f.root, 'research/real'), join(f.root, 'research/foreign-step5-v2/supporting-metadata'));
  f.reference(`research/foreign-step5-v2/supporting-metadata/${hash}.json`);
  assert.throws(f.tree, /symlink in native supporting metadata archive/);
});

for (const path of ['research/ordinary-invalid.json',
  `research/foreign-step5-v2/supporting-metadata-copy/${sha256('bad')}.json`,
  'research/foreign-step5-v2/supporting-metadata/not-a-hash.json',
  `research/foreign-step5-v2/supporting-metadata/${sha256('bad').toUpperCase()}.json`]) {
  test(`malformed JSON remains strict outside exact archive namespace: ${path}`, t => {
    const f = fixture(t); f.put(path, 'bad'); f.reference(path);
    assert.throws(f.tree, SyntaxError);
  });
}

test('ordinary foreign JSON retains scoped record projection', t => {
  const f = fixture(t), file = 'research/foreign-review.json';
  const update = other => f.json(file, { version: 1, records: [{ id: 'def-example', text: 'actual' }, { id: 'def-unrelated', text: other }] });
  f.reference(file); update('before');
  const before = f.tree(); assert.ok(before.protected_tree_projections.includes(file));
  update('after'); assert.equal(f.tree().protected_tree_sha256, before.protected_tree_sha256);
});
