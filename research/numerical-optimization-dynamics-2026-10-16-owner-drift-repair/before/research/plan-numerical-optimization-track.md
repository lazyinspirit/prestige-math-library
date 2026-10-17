# Numerical Optimization, Inverse Problems and Uncertainty Quantification

Status: prose scaffold under audit. Not an executable frontier or a proof-acceptance record.

This category contains 35 proposed A/B pairs. Reuse canonical published statistics and linear algebra suppliers; do not duplicate their methods. Every unmet prerequisite belongs to this four-category design. Sources remain acquisition targets unless actual reading is documented.

## Pair index

| Key | A page |
| --- | --- |
| NA-09 | `nonlinear-equations-and-newton-methods` |
| OPT5 | `inequality-kkt-duality-and-optimality-certificates` |
| RARE1 | `rare-event-importance-sampling-and-multilevel-splitting` |
| DIF1 | `numerical-differentiation-and-derivative-error-control` |
| DIF2 | `automatic-differentiation-and-computational-graphs` |
| NA-44 | `numerical-inverse-problems-and-regularization-error` |
| OPT13 | `revised-simplex-linear-programming-and-certificates` |
| OPT8 | `proximal-gradient-and-accelerated-composite-optimization` |
| INV1 | `spectral-regularization-and-parameter-choice` |
| OPT0 | `numerical-optimization-globalization-and-inexact-certificates` |
| OPT10 | `subgradient-bundle-and-derivative-free-optimization` |
| OPT15 | `coordinate-and-block-descent-methods` |
| OPT1 | `nonconvex-line-search-and-inexact-newton-methods` |
| OPT7 | `barrier-and-primal-dual-interior-point-methods` |
| OPT9 | `operator-splitting-admm-and-primal-dual-methods` |
| STO1 | `stochastic-approximation-and-stochastic-gradient-methods` |
| OPT12 | `global-optimization-and-certified-branch-and-bound` |
| OPT14 | `nonlinear-conjugate-gradient-methods` |
| OPT2 | `bfgs-and-limited-memory-quasi-newton-methods` |
| OPT3 | `trust-region-and-cubic-regularization-methods` |
| STO2 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization` |
| OPT11 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds` |
| OPT4 | `gauss-newton-and-levenberg-marquardt-methods` |
| OPT6 | `sqp-active-set-and-augmented-lagrangian-methods` |
| INV2 | `iterative-regularization-and-early-stopping` |
| PC-PATH | `minimum-energy-paths-string-neb-and-saddle-certificates` |
| PC-VAR | `finite-basis-projector-energies-and-variational-electronic-structure` |
| DIF3 | `discrete-continuous-and-pde-adjoint-sensitivities` |
| PC-SCF | `self-consistent-projector-iterations-and-certified-mixing` |
| UQ1 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq` |
| CTRL1 | `direct-transcription-and-numerical-ode-optimal-control` |
| CTRL2 | `finite-element-pde-constrained-optimization` |
| INV3 | `numerical-identifiability-and-optimal-experiment-design` |
| STO3 | `simulation-gradient-estimation-and-simultaneous-perturbation` |
| UQ2 | `global-sensitivity-anova-and-sobol-estimation` |

## NA-09 — Nonlinear equations and Newton methods

**Mathematical contract:** [controlling NA-09 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-na-09).

A: `nonlinear-equations-and-newton-methods`. B: `nonlinear-equations-and-newton-methods-examples`.

### Scope

New general nonlinear F root solver/finite-difference Jacobian bounded variants and ordinary updated-Jacobian local quadratic theorem, distinct from existing scalar objective-Hessian Newton and frozen-Jacobian contraction. Reuse actual gradient/objective Newton algorithm when F is a gradient instead of cloning it.

### Proof construction

Taylor-expand F(x_j) at the root, use a uniform local inverse-Jacobian bound and a local invariant ball to derive ||e_{j+1}||≤C||e_j||², then prove the iterate remains in that ball. For line search, prove only the stated accepted-step decrease under its assumptions; distinguish convergence of the nonlinear solve from discretization accuracy.

### Examples

scalar Newton near a simple root; double root with reduced order; a starting point outside the local basin; frozen versus updated Jacobian.

### Prerequisite interfaces

- `completeness-and-uniform-continuity` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `inverse-and-implicit-function-theorems` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `mixed-partials-taylor-and-extrema` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `picard-lindelof-and-first-order-odes` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.

## Mathematical contract appendix

Each of the 35 A-page sections below links to its controlling pair contract in the optimization audit appendix. The appendix defines terminology, procedures, failure branches, hypotheses, well-definedness arguments, and local proof obligations; its claims remain design contracts rather than proof-acceptance records.

## OPT5 — Inequality kkt duality and optimality certificates

**Mathematical contract:** [controlling OPT5 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt5).

A: `inequality-kkt-duality-and-optimality-certificates`. B: `inequality-kkt-duality-and-optimality-certificates-examples`.

### Scope

Same-frontier prerequisite owner for OPT6–10/CTRL. Define feasible/tangent/linearized cones, active constraints, LICQ/MFCQ, KKT residual, normal cone, convex dual and Slater condition. Prove finite-dimensional Farkas alternative from existing separation; KKT necessity under LICQ (including existence and uniqueness of multipliers), convex KKT sufficiency, Slater strong duality under an explicit finite-dimensional attained primal/dual contract, and second-order necessary/sufficient conditions using the critical cone. Equality-only published multipliers do not prove inequality KKT. 

### Preserved mathematical design

### OPT5: `inequality-kkt-duality-and-optimality-certificates`

Same-frontier prerequisite owner for OPT6–10/CTRL. Define feasible/tangent/linearized cones, active constraints, LICQ/MFCQ, KKT residual, normal cone, convex dual and Slater condition. Prove finite-dimensional Farkas alternative from existing separation; KKT necessity under LICQ (including existence and uniqueness of multipliers), convex KKT sufficiency, Slater strong duality under an explicit finite-dimensional attained primal/dual contract, and second-order necessary/sufficient conditions using the critical cone. Equality-only published multipliers do not prove inequality KKT. Sources: Nocedal–Wright Ch. 12; Boyd–Vandenberghe §§5.2–5.5. B: active-set quadratic, failed constraint qualification, stationary saddle, duality gap certificate. All Farkas/cone/duality intermediates authored here before numerical consumers; no missing prerequisite deferred.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

active-set quadratic, failed constraint qualification, stationary saddle, duality gap certificate. All Farkas/cone/duality intermediates authored here before numerical consumers; no missing prerequisite deferred.

### Prerequisite interfaces

- `constant-rank-submersions-and-regular-level-sets` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `locally-convex-spaces-and-continuous-separation` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## RARE1 — Rare event importance sampling and multilevel splitting

**Mathematical contract:** [controlling RARE1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-rare1).

A: `rare-event-importance-sampling-and-multilevel-splitting`. B: `rare-event-importance-sampling-and-multilevel-splitting-examples`.

### Scope

Reuse published ordinary/SN importance sampling and its second-moment theorem. Define relative error, bounded relative error/logarithmic efficiency as probability p→0 and compare variance per work; derive zero-variance density `q*=1_A p_density/P(A)` as a formal unattainable benchmark. For Gaussian tail exponential tilting compute second moment asymptotics and prove logarithmic efficiency with the chosen tilt; do not equate logarithmic efficiency with bounded relative error. Define adaptive cross-entropy proposal fitting with independent pilot/production: unbiased production estimate follows conditionally from published IS once support/integrability hold, whereas proposal optimization success is not assumed. Define fixed-level independent splitting with an explicit branching/mutation kernel preserving conditional levels; prove unbiased product/count estimator by conditional expectation and variance/work recurrence under declared independence. Adaptive splitting/SMC requires its own conditional unbiasedness proof and is not inferred from multiplying empirical conditional probabilities. 

### Preserved mathematical design

### RARE1: `rare-event-importance-sampling-and-multilevel-splitting`

Reuse published ordinary/SN importance sampling and its second-moment theorem. Define relative error, bounded relative error/logarithmic efficiency as probability p→0 and compare variance per work; derive zero-variance density `q*=1_A p_density/P(A)` as a formal unattainable benchmark. For Gaussian tail exponential tilting compute second moment asymptotics and prove logarithmic efficiency with the chosen tilt; do not equate logarithmic efficiency with bounded relative error. Define adaptive cross-entropy proposal fitting with independent pilot/production: unbiased production estimate follows conditionally from published IS once support/integrability hold, whereas proposal optimization success is not assumed. Define fixed-level independent splitting with an explicit branching/mutation kernel preserving conditional levels; prove unbiased product/count estimator by conditional expectation and variance/work recurrence under declared independence. Adaptive splitting/SMC requires its own conditional unbiasedness proof and is not inferred from multiplying empirical conditional probabilities. Sources: Asmussen–Glynn, *Stochastic Simulation*, rare-event Chs. V/VI; Bucklew, *Introduction to Rare Event Simulation*, exponential tilting chapters; Cérou et al. (2012), splitting theory as source target. B: Gaussian barrier, chemical extinction/queue overflow, pilot misses support, splitting dependence. Dependencies existing BCS IS/SMC and NA39/45; owner supplies Gaussian tail bounds/asymptotics and branching genealogy lemmas locally.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

Gaussian barrier, chemical extinction/queue overflow, pilot misses support, splitting dependence.

### Prerequisite interfaces

- `importance-sampling-and-weight-diagnostics` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `feynman-kac-particle-filters` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `smc-clts-error-and-degeneracy` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `iid-monte-carlo-integration-and-error` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "design": {
      "key": "XA-01",
      "integrated_owner": "RARE1",
      "new_pair": false,
      "existing_page": "feynman-kac-particle-filters",
      "canonical_reuse": [
        "alg-sequential-importance-resampling",
        "alg-multinomial-and-residual-offspring-resampling",
        "thm-sequential-particle-estimator-is-unbiased",
        "lem-feynman-kac-path-measures-satisfy-forward-recursion"
      ],
      "missing_prerequisites_owner": "RARE1",
      "scope_and_proof_route": "## XA-01 — extend canonical rare-event/SMC guarantees; do not duplicate algorithms\n\n**Existing home:** `library/bayesian-computational-statistics/feynman-kac-particle-filters.md` and its examples. Existing `alg-sequential-importance-resampling`, `alg-multinomial-and-residual-offspring-resampling`, `thm-sequential-particle-estimator-is-unbiased`, `lem-feynman-kac-path-measures-satisfy-forward-recursion` retain their homes. Existing IS unbiasedness, finite variance and CLT are already covered; no new IS pair.\n\n**New delta.** Integration owner: optimization/statistics RARE1 absorbs this amendment; no separate pair or competing procedure. Define a finite sequence of nested events/levels with exact stopped transition kernels and potentials 0≤G≤1. Prove measurability of finite-budget stopped kernels (or a declared exact-hitting oracle), connection of their Feynman–Kac normalizer to the target event probability, and error of any time-discretized crossing approximation separately. Use existing SMC product-normalizer estimator; its unbiasedness is reused only under all positive-prefix-normalizer/full-resampling hypotheses. Then prove a finite-horizon L2 bound with explicit dependence on number of levels, prefix probabilities, bounded normalized potentials and kernel mixing. A safe first contract is an O(1/N) **absolute** mean-square bound for a fixed number of bounded-potential levels, proved by conditional variance and induction. Relative error divides by the squared rare probability and may be huge. An efficiency claim uniform in rarity needs an additional theorem and actual lower bounds/minorization; not “splitting reduces variance” by name.\n\n**Missing local suppliers / owner.** Local to this amendment: stopped-kernel construction and cemetery handling; Feynman–Kac event identity; conditional empirical variance identity for the actual resampling procedure; finite-level martingale/variance recursion; bias from approximate crossing/hitting kernels. Existing finite-horizon SMC unbiasedness does not by itself imply finite-particle accuracy or uniform-in-time stability (the canonical page explicitly says so). No adaptive-level unbiasedness without its separate order-statistic/martingale proof. Root must assign this amendment to the statistics guarantee owner and check affected consumers if an existing statement changes; prefer new theorem carriers without altering original definitions.\n\n**Examples.** Reliability chain crossing; extinction estimate; all particles die (zero estimate, not algorithmic proof of zero probability); an IS proposal with infinite weighted second moment; same budget splitting with worse relative error. **Sources:** Cérou–Del Moral–Furon–Guyader, “Sequential Monte Carlo for rare event estimation,” Statistics and Computing 22 (2012), pp. 795–808, DOI `10.1007/s11222-011-9231-6`; Del Moral, *Feynman–Kac Formulae* (2004), particle variance/martingale chapters, DOI `10.1007/978-1-4684-9393-1`. Exact source hypotheses are intake obligations.\n",
      "source_urls": [
        "https://doi.org/10.1007/s11222-011-9231-6",
        "https://doi.org/10.1007/978-1-4684-9393-1"
      ]
    },
    "reason": "Reuse SMC/Feynman-Kac algorithms, new efficiency/stability only in rare-event extension."
  }
]


## DIF1 — Numerical differentiation and derivative error control

**Mathematical contract:** [controlling DIF1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-dif1).

A: `numerical-differentiation-and-derivative-error-control`. B: `numerical-differentiation-and-derivative-error-control-examples`.

### Scope

Prove forward/central finite differences O(h)/O(h²) with bounded second/third derivatives; for inexact function values bounded by delta derive truncation+2delta/h bounds and balance h. Define Richardson extrapolation with an actual asymptotic remainder; complex-step derivative `Im f(x+ih)/h` has O(h²) error only for holomorphic real-axis-real f, with component-evaluation errors retained. Define sparse Jacobian compression via structural graph coloring and prove recovery when row supports do not collide. Include Jacobian-vector/Hessian-vector difference products and noise limitations. 

### Preserved mathematical design

### DIF1: `numerical-differentiation-and-derivative-error-control`

Prove forward/central finite differences O(h)/O(h²) with bounded second/third derivatives; for inexact function values bounded by delta derive truncation+2delta/h bounds and balance h. Define Richardson extrapolation with an actual asymptotic remainder; complex-step derivative `Im f(x+ih)/h` has O(h²) error only for holomorphic real-axis-real f, with component-evaluation errors retained. Define sparse Jacobian compression via structural graph coloring and prove recovery when row supports do not collide. Include Jacobian-vector/Hessian-vector difference products and noise limitations. Sources: Higham, *Accuracy and Stability of Numerical Algorithms*, numerical-differentiation discussion; Fornberg (1988), finite-difference weights; Squire–Trapp (1998), complex-step method; Coleman–Moré (1983), sparse Jacobian estimation. B: cancellation-optimal h; abs/nonholomorphic complex-step failure; reaction-network sparse coloring. Dependencies NA01/09, published Taylor and polynomial interpolation; no AD prerequisite.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

cancellation-optimal h; abs/nonholomorphic complex-step failure; reaction-network sparse coloring.

### Prerequisite interfaces

- `matrix-norms-condition-numbers-and-numerical-stability` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-10` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## DIF2 — Automatic differentiation and computational graphs

