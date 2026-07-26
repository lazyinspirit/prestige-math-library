---
id: ex-condensation-applied
kind: example
title: "Condensation reduces $\\sum 1/k^p$ to a geometric series with ratio $2^{1-p}$"
status: published
origin: session
deps: [thm-cauchy-condensation, thm-p-series-rational, thm-geometric-series, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, def-series, def-integer-power, thm-nth-roots-exist, lem-of-naturals-positive, lem-of-inverse-positive, def-monotone-sequence]
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
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
pipeline_run: null
---

## Example

Let $p \in \mathbb{Q}$ with $p > 0$. Condensation ([[thm-cauchy-condensation]])
applied to the family $a_k = 1/k^{p}$, $k \ge 1$, produces a **geometric series
of ratio $2^{\,1-p}$**:

$$2^{j} a_{2^{j}} \;=\; 2^{j}\big(2^{j}\big)^{-p} \;=\; 2^{\,(1-p)j} \;=\; \big(2^{\,1-p}\big)^{j} \qquad (j \in \mathbb{N}).$$

So the whole $p$-series family collapses onto the single question of when a
geometric ratio is below $1$, and the threshold $p = 1$ is where
$2^{\,1-p} = 2^{0} = 1$. That is the computation behind
[[thm-p-series-rational]], displayed here on its own and instantiated at three
exponents:

| $p$ | ratio $2^{\,1-p}$ | condensed series | verdict |
|---|---|---|---|
| $1/2$ | $2^{1/2}$ | diverges, ratio $> 1$ | $\sum_{k \ge 1} k^{-1/2}$ diverges |
| $1$ | $1$ | diverges, terms constantly $1$ | $\sum_{k \ge 1} 1/k$ diverges |
| $2$ | $1/2$ | converges, sum $2$ | $\sum_{k \ge 1} 1/k^{2}$ converges |

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := \iota(k)^{-p}$ for naturals $k \ge 1$ ([[def-rational-power]], [[lem-of-naturals-positive]]).

[L1] Condensation: for a nonnegative nonincreasing family from $1$, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L2] Rational powers of a positive base: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$, $a^{r} > 0$; the integer power agrees with the rational power at an integer exponent, since $a^{1/1} = a$; and $a^{0} = 1$ ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L3] Monotonicity of rational powers: for $a > 1$ and rationals $r < s$, $a^{r} < a^{s}$; and for rational $t > 0$, $0 < a < b$ implies $a^{t} < b^{t}$ ([[lem-rational-power-monotone]]).

[L4] The geometric series $\sum_{j \ge 0} r^{j}$ converges exactly when $|r| < 1$, with sum $1/(1-r)$ ([[thm-geometric-series]]).

[L5] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]]); the canonical naturals are positive and order preserving, and reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

## Verification

**Proof technique:** direct.

1.1 Each $a_k = \iota(k)^{-p}$ is positive, and $a_j \ge a_k$ whenever $1 \le j \le k$, since $\iota(j)^{p} \le \iota(k)^{p}$ for $p > 0$ and reciprocation reverses the order; so condensation applies. [given, L3, L5, L1]

1.2 For every $j \in \mathbb{N}$: $2^{j} a_{2^{j}} = 2^{j}\big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$, reading each integer exponent as a rational one. [L2, algebra]

2.1 So the condensed series is the geometric series of ratio $r := 2^{\,1-p}$, which is positive; and $r < 1$ exactly when $1 - p < 0$, since $2 > 1$ makes $t \mapsto 2^{t}$ strictly increasing and $2^{0} = 1$. [step 1.2, L2, L3]

3.1 At $p = 2$: the ratio is $2^{-1} = 1/2$, so the condensed series converges with sum $1/(1 - 1/2) = 2$, and $\sum_{k \ge 1} 1/k^{2}$ converges. [step 1.2, step 2.1, L1, L4, L5]

3.2 At $p = 1$: the ratio is $2^{0} = 1$, the condensed terms are constantly $1$, so the condensed series diverges and $\sum_{k \ge 1} 1/k$ diverges. [step 1.2, step 2.1, L1, L4, L5]

3.3 At $p = 1/2$: the ratio is $2^{1/2}$, which exceeds $1$ because $2 > 1$ and $1/2 > 0$; so the condensed series diverges and $\sum_{k \ge 1} k^{-1/2}$ diverges. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 The three verdicts agree with the $p$-series theorem, whose content is exactly step 2.1 together with the geometric threshold. [step 3.1, step 3.2, step 3.3, L5] ∎

## Remarks

- **The sum of the condensed series is not the sum of the original.** At $p = 2$ the condensed series sums to $2$ while $\sum_{k \ge 1} 1/k^{2}$ sums to $\pi^{2}/6$. Condensation preserves the *fact* of convergence and nothing numerical, which is visible in its proof: the two estimates there differ by a factor $2$.

- **Why the exponent has to be rational.** The identity in step 1.2 is a chain of rational-exponent laws, and $2^{\,1-p}$ is meaningful here only because $1-p$ is rational ([[def-rational-power]]). The same computation with a real exponent is the standard one, and it waits for the exponential function.
