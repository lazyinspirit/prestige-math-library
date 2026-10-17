import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { publishedPageDependencies, publishedPageCarrier } from './step3-published-pages.mjs';
const repo = resolve(import.meta.dirname, '../..');
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'physics-published-page-'));
  for (const dir of ['research', 'items', 'library/test', 'tools']) mkdirSync(join(root, dir), { recursive: true });
  symlinkSync(join(repo, 'tools/physics-support'), join(root, 'tools/physics-support'), 'dir');
  const put = (path, value) => writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
  const item = (id, deps, status = 'draft') => `---\nid: ${id}\nstatus: ${status}\ndeps: [${deps}]\n---\n## Statement\nA statement.\n`;
  put('items/lem-consumer.md', item('lem-consumer', 'lem-supplier'));
  put('items/lem-other.md', item('lem-other', ''));
  put('items/lem-supplier.md', item('lem-supplier', '', 'published'));
  const page = '---\npage: prerequisite\nstatus: published\nitems: [lem-supplier]\nexamples: []\n---\nAll items are drafts.\n';
  put('library/test/prerequisite.md', page);
  put('library/test/current.md', '---\npage: current\n---\nCurrent summary.\n');
  put('research/r-batch-1.pages.json', [{ id: 'current', category: 'test', items: ['lem-consumer', 'lem-other'] }]);
  put('research/r-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
  put('research/r-batch-1.proof-contracts.json', { version: 1, scope: ['lem-consumer', 'lem-other'], contracts: { 'lem-consumer': {}, 'lem-other': {} } });
  const finding = { id: 'prerequisite', subject_type: 'published-dependency', consumer_id: 'lem-consumer',
    observed_source: null, location: 'Summary', defect: 'false-claim', evidence: 'Published member contradicts draft summary.', severity: 'nonfatal' };
  const report = { batch: '1', coverage_note: 'Actual page and member opened.', findings: [finding] };
  put('research/r-reader-findings-1.json', report);
  const attempt = (...args) => spawnSync(process.execPath, [join(repo, 'tools/physics-support/step3-scope.mjs'),
    ...args, '--root', root, '--run', 'r'], { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8' });
  const run = (...args) => { const r = attempt(...args); assert.equal(r.status, 0, r.stderr + r.stdout); return r; };
  run('hash', '--batch', '1', '--label', 'pre'); run('hash', '--batch', '1', '--label', 'post');
  return { root, put, finding, report, page, attempt, run, clean: () => rmSync(root, { recursive: true, force: true }) };
}

test('published page finding survives native split, collect, stamp and both adjudication checks', () => {
  const f = fixture();
  try {
    const original = readFileSync(join(f.root, 'research/r-reader-findings-1.json'), 'utf8');
    f.run('split', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(f.root, 'research/r-step3-scope-1.json')));
    const finding = scope.reader_findings[0];
    assert.equal(finding.carrier_kind, 'page');
    assert.equal(finding.pre_sha256, undefined);
    assert.deepEqual(finding.page_dependency, { path: 'library/test/prerequisite.md', supplier_ids: ['lem-supplier'] });
    assert.deepEqual(scope.refuter_scope, ['current', 'lem-consumer', 'lem-other']);
    f.put('research/r-refute-1.json', { batch: '1', opened: scope.refuter_scope, not_opened: [], flagged: [], coverage_note: 'Every assigned source opened.' });
    f.run('collect', '--batch', '1');
    const ledger = { defect_id: 'r-page-status', run: 'r', subject: 'prerequisite', caught_at_stage: '3a-adjudicate', severity: 'nonfatal', disposition: 'nonfatal-recorded' };
    f.put('research/defect-ledger.jsonl', JSON.stringify(ledger) + '\n');
    f.put('research/r-alpha-a-3a-decisions.json', { version: 1, run: 'r', group: 'a', decisions: [{
      obligation: 'reader:1:1', id: 'prerequisite', consumer_id: 'lem-consumer', route: 'reader', verdict: 'confirmed_nonfatal', repair_confidence: 1,
      evidence: 'False status prose retained as outside maintenance; actual mathematical supplier unchanged.', defect_ids: ['r-page-status'],
    }] });
    f.run('stamp');
    f.run('check', '--phase', 'adjudicate'); f.run('check', '--phase', 'final');
    f.put('research/defect-ledger.jsonl', JSON.stringify({ ...ledger, disposition: 'fixed' }) + '\n');
    assert.match(f.attempt('check', '--phase', 'adjudicate').stderr, /carrier is unchanged/);
    f.put('library/test/prerequisite.md', f.page.replace('All items are drafts.', 'These items are mathematical prerequisites.'));
    assert.match(f.attempt('check', '--phase', 'adjudicate').stderr, /decision-stale/);
    f.run('stamp'); f.run('check', '--phase', 'adjudicate'); f.run('check', '--phase', 'final');
    assert.equal(readFileSync(join(f.root, 'research/r-reader-findings-1.json'), 'utf8'), original);
    // Actual member reachability, not a mere page link, must still exist.
    f.put('items/lem-consumer.md', '---\nid: lem-consumer\nstatus: draft\ndeps: []\n---\n[[prerequisite]]\n');
    assert.match(f.attempt('check', '--phase', 'adjudicate').stderr, /out-of-scope|reachability changed/);
  } finally { f.clean(); }
});

for (const defect of ['unknown', 'draft', 'wrong-identity', 'wrong-consumer', 'unreachable', 'duplicate-page', 'item-collision', 'in-run-page']) {
  test(`published page routing rejects ${defect}`, () => {
    const f = fixture();
    try {
      if (defect === 'unknown') f.report.findings[0].id = 'unknown-page';
      if (defect === 'draft') f.put('library/test/prerequisite.md', f.page.replace('published', 'draft'));
      if (defect === 'wrong-identity') f.put('library/test/prerequisite.md', f.page.replace('page: prerequisite', 'page: wrong'));
      if (defect === 'wrong-consumer') f.report.findings[0].consumer_id = 'lem-other';
      if (defect === 'unreachable') f.put('library/test/prerequisite.md', f.page.replace('lem-supplier', 'lem-unrelated'));
      if (defect === 'duplicate-page') { mkdirSync(join(f.root, 'library/other')); f.put('library/other/prerequisite.md', f.page); }
      if (defect === 'item-collision') {
        f.put('items/prerequisite.md', '---\nid: prerequisite\nstatus: published\ndeps: []\n---\n');
        f.put('items/lem-consumer.md', '---\nid: lem-consumer\nstatus: draft\ndeps: [prerequisite]\n---\n');
      }
      if (defect === 'in-run-page') f.put('research/r-batch-2.pages.json', [{ id: 'prerequisite', category: 'test', items: [] }]);
      f.put('research/r-reader-findings-1.json', f.report);
      assert.notEqual(f.attempt('split', '--batch', '1').status, 0);
    } finally { f.clean(); }
  });
}

test('unsafe bindings cannot read arbitrary paths and page claims cannot replace item reachability', () => {
  const f = fixture();
  try {
    assert.equal(publishedPageCarrier(f.root, { path: '../secret', supplier_ids: ['lem-supplier'] }), undefined);
    const map = publishedPageDependencies(f.root, [f.finding], new Map());
    assert.equal(map.size, 0);
  } finally { f.clean(); }
});


test('ordinary published-item finding retains its native item hashes and consumer guards', () => {
  const f = fixture();
  try {
    f.report.findings[0].id = 'lem-supplier';
    f.put('research/r-reader-findings-1.json', f.report);
    f.run('split', '--batch', '1');
    const row = JSON.parse(readFileSync(join(f.root, 'research/r-step3-scope-1.json'))).reader_findings[0];
    assert.equal(row.subject_type, 'published-dependency');
    assert.equal(row.carrier_kind, undefined);
    assert.equal(row.page_dependency, undefined);
    assert.match(row.pre_sha256, /^[a-f0-9]{64}$/);
    assert.match(row.observed_sha256, /^[a-f0-9]{64}$/);
    f.report.findings[0].consumer_id = 'lem-other';
    f.put('research/r-reader-findings-1.json', f.report);
    assert.match(f.attempt('split', '--batch', '1').stderr, /assigned consumer/);
  } finally { f.clean(); }
});
