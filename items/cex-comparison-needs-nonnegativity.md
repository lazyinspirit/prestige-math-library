---
id: cex-comparison-needs-nonnegativity
kind: counterexample
title: "Two series with $a_k \\le b_k$ for all $k$, $\\sum b_k$ convergent and $\\sum a_k$ divergent, when the terms may be negative"
status: published
origin: session
deps: [thm-direct-comparison-test, thm-nonnegative-series-bounded-partial-sums, ex-harmonic-series-diverges, def-series, lem-series-linearity, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $a_k \le b_k$ for every $k \in \mathbb{N}$ and $\sum b_k$
converges, then $\sum a_k$ converges.

This is [[thm-direct-comparison-test]] with its nonnegativity hypothesis deleted,
and deleting it destroys the theorem. Take

$$a_k := -\frac{1}{k+1}, \qquad b_k := 0 \qquad (k \in \mathbb{N}) .$$

Then $a_k < 0 = b_k$ for every $k$; the series $\sum b_k$ converges, with all
partial sums equal to $0$ and sum $0$; and $\sum a_k$ diverges, being $-1$ times
the harmonic series ([[ex-harmonic-series-diverges]], [[lem-series-linearity]]).

**What exactly fails.** The proof of the comparison test bounds the partial sums
of $\sum a_k$ above by those of $\sum b_k$ and then reads convergence off
boundedness, and that last step is available only for a *nonnegative* series
([[thm-nonnegative-series-bounded-partial-sums]]). Here the partial sums of
$\sum a_k$ are indeed bounded above, by $0$; they are unbounded below, and the
theorem's conclusion fails for exactly that reason.

## Facts & Assumptions

**Given:** The sequences $a_k := -1/\iota(k+1)$ and $b_k := 0$ for $k \in \mathbb{N}$ ([[def-series]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals $\iota(k+1)$ are positive, so $1/\iota(k+1) > 0$ and $a_k < 0$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] A finite sum of zeros is zero, being the scalar multiple of any finite sum by $0$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L3] A constant sequence converges to its value ([[def-real-limit]]).

[L4] The harmonic series $\sum_{k \ge 1} 1/k$ diverges, and it is the series of the sequence $j \mapsto 1/\iota(j+1)$ ([[ex-harmonic-series-diverges]], [[def-series]]).

[L5] For $c \ne 0$, $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]).

[L6] For a series of nonnegative terms, convergence is equivalent to boundedness above of the partial sums ([[thm-nonnegative-series-bounded-partial-sums]]).

[L7] The refuted claim: $a_k \le b_k$ for all $k$ and convergence of $\sum b_k$ imply convergence of $\sum a_k$.

## Counterexample

**Proof technique:** direct.

1.1 For every $k \in \mathbb{N}$, $a_k = -1/\iota(k+1) < 0 = b_k$, so in particular $a_k \le b_k$. [given, L1]

1.2 The partial sums of $\sum b_k$ are $\sum_{j<n} 0 = 0$ for every $n$, a constant sequence, so $\sum b_k$ converges with sum $0$. [given, L2, L3]

1.3 The sequence $(a_k)$ is $(-1)$ times the sequence $j \mapsto 1/\iota(j+1)$, whose series is the harmonic series and diverges; since $-1 \ne 0$, $\sum a_k$ diverges. [given, L4, L5]

2.1 So the hypotheses of the claim hold for this pair while its conclusion fails, and the claim is false. [step 1.1, step 1.2, step 1.3, L7]

3.1 The genuine comparison test is untouched: it requires $0 \le a_k$ from some index on, and here $a_k < 0$ at every index. [step 1.1, L6] ∎

## Remarks

- **The witness is as degenerate as possible on purpose.** Taking $b_k = 0$ removes every question about the dominating series and isolates the single point at issue: a series bounded above by a convergent one need not converge if it is free to run away downwards. Any negative divergent series would do; this one is the shortest to verify.

- **One-sided boundedness is not convergence.** The partial sums here are $-\sum_{k=1}^{n} 1/k$, bounded above by $0$ and unbounded below. For a nonnegative series that situation cannot arise, which is exactly the content of [[thm-nonnegative-series-bounded-partial-sums]] and the reason the sign hypothesis appears in every comparison statement on the main page.
