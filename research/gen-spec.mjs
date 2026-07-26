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

// Design: research/plan-realanalysis-pages.md RA-05. The Cauchy criterion is
// ALREADY published as thm-reals-cauchy-complete, proved inside the Cauchy
// construction of R. This page proves it AGAIN, from the least-upper-bound
// property alone via Bolzano-Weierstrass, under a distinct id: the two routes
// are the content of the completeness equivalences, so collapsing them would
// make that page vacuous. rem-completeness-routes records the duplication.
const RA05_ITEMS = [
  { id: 'def-interval', kind: 'definition',
    title: 'Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length',
    deps: ['def-complete-ordered-field', 'def-real-order', 'def-bounded-set'] },
  { id: 'def-monotone-sequence', kind: 'definition',
    title: 'Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences',
    deps: ['def-sequence', 'def-real-order', 'def-complete-ordered-field'] },
  { id: 'thm-monotone-convergence', kind: 'theorem',
    title: 'A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum',
    strategy: 'direct',
    deps: ['def-monotone-sequence', 'def-sequence', 'def-real-limit', 'def-complete-ordered-field', 'lem-sup-epsilon', 'lem-sup-unique', 'lem-inf-epsilon', 'thm-infimum-property', 'def-bounded-set'] },
  { id: 'lem-monotone-unbounded-diverges', kind: 'lemma',
    title: 'A nondecreasing sequence that is not bounded above diverges to $+\\infty$',
    strategy: 'direct',
    deps: ['def-monotone-sequence', 'def-divergence-to-infinity', 'def-sequence', 'def-bounded-set', 'def-complete-ordered-field'] },
  { id: 'cor-monotone-converges-iff-bounded', kind: 'corollary',
    title: 'A monotone sequence converges if and only if it is bounded',
    strategy: 'direct',
    deps: ['thm-monotone-convergence', 'lem-monotone-unbounded-diverges', 'lem-convergent-implies-bounded', 'def-monotone-sequence', 'def-bounded-set', 'def-sequence'] },
  { id: 'thm-nested-interval-property', kind: 'theorem',
    title: 'A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$',
    strategy: 'direct',
    deps: ['def-interval', 'def-monotone-sequence', 'thm-monotone-convergence', 'def-complete-ordered-field', 'lem-sup-epsilon', 'lem-sup-unique', 'thm-infimum-property', 'def-bounded-set', 'def-real-limit', 'thm-of-archimedean', 'lem-of-add-order', 'thm-algebra-of-limits', 'lem-limit-unique', 'lem-of-inverse-positive'] },
  { id: 'def-subsequential-limit', kind: 'definition',
    title: 'Subsequential limit of a real sequence, and the subsequential limit set',
    deps: ['def-sequence', 'def-real-limit', 'lem-index-map-grows'] },
  { id: 'lem-peak-monotone-subsequence', kind: 'lemma',
    title: 'Every real sequence has a monotone subsequence (the peak / rising-sun lemma)',
    strategy: 'cases',
    deps: ['def-sequence', 'def-monotone-sequence', 'def-real-order', 'lem-index-map-grows', 'thm-recursion', 'thm-well-ordering-principle', 'def-nat-order', 'lem-nat-discrete'] },
  { id: 'thm-bolzano-weierstrass', kind: 'theorem',
    title: 'Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence',
    strategy: 'direct',
    deps: ['lem-peak-monotone-subsequence', 'thm-monotone-convergence', 'cor-monotone-converges-iff-bounded', 'def-subsequential-limit', 'def-sequence', 'def-monotone-sequence', 'def-bounded-set'] },
  { id: 'lem-cauchy-sequence-bounded', kind: 'lemma',
    title: 'Every Cauchy sequence of reals is bounded',
    strategy: 'direct',
    deps: ['def-real-limit', 'def-sequence', 'lem-finite-set-has-max', 'lem-of-triangle-inequality', 'lem-of-abs-value', 'def-max-min', 'lem-rat-embeds-dense'] },
  { id: 'lem-cauchy-with-convergent-subsequence', kind: 'lemma',
    title: 'A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit',
    strategy: 'direct',
    deps: ['def-real-limit', 'def-sequence', 'def-subsequential-limit', 'lem-index-map-grows', 'lem-of-triangle-inequality', 'lem-rat-embeds-dense'] },
  { id: 'thm-cauchy-criterion-via-lub', kind: 'theorem',
    title: 'The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges',
    strategy: 'direct',
    deps: ['lem-cauchy-sequence-bounded', 'thm-bolzano-weierstrass', 'lem-cauchy-with-convergent-subsequence', 'def-real-limit', 'def-complete-ordered-field'] },
  { id: 'lem-geometric-sequence-null', kind: 'lemma',
    title: 'For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$',
    strategy: 'cases',
    deps: ['def-integer-power', 'lem-bernoulli-inequality', 'lem-power-monotone', 'thm-of-archimedean', 'def-real-limit', 'def-divergence-to-infinity', 'lem-of-inverse-positive', 'lem-of-abs-value', 'prop-of-reciprocal-order', 'thm-induction-principle', 'prop-of-multiply-inequalities'] },
  { id: 'def-contractive-sequence', kind: 'definition',
    title: 'Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$',
    deps: ['def-sequence', 'def-real-order', 'lem-of-abs-value'] },
  { id: 'thm-contractive-implies-cauchy', kind: 'theorem',
    title: 'Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$',
    strategy: 'induction',
    deps: ['def-contractive-sequence', 'thm-cauchy-criterion-via-lub', 'lem-geometric-sequence-null', 'def-integer-power', 'lem-power-monotone', 'lem-power-difference-factorisation', 'lem-triangle-inequality-finite', 'def-finite-sum', 'lem-finite-sum-laws', 'thm-induction-principle', 'def-real-limit', 'thm-algebra-of-limits', 'lem-limit-abs', 'lem-limit-preserves-order', 'lem-of-inverse-positive'] },
  { id: 'fs-nested-open-intervals-nonempty', kind: 'false-statement',
    title: 'FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection',
    strategy: 'direct',
    deps: ['thm-nested-interval-property', 'def-interval', 'thm-of-archimedean', 'lem-of-inverse-positive'] },
  { id: 'fs-consecutive-differences-null-implies-cauchy', kind: 'false-statement',
    title: 'FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy',
    strategy: 'direct',
    deps: ['def-real-limit', 'def-sequence', 'def-contractive-sequence', 'thm-contractive-implies-cauchy', 'thm-of-square-roots', 'lem-power-difference-factorisation', 'lem-power-monotone', 'lem-of-inverse-positive', 'thm-of-archimedean', 'lem-cauchy-sequence-bounded'] },
  { id: 'fs-convergent-subsequence-implies-bounded', kind: 'false-statement',
    title: 'FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)',
    strategy: 'direct',
    deps: ['thm-bolzano-weierstrass', 'def-subsequential-limit', 'def-sequence', 'def-bounded-set', 'def-real-limit', 'thm-recursion', 'thm-induction-principle', 'lem-index-map-grows', 'thm-of-archimedean'] },
  { id: 'rem-completeness-routes', kind: 'remark',
    title: 'Two independent proofs that $\\mathbb{R}$ is Cauchy complete, and why the library records both',
    deps: ['thm-cauchy-criterion-via-lub', 'thm-reals-cauchy-complete', 'thm-bolzano-weierstrass', 'thm-nested-interval-property', 'def-complete-ordered-field'] },
];

const RA05_B_ITEMS = [
  { id: 'ex-babylonian-sqrt-two', kind: 'example',
    title: 'The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$',
    deps: ['thm-monotone-convergence', 'def-monotone-sequence', 'thm-of-square-roots', 'thm-algebra-of-limits', 'lem-limit-unique', 'thm-induction-principle', 'lem-power-monotone', 'lem-limit-preserves-order', 'lem-limit-of-tail'] },
  { id: 'ex-recursive-sqrt-two-plus-x', kind: 'example',
    title: 'The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$',
    deps: ['thm-monotone-convergence', 'def-monotone-sequence', 'thm-of-square-roots', 'thm-algebra-of-limits', 'thm-induction-principle', 'lem-limit-of-tail', 'lem-limit-preserves-order', 'lem-power-monotone'] },
  { id: 'ex-nested-intervals-single-point', kind: 'example',
    title: 'The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$',
    deps: ['thm-nested-interval-property', 'def-interval', 'thm-of-archimedean', 'lem-of-inverse-positive'] },
  { id: 'ex-two-subsequential-limits', kind: 'example',
    title: 'The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$',
    deps: ['thm-bolzano-weierstrass', 'def-subsequential-limit', 'thm-algebra-of-limits', 'lem-subsequence-inherits-limit', 'thm-of-archimedean', 'lem-of-inverse-positive', 'thm-recursion', 'thm-induction-principle'] },
  { id: 'ex-contractive-sequence-fixed-point', kind: 'example',
    title: 'The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$',
    deps: ['thm-contractive-implies-cauchy', 'def-contractive-sequence', 'thm-algebra-of-limits', 'lem-limit-of-tail', 'lem-limit-unique'] },
  { id: 'cex-cauchy-rationals-no-rational-limit', kind: 'counterexample',
    title: 'The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit',
    // reuses the sequence s_n = k_n/10^n built in the PUBLISHED fs-rationals-complete,
    // rather than re-deriving floor/decimal machinery the library does not have
    deps: ['def-real-limit', 'thm-of-square-roots', 'fs-sqrt2-rational', 'def-rationals', 'lem-rat-embeds-dense', 'thm-cauchy-criterion-via-lub', 'fs-rationals-complete', 'lem-convergent-implies-cauchy', 'lem-limit-unique', 'lem-geometric-sequence-null', 'thm-squeeze'] },
  { id: 'cex-nested-open-intervals-empty', kind: 'counterexample',
    title: 'The nested open intervals $(0, 1/k)$ have empty intersection',
    deps: ['fs-nested-open-intervals-nonempty', 'def-interval', 'thm-of-archimedean', 'lem-of-inverse-positive'] },
  { id: 'cex-nested-unbounded-closed-empty', kind: 'counterexample',
    title: 'The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped',
    deps: ['thm-nested-interval-property', 'def-interval', 'thm-of-archimedean'] },
  { id: 'cex-sqrt-k-differences-null-not-cauchy', kind: 'counterexample',
    title: '$x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy',
    deps: ['fs-consecutive-differences-null-implies-cauchy', 'thm-of-square-roots', 'def-real-limit', 'def-divergence-to-infinity', 'thm-of-archimedean', 'lem-cauchy-sequence-bounded', 'lem-power-difference-factorisation', 'lem-power-monotone', 'lem-of-inverse-positive'] },
  { id: 'cex-unbounded-with-convergent-subsequence', kind: 'counterexample',
    title: 'The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence',
    deps: ['fs-convergent-subsequence-implies-bounded', 'def-subsequential-limit', 'def-sequence', 'def-bounded-set', 'def-real-limit', 'thm-recursion', 'thm-induction-principle', 'lem-index-map-grows', 'thm-of-archimedean'] },
  { id: 'cex-strictly-decreasing-gaps-no-limit', kind: 'counterexample',
    title: '$x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists',
    deps: ['def-contractive-sequence', 'thm-contractive-implies-cauchy', 'def-divergence-to-infinity', 'def-monotone-sequence', 'thm-of-archimedean', 'thm-induction-principle', 'lem-power-monotone', 'lem-of-inverse-positive'] },
];

