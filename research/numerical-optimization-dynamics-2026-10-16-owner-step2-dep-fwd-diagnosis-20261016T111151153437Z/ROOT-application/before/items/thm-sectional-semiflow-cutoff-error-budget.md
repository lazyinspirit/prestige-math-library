---
id: thm-sectional-semiflow-cutoff-error-budget
kind: theorem
title: Sectional size discretization separates grid and cutoff errors
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-conservative-fixed-pivot-redistribution
  - def-infinite-fixed-pivot-sectional-dynamics
  - alg-finite-sectional-coagulation-fragmentation-balance
  - thm-continuous-coagulation-fragmentation-moment-bounds
  - thm-infinite-fixed-pivot-sectional-grid-error
  - lem-cutoff-overflow-return-error-bound
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the estimate is the triangle inequality applied to two proved error budgets.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.4
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

Let $\mu_t$ be a continuous solution on $[0,T]$ with initial mass $M_1$, and let $\nu_t^R$ be the retained measure of the finite sectional system initialized by retaining the projection $P_\Delta\mu_0$ on pivots at most $R$ and placing the projected tail mass $\int_{(R,\infty)}x\,P_\Delta\mu_0(dx)$ in its reported reservoir. Assume $R$ is a pivot endpoint and $\Delta\le1$. Then
$$d_{BL}(\nu_t^R,\mu_t)\le e^{C_Tt}\left[C_QT\Delta+\frac{\Delta}{2}M_0(\mu_t)+\frac{M_1}{R}+\frac{2K_*M_1^2t}{aR}\right],\qquad 0\le t\le T,$$
where $C_Q$ is from [[lem-fixed-pivot-coagulation-fragmentation-quadrature-error]], $C_T$ is a finite bounded-number stability constant, and the terms proportional to $\Delta$, $R^{-1}$ are respectively the grid and cutoff errors. The reservoir itself is diagnostic and does not recreate the omitted transition law.

## Facts & Assumptions

**Given:** The continuous weak model, the finite reported-overflow scheme, and the no-cutoff pivot comparison.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the continuous population satisfies the weak coagulation-fragmentation equation.

[F2] [[def-conservative-fixed-pivot-redistribution]]: in-range sizes are redistributed by positive barycentric weights and above-cutoff products enter a mass reservoir.

[F3] [[alg-finite-sectional-coagulation-fragmentation-balance]]: the finite algorithm applies the in-range pivot rule and omits retained particles for products above $R$.

[F4] [[thm-continuous-coagulation-fragmentation-moment-bounds]]: $M_1$ is constant and $M_0$ is bounded on $[0,T]$.

[F5] [[thm-infinite-fixed-pivot-sectional-grid-error]]: the unbounded-pivot flow differs from $\mu_t$ by at most $e^{C_Tt}C_QT\Delta+(\Delta/2)M_0(\mu_t)$.

[F6] [[lem-cutoff-overflow-return-error-bound]]: replacing the unbounded-pivot flow by the finite reported-overflow flow adds at most $e^{C_Tt}[M_1/R+2K_*M_1^2t/(aR)]$.

## Proof

1.1 By [F1] the target is a continuous-model solution; [F2]–[F3] specify that finite products above $R$ leave the retained measure and enter only the diagnostic reservoir. Form the unbounded-pivot solution $\eta_t$ from the initial projection $P_\Delta\mu_0$. Split the difference as $$d_{BL}(\nu_t^R,\mu_t)\le d_{BL}(\nu_t^R,\eta_t)+d_{BL}(\eta_t,\mu_t).$$ This is the triangle inequality for the discrepancy in [F1]. [given, F1, F2, F3]

2.1 Apply [F5] to the second term and [F6] to the first term. Their stated bounds use the same conserved initial mass $M_1$ and finite-horizon number bound, so taking a common stability constant $C_T$ and adding gives exactly the displayed estimate. The first two contributions vanish with grid spacing, and the last two with cutoff growth. [given, F4, F5, F6, step 1.1, algebra] ∎

