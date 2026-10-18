# Step 5 adjudication — group **i**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 105 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/numerical-analysis-remaining-71-2026-10-17-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/numerical-analysis-remaining-71-2026-10-17-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/numerical-analysis-remaining-71-2026-10-17-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 25 | `stable-special-function-recurrences-and-certified-evaluation` | A | numerical-linear-algebra-and-approximation | 2604 | `composite-quadrature-rules`, `gaussian-quadrature`, `the-gamma-function`, `outward-rounded-interval-and-ball-arithmetic`, `average-orders-divisor-sums-and-representation-counts` |
| 25 | `stable-special-function-recurrences-and-certified-evaluation-examples` | B | numerical-linear-algebra-and-approximation | 2605 | `stable-special-function-recurrences-and-certified-evaluation` |
| 26 | `singular-and-infinite-interval-quadrature` | A | numerical-linear-algebra-and-approximation | 2606 | `gaussian-quadrature`, `clenshaw-curtis-and-extrapolation-quadrature`, `the-residue-theorem` |
| 26 | `singular-and-infinite-interval-quadrature-examples` | B | numerical-linear-algebra-and-approximation | 2607 | `singular-and-infinite-interval-quadrature` |
| 27 | `gaussian-basis-integral-recurrences-and-boys-error` | A | numerical-linear-algebra-and-approximation | 2608 | `stable-special-function-recurrences-and-certified-evaluation` |
| 27 | `gaussian-basis-integral-recurrences-and-boys-error-examples` | B | numerical-linear-algebra-and-approximation | 2609 | `gaussian-basis-integral-recurrences-and-boys-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `stable-special-function-recurrences-and-certified-evaluation` — Stable special function recurrences and certified evaluation (46 item(s))

- `def-airy-initial-value-series` · definition — Airy initial-value series
- `def-certified-evaluation-result-contract` · definition — Certified special-function enclosure result
- `def-fresnel-erf-and-hypergeometric-series` · definition — Fresnel, error, and Gauss hypergeometric series
- `def-integer-order-bessel-series` · definition — Integer-order Bessel series
- `def-loggamma-right-halfplane-branch` · definition — Log-Gamma branch on the right half-plane
- `lem-explicit-euler-constant-enclosure` · lemma — Finite harmonic enclosure for Euler's constant
- `lem-gamma-functional-equation-meromorphic-extension` · lemma — Gamma functional equation away from the poles
- `def-spherical-bessel-and-hankel-functions` · definition — Spherical Bessel and outgoing Hankel function conventions
- `def-bessel-complementary-recurrence-solution` · definition — Complementary solution for the integer Bessel recurrence
- `def-erfcx-moment-sequence` · definition — Scaled complementary error function and its moments
- `def-loggamma-slit-plane-branch` · definition — Log-Gamma branch on the slit plane
- `lem-airy-series-coefficient-recurrence-and-tail` · lemma — Airy coefficient recurrence and geometric tail bounds
- `lem-erf-series-geometric-tail` · lemma — Error-function series geometric tail bound
- `lem-fresnel-series-geometric-tail` · lemma — Fresnel series geometric tail bounds
- `lem-gauss-hypergeometric-series-geometric-tail` · lemma — Gauss hypergeometric series geometric tail bound
- `lem-integer-order-bessel-series-tail` · lemma — Convergence and geometric tails for integer-order Bessel series
- `lem-loggamma-series-convergence-and-gamma-identity` · lemma — Weierstrass log-Gamma series converges to a Gamma branch
- `lem-spherical-bessel-and-hankel-radial-solutions` · lemma — Spherical Bessel and outgoing Hankel recurrences solve the radial Helmholtz equation
- `def-spherical-bessel-evaluation-contract` · definition — Scaled spherical Bessel evaluation on positive real arguments
- `alg-certified-fresnel-erf-hypergeometric-series` · algorithm — Finite certified power-series evaluation for Fresnel, erf, and Gauss functions
- `lem-airy-functions-have-negative-real-zeros` · lemma — The Airy Ai function has a negative real zero
- `lem-bessel-integral-representations-and-scaled-range` · lemma — Integral representations and a range bound for integer Bessel functions
- `lem-binet-loggamma-right-halfplane-identity` · lemma — Binet integral identity for the right-half-plane log-Gamma branch
- `lem-erfcx-moment-recurrence` · lemma — Moment recurrence for the scaled complementary error function
- `lem-integer-order-bessel-recurrences-and-ode` · lemma — Bessel differential equations and order recurrences from the series
- `lem-loggamma-product-tail-bound` · lemma — Explicit tail bound for the log-Gamma product series
- `lem-loggamma-shift-independent` · lemma — Shifted log-Gamma branch is independent of the shift
- `alg-certified-scaled-spherical-bessel-evaluation` · algorithm — Finite exact-interval evaluation of scaled spherical Bessel values
- `lem-bessel-integral-midpoint-error` · lemma — Composite midpoint enclosure for the integer Bessel integral
- `lem-bessel-j-zero-data-exclusion` · lemma — Adjacent initial Bessel values cannot both vanish
- `lem-erfcx-asymptotic-remainder` · lemma — Signed finite remainder for the erfcx asymptotic expansion
- `lem-erfcx-continued-fraction-enclosure` · lemma — Finite continued-fraction enclosure for erfcx
- `lem-scaled-modified-bessel-midpoint-error` · lemma — Composite midpoint enclosure for the scaled modified Bessel integral
- `lem-sectorial-stirling-explicit-remainder-bound` · lemma — Explicit sectorial remainder bound for the right-half-plane log-Gamma branch
- `thm-certified-fresnel-erf-hypergeometric-enclosures` · theorem — Soundness of the finite Fresnel, erf, and Gauss-series enclosures
- `thm-certified-scaled-spherical-bessel-enclosures` · theorem — Soundness and eventual absolute precision for spherical Bessel enclosures
- `alg-certified-erfcx-evaluation` · algorithm — Finite certified evaluation of the scaled complementary error function
- `alg-certified-gamma-loggamma-evaluation` · algorithm — Finite certified evaluation of Gamma and a continued log-Gamma branch
- `lem-bessel-casoratian-invariant-positive` · lemma — Positive discrete Wronskian for the Bessel recurrence pair
- `lem-finite-miller-terminal-error-identity` · lemma — Exact finite terminal-contamination error identity
- `thm-certified-erfcx-enclosures` · theorem — Soundness of finite erfcx enclosures
- `thm-certified-gamma-loggamma-enclosures` · theorem — Soundness of finite Gamma and log-Gamma enclosures
- `alg-certified-airy-evaluation` · algorithm — Finite certified Airy power-series evaluation
- `alg-certified-integer-order-bessel-evaluation` · algorithm — Finite certified evaluation of integer-order Bessel functions
- `thm-certified-airy-enclosures` · theorem — Soundness of finite Airy enclosures
- `thm-certified-integer-order-bessel-enclosures` · theorem — Soundness of finite integer-order Bessel enclosures

### `stable-special-function-recurrences-and-certified-evaluation-examples` — Stable special function recurrences and certified evaluation — Examples (6 item(s))

- `ex-hypergeometric-branch-cut-domain` · example — The Gauss series disk and a continued logarithmic branch have different domains
- `ex-erfc-subtraction-cancellation` · example — Subtracting erf from one amplifies absolute input errors in the tail
- `ex-erfcx-asymptotic-optimal-truncation` · example — Least-term truncation of the erfcx asymptotic expansion
- `ex-forward-bessel-recurrence-loses-sign` · example — An arbitrarily small seed perturbation flips a later Bessel sign
- `ex-relative-error-near-an-airy-zero` · example — Relative error becomes unavailable at an Airy zero
- `ex-scaled-modified-bessel-overflow-avoidance` · example — Scaling keeps the modified Bessel value bounded as the unscaled value grows

### `singular-and-infinite-interval-quadrature` — Singular and infinite interval quadrature (23 item(s))

- `alg-double-exponential-trapezoid` · algorithm — Finite truncated tanh–sinh, exp–sinh, and sinh–sinh trapezoid rules
- `def-duffy-reference-triangle-map` · definition — The reference-triangle Duffy map from a vertex
- `lem-c1-divided-difference-extends-continuously` · lemma — The first divided difference of a C1 function extends continuously
- `lem-double-exponential-truncated-tail-bound` · lemma — A double-exponential envelope bounds the omitted trapezoid tails
- `lem-log-power-regularity-after-endpoint-substitution` · lemma — A sufficiently high power regularizes finite logarithmic endpoint factors
- `lem-real-power-improper-integral` · lemma — The improper integral of a power at zero
- `thm-analytic-strip-trapezoid-error` · theorem — An analytic-strip error bound for the infinite trapezoid sum
- `thm-gaussian-product-rule-error-bound` · theorem — A tensor product of two positive Gaussian rules has a derivative error bound
- `def-cauchy-principal-value-subtraction` · definition — Symmetric Cauchy principal value by subtraction
- `lem-duffy-reference-map-jacobian-and-image` · lemma — The reference-triangle Duffy map has the stated image and Jacobian
- `lem-real-power-lebesgue-integrability` · lemma — A power above exponent minus one is Lebesgue integrable at zero
- `thm-double-exponential-transforms-and-integral-identities` · theorem — The double-exponential maps and their change-of-variable identities
- `lem-gauss-jacobi-weight-finite-moment-measure` · lemma — The Jacobi weight defines a finite positive measure with full support
- `thm-cauchy-principal-value-subtraction-identity` · theorem — The Cauchy principal-value subtraction identity
- `thm-double-exponential-trapezoid-error-bound` · theorem — A finite double-exponential trapezoid has separate strip and tail errors
- `thm-duffy-weak-singularity-transform` · theorem — The Duffy map turns a vertex singularity into an integrable radial weight
- `def-gauss-jacobi-quadrature-rule` · definition — The Gauss–Jacobi quadrature rule
- `alg-duffy-weighted-product-gauss-quadrature` · algorithm — Weighted product Gauss quadrature after the Duffy transform
- `alg-endpoint-power-regularized-jacobi-quadrature` · algorithm — Finite endpoint power substitution followed by Gauss–Jacobi quadrature
- `lem-gauss-jacobi-rule-data-well-defined` · lemma — Gauss–Jacobi nodes and weights are well-defined
- `thm-gauss-jacobi-exactness-and-derivative-error` · theorem — Gauss–Jacobi exactness and the derivative remainder
- `cor-duffy-weighted-product-gauss-error` · corollary — The Duffy weighted product rule has an explicit bound using pure coordinate derivatives
- `thm-endpoint-regularized-jacobi-error` · theorem — Error bound after endpoint power regularization

### `singular-and-infinite-interval-quadrature-examples` — Singular and infinite interval quadrature — Examples (4 item(s))

- `ex-gaussian-integral-on-infinite-line-by-tanh-sinh` · example — The Gaussian integral on the line with a certified sinh-sinh truncation tail
- `ex-principal-value-subtraction-with-interior-pole` · example — An interior Cauchy principal value reduces to a regular integral
- `ex-duffy-weak-singularity-on-reference-triangle` · example — A 1 over r singularity on the reference triangle
- `ex-x-minus-half-log-x-gauss-jacobi` · example — Gauss–Jacobi regularization for x to the minus one half times log x

### `gaussian-basis-integral-recurrences-and-boys-error` — Gaussian basis integral recurrences and boys error (21 item(s))

- `def-cartesian-gaussian-primitives-and-contractions` · definition — Cartesian Gaussian primitives, contractions, and integral conventions
- `def-boys-function-and-coulomb-auxiliary-recurrence` · definition — Boys functions and lower incomplete-gamma notation
- `def-finite-gaussian-basis-variational-energy-and-gradient` · definition — Finite tensor contractions and their variational energy and gradient
- `thm-gaussian-product-theorem-and-polynomial-shift` · theorem — Gaussian product theorem and finite polynomial shifts
- `thm-boys-integral-identities-series-and-incomplete-gamma` · theorem — Boys integral, power series, recurrence, and incomplete-gamma representation
- `lem-boys-positive-midpoint-enclosure` · lemma — A positive midpoint enclosure for Boys functions on bounded arguments
- `lem-cartesian-gaussian-moments-and-parameter-derivatives` · lemma — Cartesian Gaussian moments and exponent-parameter derivatives
- `thm-gaussian-contraction-error-energy-gradient-bounds` · theorem — Explicit finite-dimensional contraction error bounds for energy and gradient
- `def-hermite-gaussian-coulomb-auxiliary-functions` · definition — Hermite Gaussian and Boys Coulomb auxiliary functions
- `thm-cartesian-gaussian-integrals-absolutely-convergent` · theorem — Absolute convergence and local parameter domination for Gaussian basis integrals
- `lem-boys-small-taylor-remainder` · lemma — A monotone-range Taylor remainder for small Boys arguments
- `lem-boys-incomplete-gamma-large-t-tail-bound` · lemma — A scaled incomplete-gamma tail bound for large Boys arguments
- `lem-boys-upward-downward-recurrence-error-amplification` · lemma — Upward and downward Boys recurrence error amplification bounds
- `thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence` · theorem — Finite Hermite expansion and coefficient recurrences for a Cartesian Gaussian pair
- `thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences` · theorem — Cartesian Gaussian raising, lowering, and kinetic-energy recurrences
- `thm-positive-coulomb-bilinear-cauchy-schwarz-screening` · theorem — Positive Coulomb bilinear form, Cauchy–Schwarz, and screening bound
- `thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas` · theorem — Hermite recurrence formulas for Gaussian nuclear-attraction and two-electron Coulomb integrals
- `alg-certified-boys-finite-budget-branch-evaluation` · algorithm — Finite-budget certified evaluation of Boys function tables
- `thm-boys-branch-evaluation-enclosures-are-sound` · theorem — Soundness of every successful finite-budget Boys enclosure
- `alg-finite-gaussian-basis-integral-recurrence-evaluation` · algorithm — Finite primitive and contracted Gaussian integral evaluation with certified screening
- `thm-finite-gaussian-integral-evaluator-soundness-and-screening-error` · theorem — Soundness and accumulated error bounds for the finite Gaussian integral evaluator

### `gaussian-basis-integral-recurrences-and-boys-error-examples` — Gaussian basis integral recurrences and boys error — Examples (5 item(s))

- `ex-highly-contracted-gaussian-coefficients-amplify-error` · example — Highly contracted Gaussian coefficients amplify primitive integral error
- `ex-overlap-near-linear-dependence` · example — Nearly duplicate Gaussian primitives produce an ill-conditioned overlap matrix
- `ex-same-center-s-orbital-integrals` · example — Exact same-center s-orbital overlap, kinetic, attraction, and Coulomb integrals
- `ex-small-t-upward-boys-cancellation` · example — Small-argument cancellation in the upward Boys recurrence
- `ex-screened-coulomb-blocks-accumulate-error` · example — Coulomb screening must accumulate every discarded-block bound

## Your seams

Another group's pages depend on yours:

- `volume-integral-scattering-and-partial-wave-error` (group s) requires your `stable-special-function-recurrences-and-certified-evaluation`
- `boundary-integral-equations-and-galerkin-bem` (group s) requires your `singular-and-infinite-interval-quadrature`
- `boundary-integral-equations-and-galerkin-bem` (group s) requires your `stable-special-function-recurrences-and-certified-evaluation`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-analysis-remaining-71-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
