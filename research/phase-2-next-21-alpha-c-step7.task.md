# Step 7 adjudication — group **c**, run `phase-2-next-21`

You are the group Alpha for batches **2**, **3**, **1**: 4 A/B pair(s), 8 page(s), 126 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-21-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-21-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `banach-alaoglu-goldstine-and-krein-milman` | A | functional-analysis | 288.063 | `convex-and-semicontinuous-functions-on-rn`, `filters-and-ultrafilters`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `weak-and-weak-star-topologies` |
| 2 | `banach-alaoglu-goldstine-and-krein-milman-examples` | B | functional-analysis | 288.064 | `banach-alaoglu-goldstine-and-krein-milman` |
| 2 | `reflexivity-and-eberlein-smulian` | A | functional-analysis | 288.065 | `banach-alaoglu-goldstine-and-krein-milman`, `complex-lp-spaces-and-test-function-conventions`, `hausdorff-via-the-diagonal`, `complete-metrizability-and-baire` |
| 2 | `reflexivity-and-eberlein-smulian-examples` | B | functional-analysis | 288.066 | `reflexivity-and-eberlein-smulian`, `inner-product-spaces-and-orthogonality` |
| 3 | `tempered-distributions-and-the-fourier-transform` | A | functional-analysis | 288.095 | `distributions-test-functions-and-differentiation` |
| 3 | `tempered-distributions-and-the-fourier-transform-examples` | B | functional-analysis | 288.096 | `tempered-distributions-and-the-fourier-transform` |
| 1 | `the-ergodic-theorems-of-von-neumann-and-birkhoff` | A | measure-theory | 288.045 | `measure-preserving-transformations-and-poincare-recurrence`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `modes-of-convergence-egorov-and-lusin`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `the-lebesgue-integral-and-the-convergence-theorems`, `sequences-and-limits`, `approximation-and-compactness-in-ck` |
| 1 | `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples` | B | measure-theory | 288.046 | `the-ergodic-theorems-of-von-neumann-and-birkhoff` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `banach-alaoglu-goldstine-and-krein-milman` — Banach Alaoglu Goldstine and Krein Milman (17 item(s))

- `lem-dual-ball-as-a-closed-subset-of-a-product` · lemma — Dual ball as a closed subset of a product
- `thm-banach-alaoglu` · theorem — Banach alaoglu
- `def-absolute-polar-in-a-normed-dual-pair` · definition — Absolute polar in a normed dual pair
- `thm-weak-star-compactness-of-polar-sets` · theorem — Weak star compactness of polar sets
- `thm-dual-ball-weak-star-metrizable-for-separable-predual` · theorem — Dual ball weak star metrizable for separable predual
- `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact` · corollary — Separable banach dual ball is weak star sequentially compact
- `thm-goldstine` · theorem — Goldstine
- `cor-goldstine-finite-data-approximation` · corollary — Goldstine finite data approximation
- `thm-banach-dieudonne-linear-subspace-criterion` · theorem — Banach dieudonne linear subspace criterion
- `def-extreme-point-and-face` · definition — Extreme point and face
- `lem-minimizer-face-of-a-continuous-affine-functional` · lemma — Minimizer face of a continuous affine functional
- `thm-krein-milman-existence-of-extreme-points` · theorem — Krein milman existence of extreme points
- `thm-krein-milman-closed-convex-hull-form` · theorem — Krein milman closed convex hull form
- `def-upper-semicontinuous-real-map-on-a-topological-space` · definition — Upper semicontinuous real map on a topological space
- `cor-bauer-maximum-principle` · corollary — Bauer maximum principle
- `thm-milman-converse-for-compact-generating-sets` · theorem — Milman converse for compact generating sets
- `cor-dual-unit-ball-has-extreme-points` · corollary — Dual unit ball has extreme points

### `banach-alaoglu-goldstine-and-krein-milman-examples` — Banach Alaoglu Goldstine and Krein Milman — Examples (7 item(s))

