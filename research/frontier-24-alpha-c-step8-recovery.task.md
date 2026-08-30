# Step 8 — group **c**, run `frontier-24`

You are the group Alpha for batches **4**, **5**, **6**: 5 A/B pair(s), 10 page(s), 145 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `signed-and-complex-measures-hahn-and-jordan` | A | measure-theory | 288.023 | `product-measures-and-the-fubini-tonelli-theorems-examples` |
| 4 | `signed-and-complex-measures-hahn-and-jordan-examples` | B | measure-theory | 288.024 | `signed-and-complex-measures-hahn-and-jordan` |
| 5 | `the-riemann-mapping-theorem` | A | complex-analysis | 333 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `the-winding-number-and-the-global-cauchy-theorem` |
| 5 | `the-riemann-mapping-theorem-examples` | B | complex-analysis | 334 | `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard` | A | complex-analysis | 347 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `isolated-singularities-and-laurent-series`, `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard-examples` | B | complex-analysis | 348 | `bloch-schottky-and-picard` |
| 6 | `mittag-leffler-and-runges-theorem` | A | complex-analysis | 339 | `infinite-products-and-weierstrass-factorisation`, `the-riemann-sphere-and-mobius-transformations`, `the-residue-theorem` |
| 6 | `mittag-leffler-and-runges-theorem-examples` | B | complex-analysis | 340 | `mittag-leffler-and-runges-theorem` |
| 6 | `the-gamma-function` | A | complex-analysis | 343 | `infinite-products-and-weierstrass-factorisation`, `the-residue-theorem`, `improper-integrals`, `analyticity-liouville-and-morera`, `product-measures-and-the-fubini-tonelli-theorems` |
| 6 | `the-gamma-function-examples` | B | complex-analysis | 344 | `the-gamma-function` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `signed-and-complex-measures-hahn-and-jordan` — Signed and Complex Measures Hahn and Jordan (28 item(s))

- `def-signed-measure` · definition — A signed measure is countably additive and takes at most one infinite value
- `def-positive-negative-and-null-sets-for-a-signed-measure` · definition — Positive, negative, and null sets for a signed measure
- `def-complex-measure` · definition — A complex measure is a finite-valued countably additive set function
- `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures` · proposition — The real and imaginary parts of a complex measure are finite signed measures, and nu = Re nu + i Im nu
- `def-total-variation-of-a-signed-or-complex-measure` · definition — The total variation |nu|(E) from countable measurable partitions
- `prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation` · proposition — A set is null for a signed measure exactly when its total variation is zero there
- `def-mutually-singular-measures` · definition — Mutual singularity for signed or complex measures
- `lem-finite-signed-measure-sets-have-only-finite-subset-values` · lemma — A subset of a set of finite signed measure also has finite signed measure
- `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity` · proposition — If a disjoint union has finite signed measure, then the signed-measure series converges absolutely
- `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass` · lemma — A set of positive finite signed measure contains a positive subset of at least the same mass
- `thm-hahn-decomposition-for-signed-measures` · theorem — Hahn decomposition for signed measures, unique up to total-variation-null sets
- `thm-jordan-decomposition-for-signed-measures` · theorem — Jordan decomposition of a signed measure into unique mutually singular positive parts
- `thm-continuity-from-below-and-above-for-signed-measures` · theorem — Continuity from below, and from above when one set has finite signed measure
- `prop-jordan-parts-and-total-variation-formulas-for-signed-measures` · proposition — For a signed measure, total variation is nu-plus plus nu-minus, finite partitions suffice, and nu-plus and nu-minus are extremal
- `thm-total-variation-of-a-complex-measure-is-finite` · theorem — Every complex measure has finite total variation
- `thm-total-variation-is-a-measure` · theorem — The total variation of a signed or complex measure is a positive measure
- `def-complex-simple-function` · definition — Complex simple functions as finite sums of measurable indicators
- `def-simple-integral-against-a-signed-or-complex-measure` · definition — The simple integral against a signed or complex measure
- `prop-simple-integrals-are-bounded-by-total-variation` · proposition — Simple integrals are bounded by total variation
- `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` · theorem — Total variation is the supremum of simple integrals over unit-bounded test functions
- `thm-l-one-functions-admit-dominated-complex-simple-approximations` · theorem — Every L^1 function admits dominated complex simple approximations
- `def-integration-against-a-signed-or-complex-measure` · definition — Integration against a signed or complex measure, and the class L^1(nu) = L^1(|nu|)
- `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation` · theorem — Integrals against signed or complex measures are bounded by total variation
- `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation` · theorem — A complex L^1 density defines a complex measure whose total variation is |h| dmu
- `def-the-space-of-finite-total-variation-signed-measures` · definition — The class M(X, A) of signed measures with finite total variation and the quantity ||nu|| = |nu|(X)
- `thm-finite-total-variation-signed-measures-form-a-real-normed-space` · theorem — Finite-total-variation signed measures form a real normed space
- `thm-finite-total-variation-signed-measures-are-complete` · theorem — Finite-total-variation signed measures are complete in the total-variation norm
- `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data` · theorem — A real L^1 density defines a finite signed measure with Hahn sets {f > 0} and {f <= 0}, Jordan parts f-plus dmu and f-minus dmu, and total variation |f| dmu

