// Translate artifact identities, never mathematical prose or execution receipts.
export const revision = 'group-authors-nine-step-v1';
const stages = {
  '3b-audit': '3b-author', '5-author': '3b-author',
  '6a-read': '5a-adjudicate', '6b-prepare': '5a-prepare',
  '6b-adjudicate': '5a-adjudicate', '6b-baseline': '5a-baseline',
  '6c-edges': '5b-edges', '6c-cross': '5b-cross', '6d-close': '5b-close',
  '7-judge': '6-judge', '8-baseline': '7-baseline',
  '8-adjudicate': '7-adjudicate', '8-rejudge': '7-rejudge',
  '9-scope': '8-scope', '9-receipt': '8-receipt', '10-report': '9-report',
};
export function migrateSuffix(suffix) {
  return suffix.replace(/^step6-(scope|hash|published-claims)/, 'step5-$1')
    .replace(/^step8-published-repairs/, 'step7-published-repairs')
    .replace(/^(alpha-[a-z]+)-6b(?=[.-])/, '$1-5a')
    .replace(/-(pre|post)-6b(?=\.json$)/, '-$1-5a');
}
export function migrateJson(value, source, target, defects = {}, key = '') {
  if (Array.isArray(value)) return value.map(v => migrateJson(v, source, target, defects, key));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [
    k === 'step6_obligation' ? 'step5_obligation' : k === 'step6_defect_class' ? 'step5_defect_class' : k,
    migrateJson(v, source, target, defects, k),
  ]));
  if (typeof value !== 'string') return value;
  if (key === 'run' && value === source) return target;
  if (['caught_at_stage', 'introduced_at_stage', 'should_have_caught', 'found_at_stage', 'stage'].includes(key)) return stages[value] ?? value;
  if (key === 'label') return ({ 'pre-6b': 'pre-5a', 'post-6b': 'post-5a' })[value] ?? value;
  if (['defect_id', 'defect_ids', 'diagnostic_defect_ids'].includes(key)) return defects[value] ?? value;
  if (['obligation', 'step6_obligation'].includes(key) && value.startsWith('gate:')) return `gate:${defects[value.slice(5)] ?? value.slice(5)}`;
  return value;
}
export function selectedInput(suffix) {
  return /^(batch-\d+\.(?:pages|proof-contracts|coverage|cross-batch-dependencies)\.json|alpha-[a-z]+-(?:6b(?:-decisions)?\.(?:json|md)|scope-decisions\.json)|step6-(?:scope|hash)-\d+.*\.json|(?:reader-findings|refute)-\d+\.json|(?:scope-ledger|alpha-groups|covers|touches)\.json|step6-published-claims\.jsonl|step8-published-repairs\.jsonl)$/.test(suffix);
}
