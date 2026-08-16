// The adapter owns the child's whole lifecycle: timeout, and the process TREE.
//
// WHY. invoke() had no timer at all — `plan.timeout` was only a template
// variable, so every tool lane (the judge sweep included) could hang forever
// while the heartbeat reported "still running"; blockedTicks never moved and
// nothing ever fired. And the child was spawned in the engine's own process
// group with abort delivering SIGTERM to the direct child only — the direct
// child is a dispatcher, the agent is its grandchild, and the grandchild
// survived: the recorded two-writers-on-plan-spec incident, probe-verified.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const grandchildFixture = () => {
  // wrapper spawns a ticking grandchild (same group, like dispatch.mjs's
  // agent), then waits forever.
  const dir = mkdtempSync(join(tmpdir(), 'exec-'));
  const ticks = join(dir, 'ticks');
  const wrapper = join(dir, 'wrapper.mjs');
  writeFileSync(wrapper, `
    import { spawn } from 'node:child_process';
    const g = spawn(process.execPath, ['-e',
      'setInterval(() => require("node:fs").appendFileSync(process.env.TICKS, "t"), 150)'],
      { stdio: 'ignore', env: { ...process.env } });
    setInterval(() => {}, 1000);
  `);
  return { ticks, wrapper };
};

test('a hung child resolves ok:false at the timeout instead of hanging the run', async () => {
  const { makeExecAdapter } = await import('../src/adapters/exec.mts');
  const adapter = makeExecAdapter({ argv: ['node', '-e', 'setInterval(() => {}, 1000)'] });
  const result = await Promise.race([
    adapter.invoke({}, { timeoutMs: 700, killGraceMs: 500 }),
    sleep(8000).then(() => 'HUNG'),
  ]);
  assert.notEqual(result, 'HUNG', 'no timeout fired; the promise would sit in inflight forever');
  assert.equal((result as any).ok, false);
  assert.match((result as any).error, /timeout/);
});

test('the timeout kills the whole process group, grandchild included', async () => {
  const { makeExecAdapter } = await import('../src/adapters/exec.mts');
  const { ticks, wrapper } = grandchildFixture();
  const adapter = makeExecAdapter({ argv: ['node', wrapper], env: { TICKS: ticks } });
  const result = await Promise.race([
    adapter.invoke({}, { timeoutMs: 900, killGraceMs: 500 }),
    sleep(10_000).then(() => 'HUNG'),
  ]);
  assert.notEqual(result, 'HUNG');
  await sleep(800);
  const size = existsSync(ticks) ? readFileSync(ticks, 'utf8').length : 0;
  await sleep(700);
  const after = existsSync(ticks) ? readFileSync(ticks, 'utf8').length : 0;
  assert.equal(after, size, `the grandchild is still ticking (${size} -> ${after}) — orphaned agent`);
});

test('abort kills the whole process group too', async () => {
  const { makeExecAdapter } = await import('../src/adapters/exec.mts');
  const { ticks, wrapper } = grandchildFixture();
  const adapter = makeExecAdapter({ argv: ['node', wrapper], env: { TICKS: ticks } });
  const ac = new AbortController();
  const pending = Promise.race([
    adapter.invoke({}, { signal: ac.signal, killGraceMs: 500 }),
    sleep(10_000).then(() => 'HUNG'),
  ]);
  await sleep(600);
  ac.abort();
  const result = await pending;
  assert.notEqual(result, 'HUNG');
  await sleep(800);
  const size = existsSync(ticks) ? readFileSync(ticks, 'utf8').length : 0;
  await sleep(700);
  const after = existsSync(ticks) ? readFileSync(ticks, 'utf8').length : 0;
  assert.equal(after, size, `the grandchild survived the abort (${size} -> ${after}) — the two-writers incident`);
});
