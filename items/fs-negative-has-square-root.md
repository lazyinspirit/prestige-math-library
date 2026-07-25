---
id: fs-negative-has-square-root
kind: false-statement
title: "FALSE: every real number has a real square root"
status: draft
origin: session
deps: [thm-of-square-roots, lem-of-square-positive, thm-nth-roots-exist, def-complete-ordered-field, def-ordered-field, def-integer-power, cor-of-one-positive, cor-of-neg-one-squared, lem-of-sign-rules, lem-of-mult-neg, lem-power-laws, lem-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

**False claim:** every real number has a real square root, that is, for every
$x \in \mathbb{R}$ there exists $y \in \mathbb{R}$ with $y^{2} = x$.

The true statement is [[thm-of-square-roots]], which produces a square root only
for $x \ge 0$, and its generalisation [[thm-nth-roots-exist]], which produces an
$n$-th root only for $x \ge 0$. The nonnegativity hypothesis in both is load
bearing, not decoration.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]), with integer powers as in [[def-integer-power]].

[A1] Every square is nonnegative: $y^{2} > 0$ for $y \ne 0$ and $0^{2} = 0$, so $y^{2} \ge 0$ for every $y \in \mathbb{R}$ ([[lem-of-square-positive]]).

[A2] $1 > 0$, hence $-1 < 0$; and by trichotomy no element satisfies both $z \ge 0$ and $z < 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[A3] Nonnegative reals do have roots: for $a \ge 0$ and $n \ge 1$ there is a unique $a^{1/n} \ge 0$ with $\big(a^{1/n}\big)^{n} = a$ ([[thm-nth-roots-exist]], [[thm-of-square-roots]]).

[A4] Sign arithmetic for powers: $(-u)^{n} = (-1)^{n} u^{n}$, $(-1)^{2} = 1$, hence $(-1)^{n} = -1$ for odd $n$ and $(-1)^{n} = 1$ for even $n$ ([[lem-power-laws]], [[cor-of-neg-one-squared]], [[lem-of-mult-neg]], [[lem-of-sign-rules]]).

[A5] $x \mapsto x^{n}$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$ ([[lem-power-monotone]]).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that every real has a real square root; applying this to $-1 \in \mathbb{R}$ produces $y \in \mathbb{R}$ with $y^{2} = -1$. [assume-contra, given]

1.2 Odd roots of negatives, by contrast, do exist, so the failure is genuinely about even exponents: for odd $n$ and $a < 0$ the element $x := -\,(-a)^{1/n}$ satisfies $x^{n} = (-1)^{n}\big((-a)^{1/n}\big)^{n} = -(-a) = a$; and for odd $n$ the map $x \mapsto x^{n}$ is a bijection of $\mathbb{R}$ onto itself, being strictly increasing on the nonnegatives by [A5], carrying negatives to negatives by $x^{n} = -(-x)^{n}$, and surjective by the displayed formula together with [A3]. [A3, A4, A5]

2.1 By [A1] the element $y^{2}$ is nonnegative, so $-1 = y^{2} \ge 0$; but $-1 < 0$ by [A2], and no element is both $\ge 0$ and $< 0$. [step 1.1, A1, A2]

3.1 The obstruction is exactly the order, and it applies in every ordered field, not only in $\mathbb{R}$: completeness is never used, so no ordered field contains a square root of a negative element, and adjoining one, as happens in $\mathbb{C}$, necessarily destroys the order. [step 2.1, A1, A2]

4.1 The assumption of step 1.1 therefore fails: there is no real $y$ with $y^{2} = -1$, so the claim that every real has a real square root is false, and the correct statements are [A3] with its hypothesis $a \ge 0$ kept. [step 2.1, step 3.1, step 1.2, step 1.1, discharge-contradiction] ∎
