---
id: ex-geometric-series-computed
kind: example
title: "Geometric sums computed: $\\sum_{k \\ge 1} 2^{-k} = 1$ and $\\sum_{k \\ge 0} (-1/3)^k = 3/4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-geometric-series, def-integer-power, lem-series-tail-invariance, def-series, lem-of-abs-value, def-finite-sum, lem-power-laws]
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Two geometric sums, computed from [[thm-geometric-series]] and stated with the
starting index made explicit:

$$\sum_{k \ge 1} 2^{-k} \;=\; 1, \qquad \sum_{k \ge 0} \Big(-\frac{1}{3}\Big)^{k} \;=\; \frac{3}{4} .$$

Both series converge, so both symbols denote ([[def-series]]).

**The first is the one that is easy to get wrong.** The theorem gives
$\sum_{k \ge 0} 2^{-k} = 1/(1 - 1/2) = 2$, a series whose first term is
$2^{0} = 1$. The series above starts at $k = 1$ and therefore omits that term,
so its sum is $2 - 1 = 1$, not $2$. A geometric series is not determined by its
ratio alone; the starting index has to be said, and here it is.

## Facts & Assumptions

**Given:** The real numbers $1/2$ and $-1/3$, and the integer powers $r^{k}$ ([[def-integer-power]]).

[L1] For $|r| < 1$ the series $\sum r^{k}$ from the starting index $0$ converges with sum $1/(1-r)$ ([[thm-geometric-series]]).

[L2] Absolute value: $|1/2| = 1/2$ and $|-1/3| = 1/3$, both less than $1$ ([[lem-of-abs-value]]).

[L3] A series converges if and only if each of its tail series converges, and then the sum splits as $s_N$ plus the sum of the $N$-th tail series ([[lem-series-tail-invariance]], [[def-series]], [[def-finite-sum]]).

[L4] $r^{0} = 1$ for every real $r$ ([[def-integer-power]], [[lem-power-laws]]).

## Verification

**Proof technique:** direct.

1.1 Since $|1/2| = 1/2 < 1$, the series $\sum_{k \ge 0} (1/2)^{k}$ converges with sum $1/(1 - 1/2) = 2$. [given, L1, L2, algebra]

1.2 Since $|-1/3| = 1/3 < 1$, the series $\sum_{k \ge 0} (-1/3)^{k}$ converges with sum $1/(1 - (-1/3)) = 1/(4/3) = 3/4$, which is the second claim. [given, L1, L2, algebra]

1.3 The series $\sum_{k \ge 1} 2^{-k}$ is the $1$-st tail series of $\sum_{k \ge 0} (1/2)^{k}$, its terms being $(1/2)^{j+1} = 2^{-(j+1)}$ for $j \in \mathbb{N}$. [given, L3, L4]

2.1 The first partial sum of $\sum_{k \ge 0} (1/2)^{k}$ is $s_1 = (1/2)^{0} = 1$, so by the splitting identity the tail sum is $2 - 1 = 1$, which is the first claim. [step 1.1, step 1.3, L3, L4] ∎

## Remarks

- **The two computations use the theorem in different regimes of sign.** The first has a positive ratio and a monotone sequence of partial sums; the second has a negative ratio, so its partial sums oscillate around the limit rather than climbing to it. The theorem covers both without a case split, because its hypothesis is on $|r|$ and its proof runs through $s_n = (1 - r^{n})/(1-r)$, which is indifferent to the sign of $r$.

- **Where the starting index bites.** Every application of a geometric comparison on this page and its companion begins by fixing which index the comparison series starts at, precisely because the sum changes by the omitted terms while the fact of convergence does not.
