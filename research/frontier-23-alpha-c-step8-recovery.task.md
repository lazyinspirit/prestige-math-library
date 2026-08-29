# Step 8 — group **c**, run `frontier-23`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 111 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `product-measures-and-the-fubini-tonelli-theorems` | A | measure-theory | 288.021 | `countability-axioms-and-cardinal-functions`, `modes-of-convergence-egorov-and-lusin-examples`, `the-real-gamma-and-beta-functions` |
| 6 | `product-measures-and-the-fubini-tonelli-theorems-examples` | B | measure-theory | 288.022 | `product-measures-and-the-fubini-tonelli-theorems`, `further-trigonometric-identities-and-inverses` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma` | A | complex-analysis | 325 | `the-riemann-sphere-and-mobius-transformations`, `the-winding-number-and-the-global-cauchy-theorem`, `the-logarithm-and-general-powers`, `roots-and-rational-powers` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | B | complex-analysis | 326 | `conformal-mapping-branches-and-the-schwarz-lemma` |
| 7 | `infinite-products-and-weierstrass-factorisation` | A | complex-analysis | 337 | `normal-families-and-montels-theorem`, `the-identity-theorem-and-the-open-mapping-theorem`, `absolute-convergence-and-rearrangement` |
| 7 | `infinite-products-and-weierstrass-factorisation-examples` | B | complex-analysis | 338 | `infinite-products-and-weierstrass-factorisation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `product-measures-and-the-fubini-tonelli-theorems` — Product Measures and the Fubini Tonelli Theorems (39 item(s))

- `def-measurable-rectangle` · definition — Measurable rectangles in a product of measurable spaces
- `def-product-sigma-algebra-and-finite-product-sigma-algebras` · definition — The product $\sigma$-algebra and its finite iterates
- `lem-finite-rectangle-unions-form-a-generating-algebra` · lemma — Finite disjoint unions of measurable rectangles form an algebra generating the product $\sigma$-algebra
- `rem-caratheodory-also-constructs-the-product-measure` · remark — The product measure can also be constructed from the rectangle algebra by Caratheodory extension
- `def-sections-of-sets-and-functions-on-products` · definition — Sections E_x, E^y, f_x, and f^y on a product
- `thm-sections-of-product-measurable-sets-are-measurable` · theorem — Every section of a product-measurable set is measurable
- `thm-sections-of-product-measurable-functions-are-measurable` · theorem — Every section of a product-measurable function is measurable
- `fs-measurable-sections-imply-product-measurability` · false-statement — FALSE: if every horizontal and vertical section is measurable, then the set is product-measurable
- `prop-sigma-finite-section-measure-functions-are-measurable` · proposition — For $\sigma$-finite measures, the section-measure functions are measurable
- `thm-iterated-section-measures-agree-on-product-measurable-sets` · theorem — For $\sigma$-finite measures, the two section-measure integrals of a measurable set agree
- `def-product-measure-on-sigma-finite-spaces` · definition — The product measure of two $\sigma$-finite measure spaces
- `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` · theorem — For $\sigma$-finite factors, the product measure exists, has the rectangle formula, is $\sigma$-finite, and is unique
- `fs-product-measure-is-unique-without-sigma-finiteness` · false-statement — FALSE: the rectangle formula determines a unique product measure without any $\sigma$-finiteness hypothesis
- `thm-tonelli-theorem-for-sigma-finite-product-spaces` · theorem — Tonelli's theorem for nonnegative measurable functions on a $\sigma$-finite product
- `fs-tonelli-holds-without-sigma-finiteness` · false-statement — FALSE: Tonelli's theorem still holds without any $\sigma$-finiteness hypothesis
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` · theorem — Fubini's theorem for $L^1$ functions on a $\sigma$-finite product
- `rem-fubini-should-be-applied-after-tonelli-on-absolute-values` · remark — To use Fubini safely, first use Tonelli on $|f|$
- `def-completed-product-measure` · definition — The completed product measure
- `thm-tonelli-and-fubini-for-completed-product-measures` · theorem — Tonelli and Fubini for the completed product, with only almost-everywhere section measurability
- `fs-completed-product-sections-are-measurable-for-every-parameter` · false-statement — FALSE: every section of a completed-product measurable function is measurable
- `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` · theorem — The Borel product of $\mathbb R^m$ and $\mathbb R^n$ is the Borel $\sigma$-algebra of $\mathbb R^{m+n}$
- `rem-borel-product-equality-needs-second-countability` · remark — The equality B(X) tensor B(Y) = B(X x Y) needs second countability
- `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` · theorem — On Borel subsets of $\mathbb R^{m+n}$, the product $\lambda_m \times \lambda_n$ agrees with $\lambda_{m+n}$
- `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` · theorem — The Euclidean Lebesgue measure is the completion of the product of the factor Lebesgue measures
- `fs-product-of-complete-measure-spaces-is-complete` · false-statement — FALSE: the product of two complete measure spaces is complete
- `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` · false-statement — FALSE: $\mathcal L(\mathbb R^m) \otimes \mathcal L(\mathbb R^n)$ already equals $\mathcal L(\mathbb R^{m+n})$
- `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` · theorem — The region under a nonnegative measurable function is product-measurable and has measure equal to the integral
- `cor-graph-of-a-measurable-function-is-lebesgue-null` · corollary — The graph of a measurable function $\mathbb R^n \to \mathbb R$ is Lebesgue null
- `def-distribution-function-of-absolute-value` · definition — The distribution function of absolute value
- `thm-layer-cake-formula-for-l-p-powers` · theorem — For $0 < p < \infty$, the layer-cake formula computes $\int |f|^p$ from the distribution function
- `def-polar-surface-measure-on-the-unit-sphere` · definition — The Borel measure on $S^{n-1}$ induced by polar decomposition
- `thm-polar-coordinates-formula-for-lebesgue-measure` · theorem — Polar coordinates decompose Lebesgue measure into $r^{n-1} \, dr \, d\sigma$
- `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas` · remark — The polar formula recovers the published $n$-ball volumes and Gaussian constants
- `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue null sets to Lebesgue null sets
- `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue measurable sets to Lebesgue measurable sets
- `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands` · lemma — The published Riemann change-of-variables theorem already gives the Lebesgue formula for continuous compactly supported integrands
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` · theorem — A $C^1$ diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions
- `cor-c-one-change-of-variables-for-l-one-functions` · corollary — A $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions
- `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions` · remark — Finite product measures are the base case for later countable-product constructions