// Design: research/plan-realanalysis-pages.md RA-06. The ratio-to-root
// inequality lives HERE (Rudin 3.37) rather than in the series block, because
// it is a statement about limsup and is what makes the root test dominate the
// ratio test.
const RA06_ITEMS = [
  { id: 'def-extended-reals', kind: 'definition',
    title: 'The extended real line $\\mathbb{R}^{*} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined',
    deps: ['def-real-numbers', 'def-real-order', 'def-complete-ordered-field', 'def-divergence-to-infinity'] },
  { id: 'def-limsup-liminf', kind: 'definition',
    title: 'Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\mathbb{R}^{*}$',
    deps: ['def-extended-reals', 'def-sequence', 'def-complete-ordered-field', 'thm-infimum-property', 'def-bounded-set', 'def-infimum'] },
  { id: 'lem-limsup-exists', kind: 'lemma',
    title: 'The tail suprema of any real sequence are nonincreasing in $\\mathbb{R}^{*}$, so the limit superior exists for every sequence',
    strategy: 'cases',
    deps: ['def-limsup-liminf', 'def-extended-reals', 'def-monotone-sequence', 'lem-sup-monotone', 'thm-infimum-property', 'def-bounded-set'] },
  { id: 'lem-limsup-reflection', kind: 'lemma',
    title: '$\\limsup(-x_k) = -\\liminf(x_k)$, with the reflection of $\\mathbb{R}^{*}$ exchanging $\\pm\\infty$',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-reflection', 'lem-limsup-exists', 'def-extended-reals', 'thm-infimum-property'] },
  { id: 'lem-liminf-le-limsup', kind: 'lemma',
    title: '$\\liminf x_k \\le \\limsup x_k$ for every real sequence',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-exists', 'lem-sup-monotone', 'def-extended-reals', 'thm-infimum-property'] },
  { id: 'lem-limsup-epsilon-characterisation', kind: 'lemma',
    title: 'For finite $L$: $L = \\limsup x_k$ iff for every $\\varepsilon > 0$ one has $x_k < L + \\varepsilon$ eventually and $x_k > L - \\varepsilon$ frequently',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-exists', 'lem-sup-epsilon', 'lem-inf-epsilon', 'def-sequence', 'def-extended-reals'] },
  { id: 'thm-convergence-iff-limsup-equals-liminf', kind: 'theorem',
    title: 'A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$',
    strategy: 'cases',
    deps: ['def-limsup-liminf', 'lem-limsup-epsilon-characterisation', 'lem-liminf-le-limsup', 'lem-limsup-reflection', 'def-real-limit', 'def-divergence-to-infinity', 'def-extended-reals'] },
  { id: 'thm-limsup-is-greatest-subsequential-limit', kind: 'theorem',
    title: 'The limit superior is itself a subsequential limit in $\\mathbb{R}^{*}$ and is the greatest one',
    strategy: 'constructive',
    deps: ['def-limsup-liminf', 'def-subsequential-limit', 'lem-limsup-epsilon-characterisation', 'lem-limsup-exists', 'thm-recursion', 'lem-index-map-grows', 'def-extended-reals', 'def-divergence-to-infinity', 'lem-limit-preserves-order'] },
  { id: 'cor-liminf-is-least-subsequential-limit', kind: 'corollary',
    title: 'The limit inferior is the least subsequential limit in $\\mathbb{R}^{*}$',
    strategy: 'direct',
    deps: ['thm-limsup-is-greatest-subsequential-limit', 'lem-limsup-reflection', 'def-limsup-liminf', 'def-subsequential-limit', 'lem-reflection'] },
  { id: 'thm-subsequential-limit-set-closed', kind: 'theorem',
    title: 'If each $y_j$ is a subsequential limit of $(x_k)$ and $y_j \\to y \\in \\mathbb{R}$, then $y$ is a subsequential limit of $(x_k)$',
    strategy: 'constructive',
    deps: ['def-subsequential-limit', 'def-real-limit', 'thm-recursion', 'lem-index-map-grows', 'lem-of-triangle-inequality', 'thm-of-archimedean', 'lem-rat-embeds-dense'] },
  { id: 'lem-limsup-monotone-comparison', kind: 'lemma',
    title: 'If $x_k \\le y_k$ eventually then $\\limsup x_k \\le \\limsup y_k$ and $\\liminf x_k \\le \\liminf y_k$',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-exists', 'lem-sup-monotone', 'lem-limit-of-tail', 'def-extended-reals'] },
  { id: 'thm-limsup-subadditive', kind: 'theorem',
    title: '$\\limsup(x_k + y_k) \\le \\limsup x_k + \\limsup y_k$ whenever the right-hand side is defined in $\\mathbb{R}^{*}$, and dually for $\\liminf$',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-exists', 'lem-sup-sum', 'lem-of-add-order', 'lem-limsup-reflection', 'def-extended-reals'] },
  { id: 'thm-limsup-submultiplicative', kind: 'theorem',
    title: 'For bounded nonnegative sequences, $\\limsup(x_k y_k) \\le (\\limsup x_k)(\\limsup y_k)$',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-exists', 'prop-of-multiply-inequalities', 'lem-sup-monotone', 'def-bounded-set'] },
  { id: 'lem-nth-root-of-n-tends-to-one', kind: 'lemma',
    title: '$n^{1/n} \\to 1$',
    strategy: 'direct',
    deps: ['thm-nth-roots-exist', 'thm-am-gm', 'def-rational-power', 'lem-rational-power-monotone', 'thm-squeeze', 'thm-of-archimedean', 'def-real-limit', 'def-finite-sum'] },
  { id: 'lem-nth-root-of-constant-tends-to-one', kind: 'lemma',
    title: 'For every $a > 0$, $a^{1/n} \\to 1$',
    strategy: 'cases',
    deps: ['thm-nth-roots-exist', 'lem-bernoulli-inequality', 'lem-power-monotone', 'thm-of-archimedean', 'thm-squeeze', 'def-rational-power', 'lem-rational-power-monotone', 'def-real-limit'] },
  { id: 'thm-ratio-root-inequality', kind: 'theorem',
    title: 'For $a_k > 0$: $\\liminf a_{k+1}/a_k \\le \\liminf a_k^{1/k} \\le \\limsup a_k^{1/k} \\le \\limsup a_{k+1}/a_k$',
    strategy: 'direct',
    deps: ['def-limsup-liminf', 'lem-limsup-epsilon-characterisation', 'lem-liminf-le-limsup', 'lem-limsup-reflection', 'thm-nth-roots-exist', 'def-rational-power', 'lem-rational-power-monotone', 'lem-nth-root-of-constant-tends-to-one', 'lem-power-monotone', 'def-integer-power', 'lem-power-laws', 'thm-of-archimedean', 'lem-limsup-monotone-comparison'] },
  { id: 'lem-power-over-geometric-null', kind: 'lemma',
    title: 'For every $p > 0$ and every positive rational $\\alpha$, $n^{\\alpha}/(1+p)^n \\to 0$',
    strategy: 'direct',
    deps: ['thm-ratio-root-inequality', 'def-rational-power', 'lem-rational-power-monotone', 'lem-rational-power-laws', 'lem-nth-root-of-n-tends-to-one', 'lem-geometric-sequence-null', 'lem-limsup-monotone-comparison', 'thm-convergence-iff-limsup-equals-liminf', 'def-integer-power', 'thm-squeeze'] },
  { id: 'lem-factorial-beats-geometric', kind: 'lemma',
    title: 'For every real $x$, $x^k/k! \\to 0$',
    strategy: 'direct',
    deps: ['def-finite-sum', 'lem-finite-sum-laws', 'def-integer-power', 'lem-geometric-sequence-null', 'thm-of-archimedean', 'thm-squeeze', 'def-real-limit', 'lem-of-abs-value', 'thm-induction-principle'] },
  { id: 'fs-limsup-additive', kind: 'false-statement',
    title: 'FALSE: $\\limsup(x_k + y_k) = \\limsup x_k + \\limsup y_k$',
    strategy: 'direct',
    deps: ['thm-limsup-subadditive', 'def-limsup-liminf', 'def-extended-reals'] },
  { id: 'fs-ratio-and-root-limits-always-agree', kind: 'false-statement',
    title: 'FALSE: $\\limsup a_k^{1/k} = \\limsup a_{k+1}/a_k$ for every positive sequence',
    strategy: 'direct',
    deps: ['thm-ratio-root-inequality', 'def-limsup-liminf', 'def-rational-power'] },
  { id: 'rem-extended-real-conventions', kind: 'remark',
    title: 'Which extended-real operations this library leaves undefined, and where each $\\limsup$ statement needs the hypothesis',
    deps: ['def-extended-reals', 'def-limsup-liminf', 'thm-limsup-subadditive', 'thm-limsup-submultiplicative'] },
];

const RA06_B_ITEMS = [
  { id: 'ex-limsup-of-alternating-sequence', kind: 'example',
    title: '$(-1)^k$ has $\\liminf = -1$ and $\\limsup = 1$, so it does not converge',
    deps: ['def-limsup-liminf', 'thm-convergence-iff-limsup-equals-liminf'] },
  { id: 'ex-subsequential-limits-fill-unit-interval', kind: 'example',
    title: 'The block sequence $1/1;\\ 1/2, 2/2;\\ 1/3, 2/3, 3/3;\\ \\dots$ has subsequential limit set exactly $[0,1]$',
    deps: ['def-subsequential-limit', 'thm-subsequential-limit-set-closed', 'lem-rat-embeds-dense', 'thm-of-archimedean', 'def-limsup-liminf', 'def-interval'] },
  { id: 'ex-ratio-fails-root-succeeds', kind: 'example',
    title: '$a_k = 2^{-k + (-1)^k}$ has $\\liminf a_{k+1}/a_k = 1/8$, $\\limsup a_{k+1}/a_k = 2$ and $\\lim a_k^{1/k} = 1/2$',
    deps: ['thm-ratio-root-inequality', 'def-limsup-liminf', 'def-integer-power', 'def-rational-power', 'lem-power-laws'] },
  { id: 'ex-strict-ratio-root-chain', kind: 'example',
    title: 'A positive sequence making all three inequalities of the ratio-to-root chain strict',
    deps: ['thm-ratio-root-inequality', 'def-limsup-liminf', 'ex-ratio-fails-root-succeeds'] },
  { id: 'ex-standard-limits-worked', kind: 'example',
    title: 'The four standard limits $n^{1/n} \\to 1$, $a^{1/n} \\to 1$, $n^{\\alpha}/(1+p)^n \\to 0$ and $x^k/k! \\to 0$, computed',
    deps: ['lem-nth-root-of-n-tends-to-one', 'lem-nth-root-of-constant-tends-to-one', 'lem-power-over-geometric-null', 'lem-factorial-beats-geometric'] },
  { id: 'cex-limsup-subadditivity-strict', kind: 'counterexample',
    title: '$x_k = (-1)^k$, $y_k = (-1)^{k+1}$ give $\\limsup(x_k + y_k) = 0 < 2 = \\limsup x_k + \\limsup y_k$',
    deps: ['fs-limsup-additive', 'thm-limsup-subadditive', 'def-limsup-liminf'] },
  { id: 'cex-limsup-infinite-not-attained-in-r', kind: 'counterexample',
    title: 'A sequence with $\\limsup = +\\infty$: the greatest subsequential limit exists only in $\\mathbb{R}^{*}$',
    deps: ['def-limsup-liminf', 'thm-limsup-is-greatest-subsequential-limit', 'def-extended-reals', 'def-divergence-to-infinity'] },
  { id: 'cex-limsup-product-strict', kind: 'counterexample',
    title: '$x_k = 1 + (-1)^k$, $y_k = 1 + (-1)^{k+1}$ give $\\limsup(x_k y_k) = 0 < 4$',
    deps: ['thm-limsup-submultiplicative', 'def-limsup-liminf'] },
  { id: 'cex-zero-times-infinity-indeterminate', kind: 'counterexample',
    title: 'Null times divergent has no rule: $x_k = 1/k$ with $y_k = ck$ gives product limit $c$, and with $y_k = k^2$ gives divergence',
    deps: ['def-extended-reals', 'def-divergence-to-infinity', 'thm-algebra-of-limits', 'thm-of-archimedean', 'rem-extended-real-conventions'] },
];

// Design: research/plan-realanalysis-pages.md RA-07. Every published sequence
// notion (def-sequence, def-real-limit, def-monotone-sequence) is stated for R,
// so an equivalence among completeness AXIOMS cannot use them without assuming
// what is to be proved. This page therefore restates the sequence vocabulary
// ONCE for an arbitrary ordered field, in def-sequences-in-an-ordered-field, and
// every implication below is a statement about that arbitrary field.
const RA07_ITEMS = [
  { id: 'def-sequences-in-an-ordered-field', kind: 'definition',
    title: 'Sequences, convergence, Cauchyness, monotonicity, boundedness and closed intervals in an arbitrary ordered field',
    deps: ['def-ordered-field', 'def-natural-numbers', 'def-nat-order', 'lem-of-abs-value', 'def-sequence', 'def-real-limit', 'def-monotone-sequence', 'def-interval', 'def-subsequential-limit'] },
  { id: 'def-completeness-properties', kind: 'definition',
    title: 'The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness',
    deps: ['def-sequences-in-an-ordered-field', 'def-ordered-field', 'def-archimedean-field', 'def-complete-ordered-field', 'def-bounded-set'] },
  { id: 'lem-lub-implies-nested-intervals', kind: 'lemma',
    title: 'An ordered field with the least-upper-bound property has the nested interval property and is Archimedean',
    strategy: 'direct',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'thm-of-archimedean', 'def-complete-ordered-field', 'lem-sup-epsilon', 'lem-sup-unique'] },
  { id: 'lem-nested-intervals-and-archimedean-imply-bw', kind: 'lemma',
    title: 'Nested intervals plus the Archimedean property imply Bolzano-Weierstrass, by repeated bisection',
    strategy: 'constructive',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'def-archimedean-field', 'thm-recursion', 'lem-index-map-grows', 'lem-geometric-sequence-null', 'def-integer-power'] },
  { id: 'lem-bw-implies-archimedean', kind: 'lemma',
    title: 'Bolzano-Weierstrass alone forces the Archimedean property, so it needs no separate Archimedean hypothesis',
    strategy: 'contradiction',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'def-archimedean-field', 'def-ordered-field', 'lem-of-add-order'] },
  { id: 'lem-bw-implies-cauchy-complete', kind: 'lemma',
    title: 'Bolzano-Weierstrass implies Cauchy completeness in any ordered field',
    strategy: 'direct',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'lem-bw-implies-archimedean', 'lem-cauchy-sequence-bounded', 'lem-cauchy-with-convergent-subsequence'] },
  { id: 'lem-cauchy-complete-and-archimedean-imply-mct', kind: 'lemma',
    title: 'Cauchy completeness plus the Archimedean property imply the monotone convergence property',
    strategy: 'contradiction',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'def-archimedean-field', 'lem-of-q-dense', 'lem-of-add-order'] },
  { id: 'lem-mct-implies-lub', kind: 'lemma',
    title: 'The monotone convergence property plus the Archimedean property imply the least-upper-bound property',
    strategy: 'constructive',
    deps: ['def-completeness-properties', 'def-sequences-in-an-ordered-field', 'def-archimedean-field', 'thm-recursion', 'lem-of-q-dense', 'lem-sup-unique'] },
  { id: 'thm-completeness-equivalences', kind: 'theorem',
    title: 'For an ordered field the five completeness properties are equivalent, provided the Archimedean property is assumed alongside monotone convergence, nested intervals and Cauchy completeness',
    strategy: 'direct',
    deps: ['lem-lub-implies-nested-intervals', 'lem-nested-intervals-and-archimedean-imply-bw', 'lem-bw-implies-archimedean', 'lem-bw-implies-cauchy-complete', 'lem-cauchy-complete-and-archimedean-imply-mct', 'lem-mct-implies-lub', 'def-completeness-properties'] },
  { id: 'def-cesaro-mean', kind: 'definition',
    title: 'The Cesaro means $\\sigma_n = (x_1 + \\dots + x_n)/n$ and $(C,1)$-summability',
    deps: ['def-sequence', 'def-finite-sum', 'def-real-limit'] },
  { id: 'thm-cesaro-mean-theorem', kind: 'theorem',
    title: 'If $x_k \\to L$ then $\\sigma_n \\to L$: convergence implies $(C,1)$-summability to the same value',
    strategy: 'direct',
    deps: ['def-cesaro-mean', 'def-finite-sum', 'lem-finite-sum-laws', 'lem-triangle-inequality-finite', 'thm-of-archimedean', 'def-real-limit', 'lem-convergent-implies-bounded'] },
  { id: 'thm-stolz-cesaro', kind: 'theorem',
    title: 'Stolz-Cesaro, $\\infty/\\infty$ form: if $b_k$ is strictly increasing and unbounded and $(a_{k+1}-a_k)/(b_{k+1}-b_k) \\to L$ then $a_k/b_k \\to L$',
    strategy: 'direct',
    deps: ['def-sequence', 'def-monotone-sequence', 'def-divergence-to-infinity', 'lem-monotone-unbounded-diverges', 'def-finite-sum', 'lem-finite-sum-laws', 'def-real-limit', 'thm-of-archimedean', 'lem-of-add-order', 'thm-algebra-of-limits'] },
  { id: 'cor-stolz-cesaro-zero-over-zero', kind: 'corollary',
    title: 'Stolz-Cesaro, $0/0$ form: if $b_k$ is strictly decreasing to $0$, $a_k \\to 0$, and the difference quotient converges, then $a_k/b_k$ converges to the same value',
    strategy: 'direct',
    deps: ['thm-stolz-cesaro', 'def-monotone-sequence', 'def-real-limit', 'thm-algebra-of-limits', 'thm-monotone-convergence'] },
  { id: 'def-summability-matrix', kind: 'definition',
    title: 'A summability (Toeplitz) matrix, the transformed sequence $y_n = \\sum_k c_{n,k} x_k$, and regularity',
    deps: ['def-sequence', 'def-real-limit', 'def-finite-sum'] },
  { id: 'thm-silverman-toeplitz', kind: 'theorem',
    title: 'A summability matrix with only finitely many nonzero entries per row is regular iff each column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded',
    strategy: 'direct',
    deps: ['def-summability-matrix', 'def-finite-sum', 'lem-finite-sum-laws', 'lem-triangle-inequality-finite', 'def-real-limit', 'thm-of-archimedean', 'def-bounded-set', 'lem-finite-set-has-max'] },
  { id: 'cor-cesaro-matrix-is-regular', kind: 'corollary',
    title: 'The Cesaro matrix satisfies the Silverman-Toeplitz conditions, giving a second proof of the Cesaro mean theorem',
    strategy: 'direct',
    deps: ['thm-silverman-toeplitz', 'def-summability-matrix', 'def-cesaro-mean', 'thm-cesaro-mean-theorem', 'thm-of-archimedean'] },
  { id: 'fs-nested-intervals-implies-lub', kind: 'false-statement',
    title: 'FALSE: the nested interval property alone implies the least-upper-bound property',
    strategy: 'direct',
    deps: ['thm-completeness-equivalences', 'def-completeness-properties', 'def-archimedean-field', 'cex-ordered-field-not-archimedean'] },
  { id: 'fs-cauchy-complete-implies-lub', kind: 'false-statement',
    title: 'FALSE: an ordered field in which every Cauchy sequence converges has the least-upper-bound property',
    strategy: 'direct',
    deps: ['thm-completeness-equivalences', 'def-completeness-properties', 'def-archimedean-field', 'cex-ordered-field-not-archimedean'] },
  { id: 'fs-cesaro-converse', kind: 'false-statement',
    title: 'FALSE: if the Cesaro means of a sequence converge then the sequence converges',
    strategy: 'direct',
    deps: ['thm-cesaro-mean-theorem', 'def-cesaro-mean'] },
  { id: 'rem-where-the-archimedean-hypothesis-is-needed', kind: 'remark',
    title: 'Which of the five completeness properties carry the Archimedean property on their own, and which must be handed it',
    deps: ['thm-completeness-equivalences', 'lem-bw-implies-archimedean', 'fs-nested-intervals-implies-lub', 'fs-cauchy-complete-implies-lub', 'def-archimedean-field'] },
];

const RA07_B_ITEMS = [
  { id: 'ex-rational-function-field-order', kind: 'example',
    title: 'The rational function field $\\mathbb{R}(t)$ ordered by the eventual sign is an ordered field, worked out',
    deps: ['cex-ordered-field-not-archimedean', 'def-ordered-field', 'def-field'] },
  { id: 'ex-field-ordered-in-two-ways', kind: 'example',
    title: '$\\mathbb{Q}(\\sqrt{2})$ carries exactly two distinct field orders, exchanged by the conjugation $\\sqrt{2} \\mapsto -\\sqrt{2}$',
    deps: ['def-ordered-field', 'def-field', 'thm-of-square-roots', 'fs-sqrt2-rational', 'def-rationals'] },
  { id: 'ex-cauchy-complete-not-complete-field', kind: 'example',
    title: 'The Cauchy completion of $\\mathbb{R}(t)$ is Cauchy complete, non-Archimedean, and lacks the least-upper-bound property',
    deps: ['fs-cauchy-complete-implies-lub', 'cex-ordered-field-not-archimedean', 'def-sequences-in-an-ordered-field', 'def-completeness-properties'] },
  { id: 'ex-cesaro-means-of-alternating', kind: 'example',
    title: 'The Cesaro means of $(-1)^k$ converge to $0$ although the sequence diverges',
    deps: ['def-cesaro-mean', 'fs-cesaro-converse', 'thm-of-archimedean'] },
  { id: 'ex-stolz-cesaro-applied', kind: 'example',
    title: 'Stolz-Cesaro gives $(1 + 2 + \\dots + n)/n^2 \\to 1/2$ and $(1^p + \\dots + n^p)/n^{p+1} \\to 1/(p+1)$ for natural $p$',
    deps: ['thm-stolz-cesaro', 'def-finite-sum', 'lem-finite-sum-laws', 'def-integer-power'] },
  { id: 'cex-q-not-dense-in-an-ordered-field', kind: 'counterexample',
    title: 'In $\\mathbb{R}(t)$ the rationals are not dense: no rational lies strictly between $0$ and $1/t$',
    deps: ['cex-ordered-field-not-archimedean', 'lem-of-q-dense', 'def-archimedean-field'] },
  { id: 'cex-evt-and-ivt-fail-over-a-non-complete-field', kind: 'counterexample',
    title: 'On a closed interval of $\\mathbb{Q}$ there is a continuous unbounded function, a bounded one with no maximum, and one without the intermediate value property',
    deps: ['cex-ordered-field-not-archimedean', 'def-sequences-in-an-ordered-field', 'def-completeness-properties', 'def-rationals', 'thm-of-square-roots', 'fs-sqrt2-rational', 'def-interval'] },
  { id: 'cex-rolle-fails-over-a-non-complete-field', kind: 'counterexample',
    title: 'Over $\\mathbb{Q}$ there is a nonconstant differentiable function with identically zero derivative, so Rolle and the mean value theorem both fail',
    deps: ['cex-evt-and-ivt-fail-over-a-non-complete-field', 'def-rationals', 'thm-of-square-roots', 'fs-sqrt2-rational', 'def-completeness-properties'] },
  { id: 'cex-stolz-cesaro-converse-fails', kind: 'counterexample',
    title: '$a_k = (-1)^k$, $b_k = k$ have $a_k/b_k \\to 0$ while the difference quotient oscillates, so Stolz-Cesaro has no converse',
    deps: ['thm-stolz-cesaro', 'def-limsup-liminf', 'thm-of-archimedean'] },
  { id: 'cex-irregular-summability-matrix', kind: 'counterexample',
    title: 'A summability matrix failing exactly one Silverman-Toeplitz condition and transforming a convergent sequence to a divergent one',
    deps: ['thm-silverman-toeplitz', 'def-summability-matrix', 'def-real-limit'] },
];

// Design: research/plan-realanalysis-pages.md RA-08. NOTE the log-free
// restriction: Bertrand's test and the sum 1/(n log n) family need the
// logarithm, which is only constructed on RA-27, and this page may not cite
// forward. Bertrand is therefore ABSENT and the Abel-Dini pair carries the
// "no slowest divergent series" point instead. p-series is for RATIONAL p only.
const RA08_ITEMS = [
  { id: 'def-series', kind: 'definition',
    title: 'Series, partial sums, convergence and the sum, divergence, and the tail series',
    deps: ['def-finite-sum', 'def-sequence', 'def-real-limit', 'def-real-numbers'] },
  { id: 'lem-series-tail-invariance', kind: 'lemma',
    title: 'A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail',
    strategy: 'direct',
    deps: ['def-series', 'lem-limit-of-tail', 'def-finite-sum', 'lem-finite-sum-laws', 'thm-algebra-of-limits'] },
  { id: 'lem-nth-term-test', kind: 'lemma',
    title: 'If a series converges then its terms tend to $0$',
    strategy: 'direct',
    deps: ['def-series', 'thm-algebra-of-limits', 'def-real-limit', 'def-finite-sum', 'lem-finite-sum-laws'] },
  { id: 'thm-series-cauchy-criterion', kind: 'theorem',
    title: 'A series converges iff for every $\\varepsilon > 0$ there is $N$ with $|a_{m+1} + \\dots + a_n| < \\varepsilon$ for all $n > m \\ge N$',
    strategy: 'direct',
    deps: ['def-series', 'thm-cauchy-criterion-via-lub', 'lem-convergent-implies-cauchy', 'def-real-limit', 'def-finite-sum', 'lem-finite-sum-laws'] },
  { id: 'lem-series-linearity', kind: 'lemma',
    title: 'Convergent series add and scale termwise',
    strategy: 'direct',
    deps: ['def-series', 'thm-algebra-of-limits', 'lem-finite-sum-laws', 'def-finite-sum'] },
  { id: 'thm-geometric-series', kind: 'theorem',
    title: 'For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges',
    strategy: 'cases',
    deps: ['def-series', 'lem-power-difference-factorisation', 'lem-geometric-sequence-null', 'lem-nth-term-test', 'def-integer-power', 'thm-algebra-of-limits', 'def-finite-sum', 'lem-of-abs-value'] },
  { id: 'lem-telescoping-series', kind: 'lemma',
    title: '$\\sum (b_k - b_{k+1})$ converges iff $(b_k)$ converges, with sum $b_1 - \\lim b_k$',
    strategy: 'direct',
    deps: ['def-series', 'def-finite-sum', 'lem-finite-sum-laws', 'thm-algebra-of-limits', 'thm-induction-principle'] },
  { id: 'thm-nonnegative-series-bounded-partial-sums', kind: 'theorem',
    title: 'A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum',
    strategy: 'direct',
    deps: ['def-series', 'def-monotone-sequence', 'thm-monotone-convergence', 'cor-monotone-converges-iff-bounded', 'lem-monotone-unbounded-diverges', 'def-bounded-set', 'lem-sup-epsilon', 'def-finite-sum', 'lem-finite-sum-laws'] },
  { id: 'thm-direct-comparison-test', kind: 'theorem',
    title: 'If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$',
    strategy: 'direct',
    deps: ['thm-nonnegative-series-bounded-partial-sums', 'lem-series-tail-invariance', 'def-series', 'lem-finite-sum-laws', 'lem-sup-monotone', 'def-bounded-set'] },
  { id: 'thm-limit-comparison-test', kind: 'theorem',
    title: 'For $a_k, b_k > 0$ with $a_k/b_k \\to L$: if $L \\in (0,\\infty)$ the two series share their behaviour, while $L = 0$ and $L = \\infty$ give one implication each',
    strategy: 'cases',
    deps: ['thm-direct-comparison-test', 'def-real-limit', 'def-limsup-liminf', 'thm-algebra-of-limits', 'lem-limsup-epsilon-characterisation', 'def-series', 'def-divergence-to-infinity'] },
  { id: 'thm-cauchy-condensation', kind: 'theorem',
    title: 'For a nonincreasing nonnegative sequence, $\\sum a_k$ converges iff $\\sum 2^k a_{2^k}$ converges',
    strategy: 'direct',
    deps: ['thm-nonnegative-series-bounded-partial-sums', 'thm-direct-comparison-test', 'def-monotone-sequence', 'def-integer-power', 'lem-power-monotone', 'def-finite-sum', 'lem-finite-sum-laws', 'thm-induction-principle', 'def-series'] },
  { id: 'thm-p-series-rational', kind: 'theorem',
    title: 'For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$',
    strategy: 'direct',
    deps: ['thm-cauchy-condensation', 'thm-geometric-series', 'def-rational-power', 'lem-rational-power-monotone', 'lem-rational-power-laws', 'def-monotone-sequence', 'def-series'] },
  { id: 'thm-root-test', kind: 'theorem',
    title: 'Root test: $\\limsup |a_k|^{1/k} < 1$ gives absolute convergence, $> 1$ gives divergence, and $= 1$ decides nothing',
    strategy: 'cases',
    deps: ['def-series', 'def-limsup-liminf', 'lem-limsup-epsilon-characterisation', 'thm-geometric-series', 'thm-direct-comparison-test', 'lem-nth-term-test', 'thm-nth-roots-exist', 'def-rational-power', 'lem-of-abs-value', 'thm-limsup-is-greatest-subsequential-limit'] },
  { id: 'thm-ratio-test', kind: 'theorem',
    title: 'Ratio test: $\\limsup |a_{k+1}/a_k| < 1$ gives absolute convergence and $\\liminf |a_{k+1}/a_k| > 1$ gives divergence',
    strategy: 'cases',
    deps: ['def-series', 'def-limsup-liminf', 'lem-limsup-epsilon-characterisation', 'thm-geometric-series', 'thm-direct-comparison-test', 'lem-nth-term-test', 'lem-of-abs-value', 'thm-induction-principle'] },
  { id: 'cor-root-test-dominates-ratio-test', kind: 'corollary',
    title: 'Whenever the ratio test decides, the root test decides the same way, and the converse fails',
    strategy: 'direct',
    deps: ['thm-ratio-root-inequality', 'thm-root-test', 'thm-ratio-test', 'def-limsup-liminf'] },
  { id: 'thm-kummer-test', kind: 'theorem',
    title: 'Kummer: with $\\zeta_k > 0$, $\\liminf(\\zeta_k a_k/a_{k+1} - \\zeta_{k+1}) > 0$ gives convergence, and if $\\sum 1/\\zeta_k$ diverges while that expression is eventually $\\le 0$ the series diverges',
    strategy: 'direct',
    deps: ['def-series', 'thm-nonnegative-series-bounded-partial-sums', 'thm-direct-comparison-test', 'def-limsup-liminf', 'lem-limsup-epsilon-characterisation', 'lem-telescoping-series', 'def-finite-sum', 'lem-finite-sum-laws', 'def-monotone-sequence'] },
  { id: 'cor-ratio-test-is-kummer-with-constant-weights', kind: 'corollary',
    title: 'Kummer with $\\zeta_k = 1$ is exactly the ratio test',
    strategy: 'direct',
    deps: ['thm-kummer-test', 'thm-ratio-test', 'thm-geometric-series', 'def-series'] },
  { id: 'cor-raabe-test', kind: 'corollary',
    title: 'Raabe is Kummer with $\\zeta_k = k$: $\\liminf k(a_k/a_{k+1} - 1) > 1$ gives convergence and $\\limsup < 1$ gives divergence',
    strategy: 'direct',
    deps: ['thm-kummer-test', 'thm-p-series-rational', 'def-limsup-liminf', 'def-series'] },
  { id: 'thm-gauss-test', kind: 'theorem',
    title: 'Gauss: if $a_k/a_{k+1} = 1 + h/k + O(k^{-1-\\varepsilon})$ for some $\\varepsilon > 0$, the series converges iff $h > 1$',
    strategy: 'cases',
    deps: ['cor-raabe-test', 'thm-kummer-test', 'thm-p-series-rational', 'thm-direct-comparison-test', 'def-limsup-liminf', 'def-rational-power', 'lem-rational-power-monotone', 'def-series'] },
  { id: 'thm-abel-dini', kind: 'theorem',
    title: 'For a divergent series of positive terms with partial sums $s_k$, the series $\\sum a_k/s_k$ diverges and $\\sum a_k/s_k^2$ converges',
    strategy: 'direct',
    deps: ['def-series', 'thm-nonnegative-series-bounded-partial-sums', 'thm-series-cauchy-criterion', 'lem-telescoping-series', 'thm-direct-comparison-test', 'def-monotone-sequence', 'lem-monotone-unbounded-diverges', 'def-divergence-to-infinity', 'def-integer-power'] },
  { id: 'fs-nth-term-test-converse', kind: 'false-statement',
    title: 'FALSE: if $a_k \\to 0$ then $\\sum a_k$ converges',
    strategy: 'direct',
    deps: ['lem-nth-term-test', 'thm-p-series-rational', 'def-series'] },
  { id: 'fs-ratio-limsup-at-least-one-diverges', kind: 'false-statement',
    title: 'FALSE: $\\limsup |a_{k+1}/a_k| \\ge 1$ implies the series diverges',
    strategy: 'direct',
    deps: ['thm-ratio-test', 'cor-root-test-dominates-ratio-test', 'def-limsup-liminf', 'def-series'] },
  { id: 'fs-universal-comparison-series', kind: 'false-statement',
    title: 'FALSE: there is a divergent series of positive terms that diverges more slowly than every other, hence a universal comparison test',
    strategy: 'direct',
    deps: ['thm-abel-dini', 'thm-direct-comparison-test', 'def-series'] },
  { id: 'rem-strength-order-of-the-nonnegative-tests', kind: 'remark',
    title: 'How the nonnegative tests are ordered by strength, and which of them this page cannot state without the logarithm',
    deps: ['thm-root-test', 'thm-ratio-test', 'cor-root-test-dominates-ratio-test', 'cor-raabe-test', 'thm-gauss-test', 'thm-kummer-test', 'thm-abel-dini'] },
];

const RA08_B_ITEMS = [
  { id: 'ex-harmonic-series-diverges', kind: 'example',
    title: 'The harmonic series $\\sum 1/k$ diverges, by condensation and by Oresme block grouping',
    deps: ['thm-cauchy-condensation', 'thm-p-series-rational', 'def-series', 'lem-nth-term-test'] },
  { id: 'ex-sum-of-reciprocal-squares-converges', kind: 'example',
    title: '$\\sum 1/k^2$ converges with sum at most $2$, by comparison with the telescoping $\\sum 1/(k(k-1))$',
    deps: ['thm-direct-comparison-test', 'lem-telescoping-series', 'thm-p-series-rational', 'def-series'] },
  { id: 'ex-geometric-series-computed', kind: 'example',
    title: 'Geometric sums computed: $\\sum 2^{-k} = 1$ and $\\sum (-1/3)^k = 3/4$',
    deps: ['thm-geometric-series', 'def-integer-power'] },
  { id: 'ex-telescoping-sum-computed', kind: 'example',
    title: '$\\sum_{k \\ge 1} 1/(k(k+1)) = 1$',
    deps: ['lem-telescoping-series', 'def-series'] },
  { id: 'ex-condensation-applied', kind: 'example',
    title: 'Condensation reduces $\\sum 1/k^p$ to a geometric series with ratio $2^{1-p}$',
    deps: ['thm-cauchy-condensation', 'thm-p-series-rational', 'thm-geometric-series', 'def-rational-power'] },
  { id: 'ex-abel-dini-pair-for-the-harmonic-series', kind: 'example',
    title: 'Abel-Dini applied to $\\sum 1/k$: $\\sum 1/(k s_k)$ still diverges while $\\sum 1/(k s_k^2)$ converges',
    deps: ['thm-abel-dini', 'ex-harmonic-series-diverges', 'def-series'] },
  { id: 'ex-raabe-decides-where-ratio-fails', kind: 'example',
    title: 'A series with ratio limit exactly $1$ that Raabe decides',
    deps: ['cor-raabe-test', 'thm-ratio-test', 'def-series', 'def-limsup-liminf'] },
  { id: 'cex-ratio-inconclusive-root-decides', kind: 'counterexample',
    title: '$a_k = 2^{-k+(-1)^k}$ has ratio limsup $2$ and liminf $1/8$, so the ratio test fails, while the root test gives convergence',
    deps: ['thm-ratio-test', 'thm-root-test', 'cor-root-test-dominates-ratio-test', 'def-limsup-liminf', 'def-integer-power'] },
  { id: 'cex-root-limit-one-decides-nothing', kind: 'counterexample',
    title: '$\\sum k^{-1/2}$ diverges and $\\sum k^{-2}$ converges, and both have root limit exactly $1$',
    deps: ['thm-root-test', 'thm-p-series-rational', 'lem-nth-root-of-n-tends-to-one', 'def-rational-power'] },
  { id: 'cex-comparison-needs-nonnegativity', kind: 'counterexample',
    title: 'Two series with $a_k \\le b_k$ for all $k$, $\\sum b_k$ convergent and $\\sum a_k$ divergent, when the terms may be negative',
    deps: ['thm-direct-comparison-test', 'thm-nonnegative-series-bounded-partial-sums', 'ex-harmonic-series-diverges', 'def-series'] },
  { id: 'cex-condensation-needs-monotonicity', kind: 'counterexample',
    title: 'A nonnegative non-monotone sequence for which $\\sum a_k$ and $\\sum 2^k a_{2^k}$ behave differently',
    deps: ['thm-cauchy-condensation', 'def-monotone-sequence', 'ex-harmonic-series-diverges', 'def-series'] },
  { id: 'cex-limit-comparison-l-zero-one-directional', kind: 'counterexample',
    title: 'With $a_k/b_k \\to 0$, convergence of $\\sum a_k$ does not give convergence of $\\sum b_k$',
    deps: ['thm-limit-comparison-test', 'thm-p-series-rational', 'ex-harmonic-series-diverges', 'def-series'] },
];

// Design: research/plan-r-specific-pages.md "RA3. Topology of R". Everything
// here is proved R-NATIVELY (order completeness, bisection, nested intervals).
// The general-topology page topological-spaces-and-continuity proves the general
// statements with topological tools under DIFFERENT ids; the two namespaces are
// kept apart by the `-r` suffix used throughout this page, and neither cites the
// other. rem-r-native-topology-scope is the auditable record of that split.
const RA10_ITEMS = [
  { id: 'def-neighbourhood-r', kind: 'definition',
    title: 'The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$',
    deps: ['def-real-order', 'def-interval', 'lem-of-abs-value', 'def-complete-ordered-field'] },
  { id: 'def-open-and-closed-in-r', kind: 'definition',
    title: 'Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen',
    deps: ['def-neighbourhood-r', 'def-interval'] },
  { id: 'thm-open-set-algebra-r', kind: 'theorem',
    title: 'Arbitrary unions and finite intersections of open subsets of $\\mathbb{R}$ are open, and dually for closed sets',
    strategy: 'direct',
    deps: ['def-open-and-closed-in-r', 'def-neighbourhood-r', 'lem-finite-set-has-max', 'def-max-min', 'def-interval'] },
  { id: 'def-interior-closure-boundary-r', kind: 'definition',
    title: 'Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$',
    deps: ['def-open-and-closed-in-r', 'def-neighbourhood-r', 'thm-open-set-algebra-r'] },
  { id: 'def-limit-point-r', kind: 'definition',
    title: 'Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$',
    deps: ['def-neighbourhood-r', 'def-open-and-closed-in-r', 'def-interior-closure-boundary-r'] },
  { id: 'thm-closure-characterisations-r', kind: 'theorem',
    title: 'The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points',
    strategy: 'direct',
    deps: ['def-interior-closure-boundary-r', 'def-limit-point-r', 'def-open-and-closed-in-r', 'thm-open-set-algebra-r', 'def-neighbourhood-r'] },
  { id: 'lem-sequential-characterisation-of-closure-r', kind: 'lemma',
    title: 'A point lies in the closure of $A \\subseteq \\mathbb{R}$ iff some sequence in $A$ converges to it, so a subset of $\\mathbb{R}$ is closed iff it is sequentially closed',
    strategy: 'direct',
    deps: ['thm-closure-characterisations-r', 'def-limit-point-r', 'def-real-limit', 'def-sequence', 'thm-of-archimedean', 'def-countable-choice', 'def-neighbourhood-r'] },
  { id: 'thm-open-subsets-of-r-structure', kind: 'theorem',
    title: 'Every open subset of $\\mathbb{R}$ is a countable disjoint union of open intervals, namely its order components',
    strategy: 'constructive',
    deps: ['def-open-and-closed-in-r', 'def-interval', 'def-complete-ordered-field', 'lem-sup-epsilon', 'thm-infimum-property', 'lem-rat-embeds-dense', 'thm-rationals-countable', 'lem-subset-of-countable', 'def-countable', 'def-injection-surjection-bijection'] },
  { id: 'lem-q-and-irrationals-dense-r', kind: 'lemma',
    title: 'Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable',
    strategy: 'direct',
    deps: ['lem-rat-embeds-dense', 'def-limit-point-r', 'def-open-and-closed-in-r', 'def-interval', 'cor-irrationals-uncountable', 'cor-interval-uncountable', 'thm-of-square-roots', 'lem-subset-of-countable'] },
  { id: 'def-open-cover-r', kind: 'definition',
    title: 'Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset',
    deps: ['def-open-and-closed-in-r', 'def-sequence', 'def-subsequential-limit', 'def-real-limit'] },
  { id: 'thm-heine-borel-r', kind: 'theorem',
    title: 'Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact',
    strategy: 'contradiction',
    deps: ['def-open-cover-r', 'def-interval', 'thm-nested-interval-property', 'def-complete-ordered-field', 'thm-recursion', 'lem-geometric-sequence-null', 'thm-of-archimedean', 'def-bounded-set', 'def-neighbourhood-r', 'def-open-and-closed-in-r'] },
  { id: 'lem-compact-implies-closed-and-bounded-r', kind: 'lemma',
    title: 'A compact subset of $\\mathbb{R}$ is closed and bounded',
    strategy: 'direct',
    deps: ['def-open-cover-r', 'def-open-and-closed-in-r', 'def-bounded-set', 'def-neighbourhood-r', 'thm-closure-characterisations-r', 'thm-of-archimedean', 'def-limit-point-r'] },
  { id: 'thm-heine-borel-characterisation-r', kind: 'theorem',
    title: 'A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded',
    strategy: 'direct',
    deps: ['thm-heine-borel-r', 'lem-compact-implies-closed-and-bounded-r', 'def-open-cover-r', 'def-interval', 'def-bounded-set', 'def-open-and-closed-in-r', 'thm-open-set-algebra-r'] },
  { id: 'thm-compact-iff-sequentially-compact-r', kind: 'theorem',
    title: 'A subset of $\\mathbb{R}$ is compact iff it is sequentially compact',
    strategy: 'direct',
    deps: ['thm-heine-borel-characterisation-r', 'thm-bolzano-weierstrass', 'def-open-cover-r', 'lem-sequential-characterisation-of-closure-r', 'def-subsequential-limit', 'def-bounded-set', 'def-countable-choice', 'def-open-and-closed-in-r'] },
  { id: 'def-connected-r', kind: 'definition',
    title: 'Separated sets, disconnection, and connected subset of $\\mathbb{R}$',
    deps: ['def-open-and-closed-in-r', 'def-interior-closure-boundary-r'] },
  { id: 'thm-connected-subsets-of-r-are-intervals', kind: 'theorem',
    title: 'A subset of $\\mathbb{R}$ is connected if and only if it is order-convex, that is, an interval',
    strategy: 'cases',
    deps: ['def-connected-r', 'def-interval', 'def-complete-ordered-field', 'lem-sup-epsilon', 'thm-infimum-property', 'def-open-and-closed-in-r', 'def-bounded-set', 'lem-sup-unique'] },
  { id: 'def-perfect-set-r', kind: 'definition',
    title: 'Perfect subset of $\\mathbb{R}$: closed with no isolated points',
    deps: ['def-limit-point-r', 'def-open-and-closed-in-r'] },
  { id: 'thm-perfect-set-uncountable-r', kind: 'theorem',
    title: 'Every nonempty perfect subset of $\\mathbb{R}$ is uncountable',
    strategy: 'contradiction',
    deps: ['def-perfect-set-r', 'thm-nested-interval-property', 'def-countable', 'lem-countable-iff-surjection-from-n', 'thm-recursion', 'def-interval', 'def-neighbourhood-r', 'thm-closure-characterisations-r', 'def-open-and-closed-in-r', 'def-limit-point-r'] },
  { id: 'fs-arbitrary-intersection-of-open-is-open', kind: 'false-statement',
    title: 'FALSE: an arbitrary intersection of open subsets of $\\mathbb{R}$ is open',
    strategy: 'direct',
    deps: ['thm-open-set-algebra-r', 'def-open-and-closed-in-r', 'thm-of-archimedean', 'def-neighbourhood-r'] },
  { id: 'fs-every-set-is-open-or-closed', kind: 'false-statement',
    title: 'FALSE: every subset of $\\mathbb{R}$ is either open or closed',
    strategy: 'direct',
    deps: ['def-open-and-closed-in-r', 'def-interval', 'def-neighbourhood-r'] },
  { id: 'fs-closed-bounded-compact-without-completeness', kind: 'false-statement',
    title: 'FALSE: in every ordered field a closed bounded set is compact, so Heine-Borel needs no completeness',
    strategy: 'direct',
    deps: ['thm-heine-borel-characterisation-r', 'def-open-cover-r', 'def-rationals', 'fs-sqrt2-rational', 'thm-of-square-roots', 'lem-rat-embeds-dense', 'def-open-and-closed-in-r'] },
  { id: 'rem-r-native-topology-scope', kind: 'remark',
    title: 'Which results on this page use the order of $\\mathbb{R}$ and therefore have no general-topological analogue',
    deps: ['thm-open-subsets-of-r-structure', 'thm-connected-subsets-of-r-are-intervals', 'thm-heine-borel-r', 'thm-compact-iff-sequentially-compact-r', 'def-open-cover-r'] },
];

const RA10_B_ITEMS = [
  { id: 'ex-open-set-decomposed-into-components', kind: 'example',
    title: 'An explicit open subset of $\\mathbb{R}$ written as the disjoint union of its component intervals',
    deps: ['thm-open-subsets-of-r-structure', 'def-interval', 'def-open-and-closed-in-r'] },
  { id: 'ex-closure-interior-boundary-of-q', kind: 'example',
    title: '$\\mathbb{Q}$ has closure $\\mathbb{R}$, empty interior, and boundary $\\mathbb{R}$',
    deps: ['def-interior-closure-boundary-r', 'lem-q-and-irrationals-dense-r', 'thm-closure-characterisations-r'] },
  { id: 'ex-reciprocals-with-zero-are-compact', kind: 'example',
    title: '$\\{1/k : k \\ge 1\\} \\cup \\{0\\}$ is compact while $\\{1/k : k \\ge 1\\}$ is not closed',
    deps: ['thm-heine-borel-characterisation-r', 'def-limit-point-r', 'thm-closure-characterisations-r', 'thm-of-archimedean'] },
  { id: 'ex-closed-interval-is-perfect', kind: 'example',
    title: 'Every nondegenerate closed interval is perfect, giving a second proof that it is uncountable',
    deps: ['def-perfect-set-r', 'thm-perfect-set-uncountable-r', 'cor-interval-uncountable', 'def-interval'] },
  { id: 'cex-intersection-of-shrinking-intervals-not-open', kind: 'counterexample',
    title: '$\\bigcap_k (-1/k, 1/k) = \\{0\\}$ is not open',
    deps: ['fs-arbitrary-intersection-of-open-is-open', 'def-open-and-closed-in-r', 'thm-of-archimedean'] },
  { id: 'cex-half-open-interval-neither-open-nor-closed', kind: 'counterexample',
    title: '$[0,1)$ is neither open nor closed in $\\mathbb{R}$',
    deps: ['fs-every-set-is-open-or-closed', 'def-interval', 'def-open-and-closed-in-r'] },
  { id: 'cex-open-cover-of-unit-interval-no-finite-subcover', kind: 'counterexample',
    title: 'The cover $\\{(1/k, 1)\\}$ of $(0,1)$ has no finite subcover, so $(0,1)$ is not compact',
    deps: ['def-open-cover-r', 'thm-heine-borel-characterisation-r', 'thm-of-archimedean', 'def-interval'] },
  { id: 'cex-closed-bounded-in-q-not-compact', kind: 'counterexample',
    title: '$\\{q \\in \\mathbb{Q} : q \\ge 0,\\ q^2 < 2\\}$ is closed and bounded in $\\mathbb{Q}$ and is not compact',
    deps: ['fs-closed-bounded-compact-without-completeness', 'def-rationals', 'fs-sqrt2-rational', 'thm-of-square-roots', 'def-open-cover-r'] },
  { id: 'cex-rationals-in-an-interval-are-disconnected', kind: 'counterexample',
    title: '$\\mathbb{Q} \\cap [0,2]$ is bounded and disconnected, so being an interval of the ambient order is not enough',
    deps: ['thm-connected-subsets-of-r-are-intervals', 'def-connected-r', 'fs-sqrt2-rational', 'thm-of-square-roots', 'def-rationals'] },
  { id: 'cex-closed-set-with-an-isolated-point-is-not-perfect', kind: 'counterexample',
    title: '$\\{0\\} \\cup [1,2]$ is closed, has an isolated point, and is not perfect',
    deps: ['def-perfect-set-r', 'def-limit-point-r', 'def-open-and-closed-in-r', 'def-interval'] },
  { id: 'cex-unbounded-closed-set-not-compact', kind: 'counterexample',
    title: '$\\mathbb{Z}$ is closed and not compact, and $(0,1)$ is bounded and not compact: neither hypothesis of Heine-Borel can be dropped',
    deps: ['thm-heine-borel-characterisation-r', 'def-open-cover-r', 'def-integers', 'thm-of-archimedean', 'def-interval'] },
];

// Design: research/plan-realanalysis-pages.md RA-11 + plan-r-specific-pages.md.
// REQUIRES EDGE ADDED (see report): this page declares series-and-nonnegative-tests
// as a prerequisite, because "measure zero" is defined by a CONVERGENT SERIES of
// interval lengths and every measure computation here (Cantor, Smith-Volterra-
// Cantor, the epsilon-cover of Q) is a geometric series. Without it def-measure-
// zero could not be stated. Continuity does not exist yet, so the Cantor function
// is stated as monotone and surjective, not as continuous.
const RA11_ITEMS = [
  { id: 'def-nowhere-dense-meager', kind: 'definition',
    title: 'Nowhere dense, meager (first category), residual, and second category subsets of $\\mathbb{R}$',
    deps: ['def-interior-closure-boundary-r', 'thm-closure-characterisations-r', 'def-open-and-closed-in-r', 'def-limit-point-r', 'def-countable'] },
  { id: 'def-f-sigma-g-delta', kind: 'definition',
    title: '$F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$',
    deps: ['def-open-and-closed-in-r', 'def-countable', 'thm-open-set-algebra-r'] },
  { id: 'thm-baire-category-r', kind: 'theorem',
    title: 'Baire category in $\\mathbb{R}$, by nested intervals: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets',
    strategy: 'constructive',
    deps: ['def-nowhere-dense-meager', 'thm-nested-interval-property', 'def-interval', 'def-open-and-closed-in-r', 'def-limit-point-r', 'thm-closure-characterisations-r', 'def-countable', 'lem-countable-iff-surjection-from-n', 'thm-recursion', 'thm-of-archimedean', 'def-neighbourhood-r'] },
  { id: 'cor-q-is-meager-and-not-g-delta', kind: 'corollary',
    title: '$\\mathbb{Q}$ is $F_\\sigma$, meager and not $G_\\delta$, while the irrationals are $G_\\delta$, residual and not $F_\\sigma$',
    strategy: 'contradiction',
    deps: ['thm-baire-category-r', 'def-f-sigma-g-delta', 'def-nowhere-dense-meager', 'thm-rationals-countable', 'lem-q-and-irrationals-dense-r', 'cor-irrationals-uncountable', 'def-countable', 'def-open-and-closed-in-r'] },
  { id: 'def-measure-zero-and-content-zero', kind: 'definition',
    title: 'Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)',
    deps: ['def-interval', 'def-series', 'def-countable', 'thm-nonnegative-series-bounded-partial-sums', 'def-finite-sum', 'lem-sup-epsilon'] },
  { id: 'lem-countable-sets-are-null', kind: 'lemma',
    title: 'Every at most countable subset of $\\mathbb{R}$ has measure zero',
    strategy: 'direct',
    deps: ['def-measure-zero-and-content-zero', 'def-countable', 'lem-countable-iff-surjection-from-n', 'thm-geometric-series', 'def-series', 'thm-of-archimedean'] },
  { id: 'thm-countable-union-of-null-is-null', kind: 'theorem',
    title: 'A countable union of measure-zero sets has measure zero',
    strategy: 'direct',
    deps: ['def-measure-zero-and-content-zero', 'def-countable', 'thm-n-cross-n-countable', 'thm-geometric-series', 'def-countable-choice', 'thm-countable-union-of-countable', 'def-series', 'thm-nonnegative-series-bounded-partial-sums', 'lem-series-linearity'] },
  { id: 'lem-content-zero-implies-null', kind: 'lemma',
    title: 'A set of content zero has measure zero',
    strategy: 'direct',
    deps: ['def-measure-zero-and-content-zero', 'def-finite-sum', 'def-series'] },
  { id: 'thm-compact-null-is-content-zero', kind: 'theorem',
    title: 'For a compact subset of $\\mathbb{R}$, measure zero and content zero coincide',
    strategy: 'direct',
    deps: ['def-measure-zero-and-content-zero', 'lem-content-zero-implies-null', 'thm-heine-borel-characterisation-r', 'def-open-cover-r', 'def-finite-sum', 'lem-finite-sum-laws', 'def-series'] },
  { id: 'def-cantor-set', kind: 'definition',
    title: 'The Cantor middle-thirds set as the intersection of the sets $C_n$ obtained by removing open middle thirds',
    deps: ['def-interval', 'thm-recursion', 'def-open-and-closed-in-r', 'def-integer-power'] },
  { id: 'thm-cantor-set-ternary-description', kind: 'theorem',
    title: 'The Cantor set is exactly the set of $\\sum_k a_k 3^{-k}$ with every $a_k \\in \\{0,2\\}$, and this gives a bijection with $\\{0,1\\}^{\\mathbb{N}}$',
    strategy: 'direct',
    deps: ['def-cantor-set', 'def-series', 'thm-geometric-series', 'def-injection-surjection-bijection', 'def-integer-power', 'thm-nonnegative-series-bounded-partial-sums', 'def-interval'] },
  { id: 'thm-cantor-set-properties', kind: 'theorem',
    title: 'The Cantor set is compact, perfect, uncountable, nowhere dense, totally disconnected and of measure zero',
    strategy: 'direct',
    deps: ['def-cantor-set', 'thm-cantor-set-ternary-description', 'thm-heine-borel-characterisation-r', 'def-perfect-set-r', 'thm-perfect-set-uncountable-r', 'def-nowhere-dense-meager', 'def-measure-zero-and-content-zero', 'thm-geometric-series', 'def-connected-r', 'thm-connected-subsets-of-r-are-intervals', 'thm-open-set-algebra-r', 'thm-cantor-powerset', 'def-countable'] },
  { id: 'def-fat-cantor-set', kind: 'definition',
    title: 'The Smith-Volterra-Cantor set: the same construction removing a middle interval of length $4^{-n}$ at stage $n$',
    deps: ['def-cantor-set', 'def-interval', 'thm-recursion', 'def-integer-power', 'def-series'] },
  { id: 'thm-fat-cantor-set-has-positive-measure', kind: 'theorem',
    title: 'The Smith-Volterra-Cantor set is compact, perfect and nowhere dense, and does not have measure zero',
    strategy: 'contradiction',
    deps: ['def-fat-cantor-set', 'def-measure-zero-and-content-zero', 'def-nowhere-dense-meager', 'thm-heine-borel-characterisation-r', 'def-perfect-set-r', 'thm-geometric-series', 'thm-compact-null-is-content-zero', 'def-finite-sum', 'lem-finite-sum-laws', 'def-series'] },
  { id: 'def-cantor-function', kind: 'definition',
    title: 'The Cantor function on $[0,1]$, defined on the Cantor set through ternary digits and extended constantly across each removed interval',
    deps: ['thm-cantor-set-ternary-description', 'def-cantor-set', 'def-series', 'thm-geometric-series', 'def-complete-ordered-field', 'lem-sup-epsilon', 'def-interval'] },
  { id: 'thm-cantor-function-properties', kind: 'theorem',
    title: 'The Cantor function is well defined, nondecreasing, surjective onto $[0,1]$, and constant on every interval removed from the Cantor set',
    strategy: 'direct',
    deps: ['def-cantor-function', 'thm-cantor-set-ternary-description', 'thm-cantor-set-properties', 'def-monotone-sequence', 'def-series', 'thm-geometric-series', 'def-interval', 'lem-sup-epsilon', 'thm-nonnegative-series-bounded-partial-sums'] },
  { id: 'fs-nowhere-dense-implies-measure-zero', kind: 'false-statement',
    title: 'FALSE: every nowhere dense subset of $\\mathbb{R}$ has measure zero',
    strategy: 'direct',
    deps: ['thm-fat-cantor-set-has-positive-measure', 'def-nowhere-dense-meager', 'def-measure-zero-and-content-zero'] },
  { id: 'fs-measure-zero-implies-nowhere-dense', kind: 'false-statement',
    title: 'FALSE: every subset of $\\mathbb{R}$ of measure zero is nowhere dense',
    strategy: 'direct',
    deps: ['lem-countable-sets-are-null', 'def-nowhere-dense-meager', 'def-measure-zero-and-content-zero', 'thm-rationals-countable', 'lem-q-and-irrationals-dense-r'] },
  { id: 'fs-null-implies-content-zero', kind: 'false-statement',
    title: 'FALSE: every set of measure zero has content zero',
    strategy: 'direct',
    deps: ['lem-content-zero-implies-null', 'thm-compact-null-is-content-zero', 'def-measure-zero-and-content-zero', 'thm-rationals-countable', 'lem-countable-sets-are-null', 'lem-q-and-irrationals-dense-r'] },
  { id: 'fs-q-is-g-delta', kind: 'false-statement',
    title: 'FALSE: $\\mathbb{Q}$ is a $G_\\delta$ subset of $\\mathbb{R}$',
    strategy: 'direct',
    deps: ['cor-q-is-meager-and-not-g-delta', 'def-f-sigma-g-delta', 'thm-baire-category-r'] },
  { id: 'fs-cantor-set-countable', kind: 'false-statement',
    title: 'FALSE: the Cantor set is countable because only countably many intervals were removed',
    strategy: 'direct',
    deps: ['thm-cantor-set-properties', 'thm-cantor-set-ternary-description', 'def-cantor-set', 'def-countable'] },
  { id: 'rem-baire-in-r-is-choice-free', kind: 'remark',
    title: 'Why the nested-interval proof of Baire category in $\\mathbb{R}$ needs no choice, while the general complete-metric statement does',
    deps: ['thm-baire-category-r', 'def-countable-choice', 'rem-baire-category-choice-strength', 'thm-nested-interval-property'] },
];

const RA11_B_ITEMS = [
  { id: 'ex-q-covered-by-intervals-of-small-total-length', kind: 'example',
    title: '$\\mathbb{Q}$ is covered by open intervals of total length $\\varepsilon$, for every $\\varepsilon > 0$',
    deps: ['lem-countable-sets-are-null', 'def-measure-zero-and-content-zero', 'thm-rationals-countable', 'thm-geometric-series'] },
  { id: 'ex-cantor-set-in-ternary', kind: 'example',
    title: 'Which points of $[0,1]$ lie in the Cantor set, read off their ternary expansions, with $1/4$ worked out',
    deps: ['thm-cantor-set-ternary-description', 'def-cantor-set', 'thm-geometric-series'] },
  { id: 'ex-fat-cantor-measure-computed', kind: 'example',
    title: 'The removed intervals of the Smith-Volterra-Cantor set have total length $1/2$, so the set has outer measure $1/2$',
    deps: ['thm-fat-cantor-set-has-positive-measure', 'def-fat-cantor-set', 'thm-geometric-series', 'def-series'] },
  { id: 'ex-baire-reproves-r-uncountable', kind: 'example',
    title: 'Baire category gives a third proof that $\\mathbb{R}$ is uncountable',
    deps: ['thm-baire-category-r', 'def-nowhere-dense-meager', 'thm-r-uncountable', 'def-countable'] },
  { id: 'ex-cantor-function-values', kind: 'example',
    title: 'The Cantor function takes the value $1/2$ on all of $[1/3, 2/3]$, and its values at $1/9$, $1/4$ and $7/9$',
    deps: ['thm-cantor-function-properties', 'def-cantor-function', 'ex-cantor-set-in-ternary'] },
  { id: 'cex-nowhere-dense-with-positive-measure', kind: 'counterexample',
    title: 'The Smith-Volterra-Cantor set is nowhere dense and does not have measure zero',
    deps: ['fs-nowhere-dense-implies-measure-zero', 'thm-fat-cantor-set-has-positive-measure', 'def-nowhere-dense-meager'] },
  { id: 'cex-dense-set-of-measure-zero', kind: 'counterexample',
    title: '$\\mathbb{Q}$ is dense in $\\mathbb{R}$ and has measure zero',
    deps: ['fs-measure-zero-implies-nowhere-dense', 'lem-countable-sets-are-null', 'lem-q-and-irrationals-dense-r'] },
  { id: 'cex-null-set-not-of-content-zero', kind: 'counterexample',
    title: '$\\mathbb{Q} \\cap [0,1]$ has measure zero and not content zero, although it is bounded',
    deps: ['fs-null-implies-content-zero', 'def-measure-zero-and-content-zero', 'thm-rationals-countable', 'lem-q-and-irrationals-dense-r', 'def-interval'] },
  { id: 'cex-meager-set-of-full-measure', kind: 'counterexample',
    title: '$\\mathbb{R}$ splits as a meager set together with a set of measure zero, so category and measure are independent notions of smallness',
    deps: ['thm-baire-category-r', 'def-nowhere-dense-meager', 'def-measure-zero-and-content-zero', 'thm-rationals-countable', 'thm-countable-union-of-null-is-null', 'thm-geometric-series'] },
  { id: 'cex-cantor-point-that-is-not-an-endpoint', kind: 'counterexample',
    title: '$1/4$ lies in the Cantor set and is the endpoint of no removed interval, so the endpoints do not exhaust it',
    deps: ['fs-cantor-set-countable', 'ex-cantor-set-in-ternary', 'thm-cantor-set-ternary-description', 'def-cantor-set'] },
  { id: 'cex-irrationals-are-not-f-sigma', kind: 'counterexample',
    title: 'The irrationals form a residual $G_\\delta$ set that is not $F_\\sigma$',
    deps: ['fs-q-is-g-delta', 'cor-q-is-meager-and-not-g-delta', 'def-f-sigma-g-delta', 'thm-baire-category-r'] },
  { id: 'ex-cantor-set-is-perfect-and-totally-disconnected', kind: 'example',
    title: 'The Cantor set contains no interval yet has no isolated point',
    deps: ['thm-cantor-set-properties', 'def-perfect-set-r', 'def-cantor-set', 'def-interval'] },
];

// Design: research/plan-realanalysis-pages.md RA-12 + plan-r-specific-pages.md
// "RA4". The cluster-point hypothesis is carried explicitly on every statement:
// at an isolated point of the domain every value is vacuously a limit, which is
// the hypothesis textbooks drop and which silently breaks uniqueness, the
// algebra of limits and the sequential criterion.
const RA12_ITEMS = [
  { id: 'def-function-limit', kind: 'definition',
    title: 'The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$',
    deps: ['def-limit-point-r', 'def-neighbourhood-r', 'def-real-numbers', 'def-real-order', 'lem-of-abs-value', 'def-interval'] },
  { id: 'lem-function-limit-unique', kind: 'lemma',
    title: 'At a limit point of the domain a function has at most one limit',
    strategy: 'contradiction',
    deps: ['def-function-limit', 'def-limit-point-r', 'lem-of-triangle-inequality', 'thm-of-archimedean', 'lem-rat-embeds-dense'] },
  { id: 'lem-limit-is-local', kind: 'lemma',
    title: 'The limit at $c$ depends only on the restriction of $f$ to a punctured neighbourhood of $c$, and passes to any subset of the domain having $c$ as a limit point',
    strategy: 'direct',
    deps: ['def-function-limit', 'def-neighbourhood-r', 'def-limit-point-r', 'lem-function-limit-unique'] },
  { id: 'def-one-sided-limits', kind: 'definition',
    title: 'The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$',
    deps: ['def-function-limit', 'def-limit-point-r', 'def-interval', 'lem-limit-is-local'] },
  { id: 'def-limits-at-infinity', kind: 'definition',
    title: 'Limits at $+\\infty$ and $-\\infty$, and infinite limits at a point',
    deps: ['def-function-limit', 'def-divergence-to-infinity', 'def-interval', 'def-bounded-set'] },
  { id: 'thm-sequential-criterion-for-function-limits', kind: 'theorem',
    title: 'Heine criterion: $\\lim_{x \\to c} f(x) = L$ iff $f(x_k) \\to L$ for every sequence in $A \\setminus \\{c\\}$ converging to $c$',
    strategy: 'direct',
    deps: ['def-function-limit', 'def-sequence', 'def-real-limit', 'def-limit-point-r', 'thm-of-archimedean', 'def-countable-choice', 'lem-sequential-characterisation-of-closure-r', 'lem-rat-embeds-dense'] },
  { id: 'cor-sequential-criterion-for-nonexistence', kind: 'corollary',
    title: 'A function has no limit at $c$ as soon as two sequences tending to $c$ from within the domain give different limits of the values',
    strategy: 'contrapositive',
    deps: ['thm-sequential-criterion-for-function-limits', 'def-function-limit', 'lem-function-limit-unique', 'lem-limit-unique'] },
  { id: 'thm-algebra-of-function-limits', kind: 'theorem',
    title: 'Sums, scalar multiples, products and quotients of function limits, the quotient under the hypothesis that the denominator limit is nonzero',
    strategy: 'direct',
    deps: ['thm-sequential-criterion-for-function-limits', 'thm-algebra-of-limits', 'def-function-limit', 'lem-function-limit-unique'] },
  { id: 'lem-function-limit-preserves-order', kind: 'lemma',
    title: 'If $f \\le g$ on a punctured neighbourhood of $c$ then $\\lim f \\le \\lim g$, non-strictly',
    strategy: 'direct',
    deps: ['thm-sequential-criterion-for-function-limits', 'lem-limit-preserves-order', 'def-function-limit', 'lem-limit-is-local'] },
  { id: 'thm-squeeze-for-function-limits', kind: 'theorem',
    title: 'If $f \\le g \\le h$ near $c$ and $f$ and $h$ have the same limit at $c$, then so does $g$',
    strategy: 'direct',
    deps: ['thm-sequential-criterion-for-function-limits', 'thm-squeeze', 'def-function-limit', 'lem-function-limit-preserves-order', 'lem-limit-is-local'] },
  { id: 'lem-limit-implies-local-boundedness', kind: 'lemma',
    title: 'If $f$ has a finite limit at $c$ then $f$ is bounded on some punctured neighbourhood of $c$',
    strategy: 'direct',
    deps: ['def-function-limit', 'def-bounded-set', 'def-neighbourhood-r', 'lem-of-triangle-inequality', 'lem-of-abs-value'] },
  { id: 'lem-sign-preservation-near-a-limit', kind: 'lemma',
    title: 'If $\\lim_{x \\to c} f(x) > 0$ then $f > 0$ on some punctured neighbourhood of $c$',
    strategy: 'direct',
    deps: ['def-function-limit', 'def-neighbourhood-r', 'lem-of-add-order', 'lem-of-abs-value'] },
  { id: 'thm-two-sided-limit-iff-both-one-sided', kind: 'theorem',
    title: 'If $c$ is a limit point of the domain from both sides, the limit exists iff both one-sided limits exist and agree',
    strategy: 'direct',
    deps: ['def-one-sided-limits', 'def-function-limit', 'def-limit-point-r', 'lem-function-limit-unique', 'lem-limit-is-local'] },
  { id: 'thm-composition-of-function-limits', kind: 'theorem',
    title: 'Composition of limits holds under either hypothesis: $f$ is defined at $L$ with value $M$, or $g$ avoids $L$ on a punctured neighbourhood of $c$',
    strategy: 'cases',
    deps: ['def-function-limit', 'def-limit-point-r', 'def-neighbourhood-r', 'lem-function-limit-unique', 'thm-sequential-criterion-for-function-limits', 'lem-limit-is-local'] },
  { id: 'fs-limit-equals-value', kind: 'false-statement',
    title: 'FALSE: $\\lim_{x \\to c} f(x) = f(c)$ whenever both sides exist',
    strategy: 'direct',
    deps: ['def-function-limit', 'def-limit-point-r'] },
  { id: 'fs-naive-composition-of-limits', kind: 'false-statement',
    title: 'FALSE: $\\lim_{x \\to c} f(g(x)) = M$ whenever $\\lim_{x \\to c} g = L$ and $\\lim_{y \\to L} f = M$',
    strategy: 'direct',
    deps: ['thm-composition-of-function-limits', 'def-function-limit', 'fs-limit-equals-value'] },
  { id: 'fs-limit-unique-at-every-point-of-the-domain', kind: 'false-statement',
    title: 'FALSE: a function has at most one limit at every point of its domain, isolated points included',
    strategy: 'direct',
    deps: ['lem-function-limit-unique', 'def-limit-point-r', 'def-function-limit'] },
  { id: 'fs-function-limit-preserves-strict-inequality', kind: 'false-statement',
    title: 'FALSE: $f < g$ near $c$ implies $\\lim f < \\lim g$',
    strategy: 'direct',
    deps: ['lem-function-limit-preserves-order', 'def-function-limit', 'thm-of-archimedean'] },
  { id: 'fs-limit-exists-implies-bounded-on-the-domain', kind: 'false-statement',
    title: 'FALSE: a function with a limit at $c$ is bounded on its whole domain',
    strategy: 'direct',
    deps: ['lem-limit-implies-local-boundedness', 'def-function-limit', 'def-bounded-set', 'thm-of-archimedean'] },
  { id: 'rem-heine-criterion-choice-cost', kind: 'remark',
    title: 'The sequence-to-epsilon direction of the Heine criterion is exactly countable choice for $\\mathbb{R}$, and where this library records that',
    deps: ['thm-sequential-criterion-for-function-limits', 'def-countable-choice', 'def-function-limit', 'lem-sequential-characterisation-of-closure-r'] },
];

const RA12_B_ITEMS = [
  { id: 'ex-limit-of-a-polynomial', kind: 'example',
    title: 'Every polynomial has $\\lim_{x \\to c} p(x) = p(c)$, and rational functions do so away from the zeros of the denominator',
    deps: ['thm-algebra-of-function-limits', 'def-function-limit', 'def-finite-sum', 'def-integer-power'] },
  { id: 'ex-distance-to-the-integers', kind: 'example',
    title: 'The trigonometry-free oscillator $\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is well defined, takes values in $[0, 1/2]$, and is $1$-periodic',
    deps: ['def-infimum', 'thm-infimum-property', 'lem-inf-epsilon', 'def-integers', 'thm-of-archimedean', 'def-function-limit', 'lem-of-abs-value'] },
  { id: 'ex-x-times-psi-tends-to-zero', kind: 'example',
    title: '$x\\,\\psi(1/x) \\to 0$ as $x \\to 0$, by the squeeze theorem',
    deps: ['ex-distance-to-the-integers', 'thm-squeeze-for-function-limits', 'def-function-limit', 'lem-of-abs-value'] },
  { id: 'ex-one-sided-limits-of-the-sign-function', kind: 'example',
    title: 'The sign function has both one-sided limits at $0$ and no two-sided limit',
    deps: ['def-one-sided-limits', 'thm-two-sided-limit-iff-both-one-sided', 'def-function-limit'] },
  { id: 'ex-limit-at-infinity-of-a-rational-function', kind: 'example',
    title: '$(3x^2 - 1)/(x^2 + x) \\to 3$ as $x \\to +\\infty$',
    deps: ['def-limits-at-infinity', 'thm-algebra-of-function-limits', 'def-integer-power', 'thm-of-archimedean'] },
  { id: 'cex-psi-of-one-over-x-has-no-limit-at-zero', kind: 'counterexample',
    title: '$\\psi(1/x)$ has no limit at $0$: two sequences tending to $0$ give values constantly $0$ and constantly $1/2$',
    deps: ['ex-distance-to-the-integers', 'cor-sequential-criterion-for-nonexistence', 'thm-of-archimedean', 'def-function-limit'] },
  { id: 'cex-limit-differs-from-the-value', kind: 'counterexample',
    title: 'The function equal to $0$ off the origin and to $1$ at the origin has limit $0 \\ne 1$ there',
    deps: ['fs-limit-equals-value', 'def-function-limit', 'def-limit-point-r'] },
  { id: 'cex-composition-of-limits-fails', kind: 'counterexample',
    title: 'With $g \\equiv 0$ and $f$ equal to $0$ off the origin and $1$ at it, $\\lim g = 0$ and $\\lim_{y \\to 0} f = 0$ while $f \\circ g \\equiv 1$',
    deps: ['fs-naive-composition-of-limits', 'thm-composition-of-function-limits', 'cex-limit-differs-from-the-value', 'def-function-limit'] },
  { id: 'cex-dirichlet-has-no-limit-anywhere', kind: 'counterexample',
    title: 'The indicator of $\\mathbb{Q}$ has a limit at no point of $\\mathbb{R}$',
    deps: ['cor-sequential-criterion-for-nonexistence', 'lem-q-and-irrationals-dense-r', 'def-function-limit', 'lem-rat-embeds-dense'] },
  { id: 'ex-x-times-dirichlet-has-a-limit-only-at-zero', kind: 'example',
    title: '$x \\cdot 1_{\\mathbb{Q}}(x)$ has a limit at $0$ and at no other point',
    deps: ['cex-dirichlet-has-no-limit-anywhere', 'thm-squeeze-for-function-limits', 'cor-sequential-criterion-for-nonexistence', 'def-function-limit'] },
  { id: 'cex-limit-not-unique-at-an-isolated-point', kind: 'counterexample',
    title: 'On the domain $\\{0\\} \\cup [1,2]$ every real is vacuously a limit at $0$',
    deps: ['fs-limit-unique-at-every-point-of-the-domain', 'def-limit-point-r', 'def-function-limit'] },
  { id: 'rem-classical-oscillator-is-sine-of-one-over-x', kind: 'remark',
    title: 'The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later',
    deps: ['cex-psi-of-one-over-x-has-no-limit-at-zero', 'ex-distance-to-the-integers'] },
];

RA(1, 'suprema-and-infima', 'Suprema and Infima', [FND], { items: RA01_ITEMS, bItems: RA01_B_ITEMS });
RA(2, 'roots-and-rational-powers', 'Roots, Rational Powers, and Classical Inequalities', [ra[1]], { items: RA02_ITEMS });
RA(3, 'countability-and-uncountability', 'Countability and the Uncountability of R', [ra[1], F1, XSET], { items: RA03_ITEMS });
RA(4, 'sequences-and-limits', 'Sequences and Limits', [ra[1]], { ...trigNote, items: RA04_ITEMS });
RA(5, 'monotone-sequences-and-cauchy-completeness', 'Monotone Sequences, Bolzano–Weierstrass, and Cauchy Completeness', [ra[4], ra[2]], { items: RA05_ITEMS, bItems: RA05_B_ITEMS });

// ---------------------------------------------------------------- metric track
// Design: research/plan-topology-track.md "T1. Metric Spaces", split three ways
// because the single T1 of that draft runs to ~60 items. T1 = the space and its
// topology; T2 = completeness, completion and uniform continuity; T3 = compactness.
// Every id here carries a `metric` marker so the R-native namespace of
// topology-of-r and the general namespace of topological-spaces-and-continuity
// stay visibly separate; none of the three pages cites either of the others.
const T1_ITEMS = [
  { id: 'def-metric-space', kind: 'definition',
    title: 'Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric, extended metric, and ultrametric',
    deps: ['def-real-numbers', 'def-real-order', 'def-complete-ordered-field', 'def-ordered-field'] },
  { id: 'lem-metric-nonnegativity', kind: 'lemma',
    title: 'Nonnegativity of a metric is a consequence of the other axioms, not an axiom',
    strategy: 'direct',
    deps: ['def-metric-space', 'lem-of-add-order', 'def-real-order', 'lem-of-sign-rules'] },
  { id: 'def-metric-ball', kind: 'definition',
    title: 'Open ball, closed ball and sphere in a metric space',
    deps: ['def-metric-space', 'def-real-order', 'lem-metric-nonnegativity'] },
  { id: 'def-metric-bounded-diameter', kind: 'definition',
    title: 'Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space',
    deps: ['def-metric-space', 'def-metric-ball', 'def-bounded-set', 'def-infimum', 'thm-infimum-property', 'lem-sup-unique', 'def-complete-ordered-field'] },
  { id: 'lem-metric-reverse-triangle', kind: 'lemma',
    title: 'The reverse triangle inequality $|d(x,z) - d(y,z)| \\le d(x,y)$ in any metric space',
    strategy: 'direct',
    deps: ['def-metric-space', 'lem-of-abs-value', 'lem-of-add-order', 'lem-metric-nonnegativity'] },
  { id: 'lem-distance-to-set-is-lipschitz', kind: 'lemma',
    title: '$|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz',
    strategy: 'direct',
    deps: ['def-metric-bounded-diameter', 'lem-metric-reverse-triangle', 'lem-inf-epsilon', 'thm-infimum-property', 'def-metric-space', 'def-infimum'] },
  { id: 'def-metric-topology', kind: 'definition',
    title: 'The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement',
    deps: ['def-metric-ball', 'def-metric-space'] },
  { id: 'thm-metric-open-set-algebra', kind: 'theorem',
    title: 'Arbitrary unions and finite intersections of open sets are open, open balls are open and closed balls are closed',
    strategy: 'direct',
    deps: ['def-metric-topology', 'def-metric-ball', 'lem-finite-set-has-max', 'def-max-min', 'lem-of-add-order', 'def-metric-space'] },
  { id: 'def-metric-interior-closure-boundary', kind: 'definition',
    title: 'Interior, closure, boundary, limit point, isolated point and dense subset of a metric space',
    deps: ['def-metric-topology', 'def-metric-ball', 'thm-metric-open-set-algebra'] },
  { id: 'thm-metric-closure-characterisation', kind: 'theorem',
    title: 'The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset',
    strategy: 'direct',
    deps: ['def-metric-interior-closure-boundary', 'lem-distance-to-set-is-lipschitz', 'def-metric-bounded-diameter', 'thm-metric-open-set-algebra', 'lem-inf-epsilon', 'def-metric-topology', 'def-metric-ball'] },
  { id: 'def-metric-convergence', kind: 'definition',
    title: 'Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$',
    deps: ['def-metric-space', 'def-sequence', 'def-real-limit', 'def-subsequential-limit', 'lem-metric-nonnegativity'] },
  { id: 'lem-metric-limits-unique', kind: 'lemma',
    title: 'A sequence in a metric space has at most one limit',
    strategy: 'contradiction',
    deps: ['def-metric-convergence', 'def-metric-space', 'thm-of-archimedean', 'def-real-limit', 'lem-rat-embeds-dense'] },
  { id: 'lem-metric-ball-neighbourhood-base', kind: 'lemma',
    title: 'The balls $B(x, 1/n)$, $n \\in \\mathbb{N}$, form a countable neighbourhood base at $x$, so every metric space is first countable',
    strategy: 'direct',
    deps: ['def-metric-ball', 'def-metric-topology', 'thm-of-archimedean', 'def-natural-numbers', 'def-countable', 'def-equinumerous'] },
  { id: 'thm-metric-sequential-closure', kind: 'theorem',
    title: 'A point lies in the closure of $A$ iff some sequence in $A$ converges to it, and a set is closed iff it is sequentially closed',
    strategy: 'direct',
    deps: ['thm-metric-closure-characterisation', 'def-metric-convergence', 'lem-metric-ball-neighbourhood-base', 'def-countable-choice', 'def-metric-topology', 'def-metric-interior-closure-boundary'] },
  { id: 'thm-metric-hausdorff-separation', kind: 'theorem',
    title: 'Distinct points of a metric space have disjoint balls around them',
    strategy: 'direct',
    deps: ['def-metric-space', 'def-metric-ball', 'def-metric-topology', 'lem-of-add-order', 'lem-metric-nonnegativity'] },
  { id: 'def-metric-continuity', kind: 'definition',
    title: 'Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form',
    deps: ['def-metric-space', 'def-metric-ball'] },
  { id: 'thm-metric-continuity-characterisations', kind: 'theorem',
    title: 'For a map of metric spaces the following agree: $\\varepsilon$-$\\delta$ continuity everywhere, preimages of open sets are open, preimages of closed sets are closed, sequential continuity, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$',
    strategy: 'direct',
    deps: ['def-metric-continuity', 'def-metric-topology', 'thm-metric-sequential-closure', 'thm-metric-closure-characterisation', 'def-metric-convergence', 'def-countable-choice', 'def-metric-ball', 'thm-metric-open-set-algebra'] },
  { id: 'def-isometry-and-metric-embedding', kind: 'definition',
    title: 'Isometry, isometric embedding, and the subspace metric on a subset',
    deps: ['def-metric-space', 'def-metric-topology', 'def-injection-surjection-bijection'] },
  { id: 'lem-isometry-is-an-embedding', kind: 'lemma',
    title: 'An isometric embedding is injective and carries the metric topology of the source onto the subspace topology of its image',
    strategy: 'direct',
    deps: ['def-isometry-and-metric-embedding', 'def-metric-continuity', 'thm-metric-continuity-characterisations', 'def-metric-ball', 'def-metric-topology'] },
  { id: 'def-equivalent-metrics', kind: 'definition',
    title: 'Topologically, uniformly and Lipschitz equivalent metrics on a set',
    deps: ['def-metric-topology', 'def-metric-space', 'def-metric-continuity'] },
  { id: 'thm-metric-equivalence-hierarchy', kind: 'theorem',
    title: 'Lipschitz equivalence implies uniform equivalence implies topological equivalence, and both implications are strict',
    strategy: 'direct',
    deps: ['def-equivalent-metrics', 'def-metric-topology', 'thm-metric-continuity-characterisations', 'def-metric-ball', 'def-metric-continuity'] },
  { id: 'lem-bounded-remetrisation', kind: 'lemma',
    title: '$\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology',
    strategy: 'direct',
    deps: ['def-metric-space', 'def-equivalent-metrics', 'thm-metric-equivalence-hierarchy', 'def-metric-bounded-diameter', 'lem-of-add-order', 'lem-of-inverse-positive', 'prop-of-reciprocal-order'] },
  { id: 'fs-closed-ball-is-the-closure-of-the-open-ball', kind: 'false-statement',
    title: 'FALSE: in every metric space the closure of $B(x,r)$ is the closed ball of radius $r$',
    strategy: 'direct',
    deps: ['thm-metric-closure-characterisation', 'def-metric-ball', 'thm-metric-open-set-algebra', 'def-metric-space'] },
  { id: 'fs-boundedness-is-a-topological-property', kind: 'false-statement',
    title: 'FALSE: boundedness of a metric space is determined by its topology',
    strategy: 'direct',
    deps: ['lem-bounded-remetrisation', 'def-metric-bounded-diameter', 'def-equivalent-metrics', 'def-metric-topology'] },
  { id: 'rem-metric-axiom-conventions', kind: 'remark',
    title: 'Which metric axiom list this library uses, and the live naming fork between semimetric and pseudometric',
    deps: ['def-metric-space', 'lem-metric-nonnegativity'] },
];

const T1_B_ITEMS = [
  { id: 'ex-p-metrics-on-rn', kind: 'example',
    title: 'The metrics $d_1$, $d_2$ and $d_\\infty$ on $\\mathbb{R}^n$ are metrics and are Lipschitz equivalent, with explicit constants',
    deps: ['def-metric-space', 'def-equivalent-metrics', 'thm-metric-equivalence-hierarchy', 'thm-minkowski-finite', 'thm-cauchy-schwarz-finite', 'def-finite-sum', 'lem-finite-set-has-max'] },
  { id: 'ex-discrete-metric', kind: 'example',
    title: 'The discrete metric induces the discrete topology, in which every subset is clopen',
    deps: ['def-metric-space', 'def-metric-topology', 'def-metric-ball', 'thm-metric-open-set-algebra'] },
  { id: 'ex-sup-metric-on-bounded-functions', kind: 'example',
    title: 'The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ on the bounded real-valued functions on a set',
    deps: ['def-metric-space', 'def-bounded-set', 'lem-sup-epsilon', 'lem-sup-unique', 'def-complete-ordered-field', 'lem-of-triangle-inequality'] },
  { id: 'ex-p-adic-ultrametric', kind: 'example',
    title: 'The $p$-adic absolute value gives an ultrametric on $\\mathbb{Q}$, in which every triangle is isosceles and every point of a ball is a centre',
    deps: ['def-metric-space', 'def-metric-ball', 'def-integers', 'def-rationals', 'def-integer-power', 'lem-nat-no-zero-divisors'] },
  { id: 'ex-post-office-metric', kind: 'example',
    title: 'The post-office metric $d(x,y) = \\|x\\| + \\|y\\|$ for $x \\ne y$ on $\\mathbb{R}^n$, and its isolated points',
    deps: ['ex-p-metrics-on-rn', 'def-metric-space', 'def-metric-interior-closure-boundary', 'def-metric-ball'] },
  { id: 'ex-bounded-remetrisation-of-r', kind: 'example',
    title: '$\\min(|x-y|, 1)$ on $\\mathbb{R}$ has the usual topology and diameter at most $1$',
    deps: ['lem-bounded-remetrisation', 'def-equivalent-metrics', 'def-metric-bounded-diameter'] },
  { id: 'cex-closure-of-ball-smaller-than-closed-ball', kind: 'counterexample',
    title: 'In $\\{0\\} \\cup [1,2]$ with the metric of $\\mathbb{R}$, the closure of $B(0,1) = \\{0\\}$ is $\\{0\\}$ while the closed ball is $\\{0,1\\}$',
    deps: ['fs-closed-ball-is-the-closure-of-the-open-ball', 'def-metric-ball', 'thm-metric-closure-characterisation', 'def-interval'] },
  { id: 'cex-sphere-is-not-the-boundary-of-the-ball', kind: 'counterexample',
    title: 'In the discrete metric the boundary of $B(p,1)$ is empty while the sphere of radius $1$ is everything but $p$',
    deps: ['ex-discrete-metric', 'def-metric-ball', 'def-metric-interior-closure-boundary'] },
  { id: 'cex-set-distance-is-not-a-metric', kind: 'counterexample',
    title: '$\\mathbb{Z}$ and $\\{n + 1/n : n \\ge 2\\}$ are disjoint closed subsets of $\\mathbb{R}$ at distance $0$, so the set-to-set distance is not a metric',
    deps: ['def-metric-bounded-diameter', 'def-metric-space', 'thm-metric-closure-characterisation', 'def-integers', 'thm-of-archimedean'] },
  { id: 'cex-topologically-not-uniformly-equivalent', kind: 'counterexample',
    title: 'On $(0,\\infty)$ the metrics $|x-y|$ and $|1/x - 1/y|$ have the same topology and are not uniformly equivalent',
    deps: ['thm-metric-equivalence-hierarchy', 'def-equivalent-metrics', 'def-metric-space', 'thm-of-archimedean', 'lem-of-inverse-positive'] },
  { id: 'cex-uniformly-not-lipschitz-equivalent', kind: 'counterexample',
    title: 'On $\\mathbb{R}$ the metrics $|x-y|$ and $\\min(|x-y|,1)$ are uniformly but not Lipschitz equivalent',
    deps: ['lem-bounded-remetrisation', 'thm-metric-equivalence-hierarchy', 'def-equivalent-metrics', 'thm-of-archimedean'] },
  { id: 'cex-boundedness-is-not-topological', kind: 'counterexample',
    title: '$\\mathbb{R}$ carries both an unbounded and a bounded metric inducing the same topology',
    deps: ['fs-boundedness-is-a-topological-property', 'lem-bounded-remetrisation', 'def-metric-bounded-diameter', 'ex-bounded-remetrisation-of-r'] },
];

// Design: research/plan-topology-track.md T1, completeness half. The Banach
// fixed point theorem reuses RA-05's contractive-sequence estimate rather than
// re-deriving it; the geometric SERIES is unavailable here (it lands on RA-08,
// a later page), so the error bounds are proved from the finite geometric sum
// of lem-power-difference-factorisation instead.
const T2_ITEMS = [
  { id: 'def-cauchy-in-metric', kind: 'definition',
    title: 'Cauchy sequence in a metric space',
    deps: ['def-metric-space', 'def-metric-convergence', 'def-sequence'] },
  { id: 'lem-metric-convergent-implies-cauchy', kind: 'lemma',
    title: 'Every convergent sequence in a metric space is Cauchy',
    strategy: 'direct',
    deps: ['def-cauchy-in-metric', 'def-metric-convergence', 'def-metric-space'] },
  { id: 'lem-metric-cauchy-bounded', kind: 'lemma',
    title: 'Every Cauchy sequence in a metric space is bounded',
    strategy: 'direct',
    deps: ['def-cauchy-in-metric', 'def-metric-bounded-diameter', 'lem-finite-set-has-max', 'def-max-min', 'def-metric-space'] },
  { id: 'lem-metric-cauchy-with-convergent-subsequence', kind: 'lemma',
    title: 'A Cauchy sequence in a metric space with a convergent subsequence converges to that subsequence’s limit',
    strategy: 'direct',
    deps: ['def-cauchy-in-metric', 'def-metric-convergence', 'def-subsequential-limit', 'lem-index-map-grows', 'def-metric-space'] },
  { id: 'def-complete-metric-space', kind: 'definition',
    title: 'Complete metric space: every Cauchy sequence converges in the space',
    deps: ['def-cauchy-in-metric', 'def-metric-convergence'] },
  { id: 'thm-complete-subspace-iff-closed', kind: 'theorem',
    title: 'A subspace of a complete metric space is complete iff it is closed, and a complete subspace of any metric space is closed',
    strategy: 'direct',
    deps: ['def-complete-metric-space', 'def-isometry-and-metric-embedding', 'thm-metric-sequential-closure', 'def-metric-topology', 'def-cauchy-in-metric', 'lem-metric-limits-unique'] },
  { id: 'thm-euclidean-space-complete', kind: 'theorem',
    title: '$\\mathbb{R}$ and $\\mathbb{R}^n$ with the Euclidean metric are complete, componentwise from the Cauchy criterion in $\\mathbb{R}$',
    strategy: 'direct',
    deps: ['def-complete-metric-space', 'thm-cauchy-criterion-via-lub', 'def-cauchy-in-metric', 'def-metric-space', 'def-metric-convergence', 'thm-cauchy-schwarz-finite', 'def-finite-sum', 'thm-of-square-roots'] },
  { id: 'thm-cantor-intersection-metric', kind: 'theorem',
    title: 'In a complete metric space nested nonempty closed sets whose diameters tend to $0$ meet in exactly one point, and this property characterises completeness',
    strategy: 'direct',
    deps: ['def-complete-metric-space', 'def-metric-bounded-diameter', 'thm-metric-closure-characterisation', 'def-cauchy-in-metric', 'def-countable-choice', 'thm-metric-sequential-closure', 'def-metric-topology', 'lem-metric-limits-unique'] },
  { id: 'def-metric-uniform-continuity', kind: 'definition',
    title: 'Uniform continuity of a map of metric spaces: one $\\delta$ serving every point',
    deps: ['def-metric-continuity', 'def-metric-space'] },
  { id: 'def-lipschitz-holder-contraction', kind: 'definition',
    title: 'Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction',
    deps: ['def-metric-uniform-continuity', 'def-metric-space', 'def-rational-power', 'lem-rational-power-monotone'] },
  { id: 'thm-metric-regularity-hierarchy', kind: 'theorem',
    title: 'Contraction implies Lipschitz implies Hölder on bounded sets implies uniformly continuous implies continuous, and every implication is strict',
    strategy: 'direct',
    deps: ['def-lipschitz-holder-contraction', 'def-metric-uniform-continuity', 'def-metric-continuity', 'def-rational-power', 'lem-rational-power-monotone', 'def-metric-bounded-diameter', 'lem-rational-power-laws'] },
  { id: 'thm-uniform-continuity-preserves-cauchy', kind: 'theorem',
    title: 'A uniformly continuous map sends Cauchy sequences to Cauchy sequences',
    strategy: 'direct',
    deps: ['def-metric-uniform-continuity', 'def-cauchy-in-metric', 'def-metric-space'] },
  { id: 'thm-uniformly-continuous-extension-from-dense', kind: 'theorem',
    title: 'A uniformly continuous map from a dense subspace into a complete metric space extends uniquely to a uniformly continuous map on the whole space',
    strategy: 'constructive',
    deps: ['thm-uniform-continuity-preserves-cauchy', 'def-complete-metric-space', 'def-metric-interior-closure-boundary', 'thm-metric-sequential-closure', 'def-metric-uniform-continuity', 'def-countable-choice', 'lem-metric-limits-unique', 'def-metric-convergence', 'thm-metric-continuity-characterisations'] },
  { id: 'thm-banach-fixed-point', kind: 'theorem',
    title: 'A contraction of a nonempty complete metric space into itself has exactly one fixed point, the limit of the iterates from any starting point',
    strategy: 'constructive',
    deps: ['def-lipschitz-holder-contraction', 'def-complete-metric-space', 'def-cauchy-in-metric', 'thm-recursion', 'lem-geometric-sequence-null', 'def-integer-power', 'def-metric-convergence', 'lem-metric-limits-unique', 'thm-metric-regularity-hierarchy', 'thm-metric-continuity-characterisations', 'lem-power-difference-factorisation', 'def-finite-sum'] },
  { id: 'cor-banach-error-estimates', kind: 'corollary',
    title: 'The a priori bound $d(x^{*}, x_n) \\le q^n d(x_1,x_0)/(1-q)$ and the a posteriori bound $d(x^{*}, x_{n+1}) \\le q\\,d(x_{n+1},x_n)/(1-q)$',
    strategy: 'direct',
    deps: ['thm-banach-fixed-point', 'def-lipschitz-holder-contraction', 'lem-power-difference-factorisation', 'def-finite-sum', 'lem-finite-sum-laws', 'def-integer-power', 'lem-geometric-sequence-null'] },
  { id: 'def-metric-completion', kind: 'definition',
    title: 'A completion of a metric space: a complete metric space together with an isometric embedding onto a dense subspace',
    deps: ['def-complete-metric-space', 'def-isometry-and-metric-embedding', 'def-metric-interior-closure-boundary'] },
  { id: 'thm-metric-completion-exists', kind: 'theorem',
    title: 'Every metric space has a completion, constructed as the equivalence classes of its Cauchy sequences',
    strategy: 'constructive',
    deps: ['def-metric-completion', 'def-cauchy-in-metric', 'def-complete-metric-space', 'def-metric-space', 'def-isometry-and-metric-embedding', 'thm-metric-sequential-closure', 'def-countable-choice', 'thm-metric-closure-characterisation', 'thm-cauchy-criterion-via-lub', 'def-real-limit', 'lem-metric-cauchy-bounded'] },
  { id: 'thm-metric-completion-unique', kind: 'theorem',
    title: 'A completion is unique up to a unique isometry fixing the original space, and uniformly continuous maps into complete spaces extend through it',
    strategy: 'direct',
    deps: ['thm-metric-completion-exists', 'thm-uniformly-continuous-extension-from-dense', 'def-metric-completion', 'def-isometry-and-metric-embedding', 'lem-isometry-is-an-embedding', 'def-metric-uniform-continuity'] },
  { id: 'fs-completeness-is-a-topological-property', kind: 'false-statement',
    title: 'FALSE: completeness of a metric space is determined by its topology',
    strategy: 'direct',
    deps: ['def-complete-metric-space', 'def-equivalent-metrics', 'thm-metric-equivalence-hierarchy', 'def-metric-topology'] },
  { id: 'fs-cauchy-implies-convergent-in-every-metric-space', kind: 'false-statement',
    title: 'FALSE: every Cauchy sequence in a metric space converges',
    strategy: 'direct',
    deps: ['def-cauchy-in-metric', 'def-complete-metric-space', 'lem-metric-convergent-implies-cauchy'] },
  { id: 'fs-strict-contraction-has-a-fixed-point', kind: 'false-statement',
    title: 'FALSE: $d(fx, fy) < d(x,y)$ for all $x \\ne y$ on a complete metric space forces a fixed point',
    strategy: 'direct',
    deps: ['thm-banach-fixed-point', 'def-lipschitz-holder-contraction', 'def-complete-metric-space'] },
  { id: 'fs-equivalent-metrics-share-cauchy-sequences', kind: 'false-statement',
    title: 'FALSE: two metrics inducing the same topology have the same Cauchy sequences',
    strategy: 'direct',
    deps: ['def-equivalent-metrics', 'def-cauchy-in-metric', 'thm-metric-equivalence-hierarchy'] },
  { id: 'rem-complete-metrizability-is-the-topological-shadow', kind: 'remark',
    title: 'Completeness belongs to the metric; the topological invariant is complete metrizability, which this library settles only much later',
    deps: ['fs-completeness-is-a-topological-property', 'def-complete-metric-space', 'def-equivalent-metrics', 'def-metric-completion'] },
];

const T2_B_ITEMS = [
  { id: 'ex-completion-of-q-is-r', kind: 'example',
    title: 'The completion of $\\mathbb{Q}$ under the usual metric is $\\mathbb{R}$, and under the $p$-adic metric it is a different space',
    deps: ['thm-metric-completion-exists', 'thm-metric-completion-unique', 'def-metric-completion', 'def-rationals', 'thm-cauchy-criterion-via-lub', 'lem-rat-embeds-dense'] },
  { id: 'ex-banach-fixed-point-for-square-roots', kind: 'example',
    title: 'The map $x \\mapsto (x + 2/x)/2$ is a contraction of $[1,2]$ with fixed point $\\sqrt{2}$, and the a priori bound gives the error after $n$ steps',
    deps: ['thm-banach-fixed-point', 'cor-banach-error-estimates', 'def-lipschitz-holder-contraction', 'thm-of-square-roots', 'thm-euclidean-space-complete', 'def-interval'] },
  { id: 'ex-lipschitz-extension-from-the-rationals', kind: 'example',
    title: 'A Lipschitz function on $\\mathbb{Q}$ extends uniquely to a Lipschitz function on $\\mathbb{R}$ with the same constant',
    deps: ['thm-uniformly-continuous-extension-from-dense', 'def-lipschitz-holder-contraction', 'lem-rat-embeds-dense', 'thm-euclidean-space-complete'] },
  { id: 'ex-square-root-is-half-holder', kind: 'example',
    title: '$\\sqrt{\\cdot}$ on $[0,\\infty)$ is uniformly continuous and exactly $1/2$-Hölder, and is not Lipschitz',
    deps: ['thm-metric-regularity-hierarchy', 'def-lipschitz-holder-contraction', 'thm-of-square-roots', 'def-rational-power', 'def-metric-uniform-continuity'] },
  { id: 'ex-bounded-functions-with-sup-metric-are-complete', kind: 'example',
    title: 'The bounded real-valued functions on a set, with the supremum metric, form a complete metric space',
    deps: ['def-complete-metric-space', 'def-cauchy-in-metric', 'def-metric-space', 'lem-sup-epsilon', 'def-bounded-set', 'thm-cauchy-criterion-via-lub'] },
  { id: 'cex-contraction-on-an-incomplete-space', kind: 'counterexample',
    title: '$x \\mapsto x/2$ maps $(0,1]$ into itself, is a $1/2$-contraction, and has no fixed point',
    deps: ['thm-banach-fixed-point', 'def-complete-metric-space', 'def-lipschitz-holder-contraction', 'def-interval'] },
  { id: 'cex-strict-contraction-without-a-fixed-point', kind: 'counterexample',
    title: '$x \\mapsto x + 1/x$ on $[1,\\infty)$ strictly decreases every distance and has no fixed point',
    deps: ['fs-strict-contraction-has-a-fixed-point', 'thm-banach-fixed-point', 'def-lipschitz-holder-contraction', 'def-complete-metric-space', 'thm-of-archimedean', 'thm-complete-subspace-iff-closed'] },
  { id: 'cex-cantor-intersection-needs-vanishing-diameters', kind: 'counterexample',
    title: 'On $\\mathbb{N}$ with $d(m,n) = 1 + 1/(m+n)$ the sets $\\{n, n+1, \\dots\\}$ are nested, closed, bounded and complete with empty intersection',
    deps: ['thm-cantor-intersection-metric', 'def-metric-space', 'def-complete-metric-space', 'def-metric-bounded-diameter', 'thm-of-archimedean'] },
  { id: 'cex-completeness-is-not-topological', kind: 'counterexample',
    title: 'On $\\mathbb{N}$ the metrics $|m-n|$ and $|1/m - 1/n|$ both induce the discrete topology, and only the first is complete',
    deps: ['fs-completeness-is-a-topological-property', 'def-complete-metric-space', 'def-equivalent-metrics', 'def-metric-topology', 'thm-of-archimedean'] },
  { id: 'cex-same-topology-different-cauchy-sequences', kind: 'counterexample',
    title: 'On $(0,\\infty)$ the metrics $|x-y|$ and $|1/x - 1/y|$ share their topology and not their Cauchy sequences',
    deps: ['fs-equivalent-metrics-share-cauchy-sequences', 'def-cauchy-in-metric', 'def-equivalent-metrics', 'thm-of-archimedean'] },
  { id: 'cex-continuous-map-destroying-cauchyness', kind: 'counterexample',
    title: '$x \\mapsto 1/x$ is continuous on $(0,1)$ and sends the Cauchy sequence $(1/k)$ to an unbounded one',
    deps: ['thm-uniform-continuity-preserves-cauchy', 'def-metric-uniform-continuity', 'def-metric-continuity', 'def-cauchy-in-metric', 'thm-of-archimedean', 'def-interval'] },
  { id: 'cex-uniform-bijection-with-non-uniform-inverse', kind: 'counterexample',
    title: '$x \\mapsto x^{1/3}$ is a uniformly continuous bijection of $\\mathbb{R}$ whose inverse $x^3$ is not uniformly continuous',
    deps: ['def-metric-uniform-continuity', 'thm-metric-regularity-hierarchy', 'thm-nth-roots-exist', 'def-rational-power', 'lem-rational-power-monotone', 'thm-of-archimedean', 'lem-power-difference-factorisation'] },
];
// Metric spaces sit HERE, immediately after Cauchy completeness (owner decision
// 2026-07-25). The analysis pages that genuinely want metric language (R^n,
// uniform convergence, C(K)) then have it, while the R-specific pages keep
// proving things R-natively by bisection and least upper bound. General topology
// still comes after the whole analysis track and specialises.
T(1, 'metric-spaces', 'Metric Spaces', [ra[5], ra[3]], { items: T1_ITEMS, bItems: T1_B_ITEMS });
T(2, 'completeness-and-uniform-continuity', 'Completeness, Completion, and Uniform Continuity', [t[1]], { items: T2_ITEMS, bItems: T2_B_ITEMS });
T(3, 'compactness-in-metric-spaces', 'Compactness in Metric Spaces', [t[2]]);   // ra[3] now reached via t[1]

RA(6, 'limsup-and-subsequential-limits', 'limsup, liminf, and Subsequential Limits', [ra[5]], { items: RA06_ITEMS, bItems: RA06_B_ITEMS });
RA(7, 'equivalent-forms-of-completeness', 'Equivalent Forms of Completeness', [ra[6]], { items: RA07_ITEMS, bItems: RA07_B_ITEMS });
RA(8, 'series-and-nonnegative-tests', 'Series: Convergence and the Nonnegative Tests', [ra[6]], { items: RA08_ITEMS, bItems: RA08_B_ITEMS });
RA(9, 'absolute-convergence-and-rearrangement', 'Absolute and Conditional Convergence; Rearrangement; Products', [ra[8]]);
RA(10, 'topology-of-r', 'Topology of R', [ra[5], ra[3]], { ...trigNote, items: RA10_ITEMS, bItems: RA10_B_ITEMS });
RA(11, 'cantor-set-baire-and-measure-zero', 'The Cantor Set, Baire Category, and Measure Zero in R', [ra[10], ra[8]], { items: RA11_ITEMS, bItems: RA11_B_ITEMS });
RA(12, 'limits-of-real-functions', 'Limits of Real Functions', [ra[10]], { ...trigNote, items: RA12_ITEMS, bItems: RA12_B_ITEMS });
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

// Design: research/plan-topology-track.md "T2. Topological Spaces and
// Continuity", trimmed to the 12-25 target per notes-delta-topology-core.md §1
// (the draft page ran to ~50 items). Subspaces, products and quotients are the
// NEXT page; separation, compactness, connectedness and the countability axioms
// are later ones. The Kuratowski axioms, the subbasis criterion for continuity
// and the locally finite pasting lemma are included because that delta file
// records them as omitted by Munkres and by the Cambridge IB course.
// This page's namespace is deliberately disjoint from topology-of-r's `-r`
// namespace and from metric-spaces' `metric` namespace: the same mathematics is
// proved three times, by order completeness, by balls, and by open sets.
const T4_ITEMS = [
  { id: 'def-topological-space', kind: 'definition',
    title: 'Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison',
    deps: [] },
  { id: 'def-standard-topologies', kind: 'definition',
    title: 'The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies',
    deps: ['def-topological-space', 'def-countable'] },
  { id: 'def-topology-basis-subbasis', kind: 'definition',
    title: 'Basis and subbasis for a topology, and the topology generated by a family of sets',
    deps: ['def-topological-space'] },
  { id: 'thm-basis-criterion', kind: 'theorem',
    title: 'A family is a basis for a unique topology iff it covers the set and every point of an intersection of two members lies in a member inside that intersection; finite intersections of any subbasis form a basis',
    strategy: 'direct',
    deps: ['def-topology-basis-subbasis', 'def-topological-space'] },
  { id: 'def-neighbourhood-top', kind: 'definition',
    title: 'Neighbourhood of a point and neighbourhood base, with this library’s convention that a neighbourhood need not be open',
    deps: ['def-topological-space'] },
  { id: 'def-interior-closure-boundary-top', kind: 'definition',
    title: 'Interior, closure, boundary, exterior, derived set and isolated point in a topological space',
    deps: ['def-topological-space', 'def-neighbourhood-top'] },
  { id: 'thm-closure-characterisation-top', kind: 'theorem',
    title: 'A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set',
    strategy: 'direct',
    deps: ['def-interior-closure-boundary-top', 'def-neighbourhood-top', 'def-topology-basis-subbasis', 'thm-basis-criterion', 'def-topological-space'] },
  { id: 'lem-interior-closure-boundary-identities', kind: 'lemma',
    title: 'Interior commutes with finite intersections and closure with finite unions, while the two reverse combinations are inclusions only and both fail for infinite families; the space is the disjoint union of interior, boundary and exterior',
    strategy: 'direct',
    deps: ['def-interior-closure-boundary-top', 'thm-closure-characterisation-top', 'def-standard-topologies', 'def-topological-space'] },
  { id: 'def-dense-top', kind: 'definition',
    title: 'Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets',
    deps: ['def-interior-closure-boundary-top', 'thm-closure-characterisation-top', 'def-topology-basis-subbasis'] },
  { id: 'thm-kuratowski-closure-axioms', kind: 'theorem',
    title: 'Kuratowski: operators satisfying $c(\\varnothing) = \\varnothing$, $A \\subseteq c(A)$, $c(c(A)) = c(A)$ and $c(A \\cup B) = c(A) \\cup c(B)$ correspond bijectively to topologies',
    strategy: 'direct',
    deps: ['def-interior-closure-boundary-top', 'thm-closure-characterisation-top', 'lem-interior-closure-boundary-identities', 'def-topological-space', 'def-injection-surjection-bijection'] },
  { id: 'def-continuous-map-top', kind: 'definition',
    title: 'Continuity of a map of topological spaces at a point and globally',
    deps: ['def-topological-space', 'def-neighbourhood-top'] },
  { id: 'thm-continuity-characterisations-top', kind: 'theorem',
    title: 'For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$',
    strategy: 'direct',
    deps: ['def-continuous-map-top', 'thm-closure-characterisation-top', 'def-topology-basis-subbasis', 'thm-basis-criterion', 'def-interior-closure-boundary-top', 'def-topological-space'] },
  { id: 'lem-continuity-is-local-and-pastes', kind: 'lemma',
    title: 'Continuity may be checked on any open cover, and on any finite closed cover; composites of continuous maps are continuous',
    strategy: 'direct',
    deps: ['thm-continuity-characterisations-top', 'def-continuous-map-top', 'def-topological-space'] },
  { id: 'def-homeomorphism-and-open-maps', kind: 'definition',
    title: 'Homeomorphism, open map, closed map, embedding, and what it means for a property to be topological',
    deps: ['def-continuous-map-top', 'def-injection-surjection-bijection', 'def-topological-space'] },
  { id: 'lem-homeomorphism-criteria', kind: 'lemma',
    title: 'A continuous bijection is a homeomorphism iff it is open iff it is closed, and homeomorphy is an equivalence relation on spaces',
    strategy: 'direct',
    deps: ['def-homeomorphism-and-open-maps', 'thm-continuity-characterisations-top', 'def-continuous-map-top', 'lem-continuity-is-local-and-pastes'] },
  { id: 'def-sequence-convergence-top', kind: 'definition',
    title: 'Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure',
    deps: ['def-topological-space', 'def-neighbourhood-top', 'def-sequence', 'def-natural-numbers'] },
  { id: 'lem-sequential-closure-inside-closure', kind: 'lemma',
    title: 'The sequential closure is contained in the closure and continuity implies sequential continuity; neither implication can be reversed in general, and sequential limits need not be unique',
    strategy: 'direct',
    deps: ['def-sequence-convergence-top', 'thm-closure-characterisation-top', 'def-continuous-map-top', 'thm-continuity-characterisations-top', 'def-standard-topologies'] },
  { id: 'def-first-countable-top', kind: 'definition',
    title: 'First countable space: a countable neighbourhood base at every point',
    deps: ['def-neighbourhood-top', 'def-countable', 'def-equinumerous'] },
  { id: 'thm-first-countable-sequences-suffice', kind: 'theorem',
    title: 'In a first countable space the sequential closure equals the closure and sequential continuity at a point equals continuity there',
    strategy: 'direct',
    deps: ['def-first-countable-top', 'lem-sequential-closure-inside-closure', 'thm-closure-characterisation-top', 'def-sequence-convergence-top', 'def-countable-choice', 'thm-continuity-characterisations-top', 'thm-recursion'] },
  { id: 'def-metrizable-space', kind: 'definition',
    title: 'Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not',
    deps: ['def-topological-space', 'def-metric-topology', 'def-metric-space', 'thm-metric-open-set-algebra', 'def-equivalent-metrics'] },
  { id: 'fs-arbitrary-intersection-of-opens-is-open-top', kind: 'false-statement',
    title: 'FALSE: an arbitrary intersection of open sets is open in every topological space',
    strategy: 'direct',
    deps: ['def-topological-space', 'def-standard-topologies', 'def-metrizable-space', 'def-topology-basis-subbasis'] },
  { id: 'fs-sequentially-continuous-implies-continuous', kind: 'false-statement',
    title: 'FALSE: a sequentially continuous map between topological spaces is continuous',
    strategy: 'direct',
    deps: ['lem-sequential-closure-inside-closure', 'def-sequence-convergence-top', 'def-standard-topologies', 'thm-first-countable-sequences-suffice', 'def-continuous-map-top'] },
  { id: 'fs-continuous-bijection-is-a-homeomorphism', kind: 'false-statement',
    title: 'FALSE: every continuous bijection of topological spaces is a homeomorphism',
    strategy: 'direct',
    deps: ['lem-homeomorphism-criteria', 'def-homeomorphism-and-open-maps', 'def-standard-topologies', 'def-continuous-map-top'] },
  { id: 'fs-every-topology-is-metrizable', kind: 'false-statement',
    title: 'FALSE: every topology is induced by some metric',
    strategy: 'direct',
    deps: ['def-metrizable-space', 'def-standard-topologies', 'thm-metric-hausdorff-separation', 'def-metric-topology'] },
  { id: 'rem-topology-conventions', kind: 'remark',
    title: 'The four live convention forks of general topology and which side this library takes on each',
    deps: ['def-neighbourhood-top', 'def-topological-space', 'def-standard-topologies', 'def-first-countable-top'] },
];

const T4_B_ITEMS = [
  { id: 'ex-discrete-and-indiscrete-topologies', kind: 'example',
    title: 'The discrete and indiscrete topologies, their closures and interiors, and their continuous maps in each direction',
    deps: ['def-standard-topologies', 'def-interior-closure-boundary-top', 'thm-continuity-characterisations-top'] },
  { id: 'ex-cofinite-topology', kind: 'example',
    title: 'On an infinite set the cofinite topology has every infinite subset dense and no two nonempty open sets disjoint',
    deps: ['def-standard-topologies', 'def-dense-top', 'thm-closure-characterisation-top'] },
  { id: 'ex-cocountable-topology-on-r', kind: 'example',
    title: 'In the cocountable topology on $\\mathbb{R}$ the closed sets are the countable sets and $\\mathbb{R}$, and a sequence converges iff it is eventually constant',
    deps: ['def-standard-topologies', 'def-sequence-convergence-top', 'thm-closure-characterisation-top', 'def-countable', 'thm-countable-union-of-countable', 'cor-irrationals-uncountable'] },
  { id: 'ex-sierpinski-and-particular-point-spaces', kind: 'example',
    title: 'Sierpinski space and the particular-point topology, with their closures and their continuous maps',
    deps: ['def-standard-topologies', 'def-interior-closure-boundary-top', 'thm-continuity-characterisations-top'] },
  { id: 'ex-order-topology', kind: 'example',
    title: 'The order topology on a totally ordered set, with the open rays as a subbasis, and its agreement with the usual topology of $\\mathbb{R}$',
    deps: ['def-topology-basis-subbasis', 'thm-basis-criterion', 'def-partial-order', 'def-real-order', 'def-interval', 'def-metrizable-space'] },
  { id: 'ex-sorgenfrey-line', kind: 'example',
    title: 'The Sorgenfrey line: $\\mathbb{R}$ with the half-open intervals $[a,b)$ as a basis is strictly finer than the usual topology, is first countable and separable, and its sequences converge only from the right',
    deps: ['thm-basis-criterion', 'def-topology-basis-subbasis', 'def-topological-space', 'def-first-countable-top', 'def-dense-top', 'def-sequence-convergence-top', 'lem-rat-embeds-dense', 'def-interval'] },
  { id: 'ex-kuratowski-fourteen-sets', kind: 'example',
    title: 'Closure and complement generate at most fourteen sets from any subset, and $(0,1) \\cup (1,2) \\cup \\{3\\} \\cup ([4,5] \\cap \\mathbb{Q})$ attains fourteen',
    deps: ['thm-kuratowski-closure-axioms', 'lem-interior-closure-boundary-identities', 'thm-closure-characterisation-top', 'def-metrizable-space', 'def-interval', 'lem-rat-embeds-dense'] },
  { id: 'cex-sequential-closure-strictly-inside-closure', kind: 'counterexample',
    title: 'In the cocountable topology on $\\mathbb{R}$ the sequential closure of $[0,1]$ is $[0,1]$ while its closure is all of $\\mathbb{R}$',
    deps: ['ex-cocountable-topology-on-r', 'lem-sequential-closure-inside-closure', 'def-sequence-convergence-top', 'thm-closure-characterisation-top'] },
  { id: 'cex-sequentially-continuous-not-continuous', kind: 'counterexample',
    title: 'The identity from the cocountable topology on $\\mathbb{R}$ to the usual topology is sequentially continuous and not continuous',
    deps: ['fs-sequentially-continuous-implies-continuous', 'ex-cocountable-topology-on-r', 'def-sequence-convergence-top', 'def-metrizable-space'] },
  { id: 'cex-sequential-limits-not-unique', kind: 'counterexample',
    title: 'In the indiscrete topology every sequence converges to every point, and in the cofinite topology on an infinite set an injective sequence converges to every point',
    deps: ['def-sequence-convergence-top', 'def-standard-topologies', 'ex-cofinite-topology', 'lem-sequential-closure-inside-closure'] },
  { id: 'cex-continuous-bijection-not-a-homeomorphism', kind: 'counterexample',
    title: 'The identity from the discrete topology on $\\mathbb{R}$ to the usual topology is a continuous bijection that is not a homeomorphism',
    deps: ['fs-continuous-bijection-is-a-homeomorphism', 'def-standard-topologies', 'lem-homeomorphism-criteria', 'def-metrizable-space'] },
  { id: 'cex-pasting-fails-for-an-infinite-closed-cover', kind: 'counterexample',
    title: '$\\mathbb{Z} \\subseteq \\mathbb{R}$ covered by its singletons: every restriction is continuous and the map is not, so the closed pasting lemma needs finiteness',
    deps: ['lem-continuity-is-local-and-pastes', 'def-continuous-map-top', 'def-standard-topologies', 'def-integers', 'def-metrizable-space'] },
  { id: 'cex-interior-of-a-union-is-larger', kind: 'counterexample',
    title: 'In $\\mathbb{R}$ the interiors of $\\mathbb{Q}$ and of its complement are both empty while the interior of their union is everything',
    deps: ['lem-interior-closure-boundary-identities', 'def-interior-closure-boundary-top', 'def-metrizable-space', 'lem-rat-embeds-dense'] },
  { id: 'cex-non-metrizable-topology', kind: 'counterexample',
    title: 'The indiscrete topology on a two-point set is induced by no metric',
    deps: ['fs-every-topology-is-metrizable', 'def-metrizable-space', 'def-standard-topologies', 'thm-metric-hausdorff-separation'] },
];

T(4, 'topological-spaces-and-continuity', 'Topological Spaces and Continuity', [t[1]], { items: T4_ITEMS, bItems: T4_B_ITEMS });
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

// Examples and counterexamples carry a phase-format body too (SCHEMA.md §4), so
// each needs a proof_strategy exactly as a lemma does; all 46 published ex/cex/fs
// items do. Default the ones the tables above left implicit, on the NEW pages
// only, so the already-authored lists keep saying nothing about strategies that
// are already recorded on disk. `direct` is the default the corpus uses; the
// author overrides it when the argument really is by contradiction.
const NEW_ITEM_LISTS = [
  RA05_ITEMS, RA05_B_ITEMS, RA06_ITEMS, RA06_B_ITEMS, RA07_ITEMS, RA07_B_ITEMS,
  RA08_ITEMS, RA08_B_ITEMS, RA10_ITEMS, RA10_B_ITEMS, RA11_ITEMS, RA11_B_ITEMS,
  RA12_ITEMS, RA12_B_ITEMS, T1_ITEMS, T1_B_ITEMS, T2_ITEMS, T2_B_ITEMS,
  T4_ITEMS, T4_B_ITEMS,
];
const PROOF_BEARING = new Set([
  'theorem', 'lemma', 'proposition', 'corollary',
  'example', 'counterexample', 'false-statement',
]);
for (const list of NEW_ITEM_LISTS)
  for (const it of list)
    if (PROOF_BEARING.has(it.kind) && !it.strategy) it.strategy = 'direct';

writeFileSync(
  '/root/Projects/prestige-math-library/research/plan-spec.json',
  JSON.stringify({
    note: 'Machine-checked design for the Real Analysis + Topology expansion. Run: node tools/validate-plan.mjs research/plan-spec.json. Pages with an empty items[] are validated at PAGE level only (reading order + declared prerequisites); their item lists land as each page is authored.',
    generated: '2026-07-25',
    pages,
  }, null, 2) + '\n',
);
console.log(`${pages.length} pages, ${pages.reduce((n, p) => n + p.items.length, 0)} items written`);
