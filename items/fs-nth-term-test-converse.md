---
id: fs-nth-term-test-converse
kind: false-statement
title: "FALSE: if $a_k \\to 0$ then $\\sum a_k$ converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-nth-term-test, thm-p-series-rational, def-series, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, def-rational-power, thm-nth-roots-exist, def-integer-power, def-real-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Term test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Term_test"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals, if $(a_k)$ converges to $0$
([[def-real-limit]]) then $\sum a_k$ converges ([[def-series]]).

What is true is the converse implication, [[lem-nth-term-test]]: a convergent
series has terms tending to $0$. The claim above reverses it, and the reversal
fails at the very first place one looks, the harmonic series.

The witness is $a_k := 1/(k+1)$ for $k \in \mathbb{N}$, which is the family
$1/k$, $k \ge 1$, written as a sequence on $\mathbb{N}$; by [[def-series]] the
series of this sequence is exactly $\sum_{k \ge 1} 1/k$.

## Facts & Assumptions

**Given:** The sequence $a_k := 1/\iota(k+1)$, $k \in \mathbb{N}$, where $\iota(k+1)$ is the canonical natural, positive for every $k$ ([[lem-of-naturals-positive]]).

[L1] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]); and $0 < x \le y$ implies $0 < 1/y \le 1/x$ ([[lem-of-inverse-positive]]).

[L2] Convergence to $0$ means: for every rational $\varepsilon > 0$ there is $K$ with $|a_k| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L3] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$; and $k^{1} = \iota(k)$, the rational power at exponent $1$ being the element itself ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L4] The series $\sum_{k \ge 1} x_k$ from the starting index $1$ is by definition the series of the sequence $j \mapsto x_{j+1}$ ([[def-series]]).

[L5] The refuted claim: for every sequence of reals converging to $0$, the associated series converges.

## Refutation

**Proof technique:** direct.

1.1 Every term $a_k = 1/\iota(k+1)$ is a positive real, the canonical naturals $\iota(k+1)$ being positive. [given, L1]

1.2 The series of $(a_k)$ is $\sum_{k \ge 1} 1/k$, the series from starting index $1$ of the family $1/k$, since that series is by definition the series of $j \mapsto 1/\iota(j+1)$. [given, L4]

2.1 The sequence $(a_k)$ converges to $0$: given a rational $\varepsilon > 0$, choose a natural $n \ge 1$ with $1/n < \varepsilon$; then for every $k \ge n$ we have $\iota(k+1) \ge \iota(n)$, hence $|a_k| = 1/\iota(k+1) \le 1/n < \varepsilon$. [step 1.1, L1, L2, choose]

2.2 That series is the case $p = 1$ of the $p$-series, and $p = 1$ does not exceed $1$, so it diverges. [step 1.2, L3]

3.1 So $(a_k)$ converges to $0$ while $\sum a_k$ diverges, and the claim fails for this sequence. [step 2.1, step 2.2, L5]

4.1 The claim is therefore false, and what survives of it is only the converse implication, that a convergent series has null terms. [step 3.1, L5] ∎

## Remarks

- **The failure is not marginal.** The harmonic series has terms tending to $0$ and partial sums diverging to $+\infty$, so no weakening of the false claim to "the partial sums are bounded" would rescue it either. The rate at which the terms tend to $0$ is what decides convergence, and the term test reads no rate at all.

- **The other tests use rate information that the term test ignores.** The
  $p$-series theorem distinguishes $1/k$ from $1/k^2$. The basic root and
  ratio tests do not: for both sequences their relevant limit is the boundary
  value $1$, so those two tests are inconclusive.
