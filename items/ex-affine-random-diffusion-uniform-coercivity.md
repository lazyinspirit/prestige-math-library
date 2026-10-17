---
id: ex-affine-random-diffusion-uniform-coercivity
kind: example
title: A bounded random diffusion coefficient remains uniformly coercive
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-product-chaos-input
  - def-uniformly-elliptic-affine-random-diffusion
  - thm-affine-random-diffusion-solution-is-bochner
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
proof_strategy: direct
---

## Example

On $D=(0,1)$, let $Y$ be uniform on $[-1,1]$, take the degree cutoff $p_1=0$,
set $a(x,Y)=2+Y$, and set the forcing $F(Y)=0$. This is an affine random
diffusion with explicit uniform ellipticity bounds; its unique pointwise and
Bochner weak solution is zero.

## Facts & Assumptions

**Given:** The bounded interval $D$, uniform product law on $[-1,1]$, constant coefficient terms $a_0=2$, $a_1=1$, and zero forcing.

[F1] [[def-finite-product-chaos-input]] permits a finite product law with the stated admissible cutoff.

[F2] [[def-uniformly-elliptic-affine-random-diffusion]] requires $0<a_*\le a(x,y)\le a^*$ for every supported parameter and uses the gradient norm on $H_0^1(D)$.

[F3] [[thm-affine-random-diffusion-solution-is-bochner]] gives the unique pointwise and Bochner solution under those hypotheses.

## Verification

1.1 At cutoff $p_1=0$, the only moment-Gram matrix is $[1]$, so the uniform probability law is admissible by [F1]. Its support is $\Gamma=[-1,1]$, and for every $y\in\Gamma$, $1\le2+y\le3$. Thus the diffusion definition applies with $a_*=1$ and $a^*=3$, and $F=0$ is a bounded affine forcing. [F1, F2, given, algebra]

2.1 The pointwise weak equation is $\int_0^1(2+y)u'(x)v'(x)\,dx=0$ for every $v\in H_0^1(0,1)$. Taking $v=u$ and using $2+y\ge1$ gives $\|u\|_{H_0^1}^2\le0$, so $u=0$ for every $y$. This solution is a strongly measurable square-integrable zero function and satisfies the Bochner equation; uniqueness also follows from [F3]. [F2, F3, step 1.1, algebra] ∎