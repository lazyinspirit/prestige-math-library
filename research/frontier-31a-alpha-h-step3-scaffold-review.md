# Step 3 scaffold review — frontier-31a group h

Reviewed batches `4` and `15` against their manifests, coverage ledgers, batch
notes, design sections, and the current `research/plan-spec.json`. Both A/B
pairs are sufficient after the licensed backward-prerequisite repairs below.
No page id, source disposition, forward edge, or reading order changed.

## Batch 4 — infinite-product-measures-and-kolmogorov-extension

This manifest has 21 A items and 8 B items. Its A page requires
`independence-borel-cantelli-and-zero-one-laws-examples` and
`complete-metrizability-and-baire`; the companion requires this A page. These
are current-plan prerequisites, and no B item is a dependency target.

The route is sound: countable products are over arbitrary measurable spaces;
the arbitrary-index result is only for standard-Borel coordinates and only on
the cylinder/product sigma-algebra. Source support is complete and fetch-stamped
in `research/frontier-31a-batch-4.coverage.json`: Kajino §3.6 (printed
pp. 96–99 / PDF pp. 100–104) for the countable construction; Biskup Chapter 2,
especially Lemmas 2.6–2.8 and Theorem 2.4 (PDF pp. 0–6), for cylinders, inner
regularity, finite products, and compactness; Shalizi Lecture 2, Theorems 27–29
(PDF pp. 3–5), for arbitrary-index Borel extension; and Durrett Appendix A.3
for the compact finite-intersection route.

The original inner-regularity scaffold was insufficient: its tightness strategy
named no Borel-measurability, enumeration, metric-compactness, or summable-loss
facts. I repaired `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`
with these backward prerequisites:

- `def-borel-sigma-algebra`, `lem-countable-iff-surjection-from-n`, and
  `def-countable-choice`;
- `def-metric-ball`, `thm-metric-open-set-algebra`,
  `def-totally-bounded`, `thm-complete-subspace-iff-closed`, and
  `thm-complete-and-totally-bounded-implies-compact`; and
- `thm-continuity-from-below-for-measures`,
  `thm-finite-and-countable-subadditivity-of-measures`, and
  `prop-measure-of-a-set-difference`.

Its strategy now gives the complete-metric/countable-dense-set construction,
closed-ball intersection, and summable complement loss. Its title now states
countable choice. The countable-product theorem now declares countable choice
through `thm-caratheodory-extension-theorem`; the arbitrary-index theorem now
declares the Axiom of Choice through `thm-tychonoff`, plus countable choice for
Caratheodory. Their direct choice dependencies are recorded.

Boundary checks remain sound: no theorem reaches the full path-space power set;
the arbitrary-index theorem does not extend to arbitrary measurable coordinates;
the modification example retains diagonal measurability; and the noncylinder
example remains restricted to uncountable coordinate sets. This A page is
**sufficient** after the repairs.

## Batch 15 — the-structural-criterion-for-property-star

This manifest has 10 A items and 4 B items. Its A page requires
`property-star-and-comb-outcomes`, and its companion requires this A page. Both
relations match the plan and
`research/plan-combinatorics-and-categories.md` §16.2, orders 433/434.

The source is Huang, Ju, and Zhou, “Erdős–Hajnal beyond the five-vertex path,”
version 2, complete §5 through Lemma 5.1,
<https://arxiv.org/html/2606.06258v2>; the precise reader locator and fetch
record are in `research/frontier-31a-batch-15.coverage.json`. It supplies the
structural assumptions, large-`Y` and transversal reductions, geometric-layer
and wide-layer claims, and final geometric-series contradiction. The manifest's
integral cutoffs are the planned floor/ceiling repair, not literal nonintegral
block indices from the source.

The rounded-layer route needed declared real-power order support. I added:

- `def-real-power`, `thm-real-power-laws`,
  `thm-natural-logarithm-laws`, and
  `thm-exponential-is-strictly-increasing` to
  `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set`,
  `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade`, and
  `thm-the-structural-comb-partition-criterion-implies-property-star`;
- `lem-rational-power-monotone` and
  `thm-real-power-agrees-with-rational-exponent` to
  `lem-integral-geometric-layers-have-rounded-cutoff-bounds` and
  `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part`.

These license exponent lowering, `(w/2)^c >= w^(c/2)` for `w >= 4`, the rounded
cutoff comparisons, and raising a cutoff bound to a possibly non-rational
Erdős–Hajnal exponent. The endpoint `ell = 4` was checked: the preterminal
cutoff has `ell^(r/4) <= m_r <= ell^(r/2)`, and the first layer plus geometric
tail is strictly below `w/2` when all preterminal layers are small. Graphs
remain finite and simple, with nonempty positive-width blockade blocks. This A
page is **sufficient** after the repairs.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-31a --group h` produced
19 current declines. Every row in
`research/frontier-31a-alpha-h-scope-decisions.json` is now `stands` with
current source-specific evidence.

- The 13 batch-4 Markov/kernel rows remain deferred to the current-plan pair
  `markov-kernels-and-markov-chains` (orders 548/549): they require transition
  kernels, conditional distributions/independence, or splice/iteration, not
  premises of the generic extension route.
- The batch-4 Kallenberg remark remains out of scope because it is a
  bibliographic comparison, not an omitted construction or boundary assertion.
- The five batch-15 rows remain out of scope: Diestel's minimum-degree
  path/cycle propositions are not comb-partition steps; Nguyen's bounded-VC
  iteration and restricted-set lemma are a different route; and Nguyen's
  empty-block convention conflicts with this page's positive-width blocks.

No owner decision is required.

## Validation and checkpoint

Checks run on the final manifest and decision bytes:

- JSON parse check — passed.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-4.pages.json` —
  29 items, 0 errors.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-15.pages.json` —
  14 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only` on each manifest — 0 errors,
  0 warnings.
- `node tools/coverage-checklist.mjs` on batch 4 — 57 harvested results, 0
  errors, 0 warnings; on batch 15 — 25 harvested results, 0 errors and the
  pre-existing low-yield warning, resolved by the five reviewed declines above.
- `node tools/scope-decisions.mjs check --run frontier-31a --group h` — 19
  current declines, 0 errors.

There are no unresolved group-h scaffold obligations. At authoring, retain the
choice hypotheses and the countable/arbitrary-index and cylinder/full-power-set
boundaries recorded here.
