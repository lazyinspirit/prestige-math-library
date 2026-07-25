// Emits research/plan-spec.json from a compact table. The JSON is the artifact;
// this generator just keeps 128 pages free of copy-paste drift.
import { writeFileSync } from 'node:fs';

const pages = [];
let ord = 0;

/** already-published page, declared so the new stack can name it */
const P = (id, requires) =>
  pages.push({ order: ++ord, id, kind: 'P', category: 'published', requires, items: [] });

/** an A page and its B companion; returns the A id for use in later requires */
const AB = (id, title, category, requires, opts = {}) => {
  const b = id + '-examples';
  pages.push({
    order: ++ord, id, kind: 'A', category, title, companion: b,
    requires, items: opts.items ?? [],
  });
  pages.push({
    order: ++ord, id: b, kind: 'B', category, title: title + ': Examples and Counterexamples',
    requires: [id, ...(opts.bRequires ?? [])],
    forwardRefs: opts.forwardRefs ?? [],
    items: opts.bItems ?? [],
  });
  return id;
};

/** a page that RECORDS results this library does not prove (SCHEMA §3
 *  `proved_here: false`). Declared FIRST so it sits at the very start of plan
 *  order and any page may depend on it; it has no prerequisites of its own
 *  because it states results rather than deriving them. */
const X = (id, title, items = []) =>
  pages.push({ order: ++ord, id, kind: 'X', category: 'not-proved-here', title, requires: [], items });

// The deferred tracks of DEFERRED.md, included so the library can refer to these
// results honestly and mark them, rather than leaving them invisible in a repo
// file. Owner instruction 2026-07-25.
const XMEA = 'deferred-measure-and-integration';
const XFUN = 'deferred-functional-analysis';
const XSET = 'deferred-set-theory-beyond-choice';
const XTOP = 'deferred-algebraic-topology';
const XOPEN = 'open-problems-and-research-frontier';
X(XMEA, 'Measure and Integration: Recorded, Not Proved Here');
X(XFUN, 'Functional Analysis: Recorded, Not Proved Here');
X(XSET, 'Set Theory Beyond Choice: Recorded, Not Proved Here');
X(XTOP, 'Algebraic Topology: Recorded, Not Proved Here');
X(XOPEN, 'Open Problems and the Research Frontier');

// ---------------------------------------------------------------- published

const NAT = 'construction-of-the-natural-numbers';
const CAU = 'construction-of-r-via-cauchy-sequences';
const DED = 'construction-of-r-via-dedekind-cuts';
const FND = 'foundations-of-the-real-numbers';
P(NAT, []);
P(CAU, [NAT]);
P(DED, [CAU]);
P(FND, [DED]);

// ---------------------------------------------------------------- foundations

// Split into two pairs at authoring time (2026-07-25): laying Bourbaki-Witt out
// atomically, admissible sets, extremal elements, comparability, then the chain
// property, takes the single page past the 25-item target, and "Zorn" and
// "ultrafilters" are separate topics anyway.
const F1A_ITEMS = [
  { id: 'def-partial-order', kind: 'definition', deps: [] },
  { id: 'def-chain', kind: 'definition', deps: ['def-partial-order'] },
  { id: 'def-upper-bound', kind: 'definition', deps: ['def-partial-order'] },
  { id: 'def-maximal-element', kind: 'definition', deps: ['def-partial-order'] },
  { id: 'def-chain-complete-poset', kind: 'definition', deps: ['def-chain', 'def-upper-bound'] },
  { id: 'def-choice-function', kind: 'definition', deps: [] },
  { id: 'def-axiom-of-choice', kind: 'definition', deps: ['def-choice-function'] },
  { id: 'lem-finite-choice', kind: 'lemma', deps: ['def-choice-function', 'thm-induction-principle'] },
  { id: 'def-admissible-set', kind: 'definition', deps: ['def-chain-complete-poset'] },
  { id: 'lem-admissible-set-exists', kind: 'lemma', deps: ['def-admissible-set', 'def-chain-complete-poset'] },
  { id: 'def-bw-extremal', kind: 'definition', deps: ['lem-admissible-set-exists'] },
  { id: 'lem-extremal-cut-closed-under-f', kind: 'lemma', deps: ['def-bw-extremal', 'lem-admissible-set-exists', 'def-chain-complete-poset'] },
  { id: 'lem-extremal-cut-closed-under-sups', kind: 'lemma', deps: ['def-bw-extremal', 'lem-admissible-set-exists', 'def-chain-complete-poset', 'def-upper-bound'] },
  { id: 'lem-extremal-comparability', kind: 'lemma', deps: ['lem-extremal-cut-closed-under-f', 'lem-extremal-cut-closed-under-sups', 'def-bw-extremal', 'lem-admissible-set-exists', 'def-admissible-set'] },
  { id: 'lem-successor-of-extremal', kind: 'lemma', deps: ['lem-extremal-comparability', 'def-bw-extremal', 'lem-admissible-set-exists', 'def-chain-complete-poset'] },
  { id: 'lem-sup-of-extremals', kind: 'lemma', deps: ['lem-extremal-comparability', 'def-bw-extremal', 'lem-admissible-set-exists', 'def-upper-bound', 'def-chain-complete-poset'] },
  { id: 'lem-all-extremal', kind: 'lemma', deps: ['lem-successor-of-extremal', 'lem-sup-of-extremals', 'lem-admissible-set-exists', 'def-admissible-set'] },
  { id: 'lem-admissible-is-chain', kind: 'lemma', deps: ['lem-all-extremal', 'lem-extremal-comparability', 'def-chain', 'def-chain-complete-poset'] },
  { id: 'thm-bourbaki-witt', kind: 'theorem', deps: ['lem-admissible-is-chain', 'def-chain-complete-poset', 'lem-admissible-set-exists', 'def-partial-order'] },
  { id: 'thm-zorn', kind: 'theorem', deps: ['thm-bourbaki-witt', 'def-axiom-of-choice', 'def-maximal-element', 'def-upper-bound', 'def-chain'] },
  { id: 'thm-zorn-implies-ac', kind: 'theorem', deps: ['thm-zorn', 'def-choice-function', 'def-maximal-element'] },
  { id: 'cor-ac-iff-zorn', kind: 'corollary', deps: ['thm-zorn', 'thm-zorn-implies-ac'] },
  { id: 'fs-zorn-provable-in-zf', kind: 'false-statement', deps: ['thm-zorn', 'cor-ac-iff-zorn', 'thm-zorn-implies-ac'] },
  { id: 'fs-maximal-is-greatest', kind: 'false-statement', deps: ['def-maximal-element', 'def-partial-order'] },
];

