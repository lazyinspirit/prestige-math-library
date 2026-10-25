---
id: ex-alternating-harmonic-series
kind: example
title: "$\\sum_{j \\ge 0} (-1)^{j}/(j+1)$ converges conditionally, with sum strictly between $1/2$ and $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-alternating-series-test, def-absolute-and-conditional-convergence, thm-p-series-rational, lem-alternating-sequence, def-monotone-sequence, def-series, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, lem-limit-preserves-order, def-real-limit]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Example

Let $(\varepsilon_j)$ be the alternating sequence ([[lem-alternating-sequence]]),
written $\varepsilon_j = (-1)^j$, and put $b_j := 1/\iota(j+1)$, with $\iota(j+1)$
the canonical natural, positive for every $j$ ([[lem-of-naturals-positive]]). The
**alternating harmonic series** is

$$\sum_{j \ge 0} \frac{(-1)^{j}}{j+1} \;=\; \sum_j \varepsilon_j b_j .$$

It **converges conditionally** ([[def-absolute-and-conditional-convergence]]):
it converges, by the alternating series test, while its series of absolute values
is the harmonic series $\sum_{k\ge1} 1/k$, which diverges
([[thm-p-series-rational]]). Writing $S$ for its sum,

$$\tfrac{1}{2} \;<\; \tfrac{7}{12} \;\le\; S \;\le\; \tfrac{5}{6} \;<\; 1 .$$

**The value of $S$ is not asserted.** The classical evaluation is a logarithm and
is not available at this point in the reading order; what is proved here is that
$S$ exists and where it lies. See
[[rem-sums-proved-to-exist-but-not-evaluated]].

This is the series that gives the whole page its content: it is the standard
witness for [[fs-convergent-implies-absolutely-convergent]] and, through
[[thm-riemann-series-theorem]], the source of every rearrangement example below.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e$ and $o$, the sequence $b_j = 1/\iota(j+1)$, and the partial sums $t_n = \sum_{j<n} \varepsilon_j b_j$ ([[def-series]]).

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{j+1} = -\varepsilon_j$, $|\varepsilon_j| = 1$; $e_0 = 0$, $e_{j+1} = e_j + 2$, $o_0 = 1$, $o_{j+1} = o_j + 2$; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The alternating series test: for $(b_j)$ nonincreasing with $b_j \to 0$, $\sum \varepsilon_j b_j$ converges with sum $L$, and $t_{e_j} \le L \le t_{o_j}$ for every $j$ ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L4] $\sum_{k\ge1} 1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; and $\sum_{k\ge1}x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L5] Absolute value: $|xy| = |x|\,|y|$ ([[lem-of-abs-value]]).

[L6] Partial sums: $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Absolute and conditional convergence ([[def-absolute-and-conditional-convergence]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

## Verification

**Proof technique:** direct.

1.1 Every $b_j = 1/\iota(j+1)$ is positive, and $(b_j)$ is nonincreasing, since $0 < \iota(j+1) < \iota(j+2)$. [given, L2]

1.2 By [L1], $e_1 = 2$, $e_2 = 4$, $o_1 = 3$; and by [L6] together with $\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, the first partial sums are $t_1 = b_0 = 1$, $t_2 = 1 - 1/2 = 1/2$, $t_3 = 1/2 + 1/3 = 5/6$ and $t_4 = 5/6 - 1/4 = 7/12$. [L1, L6, algebra]

2.1 $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, take $n \ge 1$ with $1/\iota(n) < \varepsilon$; for $j \ge n$ one has $\iota(j+1) \ge \iota(n) > 0$, so $b_j \le 1/\iota(n) < \varepsilon$. [step 1.1, L2]

2.2 For every $j$, $|\varepsilon_j b_j| = |\varepsilon_j|\,b_j = 1/\iota(j+1)$, and $\sum_j 1/\iota(j+1)$ is the $p$-series $\sum_{k\ge1}1/k$ at $p = 1$, which diverges. [step 1.1, L1, L4, L5]

3.1 By the alternating series test the series converges; write $S$ for its sum, and $t_{e_j} \le S \le t_{o_j}$ holds for every $j$. [step 1.1, step 2.1, L3]

4.1 Taking $j = 2$ in the lower bound and $j = 1$ in the upper bound of step 3.1 gives $7/12 = t_4 = t_{e_2} \le S \le t_{o_1} = t_3 = 5/6$. [step 3.1, step 1.2]

5.1 Since $1/2 < 7/12$ and $5/6 < 1$, the sum satisfies $1/2 < S < 1$. [step 4.1, algebra]

6.1 So the series converges while its series of absolute values diverges: it converges conditionally, with sum strictly between $1/2$ and $1$. [step 3.1, step 5.1, step 2.2, L7] ∎

## Remarks

- **The bracketing is exactly the error bound of the test, used twice.** Any pair of an even-index and an odd-index partial sum brackets $S$, and the further out the pair is taken the tighter the bracket becomes; $t_4$ and $t_3$ are simply the first pair whose values separate $S$ strictly from $1/2$ and from $1$. Taking $t_2 = 1/2$ and $t_1 = 1$ would give only the non-strict bounds.

- **Conditional convergence is a statement about cancellation.** The terms have absolute value $1/(j+1)$ and their sum without signs is infinite; the series converges only because consecutive terms nearly cancel. Everything that follows on this page, that the terms may be reordered to sum to anything at all, is a consequence of exactly that.

- **What the bracket does not say.** It gives no rate and no closed form. Better numerical bounds come from later pairs $t_{e_j}, t_{o_j}$ and cost only arithmetic; the closed form costs the logarithm.
