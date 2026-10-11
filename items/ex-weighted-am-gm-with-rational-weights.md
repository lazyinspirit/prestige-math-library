---
id: ex-weighted-am-gm-with-rational-weights
kind: example
title: "A weighted AM-GM computation: $8^{2/3}\\,1^{1/3} \\le \\frac{2}{3}\\cdot 8 + \\frac{1}{3}\\cdot 1$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weighted-am-gm-rational, def-rational-power, lem-rational-power-laws, lem-finite-sum-laws, thm-nth-roots-exist, lem-of-q-embeds]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
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
      locator: "Chapter 2 §2.4, the unweighted n-term AM-GM statement with its equality clause (proof referred to Steele), printed p. 27. The weighted computation uses the proved local rational-weight supplier."
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 1 §1.2.5, Exercise 1.2.7 (two-term case), printed p. 34"
---

## Example

Take $n := 2$, $x_0 := 8$, $x_1 := 1$ and the rational weights $w_0 := 2/3$,
$w_1 := 1/3$, so that $w_0 + w_1 = 1$ as real numbers. Then
[[thm-weighted-am-gm-rational]] gives

$$8^{2/3}\cdot 1^{1/3} \;\le\; \tfrac{2}{3}\cdot 8 + \tfrac{1}{3}\cdot 1,$$

where the left-hand side is $4$ and the right-hand side is $17/3$; so
$4 < 17/3$ and the inequality is strict here. With $x_0 := x_1 := 8$ instead,
both sides equal $8$, so the bound is attained by a constant list.

## Facts & Assumptions

**Given:** The list $x_0 := 8$, $x_1 := 1$ for the displayed computation, the rational weights $w_0 := 2/3$, $w_1 := 1/3$, and the constant list $x_0 := x_1 := 8$ for the second display.

[L1] Weighted AM-GM ([[thm-weighted-am-gm-rational]]): for $n \ge 1$, reals $x_k > 0$ and rationals $w_k \ge 0$ summing to $1$ when read as real numbers, one has $\prod_{k<n} x_k^{w_k} \le \sum_{k<n} w_k x_k$, with the rational powers of [[def-rational-power]].

[L2] Rational powers and roots ([[def-rational-power]], [[thm-nth-roots-exist]]): $8^{1/3} = 2$ and $1^{1/3} = 1$, since $2^{3} = 8$, $1^{3} = 1$ and both $2, 1$ are nonnegative; and $8^{2/3} = \big(8^{1/3}\big)^{2} = 4$ at the representative $2/3$.

[L3] Rational power laws ([[lem-rational-power-laws]]): $a^{r+s} = a^{r}a^{s}$ and $a^{1} = a$ for $a > 0$ and rationals $r, s$; in particular $8^{2/3}\,8^{1/3} = 8^{1} = 8$.

[L4] Finite sums ([[lem-finite-sum-laws]]): for $n = 2$, $\sum_{k<2} c_k = c_0 + c_1$, sums scale, and additivity holds, so $\sum_{k<2} w_k x_k = w_0x_0 + w_1x_1$.

[L5] The embedding of $\mathbb{Q}$ ([[lem-of-q-embeds]]): the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is an injective field homomorphism, so the rationals $2/3$ and $1/3$, read as real numbers, satisfy $2/3 + 1/3 = 1$.

## Verification

**Proof technique:** direct.

1.1 The hypotheses of [L1] hold for the chosen data: $n = 2 \ge 1$, $x_0 = 8 > 0$ and $x_1 = 1 > 0$, both weights $2/3, 1/3$ are rationals $\ge 0$, and read as real numbers they satisfy $2/3 + 1/3 = 1$ by [L5]. [L1, L5, algebra]

1.2 The left-hand factors: $8^{1/3} = 2$ and $8^{2/3} = \big(8^{1/3}\big)^{2} = 4$, while $1^{1/3} = 1$, all by [L2], so $8^{2/3}\cdot 1^{1/3} = 4$. [L2, algebra]

1.3 The right-hand side: $(2/3)\cdot 8 + (1/3)\cdot 1 = 16/3 + 1/3 = 17/3$ by [L4] and field arithmetic. [L4, algebra]

1.4 The constant-list case: with $x_0 = x_1 = 8$ the weights still satisfy the hypotheses of [L1], and the left-hand side is $8^{2/3}8^{1/3} = 8^{2/3+1/3} = 8^{1} = 8$ by [L3], while the right-hand side is $(2/3)\cdot 8 + (1/3)\cdot 8 = 8$ by [L4], so the inequality holds with equality there. [L1, L3, L4, algebra]

2.1 Applying [L1] to the chosen data, licensed by step 1.1, gives $8^{2/3}\cdot 1^{1/3} \le (2/3)\cdot 8 + (1/3)\cdot 1$, and substituting the evaluations of step 1.2 and step 1.3 gives $4 \le 17/3$, which is strict because $4 = 12/3 < 17/3$; the inequality is therefore strict at this list, and no equality characterisation of [L1] is claimed. [step 1.1, step 1.2, step 1.3, L1, algebra]

3.1 The displayed computation is verified with the strict outcome $4 < 17/3$ (step 2.1), and the constant list shows the bound can be attained (step 1.4); both computations check the hypotheses of the weighted theorem explicitly, as step 1.1 records. [step 2.1, step 1.4, L1] ∎
