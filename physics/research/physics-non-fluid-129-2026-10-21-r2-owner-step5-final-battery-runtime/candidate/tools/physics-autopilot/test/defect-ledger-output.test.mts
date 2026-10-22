import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runGate } from '../src/gates.mts';
import { frontierGateBattery } from '../../physics-support/step5-frontier-gate.mjs';
import { freezeFrontier } from '../../physics-support/step5-rounds.mjs';

const tool = fileURLToPath(new URL('../../physics-support/defect-ledger.mjs', import.meta.url));
const pattern = /(\d+) defect row\(s\) checked/.source;
const row = (id, subject, extra = {}) => ({ defect_id: id, run: 'demo', at: '2026-10-21',
  class: 'accuracy', subclass: 'invalid-inference', severity: 'nonfatal', location: 'proof-step',
  subject, caught_at_stage: 'owner', caught_by_role: 'owner', disposition: 'fixed', ...extra });

async function fixture(fn) {
  const repo = mkdtempSync(join(process.env.PHYSICS_GATE_OUTPUT_TEST_ROOT ?? tmpdir(), 'ledger-output-'));
  try {
    mkdirSync(join(repo, 'research/demo-step5-v2'), { recursive: true });
    mkdirSync(join(repo, 'items'));
    const frontier = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['thm-frontier'] }] });
    writeFileSync(join(repo, 'research/demo-step5-v2/frontier.json'), JSON.stringify(frontier));
    for (const id of ['thm-frontier', 'thm-outside']) writeFileSync(join(repo, 'items', `${id}.md`), 'fixture');
    writeFileSync(join(repo, 'adj.jsonl'), '');
    const setRows = rows => {
      writeFileSync(join(repo, 'research/defect-ledger.jsonl'), rows.map(x => JSON.stringify(x)).join('\n'));
      const render = spawnSync(process.execPath, [tool, 'render'], { cwd: repo, encoding: 'utf8' });
      assert.equal(render.status, 0, render.stderr);
    };
    const gate = frontierGateBattery({ repo, run: 'demo' }, [{ id: 'defect-ledger',
      argv: [process.execPath, tool, 'check', '--run', 'demo', '--adjudications', 'adj.jsonl'],
      liveness: { pattern, min: 1, unit: 'defect rows' } }])[0];
    await fn({ repo, setRows, gate });
  } finally { rmSync(repo, { recursive: true, force: true }); }
}

test('native pipe capture retains oversized exact exclusions and actual positive scoped liveness', async () => {
  await fixture(async ({ repo, setRows, gate }) => {
    const outside = Array.from({ length: 147 }, (_, i) => row(`outside-${i}`, 'thm-outside', {
      evidence: [{ path: 'fixture.json', note: `${i}:` + 'evidence '.repeat(1000) }] }));
    const inside = [row('inside-1', 'thm-frontier'), row('inside-2', 'thm-frontier')];
    setRows([...inside, ...outside]);
    const result = await runGate(gate, { cwd: repo });
    assert.equal(result.ok, true, result.why);
    assert.equal(result.checked, inside.length);
    assert.equal(result.code, 0); assert.equal(result.rawCode, 0);
    assert.equal(result.rawOutput, result.output);
    assert.ok(result.output.length > 1_000_000);
    const lines = result.output.trimEnd().split('\n');
    const prefix = 'Step 5 outside findings excluded, not passed: ';
    assert.deepEqual(JSON.parse(lines.find(x => x.startsWith(prefix)).slice(prefix.length)),
      outside.map(evidence => ({ kind: 'ledger-row', evidence })));
    assert.equal(lines.at(-1), 'defect-ledger: 2 defect row(s) checked for demo, 0 error(s)');
    // Ordinary JSON result persistence must preserve all evidence and summary.
    const artifact = join(repo, 'gate-result.json'); writeFileSync(artifact, JSON.stringify(result));
    const restored = JSON.parse(readFileSync(artifact, 'utf8'));
    assert.ok(restored.output === result.output); assert.ok(restored.rawOutput === result.rawOutput);
    assert.equal(restored.checked, inside.length); assert.equal(restored.ok, true);
  });
});

test('zero scoped rows still fail native positive liveness despite full outside evidence', async () => {
  await fixture(async ({ repo, setRows, gate }) => {
    setRows([row('outside', 'thm-outside', { evidence: [{ path: 'fixture', note: 'x'.repeat(400_000) }] })]);
    const result = await runGate(gate, { cwd: repo });
    assert.equal(result.ok, false); assert.equal(result.code, 0);
    assert.match(result.why, /vacuous/); assert.match(result.output, /0 defect row\(s\) checked/);
    assert.ok(result.rawOutput.length > 400_000);
  });
});

test('nonzero errors retain complete oversized stderr and fail before positive liveness', async () => {
  await fixture(async ({ repo, setRows, gate }) => {
    const id = 'bad-' + 'x'.repeat(400_000);
    setRows([row(id, 'thm-frontier', { severity: 'invalid' })]);
    const result = await runGate(gate, { cwd: repo });
    assert.equal(result.ok, false); assert.equal(result.code, 1); assert.equal(result.rawCode, 1);
    assert.ok(result.rawOutput.includes(`ERROR ${id}: severity "invalid" outside the closed enum\n`));
    assert.match(result.output, /1 defect row\(s\) checked for demo, 1 error\(s\)/);
  });
});

test('malformed scoped adjudication and global ledger corruption stay blocking', async () => {
  await fixture(async ({ repo, setRows, gate }) => {
    setRows([row('inside', 'thm-frontier')]);
    writeFileSync(join(repo, 'adj.jsonl'), '{');
    let result = await runGate(gate, { cwd: repo });
    assert.equal(result.ok, false); assert.equal(result.code, 1);
    assert.match(result.output, /unparseable adjudication JSON/);
    writeFileSync(join(repo, 'adj.jsonl'), '');
    writeFileSync(join(repo, 'research/defect-ledger.jsonl'), '{');
    result = await runGate(gate, { cwd: repo });
    assert.equal(result.ok, false); assert.equal(result.code, 1);
    assert.match(result.output, /unparseable jsonl/);
  });
});

test('ordinary native liveness still rejects missing and malformed numeric summaries', async () => {
  for (const output of ['missing', 'defect-ledger: NaN defect row(s) checked', 'defect-ledger: -1 defect row(s) checked']) {
    const result = await runGate({ id: 'probe', argv: [process.execPath, '-e', 'console.log(process.argv[1])', output],
      liveness: { pattern: '^defect-ledger: (\\d+) defect row\\(s\\) checked', min: 1 } }, {});
    assert.equal(result.ok, false); assert.match(result.why, /liveness unreadable/);
  }
});
