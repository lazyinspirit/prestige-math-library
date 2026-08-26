// Every dispatched prompt must carry its own identity — run, role, label,
// covers — and an empty engine-supplied var must not erase a deliberately
// generic placeholder.
//
// WHY. briefs/alpha.md told each group Alpha "your dispatch names the batches
// you own" while nothing in the rendered prompt carried them: `--covers` went
// only to the result record, the group letter was never a substituted var, and
// the generic fallback task file pointed at its own appended section for the
// answer. Worse, the engine passes `--var i={unit}` with unit='' on every
// multi-batch dispatch, and dispatch.mjs replaced `<i>` with the empty string
// — turning "research/<run>-batch-<i>.pages.json ... for each of your
// batches" into a path that does not exist. dispatch.mjs's own comment says
// `<i>` is deliberately generic in that brief; an empty value must mean "not
// pinned", never "erase it".
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chmodSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? fileURLToPath(new URL('../../..', import.meta.url)).replace(/\/$/, '');
const dispatch = (args: string[]) => {
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'dispatch.mjs'), ...args, '--dry-run', '--json'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 0, r.stderr.slice(0, 500));
  return JSON.parse(r.stdout);
};

const brief = (text: string): string => {
  const p = join(mkdtempSync(join(tmpdir(), 'brief-')), 'brief.md');
  writeFileSync(p, text);
  return p;
};

test('the rendered prompt carries a This-dispatch identity block, task or no task', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('# B\nDo the work.\n'),
    '--label', 'probe-1', '--run', 'frontier-99', '--covers', '2,3,7']);
  assert.ok(typeof out.prompt === 'string', '--dry-run --json must expose the rendered prompt');
  assert.match(out.prompt, /# This dispatch/);
  assert.match(out.prompt, /run: frontier-99/);
  assert.match(out.prompt, /role: reader/);
  assert.match(out.prompt, /label: probe-1/);
  assert.match(out.prompt, /covers: 2, 3, 7/);
});

test('<covers> substitutes to the covered units', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('Own batches <covers> only.\n'),
    '--label', 'probe-2', '--run', 'frontier-99', '--covers', '1,4']);
  assert.match(out.prompt, /Own batches 1,4 only\./);
});

test('an empty --var value leaves the generic placeholder intact instead of erasing it', () => {
  const out = dispatch(['--role', 'reader',
    '--brief', brief('For each batch read research/<run>-batch-<i>.pages.json.\n'),
    '--label', 'probe-3', '--run', 'frontier-99', '--var', 'i=']);
  assert.match(out.prompt, /research\/frontier-99-batch-<i>\.pages\.json/,
    'i= (empty) erased <i> and produced research/frontier-99-batch-.pages.json');
});

test('task templates are rendered after they are appended to the prompt', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('# Reader\n'),
    '--task', brief('Read research/<run>-render-initial.json.\n'),
    '--label', 'probe-task', '--run', 'frontier-99']);
  assert.match(out.prompt, /research\/frontier-99-render-initial\.json/);
  assert.doesNotMatch(out.prompt, /<run>/);
});

test('unsupported Codex output schemas fail locally during dry-run', () => {
  const schema = brief(JSON.stringify({ type: 'array', uniqueItems: true, items: { type: 'string' } }));
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'dispatch.mjs'), '--role', 'reader',
      '--brief', brief('# Reader\n'), '--label', 'bad-schema', '--run', 'frontier-99',
      '--output-schema', schema, '--dry-run'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /uniqueItems is not supported/);
});

test('attempt-aware dry-run names immutable evidence and the stable latest alias', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('# Reader\n'),
    '--label', 'retry-evidence', '--run', 'frontier-99', '--attempt', '2']);
  assert.equal(out.attempt, 2);
  assert.match(out.would_write.log, /reader-retry-evidence\.attempt-2\.log$/);
  assert.match(out.would_write.prompt, /reader-retry-evidence\.attempt-2\.prompt\.md$/);
  assert.match(out.would_write.result, /reader-retry-evidence\.attempt-2\.result\.json$/);
  assert.match(out.would_write.latest_result, /reader-retry-evidence\.result\.json$/);
});

test('an invalid attempt number fails before inference', () => {
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'dispatch.mjs'), '--role', 'reader',
      '--brief', brief('# Reader\n'), '--label', 'bad-attempt', '--run', 'frontier-99',
      '--attempt', '0', '--dry-run'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--attempt must be a positive integer/);
});

