// Input certificates must come from loadAuditorCreatedCertifications: that reader
// validates actual creation provenance, evidence guards, and current carriers.
export function isCertifiedOwnerContextAddition({ id, batch, run, item, certificates }) {
  if (!/^rem-/.test(id) || item?.id !== id || item.kind !== 'remark'
    || item.status !== 'draft' || item.pipeline_run !== run
    || item.proved_here !== false || item.provenance?.proof !== 'not-supplied') return false;
  return certificates.some(row => row.id === id && String(row.batch) === String(batch)
    && row.evidence_class === 'owner-spawned-creation'
    && row.owner_creation?.path === 'research/' + run + '-step5-owner-creation-' + id + '.json'
    && /^[a-f0-9]{64}$/.test(row.owner_creation?.sha256 ?? ''));
}