const F1A_B_ITEMS = [
  { id: 'ex-finite-choice-by-induction', kind: 'example', deps: ['lem-finite-choice'] },
  { id: 'ex-canonical-choice-on-naturals', kind: 'example', deps: ['def-choice-function', 'thm-well-ordering-principle'] },
  { id: 'ex-russells-socks', kind: 'example', deps: ['def-axiom-of-choice'] },
  { id: 'ex-powerset-is-chain-complete', kind: 'example', deps: ['def-chain-complete-poset'] },
  { id: 'ex-zorn-poset-of-chains', kind: 'example', deps: ['def-chain-complete-poset', 'thm-zorn'] },
  { id: 'cex-maximal-not-greatest', kind: 'counterexample', deps: ['def-maximal-element', 'fs-maximal-is-greatest'] },
  { id: 'cex-zorn-hypothesis-fails', kind: 'counterexample', deps: ['thm-zorn', 'def-upper-bound'] },
  { id: 'cex-progressive-map-without-fixed-point', kind: 'counterexample', deps: ['thm-bourbaki-witt', 'def-chain-complete-poset'] },
];

const F1B_ITEMS = [
  { id: 'def-filter', kind: 'definition', deps: [] },
  { id: 'def-filter-base', kind: 'definition', deps: ['def-filter'] },
  { id: 'lem-filter-base-generates', kind: 'lemma', deps: ['def-filter-base'] },
  { id: 'def-finite-intersection-property', kind: 'definition', deps: [] },
  { id: 'lem-fip-generates-filter', kind: 'lemma', deps: ['def-finite-intersection-property', 'def-filter'] },
  { id: 'def-ultrafilter', kind: 'definition', deps: ['def-filter', 'def-maximal-element'] },
  { id: 'lem-union-of-chain-of-filters', kind: 'lemma', deps: ['def-filter', 'def-chain'] },
  { id: 'thm-ultrafilter-lemma', kind: 'theorem', deps: ['def-ultrafilter', 'thm-zorn', 'lem-union-of-chain-of-filters'] },
  { id: 'thm-ultrafilter-characterisation', kind: 'theorem', deps: ['def-ultrafilter'] },
  { id: 'lem-ultrafilter-prime', kind: 'lemma', deps: ['thm-ultrafilter-characterisation'] },
  { id: 'rem-choice-strengths', kind: 'remark', deps: ['thm-ultrafilter-lemma', 'cor-ac-iff-zorn'] },
  { id: 'fs-every-ultrafilter-principal', kind: 'false-statement', deps: ['def-ultrafilter', 'thm-ultrafilter-lemma'] },
];

const F1B_B_ITEMS = [
  { id: 'ex-principal-ultrafilter', kind: 'example', deps: ['def-ultrafilter'] },
  { id: 'ex-frechet-filter', kind: 'example', deps: ['def-filter'] },
  { id: 'ex-free-ultrafilter-on-naturals', kind: 'example', deps: ['thm-ultrafilter-lemma', 'ex-frechet-filter'] },
  { id: 'cex-union-of-filters-not-filter', kind: 'counterexample', deps: ['def-filter'] },
  { id: 'cex-improper-filter', kind: 'counterexample', deps: ['def-filter', 'def-ultrafilter'] },
];

const F1 = AB('order-zorn-and-the-axiom-of-choice', "Order, Zorn's Lemma, and the Axiom of Choice",
  'foundations', [NAT, XSET], { items: F1A_ITEMS, bItems: F1A_B_ITEMS });
const F1B = AB('filters-and-ultrafilters', 'Filters and Ultrafilters',
  'foundations', [F1, XSET], { items: F1B_ITEMS, bItems: F1B_B_ITEMS });

