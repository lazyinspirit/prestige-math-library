import test from 'node:test';
import assert from 'node:assert/strict';
import { runGate } from '../src/gates.mts';
import { freezeFrontier } from '../../step7-rounds.mjs';
import { projectFrontierGate } from '../../step7-frontier-gate.mjs';

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
