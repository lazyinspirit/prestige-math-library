import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, symlinkSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { writeProofLayout } from '../../proof-layout.mjs';

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
  put('research/foreign-batch-1.pages.json', [{ id: 'foreign-page', category: 'algebra', items: ['thm-foreign'] }]);
  put('items/thm-foreign.md', '---\nid: thm-foreign\nkind: theorem\nstatus: draft\n---\nForeign proof.\n');
  put('library/algebra/foreign-page.md', '---\npage: foreign-page\nstatus: draft\nitems: [thm-foreign]\n---\nForeign page.\n');
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
  assert.match(result.stdout, /3 unrelated scoped change\(s\)/);
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

for (const path of ['research/plan-spec.json', 'research/published-consumer-supplier-ledger.md', 'research/defect-ledger.jsonl'])
  test(`report accepts unrelated canonical shared projection changes in ${path}`, t => {
    const f = fixture();
    t.after(() => rmSync(f.root, { recursive: true, force: true }));
    const baseline = readFileSync(join(f.root, 'research/demo-step9-report-integrity.json'));
    if (path.endsWith('plan-spec.json')) {
      const plan = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
      f.put(path, { ...plan, pages: [...plan.pages, { id: 'foreign-page', items: ['thm-unrelated'] }] });
    } else if (path.endsWith('.jsonl')) f.put(path, JSON.stringify({ run: 'foreign', subject: 'thm-unrelated' }) + '\n');
    else f.put(path, '| foreign | thm-unrelated | unrelated maintenance |\n');
    const result = f.check();
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(readFileSync(join(f.root, 'research/demo-step9-report-integrity.json')), baseline);
  });

test('report blocks relevant published supplier ledger projection changes', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/published-consumer-supplier-ledger.md', '| foreign | thm-owned | relevant maintenance |\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('shared projection exemption cannot waive an exact raw reporter ledger binding', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/demo-step9-evidence.json', { version: 2, run: 'demo', input_sha256: {
    'research/defect-ledger.jsonl': createHash('sha256').update('').digest('hex'),
  } });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/defect-ledger.jsonl', JSON.stringify({ run: 'foreign', subject: 'thm-unrelated' }) + '\n');
  assert.equal(command(f.root, 'publication-ready.mjs', '--verify').status, 0);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*defect-ledger.jsonl/);
});

test('shared carriers require an explicit native projection selection', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const path = 'research/demo-publication-readiness.json';
  const readiness = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
  f.put(path, { ...readiness, protected_tree_projections: readiness.protected_tree_projections.filter((p: string) => p !== 'research/plan-spec.json') });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/plan-spec.json', { pages: [{ id: 'owned-page', items: ['thm-owned'] }], foreignMetadata: true });
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*plan-spec.json/);
});

