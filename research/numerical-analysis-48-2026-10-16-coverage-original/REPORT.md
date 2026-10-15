# Original46 duplicate-coverage audit

The original frontier should reuse five already covered pairs and move the small NA45 extension into NA44. NA43 needs a genuinely incremental globalization/inexact-certificate pair. The remaining original pairs contain new numerical methods or numerical guarantees; their inherited definitions and baseline results should remain canonical imports.

This is source/planning comparison, not proof acceptance or native readiness. Only new evidence files were written. No existing source, plan, engine state, test, gate or commit changed. The paused engine was not controlled.

## Exact pairs to omit or replace

Omit these newly planned A/B pairs and link their canonical published pages from the Numerical Analysis reading route:

| Original | Omit planned A slug (and `-examples`) | Canonical published coverage |
|---|---|---|
| NA01 | floating-point-arithmetic-and-error-propagation | linear-algebra/matrix-norms-condition-numbers-and-numerical-stability; scalar ledger supplied by BCS statistical-and-computational-error-accounting. |
| NA39 | monte-carlo-integration-and-sampling-error | bayesian-computational-statistics/iid-monte-carlo-integration-and-error and companion; existing error-ledger Euler-bias example. |
| NA40 | quasi-monte-carlo-and-discrepancy-bounds | bayesian-computational-statistics/quasi-monte-carlo-discrepancy-and-rules and companion. |
| NA41 | randomized-quasi-monte-carlo | bayesian-computational-statistics/randomized-quasi-monte-carlo-and-replicates and companion. |
| NA42 | multilevel-monte-carlo-complexity | bayesian-computational-statistics/multilevel-monte-carlo and companion. |

Also omit NA45 `error-budgets-for-computational-inference` and companion as a duplicated ledger introduction. Its genuinely new common-norm-chain/Minkowski theorem and quadrature/ODE/inverse/optimizer instantiations belong to retained NA44 `numerical-inverse-problems-and-regularization-error`. The scalar reference-chain definition, covariance identity and replicate variance stay in published BCS. This absorption is coordinated with `na_coverage_optimization_statistics`.

Replace NA43 `convex-numerical-optimization-for-statistical-computation` and companion with the coordinated new pair `numerical-optimization-globalization-and-inexact-certificates`. Reuse published `alg-gradient-descent` and `alg-damped-newton` unchanged. Add only exact-line-search gradient contraction, global Armijo contraction with explicit step lower bound, finite damped Newton phase/global entry to its already proved local region, and residual/computed-gradient distance certificates. A separately declared exact-line-search oracle/selector is new; another gradient-descent definition is not.

## Important exact coverage distinctions

NA39's promised RMSE is the square root of the already proved unbiased MC variance. The sample-variance centered-square identity is already proved in `thm-iid-monte-carlo-sample-variance-consistency`, proof2.1. The formula E[s_n²]=sigma², if required as an extra explicit statement, follows from that identity and `thm-iid-monte-carlo-mean-moments`; it is a small incremental lemma/example, not grounds to reauthor MC. The canonical sample variance is n>=2 and needs only second moments for these claims. Existing infinite-variance and Euler-bias examples cover the promised cautions.

NA40's actual `thm-koksma-hlawka-integration-bound` has the same finite upper-anchor Hardy-Krause class and half-open star boxes as the approved plan. Its current proof uses anchored finite-grid summation by parts and Riemann convergence, with `lem-finite-hardykrause-variation-implies-riemann-integrability`; no unproved omitted-proof supplier needs authoring again.

NA41's current `thm-rqmc-nested-scramble-zero-net-variance-bound` states exactly the planned constant (b/(b-1))^min(m,d-1)<=e for b>=max(d,2), n=b^m and Borel L² integrands, retaining Countable Choice. Its ANOVA/gain suppliers are locally present. Marginal uniform unbiasedness and independent-full-set replicate variance are also published. Existing smooth-net results provide additional coverage; they need no duplicate NA theorem.

