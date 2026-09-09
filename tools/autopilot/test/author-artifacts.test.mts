import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { authorArtifacts, stages } from '../stages/mathlib.mts';

test('Step 3 requires every manifest-declared page and item, not only a contract', () => {
  const root = mkdtempSync(join(tmpdir(), 'author-artifacts-'));
  try {
    mkdirSync(join(root, 'research'), { recursive: true });
    writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      {
        id: 'page-a', category: 'category-a',
        items: [{ id: 'def-first' }, { id: 'thm-second' }],
      },
      {
        id: 'page-b', category: 'category-a',
        items: [{ id: 'ex-third' }],
      },
    ]));

    const expected = [
      'research/r-batch-1.pages.json',
      'research/r-batch-1.proof-contracts.json',
      'library/category-a/page-a.md',
      'items/def-first.md',
      'items/thm-second.md',
      'library/category-a/page-b.md',
      'items/ex-third.md',
    ];
    assert.deepEqual(authorArtifacts({ run: 'r', repo: root }, '1'), expected);
    const author = stages.find((stage: any) => stage.id === '3b-author') as any;
    assert.deepEqual(author.artifacts({ run: 'r', repo: root }, '1'), expected);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
