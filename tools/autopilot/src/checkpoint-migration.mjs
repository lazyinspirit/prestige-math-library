// Translate artifact identities, never mathematical prose or execution receipts.
export const revision = 'six-step-checkpoint-v1';
const stages = {
  '3b-audit': '1-scaffold', '5-author': '1-scaffold',
  '6a-read': '3a-adjudicate', '6b-prepare': '3a-prepare',
  '6b-adjudicate': '3a-adjudicate', '6b-baseline': '3a-baseline',
  '6c-edges': '3b-edges', '6c-cross': '3b-cross', '6d-close': '3b-close',
  '7-judge': '4-judge', '8-baseline': '5-baseline',
  '8-adjudicate': '5-adjudicate', '8-rejudge': '5-rejudge',
  // Later historical labels remain provenance, not executable stage IDs.
};
export function migrateSuffix(suffix) {
  return suffix.replace(/^step6-(scope|hash|published-claims)/, 'step3-$1')
    .replace(/^step8-published-repairs/, 'step5-published-repairs')
    .replace(/^(alpha-[a-z]+)-6b(?=[.-])/, '$1-3a')
    .replace(/-(pre|post)-6b(?=\.json$)/, '-$1-3a');
}
export function migrateJson(value, source, target, defects = {}, key = '') {
  // These nested records describe the original read, not the new run's
  // ownership. Their attribution and mathematical contract hashes stay exact.
  if (['risk_review', 'gate_reviews', 'template_review', 'imported_from', 'prior_handoffs'].includes(key)) return structuredClone(value);
  if (Array.isArray(value)) return value.map(v => migrateJson(v, source, target, defects, key));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [
    k === 'step6_obligation' ? 'step3_obligation' : k === 'step6_defect_class' ? 'step3_defect_class' : k,
    migrateJson(v, source, target, defects, k),
  ]));
  if (typeof value !== 'string') return value;
  if (key === 'run' && value === source) return target;
  if (['caught_at_stage', 'introduced_at_stage', 'should_have_caught', 'found_at_stage', 'stage'].includes(key)) return stages[value] ?? value;
  if (key === 'label') return ({ 'pre-6b': 'pre-3a', 'post-6b': 'post-3a' })[value] ?? value;
  if (['defect_id', 'defect_ids', 'diagnostic_defect_ids'].includes(key)) return defects[value] ?? value;
  if (['obligation', 'step6_obligation'].includes(key) && value.startsWith('gate:')) return `gate:${defects[value.slice(5)] ?? value.slice(5)}`;
  return value;
}
export function selectedInput(suffix) {
  return /^(batch-\d+\.(?:pages|proof-contracts|coverage|cross-batch-dependencies)\.json|alpha-[a-z]+-(?:6b(?:-decisions)?\.(?:json|md)|scope-decisions\.json)|step6-(?:scope|hash)-\d+.*\.json|(?:reader-findings|refute)-\d+\.json|(?:scope-ledger|alpha-groups|covers|touches)\.json|step6-published-claims\.jsonl|step8-published-repairs\.jsonl)$/.test(suffix);
}
