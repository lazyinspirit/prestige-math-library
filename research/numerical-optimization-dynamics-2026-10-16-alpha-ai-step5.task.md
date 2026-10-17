# Step 5 adjudication — group **ai**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 56, 57, 80: 3 A/B pair(s), 6 page(s), 71 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **56**: `research/numerical-optimization-dynamics-2026-10-16-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/numerical-optimization-dynamics-2026-10-16-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **80**: `research/numerical-optimization-dynamics-2026-10-16-batch-80-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 56 | `parabolic-finite-element-methods` | A | numerical-pdes-and-spatial-discretization | 2396 | `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `the-direct-method-and-euler-lagrange-equations` |
| 56 | `parabolic-finite-element-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2397 | `parabolic-finite-element-methods` |
| 57 | `finite-element-eigenvalue-approximation` | A | numerical-pdes-and-spatial-discretization | 2398 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 57 | `finite-element-eigenvalue-approximation-examples` | B | numerical-pdes-and-spatial-discretization | 2399 | `finite-element-eigenvalue-approximation` |
| 80 | `interacting-particle-mean-field-and-vortex-blob-error` | A | numerical-pdes-and-spatial-discretization | 2444 | `picard-lindelof-and-first-order-odes`, `one-step-ode-consistency-and-local-error`, `composite-quadrature-rules`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `geometric-numerical-integration` |
| 80 | `interacting-particle-mean-field-and-vortex-blob-error-examples` | B | numerical-pdes-and-spatial-discretization | 2445 | `interacting-particle-mean-field-and-vortex-blob-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `parabolic-finite-element-methods` — Parabolic finite-element methods (21 item(s))

- `def-parabolic-evolution-triple-and-energy-space` · definition — Evolution triples and the parabolic energy space
- `lem-parabolic-bochner-l2-approximate-identity` · lemma — Smooth mollifiers approximate Bochner L² functions
- `lem-parabolic-discrete-energy-identity` · lemma — The Hilbert-space discrete energy identity
- `lem-parabolic-hilbert-bnb-criterion` · lemma — The Hilbert-space Babuška–Nečas–Babuška criterion
- `alg-parabolic-backward-euler-averaged-forms` · algorithm — Backward Euler FEM with interval-averaged forms and load
- `alg-parabolic-crank-nicolson-cg1` · algorithm — Crank–Nicolson and cG(1) for an autonomous parabolic form
- `lem-parabolic-bochner-time-mollification` · lemma — Time mollification preserves the evolution-space derivative
- `lem-parabolic-measurable-form-operators-and-inverse` · lemma — Measurable actions and inverse actions of parabolic forms
- `lem-parabolic-projection-time-product-rule` · lemma — Time derivatives of fixed and differentiable comparison projections
- `lem-parabolic-weak-compactness-separable-bochner-hilbert` · lemma — Bounded sequences in a separable Hilbert space have weakly convergent subsequences
- `lem-parabolic-zero-boundary-sobolev-space-is-separable` · lemma — The zero-boundary Sobolev energy space is a separable Hilbert space
- `thm-parabolic-finite-dimensional-measurable-ode` · theorem — Finite-dimensional parabolic Galerkin ODEs with measurable coefficients
- `def-parabolic-ritz-projection` · definition — The elliptic Ritz projection for a conforming finite-element space
- `lem-parabolic-energy-pairing-and-trace` · lemma — The evolution-space energy identity and continuous H trace
- `thm-parabolic-backward-euler-error-and-reconstruction` · theorem — Backward Euler stability, first-order error for exact initial data, and reconstruction bounds
- `thm-parabolic-crank-nicolson-second-order` · theorem — Second-order Crank–Nicolson nodal error for exact initial data under H2 time regularity
- `lem-parabolic-ritz-projection-well-defined` · lemma — Existence, uniqueness, linearity, and boundedness of the Ritz projection
- `thm-parabolic-variational-wellposedness-and-energy-stability` · theorem — Well-posedness for measurable coercive parabolic forms
- `thm-parabolic-fem-semidiscrete-existence-energy` · theorem — Well-posedness and energy stability of the semidiscrete FEM system
- `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound` · theorem — Semidiscrete Ritz error splitting and energy estimate
- `cor-parabolic-semidiscrete-spatial-error-rates` · corollary — Semidiscrete parabolic energy and L2 rates from elliptic approximation

