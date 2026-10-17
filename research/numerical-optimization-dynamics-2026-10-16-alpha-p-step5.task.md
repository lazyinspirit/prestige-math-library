# Step 5 adjudication — group **p**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 19, 20, 33: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/numerical-optimization-dynamics-2026-10-16-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/numerical-optimization-dynamics-2026-10-16-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/numerical-optimization-dynamics-2026-10-16-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `polynomial-approximation-and-chebyshev-interpolation` | A | numerical-linear-algebra-and-approximation | 2322 | `approximation-and-compactness-in-ck`, `fundamental-trigonometric-identities`, `polynomial-interpolation-and-remainder`, `the-logarithm-and-general-powers`, `the-topology-of-euclidean-space` |
| 19 | `polynomial-approximation-and-chebyshev-interpolation-examples` | B | numerical-linear-algebra-and-approximation | 2323 | `polynomial-approximation-and-chebyshev-interpolation`, `complex-norms-and-realification`, `the-complex-exponential-and-eulers-formula` |
| 20 | `composite-quadrature-rules` | A | numerical-linear-algebra-and-approximation | 2324 | `properties-of-the-integral-and-the-working-ftc`, `the-riemann-integral-in-rn-and-jordan-content`, `polynomial-interpolation-and-remainder`, `laplace-approximation-and-marginal-integration` |
| 20 | `composite-quadrature-rules-examples` | B | numerical-linear-algebra-and-approximation | 2325 | `composite-quadrature-rules`, `convexity` |
| 33 | `computed-schur-decompositions-and-nonnormal-spectra` | A | numerical-linear-algebra-and-approximation | 2350 | `eigenvalue-iterations-and-the-qr-algorithm`, `matrix-differentiation-and-first-order-spectral-perturbation`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `computed-singular-values-and-rank-revealing-factorizations` |
| 33 | `computed-schur-decompositions-and-nonnormal-spectra-examples` | B | numerical-linear-algebra-and-approximation | 2351 | `computed-schur-decompositions-and-nonnormal-spectra` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `polynomial-approximation-and-chebyshev-interpolation` — Polynomial approximation and Chebyshev interpolation (7 item(s))

- `def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants` · definition — Best uniform polynomial error and Chebyshev interpolation operators
- `lem-sine-chord-and-lipschitz-bounds` · lemma — Sine chord and Lipschitz bounds
- `lem-cardinal-lagrange-interpolation-and-operator-norm` · lemma — Chebyshev cardinal interpolation reproduces polynomials and its norm is the cardinal sum
- `cor-best-polynomial-approximation-errors-vanish` · corollary — Best polynomial errors vanish for continuous functions
- `lem-chebyshev-cardinal-polynomial-formulas` · lemma — Trigonometric formulas for Chebyshev cardinal polynomials
- `thm-chebyshev-interpolation-near-best-error-bound` · theorem — Chebyshev interpolation error is controlled by best polynomial error
- `thm-chebyshev-interpolation-lebesgue-constant-log-bound` · theorem — Chebyshev-root and Lobatto interpolation norms grow logarithmically

### `polynomial-approximation-and-chebyshev-interpolation-examples` — Polynomial approximation and Chebyshev interpolation — Examples (3 item(s))

- `ex-equispaced-runge-function-interpolation-diverges` · example — Equispaced interpolation of Runge's function diverges
- `ex-chebyshev-interpolation-node-families-and-degree-one-norms` · example — Degree-one root and Lobatto interpolation norms
- `ex-exponential-best-error-rate-for-chebyshev-interpolation` · example — An exponential best-error rate transferred to Chebyshev interpolation

### `composite-quadrature-rules` — Composite quadrature rules (7 item(s))

- `alg-composite-midpoint-rule` · algorithm — Composite midpoint rule on a uniform grid
- `alg-composite-simpson-rule` · algorithm — Composite Simpson rule on an even uniform grid
- `lem-composite-midpoint-panel-error-kernel` · lemma — Midpoint panel error kernel and second-derivative bound
- `thm-composite-midpoint-error-bound` · theorem — Composite midpoint error bound for a twice continuously differentiable function
- `lem-simpson-panel-peano-kernel` · lemma — Peano kernel identity for one Simpson panel
- `thm-composite-simpson-exact-through-degree-three` · theorem — Composite Simpson rule is exact through cubic degree
- `thm-composite-simpson-error-bound` · theorem — Composite Simpson error bound for a four-times continuously differentiable function

### `composite-quadrature-rules-examples` — Composite quadrature rules — Examples (3 item(s))

- `ex-convex-composite-midpoint-and-trapezoid-bracketing` · example — Convex data bracket the integral between composite midpoint and trapezoid values
- `ex-quadratic-exact-for-composite-simpson` · example — Simpson rule integrates a quadratic exactly on one two-panel block
- `ex-cubic-exact-for-composite-simpson` · example — Simpson rule integrates a cubic exactly on one two-panel block

### `computed-schur-decompositions-and-nonnormal-spectra` — Computed schur decompositions and nonnormal spectra (21 item(s))

