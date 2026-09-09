import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

test('risk-report drains large piped JSON and preserves error exits', () => {
  const root = mkdtempSync(join(tmpdir(), 'risk-output-'));
  try {
    mkdirSync(join(root, 'tools'));
    mkdirSync(join(root, 'items'));
    copyFileSync(new URL('../../risk-report.mjs', import.meta.url), join(root, 'tools/risk-report.mjs'));
    writeFileSync(join(root, 'items/thm-fixture.md'), '---\nid: thm-fixture\ndeps: []\n---\n## Statement\nA fixture.\n');
    const path = join(root, 'contracts.json');
    const notes = 'complete review evidence '.repeat(100000);
    writeFileSync(path, JSON.stringify({ version: 1, scope: ['thm-fixture'], contracts: {
      'thm-fixture': { risk_review: { status: 'complete', reviewer: 'fixture', notes } },
    } }));
    const run = (file: string, ...args: string[]) => spawnSync(process.execPath,
      [join(root, 'tools/risk-report.mjs'), file, '--json', ...args],
      { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
    const result = run(path);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(result.stdout).findings[0].risk_review.notes, notes);
    const outside = run(path, '--items', 'missing');
    assert.equal(outside.status, 1);
    assert.equal(JSON.parse(outside.stdout).errors[0].code, 'selection-outside-scope');
    const missing = run(join(root, 'missing.json'));
    assert.equal(missing.status, 1);
    assert.equal(JSON.parse(missing.stdout).errors[0].code, 'contract-read');
    writeFileSync(path, '{}');
    const malformed = run(path);
    assert.equal(malformed.status, 1);
    assert.equal(JSON.parse(malformed.stdout).errors[0].code, 'contract-shape');
    assert.doesNotMatch(malformed.stderr, /TypeError/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
