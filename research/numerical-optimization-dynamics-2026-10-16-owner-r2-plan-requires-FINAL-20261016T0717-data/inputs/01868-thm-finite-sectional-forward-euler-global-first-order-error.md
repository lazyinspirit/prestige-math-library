---
id: thm-finite-sectional-forward-euler-global-first-order-error
kind: theorem
title: Sectional forward Euler converges globally with first-order error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-sectional-forward-euler-positivity-cfl
  - thm-finite-sectional-global-ode-and-moment-bounds
  - thm-finite-sectional-forward-euler-positivity-and-conservation
  - thm-forward-euler-one-step-consistency-and-local-error
  - thm-global-error-from-one-step-defect-and-stability
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the grid is finite and the recurrence has a fixed step count.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, §§III.2–III.3"
      url: https://www.unige.ch/~hairer/poly/chap3.pdf
---

## Statement

Fix a finite grid and a final time $T>0$. Let $y(t)=(n(t),L(t))$ be the exact finite sectional solution from [[thm-finite-sectional-global-ode-and-moment-bounds]], with nonnegative initial data and augmented mass $M$. Let $h=T/N$ and apply [[alg-finite-sectional-forward-euler-positivity-cfl]] for $N$ steps, with a uniform CFL bound $h\Lambda_i(n^k)\le1$. Then there is a constant $C_T$, independent of $N$, such that

$$\max_{0\le k\le N}\|y^k-y(t_k)\|_2\le C_T h,\qquad t_k=kh.$$

The constant may depend on the grid, rates, mass, and final time. This is convergence to the specified finite-dimensional sectional ODE; it does not include grid or cutoff error.

## Facts & Assumptions

**Given:** The fixed finite-dimensional autonomous ODE, its positive mass-invariant solution, the fixed-time mesh $h=T/N$, and the uniform positivity CFL.

[F1] [[thm-finite-sectional-global-ode-and-moment-bounds]]: the exact path remains in the compact nonnegative mass simplex with augmented mass $M$.

[F2] [[alg-finite-sectional-forward-euler-positivity-cfl]]: each successful update is forward Euler $y^{k+1}=y^k+hF(y^k)$.

[F3] [[thm-finite-sectional-forward-euler-positivity-and-conservation]]: each accepted step stays in the same compact nonnegative mass simplex.

[F4] [[thm-forward-euler-one-step-consistency-and-local-error]]: on a compact tube where the vector field and its first derivatives are bounded, forward Euler has local defect $O(h^2)$ and one-step Lipschitz factor $1+Lh$.

[F5] [[thm-global-error-from-one-step-defect-and-stability]]: local defect $Ch^{2}$, one-step factor $1+Lh$, and a common compact tube imply a fixed-time global error bound $C_T h$.

## Proof

1.1 The augmented state dimension is finite and its vector field is polynomial plus linear, hence has bounded first derivatives on the compact simplex in [F1]. The exact path and, by [F3], every numerical state remain in that simplex; the full Euclidean state domain is open and contains it. Therefore the hypotheses of [F4] apply uniformly, giving local defect $Ch^2$ and one-step factor $1+Lh$ on this tube. [given, F1, F3, F4, algebra]

2.1 Apply [F5] with initial error zero, the fixed mesh $h=T/N$, and the common compact tube from step 1.1. It gives $\max_{k\le N}\|y^k-y(t_k)\|_2\le C_T h$, as claimed. [given, F2, F4, F5, step 1.1] ∎