// ---------------------------------------------------------------- real analysis

const ra = {};
const t = {};
const RA = (key, id, title, requires, opts) => (ra[key] = AB(id, title, 'real-analysis', requires, opts));
const T = (key, id, title, requires, opts) => (t[key] = AB(id, title, 'topology', requires, opts));

// D-TRIG, owner decision 2026-07-25. sin and cos are power series (RA-28), which
// need uniform convergence, which needs the MVT, so trig does not exist until
// two thirds through the track, while the CANONICAL counterexamples of the early
// pages are sin(1/x), x sin(1/x), x^2 sin(1/x). Resolution: the PROVED item is
// always trig-free, so nothing early depends on anything late; alongside it sits
// a `rem-` naming the classical trig form. Those remarks are the only forward
// citations in the stack, they occur only on B pages (which are leaves, so no
// cycle is possible), and every page that may carry one whitelists RA-28 below.
const TRIG = 'sine-cosine-and-the-definition-of-pi';
const trigNote = { forwardRefs: [TRIG] };

// Design: research/design-ra01-suprema-and-infima.md. Supremum itself is ALREADY
// defined by the published def-complete-ordered-field, so this page adds the dual
// notions and the working toolkit and never redefines it.
const RA01_ITEMS = [
  { id: 'def-bounded-set', kind: 'definition', deps: ['def-complete-ordered-field'] },
  { id: 'def-infimum', kind: 'definition', deps: ['def-bounded-set'] },
  { id: 'def-max-min', kind: 'definition', deps: ['def-complete-ordered-field'] },
  { id: 'lem-sup-unique', kind: 'lemma', deps: ['def-complete-ordered-field', 'def-infimum', 'def-ordered-field'] },
  { id: 'lem-reflection', kind: 'lemma', deps: ['def-bounded-set', 'lem-of-sign-rules'] },
  { id: 'thm-infimum-property', kind: 'theorem', deps: ['lem-reflection', 'def-infimum', 'lem-sup-unique', 'def-complete-ordered-field'] },
  { id: 'lem-sup-epsilon', kind: 'lemma', deps: ['def-complete-ordered-field', 'lem-sup-unique', 'def-ordered-field'] },
  { id: 'lem-inf-epsilon', kind: 'lemma', deps: ['lem-sup-epsilon', 'thm-infimum-property', 'lem-reflection'] },
  { id: 'lem-max-is-sup', kind: 'lemma', deps: ['def-max-min', 'lem-sup-unique', 'def-complete-ordered-field'] },
  { id: 'lem-finite-set-has-max', kind: 'lemma', deps: ['def-max-min', 'thm-induction-principle', 'def-nat-addition', 'def-complete-ordered-field', 'def-ordered-field'] },
  { id: 'lem-sup-monotone', kind: 'lemma', deps: ['lem-sup-unique', 'def-complete-ordered-field'] },
  { id: 'lem-sup-translate', kind: 'lemma', deps: ['lem-sup-epsilon', 'lem-of-add-order', 'def-complete-ordered-field'] },
  { id: 'lem-sup-scale', kind: 'lemma', deps: ['lem-sup-epsilon', 'thm-infimum-property', 'prop-of-multiply-inequalities', 'def-complete-ordered-field', 'lem-of-sign-rules', 'def-infimum', 'def-ordered-field', 'def-field', 'lem-of-add-order'] },
  { id: 'lem-sup-sum', kind: 'lemma', deps: ['lem-sup-epsilon', 'lem-of-add-order', 'def-complete-ordered-field', 'cor-of-one-positive', 'lem-of-sign-rules', 'def-field'] },
  { id: 'fs-sup-belongs-to-set', kind: 'false-statement', deps: ['lem-sup-epsilon', 'def-max-min', 'def-complete-ordered-field', 'def-ordered-field', 'lem-of-add-order', 'cor-of-one-positive', 'lem-of-sign-rules', 'def-field'] },
  { id: 'fs-every-set-has-sup', kind: 'false-statement', deps: ['def-complete-ordered-field', 'thm-of-archimedean', 'cor-of-one-positive', 'def-ordered-field', 'lem-of-add-order'] },
  { id: 'rem-sup-conventions', kind: 'remark', deps: ['def-complete-ordered-field', 'def-infimum'] },
];

const RA01_B_ITEMS = [
  { id: 'ex-sup-of-open-interval', kind: 'example', deps: ['lem-sup-epsilon'] },
  { id: 'ex-sup-of-closed-interval', kind: 'example', deps: ['lem-max-is-sup'] },
  { id: 'ex-inf-of-reciprocals', kind: 'example', deps: ['lem-inf-epsilon', 'thm-of-archimedean'] },
  { id: 'ex-sup-rationals-below-sqrt-two', kind: 'example', deps: ['lem-sup-epsilon', 'thm-of-square-roots'] },
  { id: 'ex-sup-of-sum-of-sets', kind: 'example', deps: ['lem-sup-sum'] },
  { id: 'cex-sup-not-attained', kind: 'counterexample', deps: ['fs-sup-belongs-to-set', 'lem-sup-epsilon'] },
  { id: 'cex-unbounded-set-has-no-sup', kind: 'counterexample', deps: ['fs-every-set-has-sup', 'thm-of-archimedean'] },
  { id: 'cex-empty-set-has-no-sup', kind: 'counterexample', deps: ['fs-every-set-has-sup', 'def-bounded-set'] },
];

