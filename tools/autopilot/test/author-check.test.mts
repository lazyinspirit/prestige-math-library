import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { checkAuthor, authorInputs } from '../../author-check.mts';

test('author diagnostics retain all failures and detect changed inputs without a 6A stage', async () => {
  const repo = mkdtempSync(join(tmpdir(), 'author-check-'));
  try {
    for (const dir of ['research','items','library/test','tools']) mkdirSync(join(repo, dir), { recursive: true });
    writeFileSync(join(repo, 'research/r-batch-1.pages.json'), JSON.stringify([{id:'p',category:'test',items:[{id:'thm-one'}]}]));
    writeFileSync(join(repo, 'research/r-batch-1.proof-contracts.json'), '{}');
    writeFileSync(join(repo, 'items/thm-one.md'), 'original');
    writeFileSync(join(repo, 'library/test/p.md'), 'page');
    for (const tool of ['tsx-run','rendercheck','content-policy','proof-contract']) {
      writeFileSync(join(repo, `tools/${tool}.mjs`), `process.exitCode = ${tool === 'rendercheck' ? 1 : 0};`);
    }
    assert.equal(await checkAuthor(repo, 'r', '1'), false);
    const report = JSON.parse(readFileSync(join(repo, 'research/r-author-check-1.json'), 'utf8'));
    assert.equal(report.results.length, 4);
    assert.equal(report.results.filter((entry: any) => !entry.ok).length, 1);
    const before = authorInputs(repo, 'r', '1').fingerprint;
    assert.equal(authorInputs(repo, 'r', '1').fingerprint, before);
    writeFileSync(join(repo, 'tools/rendercheck.mjs'), 'process.exitCode = 0;');
    assert.notEqual(authorInputs(repo, 'r', '1').fingerprint, before);
    assert.equal(await checkAuthor(repo, 'r', '1'), true);
    const corrected = authorInputs(repo, 'r', '1').fingerprint;
    writeFileSync(join(repo, 'items/thm-one.md'), 'corrected');
    assert.notEqual(authorInputs(repo, 'r', '1').fingerprint, corrected);

  } finally { rmSync(repo, { recursive:true,force:true }); }
});