test('malformed unrelated shared ledger rows still fail the native verifier', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/defect-ledger.jsonl', 'not valid JSON\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('shared projection carrier cannot be replaced by a link to identical bytes', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const path = join(f.root, 'research/plan-spec.json');
  // Runtime is excluded from the full report tree; this isolates native
  // projection type protection rather than an extra-file baseline failure.
  mkdirSync(join(f.root, '.autopilot'));
  writeFileSync(join(f.root, '.autopilot/plan.json'), readFileSync(path));
  unlinkSync(path);
  symlinkSync('../.autopilot/plan.json', path);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('a projected external supporting carrier accepts only unchanged native semantic records', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/shared-root-record.md', 'demo current run record\n\nunrelated historic note\n');
  f.put('research/demo-touches.json', { source: 'research/shared-root-record.md' });
  assert.equal(command(f.root, 'publication-ready.mjs', '--write').status, 0);
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/shared-root-record.md', 'demo current run record\n\nchanged unrelated historic note\n');
  assert.equal(command(f.root, 'publication-ready.mjs', '--verify').status, 0);
  let result = f.check();
  assert.equal(result.status, 0, result.stderr);
  f.put('research/shared-root-record.md', 'demo changed consumed run record\n\nchanged unrelated historic note\n');
  result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('report accepts concurrent selected foreign item and page authoring on sealed ownership', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const baseline = readFileSync(join(f.root, 'research/demo-step9-report-integrity.json'));
  f.put('items/thm-foreign.md', '---\nid: thm-foreign\nkind: theorem\nstatus: draft\n---\nUpdated foreign proof.\n');
  f.put('library/algebra/foreign-page.md', '---\npage: foreign-page\nstatus: draft\nitems: [thm-foreign]\n---\nUpdated foreign page.\n');
  const result = f.check();
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(readFileSync(join(f.root, 'research/demo-step9-report-integrity.json')), baseline);
});

test('a foreign selected supplier remains protected by the owning run prerequisite seal', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('items/thm-owned.md', '---\nid: thm-owned\nkind: theorem\nstatus: draft\ndeps: [thm-foreign]\n---\nOwned proof using its supplier.\n');
  assert.equal(command(f.root, 'publication-ready.mjs', '--write').status, 0);
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('items/thm-foreign.md', '---\nid: thm-foreign\nkind: theorem\nstatus: draft\n---\nChanged consumed foreign proof.\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*items\/thm-foreign.md/);
});

test('registered foreign selected items still require current native readiness', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const path = 'research/demo-publication-readiness.json';
  const readiness = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
  f.put(path, { ...readiness, protected_tree_sha256: 'stale' });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('items/thm-foreign.md', 'Updated foreign proof.\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('items without registered foreign ownership remain exact report inputs', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('items/thm-unregistered.md', 'Unregistered proof.\n');
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('items/thm-unregistered.md', 'Changed unregistered proof.\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*items\/thm-unregistered.md/);
});

test('mutating a foreign manifest cannot grant new ownership during reporting', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-batch-1.pages.json', [{ id: 'foreign-page', category: 'algebra', items: ['thm-foreign', 'thm-forged'] }]);
  f.put('items/thm-forged.md', 'Forged ownership proof.\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*items\/thm-forged.md/);
});

test('a sealed foreign manifest may select only its own owed pages with strict paths', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/foreign-batch-1.pages.json', [
    { id: 'unowed-page', category: 'algebra', items: ['thm-unowed'] },
    { id: 'foreign-page', category: '../algebra', items: ['thm-unsafe'] },
  ]);
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('items/thm-unowed.md', 'Unowed proof.\n');
  f.put('items/thm-unsafe.md', 'Unsafe carrier claim.\n');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /items\/thm-unowed.md/);
  assert.match(result.stderr, /items\/thm-unsafe.md/);
});

for (const target of ['thm-owned.md', 'missing-item.md'])
  test(`a foreign selected mathematical file cannot become a symbolic link to ${target}`, t => {
    const f = fixture();
    t.after(() => rmSync(f.root, { recursive: true, force: true }));
    unlinkSync(join(f.root, 'items/thm-foreign.md'));
    symlinkSync(target, join(f.root, 'items/thm-foreign.md'));
    const result = f.check();
    assert.equal(result.status, 1);
    assert.match(result.stderr, /step9-report-tree-changed.*items\/thm-foreign.md/);
  });

test('foreign selected authoring may create regular files but deletions remain strict', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  unlinkSync(join(f.root, 'items/thm-foreign.md'));
  const deletion = f.check();
  assert.equal(deletion.status, 1);
  assert.match(deletion.stderr, /step9-report-tree-changed.*items\/thm-foreign.md/);
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('items/thm-foreign.md', '---\nid: thm-foreign\nkind: theorem\nstatus: draft\n---\nNew foreign proof.\n');
  const creation = f.check();
  assert.equal(creation.status, 0, creation.stderr);
});

const ownDefect = { defect_id: 'demo-D001', run: 'demo', at: '2026-01-01T00:00:00.000Z', severity: 'fatal', subject: 'thm-owned',
  class: 'accuracy', subclass: 'invalid-inference', location: 'proof-step', disposition: 'fixed',
  caught_at_stage: '7-adjudicate', caught_by_role: 'judge-terra', repair_cost: 'repair+rejudge' };

function evidenceFixture() {
  const f = fixture();
  f.put('tools/defect-ledger.mjs', `import ${JSON.stringify(pathToFileURL(join(repo, 'tools/defect-ledger.mjs')).href)};\n`);
  f.put('items/thm-owned.md', '---\nid: thm-owned\nkind: theorem\nstatus: draft\n---\n## Proof\n\n1.1 A fixture premise. [given]\n\n1.2 Its fixture conclusion. [step 1.1] ∎\n');
  f.put('research/demo-scope-ledger.json', { run: 'demo', pages: [{ id: 'owned-page', kind: 'A', batch: '1' }] });
  f.put('research/demo-judge-closure.json', { run: 'demo', judge_lineup: 'sol', closed: true,
    scope: 1, verdicts_complete: 1, needs_rejudge: [], unadjudicated: [], open_fatal: [] });
  f.put('research/demo-judge.jsonl', JSON.stringify({ id: 'thm-owned', model: 'gpt-6-sol', context_sha256: 'context', item_sha256: 'item', keep: true }) + '\n');
  f.put('research/demo-judge-adjudications.jsonl', '');
  f.put('research/defect-ledger.jsonl', JSON.stringify(ownDefect) + '\n');
  f.put('research/DEFECT-LEDGER.md', 'demo own generated summary\n\nforeign unrelated summary\n');
  f.put('research/demo-touches.json', { snapshots: [{ label: 'baseline', hashes: { 'thm-owned':
    createHash('sha256').update(readFileSync(join(f.root, 'items/thm-owned.md'))).digest('hex') } }], summary: 'research/DEFECT-LEDGER.md' });
  writeProofLayout('demo', f.root);
  let result = command(f.root, 'publication-ready.mjs', '--write');
  assert.equal(result.status, 0, result.stderr);
  result = command(f.root, 'step9-report.mjs', 'evidence');
  assert.equal(result.status, 0, result.stderr);
  result = command(f.root, 'step9-report.mjs', 'snapshot');
  assert.equal(result.status, 0, result.stderr);
  return f;
}

