import { spawnSync } from './fixture-process.mts';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rowSha256 } from '../../physics-support/defect-ledger-taxonomy.mjs';


const REPO = join(import.meta.dirname, '..', '..', '..');
const TOOL = join(REPO, 'tools/physics-support', 'step3-close.mjs');
const sha = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');

test('Step-3 closure accepts a successful validator with output above the default buffer', () => {
  const root = mkdtempSync(join(tmpdir(), 'step3-close-large-output-'));
  try {
    for (const dir of ['research', 'items', 'tools/physics-support']) mkdirSync(join(root, dir), { recursive: true });
    for (const name of ['cross-group-edges', 'step3-scope', 'splice-plan', 'defect-ledger', 'frontier-item-gate']) {
      writeFileSync(join(root, 'tools/physics-support', `${name}.mjs`), 'process.exit(0);\n');
    }
    writeFileSync(join(root, 'tools/physics-support', 'splice-plan.mjs'), "process.stdout.write('x'.repeat(2 * 1024 * 1024));\n");
    writeFileSync(join(root, 'research', 'r-alpha-a-3a.md'), '# reviewed\n');
    const result = spawnSync(process.execPath,
      [TOOL, 'close', '--run', 'r', '--root', root], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const verified = spawnSync(process.execPath,
      [TOOL, 'verify', '--run', 'r', '--root', root], { cwd: root, encoding: 'utf8' });
    assert.equal(verified.status, 0, verified.stderr);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('Step-3 closure freezes exact reports and ledger rows without blocking later item repair', () => {
  const root = mkdtempSync(join(tmpdir(), 'step3-close-'));
  try {
    for (const dir of ['research', 'items']) mkdirSync(join(root, dir), { recursive: true });
    writeFileSync(join(root, 'items', 'thm-x.md'), 'initial closed item\n');
    writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      { id: 'p', category: 'test', items: ['thm-x'] },
    ]));
    const artifacts: Record<string, string> = {
      'r-step3-hash-1-post-3a.json': '{"snapshot":true}\n',
      'r-reader-1.md': '# reader\n',
      'r-alpha-a-3a.md': '# group Alpha\n',
      'r-alpha-batch-1-3a.md': '# batch Alpha\n',
      'r-alpha-batch-1-3a-decisions.json': '{"decisions":[]}\n',
      'r-alpha-a-3a-decisions.json': '{"decisions":[]}\n',
      'r-alpha-3b.md': '# lead Alpha\n',
      'r-3b-verdicts.jsonl': '',
    };
    for (const [name, value] of Object.entries(artifacts)) {
      writeFileSync(join(root, 'research', name), value);
    }
    const ledgerRows = [{
      defect_id: 'r-D1', run: 'r', subject: 'thm-x', caught_at_stage: '3a-adjudicate',
      severity: 'fatal', disposition: 'fixed',
    }];
    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify(ledgerRows[0])}\n`);
    const receiptArtifacts = Object.fromEntries(Object.entries(artifacts).sort()
      .map(([name, value]) => [`research/${name}`, sha(value)]));
    writeFileSync(join(root, 'research', 'r-step3-closure.json'), `${JSON.stringify({
      version: 2, run: 'r', status: 'closed', artifacts: receiptArtifacts,
      step3_published_rows_sha256: sha('[]'), step3_published_rows_count: 0,
      step3_ledger_rows_sha256: sha(JSON.stringify(ledgerRows)), step3_ledger_rows_count: 1,
      final_item_hashes: { 'thm-x': 'historical' },
    })}\n`);
    const verify = () => spawnSync(process.execPath,
      [TOOL, 'verify', '--run', 'r', '--root', root], { cwd: root, encoding: 'utf8' });
    assert.equal(verify().status, 0);

    writeFileSync(join(root, 'items', 'thm-x.md'), 'later Step-5 repair\n');
    assert.equal(verify().status, 0, 'later stages may change items without rewriting Step-3 history');

    writeFileSync(join(root, 'research', 'r-alpha-batch-1-3a.md'), '# changed batch report\n');
    assert.match(verify().stderr, /alpha-batch-1-3a\.md changed/);
    writeFileSync(join(root, 'research', 'r-alpha-batch-1-3a.md'), artifacts['r-alpha-batch-1-3a.md']);

    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify({
      ...ledgerRows[0], subject: 'retargeted-subject',
    })}\n`);
    let result = verify();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /defect-ledger rows changed/);

    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify(ledgerRows[0])}\n`);
    writeFileSync(join(root, 'research', 'r-alpha-a-3a.md'), '# rewritten report\n');
    result = verify();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /alpha-a-3a\.md changed/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function taxonomyHistory(t: any, frozenTaxonomyCount = 3) {
  const root = mkdtempSync(join(tmpdir(), 'step3-close-taxonomy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research', 'items']) mkdirSync(join(root, dir), { recursive: true });
  const originals = Array.from({ length: 7 }, (_, index) => ({
    defect_id: `r-original-${index}`, run: 'r', subject: `thm-original-${index}`, caught_at_stage: '3a-adjudicate',
    class: 'accuracy', subclass: 'ill-formed', location: 'proof', severity: 'nonfatal', disposition: 'fixed',
    at: '2026-10-01T00:00:00Z', evidence: [{ note: 'The authentic original completed repair.' }],
  }));
  for (const row of originals) writeFileSync(join(root, 'items', row.subject + '.md'),
    `---\nid: ${row.subject}\nkind: theorem\nstatus: draft\n---\nOriginal draft carrier.\n`);
  const successor = (prior: any, index: number) => ({ ...prior, defect_id: `r-A-taxonomy-${index}`, location: 'proof-step',
    supersedes: [prior.defect_id], metadata_correction: { kind: 'taxonomy-only', original_defect_id: prior.defect_id,
      original_row_sha256: rowSha256(prior), corrected_fields: ['location'] } });
  const corrections = originals.map(successor), frozen = [...originals, ...corrections.slice(0, frozenTaxonomyCount)];
  const rows: any[] = [...frozen, ...corrections.slice(frozenTaxonomyCount)];
  const ledgerPath = join(root, 'research', 'defect-ledger.jsonl'), receiptPath = join(root, 'research', 'r-step3-closure.json');
  const reportPath = join(root, 'research', 'r-alpha-a-3a.md'); writeFileSync(reportPath, '# Authentic frozen native report\n');
  const canonical = (rows: any[]) => [...rows].sort((a, b) => a.defect_id.localeCompare(b.defect_id));
  const receipt = { version: 3, basis: 'dependency-ordered-step3a', run: 'r', status: 'closed',
    artifacts: { 'research/r-alpha-a-3a.md': sha(readFileSync(reportPath)) },
    step3_ledger_rows_count: frozen.length, step3_ledger_rows_sha256: sha(JSON.stringify(canonical(frozen))) };
  writeFileSync(receiptPath, JSON.stringify(receipt) + '\n');
  const save = () => writeFileSync(ledgerPath, rows.map(row => JSON.stringify(row)).join('\n') + '\n'); save();
  const verify = () => spawnSync(process.execPath, [TOOL, 'verify', '--run', 'r', '--root', root], { cwd: root, encoding: 'utf8' });
  return { root, originals, corrections, rows, frozen, receipt, receiptPath, reportPath, ledgerPath, save, verify };
}

for (const count of [0, 3, 7]) test(`Step-3 history retains ${count} frozen taxonomy successors and authenticates only later appended corrections`, t => {
  const f = taxonomyHistory(t, count), receiptBytes = readFileSync(f.receiptPath), ledgerBytes = readFileSync(f.ledgerPath);
  const result = f.verify(); assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(readFileSync(f.receiptPath), receiptBytes);
  assert.deepEqual(readFileSync(f.ledgerPath), ledgerBytes);
  // The new IDs sort before originals: sorting before selecting a prefix would
  // select the wrong historical rows and cannot reproduce the frozen digest.
  if (count === 3) assert.equal(f.rows.slice(0, f.receipt.step3_ledger_rows_count).filter(row => row.metadata_correction).length, 3);
});

for (const [name, mutate] of [
  ['new substantive row', (f: any) => f.rows.push({ ...f.originals[0], defect_id: 'r-new-substantive', subject: 'thm-new', severity: 'fatal' })],
  ['new substantive successor', (f: any) => { const { metadata_correction, ...row } = f.corrections[6]; f.rows.push({ ...row, defect_id: 'r-new-substantive-successor', supersedes: [row.defect_id], disposition: 'false-positive' }); }],
  ['forged predecessor hash', (f: any) => { f.corrections[6].metadata_correction.original_row_sha256 = 'a'.repeat(64); }],
  ['ambiguous taxonomy branch', (f: any) => f.rows.push({ ...f.corrections[6], defect_id: 'r-ambiguous-successor' })],
  ['changed original substantive field', (f: any) => { f.originals[0].severity = 'fatal'; }],
  ['retargeted original subject', (f: any) => { f.originals[0].subject = 'thm-retargeted'; }],
  ['removed frozen successor', (f: any) => f.rows.splice(f.rows.indexOf(f.corrections[1]), 1)],
  ['removed original predecessor', (f: any) => f.rows.splice(f.rows.indexOf(f.originals[4]), 1)],
]) test('Step-3 historical taxonomy projection rejects ' + name, t => {
  const f = taxonomyHistory(t); mutate(f); f.save();
  const result = f.verify(); assert.notEqual(result.status, 0, result.stdout);
  assert.match(result.stderr, /defect-ledger rows changed|taxonomy-only correction lineage|supersed/);
});
