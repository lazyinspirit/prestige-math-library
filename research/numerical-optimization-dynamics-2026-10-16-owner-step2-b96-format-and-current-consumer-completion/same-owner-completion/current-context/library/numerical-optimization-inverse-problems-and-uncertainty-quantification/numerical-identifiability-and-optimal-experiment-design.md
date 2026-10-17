---
page: numerical-identifiability-and-optimal-experiment-design
title: "Numerical identifiability and optimal experiment design"
status: draft
requires:
  - response-surfaces-and-optimal-design
  - inequality-kkt-duality-and-optimality-certificates
  - proximal-gradient-and-accelerated-composite-optimization
  - gauss-newton-and-levenberg-marquardt-methods
  - discrete-continuous-and-pde-adjoint-sensitivities
items:
  - def-nonlinear-experimental-design-and-local-identifiability
  - lem-computed-sensitivity-singular-value-perturbation
  - lem-logdet-information-perturbation-bound
  - alg-finite-budget-multiplicative-d-optimal-design
  - lem-information-matrix-perturbation-bound
  - rem-gauss-newton-information-is-not-full-hessian
  - thm-full-rank-sensitivity-implies-local-identifiability
  - thm-local-information-positive-definite-iff-full-column-rank
  - thm-local-parameter-perturbation-bound
  - thm-multiplicative-design-update-well-defined-and-terminates
  - thm-uniform-sensitivity-error-controls-design-gap
  - thm-equivalence-violation-bounds-d-optimal-design-gap
examples: []
---

This page defines finite nonlinear observation designs, local and global identifiability, stacked sensitivities, and weighted information. Full column rank of the sensitivity Jacobian is sufficient for local identifiability by a selected square minor and the inverse function theorem; rank deficiency alone is not a nonlinear nonidentifiability conclusion. A local parameter-error bound additionally assumes a lower singular-value bound and a Lipschitz Jacobian on a specified ball.

For computed sensitivities, singular values and weighted information matrices have explicit perturbation bounds. Log-determinant error is controlled only under a uniform positive eigenvalue floor, and the design-gap theorem also assumes compactness and uniform error over the design set. The finite-budget multiplicative procedure uses exact arithmetic, reports its equivalence violation, and makes no convergence claim; exact integer allocation remains a separate problem. The Gauss–Newton matrix is identified with only the first term of the nonlinear least-squares Hessian.
