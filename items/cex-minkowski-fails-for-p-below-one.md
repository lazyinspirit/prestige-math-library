---
id: cex-minkowski-fails-for-p-below-one
kind: counterexample
title: "Minkowski fails for $p = 1/2$: the hypothesis $p \\ge 1$ is load-bearing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minkowski-finite, def-rational-power, lem-rational-power-laws, def-finite-sum, lem-finite-sum-laws, def-abs-value, lem-of-abs-value, cor-of-one-positive, thm-nth-roots-exist, def-integer-power]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
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
      locator: "Chapter 13 §13.7, Theorem 13.96 and its standing hypothesis 1 < p < ∞, printed pp. 298-299"
---

## Statement refuted

**Refuted claim:** the inequality of [[thm-minkowski-finite]] holds for every
positive rational $p$.

Witness: $p := 1/2$, with the two-entry lists $x_0 := 1$, $x_1 := 0$ and
$y_0 := 0$, $y_1 := 1$. The left-hand side
$\big(\sum_{k<2}|x_k+y_k|^{1/2}\big)^{1/(1/2)} = \big(\sum_{k<2}|x_k+y_k|^{1/2}\big)^{2}$
is $(1+1)^{2} = 4$, while the right-hand side
$\big(\sum_{k<2}|x_k|^{1/2}\big)^{2} + \big(\sum_{k<2}|y_k|^{1/2}\big)^{2}$ is
$1 + 1 = 2$; so the inequality fails. Every expression is defined: $1/2$ is a
positive rational, $|z|^{1/2} = \sqrt{|z|}$ is the rational power of
[[def-rational-power]] with its supplementary clause $0^{1/2} = 0$, and the
outer exponent $1/p = 2$ is an integer power.

## Facts & Assumptions

**Given:** The rational exponent $p := 1/2$, its reciprocal $1/p = 2 = 1/(1/2)$, and the lists $x_0 = 1$, $x_1 = 0$, $y_0 = 0$, $y_1 = 1$.

[L1] Minkowski's inequality ([[thm-minkowski-finite]]): for rational $p \ge 1$ and reals $a_k, b_k$, $\big(\sum_{k<n}|a_k+b_k|^{p}\big)^{1/p} \le \big(\sum_{k<n}|a_k|^{p}\big)^{1/p} + \big(\sum_{k<n}|b_k|^{p}\big)^{1/p}$; the hypothesis $p \ge 1$ is part of the statement.

[L2] Two-entry sums ([[def-finite-sum]], [[lem-finite-sum-laws]]): $\sum_{k<2} c_k = c_0 + c_1$.

[L3] Absolute values ([[lem-of-abs-value]], [[def-abs-value]]): $|x| \ge 0$, $|0| = 0$, $|1| = 1$, and $|x| = 0$ only for $x = 0$.

[L4] Rational powers and roots ([[def-rational-power]], [[thm-nth-roots-exist]], [[lem-rational-power-laws]]): $1^{1/2} = 1$ and $0^{1/2} = 0$. For a nonnegative base $a$ and a positive rational $r = m/N$ with $m, N \ge 1$, $a^{r} = (a^{1/N})^{m}$, a root followed by an integer power. In particular $1/(1/2) = 2$, so for the nonnegative sums used below the outer power is the integer square.

[L5] Integer powers and order ([[def-integer-power]], [[cor-of-one-positive]]): $2^{2} = 4$ by the recursion clause, $1 > 0$, and adding inequalities gives $4 = 2+2 > 2$.

## Counterexample

**Proof technique:** direct.

1.1 The left-hand side: by [L2] the sums of the entries are $x_0+y_0 = 1$ and $x_1+y_1 = 1$, so $|x_k+y_k|^{1/2} = 1$ for $k = 0, 1$ by [L3] and [L4] and $\sum_{k<2}|x_k+y_k|^{1/2} = 1 + 1 = 2$; raising to the exponent $1/(1/2) = 2$ by [L4] gives the left-hand value $2^{2} = 4$ by [L5]. [L2, L3, L4, L5, algebra]

1.2 The right-hand side: $\sum_{k<2}|x_k|^{1/2} = 1^{1/2} + 0^{1/2} = 1 + 0 = 1$ and $\sum_{k<2}|y_k|^{1/2} = 0^{1/2} + 1^{1/2} = 0 + 1 = 1$ by [L2], [L3] and [L4], and each is raised to the power $2$ by [L4], so the right-hand value is $1^{2} + 1^{2} = 1 + 1 = 2$. [L2, L3, L4, algebra]

1.3 The comparison: $4 > 2$ by [L5]. [L5, algebra]

2.1 Conclusion: the inequality of [L1] fails at $p = 1/2$ with the displayed lists, since the left-hand value $4$ of step 1.1 exceeds the right-hand value $2$ of step 1.2 by step 1.3; every expression is defined — the inner powers use the rational power at the positive exponent $1/2$ together with the supplementary clause $0^{1/2} = 0$, and the outer exponent $1/p = 2$ is an integer power — so this is a genuine failure of the inequality for $p < 1$ and not an artefact of undefined powers, and the hypothesis $p \ge 1$ of [L1] is load-bearing. [step 1.1, step 1.2, step 1.3, L1, L4] ∎