### `product-measures-and-the-fubini-tonelli-theorems-examples` — Product Measures and the Fubini Tonelli Theorems — Examples (11 item(s))

- `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` · example — Tonelli and the plane polar formula give $\int_{\mathbb R} e^{-x^2} \, dx = \sqrt{\pi}$
- `ex-zeta-two-from-tonelli-and-the-geometric-series` · example — Tonelli and the geometric series compute $\int_0^1 \! \int_0^1 \frac{1}{1-xy} \, dx \, dy = \pi^2/6$
- `ex-region-under-x-squared-has-measure-one-third` · example — The region under $x \mapsto x^2$ on $[0,1]$ has measure $1/3$
- `ex-cavalieri-computes-the-area-of-the-unit-disc` · example — Cavalieri computes the area of the unit disc from its sections
- `cex-measurable-sections-do-not-imply-product-measurability` · counterexample — A set can have measurable horizontal and vertical sections and still fail to be product-measurable
- `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` · counterexample — The diagonal under Lebesgue times counting measure shows that Tonelli needs $\sigma$-finiteness
- `cex-fubini-fails-without-l-one-integrability` · counterexample — The function $(x^2-y^2)/(x^2+y^2)^2$ shows that Fubini's integrability hypothesis is not decorative
- `cex-equal-iterated-integrals-do-not-imply-l-one-integrability` · counterexample — Equal iterated integrals still do not imply product integrability
- `cex-product-measure-need-not-be-unique-without-sigma-finiteness` · counterexample — Without $\sigma$-finiteness, the rectangle formula need not determine a unique product measure
- `cex-product-of-complete-measures-need-not-be-complete` · counterexample — A nonmeasurable subset of a null line shows that the product of complete measures need not be complete
- `cex-completed-product-sections-need-not-be-pointwise-measurable` · counterexample — A completed-product measurable set can have a nonmeasurable exceptional section

