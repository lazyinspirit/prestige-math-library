---
id: ex-zero-dimensional-density-measure-is-weighted-counting
title: "Weighted counting in dimension zero"
kind: example
status: published
origin: pipeline
deps: ["def-measure", "def-radon-measure-on-an-lch-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-zero-dimensional-density-measure-is-weighted-counting). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

A Hausdorff second-countable zero-manifold $M$ is countable and discrete. For any weights $w(p)\in[0,\infty]$ its density measure is
$$\mu_w(A)=\sum_{p\in A}w(p)\qquad(A\subseteq M).$$
Finite positive weights give a Radon measure. On $\mathbb N=\{0,1,\ldots\}$, weights $2^{-k-1}$ give total mass one, while weights one give infinite total mass.

## Facts & Assumptions

**Given:** Manifolds are Hausdorff, second countable and smooth; $n=0$, with every singleton an open chart of coordinate mass one. Densities are pointwise Borel, with $0\cdot\infty=0$. Zero-dimensional weighted counting with two explicit total-mass series.

[F1] In dimension zero, each point is its own coordinate chart. The transition determinant is the empty determinant $1$, and the zero-dimensional coordinate measure gives a singleton mass $1$. On a discrete space every function to $[0,\infty]$ is Borel, so assigning the coefficient $w(p)$ directly satisfies the pointwise density transformation law without a global atlas construction.

[F2] [[def-measure]]: A nonnegative set function vanishing at the empty set and countably additive on disjoint sequences is a measure.

[F3] [[def-radon-measure-on-an-lch-space]]: Radon requires compact-finiteness, outer regularity on Borel sets, and compact-inner-regularity on open sets.

## Verification

1.1 Each point has an open singleton chart, so M is discrete and every subset is Borel. Fix a countable base $(B_j)$. For each $p$ the base contains $\{p\}$; assigning the least such index injects M into $\mathbb N$. Thus M is countable without selecting a chart for each point. Singleton indicators form a locally finite smooth partition in dimension zero. [F1, given]

2.1 Define $\mu_w(A)=\sup\{\sum_{p\in F}w(p):F\subseteq A\text{ finite}\}$ for every $A\subseteq M$; the empty sum is zero. This is the displayed nonnegative sum because step 1.1 gives a fixed injection of $M$ into $\mathbb N$. If $(A_j)$ is a disjoint sequence, both $\mu_w(\bigcup_j A_j)$ and $\sum_j\mu_w(A_j)$ are the supremum of the same finite weighted subsums: each finite subset of the union meets only finitely many $A_j$, and a finite choice of finite subsets of those $A_j$ has finite union. Hence $\mu_w$ is countably additive, so it is a Borel measure by [F2]. Its singleton mass is $w(p)\lambda_0(\mathbb R^0)=w(p)$, the required chart coefficient integral. Conversely, countable additivity forces any Borel measure with these singleton chart masses to equal $\mu_w$ on every subset. No choice of charts or global partition is needed. [F1, F2, step 1.1]

3.1 A compact subset of a discrete space is finite, since its singleton cover has a finite subcover. Every scalar function here is smooth in local zero-dimensional coordinates. If all weights are finite and positive, compact masses are finite sums. Every subset is open, so it is its own outer-regular open superset. Its measure is the supremum of the masses of its finite subsets by the nonnegative-sum formula, and finite subsets are compact; this proves inner regularity on open sets. Thus the weighted measure is Radon directly, without the general regularity theorem. [F3, step 1.1, step 2.1]

4.1 For $M=\mathbb N$ and $w(k)=2^{-k-1}$, the partial sum through $k=N-1$ is $1-2^{-N}$, which tends to one. For $w(k)=1$ the same partial sum is N, hence the total mass is infinite. In the one-point case the formula gives precisely its weight. [step 2.1, step 3.1] ∎
