---
id: lem-fd-profile-affine-coordinate-isometry
kind: lemma
title: Affine normalization isometry for profile coordinates
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ohio State University, Math 6212 Real Analysis II, Theorem 137 (Change of variables) and proof, pp. 49–51"
      url: "https://people.math.osu.edu/costin.9/6211-2018/C.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice: every sequence of nonempty sets has a choice function. For $a\in\mathbb R$ and $\ell>0$, let $I=(a,a+\ell)$, with Lebesgue measure, and let $H_I=L^2(I;\mathbb R)$ and $H_0=L^2((0,1);\mathbb R)$, both formed from measurable functions modulo equality almost everywhere. The map

$$U_{a,\ell}:H_I\to H_0,\qquad U_{a,\ell}[q]=[\xi\mapsto\sqrt{\ell}\,q(a+\ell\xi)]$$

is a well-defined linear isometric bijection. Its inverse is

$$V_{a,\ell}:H_0\to H_I,\qquad V_{a,\ell}[g]=[z\mapsto\ell^{-1/2}g((z-a)/\ell)].$$

## Facts & Assumptions

**Given:** Countable Choice, $a\in\mathbb R$, $\ell>0$, and the Lebesgue $L^2$ quotient spaces on $I=(a,a+\ell)$ and $(0,1)$.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; the change-of-variables supplier below uses this assumption.

[F1] [[def-l-p-space-as-a-quotient-by-null-functions]]: each $L^2$ element is an almost-everywhere equivalence class of measurable representatives with finite squared integral.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism between open Euclidean sets satisfies the change-of-variables formula for every nonnegative Lebesgue-measurable integrand.

## Proof

**Given:** The assumptions and suppliers above.

1.1 The affine map $T:(0,1)\to I$, $T(\xi)=a+\ell\xi$, is a $C^1$ diffeomorphism with derivative $\ell>0$. If $q_1,q_2$ represent the same element of $H_I$, the measurable set $N=\{z\in I:q_1(z)\ne q_2(z)\}$ is null. Apply [F2] to $\mathbf 1_N$ and $T$: $0=\lambda_I(N)=\ell\lambda_{(0,1)}(T^{-1}N)$, so $T^{-1}N$ is null. Therefore the displayed assignment is independent of representatives, and its pointwise formula is linear on representative functions. [given, A1, F2, algebra]

2.1 For a representative $q$ of an element of $H_I$, apply [F2] to the nonnegative function $z\mapsto |q(z)|^2$. The formula gives $\int_I |q(z)|^2\,dz=\ell\int_0^1|q(a+\ell\xi)|^2\,d\xi=\|U_{a,\ell}[q]\|_{H_0}^2$. The right-hand integral is finite by $q\in H_I$, so the image is in $H_0$, $U_{a,\ell}$ is a well-defined linear map, and the norm is preserved. [F1, F2, step 1.1, algebra]

3.1 The inverse affine map $T^{-1}:I\to(0,1)$ is also a $C^1$ diffeomorphism. The same null-set argument makes $V_{a,\ell}$ independent of the representative, and change of variables for $T^{-1}$, whose derivative is $1/\ell$, gives $\|V_{a,\ell}[g]\|_{H_I}^2=\ell^{-1}\int_I|g((z-a)/\ell)|^2\,dz=\int_0^1|g(\xi)|^2\,d\xi$. Direct substitution gives $V_{a,\ell}U_{a,\ell}[q]=[q]$ and $U_{a,\ell}V_{a,\ell}[g]=[g]$; hence $V_{a,\ell}$ is the inverse and $U_{a,\ell}$ is bijective. [F1, F2, step 1.1, algebra] ∎

