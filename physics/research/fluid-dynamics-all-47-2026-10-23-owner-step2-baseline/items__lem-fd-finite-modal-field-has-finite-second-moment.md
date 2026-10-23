---
id: lem-fd-finite-modal-field-has-finite-second-moment
kind: lemma
title: Finite modal velocity fields inherit finite second moments
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 1
domain: mathematics
library: physics
deps:
  - def-fd-random-velocity-sensor-law
  - def-probability-measure
  - def-strongly-measurable-banach-valued-function
  - def-nonnegative-lebesgue-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
dependency_roles:
  def-fd-random-velocity-sensor-law: mathematical-premise
  def-probability-measure: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-increasing-simple-approximation-of-a-nonnegative-measurable-function: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.4, Exercise 1.4.38 and Theorem 1.4.44"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
      locator: "Exercise 1.4.38, printed pp. 103–104, poses the pushforward-measure integral identity; Theorem 1.4.44, printed pp. 107–108, and its proof give monotone convergence. The pushforward identity is proved locally here."
verification:
  precheck: pending
---

## Statement

Let $(D,\mathcal D,\lambda)$, $d\ge1$, and $H=L^2(D,\lambda;\mathbb R^d)$ be as in the Definition of the finite-second-moment random velocity sensor law, with $0<\lambda(D)<\infty$. Let $m\ge1$, choose $\phi_1,\ldots,\phi_m\in H$, and let $(\Omega,\mathcal F,\mathbb P)$ be a probability space. Suppose $A:(\Omega,\mathcal F)\to(\mathbb R^m,\mathcal B(\mathbb R^m))$ is measurable and $\mathbb E_{\mathbb P}|A|^2<\infty$. Define $T:\mathbb R^m\to H$ by $T(a)=\sum_{j=1}^m a_j\phi_j$, set $U=T\circ A$, and define $\mu(B)=\mathbb P(U^{-1}(B))$ for every $B\in\mathcal B(H)$. Then $U$ is strongly measurable, $\mu$ is a probability measure on $(H,\mathcal B(H))$, and
$$\int_H\|v\|_H^2\,d\mu(v)=\mathbb E_{\mathbb P}\|U\|_H^2\le\left(\sum_{j=1}^m\|\phi_j\|_H^2\right)\mathbb E_{\mathbb P}|A|^2<\infty.$$

## Statement references

[[def-fd-random-velocity-sensor-law]]

[[def-probability-measure]]

[[def-strongly-measurable-banach-valued-function]]

[[def-nonnegative-lebesgue-integral]]

[[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]

[[thm-monotone-convergence-for-the-integral]]

[[thm-cauchy-schwarz-and-the-euclidean-norm]]

[Tao, An Introduction to Measure Theory, Section 1.4, Exercise 1.4.38 and Theorem 1.4.44](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf)

## Facts & Assumptions

**Given:** A finite measure space $(D,\mathcal D,\lambda)$ with $0<\lambda(D)<\infty$, $H=L^2(D,\lambda;\mathbb R^d)$, vectors $\phi_1,\ldots,\phi_m\in H$, a probability space $(\Omega,\mathcal F,\mathbb P)$, and a measurable $A:(\Omega,\mathcal F)\to(\mathbb R^m,\mathcal B(\mathbb R^m))$ with $\mathbb E_{\mathbb P}|A|^2<\infty$.

[F1] The Definition fixes $H$ as a normed space with Borel sigma-algebra $\mathcal B(H)$ and defines a finite-second-moment random velocity law by its norm-square integral. [[def-fd-random-velocity-sensor-law]]

[F2] A probability measure is countably additive and has total mass one. [[def-probability-measure]]

[F3] Strong measurability means being an almost-everywhere pointwise norm limit of measurable simple Banach-valued functions. [[def-strongly-measurable-banach-valued-function]]

[F4] The nonnegative integral is the supremum over nonnegative simple minorants; the admissible set contains the zero function. [[def-nonnegative-lebesgue-integral]]

[F5] Every nonnegative measurable function is an increasing pointwise limit of nonnegative simple measurable functions. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]

[F6] For a nondecreasing sequence of nonnegative measurable functions, the integrals increase to the integral of the pointwise limit. [[thm-monotone-convergence-for-the-integral]]

[F7] The Euclidean inner product on $\mathbb{R}^m$ satisfies $|\langle x,y\rangle|\le|x||y|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Put $C_\phi=(\sum_{j=1}^m\|\phi_j\|_H^2)^{1/2}$. For $a,b\in\mathbb R^m$, the triangle inequality and [F7] give
$$\|T(a)-T(b)\|_H\le\sum_{j=1}^m|a_j-b_j|\|\phi_j\|_H\le C_\phi|a-b|.$$
Thus $T$ is continuous and $U=T\circ A$ is Borel measurable. For each $n\ge1$, truncate every coordinate of $A$ to $[-n,n]$ and round it down to a multiple of $2^{-n}$, obtaining a finite-valued measurable map $A_n:\Omega\to\mathbb R^m$ with $A_n\to A$ pointwise. The maps $T\circ A_n$ are measurable simple $H$-valued functions and converge pointwise in norm to $U$ by continuity of $T$. Hence $U$ is strongly measurable by [F3]. [F1, F3, F7, given, construct, algebra]

2.1 For Borel sets $B\subseteq H$, the preimage map preserves complements and countable disjoint unions, and $U^{-1}(H)=\Omega$. Therefore $\mu(B)=\mathbb P(U^{-1}(B))$ is countably additive with $\mu(H)=1$ by [F2]. For any nonnegative Borel function $g:H\to[0,\infty]$, choose nonnegative simple functions $s_n\uparrow g$ as provided by [F5]. The identity $\int_H s_n\,d\mu=\mathbb E_{\mathbb P}[s_n(U)]$ follows by writing each simple integral as a finite sum over its level sets and using the definition of $\mu$. Apply [F6] to both sides and pass to the increasing limits to obtain $\int_H g\,d\mu=\mathbb E_{\mathbb P}[g(U)]$. Apply this identity to the continuous function $g(v)=\|v\|_H^2$. The bound in step 1.1 with $b=0$ gives $\|U\|_H^2\le C_\phi^2|A|^2$, so $\mathbb E_{\mathbb P}\|U\|_H^2\le C_\phi^2\mathbb E_{\mathbb P}|A|^2<\infty$. This proves the stated moment identity and bound, and hence that $\mu$ is a finite-second-moment law of the Definition. [F1, F2, F4, F5, F6, step 1.1, given, algebra] ∎