// Design: research/design-round2.md. Finite sums live HERE, on the first page
// that needs them, because the naturals page that could also have hosted them is
// already published and a published page may not list a draft item.
const RA02_ITEMS = [
  { id: 'def-finite-sum', kind: 'definition', deps: ['thm-recursion', 'def-ordered-field', 'def-natural-numbers'] },
  { id: 'lem-finite-sum-laws', kind: 'lemma', deps: ['def-finite-sum', 'thm-induction-principle', 'def-ordered-field', 'def-field'] },
  { id: 'def-integer-power', kind: 'definition', deps: ['thm-recursion', 'def-ordered-field', 'def-integers', 'def-field'] },
  { id: 'lem-power-laws', kind: 'lemma', deps: ['def-integer-power', 'thm-induction-principle', 'def-field', 'def-int-operations'] },
  { id: 'lem-power-monotone', kind: 'lemma', deps: ['def-integer-power', 'lem-of-sign-rules', 'prop-of-multiply-inequalities', 'thm-induction-principle'] },
  { id: 'lem-bernoulli-inequality', kind: 'lemma', deps: ['def-integer-power', 'thm-induction-principle', 'lem-of-add-order', 'lem-of-sign-rules', 'lem-of-square-positive'] },
  { id: 'lem-power-difference-factorisation', kind: 'lemma', deps: ['def-integer-power', 'def-finite-sum', 'lem-finite-sum-laws', 'thm-induction-principle'] },
  { id: 'thm-nth-roots-exist', kind: 'theorem', deps: ['def-complete-ordered-field', 'lem-sup-epsilon', 'lem-sup-unique', 'lem-power-monotone', 'lem-power-difference-factorisation', 'def-bounded-set', 'lem-of-add-order'] },
  { id: 'def-rational-power', kind: 'definition', deps: ['thm-nth-roots-exist', 'def-integer-power', 'def-rationals', 'lem-rat-positive-denominator'] },
  { id: 'lem-rational-power-well-defined', kind: 'lemma', deps: ['def-rational-power', 'thm-nth-roots-exist', 'lem-power-monotone', 'lem-power-laws'] },
  { id: 'lem-rational-power-laws', kind: 'lemma', deps: ['def-rational-power', 'lem-rational-power-well-defined', 'lem-power-laws', 'thm-nth-roots-exist', 'def-rat-operations'] },
  { id: 'lem-rational-power-monotone', kind: 'lemma', deps: ['def-rational-power', 'lem-rational-power-laws', 'lem-power-monotone', 'lem-rational-power-well-defined', 'def-rat-order'] },
  { id: 'lem-triangle-inequality-finite', kind: 'lemma', deps: ['def-finite-sum', 'lem-of-triangle-inequality', 'thm-induction-principle', 'lem-of-abs-value'] },
  { id: 'thm-am-gm', kind: 'theorem', deps: ['def-finite-sum', 'lem-finite-sum-laws', 'def-integer-power', 'thm-nth-roots-exist', 'thm-induction-principle', 'lem-of-square-positive', 'lem-power-monotone'] },
  { id: 'thm-weighted-am-gm-rational', kind: 'theorem', deps: ['thm-am-gm', 'def-rational-power', 'lem-rational-power-laws', 'def-finite-sum', 'lem-finite-sum-laws'] },
  { id: 'thm-young-inequality', kind: 'theorem', deps: ['thm-weighted-am-gm-rational', 'def-rational-power', 'lem-rational-power-laws'] },
  { id: 'thm-cauchy-schwarz-finite', kind: 'theorem', deps: ['def-finite-sum', 'lem-finite-sum-laws', 'lem-of-square-positive', 'thm-of-square-roots', 'def-integer-power', 'lem-of-square-monotone'] },
  { id: 'thm-holder-finite', kind: 'theorem', deps: ['thm-young-inequality', 'def-finite-sum', 'lem-finite-sum-laws', 'def-rational-power', 'lem-rational-power-laws'] },
  { id: 'thm-minkowski-finite', kind: 'theorem', deps: ['thm-holder-finite', 'def-finite-sum', 'lem-finite-sum-laws', 'def-rational-power', 'lem-rational-power-laws', 'lem-triangle-inequality-finite'] },
  { id: 'fs-negative-has-square-root', kind: 'false-statement', deps: ['thm-of-square-roots', 'lem-of-square-positive', 'thm-nth-roots-exist'] },
  { id: 'fs-rational-power-of-negative-base', kind: 'false-statement', deps: ['def-rational-power', 'lem-rational-power-well-defined', 'thm-nth-roots-exist'] },
  { id: 'rem-real-exponents-deferred', kind: 'remark', deps: ['def-rational-power', 'lem-rational-power-monotone'] },
];

