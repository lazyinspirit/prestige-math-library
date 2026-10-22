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

function nonlogicalFixture(t, kinds = ['open-problem', 'remark']) {
  const root = mkdtempSync(join(tmpdir(), 'physics-digest-nonlogical-'));
  t.after(() => rmSync(root, {recursive: true, force: true}));
  for (const dir of ['research', 'items', 'briefs/schemas'])
    mkdirSync(join(root, dir), {recursive: true});
  copyFileSync(new URL('../../physics/briefs/schemas/step5-context.json', import.meta.url),
    join(root, 'briefs/schemas/step5-context.json'));
  const save = (path, value) => writeFileSync(join(root, path), JSON.stringify(value));
  const items = kinds.map((kind, i) => ({id: `${kind === 'open-problem' ? 'op' : kind === 'remark' ? 'rem' : 'def'}-item-${i}`, kind}));
  for (const item of items)
    writeFileSync(join(root, 'items', `${item.id}.md`), `---\nid: ${item.id}\nkind: ${item.kind}\nstatus: draft\n---\n## Remark\nSource/status context.\n`);
  const pages = [{id: 'context', items, requires: []}, {id: 'context-examples', items: [], requires: ['context']}];
  const digest = {
    group: 'alpha', batches: ['1'], pages_read: pages.map(page => page.id),
    items_read: items.map(item => item.id),
    conventions: [{convention: 'Unresolved claims confer no proof premises.', fixed_by: items[0]?.id ?? 'context', matters_for: items.map(item => item.id)}],
    load_bearing: [], published_dependencies: [], concerns: [], alerts: [], seams_checked: [],
  };
  save('research/demo-alpha-groups.json', [{label: 'alpha', covers: ['1']}]);
  return {
    root, items, pages, digest,
    source(text) { writeFileSync(join(root, 'items', `${items[0].id}.md`), text); },
    run() {
      save('research/demo-batch-1.pages.json', pages);
      save('research/demo-batch-1-step5-context.json', digest);
      return spawnSync(process.execPath, [new URL('./step5-scope.mjs', import.meta.url).pathname,
        'digests', '--run', 'demo'], {encoding: 'utf8', env: {...process.env, PHYSICS_REPO: root}});
    },
  };
}

for (const kinds of [['open-problem'], ['remark'], ['open-problem', 'remark']]) {
  test(`accepts honest empty load-bearing list for ${kinds.join('/')}`, t => {
    const result = nonlogicalFixture(t, kinds).run();
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /batch\(es\) read their pairs/);
  });
}
for (const kinds of [['definition'], ['open-problem', 'definition'], ['remark', 'definition']]) {
  test(`retains nonempty load-bearing requirement for ${kinds.join('/')}`, t => {
    const fixture = nonlogicalFixture(t, kinds);
    let result = fixture.run();
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, /no load-bearing items recorded/);
    const id = fixture.items.find(item => item.kind === 'definition').id;
    fixture.digest.load_bearing = [{id, statement: 'A real vector space.', used_by: [id]}];
    result = fixture.run();
    assert.equal(result.status, 0, result.stderr);
  });
}

const invalidClassifications = [
  ['missing manifest kind', f => { delete f.items[0].kind; }],
  ['unknown manifest kind', f => { f.items[0].kind = 'nonlogical'; }],
  ['array manifest kind', f => { f.items[0].kind = ['open-problem']; }],
  ['legacy string manifest item', f => { f.pages[0].items[0] = f.items[0].id; }],
  ['missing source', f => { rmSync(join(f.root, 'items', `${f.items[0].id}.md`)); }],
  ['missing source frontmatter', f => { f.source('## Remark\nNo classification.\n'); }],
  ['missing source kind', f => { f.source(`---\nid: ${f.items[0].id}\n---\n`); }],
  ['unknown source kind', f => { f.source(`---\nid: ${f.items[0].id}\nkind: nonlogical\n---\n`); }],
  ['logical source kind', f => { f.source(`---\nid: ${f.items[0].id}\nkind: theorem\n---\n`); }],
  ['mismatched nonlogical source kind', f => { f.source(`---\nid: ${f.items[0].id}\nkind: remark\n---\n`); }],
  ['mismatched source identity', f => { f.source('---\nid: op-other\nkind: open-problem\n---\n'); }],
  ['missing source identity', f => { f.source('---\nkind: open-problem\n---\n'); }],
  ['malformed source YAML', f => { f.source('---\nid: [broken\nkind: open-problem\n---\n'); }],
  ['duplicate source YAML kind', f => { f.source(`---\nid: ${f.items[0].id}\nkind: theorem\nkind: open-problem\n---\n`); }],
  ['nonmapping source YAML', f => { f.source('---\n- open-problem\n---\n'); }],
  ['empty owned inventory', f => { f.pages[0].items = []; f.digest.items_read = []; }],
];
for (const [name, mutate] of invalidClassifications) {
  test(`fails closed for ${name}`, t => {
    const fixture = nonlogicalFixture(t);
    mutate(fixture);
    const result = fixture.run();
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, /no load-bearing items recorded/);
  });
}
for (const [name, mutate, message] of [
  ['incomplete item inventory', f => { f.digest.items_read.pop(); }, /items_read/],
  ['incomplete page inventory', f => { f.digest.pages_read.pop(); }, /pages_read/],
  ['invented seam', f => { f.digest.seams_checked = [{from: 'context', to: 'elsewhere', faithful: true, note: 'Invented edge.'}]; }, /seams_checked/],
  ['missing conventions', f => { f.digest.conventions = []; }, /no conventions recorded/],
  ['self alert', f => { f.digest.alerts = [{item: 'context', finding: 'Own-page warning.', severity: 'presentation'}]; }, /that is a concern/],
  ['unknown concern', f => { f.digest.concerns = [{id: 'unknown', concern: 'No owner.', severity: 'presentation'}]; }, /which it does not own/],
]) {
  test(`nonlogical scope retains guard: ${name}`, t => {
    const fixture = nonlogicalFixture(t);
    mutate(fixture);
    const result = fixture.run();
    assert.equal(result.status, 1, result.stdout);
    assert.match(result.stderr, message);
  });
}
