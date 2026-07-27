---
id: cex-abel-test-needs-monotonicity
kind: counterexample
title: "With $a_j = (-1)^{j}/\\sqrt{j+1}$ convergent and $b_j = (-1)^{j}$ bounded but not monotone, $\\sum a_j b_j = \\sum 1/\\sqrt{j+1}$ diverges"
status: published
origin: session
deps: [thm-abel-test, thm-alternating-series-test, thm-p-series-rational, thm-of-square-roots, thm-nth-roots-exist, def-rational-power, lem-alternating-sequence, def-monotone-sequence, def-bounded-set, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-series, def-real-limit]
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
    - title: "Abel's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%27s_test"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\sum a_j$ converges ([[def-series]]) and $(b_j)$ is
bounded ([[def-bounded-set]]), then $\sum a_j b_j$ converges.

This is [[thm-abel-test]] with the word *monotone* deleted from its hypothesis on
$(b_j)$. Deleting it destroys the theorem.

Let $(\varepsilon_j)$ be the alternating sequence
([[lem-alternating-sequence]]) and put

$$a_j := \frac{\varepsilon_j}{\sqrt{\iota(j+1)}}, \qquad b_j := \varepsilon_j .$$

Then $\sum a_j$ converges by the alternating series test, $(b_j)$ is bounded with
$|b_j| = 1$, and

$$a_j b_j \;=\; \frac{\varepsilon_j^{\,2}}{\sqrt{\iota(j+1)}} \;=\; \frac{1}{\sqrt{\iota(j+1)}},$$

so $\sum_j a_j b_j$ is $\sum_{k \ge 1} 1/k^{1/2}$, the $p$-series at $p = 1/2$,
which diverges ([[thm-p-series-rational]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$, the sequence $\beta_j := 1/\sqrt{\iota(j+1)}$, and $a_j := \varepsilon_j \beta_j$, $b_j := \varepsilon_j$.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{j+1} = -\varepsilon_j$, $|\varepsilon_j| = 1$ ([[lem-alternating-sequence]]).

[L2] Square roots: every $t \ge 0$ has a unique $\sqrt t \ge 0$ with $(\sqrt t)^{2} = t$, and $\sqrt{t} = t^{1/2}$ in the notation of rational powers ([[thm-of-square-roots]], [[thm-nth-roots-exist]], [[def-rational-power]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L5] $\sum_{k\ge1}1/k^{p}$ converges if and only if $p > 1$; and $\sum_{k\ge1}x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-series]]).

[L6] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $x^{2} = |x|^{2}$ ([[lem-of-abs-value]]).

[L7] Abel's test, whose hypothesis on the second factor is that it be monotone and bounded ([[thm-abel-test]], [[def-monotone-sequence]], [[def-bounded-set]]).

## Counterexample

**Proof technique:** direct.

1.1 Square roots are strictly increasing on the nonnegative reals: if $0 \le u < v$ and $\sqrt u \ge \sqrt v$ then $u = (\sqrt u)^{2} \ge (\sqrt v)^{2} = v$, which is false. [L2]

1.2 The sequence $(b_j) = (\varepsilon_j)$ is bounded, $|b_j| = 1$ for every $j$. [L1, L6]

1.3 It is not monotone: $b_0 = 1 > b_1 = -1$, so it is not nondecreasing, and $b_1 = -1 < b_2 = 1$, so it is not nonincreasing. [L1]

2.1 Each $\beta_j = 1/\sqrt{\iota(j+1)}$ is positive and $(\beta_j)$ is nonincreasing, since $0 < \iota(j+1) < \iota(j+2)$ gives $0 < \sqrt{\iota(j+1)} < \sqrt{\iota(j+2)}$. [step 1.1, L2, L3]

2.2 $(\beta_j)$ converges to $0$: given a rational $\varepsilon > 0$, fix $n \ge 1$ with $1/\iota(n) < \varepsilon^{2}$; for $j \ge n$ one has $\iota(j+1) \ge \iota(n) > (1/\varepsilon)^{2}$, so $\sqrt{\iota(j+1)} > 1/\varepsilon$ and $\beta_j < \varepsilon$. [step 1.1, L2, L3]

3.1 By the alternating series test $\sum_j a_j = \sum_j \varepsilon_j \beta_j$ converges. [step 2.1, step 2.2, L4]

3.2 For every $j$, $a_j b_j = \varepsilon_j^{\,2}\beta_j = |\varepsilon_j|^{2}\beta_j = \beta_j = 1/\sqrt{\iota(j+1)}$. [step 2.1, L1, L6]

4.1 The series $\sum_j \beta_j$ is $\sum_{k \ge 1} 1/\sqrt{k} = \sum_{k\ge1} 1/k^{1/2}$, the $p$-series at $p = 1/2$; since $1/2 > 1$ is false, it diverges. [step 3.2, L2, L5]

5.1 So $\sum a_j$ converges and $(b_j)$ is bounded, while $\sum a_j b_j$ diverges: the refuted claim fails, and the hypothesis of [L7] that is missing is precisely monotonicity of $(b_j)$. [step 3.1, step 1.2, step 1.3, step 4.1, L7] ∎

## Remarks

- **The failure is not a matter of size.** The factor $(b_j)$ has absolute value exactly $1$ at every index, so it neither grows nor shrinks; what it does is cancel the alternation of $(a_j)$, and the alternation was the only reason $\sum a_j$ converged. A monotone factor cannot do that, which is the content of [[thm-abel-test]].

- **The exponent $1/2$ is chosen so that both halves work.** A faster decay, such as $1/\iota(j+1)$, would still give a divergent product series, while a faster one still, such as $1/\iota(j+1)^{2}$, would give an absolutely convergent $\sum a_j$, for which no bounded factor can destroy convergence. The witness has to sit in the conditionally convergent range, and $p = 1/2$ does.

- **The same series appears again on this page.** [[cex-cauchy-product-of-convergent-series-diverges]] uses $\sum \varepsilon_k/\sqrt{\iota(k+1)}$ as both factors of a Cauchy product, for the same underlying reason: its terms are just barely small enough to converge with signs and not without.
