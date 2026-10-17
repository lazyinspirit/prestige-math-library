---
id: thm-imex-euler-global-order-one
kind: theorem
title: "IMEX Euler is first-order convergent on a common compact tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-imex-euler-local-order-and-stability, thm-global-error-from-one-step-defect-and-stability, def-additive-ode-and-partition]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, first-order additive step and local/global error framework, PDF pp. 2–4."
    - title: "Tobias Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
      locator: "Chapter 6, consistency, stability, and global convergence of one-step ODE methods."
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, and let $y(t)$ solve the additive IVP of [[def-additive-ode-and-partition]] on $[0,T]$. Assume the exact path, all numerical states, and every selected implicit branch remain in a common compact convex tube with positive margin in the state domain. Suppose the uniform hypotheses of [[thm-imex-euler-local-order-and-stability]] hold on this tube and use the exact-root IMEX Euler map with exact initial value $y_0=y(0)$. For all sufficiently small $h=T/N$ satisfying these hypotheses, there is a constant $C_T$, independent of $h$ and the step index, such that
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le C_T h.$$
This is a fixed-time first-order result for the selected local branch; it makes no assertion about other implicit roots.

## Facts & Assumptions

**Given:** The finite grid, exact solution, exact-root IMEX Euler map, common tube, and branch hypotheses in the Statement.

[F1] [[thm-imex-euler-local-order-and-stability]]: on the common tube, the exact-start defect is bounded by $Ch^2$ and the selected-root map is Lipschitz with constant $1+Lh$.

[F2] [[thm-global-error-from-one-step-defect-and-stability]]: for a one-step map on a common compact tube, uniform local defect $Ch^{p+1}$, one-step Lipschitz constant $1+Lh$, and initial error at most $C_0h^p$ imply a fixed-time global error bound of order $h^p$.

[A1] The exact path, numerical states, and all implicit stages stay in the tube, so the uniform constants and map hypotheses of [F1] hold at every step.

## Proof

1.1 By [F1] and [A1], for each $n<N$ the exact-start local defect satisfies $\|\Psi_h(y(t_n))-y(t_{n+1})\|_2\le Ch^2$, and for all compared states in the tube $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$. The exact initial value gives zero initial error, which is at most $0\cdot h$. [F1, A1, algebra]

2.1 Apply [F2] with $p=1$, $C_0=0$, and the constants from step 1.1. All hypotheses are satisfied by [A1], so its fixed-time estimate gives $\max_{n\le N}\|y_n-y(t_n)\|_2\le C_T h$ for a constant independent of $h$ and $n$. [F2, A1, step 1.1] ∎

