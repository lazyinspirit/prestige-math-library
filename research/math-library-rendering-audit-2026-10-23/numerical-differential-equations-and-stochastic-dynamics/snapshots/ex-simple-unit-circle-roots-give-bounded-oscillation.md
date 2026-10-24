---
id: ex-simple-unit-circle-roots-give-bounded-oscillation
kind: example
title: "Simple unit-circle roots give bounded oscillatory modes"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-linear-multistep-order-conditions-from-taylor
  - lem-companion-powers-bounded-under-root-condition
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-quarter-turn-values-and-shift-formulas
  - def-complex-numbers-and-arithmetic
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 2
---

## Example

The consistent three-step formula with $\rho(\zeta)=(\zeta-1)(\zeta^2+1)$ and $\sigma(\zeta)=2$ has simple roots $1,i,-i$ on the unit circle. Its homogeneous modes include $1,i^n,(-i)^n$; their real and imaginary parts are bounded periodic real solutions.

## Facts & Assumptions

**Given:** The root-condition and order conventions in [[def-linear-multistep-method-consistency-order-and-root-condition]].

[F1] [[lem-linear-multistep-order-conditions-from-taylor]] characterizes consistency by the first two moment conditions.

[L1] [[lem-companion-powers-bounded-under-root-condition]] proves that the root condition implies bounded companion powers.

[F2] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives Euler's formula and $|\exp(iy)|=1$ for real $y$.

[F3] [[thm-complex-exponential-addition-and-real-extension]] gives $\exp(z+w)=\exp z\exp w$.

[F4] [[thm-quarter-turn-values-and-shift-formulas]] gives $\cos(\pi/2)=0$ and $\sin(\pi/2)=1$.

[F5] [[def-complex-numbers-and-arithmetic]] defines $i$ by $i^2=-1$.

## Verification

1.1 Expanding gives $\rho(\zeta)=\zeta^3-\zeta^2+\zeta-1$. Thus $\rho(1)=0$, $\rho'(1)=2=\sigma(1)$, and [F1] proves consistency. Since $i^2=-1$ by [F5], the factorization displays three distinct roots $1,i,-i$, all of modulus one, so the root condition holds. [F1, F5, algebra]

1.2 By [F2] and [F4], $i=\exp(i\pi/2)$ and $|i|=|-i|=1$. Repeated use of [F3] gives $i^n=\exp(in\pi/2)$, so $i^n$ has modulus one by [F2]; also $(-i)^n=(-1)^ni^n$ has modulus one. Each is a recurrence mode because substituting $Y_n=\lambda^n$ multiplies the homogeneous recurrence by $\rho(\lambda)$. [F2, F3, F4, algebra]

2.1 Apply [L1] to the root condition in step 1.1. The full homogeneous companion recurrence is bounded, including these periodic modes; no decay of unit-circle modes is asserted. [L1, step 1.1, step 1.2] ∎
