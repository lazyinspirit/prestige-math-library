import { NONPROOF_KINDS } from './physics-content.mjs';
export const reviewRequirements = Object.freeze({
  postulate: ['formulation', 'scope', 'sources', 'non_derivation'],
  experiment: ['setup', 'procedure', 'observations', 'uncertainty', 'interpretation', 'sources', 'statistical_inference'],
});
export function physicsReviewErrors(kind, entry) {
  if (!NONPROOF_KINDS.has(kind)) return [];
  const review = entry?.physics_review;
  const errors = [];
  for (const field of reviewRequirements[kind]) {
    const row = review?.[field];
    if (!row || row.verdict !== 'pass' || typeof row.evidence !== 'string' || !row.evidence.trim()) errors.push(`physics_review.${field} requires verdict: pass and concrete evidence`);
  }
  if (entry?.derivations?.length || entry?.routine_steps?.length || entry?.boundaries?.length) errors.push('nonproof items must not manufacture proof-step or mathematical boundary worksheets');
  return errors;
}
export function reviewInstruction(kind, domain = 'mathematics') {
  if (kind === 'postulate') return 'Audit this postulate for exact source-backed formulation, physical meaning, scope, and explicit adopted-assumption status. Do not demand a proof or treat empirical support as deduction. Reject unsupported universality or fabricated source reading.';
  if (kind === 'experiment') return 'Audit this reported experiment for source-backed apparatus, preparation, calibration, procedure, observed results, uncertainty, and limitations. Separate observations from model predictions and interpretations. Reject invented measurements, thought experiments presented as observations, and omitted auxiliary assumptions. Check sampling assumptions, finite-sample fluctuations, uncertainty, model comparisons, and the strength of statistical inference. Finite agreement does not prove a theory; a rare outcome does not automatically falsify it. Do not demand a proof of an observed outcome.';
  if (['physics-theorem', 'thought-experiment'].includes(kind)) return 'Audit the complete conditional proof from explicit mathematical and physical premises. Physics theorems and thought experiments have identical acceptance standards. Check inherited empirical uncertainty, physical regime, units, and apparatus assumptions; deduction does not establish empirical truth. Distinguish expected or almost-sure behavior from claims about every finite dataset, and carry sampling and measurement qualifications.';
  if (domain === 'physics') return 'Audit this physical definition, example, counterexample, or remark for operational meaning, explicit physical scope, units, source faithfulness, and clearly stated model assumptions. Apply ordinary complete argument requirements to any verification or refutation. Preserve empirical uncertainty; illustrative calculations are not reported experimental evidence.';
  return 'Apply the unchanged mathematical proof standards to this mathematical item, even when it appears in a physics category. Physical items cannot supply its justification.';
}
