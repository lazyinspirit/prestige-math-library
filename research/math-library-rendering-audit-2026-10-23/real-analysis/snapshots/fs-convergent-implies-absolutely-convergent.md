---
id: fs-convergent-implies-absolutely-convergent
kind: false-statement
title: "FALSE: every convergent series converges absolutely"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-alternating-series-test, thm-p-series-rational, lem-alternating-sequence, def-monotone-sequence, def-series, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-real-limit]
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
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

**False claim:** for every sequence $(a_k)$ of reals, if $\sum a_k$ converges
([[def-series]]) then $\sum a_k$ converges absolutely
([[def-absolute-and-conditional-convergence]]).

What is true is the converse, [[lem-absolute-convergence-implies-convergence]]:
absolute convergence implies convergence. The claim above reverses it, and the
reversal fails at the standard witness, the alternating harmonic series.

Let $(\varepsilon_j)$ be the alternating sequence ([[lem-alternating-sequence]]),
usually written $\varepsilon_j = (-1)^j$, and put

$$a_j \;:=\; \frac{\varepsilon_j}{\iota(j+1)} \qquad (j \in \mathbb{N}),$$

with $\iota(j+1)$ the canonical natural ([[lem-of-naturals-positive]]). Then
$\sum a_j$ converges while $\sum |a_j|$ is the harmonic series, which diverges.
So the two notions really are different, and "conditionally convergent" is not an
empty class.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$, the sequence $b_j := 1/\iota(j+1)$, and $a_j := \varepsilon_j b_j$.

[A1] The refuted claim: every convergent series of reals converges absolutely.

[L1] $|\varepsilon_j| = 1$ for every $j$ ([[lem-alternating-sequence]]).

[L2] The canonical naturals $\iota(n)$ are positive for $n \ge 1$ and strictly increasing in $n$ ([[lem-of-naturals-positive]]).

[L3] If $0 < u < v$ then $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

[L4] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L5] The alternating series test: if $(b_j)$ is nonincreasing ([[def-monotone-sequence]]) with $b_j \to 0$, then $\sum \varepsilon_j b_j$ converges ([[thm-alternating-series-test]], [[def-real-limit]]).

[L6] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$, where $k^{p} = \iota(k)^{p}$; at $p = 1$ the rational power is the element itself, $\iota(k)^{1} = \iota(k)$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L7] The series $\sum_{k \ge 1} x_k$ is by definition the series of the sequence $j \mapsto x_{j+1}$ ([[def-series]]).

[L8] Absolute value: $|xy| = |x|\,|y|$ ([[lem-of-abs-value]]).

[L9] Absolute convergence means convergence of $\sum |a_j|$; conditional convergence means convergence of $\sum a_j$ without it ([[def-absolute-and-conditional-convergence]]).

[L10] Absolute convergence implies convergence ([[lem-absolute-convergence-implies-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 Each $b_j = 1/\iota(j+1)$ is a positive real, $\iota(j+1)$ being a positive canonical natural. [given, L2]

1.2 The sequence $(b_j)$ is nonincreasing: $\iota(j+1) < \iota(j+2)$, so $1/\iota(j+2) < 1/\iota(j+1)$. [L2, L3]

2.1 The sequence $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, fix a natural $n \ge 1$ with $1/\iota(n) < \varepsilon$; then for every $j \ge n$ one has $\iota(j+1) \ge \iota(n) > 0$, hence $|b_j| = b_j \le 1/\iota(n) < \varepsilon$. [step 1.1, L2, L3, L4]

2.2 For every $j$, $|a_j| = |\varepsilon_j|\,|b_j| = b_j = 1/\iota(j+1)$. [step 1.1, L1, L8]

3.1 By the alternating series test, $\sum a_j = \sum \varepsilon_j b_j$ converges. [step 1.2, step 2.1, L5]

3.2 The series $\sum_j 1/\iota(j+1)$ is, by the definition of a series from a general starting index, exactly the series $\sum_{k \ge 1} 1/k$, that is the $p$-series at $p = 1$. [step 2.2, L6, L7]

4.1 The $p$-series at $p = 1$ diverges, since $1 > 1$ is false; so $\sum |a_j|$ diverges. [step 3.2, L6]

5.1 Thus $\sum a_j$ converges while $\sum |a_j|$ does not, so $\sum a_j$ converges conditionally and not absolutely, and the claim [A1] fails for this series. [step 3.1, step 4.1, A1, L9]

6.1 The claim is therefore false. What survives of it is only the converse implication, that an absolutely convergent series converges. [step 5.1, A1, L10] ∎

## Remarks

- **The witness is not exotic.** It is the first series a reader meets whose convergence depends on cancellation, and the failure is as large as it can be: the series of absolute values does not merely converge to a different number, it diverges to $+\infty$.

- **Everything on this page turns on this example.** Because the class of conditionally convergent series is nonempty, [[thm-riemann-series-theorem]] has content, and [[cor-unconditional-iff-absolute-in-r]] separates two genuinely different properties rather than restating one. The same series, with its rearrangements, is developed on the companion page.

- **The value of the sum is not asserted here.** The series is proved convergent and nothing more; the classical evaluation needs the logarithm, which is later in the reading order ([[rem-sums-proved-to-exist-but-not-evaluated]]).
