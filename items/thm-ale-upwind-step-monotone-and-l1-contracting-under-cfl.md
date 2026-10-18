---
id: thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl
kind: theorem
title: "CFL monotonicity and weighted L1 contraction for the ALE step"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-ale-periodic-moving-grid
  - alg-ale-upwind-finite-volume-step
  - thm-ale-upwind-step-conserves-mass-and-preserves-free-stream
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§§4 and 6, ALE finite-volume conservation and discrete geometric conservation, printed pp. 419–425; the exact scalar estimate is proved locally."
---

## Statement

Suppose the step of [[alg-ale-upwind-finite-volume-step]] succeeds and, for every cell,

$$\frac{\Delta t}{\Delta\xi}\left((c_{i+1/2}^n)^+-(c_{i-1/2}^n)^-\right)\le J_i^n.$$

Then the update is monotone, maps nonnegative cell averages to nonnegative cell averages, and for any two input arrays $U,V$ with outputs $U',V'$ it satisfies

$$\sum_iJ_i^{n+1}|U_i'-V_i'|\le\sum_iJ_i^n|U_i-V_i|.$$

## Facts & Assumptions

**Given:** A periodic moving grid, the successful upwind ALE step, and the stated cellwise CFL inequalities.

[F1] [[def-ale-periodic-moving-grid]]: $c_{i+1/2}=a-w_{i+1/2}$, $J_i^n>0$, and indices are periodic.

[F2] [[alg-ale-upwind-finite-volume-step]]: the update is linear in the input averages and uses the relative-speed upwind flux, provided every $J_i^{n+1}>0$.

[F3] [[thm-ale-upwind-step-conserves-mass-and-preserves-free-stream]]: every successful step conserves weighted mass for arbitrary inputs and preserves constant input arrays.

## Proof

1.1 Put $\mu=\Delta t/\Delta\xi$. Expanding the flux difference in [F2] gives $J_i^{n+1}U_i'=\mu(c_{i-1/2}^n)^+U_{i-1}+[J_i^n-\mu((c_{i+1/2}^n)^+-(c_{i-1/2}^n)^-)]U_i-\mu(c_{i+1/2}^n)^-U_{i+1}$. The first and third coefficients are nonnegative by the sign definitions of positive and negative parts; the middle coefficient is nonnegative by the CFL condition. [given, F1, F2, algebra]

2.1 Divide by the positive $J_i^{n+1}$ from success. The resulting matrix $P$ has nonnegative entries, so $U\le V$ componentwise implies $PU\le PV$, and $U\ge0$ implies $PU\ge0$. By [F3], the update preserves constants, hence every row of $P$ sums to $1$. [F2, F3, step 1.1, algebra]

3.1 For each coordinate vector $e_j$, mass conservation in [F3] gives $\sum_iJ_i^{n+1}P_{ij}=J_j^n$. Linearity and nonnegativity now imply $\sum_iJ_i^{n+1}|U_i'-V_i'|=\sum_iJ_i^{n+1}|(P(U-V))_i|\le\sum_j(\sum_iJ_i^{n+1}P_{ij})|U_j-V_j|=\sum_jJ_j^n|U_j-V_j|$. This is the asserted weighted $L^1$ contraction. [F3, step 2.1, algebra] ∎