- `ex-weak-star-compactness-of-probability-measures` · example — Weak star compactness of probability measures
- `ex-extreme-points-of-the-probability-measures-are-dirac-masses` · example — Extreme points of the probability measures are dirac masses
- `ex-extreme-points-of-the-ell-infinity-unit-ball` · example — Extreme points of the ell infinity unit ball
- `cex-the-c0-unit-ball-has-no-extreme-points` · counterexample — The c0 unit ball has no extreme points
- `cor-c0-is-not-isometrically-a-dual-space` · corollary — C0 is not isometrically a dual space
- `cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact` · counterexample — Weak star compact does not imply weak star sequentially compact
- `rem-banach-alaoglu-versus-sequential-alaoglu` · remark — Banach alaoglu versus sequential alaoglu

### `reflexivity-and-eberlein-smulian` — Reflexivity and Eberlein Smulian (28 item(s))

- `thm-reflexive-iff-unit-ball-weakly-compact` · theorem — Reflexive iff unit ball weakly compact
- `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive` · theorem — A banach space is reflexive iff its dual is reflexive
- `thm-closed-subspaces-of-reflexive-spaces-are-reflexive` · theorem — Closed subspaces of reflexive spaces are reflexive
- `thm-quotients-of-reflexive-spaces-are-reflexive` · theorem — Quotients of reflexive spaces are reflexive
- `lem-complex-lp-duality-from-real-lp-duality` · lemma — Complex Lp duality from real Lp duality
- `thm-reflexivity-of-lp-for-one-less-p-less-infinity` · theorem — Reflexivity of lp for one less p less infinity
- `def-relative-weak-compactness-and-three-sequential-notions` · definition — Relative weak compactness and three sequential notions
- `lem-eberlein-smulian-separable-reduction` · lemma — Eberlein smulian separable reduction
- `lem-eberlein-smulian-metrization-on-the-relevant-dual-ball` · lemma — Eberlein smulian metrization on the relevant dual ball
- `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual` · lemma — Countable compactness closes in the bidual
- `thm-eberlein-smulian` · theorem — Eberlein smulian
- `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence` · corollary — Reflexive iff every bounded sequence has a weakly convergent subsequence
- `def-schur-property` · definition — Schur property
- `thm-ell-one-has-the-schur-property` · theorem — Ell one has the schur property
- `cor-ell-one-is-not-reflexive` · corollary — Ell one is not reflexive
- `def-uniformly-convex-banach-space` · definition — Uniformly convex banach space
- `lem-uniform-convexity-gives-unique-asymptotic-centers` · lemma — Uniform convexity gives unique asymptotic centers
- `thm-milman-pettis` · theorem — Milman pettis
- `lem-james-noncompactness-sequence` · lemma — James nonreflexivity sequence separated from an annihilator
- `lem-james-norm-attainment-compactness-criterion` · lemma — James convex-block norm-attainment criterion
- `thm-james-reflexivity-theorem` · theorem — James reflexivity theorem
- `lem-bishop-phelps-support-cone-construction` · lemma — Quantitative Bishop–Phelps support functional construction
- `thm-bishop-phelps` · theorem — Bishop phelps
- `thm-separable-dual-implies-separable-primal` · theorem — Separable dual implies separable primal
- `cor-separable-reflexive-space-has-separable-dual` · corollary — Separable reflexive space has separable dual
- `lem-clarkson-inequalities-for-real-and-complex-lp` · lemma — Clarkson inequalities in both exponent ranges
- `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity` · corollary — Lp is uniformly convex for one less p less infinity
- `lem-real-and-complex-c-zero-are-banach` · lemma — Real and complex c zero are Banach

### `reflexivity-and-eberlein-smulian-examples` — Reflexivity and Eberlein Smulian — Examples (6 item(s))

- `ex-hilbert-spaces-are-uniformly-convex` · example — Hilbert spaces are uniformly convex
- `ex-reflexivity-of-ell-p-and-lp` · example — Reflexivity of ell p and lp
- `cex-c0-is-not-reflexive` · counterexample — C0 is not reflexive
- `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences` · counterexample — Weak and norm topologies differ on ell one despite identical convergent sequences
- `rem-complex-bishop-phelps-for-general-convex-sets` · remark — Complex bishop phelps for general convex sets
- `ex-norm-attaining-functionals-on-a-hilbert-space` · example — Norm attaining functionals on a hilbert space

