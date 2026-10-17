# Step 5 adjudication — group **r**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 49, 50, 51: 3 A/B pair(s), 6 page(s), 39 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/numerical-optimization-dynamics-2026-10-16-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/numerical-optimization-dynamics-2026-10-16-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/numerical-optimization-dynamics-2026-10-16-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `sylvester-and-lyapunov-matrix-equations` | A | numerical-linear-algebra-and-approximation | 2382 | `computed-schur-decompositions-and-nonnormal-spectra`, `strongly-continuous-semigroups-and-hille-yosida` |
| 49 | `sylvester-and-lyapunov-matrix-equations-examples` | B | numerical-linear-algebra-and-approximation | 2383 | `sylvester-and-lyapunov-matrix-equations` |
| 50 | `preconditioner-algorithms-and-residual-metrics` | A | numerical-linear-algebra-and-approximation | 2384 | `conjugate-gradients-minres-and-preconditioning`, `sparse-matrix-models-and-kernel-costs`, `stationary-iterations-and-relaxation`, `krylov-methods-and-lanczos-convergence` |
| 50 | `preconditioner-algorithms-and-residual-metrics-examples` | B | numerical-linear-algebra-and-approximation | 2385 | `preconditioner-algorithms-and-residual-metrics` |
| 51 | `adaptive-quadrature-and-error-indicators` | A | numerical-linear-algebra-and-approximation | 2386 | `composite-quadrature-rules`, `outward-rounded-interval-and-ball-arithmetic`, `clenshaw-curtis-and-extrapolation-quadrature` |
| 51 | `adaptive-quadrature-and-error-indicators-examples` | B | numerical-linear-algebra-and-approximation | 2387 | `adaptive-quadrature-and-error-indicators` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sylvester-and-lyapunov-matrix-equations` — Sylvester and lyapunov matrix equations (19 item(s))

- `lem-sylvester-vectorization-isometry-and-kronecker-identity` · lemma — Column vectorization is an isometry and represents the Sylvester map by a Kronecker sum
- `lem-small-block-determinant-separation-lower-bound` · lemma — A determinant and Frobenius norm give a certified lower bound for small-block separation
- `def-hurwitz-matrix-and-continuous-lyapunov-equation` · definition — Hurwitz matrices and the continuous Lyapunov equation
- `lem-adjugate-inverse-formula-over-a-field` · lemma — The adjugate gives an explicit inverse formula over a field
- `def-sylvester-operator-and-separation-number` · definition — Sylvester operator and Frobenius separation number
- `lem-hurwitz-matrix-exponential-decay-bound` · lemma — A Hurwitz matrix exponential has a polynomial-exponential decay bound
- `lem-hurwitz-negative-shift-matrix-invertible` · lemma — A negative-real-part shift of a Hurwitz matrix is invertible
- `lem-sylvester-separation-controls-the-frobenius-error` · lemma — Positive Sylvester separation bounds the inverse operator norm
- `thm-sylvester-unique-solvability-spectral-separation` · theorem — A Sylvester equation is uniquely solvable exactly when the spectra are disjoint
- `thm-continuous-lyapunov-integral-and-positivity` · theorem — The Hurwitz Lyapunov integral is the unique solution and has the stated positivity
- `alg-low-rank-alternating-direction-implicit-lyapunov` · algorithm — Low-rank ADI for a continuous Lyapunov equation
- `thm-sylvester-residual-to-forward-error-bound` · theorem — Sylvester separation converts a residual into a forward error bound
- `thm-low-rank-adi-exact-residual-factor-identity` · theorem — Low-rank ADI has an exact residual factor identity
- `thm-low-rank-adi-conditional-convergence-bound` · theorem — A proved rational shift bound implies low-rank ADI convergence
- `alg-bartels-stewart-sylvester-equation` · algorithm — Finite-budget Bartels-Stewart solve for a Sylvester equation
- `thm-bartels-stewart-sylvester-exact-correctness` · theorem — Successful certified Bartels-Stewart substitution returns the exact Sylvester solution
- `thm-bartels-stewart-dense-operation-count` · theorem — Linearly budgeted dense Bartels-Stewart work with explicit controller costs
- `thm-bartels-stewart-finite-status-and-local-pivot-uniqueness` · theorem — Finite Bartels–Stewart statuses and successful-pivot uniqueness
- `thm-low-rank-adi-finite-status-and-well-definedness` · theorem — Finite ADI shifts have well-defined solves and explicit statuses

### `sylvester-and-lyapunov-matrix-equations-examples` — Sylvester and lyapunov matrix equations — Examples (3 item(s))

- `ex-stable-linear-noise-lyapunov-covariance` · example — A stable linear noise covariance balance has a positive solution
- `ex-nearly-colliding-sylvester-eigenvalue-sums` · example — Nearly colliding eigenvalue sums make a Sylvester solve sensitive
- `ex-low-rank-adi-residual-certificate` · example — One low-rank ADI step gives an exact residual certificate

### `preconditioner-algorithms-and-residual-metrics` — Preconditioner algorithms and residual metrics (4 item(s))

- `alg-ilu0-fixed-pattern-factorization` · algorithm — Fixed-pattern ILU(0) factorization and application
- `thm-ilu0-factor-pattern-and-work-counts` · theorem — ILU(0) factor slots, setup work, and application work
- `alg-flexible-gmres-variable-right-preconditioning` · algorithm — Flexible GMRES with variable right preconditioning
- `thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span` · theorem — Flexible GMRES minimizes over the actual preconditioned-vector span

### `preconditioner-algorithms-and-residual-metrics-examples` — Preconditioner algorithms and residual metrics — Examples (3 item(s))

- `ex-left-preconditioned-residual-can-understate-physical-residual` · example — A small left-preconditioned residual can hide a large physical residual
- `ex-ilu0-tridiagonal-factorization` · example — ILU(0) factors of a three-row tridiagonal matrix
- `cex-ilu0-product-can-create-fill-outside-input-pattern` · counterexample — The product of ILU(0) factors can contain a fill position

### `adaptive-quadrature-and-error-indicators` — Adaptive quadrature and error indicators (7 item(s))

- `def-adaptive-simpson-refinement-indicator` · definition — Embedded Simpson refinement indicator
- `lem-composite-simpson-asymptotic-error-expansion` · lemma — Leading composite Simpson error coefficient
- `alg-adaptive-simpson-with-finite-depth-and-panel-cap` · algorithm — Finite-depth adaptive Simpson with an indicator
- `thm-simpson-richardson-error-estimator-asymptotic` · theorem — Conditional asymptotic validity of the Simpson /15 indicator
- `thm-adaptive-simpson-cap-termination-and-indicator-budget` · theorem — Termination and indicator bookkeeping for capped adaptive Simpson
- `alg-certified-adaptive-simpson` · algorithm — Certified adaptive Simpson from derivative enclosures
- `thm-certified-adaptive-simpson-enclosure` · theorem — Sound integral enclosure from certified adaptive Simpson

### `adaptive-quadrature-and-error-indicators-examples` — Adaptive quadrature and error indicators — Examples (3 item(s))

- `ex-adaptive-simpson-misses-narrow-feature` · example — The Simpson indicator misses a feature between its sample nodes
- `ex-adaptive-simpson-cap-reached` · example — A narrow peak reaches the adaptive Simpson depth cap
- `ex-adaptive-simpson-leading-error-cancellation` · example — Cancellation of the leading Simpson error coefficient

## Your seams

Your pages depend on another group's:

- `sylvester-and-lyapunov-matrix-equations` requires `computed-schur-decompositions-and-nonnormal-spectra` (group p, batch 33)
- `preconditioner-algorithms-and-residual-metrics` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `preconditioner-algorithms-and-residual-metrics` requires `stationary-iterations-and-relaxation` (group o, batch 18)
- `preconditioner-algorithms-and-residual-metrics` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `adaptive-quadrature-and-error-indicators` requires `composite-quadrature-rules` (group p, batch 20)
- `adaptive-quadrature-and-error-indicators` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `adaptive-quadrature-and-error-indicators` requires `clenshaw-curtis-and-extrapolation-quadrature` (group q, batch 43)

Another group's pages depend on yours:

- `renewal-age-and-size-structured-numerical-methods` (group j) requires your `adaptive-quadrature-and-error-indicators`
- `restarted-and-block-eigensolvers` (group s) requires your `preconditioner-algorithms-and-residual-metrics`
- `matrix-functions-and-scaling-squaring` (group t) requires your `sylvester-and-lyapunov-matrix-equations`
- `iterative-regularization-and-early-stopping` (group ac) requires your `preconditioner-algorithms-and-residual-metrics`

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