test('a manually re-armed attempt cannot overwrite earlier prompt, log, or result evidence', () => {
  const temp = mkdtempSync(join(tmpdir(), 'dispatch-cli-'));
  const fakeCodex = join(temp, 'fake-codex.mjs');
  writeFileSync(fakeCodex, `#!/usr/bin/env node
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => console.log('fake ok ' + input.length));
`);
  chmodSync(fakeCodex, 0o755);
  const run = `dispatch-evidence-${process.pid}-${Date.now()}`;
  const outDir = join(REPO, 'research', `${run}-dispatch`);
  const invoke = () => spawnSync(process.execPath,
    [join(REPO, 'tools', 'dispatch.mjs'), '--role', 'mechanic',
      '--brief', brief('# Mechanic\nReturn a short acknowledgement.\n'),
      '--label', 'retry-preserve', '--run', run, '--attempt', '1', '--timeout', '10'],
    { cwd: REPO, encoding: 'utf8', timeout: 30_000,
      env: { ...process.env, CODEX_BIN: fakeCodex,
        DISPATCH_SLOT_ROOT: join(temp, 'slots') } });
  try {
    const first = invoke();
    assert.equal(first.status, 0, first.stderr);
    const firstResult = join(outDir, 'mechanic-retry-preserve.attempt-1.result.json');
    const firstBytes = readFileSync(firstResult, 'utf8');

    const replay = invoke();
    assert.equal(replay.status, 0, replay.stderr);
    const replayStem = join(outDir, 'mechanic-retry-preserve.attempt-1.replay-2');
    for (const extension of ['prompt.md', 'log', 'result.json']) {
      assert.ok(existsSync(`${replayStem}.${extension}`), `missing replay ${extension}`);
    }
    assert.equal(readFileSync(firstResult, 'utf8'), firstBytes,
      'the re-armed attempt overwrote its first result');
    const latest = JSON.parse(readFileSync(join(outDir, 'mechanic-retry-preserve.result.json'), 'utf8'));
    assert.equal(latest.evidence_tag, '.attempt-1.replay-2');
    assert.equal(latest.ok, true);
    assert.match(latest.tail, /^fake ok /, 'the test must never call a real model CLI');
  } finally {
    rmSync(outDir, { recursive: true, force: true });
    rmSync(temp, { recursive: true, force: true });
  }
});

test('concurrent replays atomically reserve distinct immutable evidence names', async () => {
  const temp = mkdtempSync(join(tmpdir(), 'dispatch-race-'));
  const fake = join(temp, 'fake-model.mjs');
  writeFileSync(fake, `#!/usr/bin/env node
process.stdin.resume();
process.stdin.on('end', () => setTimeout(() => console.log('fake concurrent ok'), 100));
`);
  chmodSync(fake, 0o755);
  const prompt = join(temp, 'brief.md');
  writeFileSync(prompt, '# Mechanic\nReturn a short acknowledgement.\n');
  const run = `dispatch-race-${process.pid}-${Date.now()}`;
  const outDir = join(REPO, 'research', `${run}-dispatch`);
  const invoke = () => new Promise<{ code: number | null; stderr: string }>((resolve) => {
    const child = spawn(process.execPath,
      [join(REPO, 'tools', 'dispatch.mjs'), '--role', 'mechanic', '--brief', prompt,
        '--label', 'same-label', '--run', run, '--attempt', '1', '--timeout', '10'],
      { cwd: REPO, env: { ...process.env, CODEX_BIN: fake,
        DISPATCH_SLOT_ROOT: join(temp, 'slots') }, stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('close', (code) => resolve({ code, stderr }));
  });
  try {
    const outcomes = await Promise.all([invoke(), invoke(), invoke(), invoke()]);
    for (const outcome of outcomes) assert.equal(outcome.code, 0, outcome.stderr);
    const results = readdirSync(outDir)
      .filter((name) => /^mechanic-same-label\.attempt-1(?:\.replay-\d+)?\.result\.json$/.test(name));
    assert.equal(results.length, 4, `colliding dispatches wrote only ${results.join(', ')}`);
    assert.equal(new Set(results.map((name) => JSON.parse(readFileSync(join(outDir, name), 'utf8')).evidence_tag)).size, 4);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
    rmSync(temp, { recursive: true, force: true });
  }
});
