---
id: ex-zero-dimensional-density-measure-is-weighted-counting
title: "Weighted counting in dimension zero"
kind: example
status: published
origin: pipeline
deps: ["def-borel-measurable-nonnegative-density-on-a-manifold", "thm-density-measure-is-independent-of-the-chart-gluing", "thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Example

A Hausdorff second-countable zero-manifold $M$ is countable and discrete. For any weights $w(p)\in[0,\infty]$ its density measure is
$$\mu_w(A)=\sum_{p\in A}w(p)\qquad(A\subseteq M).$$
Finite positive weights give a Radon measure. On $\mathbb N=\{0,1,\ldots\}$, weights $2^{-k-1}$ give total mass one, while weights one give infinite total mass.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Zero-dimensional weighted counting with two explicit total-mass series.

[F1] [[def-borel-measurable-nonnegative-density-on-a-manifold]]: A zero-dimensional chart is a singleton with coordinate mass one and determinant one.

[F2] [[thm-density-measure-is-independent-of-the-chart-gluing]]: The chart restriction of the density measure is its coefficient integral.

[F3] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: Positive finite smooth densities define Radon measures.

## Verification

1.1 Each point has an open singleton chart, so M is discrete and every subset is Borel. Fix a countable base $(B_j)$. For each $p$ the base contains $\{p\}$; assigning the least such index injects M into $\mathbb N$. Thus M is countable without selecting a chart for each point. Singleton indicators form a locally finite smooth partition in dimension zero. [F1, given]

2.1 The singleton chart integral is $\mu_w(\{p\})=w(p)\lambda_0(\mathbb R^0)=w(p)$. Countable additivity on the disjoint singleton decomposition of any A gives $\mu_w(A)=\sum_{p\in A}w(p)$. The empty sum is zero; zero or infinite weights cause no cancellation. [F1, F2, step 1.1]

3.1 A compact subset of a discrete space is finite, since its singleton cover has a finite subcover. Every scalar function here is smooth in local zero-dimensional coordinates. Thus finite positive weights satisfy the positive smooth density theorem and give a Radon measure; directly, compact masses are finite sums, and every set is open and approximated in measure by its finite subsets. [F3, step 1.1, step 2.1]

4.1 For $M=\mathbb N$ and $w(k)=2^{-k-1}$, the partial sum through $k=N-1$ is $1-2^{-N}$, which tends to one. For $w(k)=1$ the same partial sum is N, hence the total mass is infinite. In the one-point case the formula gives precisely its weight. [step 2.1, step 3.1] ∎
