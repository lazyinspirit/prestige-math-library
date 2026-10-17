# Step 5 adjudication — group **ad**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 92, 96, 97: 3 A/B pair(s), 6 page(s), 79 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **92**: `research/numerical-optimization-dynamics-2026-10-16-batch-92-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **96**: `research/numerical-optimization-dynamics-2026-10-16-batch-96-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **97**: `research/numerical-optimization-dynamics-2026-10-16-batch-97-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 92 | `finite-basis-projector-energies-and-variational-electronic-structure` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2468 | `matrix-differentiation-and-first-order-spectral-perturbation`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-element-eigenvalue-approximation`, `trust-region-and-cubic-regularization-methods`, `riemannian-optimization-on-stiefel-and-grassmann-manifolds` |
| 92 | `finite-basis-projector-energies-and-variational-electronic-structure-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2469 | `finite-basis-projector-energies-and-variational-electronic-structure` |
| 96 | `discrete-continuous-and-pde-adjoint-sensitivities` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2476 | `data-assimilation-variational-and-ensemble-methods`, `automatic-differentiation-and-computational-graphs`, `nonlinear-boundary-value-solvers`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `parabolic-finite-element-methods`, `implicit-stiff-time-stepping-and-algebraic-error`, `variational-crimes-and-strang-lemmas` |
| 96 | `discrete-continuous-and-pde-adjoint-sensitivities-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2477 | `discrete-continuous-and-pde-adjoint-sensitivities` |
| 97 | `self-consistent-projector-iterations-and-certified-mixing` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2478 | `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `completeness-and-uniform-continuity`, `the-spectral-theorem-and-singular-value-decomposition`, `nonlinear-equations-and-newton-methods`, `finite-basis-projector-energies-and-variational-electronic-structure` |
| 97 | `self-consistent-projector-iterations-and-certified-mixing-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2479 | `self-consistent-projector-iterations-and-certified-mixing` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-basis-projector-energies-and-variational-electronic-structure` — Finite basis projector energies and variational electronic structure (19 item(s))

- `def-rank-r-orthogonal-projector-domain` · definition — Rank-r orthogonal projector domain
- `def-finite-temperature-density-matrix-free-energy` · definition — Fixed-particle finite-temperature density-matrix free energy
- `lem-complex-hermitian-eigenvalues-lipschitz` · lemma — Ordered eigenvalues of Hermitian matrices are operator-norm Lipschitz
- `thm-nested-finite-basis-infimum-monotonicity` · theorem — Nested finite-basis infima decrease to the infimum over their union
- `lem-hermitian-idempotent-trace-equals-rank` · lemma — A Hermitian idempotent has trace equal to its rank
- `def-finite-basis-projector-energy-model` · definition — Finite-basis projector energy model
- `lem-finite-temperature-density-domain-compact` · lemma — The fixed-particle density-matrix domain is nonempty and compact
- `lem-finite-temperature-entropy-continuous-at-endpoints` · lemma — The finite-temperature trace entropy is continuous at occupation endpoints
- `prop-interior-entropy-trace-derivative` · proposition — The finite-temperature matrix entropy has its interior trace derivative
- `lem-rank-r-projector-grassmann-chart-and-tangent` · lemma — Graph charts and tangent directions for complex rank-r projectors
- `lem-finite-projector-domain-compact` · lemma — The finite rank-r projector domain is nonempty and compact
- `prop-finite-projector-energy-reality-and-gradient` · proposition — The finite projector energy is real and has the stated Frobenius gradient
- `thm-finite-temperature-free-energy-attains-minimum` · theorem — The finite-temperature free energy attains a minimum on the density domain
- `lem-finite-temperature-minimizer-is-interior` · lemma — A finite-temperature minimizer has strictly interior occupations
- `lem-complex-projector-tangent-commutator-curves` · lemma — Complex projector tangents are skew-Hermitian commutator directions
- `thm-finite-projector-energy-attains-minimum` · theorem — A finite-basis projector energy attains a global minimum
- `thm-finite-temperature-fermi-dirac-stationarity` · theorem — Interior finite-temperature stationarity gives Fermi-Dirac occupations
- `thm-finite-projector-commutator-stationarity` · theorem — Projector-energy stationarity is equivalent to Fock commutation
- `thm-positive-tangent-hessian-implies-strict-projector-minimum` · theorem — A positive tangent Hessian gives a strict local projector minimum

### `finite-basis-projector-energies-and-variational-electronic-structure-examples` — Finite basis projector energies and variational electronic structure — Examples (7 item(s))

- `ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy` · example — An incomplete finite trial space can lie strictly above the Hamiltonian ground energy
- `ex-nested-trial-spaces-may-have-equal-energies` · example — Nested trial spaces give nonincreasing energies, sometimes with equality
- `ex-zero-ritz-residual-does-not-identify-ground-state` · example — A zero Ritz residual can belong to an excited eigenstate
- `ex-overlap-whitening-can-amplify-coefficient-errors` · example — An ill-conditioned overlap preserves exact Ritz values but amplifies coordinate errors
- `ex-nonsmooth-exchange-correlation-functional-breaks-c2` · example — A cusp in a chosen exchange-correlation term violates the C2 hypothesis
- `ex-two-level-nonlinear-projector-stationary-maximum` · example — A two-level nonlinear projector model has a stationary strict maximum
- `ex-finite-basis-projector-optimization-on-grassmann` · example — Complex finite-basis PC-VAR optimization on Grassmann

### `discrete-continuous-and-pde-adjoint-sensitivities` — Discrete continuous and pde adjoint sensitivities (19 item(s))

- `def-parameterized-finite-state-step-objective` · definition — Finite parameterized state-step graphs and objectives
- `def-parameterized-elliptic-variational-problem` · definition — Parameter-dependent coercive elliptic variational states and objectives
- `def-parameterized-parabolic-variational-problem` · definition — Parameter-dependent parabolic variational states and objectives
- `lem-parameter-ode-flow-tangent-on-common-tube` · lemma — Parameter-dependent ODE flows have the variational tangent on a common tube
- `lem-ode-adjoint-pairing-integration-by-parts` · lemma — A tangent and adjoint pairing gives the ODE gradient boundary identity
- `thm-discrete-adjoint-gradient-recursion` · theorem — The reverse recursion is the exact gradient of a finite state-step objective
- `thm-continuous-ode-adjoint-gradient-formula` · theorem — The continuous ODE adjoint gives the parameter gradient with endpoint terms
- `lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order` · lemma — Local C1 step consistency gives tangent, adjoint and gradient order
- `lem-explicit-rk-differentiated-stages-give-local-c1-order` · lemma — Differentiated explicit RK stages give local C1 order
- `thm-discrete-continuous-gradient-error-order-p` · theorem — Discrete and continuous ODE gradients agree to order p under augmented error bounds
- `lem-implicit-rk-stage-jacobian-nonsingular-on-branch` · lemma — A contractive implicit Runge-Kutta stage branch has a nonsingular residual Jacobian
- `thm-implicit-rk-stage-parameter-sensitivity` · theorem — An implicit Runge-Kutta stage has the stated parameter sensitivity on its selected branch
- `lem-elliptic-state-map-c1-under-uniform-coercivity` · lemma — A uniformly coercive elliptic variational state is C1 in its parameter
- `thm-elliptic-adjoint-reduced-gradient` · theorem — The elliptic adjoint gives the reduced parameter gradient
- `thm-elliptic-fe-gradient-error-in-energy-norms` · theorem — Conforming elliptic finite-element reduced gradients have an energy-norm error budget
- `cor-elliptic-l2-gradient-rate-under-dual-regularity` · corollary — An elliptic reduced-gradient L2 rate follows under dual approximation
- `thm-parabolic-adjoint-gradient-sensitivity` · theorem — A parabolic adjoint gives the gradient when the state map is differentiable
- `thm-parabolic-fe-gradient-error-with-time-dependent-ritz` · theorem — Parabolic finite-element gradient errors include the time-dependent Ritz residual
- `thm-finite-time-tangent-volume-growth-from-qr` · theorem — Positive-diagonal QR factors give the exact finite-time tangent-volume change

### `discrete-continuous-and-pde-adjoint-sensitivities-examples` — Discrete continuous and pde adjoint sensitivities — Examples (8 item(s))

- `ex-4dvar-discrete-adjoint-gradient` · example — A two-observation 4DVAR objective has an exact reverse gradient
- `ex-implicit-stiff-decay-parameter-fit` · example — Backward Euler differentiates a stiff scalar decay fit on its exact branch
- `ex-elliptic-diffusion-coefficient-sensitivity` · example — A one-dimensional elliptic diffusion coefficient has the adjoint gradient
- `ex-multiple-shooting-sensitivity-jacobian` · example — A two-interval shooting residual has a block-bidiagonal sensitivity Jacobian
- `ex-qr-finite-time-volume-growth` · example — A finite QR record recovers the tangent-volume change
- `ex-tent-map-finite-time-sensitivity-growth` · example — A strict tent-map itinerary has exponential finite-time sensitivity growth
- `ex-discrete-terminal-condition-mismatch` · example — A mismatched terminal adjoint condition changes the discrete gradient
- `cex-state-error-alone-does-not-control-gradient` · counterexample — Uniform state accuracy alone does not bound parameter-gradient error

### `self-consistent-projector-iterations-and-certified-mixing` — Self consistent projector iterations and certified mixing (20 item(s))

- `lem-capped-diis-coefficient-minimizer-exists` · lemma — Capped DIIS coefficients have a unique minimum-norm least-squares selection
- `def-self-consistent-projector-response-map` · definition — The occupied-projector response map on its strict-gap domain
- `def-admissible-hermitian-density-domain` · definition — The fixed-particle admissible Hermitian density domain
- `lem-spectral-gap-persistence-and-uniform-resolvent-bound` · lemma — A spectral gap persists on a computable matrix ball with a uniform resolvent bound
- `lem-gapped-projector-map-well-defined` · lemma — A strict occupied gap defines a unique rank-r spectral projector
- `lem-projector-is-admissible-density` · lemma — Every rank-r orthogonal projector is an admissible density
- `lem-admissible-density-domain-is-closed-convex-complete` · lemma — The admissible Hermitian density domain is closed, convex, and complete
- `thm-block-projector-frechet-derivative-and-bound` · theorem — A separated block spectral projector is Frechet differentiable with a resolvent bound
- `thm-contractive-scf-convergence-and-inexact-error-bound` · theorem — A contractive self-consistent map converges and admits residual and inexact-solve bounds
- `thm-level-shift-fixed-projector-equivalence` · theorem — A level shift preserves a fixed occupied projector exactly under block ordering
- `alg-undamped-scf-with-gap-and-residual-status` · algorithm — Finite-budget undamped self-consistent projector iteration
- `alg-capped-diis-projector-proposal` · algorithm — Finite-memory capped DIIS projector proposal with fallback
- `lem-density-mixing-preserves-domain-but-not-projectors` · lemma — Density mixing preserves admissibility but need not preserve idempotence
- `thm-gapped-response-projector-lipschitz-certificate` · theorem — A common separating resolvent contour certifies a Lipschitz response map
- `cor-finite-basis-energy-model-has-c1-response` · corollary — The finite-basis projector energy model supplies a C1 Hermitian response map
- `thm-density-mixing-contracts-under-jacobian-certificate` · theorem — A uniform derivative bound certifies contraction of relaxed density mixing
- `alg-certified-scf-with-diis-safeguard` · algorithm — Finite-budget certified SCF with safeguarded DIIS and a contractive fallback
- `thm-certified-diis-error-inheritance` · theorem — Residual-certified DIIS candidates inherit the contractive SCF error budget
- `alg-relaxed-density-mixing-with-finite-budget` · algorithm — Finite-budget relaxed density-matrix mixing
- `lem-finite-budget-scf-iteration-work` · lemma — Finite-budget SCF response iterations return a status in bounded outer work

### `self-consistent-projector-iterations-and-certified-mixing-examples` — Self consistent projector iterations and certified mixing — Examples (6 item(s))

- `ex-occupied-projector-discontinuity-at-zero-gap` · example — The occupied spectral projector has no continuous extension through a zero gap
- `ex-self-consistent-projector-two-cycle-with-gap` · example — A finite-basis occupied projector map can two-cycle despite a uniform gap
- `ex-affine-contractive-response-and-residual-error` · example — An affine response map realizes the contraction and residual estimates
- `ex-density-mixture-leaves-projector-manifold` · example — A convex density mixture can be admissible without being a projector
- `ex-diis-singular-gram-fallback` · example — A reported singular DIIS Gram system triggers the baseline fallback
- `ex-additive-eigensolve-tolerance-residual-certificate` · example — An additive response-evaluation tolerance enters the fixed-point residual certificate

## Your seams

Your pages depend on another group's:

- `finite-basis-projector-energies-and-variational-electronic-structure` requires `finite-element-eigenvalue-approximation` (group ai, batch 57)
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `trust-region-and-cubic-regularization-methods` (group aa, batch 72)
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab, batch 83)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `automatic-differentiation-and-computational-graphs` (group v, batch 13)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `nonlinear-boundary-value-solvers` (group b, batch 22)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `global-ode-and-density-error` (group c, batch 28)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `parabolic-finite-element-methods` (group ai, batch 56)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `variational-crimes-and-strang-lemmas` (group aj, batch 89)
- `self-consistent-projector-iterations-and-certified-mixing` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)

Another group's pages depend on yours:

- `event-location-and-hybrid-trajectory-error` (group l) requires your `discrete-continuous-and-pde-adjoint-sensitivities`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `discrete-continuous-and-pde-adjoint-sensitivities`
- `finite-element-pde-constrained-optimization` (group ae) requires your `discrete-continuous-and-pde-adjoint-sensitivities`
- `numerical-identifiability-and-optimal-experiment-design` (group af) requires your `discrete-continuous-and-pde-adjoint-sensitivities`
- `simulation-gradient-estimation-and-simultaneous-perturbation` (group af) requires your `discrete-continuous-and-pde-adjoint-sensitivities`

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