// Design: research/design-round2.md. R is proved uncountable by Cantor's 1874
// nested-interval argument, NOT by the decimal diagonal: decimal expansions are
// series, which do not exist until RA-08, and the nested intervals need only the
// least-upper-bound property. The pure diagonal survives as thm-cantor-powerset.
const RA03_ITEMS = [
  { id: 'def-injection-surjection-bijection', kind: 'definition', deps: [] },
  { id: 'def-equinumerous', kind: 'definition', deps: ['def-injection-surjection-bijection'] },
  { id: 'def-countable', kind: 'definition', deps: ['def-equinumerous', 'def-natural-numbers', 'def-nat-order'] },
  { id: 'thm-schroder-bernstein', kind: 'theorem', deps: ['def-injection-surjection-bijection', 'def-equinumerous', 'thm-recursion'] },
  { id: 'lem-subset-of-countable', kind: 'lemma', deps: ['def-countable', 'thm-well-ordering-principle', 'thm-recursion', 'thm-strong-induction'] },
  { id: 'lem-countable-iff-surjection-from-n', kind: 'lemma', deps: ['def-countable', 'thm-well-ordering-principle', 'def-injection-surjection-bijection', 'lem-subset-of-countable'] },
  { id: 'lem-finite-subsets-listable', kind: 'lemma', deps: ['def-countable', 'def-equinumerous', 'thm-induction-principle', 'lem-nat-discrete'] },
  { id: 'thm-n-cross-n-countable', kind: 'theorem', deps: ['def-countable', 'def-equinumerous', 'def-injection-surjection-bijection', 'lem-nat-no-zero-divisors', 'thm-strong-induction'] },
  { id: 'thm-product-of-countable', kind: 'theorem', deps: ['thm-n-cross-n-countable', 'def-countable', 'lem-countable-iff-surjection-from-n'] },
  { id: 'def-countable-choice', kind: 'definition', deps: ['def-choice-function', 'def-axiom-of-choice', 'def-countable'] },
  { id: 'thm-countable-union-of-countable', kind: 'theorem', deps: ['def-countable-choice', 'thm-n-cross-n-countable', 'lem-countable-iff-surjection-from-n'] },
  { id: 'thm-rationals-countable', kind: 'theorem', deps: ['thm-n-cross-n-countable', 'thm-product-of-countable', 'def-rationals', 'lem-rat-positive-denominator', 'def-countable', 'lem-subset-of-countable', 'def-integers'] },
  { id: 'thm-cantor-powerset', kind: 'theorem', deps: ['def-injection-surjection-bijection', 'def-equinumerous'] },
  { id: 'thm-r-uncountable', kind: 'theorem', deps: ['def-countable', 'def-complete-ordered-field', 'thm-recursion', 'lem-sup-epsilon', 'lem-sup-unique', 'def-bounded-set', 'lem-countable-iff-surjection-from-n', 'lem-of-add-order'] },
  { id: 'cor-irrationals-uncountable', kind: 'corollary', deps: ['thm-r-uncountable', 'thm-rationals-countable', 'def-countable', 'lem-countable-iff-surjection-from-n'] },
  { id: 'fs-countable-union-theorem-of-zf', kind: 'false-statement', deps: ['thm-countable-union-of-countable', 'def-countable-choice'] },
  { id: 'fs-infinite-has-countable-subset-in-zf', kind: 'false-statement', deps: ['def-countable', 'def-countable-choice'] },
  { id: 'fs-uncountable-contains-interval', kind: 'false-statement', deps: ['cor-irrationals-uncountable', 'lem-rat-embeds-dense', 'def-countable'] },
  { id: 'rem-continuum-hypothesis', kind: 'remark', deps: ['thm-cantor-powerset', 'thm-r-uncountable'] },
];