### `signed-and-complex-measures-hahn-and-jordan-examples` — Signed and Complex Measures Hahn and Jordan — Examples (15 item(s))

- `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition` · example — For nu = delta_1 - delta_{-1}, the Hahn sets are {1} and {-1}, the Jordan parts are delta_1 and delta_{-1}, and ||nu|| = 2
- `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions` · example — For nu(E) = int_E sin x d lambda on [0,2 pi], one Hahn decomposition is [0,pi] and (pi,2 pi], while the canonical density sets are {sin x > 0} and {sin x <= 0}
- `ex-an-atomic-signed-measure-on-z-has-total-variation-three` · example — The signed counting-measure density nu({k}) = (-1)^k 2^{-|k|} on Z has total variation 3
- `ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form` · example — On [0,1], mu_c - lambda is already the difference of mutually singular positive measures
- `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi` · example — The complex measure dnu = e^{ix} d lambda on [0,2 pi] has total variation 2 pi
- `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure` · counterexample — Finite partitions need not attain complex total variation
- `cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition` · counterexample — Moving the singleton {pi} changes a Hahn decomposition of sin x d lambda without changing its total-variation class
- `cex-total-variation-can-exceed-the-absolute-value-of-the-set-value` · counterexample — For nu = delta_1 - delta_{-1}, total variation of the whole set exceeds the absolute value of nu(X)
- `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation` · counterexample — On the finite-cofinite sigma-algebra of N, a finite-valued finitely additive set function can have infinite total variation
- `fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity` · false-statement — FALSE: a signed measure may take both +infty and -infty
- `fs-a-hahn-decomposition-is-unique` · false-statement — FALSE: a Hahn decomposition is unique
- `fs-total-variation-always-equals-the-absolute-value-of-the-set-value` · false-statement — FALSE: for every signed measure and measurable E, |nu|(E) = |nu(E)|
- `fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure` · false-statement — FALSE: signed measures agreeing on a generating pi-system are always equal
- `fs-finite-values-and-finite-additivity-force-finite-total-variation` · false-statement — FALSE: a finite-valued finitely additive set function must have finite total variation
- `fs-finite-partitions-always-suffice-for-complex-total-variation` · false-statement — FALSE: finite partitions always suffice to compute the total variation of a complex measure

### `the-riemann-mapping-theorem` — The Riemann Mapping Theorem (18 item(s))

