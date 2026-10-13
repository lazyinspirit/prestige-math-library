---
id: cex-weighted-am-gm-needs-normalized-nonnegative-weights
kind: counterexample
title: "Weighted AM-GM needs nonnegative weights summing to $1$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weighted-am-gm-rational, def-rational-power, lem-rational-power-laws, lem-of-q-embeds, lem-of-inverse-positive, cor-of-one-positive, def-integer-power, def-rationals]
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
      locator: "Chapter 2 §2.4, the unweighted n-term AM-GM statement, printed p. 27; this is background only, not a weighted theorem or a repeated-entries proof. Both weighted failure witnesses are verified locally against the proved rational-weight supplier."
---

## Statement refuted

**Refuted claim:** the inequality
$\prod_{k<n} x_k^{w_k} \le \sum_{k<n} w_k x_k$ of
[[thm-weighted-am-gm-rational]] holds for all positive $x_k$ and all rational
weights $w_k$ of sum $1$, or for all rational weights whatsoever.

Two witnesses. (i) For $x_0 := x_1 := 4$ and $w_0 := w_1 := 1$, whose sum is
$2 \ne 1$: the left-hand side is $4^{1}\cdot 4^{1} = 16$ and the right-hand side
is $1\cdot 4 + 1\cdot 4 = 8$, so $16 > 8$. (ii) For $x_0 := 4$, $x_1 := 1/4$,
$w_0 := 2$ and $w_1 := -1$, whose sum is $1$ but which contains a negative
weight: the left-hand side is $4^{2}\cdot(1/4)^{-1} = 16\cdot 4 = 64$ and the
right-hand side is $2\cdot 4 + (-1)\cdot(1/4) = 8 - 1/4 = 31/4$, so
$64 > 31/4$. Both hypotheses on the weights — nonnegativity and total mass $1$
— are therefore load-bearing.

## Facts & Assumptions

**Given:** The two witness systems: $x_0 = x_1 = 4$ with $w_0 = w_1 = 1$, and $x_0 = 4$, $x_1 = 1/4$ with $w_0 = 2$, $w_1 = -1$.

[L1] Weighted AM-GM ([[thm-weighted-am-gm-rational]]): for $n \ge 1$, reals $x_k > 0$ and rationals $w_k \ge 0$ summing to $1$ when read as real numbers, one has $\prod_{k<n} x_k^{w_k} \le \sum_{k<n} w_k x_k$; both hypotheses on the weights are part of the statement.

[L2] Rational and integer powers ([[def-rational-power]], [[lem-rational-power-laws]], [[def-integer-power]]): for positive bases $a^{1} = a$, and for $a \ne 0$ and $j \ge 1$, $a^{-j} = \big(a^{j}\big)^{-1}$; hence $4^{1} = 4$ and $(1/4)^{-1} = \big((1/4)^{1}\big)^{-1} = 4$, because $(1/4)\cdot 4 = 1$ exhibits the inverse.

[L3] The embedding of $\mathbb{Q}$ ([[lem-of-q-embeds]]): the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is an injective field homomorphism, so the rationals $1$, $2$, $-1$ and $1/4$ keep their values and their order when read as real numbers.

[L4] Positivity and order ([[cor-of-one-positive]], [[lem-of-inverse-positive]]): $1 > 0$, so $2 = 1+1 > 0$ and $4 > 0$; the inverse of a positive element is positive; and the order arithmetic of $\mathbb{R}$ compares the fractions involved.

[L5] Rationals ([[def-rationals]]): $1$, $2$, $-1$ and $1/4$ are rationals, and $-1 < 0$; the negative weight of witness (ii) is a legitimate rational, and its sum with $2$ is $1$ in $\mathbb{Q}$.

## Counterexample

**Proof technique:** direct.

1.1 Witness (i), dropping the total-mass hypothesis: the weights $w_0 = w_1 = 1$ are rationals $\ge 0$ with $1 + 1 = 2 \ne 1$ as real numbers, so the theorem [L1] does not apply; nevertheless the displayed expressions are defined and evaluate as $4^{1}\cdot 4^{1} = 16$ and $1\cdot 4 + 1\cdot 4 = 8$ by [L2], [L3] and field arithmetic, and $16 > 8$ by [L4], so the conclusion of [L1] fails for this positive list even though every weight is nonnegative. [L2, L3, L4, algebra]

1.2 Witness (ii), dropping nonnegativity: the weights $w_0 = 2$ and $w_1 = -1$ are rationals by [L5] with $2 + (-1) = 1$ as real numbers, so the total-mass hypothesis holds but the weight $-1$ is negative and [L1] does not apply; the two bases $4$ and $1/4$ are positive, the left-hand side is $4^{2}\cdot(1/4)^{-1} = 16\cdot 4 = 64$ by [L2], and the right-hand side is $2\cdot 4 + (-1)\cdot(1/4) = 8 - 1/4 = 31/4$ by [L3] and field arithmetic, and $64 = 256/4 > 31/4$ by [L4], so the conclusion of [L1] fails here even with total weight $1$. [L2, L3, L4, L5, algebra]

2.1 Together the two witnesses show that each hypothesis on the weights is load-bearing: (i) refutes the version with nonnegative weights of sum other than $1$ (step 1.1) and (ii) refutes the version with total mass $1$ but a negative weight (step 1.2); in both cases every base is positive and every power is a legitimate rational power or integer power evaluated by [L2], so the failures are failures of the inequality and not of definedness, exactly as [L1]'s statement anticipates. [step 1.1, step 1.2, L1, L2] ∎
