import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { split, yaml } from 'file:///home/lazyinspirit/Projects/prestige-math-library/tools/pathway-lib.mjs';
import { auditorCreatedCertificationsPath, loadAuditorCreatedCertifications } from 'file:///home/lazyinspirit/Projects/prestige-math-library/tools/auditor-created-items.mjs';

// Routing ownership only: independent review and mathematical gates remain due.
// Validate certificates here so callers cannot substitute fabricated certificate rows.
export function isCertifiedOwnerCounterexampleAddition({ root, run, id, batch, manifestRows }) {
  if (!/^cex-/.test(id) || !Array.isArray(manifestRows) || !manifestRows.length) return false;
  const text = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
  const item = yaml().parse(split(text).fm);
  if (item?.id !== id || item.kind !== 'counterexample' || item.status !== 'draft'
    || item.pipeline_run !== run || item.provenance?.statement !== 'ai-generated'
    || item.generation?.role !== 'counterexample'
    || ['not-supplied', 'not-applicable'].includes(item.provenance?.proof)
    || !/^## Statement refuted\s*$/m.test(text) || !/^## Counterexample\s*$/m.test(text)) return false;
  const refutation = text.split(/^## Counterexample\s*$/m)[1]?.split(/^## /m)[0] ?? '';
  if ((refutation.match(/^\d+\.\d+\s/gm) ?? []).length < 2 || !refutation.includes('∎')) return false;
  const owned = manifestRows.filter(row => row.id === id);
  if (owned.length !== 1 || String(owned[0].batch) !== String(batch)
    || owned[0].generation?.role !== 'counterexample'
    || owned[0].provenance?.statement !== 'ai-generated' || owned[0].kind !== 'counterexample') return false;
  for (const row of manifestRows) {
    if ((row.deps ?? []).includes(id)) return false;
    const source = yaml().parse(split(readFileSync(join(root, 'items', `${row.id}.md`), 'utf8')).fm);
    if ((source?.deps ?? []).includes(id)) return false;
  }
  const certificates = loadAuditorCreatedCertifications(auditorCreatedCertificationsPath(root, run, 3), { root, run, steps: [3] });
  return certificates.some(row => row.id === id && String(row.batch) === String(batch)
    && row.evidence_class === 'owner-spawned-creation'
    && row.owner_creation?.path === `research/${run}-step3-owner-creation-${id}.json`
    && /^[a-f0-9]{64}$/.test(row.owner_creation?.sha256 ?? ''));
}