### `parabolic-finite-element-methods-examples` — Parabolic finite-element methods — Examples (3 item(s))

- `ex-parabolic-crank-nicolson-time-regularity-order-loss` · example — A solution with only H1 time regularity loses CN second order
- `ex-parabolic-heat-initial-projection-error` · example — The L2 projection and Ritz projection give different initial data
- `ex-parabolic-semidiscrete-ritz-error-identity` · example — Direct derivation of the semidiscrete Ritz residual

### `finite-element-eigenvalue-approximation` — Finite-element eigenvalue approximation (10 item(s))

- `def-eigenspace-best-approximation-gap` · definition — Best-approximation gap of a finite-dimensional eigenspace
- `thm-compact-coercive-form-spectrum-and-minmax` · theorem — Discrete spectrum and min–max principle for a compact coercive form
- `lem-finite-dimensional-galerkin-minmax` · lemma — Finite-dimensional conforming Ritz values satisfy min–max
- `lem-compact-self-adjoint-residual-controls-invariant-subspace-gap` · lemma — A residual and a spectral separation bound an invariant-subspace gap
- `thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection` · theorem — A Hermitian Ritz residual certifies spectral proximity and a gap-conditioned direction
- `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil` · proposition — Positive-definite overlap whitening preserves a generalized Ritz pencil
- `lem-conforming-energy-projection-is-best-approximation` · lemma — The conforming energy projection is the best approximation
- `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap` · lemma — The conforming Ritz matrix differs quadratically in the eigenspace gap
- `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error` · theorem — Conforming finite-element eigenvalues have a quadratic best-approximation error
- `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster` · theorem — Conforming Galerkin invariant subspaces converge across an isolated cluster

### `finite-element-eigenvalue-approximation-examples` — Finite-element eigenvalue approximation — Examples (4 item(s))

- `ex-nearly-dependent-overlap-matrix-whitening-and-conditioning` · example — A nearly dependent finite basis has an ill-conditioned overlap matrix
- `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state` · example — A broken piecewise-constant trial space can give an eigenvalue below the Dirichlet ground state
- `ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound` · example — A conforming P1 Dirichlet discretization gives a first Ritz upper bound
- `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable` · example — A repeated eigenspace can be stable while chosen eigenvectors oscillate

### `interacting-particle-mean-field-and-vortex-blob-error` — Interacting particle mean field and vortex blob error (28 item(s))

