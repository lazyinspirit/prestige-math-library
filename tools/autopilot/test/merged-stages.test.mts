import test from 'node:test';
import assert from 'node:assert/strict';
import canonical, { authoredContentGates } from '../stages/mathlib.mts';
import merged from '../stages/mathlib.merged.mts';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
test('migrated checkpoint retains every canonical post-review stage in order', () => {
  const index = canonical.stages.findIndex(s => s.id === '5a-baseline');
  assert.equal(merged.stages[0].id, '5a-import');
  assert.equal(merged.stages[1].id, '5a-import-join');
  assert.equal(merged.workflowRevision, canonical.workflowRevision);
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
    for (const [id, expected] of [
      ['author', authoredContentGates(ctx)],
      ['review', canonical.stages.find(stage => stage.id === '5a-adjudicate')!.gates!(ctx)],
    ] as const) {
      for (const gate of expected) assert.deepEqual(
        actual.find(candidate => candidate.id === `import-${id}-${gate.id}`),
        { ...gate, id: `import-${id}-${gate.id}` });
    }
  } finally { rmSync(repo, { recursive: true, force: true }); }
});
