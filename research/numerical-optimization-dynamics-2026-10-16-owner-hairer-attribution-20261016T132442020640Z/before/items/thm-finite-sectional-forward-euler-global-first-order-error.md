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

[F4] [[thm-forward-euler-one-step-consistency-and-local-error]]: for a $C^1$ field with the field and its first derivatives bounded on an open cylinder with convex state fibers, forward Euler has local defect $O(h^2)$ when the exact path and every exact-start Euler input/output pair lie in a common compact tube; the derivative bound gives the one-step factor $1+Lh$ for inputs in a common state fiber.

[F5] [[thm-global-error-from-one-step-defect-and-stability]]: with a common compact tube having positive margin in the open domain and containing the exact path, numerical states, and method stages, a uniform local defect $Ch^{2}$ and one-step factor $1+Lh$ imply a fixed-time global error bound $C_T h$.

## Proof

1.1 Let $S_M=\{(n,L):n_i\ge0,\ L\ge0,\ \sum_i x_i n_i+L=M\}$, the compact invariant simplex from [F1] and [F3]. Set $R_S=\max_{z\in S_M}\|z\|_2$ and $B_F=\max_{z\in S_M}\|F(z)\|_2$; these are finite because the grid is finite and $F$ is polynomial. Since $h=T/N\le T$, every exact-start Euler output obeys $\|y(t_k)+hF(y(t_k))\|_2\le R_S+TB_F$. Thus the exact path, all successful numerical states and Euler stage states, and the exact-start Euler inputs and outputs all lie in the compact tube $K=[0,T]\times\overline B(0,R_S+TB_F+1)$. This tube lies with positive margin in the bounded open cylinder $V=(-1,T+1)\times B(0,R_S+TB_F+2)$, whose state fibers are convex. The time-independent finite polynomial field $f(t,z)=F(z)$ and its first derivatives are bounded on $V$. Hence [F4] applies uniformly to every local defect, including the exact-start Euler output, and gives defect $Ch^2$; its derivative bound also gives the one-step factor $1+Lh$ for inputs in $K$. [given, F1, F3, F4, algebra]

2.1 Apply [F5] with initial error zero, the fixed mesh $h=T/N$, and the common compact tube from step 1.1. It gives $\max_{k\le N}\|y^k-y(t_k)\|_2\le C_T h$, as claimed. [given, F2, F4, F5, step 1.1] ∎
