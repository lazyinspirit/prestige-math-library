---
title: Local minima and nonnegative second variation
status: published
research_item: prop-expander-prereq-second-variation-test
dependency_level: 0
---

## Prerequisites

- [math:def-euclidean-local-extrema-and-critical-points](https://alphabetamath.cc/item/def-euclidean-local-extrema-and-critical-points)
- [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)
- [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema)
- [math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian)
- [math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials)


## Statement

Let $U$ be a real-valued $C^2$ function on an open set $O\subseteq\mathbb R^m$, and let $q\in O$ be a local minimum. Thus $U$ has continuous partial derivatives through order two, and $U(q)\le U(x)$ for all $x$ in some neighbourhood of $q$. Write $H=\nabla^2U(q)$ for the matrix of second partial derivatives. Then $\nabla U(q)=0$ and $v^THv\ge0$ for every $v\in\mathbb R^m$. The matrix $H$ is real symmetric, and $z^*Hz\ge0$ for every $z\in\mathbb C^m$, where $z^*$ is the conjugate transpose. Consequently, if $H$ has a strictly negative eigenvalue, $q$ cannot be a local minimum. An eigenvalue here is a scalar $\lambda$ for which $Hw=\lambda w$ for some nonzero vector $w$. This is a necessary condition; no converse is asserted.

## Facts & Assumptions

**Given:** The function $U$, open set $O$, and local minimum $q$ in the statement.

**Goal:** Prove the vanishing gradient, the real and complex quadratic-form inequalities, and the negative-eigenvalue exclusion.

[F1] The local-minimum and Hessian conventions are those of [math:def-euclidean-local-extrema-and-critical-points](https://alphabetamath.cc/item/def-euclidean-local-extrema-and-critical-points) and [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point).

[F2] At an interior differentiable local minimum the gradient vanishes, by [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema).

[F3] For a $C^2$ scalar function, the second-order Taylor expansion at $q$ has remainder $o(\|h\|^2)$, by [math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian).

[F4] Continuous second partial derivatives commute, so $H$ is symmetric, by [math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials).

## Proof

**Proof technique:** direct.

1.1 Since $O$ is open, $q$ is an interior point; $U$ is differentiable there. Hence $\nabla U(q)=0$ by [F2]. [given, F2]

2.1 Fix $v\in\mathbb R^m$. For sufficiently small real $t$, the local-minimum property gives $U(q+tv)-U(q)\ge0$. Taylor expansion and step 1.1 give $U(q+tv)-U(q)=\tfrac12t^2v^THv+o(t^2)$ as $t\to0$ when $v\ne0$; the case $v=0$ is immediate. Dividing by $t^2>0$ and taking the limit yields $v^THv\ge0$. [given, F1, F3, step 1.1]

3.1 By [F4], $H=H^T$. For $z=x+iy$ with $x,y\in\mathbb R^m$, direct expansion gives $z^*Hz=x^THx+y^THy+i(x^THy-y^THx)=x^THx+y^THy\ge0$. [F4, step 2.1, algebra]

4.1 If $Hw=\lambda w$ for a nonzero complex vector $w$ and a real $\lambda<0$, then $w^*Hw=\lambda w^*w<0$, contradicting step 3.1. Thus a strictly negative eigenvalue excludes a local minimum. [step 3.1, algebra] ∎
