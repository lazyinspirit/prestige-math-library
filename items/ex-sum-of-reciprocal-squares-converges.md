---
id: ex-sum-of-reciprocal-squares-converges
kind: example
title: "$\\sum 1/k^2$ converges with sum at most $2$, by comparison with the telescoping $\\sum 1/(k(k-1))$"
status: draft
origin: session
deps: [thm-direct-comparison-test, lem-telescoping-series, thm-p-series-rational, def-series, def-integer-power, lem-series-tail-invariance, thm-nonnegative-series-bounded-partial-sums, lem-of-inverse-positive, lem-of-naturals-positive, def-finite-sum, lem-finite-sum-laws, cor-archimedean-reciprocal, def-real-limit, def-rational-power, def-bounded-set]
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
sources:
  scraped: []
  references:
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Example

The series $\sum_{k \ge 1} 1/k^{2}$ converges ([[def-series]]) and its sum is at
most $2$.

Convergence is the case $p = 2$ of [[thm-p-series-rational]]. What is added here
is an elementary route that produces a numerical bound: for $k \ge 2$,

$$\frac{1}{k^{2}} \;\le\; \frac{1}{k(k-1)} \;=\; \frac{1}{k-1} - \frac{1}{k} ,$$

so the terms from $k = 2$ on are dominated by a telescoping series of sum $1$,
and adding the first term $1$ gives the bound $2$.

The bound is not the exact value. The sum is $\pi^{2}/6$, a fact requiring
machinery this library develops much later; nothing below asserts or uses it.

## Facts & Assumptions

**Given:** The families $c_j := 1/\iota(j+1)^{2}$ and $b_j := 1/\iota(j+1)$ for $j \in \mathbb{N}$, so that $\sum_{k \ge 1} 1/k^{2}$ is the series of $(c_j)$ ([[def-series]], [[def-integer-power]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive and order preserving, and reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] $\sum (b_j - b_{j+1})$ converges whenever $(b_j)$ converges, with sum $b_0 - \lim_j b_j$ ([[lem-telescoping-series]]).

[L3] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-real-limit]]).

[L4] Direct comparison ([[thm-direct-comparison-test]]); and a series converges if and only if each of its tail series converges, the sum splitting as the initial partial sum plus the tail sum ([[lem-series-tail-invariance]]).

[L5] For a series of nonnegative terms the sum is the supremum of the partial sums, so every partial sum is at most the sum and the sum is at most any upper bound of the partial sums; and finite sums are monotone in their terms ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] The series $\sum_{k \ge 1} 1/k^{p}$ converges for rational $p > 1$, so in particular at $p = 2$, where $k^{2}$ is the integer power ([[thm-p-series-rational]], [[def-rational-power]]).

## Verification

**Proof technique:** direct.

1.1 Every $c_j$ and every $b_j$ is positive. [given, L1]

1.2 For every $j \in \mathbb{N}$: $b_j - b_{j+1} = \dfrac{1}{\iota(j+1)} - \dfrac{1}{\iota(j+2)} = \dfrac{1}{\iota(j+1)\,\iota(j+2)}$. [given, L1, algebra]

1.3 The sequence $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, choose $n \ge 1$ with $1/n < \varepsilon$; then $b_j = 1/\iota(j+1) \le 1/n < \varepsilon$ for every $j$ with $j+1 \ge n$. [given, L1, L3, choose]

2.1 Since $0 < \iota(j+1) \le \iota(j+2)$ we have $\iota(j+1)\iota(j+2) \le \iota(j+2)^{2}$, hence $c_{j+1} = \dfrac{1}{\iota(j+2)^{2}} \le \dfrac{1}{\iota(j+1)\iota(j+2)} = b_j - b_{j+1}$ for every $j$. [step 1.2, L1]

2.2 By the telescoping lemma, $\sum_j (b_j - b_{j+1})$ converges with sum $b_0 - 0 = 1$. [step 1.3, L2]

3.1 By comparison, $\sum_j c_{j+1}$ converges, its terms being nonnegative and dominated by those of a convergent series. [step 2.1, step 2.2, step 1.1, L4]

3.2 Every partial sum of $\sum_j c_{j+1}$ is at most the corresponding partial sum of $\sum_j (b_j - b_{j+1})$, which is at most $1$; so the sum of $\sum_j c_{j+1}$ is at most $1$. [step 2.1, step 2.2, L5]

4.1 The series $\sum_j c_{j+1}$ is the $1$-st tail series of $\sum_j c_j$, so $\sum_j c_j$ converges and its sum is $c_0$ plus that tail sum, that is at most $1 + 1 = 2$. [step 3.1, step 3.2, L4]

5.1 Since $\sum_j c_j$ is $\sum_{k \ge 1} 1/k^{2}$, that series converges with sum at most $2$, in agreement with the case $p = 2$ of the $p$-series theorem. [step 4.1, given, L6] ∎

## Remarks

- **The comparison starts at $k = 2$ and cannot start earlier.** At $k = 1$ the dominating expression $1/(k(k-1))$ has a zero denominator, which is exactly why the argument is organised around the tail series and the first term is added back separately in step 4.1. That bookkeeping is where an off-by-one error would otherwise turn the bound $2$ into the false bound $1$.

- **The telescoping comparison is sharper than it looks.** The estimate $1/k^{2} \le 1/(k(k-1))$ loses only a factor $1 - 1/k$, so the bound $2$ sits not far above the true sum $\pi^{2}/6$. That comparison is orientation only; nothing on this page establishes the exact value, and nothing on this page uses it.
