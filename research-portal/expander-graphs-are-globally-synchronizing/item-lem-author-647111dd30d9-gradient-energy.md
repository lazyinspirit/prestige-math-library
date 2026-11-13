---
title: Energy identity and displacement for Euclidean gradient trajectories
status: published
research_item: lem-author-647111dd30d9-gradient-energy
dependency_level: 0
---

## Prerequisites

- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:thm-gradient-represents-directional-derivatives-and-steepest-ascent](https://alphabetamath.cc/item/thm-gradient-represents-directional-derivatives-and-steepest-ascent)
- [math:thm-newton-leibniz-with-interior-derivative](https://alphabetamath.cc/item/thm-newton-leibniz-with-interior-derivative)
- [math:thm-norm-inequality-for-the-vector-valued-integral](https://alphabetamath.cc/item/thm-norm-inequality-for-the-vector-valued-integral)
- [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)
- [math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse)
- [math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral)
- [math:thm-total-differentiability-gives-a-local-linear-bound-and-continuity](https://alphabetamath.cc/item/thm-total-differentiability-gives-a-local-linear-bound-and-continuity)
- [math:lem-continuity-is-local-and-pastes](https://alphabetamath.cc/item/lem-continuity-is-local-and-pastes)
- [math:thm-componentwise-limits-and-continuity](https://alphabetamath.cc/item/thm-componentwise-limits-and-continuity)


## Statement

Let $m\ge1$ be an integer, let $a,b\in\mathbb R$ with $a<b$, let $U\subseteq\mathbb R^m$ be open and $f\in C^1(U)$, and let $x:[a,b]\to U$ be a $C^1$ solution of $x'=-\nabla f(x)$ on $(a,b)$. Here $C^1$ on $[a,b]$ means that $x$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its derivative has a continuous extension to $[a,b]$, also denoted $x'$. The gradient is the Euclidean vector of partial derivatives. Then
$$f(x(b))-f(x(a))=-\int_a^b\|\nabla f(x(t))\|^2\,dt,$$
and $\|x(b)-x(a)\|\le\int_a^b\|x'(t)\|\,dt$. We call this last integral the length on $[a,b]$.

## Statement references

[math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse)

[math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral)

## Facts & Assumptions

[F1] The $C^1$ hypothesis on the open-domain map $f$ uses [math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse). The vector derivative and the componentwise vector integral use [math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral); the closed-interval $C^1$ convention is specified in the Statement.

[F2] The chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives) and gradient representation [math:thm-gradient-represents-directional-derivatives-and-steepest-ascent](https://alphabetamath.cc/item/thm-gradient-represents-directional-derivatives-and-steepest-ascent) apply at each interior time.

[F3] A continuous real function on a real interval with $a<b$ is Riemann integrable by [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable). Newton–Leibniz [math:thm-newton-leibniz-with-interior-derivative](https://alphabetamath.cc/item/thm-newton-leibniz-with-interior-derivative) requires continuity on $[a,b]$, differentiability on $(a,b)$, and an integrable extension of the interior derivative; it requires no endpoint derivative.

[F4] For an integrable vector function on $[a,b]$ with $a<b$, [math:thm-norm-inequality-for-the-vector-valued-integral](https://alphabetamath.cc/item/thm-norm-inequality-for-the-vector-valued-integral) gives integrability of its Euclidean norm and bounds the norm of its integral by the integral of its norm.

[F5] Total differentiability at a point implies continuity there by [math:thm-total-differentiability-gives-a-local-linear-bound-and-continuity](https://alphabetamath.cc/item/thm-total-differentiability-gives-a-local-linear-bound-and-continuity).

[F6] Clause 1 of [math:lem-continuity-is-local-and-pastes](https://alphabetamath.cc/item/lem-continuity-is-local-and-pastes) makes composites of continuous maps continuous, including maps between Euclidean subspaces with their inherited topologies.

[F7] For maps from a metric subspace to $\mathbb R^m$ with $m\ge1$, clause 1 of [math:thm-componentwise-limits-and-continuity](https://alphabetamath.cc/item/thm-componentwise-limits-and-continuity) identifies continuity with continuity of every component; clause 3 preserves scalar multiples and inner products.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the energy identity and the displacement bound.

1.1 At every $t\in(a,b)$ the chain rule and gradient representation give $(f\circ x)'(t)=\langle\nabla f(x(t)),x'(t)\rangle=-\|\nabla f(x(t))\|^2$. [F1, F2, given]

1.2 The $C^1$ hypothesis makes $f$ totally differentiable at every point of $U$, hence continuous there. It also makes the entries of its derivative matrix continuous; these are the components of $\nabla f$, so the gradient is continuous by componentwise continuity. Composing with the continuous curve $x$ shows that $f\circ x$ and $\nabla f\circ x$ are continuous on $[a,b]$. Scalar multiplication also makes $-f\circ x$ continuous. Both $x$ and the stipulated continuous extension $x'$ have continuous components on $[a,b]$. [F1, F5, F6, F7, given]

2.1 The real function $t\mapsto\|\nabla f(x(t))\|^2=\langle\nabla f(x(t)),\nabla f(x(t))\rangle$ is continuous by the inner-product clause of [F7], hence integrable. Newton–Leibniz applied to $-f\circ x$ and this integrable extension of its interior derivative gives $f(x(a))-f(x(b))=\int_a^b\|\nabla f(x(t))\|^2\,dt$, which is the asserted energy identity. Applying the same argument on any nondegenerate closed subinterval gives a nonpositive energy increment, since the integrand is nonnegative; thus energy is nonincreasing. [F3, F7, step 1.1, step 1.2, algebra]

3.1 Each component of the continuous extension $x'$ is integrable on $[a,b]$. By the vector-derivative definition, its interior values are the derivatives of the corresponding components of $x$. Each component of $x$ is continuous on $[a,b]$ and differentiable on $(a,b)$, so Newton–Leibniz with that component of $x'$ as the integrable extension applies. Reassembling the resulting scalar identities by the componentwise vector-integral definition gives $x(b)-x(a)=\int_a^b x'(t)\,dt$. The vector-integral norm inequality now yields $\|x(b)-x(a)\|\le\int_a^b\|x'(t)\|\,dt$, including integrability of the speed. [F1, F3, F4, step 1.2] ∎