// Design: research/design-round2.md. Convergence and Cauchy for real sequences
// are ALREADY defined by the published def-real-limit; this page never redefines
// them, exactly as RA-01 never redefines the supremum.
const RA04_ITEMS = [
  { id: 'def-sequence', kind: 'definition', deps: ['def-real-numbers', 'def-natural-numbers', 'def-nat-order', 'def-real-limit'] },
  { id: 'lem-limit-of-tail', kind: 'lemma', deps: ['def-sequence', 'def-real-limit'] },
  { id: 'lem-limit-unique', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'thm-of-archimedean', 'lem-of-triangle-inequality', 'lem-of-abs-value'] },
  { id: 'lem-convergent-implies-bounded', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'lem-finite-set-has-max', 'lem-of-triangle-inequality', 'lem-of-abs-value', 'def-max-min'] },
  { id: 'lem-convergent-implies-cauchy', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'lem-of-triangle-inequality'] },
  { id: 'lem-null-times-bounded', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'lem-of-abs-value', 'lem-of-sign-rules', 'thm-of-archimedean'] },
  { id: 'thm-algebra-of-limits', kind: 'theorem', deps: ['def-real-limit', 'def-sequence', 'lem-convergent-implies-bounded', 'lem-of-triangle-inequality', 'lem-of-abs-value', 'thm-of-archimedean', 'lem-of-inverse-positive'] },
  { id: 'lem-limit-preserves-order', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'thm-algebra-of-limits', 'thm-of-archimedean', 'lem-of-add-order'] },
  { id: 'thm-squeeze', kind: 'theorem', deps: ['def-real-limit', 'def-sequence', 'lem-of-add-order', 'lem-of-abs-value'] },
  { id: 'lem-limit-abs', kind: 'lemma', deps: ['def-real-limit', 'def-sequence', 'cor-of-reverse-triangle', 'lem-of-abs-value'] },
  { id: 'def-divergence-to-infinity', kind: 'definition', deps: ['def-sequence', 'def-real-order', 'def-real-limit'] },
  { id: 'lem-reciprocal-of-null-diverges', kind: 'lemma', deps: ['def-divergence-to-infinity', 'def-real-limit', 'lem-of-inverse-positive', 'prop-of-reciprocal-order'] },
  { id: 'lem-index-map-grows', kind: 'lemma', deps: ['def-sequence', 'thm-induction-principle', 'lem-nat-discrete', 'def-nat-order'] },
  { id: 'lem-subsequence-inherits-limit', kind: 'lemma', deps: ['def-sequence', 'def-real-limit', 'lem-index-map-grows'] },
  { id: 'fs-bounded-implies-convergent', kind: 'false-statement', deps: ['def-real-limit', 'lem-convergent-implies-bounded', 'def-sequence'] },
  { id: 'fs-limit-preserves-strict-inequality', kind: 'false-statement', deps: ['lem-limit-preserves-order', 'def-real-limit', 'thm-of-archimedean'] },
  { id: 'fs-subsequence-convergence-implies-convergence', kind: 'false-statement', deps: ['lem-subsequence-inherits-limit', 'def-sequence', 'def-real-limit'] },
  { id: 'rem-sequence-conventions', kind: 'remark', deps: ['def-sequence', 'def-real-limit', 'lem-limit-of-tail'] },
];

RA(1, 'suprema-and-infima', 'Suprema and Infima', [FND], { items: RA01_ITEMS, bItems: RA01_B_ITEMS });
RA(2, 'roots-and-rational-powers', 'Roots, Rational Powers, and Classical Inequalities', [ra[1]], { items: RA02_ITEMS });
RA(3, 'countability-and-uncountability', 'Countability and the Uncountability of R', [ra[1], F1, XSET], { items: RA03_ITEMS });
RA(4, 'sequences-and-limits', 'Sequences and Limits', [ra[1]], { ...trigNote, items: RA04_ITEMS });
RA(5, 'monotone-sequences-and-cauchy-completeness', 'Monotone Sequences, Bolzano–Weierstrass, and Cauchy Completeness', [ra[4], ra[2]]);
// Metric spaces sit HERE, immediately after Cauchy completeness (owner decision
// 2026-07-25). The analysis pages that genuinely want metric language (R^n,
// uniform convergence, C(K)) then have it, while the R-specific pages keep
// proving things R-natively by bisection and least upper bound. General topology
// still comes after the whole analysis track and specialises.
T(1, 'metric-spaces', 'Metric Spaces', [ra[5]]);
T(2, 'completeness-and-uniform-continuity', 'Completeness, Completion, and Uniform Continuity', [t[1]]);
T(3, 'compactness-in-metric-spaces', 'Compactness in Metric Spaces', [t[2], ra[3]]);

