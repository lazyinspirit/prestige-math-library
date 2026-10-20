import test from 'node:test';
import assert from 'node:assert/strict';
import { patchJSON, patchYAML } from './apply-root-only.mjs';
const page = { id: 'owned', kind: 'A', category: 'demo', companion: 'owned-examples' };
const jsonOp = (field, before, after, id = 'owned') => ({ op: 'json-page-field-cas', locator: 'root.pages[unique id]', page_id: id, page_identity: id === 'owned' ? page : { id }, field, expected_field_present: true, expected_value: before, proposed_value: after });
const yamlOp = (field, before, after, present = true) => ({ op: 'yaml-frontmatter-field-cas', page_id: 'owned', field, expected_field_present: present, ...(present ? { expected_value: before } : {}), proposed_value: after });

test('shared-plan field splice preserves foreign rows and every other raw byte', () => {
  const foreign = '{ "id":"foreign", "requires":["foreign-new"], "nested":{"quoted":"} [ \\\"", "order":77} }';
  const own = JSON.stringify({ ...page, requires: ['old'], notes: 'Keep this: [ ] { }' });
  const text = '{\n "foreign_control": {"counter":109},\n "pages" : [' + foreign + ',\n  ' + own + ']\n}\n';
  const after = patchJSON(text, [jsonOp('requires', ['old'], ['old', 'new'])]);
  assert.equal(after.includes(foreign), true);
  assert.equal(after.replace('[\n    "old",\n    "new"\n  ]', '["old"]'), text);
  assert.deepEqual(JSON.parse(after).pages[1].requires, ['old', 'new']);
});

test('fresh foreign shared-plan updates survive the same selected-field CAS', () => {
  const one = JSON.stringify({ metadata: { session: 109 }, pages: [{ id: 'foreign', requires: ['newest'] }, { ...page, requires: ['old'], extra: 7 }] });
  const two = one.replace('109', '110').replace('newest', 'even-newer');
  const after = JSON.parse(patchJSON(two, [jsonOp('requires', ['old'], ['old', 'new'])]));
  assert.equal(after.metadata.session, 110);
  assert.deepEqual(after.pages[0].requires, ['even-newer']);
  assert.equal(after.pages[1].extra, 7);
});

test('changed selected fields and ambiguous page identities fail closed', () => {
  const own = { ...page, requires: ['unexpected'] };
  assert.throws(() => patchJSON(JSON.stringify({ pages: [own] }), [jsonOp('requires', ['old'], ['old', 'new'])]), /CAS failed/);
  own.requires = ['old'];
  assert.throws(() => patchJSON(JSON.stringify({ pages: [own, own] }), [jsonOp('requires', ['old'], ['new'])]), /exactly once/);
  assert.throws(() => patchJSON(JSON.stringify({ pages: [{ ...own, category: 'foreign' }] }), [jsonOp('requires', ['old'], ['new'])]), /identity/);
});

test('two inventory-field moves preserve the complete original item objects and relative order', () => {
  const stable = { id: 'lem-stable', deps: [], foreign_key: { keep: [1, 2] } };
  const gaussian = { id: 'ex-gaussian', deps: ['def-kernel'], dependency_level: 1, foreign_key: 'preserve' };
  const other = { id: 'ex-other', deps: [] };
  const text = JSON.stringify({ pages: [{ id: 'a', items: [stable] }, { id: 'b', items: [gaussian, other] }] });
  const after = JSON.parse(patchJSON(text, [jsonOp('items', [stable], [stable, gaussian], 'a'), jsonOp('items', [gaussian, other], [other], 'b')]));
  assert.deepEqual(after.pages[0].items, [stable, gaussian]);
  assert.deepEqual(after.pages[1].items, [other]);
});

test('YAML edit preserves all other frontmatter and body bytes including separators', () => {
  const text = '---\npage: owned\ntitle: "A: title"\nnotes: |\n  Preserve this text\nrequires:\n  - old\n\npage_layout: compact-v1\nexamples: []\n---\n\nBody bytes $x$ stay exactly as they were.\n';
  const after = patchYAML(text, [yamlOp('requires', ['old'], ['old', 'new'])]);
  assert.equal(after.replace('requires:\n  - old\n  - new\n', 'requires:\n  - old\n'), text);
});

test('missing requires insertion preserves existing optional fields and empty body bytes', () => {
  const text = '---\npage: owned\nitems: [thm-item]\nexamples: []\npage_layout: compact-v1\n---\n\n';
  const after = patchYAML(text, [yamlOp('requires', undefined, ['supplier'], false)]);
  assert.equal(after.replace('requires:\n  - supplier\n', ''), text);
  assert.throws(() => patchYAML(after, [yamlOp('requires', undefined, ['supplier'], false)]), /CAS failed/);
});

test('YAML identity, field drift and targeted comments are never silently overwritten', () => {
  assert.throws(() => patchYAML('---\npage: other\nrequires: [old]\n---\n', [yamlOp('requires', ['old'], ['new'])]), /identity/);
  assert.throws(() => patchYAML('---\npage: owned\nrequires: [changed]\n---\n', [yamlOp('requires', ['old'], ['new'])]), /CAS failed/);
  assert.throws(() => patchYAML('---\npage: owned\nrequires:\n  # Do not erase\n  - old\n---\n', [yamlOp('requires', ['old'], ['new'])]), /comments/);
});

test('simultaneous YAML inventory fields preserve unrelated metadata and body', () => {
  const text = '---\npage: owned\nitems: [lem-a]\nexamples: [ex-g, ex-other]\npage_layout: compact-v1\n---\n';
  const after = patchYAML(text, [yamlOp('items', ['lem-a'], ['lem-a', 'ex-g']), yamlOp('examples', ['ex-g', 'ex-other'], ['ex-other'])]);
  assert.match(after, /items:\n  - lem-a\n  - ex-g\n/);
  assert.match(after, /examples:\n  - ex-other\npage_layout: compact-v1\n---\n$/);
});