NA42's `thm-mlmc-complexity-under-rate-assumptions` has the same alpha>=1/2, beta>0, work exponent1 and three regimes; `cor-mlmc-euler-finite-l2-and-weak-cost-rate` and `cor-mlmc-euler-hms-autonomous-cost-rate` cover the coupled Euler examples. No independent new MLMC method is needed.

NA43's existing fixed-step1/L rate is not its promised exact-line-search or Armijo rate. Existing local Newton quadratic convergence is not finite global damped-phase convergence. These are retained new extension obligations, not classified covered merely by a method name.

NA02's Cholesky factorization and exact recurrence/cost mathematics are published, but a bounded failed-pivot execution wrapper and computed sqrt/complex/Cholesky/reflector/least-squares stability contracts remain new. The current published Householder theorem is expressly conditional on its local-step A1 premise; do not claim it already proves reflector formation.

NA04 splitting/spectral-radius equivalence, NA05 Arnoldi/GMRES/CG/MINRES/Lanczos processes/exact results, and NA06 residual/preconditioning maps/SPD-CG are published. Retain only new named stationary execution/criteria, sparse cost and extremal Ritz bounds, and ILU0 procedure/pattern/work guarantees in those extension scopes. No canonical solver definition should be copied under a new ID. NA08 randomized Gaussian range finding is genuinely new; PCA statistical eigenspace stability and Eckart-Young do not prove its randomized expected bound.

NA22 must consume published BCS `def-leapfrog-step-map` (arbitrary SPD mass, kick/drift/Verlet) and `thm-leapfrog-is-reversible-and-volume-preserving`. Its new work is symplecticity, controlled local-domain finite-regularity error and modified-energy guarantees. Only restriction of the global map to a proper potential domain needs a new domain interface, not another identical global leapfrog definition.

## All46 disposition map

The machine-readable `original-46-dispositions.json` records every original Scope verbatim, every binding completion, actual currently planned page IDs, exact canonical item paths/status/home pages, and the retained incremental obligation. Counts: five existing-covered, thirteen extend-existing, twenty-eight genuinely-new. These are pair-scope classifications; an extension may contain a genuinely new procedure such as ILU0 while reusing most surrounding concepts.