- `def-univalent-holomorphic-function` · definition — Univalent holomorphic functions
- `def-normalized-univalent-class` · definition — The normalized univalent class on the unit disc
- `def-riemann-map-extremal-family` · definition — The extremal family of disc-valued univalent maps fixing a basepoint
- `lem-riemann-map-extremal-family-is-nonempty` · lemma — A proper homologically simply connected plane domain has a bounded univalent competitor
- `lem-riemann-map-extremal-derivatives-are-positive-and-bounded` · lemma — The extremal derivatives are positive and have a finite supremum
- `lem-riemann-map-extremal-derivative-is-attained` · lemma — A maximizing sequence has a locally uniform limit with extremal derivative
- `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent` · lemma — A nonconstant locally uniform limit of univalent functions is univalent
- `lem-riemann-map-extremizer-is-univalent` · lemma — The extremal limit is univalent
- `lem-riemann-map-extremizer-is-surjective` · lemma — An extremizer onto a proper subdomain of the disc can be enlarged
- `thm-riemann-mapping-theorem` · theorem — Every proper homologically simply connected plane domain is conformally equivalent to the unit disc
- `cor-uniqueness-of-the-normalized-riemann-map` · corollary — The normalized Riemann map is unique
- `thm-area-theorem-for-exterior-univalent-functions` · theorem — The area theorem for exterior univalent functions
- `cor-bieberbach-second-coefficient-bound` · corollary — The second coefficient of a normalized univalent function has modulus at most two
- `thm-koebe-one-quarter-theorem` · theorem — Every normalized univalent disc map contains the quarter disc
- `thm-koebe-distortion-theorem` · theorem — Koebe's distortion theorem
- `thm-koebe-growth-theorem` · theorem — Koebe's growth theorem
- `cor-quarter-disc-inclusion-for-univalent-functions` · corollary — A quarter-disc inclusion at every point of a univalent disc map
- `rem-choice-strength-of-the-riemann-mapping-proof` · remark — Choice strength used in the extremal proof of the Riemann mapping theorem

### `the-riemann-mapping-theorem-examples` — The Riemann Mapping Theorem — Examples (9 item(s))

- `ex-normalized-riemann-map-for-the-upper-half-plane-at-i` · example — The normalized Riemann map from the upper half-plane sending i to 0
- `ex-normalized-riemann-map-for-a-horizontal-strip` · example — A normalized Riemann map for a horizontal strip
- `ex-normalized-riemann-map-for-a-sector-with-branch-choice` · example — A normalized Riemann map for a sector with an explicit branch choice
- `ex-normalized-riemann-map-for-the-slit-plane` · example — A normalized Riemann map for the slit plane
- `ex-the-unit-disc-extremal-problem-is-solved-by-the-identity` · example — The extremal problem on the unit disc is solved by the identity map
- `ex-koebe-function-realizes-the-quarter-disc-bound` · example — The Koebe function shows the quarter-disc constant is sharp
- `cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist` · counterexample — The punctured disc is not biholomorphic to the unit disc
- `fs-riemann-map-is-unique-without-normalization` · false-statement — FALSE: the Riemann map is unique without normalization
- `fs-conformal-equivalence-preserves-euclidean-area` · false-statement — FALSE: a conformal equivalence preserves Euclidean area

### `bloch-schottky-and-picard` — Bloch, Schottky, and the Picard Theorems (16 item(s))

