# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-24
role: alpha-adjudicate
label: step8-c
covers: 4, 5, 6

# Step 8 — group **c**, run `frontier-24`

You are the group Alpha for batches **4**, **5**, **6**: 5 A/B pair(s), 10 page(s), 145 item(s), 80 open rejection(s) over 80 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `d20432a73cc8a864d531c3624d5154bf4bf890b0a33297a2b38b7c659a6bd280` |
| `cex-annulus-needs-a-pole-in-each-bounded-complementary-component` | `mittag-leffler-and-runges-theorem-examples` | gpt-5.6-terra | `eddde4270c24315dae32706bea5d75cad4866a4a3d751d556e1369cd7a93aa6f` |
| `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `9651b7d29c80de462d7af63085e332d4d6ae0e874dda44279f9b620dd5e7d438` |
| `cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `edf07e780c84088504ae3f00c3f13059b2b16114e3340c307363cfbb1f7ef3cd` |
| `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values` | `the-gamma-function-examples` | gpt-5.6-terra | `2ac96f195b4d8305e4dc947b1c73ac5cb69d1ccea75837df64141fac6380a017` |
| `cex-total-variation-can-exceed-the-absolute-value-of-the-set-value` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `b0ca56896d2fd258158b6394ad8420b8a08d8dfa7b0d1a39e21a99bf9a350a0e` |
| `cor-gamma-factorial-values` | `the-gamma-function` | gpt-5.6-terra | `f558e46304035eab801671fd382a36d3e72a83b6c4fc132a68ad34b4c2c86373` |
| `cor-gamma-function-has-no-zeros` | `the-gamma-function` | gpt-5.6-terra | `136f53c4ca720fbc984a4ea6eb369db5a85196db7fa8a0c7e861e0bae441ad49` |
| `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `1d214a859bfd41b3503059d40825e932548a94081287a527d991667de182044a` |
| `cor-quarter-disc-inclusion-for-univalent-functions` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `abb851e356e4dbe4ec7a9fad84f2ca899115212a1d65df1d445e1cf1eab5016d` |
| `cor-runge-polynomial-approximation` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `551be44a3433647f4b160e34f1a9b8d7079793e5e5a825f00c86b904bcccad56` |
| `cor-uniqueness-of-the-normalized-riemann-map` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `e6c2f54b0f4f2d3939820713b8a37a3f9b5c98a3be67bd2e209c5bb25980147e` |
| `def-complex-simple-function` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `e40f7dd078bea13b89ad684c8534612016c2cafbbac40afe052edc08d6aad9eb` |
| `def-integration-against-a-signed-or-complex-measure` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `c08ef6444f2664677eb7da39011c1ee2c3583bfc8ad5287159abbc4018ecab21` |
| `def-principal-part-at-an-isolated-point` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `fe602e29f90382092df18c316e93a12c1993bf45fc6adb340d3196a06fdda84e` |
| `def-signed-measure` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `35c52594e2d3452e4121e929b2ab8db3397f4db5e0caad18f485aea4a6af26ef` |
| `ex-an-atomic-signed-measure-on-z-has-total-variation-three` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `0e991c766243ae8b3b532d2f3fe56505f7c505f575401d035e22b24f553c7da9` |
| `ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `dd1abdb389840a2f24e58aaca5124088b366a54ed2dbc7048c89650cfd183e91` |
| `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `a11fbed8f241464ab31078a9d1e40459a721bd1b2604d22b7cf429d3a727ca2f` |
| `ex-exp-one-over-z-shows-great-picard-is-sharp` | `bloch-schottky-and-picard-examples` | gpt-5.6-terra | `49147c101586a03476ead2d339b31086f6ab65051b56d33dd41758b53a4a7dd5` |
| `ex-gamma-values-at-half-integers-and-negative-half-integers` | `the-gamma-function-examples` | gpt-5.6-terra | `f171293a581c8c376ce9706b2a29d548579dfe141e98d84af29af144e35ddccb` |
| `ex-mittag-leffler-function-with-double-poles-at-the-integers` | `mittag-leffler-and-runges-theorem-examples` | gpt-5.6-terra | `0b349141f3f880b70ce583e6c2a668bd4db380cdb6b4a8e405f7e5b02b2ac2af` |
| `ex-normalized-riemann-map-for-the-upper-half-plane-at-i` | `the-riemann-mapping-theorem-examples` | gpt-5.6-terra | `1023044fa36c79f9de810cafbb5d6b4478dd9fbb00c96c16c2d86242c8a59ddd` |
| `ex-one-over-z-not-polynomially-approximable-on-unit-circle` | `mittag-leffler-and-runges-theorem-examples` | gpt-5.6-terra | `022e4b771927d037e7b475f94247a8fc63ea71dfb224648cf2e02390a453a45f` |
| `ex-pole-pushing-along-three-discs` | `mittag-leffler-and-runges-theorem-examples` | gpt-5.6-terra | `53fbfd646a5ceac349c5a386bdfcebe28c73885a96887e12636e347d5c78d564` |
| `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `a421f7475c365f9d44e1bf21ea7812d3dce695a7476ec8f00ce686dd81f96a4c` |
| `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `c05d18fe3bcd514def4669932a8a517b94594c2a74d38401658a945ae4a9c091` |
| `fs-a-hahn-decomposition-is-unique` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `df7556ce89bc672b341de50fc1724cb9086a20e5c7de35bd5df0b7857da8c259` |
| `fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `377f556ec4d0330ba710be8b9fcbe95dd4ea0a333962d8d465ae8a92c52fbdac` |
| `fs-finite-partitions-always-suffice-for-complex-total-variation` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `e44ad2b1d23f9ba1b6e5a9dfdb5ccf6a88be3d03fc449e20eb55d44c22f16798` |
| `fs-finite-values-and-finite-additivity-force-finite-total-variation` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `b1829aae603bf11d8586dde46fe664278c64839faee7caefa59621fa4b824942` |
| `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma` | `the-gamma-function` | gpt-5.6-terra | `1e9ce609d9dd269f9dc6766cc8d06affbf909c5583ae641993a2ad6eb4040c34` |
| `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts` | `mittag-leffler-and-runges-theorem-examples` | gpt-5.6-terra | `06e217f9e3b2f554a1ea51cd6deb6dd7b9ff04eaecdfc48fffc3a606a92367f3` |
| `fs-total-variation-always-equals-the-absolute-value-of-the-set-value` | `signed-and-complex-measures-hahn-and-jordan-examples` | gpt-5.6-terra | `2e52a5adba9b0a725ba511563984dc372e643de100285db69427f3fde177c7fc` |
| `lem-bloch-rescaling-at-an-almost-maximal-derivative` | `bloch-schottky-and-picard` | gpt-5.6-terra | `4d6360a34777308116d98f9be6423778dca6e2f6467e9af3f84e31decaac71fb` |
| `lem-cauchy-riemann-sums-give-rational-approximation` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `f5490ee419f2edfec7c39190d23d41a2987192a356cd4abca7e9240ea001db97` |
| `lem-finite-signed-measure-sets-have-only-finite-subset-values` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `5742066a1f975e9161e24ac5ade2c1705ce4ba7d9350fb83fcf7dc4e9f6e7362` |
| `lem-gamma-integral-converges-locally-uniformly` | `the-gamma-function` | gpt-5.6-terra | `634b278cebdc117d6f189a3d6fa9f7be870ba691c7b3d1a7854fc443977c7101` |
| `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `81aa95e7ad46b5eefedaee0d53ea31f872dd27c4090d35f5876b030f46c3619b` |
| `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `887965b83814d69b2471be3b1a00e80da7ad6d810b956dfd0f614166b00c3ef7` |
| `lem-quantitative-univalence-from-controlled-derivative` | `bloch-schottky-and-picard` | gpt-5.6-terra | `4918eca37e02299a4f218775a3e8762ae5f77be198a63e47978beb5412bfeaed` |
| `lem-riemann-map-extremal-derivative-is-attained` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `1715aea67eba738ef06dc67afe9487eff407a0a7425a6e1d7cc78f6a98a99632` |
| `lem-riemann-map-extremal-derivatives-are-positive-and-bounded` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `fb8c1bf9cb9664a455152f0116912927488b788458b28bcbaed5a591fd2e2838` |
| `lem-riemann-map-extremal-family-is-nonempty` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `eb4b346f23ffab4698dd8dd9b752c16b95167cf552d497bd4ba683e105c46cae` |
| `lem-riemann-map-extremizer-is-surjective` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `ce575ac01b46e1bddc667bd102a7b7f4d04f8e7df35b7a41d061b8b9c902a7dc` |
| `lem-riemann-map-extremizer-is-univalent` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `3683ce3ec448b727cfc3b79f881e1e536d5fd4d451808cf94c8f5c294325ecb8` |
| `lem-runge-pole-pushing-lemma` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `b14eda070b1100ef5b1af66416f7be5229a36def9615f6f8afb5bbff801e2d1f` |
| `lem-two-omitted-values-rule-out-an-essential-singularity` | `bloch-schottky-and-picard` | gpt-5.6-terra | `8a2ed0f2bdefc405ec977113d82df684b1fa872f90361860c6a7a215e4a6a563` |
| `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `9453f0e171f78169d05514e966f945d7c9fe0c7fdfef9eaa54ec336954aaa5e5` |
| `prop-jordan-parts-and-total-variation-formulas-for-signed-measures` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `68b6b385354c7a98ba166ab61a8b741da9e8ff70b62f998eb260b3d687f4bcc1` |
| `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `c53db81325c18ae10115d2877eabeb5dc0c71e8973e9d73cd6e442d28d229cf2` |
| `prop-simple-integrals-are-bounded-by-total-variation` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `8fd62f78bc8194c9441abd5dd692a2e3b95667d7d6225c84bbe8bd3fcfbec65b` |
| `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `1854113601c520a3821236b2ce7c259c3874e16567ba9be4e41e90257f5193e1` |
| `thm-area-theorem-for-exterior-univalent-functions` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `921b68c49e2bf66af256107ee4b8e1f677be9a966f78f871cd4b7731a3ea954c` |
| `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `65f353f90a547d005cabaaae450f6ef2bc5225dfc72d5825d9cea300b01daa43` |
| `thm-continuity-from-below-and-above-for-signed-measures` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `9750c25667d0b41b53e3b87bbf774534fadae2bba94101993ea105a806d49bfc` |
| `thm-euler-limit-formula-for-gamma` | `the-gamma-function` | gpt-5.6-terra | `af225d2d7bdbbb4985b997aa8ec2795bc1f49c678f1add99b95201d2bce29714` |
| `thm-finite-total-variation-signed-measures-are-complete` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `c2dbdec972c639837e1d561cc4feb64e14a2b0466d5cc16754c6e74538467960` |
| `thm-finite-total-variation-signed-measures-form-a-real-normed-space` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `af1979148dc97d244b4361177af2971c829fd17d2447b1024f5edbc261c2a4cf` |
| `thm-gamma-functional-equation` | `the-gamma-function` | gpt-5.6-terra | `62d6b3e8cf6078cedee31382116a7d5036b8a56c54a0b8903c0b43c7808b3e70` |
| `thm-gamma-meromorphic-continuation` | `the-gamma-function` | gpt-5.6-terra | `f86e5c0b409f0cee8933c48730ac65e175e4517211a78a9328494a0ad4ff992c` |
| `thm-gamma-weierstrass-product` | `the-gamma-function` | gpt-5.6-terra | `14961542f074c4fb026f98066514a08f9e6ce918cbaa63de09d4893503b1b855` |
| `thm-hahn-decomposition-for-signed-measures` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `482a9bd682670ccd49aeb22aac2499bf1a2664836380f6c584641fb87f0d1379` |
| `thm-hankel-representation-for-reciprocal-gamma` | `the-gamma-function` | gpt-5.6-terra | `7cf55f0f951c55aba9f34f9b41cc6188323c16082583b745e704f9551cf1b088` |
| `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `7a9b5cb06f6c528addac7d6232e6a929bdfed2243e9209cc1722ec257313e785` |
| `thm-jordan-decomposition-for-signed-measures` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `065f55783958d44e26f694eabcb5946bc76eb3e9039b4d34490a0f27377d399c` |
| `thm-koebe-distortion-theorem` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `6c69b487ec8a46f017e1245a03320d6e399dafe991729139cdf92f9f22a84705` |
| `thm-koebe-growth-theorem` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `698f709fbfb707507a82bb57d07fd394e3f146cf2a9dac1c2ccd694984959c76` |
| `thm-l-one-functions-admit-dominated-complex-simple-approximations` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `8cc9d280fe89593463b72016e602b12c6d7e4512068406bccf6c053be6862f05` |
| `thm-mittag-leffler-expansion-of-pi-cotangent` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `c531acb21c21ba9bf4fad44f6af333a463cdb5e273800dfbedbbef9c9faaa06e` |
| `thm-mittag-leffler-theorem-on-plane-domains` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `317c126280edfaa9ec5e14a0903a24cdccbb72df8d7f7c11f62143cc15341d46` |
| `thm-montel-caratheodory-theorem` | `bloch-schottky-and-picard` | gpt-5.6-terra | `654b220dbd255414d688116e6358ff00cd458b0d7770ed01aad2a473db9e803e` |
| `thm-riemann-mapping-theorem` | `the-riemann-mapping-theorem` | gpt-5.6-terra | `5119eccb891441dae2914bfd4ff53d9a8c650d6baa5712aa4cceeef98a1cf349` |
| `thm-runge-approximation-with-prescribed-poles` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `21806b340faed64679a26734d42bea02f5acf38821d8a8b9752a06de11238134` |
| `thm-schottky-theorem` | `bloch-schottky-and-picard` | gpt-5.6-terra | `731feb67948835f7d722cf7b56a8938b380a9a166b4780a81037eb2a3594877a` |
| `thm-stirling-formula-gamma` | `the-gamma-function` | gpt-5.6-terra | `3392b893001179d1dd90744a4f4d23f57b998754f0259b6b86170a31b599ae75` |
| `thm-total-variation-is-a-measure` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `86a97113c3257a22fae9c5546cdc0cd9c154fc315719a46daf43807ac33a476e` |
| `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `a8c3e35e2c28cd5fffc81f641578db53ef53ad51628ef113eb50186344d21805` |
| `thm-total-variation-of-a-complex-measure-is-finite` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `3e837fb3b90d62f12b96b8fc4d94ceb2e24805f0838d21147b2e66e1e515c92b` |
| `thm-zero-divisor-theorem-on-plane-domains` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `4533c1c959916dde6ee1ae6a8a1422786e75b601c56b6f6581c11927985e62e3` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-24`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-24-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-24-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-24-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-24-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