### `conformal-mapping-branches-and-the-schwarz-lemma` — Conformal Mapping, Branches, and the Schwarz Lemma (23 item(s))

- `rem-holomorphic-logarithm-and-principal-power-dictionary` · remark — Dictionary for holomorphic logarithm branches, the principal logarithm, and principal powers
- `def-complex-power-from-holomorphic-logarithm-branch` · definition — Complex powers defined from a holomorphic logarithm branch
- `thm-branch-power-agrees-with-integer-powers` · theorem — Branch-defined complex powers agree with integer powers
- `thm-principal-branch-power-agrees-with-positive-real-power` · theorem — On positive reals, the principal branch power agrees with the published real power
- `thm-branch-discrepancies-for-logarithm-and-complex-powers` · theorem — Different branches shift logarithms by $2\pi i k$ and complex powers by roots of unity
- `def-conformal-equivalence-and-automorphism-group` · definition — Conformal equivalence and the automorphism group of a domain
- `def-unit-disc-upper-half-plane-and-blaschke-factor` · definition — The unit disc, the upper half-plane, and Blaschke factors
- `thm-blaschke-factor-is-a-disc-automorphism` · theorem — Blaschke factors are automorphisms of the disc
- `thm-unit-disc-schwarz-lemma-with-rigidity` · theorem — Schwarz lemma with the equality cases
- `thm-schwarz-pick-lemma-on-the-unit-disc` · theorem — Schwarz-Pick lemma on the unit disc
- `thm-disc-automorphisms-are-rotated-blaschke-factors` · theorem — Every automorphism of the disc is a rotated Blaschke factor
- `thm-upper-half-plane-automorphisms-are-real-mobius-maps` · theorem — Automorphisms of the upper half-plane are real Mobius maps
- `def-poincare-metric-and-distance-on-the-disc` · definition — The Poincare metric and distance on the unit disc
- `thm-poincare-distance-formula-and-disc-automorphism-invariance` · theorem — The Poincare distance has the formula $2\operatorname{artanh}|\varphi_z(w)|$ and is disc-automorphism invariant
- `rem-biholomorphisms-are-conformal-with-holomorphic-inverse` · remark — Biholomorphisms are conformal and have holomorphic inverse
- `thm-conformal-equivalence-is-an-equivalence-relation` · theorem — Conformal equivalence is an equivalence relation
- `thm-sector-power-map-is-biholomorphic-on-narrow-sectors` · theorem — Power maps are biholomorphisms on sectors of width less than $2\pi/n$
- `thm-slit-plane-root-branch-biholomorphism-to-a-sector` · theorem — A slit-plane root branch biholomorphically parametrizes a sector
- `thm-principal-logarithm-biholomorphism-to-the-principal-strip` · theorem — The principal logarithm is a biholomorphism from the slit plane to the principal strip
- `thm-principal-exponential-biholomorphism-from-principal-strip` · theorem — The exponential is the inverse biholomorphism from the principal strip to the slit plane
- `thm-joukowski-biholomorphism-outside-unit-disc` · theorem — The Joukowski map is a biholomorphism from the exterior disc onto $\mathbb{C}\setminus[-1,1]$
- `thm-sine-biholomorphism-from-upper-half-strip` · theorem — The sine map biholomorphically sends an upper half-strip onto the upper half-plane
- `thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic` · theorem — The sphere, the plane, and the disc are pairwise non-biholomorphic

### `conformal-mapping-branches-and-the-schwarz-lemma-examples` — Conformal Mapping, Branches, and the Schwarz Lemma — Examples (10 item(s))

- `ex-principal-logarithm-breaks-additivity-at-minus-one` · example — The principal logarithm fails to turn multiplication into addition at $(-1,-1)$
- `ex-principal-square-root-breaks-multiplicativity-at-minus-one` · example — The principal square root fails to respect products at $(-1,-1)$
- `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` · example — A horizontal strip is mapped biholomorphically to the disc by an exponential and a Cayley transform
- `ex-disc-automorphism-swapping-two-points` · example — A disc automorphism carrying one prescribed point to another
- `ex-power-map-sends-a-sector-to-a-half-plane` · example — A power map sends a sector to a half-plane
- `ex-joukowski-sends-circles-to-ellipses` · example — The Joukowski map sends circles centered at the origin to ellipses
- `ex-sine-sends-a-half-strip-to-the-upper-half-plane` · example — Boundary tracking for the sine biholomorphism of the upper half-strip
- `cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal` · counterexample — Complex conjugation preserves angle magnitudes but is not conformal
- `fs-conformal-maps-preserve-euclidean-lengths` · false-statement — FALSE: conformal maps preserve Euclidean lengths
- `fs-schwarz-lemma-holds-without-a-fixed-point-at-zero` · false-statement — FALSE: Schwarz's lemma remains true without the hypothesis $f(0)=0$

