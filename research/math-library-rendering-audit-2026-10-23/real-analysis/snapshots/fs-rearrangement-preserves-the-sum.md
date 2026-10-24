---
id: fs-rearrangement-preserves-the-sum
kind: false-statement
title: "FALSE: every rearrangement of a convergent series converges, and to the same sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, thm-alternating-series-test, thm-p-series-rational, lem-alternating-sequence, def-monotone-sequence, def-series, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-divergence-to-infinity, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals whose series converges
([[def-series]]) and every bijection $\sigma : \mathbb{N} \to \mathbb{N}$, the
rearranged series $\sum a_{\sigma(k)}$
([[def-rearrangement-and-unconditional-convergence]]) converges, with the same
sum.

What is true is that hypothesis: the claim holds for **absolutely** convergent
series, and that is [[thm-dirichlet-rearrangement]]. Dropping "absolutely" makes
it false in both of its assertions at once, and the same witness refutes both.

Let $(\varepsilon_j)$ be the alternating sequence ([[lem-alternating-sequence]])
and put $a_j := \varepsilon_j/\iota(j+1)$, the alternating harmonic series. It
converges, by the alternating series test, and does not converge absolutely, its
series of absolute values being the harmonic series
([[thm-p-series-rational]]). So it converges conditionally, and
[[thm-riemann-series-theorem]] applies to it.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$, the sequence $b_j := 1/\iota(j+1)$, and $a_j := \varepsilon_j b_j$, whose series is the alternating harmonic series.

[A1] The refuted claim: for every convergent series of reals and every bijection of $\mathbb{N}$, the rearranged series converges with the same sum.

[L1] $|\varepsilon_j| = 1$ for every $j$ ([[lem-alternating-sequence]]).

[L2] The canonical naturals $\iota(n)$ are positive for $n \ge 1$ and strictly increasing; if $0 < u < v$ then $0 < 1/v < 1/u$; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L4] $\sum_{k\ge1} 1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; and $\sum_{k \ge 1} x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L5] Absolute value: $|xy| = |x|\,|y|$ ([[lem-of-abs-value]]).

[L6] Absolute and conditional convergence ([[def-absolute-and-conditional-convergence]]).

[L7] The Riemann series theorem: a conditionally convergent series has, for every real $c$, a rearrangement converging to $c$, and one whose partial sums diverge to $+\infty$ ([[thm-riemann-series-theorem]], [[def-divergence-to-infinity]]).

[L8] An absolutely convergent series converges unconditionally ([[thm-dirichlet-rearrangement]]).

## Refutation

**Proof technique:** direct.

1.1 The sequence $(b_j)$ is positive, nonincreasing and converges to $0$: positivity and monotonicity from $0 < \iota(j+1) < \iota(j+2)$, and convergence because, given a rational $\varepsilon > 0$, an $n \ge 1$ with $1/\iota(n) < \varepsilon$ satisfies $b_j \le 1/\iota(n) < \varepsilon$ for every $j \ge n$. [given, L2]

2.1 By the alternating series test $\sum a_j$ converges; write $S$ for its sum. [step 1.1, L3]

2.2 For every $j$, $|a_j| = |\varepsilon_j| b_j = 1/\iota(j+1)$, and $\sum_j 1/\iota(j+1)$ is the $p$-series $\sum_{k\ge1}1/k$ at $p = 1$, which diverges. [step 1.1, L1, L4, L5]

3.1 So $\sum a_j$ converges conditionally. [step 2.1, step 2.2, L6]

4.1 By the Riemann series theorem there is a bijection $\sigma$ of $\mathbb{N}$ with $\sum a_{\sigma(k)}$ convergent of sum $S + 1$, a number different from $S$. [step 3.1, L7]

4.2 By the same theorem there is a bijection $\tau$ of $\mathbb{N}$ for which the partial sums of $\sum a_{\tau(k)}$ diverge to $+\infty$, so that rearranged series does not converge at all. [step 3.1, L7]

5.1 The claim [A1] therefore fails twice over for the alternating harmonic series: once in its assertion that the sum is preserved, by step 4.1, and once in its assertion that the rearranged series converges, by step 4.2. [step 4.1, step 4.2, A1]

6.1 The claim is false. What is true is the same statement with "converges" strengthened to "converges absolutely" in the hypothesis. [step 5.1, A1, L8] ∎

## Remarks

- **Neither half of the claim survives.** It is often stated as though the only risk were a change of value; step 4.2 shows the rearranged series may fail to converge, and [[thm-riemann-series-theorem]] shows the partial sums may be made to oscillate between any two prescribed extended reals.

- **The hypothesis that repairs the claim is exactly the right one.** By [[cor-unconditional-iff-absolute-in-r]], absolute convergence is not merely sufficient for the conclusion but necessary: a convergent series all of whose rearrangements converge is absolutely convergent. So there is no intermediate hypothesis to look for.

- **What is fixed and what is not.** The terms of the series are fixed; only the order changes. That an infinite sum should depend on the order at all is the point of the example, and it is why [[def-series]] defines the sum as the limit of the partial sums of a *sequence*, not as a sum over a set of indices.
