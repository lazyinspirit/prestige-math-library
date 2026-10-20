import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

for (const physics of [false, true]) test(`${physics ? 'physics' : 'math'} regeneration deduplicates links and preserves supported source sections`, () => {
  const root = mkdtempSync(join(tmpdir(), 'regen-contract-'));
  try {
    mkdirSync(join(root, 'items'));
    const section = physics ? 'Postulate' : 'Statement';
    writeFileSync(join(root, 'items/lem-source.md'), `---\nid: lem-source\n---\n## ${section}\nThe exact adopted clause.\n`);
    writeFileSync(join(root, 'items/lem-consumer.md'), '---\nid: lem-consumer\n---\n## Facts & Assumptions\n[F1] Use [[lem-source]] and [[lem-source]].\n\n## Proof\n1.1 Apply [F1]. [given, F1]\n');
    const file = join(root, 'contracts.json');
    const risk_review = { status: 'complete', reviewer: 'existing actual review' };
    writeFileSync(file, JSON.stringify({ contracts: { 'lem-consumer': { citations: [], derivations: [], boundaries: [], risk_review } } }));
    const tool = resolve(physics ? 'tools/physics-support/regen-contract-entries.mjs' : 'tools/regen-contract-entries.mjs');
    const result = spawnSync(process.execPath, [tool, file, 'lem-consumer'], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    const entry = JSON.parse(readFileSync(file, 'utf8')).contracts['lem-consumer'];
    assert.equal(entry.citations.length, 1);
    assert.equal(entry.citations[0].source_section, section);
    assert.equal(entry.citations[0].quote, 'The exact adopted clause.');
    assert.deepEqual(entry.citations[0].uses, ['1.1']);
    assert.deepEqual(entry.risk_review, risk_review);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