| Pair | Classification | Retain only this incremental numerical scope |
|---|---|---|
| 01 | existing-covered | Canonical roundoff/conditioning reading route; common-norm ledger goes once to44. |
| 02 | extend-existing | Computed Cholesky/sqrt/complex/reflector/LS stability and execution failure guarantees. |
| 03 | genuinely-new | CSR access, stored-entry matvec/storage/fill cost. |
| 04 | extend-existing | Stationary named procedures/criteria; import splitting/radius theorem. |
| 05 | extend-existing | Sparse work/storage, extremal Lanczos Ritz bounds. |
| 06 | extend-existing | ILU0 procedure/pattern/failure/work, genuine variable-preconditioner interface. |
| 07 | genuinely-new | Multigrid projector/contraction/V-cycle/complexity. |
| 08 | genuinely-new | Gaussian range finder and actual Gaussian-matrix expected-error proof. |
| 09 | extend-existing | General nonlinear-root Newton/finite-difference Jacobian; objective Newton canonical. |
| 10 | genuinely-new | Barycentric polynomial interpolation/remainder; splines canonical elsewhere. |
| 11 | extend-existing | Chebyshev cardinal/Lebesgue/rate transfer; polynomial/density imports. |
| 12 | genuinely-new | Composite midpoint/trapezoid/Simpson and actual derivative error. |
| 13 | genuinely-new | Gaussian quadrature, positive weights, exactness/remainder. |
| 14 | genuinely-new | Finite-depth adaptive Simpson/estimator reliability limits. |
| 15 | genuinely-new | RK tableaus/stage/order analysis, generic ODE imports. |
| 16 | genuinely-new | Multistep zero stability/Dahlquist equivalence. |
| 17 | genuinely-new | Stability functions/regions/stiff scheme guarantees. |
| 18 | genuinely-new | Embedded/controller procedures and justified estimates. |
| 19 | genuinely-new | Grid scheme consistency/stability/Lax equivalence. |
| 20 | genuinely-new | Linear numerical BVP consistency/stability/error. |
| 21 | genuinely-new | Shooting/collocation sensitivity/conditioned error. |
| 22 | extend-existing | Symplecticity/finite-time error/modified energy; canonical kick/drift maps. |
| 23 | genuinely-new | Elliptic finite-difference schemes/errors. |
| 24 | genuinely-new | Parabolic finite-difference space/time errors. |
| 25 | genuinely-new | Hyperbolic difference/CFL/amplification errors. |
| 26 | genuinely-new | Conservative finite-volume weak-limit theorem. |
| 27 | genuinely-new | Monotone FV entropy/BV/compactness/convergence. |
| 28 | extend-existing | Reference FEM, mesh/DOF/trace/approximation; root Sobolev/statistical splines imports. |
| 29 | extend-existing | Discrete Cea/Aubin-Nitsche; continuous weak existence/regularity imports. |
| 30 | genuinely-new | Strang/variational-crime estimates. |
| 31 | genuinely-new | Crouzeix-Raviart nonconforming method/error. |
| 32 | genuinely-new | Nitsche consistency/coercivity/error. |
| 33 | genuinely-new | SIPDG method/penalty/coercivity/error. |
| 34 | genuinely-new | Mixed inf-sup/Fortin/mini Stokes and missing analytic suppliers. |
| 35 | genuinely-new | AFEM estimator/mark/refine/reliability/contraction/complexity. |
| 36 | genuinely-new | Evolution variational/Galerkin/full time error. |
| 37 | extend-existing | Discrete FEM eigenvalue/subspace approximation. |
| 38 | genuinely-new | Spectral collocation/Galerkin/aliasing/weighted rates. |
| 39 | existing-covered | Canonical iid MC reading route. |
| 40 | existing-covered | Canonical QMC reading route. |
| 41 | existing-covered | Canonical RQMC reading route. |
| 42 | existing-covered | Canonical MLMC reading route. |
| 43 | extend-existing | New globalization/inexact certificates extension. |
| 44 | extend-existing | Numerical inverse bias/noise/discretization plus45 normed-ledger extension. |
| 45 | extend-existing | Absorb small normed extension into44, canonical scalar accounting route. |
| 46 | genuinely-new | Dated fixed-d discrepancy open-problem carrier; no outgoing logical use. |

## ODE/SDE prerequisite treatment

Both independent ODE pairs remain genuinely new: `one-step-ode-consistency-and-local-error` and `global-ode-and-density-error`, with all method-specific local defects/stability/tube/order premises and the L=0 recurrence branch retained. Exact Picard existence/smooth dependence is not a numerical convergence guarantee. Define Euler once in the local supplier and consume it in RK/adaptivity/PDE/Euler examples.

Both Euler-Maruyama pairs are already published under numerical-analysis: `euler-maruyama-scheme-and-conditions` and `euler-maruyama-convergence`, with companions. Import canonical `alg-euler-maruyama`, interpolation, moment/increment, finite-L² strong, autonomous HMS and conditional backward-regularity weak theorems. Do not create four replacement SDE pages. Existing published `alg-euler-maruyama-autonomous` is a distinct admissible-domain variant and remains canonical; new examples choose the literal matching variant.

## Limits and next action

The comparison inspects on-disk published carriers and canonical inventories; no assertion about absence of every conceivable theorem is made from title search. For the genuinely-new rows, full approved original scopes/appendices remain authoring obligations, with existing exact suppliers listed or recoverable from their preserved Requires. The native amendment must retarget consumers from omitted pairs to canonical published pages/items and to actual new extension owners; reading routes provide navigation and are not logical premises. Do not downgrade published BCS/LA pages or insert draft items into them. The separate six coverage agents own expanded missing method families beyond the original46.
