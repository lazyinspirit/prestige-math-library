---
id: lem-total-variation-coupling-and-kernel-contraction
kind: lemma
title: Total variation duality, kernel contraction, and coupling bound
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§5, pp. 8–9, maximal-coupling comparison in the proof of Theorem 5."
---

## Statement

Let $\mu,\nu$ be probability measures on $(\mathsf X,\mathcal X)$ and let
$P$ be a probability kernel on that space. Then
$$\lVert\mu-\nu\rVert_{\rm TV}=\sup_{f:\mathsf X\to[0,1]\ \mathcal X\text{-measurable}}\left|\int f\,d\mu-\int f\,d\nu\right|,$$
$$\lVert\mu P-\nu P\rVert_{\rm TV}\le\lVert\mu-\nu\rVert_{\rm TV}.$$
If $(U,V)$ is a coupling of $\mu$ and $\nu$ on a probability space and
$E$ is a measurable event on which $U=V$, then
$$\lVert\mu-\nu\rVert_{\rm TV}\le\mathbb P(E^c).$$

## Facts & Assumptions

**Given:** Two probability measures $\mu,\nu$ on the same measurable space,
a probability kernel $P$, and, for the coupling conclusion, random elements
$(U,V)$ with laws $\mu,\nu$ and a measurable event $E$ such that $U=V$ on
$E$.

[F1] [[def-total-variation-distance-for-probability-laws]]: total variation is
$\sup_{A\in\mathcal X}|\mu(A)-\nu(A)|$.

[F2] [[def-measure-kernel-and-probability-kernel]]: $P(x,\cdot)$ is a
probability measure and $x\mapsto P(x,A)$ is measurable for each $A$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
product-measurable functions may be integrated in either order.

## Proof

**Given:** [F1]–[F3] and the hypotheses in the Statement.

1.1 For measurable $f:\mathsf X\to[0,1]$, put $A_t=\{x:f(x)>t\}$ for $t\in[0,1]$. The identity $f(x)=\int_0^1 1_{A_t}(x)\,dt$ and [F3] give $\int f\,d\mu-\int f\,d\nu=\int_0^1[\mu(A_t)-\nu(A_t)]\,dt$. Its absolute value is at most $\int_0^1|\mu(A_t)-\nu(A_t)|\,dt\le\lVert\mu-\nu\rVert_{\rm TV}$ by [F1]. Conversely, each indicator $1_A$ is an admissible $f$ and attains the setwise difference for its set $A$. Taking suprema proves the dual formula. [F1, F3, given, algebra]

2.1 For each $A\in\mathcal X$, the function $x\mapsto P(x,A)$ is measurable and takes values in $[0,1]$ by [F2]. Apply step 1.1 to that function to obtain $|\mu P(A)-\nu P(A)|\le\lVert\mu-\nu\rVert_{\rm TV}$. Taking the supremum over $A$ proves kernel contraction. [F1, F2, step 1.1, given]

3.1 For any $A\in\mathcal X$, $|\mu(A)-\nu(A)|=|\mathbb E[1_A(U)-1_A(V)]|\le\mathbb E|1_A(U)-1_A(V)|\le\mathbb P(E^c)$, because the two indicators agree on $E$. Taking the supremum over $A$ proves the stated bound. [F1, given, algebra] ∎
