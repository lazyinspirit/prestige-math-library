# Step 5 adjudication — group **ac**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 85, 88, 91: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **85**: `research/numerical-optimization-dynamics-2026-10-16-batch-85-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **88**: `research/numerical-optimization-dynamics-2026-10-16-batch-88-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **91**: `research/numerical-optimization-dynamics-2026-10-16-batch-91-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 85 | `sqp-active-set-and-augmented-lagrangian-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2454 | `finite-precision-direct-factorizations`, `inequality-kkt-duality-and-optimality-certificates`, `nonconvex-line-search-and-inexact-newton-methods`, `bfgs-and-limited-memory-quasi-newton-methods` |
| 85 | `sqp-active-set-and-augmented-lagrangian-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2455 | `sqp-active-set-and-augmented-lagrangian-methods` |
| 88 | `iterative-regularization-and-early-stopping` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2460 | `numerical-inverse-problems-and-regularization-error`, `spectral-regularization-and-parameter-choice`, `krylov-methods-and-lanczos-convergence`, `preconditioner-algorithms-and-residual-metrics`, `gauss-newton-and-levenberg-marquardt-methods`, `continuous-functional-calculus-for-self-adjoint-and-normal-operators`, `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `approximation-and-compactness-in-ck`, `hilbert-space-geometry-and-riesz-representation`, `the-logarithm-and-general-powers`, `relations-functions-and-quotients`, `the-derivative-and-mean-value-theorems`, `bounded-linear-operators-and-quotient-spaces`, `countability-and-uncountability`, `analytic-semigroups-and-linear-evolution-equations`, `strongly-continuous-semigroups-and-hille-yosida`, `banach-valued-integration-and-the-radon-nikodym-property`, `monotone-sequences-and-cauchy-completeness` |
| 88 | `iterative-regularization-and-early-stopping-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2461 | `iterative-regularization-and-early-stopping` |
| 91 | `minimum-energy-paths-string-neb-and-saddle-certificates` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2466 | `nonlinear-equations-and-newton-methods`, `numerical-optimization-globalization-and-inexact-certificates`, `trust-region-and-cubic-regularization-methods`, `riemannian-optimization-on-stiefel-and-grassmann-manifolds`, `principal-components-and-eigenspace-stability` |
| 91 | `minimum-energy-paths-string-neb-and-saddle-certificates-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2467 | `minimum-energy-paths-string-neb-and-saddle-certificates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sqp-active-set-and-augmented-lagrangian-methods` — Sqp active set and augmented lagrangian methods (21 item(s))

- `def-sqp-linearized-quadratic-subproblem` · definition — The linearized quadratic subproblem in sequential quadratic programming
- `def-sqp-augmented-lagrangian-equality-and-inequality` · definition — Equality and inequality augmented Lagrangians and multiplier updates
- `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature` · lemma — The SQP KKT matrix is nonsingular under positive reduced curvature
- `def-sqp-l1-exact-penalty-merit` · definition — L1 exact-penalty merit and predicted decrease for SQP
- `alg-sqp-augmented-lagrangian-multiplier-method` · algorithm — Finite-budget augmented-Lagrangian multiplier method
- `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate` · lemma — A feasible strictly convex linear-constrained QP has a unique KKT minimizer with independent active support
- `alg-sqp-exhaustive-active-set-qp-solve` · algorithm — Exact exhaustive active-set solve for the SQP quadratic subproblem
- `alg-sqp-feasible-working-set-qp-solve` · algorithm — Feasible active-set QP solve with blocking constraints and a finite cap
- `alg-sqp-second-order-correction` · algorithm — Minimum-norm second-order correction for identified active constraints
- `alg-sqp-exact-hessian-newton-step` · algorithm — Full-step exact-Hessian SQP after active-set identification
- `alg-sqp-reduced-bfgs-kkt-step` · algorithm — Reduced-BFGS SQP KKT step with projected Hessian error
- `alg-sqp-merit-globalization-with-finite-budgets` · algorithm — L1 merit globalization with finite penalty and backtracking budgets
- `thm-sqp-exhaustive-active-set-qp-solve-correct-finite` · theorem — The exhaustive active-set QP solve terminates with the unique minimizer exactly when feasible
- `thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling` · theorem — A feasible working-set QP solve terminates under nondegenerate steps
- `thm-sqp-second-order-correction-residual-order` · theorem — Second-order correction reduces the active constraint residual to cubic order
- `thm-sqp-exact-hessian-local-quadratic-convergence` · theorem — Exact-Hessian SQP converges quadratically on the identified active KKT system
- `thm-sqp-reduced-bfgs-superlinear-under-dm` · theorem — Reduced-BFGS SQP is locally superlinear under reduced Dennis-More and inverse bounds
- `thm-sqp-augmented-lagrangian-local-convergence` · theorem — Augmented-Lagrangian multipliers converge locally with summable inner residuals
- `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check` · algorithm — Finite-precision reduced-QR KKT solve with certified residual status
- `thm-sqp-merit-globalization-finite-budget-status` · theorem — Finite merit-globalization budgets return a defined status
- `thm-sqp-finite-precision-kkt-residual-certificate-sound` · theorem — The computed KKT residual certificate bounds the exact linear-system residual

