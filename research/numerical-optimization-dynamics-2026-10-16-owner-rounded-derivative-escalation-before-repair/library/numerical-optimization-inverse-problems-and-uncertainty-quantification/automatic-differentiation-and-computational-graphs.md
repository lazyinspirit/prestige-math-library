---
page: automatic-differentiation-and-computational-graphs
title: "Automatic differentiation and computational graphs"
status: draft
items:
  - def-finite-straight-line-computational-program
  - lem-implicit-sensitivity-error-controlled-by-residual
  - thm-implicit-differentiation-forward-and-adjoint-formulas
  - alg-forward-mode-automatic-differentiation
  - alg-reverse-mode-automatic-differentiation
  - lem-finite-straight-line-program-defines-c1-map
  - lem-finite-straight-line-program-defines-c2-map
  - alg-checkpointed-reverse-schedules
  - alg-differentiate-finite-fixed-point-iteration
  - alg-forward-over-reverse-hessian-vector-product
  - thm-forward-mode-computes-directional-derivative
  - thm-reverse-mode-computes-gradient
  - thm-reverse-mode-work-and-tape-storage-bound
  - thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds
  - thm-finite-iteration-sensitivity-bound-and-residual-limitation
  - thm-forward-over-reverse-computes-hessian-vector-product
  - thm-graph-gradient-error-from-local-jacobian-perturbations
  - rem-real-arithmetic-graph-versus-rounded-execution
examples: []
---

A computational graph here is a finite, topologically ordered real-arithmetic program with differentiable primitive maps and a scalar output. The primal tape records exact graph values and parent slots. Forward mode propagates a tangent in one pass; reverse mode accumulates cotangents from the scalar output. Their correctness follows from the chain rule along the graph, including repeated parent slots. The stated work bound assumes a fixed bounded-arity primitive set whose local pullbacks cost a bounded multiple of their primal work; opaque solver calls need their own rules and costs.

For $C^2$ primitives, forward-over-reverse differentiates the reverse recurrence to produce a Hessian-vector product without forming a Hessian matrix. Branchwise derivatives apply only on a strict active branch; a branch boundary returns NONDIFFERENTIABLE. Checkpointing includes a uniform finite-memory fallback and a separate binomial schedule with explicit replay, storage, and work bounds. Both rely on deterministic replay of the same state and primitive inputs.

Implicit differentiation gives the derivative of a local solution branch only when the residual state Jacobian is nonsingular. A stopped iteration instead differentiates its finite composition; the page bounds that sensitivity under a contraction and gives a residual bound for the implicit sensitivity formula evaluated at an approximate state. The graph-gradient perturbation theorem propagates specified local Jacobian errors. Its application to concrete floating-point factorization and solve primitives awaits the exact interface from the required finite-precision direct-factorization page.