- `def-bloch-radius-and-bloch-constant` · definition — Bloch radii and the Bloch constant
- `def-landau-radius-and-landau-constant` · definition — Landau radii and the Landau constant
- `def-two-value-omitting-holomorphic-family` · definition — Families of holomorphic functions omitting two common finite values
- `lem-bloch-rescaling-at-an-almost-maximal-derivative` · lemma — Maximizing-point rescaling produces a normalized map with uniformly bounded derivative
- `lem-quantitative-univalence-from-controlled-derivative` · lemma — Controlled derivative oscillation forces injectivity on a fixed subdisc
- `thm-bloch-theorem` · theorem — Bloch's theorem
- `thm-landau-theorem` · theorem — Landau's theorem
- `lem-holomorphic-logarithms-for-two-omitted-values` · lemma — Disc functions omitting 0 and 1 admit holomorphic logarithms for f and 1-f
- `thm-schottky-theorem` · theorem — Schottky's theorem
- `thm-montel-caratheodory-theorem` · theorem — Families omitting two values are chordally normal
- `thm-little-picard-theorem` · theorem — Little Picard theorem
- `lem-two-omitted-values-rule-out-an-essential-singularity` · lemma — Two omitted finite values rule out an essential singularity
- `thm-great-picard-theorem` · theorem — Great Picard theorem
- `cor-meromorphic-little-picard-theorem` · corollary — A nonconstant meromorphic function on the plane omits at most two sphere values
- `cor-meromorphic-great-picard-theorem` · corollary — A meromorphic essential singularity omits at most two sphere values
- `rem-agreement-between-classical-and-nevanlinna-picard-theorems` · remark — Agreement between the classical and Nevanlinna proofs of Picard's theorems

### `bloch-schottky-and-picard-examples` — Bloch, Schottky, and the Picard Theorems — Examples (7 item(s))

- `ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four` · example — The elementary Bloch proof on this page yields the explicit lower bound 1/48
- `ex-schottky-bound-for-a-map-with-center-value-one-half` · example — Schottky's theorem applied to a disc map with center value 1/2
- `ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp` · example — The exponential function omits exactly zero and shows little Picard is sharp
- `ex-exp-one-over-z-shows-great-picard-is-sharp` · example — The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin
- `cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values` · counterexample — The exponential function omits 0 and infinity as a meromorphic map on the plane
- `fs-little-picard-needs-a-boundedness-hypothesis` · false-statement — FALSE: little Picard needs a boundedness hypothesis
- `fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value` · false-statement — FALSE: a nonconstant meromorphic function on the plane omits at most one sphere value

### `mittag-leffler-and-runges-theorem` — Mittag-Leffler and Runge's Theorem (18 item(s))

- `def-principal-part-at-an-isolated-point` · definition — The principal part at an isolated singularity
- `def-rational-approximation-with-a-runge-pole-set` · definition — Runge pole sets for rational approximation on a compact set
- `def-pole-pushing-along-a-chain-of-discs` · definition — Pole pushing along a chain of discs
- `lem-grid-cycle-for-runge-approximation` · lemma — A square-grid cycle enclosing a compact set
- `lem-cauchy-riemann-sums-give-rational-approximation` · lemma — Riemann sums of the Cauchy integral give rational approximation
- `lem-runge-pole-pushing-lemma` · lemma — Runge's pole-pushing lemma
- `thm-runge-approximation-with-prescribed-poles` · theorem — Runge approximation with a prescribed pole set
- `cor-runge-polynomial-approximation` · corollary — Runge polynomial approximation when the complement is connected
- `def-runge-approximation-on-a-plane-domain` · definition — Runge approximation on a plane domain
- `thm-runge-approximation-on-plane-domains` · theorem — Runge approximation on plane domains
- `thm-mittag-leffler-theorem-on-the-plane` · theorem — Mittag-Leffler on the complex plane
- `thm-mittag-leffler-theorem-on-plane-domains` · theorem — Mittag-Leffler on plane domains
- `thm-mittag-leffler-expansion-of-pi-cotangent` · theorem — The Mittag-Leffler expansion of pi cotangent
- `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` · corollary — The partial-fraction expansion of pi-squared cosecant-squared
- `thm-zero-divisor-theorem-on-plane-domains` · theorem — Every discrete effective divisor on a plane domain is the zero divisor of a holomorphic function
- `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients` · corollary — Every meromorphic function on a plane domain is a quotient of holomorphic functions
- `cor-meromorphic-functions-on-a-domain-form-a-field` · corollary — Meromorphic functions on a connected plane domain form a field
- `rem-choice-strength-of-runge-and-mittag-leffler` · remark — Choice bookkeeping for Runge and Mittag-Leffler

