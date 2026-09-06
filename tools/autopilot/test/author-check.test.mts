import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { checkAuthor } from '../../author-check.mts';

test('all author checks run on failure and only changed inputs re-arm the baseline', async () => {
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
    const { stages } = await import('../stages/mathlib.mts');
    const baseline: any = stages.find((entry: any) => entry.id === '6a-baseline');
    const ctx = { repo, run: 'r', dispatchDir: join(repo,'dispatch') };
    const repair = baseline.plan(ctx, ['1'])[0];
    assert.equal(repair.role, 'beta');
    assert.deepEqual(repair.covers, ['1']);
    assert.equal(baseline.plan(ctx, ['1'])[0].label, repair.label, 'no fresh attempt identity for unchanged inputs');
    writeFileSync(join(repo,'tools/rendercheck.mjs'),'process.exitCode = 0;');
    assert.equal(baseline.plan(ctx,['1'])[0].role,'tool','a detector fix re-arms validation without editing correct content');
    assert.equal(await checkAuthor(repo,'r','1'), true);
    writeFileSync(join(repo, 'items/thm-one.md'), 'corrected');
    const check = baseline.plan(ctx, ['1'])[0];
    assert.equal(check.role, 'tool');
    assert.ok(check.argv.includes('--validate-author'));
    assert.ok(baseline.pattern(ctx).test(`tool-${check.label}.result.json`));
  } finally { rmSync(repo, { recursive:true,force:true }); }
});
