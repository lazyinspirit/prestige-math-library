import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { commandDefinesFlag, commandFlagSources, flagsOf } from '../src/doctor.mts';

const defines = (sources: string[], flag: string) => commandDefinesFlag(sources, flag);

test('numeric flag tokens stay complete and prefixes or unknown flags fail closed', () => {
  assert.deepEqual(flagsOf('node tool --step6-scope --step6-scope --run demo'), ['--step6-scope', '--run']);
  const sources = ["args.includes('--step6-scope'); args.includes('--fail-on-dead')"];
  assert.ok(defines(sources, '--step6-scope'));
  for (const flag of ['--step', '--step6', '--fail', '--step6-unknown', '--step6-scopeX', '--step6-scope_extra', '--unknown']) assert.equal(defines(sources, flag), false, flag);
});

test('real physics finalizer exposes only its invoked native CLI flags', () => {
  const sources = commandFlagSources(new URL('../../physics-support/step6-finalize.mjs', import.meta.url).pathname);
  for (const flag of ['--run', '--validated-stage', '--final-receipt']) assert.ok(defines(sources, flag), flag);
  for (const flag of ['--validated', '--final', '--unknown']) assert.equal(defines(sources, flag), false, flag);
});

test('native scope tool declares its prerequisite lifecycle binding flag', () => {
  const sources = commandFlagSources(new URL('../../physics-support/batch-scope-review.mjs', import.meta.url).pathname);
  assert.ok(defines(sources, '--prerequisite-lifecycle-sha256'));
  assert.equal(defines(sources, '--prerequisite-lifecycle'), false);
});

test('delegation excludes other exports, uncalled imports and calls inside helpers', t => {
  const dir = mkdtempSync(join(tmpdir(), 'physics-doctor-flags-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  writeFileSync(join(dir, 'implementation.mjs'), `
    export function runActualCLI() { process.argv.includes('--actual2-scope'); }
    export function runUncalledCLI() { process.argv.includes('--uncalled'); }
    export function unrelatedHelper() { process.argv.includes('--helper'); }
  `);
  const wrapper = join(dir, 'wrapper.mjs');
  writeFileSync(wrapper, `
    import { runActualCLI as cli, runUncalledCLI } from './implementation.mjs';
    function unused() { runUncalledCLI(); }
    await cli();
  `);
  const sources = commandFlagSources(wrapper);
  assert.ok(defines(sources, '--actual2-scope'));
  for (const flag of ['--actual', '--uncalled', '--helper', '--unknown']) assert.equal(defines(sources, flag), false, flag);
});
