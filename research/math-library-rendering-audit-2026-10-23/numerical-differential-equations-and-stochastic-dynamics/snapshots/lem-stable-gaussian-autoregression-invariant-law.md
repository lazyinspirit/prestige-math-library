---
id: lem-stable-gaussian-autoregression-invariant-law
kind: lemma
title: "Invariant Gaussian law and uniqueness for a stable autoregression"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-independent-random-elements
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-dominated-convergence
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited from the multivariate normal, product-probability, and characteristic-function uniqueness interfaces; the covariance series and characteristic-function iteration use no further choices."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Statement

Assume AC. Let $A\in\mathbb R^{d\times d}$ and $G\in\mathbb R^{d\times m}$, with finite $d,m\ge1$. Suppose there are $C<\infty$ and $0<\theta<1$ such that $\|A^n\|\le C\theta^n$ for every integer $n\ge0$. A probability law $\nu$ is **invariant** for this recursion if, whenever $Z_0\sim\nu$ is independent of a fresh $\xi_1\sim N_m(0,I_m)$, the updated state $AZ_0+G\xi_1$ also has law $\nu$. Consider the Markov chain
$$Z_{n+1}=AZ_n+G\xi_{n+1},$$
where each $\xi_{n+1}\sim N_m(0,I_m)$ is independent of the current state and of the earlier innovations. Then the chain has a unique invariant probability law. It is $N_d(0,P)$, where the convergent positive-semidefinite series
$$P=\sum_{j=0}^{\infty}A^jGG^T(A^T)^j$$
satisfies $P=APA^T+GG^T$. This is the unique finite matrix solution of that discrete Lyapunov equation.

## Facts & Assumptions

**Given:** AC, matrices $A,G$ with the power bound above, and the stated Gaussian autoregression.

[F1] [[def-multivariate-normal-law]] and [[lem-characteristic-function-of-a-multivariate-normal-law]]: for every positive-semidefinite covariance $P$, $N_d(0,P)$ exists and has characteristic function $u\mapsto e^{-u^TPu/2}$, including singular $P$.

[F2] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]: affine images transform characteristic functions by the corresponding linear map, and the characteristic functions of finite sums of independent vectors multiply coordinatewise through their scalar projections.

[F3] [[def-independent-random-elements]] and [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: finite product probability spaces exist and their coordinate random elements are independent.

[F4] [[lem-characteristic-function-of-a-multivariate-normal-law]]: any Borel probability law with characteristic function $u\mapsto e^{-u^TPu/2}$ equals $N_d(0,P)$, including singular $P$.

[F5] [[thm-dominated-convergence]]: pointwise convergence dominated by one integrable function permits passage to the limit in the integral.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[F5]; no choice is used in the convergent series or finite-dimensional characteristic-function iteration.

## Proof

**Given:** The assumptions above.

1.1 The power bound gives $\|A^jGG^T(A^T)^j\|\le C^2\theta^{2j}\|G\|^2$. The geometric series therefore converges entrywise and in matrix norm. Each summand is symmetric positive semidefinite because $x^TA^jGG^T(A^T)^jx=|G^T(A^T)^jx|^2\ge0$, so $P$ is symmetric positive semidefinite. Shifting the summation index gives $APA^T+GG^T=P$. [given, algebra]

2.1 Let $Z\sim N_d(0,P)$ and $\xi\sim N_m(0,I_m)$ be independent; [F3] supplies their finite product probability space. By [F1]–[F2], $AZ+G\xi$ has characteristic function $u\mapsto\exp[-\tfrac12u^T(APA^T+GG^T)u]=\exp[-\tfrac12u^TPu]$. The covariance identity in step 1.1 and [F4] show that $AZ+G\xi$ has the same law as $Z$. Thus $N_d(0,P)$ is invariant. [A1, F1, F2, F3, F4, step 1.1, given, algebra]

3.1 Let $\nu$ be any invariant probability law and let $\varphi(u)=\int e^{iu\cdot x}\,\nu(dx)$. Invariance and independence of a fresh innovation imply [A1, F1, F2, F3, F4, F5, given, step 1.1, step 2.1, algebra]
$$\varphi(u)=\varphi(A^Tu)\exp\!\left(-\tfrac12u^TGG^Tu\right).$$
Iterating $n$ times gives
$$\varphi(u)=\varphi((A^T)^nu)\exp\!\left(-\tfrac12u^T\left[\sum_{j=0}^{n-1}A^jGG^T(A^T)^j\right]u\right).$$
The power bound gives $(A^T)^nu\to0$, so the dominated convergence theorem [F5] in the integral defining $\varphi$ gives $\varphi((A^T)^nu)\to1$. Step 1.1 makes the matrix sum converge to $P$, whence $\varphi(u)=e^{-u^TPu/2}$, the characteristic function of the invariant Gaussian from step 2.1. By [F4], $\nu=N_d(0,P)$. If $P'$ is another finite matrix solution of the Lyapunov equation, $D=P'-P$ satisfies $D=ADA^T$, hence $D=A^nD(A^T)^n\to0$ by the power bound; therefore $P'=P$. This proves uniqueness of the invariant law and covariance solution. [A1, F1, F2, F3, F4, F5, given, step 1.1, step 2.1, algebra] ∎
