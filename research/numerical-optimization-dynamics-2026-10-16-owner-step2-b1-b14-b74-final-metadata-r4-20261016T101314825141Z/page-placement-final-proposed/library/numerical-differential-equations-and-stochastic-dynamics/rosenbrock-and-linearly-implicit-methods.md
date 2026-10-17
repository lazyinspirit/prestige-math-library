---
page: rosenbrock-and-linearly-implicit-methods
title: Rosenbrock and linearly implicit methods
status: draft
requires:
  - finite-precision-direct-factorizations
  - nonlinear-equations-and-newton-methods
  - implicit-stiff-time-stepping-and-algebraic-error
items:
  - def-rosenbrock-euler-step-map
  - lem-rosenbrock-shifted-matrix-invertibility-bound
  - lem-rosenbrock-shifted-inverse-perturbation
  - lem-rosenbrock-stage-residual-certificate
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
  - lem-rosenbrock-euler-jacobian-approximation-defect
  - prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler
  - alg-rosenbrock-euler-step
  - alg-two-stage-rosenbrock-w-method
  - lem-rosenbrock-euler-local-defect-and-residual-error
  - lem-two-stage-rosenbrock-local-defect-and-residual-error
  - prop-two-stage-rosenbrock-reuses-one-factorization-and-two-solves
  - thm-rosenbrock-computational-steps-terminate-with-finite-work
  - thm-rosenbrock-euler-scalar-a-and-l-stability
  - thm-two-stage-rosenbrock-scalar-l-stability
  - thm-rosenbrock-euler-global-first-order-error
  - thm-two-stage-rosenbrock-global-order-two
  - lem-rosenbrock-matrix-inverse-perturbation
  - lem-rosenbrock-euler-local-defect
  - lem-rosenbrock-euler-step-map-lipschitz
  - thm-rosenbrock-euler-global-first-order
  - thm-rosenbrock-euler-a-l-stable
  - thm-rosenbrock-euler-one-newton-step-for-backward-euler
  - alg-rosenbrock-ros2-step
  - lem-ros2-w-method-order-two-expansion
  - lem-ros2-step-map-lipschitz
  - thm-ros2-a-l-stable-exact-jacobian
  - thm-ros2-global-second-order
examples: []
---

## Summary

The one-stage method solves $(I-\gamma h\widetilde J)k=f(t,y)$ and updates $y+hk$. The named Rosenbrock–Euler method is the $\gamma=1$ case. For autonomous fields that step is one Newton correction of the backward-Euler residual at the initial guess; it is not generally the backward-Euler root. A shifted-system residual can be certified from rounded dot products and subtraction, while a forward-error estimate still needs a separate inverse bound.

The page proves explicit inverse perturbation and Jacobian-approximation bounds, a local defect with an additive stage-residual term, and first-order global error on a common compact tube. The global conclusion requires stage residuals of order $h$ and uniform inverse and state-stability bounds. The exact scalar stability function is A-stable exactly for $\gamma\ge1/2$ and L-stable only for $\gamma=1$.

The selected two-stage formula uses $\alpha=1-1/\sqrt2$, one shared shifted matrix, a midpoint field evaluation, and two residual-certified solves. Its first-stage right-hand side includes $\alpha h\widetilde T$ for the nonautonomous extension; the local proof derives the second-order expansion for both exact-J and bounded Lipschitz W-data. The global order-two bound requires first-stage residuals of order $h$ and second-stage residuals of order $h^2$. Scalar L-stability is proved only for the exact-J branch; no uniform stiff damping, nonlinear contractivity, or claim for arbitrary approximate-J stability is inferred.

The QR stage solver uses one stored Householder factorization for repeated right-hand sides, reports finite failure statuses, and certifies the equation residual against the original shifted system. The residual certificate is not a forward-error guarantee. The method specifications idealize field evaluations and outer vector combinations as exact real operations. Before each QR call, every exact matrix and right-hand side must be exactly representable in the selected stored set; otherwise the algorithm returns a representation failure. A hardware-level convergence theorem for outer operations requires additional certified evaluation and update-error terms.
