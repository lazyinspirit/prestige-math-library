# Step 5 adjudication — group **n**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 4, 14, 15: 3 A/B pair(s), 6 page(s), 77 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/numerical-optimization-dynamics-2026-10-16-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/numerical-optimization-dynamics-2026-10-16-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/numerical-optimization-dynamics-2026-10-16-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `polynomial-interpolation-and-remainder` | A | numerical-linear-algebra-and-approximation | 2292 | `darboux-lhopital-and-taylor`, `fundamental-trigonometric-identities`, `the-derivative-and-mean-value-theorems`, `matrix-norms-condition-numbers-and-numerical-stability`, `chains-antichains-sperner-and-dilworth` |
| 4 | `polynomial-interpolation-and-remainder-examples` | B | numerical-linear-algebra-and-approximation | 2293 | `polynomial-interpolation-and-remainder`, `approximation-and-compactness-in-ck` |
| 14 | `outward-rounded-interval-and-ball-arithmetic` | A | numerical-linear-algebra-and-approximation | 2312 | `matrix-norms-condition-numbers-and-numerical-stability`, `finite-precision-direct-factorizations` |
| 14 | `outward-rounded-interval-and-ball-arithmetic-examples` | B | numerical-linear-algebra-and-approximation | 2313 | `outward-rounded-interval-and-ball-arithmetic` |
| 15 | `computed-fast-transforms-and-convolution` | A | numerical-linear-algebra-and-approximation | 2314 | `finite-fourier-analysis-and-the-fast-fourier-transform`, `matrix-norms-condition-numbers-and-numerical-stability`, `finite-precision-direct-factorizations`, `outward-rounded-interval-and-ball-arithmetic` |
| 15 | `computed-fast-transforms-and-convolution-examples` | B | numerical-linear-algebra-and-approximation | 2315 | `computed-fast-transforms-and-convolution` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `polynomial-interpolation-and-remainder` — Polynomial interpolation and remainder (14 item(s))

- `lem-finite-coefficient-vector-has-polynomial-representative` · lemma — A finite coefficient vector has a canonical polynomial representative
- `lem-finite-double-sum-interchange` · lemma — Interchanging two finite real sums
- `lem-finite-product-of-nonzero-reals-is-nonzero` · lemma — A finite product of nonzero reals is nonzero
- `lem-polynomial-highest-derivative` · lemma — The highest derivative of a polynomial
- `lem-product-of-linear-factors-is-monic-polynomial` · lemma — A finite product of monic linear factors is monic
- `def-cardinal-polynomial-interpolation` · definition — Cardinal-polynomial interpolation
- `lem-finite-product-of-quotients` · lemma — A finite product of quotients is the quotient of finite products
- `lem-cardinal-basis-degree-and-values` · lemma — Cardinal interpolation functions are polynomials of the stated degrees
- `prop-equispaced-interpolation-basis-growth` · proposition — Equispaced interpolation has linearly growing basis amplification
- `thm-cardinal-polynomial-interpolant-exists-uniquely` · theorem — Existence and uniqueness of the cardinal-polynomial interpolant
- `thm-barycentric-interpolation-identities` · theorem — Barycentric interpolation identities
- `thm-lagrange-interpolation-remainder` · theorem — Pointwise Lagrange interpolation remainder
- `alg-finite-barycentric-interpolation-evaluator` · algorithm — Finite barycentric interpolation evaluator
- `prop-finite-barycentric-interpolation-evaluator-returns-status` · proposition — The finite barycentric evaluator terminates with an explicit status

### `polynomial-interpolation-and-remainder-examples` — Polynomial interpolation and remainder — Examples (3 item(s))

- `ex-equispaced-cardinal-basis-growth` · example — Unit nodal data exhibit equispaced cardinal basis growth
- `ex-quadratic-interpolation-at-three-nodes` · example — Quadratic interpolation at three nodes is exact
- `ex-cubic-interpolation-pointwise-remainder` · example — A cubic gives equality in the pointwise interpolation remainder

### `outward-rounded-interval-and-ball-arithmetic` — Outward rounded interval and ball arithmetic (35 item(s))

