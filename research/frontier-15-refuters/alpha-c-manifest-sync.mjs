#!/usr/bin/env node
// Alpha-c, step 6b: bring the batch-7 manifest's `deps` for the three items my
// repairs touched back into agreement with their frontmatter on disk. Nothing
// else in the manifest is touched, and no item is added or deleted.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = new URL('../../', import.meta.url).pathname;
const PATH = join(REPO, 'research/frontier-15-batch-7.pages.json');
const pages = JSON.parse(readFileSync(PATH, 'utf8'));

const TOUCHED = [
  'rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic',
  'fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad',
  'fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category',
];

const diskDeps = (id) => {
  const src = readFileSync(join(REPO, 'items', `${id}.md`), 'utf8');
  const m = src.match(/^deps:\s*\[([^\]]*)\]/m);
  return m ? m[1].split(',').map((s) => s.trim()).filter(Boolean) : [];
};

for (const page of pages) {
  for (const item of page.items) {
    if (!TOUCHED.includes(item.id)) continue;
    const before = item.deps ?? [];
    const after = diskDeps(item.id);
    const added = after.filter((d) => !before.includes(d));
    const removed = before.filter((d) => !after.includes(d));
    item.deps = after;
    console.log(`${item.id}\n  + ${added.join(', ') || '(none)'}\n  - ${removed.join(', ') || '(none)'}`);
  }
}

writeFileSync(PATH, `${JSON.stringify(pages, null, 2)}\n`);
console.log('manifest written.');
