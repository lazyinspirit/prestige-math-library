---
page: nonlinear-full-approximation-multigrid
title: "Nonlinear full-approximation multigrid"
status: draft
items:
  - alg-fas-two-grid-cycle
  - lem-fas-second-derivative-of-composed-cycle-map
  - alg-fas-vw-cycle
  - lem-fas-coarse-branch-derivative
  - lem-fas-vw-cycle-work-and-status
  - lem-fas-fine-root-fixed-point
  - thm-fas-local-contraction-under-derivative-bound
  - lem-fas-linear-vw-cycle-translation
  - thm-fas-linear-cycle-reduces-to-galerkin-correction
  - lem-fas-inexact-coarse-solve-residual-defect
  - ex-fas-semilinear-reaction-diffusion-local-convergence
examples: []
requires:
  - multigrid-methods-and-complexity
  - nonlinear-equations-and-newton-methods
  - nonlinear-parabolic-compactness-and-monotone-evolution
---

Full-approximation scheme (FAS) applies multigrid directly to nonlinear
residual equations. The coarse right side includes the restricted fine
residual and the tau correction; the coarse solver returns a full
approximation, whose difference from the restricted iterate is prolonged to
the fine level. Finite sweep counts and solver budgets make branch, domain,
and budget failures explicit while keeping each invocation finite.

For a fine iterate $u_h$, the two operator paths generally have different
values. The bottom arrow below is translation by the state-dependent tau term
$\tau(u_h)=F_H(Iu_h)-RF_h(u_h)$; it is not an assertion that the operators
commute without tau.

```tikzcd
u_h \arrow[r,"I"] \arrow[d,"R\circ F_h"'] & Iu_h \arrow[d,"F_H"] \\
RF_h(u_h) \arrow[r,"a\mapsto a+\tau(u_h)"'] & F_H(Iu_h)
```

The square commutes by the definition of $\tau(u_h)$. All proof arguments on
this page establish the identities algebraically; the diagram is only a map
summary.

The page proves exact-root fixed-point consistency for arbitrary admissible
transfer maps and exact reduction to the linear Galerkin correction cycle
under its actual hierarchy and smoother hypotheses. Local convergence is
proved only when the derivative of the actual exact-branch cycle is a strict
contraction and its derivative has a verified Lipschitz bound on an invariant
ball. A local second-derivative composition formula is proved from the chain
and product rules and used to verify the derivative-Lipschitz bounds in the
examples. Inexact coarse solves enter through a separate residual-to-solution
bound. Neither result implies global convergence, a mesh-independent basin,
or blanket linear work without uniform constants and cost data.