RA(6, 'limsup-and-subsequential-limits', 'limsup, liminf, and Subsequential Limits', [ra[5]]);
RA(7, 'equivalent-forms-of-completeness', 'Equivalent Forms of Completeness', [ra[6]]);
RA(8, 'series-and-nonnegative-tests', 'Series: Convergence and the Nonnegative Tests', [ra[6]]);
RA(9, 'absolute-convergence-and-rearrangement', 'Absolute and Conditional Convergence; Rearrangement; Products', [ra[8]]);
RA(10, 'topology-of-r', 'Topology of R', [ra[5], ra[3]], trigNote);
RA(11, 'cantor-set-baire-and-measure-zero', 'The Cantor Set, Baire Category, and Measure Zero in R', [ra[10]]);
RA(12, 'limits-of-real-functions', 'Limits of Real Functions', [ra[10]], trigNote);
RA(13, 'continuity-ivt-evt-and-uniform-continuity', 'Continuity, IVT, EVT, and Uniform Continuity', [ra[12]], trigNote);
RA(14, 'monotone-functions-and-discontinuities', 'Monotone Functions, Discontinuities, and Continuity Sets', [ra[13], ra[11]]);
RA(15, 'the-derivative-and-mean-value-theorems', 'The Derivative and the Mean Value Theorems', [ra[13]], trigNote);
RA(16, 'darboux-lhopital-and-taylor', "Darboux, L'Hôpital, and Taylor's Theorem", [ra[15]], trigNote);
RA(17, 'convexity', 'Convexity', [ra[16]]);
RA(18, 'the-riemann-integral', 'The Riemann Integral: Definition and Integrability', [ra[13], ra[11]], trigNote);
RA(19, 'properties-of-the-integral-and-the-working-ftc', 'Properties of the Integral and the Working FTC', [ra[18], ra[15]]);
RA(20, 'bounded-variation-and-riemann-stieltjes', 'Bounded Variation and the Riemann–Stieltjes Integral', [ra[19]]);
RA(21, 'improper-integrals', 'Improper Integrals', [ra[19]]);
RA(22, 'rn-as-a-normed-space', 'R^n as a Normed Space; Vector-Valued Functions', [ra[15], t[1]]);
RA(23, 'uniform-convergence-of-functions', 'Sequences and Series of Functions; Uniform Convergence', [ra[22], ra[19], t[2]], trigNote);
RA(24, 'approximation-and-compactness-in-ck', 'Approximation and Compactness in C(K)', [ra[23], t[3]]);
RA(25, 'power-series-and-real-analytic-functions', 'Power Series and Real-Analytic Functions', [ra[23], ra[9]]);
RA(26, 'the-exponential-function', 'The Exponential Function', [ra[25]]);
RA(27, 'the-logarithm-and-general-powers', 'The Logarithm, General Powers, and the Sup Definition', [ra[26]]);
RA(28, TRIG, 'Sine, Cosine, and the Definition of pi', [ra[26]]);
RA(29, 'arc-length-and-rectifiable-curves', 'Arc Length and Rectifiable Curves', [ra[20], ra[22]]);
RA(30, 'pi-the-equivalent-characterizations', 'pi: the Equivalent Characterizations', [ra[29], ra[28]]);
RA(31, 'fundamental-trigonometric-identities', 'Fundamental Trigonometric Identities', [ra[28]]);
RA(32, 'further-trigonometric-identities-and-inverses', 'Further Trigonometric Identities and Inverse Functions', [ra[31], ra[14]]);
RA(33, 'the-complex-exponential-and-eulers-formula', "The Complex Exponential and Euler's Formula", [ra[28]]);
RA(34, 'the-total-derivative', 'The Total Derivative in R^m -> R^n', [ra[22], ra[16]]);
RA(35, 'mixed-partials-taylor-and-extrema', 'Mixed Partials, Taylor, and Extrema in Several Variables', [ra[34]]);
RA(36, 'inverse-and-implicit-function-theorems', 'The Inverse and Implicit Function Theorems', [ra[35], ra[23]]);
RA(37, 'the-riemann-integral-in-rn-and-jordan-content', 'The Riemann Integral in R^m and Jordan Content', [ra[18], ra[22]]);
RA(38, 'fubini-and-change-of-variables', 'Fubini and Change of Variables', [ra[37], ra[36]]);
RA(39, 'the-fundamental-theorems-of-calculus', 'The Fundamental Theorems of Calculus', [ra[20]]);
RA(40, 'line-integrals-and-the-gradient-theorem', 'Line Integrals and the Gradient Theorem', [ra[39], ra[34], ra[29]]);

// ------------------------------------------------- foundations II (before topology)

// Design: research/design-round2.md. This is where ordinals ARRIVE. F1 is
// deliberately ordinal-free, and Bourbaki–Witt is what buys that, so nothing here
// may be cited backwards into it.
const F2A_ITEMS = [
  { id: 'def-well-order', kind: 'definition', deps: ['def-partial-order', 'def-chain'] },
  { id: 'def-order-isomorphism', kind: 'definition', deps: ['def-partial-order'] },
  { id: 'def-initial-segment', kind: 'definition', deps: ['def-well-order'] },
  { id: 'thm-transfinite-induction', kind: 'theorem', deps: ['def-well-order', 'def-initial-segment'] },
  { id: 'thm-transfinite-recursion', kind: 'theorem', deps: ['thm-transfinite-induction', 'def-well-order', 'def-initial-segment'] },
  { id: 'lem-well-order-rigid', kind: 'lemma', deps: ['def-well-order', 'def-order-isomorphism', 'thm-transfinite-induction', 'def-initial-segment'] },
  { id: 'lem-well-order-comparability', kind: 'lemma', deps: ['lem-well-order-rigid', 'thm-transfinite-recursion', 'def-initial-segment', 'def-order-isomorphism', 'def-well-order'] },
  { id: 'def-ordinal', kind: 'definition', deps: ['def-well-order', 'def-natural-numbers', 'lem-nat-transitive-irreflexive'] },
  { id: 'lem-ordinal-basics', kind: 'lemma', deps: ['def-ordinal', 'def-well-order', 'lem-nat-transitive-irreflexive'] },
  { id: 'lem-ordinal-trichotomy', kind: 'lemma', deps: ['lem-ordinal-basics', 'def-ordinal', 'thm-transfinite-induction', 'def-well-order'] },
  { id: 'thm-burali-forti', kind: 'theorem', deps: ['lem-ordinal-basics', 'lem-ordinal-trichotomy', 'def-ordinal'] },
  { id: 'thm-mostowski-collapse', kind: 'theorem', deps: ['thm-transfinite-recursion', 'def-ordinal', 'def-well-order', 'def-order-isomorphism', 'lem-ordinal-basics', 'def-initial-segment'] },
  { id: 'def-limit-ordinal', kind: 'definition', deps: ['def-ordinal', 'lem-ordinal-basics'] },
  { id: 'lem-omega-least-limit-ordinal', kind: 'lemma', deps: ['def-limit-ordinal', 'def-ordinal', 'def-natural-numbers', 'lem-omega-smallest-inductive', 'lem-nat-nonzero-is-successor'] },
  { id: 'thm-hartogs', kind: 'theorem', deps: ['thm-mostowski-collapse', 'def-ordinal', 'lem-ordinal-trichotomy', 'def-well-order', 'lem-ordinal-basics'] },
  { id: 'thm-well-ordering-theorem', kind: 'theorem', deps: ['thm-zorn', 'def-well-order', 'def-partial-order', 'def-initial-segment', 'def-upper-bound', 'def-maximal-element', 'def-chain'] },
  { id: 'thm-well-ordering-implies-ac', kind: 'theorem', deps: ['def-well-order', 'def-choice-function', 'def-axiom-of-choice'] },
  { id: 'cor-ac-iff-well-ordering', kind: 'corollary', deps: ['thm-well-ordering-theorem', 'thm-well-ordering-implies-ac', 'cor-ac-iff-zorn', 'def-axiom-of-choice'] },
  { id: 'def-cardinal', kind: 'definition', deps: ['def-ordinal', 'thm-well-ordering-theorem', 'thm-hartogs', 'lem-ordinal-trichotomy'] },
  { id: 'fs-ordinals-form-a-set', kind: 'false-statement', deps: ['thm-burali-forti', 'def-ordinal'] },
  { id: 'fs-every-set-well-orderable-in-zf', kind: 'false-statement', deps: ['thm-well-ordering-theorem', 'cor-ac-iff-well-ordering', 'fs-zorn-provable-in-zf'] },
  { id: 'fs-transfinite-induction-needs-choice', kind: 'false-statement', deps: ['thm-transfinite-induction', 'thm-transfinite-recursion'] },
  { id: 'rem-choice-ledger', kind: 'remark', deps: ['cor-ac-iff-well-ordering', 'cor-ac-iff-zorn', 'thm-hartogs'] },
];

