import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? fileURLToPath(new URL('../../..', import.meta.url)).replace(/\/$/, '');

test('one pair keeps one Terra session while judging exactly one item per turn', () => {
  const temp = mkdtempSync(join(tmpdir(), 'judge-session-'));
  const fakeCodex = join(temp, 'fake-codex.mjs');
  const calls = join(temp, 'calls.jsonl');
  const canonicalHome = join(temp, 'canonical-home');
  const ledger = join(temp, 'test-judge.jsonl');
  const cost = join(temp, 'cost.jsonl');
  const run = `judge-session-${process.pid}-${Date.now()}`;
  const sessionRoot = join(REPO, '.autopilot', 'sessions', run);
  const sessionId = '11111111-2222-4333-8444-555555555555';
  mkdirSync(canonicalHome);
  writeFileSync(join(canonicalHome, 'auth.json'), '{"test":true}\n');
  writeFileSync(fakeCodex, `#!/usr/bin/env node
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
let prompt = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { prompt += chunk; });
process.stdin.on('end', () => {
  const args = process.argv.slice(2);
  const callNumber = existsSync(process.env.JUDGE_TEST_CALLS)
    ? readFileSync(process.env.JUDGE_TEST_CALLS, 'utf8').split('\\n').filter(Boolean).length + 1 : 1;
  appendFileSync(process.env.JUDGE_TEST_CALLS, JSON.stringify({
    args,
    one_item: prompt.includes('auditing ONE mathematical library item'),
    prompt_has_single_verdict_schema: prompt.includes('{"keep":true|false,"reason"'),
    prompt_has_full_companion: prompt.includes('=== THE COMPANION PAGE'),
  }) + '\\n');
  writeFileSync(join(process.env.CODEX_HOME, 'auth.json'), JSON.stringify({ rotation: callNumber }) + '\\n');
  if (!args.includes('resume')) process.stderr.write('session id: ${sessionId}\\n');
  process.stdout.write('{"keep":true,"reason":"checked this item step by step"}\\n');
});
`);
  chmodSync(fakeCodex, 0o755);

  const env = {
    ...process.env,
    CODEX_BIN: fakeCodex,
    CODEX_HOME: canonicalHome,
    JUDGE_TEST_CALLS: calls,
    JUDGE_LINEUP: 'terra',
    JUDGE_CONCURRENCY_GPT_5_6_TERRA: '1',
  };
  const invoke = (args: string[]) => spawnSync(process.execPath,
    [join(REPO, 'tools', 'judge-sweep.mjs'), '--run', run,
      '--ledger', ledger, '--cost', cost, ...args],
    { cwd: REPO, env, encoding: 'utf8', timeout: 120_000 });

  try {
    const step7 = invoke(['--pages', 'free-groups-and-presentations', '--limit', '2']);
    assert.equal(step7.status, 0, `${step7.stdout}\n${step7.stderr}`);
    const firstRows = readFileSync(ledger, 'utf8').trim().split('\n').map((line) => {
      try { return JSON.parse(line); }
      catch { assert.fail(`invalid verdict ledger row: ${line}`); }
    });
    assert.equal(firstRows.length, 2, 'two selected items must produce two item verdicts');
    assert.notEqual(firstRows[0].id, firstRows[1].id);
    assert.ok(firstRows.every((row) => row.session_pair === 'free-groups-and-presentations'));
    assert.ok(firstRows.every((row) => row.session_id === sessionId));

    const plan = JSON.parse(readFileSync(join(REPO, 'research', 'plan-spec.json'), 'utf8'));
    const page = plan.pages.find((candidate: any) => candidate.id === 'free-groups-and-presentations');
    const targeted = page.items.map((item: any) => item.id).find((id: string) => !firstRows.some((row) => row.id === id));
    assert.ok(targeted, 'fixture pair needs a third item for the Step-8-style targeted resume');
    const step8 = invoke(['--items', targeted]);
    assert.equal(step8.status, 0, `${step8.stdout}\n${step8.stderr}`);

    const otherPage = plan.pages.find((candidate: any) => candidate.kind === 'A'
      && candidate.id !== 'free-groups-and-presentations' && candidate.items?.length);
    const publishedTarget = otherPage.items[0].id;
    const repairs = join(REPO, 'research', `${run}-step8-published-repairs.jsonl`);
    writeFileSync(repairs, `${JSON.stringify({
      kind: 'repaired', id: publishedTarget, found_via: firstRows[0].id,
    })}\n`);
    const publishedStep8 = invoke(['--items', publishedTarget]);
    assert.equal(publishedStep8.status, 0, `${publishedStep8.stdout}\n${publishedStep8.stderr}`);

    const callRows = readFileSync(calls, 'utf8').trim().split('\n').map((line) => JSON.parse(line));
    assert.equal(callRows.length, 4, 'each item must receive its own Terra invocation');
    assert.ok(callRows.every((call) => call.one_item && call.prompt_has_single_verdict_schema
      && call.prompt_has_full_companion),
    'every turn must retain the existing one-item skeptical prompt, one-verdict schema, and companion context');
    assert.equal(callRows[0].args.includes('resume'), false, 'the pair starts one new conversation');
    for (const call of callRows.slice(1)) {
      const resumeAt = call.args.indexOf('resume');
      assert.equal(call.args[resumeAt + 1], sessionId, 'later items must resume the exact pair conversation');
    }
    assert.ok(callRows.every((call) => call.args[call.args.indexOf('--model') + 1] === 'gpt-5.6-terra'),
      'every new or resumed item turn must explicitly remain on Terra');
    assert.deepEqual(JSON.parse(readFileSync(join(canonicalHome, 'auth.json'), 'utf8')), { rotation: 4 },
      'a credential genuinely rotated by a persistent turn must survive for the next pair turn');
    rmSync(repairs, { force: true });
  } finally {
    rmSync(join(REPO, 'research', `${run}-step8-published-repairs.jsonl`), { force: true });
    rmSync(sessionRoot, { recursive: true, force: true });
    rmSync(temp, { recursive: true, force: true });
  }
});

