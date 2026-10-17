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
  - thm-svrg-epoch-expected-linear-contraction
  - lem-diagonal-adagrad-one-step-regret-bound
  - thm-diagonal-adagrad-regret-bound
examples: []
---

For a finite sum $F=n^{-1}\sum_i f_i$, this page defines SVRG with an independent uniform component index and random inner-iterate output, and SAGA with an independently sampled index and stored component gradients. Local conditional calculations prove both estimators unbiased, give variance bounds relative to a stationary minimizer, and prove the SVRG epoch contraction under convex $L$-smooth components and a $\mu$-strongly convex sum. The SAGA table recurrence is proved under the same component assumptions.

The controlling SAGA contract asks the Lyapunov $V_k+7\eta^2nS_k$ to contract by $1-\mu\eta$ under $\eta\le\min\{1/(3L),\mu/(13L^2)\}$ alone. With the standard initialization, $n=100$, $L=\mu=1$, $x_0=1$, and $\eta=1/13$ give $\mathcal L_1/\mathcal L_0=844/869>12/13$, so that condition is insufficient. The authored corrected theorem adds the sufficient restriction $\eta\le1/(7\mu n)$ for its local proof, without claiming necessity or optimality; the original contract remains escalated for owner reconciliation. No almost-sure conclusion is made.

Diagonal AdaGrad is defined as a well-defined weighted projection update, and its one-step inequality gives the stated coordinatewise regret bound for bounded coordinate diameters. Adam and AMSGrad updates are defined without convergence claims. The Adam counterexample uses unprojected iterates on a periodic affine-loss sequence; AMSGrad follows the assigned convention that takes the maximum of bias-corrected second moments, which differs from Reddi–Kale–Kumar's Algorithm 2. Independent minibatches have conditional variance $\sigma^2/b$; uniform sampling without replacement has the separately derived finite-population correction.

The published control-variate estimator is used only to name the shared algebraic form. Its fixed-integral unbiasedness theorem is not used as a proof for the moving finite-sum optimization estimators.
