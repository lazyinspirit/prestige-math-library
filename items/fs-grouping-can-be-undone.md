---
id: fs-grouping-can-be-undone
kind: false-statement
title: "FALSE: if some grouping of a series converges then the series itself converges"
status: published
origin: session
deps: [thm-grouping-of-series, lem-alternating-sequence, lem-nth-term-test, def-finite-sum, lem-finite-sum-laws, def-monotone-sequence, def-series, def-real-limit]
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
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
pipeline_run: null
---

## Statement

**False claim:** if $(n_j)$ is strictly increasing with $n_0 = 0$ and the series
of blocks $\sum_j B_j$, $B_j = \sum_{k=n_j}^{n_{j+1}-1} a_k$, converges
([[def-series]]), then $\sum a_k$ converges.

What is true is the opposite direction, [[thm-grouping-of-series]]: convergence of
$\sum a_k$ implies convergence of every grouping, to the same sum. Brackets may be
inserted into a convergent series; they may not be removed.

The witness is the alternating sequence itself. Let $(\varepsilon_k)$ be the
alternating sequence ([[lem-alternating-sequence]]), with even and odd index maps
$e$ and $o$ satisfying $o_j = e_j + 1$ and $e_{j+1} = o_j + 1$, and group in
pairs, $n_j := e_j$. Every block is
$\varepsilon_{e_j} + \varepsilon_{o_j} = 1 + (-1) = 0$, so the grouped series is
$0 + 0 + \dots$ and converges to $0$; but $\sum \varepsilon_k$ diverges, its terms
having absolute value $1$ and so not tending to $0$ ([[lem-nth-term-test]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$ with index maps $e$ and $o$, and the grouping $n_j := e_j$.

[A1] The refuted claim: if some grouping of $\sum a_k$ converges then $\sum a_k$ converges.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$, $\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$; $e_0 = 0$, $e_{j+1} = e_j + 2$, $o_j = e_j + 1$; $e$ is strictly increasing ([[lem-alternating-sequence]], [[def-monotone-sequence]]).

[L2] Finite sums: the empty sum is $0$, $\sum_{k<m+1}x_k = \sum_{k<m}x_k + x_m$, and a sum over the range $\{n_j, \dots, n_{j+1}-1\}$ of two indices is the sum of the two terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Partial sums, sums and divergence of a series ([[def-series]], [[def-real-limit]]).

[L4] If $\sum x_k$ converges then $x_k \to 0$ ([[lem-nth-term-test]]).

[L5] Grouping in the true direction: if $\sum a_k$ converges then every grouping converges to the same sum ([[thm-grouping-of-series]]).

## Refutation

**Proof technique:** direct.

1.1 The map $j \mapsto n_j = e_j$ is strictly increasing with $n_0 = e_0 = 0$, and $n_{j+1} = e_j + 2 = n_j + 2$, so each block runs over the two indices $e_j$ and $o_j = e_j + 1$. [L1]

1.2 The series $\sum_k \varepsilon_k$ diverges: $|\varepsilon_k| = 1$ for every $k$, so the tolerance $\varepsilon = 1$ admits no index $K$ with $|\varepsilon_k - 0| < 1$ for all $k \ge K$, and $(\varepsilon_k)$ does not converge to $0$. [L1, L4]

2.1 Each block is $B_j = \varepsilon_{e_j} + \varepsilon_{o_j} = 1 + (-1) = 0$. [step 1.1, L1, L2]

3.1 The grouped series $\sum_j B_j$ has all terms $0$, so all its partial sums are $0$ and it converges, with sum $0$. [step 2.1, L2, L3]

4.1 A grouping of $\sum \varepsilon_k$ therefore converges while $\sum \varepsilon_k$ does not, so the claim [A1] is false. [step 3.1, step 1.2, A1]

5.1 What survives is [L5]: convergence of the series implies convergence of every grouping, and the implication cannot be reversed. [step 4.1, A1, L5] ∎

## Remarks

- **The blocks hide a cancellation the grouped series cannot see.** Each block is the sum of two terms of absolute value $1$; grouping reports only their sum, and the information that destroys convergence lives strictly inside a block. This is why [[thm-grouping-of-series]] never looks inside a block and why its converse is hopeless in general.

- **What the witness does and does not isolate.** Its block lengths are all equal to $2$, so no amount of control on the block lengths alone repairs the claim. What it does violate is $a_k \to 0$, which by [[lem-nth-term-test]] is necessary for convergence of $\sum a_k$ and is invisible to the grouped series. Whether adding that condition to the hypothesis repairs the claim is not decided here and is not needed anywhere on this page.

- **The same series is the classical Grandi series.** Grouped as $(1-1)+(1-1)+\dots$ it appears to sum to $0$, and grouped as $1 + (-1+1) + (-1+1) + \dots$ it appears to sum to $1$. Both are groupings in the sense of [[thm-grouping-of-series]]: the second is $n = (0,1,3,5,\dots)$, strictly increasing with $n_0 = 0$, whose first block is the single term $a_0$. So the two values are genuinely produced by two admissible groupings, and no hypothesis of that theorem excludes either; what fails is its hypothesis on the original series, which does not converge, and that is precisely why it says nothing about the grouped sums here. The same pair appears as a counterexample on the companion examples page.
