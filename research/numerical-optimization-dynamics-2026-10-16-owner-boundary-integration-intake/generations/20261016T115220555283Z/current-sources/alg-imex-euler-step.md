---
id: alg-imex-euler-step
kind: algorithm
title: "One-step IMEX Euler with an implicit branch and residual status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-additive-ode-and-partition
  - def-implicit-residual-and-algebraic-error-units
  - def-euclidean-inner-product
justified_by: [lem-imex-euler-local-branch]
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, the explicit/implicit stage equations (PDF pp. 2–4)."
---

## Definition

For the additive ODE partition [[def-additive-ode-and-partition]], take a current state $y\in U$, a step $h>0$, a closed ball $\overline B(c,R)\subset U$ centered at $c:=y+h a(y)$, bounds $M_b,L_b\ge0$ for $\|b\|_2$ and its Lipschitz constant on that ball, a tolerance $\tau\ge0$, and a solve routine that returns either a candidate $z\in\overline B(c,R)$ or a failure status. The procedure is:

1. If the solve routine is unavailable, return `solver-unavailable`.
2. If $hM_b>R$ or $hL_b\ge1$, return `branch-not-certified` without claiming a root.
3. Call the solve routine on $z=c+h b(z)$.
4. If it returns failure, return that failure status. If it returns $z\notin\overline B(c,R)$, return `out-of-branch-ball`.
5. Compute the update residual $r:=z-c-hb(z)$ in the state units of [[def-implicit-residual-and-algebraic-error-units]]. If $\|r\|_2>\tau$, return `residual-too-large` with $z$ and $r$; otherwise return `success` with $z$ and $r$.

When the routine returns an exact root, $r=0$ and $z$ is the IMEX Euler step $Y=y+h a(y)+h b(Y)$. A success status records only the requested residual check; the forward error conclusion is supplied separately by the residual theorem. This procedure uses one explicit evaluation of $a$ and one implicit solve.
