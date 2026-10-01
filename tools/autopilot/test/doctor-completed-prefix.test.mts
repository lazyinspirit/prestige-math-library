import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { doctor } from '../src/doctor.mts';

function fixture(t: any, { pendingFails = false, completedBadFlag = false, badSpec = false } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'doctor-prefix-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['tools', 'research', 'state']) mkdirSync(join(repo, dir));
  writeFileSync(join(repo, 'tools/run-tasks.mjs'), '// Fixture has no task files.\n');
  writeFileSync(join(repo, 'tools/dispatch.mjs'), '// --role --attempt --known\n');
  writeFileSync(join(repo, 'research/r-scope-ledger.json'), JSON.stringify({ pages: [] }));
  const stateDir = join(repo, 'state');
  const state: any = { version: 1, run: 'r', workflowRevision: 'fixture-v1', startedAt: '2026-01-01T00:00:00Z',
    stage: '5a-adjudicate', stages: {
      '3b-author': { enteredAt: '2026-01-01T00:00:01Z',
        gatesPassedAt: '2026-01-01T00:00:02Z', doneAt: '2026-01-01T00:00:02Z' },
    } };
  const write = (value: any = state) => writeFileSync(join(stateDir, 'state.json'), JSON.stringify(value));
  write();
  const stagesPath = 'data:text/javascript,' + encodeURIComponent(`
    export const workflowRevision = 'fixture-v1';
    export const stages = [
      { id: '3b-author', pattern: /^author$/, units: () => { throw Error('historical mutable units'); },
        ${badSpec ? '' : "plan: () => { throw Error('stale post-Step5 dependency_level'); },"}
        unitPrerequisites: () => [],
        gates: () => [{ id: 'old-gate', argv: ['node', 'tools/dispatch.mjs', '${completedBadFlag ? '--missing' : '--known'}'] }] },
      { id: '5a-adjudicate', pattern: /^adjudicate$/, units: () => ['current'],
        plan: () => { ${pendingFails ? "throw Error('current plan broken');" : 'return [];'} },
        gates: () => [{ id: 'current-gate', argv: ['node', 'tools/dispatch.mjs', '--known'] }] }
    ];
  `);
  const config = { stateDir, run: 'r', argv: ['node', 'tools/dispatch.mjs', '--role', '{role}', '--attempt', '{attempt}'] };
  const check = (override: any = {}) => doctor({ repo, run: 'r', stagesPath, config: { ...config, ...override } });
  return { state, write, check };
}

test('restart omits dynamic historical plans/units only for a durable completed prefix', async t => {
  const f = fixture(t);
  const result = await f.check();
  assert.deepEqual(result.problems, []);
  assert.match(result.notes.join('\n'), /durably completed prefix.*3b-author/);
  const fresh = await f.check({ stateDir: undefined });
  assert.ok(fresh.problems.some(p => /3b-author: units\(\) threw/.test(p)));
  assert.ok(fresh.problems.some(p => /stale post-Step5 dependency_level/.test(p)));
});

test('completed restart keeps current plans and historical static spec/gate flags checked', async t => {
  const current = await fixture(t, { pendingFails: true }).check();
  assert.ok(current.problems.some(p => /current plan broken/.test(p)));
  const flags = await fixture(t, { completedBadFlag: true }).check();
  assert.ok(flags.problems.some(p => /3b-author\/old-gate.*defines no --missing/.test(p)));
  const spec = await fixture(t, { badSpec: true }).check();
  assert.ok(spec.problems.some(p => /stage spec.*3b-author.*needs a.*plan/.test(p)));
});

test('mismatched, malformed, unpassed and nonprefix state never exempts historical checks', async t => {
  for (const mutation of [
    (s: any) => { s.run = 'another-run'; },
    (s: any) => { s.version = 2; },
    (s: any) => { s.workflowRevision = 'another-workflow'; },
    (s: any) => { s.stages['3b-author'].gatesPassedAt = null; },
    (s: any) => { s.stages['3b-author'].doneAt = 'invalid'; },
    (s: any) => { s.stages['3b-author'].doneAt = '2025-01-01T00:00:00Z'; },
    (s: any) => { s.stages['3b-author'].skipped = true; },
    (s: any) => { s.stages['3b-author'].routedTo = '5a-adjudicate'; },
    (s: any) => { s.stages = { '5a-adjudicate': s.stages['3b-author'] }; },
  ]) {
    const f = fixture(t); mutation(f.state); f.write();
    const result = await f.check();
    assert.ok(result.problems.some(p => /stale post-Step5 dependency_level/.test(p)));
    assert.equal(result.notes.length, 0);
  }
  const malformed = fixture(t); malformed.write('broken state');
  assert.ok((await malformed.check()).problems.some(p => /stale post-Step5 dependency_level/.test(p)));
});
