import test from 'node:test';
import assert from 'node:assert/strict';
import canonical from '../stages/mathlib.mts';
import merged from '../stages/mathlib.merged.mts';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
test('merged checkpoint retains every canonical post-6B stage in order', () => {
  const index = canonical.stages.findIndex(s => s.id === '6b-baseline');
  assert.equal(merged.stages[0].id, '6b-import');
  assert.equal(merged.stages[1].id, '6b-import-join');
  assert.deepEqual(merged.stages.slice(2).map(s => s.id), canonical.stages.slice(index).map(s => s.id));
  assert.ok(merged.stages[0].gates);
  assert.equal(merged.stages[0].gatesWaived, undefined);
});
test('import retains every full-frontier author and adjudicator gate without relaxing arguments', () => {
  const repo = mkdtempSync(join(tmpdir(), 'merge-stage-gates-'));
  try {
    mkdirSync(join(repo, 'research'));
    const ctx: any = { repo, run: 'fixture', config: {} };
    const actual = merged.stages[1].gates!(ctx);
    for (const id of ['5-author', '6b-adjudicate']) {
      const expected = canonical.stages.find(stage => stage.id === id)!.gates!(ctx);
      for (const gate of expected) assert.deepEqual(
        actual.find(candidate => candidate.id === `import-${id}-${gate.id}`),
        { ...gate, id: `import-${id}-${gate.id}` });
    }
  } finally { rmSync(repo, { recursive: true, force: true }); }
});
