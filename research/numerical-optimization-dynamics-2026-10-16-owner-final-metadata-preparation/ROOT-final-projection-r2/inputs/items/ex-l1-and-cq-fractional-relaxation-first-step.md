---
id: ex-l1-and-cq-fractional-relaxation-first-step
kind: example
title: First steps for a scalar fractional relaxation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-uniform-and-graded-grid-l1
  - alg-backward-euler-convolution-quadrature
  - lem-l1-positive-weights-and-discrete-comparison
  - thm-backward-euler-cq-scalar-resolvent-stability
  - def-caputo-derivative-and-fractional-integral
  - def-real-gamma-function-by-the-euler-integral
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §3.3.2
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
proof_strategy: direct
---

## Example

Consider the scalar fractional relaxation equation
$D_C^{1/2}u(t)+u(t)=0$ with $u(0)=1$. On a uniform first step of width
$h>0$, the L1 method returns

$$U^1_{L1}=\frac{1}{1+\Gamma(3/2)\sqrt h},$$

while backward-Euler convolution quadrature returns

$$U^1_{CQ}=\frac{1}{1+\sqrt h}.$$

These are the methods' first-step outputs; this calculation makes no claim
about their later-step values or a long-time limit.

## Facts & Assumptions

**Given:** $0<\alpha=1/2<1$, $\lambda=1$, $u_0=1$, $F^1=0$, and $h>0$.

[F1] [[alg-uniform-and-graded-grid-l1]]: on the first uniform step,
$\delta_h^\alpha U^1=h^{-\alpha}(U^1-U^0)/\Gamma(2-\alpha)$; the returned
sequence satisfies the discrete equation by
[[lem-l1-positive-weights-and-discrete-comparison]].

[F2] [[alg-backward-euler-convolution-quadrature]]: with $V^0=0$,
$(h^{-\alpha}+\lambda)V^1=F^1-\lambda u_0$ and $U^1=u_0+V^1$; the
algorithm's returned sequence satisfies its shifted discrete equation by
[[thm-backward-euler-cq-scalar-resolvent-stability]].

[F3] [[def-real-gamma-function-by-the-euler-integral]]: $\Gamma(q)>0$ for
$q>0$.

## Verification

**Proof technique:** direct.

1.1 For $\alpha=1/2$, the first-step discrete equation is $h^{-1/2}(U^1-1)/\Gamma(3/2)+U^1=0$ by [F1]. Multiplying by $\Gamma(3/2)\sqrt h$ and solving gives $U^1=(1+\Gamma(3/2)\sqrt h)^{-1}$. [given, F1, algebra]

2.1 For CQ, [F2] gives $(h^{-1/2}+1)V^1=-1$, so $V^1=-\sqrt h/(1+\sqrt h)$ and $U^1=1+V^1=(1+\sqrt h)^{-1}$. Both values are positive and less than $1$ because $h>0$ and $\Gamma(3/2)>0$. [given, F2, F3, algebra] ∎
