---
page: preconditioner-algorithms-and-residual-metrics
title: "Preconditioner algorithms and residual metrics"
status: published
items:
  - alg-ilu0-fixed-pattern-factorization
  - thm-ilu0-factor-pattern-and-work-counts
  - alg-flexible-gmres-variable-right-preconditioning
  - thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span
examples: []
---

This page adds a fixed-order, fixed-pattern ILU(0) procedure and proves its
stored-factor pattern and exact setup and application counts. Setup work is
counted through pattern intersections; application is counted as two triangular
solves. It also defines flexible GMRES with changing right preconditioners and
proves residual minimization over the span of the actual preconditioned vectors.
The statements keep factor storage, setup, application, and Krylov convergence
separate and make no general preconditioner-quality claim.

The canonical left, right, and symmetric residual maps and the SPD-preconditioned
CG result remain on [[conjugate-gradients-minres-and-preconditioning]].
