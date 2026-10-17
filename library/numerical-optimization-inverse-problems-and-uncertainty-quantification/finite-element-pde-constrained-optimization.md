---
page: finite-element-pde-constrained-optimization
title: "Finite element pde constrained optimization"
status: draft
items:
  - def-pde-box-control-set
  - lem-separable-hilbert-bounded-sequence-weak-subsequence
  - alg-fem-control-active-set-box-quadratic-solve
  - lem-pde-box-control-set-basic-properties
  - lem-pde-l2-control-space-separable
  - def-linear-elliptic-pde-constrained-control-problem
  - lem-box-control-projection-is-pointwise-clipping
  - thm-fem-control-active-set-box-quadratic-solve-sound-finite
  - lem-p0-box-projection-is-clipped-cell-average
  - lem-pde-box-control-set-weakly-sequentially-closed
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
  - thm-linear-elliptic-control-existence-and-variational-inequality
  - lem-piecewise-constant-control-h1-projection-error
  - lem-fem-control-gradient-residual-bound
  - cor-linear-elliptic-control-projection-formula
  - alg-fem-control-proximal-gradient-certified-residual
  - thm-p0-control-fem-o-h-error
  - thm-parabolic-control-adjoint-gradient-extension
  - thm-fem-control-proximal-gradient-residual-distance-bound
  - thm-variational-fem-control-o-h2-error
  - alg-fem-control-active-set-sqp-with-finite-residual-status
  - thm-fem-control-active-set-sqp-finite-budget-certificate
examples: []
---

For a bounded coercive linear elliptic state equation with distributed $L^2$ controls, this page defines a closed pointwise box and a quadratic tracking objective with regularization $\alpha\|q\|_{L^2}^2/2$, $\alpha>0$. The state space uses the full $H^1$ norm, and its Hilbert property under Countable Choice is proved locally. The page proves state and adjoint well-posedness, differentiates the reduced objective, and gives existence, uniqueness, the variational inequality, and the pointwise clipping formula. The Hilbert-space existence argument states its Countable Choice and separability inputs explicitly.

The finite-element section distinguishes cellwise-constant control discretization from variational control discretization. The $O(h)$ result assumes $H^1$ control regularity, a uniform $H^1$ bound for the projected adjoint, an adjoint-consistent finite-element reduced objective, and a complete first-Strang gradient-residual ledger. The conditional $O(h^2)$ result requires adjoint consistency for its discrete objective, actual primal and adjoint $H^2$ regularity, matching dual approximation, uniform state/adjoint $L^2$ errors, and every form, load, geometry, and quadrature defect at the stated order. It makes no rate claim on arbitrary Lipschitz or reentrant domains.

The finite-loop projected-gradient method optimizes the exact continuous PDE objective over a cellwise-constant control box while using finite-return state/adjoint and projection routines with explicit Strang bounds and exact projected cell values and residual; failure of either routine returns an inconclusive status. Its certified status bounds the exact projected-gradient residual; a separate theorem converts that residual to distance from the restricted optimum. The exhaustive active-set algorithm is an exact-arithmetic finite-dimensional reference. The SQP branch returns the QR-computed step and reports only a certified active linear-system residual unless feasibility, complementarity, conditioning, and the required local hypotheses are separately verified. The parabolic extension assumes a real evolution triple with separable energy space $V$. It is a separate energy-space result and does not inherit an elliptic finite-element rate.
