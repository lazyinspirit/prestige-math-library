---
id: ex-rkc-self-adjoint-heat-stability-work
kind: example
title: "A self-adjoint heat spectrum gives a long RKC1 stability step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-rkc1-chebyshev
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - prop-rkc-stability-intervals-and-stage-degree
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
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §§1–2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.1"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
---

## Example

Consider the self-adjoint heat-mode matrix $A=\operatorname{diag}(-1,-200)$ with one step of length $h=1/2$. Compare one $s=8$ RKC1 step with explicit Euler stability on the same eigenmodes. This is only a stability-work comparison; it makes no accuracy claim.

## Facts & Assumptions

**Given:** The displayed real diagonal matrix, the step size, and the RKC1 and Euler stability results.

[F1] [[alg-rkc1-chebyshev]]: RKC1 with $s$ stages has the scalar polynomial $T_s(1+z/s^2)$ and uses $s$ stage evaluations.

[F2] [[prop-rkc-stability-intervals-and-stage-degree]]: for self-adjoint nonpositive $A$, RKC1 is nonexpansive when $h\rho\le2s^2$; its scalar real stability interval is $[-2s^2,0]$.

[F3] [[prop-euler-midpoint-rk4-orders-and-stability-functions]]: explicit Euler has factor $1+z$ and negative-real stability interval $[-2,0]$.

## Verification

1.1 The eigenvalues of $A$ are $-1$ and $-200$, so $\rho=200$ and $h\rho=100$. For $s=8$, the certified RKC1 bound is $2s^2=128$, hence the full step is stable on both eigenmodes and the matrix update is nonexpansive. [F2, given, algebra]

2.1 The corresponding RKC1 scalar arguments are $z=-1/2$ and $z=-100$; the latter maps to $1+z/s^2=-9/16\in[-1,1]$. The first-order recurrence uses eight stage evaluations for this step. [F1, given, step 1.1, algebra]

3.1 For Euler on the $-200$ mode, one step of length $1/2$ has $z=-100$ and factor $1+z=-99$, whose absolute value exceeds one. If Euler instead divides the same time interval into $m$ equal substeps, stability on that mode requires $(h/m)200\le2$, hence $m\ge50$. For $m\ge50$, the Euler argument on the $-1$ mode has magnitude $h/m=1/(2m)\le1/100\le2$, so both modes are stable. Thus the eight-stage RKC1 step uses fewer right-hand-side evaluations than stable Euler substepping for this spectrum, without implying comparable accuracy. [F3, step 1.1, algebra] ∎