### `tempered-distributions-and-the-fourier-transform` — Tempered Distributions and the Fourier Transform (24 item(s))

- `def-tempered-distribution` · definition — Tempered distribution
- `thm-finite-seminorm-bound-characterizes-tempered-distributions` · theorem — Finite seminorm bound characterizes tempered distributions
- `def-weak-and-strong-topologies-on-tempered-distributions` · definition — Weak and strong topologies on tempered distributions
- `thm-polynomial-growth-functions-define-tempered-distributions` · theorem — Polynomial growth functions define tempered distributions
- `def-fourier-transform-of-a-tempered-distribution` · definition — Fourier transform of a tempered distribution
- `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous` · lemma — Fourier transform on tempered distributions is well defined and continuous
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions` · theorem — Fourier transform is a topological automorphism of tempered distributions
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms` · theorem — Fourier transform agrees with l one and plancherel transforms
- `def-convolution-of-a-tempered-distribution-with-a-schwartz-function` · definition — Convolution of a tempered distribution with a schwartz function
- `def-dirac-comb` · definition — Dirac comb
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions` · theorem — Dirac comb is fourier invariant
- `lem-test-function-inclusion-in-schwartz-space-is-continuous` · lemma — Test function inclusion in schwartz space is continuous
- `thm-compactly-supported-distributions-are-tempered` · theorem — Compactly supported distributions are tempered
- `thm-tempered-distributions-embed-continuously-in-distributions` · theorem — Tempered distributions embed continuously in distributions
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space` · lemma — Smooth polynomially bounded multipliers on schwartz space
- `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions` · theorem — Differentiation and polynomial multiplication preserve tempered distributions
- `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions` · theorem — Fourier differentiation and multiplication identities on tempered distributions
- `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials` · theorem — Fourier transform of delta constants plane waves and polynomials
- `thm-constant-coefficient-differential-operators-become-polynomial-multipliers` · theorem — Constant coefficient differential operators become polynomial multipliers
- `lem-schwartz-parameter-pairing-and-integral-interchange` · lemma — Schwartz parameter pairing and integral interchange
- `thm-tempered-convolution-is-smooth-with-polynomial-growth` · theorem — Tempered convolution is smooth with polynomial growth
- `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier` · theorem — Fourier transform of a compactly supported distribution is a smooth polynomially bounded multiplier
- `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces` · lemma — Compact distribution convolution preserves schwartz and tempered spaces
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products` · theorem — Fourier transform converts allowed tempered convolutions to products

### `tempered-distributions-and-the-fourier-transform-examples` — Tempered Distributions and the Fourier Transform — Examples (9 item(s))

- `ex-fourier-transform-of-dirac-and-one` · example — Fourier transform of dirac and one
- `ex-fourier-transform-of-a-plane-wave` · example — Fourier transform of a plane wave
- `ex-fourier-transform-of-delta-derivatives-and-monomials` · example — Fourier transform of delta derivatives and monomials
- `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform` · example — Principal value one over x is tempered and its fourier transform
- `ex-dirac-comb-and-poisson-summation` · example — Dirac comb and poisson summation
- `ex-fundamental-solution-by-division-of-a-fourier-symbol` · example — Fundamental solution by division of a fourier symbol
- `cex-product-of-two-distributions-is-not-canonically-defined` · counterexample — Product of two distributions is not canonically defined
- `cex-convolution-of-two-tempered-distributions-need-not-exist` · counterexample — Convolution of two tempered distributions need not exist
- `rem-paley-wiener-and-microlocal-analysis` · remark — Paley wiener and microlocal analysis

### `the-ergodic-theorems-of-von-neumann-and-birkhoff` — The Ergodic Theorems of Von Neumann and Birkhoff (27 item(s))

- `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace` · definition — Ergodic partial sums, time averages and the invariant L2 subspace
- `prop-ergodic-averages-are-well-defined-and-l-p-contractive` · proposition — Ergodic averages are measurable, representative independent and Lp contractions
- `thm-maximal-ergodic-theorem` · theorem — Maximal ergodic theorem
- `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure` · lemma — Sigma-finite oscillation sets have finite measure
- `thm-birkhoff-ergodic-theorem` · theorem — Birkhoff pointwise ergodic theorem
- `thm-birkhoff-limit-identification-on-finite-measure-spaces` · theorem — Finite-measure identification of the Birkhoff limit
- `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces` · lemma — Ergodic averages also converge in Lp on finite-measure spaces
- `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems` · corollary — Birkhoff theorem for ergodic finite-measure systems
- `thm-von-neumann-mean-ergodic-theorem-in-l-two` · theorem — Von Neumann mean ergodic theorem in L2
- `def-unique-ergodicity` · definition — Unique ergodicity
- `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces` · lemma — Continuous functions determine Borel probabilities on compact metric spaces
- `thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages` · theorem — Unique ergodicity is equivalent to uniform ergodic averages
- `lem-unit-interval-circle-is-a-nonempty-compact-metric-space` · lemma — The unit-interval circle is a nonempty compact metric space
- `thm-irrational-circle-rotations-are-uniquely-ergodic` · theorem — Irrational circle rotations are uniquely ergodic
- `def-equidistribution-mod-one` · definition — Equidistribution modulo one
- `thm-weyl-equidistribution-for-irrational-rotations` · theorem — Weyl equidistribution for irrational rotations
- `def-canonical-base-b-expansion-and-normality` · definition — Canonical base-b expansions and normality
- `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints` · lemma — Base-b expansion cylinders match integer-map orbits away from terminating endpoints
- `thm-borels-normal-number-theorem` · theorem — Borel normal-number theorem
- `thm-fair-coin-frequency-strong-law` · theorem — Fair-coin frequency strong law from Birkhoff
- `fs-birkhoff-ergodic-averages-converge-at-every-point` · false-statement — FALSE: Birkhoff averages converge at every point
- `fs-every-measure-preserving-system-has-space-mean-ergodic-limits` · false-statement — FALSE: every ergodic limit equals the space mean
- `fs-birkhoff-limit-is-always-constant` · false-statement — FALSE: the Birkhoff limit is always constant
- `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence` · false-statement — FALSE: Von Neumann mean convergence implies Birkhoff pointwise convergence
- `fs-weyl-equidistribution-holds-for-every-rotation-angle` · false-statement — FALSE: Weyl equidistribution holds for every rotation angle
- `fs-every-real-number-is-normal` · false-statement — FALSE: every real number is normal
- `fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function` · false-statement — FALSE: Birkhoff applies to every measurable function

### `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples` — The Ergodic Theorems of Von Neumann and Birkhoff — Examples (8 item(s))

- `ex-borels-binary-normality-exception-is-uncountable-and-null` · example — Borel normality has an uncountable null exceptional set
- `ex-weyl-equidistribution-for-square-root-two-initial-terms` · example — Initial terms of the square-root-two rotation
- `ex-rational-half-rotation-has-a-nonconstant-ergodic-average` · example — A rational rotation has a nonconstant orbit average
- `ex-kac-reciprocal-return-frequency-from-birkhoff` · example — Kac's reciprocal return frequency recovered from Birkhoff
- `ex-fair-coin-strong-law-from-the-shift` · example — The fair-coin strong law as a shift average
- `ex-zero-point-one-zero-one-is-not-normal-in-base-two` · example — The periodic binary number 0.1010… is not normal
- `cex-nonintegrable-observable-has-divergent-ergodic-averages` · counterexample — A nonintegrable observable can have infinite ergodic averages
- `ex-nonergodic-half-rotation-l-two-projection` · example — The L2 projection for a nonergodic half-rotation

## Your seams

Another group's pages depend on yours:

- `lie-subgroups-actions-and-homogeneous-spaces-examples` (group a) requires your `the-ergodic-theorems-of-von-neumann-and-birkhoff`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

7 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-8ed5fca633252a302022e996 · `lem-james-norm-attainment-compactness-criterion`** (from group c, gap-a-reader-closes) — Step 10.1's telescoping line uses the bound sum_k b_k eps_k/(T_k T_{k+1}) <= 1 - theta, but the displayed estimate (1) as written gives only <= (1 - theta)/2. The prefix estimate ||P_n|| < alpha(1 - theta T_{n+1}) is still correct because (1 - theta)/2 < 1 - theta, but the reader must supply that weakening; step (1) also relies on the min in eps_m for positivity, which is not displayed there.
- **s8a-35272426ff54c94a3142a2bc · `thm-finite-seminorm-bound-characterizes-tempered-distributions`** (from group c, presentation) — [F1] attributes 'a basic zero-neighbourhood in Schwartz space imposes finitely many strict bounds on its defining seminorms' to [[def-tempered-distribution]], while that content is stated in def-schwartz-topology-and-convergence, which is only a transitive dependency of the cited definition; the theorem's own deps list contains only def-tempered-distribution, so the exact neighbourhood-basis fact is cited one level off.
- **s8a-8a7ec40b36d8e3cba30c1b59 · `thm-irrational-circle-rotations-are-uniquely-ergodic`** (from group c, gap-a-reader-closes) — Step 3.1 asserts 'Compactness supplies a finite delta/3-net' without citing any compactness-implies-totally-bounded result; the finite subcover of the delta/3-ball cover is elementary but is not among the facts [F1] lists, so the choice-free construction of the net has to be reconstructed.
- **s8a-55949e64d540a86bb322c904 · `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`** (from group c, gap-a-reader-closes) — Step 1.3 crosses an integral over the non-compact parameter domain R^n with the pairing against the compactly supported v and cites the local Schwartz integral lemma plus the definition. The sibling integral clause of lem-distribution-pairing-with-smooth-parameter-families is stated only for compact parameter sets, so the reader must check that H(xi,.) = chi(.)e^{-2 pi i xi .}phi(xi) is an S_x-valued family with L^1 seminorm majorants and that [F1]'s cutoff independence gives <v-tilde, F phi> = integral <v_x, chi(x) e^{-2 pi i x.xi}> phi(xi) dxi.
- **s8a-f99c1eb62911e8a9912b3245 · `ex-borels-binary-normality-exception-is-uncountable-and-null`** (from group c, gap-a-reader-closes) — Step 1.2's canonicality and bijection claim ('After any place its tail has a forced zero, so the tail value is strictly less than 1; the greedy recurrence therefore recovers exactly this string', then step 2.2's injectivity and surjectivity onto C) is compressed into two sentences and is the crux that A -> x_A lands in C and is a bijection; it needs the definition's 'never eventually b-1' characterisation plus canonical uniqueness.
- **s8a-d4dd1de60fdfaa91f4c4b216 · `thm-birkhoff-ergodic-theorem`** (from group c, gap-a-reader-closes) — Step 1.1 fixes invariance of limsup/liminf through the shifted-average identity 'with extended values allowed', and step 5.1 restores f* o T = f* a.e. 'after adding the null exceptional orbit set if necessary'; the strict-invariance bookkeeping for the convergence set and the limit, and its interaction with the representative-independence claim of step 1.2, are asserted rather than displayed.
- **s8a-7ce8f8fc510291d84070f63a · `rem-paley-wiener-and-microlocal-analysis`** (from group c, presentation) — The scope-boundary remark refers to 'the compact-support calculation on the A page' without a wikilink or a dependency edge, and reports what the cited notes prove in sections 11.2.5 and 14.3; those source claims are orientation only and were not checked against the PDF, so nothing in the pair may consume this remark as a supplier.

Append one owning-group disposition per warning to `research/phase-2-next-21-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-21-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-21-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-21-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-21-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