- `def-bounded-lipschitz-dual-norm-for-signed-measures` · definition — Bounded-Lipschitz dual discrepancy for finite signed measures
- `def-globally-lipschitz-mean-field-kernel` · definition — Globally Lipschitz mean-field interaction kernel
- `def-mollified-biot-savart-vortex-kernel` · definition — Smooth mollified Biot-Savart kernel
- `def-p-one-wasserstein-one` · definition — The coupling definition of the 1-Wasserstein distance
- `def-signed-split-transport-cost` · definition — Sign-preserving transport cost for finite signed measures
- `lem-weighted-continuous-path-space-is-complete` · lemma — Completeness of the weighted continuous trajectory space
- `alg-tensor-simpson-force-evaluator` · algorithm — Tensor composite Simpson force evaluator on a rectangle
- `def-characteristic-mean-field-solution` · definition — Characteristic solution of a probability mean-field equation
- `def-mean-field-and-weighted-vortex-particle-systems` · definition — Equal-probability mean-field and weighted signed vortex particle systems
- `def-signed-vorticity-characteristic-solution` · definition — Characteristic solution for a finite signed regularized vorticity
- `lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz` · lemma — The mollified Biot-Savart kernel is smooth and globally Lipschitz
- `lem-signed-bl-norm-dominated-by-split-coupling-cost` · lemma — The bounded-Lipschitz dual discrepancy is bounded by split transport cost
- `lem-w1-is-finite-on-probability-measures-with-finite-first-moment` · lemma — The coupling infimum is finite for finite-first-moment probabilities
- `def-separable-regularized-vortex-interaction-hamiltonian` · definition — Separable regularized vortex-inspired Hamiltonian comparison system
- `thm-dobrushin-w1-stability-for-characteristic-flows` · theorem — Dobrushin stability in 1-Wasserstein distance for mean-field flows
- `thm-empirical-measures-solve-mean-field-equation-exactly` · theorem — Exact weak mean-field identity for empirical particle measures
- `thm-mean-field-characteristic-flow-exists-uniquely` · theorem — Global characteristic flow for a globally Lipschitz mean-field kernel
- `thm-mean-field-characteristics-satisfy-weak-transport-identity` · theorem — Weak transport identity for characteristic mean-field solutions
- `thm-mollified-biot-savart-kernel-has-l1-consistency` · theorem — L1 consistency of the mollified Biot-Savart kernel
- `thm-signed-dobrushin-stability-with-force-defect` · theorem — Signed Dobrushin stability with bounded force defects
- `thm-signed-regularized-vorticity-characteristics-preserve-total-variation` · theorem — Characteristic existence and total-variation preservation for regularized signed vorticity
- `thm-w1-dobrushin-stability-with-force-defect` · theorem — Probability W1 stability under bounded force defects
- `thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity` · theorem — Exact weak transport identity for weighted signed vortex particles
- `lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube` · lemma — One-step Lipschitz bound for classical RK4 on an admitted tube
- `thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two` · theorem — Local geometric properties and second-order error of the separable regularized vortex-inspired leapfrog
- `thm-tensor-simpson-force-error` · theorem — Tensor composite Simpson error for a two-dimensional force integral
- `thm-rk4-global-error-for-regularized-vortex-particles` · theorem — Fourth-order global error for RK4 on a regularized vortex particle tube
- `thm-mean-field-vortex-blob-error-budget` · theorem — Mean-field vortex blob error budget with signed particles, force quadrature, and RK4

### `interacting-particle-mean-field-and-vortex-blob-error-examples` — Interacting particle mean field and vortex blob error — Examples (5 item(s))

- `ex-softened-newtonian-particles-not-collision-model` · example — Softened Newtonian particles do not specify the physical collision force
- `ex-dimension-dependent-empirical-w1-error` · example — A dimension-dependent lower bound for empirical W1 error
- `ex-mixed-sign-vorticity-needs-signed-distance` · example — A mixed-sign vorticity is not a probability for W1
- `ex-globally-lipschitz-alignment-model` · example — A globally Lipschitz alignment model with exact mean trajectory
- `ex-same-sign-smooth-vortex-blob-approximation` · example — Same-sign smooth vortex density and probability blob error budget

## Your seams

Your pages depend on another group's:

- `parabolic-finite-element-methods` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `parabolic-finite-element-methods` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `finite-element-eigenvalue-approximation` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `finite-element-eigenvalue-approximation` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `interacting-particle-mean-field-and-vortex-blob-error` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `interacting-particle-mean-field-and-vortex-blob-error` requires `composite-quadrature-rules` (group p, batch 20)
- `interacting-particle-mean-field-and-vortex-blob-error` requires `global-ode-and-density-error` (group c, batch 28)
- `interacting-particle-mean-field-and-vortex-blob-error` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `interacting-particle-mean-field-and-vortex-blob-error` requires `geometric-numerical-integration` (group g, batch 54)

Another group's pages depend on yours:

- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `interacting-particle-mean-field-and-vortex-blob-error`
- `finite-basis-projector-energies-and-variational-electronic-structure` (group ad) requires your `finite-element-eigenvalue-approximation`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `parabolic-finite-element-methods`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `parabolic-finite-element-methods`
- `finite-element-pde-constrained-optimization` (group ae) requires your `parabolic-finite-element-methods`

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