test('native v3 evidence remains exact across unrelated defect appends and global summary updates', t => {
  const f = evidenceFixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  const path = join(f.root, 'research/demo-step9-evidence.json');
  const original = readFileSync(path);
  const evidence = JSON.parse(original.toString());
  assert.equal(evidence.version, 3);
  assert.equal(Object.hasOwn(evidence.input_sha256, 'research/defect-ledger.jsonl'), false);
  assert.equal(evidence.input_projections['research/defect-ledger.jsonl'].kind, 'run-defect-history-v1');
  f.put('research/defect-ledger.jsonl', [ownDefect, { ...ownDefect, defect_id: 'foreign-D001', run: 'foreign', subject: 'thm-foreign' }].map(row => JSON.stringify(row)).join('\n') + '\n');
  f.put('research/DEFECT-LEDGER.md', 'demo own generated summary\n\nforeign changed generated summary\n');
  let result = command(f.root, 'step9-report.mjs', 'check-evidence');
  assert.equal(result.status, 0, result.stderr);
  result = f.check();
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(readFileSync(path), original);
});

for (const [label, change] of [
  ['own fatal metadata', { ...ownDefect, repair_cost: 'replacement' }],
  ['own supersession', { ...ownDefect, supersedes: ['demo-missing'] }],
] as const) test(`native v3 evidence and report guard reject ${label}`, t => {
  const f = evidenceFixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/defect-ledger.jsonl', JSON.stringify(change) + '\n');
  assert.equal(command(f.root, 'step9-report.mjs', 'check-evidence').status, 1);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-projection-stale/);
});

test('native relevant outside-subject rows remain protected beyond v3 own-run evidence', t => {
  const f = evidenceFixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/defect-ledger.jsonl', [ownDefect, { ...ownDefect, defect_id: 'foreign-D001', run: 'foreign' }].map(row => JSON.stringify(row)).join('\n') + '\n');
  assert.equal(command(f.root, 'step9-report.mjs', 'check-evidence').status, 0);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /native readiness verification failed/);
});

test('malformed global JSON remains fatal with v3 projected reporter inputs', t => {
  const f = evidenceFixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/defect-ledger.jsonl', JSON.stringify(ownDefect) + '\nmalformed foreign JSON\n');
  assert.equal(command(f.root, 'step9-report.mjs', 'check-evidence').status, 1);
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /invalid JSON/);
});

for (const [label, projected] of [
  ['wrong path', { 'research/foreign-supervision.md': { kind: 'run-defect-history-v1', run: 'demo', sha256: 'a'.repeat(64) } }],
  ['wrong kind', { 'research/defect-ledger.jsonl': { kind: 'all-records', run: 'demo', sha256: 'a'.repeat(64) } }],
  ['wrong run', { 'research/defect-ledger.jsonl': { kind: 'run-defect-history-v1', run: 'foreign', sha256: 'a'.repeat(64) } }],
  ['invalid hash', { 'research/defect-ledger.jsonl': { kind: 'run-defect-history-v1', run: 'demo', sha256: 'invalid' } }],
] as const) test(`v3 projection shape rejects ${label}`, t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('research/demo-step9-evidence.json', { version: 3, run: 'demo', input_sha256: {}, input_projections: projected });
  assert.equal(command(f.root, 'step9-report.mjs', 'snapshot').status, 0);
  f.put('research/foreign-supervision.md', 'legitimate foreign update');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-projection-shape/);
});

test('derived native index names never grant physical path ownership', t => {
  const f = fixture();
  t.after(() => rmSync(f.root, { recursive: true, force: true }));
  f.put('items#relevant-identity-claims', 'physical filename impersonating a semantic index');
  const result = f.check();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /step9-report-tree-changed.*items#relevant-identity-claims/);
});
