import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const REPO = join(import.meta.dirname, '..', '..', '..');
const TOOL = join(REPO, 'tools', 'step5-close.mjs');
const sha = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');

test('Step-5 closure freezes exact reports and ledger rows without blocking later item repair', () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-close-'));
  try {
    for (const dir of ['research', 'items']) mkdirSync(join(root, dir), { recursive: true });
    writeFileSync(join(root, 'items', 'thm-x.md'), 'initial closed item\n');
    writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      { id: 'p', category: 'test', items: ['thm-x'] },
    ]));
    const artifacts: Record<string, string> = {
      'r-step5-hash-1-post-5a.json': '{"snapshot":true}\n',
      'r-reader-1.md': '# reader\n',
      'r-alpha-a-5a.md': '# group Alpha\n',
      'r-alpha-a-5a-decisions.json': '{"decisions":[]}\n',
      'r-alpha-5b.md': '# lead Alpha\n',
      'r-5b-verdicts.jsonl': '',
    };
    for (const [name, value] of Object.entries(artifacts)) {
      writeFileSync(join(root, 'research', name), value);
    }
    const ledgerRows = [{
      defect_id: 'r-D1', run: 'r', subject: 'thm-x', caught_at_stage: '5a-adjudicate',
      severity: 'fatal', disposition: 'fixed',
    }];
    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify(ledgerRows[0])}\n`);
    const receiptArtifacts = Object.fromEntries(Object.entries(artifacts).sort()
      .map(([name, value]) => [`research/${name}`, sha(value)]));
    writeFileSync(join(root, 'research', 'r-step5-closure.json'), `${JSON.stringify({
      version: 2, run: 'r', status: 'closed', artifacts: receiptArtifacts,
      step5_published_rows_sha256: sha('[]'), step5_published_rows_count: 0,
      step5_ledger_rows_sha256: sha(JSON.stringify(ledgerRows)), step5_ledger_rows_count: 1,
      final_item_hashes: { 'thm-x': 'historical' },
    })}\n`);
    const verify = () => spawnSync(process.execPath,
      [TOOL, 'verify', '--run', 'r', '--root', root], { cwd: root, encoding: 'utf8' });
    assert.equal(verify().status, 0);

    writeFileSync(join(root, 'items', 'thm-x.md'), 'later Step-7 repair\n');
    assert.equal(verify().status, 0, 'later stages may change items without rewriting Step-5 history');

    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify({
      ...ledgerRows[0], subject: 'retargeted-subject',
    })}\n`);
    let result = verify();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /defect-ledger rows changed/);

    writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), `${JSON.stringify(ledgerRows[0])}\n`);
    writeFileSync(join(root, 'research', 'r-alpha-a-5a.md'), '# rewritten report\n');
    result = verify();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /alpha-a-5a\.md changed/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
