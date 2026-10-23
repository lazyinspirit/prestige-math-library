// DRAFT: insert in step3-escalations.mjs; caller retains all existing root
// receipt, original-finding, chain, owned-use, source and evidence checks.
export function recordedMaintenanceToDeferred(entry, prior, current, { run, decisionPath, obligation, hashValue }) {
  const transitions = entry?.maintenance_disposition_transitions;
  if (!Array.isArray(transitions) || transitions.length !== 1) return false;
  const transition = transitions[0];
  const keys = ['prior_defect_id', 'prior_row_sha256', 'from', 'to', 'reviewed_by', 'rationale'];
  if (!transition || typeof transition !== 'object' || Array.isArray(transition)
    || Object.keys(transition).length !== keys.length
    || !keys.every(key => Object.hasOwn(transition, key))) return false;
  if (!prior || !current || prior.disposition !== 'nonfatal-recorded' || current.disposition !== 'deferred'
    || prior.run !== run || current.run !== run
    || prior.caught_at_stage !== '3a-adjudicate' || current.caught_at_stage !== '3a-adjudicate'
    || prior.severity === 'fatal' || current.severity === 'fatal'
    || typeof prior.defect_id !== 'string' || !prior.defect_id
    || transition.prior_defect_id !== prior.defect_id
    || transition.prior_row_sha256 !== hashValue(prior)
    || transition.from !== 'nonfatal-recorded' || transition.to !== 'deferred'
    || transition.reviewed_by !== 'root' || typeof transition.rationale !== 'string'
    || transition.rationale.trim().length < 100) return false;
  if (!['subject', 'class', 'subclass', 'severity', 'location', 'batch', 'consumer_id']
    .every(key => prior[key] === current[key])) return false;
  const hasReference = row => Array.isArray(row.adjudication_ref)
    && row.adjudication_ref.some(ref => ref?.path === decisionPath && ref.obligation === obligation);
  return hasReference(prior) && hasReference(current);
}
