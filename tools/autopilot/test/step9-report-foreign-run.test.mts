import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, symlinkSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const repo = new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const command = (root: string, tool: string, ...args: string[]) => spawnSync(process.execPath,
  [join(repo, 'tools', tool), ...args, '--run', 'demo', '--root', root], { encoding: 'utf8' });

function fixture(options: { reference?: boolean; reporterInput?: boolean } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'step9-foreign-'));
  const put = (path: string, value: unknown) => writeFileSync(join(root, path),
    typeof value === 'string' ? value : JSON.stringify(value));
  for (const dir of ['research/foreign-source-evidence', 'items', 'library/algebra', 'tools'])
    mkdirSync(join(root, dir), { recursive: true });
  put('tools/pathway-closure.mjs', 'console.log("fixture closed pathway");\n');
  put('tools/validator.mjs', 'const validationPolicy = "original";\n');
  put('WORKFLOW.md', 'Original workflow policy.\n');
  put('items/thm-owned.md', '---\nid: thm-owned\nkind: theorem\nstatus: draft\n---\n## Proof\n\nOwned proof.\n');
  put('library/algebra/owned-page.md', '---\npage: owned-page\nstatus: draft\nitems: [thm-owned]\n---\nOwned page.\n');
  put('research/demo-scope-ledger.json', { run: 'demo', pages: [{ id: 'owned-page' }] });
  put('research/foreign-scope-ledger.json', { run: 'foreign', pages: [{ id: 'foreign-page' }] });
  put('research/demo-batch-1.pages.json', [{ id: 'owned-page', items: ['thm-owned'] }]);
  put('research/plan-spec.json', { pages: [{ id: 'owned-page', items: ['thm-owned'] }] });
  put('research/defect-ledger.jsonl', '');
  put('research/published-consumer-supplier-ledger.md', '');
  put('research/demo-pathway-closure.json', { run: 'demo', briefs: [] });
  put('research/demo-judge-closure.json', { run: 'demo', closed: true });
  put('research/demo-touches.json', options.reference
    ? { source: 'research/foreign-source-evidence/knuth.pdf' } : { snapshots: [] });
  put('research/foreign-source-evidence/knuth.pdf', 'original PDF bytes');
  put('research/foreign-source-evidence/knuth.txt', 'original extracted text');
  put('research/foreign-supervision.md', 'original foreign supervision');
  let result = command(root, 'publication-ready.mjs', '--write');
  assert.equal(result.status, 0, result.stderr);
  put('research/demo-step9-evidence.json', { version: 2, run: 'demo', input_sha256:
    options.reporterInput ? { 'research/foreign-supervision.md': 'bound-input' } : {} });
  result = command(root, 'step9-report.mjs', 'snapshot');
  assert.equal(result.status, 0, result.stderr);
  return { root, put, check: () => command(root, 'step9-report.mjs', 'check') };
}

test('report accepts genuine foreign research changes without rewriting its v1 baseline', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const baseline = readFileSync(join(f.root, 'research/demo-step9-report-integrity.json'));
  f.put('research/foreign-source-evidence/knuth.pdf', 'updated PDF bytes');
  f.put('research/foreign-source-evidence/knuth.txt', 'updated extraction');
  f.put('research/foreign-supervision.md', 'updated foreign supervision');
  let result = f.check();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /3 unrelated foreign research change\(s\)/);
  assert.deepEqual(readFileSync(join(f.root, 'research/demo-step9-report-integrity.json')), baseline);
  // Additions and deletions are allowed only inside the same authenticated namespace.
  f.put('research/foreign-new-note.md', 'new unrelated note');
  unlinkSync(join(f.root, 'research/foreign-source-evidence/knuth.txt'));
  result = f.check();
  assert.equal(result.status, 0, result.stderr);
});

const mutations: [string, (f: ReturnType<typeof fixture>) => void][] = [
  ['own mathematical input', f => f.put('items/thm-owned.md', 'changed proof')],
  ['own page', f => f.put('library/algebra/owned-page.md', 'changed page')],
  ['own evidence', f => f.put('research/demo-step9-evidence.json', { run: 'demo', input_sha256: {} })],
  ['validator code', f => f.put('tools/validator.mjs', 'changed validation policy')],
  ['workflow policy', f => f.put('WORKFLOW.md', 'changed workflow policy')],
  ['relevant shared plan projection', f => f.put('research/plan-spec.json', { pages: [{ id: 'owned-page', items: ['thm-owned'], requires: ['new-prerequisite'] }] })],
  ['relevant shared ledger projection', f => f.put('research/defect-ledger.jsonl', JSON.stringify({ run: 'foreign', subject: 'thm-owned' }) + '\n')],
  ['unowned forged prefix', f => f.put('research/impostor-supervision.md', 'forged prefix')],
  ['new ownership ledger', f => { f.put('research/impostor-scope-ledger.json', { run: 'impostor', pages: [{ id: 'anything' }] }); f.put('research/impostor-supervision.md', 'new namespace'); }],
  ['changed ownership ledger', f => f.put('research/foreign-scope-ledger.json', { run: 'foreign', pages: [{ id: 'changed' }] })],
];
for (const [name, mutate] of mutations) test(`report still blocks ${name} alongside foreign changes`, t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-supervision.md', 'legitimate foreign update');
  mutate(f);
  const result = f.check();
  assert.equal(result.status, 1, result.stdout);
  assert.match(result.stderr, /step9-report-(?:tree-changed|foreign-scope)/);
});

test('foreign-prefixed source used by native run evidence remains protected', t => {
  const f = fixture({ reference: true });
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-source-evidence/knuth.pdf', 'mutated consumed source');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*foreign-source-evidence\/knuth.pdf/);
});

test('exact reporter input bindings protect foreign paths beyond readiness selections', t => {
  const f = fixture({ reporterInput: true });
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-supervision.md', 'mutated reporter input');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*foreign-supervision.md/);
});

test('foreign prefix cannot hide a consumed physical file replaced by a symbolic link', t => {
  const f = fixture({ reference: true });
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const source = join(f.root, 'research/foreign-source-evidence/knuth.pdf');
  unlinkSync(source);
  symlinkSync('knuth.txt', source);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*foreign-source-evidence\/knuth.pdf/);
});

test('an unchanged snapshot cannot waive stale native readiness', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const path = join(f.root, 'research/demo-publication-readiness.json');
  const readiness = JSON.parse(readFileSync(path, 'utf8'));
  f.put('research/demo-publication-readiness.json', { ...readiness, protected_tree_sha256: 'stale' });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/foreign-supervision.md', 'legitimate foreign update');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-foreign-scope: native readiness verification failed/);
});

test('a sealed prefix with mismatched ownership metadata grants no exemption', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-scope-ledger.json', { run: 'different-owner', pages: [{ id: 'foreign-page' }] });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/foreign-supervision.md', 'forged ownership update');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*foreign-supervision.md/);
});
