#!/usr/bin/env node
// Alpha-c, step 6b: targeted contract update for the batch-7 repairs.
//
// The `quote` field is the exact cited CLAUSE, not the whole section, so this
// refreshes only the entries whose source text I actually edited, and only to
// the corresponding clause of the new text. A blanket refresh from
// sourceSectionText would silently widen every targeted clause to its whole
// section; that was tried, reverted, and is why this is explicit.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { splitFrontmatter, sourceSectionText } from '../../tools/facts-block.mjs';

const REPO = new URL('../../', import.meta.url).pathname;
const PATH = join(REPO, 'research/frontier-15-batch-7.proof-contracts.json');
const doc = JSON.parse(readFileSync(PATH, 'utf8'));

const section = (id, sec) => {
  const { body } = splitFrontmatter(readFileSync(join(REPO, 'items', `${id}.md`), 'utf8'));
  const text = sourceSectionText(body, sec);
  if (text == null) throw new Error(`no ${sec} section in ${id}`);
  return text;
};

// Sources whose text this repair changed. The new quote is the full section for
// each of these three, because in each case the stored quote already was the
// full section.
const REQUOTE = ['def-kleisli-category', 'thm-the-kleisli-factorisation-functor-exists-and-is-unique',
  'thm-the-comparison-functor-exists-and-is-unique'];

let refreshed = 0;
for (const [id, c] of Object.entries(doc.contracts)) {
  for (const cit of c.citations ?? []) {
    if (!REQUOTE.includes(cit.source)) continue;
    const now = section(cit.source, cit.source_section);
    if (now !== cit.quote) { cit.quote = now; refreshed++; console.log(`requoted: ${id} [${cit.fact}] <- ${cit.source}`); }
  }
}

const put = (id, fact, source, sourceSection, uses) => {
  doc.contracts[id].citations.push({ fact, source, source_section: sourceSection, quote: section(source, sourceSection), uses });
  console.log(`citation added: ${id} [${fact}] <- ${source}`);
};
const setDeriv = (id, step, claim, inputs) => {
  const d = doc.contracts[id].derivations.find((x) => x.step === step);
  if (!d) throw new Error(`no derivation ${step} on ${id}`);
  d.claim = claim;
  if (inputs) d.inputs = inputs;
  console.log(`derivation updated: ${id} ${step}`);
};

const FS_MONOID = 'fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category';
put(FS_MONOID, 'L3', 'prop-sets-and-functions-form-category-set', 'Statement', ['2.1']);
put(FS_MONOID, 'L4', 'def-monad', 'Definition', ['2.1']);
setDeriv(FS_MONOID, '2.1',
  'Take $\\mathcal C=\\mathbf{Set}$, which is large by [L3], carrying the identity monad $(1_{\\mathbf{Set}},1,1)$, whose unit and associativity equations hold trivially by [L4]. The source $\\mathbf{Set}$ is not small, so by [L1] the adopted convention does not form $[\\mathbf{Set},\\mathbf{Set}]$ into a category, and the presupposition of step 1.1 fails for this monad.',
  ['L1', 'L3', 'L4', 'step 1.1']);
setDeriv(FS_MONOID, '3.1',
  'A claim asserted for every category therefore fails at $\\mathcal C=\\mathbf{Set}$, where it presupposes a category the convention does not form. When $\\mathcal C$ is small the functor category is formed by [L1] and is locally small by [L2], and the usual monoid description is valid there.',
  ['L1', 'L2', 'step 2.1']);

const FS_KLEM = 'fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad';
put(FS_KLEM, 'L3', 'thm-fully-faithful-split-essentially-surjective-characterises-equivalence', 'Statement', ['3.1']);
put(FS_KLEM, 'L5', 'cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad', 'Statement', ['4.1']);
setDeriv(FS_KLEM, '4.1',
  'The claim is therefore false. The positive boundary is [L4], that the canonical comparison is fully faithful with image the free algebras, together with [L5], that it is an equivalence when the monad is idempotent.',
  ['L4', 'L5', 'step 3.1']);

setDeriv('thm-cokleisli-composition-is-associative-and-unital', '3.1',
  'Naturality of $\\varepsilon$ at $f$ rewrites $\\varepsilon_B\\star f=\\varepsilon_B\\,G(f)\\,\\delta_A$ as $f\\,\\varepsilon_{GA}\\,\\delta_A$, so the equation $\\varepsilon G\\circ\\delta=1_G$ gives $\\varepsilon_B\\star f=f$; and $f\\star\\varepsilon_A=f\\,G(\\varepsilon_A)\\,\\delta_A$, so the equation $G\\varepsilon\\circ\\delta=1_G$ gives $f\\star\\varepsilon_A=f$. Hence $\\varepsilon_A$ is a two-sided identity.',
  ['L1', 'L2', 'step 1.1']);

setDeriv('thm-a-distributive-law-makes-the-composite-a-monad', '2.1',
  'The first distributive unit law gives the first identity below, and the first distributive multiplication law, naturality of $\\lambda$, and the $S$-algebra laws give the second.',
  ['L1', 'L2', 'L3', 'step 1.1']);

writeFileSync(PATH, `${JSON.stringify(doc, null, 2)}\n`);
console.log(`\n${refreshed} quote(s) requoted; contract written.`);
