// Semantic frontmatter readers shared by content-policy and its regression tests.
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { statSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { yamlCandidates } from './paths.mjs';

const require_ = createRequire(import.meta.url);
let YAML;
const mapping = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export function parseFrontmatter(fm) {
  if (!YAML) {
    for (const candidate of yamlCandidates()) {
      try { YAML = require_(candidate); break; } catch { /* next candidate */ }
    }
    if (!YAML) throw new Error('no yaml module found (the app repo supplies it, same as rendercheck)');
  }
  const doc = YAML.parse(fm);
  if (!mapping(doc)) throw new Error('item frontmatter must be a mapping');
  return doc;
}

export function nested(doc, parent, child) {
  return mapping(doc[parent]) ? doc[parent][child] : undefined;
}

export function referenceUrls(frontmatter) {
  const doc = typeof frontmatter === 'string' ? parseFrontmatter(frontmatter) : frontmatter;
  const references = nested(doc, 'sources', 'references');
  if (!Array.isArray(references)) return [];
  // Only direct URLs on reference objects count. Legacy title strings remain
  // readable but cannot satisfy a source-backed provenance claim.
  return references.filter(mapping)
    .map((reference) => reference.url)
    .filter((url) => typeof url === 'string' && url.trim().length > 0);
}


/** An open question is a source/status record, never a proved supplier. */
export function openProblemErrors(metadata, body = '', { requireBody = true } = {}) {
  if (metadata.kind !== 'open-problem') return [];
  const errors = [];
  const add = (code, message) => errors.push({ code, message });
  if (requireBody) {
    for (const heading of ['Open problem', 'Status']) {
      const section = body.match(new RegExp('^## ' + heading + '\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))', 'm'));
      if (!section?.[1]?.trim()) add('open-problem-section', `require a nonempty ## ${heading} section`);
    }
    if (!referenceUrls(metadata).some(url => /^https?:\/\//.test(url)))
      add('open-problem-source', 'record an HTTP(S) source for the formulation and unresolved status');
    if (metadata.provenance?.proof !== 'not-applicable')
      add('open-problem-provenance', 'an open problem requires provenance.proof: not-applicable');
  }
  if (/^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(body))
    add('open-problem-proof', 'an open problem may not contain a claimed proof or refutation; proved partial results belong in separate result items');
  if (metadata.proof_strategy !== undefined)
    add('open-problem-proof-strategy', 'an open problem has no completed proof strategy contract');
  if (metadata.proved_here === false || metadata.proved_here === 'false' || metadata.external_dependency !== undefined || metadata.external_refs?.length)
    add('open-problem-legacy-fallback', 'use the open-problem class directly, without the legacy proved_here/external fallback route');
  const verification = mapping(metadata.verification) ? metadata.verification : {};
  for (const field of ['judge', 'audited', 'verified']) if (verification[field] !== undefined)
    add('open-problem-proof-stamp', `verification.${field} may not claim proof acceptance for an open problem`);
  if (verification.precheck !== undefined && verification.precheck !== 'n/a')
    add('open-problem-precheck', 'use verification.precheck: n/a for an open problem');
  if (metadata.status === 'published' && !['date', 'scope', 'by'].every(field =>
    typeof verification.sources_checked?.[field] === 'string' && verification.sources_checked[field].trim()))
    add('open-problem-publication', 'publication requires structured verification.sources_checked with date, scope and by; this reviews formulation/status, not a proof');
  return errors;
}

export function openProblemReviewErrors(entry) {
  const errors = [];
  for (const field of ['formulation', 'status', 'sources']) {
    const review = entry?.open_problem_review?.[field];
    if (review?.verdict !== 'pass' || typeof review.evidence !== 'string' || !review.evidence.trim())
      errors.push(`open_problem_review.${field} requires pass and concrete evidence`);
  }
  for (const field of ['derivations', 'routine_steps', 'boundaries']) if (entry?.[field]?.length)
    errors.push('open problems must not manufacture proof-step worksheets');
  return errors;
}

// Root's bounded preservation decision is not a general generated-lemma waiver.
const REVIEWED_LOCAL_RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
const REVIEWED_LOCAL_IDS = new Set([
  'lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products',
  'lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings',
  'lem-pl-height-product-caps-replace-by-one-extremum',
  'lem-pointed-flat-pl-caps-admit-saddle-free-replacements',
]);

/** Validate an explicitly requested exception, including when used as context.
 * body is the exact UTF-8 content after the closing frontmatter delimiter,
 * without trimming or newline normalization. No source/proof review is implied.
 */
export function reviewedLocalLemmaAcceptance(metadata, body, repo) {
  const requested = Object.hasOwn(metadata, 'local_proof_acceptance')
    || nested(metadata, 'generation', 'role') === 'reviewed-local-lemma';
  if (!requested) return { eligible: false, errors: [] };
  const errors = [];
  const require_ = (condition, message) => { if (!condition) errors.push(message); };
  require_(REVIEWED_LOCAL_IDS.has(metadata.id), 'item is outside the exact four-ID preservation scope');
  require_(metadata.pipeline_run === REVIEWED_LOCAL_RUN, 'pipeline_run must match the authorized run');
  require_(metadata.kind === 'lemma', 'preserved item must remain a lemma');
  require_(nested(metadata, 'provenance', 'statement') === 'ai-generated'
    && nested(metadata, 'provenance', 'proof') === 'ai-generated', 'both provenance components must truthfully be ai-generated');
  require_(nested(metadata, 'generation', 'role') === 'reviewed-local-lemma', 'generation.role must be reviewed-local-lemma');
  const acceptance = metadata.local_proof_acceptance;
  if (!mapping(acceptance)) errors.push('local_proof_acceptance must be a mapping');
  else {
    require_(acceptance.run === REVIEWED_LOCAL_RUN, 'acceptance run must match the authorized run');
    require_(acceptance.authorized_by === '/root', 'acceptance must record authorized_by: /root');
    require_(acceptance.decision === 'preserve-resolved-local-lemma', 'acceptance decision must be preserve-resolved-local-lemma');
    const evidence = acceptance.independent_review;
    let evidenceExists = false;
    if (typeof evidence === 'string' && evidence.trim() && !isAbsolute(evidence)) {
      const local = relative(resolve(repo), resolve(repo, evidence));
      if (local && local !== '..' && !local.startsWith('../') && !isAbsolute(local)) {
        try { evidenceExists = statSync(resolve(repo, evidence)).isFile(); } catch { /* absent evidence */ }
      }
    }
    require_(evidenceExists, 'independent_review must name an existing repository-relative evidence file');
    const hash = acceptance.accepted_body_sha256;
    require_(typeof hash === 'string' && /^[a-f0-9]{64}$/.test(hash), 'accepted_body_sha256 must be a lowercase SHA256');
    if (typeof hash === 'string' && /^[a-f0-9]{64}$/.test(hash))
      require_(createHash('sha256').update(body, 'utf8').digest('hex') === hash, 'accepted body differs from the root-bound body');
  }
  return { eligible: errors.length === 0, errors };
}