### `sqp-active-set-and-augmented-lagrangian-methods-examples` — Sqp active set and augmented lagrangian methods — Examples (3 item(s))

- `ex-sqp-engineering-design-active-inequality` · example — Two-component design with an active demand constraint
- `ex-sqp-maratos-effect-and-second-order-correction` · example — A full SQP step is rejected by the L1 merit test and repaired by SOC
- `ex-sqp-augmented-lagrangian-penalty-conditioning` · example — A quadratic equality model shows the AL conditioning tradeoff

### `iterative-regularization-and-early-stopping` — Iterative regularization and early stopping (13 item(s))

- `alg-landweber-iteration-with-discrepancy-stopping` · algorithm — Landweber iteration with discrepancy and budget statuses
- `alg-golub-kahan-lsqr-with-givens-and-status` · algorithm — Exact-arithmetic LSQR with Golub–Kahan bidiagonalization and explicit statuses
- `lem-local-lipschitz-derivative-quadratic-remainder` · lemma — A Lipschitz Fréchet derivative gives a quadratic linearization remainder
- `alg-iteratively-regularized-gauss-newton-step` · algorithm — Iteratively regularized Gauss–Newton step with explicit early stopping
- `thm-lsqr-residual-minimizes-on-krylov-subspace` · theorem — A nonbreakdown LSQR iterate minimizes residual on its Krylov space
- `lem-landweber-filter-and-residual-identities` · lemma — Landweber iterates and residuals are spectral-filter iterates
- `lem-irlgnm-one-step-error-recurrence` · lemma — One-step error recurrence for the assigned nonlinear regularized Gauss–Newton step
- `thm-landweber-source-and-noise-error-bounds` · theorem — Landweber converges for exact data and balances source bias with noise
- `cor-landweber-discrepancy-stopped-convergence-rate` · corollary — Landweber discrepancy stopping converges under a source condition
- `lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds` · lemma — Real and complex Hilbert source powers and fixed-reference Tikhonov filter bounds
- `alg-anchored-irgnm-with-discrepancy-stopping` · algorithm — Anchored iteratively regularized Gauss-Newton with finite discrepancy stopping
- `lem-anchored-irgnm-fixed-reference-error-and-residual` · lemma — Anchored IRGNM error identity and fixed-reference residual inequality
- `thm-irlgnm-local-source-condition-discrepancy-convergence` · theorem — Anchored IRGNM local source-condition convergence with ordinary discrepancy stopping

### `iterative-regularization-and-early-stopping-examples` — Iterative regularization and early stopping — Examples (4 item(s))

- `cex-full-lsqr-can-amplify-data-noise` · counterexample — A fully converged LSQR solve can amplify a small singular-direction error
- `ex-nonlinear-exponential-kinetics-one-step` · example — One regularized Gauss–Newton step for exponential reaction kinetics
- `ex-landweber-semiconvergence-on-a-compact-diagonal-operator` · example — Landweber semiconvergence for diagonal noisy data
- `ex-three-pixel-blur-landweber-reconstruction` · example — Landweber reconstructs a three-pixel blurred signal

### `minimum-energy-paths-string-neb-and-saddle-certificates` — Minimum energy paths string neb and saddle certificates (18 item(s))

