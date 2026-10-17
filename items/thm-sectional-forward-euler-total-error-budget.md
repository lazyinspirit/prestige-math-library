---
id: thm-sectional-forward-euler-total-error-budget
kind: theorem
title: Sectional forward Euler separates temporal, quadrature, and cutoff errors
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - thm-sectional-semiflow-cutoff-error-budget
  - thm-finite-sectional-forward-euler-global-first-order-error
  - def-bounded-lipschitz-discrepancy-for-measures
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the result combines the proved finite-dimensional error and cutoff estimates.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §§III.2–III.3"
      url: https://www.unige.ch/~hairer/poly/chap3.pdf
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.2
      url: https://fncbook.com/euler/
---

## Statement

Assume all hypotheses of [[thm-sectional-semiflow-cutoff-error-budget]], with continuous-model solution $\mu_t$ on $[0,T]$, initial mass $M_1$, grid spacing $\Delta\le1$, and pivot endpoint $R$. Let the finite grid have $m$ retained bins, take $T>0$, an integer $N\ge1$, and $h=T/N$. Initialize both the exact finite sectional system and forward Euler by that theorem's same retained projection and tail-mass reservoir. Let $y^k$ be the successful forward-Euler states under the uniform positivity CFL, and let $\nu_t^R$ be the exact finite-sectional retained measure. There are constants $C_{E,T,R,\Delta}$ and $C_T$ independent of $N$ such that
$$d_{BL}\left(\sum_i n_i^N\delta_{x_i},\mu_T\right)\le \sqrt m\,C_{E,T,R,\Delta}h+e^{C_TT}\left[C_QT\Delta+\frac\Delta2M_0(\mu_T)+\frac{M_1}R+\frac{2K_*M_1^2T}{aR}\right].$$
The first term is temporal error for the fixed finite ODE; the terms in $\Delta$ and $R^{-1}$ are the separate grid and cutoff errors. The temporal constant may depend on the fixed grid and cutoff.

## Facts & Assumptions

**Given:** A fixed finite-dimensional sectional ODE, its accepted forward-Euler steps, and the grid/cutoff estimate.

[F1] [[thm-finite-sectional-forward-euler-global-first-order-error]]: $\|y^N-y(T)\|_2\le C_{E,T,R,\Delta}h$ for the fixed finite system.

[F2] [[thm-sectional-semiflow-cutoff-error-budget]]: the exact finite-sectional retained measure differs from $\mu_T$ by the displayed grid and cutoff terms.

[F3] [[def-bounded-lipschitz-discrepancy-for-measures]]: $d_{BL}(\sigma,0)\le\|\sigma\|_{TV}$.

## Proof

1.1 Write the population-coordinate error vector as $e=n^N-n(T)$. Its total-variation norm as an atomic signed measure is at most $\sum_{i=1}^m|e_i|\le\sqrt m\|e\|_2$ by Cauchy-Schwarz. Thus [F1] and [F3] bound the temporal discrepancy by $\sqrt m C_{E,T,R,\Delta}h$. [F1, F3, algebra]

2.1 Insert the exact finite-sectional measure between the Euler retained measure and $\mu_T$. The triangle inequality and [F2] add the temporal term from step 1.1 to the grid and cutoff terms in [F2], giving the asserted separated error budget. [F2, step 1.1, algebra] ∎

