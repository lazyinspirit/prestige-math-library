---
id: ex-ip-iterative-tikhonov-solve-stopped-with-residual
kind: example
title: Early stopping leaves a nonzero Tikhonov normal residual
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-error-budget-for-computed-inversion
  - lem-finite-rank-operators-are-compact
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $X=Y=\mathbb R$ with the usual inner product, let $A=A_h=I$, let
$x^\dagger=0$, $y=y_{h,\delta}=0$, $e=0$, and set $\lambda=1$. The exact
Tikhonov output is $R_{\lambda,h}y_{h,\delta}=0$, and its normal equation is
$2x=0$. Apply one Richardson step with step size $1/4$ from $x_0=1/2$:
$$\widetilde x_h=x_1=x_0-\frac14(2x_0)=\frac14.$$
The returned output has exact normal-equation residual
$$r_{h,h}=2\widetilde x_h=\frac12\ne0,$$
and reconstruction error $|x^\dagger-\widetilde x_h|=1/4$. The bias, data,
operator, and pre-inversion channels are zero; only the algebraic solve channel
is nonzero.

## Example references

[[def-ip-error-budget-for-computed-inversion|Five-channel Tikhonov error budget]]

## Facts & Assumptions

**Given:** The one-dimensional real Hilbert spaces $X=Y=\mathbb R$, the identity maps $A=A_h=I$, $x^\dagger=0$, $y=y_{h,\delta}=0$, $e=0$, $\delta=0$, $\lambda=1$, initial iterate $x_0=1/2$, and Richardson step size $1/4$.

[F1] [[def-ip-error-budget-for-computed-inversion]]: The solve vector is $b_{\mathrm{solve}}=R_{\lambda,h}y_{h,\delta}-\widetilde x_h$, and the exact normal residual is $r_{h,h}=(A_h^*A_h+\lambda I_X)\widetilde x_h-A_h^*y_{h,\delta}$.

[F2] [[lem-finite-rank-operators-are-compact]]: Every bounded linear operator whose range has a finite ordered basis is compact.

## Verification

**Given:** The scalar data and iteration in the Example.

1.1 The identity is bounded and has the finite range basis $\{1\}$, so it is compact by [F2]. The shifted normal operator is $A_h^*A_h+\lambda I=2I$, which is bijective with inverse $(1/2)I$; hence the finite scalar instance satisfies [F1]. [given, F1, F2, construct, algebra]

1.2 One Richardson step for $2x=0$ from $x_0=1/2$ gives $\widetilde x_h=1/2-(1/4)(2\cdot1/2)=1/4$. Substitution into the residual definition gives $r_{h,h}=2(1/4)-0=1/2$, while the exact regularized output is $R_{\lambda,h}0=0$. [given, F1, algebra]

2.1 The truth bias and data perturbation vanish because $x^\dagger=y=e=0$. Since $A_h=A$, $d_h=0$ and the regularized-operator difference vanishes; the pre-inversion channel is therefore also zero. The solve channel is $0-\widetilde x_h=-1/4$, so its norm equals the reconstruction error $1/4$ and is at most the residual allowance $|r_{h,h}|/\lambda=1/2$. [given, F1, step 1.2, algebra] ∎
