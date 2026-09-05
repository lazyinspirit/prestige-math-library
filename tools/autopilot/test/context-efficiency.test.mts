import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { readDispatchUsage } from '../../dispatch-usage.mjs';
import { scopedGateOutput } from '../src/repair-evidence.mts';

const REPO = join(import.meta.dirname, '../../..');

test('usage excludes resumed history and repeated events and counts actual request peaks', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'dispatch-usage-'));
  try {
    const file = join(dir, 'rollout.jsonl');
    const event = (timestamp: string, input: number, cache: number, output: number, last: number) => ({
      timestamp, type: 'event_msg', payload: { type: 'token_count', info: {
        total_token_usage: { input_tokens: input, cached_input_tokens: cache, output_tokens: output },
        last_token_usage: { input_tokens: last },
      } },
    });
    const second = event('2026-09-05T01:02:00Z', 700000, 600000, 300, 280000);
    writeFileSync(file, [
      event('2026-09-05T00:00:00Z', 300000, 250000, 100, 300000),
      event('2026-09-05T01:01:00Z', 420000, 350000, 200, 120000),
      second, second,
      { timestamp: '2026-09-05T01:03:00Z', type: 'compacted' },
      { timestamp: '2026-09-05T01:03:00Z', type: 'event_msg', payload: { type: 'token_count', info: null } },
    ].map((r) => JSON.stringify(r)).join('\n'));
    const result: any = await readDispatchUsage(file, '2026-09-05T01:00:00Z');
    assert.equal(result.input_tokens, 400000);
    assert.equal(result.cached_input_tokens, 350000);
    assert.equal(result.output_tokens, 200);
    assert.equal(result.observed_requests, 2);
    assert.equal(result.max_request_input_tokens, 280000);
    assert.equal(result.requests_over_272k, 1);
    assert.equal(result.compactions, 1);
    assert.equal((await readDispatchUsage(null, '2026-09-05T01:00:00Z')).available, false);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('diagnostic filtering preserves owned proofs, continuation lines, cross-owner and unknown evidence', () => {
  const input = [
    'proof-contract: 4 errors',
    'ERROR citation [thm-other]: unrelated', '    continuation to exclude',
    'ERROR citation [thm-own]: exact hypothesis', '    continuation to preserve',
    'ERROR citation [thm-other]: depends on thm-own', '    cross-owner continuation',
    '  thm-other  [empty]', '    unrelated boundary evidence',
    '  thm-own  [empty]', '    exact boundary evidence',
    'ERROR citation [thm-unknown]: unowned obligation',
    'UNPARSED diagnostic must survive',
  ].join('\n');
  const out = scopedGateOutput(input, new Set(['thm-own']), new Set(['thm-own', 'thm-other']));
  assert.doesNotMatch(out, /unrelated|continuation to exclude/);
  assert.match(out, /exact hypothesis\n    continuation to preserve/);
  assert.match(out, /depends on thm-own\n    cross-owner continuation/);
  assert.match(out, /exact boundary evidence/);
  assert.match(out, /unowned obligation/);
  assert.match(out, /UNPARSED/);
  assert.equal(scopedGateOutput(input, new Set(['thm-own', 'thm-other']), new Set(['thm-own', 'thm-other'])), input);
});

test('ordinary and read-only agents compact at 200k; final adjudicators retain defaults', () => {
  for (const role of ['beta', 'reader', 'refuter', 'alpha', 'alpha-report', 'final-adjudicator']) {
    const result = spawnSync(process.execPath, [
      'tools/dispatch.mjs', '--role', role, '--brief', 'briefs/alpha.md',
      '--task', 'briefs/tasks/final-adjudicator-step8.md', '--run', 'context-test',
      '--label', 'context-test', '--dry-run', '--json',
    ], { cwd: REPO, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const row = JSON.parse(result.stdout);
    assert.match(row.prompt, /After compaction or handoff, reread/);
    if (row.sandbox === 'read-only') assert.match(row.prompt, /do not write checkpoints or extra files/);
    if (role === 'final-adjudicator') {
      assert.equal(row.auto_compact_token_limit, null);
      assert.doesNotMatch(row.command, /model_auto_compact_token_limit/);
    } else {
      assert.equal(row.auto_compact_token_limit, 200000);
      assert.match(row.command, /model_auto_compact_token_limit=200000/);
      assert.match(row.command, /model_auto_compact_token_limit_scope="total"/);
    }
  }
});
