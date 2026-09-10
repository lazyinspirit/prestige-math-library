import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

test('continuation reload observes canonical and Step-5 edits in the same process', async () => {
  const root = mkdtempSync(join(tmpdir(), 'autopilot-merged-reload-'));
  try {
    const entry = join(root, 'mathlib.merged.mts');
    copyFileSync(new URL('../stages/mathlib.merged.mts', import.meta.url), entry);
    const writeCanonical = (label: string) => writeFileSync(join(root, 'mathlib.mts'), `
      import { readFileSync } from 'node:fs';
      export const authoredContentGates = () => [];
      export default {
        workflowRevision: readFileSync(new URL('./mathlib.step5.mts', import.meta.url), 'utf8'),
        stages: [{ id: '5a-adjudicate', gates: () => [] },
          { id: '5a-baseline', label: ${JSON.stringify(label)} }],
        batches: () => [], alphaGroups: () => [],
      };
    `);
    writeFileSync(join(root, 'mathlib.step5.mts'), 'first');
    writeCanonical('first');
    const load = (version: number) => import(`${pathToFileURL(entry).href}?test=${version}`);
    const first = await load(1);
    assert.equal(first.stages.at(-1).label, 'first');
    writeCanonical('updated canonical');
    const second = await load(2);
    assert.equal(second.stages.at(-1).label, 'updated canonical');
    writeFileSync(join(root, 'mathlib.step5.mts'), 'updated step five');
    const third = await load(3);
    assert.equal(third.workflowRevision, 'updated step five');
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
