---
page: variance-reduced-finite-sum-and-adaptive-gradient-optimization
title: Variance reduced finite sum and adaptive gradient optimization
status: draft
requires:
  - variance-reduction-and-randomized-integration
  - proximal-gradient-and-accelerated-composite-optimization
  - stochastic-approximation-and-stochastic-gradient-methods
items:
  - alg-adam-update
  - alg-amsgrad-update
  - lem-finite-sum-gradient-is-average
  - lem-positive-diagonal-map-preserves-closed-convexity
  - alg-saga-finite-sum-method
  - alg-svrg-finite-sum-method
  - cex-adam-periodic-linear-losses-force-divergence
  - lem-convex-smooth-component-gradient-cocoercivity
  - thm-independent-minibatch-conditional-variance
  - alg-diagonal-adagrad-online-regret
  - cex-saga-linear-factor-fails-under-standard-initialization
  - lem-saga-estimator-and-table-recurrence
  - lem-svrg-unbiasedness-and-variance-bound
  - lem-diagonal-adagrad-subproblem-well-defined
  - thm-saga-expected-linear-contraction
  - thm-saga-constant-step-memory-capped-linear-contraction
  - thm-svrg-epoch-expected-linear-contraction
  - lem-diagonal-adagrad-one-step-regret-bound
  - thm-diagonal-adagrad-regret-bound
examples: []
---

For a finite sum $F=n^{-1}\sum_i f_i$, this page defines SVRG with an independent uniform component index and random inner-iterate output, and SAGA with an independently sampled index and stored component gradients. Local conditional calculations prove both estimators unbiased, give variance bounds relative to a stationary minimizer, and prove the SVRG epoch contraction under convex $L$-smooth components and a $\mu$-strongly convex sum. The SAGA table recurrence is proved under the same component assumptions.

For the same SAGA potential $V_k+7\eta^2nS_k$, the constant-step theorem proves the factor $1-\min\{\mu\eta,1/(7n)\}$ for every $0<\eta\le1/(10L)$, including an $n$-independent step. The faster factor $1-\mu\eta$ applies when additionally $\mu\eta\le1/(7n)$. The original memory-scaled sufficient theorem is retained, and the standard-initialization counterexample still refutes omitting that rate cap. The controlling contract separates this branch from the broader constant-step result and states each rate restriction explicitly. The new theorem also bounds the expected objective by $(L/2)q^k\mathcal L_0$. Component-gradient counts and maintained-table arithmetic are distinct from total runtime; no almost-sure conclusion is made.

Diagonal AdaGrad is defined as a well-defined weighted projection update, and its one-step inequality gives the stated coordinatewise regret bound for bounded coordinate diameters. Adam and AMSGrad updates are defined without convergence claims. The Adam counterexample uses unprojected iterates on a periodic affine-loss sequence; AMSGrad follows the assigned convention that takes the maximum of bias-corrected second moments, which differs from Reddi–Kale–Kumar's Algorithm 2. Independent minibatches have conditional variance $\sigma^2/b$; uniform sampling without replacement has the separately derived finite-population correction.

The published control-variate estimator is used only to name the shared algebraic form. Its fixed-integral unbiasedness theorem is not used as a proof for the moving finite-sum optimization estimators.