- `def-complete-ordered-real-field` · definition — Dedekind-complete ordered real field
- `def-continuity-and-derivative-on-real-interval` · definition — Continuity and derivative on a real interval
- `def-dyadic-floating-point-format-and-directed-rounding` · definition — Dyadic floating-point format and directed rounding
- `lem-archimedean-property-from-completeness` · lemma — Dedekind completeness implies the Archimedean property
- `lem-closed-interval-compactness-from-completeness` · lemma — Closed real intervals are compact by completeness
- `lem-nonnegative-square-root-exists-and-unique` · lemma — Nonnegative real square roots exist uniquely
- `alg-dyadic-square-root-bisection` · algorithm — Exact dyadic bisection for square-root endpoints
- `def-intervals-rectangles-and-complex-balls` · definition — Real intervals, complex rectangles and ball enclosures
- `lem-directed-dyadic-rounding-enclosure-and-error` · lemma — Directed dyadic rounding encloses with explicit underflow and overflow bounds
- `def-outward-rounded-interval-and-ball-operations` · definition — Outward-rounded interval, rectangle and ball operations
- `lem-real-and-complex-modulus-rules` · lemma — Real and complex modulus product and triangle inequalities
- `thm-dyadic-square-root-bisection-encloses` · theorem — Dyadic square-root bisection gives outward endpoints
- `def-centered-taylor-model-with-derivative-interval` · definition — Centered Taylor model with derivative-interval remainder
- `lem-absolutely-convergent-series-cauchy-product` · lemma — Cauchy products of absolutely convergent series multiply their sums
- `lem-derivative-algebra-and-chain-rules` · lemma — Sum, product, quotient, and chain rules from difference quotients
- `lem-elementary-power-series-converge-uniformly-on-bounded-sets` · lemma — Elementary factorial and geometric series converge uniformly
- `lem-extreme-value-theorem-from-compactness` · lemma — Continuous functions on a closed interval attain their extrema
- `lem-power-series-termwise-differentiation` · lemma — Power series may be differentiated term by term inside their radius
- `thm-outward-rounded-operations-are-isotone-and-dag-sound` · theorem — Outward-rounded operations are inclusion-isotone and enclose DAG evaluations
- `lem-continuous-functions-riemann-integrable` · lemma — Continuous functions have an oriented Riemann integral
- `lem-rolle-theorem-from-extreme-values` · lemma — Rolle's theorem from attained extrema
- `def-real-elementary-functions-and-domains` · definition — Real elementary functions and their domains
- `lem-mean-value-theorem-on-closed-interval` · lemma — Mean value theorem on a closed real interval
- `lem-riemann-integral-linearity` · lemma — The oriented Riemann integral is linear in continuous integrands
- `lem-fundamental-theorem-and-integration-by-parts` · lemma — The fundamental theorem of calculus and integration by parts
- `lem-range-reduced-exp-log-and-arctan-series-enclosures` · lemma — Range-reduced exponential, logarithm and arctangent series have certified tails
- `lem-taylor-lagrange-remainder-from-mean-value` · lemma — Taylor's Lagrange remainder follows from repeated Rolle steps
- `lem-taylor-integral-remainder` · lemma — Taylor's theorem with an integral remainder
- `lem-trigonometric-identities-machin-and-range-reduction` · lemma — Trigonometric identities, Machin's formula and reduced Taylor tails
- `alg-certified-elementary-range-evaluation` · algorithm — Certified range evaluation for elementary real and complex functions
- `thm-centered-taylor-model-encloses-function-range` · theorem — Centered Taylor models with derivative intervals enclose the function range
- `alg-budgeted-validated-range-evaluation` · algorithm — Finite-budget validated range evaluation
- `thm-real-elementary-range-enclosures` · theorem — Certified real elementary-function evaluations enclose their ranges
- `thm-complex-elementary-range-enclosures` · theorem — Certified complex exponential and principal logarithm enclose their ranges
- `thm-budgeted-range-evaluation-terminates-and-is-sound` · theorem — Budgeted range evaluation terminates and certifies only sound enclosures

### `outward-rounded-interval-and-ball-arithmetic-examples` — Outward rounded interval and ball arithmetic — Examples (3 item(s))

- `ex-division-by-interval-containing-zero` · example — Division of [1,2] by [-1,1] has no finite hull
- `ex-interval-subtraction-dependency` · example — Natural interval subtraction loses repeated-input correlation
- `ex-certified-sine-near-a-multiple-of-pi` · example — Certified sine range near a multiple of pi

### `computed-fast-transforms-and-convolution` — Computed fast transforms and convolution (19 item(s))

