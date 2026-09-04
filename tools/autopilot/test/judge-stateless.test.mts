import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validateCodexOutputSchema } from '../../codex-output-schema.mjs';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? fileURLToPath(new URL('../../..', import.meta.url)).replace(/\/$/, '');

test('the judge verdict schema is accepted by the Codex dispatcher rules', () => {
  const schema = JSON.parse(readFileSync(join(REPO, 'briefs', 'schemas', 'judge-verdict.json'), 'utf8'));
  assert.deepEqual(validateCodexOutputSchema(schema), []);
});

const fixture = (mode = 'ok') => {
  const temp = mkdtempSync(join(tmpdir(), 'judge-stateless-'));
  const fakeCodex = join(temp, 'fake-codex.mjs');
  const calls = join(temp, 'calls.jsonl');
  const home = join(temp, 'home');
  mkdirSync(home);
  writeFileSync(join(home, 'auth.json'), '{"test":true}\n');
  writeFileSync(fakeCodex, `#!/usr/bin/env node
import { appendFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
let prompt = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { prompt += chunk; });
process.stdin.on('end', () => {
  const args = process.argv.slice(2);
  appendFileSync(process.env.JUDGE_TEST_CALLS, JSON.stringify({
    args, prompt_chars: prompt.length,
    target_blocks: prompt.split('=== ITEM UNDER AUDIT (FULL TEXT) ===').length - 1,
    interface_blocks: prompt.split('=== A/B PAIR INTERFACES').length - 1,
    proof_headings: prompt.split('\\n## Proof').length - 1,
  }) + '\\n');
  if (${JSON.stringify(mode)} === 'outage') {
    process.stderr.write('You have hit your usage limit; resets later\\n');
    process.exit(1);
  }
  if (${JSON.stringify(mode)} === 'rotate') {
    writeFileSync(join(process.env.CODEX_HOME, 'auth.json'), '{"rotation":1}\\n');
  }
  const outAt = args.indexOf('--output-last-message');
  writeFileSync(args[outAt + 1], '{"keep":true,"reason":"checked target and pair interfaces"}\\n');
  process.stdout.write(JSON.stringify({ type: 'turn.completed', usage: {
    input_tokens: 123, cached_input_tokens: 23, output_tokens: 7,
  } }) + '\\n');
});
`);
  chmodSync(fakeCodex, 0o755);
  return { temp, fakeCodex, calls, home };
};

const pairItems = () => {
  const plan = JSON.parse(readFileSync(join(REPO, 'research', 'plan-spec.json'), 'utf8'));
  const page = plan.pages.find((candidate: any) => candidate.kind === 'A' && candidate.items?.length >= 2);
  assert.ok(page, 'fixture needs an A page with two items');
  return page.items.slice(0, 2).map((item: any) => item.id);
};

test('the sweep gives each item a fresh compact Terra call and records real usage', () => {
  const f = fixture();
  const ledger = join(f.temp, 'judge.jsonl');
  const cost = join(f.temp, 'cost.jsonl');
  const [first, second] = pairItems();
  try {
    const result = spawnSync(process.execPath, [
      join(REPO, 'tools', 'judge-sweep.mjs'), '--run', 'test-run',
      '--ledger', ledger, '--cost', cost, '--items', `${first},${second}`,
    ], {
      cwd: REPO, encoding: 'utf8', timeout: 120_000,
      env: { ...process.env, CODEX_BIN: f.fakeCodex, CODEX_HOME: f.home,
        JUDGE_TEST_CALLS: f.calls, JUDGE_LINEUP: 'terra',
        JUDGE_CONCURRENCY_GPT_5_6_TERRA: '1' },
    });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

    const calls = readFileSync(f.calls, 'utf8').trim().split('\n').map((line) => JSON.parse(line));
    assert.equal(calls.length, 2, 'one process call per item');
    for (const call of calls) {
      assert.ok(call.args.includes('--ephemeral'));
      assert.ok(!call.args.includes('resume'), 'item calls never inherit chat history');
      assert.equal(call.args[call.args.indexOf('--model') + 1], 'gpt-5.6-terra');
      assert.ok(call.args.includes('model_reasoning_effort="xhigh"'));
      assert.ok(call.args.includes('model_context_window=872000'));
      assert.equal(call.target_blocks, 1, 'one full target item per judge');
      assert.equal(call.interface_blocks, 1, 'compact A/B awareness is retained');
      assert.ok(call.proof_headings <= 1, 'a sibling proof must not enter the prompt');
      assert.ok(call.prompt_chars < 100_000, `unexpectedly large prompt: ${call.prompt_chars}`);
    }

    const verdicts = readFileSync(ledger, 'utf8').trim().split('\n').map((line) => JSON.parse(line));
    assert.deepEqual(new Set(verdicts.map((row) => row.id)), new Set([first, second]));
    assert.ok(verdicts.every((row) => !('session_id' in row) && !('session_pair' in row)));
    const costs = readFileSync(cost, 'utf8').trim().split('\n').map((line) => JSON.parse(line));
    assert.ok(costs.every((row) => row.pt === 123 && row.cached_pt === 23 && row.ct === 7));
    assert.ok(costs.every((row) => row.prompt_chars > row.item_chars));
  } finally {
    rmSync(f.temp, { recursive: true, force: true });
  }
});

test('an ephemeral call preserves a genuinely refreshed credential', () => {
  const f = fixture('rotate');
  const [id] = pairItems();
  try {
    const result = spawnSync(process.execPath, [
      join(REPO, 'tools', 'tsx-run.mjs'), join(REPO, 'tools', 'judge.mts'),
      `items/${id}.md`, '--model', 'gpt-5.6-terra',
    ], {
      cwd: REPO, encoding: 'utf8', timeout: 120_000,
      env: { ...process.env, CODEX_BIN: f.fakeCodex, CODEX_HOME: f.home,
        JUDGE_TEST_CALLS: f.calls, JUDGE_LINEUP: 'terra' },
    });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
    assert.deepEqual(JSON.parse(readFileSync(join(f.home, 'auth.json'), 'utf8')), { rotation: 1 });
  } finally {
    rmSync(f.temp, { recursive: true, force: true });
  }
});

test('a provider usage limit stops the sweep without manufacturing a verdict', () => {
  const f = fixture('outage');
  const ledger = join(f.temp, 'judge.jsonl');
  const cost = join(f.temp, 'cost.jsonl');
  const [first, second] = pairItems();
  try {
    const result = spawnSync(process.execPath, [
      join(REPO, 'tools', 'judge-sweep.mjs'), '--ledger', ledger, '--cost', cost,
      '--items', `${first},${second}`,
    ], {
      cwd: REPO, encoding: 'utf8', timeout: 120_000,
      env: { ...process.env, CODEX_BIN: f.fakeCodex, CODEX_HOME: f.home,
        JUDGE_TEST_CALLS: f.calls, JUDGE_LINEUP: 'terra',
        JUDGE_CONCURRENCY_GPT_5_6_TERRA: '1' },
    });
    assert.equal(result.status, 3, `${result.stdout}\n${result.stderr}`);
    assert.match(result.stderr, /usage\/rate limit detected/);
    assert.equal(readFileSync(f.calls, 'utf8').trim().split('\n').length, 1,
      'no second item starts after a funded-lane outage');
    assert.equal(existsSync(ledger), false, 'an infrastructure failure is not a mathematical verdict');
  } finally {
    rmSync(f.temp, { recursive: true, force: true });
  }
});