### `infinite-products-and-weierstrass-factorisation` — Infinite Products and the Weierstrass Factorisation Theorem (20 item(s))

- `rem-complex-infinite-product-dictionary` · remark — Dictionary for using the published infinite-product definition over $\mathbb{C}$
- `thm-absolute-convergence-criterion-for-complex-infinite-products` · theorem — Absolute convergence criterion for complex infinite products
- `def-normal-convergence-of-holomorphic-products` · definition — Normal convergence of holomorphic products
- `thm-normal-convergence-of-holomorphic-products` · theorem — Normally convergent products define holomorphic functions with the expected zeros
- `cor-logarithmic-derivative-of-a-normally-convergent-product` · corollary — The logarithmic derivative of a normally convergent product
- `def-weierstrass-elementary-factor` · definition — Weierstrass elementary factors
- `lem-unit-disc-estimate-for-weierstrass-elementary-factors` · lemma — The unit-disc estimate for Weierstrass elementary factors
- `def-weierstrass-products-canonical-products-and-genus` · definition — Weierstrass products, canonical products, and genus
- `def-exponent-of-convergence-of-a-zero-sequence` · definition — The exponent of convergence of a zero sequence
- `thm-canonical-product-convergence-from-exponent-sum` · theorem — A canonical product converges when the $(p+1)$-power reciprocal sum converges
- `thm-weierstrass-product-theorem-on-the-complex-plane` · theorem — Weierstrass product theorem on the complex plane
- `thm-weierstrass-factorization-for-entire-functions` · theorem — Weierstrass factorization for entire functions
- `cor-meromorphic-functions-on-the-plane-are-entire-quotients` · corollary — Every meromorphic function on $\mathbb{C}$ is a quotient of entire functions
- `thm-sine-has-its-weierstrass-product` · theorem — The Weierstrass product for sine
- `thm-jensen-formula-on-a-disc` · theorem — Jensen's formula on a disc
- `cor-jensen-zero-counting-bound` · corollary — Jensen's formula bounds the number of zeros in a smaller disc
- `def-order-of-an-entire-function` · definition — The order of an entire function
- `thm-zero-exponent-is-bounded-by-entire-order` · theorem — The zero-sequence exponent is at most the entire order
- `thm-hadamard-factorization-for-finite-order-entire-functions` · theorem — Hadamard factorization for finite-order entire functions
- `cor-nonintegral-entire-order-bounds-canonical-genus` · corollary — A nonintegral order bounds the canonical genus by its floor

### `infinite-products-and-weierstrass-factorisation-examples` — Infinite Products and the Weierstrass Factorisation Theorem — Examples (8 item(s))

- `ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free` · example — The product $\prod_{n \ge 1}(1 + z/2^n)$ defines an entire zero-free function
- `ex-sine-product-recovers-the-basel-sum` · example — The sine product recovers the Basel sum
- `ex-jensen-formula-for-a-polynomial` · example — Jensen's formula for a polynomial
- `ex-canonical-product-for-zeros-at-the-squares` · example — A genus-zero canonical product for zeros at the squares
- `cex-conditional-linear-sum-does-not-force-product-convergence` · counterexample — A conditionally convergent linear term does not force a nonzero product limit
- `fs-weierstrass-factorization-is-unique` · false-statement — FALSE: Weierstrass factorization is unique
- `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` · false-statement — FALSE: every discrete zero sequence admits a genus-zero canonical product
- `fs-entire-order-equals-canonical-genus` · false-statement — FALSE: the order of an entire function always equals the canonical genus in its factorization

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-23-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-23`

Read `research/frontier-23-judge-closure.json`,
`research/frontier-23-judge.jsonl`,
`research/frontier-23-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-23-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-23-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-23-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
