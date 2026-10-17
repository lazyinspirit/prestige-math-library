---
id: thm-imex-euler-algebraic-residual-budget
kind: theorem
title: "IMEX Euler preserves first-order convergence under per-step residuals of order h squared"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-imex-euler-local-order-and-stability
  - lem-imex-euler-local-branch
  - lem-discrete-one-step-error-recurrence-bound
  - def-implicit-residual-and-algebraic-error-units
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
      locator: "§2, implicit stage equations; the residual budget follows from the local branch estimate supplied here."
    - title: "Tobias Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
      locator: "Chapter 6, one-step error recurrence and fixed-time error propagation."
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, and let the exact solution and exact-root IMEX Euler map satisfy the common-tube hypotheses of [[thm-imex-euler-local-order-and-stability]]. Set $\widetilde y_0:=y_0$. At step $n$, suppose the solver returns $\widetilde y_{n+1}$ in the selected branch ball centered at $c_n=\widetilde y_n+h a(\widetilde y_n)$, with unscaled update residual
$$r_n:=\widetilde y_{n+1}-c_n-hb(\widetilde y_{n+1}),\qquad \|r_n\|_2\le C_rh^2.$$
Assume $hL_b\le1/2$ in every branch ball, and that the exact path, numerical states, candidates, and exact branches remain in the common tube. For all sufficiently small $h=T/N$ satisfying these hypotheses, if $\|y_0-y(0)\|_2\le C_0h$, then
$$\max_{0\le n\le N}\|\widetilde y_n-y(t_n)\|_2\le C_T h,$$
where $C_T$ is independent of $h$ and the step index. The residual is in update units; a derivative-scaled residual bound must be multiplied by $h$ before applying this statement.

## Facts & Assumptions

**Given:** The grid, additive IVP, residual candidates, branch balls, common tube, and bounds in the Statement.

[F1] [[thm-imex-euler-local-order-and-stability]]: the exact-root map has local defect at most $C_\ell h^2$ and is Lipschitz with constant $1+Lh$ on the tube.

[F2] [[lem-imex-euler-local-branch]]: on a branch ball with $hL_b<1$, the unscaled update residual gives $\|\widetilde y_{n+1}-y_{n+1}^*\|_2\le\|r_n\|_2/(1-hL_b)$ for its unique exact root $y_{n+1}^*$.

[F3] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_{n+1}\le(1+Lh)e_n+Ch^{p+1}$ for $h=T/N$ and $e_0\le C_0h^p$, then $\max_ne_n\le C_T h^p$ with a constant independent of $h$ and $n$.

[F4] [[def-implicit-residual-and-algebraic-error-units]]: the update residual has the same units as the unknown; the derivative residual is the update residual divided by $h$.

[A1] In each step's closed branch ball $\overline B(c_n,R_n)\subset U$, $R_n>0$, $\|b\|_2\le M_b$, $b$ is $L_b$-Lipschitz, $hM_b\le R_n$, and $hL_b\le1/2$; both the unique exact root and returned candidate lie in that ball. The uniform tube constants in [F1] hold.

## Proof

1.1 Since $hL_b\le1/2$, [F2] gives $\|\widetilde y_{n+1}-\Psi_h(\widetilde y_n)\|_2\le2C_rh^2$, where $\Psi_h(\widetilde y_n)=y_{n+1}^*$ is the exact-root update from the current numerical state. The bound is valid at every step by [A1]. [given, F2, A1, algebra]

2.1 By the triangle inequality, [F1], and step 1.1, $e_{n+1}:=\|\widetilde y_{n+1}-y(t_{n+1})\|_2\le(1+Lh)e_n+(C_\ell+2C_r)h^2.$ Here the first term compares the exact-root map at $\widetilde y_n$ with that map at $y(t_n)$; the local-defect term compares the latter output with the exact next state. [F1, step 1.1, algebra]

3.1 Apply [F3] to this recurrence with $p=1$, $C=C_\ell+2C_r$, and the initial error from the Statement. This proves the displayed $O(h)$ global bound. By [F4], if a solver instead reports the derivative-scaled residual $r_n/h$, the assumed update-residual budget is obtained by multiplying that bound by $h$. [F3, F4, step 2.1, given] ∎