const F2 = AB('ordinals-and-transfinite-recursion', 'Ordinals, Cardinals, and Transfinite Recursion',
  'foundations', [F1, XSET], { items: F2A_ITEMS });

// ------------------------------------------------- general topology (T1-T3 are above)

T(4, 'topological-spaces-and-continuity', 'Topological Spaces and Continuity', [t[1]]);
T(5, 'subspaces-products-and-quotients', 'Subspaces, Products, and Quotients', [t[4]]);
T(6, 'connectedness', 'Connectedness', [t[5]]);
T(7, 'compactness', 'Compactness', [t[5], F1B]);   // Tychonoff via ultrafilters
T(8, 'nets-and-filters', 'Convergence: Nets and Filters', [t[7]]);
T(9, 'separation-axioms', 'Separation Axioms: the Hierarchy', [t[5]]);
T(10, 'hausdorff-via-the-diagonal', 'Hausdorff via the Diagonal', [t[9]]);
T(11, 'hereditary-and-productive-separation', 'Hereditary and Productive Behaviour of the Separation Axioms', [t[10], t[7], F2]);
T(12, 'urysohn-lemma-and-tietze', "Urysohn's Lemma and the Tietze Extension Theorem", [t[9]]);
T(13, 'partitions-of-unity-and-paracompactness', 'Partitions of Unity and Paracompactness', [t[12], t[7]]);
T(14, 'tychonoff-embedding-and-stone-cech', 'The Tychonoff Embedding and the Stone–Čech Compactification', [t[12], t[8]]);
T(15, 'countability-axioms-and-cardinal-functions', 'Countability Axioms and Cardinal Functions', [t[5], F2]);
T(16, 'metrization-theorems', 'Metrization: Urysohn, Nagata–Smirnov, Bing, Smirnov', [t[15], t[13]]);
T(17, 'complete-metrizability-and-baire', 'Complete Metrizability, Čech-Completeness, and Baire Category', [t[16], t[3]]);
T(18, 'uniform-spaces', 'Uniform Spaces: the Three Definitions', [t[2], t[7]]);
T(19, 'uniform-completeness-and-samuel-compactification', 'Uniform Completeness, Completion, and the Samuel Compactification', [t[18], t[14]]);
T(20, 'function-space-topologies', 'Function Space Topologies and the Exponential Law', [t[5], t[3]]);
T(21, 'ascoli-arzela', 'The Ascoli–Arzelà Theorem', [t[20], ra[24]]);
T(22, 'stone-weierstrass-general', 'Stone–Weierstrass in General', [t[20], ra[24], t[7]]);

writeFileSync(
  '/root/Projects/prestige-math-library/research/plan-spec.json',
  JSON.stringify({
    note: 'Machine-checked design for the Real Analysis + Topology expansion. Run: node tools/validate-plan.mjs research/plan-spec.json. Pages with an empty items[] are validated at PAGE level only (reading order + declared prerequisites); their item lists land as each page is authored.',
    generated: '2026-07-25',
    pages,
  }, null, 2) + '\n',
);
console.log(`${pages.length} pages, ${pages.reduce((n, p) => n + p.items.length, 0)} items written`);
