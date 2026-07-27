---
id: ex-abel-test-applied
kind: example
title: "$\\sum_{j \\ge 0} (-1)^{j}\\,(j+3)/(j+1)^{2}$ converges, by Abel's test with the monotone bounded factor $(j+3)/(j+1)$"
status: published
origin: session
deps: [thm-abel-test, ex-alternating-harmonic-series, thm-alternating-series-test, def-monotone-sequence, cor-monotone-converges-iff-bounded, lem-alternating-sequence, lem-of-inverse-positive, lem-of-naturals-positive, def-integer-power, lem-power-laws, def-bounded-set, def-series, def-real-limit]
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
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
pipeline_run: null
---

## Example

Put

$$a_j := \frac{(-1)^j}{\iota(j+1)}, \qquad b_j := \frac{\iota(j+3)}{\iota(j+1)} \qquad (j \in \mathbb{N}),$$

so that

$$a_j b_j \;=\; \frac{(-1)^j\,\iota(j+3)}{\iota(j+1)^{2}} .$$

Then $\sum_j a_j$ is the alternating harmonic series, which converges
([[ex-alternating-harmonic-series]]), while $(b_j)$ is nonincreasing
([[def-monotone-sequence]]) and bounded, with $1 < b_j \le 3$. By Abel's test
([[thm-abel-test]]) the series

$$\sum_{j \ge 0} \frac{(-1)^{j}\,(j+3)}{(j+1)^{2}}$$

converges.

**Neither of the two earlier tests reaches it as directly.**
[[thm-alternating-series-test]] would require the sequence
$\iota(j+3)/\iota(j+1)^{2}$ to be nonincreasing, which is true but is an extra
computation; [[thm-dirichlet-test]] would require a factor tending to $0$, and
$b_j \to 1 \ne 0$. Abel's test is designed for exactly this shape: a convergent
series multiplied by a monotone bounded factor.

## Facts & Assumptions

**Given:** The sequences $a_j = (-1)^j/\iota(j+1)$ and $b_j = \iota(j+3)/\iota(j+1)$.

[L1] The alternating harmonic series $\sum_j a_j$ converges ([[ex-alternating-harmonic-series]], [[thm-alternating-series-test]], [[lem-alternating-sequence]]).

[L2] The canonical naturals are positive for $n \ge 1$ and strictly increasing, and $\iota(m+n) = \iota(m)+\iota(n)$; reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L3] Abel's test: if $\sum a_j$ converges and $(b_j)$ is monotone and bounded then $\sum a_j b_j$ converges ([[thm-abel-test]], [[def-monotone-sequence]], [[cor-monotone-converges-iff-bounded]], [[def-bounded-set]], [[def-series]], [[def-real-limit]]).

[L4] Integer powers: $x^{2} = x\cdot x$ ([[def-integer-power]], [[lem-power-laws]]).

## Verification

**Proof technique:** direct.

1.1 For every $j$, $\iota(j+3) = \iota(j+1) + 2$, so $b_j = 1 + 2/\iota(j+1)$, the canonical natural $\iota(j+1)$ being positive. [given, L2]

1.2 For every $j$, $a_j b_j = \dfrac{(-1)^j}{\iota(j+1)}\cdot\dfrac{\iota(j+3)}{\iota(j+1)} = \dfrac{(-1)^j \iota(j+3)}{\iota(j+1)^{2}}$. [given, L4]

2.1 The sequence $(b_j)$ is nonincreasing: $0 < \iota(j+1) < \iota(j+2)$ gives $2/\iota(j+2) < 2/\iota(j+1)$, hence $b_{j+1} < b_j$. [step 1.1, L2]

3.1 The sequence $(b_j)$ is bounded, with $1 < b_j \le b_0 = 1 + 2 = 3$: the lower bound because $2/\iota(j+1) > 0$, the upper because $(b_j)$ is nonincreasing. [step 1.1, step 2.1, L2]

4.1 By [L1] the series $\sum_j a_j$ converges, and by step 2.1 and step 3.1 the sequence $(b_j)$ is monotone and bounded; so by Abel's test $\sum_j a_j b_j$ converges. [step 2.1, step 3.1, L1, L3]

5.1 By step 1.2 that series is $\sum_{j\ge0}(-1)^j(j+3)/(j+1)^{2}$, which therefore converges. [step 1.2, step 4.1] ∎

## Remarks

- **Boundedness alone would not do.** [[cex-abel-test-needs-monotonicity]] takes a convergent series and a bounded factor that is not monotone, and the product series diverges. Here monotonicity of $(b_j)$ is what step 2.1 supplies, and it is the hypothesis doing the work.

- **The limit of the factor is $1$, not $0$, and that is the point.** Since $2/\iota(j+1) \to 0$, the factor tends to $1$, so [[thm-dirichlet-test]] does not apply to $(b_j)$ directly. Abel's test converts this into Dirichlet's by writing $b_j = (b_j - 1) + 1$, which is exactly what its proof does.

- **The series converges conditionally.** Its terms in absolute value are $\iota(j+3)/\iota(j+1)^{2} \ge 1/\iota(j+1)$, so the series of absolute values dominates the harmonic series; nothing below needs this, and it is recorded to place the example alongside [[ex-alternating-harmonic-series]] rather than alongside [[ex-absolutely-convergent-rearranged-freely]].
