import test from 'node:test';
import assert from 'node:assert/strict';
import { runGate } from '../src/gates.mts';
import { freezeFrontier } from '../../physics-support/step7-rounds.mjs';
import { frontierGateBattery, projectFrontierGate } from '../../physics-support/step7-frontier-gate.mjs';

const frontier = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['thm-in'] }] });
test('runner preserves nonzero raw result while recording outside exclusions', async () => {
  const output = JSON.stringify({ errors: [{ id: 'thm-out', code: 'citation-quote-mismatch', message: 'bad quote' }] });
  const result = await runGate({ id: 'proof-contract',
    argv: [process.execPath, '-e', `process.stdout.write(${JSON.stringify(output)});process.exitCode=1`],
    projectResult: (raw:any) => projectFrontierGate('proof-contract', raw, frontier, ['thm-in', 'thm-out']),
  });
  assert.equal(result.ok, true);
  assert.equal(result.code, 0);
  assert.equal(result.rawCode, 1);
  assert.equal(result.rawOutput, output);
  assert.match(result.why!, /excluded, not passed/);
});
test('runner refuses liveness supported only by outside judge pairs', async () => {
  const output = JSON.stringify({ errors: [], judge_coverage: [{ id: 'thm-out' }] });
  const result = await runGate({ id: 'judge-closure',
    argv: [process.execPath, '-e', `process.stdout.write(${JSON.stringify(output)})`],
    liveness: { pattern: '"frontier_judge_complete":(\\d+)', min: 1 },
    projectResult: (raw:any) => projectFrontierGate('judge-closure', raw, frontier, ['thm-in', 'thm-out']),
  });
  assert.equal(result.ok, false);
  assert.match(result.why!, /vacuous/);
});

test('Step 7 retains scoped adapter arguments and accepts physical frontier IDs', async t => {
  const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = await import('node:fs');
  const { join } = await import('node:path');
  const { tmpdir } = await import('node:os');
  const root = mkdtempSync(join(tmpdir(), 'physics-step7-adapter-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research/demo-step7-v2'); mkdirSync(dir, { recursive: true }); mkdirSync(join(root, 'items'));
  writeFileSync(join(root, 'items/pthm-in.md'), '---\nid: pthm-in\nstatus: draft\n---\n');
  writeFileSync(join(dir, 'frontier.json'), JSON.stringify(freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['pthm-in'] }] })));
  for (const id of ['precheck', 'rendercheck', 'prosecheck']) {
    const argv = ['node', 'tools/physics-support/frontier-item-gate.mjs', '--run', 'demo', '--tool', id, '--'];
    const [gate] = frontierGateBattery({ repo: root, run: 'demo' }, [{ id, argv }]);
    assert.deepEqual(gate.argv, argv, 'no positional files may become flags after adapter delimiter');
  }
});
