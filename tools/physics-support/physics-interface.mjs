// Semantic public contracts exclude proof/citation/verification bookkeeping.
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter, sectionText } from './facts-block.mjs';
import { PHYSICS_KINDS } from './physics-content.mjs';
export function physicalInterface(source) {
  const { fm, body } = splitFrontmatter(source);
  const meta = fm.trim() ? parseFrontmatter(fm) : {};
  if (meta.domain !== 'physics' && !PHYSICS_KINDS.has(meta.kind)) return null;
  const result = {
    kind: meta.kind, domain: meta.domain,
    physical_scope: meta.physical_scope ?? null,
    empirical_premises: meta.empirical_premises ?? [],
  };
  if (meta.kind === 'experiment') {
    result.empirical_result = Object.fromEntries(['observation', 'uncertainty', 'conditions'].map(field => [field, meta.empirical_result?.[field] ?? null]));
    result.experimental_contract = Object.fromEntries(['Setup', 'Procedure', 'Observations', 'Uncertainty', 'Interpretation'].map(heading => [heading, sectionText(body, heading).trim()]));
  }
  return result;
}
