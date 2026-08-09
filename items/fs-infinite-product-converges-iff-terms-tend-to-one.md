---
id: fs-infinite-product-converges-iff-terms-tend-to-one
kind: false-statement
title: "FALSE: $\\prod (1 + p_k)$ converges whenever $p_k \\to 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-infinite-product, thm-infinite-product-criterion, thm-p-series-rational, thm-nonnegative-series-bounded-partial-sums, lem-finite-sum-laws, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-divergence-to-infinity, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(p_k)$ of reals with $p_k \to 0$, the
infinite product $\prod (1 + p_k)$ converges ([[def-infinite-product]]).

Equivalently, in the form it is usually met: an infinite product converges as soon
as its factors tend to $1$. That the factors tend to $1$ is *necessary* for
convergence, and it is not sufficient. What decides the matter for nonnegative
$p_k$ is [[thm-infinite-product-criterion]]: $\prod(1+p_k)$ converges if and only
if $\sum p_k$ converges.

The witness is $p_k := 1/\iota(k+1)$, with $\iota(k+1)$ the canonical natural
([[lem-of-naturals-positive]]). Then $p_k \to 0$, while $\sum_k p_k$ is the
harmonic series $\sum_{k \ge 1} 1/k$, which diverges
([[thm-p-series-rational]]); so the product diverges, its partial products
satisfying $\prod_{k<n}(1+p_k) \ge 1 + \sum_{k<n} p_k$ and hence diverging to
$+\infty$.

## Facts & Assumptions

**Given:** The sequence $p_k := 1/\iota(k+1)$, its partial sums $S_n = \sum_{k<n} p_k$ and the partial products $\Pi_n = \prod_{k<n}(1+p_k)$.

[A1] The refuted claim: if $p_k \to 0$ then $\prod(1+p_k)$ converges.

[L1] The canonical naturals $\iota(n)$ are positive for $n \ge 1$ and strictly increasing; if $0 < u < v$ then $0 < 1/v < 1/u$; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L2] $\sum_{k\ge1}1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; and $\sum_{k \ge 1} x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L3] For nonnegative $p_k$: $\prod(1+p_k)$ converges if and only if $\sum p_k$ converges, and $1 + S_n \le \Pi_n$ for every $n$ ([[thm-infinite-product-criterion]]).

[L4] Convergence of an infinite product, and divergence when no tail has partial products with a nonzero limit ([[def-infinite-product]]).

[L5] For a series of nonnegative terms whose partial sums are unbounded above, those partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]], [[lem-finite-sum-laws]]).

## Refutation

**Proof technique:** direct.

1.1 Each $p_k = 1/\iota(k+1)$ is positive, and $(p_k)$ converges to $0$: given a rational $\varepsilon > 0$, an $n \ge 1$ with $1/\iota(n) < \varepsilon$ satisfies $|p_k| = p_k \le 1/\iota(n) < \varepsilon$ for every $k \ge n$. [given, L1]

1.2 The series $\sum_k p_k = \sum_k 1/\iota(k+1)$ is the $p$-series $\sum_{k \ge 1} 1/k$ at $p = 1$, which diverges. [given, L2]

2.1 Since the $p_k$ are nonnegative and $\sum p_k$ diverges, $\prod(1 + p_k)$ diverges by the criterion. [step 1.1, step 1.2, L3]

2.2 Concretely, the partial sums $S_n$ of the nonnegative divergent series $\sum p_k$ are unbounded above, so $S_n \to +\infty$; and $\Pi_n \ge 1 + S_n$, so the partial products are unbounded and no tail of the product has partial products with a nonzero limit. [step 1.2, L3, L4, L5]

3.1 So $(p_k)$ tends to $0$ while $\prod(1+p_k)$ diverges, and the claim [A1] is false. [step 1.1, step 2.1, A1]

4.1 What is true is the criterion [L3]: for nonnegative terms, convergence of the product is equivalent to convergence of $\sum p_k$, a strictly stronger condition than $p_k \to 0$. [step 3.1, A1, L3] ∎

## Remarks

- **The analogy with series is exact, and that is the point.** For series, $a_k \to 0$ is necessary and not sufficient for convergence, and the harmonic series is the standard witness ([[thm-p-series-rational]]). For products, $1 + p_k \to 1$ is necessary and not sufficient, and the same harmonic series is the standard witness, transported through $\prod(1+p_k) \ge 1 + \sum p_k$.

- **The failure here is unbounded growth, not oscillation.** The partial products increase without limit. The other way a product can fail, with partial products tending to $0$ although the factors tend to $1$ and the series of the $p_k$ converges, needs the signs to alternate, and is exhibited on the companion examples page.

- **Nothing here needs a logarithm.** The single inequality $\Pi_n \ge 1 + S_n$ of [[thm-infinite-product-criterion]] does all the work, and it is an induction on finite products.