test('the funded Step-8 preflight preserves a genuine Codex credential rotation', () => {
  const temp = mkdtempSync(join(tmpdir(), 'judge-preflight-auth-'));
  const fakeCodex = join(temp, 'fake-codex.mjs');
  const canonicalHome = join(temp, 'canonical-home');
  mkdirSync(canonicalHome);
  writeFileSync(join(canonicalHome, 'auth.json'), '{"rotation":0}\n');
  writeFileSync(fakeCodex, `#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
process.stdin.resume();
process.stdin.on('end', () => {
  writeFileSync(join(process.env.CODEX_HOME, 'auth.json'), '{"rotation":1}\\n');
  if (process.env.JUDGE_TEST_AUTH_WINNER) {
    writeFileSync(process.env.JUDGE_TEST_AUTH_WINNER, '{"rotation":2}\\n');
  }
  process.stdout.write('{"keep":true,"reason":"preflight"}\\n');
});
`);
  chmodSync(fakeCodex, 0o755);
  const invoke = (extraEnv: Record<string, string> = {}) => spawnSync(process.execPath,
    [join(REPO, 'tools', 'tsx-run.mjs'), join(REPO, 'tools', 'judge.mts'),
      '--preflight', '--model', 'gpt-5.6-terra'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000,
      env: { ...process.env, CODEX_BIN: fakeCodex, CODEX_HOME: canonicalHome,
        JUDGE_LINEUP: 'terra', ...extraEnv } });
  try {
    const result = invoke();
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
    assert.deepEqual(JSON.parse(readFileSync(join(canonicalHome, 'auth.json'), 'utf8')), { rotation: 1 });

    writeFileSync(join(canonicalHome, 'auth.json'), '{"rotation":0}\n');
    const winner = invoke({ JUDGE_TEST_AUTH_WINNER: join(canonicalHome, 'auth.json') });
    assert.equal(winner.status, 0, `${winner.stdout}\n${winner.stderr}`);
    assert.deepEqual(JSON.parse(readFileSync(join(canonicalHome, 'auth.json'), 'utf8')), { rotation: 2 },
      'an independently advanced canonical credential must not be overwritten by this call');
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});

test('Step 7 and Step 8 closure reject a current verdict from the wrong Terra conversation', () => {
  const temp = mkdtempSync(join(tmpdir(), 'judge-session-closure-'));
  const run = `judge-session-closure-${process.pid}-${Date.now()}`;
  const pair = 'free-groups-and-presentations';
  const sessionId = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';
  const sessionRoot = join(REPO, '.autopilot', 'sessions', run);
  const sessionHome = join(sessionRoot, 'judge', pair);
  const ledger = join(temp, 'test-judge.jsonl');
  const manifest = join(temp, 'batch.pages.json');
  const receipt = join(temp, 'closure.json');
  const plan = JSON.parse(readFileSync(join(REPO, 'research', 'plan-spec.json'), 'utf8'));
  const page = plan.pages.find((candidate: any) => candidate.id === pair);
  const id = page.items[0].id;
  mkdirSync(sessionHome, { recursive: true });
  writeFileSync(join(sessionHome, 'judge-session.json'), `${JSON.stringify({
    version: 1, pair, model: 'gpt-5.6-terra', session_id: sessionId,
  }, null, 2)}\n`);
  writeFileSync(manifest, `${JSON.stringify([{ id: pair, kind: 'A', items: [{ id }] }])}\n`);
  const hashRun = spawnSync(process.execPath,
    [join(REPO, 'tools', 'tsx-run.mjs'), join(REPO, 'tools', 'judge.mts'), `items/${id}.md`, '--context-hash'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
  assert.equal(hashRun.status, 0, hashRun.stderr);
  const hashes = JSON.parse(hashRun.stdout);
  const row = (session_id: string, at: string) => JSON.stringify({
    id, model: 'gpt-5.6-terra', keep: true, reason: 'checked',
    context_sha256: hashes.context_sha256, item_sha256: hashes.item_sha256,
    session_pair: pair, session_id, at,
  });
  writeFileSync(ledger, `${row('ffffffff-1111-4222-8333-444444444444', '2026-08-26T00:00:00.000Z')}\n`);
  const check = () => spawnSync(process.execPath,
    [join(REPO, 'tools', 'level-coverage.mjs'), '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--judge-session-run', run, '--out', receipt, manifest],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000, env: { ...process.env, JUDGE_LINEUP: 'terra' } });
  try {
    const wrong = check();
    assert.equal(wrong.status, 1, `${wrong.stdout}\n${wrong.stderr}`);
    assert.match(wrong.stderr, /judge-coverage-missing/);
    writeFileSync(ledger, `${row(sessionId, '2026-08-26T00:01:00.000Z')}\n`, { flag: 'a' });
    const exact = check();
    assert.equal(exact.status, 0, `${exact.stdout}\n${exact.stderr}`);
  } finally {
    rmSync(sessionRoot, { recursive: true, force: true });
    rmSync(temp, { recursive: true, force: true });
  }
});
