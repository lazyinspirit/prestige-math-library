---
id: lem-finite-intensity-mecke-identity
kind: lemma
title: "Mecke identity for a finite-intensity Poisson point process"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-poisson-and-cox-point-process
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - def-finite-sigma-finite-and-semifinite-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, Theorem 4.1, printed pp. 27-28 (PDF pp. 39-40), states the Mecke identity. Its forward direction is proved in Theorem 4.4: the finite mixed-binomial series is reindexed at printed pp. 30-31 (PDF pp. 42-43); take m=1."
verification:
  precheck: pass
---

## Statement

Let $\eta$ be a Poisson point process on $S$ with finite intensity measure
$\nu$ (so $\nu(S)<\infty$ under
[[def-finite-sigma-finite-and-semifinite-measures]]), and let
$h:S\times\mathcal N_{\mathrm{lf}}(S)\to[0,\infty]$ be
measurable. Addition $(x,\mu)\mapsto\mu+\delta_x$ is interpreted as addition
of counting measures. Then
$$\mathbb E\left[\int_S h(x,\eta)\,\eta(dx)\right]=\int_S\mathbb E[h(x,\eta+\delta_x)]\,\nu(dx).$$
Both sides are well-defined extended nonnegative integrals.

## Facts & Assumptions

**Given:** A Poisson point process $\eta$ on $S$ with finite intensity measure $\nu$ and a nonnegative measurable function $h$.

[F1] The law of a finite-intensity Poisson point process is the mixed-binomial law: for $\lambda=\nu(S)>0$, first take $N\sim\operatorname{Pois}(\lambda)$, then conditionally take $N$ independent locations with law $\nu/\lambda$; the zero-intensity process is zero. ([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]])

[F2] Finite products of probability measures have their rectangle product formula and are unique; coordinate permutations preserve the corresponding identically distributed product measure. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F3] Nonnegative sums and iterated integrals can be interchanged by Tonelli, and the scalar Poisson masses are $e^{-\lambda}\lambda^n/n!$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]])

[F4] Evaluation maps generate the configuration sigma-algebra, and integration of a nonnegative measurable function against the evaluation kernel of a random measure is measurable. ([[def-random-measure-and-locally-finite-point-process]], [[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]])

## Proof
**Proof technique:** direct.

1.1 The addition map is measurable because for every Borel $B$ its output evaluation is $(\mu+\delta_x)(B)=\mu(B)+1_B(x)$, a measurable function of $(x,\mu)$; therefore $(x,\mu)\mapsto h(x,\mu+\delta_x)$ is measurable. The left integral is measurable by the evaluation-kernel integration assertion [F4]. [given, F4, construct]

1.2 If $\lambda=0$, then $\nu=0$ and [F1] makes $\eta$ the zero measure almost surely, so both sides vanish. Suppose $\lambda>0$ and write $Q=\nu/\lambda$, $p_n=e^{-\lambda}\lambda^n/n!$. By [F1], the left side equals $\sum_{n\ge0}p_n\int_{S^n}\sum_{i=1}^n h(x_i,\sum_{j=1}^n\delta_{x_j})\,Q^{\otimes n}(d(x_1,\ldots,x_n))$. [given, F1, F3]

2.1 For each $n\ge1$, every summand indexed by $i$ has the same integral: coordinate permutation sends the $i$th coordinate to the first, preserves $Q^{\otimes n}$ by [F2], and leaves the sum of Dirac masses unchanged. Tonelli [F3] and $np_n=\lambda p_{n-1}$ therefore turn step 1.2 into $\lambda\sum_{m\ge0}p_m\int_{S^{m+1}}h(x_1,\delta_{x_1}+\sum_{j=2}^{m+1}\delta_{x_j})\,Q^{\otimes(m+1)}(d(x_1,\ldots,x_{m+1}))$. [step 1.2, F2, F3, algebra]

3.1 Integrating first in $x_1$ in step 2.1 and using $\nu=\lambda Q$, the result is $\int_S\sum_{m\ge0}p_m\int_{S^m}h(x,\delta_x+\sum_{j=1}^m\delta_{x_j})\,Q^{\otimes m}(d(x_1,\ldots,x_m))\,\nu(dx)$. By the mixed-binomial representation [F1], the sum and inner integral are $\mathbb E[h(x,\eta+\delta_x)]$ for each fixed $x$, so this is the right side of the claimed identity. [step 2.1, F1, F2, F3] ∎
