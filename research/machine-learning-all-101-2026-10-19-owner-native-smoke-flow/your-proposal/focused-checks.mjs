import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { flowMatchingMLChecks as checks } from './finite-smoke-ml101-flow.mjs';
const dir = new URL('.', import.meta.url), packet = JSON.parse(fs.readFileSync(new URL('packet.json', dir)));
const outcomes = [], invalid = [], mutations = [];
for (const operation of packet.operations) {
  const smoke = operation.after[0], cb = checks[smoke.check], outcome = cb(smoke);
  assert.equal(outcome.ok, true, `${smoke.check}: ${outcome.summary}`);
  assert.equal(fs.readFileSync(operation.source_guard.path, 'utf8').includes(smoke.asserts), true);
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(operation.source_guard.path)).digest('hex'), operation.source_guard.raw_sha256);
  assert.equal(smoke.claim, operation.before[0].claim);
  assert.equal(smoke.checked_in, operation.before[0].checked_in);
  outcomes.push({ check: smoke.check, ...outcome });
  for (const [caseName, bad] of [
    ['null', null], ['array', []], ['scalar', 1],
    ['wrong-fixture', { ...smoke, fixture: 'unsupported' }],
    ['wrong-check', { ...smoke, check: 'unsupported' }],
    ['out-of-fixture-input', { ...smoke, t: 1.1 }],
    ['tolerance-override', { ...smoke, tolerance: 1 }]
  ]) {
    const rejected = cb(bad);
    assert.equal(rejected.ok, false, `${smoke.check} accepted ${caseName}`);
    invalid.push({ check: smoke.check, case: caseName, ...rejected });
  }
}
const source = fs.readFileSync(new URL('finite-smoke-ml101-flow.mjs', dir), 'utf8');
// In-memory mutants validate that arithmetic checks actually reject errors.
// They neither modify the proposed module nor exercise the active registry.
for (const [name, before, after, expectedRejects] of [
 ['wrong-normalizer', 'Math.sqrt(2 * Math.PI)', 'Math.sqrt(4 * Math.PI)', ['single-endpoint-mixture', 'stationary-standard-gaussian', 'scalar-rational-endpoint-cost', 'two-point-symmetric-mixture']],
 ['reversed-scale-velocity', '(s - 1) * (x - t * a)', '(1 - s) * (x - t * a)', ['single-endpoint-marginal-pde', 'scalar-rational-endpoint-cost']],
 ['absolute-instead-of-squared-cost', '(a + xs[j] - xs[i]) ** 2', 'Math.abs(a + xs[j] - xs[i])', ['unit-scale-boundary']]
]) {
 assert.equal(source.split(before).length, 2, 'mutant must replace exactly one literal');
 const data = `data:text/javascript;base64,${Buffer.from(source.replace(before, after)).toString('base64')}`;
 const mod = await import(data);
 for (const suffix of expectedRejects) {
   const check = `ml101-flow-${suffix}`, outcome = mod.flowMatchingMLChecks[check]({ check });
   assert.equal(outcome.ok, false, `${name} not detected by ${check}`);
   mutations.push({ mutant: name, check, ...outcome });
 }
}
const report = { kind: 'focused-staged-callback-checks', recorded_at: new Date().toISOString(), valid_callbacks: outcomes, invalid_selector_rejections: invalid, in_memory_arithmetic_mutant_rejections: mutations, all_passed: true, native_registry_executed: false, gates_run: [], limitations: 'These focused checks test only the staged six callbacks and their guarded literal bindings. They supply no native gate, proof, or coverage credit.' };
fs.writeFileSync(new URL('focused-results.json', dir), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ valid: outcomes.length, invalid_rejected: invalid.length, arithmetic_mutants_rejected: mutations.length, all_passed: true }));
