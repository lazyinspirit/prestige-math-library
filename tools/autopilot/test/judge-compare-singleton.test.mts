// Step 10 must classify the active singleton judge directly. The old reporter
// destructured two models, so a complete Terra verdict was silently reported
// as incomplete after the owner retired DeepSeek from the judge lineup.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('judge-compare treats Terra as the complete configured judge set', () => {
  const dir = mkdtempSync(join(tmpdir(), 'judge-compare-singleton-'));
  const ledger = join(dir, 'judge.jsonl');
  const adjudications = join(dir, 'adjudications.jsonl');
  const terra = 'gpt-5.6-terra';
  const context = (digit: string) => digit.repeat(64);
  try {
    writeFileSync(ledger, [
      { id: 'itm-pass', model: terra, keep: true, context_sha256: context('a') },
      { id: 'itm-reject', model: terra, keep: false, context_sha256: context('b') },
      { id: 'itm-null', model: terra, keep: null, context_sha256: context('c') },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(adjudications, `${JSON.stringify({
      id: 'itm-reject', model: terra, context_sha256: context('b'),
      outcome: 'confirmed_fatal', defect_type: 'logic',
    })}\n`);

    const result = spawnSync(process.execPath,
      ['tools/judge-compare.mjs', ledger, '--adjudications', adjudications],
      { cwd: REPO, encoding: 'utf8', env: { ...process.env, JUDGE_LINEUP: 'terra' } });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.deepEqual(report.lineup, { name: 'terra', models: [terra] });
    assert.deepEqual(report.latest_attempt_agreement, {
      all_pass: ['itm-pass'],
      all_reject: ['itm-reject'],
      mixed: [],
      incomplete_or_null: ['itm-null'],
    });
    assert.deepEqual(report.latest_usable_verdict_agreement,
      report.latest_attempt_agreement);
    assert.deepEqual(report.latest_context_integrity, {
      fully_attested_frozen_context: ['itm-null', 'itm-pass', 'itm-reject'],
      mismatched_or_unattested_context: [],
    });
    assert.equal(report.adjudicated_detection_effectiveness.status, 'complete');
    assert.equal(report.adjudicated_detection_effectiveness.models[terra].confirmed_fatal, 1);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
