---
id: ex-telescoping-sum-computed
kind: example
title: "$\\sum_{k \\ge 1} 1/(k(k+1)) = 1$"
status: published
origin: session
deps: [lem-telescoping-series, def-series, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit, def-finite-sum, ex-harmonic-series-diverges]
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
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
pipeline_run: null
---

## Example

$$\sum_{k \ge 1} \frac{1}{k(k+1)} \;=\; 1 .$$

The series converges, so the symbol denotes ([[def-series]]), and its sum is
exactly $1$. The reason is the partial fraction identity

$$\frac{1}{k(k+1)} \;=\; \frac{1}{k} - \frac{1}{k+1} ,$$

which makes the series telescoping with $b_k = 1/k$: the partial sums are
$1 - 1/(n+1)$, and $1/(n+1) \to 0$.

Compare $\sum_{k \ge 1} 1/k$, which diverges ([[ex-harmonic-series-diverges]]).
The single extra factor $k+1$ in the denominator is what separates the two.

## Facts & Assumptions

**Given:** The sequence $b_j := 1/\iota(j+1)$ for $j \in \mathbb{N}$, so that $b_j = 1/k$ at $k = j+1$; and the family $d_k := 1/(k(k+1))$ for naturals $k \ge 1$, so that $\sum_{k \ge 1} d_k$ is the series of $j \mapsto d_{j+1}$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals $\iota(j+1)$ are positive, and reciprocals of positives are positive ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] $\sum (b_j - b_{j+1})$ converges if and only if $(b_j)$ converges, and then its sum is $b_0 - \lim_j b_j$ ([[lem-telescoping-series]]).

[L3] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-real-limit]]).

## Verification

**Proof technique:** direct.

1.1 For every $j \in \mathbb{N}$: $b_j - b_{j+1} = \dfrac{1}{\iota(j+1)} - \dfrac{1}{\iota(j+2)} = \dfrac{\iota(j+2) - \iota(j+1)}{\iota(j+1)\iota(j+2)} = \dfrac{1}{\iota(j+1)\,\iota(j+2)}$. [given, L1, algebra]

1.2 The sequence $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, choose $n \ge 1$ with $1/n < \varepsilon$; then for every $j$ with $j+1 \ge n$ we have $0 < b_j \le 1/n < \varepsilon$. [given, L1, L3, choose]

2.1 The term of $\sum_{k \ge 1} d_k$ at index $j$ is $d_{j+1} = \dfrac{1}{\iota(j+1)\,\iota(j+2)}$, so it equals $b_j - b_{j+1}$; the two series are the same series. [step 1.1, given]

2.2 By the telescoping lemma, $\sum_j (b_j - b_{j+1})$ converges with sum $b_0 - 0 = 1/\iota(1) = 1$. [step 1.2, L2, L1]

3.1 Therefore $\sum_{k \ge 1} 1/(k(k+1))$ converges with sum $1$. [step 2.1, step 2.2] ∎

## Remarks

- **The value $1$ comes from the first term of $(b_j)$, not from the first term of the series.** The telescoping lemma gives $b_0 - \lim_j b_j$, and here $b_0 = 1/1 = 1$ while the first term of the series is $d_1 = 1/2$. Reading the sum off the wrong one of those two numbers is the standard error, and it is why the lemma states the value in terms of $b_0$ explicitly.

- **Every telescoping identity is an identity between finite sums.** Nothing about limits enters step 1.1; the only limit in the argument is $1/(n+1) \to 0$, which is the Archimedean property. That is the general shape of every telescoping computation on this page.
