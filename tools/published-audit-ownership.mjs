// Explicit current-run ownership for published audit subjects. Publication is
// preserved; this supplies ownership only, never review or judge coverage.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';

export function publishedAuditOwnerMatcher(root, run) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run ?? '')) throw Error('Invalid audit run');
  const file = join(root, 'research', `${run}-audit`, 'origin.json');
  if (!existsSync(file)) return () => false;
  const record = JSON.parse(readFileSync(file, 'utf8'));
  if (record.version !== 1 || record.kind !== 'published-math-category-audit'
    || record.run !== run || !['published-math-audit-v1', 'published-math-audit-v2'].includes(record.workflowRevision) || record.sol61_effort !== 'medium'
    || record.historical_execution_coverage_adopted !== false
    || !Array.isArray(record.originals) || !record.originals.length
    || !Array.isArray(record.items) || !record.items.length
    || new Set(record.items).size !== record.items.length) throw Error('Invalid published audit ownership');
  const ids = new Set();
  for (const row of record.originals) {
    const match = /^items\/([a-zA-Z0-9_-]+)\.md$/.exec(row.path);
    if (!match) continue;
    if (row.archive !== `research/${run}-audit/originals/${row.path}` || ids.has(match[1]))
      throw Error('Invalid original audit item archive');
    const bytes = readFileSync(join(root, row.archive));
    const fm = yaml().parse(split(bytes.toString('utf8')).fm);
    if (createHash('sha256').update(bytes).digest('hex') !== row.sha256
      || fm.id !== match[1] || fm.status !== 'published') throw Error('Original published audit item changed');
    ids.add(match[1]);
  }
  if (ids.size !== record.items.length || record.items.some(id => !ids.has(id))) throw Error('Audit ownership inventory mismatch');
  return item => item?.status === 'published' && ids.has(item.id);
}