**Mathematical contract:** [controlling DIF2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-dif2).

A: `automatic-differentiation-and-computational-graphs`. B: `automatic-differentiation-and-computational-graphs-examples`.

### Scope

Define a finite straight-line differentiable scalar/vector program, primal tape, forward tangents, reverse cotangents, elementary derivative primitives and Hessian-vector products via nested modes. Prove forward and reverse correctness by topological induction/chain rule; reverse gradient work bounded by a fixed multiple of primal work for the declared bounded-arity primitive set, storage O(tape), excluding opaque solver calls. Prove checkpoint replay invariance and a concrete binomial checkpoint schedule cost/storage bound. Explain branchwise derivatives, nondifferentiable branches and floating-point program versus real-program derivative. Implicit differentiation requires nonsingular Jacobian, proved from the existing implicit function theorem; stopping an iterative solver and differentiating iterations gives a different target with a quantified residual sensitivity. 

### Preserved mathematical design

### DIF2: `automatic-differentiation-and-computational-graphs`

Define a finite straight-line differentiable scalar/vector program, primal tape, forward tangents, reverse cotangents, elementary derivative primitives and Hessian-vector products via nested modes. Prove forward and reverse correctness by topological induction/chain rule; reverse gradient work bounded by a fixed multiple of primal work for the declared bounded-arity primitive set, storage O(tape), excluding opaque solver calls. Prove checkpoint replay invariance and a concrete binomial checkpoint schedule cost/storage bound. Explain branchwise derivatives, nondifferentiable branches and floating-point program versus real-program derivative. Implicit differentiation requires nonsingular Jacobian, proved from the existing implicit function theorem; stopping an iterative solver and differentiating iterations gives a different target with a quantified residual sensitivity. Sources: Griewank–Walther, *Evaluating Derivatives*, 2e Chs. 3–4 and checkpointing chapters; Baur–Strassen (1983), arithmetic circuit derivative complexity. B: small shared-expression graph; reverse ODE-step tape; implicit linear solve adjoint. Dependencies published multivariable chain/implicit function rules, NA02 and DIF1 for checking, not for correctness.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

small shared-expression graph; reverse ODE-step tape; implicit linear solve adjoint.

### Prerequisite interfaces

- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `the-total-derivative` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## NA-44 — Numerical inverse problems and regularization error

**Mathematical contract:** [controlling NA-44 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-na-44).

A: `numerical-inverse-problems-and-regularization-error`. B: `numerical-inverse-problems-and-regularization-error-examples`.

### Scope

Only bias/data-noise/truncation decomposition and operator-discretization residual propagated before inversion, plus separation of iterative stopping/roundoff. Existing SVD/pseudoinverse/Tikhonov/truncated filters and regularized minimizer remain canonical.

### Proof construction

Substitute the data model and distribute A^#_λ; bound each term only under its own operator/condition assumptions. For an integral-operator discretization, retain the residual dropped by quadrature/collocation before the inverse step. Parameter-choice heuristics are not universal regularization theorems.

### Examples

ill-conditioned inverse with noise amplification; Tikhonov bias/noise tradeoff; discretization error preceding matrix inversion.

### Prerequisite interfaces

- `matrix-norms-condition-numbers-and-numerical-stability` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `the-spectral-theorem-and-singular-value-decomposition` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `direct-matrix-factorisations-lu-cholesky-and-qr` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.

### Approved scope amendments