- `def-real-and-complex-schur-forms` · definition — Real and complex Schur forms
- `def-exact-real-2x2-discriminant-sign-predicate` · definition — Exact sign predicate for a real 2x2 characteristic discriminant
- `def-closed-epsilon-pseudospectrum` · definition — Closed epsilon-pseudospectrum in the spectral norm
- `lem-unitary-similarity-error-accumulation` · lemma — Local unitary-similarity perturbations accumulate as a backward perturbation
- `lem-neumann-invertibility-for-finite-matrices` · lemma — A finite matrix within unit distance of the identity is invertible
- `lem-implicit-q-uniqueness-for-unreduced-hessenberg` · lemma — An unreduced Hessenberg similarity is determined by its first unitary column
- `lem-francis-compact-bulge-support-propagation` · lemma — A compact Francis bulge chase preserves Hessenberg form and the initial direction
- `alg-complex-scaled-householder-reflector-step` · algorithm — Scaled complex Householder reflector step with explicit range status
- `lem-complex-scaled-householder-step-termination-and-status` · lemma — The scaled complex Householder wrapper terminates with a unitary representative
- `lem-real-francis-double-shift-polynomial` · lemma — The real Francis double-shift polynomial is real and annihilates its trailing block
- `thm-closed-pseudospectrum-resolvent-perturbation-equivalence` · theorem — Closed pseudospectrum equals the resolvent, singular-value, and perturbation tests
- `thm-bauer-fike-eigenvalue-perturbation-bound` · theorem — Bauer-Fike bounds eigenvalue motion by the eigenvector condition number
- `alg-exact-francis-hessenberg-qr-step` · algorithm — Exact finite Francis single- or double-shift Hessenberg QR step
- `lem-exact-francis-step-termination-and-similarity` · lemma — An exact Francis step terminates with unitary similarity and its stated status
- `lem-francis-double-shift-bulge-chase-matches-explicit-qr` · lemma — Under unreduced hypotheses, the Francis double-shift chase matches explicit shifted QR
- `alg-finite-budget-francis-schur-reduction` · algorithm — Finite-budget computed Francis Schur reduction with explicit statuses
- `thm-computed-francis-schur-backward-error` · theorem — A finite computed Francis similarity sequence has a conditional normwise backward-error bound
- `thm-computed-pseudospectrum-membership-enclosure` · theorem — A certified computed smallest singular value encloses pseudospectrum membership
- `lem-two-sided-scaled-householder-similarity-error` · lemma — Left and right scaled Householder errors give a concrete similarity bound
- `lem-exact-rational-two-by-two-discriminant-sign` · lemma — Rational or dyadic stored real blocks have a finite exact discriminant-sign evaluator
- `thm-finite-budget-francis-schur-termination-and-status` · theorem — Finite Francis procedure terminates with explicit statuses and verifies its Schur pattern on success

### `computed-schur-decompositions-and-nonnormal-spectra-examples` — Computed schur decompositions and nonnormal spectra — Examples (3 item(s))

- `ex-jordan-block-epsilon-pseudospectrum` · example — The closed epsilon-pseudospectrum of the two-by-two Jordan block is a disk
- `ex-jordan-eigenvalue-residual-square-root-instability` · example — A Jordan eigenpair residual can be much smaller than its eigenvalue error
- `ex-real-conjugate-pair-schur-block` · example — A real Schur block represents a conjugate eigenvalue pair

## Your seams

Your pages depend on another group's:

- `polynomial-approximation-and-chebyshev-interpolation` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `composite-quadrature-rules` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `computed-schur-decompositions-and-nonnormal-spectra` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `computed-schur-decompositions-and-nonnormal-spectra` requires `computed-singular-values-and-rank-revealing-factorizations` (group o, batch 17)

Another group's pages depend on yours:

- `fractional-evolution-and-convolution-quadrature` (group e) requires your `composite-quadrature-rules`
- `renewal-age-and-size-structured-numerical-methods` (group j) requires your `composite-quadrature-rules`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `composite-quadrature-rules`
- `clenshaw-curtis-and-extrapolation-quadrature` (group q) requires your `polynomial-approximation-and-chebyshev-interpolation`
- `clenshaw-curtis-and-extrapolation-quadrature` (group q) requires your `composite-quadrature-rules`
- `generalized-eigenvalue-pencils-and-qz-methods` (group q) requires your `computed-schur-decompositions-and-nonnormal-spectra`
- `sylvester-and-lyapunov-matrix-equations` (group r) requires your `computed-schur-decompositions-and-nonnormal-spectra`
- `adaptive-quadrature-and-error-indicators` (group r) requires your `composite-quadrature-rules`
- `verified-linear-systems-and-spectral-enclosures` (group s) requires your `computed-schur-decompositions-and-nonnormal-spectra`
- `restarted-and-block-eigensolvers` (group s) requires your `computed-schur-decompositions-and-nonnormal-spectra`
- `matrix-functions-and-scaling-squaring` (group t) requires your `computed-schur-decompositions-and-nonnormal-spectra`
- `sparse-grid-cubature-and-mixed-regularity` (group u) requires your `composite-quadrature-rules`
- `interacting-particle-mean-field-and-vortex-blob-error` (group ai) requires your `composite-quadrature-rules`
- `variational-crimes-and-strang-lemmas` (group aj) requires your `composite-quadrature-rules`
- `spectral-collocation-and-galerkin-methods` (group aj) requires your `polynomial-approximation-and-chebyshev-interpolation`
- `spectral-collocation-and-galerkin-methods` (group aj) requires your `composite-quadrature-rules`

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