- `def-regular-minimum-energy-path-in-a-collision-free-tube` · definition — Regular minimum-energy paths on a declared collision-free tube
- `lem-dimer-central-force-hessian-vector-error` · lemma — Paired force evaluations give a second-order Hessian-vector estimate
- `lem-local-root-from-uniformly-small-residual` · lemma — A small residual gives a nearby root under a uniform inverse and Lipschitz bound
- `lem-local-root-in-max-norm` · lemma — A small residual gives a nearby root under a uniform inverse and Lipschitz bound in the maximum norm
- `alg-finite-budget-dimer-mode-following` · algorithm — Finite-budget dimer rotation and saddle translation
- `alg-finite-image-string-method` · algorithm — Finite-image projected-gradient string with arc-length redistribution
- `alg-improved-tangent-climbing-neb` · algorithm — Finite-budget improved-tangent NEB with a climbing image
- `def-validated-eigenvalue-enclosures-for-an-index-one-hessian` · definition — Validated ordered eigenvalue enclosures for an index-one Hessian
- `lem-centered-chord-and-unequal-step-tangent-error` · lemma — Second-order centered and unequal-step tangent estimates
- `lem-arc-length-polyline-interpolation-error` · lemma — Polyline interpolation and equal-length redistribution approximate a smooth arc-length path
- `thm-local-index-one-saddle-certificate-from-enclosures` · theorem — Validated Hessian enclosures and a small gradient residual certify a nearby index-one saddle
- `alg-index-one-eigenvector-following-step` · algorithm — Finite-budget index-one eigenvector-following Newton step
- `prop-central-string-projected-force-consistency` · proposition — Centered-tangent string residuals are second-order consistent on a regular MEP
- `thm-dimer-mode-perturbation-and-local-saddle-error` · theorem — A separated dimer mode gives a local inexact saddle error bound
- `prop-improved-neb-monotone-tangent-has-first-order-projection-error` · proposition — The improved NEB monotone branch is generally only first-order consistent
- `prop-index-one-eigenvector-step-is-the-local-newton-correction` · proposition — An exact index-one eigenvector-following step is the Newton correction at a saddle
- `thm-dimer-mode-error-contracts-local-saddle-translation` · theorem — A gap-controlled dimer mode gives a local saddle-translation error recurrence
- `thm-gauge-fixed-stable-discrete-path-comparison` · theorem — A gauge-fixed stable discrete path lies within second order of a smooth MEP

### `minimum-energy-paths-string-neb-and-saddle-certificates-examples` — Minimum energy paths string neb and saddle certificates — Examples (7 item(s))

- `ex-dimer-hessian-vector-bias-noise-tradeoff` · example — Dimer finite-difference bias competes with force-evaluation error
- `ex-corner-and-cusp-break-the-string-tangent-hypotheses` · example — A corner has no unique tangent and a cusp gives a zero centered chord
- `ex-curved-double-well-has-a-circular-minimum-energy-path` · example — A curved double well has an exact circular minimum-energy path
- `ex-straight-chord-is-not-the-curved-double-well-path` · example — The straight chord misses the curved double-well minimum-energy path
- `ex-index-two-maximum-fails-the-index-one-certificate` · example — A local maximum has the wrong Morse index for the saddle certificate
- `ex-near-degenerate-saddle-modes-rotate-under-small-perturbations` · example — A small spectral gap makes the dimer mode sensitive to perturbations
- `ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path` · example — Zero discrete force does not select a unique continuum path

## Your seams

Your pages depend on another group's:

- `sqp-active-set-and-augmented-lagrangian-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `sqp-active-set-and-augmented-lagrangian-methods` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `sqp-active-set-and-augmented-lagrangian-methods` requires `nonconvex-line-search-and-inexact-newton-methods` (group y, batch 58)
- `sqp-active-set-and-augmented-lagrangian-methods` requires `bfgs-and-limited-memory-quasi-newton-methods` (group aa, batch 71)
- `iterative-regularization-and-early-stopping` requires `numerical-inverse-problems-and-regularization-error` (group w, batch 25)
- `iterative-regularization-and-early-stopping` requires `spectral-regularization-and-parameter-choice` (group x, batch 32)
- `iterative-regularization-and-early-stopping` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `iterative-regularization-and-early-stopping` requires `preconditioner-algorithms-and-residual-metrics` (group r, batch 50)
- `iterative-regularization-and-early-stopping` requires `gauss-newton-and-levenberg-marquardt-methods` (group ab, batch 84)
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `numerical-optimization-globalization-and-inexact-certificates` (group x, batch 39)
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `trust-region-and-cubic-regularization-methods` (group aa, batch 72)
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab, batch 83)

Another group's pages depend on yours:

- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `sqp-active-set-and-augmented-lagrangian-methods`
- `finite-element-pde-constrained-optimization` (group ae) requires your `sqp-active-set-and-augmented-lagrangian-methods`

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
