import { spawnSync } from './fixture-process.mts';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';


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
    writeFileSync(join(root, 'tools/physics-support', 'validate-plan.mjs'), "process.stdout.write('x'.repeat(2 * 1024 * 1024));\n");
    writeFileSync(join(root, 'research', 'r-alpha-3b.md'), '# reviewed\n');
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
