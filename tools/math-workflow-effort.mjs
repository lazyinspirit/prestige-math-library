// One exact effort policy for native mathematics dispatch AND evidence checks.
// It selects a model setting; it grants no execution, review or acceptance.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const cache = new Map();

export function sol61Effort(root, run) {
  if (!run) return 'high';
  if (!/^[A-Za-z0-9._-]+$/.test(run)) throw Error('Invalid effort-policy run');
  const path = resolve(root, 'research', `${run}-audit`, 'origin.json');
  if (!existsSync(path)) return 'high';
  const stat = statSync(path, { bigint: true }), stamp = `${stat.mtimeNs}:${stat.ctimeNs}:${stat.size}`;
  if (cache.get(path) === stamp) return 'medium';
  const record = JSON.parse(readFileSync(path, 'utf8'));
  if (record.version !== 1 || record.kind !== 'published-math-category-audit'
    || record.run !== run || !['published-math-audit-v1', 'published-math-audit-v2'].includes(record.workflowRevision)
    || record.sol61_effort !== 'medium' || record.historical_execution_coverage_adopted !== false)
    throw Error('Invalid published-audit model effort policy');
  cache.set(path, stamp);
  return 'medium';
}
