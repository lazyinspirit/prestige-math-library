---
page: adaptive-ode-solvers-and-error-estimation
title: Adaptive ODE solvers and error estimation
status: published
items:
  - lem-maximal-ode-solution-extends-from-compact-tube
  - thm-ode-residual-a-posteriori-error-bound
  - thm-piecewise-c1-ode-residual-a-posteriori-error-bound
  - def-embedded-runge-kutta-pair-and-error-estimator
  - alg-bounded-adaptive-runge-kutta-controller
  - def-heun-euler-embedded-runge-kutta-pair
  - prop-embedded-pair-estimator-asymptotics
  - def-heun-quadratic-dense-output
  - def-validated-residual-tube-certificate
  - rem-fixed-mesh-global-error-does-not-certify-adaptivity
  - thm-bounded-adaptive-runge-kutta-controller-terminates
  - thm-heun-euler-pair-local-orders-and-estimator
  - lem-rational-expression-derivative-recursion-correct
  - thm-heun-dense-output-local-order-two
  - alg-validated-residual-tube-certificate-checker
  - thm-validated-residual-tube-certificate-sound
  - thm-validated-residual-tube-checker-terminates
examples: []
---

## Summary

An embedded explicit Runge–Kutta pair shares stages and reports the difference between its high and low outputs. The difference estimates the lower-order local defect only asymptotically when its leading coefficient is nonzero; it is used as a heuristic by a fully specified accept/reject controller with norm scaling, safety factor, step bounds, and a finite attempt budget. Neither an accepted step nor a completed controller run certifies global error or diagnoses stiffness. The generic fixed uniform-mesh global-error theorem has a distinct mesh and exact-defect premise.

For the Euler–Heun pair, the page derives both local defects and constructs a quadratic dense output with its own uniform within-step error. It also states the continuous-residual a posteriori error estimate. A separate choice-free proof covers piecewise-$C^1$ reconstructions, and a bounded residual plus one-sided Lipschitz estimate yields the integrating-factor bound.

The validated branch is intentionally finite and narrow: it checks rational ODE expression DAGs, dyadic polynomial reconstructions, interval enclosures, residuals, Jacobian bounds, and a strict radius supersolution. Its soundness argument accounts for the actual stored reconstruction, including interpolation or stage error represented in its coefficients. Unsupported operations or failed inclusions return inconclusive; no embedded difference is treated as a residual certificate.
