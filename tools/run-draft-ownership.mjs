// Ownership of restored content is separate from execution/review coverage.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { publishedAuditOwnerMatcher } from './published-audit-ownership.mjs';

export function draftOwnerMatcher(root, run) {
  const ownsPublishedAudit = publishedAuditOwnerMatcher(root, run);
  const path = join(root, 'research', `${run}-continuation.json`);
  let sourceRun = null;
  const restored = new Set();
  if (existsSync(path)) {
    const record = JSON.parse(readFileSync(path, 'utf8'));
    const safe = value => typeof value === 'string' && /^[A-Za-z0-9_-]+$/.test(value);
    if (record.version !== 1 || record.run !== run || !safe(run)
      || !safe(record.source_run) || record.source_run === run
      || record.authorized_by !== 'owner' || typeof record.authorization !== 'string'
      || record.authorization.trim().length < 20
      || record.historical_execution_coverage_adopted !== false
      || !Array.isArray(record.manifest_inputs) || !record.manifest_inputs.length)
      throw Error('Invalid owner-authorized content continuation');
    sourceRun = record.source_run;
    const prefix = `research/${run}-continuation-inputs/manifests/${sourceRun}-batch-`;
    const pages = new Set(), archives = new Set();
    for (const input of record.manifest_inputs) {
      if (typeof input.archive !== 'string' || !input.archive.startsWith(prefix)
        || !/^\d+\.pages\.json$/.test(input.archive.slice(prefix.length))
        || input.path !== `research/${sourceRun}-batch-${input.archive.slice(prefix.length)}`
        || !/^[a-f0-9]{64}$/.test(input.sha256 ?? '') || archives.has(input.archive))
        throw Error('Invalid continuation manifest binding');
      archives.add(input.archive);
      const full = resolve(root, input.archive);
      if (realpathSync(full) !== full) throw Error('Continuation archive must be a regular repository path');
      const bytes = readFileSync(full);
      if (createHash('sha256').update(bytes).digest('hex') !== input.sha256)
        throw Error('Continuation manifest hash changed');
      const manifest = JSON.parse(bytes);
      if (!Array.isArray(manifest) || !manifest.length) throw Error('Empty continuation manifest');
      for (const page of manifest) {
        if (!page.id || pages.has(page.id) || !Array.isArray(page.items) || !page.items.length)
          throw Error('Invalid continuation page inventory');
        pages.add(page.id);
        for (const row of page.items) {
          const id = typeof row === 'string' ? row : row.id;
          if (typeof id !== 'string' || !/^[a-z][a-z0-9-]*$/.test(id) || restored.has(id))
            throw Error('Ambiguous continuation item ownership');
          restored.add(id);
        }
      }
    }
    if (record.scope?.items !== restored.size || record.scope?.pages !== pages.size)
      throw Error('Continuation inventory count mismatch');
  }
  return item => ownsPublishedAudit(item) || item?.status === 'draft' && (item.pipeline_run === undefined
    || item.pipeline_run === run
    || item.pipeline_run === sourceRun && restored.has(item.id));
}
