// A successful pair-author process must leave its promised carriers on disk.
// This is file accounting, not a mathematical or contract-quality verdict.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const safe = value => /^[a-zA-Z0-9_-]+$/.test(value ?? '');

export function checkPairAuthorArtifacts(root, run, covers) {
  if (!safe(run) || !Array.isArray(covers) || !covers.length || covers.some(id => !safe(id)))
    throw Error('Invalid pair-author artifact identity');
  const pages = [];
  for (const file of readdirSync(join(root, 'research')).filter(file =>
    new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(file))) {
    const batch = file.match(/-batch-(\d+)\./)[1];
    for (const page of JSON.parse(readFileSync(join(root, 'research', file), 'utf8')))
      pages.push({ ...page, batch });
  }
  const expected = new Set();
  for (const id of covers) {
    const a = pages.find(page => page.id === id && page.kind === 'A');
    const b = a && pages.find(page => page.id === a.companion && page.kind === 'B');
    if (!a || !b) throw Error(`Missing pair-author manifest for ${id}`);
    expected.add(`research/${run}-step3b-pair-${id}.md`);
    for (const page of [a, b]) {
      if (!safe(page.id) || !safe(page.category) || !Array.isArray(page.items) || !page.items.length)
        throw Error(`Invalid pair-author inventory for ${id}`);
      expected.add(`research/${run}-batch-${page.batch}.proof-contracts.json`);
      expected.add(`library/${page.category}/${page.id}.md`);
      for (const item of page.items) {
        if (!safe(item.id)) throw Error(`Invalid pair-author item for ${id}`);
        expected.add(`items/${item.id}.md`);
      }
    }
  }
  const missing = [...expected].filter(path => {
    try { const stat = statSync(join(root, path)); return !stat.isFile() || stat.size === 0; }
    catch { return true; }
  });
  return { required: true, checked: expected.size, ok: !missing.length, missing };
}