### `mittag-leffler-and-runges-theorem-examples` — Mittag-Leffler and Runge's Theorem — Examples (7 item(s))

- `ex-one-over-z-not-polynomially-approximable-on-unit-circle` · example — $1/z$ is not uniformly approximable by polynomials on the unit circle
- `ex-pole-pushing-along-three-discs` · example — Pole pushing along an explicit chain of three discs
- `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared` · example — The cotangent expansion computes $\sum_{n\in\mathbb Z} 1/(n^2+a^2)$
- `ex-mittag-leffler-function-with-double-poles-at-the-integers` · example — A Mittag-Leffler function with double poles at the integers
- `fs-runge-gives-polynomial-approximation-on-any-compact-set` · false-statement — FALSE: Runge's theorem gives polynomial approximation on every compact set
- `cex-annulus-needs-a-pole-in-each-bounded-complementary-component` · counterexample — The annulus shows Runge approximation needs a pole in each bounded complementary component
- `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts` · false-statement — FALSE: a meromorphic function always equals the naive sum of its principal parts

### `the-gamma-function` — The Gamma Function (20 item(s))

- `def-euler-gamma-function` · definition — Euler's Gamma function on the right half-plane
- `lem-gamma-integral-converges-locally-uniformly` · lemma — Euler's Gamma integral converges locally uniformly on the right half-plane
- `thm-euler-gamma-function-is-holomorphic` · theorem — Euler's Gamma function is holomorphic on the right half-plane
- `thm-complex-gamma-restricts-to-the-real-gamma-function` · theorem — The complex Gamma function restricts to the real Gamma function
- `thm-gamma-functional-equation` · theorem — The Gamma functional equation
- `cor-gamma-factorial-values` · corollary — Gamma at the positive integers
- `thm-gamma-meromorphic-continuation` · theorem — Meromorphic continuation of Gamma
- `thm-euler-limit-formula-for-gamma` · theorem — Euler's limit formula for Gamma
- `thm-gamma-weierstrass-product` · theorem — The Weierstrass product for reciprocal Gamma
- `cor-gamma-function-has-no-zeros` · corollary — Gamma has no zeros
- `thm-euler-reflection-formula` · theorem — Euler's reflection formula
- `cor-gamma-one-half-value` · corollary — The value of Gamma at one half
- `def-euler-beta-function` · definition — Euler's Beta function on the right half-planes
- `thm-beta-gamma-identity` · theorem — The Beta-Gamma identity
- `thm-gauss-multiplication-formula` · theorem — Gauss's multiplication formula
- `thm-legendre-duplication-formula` · theorem — Legendre's duplication formula
- `thm-stirling-formula-gamma` · theorem — Stirling's formula for Gamma
- `def-hankel-contour-and-power-branch` · definition — The Hankel contour and the principal power branch
- `thm-hankel-representation-for-reciprocal-gamma` · theorem — Hankel's representation for reciprocal Gamma
- `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma` · false-statement — FALSE: the Gamma recurrence and factorial values characterize Gamma

### `the-gamma-function-examples` — The Gamma Function — Examples (7 item(s))

- `ex-gamma-values-at-half-integers-and-negative-half-integers` · example — Half-integer and negative-half-integer values of Gamma
- `ex-residue-of-gamma-at-minus-two` · example — The residue of Gamma at z=-2
- `ex-beta-one-half-one-half-equals-pi` · example — $B(1/2,1/2)=\pi$
- `ex-reflection-formula-at-one-half` · example — Checking the reflection formula at z=1/2
- `ex-stirling-approximation-to-ten-factorial` · example — Stirling's approximation for 10!
- `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values` · counterexample — A periodic perturbation preserves the Gamma recurrence and factorial values
- `fs-gamma-is-entire` · false-statement — FALSE: the Gamma function is entire

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
`research/frontier-24-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-24`

Read `research/frontier-24-judge-closure.json`,
`research/frontier-24-judge.jsonl`,
`research/frontier-24-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-24-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-24-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-24-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