- `def-na-dct-ii-and-dst-i-even-odd-extension` · definition — DCT-II and DST-I with fixed even and odd extension conventions
- `lem-na-bluestein-chirp-convolution-factorization` · lemma — Bluestein’s chirp identity embeds an arbitrary DFT in a padded cyclic convolution
- `lem-na-mixed-radix-cooley-tukey-factorization` · lemma — Mixed-radix Cooley–Tukey factorization with fixed index maps
- `lem-na-zero-padding-removes-linear-convolution-aliasing` · lemma — Zero padding embeds linear convolution in cyclic convolution without aliasing
- `lem-na-complex-product-six-operation-roundoff-bound` · lemma — Six-operation complex multiplication has a normwise roundoff bound
- `thm-na-dct-ii-orthogonality-inverse-and-dft-extension` · theorem — DCT-II is orthogonal with the stated endpoint normalization and even extension
- `thm-na-dst-i-orthogonality-inverse-and-dft-extension` · theorem — DST-I is orthogonal with the stated endpoint normalization and odd extension
- `thm-na-dct-ii-chebyshev-coefficient-extraction` · theorem — DCT-II samples extract Chebyshev coefficients at first-kind roots
- `thm-na-interval-pi-matches-canonical-fourier-pi` · theorem — The interval evaluator's arctangent definition uses the canonical Fourier pi
- `alg-na-certified-unit-circle-phase` · algorithm — Certified dyadic enclosures for unit-circle phases
- `alg-na-computed-unitary-radix-two-fft` · algorithm — Computed unitary radix-two FFT with certified twiddle phases
- `thm-na-certified-unit-circle-phase-enclosure` · theorem — Certified phase output encloses the exact unit-circle value
- `alg-na-computed-fft-cyclic-and-linear-convolution` · algorithm — Computed FFT cyclic convolution and zero-padded linear convolution
- `lem-na-computed-unitary-butterfly-error-bound` · lemma — A computed unitary radix-two butterfly has error at most (10u + εtw) times its input norm
- `alg-na-computed-fast-transforms-and-convolution` · algorithm — Arbitrary-length mixed-radix and Bluestein DFT
- `thm-na-computed-unitary-radix-two-fft-error-bound` · theorem — Computed unitary radix-two FFT has the multiplicative stage error bound
- `thm-na-arbitrary-length-fft-correctness-and-cost` · theorem — Mixed-radix and Bluestein reductions compute every finite DFT in O(N log N) arithmetic
- `thm-na-computed-fft-convolution-error-bound` · theorem — Computed FFT convolution error separates transform, product, inverse, and final-scale terms
- `thm-na-bluestein-chirp-phase-error-separate-from-fft-error` · theorem — Bluestein chirp-phase error is bounded separately from FFT-convolution error

### `computed-fast-transforms-and-convolution-examples` — Computed fast transforms and convolution — Examples (3 item(s))

- `ex-na-prime-length-five-bluestein-transform` · example — The length-five all-ones vector through Bluestein
- `ex-na-two-point-circular-aliasing` · example — Two-point circular convolution aliases the linear endpoint term
- `ex-na-three-sample-dct-chebyshev-coefficients` · example — Three Chebyshev-root samples recover a quadratic by DCT-II

## Your seams

Your pages depend on another group's:

- `outward-rounded-interval-and-ball-arithmetic` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `computed-fast-transforms-and-convolution` requires `finite-precision-direct-factorizations` (group m, batch 1)

Another group's pages depend on yours:

- `finite-bit-random-streams-and-variate-generation` (group b) requires your `outward-rounded-interval-and-ball-arithmetic`
- `finite-bit-random-streams-and-variate-generation` (group b) requires your `computed-fast-transforms-and-convolution`
- `adaptive-ode-solvers-and-error-estimation` (group g) requires your `outward-rounded-interval-and-ball-arithmetic`
- `deferred-correction-and-collocation-iterations` (group k) requires your `polynomial-interpolation-and-remainder`
- `polynomial-approximation-and-chebyshev-interpolation` (group p) requires your `polynomial-interpolation-and-remainder`
- `composite-quadrature-rules` (group p) requires your `polynomial-interpolation-and-remainder`
- `clenshaw-curtis-and-extrapolation-quadrature` (group q) requires your `polynomial-interpolation-and-remainder`
- `clenshaw-curtis-and-extrapolation-quadrature` (group q) requires your `computed-fast-transforms-and-convolution`
- `adaptive-quadrature-and-error-indicators` (group r) requires your `outward-rounded-interval-and-ball-arithmetic`
- `verified-linear-systems-and-spectral-enclosures` (group s) requires your `outward-rounded-interval-and-ball-arithmetic`
- `interval-newton-krawczyk-and-polynomial-root-isolation` (group s) requires your `outward-rounded-interval-and-ball-arithmetic`
- `gaussian-quadrature` (group t) requires your `polynomial-interpolation-and-remainder`
- `numerical-differentiation-and-derivative-error-control` (group v) requires your `polynomial-interpolation-and-remainder`
- `global-optimization-and-certified-branch-and-bound` (group z) requires your `outward-rounded-interval-and-ball-arithmetic`
- `finite-element-meshes-and-interpolation` (group ag) requires your `polynomial-interpolation-and-remainder`
- `spectral-collocation-and-galerkin-methods` (group aj) requires your `polynomial-interpolation-and-remainder`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
