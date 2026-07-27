---
id: ex-double-array-with-unequal-iterated-sums
kind: example
title: "The array with $a_{ii} = 1$, $a_{i+1,i} = -1$ and every other entry $0$ has iterated sums $1$ and $0$"
status: published
origin: session
deps: [fs-iterated-double-sums-always-agree, thm-double-series-fubini, def-absolute-and-conditional-convergence, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
pipeline_run: null
---

## Example

Define $a : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$ by

$$a_{ij} := \begin{cases} 1 & \text{if } j = i, \\ -1 & \text{if } i = j+1, \\ 0 & \text{otherwise,} \end{cases}$$

so that the array has $1$ along the diagonal, $-1$ immediately below it, and $0$
everywhere else. Then every row series and every column series converges, both
series of those sums converge, and

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; 1, \qquad \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) \;=\; 0 .$$

The two iterated sums exist and differ, which is
[[fs-iterated-double-sums-always-agree]]. What this example adds is the reason
[[thm-double-series-fubini]] does not apply: the row totals of absolute values are
$A_0 = 1$ and $A_i = 2$ for every $i \ge 1$, so $\sum_i A_i$ diverges and the
hypothesis of that theorem fails at its only substantive point.

Written out, the array is

$$\begin{array}{cccc} 1 & 0 & 0 & \cdots \\ -1 & 1 & 0 & \cdots \\ 0 & -1 & 1 & \cdots \\ 0 & 0 & -1 & \cdots \end{array}$$

Every row after the first contains one $+1$ and one $-1$ and so sums to $0$; every
column contains one $+1$ and one $-1$ and so sums to $0$. The asymmetry is that
the very first row has no $-1$ to its left, and that single missing entry is the
whole difference between $1$ and $0$.

## Facts & Assumptions

**Given:** The array $a$ with $a_{ii} = 1$, $a_{i+1,i} = -1$ and all other entries $0$.

[L1] For this array every row series and every column series converges, with row sums $R_0 = 1$ and $R_i = 0$ for $i \ge 1$ and column sums $C_j = 0$ for every $j$; the two iterated sums are $1$ and $0$ ([[fs-iterated-double-sums-always-agree]], [[def-series]], [[def-real-limit]]).

[L2] Finite sums: the empty sum is $0$, a finite sum of zeros is $0$, and $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above ([[thm-nonnegative-series-bounded-partial-sums]]).

[L4] Fubini for double series, whose hypothesis is that each $\sum_j |a_{ij}|$ converges and the series of those row totals converges ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Verification

**Proof technique:** direct.

1.1 Every row and every column series converges, the row sums are $R_0 = 1$ and $R_i = 0$ for $i \ge 1$, the column sums are all $0$, and the two iterated sums are $1$ and $0$ respectively. [given, L1]

1.2 The row totals of absolute values are $A_0 = 1$, row $0$ having the single nonzero entry $a_{00} = 1$, and $A_i = 2$ for $i \ge 1$, row $i$ having the two nonzero entries $a_{ii} = 1$ and $a_{i,i-1} = -1$; each such row series converges, being eventually constant. [given, L2]

2.1 The partial sums $\sum_{i<P} A_i$ equal $1 + 2(P-1)$ for $P \ge 1$, hence are unbounded above, so $\sum_i A_i$ diverges. [step 1.2, L2, L3]

3.1 Therefore the hypothesis of Fubini's theorem fails for this array, and no contradiction with [L4] arises from the two iterated sums being different. [step 1.1, step 2.1, L4]

4.1 So the array is a genuine witness: both iterated sums exist, they are $1$ and $0$, and the absolute hypothesis that would force them to agree is exactly what it lacks. [step 1.1, step 3.1] ∎

## Remarks

- **The array is a discrete telescoping, and one entry falls off the edge.** Each $-1$ sits one row below the $+1$ of its own column: the $+1$ at $(j,j)$ and the $-1$ at $(j+1,j)$ are both in column $j$, so every column cancels within itself and every column total is $0$. Along a row the same two entries of that row, $a_{ii} = +1$ and $a_{i,i-1} = -1$, also cancel — but only for $i \ge 1$. Row $0$ has no $-1$, there being no column $-1$ for it to lie in, so its total is the uncancelled $+1$. That single missing entry, and nothing else, is the whole difference between the two iterated sums. Which cancellation one sees depends only on the order of summation.

- **Nothing here is large.** Every entry is $0$, $1$ or $-1$, every row and column has at most two nonzero entries, and the discrepancy between the two iterated sums is exactly $1$. The failure of Fubini's theorem without an absolute hypothesis is not a phenomenon of large or wild arrays.

- **The connection with rearrangement is exact.** By [[thm-double-series-fubini]], under the absolute hypothesis the common value is also the sum along any enumeration of $\mathbb{N}\times\mathbb{N}$; here no such common value exists, just as a conditionally convergent series has no order-independent sum ([[thm-riemann-series-theorem]]).
