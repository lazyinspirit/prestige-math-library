---
id: ex-sdc-two-node-gauss-nonstiff-cubic-ivp
kind: example
title: Two-node Gauss collocation gives the exact endpoint for a nonstiff cubic IVP
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - def-first-order-ode-initial-value-problem-and-solution
  - lem-collocation-quadrature-matrix-well-defined
  - lem-continuous-riemann-lebesgue-agreement
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-ftc-second-part
  - lem-unit-interval-lebesgue-gauss-data-valid
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020
      url: https://gubner.ece.wisc.edu/gaussquad.pdf
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Example

Assume Countable Choice for the Lebesgue moment data. On one step $[0,1]$, take the scalar IVP $y'=t^3$, $y(0)=0$. The field is independent of the state, so its state Lipschitz constant is zero; the example has no stiffness from a state-dependent fast mode.

## Facts & Assumptions

**Given:** The two-node Gauss rule for Lebesgue measure on $[0,1]$ and the IVP in the Example.

[F1] [[def-gauss-quadrature-rule]] and [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: the two-node Gauss rule integrates every polynomial of degree at most three exactly.

[F2] [[def-collocation-quadrature-tableau]]: the collocation endpoint is $y(0)+\sum_{j=1}^2b_jc_j^3$ for this step, and its stages are finite because the right-hand side is independent of stage state.

[F3] [[lem-continuous-riemann-lebesgue-agreement]] and [[thm-ftc-second-part]]: the exact endpoint increment is $\int_0^1t^3dt=1/4$ using either integral convention.

[F4] [[lem-unit-interval-lebesgue-gauss-data-valid]]: Lebesgue measure on $[0,1]$ supplies the required order-four two-node moment data under Countable Choice; these data also satisfy the order-three branch used for exactness.

[F5] [[def-gauss-quadrature-rule]] and [[def-collocation-quadrature-tableau]]: Gaussian weights and collocation weights are integrals of the same cardinal polynomials, so [F3] identifies them.

[F6] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact IVP solution satisfies $y'=t^3$ and $y(0)=0$.

## Verification

1.1 The integrand $s^3$ has degree three, so [F1] gives $\sum_{j=1}^2w_jc_j^3=\int_0^1s^3d\lambda$. The matching of weights in [F5] and agreement with the Riemann integral in [F3] give $\sum_{j=1}^2b_jc_j^3=\int_0^1s^3ds$. The stages solve $U_i=\sum_jQ_{ij}c_j^3$ and are well-defined finite real numbers because $f$ does not depend on $U$. The rule data are valid by [F4] and the axiom premise in the Example. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 The IVP identity [F6] and the scalar FTC [F3] give $y(s)=s^4/4$, hence $y(1)=1/4$. Step 1.1 gives the same collocation endpoint, so the one-step endpoint is exact despite the fact that the collocation polynomial need not equal the exact path at interior points. [F2, F3, F6, step 1.1, algebra] ∎
