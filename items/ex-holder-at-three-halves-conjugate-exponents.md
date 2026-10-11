---
id: ex-holder-at-three-halves-conjugate-exponents
kind: example
title: "Hölder at the conjugate pair $p = 3$, $q = 3/2$: an exact equality instance and a strict instance"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-finite, def-finite-sum, lem-finite-sum-laws, def-rational-power, lem-rational-power-laws, lem-of-abs-value, def-abs-value]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 13 §13.7, Theorem 13.95 (Hölder's inequality) with Definition 13.93 of the Hölder conjugate, printed pp. 296, 298"
---

## Example

$p := 3$ and $q := 3/2$ are conjugate rationals, $\frac13 + \frac23 = 1$. For
the two-entry lists $a_0 = a_1 = b_0 = b_1 = 1$, [[thm-holder-finite]] reads

$$\sum_{k<2}|a_kb_k| = 2 \;\le\; \Big(\sum_{k<2}|a_k|^{3}\Big)^{1/3}\Big(\sum_{k<2}|b_k|^{3/2}\Big)^{2/3} = 2^{1/3}\,2^{2/3} = 2,$$

so both sides are equal here. For $a = (2,0)$ and $b = (0,3)$ the inequality is
strict: the left-hand side is $0$ and the right-hand side is $2\cdot 3 = 6$.

## Facts & Assumptions

**Given:** The two-entry lists $a_0 = a_1 = b_0 = b_1 = 1$, and the lists $a_0 = 2$, $a_1 = 0$, $b_0 = 0$, $b_1 = 3$.

[L1] Hölder's inequality ([[thm-holder-finite]]): for conjugate rationals $p, q > 1$ and reals $a_k, b_k$, $\sum_{k<n}|a_kb_k| \le \big(\sum_{k<n}|a_k|^{p}\big)^{1/p}\big(\sum_{k<n}|b_k|^{q}\big)^{1/q}$; it records no equality characterization.

[L2] Two-entry sums ([[def-finite-sum]], [[lem-finite-sum-laws]]): $\sum_{k<2} c_k = c_0 + c_1$, sums are additive and scale, and the constant sum is $\sum_{k<2}\lambda = 2\lambda$.

[L3] Absolute values ([[lem-of-abs-value]], [[def-abs-value]]): $|x| \ge 0$, $|x| = 0$ only for $x = 0$, and $|1| = 1$, $|2| = 2$, $|3| = 3$.

[L4] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): $1^{r} = 1$ for every rational $r$; $a^{r+s} = a^{r}a^{s}$ and $\big(a^{r}\big)^{s} = a^{rs}$ for $a > 0$; and $0^{t} = 0$ for rational $t > 0$.

## Verification

**Proof technique:** direct.

1.1 The equality instance: with all four entries equal to $1$, [L2] gives $\sum_{k<2}|a_kb_k| = 1 + 1 = 2$, $\sum_{k<2}|a_k|^{3} = 1 + 1 = 2$ and $\sum_{k<2}|b_k|^{3/2} = 1 + 1 = 2$ by [L3] and [L4]; the right-hand side is $2^{1/3}2^{2/3} = 2^{1/3+2/3} = 2^{1} = 2$ by [L4], so [L1] holds with both sides equal to $2$ here. [L1, L2, L3, L4, algebra]

1.2 The strict instance: for $a = (2,0)$ and $b = (0,3)$, [L2] and [L3] give $\sum_{k<2}|a_kb_k| = |2\cdot 0| + |0\cdot 3| = 0$, while $\sum_{k<2}|a_k|^{3} = 2^{3} + 0^{3} = 8$ and $\sum_{k<2}|b_k|^{3/2} = 0^{3/2} + 3^{3/2}$ by [L4]; hence the right-hand side is $8^{1/3}\big(3^{3/2}\big)^{2/3} = 2\cdot 3^{(3/2)(2/3)} = 2\cdot 3^{1} = 6$ by [L4], and $0 < 6$, so the inequality is strict at this pair. [L1, L2, L3, L4, algebra]

2.1 Summary: at $p = 3$, $q = 3/2$ the inequality of [L1] is an equality on the constant list of ones (step 1.1) and strict on the disjoint-support pair $(2,0)$, $(0,3)$ (step 1.2); since [L1] records no equality characterization, only the two evaluations and the inequality itself are asserted, and the exact agreement in step 1.1 is a computation and not a claimed equality criterion. [step 1.1, step 1.2, L1] ∎