[
  {
    "original_pair": "NA-45",
    "design": {
      "pair": "NA-45",
      "original_a_page": "error-budgets-for-computational-inference",
      "original_b_page": "error-budgets-for-computational-inference-examples",
      "classification": "extend-existing",
      "page_disposition": "absorb normed ledger delta into another numerical-guarantee extension; route scalar accounting canonically",
      "published_context": [
        {
          "id": "def-statistical-and-computational-error-ledger",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting",
          "item_status": "published",
          "path": "items/def-statistical-and-computational-error-ledger.md"
        },
        {
          "id": "thm-pathwise-error-ledger-decomposition",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting",
          "item_status": "published",
          "path": "items/thm-pathwise-error-ledger-decomposition.md"
        },
        {
          "id": "thm-error-ledger-mse-covariance-identity",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting",
          "item_status": "published",
          "path": "items/thm-error-ledger-mse-covariance-identity.md"
        },
        {
          "id": "thm-independent-replicate-variance-estimator",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting",
          "item_status": "published",
          "path": "items/thm-independent-replicate-variance-estimator.md"
        },
        {
          "id": "ex-euler-discretization-bias-and-path-variance",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting-examples",
          "item_status": "published",
          "path": "items/ex-euler-discretization-bias-and-path-variance.md"
        },
        {
          "id": "ex-dot-product-roundoff-and-conditioning",
          "canonical_page": "bayesian-computational-statistics/statistical-and-computational-error-accounting-examples",
          "item_status": "published",
          "path": "items/ex-dot-product-roundoff-and-conditioning.md"
        }
      ],
      "exact_incremental_obligation": "Only common normed-space (rather than existing scalar) reference-chain/Minkowski extension and genuinely new quadrature/ODE/algebraic/inverse instances. Scalar ledger/covariance/replicate formulas already published. Prefer absorb this small delta into numerical-guarantee/inverse-error extension and use reading route here, no cloned ledger definition.",
      "original_scope_preserved": "Define a target-to-computation path for an integral, likelihood, or SDE expectation and prove a pathwise triangle-inequality decomposition into deterministic quadrature/discretization, algebraic solve/optimization residual, finite-precision, Monte Carlo/randomization, approximation, data-sampling, and model error where each term is defined. State that some terms may be random and need their own mode (pathwise, in expectation, or probability). Root-sum-square requires covariance/independence premises. A solver rate that vanishes under refinement does not remove a fixed model/score bias. This page supplies numerical bookkeeping, not posterior calibration or inferential coverage.",
      "binding_contract_completion": "Pick an actual ordered chain of intermediate targets in a common normed space; label every difference once so model/data/approximation terms do not overlap. The triangle bound is pathwise; L²/RMSE follows by Minkowski, whereas a squared-error sum requires orthogonality/covariance hypotheses. NA-43 trial-domain restrictions, NA-36 time-dependent residual restrictions and P-NUM/SDE assumptions propagate to the matching numerical terms only.",
      "approval": "Planning evidence only, no mathematical acceptance; preserve every original sound clause via actual canonical coverage or explicit delta.",
      "current_canonical_planned_a_page": "error-budgets-for-computational-inference",
      "current_canonical_planned_b_page": "error-budgets-for-computational-inference-examples",
      "new_delta_owner": "numerical-analysis/numerical-inverse-problems-and-regularization-error"
    },
    "full_original_design": {
      "pair": "NA-45",
      "source": "research/plan-numerical-analysis-track.md",
      "line": 636,
      "approved_section_verbatim": "### NA-45 — Error budgets for computational inference\n\n**Pages:** error-budgets-for-computational-inference / error-budgets-for-computational-inference-examples.\n\n**Scope:** Define a target-to-computation path for an integral, likelihood, or SDE expectation and prove a pathwise triangle-inequality decomposition into deterministic quadrature/discretization, algebraic solve/optimization residual, finite-precision, Monte Carlo/randomization, approximation, data-sampling, and model error where each term is defined. State that some terms may be random and need their own mode (pathwise, in expectation, or probability). Root-sum-square requires covariance/independence premises. A solver rate that vanishes under refinement does not remove a fixed model/score bias. This page supplies numerical bookkeeping, not posterior calibration or inferential coverage.\n\n**Proof route:** Insert intermediate exact targets and apply the triangle inequality along the computation path. For randomized terms, derive a variance sum only after proving centering and cross-covariance conditions; keep deterministic truncation/conditioning terms separate. Reuse P-NUM-ODE/SDE only for their exact solver contracts and do not infer model correctness.\n\n**Examples:** quadrature plus optimizer residual in a likelihood normalizer; MC standard error shrinking while SDE time-discretization bias remains; numerical refinement with a nonzero learned-model bias.\n\n**Requires:** NA-01, NA-12, NA-13, NA-14, NA-39, NA-40, NA-41, NA-42, NA-43, and NA-44; independent planned P-NUM-ODE-01/02 and P-NUM-SDE-01/02 only for the matching solver terms.\n\n**Sources:** Owen, Simple Monte Carlo Ch. 2 §§2.1–2.3 and 2.9, printed pp. 15–21 and 35–36 / PDF pp. 16–22 and 36–37, selected sections read: https://artowen.su.domains/mc/Ch-intro.pdf; Practical QMC Chs. 15 and 17, complete main text/notes/exercises read at PDF pp. 11–72 and 103–160: https://artowen.su.domains/mc/practicalqmc.pdf; Giles, full §3 Theorem 3.1 and proof, PDF pp. 1–11: https://people.maths.ox.ac.uk/gilesm/files/OPRE_2008.pdf; Higham–Mao–Stuart, journal pp. 1041–1056 / PDF pp. 1–16 read, later pp. 1057–1063 unread: https://authors.library.caltech.edu/records/1wrtf-vyz04/files/s0036142901389530.pdf; Boyd–Vandenberghe §§9.2, 9.3.1 and 9.5.1–9.5.3 read at physical PDF pp. 477–483 and 498–506: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf; Hansen, Ch. 4 all 29 slides, Ch. 5 all 27 slides, and Ch. 3 pp. 1–6 read: https://www2.imm.dtu.dk/~pcha/DIP/. Exact proof limits are in statistics/sources.json. The triangle decomposition is proved locally from the norm inequality; it makes no inferential coverage claim.\n\n",
      "contract_completion": "Pick an actual ordered chain of intermediate targets in a common normed space; label every difference once so model/data/approximation terms do not overlap. The triangle bound is pathwise; L²/RMSE follows by Minkowski, whereas a squared-error sum requires orthogonality/covariance hypotheses. NA-43 trial-domain restrictions, NA-36 time-dependent residual restrictions and P-NUM/SDE assumptions propagate to the matching numerical terms only.",
      "mapped_requires": [
        "floating-point-arithmetic-and-error-propagation",
        "composite-quadrature-rules",
        "gaussian-quadrature",
        "adaptive-quadrature-and-error-indicators",
        "monte-carlo-integration-and-sampling-error",
        "quasi-monte-carlo-and-discrepancy-bounds",
        "randomized-quasi-monte-carlo",
        "multilevel-monte-carlo",
        "numerical-optimization-for-statistical-computation",
        "numerical-inverse-problems-and-regularization-error",
        "one-step-ode-consistency-and-local-error",
        "global-ode-and-density-error",
        "euler-maruyama-scheme-and-conditions",
        "euler-maruyama-convergence"
      ],
      "requires_original": "NA-01, NA-12, NA-13, NA-14, NA-39, NA-40, NA-41, NA-42, NA-43, and NA-44; independent planned P-NUM-ODE-01/02 and P-NUM-SDE-01/02 only for the matching solver terms."
    },
    "reason": "Existing scalar ledger canonical; new normed-chain/Minkowski and numerical instances locally in inverse/error-transport extension."
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-44",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## OPT13 — Revised simplex linear programming and certificates

**Mathematical contract:** [controlling OPT13 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt13).

A: `revised-simplex-linear-programming-and-certificates`. B: `revised-simplex-linear-programming-and-certificates-examples`.

### Scope

For finite LP min cᵀx, Ax=b, x≥0, with declared full-row-rank A (rank preprocessing explicitly supplied), define basis B, basic solution, reduced costs, primal revised simplex pricing/direction/ratio/pivot and dual revised simplex with dual-feasible basis. Define Phase I artificial-variable construction, its optimum-zero feasible-basis extraction including redundant-row removal, and infeasibility certificate when positive optimum. Use canonical NA02 LU/QR updates with recomputation/residual checks rather than a second factorization algorithm. Prove basis feasibility/dual feasibility, objective change, optimality when reduced costs≥0, unboundedness ray when a negative reduced cost has no blocking row, and dual/Farkas infeasibility certificates. Degenerate pivots can have zero decrease; prove Bland least-index entering/leaving rule prevents basis cycling and gives finite termination in exact arithmetic over finitely many bases; ordinary most-negative reduced cost can cycle. Dual simplex has its separate feasibility/optimality invariant and ratio rule, with anti-cycling or finite-budget status. Finite precision returns verified primal/dual residuals and a gap bound only under the retained scale/error assumptions; numerical near-zero is not exact infeasibility. No polynomial-time claim. Proof: basis algebra, complementary slackness from OPT5, Farkas for Phase I, combinatorial Bland contradiction on a presumed cycle. 

### Preserved mathematical design

### OPT13: `revised-simplex-linear-programming-and-certificates`

For finite LP min cᵀx, Ax=b, x≥0, with declared full-row-rank A (rank preprocessing explicitly supplied), define basis B, basic solution, reduced costs, primal revised simplex pricing/direction/ratio/pivot and dual revised simplex with dual-feasible basis. Define Phase I artificial-variable construction, its optimum-zero feasible-basis extraction including redundant-row removal, and infeasibility certificate when positive optimum. Use canonical NA02 LU/QR updates with recomputation/residual checks rather than a second factorization algorithm. Prove basis feasibility/dual feasibility, objective change, optimality when reduced costs≥0, unboundedness ray when a negative reduced cost has no blocking row, and dual/Farkas infeasibility certificates. Degenerate pivots can have zero decrease; prove Bland least-index entering/leaving rule prevents basis cycling and gives finite termination in exact arithmetic over finitely many bases; ordinary most-negative reduced cost can cycle. Dual simplex has its separate feasibility/optimality invariant and ratio rule, with anti-cycling or finite-budget status. Finite precision returns verified primal/dual residuals and a gap bound only under the retained scale/error assumptions; numerical near-zero is not exact infeasibility. No polynomial-time claim. Proof: basis algebra, complementary slackness from OPT5, Farkas for Phase I, combinatorial Bland contradiction on a presumed cycle. Sources: Bland (1977), New Finite Pivoting Rules for the Simplex Method, https://doi.org/10.1287/moor.2.2.103 ; Bertsimas–Tsitsiklis, Introduction to Linear Optimization, Chs. 2–4 (basis/simplex/duality), https://athenasc.com/linoptbook.html . B: small LP primal/dual trace, degenerate cycling example broken by Bland, unbounded ray, infeasible Phase I, ill-conditioned basis residual. Dependencies OPT5, NA02/03 and canonical finite-dimensional rank/elimination. Owner OPT13 authors basis/polyhedron extreme-point equivalence needed for existence of an optimal basis, Phase I extraction and Bland proof before algorithm convergence. This is genuinely-new method coverage, separate from interior-point OPT7.



### Proof construction

Proof: basis algebra, complementary slackness from OPT5, Farkas for Phase I, combinatorial Bland contradiction on a presumed cycle.

### Examples

small LP primal/dual trace, degenerate cycling example broken by Bland, unbounded ray, infeasible Phase I, ill-conditioned basis residual.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-03` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT8 — Proximal gradient and accelerated composite optimization

**Mathematical contract:** [controlling OPT8 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt8).

A: `proximal-gradient-and-accelerated-composite-optimization`. B: `proximal-gradient-and-accelerated-composite-optimization-examples`.

### Scope

For proper closed convex g and smooth convex L-gradient-Lipschitz f, define prox, proximal-gradient mapping, projected gradient and FISTA (exact update/momentum and restart rule). Prove prox existence/uniqueness, subgradient resolvent characterization and firm nonexpansiveness from published projection/subgradient foundations. Prove O(1/k) proximal gradient and O(1/k²) FISTA objective bounds; strong convexity gives stated linear/restarted rate; inexact prox requires summability/weighted error conditions proved in the recurrence. Include soft thresholding; block coordinate descent and its qualified convergence are owned atomically by OPT15. 

### Preserved mathematical design

### OPT8: `proximal-gradient-and-accelerated-composite-optimization`

For proper closed convex g and smooth convex L-gradient-Lipschitz f, define prox, proximal-gradient mapping, projected gradient and FISTA (exact update/momentum and restart rule). Prove prox existence/uniqueness, subgradient resolvent characterization and firm nonexpansiveness from published projection/subgradient foundations. Prove O(1/k) proximal gradient and O(1/k²) FISTA objective bounds; strong convexity gives stated linear/restarted rate; inexact prox requires summability/weighted error conditions proved in the recurrence. Include soft thresholding; block coordinate descent and its qualified convergence are owned atomically by OPT15. Sources: Beck–Teboulle (2009), Theorems 3.1/4.4; Parikh–Boyd, *Proximal Algorithms* §§3–4; Beck, *First-Order Methods in Optimization*, coordinate descent chapters. B: lasso, TV denoising prox, projection onto constraints, acceleration oscillations. Dependencies OPT5, existing subgradients; owner supplies three-point/descent/estimate-sequence lemmas.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

lasso, TV denoising prox, projection onto constraints, acceleration oscillations.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `convex-and-semicontinuous-functions-on-rn` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `constrained-variational-problems-and-variational-inequalities` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## INV1 — Spectral regularization and parameter choice

**Mathematical contract:** [controlling INV1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-inv1).

A: `spectral-regularization-and-parameter-choice`. B: `spectral-regularization-and-parameter-choice-examples`.

### Scope

Extend NA44 without replacing it: bounded compact A between Hilbert spaces; exact y=Ax† with x† perpendicular ker A, data ||y_delta-y||≤delta. Define spectral-filter qualification. Prove Tikhonov noise bound delta/(2 sqrt(lambda)) and bias convergence, hence convergence when lambda→0 and delta/sqrt(lambda)→0. Under source `x†=(A*A)^nu w`, 0<nu≤1, ||w||≤R, prove bias O(R lambda^nu), balanced lambda asymptotics and norm rate O(delta^(2nu/(2nu+1))) with R factors, noting Tikhonov saturation. Prove Morozov discrepancy existence/selection and convergence for tau>1 with stated nonzero-data/range assumptions and an exact residual solver; finite matrix fixed rank alone is not an infinite-dimensional regularization theorem. Define GCV/L-curve as finite algorithms, derive linear-smoother GCV expression, and explicitly avoid universal optimality. Operator discretization error eta must enter before inversion and parameter/stopping coupling. 

### Preserved mathematical design

### INV1: `spectral-regularization-and-parameter-choice`

Extend NA44 without replacing it: bounded compact A between Hilbert spaces; exact y=Ax† with x† perpendicular ker A, data ||y_delta-y||≤delta. Define spectral-filter qualification. Prove Tikhonov noise bound delta/(2 sqrt(lambda)) and bias convergence, hence convergence when lambda→0 and delta/sqrt(lambda)→0. Under source `x†=(A*A)^nu w`, 0<nu≤1, ||w||≤R, prove bias O(R lambda^nu), balanced lambda asymptotics and norm rate O(delta^(2nu/(2nu+1))) with R factors, noting Tikhonov saturation. Prove Morozov discrepancy existence/selection and convergence for tau>1 with stated nonzero-data/range assumptions and an exact residual solver; finite matrix fixed rank alone is not an infinite-dimensional regularization theorem. Define GCV/L-curve as finite algorithms, derive linear-smoother GCV expression, and explicitly avoid universal optimality. Operator discretization error eta must enter before inversion and parameter/stopping coupling. Sources: Engl–Hanke–Neubauer, *Regularization of Inverse Problems*, Chs. 4–5; Hansen, *Rank-Deficient and Discrete Ill-Posed Problems*, parameter-choice chapters. B: compact diagonal singular spectrum, discrepancy noise level misspecification, GCV failure. Dependencies NA44, published compact self-adjoint spectral theorem; owner supplies scalar filter bounds and spectral calculus interface if absent.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

compact diagonal singular spectrum, discrepancy noise level misspecification, GCV failure.

### Prerequisite interfaces

- `NA-44` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT0 — Numerical optimization globalization and inexact certificates

**Mathematical contract:** [controlling OPT0 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt0).

A: `numerical-optimization-globalization-and-inexact-certificates`. B: `numerical-optimization-globalization-and-inexact-certificates-examples`.

### Scope

This is the coherent NA43 numerical-guarantee extension, not a second introduction to GD/Newton. Use canonical `alg-gradient-descent`, `alg-damped-newton`, `lem-armijo-backtracking-terminates-for-strict-descent-directions`, `thm-gradient-descent-rate-under-strong-convexity-and-smoothness`, and `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`.

For C² f on an open convex domain with an attained interior minimum, initial compact sublevel set and mI≤H≤MI on a convex neighborhood containing every trial segment, prove exact-line-search objective contraction 1−m/M; define this ideal oracle separately and prove attainment on the ray. For canonical Armijo with 0<a<1/2, 0<b<1, initial t=1, prove accepted `t>=min{1,2b(1-a)/M}` and gap factor `1-2am min{1,2b(1-a)/M}`. With Lipschitz Hessian prove finite damped phase, eventual unit steps and local quadratic Newton by connecting the canonical algorithm to its existing local theorem. Prove `||x_tilde-x*|| <= (eta+delta)/mu` from true/computed gradient discrepancy delta and computed residual eta under global/domain strong convexity. Inexact objective/gradient bounds are hypotheses or separately proved numerical errors, never inferred from a software stopping flag. Proof routes and Boyd–Vandenberghe source locators are exactly those in the original NA43 approved design (§§9.2, 9.3.1, 9.5.1–9.5.3), with numerical certificates/finite-loop statements distinguished. B: preserve all original NA43 examples; add approximate-gradient residual and inner quadrature error. Prerequisites NA09, existing convex Hessian/Taylor suppliers, DIF1 only if a computed finite-difference derivative is instantiated.

### Preserved mathematical design

### OPT0: `numerical-optimization-globalization-and-inexact-certificates`

This is the coherent NA43 numerical-guarantee extension, not a second introduction to GD/Newton. Use canonical `alg-gradient-descent`, `alg-damped-newton`, `lem-armijo-backtracking-terminates-for-strict-descent-directions`, `thm-gradient-descent-rate-under-strong-convexity-and-smoothness`, and `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`.

For C² f on an open convex domain with an attained interior minimum, initial compact sublevel set and mI≤H≤MI on a convex neighborhood containing every trial segment, prove exact-line-search objective contraction 1−m/M; define this ideal oracle separately and prove attainment on the ray. For canonical Armijo with 0<a<1/2, 0<b<1, initial t=1, prove accepted `t>=min{1,2b(1-a)/M}` and gap factor `1-2am min{1,2b(1-a)/M}`. With Lipschitz Hessian prove finite damped phase, eventual unit steps and local quadratic Newton by connecting the canonical algorithm to its existing local theorem. Prove `||x_tilde-x*|| <= (eta+delta)/mu` from true/computed gradient discrepancy delta and computed residual eta under global/domain strong convexity. Inexact objective/gradient bounds are hypotheses or separately proved numerical errors, never inferred from a software stopping flag. Proof routes and Boyd–Vandenberghe source locators are exactly those in the original NA43 approved design (§§9.2, 9.3.1, 9.5.1–9.5.3), with numerical certificates/finite-loop statements distinguished. B: preserve all original NA43 examples; add approximate-gradient residual and inner quadrature error. Prerequisites NA09, existing convex Hessian/Taylor suppliers, DIF1 only if a computed finite-difference derivative is instantiated.



### Proof construction

Proof routes and Boyd–Vandenberghe source locators are exactly those in the original NA43 approved design (§§9.2, 9.3.1, 9.5.1–9.5.3), with numerical certificates/finite-loop statements distinguished.

### Examples

preserve all original NA43 examples; add approximate-gradient residual and inner quadrature error. Prerequisites NA09, existing convex Hessian/Taylor suppliers, DIF1 only if a computed finite-difference derivative is instantiated.

### Prerequisite interfaces

- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `DIF1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `convex-and-semicontinuous-functions-on-rn` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT10 — Subgradient bundle and derivative free optimization

**Mathematical contract:** [controlling OPT10 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt10).

A: `subgradient-bundle-and-derivative-free-optimization`. B: `subgradient-bundle-and-derivative-free-optimization-examples`.

### Scope

Define projected subgradient, cutting-plane/proximal bundle serious/null steps, direct search with positive-spanning polling sets, and finite-budget Nelder–Mead as a procedure with explicit lack of generic convergence guarantee. Prove best/averaged objective bound `(R²+G² sum alpha_k²)/(2 sum alpha_k)` for convex G-Lipschitz objectives on bounded distance sets; fixed alpha O(1/sqrt(k)) schedule. Prove stationary accumulation for deterministic smooth direct search with forcing function, shrinking mesh and uniform positive-spanning angle, bounded sublevel set and Lipschitz gradient. Bundle convergence requires its stated aggregate-model and acceptance assumptions, supplied locally; do not infer it from subgradient descent. 

### Preserved mathematical design

### OPT10: `subgradient-bundle-and-derivative-free-optimization`

Define projected subgradient, cutting-plane/proximal bundle serious/null steps, direct search with positive-spanning polling sets, and finite-budget Nelder–Mead as a procedure with explicit lack of generic convergence guarantee. Prove best/averaged objective bound `(R²+G² sum alpha_k²)/(2 sum alpha_k)` for convex G-Lipschitz objectives on bounded distance sets; fixed alpha O(1/sqrt(k)) schedule. Prove stationary accumulation for deterministic smooth direct search with forcing function, shrinking mesh and uniform positive-spanning angle, bounded sublevel set and Lipschitz gradient. Bundle convergence requires its stated aggregate-model and acceptance assumptions, supplied locally; do not infer it from subgradient descent. Sources: Shor, *Minimization Methods for Non-Differentiable Functions*, subgradient chapters; Kiwiel (1990), proximal bundle convergence; Conn–Scheinberg–Vicente (2009), direct-search chapters. B: nonsmooth max-affine objective, black-box simulator fit, Nelder–Mead stagnation. Dependencies OPT5/8, NA01. This pair can be split at integration if proof load requires; no method is dropped.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

nonsmooth max-affine objective, black-box simulator fit, Nelder–Mead stagnation.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `matrix-norms-condition-numbers-and-numerical-stability` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT15 — Coordinate and block descent methods

**Mathematical contract:** [controlling OPT15 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt15).

A: `coordinate-and-block-descent-methods`. B: `coordinate-and-block-descent-methods-examples`.

### Scope

Define cyclic exact coordinate/block minimization, randomized coordinate gradient/proximal updates with independent uniform block sampling, separable nonsmooth g, per-block Lipschitz constants and finite inner solve tolerance. For smooth convex f with L_i-coordinate Lipschitz derivatives, a nonempty minimizer set, bounded initial sublevel radius R and a common Lmax, prove expected objective O(n Lmax R²/k) for random coordinate gradient; under global mu-strong convexity prove expected gap contraction 1−mu/(n Lmax) for step 1/Lmax. Importance sampling uses its separately proved probability/step relation rather than inheriting uniform constants. Cyclic exact block descent: under compact sublevel, continuously differentiable convex f plus proper closed convex separable g, and unique continuous block minimizers (or a proved uniformly strongly convex block proximal surrogate), prove every accumulation point is coordinatewise stationary; separability yields full convex stationarity/global optimum; uniqueness of global minimizer gives iterate convergence. Do not infer stationary convergence for arbitrary nonconvex/nonseparable nonsmooth cyclic updates; give a cycling/failure caveat. Derive lasso coordinate soft threshold with zero-column rule, reuse canonical lasso estimator/minimizer and orthogonal soft-threshold example, and distinguish convergence of fitted values/objectives from coefficient uniqueness. Proof: per-coordinate descent, conditional sampling expectation and telescoping; cyclic compactness plus continuity of block map; subgradient product rule proved locally. 

### Preserved mathematical design

### OPT15: `coordinate-and-block-descent-methods`

Define cyclic exact coordinate/block minimization, randomized coordinate gradient/proximal updates with independent uniform block sampling, separable nonsmooth g, per-block Lipschitz constants and finite inner solve tolerance. For smooth convex f with L_i-coordinate Lipschitz derivatives, a nonempty minimizer set, bounded initial sublevel radius R and a common Lmax, prove expected objective O(n Lmax R²/k) for random coordinate gradient; under global mu-strong convexity prove expected gap contraction 1−mu/(n Lmax) for step 1/Lmax. Importance sampling uses its separately proved probability/step relation rather than inheriting uniform constants. Cyclic exact block descent: under compact sublevel, continuously differentiable convex f plus proper closed convex separable g, and unique continuous block minimizers (or a proved uniformly strongly convex block proximal surrogate), prove every accumulation point is coordinatewise stationary; separability yields full convex stationarity/global optimum; uniqueness of global minimizer gives iterate convergence. Do not infer stationary convergence for arbitrary nonconvex/nonseparable nonsmooth cyclic updates; give a cycling/failure caveat. Derive lasso coordinate soft threshold with zero-column rule, reuse canonical lasso estimator/minimizer and orthogonal soft-threshold example, and distinguish convergence of fitted values/objectives from coefficient uniqueness. Proof: per-coordinate descent, conditional sampling expectation and telescoping; cyclic compactness plus continuity of block map; subgradient product rule proved locally. Sources: Wright (2015), Coordinate Descent Algorithms, https://doi.org/10.1007/s10107-015-0892-3 ; Tseng (2001), Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, https://doi.org/10.1023/A:1017501703105 ; Nesterov (2012), Efficiency of Coordinate Descent Methods on Huge-Scale Optimization Problems, https://doi.org/10.1137/100802001 . B: correlated-design lasso, randomized versus cyclic quadratic, zero feature column, nonunique coefficient optimum, block simulation calibration. Dependencies OPT8 prox characterization only for composite/proximal variant, canonical convex-gradient/subgradient and lasso items; owner proves coordinate descent lemma, conditional recurrence and separable stationarity before consumers. Genuine new method, atomically separated from FISTA.



### Proof construction

Proof: per-coordinate descent, conditional sampling expectation and telescoping; cyclic compactness plus continuity of block map; subgradient product rule proved locally.

### Examples

correlated-design lasso, randomized versus cyclic quadratic, zero feature column, nonunique coefficient optimum, block simulation calibration.

### Prerequisite interfaces

- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `sparse-high-dimensional-estimation-and-covariance` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT1 — Nonconvex line search and inexact newton methods

**Mathematical contract:** [controlling OPT1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt1).

A: `nonconvex-line-search-and-inexact-newton-methods`. B: `nonconvex-line-search-and-inexact-newton-methods-examples`.

### Scope

Reuse NA09 and NA43/BCS Armijo suppliers. Define Wolfe/strong Wolfe searches and Newton–Krylov with forcing residual `||H_k p_k+g_k|| <= eta_k ||g_k||`. Prove Zoutendijk: for f bounded below and Lipschitz gradient on a neighborhood of the sublevel/trial segments, descent directions and Wolfe steps give `sum cos(theta_k)^2 ||g_k||^2 < infinity`; uniform angle gives gradient convergence. Prove local inexact-Newton linear/superlinear/quadratic rates respectively for uniformly small eta, eta→0, eta=O(||g||), under invertible Lipschitz Jacobian and retained local tube. Nonlinear CG is owned atomically by OPT14 and consumes these Wolfe/Zoutendijk suppliers. 

### Preserved mathematical design

### OPT1: `nonconvex-line-search-and-inexact-newton-methods`

Reuse NA09 and NA43/BCS Armijo suppliers. Define Wolfe/strong Wolfe searches and Newton–Krylov with forcing residual `||H_k p_k+g_k|| <= eta_k ||g_k||`. Prove Zoutendijk: for f bounded below and Lipschitz gradient on a neighborhood of the sublevel/trial segments, descent directions and Wolfe steps give `sum cos(theta_k)^2 ||g_k||^2 < infinity`; uniform angle gives gradient convergence. Prove local inexact-Newton linear/superlinear/quadratic rates respectively for uniformly small eta, eta→0, eta=O(||g||), under invertible Lipschitz Jacobian and retained local tube. Nonlinear CG is owned atomically by OPT14 and consumes these Wolfe/Zoutendijk suppliers. Sources: Nocedal–Wright, *Numerical Optimization*, 2e §§3.1–3.3, 5.2, 7.1; Dembo–Eisenstat–Steihaug (1982), Theorems 2.3 and 3.3. B: Rosenbrock globalization, indefinite Hessian requiring descent safeguard, forcing-tolerance cost/error tradeoff. Owner creates Wolfe-existence/angle and perturbation lemmas before consumers.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

Rosenbrock globalization, indefinite Hessian requiring descent safeguard, forcing-tolerance cost/error tradeoff. Owner creates Wolfe-existence/angle and perturbation lemmas before consumers.

### Prerequisite interfaces

- `OPT0` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT7 — Barrier and primal dual interior point methods

**Mathematical contract:** [controlling OPT7 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt7).

A: `barrier-and-primal-dual-interior-point-methods`. B: `barrier-and-primal-dual-interior-point-methods-examples`.

### Scope

Define log barrier, central path and primal-dual Newton residual systems for convex inequality problems; LP/QP specializations and fraction-to-boundary finite steps. Prove barrier gap `m/t` at exact central minimizers, positivity preservation and residual/gap stopping certificates. Prove a short-step self-concordant path-following complexity theorem O(sqrt(nu) log(nu/epsilon)) Newton steps under strict feasibility and a supplied strictly feasible start; distinguish Phase I construction and infeasibility status. Introduce/prove self-concordant local norm and Newton decrement lemmas locally rather than assuming them from NA43. 

### Preserved mathematical design

### OPT7: `barrier-and-primal-dual-interior-point-methods`

Define log barrier, central path and primal-dual Newton residual systems for convex inequality problems; LP/QP specializations and fraction-to-boundary finite steps. Prove barrier gap `m/t` at exact central minimizers, positivity preservation and residual/gap stopping certificates. Prove a short-step self-concordant path-following complexity theorem O(sqrt(nu) log(nu/epsilon)) Newton steps under strict feasibility and a supplied strictly feasible start; distinguish Phase I construction and infeasibility status. Introduce/prove self-concordant local norm and Newton decrement lemmas locally rather than assuming them from NA43. Sources: Boyd–Vandenberghe Ch. 11 §§11.2–11.5, 11.7; Nesterov–Nemirovskii self-concordant framework as needed. B: constrained resource allocation; LP primal-dual residual; boundary ill conditioning. Dependencies OPT5, NA02, NA43.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

constrained resource allocation; LP primal-dual residual; boundary ill conditioning.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT0` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT9 — Operator splitting admm and primal dual methods

**Mathematical contract:** [controlling OPT9 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt9).

A: `operator-splitting-admm-and-primal-dual-methods`. B: `operator-splitting-admm-and-primal-dual-methods-examples`.

### Scope

Define maximal monotone/resolvent only to extent used; Douglas–Rachford, two-block scaled ADMM, and Chambolle–Pock/PDHG for min f(x)+g(Kx). Prove two-block ADMM primal residual→0, objective→optimum and dual convergence under proper closed convex f,g, existence of a saddle point and attained exact subproblem solutions; no generic multi-block/nonconvex claim. Prove ergodic primal-dual gap O(1/k) over bounded test sets for PDHG when tau sigma ||K||²<1, with explicit gap rather than automatic pointwise objective bound. 

### Preserved mathematical design

### OPT9: `operator-splitting-admm-and-primal-dual-methods`

Define maximal monotone/resolvent only to extent used; Douglas–Rachford, two-block scaled ADMM, and Chambolle–Pock/PDHG for min f(x)+g(Kx). Prove two-block ADMM primal residual→0, objective→optimum and dual convergence under proper closed convex f,g, existence of a saddle point and attained exact subproblem solutions; no generic multi-block/nonconvex claim. Prove ergodic primal-dual gap O(1/k) over bounded test sets for PDHG when tau sigma ||K||²<1, with explicit gap rather than automatic pointwise objective bound. Sources: Boyd et al. (2011), §§3.1–3.3 and Appendix A; Chambolle–Pock (2011), Theorem 1. B: consensus least squares; TV imaging; multi-block divergence caveat. Dependencies OPT5/8, NA03/05 for K kernels; owner supplies monotone-operator/Fenchel conjugacy and energy telescoping locally.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

consensus least squares; TV imaging; multi-block divergence caveat.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-03` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## STO1 — Stochastic approximation and stochastic gradient methods

**Mathematical contract:** [controlling STO1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-sto1).

A: `stochastic-approximation-and-stochastic-gradient-methods`. B: `stochastic-approximation-and-stochastic-gradient-methods-examples`.

### Scope

Define filtration-adapted Robbins–Monro/SGD/projected SGD, conditional unbiased gradients, conditional second-moment and bounded-variance hypotheses and step schedules. Prove Robbins–Siegmund almost-supermartingale lemma locally from published martingale convergence; use it for a.s. convergence under strongly monotone drift/strong convexity, sum alpha=infinity and sum alpha²<infinity, bounded second moments and coercivity/stability assumptions. Prove finite-time convex averaged O(1/sqrt(k)), strongly convex O(1/k) expected objective bounds with exact schedule/constants; nonconvex expected randomized-iterate gradient² O(1/sqrt(k)) under L-smoothness and f bounded below. Constant-step noise floor and biased gradients have explicit extra terms. 

### Preserved mathematical design

### STO1: `stochastic-approximation-and-stochastic-gradient-methods`

Define filtration-adapted Robbins–Monro/SGD/projected SGD, conditional unbiased gradients, conditional second-moment and bounded-variance hypotheses and step schedules. Prove Robbins–Siegmund almost-supermartingale lemma locally from published martingale convergence; use it for a.s. convergence under strongly monotone drift/strong convexity, sum alpha=infinity and sum alpha²<infinity, bounded second moments and coercivity/stability assumptions. Prove finite-time convex averaged O(1/sqrt(k)), strongly convex O(1/k) expected objective bounds with exact schedule/constants; nonconvex expected randomized-iterate gradient² O(1/sqrt(k)) under L-smoothness and f bounded below. Constant-step noise floor and biased gradients have explicit extra terms. Sources: Robbins–Siegmund (1971), theorem; Bottou–Curtis–Nocedal (2018), §§4–5; Kushner–Yin, *Stochastic Approximation and Recursive Algorithms*, stability/convergence chapters. B: streaming least squares, noisy root, biased simulator gradients. Dependencies NA43/45, OPT8 projection, existing conditional expectation/martingale suppliers; no CLT/inferential guarantee from convergence.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

streaming least squares, noisy root, biased simulator gradients.

### Prerequisite interfaces

- `OPT0` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT12 — Global optimization and certified branch and bound

**Mathematical contract:** [controlling OPT12 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt12).

A: `global-optimization-and-certified-branch-and-bound`. B: `global-optimization-and-certified-branch-and-bound-examples`.

### Scope

Genuinely-new global numerical optimization, separate from finding nonconvex stationary points. On a compact box, define spatial branch-and-bound with a finite budget, a rigorous lower-bounding oracle, feasible incumbents, deterministic splitting and epsilon gap termination. Prove global epsilon-optimality from the invariant lower≤inf over each live box and incumbent feasibility; prove eventual epsilon termination when bounds are consistent as box diameter→0, subdivisions are exhaustive and the objective is continuous. Instantiate interval/Lipschitz bounds using the linear/approximation agent's validated arithmetic contracts and locally proved convex McCormick envelopes for products; relaxations must enclose the objective/constraints including floating-point error. For constrained problems, pruning requires a proved infeasibility bound; empty feasible set detection needs a separate separation margin, not mere continuity. Define mixed-integer branch-and-bound for bounded integer domains with certified continuous relaxation bounds, finite enumeration fallback and exact gap certificate; do not claim polynomial complexity. Include derivative-free Bayesian optimization as a separate finite acquisition procedure consuming published GP posterior laws, with no generic global theorem unless an explicit RKHS/GP confidence-and-information-gain contract is proved locally; acquisition maximization error is retained. 

### Preserved mathematical design

### OPT12: `global-optimization-and-certified-branch-and-bound`

Genuinely-new global numerical optimization, separate from finding nonconvex stationary points. On a compact box, define spatial branch-and-bound with a finite budget, a rigorous lower-bounding oracle, feasible incumbents, deterministic splitting and epsilon gap termination. Prove global epsilon-optimality from the invariant lower≤inf over each live box and incumbent feasibility; prove eventual epsilon termination when bounds are consistent as box diameter→0, subdivisions are exhaustive and the objective is continuous. Instantiate interval/Lipschitz bounds using the linear/approximation agent's validated arithmetic contracts and locally proved convex McCormick envelopes for products; relaxations must enclose the objective/constraints including floating-point error. For constrained problems, pruning requires a proved infeasibility bound; empty feasible set detection needs a separate separation margin, not mere continuity. Define mixed-integer branch-and-bound for bounded integer domains with certified continuous relaxation bounds, finite enumeration fallback and exact gap certificate; do not claim polynomial complexity. Include derivative-free Bayesian optimization as a separate finite acquisition procedure consuming published GP posterior laws, with no generic global theorem unless an explicit RKHS/GP confidence-and-information-gain contract is proved locally; acquisition maximization error is retained. Sources: Horst–Tuy, *Global Optimization*, branch-and-bound chapters; Moore–Kearfott–Cloud, *Introduction to Interval Analysis*, global optimization chapter; McCormick (1976), factorable nonconvex relaxation; Srinivas et al. (2010), GP-UCB regret theorem with exact kernel/noise assumptions selected at authoring. B: multimodal polynomial certified gap, engineering mixed design, invalid lower bound loses optimum, noisy biological simulator Bayesian search whose surrogate uncertainty is conditional on the kernel/model. Dependencies OPT5/7 relaxations, NA01/09, validated arithmetic owner, existing BCS GP posterior; owner supplies bounding/exhaustiveness/relaxation and any GP-UCB concentration/information-gain prerequisites in this same frontier. No validated root-solving algorithm is duplicated.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

multimodal polynomial certified gap, engineering mixed design, invalid lower bound loses optimum, noisy biological simulator Bayesian search whose surrogate uncertainty is conditional on the kernel/model.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT7` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `matrix-norms-condition-numbers-and-numerical-stability` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `VAL-INTERVAL` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT14 — Nonlinear conjugate gradient methods

**Mathematical contract:** [controlling OPT14 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt14).

A: `nonlinear-conjugate-gradient-methods`. B: `nonlinear-conjugate-gradient-methods-examples`.

### Scope

Define d0=-g0, d_(k+1)=-g_(k+1)+beta_k d_k; Fletcher–Reeves beta=||g_new||²/||g||², Polak–Ribière beta=g_newᵀ(g_new-g)/||g||², PR+=max(0,beta), explicit zero-gradient exit and restart. Separate these nonlinear methods from canonical linear SPD CG (NA05). For f bounded below on the relevant sublevel set, C¹ with Lipschitz gradient on a neighborhood containing trial segments, and each step satisfying strong Wolfe 0<c1<c2<1/2, prove FR strict descent with uniform normalized slope bounds and `liminf ||g_k||=0` using the OPT1 Zoutendijk theorem plus the FR recurrence; do not silently strengthen to ||g_k||→0. Raw PR+ alone receives no unrestricted convergence assertion: define a safeguarded PR+ that restarts when gᵀd>−sigma||g||² or ||d||>C||g||, sigma,C>0; strong Wolfe then gives uniform angle sigma/C and ||g_k||→0 by Zoutendijk. If implementation cannot find a Wolfe step within its budget it returns search failure. Quadratic exact-line-search equivalence with linear CG is proved only for SPD quadratics/exact arithmetic. 

### Preserved mathematical design

### OPT14: `nonlinear-conjugate-gradient-methods`

Define d0=-g0, d_(k+1)=-g_(k+1)+beta_k d_k; Fletcher–Reeves beta=||g_new||²/||g||², Polak–Ribière beta=g_newᵀ(g_new-g)/||g||², PR+=max(0,beta), explicit zero-gradient exit and restart. Separate these nonlinear methods from canonical linear SPD CG (NA05). For f bounded below on the relevant sublevel set, C¹ with Lipschitz gradient on a neighborhood containing trial segments, and each step satisfying strong Wolfe 0<c1<c2<1/2, prove FR strict descent with uniform normalized slope bounds and `liminf ||g_k||=0` using the OPT1 Zoutendijk theorem plus the FR recurrence; do not silently strengthen to ||g_k||→0. Raw PR+ alone receives no unrestricted convergence assertion: define a safeguarded PR+ that restarts when gᵀd>−sigma||g||² or ||d||>C||g||, sigma,C>0; strong Wolfe then gives uniform angle sigma/C and ||g_k||→0 by Zoutendijk. If implementation cannot find a Wolfe step within its budget it returns search failure. Quadratic exact-line-search equivalence with linear CG is proved only for SPD quadratics/exact arithmetic. Sources: Nocedal–Wright, 2e §§5.2 and 3.2 (FR convergence/Zoutendijk), https://doi.org/10.1007/978-0-387-40065-5 ; Gilbert–Nocedal (1992), Global Convergence Properties of Conjugate Gradient Methods for Optimization, https://doi.org/10.1137/0802003 . B: Rosenbrock FR/PR+ trace, PR direction losing descent, restart restores angle, SPD quadratic equivalence. Dependencies OPT1 Wolfe existence/Zoutendijk, NA05 only for linear-equivalence example; owner proves FR slope/recurrence lemma and safeguarded-angle bound locally before theorem. Genuine new method; no duplicate linear-CG algorithm.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

Rosenbrock FR/PR+ trace, PR direction losing descent, restart restores angle, SPD quadratic equivalence.

### Prerequisite interfaces

- `OPT1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT2 — Bfgs and limited memory quasi newton methods

**Mathematical contract:** [controlling OPT2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt2).

A: `bfgs-and-limited-memory-quasi-newton-methods`. B: `bfgs-and-limited-memory-quasi-newton-methods-examples`.

### Scope

Define BFGS Hessian/inverse updates and L-BFGS two-loop recursion with initial SPD scaling and positive-curvature checks/damping. Prove secant equation, symmetry and SPD preservation when `s^T y>0`; Wolfe implies curvature for strict descent. Prove two-loop recursion equals the stored inverse updates, costs O(mn), stores O(mn). Prove full-memory BFGS global convergence for uniformly strongly convex C² f with bounded Hessian on a suitable convex sublevel neighborhood and Wolfe search, and its local superlinear rate under Lipschitz Hessian and stated eventual unit-step assumptions (prove the Dennis–Moré condition). L-BFGS with fixed memory receives its own bounded-spectrum global stationarity/linear convex theorem under declared scaling and curvature bounds, not the full-BFGS superlinear conclusion. 

### Preserved mathematical design

### OPT2: `bfgs-and-limited-memory-quasi-newton-methods`

Define BFGS Hessian/inverse updates and L-BFGS two-loop recursion with initial SPD scaling and positive-curvature checks/damping. Prove secant equation, symmetry and SPD preservation when `s^T y>0`; Wolfe implies curvature for strict descent. Prove two-loop recursion equals the stored inverse updates, costs O(mn), stores O(mn). Prove full-memory BFGS global convergence for uniformly strongly convex C² f with bounded Hessian on a suitable convex sublevel neighborhood and Wolfe search, and its local superlinear rate under Lipschitz Hessian and stated eventual unit-step assumptions (prove the Dennis–Moré condition). L-BFGS with fixed memory receives its own bounded-spectrum global stationarity/linear convex theorem under declared scaling and curvature bounds, not the full-BFGS superlinear conclusion. Sources: Nocedal–Wright Chs. 6 and 7 §7.2; Liu–Nocedal (1989), algorithm and convergence theorem. B: secant on a quadratic, failed curvature on nonconvex data, memory-dependent cost. Dependencies OPT1 and NA02; owner supplies trace/determinant and Dennis–Moré lemmas locally.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

secant on a quadratic, failed curvature on nonconvex data, memory-dependent cost.

### Prerequisite interfaces

- `OPT1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT3 — Trust region and cubic regularization methods

**Mathematical contract:** [controlling OPT3 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt3).

A: `trust-region-and-cubic-regularization-methods`. B: `trust-region-and-cubic-regularization-methods-examples`.

### Scope

Define quadratic trust-region model, actual/predicted ratio, radius updates, Cauchy step, dogleg (SPD case), truncated CG with boundary/negative-curvature exit; define adaptive cubic regularization separately. Prove trust-region optimality conditions `(B+lambda I)p=-g`, PSD shifted Hessian, lambda≥0 and complementarity; handle singular hard case. Prove sufficient Cauchy decrease and global `liminf ||g||=0` (and gradient→0 only with its stronger uniform assumptions) for bounded model Hessians, Lipschitz gradient and f bounded below. Give O(epsilon^-2) successful/total iteration bound only with specified acceptance/radius/gradient assumptions and counting unsuccessful steps. For cubic models, prove O(epsilon^-3/2) first-order evaluation bound under Lipschitz Hessian and sufficient model solution decrease. 

### Preserved mathematical design

### OPT3: `trust-region-and-cubic-regularization-methods`

Define quadratic trust-region model, actual/predicted ratio, radius updates, Cauchy step, dogleg (SPD case), truncated CG with boundary/negative-curvature exit; define adaptive cubic regularization separately. Prove trust-region optimality conditions `(B+lambda I)p=-g`, PSD shifted Hessian, lambda≥0 and complementarity; handle singular hard case. Prove sufficient Cauchy decrease and global `liminf ||g||=0` (and gradient→0 only with its stronger uniform assumptions) for bounded model Hessians, Lipschitz gradient and f bounded below. Give O(epsilon^-2) successful/total iteration bound only with specified acceptance/radius/gradient assumptions and counting unsuccessful steps. For cubic models, prove O(epsilon^-3/2) first-order evaluation bound under Lipschitz Hessian and sufficient model solution decrease. Sources: Nocedal–Wright Ch. 4; Cartis–Gould–Toint (2011), adaptive cubic regularisation Parts I/II, precise theorem selected at authoring. B: indefinite quadratic boundary, hard case, Newton versus Cauchy/truncated-CG step. Dependencies OPT1, NA05; owner proves model decrease and update counting.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

indefinite quadratic boundary, hard case, Newton versus Cauchy/truncated-CG step.

### Prerequisite interfaces

- `OPT1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## STO2 — Variance reduced finite sum and adaptive gradient optimization

**Mathematical contract:** [controlling STO2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-sto2).

A: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`. B: `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples`.

### Scope

Define finite-sum SVRG and SAGA with independent uniform index, stored-gradient/control update, work/storage ledgers; prove unbiased conditional estimators, variance bound relative to optimum, and geometric expected objective convergence for convex L-smooth components and mu-strongly convex sum under explicit epoch/step choices. Count full-gradient cost O(n), gradient cost per inner iteration, and memory. Define AdaGrad with proved online-regret/convex optimization bound under bounded gradients; Adam procedure accompanied by an explicit divergence counterexample or corrected AMSGrad theorem with exact denominator/moment assumptions. Mini-batch independent sampling reduces conditional variance by batch size; sampling without replacement requires different covariance accounting. 

### Preserved mathematical design

### STO2: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`

Define finite-sum SVRG and SAGA with independent uniform index, stored-gradient/control update, work/storage ledgers; prove unbiased conditional estimators, variance bound relative to optimum, and geometric expected objective convergence for convex L-smooth components and mu-strongly convex sum under explicit epoch/step choices. Count full-gradient cost O(n), gradient cost per inner iteration, and memory. Define AdaGrad with proved online-regret/convex optimization bound under bounded gradients; Adam procedure accompanied by an explicit divergence counterexample or corrected AMSGrad theorem with exact denominator/moment assumptions. Mini-batch independent sampling reduces conditional variance by batch size; sampling without replacement requires different covariance accounting. Sources: Johnson–Zhang (2013), Theorem 1; Defazio–Bach–Lacoste-Julien (2014), SAGA theorem; Duchi–Hazan–Singer (2011), adaptive-regret theorem; Reddi–Kale–Kumar (2018), Adam counterexample/AMSGrad. B: regularized logistic fit, epoch cost comparison, adaptive-step failure. Dependencies STO1, OPT8 and published control-variate algebra; optimization variance reduction is distinct from estimating a fixed integral.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

regularized logistic fit, epoch cost comparison, adaptive-step failure.

### Prerequisite interfaces

- `STO1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `variance-reduction-and-randomized-integration` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT11 — Riemannian optimization on stiefel and grassmann manifolds

**Mathematical contract:** [controlling OPT11 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt11).

A: `riemannian-optimization-on-stiefel-and-grassmann-manifolds`. B: `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples`.

### Scope

Genuinely-new optimization methods, reusing `def-riemannian-gradient` / `def-riemannian-gradient-of-a-smooth-function` and published critical-point equivalence. Define Stiefel/Grassmann tangent projections and Euclidean-metric Riemannian gradient, QR/polar retractions with domain/rank conditions, vector transport, retraction Armijo and Riemannian trust region. Prove retraction first-order agreement, sufficient descent under uniform pullback-gradient Lipschitz bounds on compact Stiefel, and finite-budget best-iterate O(epsilon^-2) first-order complexity. Quotient Grassmann objective must be right-orthogonally invariant; otherwise work on Stiefel. Riemannian second-order TR claim requires bounded pullback Hessian, second-order retraction and its separate sufficient model decrease assumptions. 

### Preserved mathematical design

### OPT11: `riemannian-optimization-on-stiefel-and-grassmann-manifolds`

Genuinely-new optimization methods, reusing `def-riemannian-gradient` / `def-riemannian-gradient-of-a-smooth-function` and published critical-point equivalence. Define Stiefel/Grassmann tangent projections and Euclidean-metric Riemannian gradient, QR/polar retractions with domain/rank conditions, vector transport, retraction Armijo and Riemannian trust region. Prove retraction first-order agreement, sufficient descent under uniform pullback-gradient Lipschitz bounds on compact Stiefel, and finite-budget best-iterate O(epsilon^-2) first-order complexity. Quotient Grassmann objective must be right-orthogonally invariant; otherwise work on Stiefel. Riemannian second-order TR claim requires bounded pullback Hessian, second-order retraction and its separate sufficient model decrease assumptions. Sources: Absil–Mahony–Sepulchre, *Optimization Algorithms on Matrix Manifolds*, Chs. 3–4, 7; Boumal, *An Introduction to Optimization on Smooth Manifolds*, descent/TR complexity chapters. B: trace eigenspace problem, orthogonality-preserving electronic-density optimization consuming chemistry agent's finite-basis model, nonconvex saddle and repeated eigenspace. Dependencies OPT1/3, NA02/05, existing manifold/calculus suppliers; owner proves tangent/retraction geometry and compact-uniform smoothness in this frontier. No SCF fixed-point method is duplicated; chemistry owner owns SCF/Anderson.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

trace eigenspace problem, orthogonality-preserving electronic-density optimization consuming chemistry agent's finite-basis model, nonconvex saddle and repeated eigenspace.

### Prerequisite interfaces

- `OPT1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `riemannian-metrics-length-distance-and-volume` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `gradient-like-vector-fields-and-morse-trajectories` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT4 — Gauss newton and levenberg marquardt methods

**Mathematical contract:** [controlling OPT4 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt4).

A: `gauss-newton-and-levenberg-marquardt-methods`. B: `gauss-newton-and-levenberg-marquardt-methods-examples`.

### Scope

For `f=1/2 ||r||²`, prove `g=J^T r`, `H=J^TJ+sum r_i Hess r_i`; define QR/SVD Gauss–Newton, LM `(J^TJ+lambda D^TD)p=-J^Tr`, rank safeguards and trust-region interpretation. With full-rank J near solution, Lipschitz J and controlled residual second-derivative term, prove explicit local linear contraction; zero residual gives quadratic convergence with needed C²/Lipschitz conditions. Global safeguarded LM gives stationarity under compact-sublevel/bounded-J and sufficient-decrease assumptions; residual→0 is not automatic. 

### Preserved mathematical design

### OPT4: `gauss-newton-and-levenberg-marquardt-methods`

For `f=1/2 ||r||²`, prove `g=J^T r`, `H=J^TJ+sum r_i Hess r_i`; define QR/SVD Gauss–Newton, LM `(J^TJ+lambda D^TD)p=-J^Tr`, rank safeguards and trust-region interpretation. With full-rank J near solution, Lipschitz J and controlled residual second-derivative term, prove explicit local linear contraction; zero residual gives quadratic convergence with needed C²/Lipschitz conditions. Global safeguarded LM gives stationarity under compact-sublevel/bounded-J and sufficient-decrease assumptions; residual→0 is not automatic. Sources: Nocedal–Wright Ch. 10 §§10.1–10.3; Kelley, *Iterative Methods for Optimization*, least-squares chapters. B: exponential kinetics parameter fit, rank-deficient identifiability, nonzero-residual failure of quadratic rate. Dependencies NA02, NA09, OPT3; exact derivative formula can reuse existing Frobenius least-squares theorem only for the linear special case.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

exponential kinetics parameter fit, rank-deficient identifiability, nonzero-residual failure of quadratic rate.

### Prerequisite interfaces

- `OPT3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## OPT6 — Sqp active set and augmented lagrangian methods

**Mathematical contract:** [controlling OPT6 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-opt6).

A: `sqp-active-set-and-augmented-lagrangian-methods`. B: `sqp-active-set-and-augmented-lagrangian-methods-examples`.

### Scope

Define equality/inequality SQP QP, active-set QP including feasible step and blocking constraint, exact-penalty merit globalization, and augmented Lagrangian/multiplier outer updates. Prove convex QP KKT sufficiency and active-set finite termination under nondegeneracy/anti-cycling conditions; separately give finite-budget behavior without them. Prove local exact-Hessian SQP quadratic convergence near a solution with LICQ, strict complementarity and SOSC by Newton on the identified KKT system; BFGS variant superlinear only with its reduced Dennis–Moré premise. Prove multiplier method local convergence under SOSC and sufficiently large penalty, keeping inner solve residuals. 

### Preserved mathematical design

### OPT6: `sqp-active-set-and-augmented-lagrangian-methods`

Define equality/inequality SQP QP, active-set QP including feasible step and blocking constraint, exact-penalty merit globalization, and augmented Lagrangian/multiplier outer updates. Prove convex QP KKT sufficiency and active-set finite termination under nondegeneracy/anti-cycling conditions; separately give finite-budget behavior without them. Prove local exact-Hessian SQP quadratic convergence near a solution with LICQ, strict complementarity and SOSC by Newton on the identified KKT system; BFGS variant superlinear only with its reduced Dennis–Moré premise. Prove multiplier method local convergence under SOSC and sufficiently large penalty, keeping inner solve residuals. Sources: Nocedal–Wright Chs. 16–18; Bertsekas, *Nonlinear Programming*, constrained optimization chapters. B: engineering design with active inequality; Maratos effect and second-order correction; penalty conditioning. Dependencies OPT5, OPT1–2, NA02. Owner supplies KKT nonsingularity/reduced-Hessian lemma.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

engineering design with active inequality; Maratos effect and second-order correction; penalty conditioning.

### Prerequisite interfaces

- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT2` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-02` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## INV2 — Iterative regularization and early stopping

**Mathematical contract:** [controlling INV2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-inv2).

A: `iterative-regularization-and-early-stopping`. B: `iterative-regularization-and-early-stopping-examples`.

### Scope

Define Landweber `x_(k+1)=x_k+omega A*(y_delta-Ax_k)`, 0<omega<2/||A||², x0=0; prove monotone exact-data convergence to minimum-norm solution, noise amplification ≤C delta sqrt(k), and source bias ≤C k^-nu; balance k and prove discrepancy-stopped convergence. Define CGLS/LSQR via Golub–Kahan bidiagonalization (algorithm supplier may be linear-algebra expansion; do not duplicate its stable factorization proof). Prove exact-arithmetic LSQR iterate minimizes residual over its Krylov space and regularization requires stopping, not just residual minimization. Nonlinear iteratively regularized Gauss–Newton gets a stated local theorem with tangential-cone/Lipschitz derivative/source assumptions and noise-aware stopping; author its contraction/error recurrence rather than importing linear filter proof. 

### Preserved mathematical design

### INV2: `iterative-regularization-and-early-stopping`

Define Landweber `x_(k+1)=x_k+omega A*(y_delta-Ax_k)`, 0<omega<2/||A||², x0=0; prove monotone exact-data convergence to minimum-norm solution, noise amplification ≤C delta sqrt(k), and source bias ≤C k^-nu; balance k and prove discrepancy-stopped convergence. Define CGLS/LSQR via Golub–Kahan bidiagonalization (algorithm supplier may be linear-algebra expansion; do not duplicate its stable factorization proof). Prove exact-arithmetic LSQR iterate minimizes residual over its Krylov space and regularization requires stopping, not just residual minimization. Nonlinear iteratively regularized Gauss–Newton gets a stated local theorem with tangential-cone/Lipschitz derivative/source assumptions and noise-aware stopping; author its contraction/error recurrence rather than importing linear filter proof. Sources: Engl–Hanke–Neubauer Chs. 6, 11; Hanke, *Conjugate Gradient Type Methods for Ill-Posed Problems*, discrepancy-stopping chapters; Kaltenbacher–Neubauer–Scherzer, *Iterative Regularization Methods for Nonlinear Ill-Posed Problems*, IRGNM chapter. B: semiconvergence, blurred image, nonlinear reaction fit. Dependencies INV1, NA05/06/44, OPT4; same owner must build nonlinear range/source prerequisites before claim.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

semiconvergence, blurred image, nonlinear reaction fit.

### Prerequisite interfaces

- `INV1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-05` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-06` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-44` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT4` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## PC-PATH — Minimum energy paths string neb and saddle certificates

**Mathematical contract:** [controlling PC-PATH definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-pc-path).

A: `minimum-energy-paths-string-neb-and-saddle-certificates`. B: `minimum-energy-paths-string-neb-and-saddle-certificates-examples`.

### Scope

genuinely-new transition-state and minimum-energy-path numerics

A: `minimum-energy-paths-string-neb-and-saddle-certificates`.

For a supplied C^4 finite-dimensional potential V on a declared collision-free tube, define a regular minimum-energy path by (I-t t^T)grad V=0 and prescribed endpoint conditions; the physical relevance of V is outside this conditional mathematics. Define a finite-image string method (gradient update plus specified arc-length redistribution/interpolation) and NEB with explicit tangent selection, spring force, endpoint treatment, ties/degenerate segment failure, finite budgets and stop criteria. Climbing-image changes the residual and needs its own exact formula. A small NEB force is not automatically a small continuum path error.

Prove central-difference unit-tangent approximation O(h²) for C^3 arc-length paths with nonvanishing derivative and quasiuniform, appropriately symmetric sampling; nonuniform formulas must use actual unequal-step coefficients. Derive discrete projected-force consistency O(h²) away from tangent degeneracy, plus the chosen spring/reparametrization residual on sampled arc-length paths. If the phase/parameterization-fixed discrete residual Jacobians have a **proved or independently certified uniform inverse bound** and a matching Lipschitz neighborhood, apply existing quantitative Newton/IFT to obtain a nearby discrete path and residual-to-path error; continuum convergence requires an actual stable interpolation/comparison theorem. PC-PATH owns that theorem for the stated stable smooth isolated path class, including endpoint and parameterization gauge. No blanket string/NEB convergence for every potential or mesh.

Define eigenvector-following with spectral ordering, one negative mode, eigensolve tolerance and branch failure; near a nondegenerate index-one critical point the exact selected local step equals the appropriate Newton critical-point solve, whose local quadratic guarantee is reused rather than reintroduced. Define a dimer Hessian-vector estimate using paired force evaluations; Taylor gives O(epsilon²) deterministic Hessian-vector bias under the stated derivatives, plus force error O(eta/epsilon). Prove separated-mode eigenvector error and its effect on a local inexact saddle iteration; mode tracking needs a gap. Certify Hessian index one through eigenvalue enclosures bounded away from zero, and retain finite residual/conditioning errors. This is a local mathematical saddle certificate, not proof of a molecular reaction rate or global transition mechanism.

Same-frontier suppliers PC-PATH: tangent/interpolation/reparametrization consistency; gauge-fixed stable path comparison theorem; local dimer/selected-mode perturbation and error propagation. Optimization owner OPT3 supplies generic nonconvex trust-region algebra, OPT11 manifold retraction if used; canonical `alg-damped-newton` / NA09 supply local root solving; linear spectral perturbation supplies separated-mode bounds. No generic optimizer is duplicated. B: curved double well, incorrect straight path, corner/cusp tangent failure, a saddle with wrong Morse index, near-degenerate two-mode dimer, finite-difference bias versus force noise tradeoff. Sources to inspect: Henkelman–Jónsson improved tangent NEB https://doi.org/10.1063/1.1323224 ; Henkelman–Uberuaga–Jónsson climbing image https://doi.org/10.1063/1.1329672 ; E–Ren–Vanden-Eijnden simplified string https://doi.org/10.1063/1.2720838 ; Henkelman–Jónsson dimer https://doi.org/10.1063/1.480097 . These are candidate algorithm sources, with full mathematical guarantee sources/proofs still an authoring obligation.

### Proof construction

[
  "Prove central-difference unit-tangent approximation O(h²) for C^3 arc-length paths with nonvanishing derivative and quasiuniform, appropriately symmetric sampling; nonuniform formulas must use actual unequal-step coefficients. Derive discrete projected-force consistency O(h²) away from tangent degeneracy, plus the chosen spring/reparametrization residual on sampled arc-length paths. If the phase/parameterization-fixed discrete residual Jacobians have a **proved or independently certified uniform inverse bound** and a matching Lipschitz neighborhood, apply existing quantitative Newton/IFT to obtain a nearby discrete path and residual-to-path error; continuum convergence requires an actual stable interpolation/comparison theorem. PC-PATH owns that theorem for the stated stable smooth isolated path class, including endpoint and parameterization gauge. No blanket string/NEB convergence for every potential or mesh.",
  "Define eigenvector-following with spectral ordering, one negative mode, eigensolve tolerance and branch failure; near a nondegenerate index-one critical point the exact selected local step equals the appropriate Newton critical-point solve, whose local quadratic guarantee is reused rather than reintroduced. Define a dimer Hessian-vector estimate using paired force evaluations; Taylor gives O(epsilon²) deterministic Hessian-vector bias under the stated derivatives, plus force error O(eta/epsilon). Prove separated-mode eigenvector error and its effect on a local inexact saddle iteration; mode tracking needs a gap. Certify Hessian index one through eigenvalue enclosures bounded away from zero, and retain finite residual/conditioning errors. This is a local mathematical saddle certificate, not proof of a molecular reaction rate or global transition mechanism.",
  "Same-frontier suppliers PC-PATH: tangent/interpolation/reparametrization consistency; gauge-fixed stable path comparison theorem; local dimer/selected-mode perturbation and error propagation. Optimization owner OPT3 supplies generic nonconvex trust-region algebra, OPT11 manifold retraction if used; canonical `alg-damped-newton` / NA09 supply local root solving; linear spectral perturbation supplies separated-mode bounds. No generic optimizer is duplicated. B: curved double well, incorrect straight path, corner/cusp tangent failure, a saddle with wrong Morse index, near-degenerate two-mode dimer, finite-difference bias versus force noise tradeoff. Sources to inspect: Henkelman–Jónsson improved tangent NEB https://doi.org/10.1063/1.1323224 ; Henkelman–Uberuaga–Jónsson climbing image https://doi.org/10.1063/1.1329672 ; E–Ren–Vanden-Eijnden simplified string https://doi.org/10.1063/1.2720838 ; Henkelman–Jónsson dimer https://doi.org/10.1063/1.480097 . These are candidate algorithm sources, with full mathematical guarantee sources/proofs still an authoring obligation."
]

### Examples

curved double well, incorrect straight path, corner/cusp tangent failure, a saddle with wrong Morse index, near-degenerate two-mode dimer, finite-difference bias versus force noise tradeoff.

### Prerequisite interfaces

- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT11` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT0` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## PC-VAR — Finite basis projector energies and variational electronic structure

**Mathematical contract:** [controlling PC-VAR definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-pc-var).

A: `finite-basis-projector-energies-and-variational-electronic-structure`. B: `finite-basis-projector-energies-and-variational-electronic-structure-examples`.

### Scope

extend NA-37 and a substantial new nonlinear electronic-structure pair

A: `finite-basis-projector-energies-and-variational-electronic-structure`.

Let S be a supplied Hermitian positive-definite overlap matrix, 0 < r < n, and transform to an orthonormal basis using an existing Cholesky/spectral factorization. Define the compact set P_r = {P=P*, P²=P, tr P=r}. Input finite h=h*, a self-adjoint real-linear map G on Hermitian matrices, and optional real C² functional E_xc on a neighborhood of P_r. Define E(P)=tr(hP)+1/2 tr(PG(P))+E_xc(P) and its Hermitian Frobenius-gradient F(P)=h+G(P)+grad E_xc(P). The conditional finite-basis HF case is E_xc=0 with a supplied symmetry-compatible Coulomb/exchange tensor; the KS-like case is an explicitly supplied density map and differentiable chosen functional. These are mathematical definitions, not assertions of physical exactness. Prove a global minimizer exists, first variation along P(t)=e^{tK}Pe^{-tK} yields [F(P),P]=0, and a sufficient positive tangent-Hessian condition gives an isolated strict local minimizer modulo orbital gauge. A commutator-zero point need not be a minimum and need not occupy the lowest r eigenvalues. Do not silently equate stationarity and Aufbau SCF.

Also include the finite-temperature density domain 0<=D<=I, tr D=r with continuous endpoint convention 0 log 0=0 and entropy term beta^(-1) tr(D log D+(I-D)log(I-D)). Prove compact-domain minimizer existence; on the interior derive the Fermi–Dirac stationarity equation with chemical potential chosen for the trace, and prove uniqueness of that chemical potential for a fixed finite Hermitian F and 0<r<n. This does not prove uniqueness of a self-consistent density for a nonconvex energy. PC-VAR owns spectral trace derivative and endpoint-continuity suppliers; generic constrained KKT/prox comes from optimization owner.

For nested trial spaces, the finite-basis infimum decreases toward the infimum over their union; equality with a continuum infimum additionally requires density in the energy topology and continuity/liminf hypotheses, each proved for the chosen functional. No general Coulomb HF/DFT existence theorem is smuggled into this statement. Source-model error stays separate.

NA-37 amendment, no extra pair: for a normalized Ritz vector u with Rayleigh quotient mu and residual rho=||(A-mu)u||, prove dist(mu,spec A)<=rho. If a specific simple target eigenvalue is separated by certified gap delta from all others, prove sin(angle(u,e))<=rho/delta using spectral expansion; add an upper energy bound from min–max. A residual alone cannot identify the lowest eigenvalue. For a ground state on a compact-resolvent form domain carry the actual form/duality norm and continuum regularity, not the finite-matrix formula verbatim.

Proof route: bounded closed polynomial projector set is compact; Weierstrass; differentiate matrix traces and commutator curves; characterize all tangent directions as [K,P]; Taylor on local graph charts; spectral expansion for residuals; monotone infima plus explicit approximants for trial density. Same-frontier new suppliers owned PC-VAR: projector tangent/graph chart and gauge invariance, compactness, energy derivative/Hessian. Reuse canonical matrix differential, Courant–Fischer and optimization-owner retraction items.

B: two-level nonlinear projector with a stationary maximum; overlapping basis with ill-conditioned S; incomplete CI energy above its finite Hamiltonian ground energy; nested trial energies; nonsmooth chosen E_xc where the C² theorem fails.

Sources to inspect before authoring: Cancès–Le Bris, Can we outperform the DIIS approach for electronic structure calculations?, https://doi.org/10.1002/1097-461X(2000)79:2%3C82::AID-QUA3%3E3.0.CO;2-I . Citations here are candidate source locations, not completed reading evidence.

### Proof construction

[
  "Let S be a supplied Hermitian positive-definite overlap matrix, 0 < r < n, and transform to an orthonormal basis using an existing Cholesky/spectral factorization. Define the compact set P_r = {P=P*, P²=P, tr P=r}. Input finite h=h*, a self-adjoint real-linear map G on Hermitian matrices, and optional real C² functional E_xc on a neighborhood of P_r. Define E(P)=tr(hP)+1/2 tr(PG(P))+E_xc(P) and its Hermitian Frobenius-gradient F(P)=h+G(P)+grad E_xc(P). The conditional finite-basis HF case is E_xc=0 with a supplied symmetry-compatible Coulomb/exchange tensor; the KS-like case is an explicitly supplied density map and differentiable chosen functional. These are mathematical definitions, not assertions of physical exactness. Prove a global minimizer exists, first variation along P(t)=e^{tK}Pe^{-tK} yields [F(P),P]=0, and a sufficient positive tangent-Hessian condition gives an isolated strict local minimizer modulo orbital gauge. A commutator-zero point need not be a minimum and need not occupy the lowest r eigenvalues. Do not silently equate stationarity and Aufbau SCF.",
  "Also include the finite-temperature density domain 0<=D<=I, tr D=r with continuous endpoint convention 0 log 0=0 and entropy term beta^(-1) tr(D log D+(I-D)log(I-D)). Prove compact-domain minimizer existence; on the interior derive the Fermi–Dirac stationarity equation with chemical potential chosen for the trace, and prove uniqueness of that chemical potential for a fixed finite Hermitian F and 0<r<n. This does not prove uniqueness of a self-consistent density for a nonconvex energy. PC-VAR owns spectral trace derivative and endpoint-continuity suppliers; generic constrained KKT/prox comes from optimization owner.",
  "For nested trial spaces, the finite-basis infimum decreases toward the infimum over their union; equality with a continuum infimum additionally requires density in the energy topology and continuity/liminf hypotheses, each proved for the chosen functional. No general Coulomb HF/DFT existence theorem is smuggled into this statement. Source-model error stays separate.",
  "NA-37 amendment, no extra pair: for a normalized Ritz vector u with Rayleigh quotient mu and residual rho=||(A-mu)u||, prove dist(mu,spec A)<=rho. If a specific simple target eigenvalue is separated by certified gap delta from all others, prove sin(angle(u,e))<=rho/delta using spectral expansion; add an upper energy bound from min–max. A residual alone cannot identify the lowest eigenvalue. For a ground state on a compact-resolvent form domain carry the actual form/duality norm and continuum regularity, not the finite-matrix formula verbatim.",
  "Proof route: bounded closed polynomial projector set is compact; Weierstrass; differentiate matrix traces and commutator curves; characterize all tangent directions as [K,P]; Taylor on local graph charts; spectral expansion for residuals; monotone infima plus explicit approximants for trial density. Same-frontier new suppliers owned PC-VAR: projector tangent/graph chart and gauge invariance, compactness, energy derivative/Hessian. Reuse canonical matrix differential, Courant–Fischer and optimization-owner retraction items."
]

### Examples

[
  "B: two-level nonlinear projector with a stationary maximum; overlapping basis with ill-conditioned S; incomplete CI energy above its finite Hamiltonian ground energy; nested trial energies; nonsmooth chosen E_xc where the C² theorem fails."
]

### Prerequisite interfaces

- `NA-37` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `OPT11` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `the-spectral-theorem-and-singular-value-decomposition` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `matrix-differentiation-and-first-order-spectral-perturbation` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## DIF3 — Discrete continuous and pde adjoint sensitivities

**Mathematical contract:** [controlling DIF3 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-dif3).

A: `discrete-continuous-and-pde-adjoint-sensitivities`. B: `discrete-continuous-and-pde-adjoint-sensitivities-examples`.

### Scope

For `u_(n+1)=Psi_n(u_n,theta)` and sum/terminal objective, derive backward recursion and exact discrete gradient by eliminating tangent variables. For C¹ parameter-dependent ODE with bounded derivatives on a controlled tube prove differentiability of its flow and adjoint integration-by-parts formula including initial/terminal/parameter terms. Compare differentiate-then-discretize and discretize-then-differentiate; prove an O(h^p) gradient discrepancy only from both consistent stable state and adjoint approximations and derivative-order hypotheses, not from state error alone. For coercive elliptic PDE `a_theta(u,v)=ell_theta(v)`, prove solution differentiability under uniform coercivity and operator-norm C¹ data; derive adjoint reduced gradient and FE gradient error in primal/dual norms. 

### Preserved mathematical design

### DIF3: `discrete-continuous-and-pde-adjoint-sensitivities`

For `u_(n+1)=Psi_n(u_n,theta)` and sum/terminal objective, derive backward recursion and exact discrete gradient by eliminating tangent variables. For C¹ parameter-dependent ODE with bounded derivatives on a controlled tube prove differentiability of its flow and adjoint integration-by-parts formula including initial/terminal/parameter terms. Compare differentiate-then-discretize and discretize-then-differentiate; prove an O(h^p) gradient discrepancy only from both consistent stable state and adjoint approximations and derivative-order hypotheses, not from state error alone. For coercive elliptic PDE `a_theta(u,v)=ell_theta(v)`, prove solution differentiability under uniform coercivity and operator-norm C¹ data; derive adjoint reduced gradient and FE gradient error in primal/dual norms. Sources: Giles–Pierce (2000), *An Introduction to the Adjoint Approach to Design*, §§2–3; Hinze et al., *Optimization with PDE Constraints*, Chs. 1–3; Hager (2000), Runge–Kutta optimal-control adjoints. B: 4DVAR reverse gradient (reuse published objective), stiff kinetics parameter fit, elliptic coefficient sensitivity; mismatch of discrete boundary/terminal conditions. Dependencies DIF2, P-NUM-ODE pairs/NA15, NA29/30/36; owner supplies flow-parameter and operator-differentiation lemmas in this same frontier.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

4DVAR reverse gradient (reuse published objective), stiff kinetics parameter fit, elliptic coefficient sensitivity; mismatch of discrete boundary/terminal conditions.

### Prerequisite interfaces

- `DIF2` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-15` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `NA-21` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `NA-29` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-30` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-36` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `T01` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `data-assimilation-variational-and-ensemble-methods` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `P-NUM-ODE-02` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-time/proposals.json",
    "original_owner": "T12",
    "resolved_owner": "DIF3",
    "design": {
      "key": "numerical-sensitivities-adjoints-and-shooting-jacobians",
      "local_key": "T12",
      "disposition": "genuinely-new",
      "pair_kind": "A/B",
      "promise_and_proof_design_verbatim": "**A scope.** Smooth finite-horizon parametric ODE on common tube, tangent equation S'=f_y S+f_theta, terminal/integral objective. Derive continuous adjoint and exact discrete adjoint of an explicit RK algorithm (or general differentiable step map) with actual transpose-Jacobian recursion; distinguish differentiate-then-discretize and discretize-then-differentiate. Prove O(h^p) tangent/gradient approximation under augmented smoothness and stable order-p method; reverse accumulation computes derivative of the discrete objective exactly in exact arithmetic. Checkpointing/replay is algorithmic with explicit memory/work, not new derivative mathematics. **Proof:** published smooth dependence then variational equation; differentiate finite compositions and telescope dual pairings; augmented-system local/global error; include algebraic implicit-function solve sensitivity and reset saltation only with T10 branch. **B:** parameter calibration, multiple-shooting Jacobian, chaotic finite-time sensitivity growth. Add finite-time tangent QR: factor each propagated tangent block as Q R with positive diagonal; accumulated log diagonal sums give exact finite-step volume growth by determinant telescoping. Numerical log error needs singular values bounded away from zero and stated conditioning. No infinite-time Lyapunov exponent or shadowing claim. **Prereqs:** same pair bilinear adjoint telescoping; NA-15/NA-21, T01. **Cost:** forward/reverse RHS/JVP/VJP and storage; derivative oracle counted. **Sources:** Hairer/Nørsett/Wanner ODE I variational equations; Hager, Numerische Mathematik 87 (2000), Runge-Kutta methods in optimal control; Griewank/Walther, Evaluating Derivatives, reverse/checkpointing chapters. Reads pending.",
      "canonical_reuse": [
        "thm-smooth-dependence-of-ode-solutions-on-parameters"
      ],
      "new_dependency_keys": [
        "T01"
      ],
      "missing_prerequisites_owner": "T12 owns every same-pair foundational lemma stated in design before numerical theorem; external interfaces have named frontier owners in audit report",
      "source_urls": [],
      "source_reading_status": "Source locators are targets only; exact full theorem reading and section binding pending; no completed reading asserted",
      "integration_disposition": "merged into DIF3; retain guarantees, do not allocate separate pair"
    },
    "reason": "One shared discrete/continuous adjoint, tangent, finite-time tangent-QR and sensitivity owner; no duplicate method pair."
  },
  {
    "resolved_owner": "T10",
    "design": "T10 owns all reset/saltation/event-specific sensitivity formulas and examples, consuming regular ODE tangent/adjoint from DIF3. DIF3 core consumes no event map. This is a placement decision, with all promises retained."
  }
]


## PC-SCF — Self consistent projector iterations and certified mixing

**Mathematical contract:** [controlling PC-SCF definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-pc-scf).

A: `self-consistent-projector-iterations-and-certified-mixing`. B: `self-consistent-projector-iterations-and-certified-mixing-examples`.

### Scope

genuinely-new nonlinear projector iteration, with certified safeguards

A: `self-consistent-projector-iterations-and-certified-mixing`.

Define F(P)=F(P)* and Phi(P)=spectral projector onto the r lowest eigenvalues, only on a declared neighborhood with uniform occupied/unoccupied gap g>0. Define undamped SCF P_{k+1}=Phi(P_k), a distinct relaxed density iteration D_{k+1}=(1-alpha)D_k+alpha Phi(D_k) on a closed admissible Hermitian density set, and a finite-memory DIIS least-squares proposal with singular-system fallback, coefficient/budget cap, and accept/reject rule. Relaxed D is generally not an idempotent projector; keep domains explicit.

Prove block spectral-projector differentiability and Lipschitz bounds from a common separating resolvent contour (or Sylvester off-diagonal equation). If a complete invariant metric neighborhood has Lip(Phi)<=q<1, prove geometric SCF convergence and error<=||P-Phi(P)||/(1-q). For differentiable relaxed map, a certified induced-norm bound ||(1-alpha)I+alpha DPhi||<=q<1 on the whole neighborhood gives the corresponding result. Damping alone is not a proof of contraction. Given inexact Phi evaluations with deterministic error eta_k, prove e_{k+1}<=q e_k+eta_k and the explicit convolution bound. DIIS convergence is claimed only for an actual residual-decreasing safeguarded scheme with a proved contractive baseline and enforceable error budget; bare DIIS gets no universal theorem. Level shifts change the map and require a fixed-point-equivalence proof under their stated eigenvalue ordering.

Full proof route: contour identity and resolvent identity; Weyl gap persistence and uniform inverse estimates; Banach fixed point; telescoping inexact recurrence; accept DIIS only if certified candidate error/residual gives the stipulated contraction, otherwise use baseline. Same-frontier suppliers PC-SCF: block/cluster projector derivative (simple-eigenvalue canonical result is insufficient), computable gap persistence and resolvent bound, level-shift equivalence, safeguard theorem. Generic Anderson acceleration if optimization owner supplies it is reused, not redefined.

B: explicit two-cycle of SCF; zero-gap projector discontinuity; contractive affine response toy model; residual certificate with additive eigensolve tolerance; density mixing leaving the projector manifold; DIIS singular Gram fallback. Candidate sources: Cancès–Le Bris above; Rohwedder–Schneider, DIIS convergence analysis, https://doi.org/10.1007/s00211-011-0401-3 ; Walker–Ni Anderson acceleration, https://doi.org/10.1137/10078356X . Author must inspect exact theorems rather than cite titles as proof.

### Proof construction

[
  "Prove block spectral-projector differentiability and Lipschitz bounds from a common separating resolvent contour (or Sylvester off-diagonal equation). If a complete invariant metric neighborhood has Lip(Phi)<=q<1, prove geometric SCF convergence and error<=||P-Phi(P)||/(1-q). For differentiable relaxed map, a certified induced-norm bound ||(1-alpha)I+alpha DPhi||<=q<1 on the whole neighborhood gives the corresponding result. Damping alone is not a proof of contraction. Given inexact Phi evaluations with deterministic error eta_k, prove e_{k+1}<=q e_k+eta_k and the explicit convolution bound. DIIS convergence is claimed only for an actual residual-decreasing safeguarded scheme with a proved contractive baseline and enforceable error budget; bare DIIS gets no universal theorem. Level shifts change the map and require a fixed-point-equivalence proof under their stated eigenvalue ordering.",
  "Full proof route: contour identity and resolvent identity; Weyl gap persistence and uniform inverse estimates; Banach fixed point; telescoping inexact recurrence; accept DIIS only if certified candidate error/residual gives the stipulated contraction, otherwise use baseline. Same-frontier suppliers PC-SCF: block/cluster projector derivative (simple-eigenvalue canonical result is insufficient), computable gap persistence and resolvent bound, level-shift equivalence, safeguard theorem. Generic Anderson acceleration if optimization owner supplies it is reused, not redefined."
]

### Examples

[
  "B: explicit two-cycle of SCF; zero-gap projector discontinuity; contractive affine response toy model; residual certificate with additive eigensolve tolerance; density mixing leaving the projector manifold; DIIS singular Gram fallback. Candidate sources: Cancès–Le Bris above; Rohwedder–Schneider, DIIS convergence analysis, https://doi.org/10.1007/s00211-011-0401-3 ; Walker–Ni Anderson acceleration, https://doi.org/10.1137/10078356X . Author must inspect exact theorems rather than cite titles as proof."
]

### Prerequisite interfaces

- `PC-VAR` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-09` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `completeness-and-uniform-continuity` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `banach-algebras-spectrum-and-holomorphic-functional-calculus` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `the-spectral-theorem-and-singular-value-decomposition` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## UQ1 — Polynomial chaos stochastic collocation and galerkin uq

**Mathematical contract:** [controlling UQ1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-uq1).

A: `polynomial-chaos-stochastic-collocation-and-galerkin-uq`. B: `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples`.

### Scope

For finite-dimensional independent random input with specified product law, build orthonormal polynomial tensor basis and finite total-degree/hyperbolic-cross index sets. State density only when proved for the input law (compact support with polynomial density, or Gaussian Hermite completeness via supplied proof); moments alone do not ensure completeness. Prove L² orthogonal-projection error/Parseval, mean/variance coefficient formulas and quadrature coefficient error `||u-P_Lambda u|| + ||P_Lambda u-u_hat||`; quadrature exactness and stability are consumed from NA13 and the linear/approximation agent's sparse-grid pair. Define weighted least-squares collocation and prove stability/error on the event the sampled Gram matrix lies in [1/2,3/2], with probability supplied by a bounded-Christoffel matrix concentration lemma proved locally or existing supplier exactly matched. For uniformly elliptic affine random coefficients with a_min>0 and bounded input, prove stochastic Galerkin coercivity/quasi-optimality in Bochner L²(H¹_0); spectral rates require quantified mixed-derivative/analyticity hypotheses, not universal smoothness. 

### Preserved mathematical design

### UQ1: `polynomial-chaos-stochastic-collocation-and-galerkin-uq`

For finite-dimensional independent random input with specified product law, build orthonormal polynomial tensor basis and finite total-degree/hyperbolic-cross index sets. State density only when proved for the input law (compact support with polynomial density, or Gaussian Hermite completeness via supplied proof); moments alone do not ensure completeness. Prove L² orthogonal-projection error/Parseval, mean/variance coefficient formulas and quadrature coefficient error `||u-P_Lambda u|| + ||P_Lambda u-u_hat||`; quadrature exactness and stability are consumed from NA13 and the linear/approximation agent's sparse-grid pair. Define weighted least-squares collocation and prove stability/error on the event the sampled Gram matrix lies in [1/2,3/2], with probability supplied by a bounded-Christoffel matrix concentration lemma proved locally or existing supplier exactly matched. For uniformly elliptic affine random coefficients with a_min>0 and bounded input, prove stochastic Galerkin coercivity/quasi-optimality in Bochner L²(H¹_0); spectral rates require quantified mixed-derivative/analyticity hypotheses, not universal smoothness. Sources: Xiu–Karniadakis (2002), gPC construction; Babuška–Nobile–Tempone (2007), stochastic collocation convergence hypotheses; Cohen–Migliorati (2017), weighted least squares stability theorem. B: uncertain reaction rate, affine random diffusion, heavy-tail moment/density failure, dimension/work ledger. Dependencies NA13/28/29/38, sparse-grid cubature, existing L² Hilbert projection/product probability; owner builds Bochner finite-input measurability/integrability and Gram concentration before use.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

uncertain reaction rate, affine random diffusion, heavy-tail moment/density failure, dimension/work ledger.

### Prerequisite interfaces

- `NA-13` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.
- `NA-28` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-29` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-38` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `QUAD-SMOL` — same-frontier pair owned by **linear**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## CTRL1 — Direct transcription and numerical ode optimal control

**Mathematical contract:** [controlling CTRL1 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-ctrl1).

A: `direct-transcription-and-numerical-ode-optimal-control`. B: `direct-transcription-and-numerical-ode-optimal-control-examples`.

### Scope

Define finite-horizon bounded-control ODE problem, piecewise-constant controls/direct multiple shooting and RK collocation transcription, feasible state map, terminal/path constraints and quadrature objective. Prove existence for a precise compact-control/convex-velocity setting using weak compactness plus state compactness (or restrict initial theorem to convex linear dynamics), then a complete linear-quadratic model with coercive control cost: unique optimum, continuous adjoint optimality system, discrete minimizer convergence and objective/control rate from uniform state/quadrature errors and strong convexity. Nonlinear transcription gets conditional local KKT convergence under LICQ/SOSC and mesh-consistent constraints, not universal global convergence. 

### Preserved mathematical design

### CTRL1: `direct-transcription-and-numerical-ode-optimal-control`

Define finite-horizon bounded-control ODE problem, piecewise-constant controls/direct multiple shooting and RK collocation transcription, feasible state map, terminal/path constraints and quadrature objective. Prove existence for a precise compact-control/convex-velocity setting using weak compactness plus state compactness (or restrict initial theorem to convex linear dynamics), then a complete linear-quadratic model with coercive control cost: unique optimum, continuous adjoint optimality system, discrete minimizer convergence and objective/control rate from uniform state/quadrature errors and strong convexity. Nonlinear transcription gets conditional local KKT convergence under LICQ/SOSC and mesh-consistent constraints, not universal global convergence. Sources: Betts, *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*, transcription chapters; Hager (2000), hypotheses/theorems on RK control discretization; Tröltzsch, *Optimal Control of PDEs*, introductory control chapters. B: bounded actuator LQR, chemical dosing, multiple shooting versus single shooting. Dependencies DIF3, NA15/18/21, OPT5–7; owner proves admissible-control compactness/consistency required by the selected theorem.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

bounded actuator LQR, chemical dosing, multiple shooting versus single shooting.

### Prerequisite interfaces

- `DIF3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-15` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `NA-18` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `NA-21` — same-frontier pair owned by **dynamics**; its exact proved items, not the key alone, are the supplier interface.
- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT6` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT7` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## CTRL2 — Finite element pde constrained optimization

**Mathematical contract:** [controlling CTRL2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-ctrl2).

A: `finite-element-pde-constrained-optimization`. B: `finite-element-pde-constrained-optimization-examples`.

### Scope

For linear coercive elliptic state equation and L² tracking plus alpha||q||²/2, alpha>0, with closed convex box constraints, prove existence/uniqueness, state-adjoint-variational inequality, projection formula and reduced Hessian coercivity. Define optimize/discretize choices (variational control versus piecewise-constant control) and prove a concrete O(h) control bound for piecewise constants on shape-regular meshes with stated H¹ control regularity; stronger O(h²) variational-discretization claim requires its actual H² primal/adjoint and domain assumptions. Include parabolic time-dependent extension as a separately proved energy/adjoint contract using NA36; finite-loop reduced-gradient and SQP implementations consume exact residual bounds. 

### Preserved mathematical design

### CTRL2: `finite-element-pde-constrained-optimization`

For linear coercive elliptic state equation and L² tracking plus alpha||q||²/2, alpha>0, with closed convex box constraints, prove existence/uniqueness, state-adjoint-variational inequality, projection formula and reduced Hessian coercivity. Define optimize/discretize choices (variational control versus piecewise-constant control) and prove a concrete O(h) control bound for piecewise constants on shape-regular meshes with stated H¹ control regularity; stronger O(h²) variational-discretization claim requires its actual H² primal/adjoint and domain assumptions. Include parabolic time-dependent extension as a separately proved energy/adjoint contract using NA36; finite-loop reduced-gradient and SQP implementations consume exact residual bounds. Sources: Hinze (2005), *A Variational Discretization Concept in Control Constrained Optimization*, theorem hypotheses; Hinze et al. Chs. 2–3; Tröltzsch Chs. 2–3. B: distributed heat source, boundary control distinguished (trace/regularity not automatic), bang-bang active set. Dependencies DIF3, NA28–30/36, OPT5/8; owner supplies weak lower semicontinuity, compact/control approximation and projection-error lemmas not already available.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

distributed heat source, boundary control distinguished (trace/regularity not automatic), bang-bang active set.

### Prerequisite interfaces

- `DIF3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `NA-28` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-29` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-30` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `NA-36` — same-frontier pair owned by **spatial**; its exact proved items, not the key alone, are the supplier interface.
- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## INV3 — Numerical identifiability and optimal experiment design

**Mathematical contract:** [controlling INV3 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-inv3).

A: `numerical-identifiability-and-optimal-experiment-design`. B: `numerical-identifiability-and-optimal-experiment-design-examples`.

### Scope

Extend existing published response-surface/design material without a second D-optimality theorem. Reuse `def-approximate-linear-model-design-and-optimality-criteria`, `lem-log-determinant-concavity-on-positive-definite-matrices`, `thm-d-optimality-equivalence-theorem`. For nonlinear ODE/PDE observation map F(theta,d), use DIF3 sensitivities, weighted Jacobian J and Fisher/Gauss–Newton matrix Jᵀ W J. Prove full column rank gives local identifiability via a selected square Jacobian minor and the inverse function theorem; rank deficiency is linearized nonidentifiability and does not alone imply nonlinear nonidentifiability (theta↦theta³ at zero). Global identifiability remains separate. Derive quantitative local parameter perturbation bounds under a retained lower singular-value bound and nonlinear remainder control. For computed J_h with ||J_h-J||≤eta, prove singular-value and information-matrix perturbation bounds, and logdet error only when information eigenvalues remain uniformly positive; transport design objective errors/approximate-optimality gaps over a compact design set. Define finite-budget exchange/multiplicative design-weight updates consuming the existing D-equivalence certificate; exact integer design remains a distinct finite problem. 

### Preserved mathematical design

### INV3: `numerical-identifiability-and-optimal-experiment-design`

Extend existing published response-surface/design material without a second D-optimality theorem. Reuse `def-approximate-linear-model-design-and-optimality-criteria`, `lem-log-determinant-concavity-on-positive-definite-matrices`, `thm-d-optimality-equivalence-theorem`. For nonlinear ODE/PDE observation map F(theta,d), use DIF3 sensitivities, weighted Jacobian J and Fisher/Gauss–Newton matrix Jᵀ W J. Prove full column rank gives local identifiability via a selected square Jacobian minor and the inverse function theorem; rank deficiency is linearized nonidentifiability and does not alone imply nonlinear nonidentifiability (theta↦theta³ at zero). Global identifiability remains separate. Derive quantitative local parameter perturbation bounds under a retained lower singular-value bound and nonlinear remainder control. For computed J_h with ||J_h-J||≤eta, prove singular-value and information-matrix perturbation bounds, and logdet error only when information eigenvalues remain uniformly positive; transport design objective errors/approximate-optimality gaps over a compact design set. Define finite-budget exchange/multiplicative design-weight updates consuming the existing D-equivalence certificate; exact integer design remains a distinct finite problem. Sources: Walter–Pronzato, *Identification of Parametric Models from Experimental Data*, local-identifiability chapters; Pukelsheim, *Optimal Design of Experiments*, equivalence/information chapters; DIF3 numerical sensitivity sources for discretization. B: kinetic rate confounding, sensor time selection, local but globally aliased observations, solver tolerance flipping design ranking. Dependencies DIF3, OPT4/5/8, existing D-optimality and singular-value perturbation suppliers (or owner proves Weyl singular-value bound locally). Same-frontier ownership includes all stability/rank/minor/perturbation lemmas.

OPT7 conic completion: include classical SOCP and SDP primal/dual formulations, the PSD logdet barrier with parameter n, self-duality of the PSD cone, complementarity/gap certificates and the short-step theorem using the proved barrier calculus; do not substitute quantum SDP-query algorithms. A weakly infeasible SDP can lack a strict-feasibility certificate, so Phase I failure alone does not certify infeasibility. Prove logdet derivative/Hessian with positive-definite domain retained; reuse the existing logdet-concavity supplier. Sources: Boyd–Vandenberghe §§4.6, 5.9, 11.6; Nesterov–Nemirovskii conic-barrier chapters. B examples add a small SDP relaxation, strict versus weak feasibility, and SOCP robust least squares.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

kinetic rate confounding, sensor time selection, local but globally aliased observations, solver tolerance flipping design ranking.

### Prerequisite interfaces

- `DIF3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT4` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT5` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `OPT8` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `response-surfaces-and-optimal-design` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## STO3 — Simulation gradient estimation and simultaneous perturbation

**Mathematical contract:** [controlling STO3 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-sto3).

A: `simulation-gradient-estimation-and-simultaneous-perturbation`. B: `simulation-gradient-estimation-and-simultaneous-perturbation-examples`.

### Scope

Define pathwise/reparameterized gradient, likelihood-ratio/score gradient, coupled finite difference and SPSA with two function evaluations. Prove interchange under a common integrable derivative envelope, score identity under parameter-independent dominating support (or include boundary term), and unbiasedness/finite variance under explicit weighted moments. Prove coupled-difference variance identity; derive SPSA bias O(c²) with symmetric independent perturbations and reciprocal moments, conditional variance bound O(c^-2), and convergence using STO1 with summability conditions on alpha/c. Stochastic adjoint gradient under SDE discretization is a separate derivative/error interchange, not a consequence of weak payoff convergence. 

### Preserved mathematical design

### STO3: `simulation-gradient-estimation-and-simultaneous-perturbation`

Define pathwise/reparameterized gradient, likelihood-ratio/score gradient, coupled finite difference and SPSA with two function evaluations. Prove interchange under a common integrable derivative envelope, score identity under parameter-independent dominating support (or include boundary term), and unbiasedness/finite variance under explicit weighted moments. Prove coupled-difference variance identity; derive SPSA bias O(c²) with symmetric independent perturbations and reciprocal moments, conditional variance bound O(c^-2), and convergence using STO1 with summability conditions on alpha/c. Stochastic adjoint gradient under SDE discretization is a separate derivative/error interchange, not a consequence of weak payoff convergence. Sources: Glasserman, *Monte Carlo Methods in Financial Engineering*, Ch. 7; Spall (1992), SPSA assumptions/theorem; Mohamed et al. (2020), Monte Carlo gradient estimation survey as navigation only. B: Gaussian reparameterization, moving-support score failure, common random number payoff sensitivity, expensive black-box biology simulator. Dependencies DIF1/3, STO1, existing dominated-convergence/IS suppliers; owner supplies derivative-interchange proof.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

Gaussian reparameterization, moving-support score failure, common random number payoff sensitivity, expensive black-box biology simulator.

### Prerequisite interfaces

- `DIF1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `DIF3` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `STO1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.


## UQ2 — Global sensitivity anova and sobol estimation

**Mathematical contract:** [controlling UQ2 definition and proof design](numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-uq2).

A: `global-sensitivity-anova-and-sobol-estimation`. B: `global-sensitivity-anova-and-sobol-estimation-examples`.

### Scope

For independent inputs and f∈L²(product law), prove Hoeffding/Sobol decomposition by conditional expectations, orthogonality and variance decomposition; define first/total Sobol indices only for positive output variance. Reuse RQMC b-adic Parseval when it actually matches, but do not identify b-adic frequency blocks with all product-space conditional effects. Derive pick-freeze covariance identities and unbiased numerator estimators (ratio index estimates generally biased); prove consistency and finite-fourth-moment joint CLT/delta-method MCSE under its choice convention. Derive PCE coefficient index formulas from UQ1. For differentiable f under a product law with each one-dimensional Poincaré constant C_i, prove total-effect bound `S_Ti <= C_i E|partial_i f|² / Var f`; establish constants for selected uniform/Gaussian laws or consume exact published supplier. Dependent-input sensitivity needs a different allocation and is explicitly a defined Shapley-effects extension with its own finite permutation algorithm/efficiency identity, not the independent Sobol formula. 

### Preserved mathematical design

### UQ2: `global-sensitivity-anova-and-sobol-estimation`

For independent inputs and f∈L²(product law), prove Hoeffding/Sobol decomposition by conditional expectations, orthogonality and variance decomposition; define first/total Sobol indices only for positive output variance. Reuse RQMC b-adic Parseval when it actually matches, but do not identify b-adic frequency blocks with all product-space conditional effects. Derive pick-freeze covariance identities and unbiased numerator estimators (ratio index estimates generally biased); prove consistency and finite-fourth-moment joint CLT/delta-method MCSE under its choice convention. Derive PCE coefficient index formulas from UQ1. For differentiable f under a product law with each one-dimensional Poincaré constant C_i, prove total-effect bound `S_Ti <= C_i E|partial_i f|² / Var f`; establish constants for selected uniform/Gaussian laws or consume exact published supplier. Dependent-input sensitivity needs a different allocation and is explicitly a defined Shapley-effects extension with its own finite permutation algorithm/efficiency identity, not the independent Sobol formula. Sources: Sobol (1993), variance decomposition; Saltelli (2002), estimator identities; Owen (2013), variance components and Sobol indices; Sobol–Kucherenko (2009), derivative-based bounds. B: Ishigami interaction, zero-variance output, correlated-input ambiguity, noisy simulator separating intrinsic noise and input effect. Dependencies UQ1 only for PCE example, existing conditional expectation/Fubini/CLT/delta suppliers; owner supplies general product ANOVA and Poincaré proof.



### Proof construction

Exact proof design/recurrences and same-owner lemma obligations are embedded in scope and full verbatim contract; source theorem hypotheses must be verified before authoring.

### Examples

Ishigami interaction, zero-variance output, correlated-input ambiguity, noisy simulator separating intrinsic noise and input effect.

### Prerequisite interfaces

- `UQ1` — same-frontier pair owned by **optimization**; its exact proved items, not the key alone, are the supplier interface.
- `conditional-expectation` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.
- `randomized-quasi-monte-carlo-and-replicates` — existing-library A-page navigation target; only the exact canonical items named in this contract count as logical suppliers.

### Local prerequisite obligations

The concrete missing lemmas, algorithms, and theorem hypotheses are stated in the linked controlling contract in the optimization audit appendix. The inventory retains the verbatim ownership snapshot; that snapshot records assignment, not mathematical closure.

